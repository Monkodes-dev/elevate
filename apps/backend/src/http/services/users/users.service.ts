import prisma from "../../../database/prisma"
import { User } from "@prisma/client"
import { ApplicationError } from "../../../errors/application.error";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import bcrypt from "bcrypt"

export class UserService {
    async getAll() {
        const users = await prisma.user.findMany()

        //if(users.length == 0) throw new ApplicationError("Nenhum colaborador registrado!");
        if (users.length == 0) throw new Error("Nenhum colaborador registrado!");
        const collaboratorsWithoutPassword = users.map((collab) => {
            const thisCollaborator: any = { ...collab };
            delete thisCollaborator.password;
            delete thisCollaborator.idSector;
            delete thisCollaborator.idRole;
            return thisCollaborator;
        });

        return {
            data: collaboratorsWithoutPassword,
            total: collaboratorsWithoutPassword.length,
        };
    }

    async getById(id: string) {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })

        if (!user) throw new Error("Colaborador não encontrado!");

        delete user.password;
        delete user.idSector;
        delete user.idRole;

        return user;
    }

    async create({ password, ...user }: User) {
        try {
            const passwordHash = await bcrypt.hash(password, 12);
            const userCreated = await prisma.user.create({
                data: {
                    ...user,
                    password: passwordHash
                },
            });

            const userResponse = { ...userCreated };

            return userResponse;

        } catch (err) {
            console.log(err)
            if (err instanceof PrismaClientKnownRequestError) {
                switch (err.code) {
                    case "P2002": throw new ApplicationError("E-mail já cadastrado!");
                    case "P2003":
                        if (err.meta?.field_name == "User_idSector_fkey (index)") {
                            throw new ApplicationError("Envie um ID de setor válido.");
                        }
                        if (err.meta?.field_name == "User_idRole_idSector_fkey (index)") {
                            throw new ApplicationError("Envie um ID de papel válido ou do setor correspondente.");
                        }
                }
            }
        }
    }

    public async update(id: string, user: User) {
        try {
            await prisma.user.update({
                where: {
                    id
                },
                data: user
            });

            return {
                status: "success",
                message: "Colaborador atualizado com sucesso"
            };
        } catch (err) {
            throw new ApplicationError("Ocorreu algum erro no servidor", 500);
        }
    }

    public async delete(id: string) {
        try {
            const collaborator = await prisma.user.delete({
                where: {
                    id
                },
            });
            return {
                status: "success",
                message: "Usuário deletado com sucesso.",
                data: collaborator
            };

        } catch (err) {
            if (err instanceof PrismaClientKnownRequestError && err.code == "P2025") {
                throw new ApplicationError("O colaborador a ser deletado não existe.", 404);
            }

            throw new ApplicationError("Tivemos algum erro no servidor!", 500);
        }
    }
}
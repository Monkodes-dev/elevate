import { NextFunction, Request, Response } from "express"
import { ZodError, z } from "zod"
import { ApplicationError } from "../../../errors/application.error";

const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+/g

export default class UserValidator {
    public static readonly CreateUserSchema = z.object({
        name: z.string({required_error: "O nome é um campo obrigatório."})
            .regex(nameRegex, {message: "O nome deve conter apenas letras."})
            .refine((data) => data.split(" ").length !== 1, { message: "É necessário informar nome e sobrenome."}),
        email: z.string().email("É necessário enviar um e-mail válido."),
        description: z.string().optional(),
        profileImage: z.string(),
        phoneNumber: z.string().regex(/\(\d{2}\) \d{4,5}-\d{4}/, {message: "O telefone deve seguir o padrão brasileiro (DDD) 00000-0000."}),
        password: z.string().min(8, {message: "A senha deve ter no mínimo 8 caracteres."}),
    })

    public async validateCreateUserRequest(req: Request, res: Response, next: NextFunction) {
        try {
            const body = UserValidator.CreateUserSchema.parse(req.body);
            req.body = body;
            next();
        } catch (err) {
            if (err instanceof ZodError) {
                throw new Error(err.issues[0].message);
            }
        }
    }
}
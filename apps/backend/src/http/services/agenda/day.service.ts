import prisma from "../../../database/prisma";
import { Day } from "@prisma/client";

export class DayService {

    async getDay(date: Date) {
        const filter = {
            where: {
                date
            }
        }

        const day = await prisma.day.findUnique(filter)
        return day
    }

    async getMany(firtsDate: Date, lastDate: Date) {
        const filter = {
            where: {
                AND: [
                    {
                        date: {
                            gte: firtsDate
                        }
                    },
                    {
                        date: {
                            lte: lastDate
                        }
                    }
                ]
            }
        }

        const selectedDates = prisma.day.findMany(filter)
        return selectedDates
    }

    async createDay(data: Day) {
        const dayExist = await prisma.day.findMany()

        if (!dayExist) {
            return ({ message: "Dia existente" })
        }

        const createdDay = await prisma.day.create({ data })
        return createdDay
    }

    async updateDay(data: Day) {
        const filter = {
            where: {
                date: data.date
            }
        }

        const dayExist = await prisma.day.findUnique(filter)

        if (!dayExist) {
            return ({ message: "Data não encontratada." })
        }
    }

    async deleteDay(data: Day) {
        const filter = {
            where: {
                date: data.date
            }
        }

        const deletedDay = await prisma.day.delete(filter)
        return deletedDay
    }
}
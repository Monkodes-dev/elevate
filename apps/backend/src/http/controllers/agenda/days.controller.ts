import { Day } from "@prisma/client"
import { DayService } from "../../services/agenda/day.service"
import { type Request, type Response } from "express"

const controller = new DayService()

export class DayController {

    public async getFirst(req: Request, res: Response) {
        const data = req.body
        const getDay = await controller.getDay(data.date)

        if (getDay) {
            res.status(200).send(getDay).json()
        }
    }

    public async getMany(req: Request, res: Response) {
        const data = req.body
        const selectedDates = await controller.getMany(data.firtsDate, data.lastDate)

        if (selectedDates.length > 0) {
            res.status(200).send(selectedDates).json()
        }
    }

    public async create(req: Request, res: Response) {
        const data = req.body
        const createdDay = await controller.createDay(data)

        if (createdDay) {
            res.status(201).send(createdDay).json()
        }
    }

    public async update(req: Request, res: Response) {
        const data = req.body
        const updateDay = await controller.updateDay(data)

        res.status(200).send(updateDay).json()
    }

    public async delete(req: Request, res: Response) {
        const data = req.body
        const deletedDay = await controller.deleteDay(data)

        if (deletedDay) {
            res.status(202).send(deletedDay).json()
        }
    }
}

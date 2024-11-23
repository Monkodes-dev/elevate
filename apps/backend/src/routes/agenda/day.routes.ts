import { Router } from "express"
import { DayController } from "../../http/controllers/agenda/days.controller"

const DayRouter = Router()
const controller = new DayController()

DayRouter.post("/", controller.getFirst)
DayRouter.post("/many", controller.getMany)
DayRouter.post("/create", controller.create)
DayRouter.put("/update", controller.update)
DayRouter.delete("/delete", controller.delete)

export default DayRouter

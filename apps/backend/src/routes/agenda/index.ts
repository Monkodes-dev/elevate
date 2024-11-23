import { Router } from "express"

import DayRouter from "./day.routes"
import EventRouter from "./event.routes"

const routes = Router()

routes.use('/day', DayRouter)
routes.use('event', EventRouter)

export default routes
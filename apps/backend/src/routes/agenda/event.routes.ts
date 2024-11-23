import { Router } from "express"
import { EventController } from "../../http/controllers/agenda/events.controller"

const EventRouter = Router()
const controller = new EventController


export default EventRouter
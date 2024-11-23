import express, { NextFunction, Request, Response } from "express"
import Routes from "./routes"
import dotenv from "dotenv"
import { ErrorMiddleware } from "./http/middlewares/error.middleware"
dotenv.config()

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use("/api", Routes)

app.use(ErrorMiddleware)

app.listen(PORT, () => console.log(`API running on port ${PORT} 🚀`));
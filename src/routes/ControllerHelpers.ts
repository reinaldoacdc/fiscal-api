import { ServerError } from "../controllers/http-errors.ts";
import { HttpResponse } from "./ControllerProtocols.ts"


export const handleNoContent = (): HttpResponse => ({
  status: 204,
  body: []
})


export const handleSucess = (data: any): HttpResponse => ({
  status: 200,
  body: data
})

export const serverError = (error: Error): HttpResponse => ({
  status: 500,
  body: new ServerError(error.stack!)
})

export const handleNotFound = (message: string): HttpResponse => ({
  status: 404,
  body: message
})
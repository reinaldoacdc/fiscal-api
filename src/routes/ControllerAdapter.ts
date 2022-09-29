
import { HttpController, HttpRequest } from "./ControllerProtocols.ts"
import { Response } from "../deps.ts";


  export const adaptOakRoute = (controller: HttpController) =>
  async (context: any): Promise<Response> => {
    const request: HttpRequest = {
      headers: context.request.headers,
      query: context.request.url.searchParams,
      params: context.params,
      body: context.request.body
    }

    const response = await controller.handle(request)
    context.response.status = response.status
    context.response.body = response.body
    return context.response
  }  
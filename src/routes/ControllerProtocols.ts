
export interface HttpController {
  handle: (request: HttpRequest) => Promise<HttpResponse>
}


export type HttpRequest = {
  meta?: any
  body?: any
  headers?: any
  params?: any
  query?: any
  files?: any
}

export type HttpResponse = {
  status: number
  body: any
}

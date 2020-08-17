export enum HttpStatusCode {
  noContent = 204,
  unexpected = 400,
  unathorized = 401,
  invalidapi = 404
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}

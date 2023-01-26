export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}

export interface HttpRequest<B> {
  body?: any;
  params?: any;
  headers?: any;
  
}

export interface IController {
  handle(httppRequest: HttpRequest<unknown>):Promise<HttpResponse<unknown>>
}

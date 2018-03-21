export interface ILog {
  (...args: any[]): void
}

export interface ILogger extends ILog {
  error: ILog
  warn: ILog
  info: ILog
  verbose: ILog
}

export interface IDict<TValue> {
  [key: string]: TValue
}

export interface IDoneCallback {
  (err?: any, result?: any): void
}

export interface IHttpRequest extends IDict<any> {
  method: string
  url: string
  originalUrl: string
  headers?: IDict<string>
  query?: IDict<string>
  params?: IDict<string>
  body?: any
  rawbody?: any

  get(field: string): string | undefined
}

export interface IHttpResponse extends IDict<any> {
  headers: IDict<any>
  statusCode?: string | number
  body?: any
  isRaw?: boolean

  raw<T>(body: T): IHttpResponse
  end<T>(body?: T): IHttpResponse
  setHeader<T>(field: string, val: T): IHttpResponse
  getHeader(field: string): any
  removeHeader(field: string): IHttpResponse
  send<T>(body?: T): IHttpResponse
  header<T>(field: string, val: T): IHttpResponse
  get(field: string): any
  set<T>(field: string, val: T): IHttpResponse
  status(statusCode: string | number): IHttpResponse
  sendStatus(statusCode: string | number): IHttpResponse
  type(type: string): IHttpResponse
  json<T>(body: T): IHttpResponse
}

export interface IExecutionContext {
  invocationId: string
  functionName: string
  functionDirectory: string
}

export interface ISys {
  methodName: string
  utcNow: Date
}

export interface IBoundRequest {
  requestUri: string
}

export interface IBindingData {
  invocationId: string
  sys: ISys
  query?: IDict<string>
  req?: IBoundRequest
  '$request'?: IBoundRequest
}

export interface IContext {
  invocationId: string
  executionContext: IExecutionContext
  bindings: IDict<any>
  bindingData: IBindingData
  log: ILogger
  done: IDoneCallback
  req?: IHttpRequest
  res?: IHttpResponse
}
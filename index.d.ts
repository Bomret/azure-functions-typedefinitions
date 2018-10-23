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

export interface IHttpRequestMethods {
  get(field: string): string | undefined
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
}

export type HttpRequest = IHttpRequest & IHttpRequestMethods

type HttpResponseStatus =
  | string
  | number
  | ((statusCode: string | number) => IHttpResponse)

export interface IHttpResponse extends IDict<any> {
  headers?: IDict<any>
  status?: HttpResponseStatus
  statusCode?: HttpResponseStatus
  body?: any
  isRaw?: boolean
}

export interface IHttpResponseMethods {
  raw<T>(body: T): IHttpResponse
  end<T>(body?: T): IHttpResponse
  setHeader<T>(field: string, val: T): IHttpResponse
  getHeader(field: string): any
  removeHeader(field: string): IHttpResponse
  send<T>(body?: T): IHttpResponse
  header<T>(field: string, val: T): IHttpResponse
  get(field: string): any
  set<T>(field: string, val: T): IHttpResponse
  sendStatus(statusCode: string | number): IHttpResponse
  type(type: string): IHttpResponse
  json<T>(body: T): IHttpResponse
}

export type HttpResponse = IHttpResponse & IHttpResponseMethods

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

export interface IBindingDataBase extends IDict<any> {
  invocationId: string
  sys: ISys
}

export interface IBindingDataEventHub extends IBindingDataBase {
  partitionContext: {
    eventHubPath: string;
    consumerGroupName: string;
  }
  partitionKey: any;
  offset: string;
  sequenceNumber: number;
  enqueuedTimeUtc: Date;
  properties: IDict<any>;
  systemProperties: {
    "iothub-connection-device-id": string;
    "iothub-connection-auth-method": string;
    "iothub-connection-auth-generation-id": string;
    "iothub-enqueuedtime": Date;
    "iothub-message-source": string;
    "x-opt-sequence-number": number;
    "x-opt-offset": string;
    "x-opt-enqueued-time": Date;
    enqueuedTimeUtc: Date;
    sequenceNumber: number;
    offset: string;
  }
}

export interface IBindingData extends IBindingDataBase {
  query?: IDict<string>
  req?: IBoundRequest
  '$request'?: IBoundRequest
}

export interface IContextBase<T> {
  invocationId: string
  executionContext: IExecutionContext
  bindings: IDict<any>
  bindingData: T
  log: ILogger
  done: IDoneCallback
}

export interface IContextEventHub extends IContextBase<IBindingDataEventHub> {
}

export interface IContext extends IContextBase<IBindingData> {
  req?: HttpRequest
  res?: HttpResponse
}

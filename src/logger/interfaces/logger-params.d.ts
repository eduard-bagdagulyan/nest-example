export interface ILoggerParams {
  message: string;
  correlationId: string;
  userId: string;
  productId?: string;
  className: string;
  payload: any;
  error?: string;
}

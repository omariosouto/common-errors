import { CommonError } from "./CommonError";

export class HttpError extends CommonError {
  constructor({
    message,
    code,
    statusCode = 500,
    details,
  }: {
    message: string;
    code: string;
    statusCode?: number;
    details?: unknown;
  }) {
    super({ message, code, statusCode, details });
  }
}
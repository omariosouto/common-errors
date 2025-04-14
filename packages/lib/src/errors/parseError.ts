import { CommonError } from "./CommonError";

export function parseError(errorObj: any): CommonError {
  const { name, message, code, statusCode, details } = errorObj;

  switch (code) {
    default:
      return new CommonError({ name, message, code, statusCode, details });
  }
}
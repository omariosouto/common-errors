export class CommonError extends Error {
  public readonly name: string;
  public readonly message: string;
  public readonly code: string;
  public readonly statusCode?: number;
  public readonly details?: unknown;

  constructor({
    name,
    message,
    code,
    statusCode,
    details,
  }: {
    name?: string;
    message: string;
    code: string;
    statusCode?: number;
    details?: unknown;
  }) {
    super(message);
    this.name = name || this.constructor.name;
    this.message = message;
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;

    // Ensure prototype chain is correct (needed in TS)
    Object.setPrototypeOf(this, new.target.prototype);
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      statusCode: this.statusCode,
      details: this.details,
    };
  }
}
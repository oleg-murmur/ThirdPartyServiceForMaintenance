export class CustomError extends Error{
    public code: number;
    public message: string;
    constructor(code: number, message: string) {
      super(message);
      this.code = code;
      this.name = this.constructor.name;
    }
    public toString() {
        return `код ошибки: ${this.code}. Причина ошибки:${this.message}`
    }
  }
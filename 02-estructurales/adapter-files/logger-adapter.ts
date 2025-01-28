import { Logger } from 'jsr:@deno-library/logger';

// TODO: Implementar el LoggerAdapter
interface  ILoggerAdapter {
    file: string;

    writeLog(message: string): void;

    writeError(message: string): void;

    writeWarn(message: string): void;
}

export class LoggerAdapter implements ILoggerAdapter {
    file: string;
    private logger = new Logger();

    constructor(file: string) {
        this.file = file;
    }

    writeLog(message: string): void {
        this.logger.log(this.file, message);
    }

    writeError(message: string): void {
        this.logger.error(this.file, message);  
    }

    writeWarn(message: string): void {
        this.logger.warn(this.file, message);
    }
}
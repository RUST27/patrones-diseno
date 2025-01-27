import { COLORS } from '../../helpers/colors.ts';

// TODO: Implementar el LocalLogger Class
export class LocalLogger {

    constructor(private file: string) {
    }

    writeLog(message: string): void {
        console.log(`Escribiendo en ${this.file}: ${message}`);
    }

    writeError(error: string): void {
        console.log(`Escribiendo en ${this.file}: ${error}`);
    }

    writeWarning(warning: string): void {
        console.log(`Escribiendo en ${this.file}: ${warning}`);
    }
}

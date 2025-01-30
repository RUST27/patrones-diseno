/**
 * ! Patron Chain of Responsibility
 * Es un patrón de diseño de comportamiento que te permite pasar solicitudes
 * a lo largo de una cadena de manejadores.
 *
 * * Es útil cuando se necesita procesar datos de diferentes maneras, pero no
 * * se sabe de antemano qué tipo de procesamiento se necesita o en qué orden
 * * pero se sabe que se necesita procesar en una secuencia.
 *
 * https://refactoring.guru/es/design-patterns/chain-of-responsibility
 */

interface Handler {
    setNext(handler: Handler): Handler;

    handle(request: string): void;


}

abstract class BaseHandler implements Handler{
    private nextHandler?: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

//soporte básica
class BasicSupport extends BaseHandler {
    override handle(request: string): void {
        if (request === 'basic') {
            console.log('Soporte básico');
            return;
        } else {
            super.handle(request);
        }
    }
}

class AdvancedSupport extends BaseHandler {
    override handle(request: string): void {
        if (request === 'advanced') {
            console.log('Soporte avanzado');
            return;
        } else {
            super.handle(request);
        }
    }
}   

class ExpertSupport extends BaseHandler {
    override handle(request: string): void {
        if (request === 'expert') {
            console.log('Soporte experto');
            return;
        } else {
            super.handle(request);
        }
    }
}

function main() {
    const basic = new BasicSupport();
    const advanced = new AdvancedSupport();
    const expert = new ExpertSupport();

    basic.setNext(advanced).setNext(expert);

    basic.handle('basic');
    basic.handle('advanced');
    basic.handle('expert');
}

main();



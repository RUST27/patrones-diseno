/**
 * ! Patrón Command
 * Este patrón encapsula una solicitud como un objeto,
 * lo que le permite parametrizar otros objetos con diferentes solicitudes,
 * encolar solicitudes, o registrar solicitudes, y soporta operaciones que pueden deshacerse.
 *
 * Me gustó mucho la explicación de Refactoring Guru
 * https://refactoring.guru/es/design-patterns/command
 *
 * * Es útil cuando se necesita desacoplar el objeto que invoca
 * * la operación del objeto que sabe cómo realizarla.
 *
 *
 */

interface Command {
    exexute(): void;
}

class Light {
    turnOn(): void {
        console.log('Light is on');
    }

    turnOff(): void {
        console.log('Light is off');
    }
}

class Fan {
    on(): void {
        console.log('Fan is on');
    }

    off(): void {
        console.log('Fan is off');
    }
}


class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    exexute(): void {
        this.light.turnOn();
    }
}

class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    exexute(): void {
        this.light.turnOff();
    }
}

class FanOnCommand implements Command {
    private fan: Fan;

    constructor(fan: Fan) {
        this.fan = fan;
    }

    exexute(): void {
        this.fan.on();
    }
}

class FanOffCommand implements Command {
    private fan: Fan;

    constructor(fan: Fan) {
        this.fan = fan;
    }

    exexute(): void {
        this.fan.off();
    }
}

class RemoteControl {
    private commands: Record<string, Command> = {};

    setCommand(name: string, command: Command): void {
        this.commands[name] = command;
    }

    pressButton(button: string): void {
        if (this.commands[button]) {
            this.commands[button].exexute();
        } else {
            console.log('Button not found');
        }
    }
}

function main() {
    const remoteControl = new RemoteControl();
    const light = new Light();
    const fan = new Fan();

    const lightOnCommand = new LightOnCommand(light);
    const lightOffCommand = new LightOffCommand(light);

    const fanOnCommand = new FanOnCommand(fan);
    const fanOffCommand = new FanOffCommand(fan);


    remoteControl.setCommand('1', lightOnCommand);
    remoteControl.setCommand('2', lightOffCommand);
    remoteControl.setCommand('3', fanOnCommand);
    remoteControl.setCommand('4', fanOffCommand);

    let continueProgram = true;

    do{
        const button = prompt('Press a button (1, 2, 3, 4) or exit to finish');
        if(button === 'exit'){
            continueProgram = false;
        } else if (button !== null) {
            remoteControl.pressButton(button);
        }
    }while(continueProgram);
}

main();


/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 *  * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */

interface Notificacion{
    send(message: string): void;
}

class BasicNotification implements Notificacion{
    send(message: string): void {
        console.log(`Enviando notificación básica: ${message}`);
    }
}

//clase decorador
abstract class NotificationDecorator implements Notificacion{
    protected notification: Notificacion;

    constructor(notification: Notificacion){
        this.notification = notification;
    }

    send(message: string): void {
        this.notification.send(message);
    }
}

//crear diferentes decoradores
class EmailDecorator extends NotificationDecorator{

    private sendEmail(message: string): void{
        console.log(`Enviando notificación por correo: ${message}`);
    }

    override send(message: string): void {       
        super.send(message);
        this.sendEmail(message);
    }
}

class SMSDecorator extends NotificationDecorator{

    private sendSMS(message: string): void{
        console.log(`Enviando notificación por SMS: ${message}`);
    }

    override send(message: string): void {       
        super.send(message);
        this.sendSMS(message);
    }
}


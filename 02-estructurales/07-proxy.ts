/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */
class Player{
    name:string;
    level:number;

    constructor(name:string, level:number){
        this.name = name;
        this.level = level;
    }
}

interface Room{
    enter(player: Player): void;
}

class SecretRoom implements Room{
    enter(player: Player): void{
        console.log(`${player.name} ha ingresado a la sala secreta`);
        console.log(`Nivel del jugador: ${player.level}`);
    }
}

class ProxyRoom implements Room{
    private room: SecretRoom;

    constructor(){
        this.room = new SecretRoom();
    }

    enter(player: Player): void{
        if(player.level >= 10){
            this.room = new SecretRoom();
            this.room.enter(player);
        }else{
            console.log(`${player.name} no tiene el nivel suficiente para ingresar a la sala secreta`);
        }
    }
}

function main(){
    const portal = new ProxyRoom();
    const player1 = new Player('Jhon', 5);
    const player2 = new Player('Jane', 10);

    portal.enter(player1);
    portal.enter(player2);
}

main();




/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from "../helpers/colors";

class DragonBalls{
    private static instance: DragonBalls;

    private ballsCollected: number;

    private constructor(){
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls{
        if(!DragonBalls.instance){
            DragonBalls.instance = new DragonBalls();
            console.log('Se creó una instancia de DragonBalls', COLORS.green);
        }
        return DragonBalls.instance;
    }

    collectBall(): void{
        if(this.ballsCollected < 7){
            this.ballsCollected++;
            console.log(`Se ha recolectado una esfera del dragón. Total: ${this.ballsCollected}`, COLORS.yellow); 
            return;  
    }

    console.log('Ya se han recolectado las 7 esferas del dragón', COLORS.red);

    }

    summonDragon(): void{
        if(this.ballsCollected === 7){
            console.log('Se ha invocado al dragón Shenlong', COLORS.blue);
            this.ballsCollected = 0;
            return;
        }

        console.log('No se pueden invocar al dragón, faltan esferas', COLORS.red);
    }

}

import { COLORS } from '../helpers/colors';
/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

interface Ability{
    use(): void;
}

class SwordAttack implements Ability{
    use(): void{
        console.log('Ataque con espada', COLORS.cyan);
    }
}

class MagicSpell implements Ability{
    use(): void{
        console.log('Hechizo mágico', COLORS.purple);
    }
}

class FireBallSpell implements Ability{
    use(): void{
        console.log('Bola de fuego', COLORS.red);
    }
}

class AxeAttack implements Ability{
    use(): void{
        console.log('Ataque con hacha', COLORS.red);
    }
}

abstract class Character{
    protected ability: Ability;

    constructor(ability: Ability){
        this.ability = ability;
    }

    setAbility(ability: Ability): void{
        this.ability = ability;
    }

    abstract performAbility(): void;
    
}

class Warrior extends Character{
    performAbility(): void{
        console.log('Guerrero: esta listo', COLORS.green);
        this.ability.use();
    }
}

function main(){
    const warrior = new Warrior(new SwordAttack);
    warrior.performAbility();

    warrior.setAbility(new AxeAttack);
    warrior.performAbility();
}

main();
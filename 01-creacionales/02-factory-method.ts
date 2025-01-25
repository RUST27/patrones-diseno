import { COLORS } from '../helpers/colors';
/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

// Clase base
interface Hamburguer{
    prepare(): void;
    cook(): void;
    box(): void;
}

class ChickenBurger implements Hamburguer{
    prepare(){
        console.log('Preparando hamburguesa de pollo', COLORS.blue);
    }
    cook(){
        console.log('Cocinando hamburguesa de pollo');
    }
    box(){
        console.log('Empacando hamburguesa de pollo');
    }
}

class BeefBurger implements Hamburguer{
    prepare(){
        console.log('Preparando hamburguesa de res', COLORS.red);
    }
    cook(){
        console.log('Cocinando hamburguesa de res');
    }
    box(){
        console.log('Empacando hamburguesa de res');
    }
}

class BeansBurger implements Hamburguer{
    prepare(){
        console.log('Preparando hamburguesa de frijol', COLORS.green);
    }
    cook(){
        console.log('Cocinando hamburguesa de frijol');
    }
    box(){
        console.log('Empacando hamburguesa de frijol');
    }
}

abstract class Restaurant{
    abstract createHamburguer(): Hamburguer;

    orderHamburguer(){
        const hamburguer = this.createHamburguer();
        hamburguer.prepare();
    }
}

class ChickenBurgerRestaurant extends Restaurant{
    override createHamburguer(): Hamburguer{
        return new ChickenBurger();
    }
}

class BeefBurgerRestaurant extends Restaurant{
    override createHamburguer(): Hamburguer{
        return new BeefBurger();
    }
}

class BeansBurgerRestaurant extends Restaurant{
    override createHamburguer(): Hamburguer{
        return new BeansBurger();
    }
}

function main(){
    let restaurant: Restaurant;

    const burguerType = prompt('Ingrese el tipo de hamburguesa (pollo/res/beans): ');

    switch(burguerType){
        case 'pollo':
            restaurant = new ChickenBurgerRestaurant();
            break;
        case 'res':
            restaurant = new BeefBurgerRestaurant();
            break;
        case 'beans':
            restaurant = new BeansBurgerRestaurant();
            break;
        default:
            throw new Error('Tipo de hamburguesa no válido');
            break;
    }

    restaurant.orderHamburguer();
}

main();
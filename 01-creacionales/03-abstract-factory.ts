/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburguesa {
    preparar(): void;
}

interface Bebida {
    servir(): void;
}

class HamburguesaPollo implements Hamburguesa {
    preparar(): void {
        console.log('Preparando hamburguesa de pollo');
    }
}

class HamburguesaRes implements Hamburguesa {
    preparar(): void {
        console.log('Preparando hamburguesa de res');
    }
}

class Refresco implements Bebida {
    servir(): void {
        console.log('Sirviendo refresco');
    }
}

class Jugo implements Bebida {
    servir(): void {
        console.log('Sirviendo jugo');
    }
}

interface MenuFactory {
    createHamburguesa(): Hamburguesa;
    createBebida(): Bebida;
}

class MenuPolloFactory implements MenuFactory {
    createHamburguesa(): Hamburguesa {
        return new HamburguesaPollo();
    }

    createBebida(): Bebida {
        return new Jugo();
    }
}

class MenuResFactory implements MenuFactory {
    createHamburguesa(): Hamburguesa {
        return new HamburguesaRes();
    }

    createBebida(): Bebida {
        return new Refresco();
    }
}

function main(factory: MenuFactory) {
    const hamburguer = factory.createHamburguesa();
    const drink = factory.createBebida();

    hamburguer.preparar();
    drink.servir();
}

console.log('Menu Pollo');
main(new MenuPolloFactory());

//console.log('Menu Res');
//main(new MenuResFactory());
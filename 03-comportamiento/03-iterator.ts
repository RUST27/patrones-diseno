/**
 * ! Patrón Iterator
 * Este patrón permite recorrer los elementos de una colección sin exponer
 * la estructura interna de la colección.
 *
 * * Es útil cuando se necesita recorrer una colección de elementos sin importar
 * * cómo se almacenan los elementos.
 *
 * https://refactoring.guru/es/design-patterns/iterator
 */

interface Iterator<T> {
    next(): T | null;
    hasNext(): boolean;
    current(): T | null;
}

class Pokemon{
    public name: string
    public type: string

    constructor(name: string, type: string){
        this.name = name
        this.type = type
    }


}




/**
 * ! Patrón Flyweight
 * Es un patrón de diseño estructural que nos permite usar objetos compartidos
 * para soportar eficientemente grandes cantidades de objetos.
 *
 * * Es útil cuando necesitamos una gran cantidad de objetos y queremos reducir
 * * la cantidad de memoria que utilizan.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */
interface Location1{
    display(coordinates: {x: number, y: number}): void;
}

class LocationIcon implements Location1{
    private type: string;

    private IconImage: string; // Imagen del icono

    constructor(type: string, IconImage: string){
        this.type = type;
        this.IconImage = IconImage;
    }

    display(coordinates: { x: number; y: number; }): void {
        console.log(`Mostrando ${this.type} en las coordenadas ${coordinates.x}, ${coordinates.y}`);
    }

    
}

//fabrica de flyweights
class LocationFactory{
    private icons: Record<string, LocationIcon> = {};

    getLocationIcon(type: string, IconImage: string): LocationIcon{
    
        if(!this.icons[type]){
            this.icons[type] = new LocationIcon(type, IconImage);
        }
        return this.icons[type];
    }
}


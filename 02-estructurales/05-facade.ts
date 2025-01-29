/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

class Projector{
    turnon(){
        console.log('Proyector encendido');
    }

    turnOff(){
        console.log('Proyector apagado');
    }
}

class SoundSystem{
    on(){
        console.log('Sistema de sonido encendido');
    }

    Off(){
        console.log('Sistema de sonido apagado');
    }
}

class VideoPlayer {
    on(){
        console.log('Reproductor de video encendido');
    }
    play(movie: string){
        console.log(`Reproduciendo película: ${movie}`);
    }

    stop(){
        console.log('Video detenido');
    }

    off(){
        console.log('Reproductor de video apagado');
    }
}

class PopCornMaker{
    popppinPopcorn(){
        console.log('Haciendo palomitas');
    }
    stopPopcorn(){
        console.log('Dejando de hacer palomitas');
    }
}


class HomeTheaterFacade{
    private projector: Projector;
    private soundSystem: SoundSystem;
    private videoPlayer: VideoPlayer;
    private popcornMaker: PopCornMaker; 

    constructor(projector: Projector, soundSystem: SoundSystem, videoPlayer: VideoPlayer, popcornMaker: PopCornMaker){
        this.projector = projector;
        this.soundSystem = soundSystem;
        this.videoPlayer = videoPlayer;
        this.popcornMaker = popcornMaker;
    }

    watchMovie(movie: string){
        console.log('Preparando el cine en casa');
        this.popcornMaker.popppinPopcorn();
        this.projector.turnon();
        this.soundSystem.on();
        this.videoPlayer.on();
        this.videoPlayer.play(movie);
    }

    endWatchMovie(){
        console.log('Terminando la película');
        this.videoPlayer.stop();
        this.videoPlayer.off();
        this.soundSystem.Off();
        this.projector.turnOff();
        this.popcornMaker.stopPopcorn();
    }   

}

function main() {  
    const homeTheater = new HomeTheaterFacade(
        new Projector(),
        new SoundSystem(),
        new VideoPlayer(),
        new PopCornMaker()
    );

    homeTheater.watchMovie('The Godfather');

    homeTheater.endWatchMovie();
}

main();
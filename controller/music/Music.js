export class Music {
    //Name music
    name;
    //Source music
    src;

    //Music
    music;

    static instance;

    constructor(name, src) {
        this.name = name;
        this.src = src;
        this.createMusic();
    }

    createMusic() {
        this.music = new Audio();
        this.music.src = this.src;
        this.music.id = this.name;
    }

    destroy() {
        this.music.remove();
    }

    play() {
        this.music.play();
    };

    pause() {
        this.music.pause();
    };

    changeVolume(volume) {
        this.music.volume = volume;
        if (this.music.paused === true) {
            this.music.play();
        }
    }

    autoPlay(autoplay = false) {
        this.music.autoplay = autoplay;
    }

    loop(loop = false){
        this.music.loop = loop;
    }
}
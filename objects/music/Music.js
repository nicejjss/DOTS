export class Music {
    //Name music
    name;
    //Source music
    src;

    //Music
    music;

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

    destroyMusic() {
        if (this.music =  parent.document.getElementById(this.name)) {
            this.music.remove();
        }
    }

    play() {
        if (this.music.paused || this.music.duration <= 0) {
            this.music.play();
        }
    };

    pause() {
        this.music.pause();
    };

    changeVolume(volume) {
        this.music.volume = volume;
    }

    autoPlay(autoplay = false) {
        this.music.autoplay = autoplay;
    }

    loop(loop = false){
        this.music.loop = loop;
    }
}
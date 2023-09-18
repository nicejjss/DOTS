export class GameInfo {
    //private
    static instance;

    //Game infomation (private)
    dotNumber = 0;
    time;

    //private
    constructor() {
        if (GameInfo.instance) {
            return GameInfo.instance;
        }
        GameInfo.instance = this;
    }

    //Public function to get Instance
    // static getInstance() {
    //     if (instance == null) {
    //         instance = new Game();
    //     }
    //     return instance;
    // }

    //public function
    setDotNumber(number) {
        GameInfo.instance.dotNumber = number;
    }

    getDotNumber() {
        return GameInfo.instance.dotNumber;
    }

    setTime() {
        GameInfo.instance.time = 0;
    }

    getTime() {
        return GameInfo.instance.time
    }

    subDotNumber() {
        GameInfo.instance.dotNumber++;
    }
}

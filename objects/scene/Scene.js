import { GameManager } from "../GameManager.js";

export class Scene {
    //protected
    gameManager;

    //private
    view;
    //private
    constructor(view) {
        this.view = view;
        this.gameManager = new GameManager();
    }

    loadView() {
        let scene = this;
        $( "#child-view" ).load(this.view);
        setTimeout(function(){
            scene.loadData(scene);
            scene.viewEvent(scene);
        },100)
        
    }

    stackLoadView() {
        
    }

    viewEvent() {

    }

    loadData() {
        
    }
}
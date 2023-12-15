import { GameManager } from "../GameManager.js";

export class Scene {

    sceneName;
    //protected
    gameManager;

    //private
    view;
    //protected
    static instance;

    constructor(view) { 
        this.view = view;
        this.sceneName = this.constructor.name;
        this.gameManager = new GameManager();
    }

    static getInstance() {
    }

    static deleteInstance() {
        this.instance = null
    }

    loadView() {
        
        let scene = this;
        $( "#child-view" ).load(this.view);
        setTimeout(function(){
            scene.loadData(scene);
            scene.viewEvent(scene);
            scene.viewCustom();
        },100)
        
    }

    viewCustom() {

    }

    stackView() {
        let scene = this;
        $( "#stack-view" ).load(this.view);
        setTimeout(function(){
            scene.loadData(scene);
            scene.viewEvent(scene);
            scene.viewCustom();
        },500)
    }

    destroyStack() {
        let stackView = document.getElementById('stack-view');
        stackView.innerHTML = '';
    }

    destroyView() {
        let childView = document.getElementById('child-view');
        childView.innerHTML = '';
    }

    viewEvent() {

    }

    loadData() {
        
    }
}
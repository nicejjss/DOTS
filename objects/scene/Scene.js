export class Scene {
    //private
    view;

    constructor(view) {
        this.view = view;
    }

    sceneCreate() {
        let childView = document.getElementById('child-view');
        this.sceneLoad(childView);
    }

    sceneDestroy() {
        let childView = document.getElementById('child-view');
        childView.innerHTML = '';
    }
    sceneLoad() {
        
    }

    changeScene() {
        let iframe = window.frameElement;
        iframe.src = this.view;
    }

    loadData() {
        
    }
}
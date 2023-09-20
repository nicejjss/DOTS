//trait
export class WindowTrait {

    static pushtoWindowData(name, data) {
        window.parent[name] = data;
    }

    static getWindowData(name) {
        return window.parent[name];
    }

    static destroyWindowData(name) {
        delete window.parent[name];
    }
}
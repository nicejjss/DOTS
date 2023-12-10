class Setting extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="menu-item flex-row justify-content-space-between">
        <span class="label">BACKGROUND MUSIC</span>
        <input class="input" type="range" name="" id="background-music">
    </div>
    <div class="menu-item flex-row justify-content-space-between">
        <span class="label">DOTS SOUND</span>
        <input class="input" type="range" name="" id="dot-sound">
    </div>
        `
    }
}

customElements.define('setting-menu', Setting);
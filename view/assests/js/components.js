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

class BestRecord extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<span>Best: D:<span id='c-record-dot'>12</span> T:<span id='c-record-time'>12:12</span>s</span>`
    }
}

customElements.define('setting-menu', Setting);
customElements.define('record-value', BestRecord);
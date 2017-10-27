const ColorPalette = require('./color-palette');

class YJLinkBarElement extends HTMLElement {
  constructor() {
    super();
    this.isFirstLoad = true;
    this.shadowDOM = this.attachShadow({mode: 'open'});
    this.shadowDOM.innerHTML = `
    <style>
    @import "./external/font-awesome-4.7.0/css/font-awesome.css";
    
      .link-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px 0;
      }

      div ::slotted([slot=link]) {
      }
    </style>

    <div class="link-bar">
      <slot name="link"></slot>
    </div>
        `;
  }

  connectedCallback() {
    if (this.isFirstLoad) {
      this.isFirstLoad = false;
      this.viewDidLoad();
    }
    else {
      this.viewDidReappear();
    }
  }

  viewDidLoad() {
    // alert("omg");
  }

  viewDidReappear() {

  }

}
customElements.define('yj-link-bar', YJLinkBarElement);



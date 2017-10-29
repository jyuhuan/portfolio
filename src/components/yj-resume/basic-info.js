const ColorPalette = require('./color-palette');

class YJBasicInfoElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
    this.shadowDOM.innerHTML = `
    <style>
      .names {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .names > .major {
        color: ${ColorPalette.Sidebar.Foreground};
        font-size: 1.6rem;
        font-weight: 800;
      }

      .names > .minor {
        color: ${ColorPalette.Sidebar.ForegroundLightweight};
        font-size: 1.2rem;
        font-weight: 800;
      }

      .description {
        padding: 10px 0 0 0;
        box-sizing: border-box;
        text-align: center;
        font-weight: 200;
        color: ${ColorPalette.Sidebar.ForegroundLightweight};
      }
    </style>

    <div class="names">
      <div class="major"><slot name="major-name"></slot></div>
      <div class="minor"><slot name="minor-name"></slot></div>
    </div>
    <div class="description"><slot name="description"></slot></div>
    
        `;
  }

  connectedCallback() {
  }
}
customElements.define('yj-basic-info', YJBasicInfoElement);


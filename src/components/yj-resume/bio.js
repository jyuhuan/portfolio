const YJBaseElement = require('./base');

class YJBioElement extends YJBaseElement {
  viewDidLoad() {
    this.shadowDOM.innerHTML += `
      <style>
        ::slotted(p) {
          padding: 0 0 8px 0;
          box-sizing: border-box;
          margin: 0;
        }
      </style>

      <div class="bio">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('yj-bio', YJBioElement);
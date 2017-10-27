const ColorPalette = require('./color-palette');

class YJResumeElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
    this.shadowDOM.innerHTML = `
    <style>
      .hbox {
        display: flex;
        flex-direction: row;
        height: inherit;
        width: inherit;
      }
      .left {
        height: 100%;
        background: ${ColorPalette.Sidebar.Background};
        color: ${ColorPalette.Sidebar.Foreground};
        width: 300px;
        padding: 20px;
        box-sizing: border-box;
        border-right: 1px ${ColorPalette.Commons.Divider} solid;
      }
      .right {
        padding: 20px;
        box-sizing: border-box;
      }

      .basic-info-slot {
        padding: 30px 0 10px 0;
        box-sizing: border-box;
      }

      .link-bar-slot {

      }
    </style>

    <div class="hbox">
      <div class="left">
        <div class="basic-info-slot"><slot name="basic-info"></slot></div>
        <div class="link-bar-slot"><slot name="link-bar"></slot></div>
      </div>
      <div class="right">
        <div class="long-bio-slot"><slot name="long-bio"></slot></div>
      </div>
    </div>
        `;
  }

  connectedCallback() {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';


    this.shadowDOM.appendChild(articleDiv);
  }
}
customElements.define('yj-resume', YJResumeElement);

module.exports = YJResumeElement;
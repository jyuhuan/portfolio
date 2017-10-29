const ColorPalette = require('./color-palette');
const Measurements = require('./measurements');

class YJResumeElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});

    this.sizes = {
      Sidebar: {
        Width: "320px"
      }
    }

    this.shadowDOM.innerHTML = `
    <style>

      .hbox {
        display: flex;
        flex-direction: row;
        height: inherit;
        width: inherit;
      }

      .left {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: ${ColorPalette.Sidebar.Background};
        color: ${ColorPalette.Sidebar.Foreground};
        width: ${this.sizes.Sidebar.Width};
        min-width: ${this.sizes.Sidebar.Width};
        padding: 15px 0;
        box-sizing: border-box;
        border-right: 1px ${ColorPalette.Commons.Divider} solid;
        overflow-x: hidden;
      }

      .left > .header {
        padding: 30px 0 30px 0;
      }

      .left > .center {
        flex-grow: 2;
        overflow-y: auto;
      }

      .left > .footer {
      }

      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
        flex-grow: 2;
      }

      .basic-info {
        box-sizing: border-box;
      }

      .link-bar {
        padding: 20px 0 0 0;
        box-sizing: border-box;
      }

      .bio {
        font-size: 0.9rem;
        color: ${ColorPalette.Sidebar.ForegroundLightweight};
        box-sizing: border-box;
      }

      .newsfeed {

      }

      .section {
        padding: 0 30px;
        box-sizing: border-box;
      }

      .section > .header {
        font-size: 0.8em;
        font-variant: small-caps;
        color: ${ColorPalette.Sidebar.ForegroundLighterweight};
        font-weight: 600;
        padding: 20px 0 10px 0;
        box-sizing: border-box;
      }
      
    </style>

    <div class="hbox">
      <div class="left">
        <div class="header">
          <div class="basic-info"><slot name="basic-info"></slot></div>
          <div class="link-bar"><slot name="link-bar"></slot></div>
        </div>
        <div class="center">
          <div class="section">
            <div class="header">about me</div>
            <div class="bio"><slot name="bio"></slot></div>
          </div>
        </div>
        <div class="footer">
          <div class="section">
            <div class="header">news updates</div>
            <div class="newsfeed"><slot name="newsfeed"></slot></div>
          </div>
        </div>
      </div>
      <div class="right">
        <slot name="detail"></slot>
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
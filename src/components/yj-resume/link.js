const ColorPalette = require('./color-palette');

class YJLinkElement extends HTMLElement {
  constructor() {
    super();

    this.isFirstLoad = true;
    this.shadowDOM = this.attachShadow({mode: 'open'});

    this.animationDurationMillisecond = 400;
    this.animationDurationSec = `${this.animationDurationMillisecond/1000}s`;
  }

  attachMouseHoverEffects() {
    const comboDiv = this.shadowDOM.querySelector('#combo');
    const graphicDiv = this.shadowDOM.querySelector('#graphic');
    const labelDiv = this.shadowDOM.querySelector('#label');

    this.addEventListener("mouseenter", function () {
      graphicDiv.style.background = ColorPalette.Commons.Text;
      graphicDiv.style.color = ColorPalette.Sidebar.Background;
      graphicDiv.style.borderTopRightRadius = "0";
      graphicDiv.style.borderBottomRightRadius = "0";
      
      $(labelDiv).stop();
      $(labelDiv).animate(
        {
          width: this.labelWidth,
          padding: "0 5px 0 4px"
        },
        {
          duration: this.animationDurationMillisecond
        }
      );
    });
    
    this.addEventListener("mouseleave", function () {
      graphicDiv.style.background = ColorPalette.Sidebar.Background;
      graphicDiv.style.color = "unset";
      graphicDiv.style.borderTopRightRadius = "50px";
      graphicDiv.style.borderBottomRightRadius = "50px";
      
      $(labelDiv).stop();
      $(labelDiv).animate(
        {
          width: "0",
          padding: "0 0 0 0"
        },
        {
          duration: this.animationDurationMillisecond
        }
      );
    });
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
    const name = this.getAttribute('name');
    const label = this.getAttribute('label');
    const url = this.getAttribute('url');

    const size = "30px";
    
    this.shadowDOM.innerHTML = `
    <style>
      @import "./external/font-awesome-4.7.0/css/font-awesome.css";
    
      .combo {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: ${ColorPalette.Commons.Text};
        width: fit-content;
        text-align: center;
        border: 2px ${ColorPalette.Commons.Text} solid;
        border-radius: 50px;
        box-sizing: border-box;
        margin: 2px;
        text-decoration: none;
        z-index: 1000;
      }
    
      .graphic {
        width: ${size};
        line-height: ${size};
        height: ${size};
        font-size: 18px;
        transition: background ${this.animationDurationSec}, color ${this.animationDurationSec}, border-radius ${this.animationDurationSec};
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        z-index: 100;
      }
    
      .label {
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: -0.03rem;
        width: min-content;
        line-height: ${size};
        height: ${size};
        overflow: hidden;
        z-index: 100;
      }
    
    </style>
    <a id="combo" class="combo" href="${url}">
      <div id="graphic" class="graphic"></div>
      <div id="label" class="label"></div>
    </a>
        `;
        this.attachMouseHoverEffects();

    const comboDiv = this.shadowDOM.querySelector('#combo');
    const graphicDiv = this.shadowDOM.querySelector('#graphic');
    const labelDiv = this.shadowDOM.querySelector('#label');

    
    graphicDiv.innerHTML = `<i class="fa fa-${name}" aria-hidden="true"></i>`;
    labelDiv.innerHTML = `${label}`;

    // Remember the width
    $(() => {
      this.labelWidth = labelDiv.getBoundingClientRect().width;
      // Initial state of the label
      labelDiv.style.width = "0px";
      labelDiv.style.padding = "0 0 0 0";
      labelDiv.style.margin = "0 0 0 0";
    });
    
  }

  viewDidReappear() {

  }

}
customElements.define('yj-link', YJLinkElement);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const ColorPalette = {
  Commons: {
    Text: "#424242",
    Divider: "#E0E0E0"
  },
  Sidebar: {
    Background: "#F5F5F5",
    Foreground: "#424242",
    ForegroundLightweight: "#757575"
  },
  Tag: {
    Foreground: "#F5F5F5",
    Background: "#424242"
  }
}

module.exports = ColorPalette;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_yj_resume_color_palette__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_yj_resume_color_palette___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_yj_resume_color_palette__);

const YJResumeElement = __webpack_require__(2);
const YJBasicInfoElement = __webpack_require__(3);
const YJTag = __webpack_require__(4);
const YJTagBar = __webpack_require__(5);
const YJLink = __webpack_require__(6);
const YJLinkBar = __webpack_require__(7);

document.body.style = `
  margin: 0;
  padding: 0;
  color: ${__WEBPACK_IMPORTED_MODULE_0__components_yj_resume_color_palette___default.a.Commons.Text};
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

document.getElementsByTagName('yj-resume')[0].style = `
  height: 100vh;
  width: 100vw;
`;



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const ColorPalette = __webpack_require__(0);

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const ColorPalette = __webpack_require__(0);

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



/***/ }),
/* 4 */
/***/ (function(module, exports) {

class YJTagElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    // Get props
    const text = this.getAttribute('text');    
    const borderColor = this.getAttribute('stroke') || "#ddd";
    const bgColor = this.getAttribute('fill') || "#eee";
    const fgColor = this.getAttribute('textColor') || "black";
    
    this.shadowDOM.innerHTML = `
      <style>
        .tag {
          display: inline-block;
          font-size: 0.8em;
          height: 20px;
          line-height: 20px;
          color: ${fgColor};
          background: ${bgColor};
          border: 1px ${borderColor} solid;
          padding: 0 10px;
          border-radius: 20px;
        }
      </style>
          `;

    const root = document.createElement('div');
    root.className = 'tag';
    root.innerText = text;
    this.shadowDOM.appendChild(root);
  }
}
customElements.define('yj-tag', YJTagElement);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

class YJTagBarElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
    this.shadowDOM.innerHTML = `
    <style>
      .tag-bar {
        display: flex;
        flex-direction: row;
        padding: 10px 0;
        /*outline: 1px orange solid;*/
      }

      .tag-extra {
        margin-right: 5px;
      }
    </style>
        `;
  }

  connectedCallback() {
    const barDiv = document.createElement('div');
    barDiv.className = 'tag-bar';

    const tagElements = this.getElementsByTagName('yj-tag');
    for (let tagElement of tagElements) {
      console.log(tagElement);
      tagElement.classList.add('tag-extra')
      barDiv.appendChild(tagElement.cloneNode());
    }

    this.shadowDOM.appendChild(barDiv);
  }
}
customElements.define('yj-tag-bar', YJTagBarElement);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const ColorPalette = __webpack_require__(0);

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
          padding: "0 5px 0 5px"
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
      }
    
      .graphic {
        width: ${size};
        line-height: ${size};
        height: ${size};
        font-size: 20px;
        transition: background ${this.animationDurationSec}, color ${this.animationDurationSec}, border-radius ${this.animationDurationSec};
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      }
    
      .label {
        font-size: 0.9rem;
        font-weight: 900;
        padding: 0 3px 0 3px;
        width: min-content;
        line-height: ${size};
        height: ${size};
        overflow: hidden;
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
      console.log(labelDiv)
      console.log(`${this.labelWidth}`)
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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const ColorPalette = __webpack_require__(0);

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




/***/ })
/******/ ]);
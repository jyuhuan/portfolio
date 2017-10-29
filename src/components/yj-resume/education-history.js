const ColorPalette = require('./color-palette');
const YJAchievementTimeline = require('./achievement-timeline');
const YJBaseElement = require('./base');

class YJEducationHistoryElement extends YJBaseElement {

  viewDidLoad() {
    this.shadowDOM.innerHTML = `
      <style>
        @import "./external/font-awesome-4.7.0/css/font-awesome.css";
      </style>
      <yj-achievement-timeline>
        <div slot="icon"><i class="icon fa fa-graduation-cap" aria-hidden="true"></i></div>
        <div slot="name">Education</div>
        <slot name="education-record" slot="achievement"></slot>
      </yj-achievement-timeline>
    `;
  }

}

customElements.define('yj-education-history', YJEducationHistoryElement);

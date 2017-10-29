const ColorPalette = require('./color-palette');
const YJBaseElement = require('./base');

class YJWorkHistoryElement extends YJBaseElement {
  viewDidLoad() {
    this.shadowDOM.innerHTML = `
      <style>
        @import "./external/font-awesome-4.7.0/css/font-awesome.css";
      </style>
      <yj-achievement-timeline>
        <div slot="icon"><i class="icon fa fa-suitcase" aria-hidden="true"></i></div>
        <div slot="name">Experiences</div>
        <slot name="work-record" slot="achievement"></slot>
      </yj-achievement-timeline>
    `;
  }
}
customElements.define('yj-work-history', YJWorkHistoryElement);

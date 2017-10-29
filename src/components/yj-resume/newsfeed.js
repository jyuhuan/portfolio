const YJBaseElement = require('./base');

class YJNewsfeeedElement extends YJBaseElement {
  viewDidLoad() {
    this.shadowDOM.innerHTML = `
      <style>
        .newsfeed {
          height: 100px;
          background: #CCC;
        }
      </style>

      <div class="newsfeed">
        <slot name="news"></slot>
      </div>
    `;
  }
}

customElements.define('yj-newsfeed', YJNewsfeeedElement);
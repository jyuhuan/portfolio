const Measurements = require('./measurements');
const ColorPalette = require('./color-palette');

class YJTimelineElement extends HTMLElement {

  constructor() {
    super();
    this.isFirstLoad = true;
    this.shadowDOM = this.attachShadow({mode: 'open'});
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
    this.shadowDOM.innerHTML = `

      <style>

        .timeline {
          position: relative;
          padding: ${Measurements.Timeline.VerticalStretch} 0;
          box-sizing: border-box;
        }
    
        .timeline::after {
          content: '';
          position: absolute;
          width: 2px;
          top: 0;
          bottom: 0;
          left: ${Measurements.Timeline.TimeWidth};
          background: ${ColorPalette.Timeline.Line};
        }
  
      </style>


      <div class="timeline">
        <slot name="event"></slot>
      </div>

    `;
  }

  viewDidReappear() {

  }

}
customElements.define('yj-timeline', YJTimelineElement);

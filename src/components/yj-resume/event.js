const Measurements = require('./measurements');
const ColorPalette = require('./color-palette');

class YJEventElement extends HTMLElement {
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
        .event {
          display: flex;
          flex-direction: row;
          width: 100%;
          padding: 5px 0;
          box-sizing: border-box;
        }

        .event > .marker-slot {
          display: flex;
          flex-direction: column;
          align-self: flex-start;
    
          width: ${Measurements.Timeline.TimeWidth};
          min-width: ${Measurements.Timeline.TimeWidth};
          padding: 5px 20px;
          box-sizing: border-box;
          align-items: flex-end;
          font-weight: 200;
    
          position: sticky;
          position: -webkit-sticky;
          top: 0px;
        }

        .event > .detail-slot {
          padding: 5px 20px;
          box-sizing: border-box;
          position: relative;
          flex-grow: 2;
        }
 
        .event > .detail-slot:before {
          content: '';
          background: ${ColorPalette.Timeline.Dot};
          position: absolute;;
          width: 10px;
          height: 10px;
          border-radius: 25px;
          border: 2px white solid;
          top: 10px;
          left: -6px;
          z-index: 100;
        }            

        ::slotted(ul) {
          background: yellow;
        }
        

      </style>

      
      <div class="event">
        <div class="marker-slot"><slot name="marker"></slot></div>
        <div class="detail-slot"><slot name="detail"></slot></div>
      </div>

    `;
  }

  viewDidReappear() {

  }
}
customElements.define('yj-event', YJEventElement);

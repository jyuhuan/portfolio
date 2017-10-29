const ColorPalette = require('./color-palette');
const Measurements = require('./measurements');
const YJBaseElement = require('./base');

class YJAchievementTimelineElement extends YJBaseElement {
  viewDidLoad() {
    this.shadowDOM.innerHTML = `
      <style>
      @import "./external/font-awesome-4.7.0/css/font-awesome.css";

      .achievements {
        padding: 20px 0 20px 0;
        box-sizing: border-box;
        max-width: 800px;
      }

      .head {
        display: flex;
        flex-direction: row;
        font-size: 2rem;
        font-weight: 700;
        margin-left: calc(${Measurements.Timeline.TimeWidth} - ${Measurements.Timeline.IconWidth} / 2);
      }

      .head > .icon {
        width: ${Measurements.Timeline.IconWidth};
        text-align: center;
      }

      .head > .name {
        flex-grow: 2;
        font-variant: small-caps;
      }

      .body {
      }

      </style>
      <div class="achievements">
        <div class="head">
          <div class="icon"><slot name="icon"><i class="icon fa fa-trophy" aria-hidden="true"></i></slot></div>
          <div class="name"><slot name="name">Achievements</slot></div>
        </div>
        <div class="body" id="body">
          <yj-timeline id="timeline">
            <slot name="achievement" slot="event"></slot>
          </yj-timeline>
        </div>
      </div>
    `;
  }
}

customElements.define('yj-achievement-timeline', YJAchievementTimelineElement);

const ColorPalette = require('./color-palette');
const Measurements = require('./measurements');
const YJElement = require('./base');

/**
 * Example
 * 
 *   <yj-achievement>
 *     
 *   </yj-achievement>
 * 
 */
class YJAchievementElement extends YJElement {
  viewDidLoad() {
    this.shadowDOM.innerHTML = `
      <style>
        
        .marker {
          font-size: 0.8em;
          text-align: right;
          padding-top: 3px;
        }

        .primary-marker {

        }

        .secondary-marker {
          color: ${ColorPalette.Commons.TextLighter};
        }

        .detail {

        }

        .headline {
          font-weight: 600;
        }

        .subheadline {
          font-size: 0.9rem;
          color: ${ColorPalette.Commons.TextLight};
        }
        
        .description {
          font-size: 0.9rem;
          color: ${ColorPalette.Commons.TextLighter};
          padding: 5px 0 5px 0;
          box-sizing: border-box;
        }


      </style>

      <yj-event>
        <div class="marker" slot="marker">
          <div class="primary-marker"><slot name="primary-marker"></slot></div>
          <div class="secondary-marker"><slot name="secondary-marker"></slot></div>
        </div>
        <div class="detail" slot="detail">
          <div class="headline"><slot name="headline"></slot></div>
          <div class="subheadline"><slot name="subheadline"></slot></div>
          <div class="tags"><slot name="tags"></slot></div>
          <div class="description"><slot name="description"></slot></div>
          <div class="references"><slot name="references"></slot></div>
        </div>
      </yj-event>
    `;
  }
}

customElements.define('yj-achievement', YJAchievementElement);

const YJElement = require('./base');

class YJEducationRecordElement extends YJElement {
  viewDidLoad() {
    this.shadowDOM.innerHTML = `
      <yj-achievement>
        <div slot="primary-marker"><slot name="time"></slot></div>
        <div slot="secondary-marker"><slot name="location"></slot></div>
        <div slot="headline"><slot name="school"></slot></div>
        <div slot="subheadline"><slot name="degree"></slot></div>
        <div slot="description"><slot name="description"></slot></div>
        <!--div slot="references"></div-->
      </yj-achievement>
    `;
  }
}

customElements.define('yj-education-record', YJEducationRecordElement);

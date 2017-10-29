class YJElement extends HTMLElement {
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

  }

  viewDidReappear() {

  }
}

module.exports = YJElement;
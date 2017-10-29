class YJResourceBarElement extends HTMLElement {
  constructor() {
    super();
    this.isFirstLoad = true;
    this.shadowDOM = this.attachShadow({mode: 'open'});
    this.shadowDOM.innerHTML = `
      <style>
        .resources {
          display: flex;
          flex-direction: row;
          padding: 10px 0;
          box-sizing: border-box;
        }

        .resource-extra {
          margin-right: 5px;
        }
      </style>
    
      <div class="resources">
        <yj-resource class="resource-extra"></yj-resource>
        <yj-resource class="resource-extra"></yj-resource>
        <yj-resource class="resource-extra"></yj-resource>
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
customElements.define('yj-resource-bar', YJResourceBarElement);
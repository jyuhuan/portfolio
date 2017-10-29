class YJResourceElement extends HTMLElement {
  constructor() {
    super();
    this.isFirstLoad = true;
    this.shadowDOM = this.attachShadow({mode: 'open'});
    this.shadowDOM.innerHTML = `
    <style>
      @import "./external/font-awesome-4.7.0/css/font-awesome.css";
    
      .resource {
        display: flex;
        flex-direction: row;
        font-size: 0.9rem;
      }

      .icon {
        margin-right: 5px;
      }

      .label {

      }
  
    </style>
  
    <div class="resource">
      <div class="icon"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></div>
      <div class="label">Paper</div>
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
customElements.define('yj-resource', YJResourceElement);
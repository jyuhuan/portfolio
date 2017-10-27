class YJTagElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    // Get props
    const text = this.getAttribute('text');    
    const borderColor = this.getAttribute('stroke') || "#ddd";
    const bgColor = this.getAttribute('fill') || "#eee";
    const fgColor = this.getAttribute('textColor') || "black";
    
    this.shadowDOM.innerHTML = `
      <style>
        .tag {
          display: inline-block;
          font-size: 0.8em;
          height: 20px;
          line-height: 20px;
          color: ${fgColor};
          background: ${bgColor};
          border: 1px ${borderColor} solid;
          padding: 0 10px;
          border-radius: 20px;
        }
      </style>
          `;

    const root = document.createElement('div');
    root.className = 'tag';
    root.innerText = text;
    this.shadowDOM.appendChild(root);
  }
}
customElements.define('yj-tag', YJTagElement);

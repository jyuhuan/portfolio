class YJTagBarElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
    this.shadowDOM.innerHTML = `
    <style>
      .tag-bar {
        display: flex;
        flex-direction: row;
        padding: 10px 0;
        /*outline: 1px orange solid;*/
      }

      .tag-extra {
        margin-right: 5px;
      }
    </style>
        `;
  }

  connectedCallback() {
    const barDiv = document.createElement('div');
    barDiv.className = 'tag-bar';

    const tagElements = this.getElementsByTagName('yj-tag');
    for (let tagElement of tagElements) {
      console.log(tagElement);
      tagElement.classList.add('tag-extra')
      barDiv.appendChild(tagElement.cloneNode());
    }

    this.shadowDOM.appendChild(barDiv);
  }
}
customElements.define('yj-tag-bar', YJTagBarElement);

class AlbumView extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {

    const shadowDOM = this.shadowDOM;
    
    // Collect attributes
    const albumName = this.getAttribute('album-name');
    const artistName = this.getAttribute('artist-name');
    const artworkPath = this.getAttribute('artwork-path');

    shadowDOM.innerHTML = `
    <style>
        .album-view {
          width: 200px;
          display: inline-block;
          padding: 0 5px 5px 0;
        }

        .album-artwork {
          width: 200px;
          height: 200px;
          background: url(${artworkPath});
          background-size: cover;
          border-radius: 10px;
          border: 1px #999 solid;
        }
    
        .album-name {
          margin: 5px 0 0 0;
          font-weight: 600;
        }

        .artist {
          color: #999;
          font-size: 0.9em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
    </style>    
        `;
    

    // Container of the AlbumView
    const albumViewDiv = document.createElement('div');
    albumViewDiv.className = 'album-view';
    shadowDOM.appendChild(albumViewDiv);

    // Artwork
    const artworkDiv = document.createElement('div');
    artworkDiv.className = 'album-artwork';
    albumViewDiv.appendChild(artworkDiv);

    // Album name
    const albumNameDiv = document.createElement('div');
    albumNameDiv.className = 'album-name';
    albumNameDiv.innerText = albumName;
    albumViewDiv.appendChild(albumNameDiv);

    // Artist names
    const artistDiv = document.createElement('div');
    artistDiv.className = 'artist'
    artistDiv.innerText = artistName;
    albumViewDiv.appendChild(artistDiv);
    


  }

}
customElements.define('album-view', AlbumView);


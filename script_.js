class Song {
    constructor() {
    }

    setItemLi() {
        let element = document.createElement('li');
        element.setAttribute('class', 'far fa-play-circle');
        return element;
    }
    setItemGroupName(group, url) {
        let element = document.createElement('a');
        element.setAttribute('class', 'group-name');
        element.setAttribute('title', 'Ir al Grupo');
        element.setAttribute('href', url);
        element.innerText = group;
        return element;
    }
    setItemSongTitle(title) {
        let element = document.createElement('a');
        element.setAttribute('class', 'song-title');
        element.innerText = title;
        return element;
    }
    setListeners(listeners) {
        let element = document.createElement('div');
        element.setAttribute('class', 'listeners');
        element.innerText = listeners;
        return element;
    }
    getNewElement(group, url, title, listeners) {
        let contenedor = this.setItemLi();
        contenedor.appendChild(this.setItemGroupName(group, url));
        contenedor.appendChild(this.setItemSongTitle(title));
        contenedor.appendChild(this.setListeners(listeners));
        return contenedor;
    }
}

const loadSongs = (mArray) => {
    let element;
    let contenedor = document.getElementsByClassName('lista');
    contenedor[0].innerHTML = "";
    let mySong = new Song;
    mArray.forEach(e => {
        let elementsLi = mySong.getNewElement(e.artist.name, e.artist.url, e.name, e.listeners);
        contenedor[0].appendChild(elementsLi);
    });
}

const loadOverview = (e) => {
    loadSongs(tracks);
}

const loadTenListened = () => {
    let ordenedArray = tracks.slice();
    ordenedArray.sort((a, b) => b.listeners - a.listeners);
    loadSongs(ordenedArray.slice(0, 10));
};

const loadBiggest = (e) => {
    let ordenedArray = tracks.slice();
    // Ordenamos el array por nombres de artista para la agrupación
    ordenedArray.sort((a, b) => {
        if (a.artist.name > b.artist.name) {
            return 1;
        }
        if (a.artist.name < b.artist.name) {
            return -1;
        }
    });
    // Obtenemos un representante de cada artista y hacemos un sumatorio de listeners
    let agrupedArray = [];
    let i = 1;
    let contListeners = parseInt(ordenedArray[i-1].listeners);
    while (i < ordenedArray.length) {
        if (ordenedArray[i-1].artist.mbid !== ordenedArray[i].artist.mbid) {
            objContListeners = { agrupedListeners: contListeners };
            let newObject = Object.assign({}, ordenedArray[i - 1], objContListeners);
            agrupedArray.push(newObject);
            contListeners = 0;
        }
        contListeners+= parseInt(ordenedArray[i].listeners);
        i++;
    };
    // Ordenamos en una array por agrupedListeners
    let ordenedArrayFinal = agrupedArray.slice();
    ordenedArrayFinal.sort((a, b) => b.agrupedListeners - a.agrupedListeners);
    // Filtramos el array tracks por el artista
    biggestArrayFinal = tracks.filter(element => element.artist.mbid == ordenedArrayFinal[0].artist.mbid);
    loadSongs(biggestArrayFinal);
}

const init = () => {
    document.getElementsByClassName('menu-item-selected')[0].innerHTML = "Overview";

    loadSongs(tracks);

    let overview = document.getElementById('overview');
    overview.addEventListener('click', loadOverview);
    overview.children[0].focus();

    let tenListened = document.getElementById('ten-listened');
    tenListened.addEventListener('click', loadTenListened);

    let biggest = document.getElementById('biggest');
    biggest.addEventListener('click', loadBiggest);

}

window.onload = init;


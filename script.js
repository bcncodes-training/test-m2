class Song {
    constructor(group, title, url, listeners) {
        this.group = group;
        this.title = title;
        this.url = url;
        this.listeners = listeners;
    }

    setItemLi() {
    }
    setItemGroupName(group, url) {
        this.artist.name = group;
        this.url = url;
    }
    setItemSongTitle(title) {
        this.name = title;
    }
    setListeners(listeners) {
        this.listeners = listeners;
    }
    creaEle(father, type, classes, text) {
        let a = document.createElement(type);
        a.setAttribute('class', classes);
        a.innerText = text;
        father.appendChild(a);
        return a;
    }
    getNewElement(group, url, title, listeners) {
        let li = document.createElement('li');
        li.setAttribute('class', 'far fa-play-circle');
        let a = this.creaEle(li, 'a', 'group-name', group);
        a.title = 'Ir al grupo';
        a.href = url;
        let a2 = this.creaEle(li, 'a', 'song-title', title)
        let listener = this.creaEle(li, 'div', 'listeners', listeners)

        return li;
    }

}
const menuItemSelected=(title)=>{
    let menuItemSelected = document.getElementsByClassName('menu-item-selected');
    menuItemSelected[0].innerText = title;
}
const loadSongs = (trackSongs) => {
    let newArr = JSON.parse(JSON.stringify(trackSongs));
    let contenedor = document.getElementsByClassName('lista');
    contenedor[0].innerHTML = '';
    newArr.forEach(e => {
        let songs = new Song();
        let li = songs.getNewElement(e.artist.name, e.url, e.name, e.listeners);
        contenedor[0].appendChild(li);
        console.log(li);
    });
}

const loadOverview = () => {
    menuItemSelected('Overview');
    loadSongs(tracks);
}

const loadTenListened = () => {
    let newArr = JSON.parse(JSON.stringify(tracks));
    let moviesSorted = newArr.sort((a, b) => {
        if (parseInt(a.listeners) > parseInt(b.listeners)) return -1
        else return 1
    });
    let top10 = [];
    for (let i = 0; i < 10; i++) {
        top10.push(moviesSorted[i]);

    }
    menuItemSelected('Top 10 Listened');
    loadSongs(top10);
}

const loadBiggest = (e) => {
    let newArr = JSON.parse(JSON.stringify(tracks)); 1
    let only = [];
    let founded = false;
    newArr.forEach(e1 => {
        if (only.length > 0) {
            only.filter((e2) => {
                if (e2.artist.mbid == e1.artist.mbid) {
                    e2.songs++;
                    e2.listeners=parseFloat(e2.listeners)+parseFloat(e1.listeners);
                    founded = true;
                }
            })
        } else {
            founded;
        }
        if (!founded) only.push({ 'artist': e1.artist, 'songs': 1, 'listeners': e1.listeners });
    });
    only.sort((a,b)=>{
        if (a.songs>b.songs) return -1;
        else return 1;
    })
    menuItemSelected('The Biggest');
    let lista=document.querySelector('.lista');
    lista.innerHTML='';
    lista.innerHTML=`El artista con mas canciones en el top 50 es '${only[0].artist.name}' con ${only[0].songs} canciones y un total de ${only[0].listeners} escuchas`;
}
function addEventListeners() {
    let overview = document.getElementById('overview').children[0].addEventListener('click', loadOverview);
    let listened = document.getElementById('ten-listened').children[0].addEventListener('click', loadTenListened);
    let biggest = document.getElementById('biggest').children[0].addEventListener('click', loadBiggest);

}

const init = () => {
    addEventListeners();
    let overview = document.getElementById('overview').children[0].focus();
    loadOverview()

}


window.onload = init;


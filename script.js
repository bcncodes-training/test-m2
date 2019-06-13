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
    let menuItemSelected = document.getElementsByClassName('menu-item-selected');
    menuItemSelected[0].innerText = 'Overview';

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
    let menuItemSelected = document.getElementsByClassName('menu-item-selected');
    menuItemSelected[0].innerText = 'Top 10 Listened';
    loadSongs(top10);
}

const loadBiggest = (e) => {
    let newArr = JSON.parse(JSON.stringify(tracks));
    let only=[];
    newArr.forEach(e=>{
        only.filter(e2=>{
            if (e2.artist==e.artist)
            only.push(e);
        })
    })
    console.log(only);
    var groupBy = function (xs, key) {
        return xs.reduce( (rv, x)=> {
            console.log(rv[x[key]]);
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    console.log(groupBy(newArr, 'artist'));

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


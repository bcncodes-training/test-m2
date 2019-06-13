class Song {
    constructor(){
        //this.artistName = artistName;
        //this.artistUrl = artistUrl;
        //this.name = name;
        //this.listeners = listeners;
    }

    setItemLi(){
        let element = document.createElement('li');
        element.setAttribute('class','far fa-play-circle');
        return element;
    }
    setItemGroupName(group,url){
        let element = document.createElement('a');
        element.setAttribute('class','group-name');
        element.setAttribute('title','Ir al Grupo');
        element.setAttribute('href',url);
        element.innerText=group;
        return element;
    }
    setItemSongTitle(title){
        let element = document.createElement('a');
        element.setAttribute('class','song-title');
        element.innerText=title;
        return element;
    }
    setListeners(listeners){
        let element = document.createElement('div');
        element.setAttribute('class','listeners');
        element.innerText=listeners;
        return element;
    }
    getNewElement(group,url,title,listeners){
        let contenedor = this.setItemLi();
        contenedor.appendChild(setItemGroupName(group,url));
        contenedor.appendChild(setItemSongTitle(title));
        contenedor.appendChild(setListeners(listeners));
        return contenedor;
    }
}

const loadSongs = (mArray)=>{
    let element;
    let contenedor = document.getElementsByClassName('lista');
    contenedor[0].innerHTML = "";
    let contenedorLi;
    let i=0;
    let mySong = new Song;
    mArray.forEach(e => {
        element = mySong.setItemLi();
        contenedor[0].appendChild(element);
        contenedorLi = document.getElementsByClassName('far');
        element = mySong.setItemGroupName(e.artist.name,e.artist.url);
        contenedorLi[i].appendChild(element);
        element = mySong.setItemSongTitle(e.name);
        contenedorLi[i].appendChild(element);
        element = mySong.setListeners(e.listeners);
        contenedorLi[i].appendChild(element);
        i++;
    });
     
}

const loadOverview = () =>{
    loadSongs(tracks);
}

const loadTenListened = ()=>{
    let OrdenedArray = tracks.slice();
    OrdenedArray.sort((a,b)=>b.listeners-a.listeners);
    loadSongs(OrdenedArray.slice(0,10));
};

const loadBiggest = (e)=>{
    alert ("Biggest");
}

const init = ()=>{
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


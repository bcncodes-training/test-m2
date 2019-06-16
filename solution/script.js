/* let genres=['rock','hip-hop','indie','jazz','reggae']
let detalle = document.querySelector('.detalle');
detalle.innerHTML=JSON.stringify(tracks.map(e=>{
    delete e.image;
    delete e.streamable;
    e.genre=genres[Math.floor(Math.random()*genres.length)];
    return e;

})); */

class Song {
    constructor(){
        this.itemLi = document.createElement('li');
        this.itemGroupName = document.createElement('a');
        this.itemSongTitle = document.createElement('a');
        this.listeners = document.createElement('div');
    }

    setItemLi(){
        this.itemLi.className="far fa-play-circle";
    }
    setItemGroupName(group,url){
        this.itemGroupName.className="group-name";
        this.itemGroupName.title='Ir al Grupo';
        this.itemGroupName.href=url;
        this.itemGroupName.text=group;
    }
    setItemSongTitle(title){
        this.itemSongTitle.className="song-title";
        this.itemSongTitle.text=title;
    }
    setListeners(listeners){
        this.listeners.className="listeners";
        this.listeners.innerText=listeners;
    }
    getNewElement(group,url,title,listeners){
        this.setItemLi();
        this.setItemGroupName(group,url);
        this.setItemSongTitle(title);
        this.setListeners(listeners);
        this.itemLi.appendChild(this.itemGroupName);
        this.itemLi.appendChild(this.itemSongTitle);
        this.itemLi.appendChild(this.listeners);
        return this.itemLi;
    }

}

const loadSongs = (songs)=>{
    const lista = document.querySelector('.lista');
    lista.innerHTML='';

    for (let item of songs){

        let song = new Song();
        lista.appendChild(
            song.getNewElement(
                item.artist.name,
                item.artist.url,
                item.name,
                item.listeners
                ));       
        
    }
}
const changeMainTitle = (title) => { document.querySelector('.menu-item-selected').innerText=title;}

const loadOverview = (e) =>{
    if(!e===undefined){
    changeMainTitle(e.currentTarget.innerText);}
    else{
    changeMainTitle('Overview');    
    }
    
    loadSongs(tracks);
}

const loadTenListened = (e)=>{
    changeMainTitle(e.currentTarget.innerText);

    let newTrack = [].slice.call(tracks);
    
    newTrack.sort((a,b)=>{
        if (parseInt(a.listeners) < parseInt(b.listeners)) {
            return 1;
          }
          if (parseInt(a.listeners)  > parseInt(b.listeners)) {
            return -1;
          }
          // a must be equal to b
          return 0;
        }).slice(0,20);

    loadSongs(newTrack);
}

const loadBiggest = (e)=>{
    changeMainTitle(e.currentTarget.innerText);

/* Obtención de los autores via Map.reduce()
    let theBiggest = tracks.reduce((groupCounter,group)=>{

        groupCounter[group.artist.name] = (groupCounter[group.artist.name]||0)+1;
            return groupCounter;
    },{})
 */

 
    let obj={};
    tracks.forEach(e => {
        a = e.artist.name;
  if(obj==undefined) obj[a]= 0;
  if  (a in obj){
      obj[a] += 1;
    }
    else {
      obj[e.artist.name] = 1;
    }

  
  return obj;

 })

      keysSorted = Object.keys(obj).sort(function(a,b){
  if (obj[a] < obj[b]) {
            return 1;
          }
          if (obj[a]  > obj[b]) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });

        let big = tracks.filter((e) => { return e.artist.name == keysSorted[0] });
    
        loadSongs(big);

}

/* -------------- Alternativa de Carlos ------------------
const loadBiggest = (e) => {
    alert ("Biggest");	    document.getElementsByClassName('menu-item-selected')[0].innerHTML = "The Biggest";
    let ordenedArray = tracks.slice();
    // Ordenamos el array por nombres de artista para la agrupaci�n
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
    let biggestArrayFinal = tracks.filter(element => element.artist.mbid == ordenedArrayFinal[0].artist.mbid);
    loadSongs(biggestArrayFinal);
}	} */

const loadGenres = (e)=>{

    changeMainTitle(e.currentTarget.innerText);

    let genres = tracks.filter((element) => { return element.genre == e.currentTarget.innerText });
    
    loadSongs(genres);


}

const init = ()=>{
    changeMainTitle('Overview');
    document.querySelector('.menu-principal-item>a').focus();
    loadOverview();
    document.getElementById('overview').addEventListener('click',loadOverview);
    document.getElementById('ten-listened').addEventListener('click',loadTenListened);
    document.getElementById('biggest').addEventListener('click',loadBiggest);
    
    let estilos = document.querySelectorAll('.estilo >a');

    for (let i = 0; i<estilos.length;i++){
        estilos[i].addEventListener('click',loadGenres);
    }
    
}


window.onload = init;



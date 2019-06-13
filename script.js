class Song {  
    constructor(group, url, title, listeners){
        this.group=group;
        this.url=url;
        this.title=title;
        this.listeners=listeners;
    }

    setItemLi(){
    }
    setItemGroupName(group,url){
        return group, url;
    }
    setItemSongTitle(title){
        return title;
    }
    setListeners(listeners){
        return listeners;
    }
    getNewElement(group,url,title,listeners){
        return `<li class="far fa-play-circle"><a href="${url}" class="group-name">${group}: </a>
        <a href="" class="song-title">${title}</a>
        <div class="listeners">${listeners}</div>
    </li>`
    }

}

const loadSongs = (tracks)=>{
    let listado="";
    for(i=0; i<tracks.length; i++){
        let lista=new Song(tracks[i].artist.name, 
                            tracks[i].artist.url, 
                            tracks[i].name,
                            tracks[i].listeners);
        
        listado+=(lista.getNewElement(lista.group, lista.url, lista.title, lista.listeners));              
    }
    //console.log(listado)
    nodo=document.getElementsByClassName("lista");
    nodo[0].innerHTML=listado;
}

const loadOverview = () =>{
    loadSongs(tracks);

}

const loadTenListened = ()=>{
    /*let top10="";

    top10=tracks.map(e=>{
    return e;
    })
    console.log(top10);
 
  
    loadSongs(top10);
    nodo=document.getElementsByClassName("lista");
    nodo[0].innerHTML=listado;
    
}*/

const loadBiggest = (e)=>{
/*

    loadSongs(biggest);
    nodo=document.getElementsByClassName("lista");
    nodo[0].innerHTML=listado;

}*/

const init = ()=>{
    let overview=document.getElementById("overview");
    let tenListened=document.getElementById("ten-listened");
    let biggest=document.getElementById("biggest");

    overview.addEventListener("click", loadOverview);
    tenListened.addEventListener("click", loadTenListened);
    biggest.addEventListener("click", loadBiggest);

    loadOverview();
    }


window.onload = init;
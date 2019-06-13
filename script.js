//LÓGICA


class song {
    constructor(group, title, listeners, url){ 
        this.group = group;
        this.title = title;
        this.listeners = listeners;
        this.url = url;
        // list="";
    }

    setItemGroupName(group,url){
        return document.createElement(`<li class="far fa-play-circle"><a href="${this.url}" class="group-name">${this.group}: </a>`);        
        }
    setItemSongTitle(title){
        return document.createElement(`<a class="song-title>${title}</a>`)
    }
    setListeners(listeners){
        return document.createElement(`<div class="listeners">${listeners}</div>`)
    }    
    setItemLi(){        
        return document.createElement('li');
    }    
    getNewElement(group,url,title,listeners){        
        let list = setItemLi()        
        list.appendChild(setItemGroupName(group,url));
        list.appendChild(setItemSongTitle(title));
        list.appendChild(setListeners(listeners));
        return list;
    }        
}

const loadSongs = (tracks)=>{
    let newArray = [];     
    for (i=0; i<tracks.length; i++){        
        let newSong = new Song(tracks[i].artist.name, tracks[i].name, tracks[i].listeners, tracks[i].artist.url);
        newArray.push(newSong)
    }
    let lista = document.getElementsByClassName("lista")
}










// class Song {
//     constructor(){
//     }



// }



// const loadOverview = () =>{
// }

// const loadTenListened = ()=>{
 
// }

// const loadBiggest = (e)=>{
   
// }

// const init = ()=>{
 
//     }


// window.onload = init;


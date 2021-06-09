class Song {
    constructor(name,artistName,url,listeners){
        this.name=name;
        this.artistName=artistName;
        this.url=url;
        this.listeners=listeners;
    }

    setItemLi(){//li
        //let ol=document.createElement('ol');
        
        let li=document.createElement('li');
        li.setAttribute('class','far fa-play-circle');
        return li;
    }
    setItemGroupName(group,url){//a
        let a = document.createElement('a');
        a.setAttribute('class','group-name');
        a.setAttribute('title','Ir al Grupo');
        a.setAttribute('href',url);
        a.innerText=group;
        return a;
    }
    setItemSongTitle(title){//a
    }
    setListeners(listeners){//
    }
    getNewElement(group,url,title,listeners){
    }

}

const loadSongs = (tracks)=>{
    tracks.forEach(e=>{
        console.log(e.name);
        console.log(e.artist.name);
        console.log(e.listeners);

    })
}    

const loadOverview = () =>{
}

const loadTenListened = ()=>{
 
}

const loadBiggest = (e)=>{
   
}

const init = ()=>{
 
    }


window.onload = init;


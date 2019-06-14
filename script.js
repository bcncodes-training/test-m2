class Song {
    constructor(group,title,url,listeners){
        this.group = group;
        this.title = title;
        this.url = url;
        this.listeners = listeners;
    }

    setItemLi(){
        let node = document.querySelector('.lista');
        let list = document.createElement('li') ;
        node.appendChild(list);
        list.className = 'far fa-play-circle';
    }

    setItemGroupName(group,url){
        let bandRow = document.createElement('a');
        list.appendChild(bandRow);
        bandRow.className('group-name')
        bandRow.setAttribute('href', url)
        bandRow.innerText = group;
    }
    setItemSongTitle(title){
        let song = document.createElement('a');
        list.appendChild(song);
        song.className = 'song-title';
        song.setAttribute('href',this.url);
        song.innerText = title;


    }
    setListeners(listeners){
        let divListeners = document.createElement('div');
        list.appendChild(divListeners);
        divListeners.innerHTML = listeners;
       
    }

    getNewElement(group,url,title,listeners){
        this.setItemLi();
        this.setItemGroupName(group,url);
        this.setItemSongTitle(title);
        this.setListeners(listeners);            
           
    }
  
    

}

const loadSong = (arr)=>{
    
   let newSong = new Song();

   
   /* arr.forEach(e => {
    newSong.group = e.artist.name;
    newSong.name = e.name;
    newSong.url = e.artist.url;       
    newSong.listeners = e.listeners
    console.log(newSong)
    })*/;
    
     

              
   }




const loadOverview = () =>{

}

const loadTenListened = ()=>{
 
}

const loadBiggest = (e)=>{
   
}

const init = ()=>{
    window.addEventListener('load', loadSong)
    
    }


window.onload = init;


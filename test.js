class Song {
    constructor(name,listeners,url,artist){
        this.name = name;        
        this.listeners = listeners;
        this.url = url;
        this.artist = artist;
       };


setItemLi(){
        
        let li = document.createElement('li');
    
 
   }

setItemGroupName(group,url){
     let groupName = document.createElement('a');
     li.appendChild(groupName);
     groupName.className='group-name';
     groupName.innerText= group;
     url = groupName.setAttribute('href',this.artist[1]);
      }

 setItemSongTitle(title){
    let song = document.createElement('a');
    li.appendChild(song);
    song.className='song-title'
    songTitle.innerText = this.name;

    }
    setListeners(listeners){
        let div = document.createElement('div');
        li.appendChild(div);
        div.className= 'listeners';
        div.innerText= this.listeners;
    }

    getNewElement(group,url,title,listeners){
  
        let node = document.querySelector('lista');
        node.appendChild(li)
    }

}




const loadSongs = (value)=>{
    
}
loadSongs(tracks)


const loadOverview = () =>{
}

const loadTenListened = ()=>{
 
}

const loadBiggest = (e)=>{
   
}

const init = ()=>{
      
    loadSongs()
 
    }



    

window.onload = init;


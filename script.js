class Song {
    constructor(name,listeners,artist,url){
        this.name = name;
        this.listeners = listeners;
        this.artist = artist;
        this.url = url;
    }
    
    getNewElement(tracks){
        let element = document.querySelector('.lista'); 
        let ul = document.createElement('ul');
        
        for (let i = 0; i < tracks.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.className ='far fa-play-circle'; 
            for (let i = 0; i < tracks.length; i++) {
                let link = document.createElement('a');
                li.appendChild(link);
                link.href = '#';
                link.className = 'group-name';
                
                let link1 = document.createElement('a');
                li.appendChild(link1);
                link1.href = '#';
                link1.className = 'song-title';
                
                let listener = document.createElement('div');
                li.appendChild(listener);
                listener.className = 'listeners';
            }
        }      
      element.appendChild(ul);
    }

    loadSong(){
        let canciones = [];
        canciones = tracks.filter(tracks => {
        this.artist.name = group;
        this.name = title;
        this.listeners = listeners;
        this.ulr = url;
        return canciones;
    }
    canciones.forEach(e=>{
        tracks = e.group,
        e.title,
        e.listeners,
        e.url,
        
    })
    document.querySelector('.lista').innerHTML=canciones;
}

    loadSong(tracks);

    setItemLi(){
        
    }
    
    
    setItemGroupName(group,url){
        this.artist.name = group;
        this.ulr = url;
    }
    setItemSongTitle(title){
        this.name = title;
    }
    setListeners(listeners){
    }
    getNewElement(group,url,title,listeners){

    }
}

const loadSongs = () =>{

}
const loadOverview = () =>{
}

const loadTenListened = ()=>{
 
}

const loadBiggest = (e)=>{
   
}

const init = ('DOMContentLoaded',()=>{
      
    }


window.onload = init;


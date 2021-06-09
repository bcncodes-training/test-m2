class Song {
    constructor(){
        this.groupName = '';
        this.url = '';
        this.title = '';
        this.listeners = 0;
      
    };

    setItemLi(){
        /*this.itemLi = '<li class="far fa-play-circle"><a href="#" class="group-name">Nirvana: </a>
        <a href="" class="song-title">Smells like Teen Spirit</a>
        <div class="listeners">13245</div>
    </li>';*/

        
    };

    setItemGroupName(group, url){
        this.groupName = group;
        this.url = url;
    }
    setItemSongTitle(title){
        this.title = title;
    }
    setListeners(listeners){
        this.listeners = listeners;
    }
    getNewElement(group,url,title,listeners){
        this.setItemGroupName(group, url);
        this.setItemSongTitle(title);
        this.setListeners(listeners);
        this.setItemLi();
        //return this.itemLi;
      }

};

const loadSongs = (songsListInfo)=>{
    songsClassList = [];
    if (songsListInfo){
        songsListInfo.array.forEach(track => {
            let group = track.artist.name;
            let url = track.url;
            let title = track.name;
            let listeners = track.listeners;
            let song = new Song();
            let listItem = song.getNewElement(group, url, title, listeners);
            songsClassList.push(song);
            addSongToList(listItem);
            
        });
    }
} 

const addSongToList = songLiItem => {
    console.log (songLiItem);
    
};


const loadOverview = () =>{

}

const loadTenListened = ()=>{
 
}

const loadBiggest = (e)=>{
   
}

const init = ()=>{
    liSongsElementList = document.getElementsByClassName('lista')[0];
    menuItemSelected = document.getElementsByClassName('menu-item-selected')[0];
    menuOverview = document.getElementsById('overview')[0];
    menuOverview.classList.add('menu-item-selected');
    menuOverview.addEventListener('click', ()=> {
        //loadOverview();
    });

 
    };

window.onload = init();




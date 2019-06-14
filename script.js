//LÓGICA


class Song {
    constructor(group, title, listeners, url){ 
        this.group = group;
        this.title = title;
        this.listeners = listeners;
        this.url = url;
        // list="";
    }
    setItemLi(){
        let li = document.createElement('li')
        li.setAttribute('class', 'far fa-play-circle');
        return li;
    }  

    setItemGroupName(group,url){
        let a = document.createElement('a')
        a.setAttribute('class','far fa-play-circle');
        a.setAttribute('href', `"${this.url}"`);        
        a.innerText = group;
        return a;
        }
    setItemSongTitle(title){
        let a = document.createElement('a');
        a.setAttribute('class','song-title')
        a.innerText = title;
        return a;
    }
    setListeners(listeners){
        let div = document.createElement('div');
        div.setAttribute('class', 'listeners');
        div.innerText =listeners;
        return div;    
    }    
    
    getNewElement(group,url,title,listeners){        
        let list = this.setItemLi();           
        list.appendChild(this.setItemGroupName(group,url));
        list.appendChild(this.setItemSongTitle(title));
        list.appendChild(this.setListeners(listeners));
        return list;
    }        
}

const loadSongs = (tracks)=>{
    // let newArray = [];     
    // for (i=0; i<tracks.length; i++){        
    //     let newSong = new Song(tracks[i].artist.name, tracks[i].name, tracks[i].listeners, tracks[i].artist.url);
    //     newArray.push(newSong)
    // }
    // let lista = document.getElementsByClassName("lista")
    let newArr = JSON.parse(JSON.stringify(tracks));
    let container = document.getElementsByClassName('lista');
    container[0].innerHTML = '';
    newArr.forEach(e => {
        let songs = new Song();
        let li = songs.getNewElement(e.artist.name, e.url, e.name, e.listeners);
        container[0].appendChild(li);
        console.log(li);
    });
}

const loadOverview = () => {
    let menuItemSelected = document.getElementsByClassName('menu-item-selected');
    menuItemSelected[0].innerText = 'Overview';
    loadSongs(tracks);
}

function listeners() {
    let overview = document.getElementById('overview').children[0].addEventListener('click', loadOverview);    
}

const init = () => {
    listeners();
    let overview = document.getElementById('overview').children[0].focus();
    loadOverview()

}

window.onload = init;







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


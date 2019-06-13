let songsClassList,
  liSongsElementList,
  menuItemSelected,
  menuOverview,
  menuTenListed,
  menuBiggest;
class Song {
  constructor() {
    this.groupName = '';
    this.url = '';
    this.title = '';
    this.listeners = 0;
  }
  setItemLi() {
    this.itemLi = `<li class="far fa-play-circle"><a class="group-name" title="Ir al Grupo" href="${
      this.url
    }">${this.groupName}</a><a class="song-title">${
      this.title
    }</a><div class="listeners">${this.listeners}</div></li>`;
  }
  setItemGroupName(group, url) {
    this.groupName = group;
    this.url = url;
  }
  setItemSongTitle(title) {
    this.title = title;
  }
  setListeners(listeners) {
    this.listeners = listeners;
  }
  getNewElement(group, url, title, listeners) {
    this.setItemGroupName(group, url);
    this.setItemSongTitle(title);
    this.setListeners(listeners);
    this.setItemLi();
  }
}

const loadSongs = songsList_Info => {
  if (!songsClassList) {
    songsClassList = new Array();
    songsList_Info.forEach(track => {
      let group = track.artist.name;
      let url = track.url;
      let title = track.name;
      let listeners = track.listeners;
      let song = new Song();
      song.getNewElement(group, url, title, listeners);
      songsClassList.push(song);
      addSongToList(song.itemLi);
    });
  } else {
    songsList_Info.forEach(song => {
      addSongToList(song.itemLi);
    });
  }
};

const addSongToList = songLiItem => {
  console.log(songLiItem);
  liSongsElementList.innerHTML += songLiItem;
};

const loadOverview = () => {
  liSongsElementList.innerHTML = '';
  loadSongs(songsClassList);
};

const loadTenListened = () => {
  liSongsElementList.innerHTML = '';
  // Copia Array Original
  console.log(songsClassList);
  let songs = new Array();
  for (let i = 0; i < songsClassList.length; i++) songs.push(songsClassList[i]);
  // Ordenar Array
  for (let i = 0; i < songs.length - 1; i++) {
    for (let j = 0; j < songs.length; j++) {
      let song1 = songs[i];
      let song2 = songs[j];
      if (parseInt(song1.listeners) < parseInt(song2.listeners)) {
        let aux = songs[i];
        songs[i] = song2;
        songs[j] = aux;

        // //song 2
        // let song_2 = songs.splice(j, 1);
        // songs.splice(i, 0, song_2);
        // //song 1
        // let song_1 = songs.splice(i + 1, 1);
        // songs.splice(j, 0, song_1);
      }
    }
  }
  // Filtrar primeros 10 elementos
  let filteredArray = [];
  for (let i = 0; i < 10; i++) filteredArray.push(songs[i]);
  // Cargar Nueva Lista
  loadSongs(filteredArray);
};

const loadBiggest = e => {
  liSongsElementList.innerHTML = '';
  // array
  let arraySingers = [];
  songsClassList.forEach(song =>{
      if(arraySingers[song.group]){  
        arraySingers[song.group].songs++; 
        arraySingers[song.group].listeners += parseInt(song.listeners); 
      } else {
        arraySingers[song.group] = {
            group : song.group,
            songs : 1,
            listeners : parseInt(song.listeners)
        }
      }
  });

  let mostListened = null;
  
  arraySingers.forEach((artist) => {
      if(mostListened){
        if(mostListened.listeners < artist.listeners) mostListened = artist;
      } else {
        mostListened = artist;
      }
      
  });


  let newItem = `<li class="far fa-play-circle"><a class="group-name" title="Ir al Grupo" href="#">${mostListened.group}</a><div class="listeners">${mostListened.listeners}</div></li>`;

  liSongsElementList.appendChild(newItem);
};

const updateTitle = selectionName => {
  menuItemSelected.innerHTML = selectionName;
};

const init = () => {
  console.log('Cargando....');
  liSongsElementList = document.getElementsByClassName('lista')[0];
  menuItemSelected = document.getElementsByClassName('menu-item-selected')[0];
  menuOverview = document.getElementById('overview');
  menuOverview.childNodes[0].focus();
  menuOverview.classList.add('menu-item-selected');
  menuOverview.addEventListener('click', () => {
    loadOverview();
  });
  menuTenListed = document.getElementById('ten-listened');
  menuTenListed.addEventListener('click', () => {
    loadTenListened();
  });
  menuBiggest = document.getElementById('biggest');
  menuBiggest.addEventListener('click', () => {
    loadBiggest();
  });
  loadSongs(tracks);
  loadOverview();
};

window.onload = init();

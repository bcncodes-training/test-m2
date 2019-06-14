class Song {
    constructor(name, listeners, url, group){
        this.group = group;//parametros que necesito sacar de groupName.
        this.name = name;
        this.listeners = listeners;
        this.url = url;
        


    }
//getElement para .lista
//addEventListener innerHtml

//elementos llamada html
    setItemLi(){
        let list = document.createElement("li", ("button"));
        let enlace = document.createElement("a");
        let box = document.createElement("div");
        let element1 = document.getElementById("lista");

        list.appendChild(enlace);
        list.appendChild( box);
        element1.appendChild(list);
        let html = element1.outerHTML;//coge TODO el html
        console.log(html);
        //dibujado el container, ¿como introduzco los datos? callback
    }
    
    setItemGroupName(group,url){
        //sacar de tracks [] 
        //let str = tracks;// me reconoce el array
        //this.name = name;
       
        // for( i = 0; i < str.length; i++){//recorre,pero me dice que result ya no es una array
            // como recorremos objetos?for... in!!
          /*  for(let name in str){
             console.log(name + ": " + str[name]);
             //lee objetos
             if (str.hasOwnProperty(name)){
                 group = name;
             }
            // const name = Object.keys(name);
            }*/
        
       //DE NUEVO
      // let track = tracks.shift();//problema, solo coge la primera!
      // let song = new Song(track.url, track.artist.name);
       //return song;// no me devuelve nada en el console log!!

       //NUEVO II
       //quiero recorrer TODO el objeto.
       // for in me lo hacia, pero no me leia prop
            
       
      /* for(track in tracks){
           let url = tracks[track].url;
           let group = tracks[track].artist.name;
           let song = new Song (url, group);
           //xk no se me relacionan con los parametros de arriba?!!
           console.log(song);
           
       }*/
    }
    setItemSongTitle(title){
        //track[]
       // let track = tracks.shift();
       // let song = new Song(track.name);
       // return song;
      /* for(track in tracks){
        let title = tracks[track].name;
        let song = new Song(title);
        return song
       }*/
    }
    setListeners(listeners){
        //sacar de setItem
       // let track = tracks.shift();
       // let song = new Song(track.listeners);
       // return song;
     /*  for(track in tracks){
        let listeners = tracks[track].listeners;
        let song = new Song(listeners);
        return song
       }*/
    }
    getNewElement(group,url,title,listeners){

    }

}
//pasar array de canciones tracks[]
//array de objetos
const loadSongs = ()=>{
 
// for ...in
for (track in tracks) {
    let name = tracks[track].name;
    let url = tracks[track].url;
    let artist = tracks[track].artist.name;
    let listeners = tracks[track].listeners;
    let song = new Song(name,listeners,url,artist);
    return song
}
}
const loadOverview = () =>{
}

const loadTenListened = ()=>{
 
}

const loadBiggest = (e)=>{
   
}

const init = ()=>{
 //declaraciones y donde pintaremos finalmente

    }


window.onload = init;


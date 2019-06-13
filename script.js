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
        let list = document.createElement("li");
        let enlace = document.createElement("a");
        let box = document.createElement("div");
        let element1 = document.getElementById("lista");

        list.appendChild(enlace);
        list.appendChild( box);
        element1.appendChild(list);
        let html = element1.outerHTML;//coge TODO el html
        console.log(html);
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
       let track = tracks.shift();//problema, solo coge la primera!
       let song = new Song(track.url, track.artist.name);
       console.log(song);
    }
    setItemSongTitle(title){
        //track[]
        let track = tracks.shift();
        let song = new Song(track.name);
    }
    setListeners(listeners){
        //sacar de setItem
        let track = tracks.shift();
        let song = new Song(track.listeners);
    }
    getNewElement(group,url,title,listeners){

    }

}
//pasar array de canciones tracks[]
//array de objetos
const loadSongs = ()=>{
 
// for ...in
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


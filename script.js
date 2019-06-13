class Song {
    constructor(name, listeners, url, group){
        this.group = group;//parametros que necesito sacar de groupName.
        this.name = name;
        this.listeners = listeners;
        this.url = url;//vas bien, es mas fácil de lo que crees
        


    }
//getElement para .lista
//addEventListener innerHtml

//elementos llamada html
    setItemLi(){
        let list = document.createElement("li");
        let enlace = document.createElement("a");
        let box = document.createElement("div");
        let element1 = document.getElementsByClassName("lista");

        list.appendChild(enlace, box);
        element1.appendChild(list);

    }
    
    setItemGroupName(group,url){
        //sacar de tracks [] 
        let str = tracks;// me reconoce el array
        this.name = name;
       
        // for( i = 0; i < str.length; i++){//recorre,pero me dice que result ya no es una array
            // como recorremos objetos?for... in!!
            for(let name in str){
             console.log(name + ": " + str[name]);
             //lee objetos
             if (str.hasOwnProperty(name)){
                 group = name;
             }
            // const name = Object.keys(name);
            }
        
       // console log no me da error pero me dice que no tengo declaradas ninguna de las let
    }
    setItemSongTitle(title){
        //track[]
    }
    setListeners(listeners){
        //sacar de setItem
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


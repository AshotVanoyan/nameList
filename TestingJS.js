let list = [
    "Ashot",
    "Lara",
    "Maria",
    "Anna",
"Rudolf",
"Arman",
"Erem",
"Lora",
"Ani"]

let searchText="";


const input=document.getElementById("input");
input.addEventListener("keyup",(e)=>{
    searchText=input.value;
    refresh();
})


let id;

function refresh() {
    if(id){
        clearTimeout(id);
    }
    id =setTimeout(()=>{
        console.log("running")
        render();
    },1000)
}


const root = document.getElementById("root");

function render(){
    root.innerHTML=""
    list.filter(name=>{
        return name.indexOf(searchText)!==-1;
    }).
    map(name => {
        const div = document.createElement("div");
        div.innerText = name;
        return div;
    }).forEach(el => {
        root.appendChild(el)
    })
}

render();








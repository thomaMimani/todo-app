let titleVal = document.querySelector(`.title`)
let descriptionVal = document.querySelector(`.description`)
let titleEl = document.querySelector(`.title-list`)
let descriptionEl = document.querySelector(`.description-list`)


// let todo = []
// function add(){

//     if(titleVal==''&& descriptionVal=='' ){
//         return
//     }else{
        
        
//         todo.push([titleVal.value, descriptionVal.value])
//         titleEl.innerHTML=todo[0]
//         descriptionEl=todo[1]
//         console.log(titleVal.value, descriptionVal.value)
//     }
// }

// for (i of todo){
//     titleEl.innerHTML=i[0]
//     descriptionEl=i[1]
//     console.log(i[0],i[1])
// }

let todo = {
    constructor
}

function add(){
    todo.set(titleVal.value, descriptionVal.value)
    console.log(todo, ...todo.keys(), ...todo.values())
    console.log(todoKeys);
}
let todoKeys = [...todo.keys()]

// titleEl.textContent=
// descriptionEl.textContent=

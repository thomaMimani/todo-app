let titleVal = document.querySelector(`.title`)
let descriptionVal = document.querySelector(`.description`)
let titleEl = document.querySelector(`.title-list`)
let descriptionEl = document.querySelector(`.description-list`)


let todo = []
function add(){
    todo.push([titleVal.value, descriptionVal.value])
    titleEl.innerHTML=todo[0]
    descriptionEl=todo[1]
}

for (i of todo){
    titleEl.innerHTML=i[0]
    descriptionEl=i[1]
    console.log(i[0],i[1])
}


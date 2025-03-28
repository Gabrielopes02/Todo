function add(){

let tarefa = document.getElementById("input").value
let li = document.createElement("li")
//li.innerHTML= tarefa + '<span onclick=" deletar(this)">❌</span>'
li.innerHTML=  '<input type="checkbox" id= "checkbox" onclick = "deletar(this)"/>' +tarefa 
document.querySelector("ul").appendChild(li)

document.getElementById("input").value = ""
}



function deletar(li){

li.parentElement.remove()

}
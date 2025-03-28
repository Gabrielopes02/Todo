

function adicionartask(){
    let lista = document.querySelector('ul')
    let text = document.getElementById('texto')
    
    let novatask = document.createElement('li')
    novatask.innerHTML = `<input type="checkbox" class="check" onclick = "excluirtask(this)"> ${text.value}`
    lista.appendChild(novatask)
   text.value = ''
}


function excluirtask(li){
li.parentElement.remove()
}
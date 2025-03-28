

function adicionartask(){
    let lista = document.querySelector('ul')
    let text = document.getElementById('texto').value
    
    let novatask = document.createElement('li')
    novatask.innerHTML = text
    lista.appendChild(novatask)
    
}

addEventListener()

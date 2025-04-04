
var i = 0
function adicionartask(){
    let lista = document.querySelector('ul')
    let text = document.getElementById('texto')
    let novatask = document.createElement('li')
    novatask.setAttribute("id",i)
    novatask.innerHTML = `<input type="checkbox" class="check"  onclick = "concluirtask(${novatask.id})"> ${text.value}`
    lista.appendChild(novatask)
   i++
   text.value = ''
}

var estadotexto = false
function concluirtask(id){
  
  let input = document.getElementById(id)
  let texto = input.textContent
  
if(estadotexto == false){

  input.innerHTML = `<input type="checkbox" class="check"  onclick = "concluirtask(${id})"><s>${texto}</s> `
  estadotexto = true
  
}
else{
    
    input.innerHTML = `<input type="checkbox" class="check"  onclick = "concluirtask(${id})">  ${texto}`
    estadotexto = false
}






}
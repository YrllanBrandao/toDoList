const buttonAdd =  document.querySelector("#buttonAdd");


buttonAdd.addEventListener('click', () =>{
  
  
  const task = document.getElementById("addText");
 
 
 if(task.value.length <= 0)
 {
   alert("Ops!! parece que você adicionou uma tarefa vazia, tente novamente.")
 }
 else{
  const objTarefa = {
  tarefa: '',
   id:  ''
   ,}

   
   
  objTarefa.id = idGenerator();
  objTarefa.tarefa = conteudoTarefa(task);
  
  addTarefa(objTarefa)
 
 }
})



function idGenerator()
{
 
  return Math.floor(Math.random()*800);
  
  
}


function conteudoTarefa(task)
{
 conteudo = task.value;
 task.value = "";
 
  return conteudo;
}


function addTarefa(tarefa){
  const listaTarefa = document.querySelector("#listaTarefa");
  
  const textSpan = document.createElement('span');
  const trashSpan = document.createElement('span');
  const itemTarefa = document.createElement('li');
  
  itemTarefa.setAttribute('id', tarefa.id)
  itemTarefa.classList.add('tarefa');
  
  listaTarefa.appendChild(itemTarefa);
  
  itemTarefa.appendChild(textSpan);
  textSpan.classList.add('textoTarefa');
  textSpan.innerHTML = tarefa.tarefa;
  itemTarefa.appendChild(trashSpan);
  trashSpan.classList.add('trashButton');

  
  trashSpan.addEventListener('click', ()=>{
    
    listaTarefa.removeChild(trashSpan.parentElement);
   
  })
}








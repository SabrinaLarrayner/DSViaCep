function State(){
   this.container =  null;
   this.btnClosse = null;  
}
const state = new State();

export function init(){
    state.container = document.querySelector("#modal-contact");
    state.btnClosse  = document.querySelector("#modal-contact-closse");
    state.btnClosse.addEventListener('click', handleBtnClosseClick);
    state.container.addEventListener('click',handleContainerClick);
}


 export function showModal(){
     state.container.classList.add("active");
 }
 export function closseModal(){
    state.container.classList.remove("active");
}
function handleBtnClosseClick (event){
  event.preventDefault();
  closseModal();
}

function handleContainerClick (event){
    if (event.target === this){
       closseModal();
    }
}
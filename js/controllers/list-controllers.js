
function State (){
    this.listSection = null;
}

const state = new State();

export function innit (){
    state.listSection = document.querySelector("#list-section")
} 

export function addCard (addres){
    const card = creatCard(addres);
    state.listSection.appendChild(card)
}

function creatCard (addres){
   const div = document.createElement("div");
   div.classList.add("card-list-item")

   const h3 = document.createElement("h3");
   div.classList.add("card-list-item")
   h3.innerHTML = addres.city;

   const line = document.createElement("p");
   line.classList.add("addres-line");
   line.innerHTML = `${addres.street}, ${addres.number}`;

   const cep = document.createElement("p");
   cep.classList.add("addres-cep");
   cep.innerHTML = addres.cep;

   div.appendChild(h3);
   div.appendChild(line);
   div.appendChild(cep);

   return div

}


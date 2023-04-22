function State(){
    this.btnSave = null;
    this.btnClear = null;
    this.inputCep= null;
    this.inputStreet = null;
    this.inputNumber = null;
    this.inputCity = null;

    this.errorCep = null;
    this.errorNumber = null;
}
// essa função State representa qual é o tipo de estado
// a função state é o meu estado, ou seja ele está pegando os valores do meu input, que o usuário coloca
// o objetivo do "this" é acessar um módulo de um objeto

const state = new State(); // aqui vamos estanciar o meu pobjeto, "estados". essa função state é a função consultora da função acima "State"
 
export function init (){
    state.inputCep = document.forms.newAddres.cep;
    state.inputStreet = document.forms.newAddres.street;
    state.inputNumber = document.forms.newAddres.number;
    state.inputCity = document.forms.newAddres.city;

    state.btnSave = document.forms.newAddres.btnSave
    state.btnSave = document.forms.newAddres.btnClear

    state.errorCep = document.querySelector('[data-error="cep"]')
    state.errorNumber = document.querySelector('[data-error="number"]')
    console.log(state) // estou chamando a minha segunda função

} // aqui nessa função "init" iniciamos todos os valores do estado dentro da função "init" (iniciar)

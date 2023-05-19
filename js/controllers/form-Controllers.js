
import Addres from '../models/addres.js';
import * as adressService from '../services/addres-service.js';
import * as listController from '../controllers/list-controllers.js'
function State(){
    this.addres = new Addres();

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

const state = new State(); // aqui vamos estanciar o meu objeto, "estados". essa função state é a função consultora da função acima "State"
 
export function init (){

    state.inputCep = document.forms.newAddres.cep;
    state.inputStreet = document.forms.newAddres.street;
    state.inputNumber = document.forms.newAddres.number;
    state.inputCity = document.forms.newAddres.city;

    state.btnSave = document.forms.newAddres.btnSave
    state.btnClear = document.forms.newAddres.btnClear

    state.errorCep = document.querySelector('[data-error="cep"]')
    state.errorNumber = document.querySelector('[data-error="number"]')
   /* console.log(state) // estou chamando a minha segunda função*/  

    
    state.inputNumber.addEventListener('change', handleInputErrorChange) // aqui ele está pegando a minha função que tem logo abaixo, e analisando se o campo vai estar vazio(input do núemro)
    state.inputNumber.addEventListener('keyup', handleInputErrorKeyup)
    state.btnClear.addEventListener('click', handleBtnClearClick);
    state.btnSave.addEventListener('click', handleBtnSaveClick);
    state.btnSave.addEventListener('change', handleInputCepChange);
    state.inputCep.addEventListener('change', handleInputCepChange)
} // aqui nessa função "init" iniciamos todos os valores do estado dentro da função "init" (iniciar)

function handleInputErrorKeyup(event){
    state.addres.number = event.target.value
}

async function handleInputCepChange (event){
     const cep = event.target.value;
    try{
        const addres = await  adressService.fidnByCep(cep)
        state.inputStreet.value = addres.street;
        state.inputCity.value = addres.city;
        state.addres =  addres;
        setFormErro("cep", " ");
        state.inputNumber.focus();
    }
    catch (e){
        state.inputStreet.value = " ";  
        state.inputCity.value =" ";    
        setFormErro("cep", "Informe cep válido")
    }

}

async function handleBtnSaveClick (event){
    event.preventDefault();
    const errors = adressService.getErrors(state.addres);
    const keys = Object.keys(errors);
    if (keys.length > 0){
       for ( let i = 0; i < keys.length; i++){
        setFormErro(keys[i], errors[keys[i]]);
      } }
      else {
        listController.addCard(state.addres);
        clearForm();   
      }
    }   
function handleInputErrorChange(event){
    if (event.target.value == "") /*estamos pegando um evento que está na parametrização, e a função "target" verifica s eo campoe stá vazio*/{
    setFormErro("number", "Campo requerido!");
    }
    else{
    setFormErro("number", "")
    }
}

function handleBtnClearClick(event){
 event.preventDefault();
 clearForm();
}

 function clearForm(){
    state.inputCep.value ="";
    state.inputCity.value = "";
    state.inputNumber.value="";
    state.inputStreet.value = "";

    setFormErro ("cep", "")
    setFormErro ("number", "")

    state.addres = new Addres();
    state.inputCep.focus(); // Ao clicar em limpar, a função "focus"  irá jogar o cursor para o primeiro input, nesse caso é o CEP

 }

function setFormErro(key, value) /* estamos passando a chave pleo "key" e deois o valor"value"*/ {
        const element = document.querySelector(`[data-error="${key}"]`);  // "key" é a minha chave que vou passar como argumento
        element.innerHTML = value;
}
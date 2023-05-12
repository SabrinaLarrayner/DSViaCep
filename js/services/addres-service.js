import * as requestService from '../services/excepition/request-service.js';
import Addres from "../models/addres.js";

export async function fidnByCep(cep){
 const url = `https://viacep.com.br/ws/${cep}/json/`;
 const result = await requestService.getJson(url);
 const addres = new Addres(result.cep, result.logradouro, null, result.localidade);
 return addres; 

}
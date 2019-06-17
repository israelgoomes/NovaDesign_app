import { configHelper } from './../../app/helpers/configHelper';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { usuarioModel } from '../../app/models/usuarioModel';
import { HttpProvider } from '../http/http';
import { HttpResultModel } from '../../app/models/httpResultModel';
/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider extends ProviderBase<usuarioModel> {

url: string = `${configHelper.url}usuario`;


  constructor(public http: HttpProvider) {
    super(`${configHelper.url}usuario`, http);

  }

async autenticate(email: string, senha: string): Promise<HttpResultModel>{
  return await this.http.post(`${this.url}/autenticar`, {email:email, senha:senha})
}
async get(): Promise<HttpResultModel>{
return await this.http.get(`${this.url}`);
}


static get getTokenAcess(): string{
  return localStorage.getItem(configHelper.storageKeys.token);
}

static RegisterLogin(result: any){
  localStorage.setItem(configHelper.storageKeys.token, result.token);
  localStorage.setItem(configHelper.storageKeys.user, JSON.stringify(result.usuario));
}

//criando método para verificar se po usuário está logado, se sim, retorna true
static get isLogado(): boolean {
  return (localStorage.getItem(configHelper.storageKeys.token) !=undefined)
}

}

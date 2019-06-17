import { HttpProvider } from './../http/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configHelper } from '../../app/helpers/configHelper';
import { ProviderBase } from '../../app/base/providerBase';
import { projetoModel } from '../../app/models/projetoModel';

/*
  Generated class for the ProjetosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjetosProvider extends ProviderBase<projetoModel>{

  url: string =`${configHelper.url}projetos`

  constructor(public http: HttpProvider) {
    super(`${configHelper.url}projetos`, http);
    
  }

}

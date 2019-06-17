import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http';
import { configHelper } from '../../app/helpers/configHelper';
import { ProviderBase } from '../../app/base/providerBase';
import { clienteModel } from '../../app/models/clienteModel';
import { HttpResultModel } from '../../app/models/httpResultModel';

/*
  Generated class for the ClientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientesProvider extends ProviderBase<clienteModel> {

url: string = `${configHelper.url}clientes`

  constructor(public http: HttpProvider) {
    super(`${configHelper.url}clientes`, http);
  }



}

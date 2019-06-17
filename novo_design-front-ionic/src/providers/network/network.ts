import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";

//criando variáveis para ignorar o erro do navigator, algumas funções usadas nele não são reconhecidas
declare var navigator: any;
declare var Connection: any;

@Injectable()
export class NetworkProvider {
  constructor(private platform: Platform) {}

  //verificando se está online
  get IsOnline(): boolean {
    //verificando se a pessoa está na plataforma, o 'cordova' verifica se está em um device
    if (this.platform.is("cordova")) {
        //verificando se existe a connection, e se sim verificando o tipo da conexão
        if(navigator.connection && navigator.connection.type) {
            //perguntando se está online
            return (navigator.connection.type != Connection.UNKKONW && navigator.connection.type != Connection.NONE);
        } 
        //se não consiga checar as informações a cima ele retorna true, caso não seja devide ele vai para o else abaixo. 
        else
          return true;
    } else {
      //o navigator retorna todas as propriedades do navegador, nesse caso estamos utilizando a opção de verificar se está online
      return navigator.onLine;
    }
  }
}

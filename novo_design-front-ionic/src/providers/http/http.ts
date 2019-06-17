import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { SpinnerProvider } from '../spinner/spinner';
import { AlertProvider } from '../alert/alert';
import { NetworkProvider } from '../network/network';
import { HttpResultModel } from '../../app/models/httpResultModel';
import { _ParseAST } from '@angular/compiler';
import { UsuarioProvider } from '../usuario/usuario';

@Injectable()
export class HttpProvider {

  constructor(
    private http: HttpClient,
    private spinnerSrvc: SpinnerProvider,
    private alertSrvc: AlertProvider,
    private networkSrvc: NetworkProvider
    ) {    }



public createHeader(header?: HttpHeaders): HttpHeaders{
  if(!header){
    header = new HttpHeaders();
  }

    header = header.append('Content-type', 'application/json');
    header = header.append('accept', 'application/json');

    let token = UsuarioProvider.getTokenAcess;
    if(token){
      header = header.append('user-token', token);
    }
    return header;

}


//criando uma promessa, pois é um código que vai demorar para se executar.
public get(url: string): Promise<HttpResultModel> {

  //startando o loader, é necessário apenas uma última vez
  this.spinnerSrvc.show("Carregando os dados...");
  let header = this.createHeader();
  //criando uma nova promessa, por padrão se cria o resolve e o reject, não está sendo utilizado o reject pq dentro do HttpResultModel que está sendo passado a cima na promise já tem as informações de erro.
  return new Promise(resolve =>{

          //verirfica se o usuário está online
          if (this.networkSrvc.IsOnline) {
            //se estiver online ele pega o http do angular e passa a url que veio, e espera o subscribe que é o retorno
            this.http.get(url, {headers: header}).subscribe(_res => {
              //quando ele fizer o retorno ele vai tirar o loader com o método hide criado no provider spinner e vai resolver a promise
              this.spinnerSrvc.hide();
              //aqui é feito o resolve, no caso o success true pois foi resolvido com sucesso, no data vem o que retornou do api da pessoa, e virá sem erro
              resolve({ success: true, data: _res, err: undefined});

            }, err => {
              //caso de algum erro no get, ele irá também ocultar o alert
              this.spinnerSrvc.hide();
              //vai dar um toast
              this.alertSrvc.toast('Não foi possível consultar os dados, verifique sua conexão e tente novamente', 'bottom');
              //e da um resolve dizendo que não houve sucesso, não tem informação e passa o erro.
              resolve({ success: false, data: undefined, err: err });
            });
            //cai aqui caso o usuário esteja offline
          }else {
              this.alertSrvc.toast('Você está offline, e infelizmente não pode ser carregado os dados!', 'bottom');
              //da um resolve dizendo que não houve erro, a informação vem vazia e sem erro.
              resolve({ success: true, data: [], err: undefined});
          }
  });
}

public post(url: string, model: any): Promise<HttpResultModel> {
    
  this.spinnerSrvc.show("Salvando informações...");
  let header = this.createHeader();
  return new Promise(resolve => {
    if (this.networkSrvc.IsOnline) {
      this.http.post(url, model, {headers: header}).subscribe(
        _res => {
          this.spinnerSrvc.hide();
          resolve({ success: true, data: _res, err: undefined });
          console.log('Salvando')

        },
        err => {
          this.spinnerSrvc.hide();
          console.log(err);

          
          if (err.status == 400) {

            let msg = "";
            err.error.validation.forEach(_err =>{
              msg += `<li>${_err.message}</li>`;
            });
            this.alertSrvc.alert(err.error.message, msg);

          } 
          else if(err.status == 404){
            this.alertSrvc.alert("informação", err.error.message);
          }
          else
            this.alertSrvc.toast(
              "Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente",
              "bottom"
            );
          resolve({ success: false, data: undefined, err: err });
        }
      );
    } else {
      this.alertSrvc.toast(
        "Você está offline e infelizmente não pode ser enviado os dados",
        "bottom"
      );
      resolve({ success: true, data: [], err: undefined });
    }
  });
}

public put(url: string, model: any): Promise<HttpResultModel>{
  this.spinnerSrvc.show("Atualizando informações");
  let header = this.createHeader();
  return new Promise(resolve =>{
    //caso de tudo certo com a conexão
    if(this.networkSrvc.IsOnline){
      this.http.put(url, model, {headers: header}).subscribe(_res =>{
        this.spinnerSrvc.hide();
        resolve({success: true, data: _res, err: undefined});
        //caso de algum problema de carregamento ou salvamento
      }, err =>{
        this.spinnerSrvc.hide();
        console.log(err);
        if(err.status ==400){
          let msg = '';
          err.error.validation.forEach(_err =>{
            msg + `<li>${_err.message}</li>`;
          });
          this.alertSrvc.alert(err.erros.message, msg);
        }
          else
          this.alertSrvc.toast('Não foi possível realizar o processamento da informação, verifique sua conexão e tnete novamente', 'bottom');
          resolve({success: false, data: undefined, err: err});
      });

    }else {
      this.alertSrvc.toast('Você está offline e infelizmente não pode ser enviado os dados', 'bottom');
      resolve({success: true, data: [], err: undefined});
    }
  })
}


public delete(url: string): Promise<HttpResultModel>{
  this.spinnerSrvc.show('Deletando informações');
  return new Promise(resolve =>{
    if(this.networkSrvc.IsOnline){
    this.http.delete(url).subscribe(_res=>{
      this.spinnerSrvc.hide();
        resolve({success: true, data: _res, err: undefined});
    }, err =>{
      this.spinnerSrvc.hide();
      this.alertSrvc.toast('Não foi possível realizar o porcessamemto da informação, verifique a sua conexão e tente novamente', 'bottom');
      resolve({success: false, data: undefined, err: err});
    });
  } else {
    this.alertSrvc.toast('Você está offline e infelizmente não pode ser enviado os dados!', 'bottom');
    resolve({success: true, data: [], err: undefined});
  }
  })
}
}

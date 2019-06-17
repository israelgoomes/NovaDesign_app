import { AlertProvider } from './../../../providers/alert/alert';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientesProvider } from '../../../providers/clientes/clientes';
import { clienteModel } from '../../../app/models/clienteModel';
import { shiftInitState } from '@angular/core/src/view';

/**
 * Generated class for the CadastroClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-cliente',
  templateUrl: 'cadastro-cliente.html',
})
export class CadastroClientePage {

  cliente: clienteModel;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private clienteSrvc: ClientesProvider,
    private alertSrvc: AlertProvider
    ) {
      let _client = this.navParams.get('_cliente');
      if(_client){
          this.cliente = <clienteModel>_client
      }else {
        this.cliente = new clienteModel();
      }
  }


  async salvar(): Promise<void>{
    let sucesso = false;
    let erro: any;
      if(!this.cliente._id){
    let cadastroResult = await this.clienteSrvc.post(this.cliente);
    sucesso = cadastroResult.success;
    console.log('Sem id')
      }
      /* 
      else {
        console.log('com id')
          //passando o id e o modelo.
          let updateResult= await this.clienteSrvc.put(this.cliente._id, this.cliente)
          sucesso = updateResult.success;
      }*/
    if(sucesso){
      this.alertSrvc.toast('Cliente salva com sucesso', 'bottom');
      this.navCtrl.setRoot('ClientesPage')
    }
}


back(){
  this.navCtrl.pop();
  //ou this.viewCtrl.dismiss();  para isso é necessário inportar o viewcontroller
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroClientePage');
  }

}

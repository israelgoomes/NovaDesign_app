import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { clienteModel } from '../../../app/models/clienteModel';
import { ClientesProvider } from '../../../providers/clientes/clientes';
import { AlertProvider } from '../../../providers/alert/alert';

/**
 * Generated class for the AdmClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-cliente',
  templateUrl: 'adm-cliente.html',
})
export class AdmClientePage {
  cliente: clienteModel;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public clienteSrvc: ClientesProvider,
    public alertSrvc: AlertProvider
    ) {
      this.cliente = this.navParams.get('_cliente')

      
  
      //this.cliente = <Array<clienteModel>>this.navParams.get('_cliente')
  }

  async alterar(): Promise<void>{
    let sucesso = false
    
    //this.cliente = this.navParams.get('_cliente')
    
    if(this.cliente._id){
    //passando o id e o modelo.
    let updateResult= await this.clienteSrvc.put(this.cliente._id, this.cliente)
    sucesso = updateResult.success;
    }
if(sucesso){
this.alertSrvc.toast('Cliente salva com sucesso', 'bottom');
this.navCtrl.setRoot('ClientesPage')
}
  }

  ionViewDidLoad() {
    this.cliente = this.navParams.get('_cliente')

    console.log('ionViewDidLoad AdmClientePage');
    console.log('Recebendo cliente', this.cliente);
  }

}

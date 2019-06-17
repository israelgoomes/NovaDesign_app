import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { clienteModel } from '../../../app/models/clienteModel';

/**
 * Generated class for the DetalheClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-cliente',
  templateUrl: 'detalhe-cliente.html',
})
export class DetalheClientePage implements OnInit{

cliente: clienteModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let client = this.navParams.get('cliente');
    if(client){
        this.cliente = <clienteModel>client
    }else {
      this.cliente = new clienteModel();
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheClientePage');
    this.cliente = <clienteModel>this.navParams.get('cliente');
    console.log('Testando cliente', this.cliente)

  }

addOrEdit(): void {
    this.navCtrl.push('AdmClientePage', { _cliente: this.cliente });
    console.log('Enviando o cliente', this.cliente)

}



 detalheCliente: any = []; 
  ngOnInit(): void {
  

    //let clientes = this.navParams.get('clientes');
    //console.log('Teste de clientes para Detalhe Clientes',clientes)
    //this.detalheCliente = clientes;

  }

  back(){
    this.navCtrl.pop();
    //ou this.viewCtrl.dismiss();  para isso é necessário inportar o viewcontroller
  }
}

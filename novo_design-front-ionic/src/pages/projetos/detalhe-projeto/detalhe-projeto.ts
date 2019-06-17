import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { projetoModel } from '../../../app/models/projetoModel';

/**
 * Generated class for the DetalheProjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-projeto',
  templateUrl: 'detalhe-projeto.html',
})
export class DetalheProjetoPage {
  projeto: projetoModel;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let projeto = this.navParams.get('_projeto')
    if(projeto){
      this.projeto = <projetoModel>projeto
    }else {
      this.projeto = new projetoModel();

    }
  }

  addOrEdit(): void {
    this.navCtrl.push('AdmProjetoPage', { _projeto: this.projeto });
    console.log('Enviando o Projeto', this.projeto)

}

  ionViewDidLoad() {
    this.projeto = <projetoModel>this.navParams.get('_projeto');

    console.log('ionViewDidLoad DetalheProjetoPage');
  }

}

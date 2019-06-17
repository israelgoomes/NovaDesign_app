import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { projetoModel } from '../../../app/models/projetoModel';
import { ProjetosProvider } from '../../../providers/projetos/projetos';
import { AlertProvider } from '../../../providers/alert/alert';
import { CameraProvider } from '../../../providers/camera/camera';

@IonicPage()
@Component({
  selector: 'page-adm-projeto',
  templateUrl: 'adm-projeto.html',
})
export class AdmProjetoPage {
projeto: projetoModel;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public projetoSrvc: ProjetosProvider,
      public alertSrvc: AlertProvider,
      public cameraSrvc: CameraProvider,
      public actionSheetCtrl: ActionSheetController,
      public platform: Platform
     ) {
    this.projeto = this.navParams.get('_projeto')
  }

  async alterar(): Promise<void>{
    let sucesso = false
    
    //this.cliente = this.navParams.get('_cliente')
    
    if(this.projeto._id){
    //passando o id e o modelo.
    let updateResult= await this.projetoSrvc.put(this.projeto._id, this.projeto)
    sucesso = updateResult.success;
    }
if(sucesso){
this.alertSrvc.toast('Projeto salvo com sucesso', 'bottom');
this.navCtrl.setRoot('ProjetosPage')
}
  }


  getPictureOptions(): void {
    //actionSheet serve para aparecer as opções, se a foto será escolhida na galeria ou tirada na hora.
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Adicionar foto',
      buttons: [
        { text: 'Tirar foto', handler: () => {
          //escolhendo a opção de tirar foto no cameraprovider que foi criado, e assumindo o valor da photo para o projeto.foto
          this.cameraSrvc.takePicture(photo =>{
            this.projeto.foto = photo;
          })
  
        }, 
        icon: this.platform.is('ios') ? null : 'camera' },
  //------------------------ Opção pegar da galeria ------------
        { text: 'Pegar galeria', handler: () =>{
          this.cameraSrvc.getPictureFromGalery(photo =>{
            this.projeto.foto = photo;
          })
  
        }, icon: this.platform.is('ios') ? null : 'images'},
        //o role 'destructive' deixa o botao vermelho
        {text: 'Cancelar', role: 'destructive', 
        icon: this.platform.is('ios') ? null : 'close'
      ,handler: () => {
          //cancela a ação
        }, }
      ]
    });
    actionSheet.present();
  
  }

  ionViewDidLoad() {
    this.projeto = this.navParams.get('_projeto')
    console.log('Recebendo Projeto', this.projeto._id);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { ProjetosProvider } from '../../../providers/projetos/projetos';
import { AlertProvider } from '../../../providers/alert/alert';
import { projetoModel } from '../../../app/models/projetoModel';
import { CameraProvider } from '../../../providers/camera/camera';

@IonicPage()
@Component({
  selector: 'page-cadastro-projeto',
  templateUrl: 'cadastro-projeto.html',
})
export class CadastroProjetoPage {
projeto: projetoModel;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public projetoSrvc: ProjetosProvider,
    public alertSrvc: AlertProvider,
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController,
    public cameraSrvc: CameraProvider
    ) {

      let projeto = this.navParams.get('_projeto');
      if(projeto){
        this.projeto = <projetoModel>projeto
      }else {
        this.projeto = new projetoModel();
      }
  }

async salvar(): Promise<void> {
  console.log('entrou aqui')
  let sucesso = false;
  if(!this.projeto._id){
    let cadastroResult = await this.projetoSrvc.post(this.projeto)
    sucesso = cadastroResult.success;
  }
  if(sucesso){
    this.alertSrvc.toast('Projeto salvo com sucesso', 'bottom');
    this.navCtrl.setRoot('ProjetosPage');
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
    console.log('ionViewDidLoad CadastroProjetoPage');
  }

}

import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }

toast(message: string, position: string): void {
let toast = this.toastCtrl.create({
  message: message,
  position: position,
  duration: 3000
})
toast.present();
}


alert(title: string, message: string ): void {
  this.alertCtrl.create({
  title: title,
  message: message,
  buttons: ['OK'],
  //colocando false para clicar fora do alert e ele fechar, só irá fechar se clicar no 'OK'
  enableBackdropDismiss: false
  }).present();
}

confirm(title: string, message: string, callback: any): void {
  this.alertCtrl.create({
    title: title,
    message: message,
    buttons: [
      {text: 'Não', role: 'Cancel', handler: () => {
          console.log('Confirm:Say:no')
      }},
      {text: 'Sim', handler: () => {
        //aqui é executado o que a pessoa mandar na hr.
        callback();
      }}

    ]
  }).present();
}


}

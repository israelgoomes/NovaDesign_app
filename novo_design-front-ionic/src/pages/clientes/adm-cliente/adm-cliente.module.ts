import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmClientePage } from './adm-cliente';

@NgModule({
  declarations: [
    AdmClientePage,
  ],
  imports: [
    IonicPageModule.forChild(AdmClientePage),
  ],
})
export class AdmClientePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientesPage } from './clientes';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ClientesPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ClientesPage),
  ],
})
export class ClientesPageModule {}

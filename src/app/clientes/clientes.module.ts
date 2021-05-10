import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListClientesComponent,
    CreateClienteComponent,
    UpdateClienteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListClientesComponent
  ]
})
export class ClientesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesModule } from './clientes/clientes.module'
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { CreateClienteComponent } from './clientes/create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './clientes/update-cliente/update-cliente.component';

const routes: Routes = [
  {path: '', component: ListClientesComponent},
  {path: 'clientes', component: ListClientesComponent},
  {path: 'clientes/new', component: CreateClienteComponent},
  {path: 'clientes/edit/:id', component: UpdateClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

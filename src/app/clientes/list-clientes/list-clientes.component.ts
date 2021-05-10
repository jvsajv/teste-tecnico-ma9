import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service'
import { Cliente } from '../cliente'
@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  clienteList: any;
  id: any = 0;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientesService.getAllClients().subscribe(data => {
      console.log(data);
      this.clienteList = data;
    });
  }
  newClient(){
    window.location.assign("clientes/new/");
    
    
  }
  editClient(elem: any) {
    window.location.href = "clientes/edit/" + elem;
  }
  deleteClient(elem: any) {
    let alerta = confirm("Deseja excluir mesmo o cliente de ID: " + elem)
    if (alerta) {
      try {
        this.clientesService.deleteClient(elem).subscribe(data => {
          alert("Cliente de id: " + elem + " excluído do sistema!")
          window.location.reload();
        });
      } catch {
        alert("Houve um erro ao Deletar cliente!")
      }

    }

  }
}

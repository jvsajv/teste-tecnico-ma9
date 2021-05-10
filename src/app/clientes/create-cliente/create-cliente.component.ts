import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service'
import { Cliente } from '../cliente'

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
  clientesList: Cliente[] = [];
  constructor(
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
  }

  newClient(form: any) {
    try{
      
      let newCliente = {
        id: 10,
        nome: form.value.nome,
        sexo: form.value.sexo,
        dat_nasc: form.value.dat_nasc,
        email: form.value.email,
        phone: form.value.phone,
        cpf: form.value.cpf
      };
      this.clientesService.getAllClients().subscribe(data=>{
        this.clientesList = [data];
        
      })

      newCliente.id = this.clientesList.length;
      
      console.log(newCliente.id)

      this.clientesService.newClient(newCliente).subscribe(data=>{
        console.log(data)
        alert(form.value.nome + " foi cadastrado com sucesso!")
        window.location.href = "/clientes";
      });
    } catch (err){
      alert("Preencha todos os campos!")
    }
  }


}

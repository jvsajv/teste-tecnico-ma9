import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {

  cliente: any;
  clienteId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientesService: ClientesService
  ) { }

  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.clienteId = data.id;
    })
    
    this.clientesService.viewClient(this.clienteId).subscribe(data=> {
      this.cliente = data;
    });
  }

  updateClient(form : any){
    try{
      
      let newCliente = {
        id: this.clienteId,
        nome: form.value.nome,
        sexo: form.value.sexo,
        dat_nasc: form.value.dat_nasc,
        email: form.value.email,
        phone: form.value.phone,
        cpf: form.value.cpf
      };

      this.clientesService.updateClient(this.clienteId, form.value).subscribe(data=>{
        console.log(data)
        alert("O cliente de cpf: " + form.value.cpf + " foi atualizado com sucesso!")
        window.location.href = "/clientes";
      });
    } catch (err){
      alert("Erro ao Atualizar dados do cliente! Preencha todos os campos!")
    }
    
  }

}

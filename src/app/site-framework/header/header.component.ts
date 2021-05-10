import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  href = ""
  public pageTitle = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = window.location.pathname;
    if(this.href === "/clientes/new"){
      this.pageTitle = "Novo Cliente"
    }
    else if(this.href.startsWith("/clientes/edit/")){
      this.pageTitle = "Editar cliente"
    }
    else if(this.href === "/clientes" || "/"){
      this.pageTitle = "Lista de Clientes"
    }

    console.log(this.href)
  }

}

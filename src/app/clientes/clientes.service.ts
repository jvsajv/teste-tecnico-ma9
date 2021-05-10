import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Cliente} from './cliente'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  private clientUrl = 'https://json-server-ma9.herokuapp.com/clientes/'

  getAllClients(): Observable<Cliente>{
    return this.httpClient.get<Cliente>(this.clientUrl)
  }

  newClient(clienteBody : Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.clientUrl, clienteBody);
  }
  viewClient(clientId : number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(this.clientUrl+clientId) 
  }
  updateClient(clientId : number, clienteBody: Cliente): Observable<Cliente>{
    return this.httpClient.put<Cliente>(this.clientUrl+clientId, clienteBody);
  }
  deleteClient(clientId : number): Observable<Cliente>{
    return this.httpClient.delete<Cliente>(this.clientUrl+clientId) 
  }
}

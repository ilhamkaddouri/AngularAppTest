import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Constantes} from '../../shared/config/constantes'
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(Constantes.urls.users);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private httpClient: HttpClient)
  { }

  deleteUserByEmail(email: string){
    this.httpClient.delete(`http://localhost:8222/users/email=${email}`).subscribe();
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {useravatar, userinfo} from "../dtos/UserDto";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private httpClient: HttpClient,
      private apiservice: ApiService
  )
  { }
    getUserByEmail = (email: string): Observable<userinfo> =>{
      return this.apiservice.getByEmail(email)
    }
    deleteUserByEmail(email: string){
    this.httpClient.delete(`http://localhost:8222/users/email=${email}`).subscribe();
  }
  // updateUserPhoto = (userDTO: userinfo, email:string): Observable<userinfo> =>{
  //   console.log(userDTO)
  //   console.log(email)
  //   return this.apiservice.patchByEmail<userinfo>(email, userDTO)
  // }
  // changePhoto(userinfo: useravatar) : Observable<any> {
  //   return this.httpClient.post("http://localhost:8222/users/update",userinfo)
  // }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {userinfo} from "../dtos/UserDto";
import {emit} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";
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
}

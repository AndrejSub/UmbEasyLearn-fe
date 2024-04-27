import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {registerDto} from "../../dtos/UserDto";
import {ToastrService} from "ngx-toastr";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
      private authService: AuthService,
      private router: Router,
      private toastr: ToastrService,) {
  }

  registerDto:registerDto ={
    email:"",
    password:"",
    created_at: "",
    updated_at: "",
    role:"user"
  };

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  register(){
    this.registerDto.email = this.loginForm.get("email")?.value
    this.registerDto.password = this.loginForm.get("pwd")?.value
    console.log(formatDate(new Date(), 'yyyy/MM/dd', 'en'))
    this.registerDto.created_at = formatDate(new Date(), 'dd/MM/yyyy', 'en')
    this.registerDto.updated_at = formatDate(new Date(), 'dd/MM/yyyy', 'en')

    this.authService.createUser(this.registerDto).subscribe((res:any) =>{
      this.authService.logIn(this.registerDto)
      this.toastr.success("Account created successfully")
    },error =>{
      console.log(error)

    })
  }

}

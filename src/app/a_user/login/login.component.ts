import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import { RouterLink} from "@angular/router";
import {loginDto} from "../../dtos/UserDto";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(
    private authService: AuthService) {
}
loginDto:loginDto ={
  email:"",
  password:""
};

token:any =null

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}') // At least one number, one lowercase and one uppercase letter
    ]),
  });


  login() {
    this.loginDto.email = this.loginForm.get("email")?.value
    this.loginDto.password = this.loginForm.get("pwd")?.value
    this.authService.logIn(this.loginDto)
  }
}

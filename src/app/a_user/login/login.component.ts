import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {loginDto} from "../../dtos/UserDto";
import {AuthService} from "../../services/auth.service";
import {ToastrService} from "ngx-toastr";

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
    email: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })


  login() {
    this.loginDto.email = this.loginForm.get("email")?.value
    this.loginDto.password = this.loginForm.get("pwd")?.value

    this.authService.logIn(this.loginDto)


  }
}

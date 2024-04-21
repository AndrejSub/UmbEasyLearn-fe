import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
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
constructor(private authService: AuthService, private router: Router) {
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

    console.log(this.loginDto)
    this.authService.getToken(this.loginDto).subscribe((res:any) =>{
      if(res.result){
        alert("success")
        localStorage.setItem("loginToken",res.token)
        this.router.navigateByUrl("")
        // this.loginService.logIn()
      }else{
        alert("bad login")

      }
    })
  }
}

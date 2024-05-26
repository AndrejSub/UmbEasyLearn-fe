import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {registerDto} from "../../dtos/UserDto";
import {ToastrService} from "ngx-toastr";
import {formatDate, NgIf} from "@angular/common";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf
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


  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}') // At least one number, one lowercase and one uppercase letter
    ]),
    confirmPwd: new FormControl('', [
      Validators.required
    ])
  }, );

  register(){
    this.registerDto.email = this.registerForm.get("email")?.value
    this.registerDto.password = this.registerForm.get("pwd")?.value
    console.log(this.registerDto.password)
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

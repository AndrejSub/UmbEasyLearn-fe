import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {loginDto} from "../dtos/UserDto";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.scss'
})
export class ChangepasswordComponent {

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              ) {}

  loginDto:loginDto ={
    password :"",
    email: localStorage.getItem("userEmail")
  }


  loginForm = new FormGroup({
    pwd: new FormControl('', [Validators.required]),
  })

  changePassword(){
    this.loginDto.password = this.loginForm.get("pwd")?.value
    this.authService.changePassword(this.loginDto).subscribe((res:any) =>{
      this.toastr.success("Password changed successfully")
      this.router.navigateByUrl("")
    }, error => {
      this.toastr.error("Could not change password. Please try again")
    })

  }
}

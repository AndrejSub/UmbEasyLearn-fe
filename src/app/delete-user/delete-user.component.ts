import {Component, Input} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.scss'
})
export class DeleteUserComponent {

  constructor(
      private userService: UserService,
      private router: Router,
      private authService: AuthService,
  ) {}

   // @ts-ignore
  email:string = localStorage.getItem("userEmail")

  delete():void{

    this.userService.deleteUserByEmail(this.email)
    this.router.navigateByUrl("").then(() => {
      this.authService.logout()

      window.location.reload();
    });


  }

}

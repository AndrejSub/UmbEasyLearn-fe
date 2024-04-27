import { Component } from '@angular/core';
import {DeleteUserComponent} from "../delete-user/delete-user.component";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    DeleteUserComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private userService: UserService) {

  }
  imgurl:string = "data:image/png;base64," + localStorage.getItem("avatarImg")
  onFileChange(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const  base64String = reader.result as string;
      this.imgurl = base64String;
      // @ts-ignore
      // this.userService.updateUserPhoto(localStorage.getItem("avatarImg"), localStorage.getItem("userEmail"))
    }
    if (file){
      reader.readAsDataURL(file);
    }
  }
}


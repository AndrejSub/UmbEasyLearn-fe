import { Component } from '@angular/core';
import {DeleteUserComponent} from "../delete-user/delete-user.component";

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
    userEmail = localStorage.getItem("userEmail");
    img2:string = "data:image/png;base64," + localStorage.getItem("avatarImg")
}

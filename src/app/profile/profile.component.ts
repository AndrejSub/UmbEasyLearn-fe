import { Component } from '@angular/core';
import {DeleteUserComponent} from "../delete-user/delete-user.component";
import {UserService} from "../services/user.service";
import {RouterLink} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {useravatar} from "../dtos/UserDto";
import {HistoryComponent} from "../history/history.component";

@Component({
  selector: 'app-profile',
  standalone: true,
    imports: [
        DeleteUserComponent,
        RouterLink,
        HistoryComponent
    ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
    constructor(private userService: UserService,
                private authService: AuthService) {
    }
    user: useravatar = {
        email: localStorage.getItem("userEmail"),
        avatar: localStorage.getItem("avatarImg")
    }
    // @ts-ignore
    imgurl:string = localStorage.getItem("avatarImg")
    userEmail = localStorage.getItem("userEmail");

    onFileChange(event: any){
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const  base64String = reader.result as string;
            this.imgurl = base64String;
            this.user.avatar = base64String
            this.authService.changePhoto(this.user).subscribe((res)=>{
            })
        }
        if (file){
            reader.readAsDataURL(file);
        }
    }
}



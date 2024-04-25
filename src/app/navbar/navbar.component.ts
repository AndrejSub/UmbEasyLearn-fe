import {Component} from '@angular/core';
import {ThemeSwitchComponent} from "../theme-switch/theme-switch.component";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        ThemeSwitchComponent,
        RouterLink,
        NgIf
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    constructor(
        private loginService: LoginService,
        private router: Router,) {
    }


    imgurl:string = "null"
    logedIn:boolean = this.loginService.logedIn;


    checkLogin():void{
        this.logedIn = this.loginService.logedIn
    }

    logout():void{
        localStorage.removeItem("loginToken");
        this.router.navigateByUrl("").then(() => {
            window.location.reload();
        });
    }

    onFileChange(event: any){
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const  base64String = reader.result as string;
            this.imgurl = base64String;
        }
        if (file){
            reader.readAsDataURL(file);
        }
    }

}

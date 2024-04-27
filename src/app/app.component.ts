import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {UserService} from "./services/user.service";
import {userinfo} from "./dtos/UserDto";


@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, NavbarComponent, FooterComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EasyLearn-fe';
  // @ts-ignore
  user: userinfo;
  constructor(private userService: UserService) {}
  async ngOnInit(): Promise<any> {
    if (localStorage.getItem("userEmail") !== null)
    // @ts-ignore
    this.userService.getUserByEmail(localStorage.getItem("userEmail")).subscribe(
        (users: userinfo) => {
          // @ts-ignore
          this.user = users
        console.log(users.avatar)
        localStorage.setItem("avatarImg", users.avatar)}
    )
  }
}

import { Component } from '@angular/core';
import {ThemeSwitchComponent} from "../theme-switch/theme-switch.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        ThemeSwitchComponent,
        RouterLink
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}

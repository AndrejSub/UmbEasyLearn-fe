import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginService} from "../services/login.service";

@Component({
    selector: 'app-admin-panel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admin-panel.component.html',
    styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent implements OnInit{
    constructor(private loginService: LoginService) {
    }

    async ngOnInit(): Promise<any> {
        if (await this.loginService.logIn()) {
            this.loginService.logedIn= true;
            console.log(this.loginService.logedIn);
        }
    }
}

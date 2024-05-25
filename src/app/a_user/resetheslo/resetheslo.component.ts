import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-resetheslo',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './resetheslo.component.html',
  styleUrl: './resetheslo.component.scss'
})
export class ResethesloComponent {


  resetPasswordForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email // <span style="color:red">Pridané</span>
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}') // <span style="color:red">Pridané</span>
    ]),
    confirmNewPassword: new FormControl('', [
      Validators.required // <span style="color:red">Pridané</span>
    ])
  }, ); // <span style="color:red">Pridané</span>

}

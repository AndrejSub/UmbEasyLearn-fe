import { Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {LoginComponent} from "./a_user/login/login.component";
import {RegisterComponent} from "./a_user/register/register.component";
import {ResethesloComponent} from "./a_user/resetheslo/resetheslo.component";
import {PredmetyHostComponent} from "./predmety-host/predmety-host.component";
import {TestComponentComponent} from "./test-component/test-component.component";
import {ProfileComponent}  from "./profile/profile.component";
import {ChangepasswordComponent} from "./changepassword/changepassword.component";
import {ExamFormComponent} from "./admin-panel/exam-form/exam-form.component";

export const routes: Routes = [
    {
        path:'',
        component:MainPageComponent
    },
    {
        path: 'admin',
        component: ExamFormComponent
    },
    {
        path: 'predmety/:idPredmetu',
        component: PredmetyHostComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'changepassword',
        component:ChangepasswordComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'resetheslo',
        component: ResethesloComponent
    },
    {
        path: 'test/:idTestu',
        component: TestComponentComponent
    },
    {
        path:"profile",
        component: ProfileComponent
    }
];

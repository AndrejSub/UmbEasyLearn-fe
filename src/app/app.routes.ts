import { Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {LoginComponent} from "./a_user/login/login.component";
import {RegisterComponent} from "./a_user/register/register.component";
import {PredmetTZIComponent} from "./a_predmety/predmet-tzi/predmet-tzi.component";
import {PredmetMATComponent} from "./a_predmety/predmet-mat/predmet-mat.component";
import {PredmetDB1Component} from "./a_predmety/predmet-db1/predmet-db1.component";
import {PredmetAlgo1Component} from "./a_predmety/predmet-algo1/predmet-algo1.component";
import {PredmetAlgo2Component} from "./a_predmety/predmet-algo2/predmet-algo2.component";
import {ResethesloComponent} from "./a_user/resetheslo/resetheslo.component";
import {PredmetyHostComponent} from "./predmety-host/predmety-host.component";
import {TestComponentComponent} from "./test-component/test-component.component";

export const routes: Routes = [
    {
        path:'',
        component:MainPageComponent
    },
    {
        path: 'tzi',
        component: PredmetTZIComponent
    },
    {
        path: 'mat',
        component: PredmetMATComponent
    },
    {
        path: 'db1',
        component: PredmetDB1Component
    },
    {
        path: 'algo1',
        component: PredmetAlgo1Component
    },
    {
        path: 'algo2',
        component: PredmetAlgo2Component
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
    }
];

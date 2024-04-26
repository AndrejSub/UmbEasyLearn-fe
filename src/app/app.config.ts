import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import {provideHttpClient, withInterceptors} from "@angular/common/http";
import { routes } from './app.routes';
import {customerInterceptor} from "./services/customer.interceptor";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideToastr} from "ngx-toastr";

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideHttpClient(),
      provideHttpClient(withInterceptors([customerInterceptor])),
      provideAnimations(),
      provideToastr()
  ]

};

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/token.interceptor";
import {LocalStorageService} from "ngx-webstorage";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    LocalStorageService
    ]
};

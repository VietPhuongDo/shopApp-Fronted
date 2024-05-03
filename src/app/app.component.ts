import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {OrderComponent} from "./components/order/order.component";
import {OrderConfirmComponent} from "./components/order-confirm/order-confirm.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";

import {RegisterComponent} from "./components/register/register.component";
import {CommonModule} from "@angular/common";



export class YourModule { }

import {TokenInterceptor} from "./interceptors/token.interceptor";
import {DetailProductComponent} from "./components/detail-product/detail-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent,
    HeaderComponent,
    FooterComponent,
    DetailProductComponent, OrderComponent, OrderConfirmComponent, LoginComponent, RegisterComponent,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopApp-Fronted';
}

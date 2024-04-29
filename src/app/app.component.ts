import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {CommonModule} from "@angular/common";
import {RegisterComponent} from "./register/register.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";
import {OrderComponent} from "./order/order.component";
import {OrderConfirmComponent} from "./order-confirm/order-confirm.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent,
    HeaderComponent,
    FooterComponent,
    DetailProductComponent, OrderComponent, OrderConfirmComponent, LoginComponent, RegisterComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopApp-Fronted';
}

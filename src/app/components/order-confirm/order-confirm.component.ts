import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-order-confirm',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './order-confirm.component.html',
  styleUrl: './order-confirm.component.scss'
})
export class OrderConfirmComponent {

}

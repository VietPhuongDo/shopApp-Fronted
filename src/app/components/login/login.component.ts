import {Component, ViewChild} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {FormsModule, NgForm} from "@angular/forms";
import {LoginDTO} from "../../dtos/user/login.dto";
import {Router, RouterModule} from "@angular/router";
import {UserService} from "../../services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {LoginResponse} from "../../responses/user/login.response";
import {TokenService} from "../../services/token.service";
import {RoleService} from "../../services/role.service";
import {Role} from "../../models/role";


@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
      FormsModule, CommonModule, RouterModule, HttpClientModule
    ],
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;

  phoneNumber: string = '33445566';
  password: string = '123456';

  roles: Role[] = []; // Mảng roles
  rememberMe: boolean = true;
  selectedRole: Role | undefined; // Biến để lưu giá trị được chọn từ dropdown

  onPhoneNumberChange() {
    console.log(`Phone typed: ${this.phoneNumber}`);
    //how to validate ? phone must be at least 6 characters
  }
  constructor(
    private router: Router,
    private userService: UserService,
    private tokenService: TokenService,
    private roleService: RoleService
  ) { }

  ngOnInit() {
    debugger
    this.roleService.getRoles().subscribe({
      next: (roles: Role[]) => {
        debugger
        this.roles = roles;
        this.selectedRole = roles.length > 0 ? roles[0] : undefined;
      },
      error: (error: any) => {
        debugger
        console.error('Error getting roles:', error);
      }
    });
  }

  login() {
    const message = `phone: ${this.phoneNumber}` +
      `password: ${this.password}`;
    //alert(message);
    debugger

    const loginDTO: LoginDTO = {
      phone_number: this.phoneNumber,
      password: this.password,
      role_id: this.selectedRole?.id ?? 1
    };
    this.userService.login(loginDTO).subscribe({
      next: (response: LoginResponse) => {
        debugger;
        const { token } = response;
        if (this.rememberMe) {
          this.tokenService.setToken(token);
        }
        //this.router.navigate(['/login']);
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        debugger;
        alert(error?.error?.message);
      }
    });
  }
}

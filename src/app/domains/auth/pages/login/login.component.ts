import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { user } from '../../../shared/constants/credentials.constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NavbarComponent,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("email") emailInput!: ElementRef;
  @ViewChild("pass") passInput!: ElementRef;

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faArrowLeft = faArrowLeft;

  private formBuilder = inject(FormBuilder);

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    rememberMe: [true]
  });
  showPassword: boolean = false;
  passwordType: string = 'password';

  userStatic: any = user;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngAfterViewInit() {
    this.emailInput.nativeElement.focus();
  }

  async login() {
    console.log(this.loginForm.value);
    if(this.loginForm.valid) {
      //this.router.navigate(['/main']);
      try {
        const response = await this.authService.login(this.loginForm.value);
        console.log(response);
      } catch (error) {
        console.log(this.userStatic, this.loginData.email === this.userStatic.user, this.loginData.password === this.userStatic.password)
        if(this.loginData.email.value === this.userStatic.user && this.loginData.password.value === this.userStatic.password) {
          this.authService.setUser();
          this.router.navigate(['/main']);
        }
      }
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

  get loginData() {
    return this.loginForm.controls;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    this.passwordType = this.showPassword ? 'text' : 'password';
  }
}

import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

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

  private formBuilder = inject(FormBuilder);

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    rememberMe: [true]
  });

  constructor(
    private router: Router
  ) {
  }

  ngAfterViewInit() {
    this.emailInput.nativeElement.focus();
  }

  login() {
    console.log(this.loginForm.value);
    this.router.navigate(['/main']);
  }
}

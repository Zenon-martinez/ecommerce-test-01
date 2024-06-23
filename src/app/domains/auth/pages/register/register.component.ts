import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    csf: ['', Validators.required],
    id: ['', Validators.required],
    street: ['', Validators.required],
    externalNo: ['', Validators.required],
    internalNo: ['', Validators.required],
    colonia: ['', Validators.required],
    cp: ['', Validators.required],
    privacy: [false],
    advertising: [false]
  });

  constructor(
    private formBuilder: FormBuilder
  ) {

  }

  create() {

  }

}

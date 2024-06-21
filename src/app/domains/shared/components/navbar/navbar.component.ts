import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle, faGripVertical, faBars, faMagnifyingGlass, faCartShopping, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isOpen = false;
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faGripVertical = faGripVertical;
  faBars = faBars;
  faMagnifyingGlass = faMagnifyingGlass;
  faCartShopping = faCartShopping;
  faChevronDown = faChevronDown;

  session: boolean = true;

  constructor(
    private router: Router
  ) {}

  search() {
    this.router.navigate(['/main/results']);
  }
}

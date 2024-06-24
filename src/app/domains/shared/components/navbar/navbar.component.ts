import { CommonModule } from '@angular/common';
import { Component, WritableSignal, effect } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfoCircle, faGripVertical, faBars, faMagnifyingGlass, faCartShopping, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBell, faMap } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from '../../services/auth.service';
import { filter } from 'rxjs';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    RouterLink, RouterLinkActive
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
  faMap = faMap;

  session!: WritableSignal<boolean>;
  visible: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private productsService: ProductsService
  ) {
    this.router.events
    .pipe(
      filter( e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      console.log(e);
      this.visible = e.url.includes('/login') || e.url.includes('/register')  ? false : true;
      console.log(this.visible);
    });
  }

  ngOnInit() {
    this.session = this.authService.isAuthenticated();
  }

  search(event?: any) {
    console.log(event);
    if(!event) {
      this.router.navigate(['/main/results']);
      return;
    }
    if(!event.target) {
      this.searchByText();
      return;
    }
    if(event.target.value.trim() === '') return;
    this.searchByText();
  }

  searchByText() {
    this.productsService.searchByText();
    this.router.navigate(['/main/results']);
  }
}

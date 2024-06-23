import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.css'
})
export class TabBarComponent {
  faHome = faHome;
  faWindowRestore = faWindowRestore;
  faHeart = faHeart;
  faUser = faUser;
}

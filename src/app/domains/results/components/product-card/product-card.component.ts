import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartFill, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: Product;
  faHeart = faHeart;
  faHeartFill = faHeartFill;
  faStar = faStar;

  favorite: boolean = false;
}

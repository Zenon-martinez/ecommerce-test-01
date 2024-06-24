import { CommonModule } from '@angular/common';
import { Component, WritableSignal } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faChevronDown, faBars, faTableCells } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../shared/models/product.model';
import { CategoriesService } from '../../../shared/services/categories.service';
import { ProductsService } from '../../../shared/services/products.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    FiltersComponent,
    FontAwesomeModule
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {

  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  faBars = faBars;
  faTableCells = faTableCells;

  products!: WritableSignal<Product[]>;

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.initResults();
  }

  initResults() {
    this.products = this.productsService.getResults();
    if(this.products().length) return;
    const response = this.categoriesService.getLatestProducts();
    if(!response) return;
    this.products.set(response.content);
  }
}

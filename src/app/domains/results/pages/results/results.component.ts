import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faChevronDown, faBars, faTableCells } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../shared/models/product.model';
import { CategoriesService } from '../../../shared/services/categories.service';

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

  products: Product[] = [];

  constructor(
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.initResults();
  }

  initResults() {
    const response = this.categoriesService.getLatestProducts();
    if(!response) return;
    this.products = response.content;
  }
}

import { Component } from '@angular/core';
import { CategoriesService } from '../../../shared/services/categories.service';
import { Category } from '../../../shared/models/category.model';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../shared/models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { BrandCardComponent } from '../../components/brand-card/brand-card.component';
import { Store } from '../../../shared/models/brand.model';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CategoryCardComponent,
    FontAwesomeModule,
    ProductCardComponent,
    BrandCardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  faArrowRightLong = faArrowRightLong;
  categories: Category[] = [];
  offers: Product[] = [];
  latestProducts: Product[] = [];
  stores: Store[] = [];
  largeStore!: Store;

  constructor(
    private categoriesService: CategoriesService
  ){}

  ngOnInit() {
    this.initCategories();
    this.initOffers();
    this.initLatestProducts();
    this.initStores();
  }

  private async initCategories() {
    const response = this.categoriesService.getCategories();
    if(!response) return;
    this.categories = response.content.slice(0,4);
    console.log(this.categories);
  }

  private async initOffers() {
    const response = this.categoriesService.getOffers();
    if(!response) return;
    this.offers = response.content;
    console.log(this.offers);
  }

  private async initLatestProducts() {
    const response = this.categoriesService.getLatestProducts();
    if(!response) return;
    this.latestProducts = response.content;
    console.log(this.latestProducts);
  }

  private async initStores() {
    const response = this.categoriesService.getStores();
    if(!response) return;
    this.stores = response.content.splice(0,4);
    this.largeStore = response.content.at(-1)!;
  }
}

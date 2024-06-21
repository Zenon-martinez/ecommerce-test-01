import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { CategoriesService } from '../../../shared/services/categories.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CdkAccordionModule
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  brands: string[] = [];

  constructor(private categoryService: CategoriesService) {

  }

  ngOnInit() {
    this.initBrands();
  }

  private initBrands(): void {
    const response = this.categoryService.getBrands();
    if(!response) return;
    this.brands = response;
  }
}

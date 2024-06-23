import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { CategoriesService } from '../../../shared/services/categories.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  small: boolean = true;

  constructor(private categoryService: CategoriesService, private responsive: BreakpointObserver) {

  }

  ngOnInit() {
    this.initBrands();
    this.responsive.observe([
      Breakpoints.XSmall
    ]).subscribe(result => {
      this.small = result.matches ? false : true;
    });
  }

  private initBrands(): void {
    const response = this.categoryService.getBrands();
    if(!response) return;
    this.brands = response;
  }
}

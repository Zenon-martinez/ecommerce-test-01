import { Component, Input } from '@angular/core';
import { Store } from '../../../shared/models/brand.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './brand-card.component.html',
  styleUrl: './brand-card.component.css'
})
export class BrandCardComponent {
  @Input() brand!: Store;
  @Input() size: string = "small";
}


import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Bundle } from '../../models/bundle/bundles.entity';
import { BundlesService } from '../../service/bundles.service';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardLgImage,
  MatCardModule,
  MatCardTitleGroup
} from '@angular/material/card';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-bundles-card',
  templateUrl: 'bundles-card.component.html',
  styleUrls: ['./bundles-card.component.css'],
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    CurrencyPipe,
    MatCardContent,
    MatCardModule,


  ],
})
export class BundlesCardComponent implements OnChanges {
  @Input() bundle!: Bundle;
  youSave: number = 0;

  constructor(private bundleService: BundlesService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bundle'] && this.bundle?.id) {
      this.bundleService.getAllProductsFromBundle(this.bundle.id).subscribe((products: any[]) => {
        const totalProductPrice = products.reduce((acc, p) => acc + p.price, 0);
        this.youSave = totalProductPrice - this.bundle.price;
      });
    }
  }
}

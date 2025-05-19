
// Componente principal que carga y muestra todos los bundles

import {Component, OnInit} from '@angular/core';
import {Bundle} from "../../models/bundle/bundles.entity";
import {BundlesService} from "../../service/bundles.service";
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {NgForOf} from '@angular/common';
import {BundlesCardComponent} from '../../components/bundles-card/bundles-card.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  imports: [
    MatGridTile,
    NgForOf,
    BundlesCardComponent,
    MatCardModule,
    MatGridList
  ],
  styleUrls: ['./bundles.component.css']
})
export class BundlesComponent implements OnInit {

  bundles: Bundle[];

  constructor(private bundleService: BundlesService) {
    this.bundles = [];
  }

  ngOnInit(): void {
    this.bundleService.getAll().subscribe((response: any) => {
      this.bundles = response;
    });
  }

}

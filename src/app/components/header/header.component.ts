import { Component, OnInit } from '@angular/core';
import { Branch, CatalogResponse } from 'src/app/model/catalog-model';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  catalogData: CatalogResponse;
  selectedLocation = '';
  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.catalogData = this.catalogService.getCatalog();
  }

  selectBranch(branch: Branch, locationName: string): void {
    this.selectedLocation = locationName;
    this.catalogService.selectBranch(branch);
  }
}

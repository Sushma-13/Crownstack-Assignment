import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import catalogData from '../mock-data/catalog (2)';
import { Branch, CatalogResponse } from '../model/catalog-model';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor() {}

  selectedBranch = new BehaviorSubject<Branch>(null);

  selectBranch(branch: Branch): void {
    this.selectedBranch.next(branch);
  }

  getCatalog(): CatalogResponse {
    return catalogData;
  }
}

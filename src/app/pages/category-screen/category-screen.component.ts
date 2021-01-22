import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StringifyOptions } from 'querystring';
import { Branch, Category, Subcategory } from 'src/app/model/catalog-model';
import { CatalogService } from 'src/app/services/catalog.service';

export enum Type {
  category = 1,
  subcategory = 2,
}

@Component({
  selector: 'app-category-screen',
  templateUrl: './category-screen.component.html',
  styleUrls: ['./category-screen.component.css'],
})
export class CategoryScreenComponent implements OnInit {
  branch: Branch;
  branchId: string;
  categories: Category[];
  type = Type.category;

  selectedSubCategory: string;

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((routeParams: any) => {
      this.branchId = routeParams.params.branchId;
    });
    this.catalogService.selectedBranch.subscribe((branch) => {
      if (!branch) {
        for (const location of this.catalogService.getCatalog().data
          .locations) {
          const routedBranch = location.branches.find(
            (b) => b.branch_id === this.branchId
          );
          if (routedBranch) {
            this.catalogService.selectBranch(routedBranch);
            break;
          }
        }
        return;
      }
      this.branch = branch;
      this.categories = branch.categories;
    });
  }

  showCategories(): void {
    this.categories = this.branch.categories;
    this.type = 1;
  }

  showSubcategories(category: Category): void {
    if (this.type === 1) {
      this.categories = category.subcategories;
      this.selectedSubCategory = category.name;
    }
    this.type = 2;
  }
}

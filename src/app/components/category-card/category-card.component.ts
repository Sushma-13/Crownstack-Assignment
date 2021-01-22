import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/catalog-model';

export enum Type {
  category = 1,
  subcategory = 2,
}
@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent implements OnInit {
  @Input()
  categoryDetails: Category;

  @Input()
  type = Type.category;

  constructor() {}

  ngOnInit(): void {}
}

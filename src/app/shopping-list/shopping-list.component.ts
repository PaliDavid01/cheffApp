import { Component } from '@angular/core';
import { ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: ingredient[] = [
    new ingredient('Apples', 5),
    new ingredient('Tomatoes', 10),
  ];

  constructor() {}
}

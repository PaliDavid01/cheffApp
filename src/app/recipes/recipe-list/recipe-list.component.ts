import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://as1.ftcdn.net/v2/jpg/01/33/61/72/1000_F_133617244_dWdivRXwoLVzowl1kn3iFP9JGcuNd8n6.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://as1.ftcdn.net/v2/jpg/00/27/57/96/1000_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://as1.ftcdn.net/v2/jpg/00/27/57/96/1000_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg'
    ),
  ];
  constructor() {}
  ngOnInit(): void {}
}

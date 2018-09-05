import { Component, OnInit } from '@angular/core';

import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Some random recipe',
      'http://services.supacache.com/php/IMAGES/FOODNETWORK_Polsat_Recipes/119---Image.jpg?t=1525074275')
  ];

  constructor() { }

  ngOnInit() {
  }

}

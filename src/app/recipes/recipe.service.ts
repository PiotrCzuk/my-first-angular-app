import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'Some random recipe',
      'http://services.supacache.com/php/IMAGES/FOODNETWORK_Polsat_Recipes/119---Image.jpg?t=1525074275'),
    new Recipe('Another test recipe', 'Some random recipe',
      'http://services.supacache.com/php/IMAGES/FOODNETWORK_Polsat_Recipes/119---Image.jpg?t=1525074275')

  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

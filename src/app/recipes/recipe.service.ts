import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Some random recipe',
      'http://services.supacache.com/php/IMAGES/FOODNETWORK_Polsat_Recipes/119---Image.jpg?t=1525074275',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 15)
      ]),
    new Recipe(
      'Another test recipe',
      'Some random recipe',
      'http://services.supacache.com/php/IMAGES/FOODNETWORK_Polsat_Recipes/119---Image.jpg?t=1525074275',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 3)
      ])

  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

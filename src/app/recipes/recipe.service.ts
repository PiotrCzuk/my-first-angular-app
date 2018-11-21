import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
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
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe ) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

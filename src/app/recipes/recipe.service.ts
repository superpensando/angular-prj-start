import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {


  recipeItemSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Recipe Name 1',
    'A Test Description 1',
    'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=300,272'),
    new Recipe('Recipe Name 2',
    'A Test Description 2',
    'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=300,272'),
  ];

  getRecipes() {
     return this.recipes.slice();
  }

}

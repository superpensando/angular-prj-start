import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shopping/ingredient.model';
import { ShoppingListService } from './../shopping/shopping-list.service';
@Injectable()
export class RecipeService {


  recipeItemSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tortilla de Patatas',
    'Cómo hacer tortilla de patatas de manera fácil y con todas las fotos del paso a paso, para comer',
    'https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-06-15-19-04-10/tortilla-de-patata.jpeg',
    [
      new Ingredient('Patatas',8),
      new Ingredient('huevo',5)
    ]),
    new Recipe('Fideos Japoneses',
    'Un plato de estilo japones que podemos elaborar hoy para cenar',
    'https://cdn.cookmonkeys.es/recetas/medium/yakisoba-fideos-japoneses-fritos-5810.jpeg',
    [
      new Ingredient('Fideos',1),
      new Ingredient('Pimiento rojo',1),
      new Ingredient('Pimiento verde',1),
      new Ingredient('cebolla',1)
    ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
     return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredientList(ingredients);
  }

}

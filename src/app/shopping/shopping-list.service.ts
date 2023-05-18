import { EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

export class ShoppingListService {

  ingredientsChanged  = new EventEmitter<Ingredient[]>();

  private ingredientsList: Ingredient[] = [
    new Ingredient('Manzanas',5,),
    new Ingredient ('Tomates',2)
  ];

  getIngredients() {
    return this.ingredientsList.slice();
 }

  addIngredient(ingredient: Ingredient) {
     this.ingredientsList.push(ingredient);
     this.ingredientsChanged.emit(this.ingredientsList.slice());
  }

  addIngredientList(ingredientList: Ingredient[]) {
    this.ingredientsList.push(...ingredientList);
    this.ingredientsChanged.emit(this.ingredientsList.slice());
  }

 }

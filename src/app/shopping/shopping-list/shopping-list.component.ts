import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

   ingredientsList = [] = [
    new Ingredient('Apples',5,),
    new Ingredient ('Tomates',2)
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredientsList.push(ingredient);
  }

}

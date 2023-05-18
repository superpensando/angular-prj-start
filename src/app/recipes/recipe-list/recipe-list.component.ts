import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe Name 1',
    'A Test Description 1',
    'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=300,272'),
    new Recipe('Recipe Name 2',
    'A Test Description 2',
    'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=300,272'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected ( recipe: Recipe ){
    this.recipeWasSelected.emit(recipe);
  }

}

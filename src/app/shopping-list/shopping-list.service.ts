import { Ingredient } from '../shared/ingredient';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Onions', 2),
    new Ingredient('Tomatoes', 5)
  ]
  getIngredients(){
    return this.ingredients.slice()
  }
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
  constructor() { }
}

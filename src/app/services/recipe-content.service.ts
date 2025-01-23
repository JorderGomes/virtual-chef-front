import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
@Injectable({
  providedIn: 'root'
})
export class RecipeContentService {

  constructor() { }

  private recipesSubject = new BehaviorSubject<Recipe[]>([]);

  recipes$ = this.recipesSubject.asObservable();

  updateRecipes(recipes: Recipe[]) {
    this.recipesSubject.next(recipes);
  }
}

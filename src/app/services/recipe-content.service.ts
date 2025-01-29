import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
@Injectable({
  providedIn: 'root'
})
export class RecipeContentService {

  constructor() { }

  private recipesSubject = new BehaviorSubject<Recipe[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  recipes$ = this.recipesSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();

  updateRecipes(recipes: Recipe[]) {
    this.loadingSubject.next(false); // Indica que o carregamento terminou
    this.recipesSubject.next(recipes);
  }

  setLoading(isLoading: boolean) {
    this.loadingSubject.next(isLoading);
  }
}

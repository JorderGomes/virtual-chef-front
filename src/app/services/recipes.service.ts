import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private baseApiUrl: string = environment.baseApiUrl;
  
  getIngredients(file: File): Observable<string[]> {
    const endpointUrl: string = this.baseApiUrl + "/upload-image/";
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<string[]>(endpointUrl, formData);
  }

  getRecipes(ingredients: string[]): Observable<Recipe[]> {
    const endpointUrl: string = this.baseApiUrl + "/recipes/";
    return this.http.post<Recipe[]>(endpointUrl, { ingredients });
  }

  generateRecipesByImage(file: File): Observable<Recipe[]> {
    const endpointUrl: string = this.baseApiUrl + "/generate-recipe-by-image/";
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Recipe[]>(endpointUrl, formData);
  }

  constructor(private http: HttpClient) { }
}

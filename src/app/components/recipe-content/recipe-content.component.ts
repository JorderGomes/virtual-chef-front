import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { RecipeContentService } from '../../services/recipe-content.service';
import { Recipe } from '../../interfaces/recipe';
import { EmptyStateComponent } from '../empty-state/empty-state.component';
import { LoadingStateComponent } from '../loading-state/loading-state.component';

@Component({
  selector: 'app-recipe-content',
  standalone: true,
  imports: [CommonModule, RecipeItemComponent, EmptyStateComponent, LoadingStateComponent],
  templateUrl: './recipe-content.component.html',
  styleUrl: './recipe-content.component.css'
})
export class RecipeContentComponent {

  
  constructor(private recipeContentService: RecipeContentService, public scrollService: ScrollService) {}
  
  recipes: Recipe[] = [];
  recipesState: string = "empty";
  ngOnInit(): void {
    this.recipeContentService.recipes$.subscribe((recipes) => {
      if (recipes.length === 0) {
        this.recipesState = "empty";
      } else {
        this.recipesState = "loaded";
      }
      this.recipes = recipes;
    });


    this.recipeContentService.loading$.subscribe((isLoading) => {
      if (isLoading) {
        this.recipesState = "loading";
      } else {
        this.recipesState = "empty";
      }
    });
  }

}

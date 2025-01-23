import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { RecipeContentService } from '../../services/recipe-content.service';
import { Recipe } from '../../interfaces/recipe';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

@Component({
  selector: 'app-recipe-content',
  standalone: true,
  imports: [CommonModule, RecipeItemComponent, EmptyStateComponent],
  templateUrl: './recipe-content.component.html',
  styleUrl: './recipe-content.component.css'
})
export class RecipeContentComponent {

  
  constructor(private recipeContentService: RecipeContentService, public scrollService: ScrollService) {}
  
  recipes: Recipe[] = [];
  ngOnInit(): void {
    // Inscreve-se para receber atualizações das receitas
    this.recipeContentService.recipes$.subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

}

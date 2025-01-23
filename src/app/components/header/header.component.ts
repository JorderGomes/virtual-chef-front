import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { RecipesService } from '../../services/recipes.service';
import { switchMap } from 'rxjs/operators';
import { RecipeContentService } from '../../services/recipe-content.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  fileName: string = 'Nenhum arquivo selecionado';

  constructor(
    private scrollService: ScrollService, 
    private recipesService: RecipesService,
    private recipeContentService: RecipeContentService 
  ) {}

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.fileName = file.name;
      this.scrollService.revertRecipeContentVisibility();
      this.scrollService.scrollToSection('empty-state');

      // Chama o primeiro endpoint e, em seguida, o segundo
      this.recipesService.getIngredients(file).pipe(
        switchMap(ingredients => {
          console.log('Ingredientes obtidos:', ingredients);
          return this.recipesService.getRecipes(ingredients);
        })
      ).subscribe({
        next: (recipes) => {
          console.log('Receitas obtidas:', recipes);
          this.recipeContentService.updateRecipes(recipes);
          console.log(this.scrollService.isRecipeContentVisible);
          this.scrollService.scrollToSection('recipe-content');
          // this.scrollService.revertRecipeContentVisibility();  // Atualiza o RecipeContentComponent
        },
        error: (error) => {
          console.error('Erro ao processar o arquivo:', error);
          alert('Erro ao processar o arquivo. Por favor, tente novamente.');
        }
      });
    } 
    
    else {
      this.fileName = 'Nenhum arquivo selecionado';
    }

  }

}

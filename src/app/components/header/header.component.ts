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
      this.recipeContentService.setLoading(true); 

      this.scrollService.scrollToSection('recipes-list');
      // this.scrollService.scrollToSection('loading-state');
      console.time('Tempo da requisição'); // Inicia a contagem do tempo
      // Chamada única para o novo endpoint
      this.recipesService.generateRecipesByImage(file).subscribe({
        next: (recipes) => {
          console.timeEnd('Tempo da requisição');
          console.log('Receitas obtidas:', recipes);
          this.recipeContentService.updateRecipes(recipes);
          this.scrollService.scrollToSection('recipe-content');
        },
        error: (error) => {
          this.recipeContentService.setLoading(false);
          console.timeEnd('Tempo da requisição');
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

import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-content',
  standalone: true,
  imports: [CommonModule, RecipeItemComponent],
  templateUrl: './recipe-content.component.html',
  styleUrl: './recipe-content.component.css'
})
export class RecipeContentComponent {

  constructor(public scrollService: ScrollService) {}

  recipes = [
    {
      title: 'Spaghetti Carbonara',
      ingredients: ['Massa', 'Ovos', 'Queijo', 'Bacon', 'Pimenta'],
      preparation_method: 'Cozinhe a massa, misture com ovos batidos, queijo ralado e bacon dourado.'
    },
    {
      title: 'Frango à Parmegiana',
      ingredients: ['Frango', 'Farinha de trigo', 'Molho de tomate', 'Queijo', 'Óleo'],
      preparation_method: 'Empane o frango, frite e cubra com molho de tomate e queijo. Leve ao forno para gratinar.'
    },
    {
      title: 'Salada César',
      ingredients: ['Alface', 'Croutons', 'Molho César', 'Queijo parmesão', 'Frango'],
      preparation_method: 'Misture os ingredientes e sirva com o molho César.'
    }
  ];

}

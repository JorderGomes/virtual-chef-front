import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';
import { RecipeContentService } from '../../services/recipe-content.service';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.css'
})
export class EmptyStateComponent {

  constructor(private recipeContentService: RecipeContentService, public scrollService: ScrollService) {}


}

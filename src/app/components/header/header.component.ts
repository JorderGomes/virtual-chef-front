import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  fileName: string = 'Nenhum arquivo selecionado';

  constructor(private scrollService: ScrollService) {}

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.fileName = file ? file.name : 'Nenhum arquivo selecionado';

    // this.isRecipesHidden = false; // Exibe a lista de receitas
    this.scrollService.scrollToSection('empty-state');
  }

}

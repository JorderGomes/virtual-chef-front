import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor() { }

  isRecipeContentVisible = false;

  revertRecipeContentVisibility(): void {
    this.isRecipeContentVisible = !this.isRecipeContentVisible;
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

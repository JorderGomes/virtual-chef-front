import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  onSubmitFeedback(event: Event): void {
    event.preventDefault();
    const form = document.getElementById('feedback-form') as HTMLFormElement;
    const nameInput = (document.getElementById('feedback-name') as HTMLInputElement).value;
    const messageInput = (document.getElementById('feedback-message') as HTMLTextAreaElement).value;

    console.log(`O usuário ${nameInput} deixou esta mensagem: ${messageInput}`);
    form.reset();
    
    // Aqui você pode adicionar lógica para enviar os dados ao servidor
  }

}

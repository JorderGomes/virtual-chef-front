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
    const bodyStr = `O usuário ${nameInput} deixou esta mensagem: ${messageInput}. No projeto VirtualChef`;
    console.log(bodyStr);

    form.reset();
    
    const email = "jordernoveau@gmail.com";
    const subject = encodeURIComponent("Avaliação do projeto VirtualChef");
    const body = encodeURIComponent(bodyStr);

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Abre o cliente de email padrão
    window.location.href = mailtoLink;
  }

}

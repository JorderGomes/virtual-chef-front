import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import emailjs from '@emailjs/browser';

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
    
    const templateParams = {
      name: nameInput,
      message: messageInput,
      project_name: "VirtualChef"
    };

    const serviceID = environment.serviceID;
    const templateID = environment.templateID;
    const publicKey = environment.publicKey;

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(response => {
        console.log("Email enviado com sucesso!", response);
        alert("Feedback enviado com sucesso!");
        (document.getElementById('feedback-form') as HTMLFormElement).reset();
      })
      .catch(error => {
        console.error("Erro ao enviar email:", error);
        alert("Erro ao enviar o feedback. Tente novamente.");
      });
  }

}

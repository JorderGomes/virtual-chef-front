# VirtualChef - Frontend

VirtualChef é uma aplicação web que ajuda os usuários a descobrir receitas a partir dos ingredientes que possuem. O projeto consiste em um front-end desenvolvido em Angular e um back-end responsável pelo processamento das imagens enviadas pelos usuários.

## Tecnologias Utilizadas

- **Angular 17** - Framework front-end
- **Bootstrap** - Estilização e layout responsivo
- **FontAwesome** - Ícones
- **EmailJS** - Envio de feedback por email

## Funcionalidades

- **Upload de Imagens**: O usuário pode enviar uma foto dos ingredientes disponíveis.
- **Processamento de Receitas**: Após o upload, o sistema busca receitas baseadas nos ingredientes.
- **Estado de Carregamento**: Um indicador é exibido enquanto as receitas são processadas.
- **Feedback dos Usuários**: Os usuários podem enviar avaliações via EmailJS sem precisar abrir um cliente de email.

## Estrutura do Projeto

```
virtual-chef-frontend/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   ├── card-resume/
│   │   │   ├── footer/
│   │   │   ├── ...
│   │   ├── services/
│   │   │   ├── transaction.service.ts
│   │   │   ├── recipe.service.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── assets/
│   ├── environments/
│   ├── main.ts
│── angular.json
│── package.json
│── README.md
```

## Como Rodar o Projeto

### 1. Clone o repositório
```sh
git clone https://github.com/seu-usuario/virtual-chef-frontend.git
cd virtual-chef-frontend
```

### 2. Instale as dependências
```sh
npm install
```

### 3. Execute o servidor de desenvolvimento
```sh
ng serve
```
O projeto estará disponível em `http://localhost:4200/`.

## Configuração do EmailJS
1. Crie uma conta no [EmailJS](https://www.emailjs.com/).
2. Configure um **Email Template** com os seguintes placeholders:
   ```
   Nome: {{name}}
   Mensagem: {{message}}
   Projeto: {{project_name}}
   ```
3. Adicione as credenciais do serviço no código (`FooterComponent`).

## Melhorias Futuras
- **Sistema de usuários** para salvar receitas favoritas.
- **Melhoria na UI** para facilitar a navegação.


---
Desenvolvido por [JorderGomes](https://github.com/JorderGomes) 🚀


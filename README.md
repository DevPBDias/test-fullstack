# Case Fullstack da UOL

## 📌 Sobre o projeto:

Neste desafio, você deverá desenvolver um **aplicativo de gerenciamento de clientes** que permita aos usuários visualizar e criar clientes. O aplicativo consiste em duas partes: o frontend e o backend. O frontend será responsável pela interface do usuário e a comunicação com a API. O backend será responsável pelo armazenamento e gerenciamento dos dados dos clientes.

</br>

## ✅ Requisitos do aplicativo de gerenciamento de clientes:

  <details><summary>Requisitos do Frontend</summary>
  </br>
  <div>
      
  1. Exibir uma listagem de clientes contendo todas as informações conforme o layout fornecido.
  2. Permitir a criação de um novo cliente através de um formulário.
  3. Na tela de edição, fornecer alertas para o usuário em caso de dados inválidos.
  4. Realizar validação de CPF e telefone na tela de edição para garantir dados corretos e consistentes.
  5. Comunicar-se com a API para obter os dados dos clientes cadastrados.
     
  </div>
</details>
<details><summary>Requisitos do Backend</summary>
  </br>
  <div>
  Criar uma API que ofereça endpoints para:
  
  1. Obter a listagem de clientes cadastrados.
  2. Cadastrar um novo cliente com informações válidas.
  3. Atualizar informações de cliente existente.
  4. Armazenar os dados do cliente de forma persistente, com sugestão de uso do SQLite para essa finalidade.
         
  </div>
</details>
<details><summary>Requisitos de Qualidade de Código</summary>
  </br>
  <div>

- Escreva um código limpo, legível e bem organizado.
- Adote boas práticas de desenvolvimento e arquitetura.

**Itens Desejáveis (opcional):**

- Testes unitários
- Bibliotecas ou frameworks adicionais

  </div>
</details>
</details>
<details><summary>Aprendizados</summary>
 </br>
 <ul>
  <li>Uso do Sqlite como banco de dados.</li>
  <li>Validação de telefone e CPF</li>
</ul>
</details>
</br>

## ✨ Como ficou o projeto?

<details>
  <summary>Layout fornecido</summary>
  
- [Tela Inicial](https://test-frontend-uolpp.web.app/assets/images/tela-inicial.jpg)
- [Tela de Edição](https://test-frontend-uolpp.web.app/assets/images/tela-edicao.jpg)

</details>
<details><summary>Resultado final do aplicativo</summary>
  <div align="center" >
  
  ![20241112_161749](https://github.com/user-attachments/assets/b11e8202-d276-42e1-8389-ac4b96b18180)
    
  </div>
</details>
</br>

## 🖥 Quais tecnologias foram utilizadas?

<div align="left" >
	<img width="36" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
  <img width="36" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js"/>
  <img width="36" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/>
	<img width="36" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
  <img width="36" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
  <img width="36" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/>
  <img width="36" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/82df4543-236b-4e45-9604-5434e3faab17" alt="SQLite" title="SQLite"/>
  <img width="36" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" title="REST"/>
</div>
</br>
<details>
  <summary>Frameworks e bibliotecas (versões utilizadas)</summary>
  </br>
  
  - Front-end
  ```js
    - React: 19.0.0
      - React_hook_form: 7.53.2
      - Zod: 3.23.8
      - Axios: 1.7.7
      - Lucide_react: 0.456.0
    - Typescript: 5.2.2
    - Next: 15.0.3
  ```
  - Back-end
  ```js
    - Node 20.16.0
    - Cors: 2.8.5,
    - Dotenv: 16.4.5,
    - Express: 4.21.1,
    - Sequelize: 6.37.5,
    - Sqlite: 5.1.1,
      - Sqlite3: 5.1.7
  ```

</details>
</br>

## 🔎 Como o projeto está estruturado?

### Todos os arquivos de código fonte do projeto estão divididos em: `./frontend` e `./backend`

<details>
  <summary>Diretórios do front-end</summary>
  
  - `./src/app:` Neste projeto com Next, você pode localizar a página principal, css global, layout global, favicon e as pastas da aplicação, que funcionam como rotas da aplicação.
      - `/`: Página com dashboard onde listas todos os usuários cadastrados;
      - `/register`: Página para criação de um novo usuário;
      - `/id`: Página de edição para cada cliente.
  
  - `./src/assets:` Onde se localiza todas as imagens e os ícones que vão ser usadas no projeto.
  
  - `./src/components:` Onde se localiza os componentes que serão reutilizados em diversas partes do código. Nesta versão do site temos os componentes:
      - client: Componente para mostrar os clientes da empresa;
      - header: Cabeçalho padrão do app;
      - form: Uso do Compound pattern para criação de formulários;
      - common: Componentes comuns para diversas páginas.
        
  - `./src/services:` Os conteúdos que serão compartilhados com toda a aplicação, neste projeto possui um conteúdo: 
      - 'clientsData.ts': agrupa os metódos de requisição de dados, via Axios, de clientes oriundos do banco de dados Sqlite.
        
  - `./src/schemas:` Onde se localiza as validações Zod para os formulários da aplicação.

- `./src/type:` Onde se localiza as tipagens das variáveis da aplicação.

</details>
</br>

<details>
  <summary>Diretórios do back-end</summary>
  
  - `./src:` Onde os arquivos de configuração para o servidor back-end e para aplicação como um todo:
    - 'app.js': Arquivo para configuração de rotas, sequelize, banco sqlite, express e outras tecnologias.
    - 'server.js': Arquivo para configurar o servidor do back-end;
    - 'database.db': Arquivo em que fica armazenas os dados do banco quando o servidor está ativo.
    
  - `./src/routes:` Onde se pode localizar as rotas da aplicação.
  
  - `./src/model:` Onde se localiza a estrutura de dados que vai ser armazenada no banco de dados.
          
  - `./src/services:` Onde se localiza as funções para atender as regras de negócio. 
        
  - `./src/controllers:` Onde se localiza os metódos para as regras de negócio.

- `./src/databse:` Onde se localiza o arquivo de conexão do back-end com o banco sqlite.

</details>
</br>

## 🤝🏼 Dados do candidato

Nome: Paulo Bruno Machado Dias

<a href="https://www.linkedin.com/in/devpaulobrunomdias" target="_blank">Linkedin</a>

<a href="https://portfolio-final-jade-pi.vercel.app" target="_blank">Portfolio</a>

<a href="https://github.com/DevPBDias" target="_blank">Github</a>

## ❤️ Créditos

<details>
  <summary>Créditos dos emojis</summary>

> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

</details>
<details>
  <summary>Créditos dos ícones</summary>

> <a href="https://marwin1991.github.io/profile-technology-icons/" target="_blank">https://marwin1991.github.io/profile-technology-icons/</a>

</details>

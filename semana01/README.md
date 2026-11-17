# Entregável 1

## Objetivo
Desenvolver uma aplicação React utilizando componentes reutilizáveis, organização de arquivos e renderização dinâmica de informações.

## Tecnologias utilizadas

- React
- JavaScript
- JSX
- Vite
- HTML5
- CSS3

## Componentes desenvolvidos

**Header:** apresenta o título e a descrição da aplicação.
**Footer:** exibe o rodapé da página.
**Card:** componente reutilizável que recebe título e descrição através de props.
**Lista:** recebe um array de strings e utiliza o método `.map()` para renderizar dinamicamente os elementos, atribuindo uma `key` única a cada item.
**App:** componente principal responsável por organizar e renderizar os demais componentes utilizando React Fragments.

## Como executar o projeto

**1. Clonar o repositório**

```bash
git clone URL_DO_REPOSITORIO
```

**2. Acessar a pasta**

```bash
cd semana01
```

**3. Instalar as dependências**

```bash
npm install
```

**4. Iniciar o servidor**

```bash
npm run dev
```

## Reflexão — Programação imperativa e declarativa

**Qual a diferença entre a abordagem imperativa (JavaScript puro/manipulação do DOM) e a declarativa (React)?**

Na programação imperativa, o desenvolvedor descreve passo a passo como as alterações devem acontecer na interface. Utilizando JavaScript puro, podemos selecionar elementos do DOM com o `document.querySelector()` e modificar diretamente seus conteúdos.
Já na programação declarativa, utilizada pelo React, descrevemos como a interface deve aparecer de acordo com os dados e estados da aplicação. O React fica responsável por atualizar os elementos necessários quando essas informações mudam.

**Por que o Virtual DOM otimiza a performance?**
O Virtual DOM é uma representação da interface mantida em memória pelo React.
Quando ocorre uma atualização, o React compara a nova representação com a anterior para identificar as mudanças necessárias. Em seguida, realiza as alterações apropriadas no DOM real.
Esse processo permite evitar algumas manipulações desnecessárias do DOM, que podem ser custosas. Entretanto, o Virtual DOM não garante que toda aplicação React será mais rápida, pois o desempenho também depende da estrutura e da implementação do projeto.

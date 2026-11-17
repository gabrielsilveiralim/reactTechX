# Entregável 2 — Design System com Tailwind CSS

## Tecnologias utilizadas

- React
- JavaScript
- JSX
- Vite
- Tailwind CSS 3
- HTML5

## Componentes desenvolvidos

### Button
Botão reutilizável que recebe propriedades para controlar a aparência e o comportamento.

Variantes disponíveis:
- `primary`
- `secondary`
- `danger`

### Badge

Componente para identificação visual de categorias e estados.
Variantes: `primary`, `success`, `warning`, `danger` e `neutral`.

### Input
Campo de entrada de dados que recebe propriedades como `label`, `id`, `type` e `placeholder`.

### Card
Componente da Semana 08 refatorado utilizando classes utilitárias do Tailwind CSS. Recebe título, descrição e conteúdo através de props.

### Alert

Componente desenvolvido como desafio da atividade.
Possui três variantes:
- `success`: mensagem de sucesso com tons verdes.
- `error`: mensagem de erro com tons vermelhos.
- `warning`: mensagem de atenção com tons amarelos.

As cores de fundo, borda e texto são definidas dinamicamente conforme a variante recebida.

## Como executar

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Acesse a pasta:

```bash
cd semana02
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

## Reflexão — Tailwind CSS e CSS tradicional

**Quais são as vantagens e desvantagens de utilizar Tailwind CSS em vez de arquivos CSS tradicionais na componentização do React?**

O Tailwind CSS é um framework CSS baseado em classes utilitárias que permite estilizar elementos diretamente no JSX, sem precisar criar uma classe CSS personalizada para cada componente. Entre suas principais vantagens estão a agilidade no desenvolvimento, a padronização visual, a facilidade para criar layouts responsivos e a reutilização de estilos.
Além disso, o Tailwind disponibiliza classes predefinidas para espaçamento, cores, tipografia, bordas e outros elementos, facilitando a criação de interfaces.

Por outro lado, uma das principais desvantagens é a quantidade de classes presentes no JSX, que pode dificultar a leitura quando os componentes possuem muitos estilos.

O CSS tradicional oferece maior liberdade para criar regras personalizadas e permite manter os estilos separados da estrutura dos componentes. Entretanto, em projetos maiores, pode exigir mais organização para evitar repetição de código e conflitos entre seletores.

# a11y-diagrams

- [About](#about)
- [Development](#development)
- [Building](#building)
- [Technologies](#technologies)
- [References](#references)

## About

This proof of concept explores the development of an intuitive and screen-reader accessible interface for exploring diagrams.

The objective is to define a data format to which popular diagram languages like [Mermaid](https://mermaid.js.org/syntax/flowchart.html) and [DOT](https://graphviz.org/doc/info/lang.html) can be converted, and to build an interface leveraging this accessibility-focused data format.

The current application screen provides:

- A functional live editor for creating diagrams using Mermaid syntax.
- A JSON representation of the diagram, converted to the proposed data format for building the accessible interface.
- The existing SVG rendered by Mermaid for reference.
- A experimental interface that introduces new ways for exploring the diagram without relying on the rendered SVG.

A screenshot of the screen described above:

![a screenshot image of the screen described above](https://raw.githubusercontent.com/gbaptista/assets/main/a11y-diagrams/screenshot-a.png)

## Development

Clone the repository and install its dependencies with the following steps:

```sh
git clone git@github.com:gbaptista/a11y-diagrams.git

cd a11y-diagrams

npm install
```

Run the project in development mode:
```bash
npm run dev

npm run dev -- --open
```

Running tests:
```sh
npm run test:unit
```

## Building

To generate a production version:

```bash
npm run build
```

You can preview the production build by running `npm run preview`.

## Technologies

This project was built using the following technologies:

- Language: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Frontend Framework: [Svelte](https://svelte.dev)
- Live In-Browser Code Editor: [Monaco](https://microsoft.github.io/monaco-editor/)
- Syntax Highlighting: [Prism.js](https://prismjs.com)

## References

- [Mermaid Accessibility Options](https://mermaid.js.org/config/accessibility.html)
- [More Accessible Mermaid Charts #2732](https://github.com/mermaid-js/mermaid/issues/2732)

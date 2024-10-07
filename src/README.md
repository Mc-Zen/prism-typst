# Prism-Typst

_Syntax-highlighting Typst code with [Prism](https://prismjs.com/)_

## Contents
The `src/` directory contains a Prism language definition for typst which you can import after importing Prism, e.g., 
```html
<script src="prism.js"></script>
<script src="prism-typst.js"></script>
```
as well as a CSS stylesheet that imitates the color scheme of the [Typst web app](https://typst.app). 

For use with a program using [node.js](https://nodejs.org/en) (e.g., with [Docusaurus](https://docusaurus.io/)), a light theme as well as a dark theme are available with the file `src/typst-theme.js`. 

## Contribution needed

In order to maintain and improve this language definition for Prism, I'm looking for help with
- writing tests (important since regex matching so many things is a little brittle) and
- treating/fixing more edge cases (and improvements in general). 
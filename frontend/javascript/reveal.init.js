import "reveal.js/dist/reset.css"
import "reveal.js/dist/reveal.css"
import "reveal.js/dist//theme/solarized.css"
import "reveal.js/plugin/highlight/monokai.css"

import Reveal from "reveal.js"
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js"
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js"
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js"

Reveal.initialize({
  controls: false,
  progress: true,
  slideNumber: true,
  hash: true,

  plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
});

console.info("Reveal is loaded!")

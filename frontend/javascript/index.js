import "index.css"
import "reset.css"
import "reveal/reveal.css"
import "reveal/theme/solarized.css"
import "reveal/plugin/highlight/monokai.css"

import Reveal from "reveal/reveal.js"
import RevealNotes from "reveal/plugin/notes/notes.js"
import RevealMarkdown from "reveal/plugin/markdown/markdown.js"
import RevealHighlight from "reveal/plugin/highlight/highlight.js"

Reveal.initialize({
  controls: false,
  progress: true,
  slideNumber: true,
  hash: true,

  plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
});

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

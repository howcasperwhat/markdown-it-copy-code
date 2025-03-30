import MarkdownIt from 'markdown-it'
import Shiki from '@shikijs/markdown-it'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
import MarkdownItCopyCode from '../dist'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  xhtmlOut: true,
})

md.use(await Shiki({
  defaultColor: false,
  themes: {
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  },
  transformers: [
    transformerTwoslash({
      explicitTrigger: true,
      renderer: rendererRich(),
    })
  ]
})).use(MarkdownItCopyCode)

export default md
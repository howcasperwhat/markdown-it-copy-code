/// <reference types="vite/client" />

import { parse } from 'node:path'
import { describe, expect, it } from 'vitest'

import shiki from '@shikijs/twoslash/style-rich.css?raw'
import base from '../styles/base.css?raw'
import md from './markdown'
import markdown from './markdown.css?raw'

describe('index', () => {
  const styles = Object.fromEntries(
    Object.entries(import.meta.glob(
      '../styles/*.css',
      { query: '?raw', import: 'default', eager: true },
    )).map(
      ([path, content]) => [parse(path).name, content],
    ),
  )
  Object.entries(import.meta.glob(
    './input/*.md',
    { query: '?raw', import: 'default', eager: true },
  )).forEach(([path, content]) => {
    const parsed = parse(path)
    it(`render ${path}`, async () => {
      const rendered = [
        md.render(`${content}`),
        '<style>',
        markdown,
        base,
        shiki,
        styles[parsed.name],
        '</style>',
        '<script type="module">',
        'import { useCopyCode } from \'/dist/index.mjs\'',
        'useCopyCode({buttonClass: \'markdown-copy-code-button\', displayDuration: 3000})',
        '</script>',
      ].join('\n').trim().replace(/\r\n/g, '\n')
      await expect(rendered)
        .toMatchFileSnapshot(
          path.replace('input', 'output').replace('.md', '.html'),
        )
    })
  })
})

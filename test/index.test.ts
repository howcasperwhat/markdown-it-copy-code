/// <reference types="vite/client" />

import { describe, it, expect } from 'vitest'

import md from './markdown'
import markdown from './markdown.css?raw'
import base from '../styles/base.css?raw'
import shiki from '@shikijs/twoslash/style-rich.css?raw'
import { parse } from 'path'

describe('index', () => {
  const styles = Object.fromEntries(
    Object.entries(import.meta.glob(
    '../styles/*.css',
    { query: '?raw', import: 'default', eager: true }
    )).map(
      ([path, content]) => [parse(path).name, content]
    )
  )
  Object.entries(import.meta.glob(
    './input/*.md',
    { query: '?raw', import: 'default', eager: true }
  )).forEach(([path, content]) => {
      const parsed = parse(path)
      it(`render ${path}`, async () => {
        const rendered = [
          md.render(`${content}`),
          `<style>\n${[
            markdown, base, shiki,
            styles[parsed.name],
          ].join('\n')}\n</style>`,
        ].join('\n').trim().replace(/\r\n/g, '\n')
        await expect(rendered)
          .toMatchFileSnapshot(
            path.replace('input', 'output').replace('.md', '.html')
          )
      })
    })
});
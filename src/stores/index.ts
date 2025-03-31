import type { MarkdownItCopyCodeOptions } from '../types'

const DEFAULT_BUTTON_CLASS = 'markdown-copy-code-button'
const DEFAULT_CONTAINER_CLASS = 'markdown-copy-code-container'
const DEFAULT_COPY_SVG_CLASS = 'markdown-copy-code-copy'
const DEFAULT_DONE_SVG_CLASS = 'markdown-copy-code-done'

// https://icon-sets.iconify.design/hugeicons/task-01/
const DEFAULT_COPY_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
  <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path d="M7.998 16h4m-4-5h8M7.5 3.5c-1.556.047-2.483.22-3.125.862c-.879.88-.879 2.295-.879 5.126v6.506c0 2.832 0 4.247.879 5.127C5.253 22 6.668 22 9.496 22h5c2.829 0 4.243 0 5.121-.88c.88-.879.88-2.294.88-5.126V9.488c0-2.83 0-4.246-.88-5.126c-.641-.642-1.569-.815-3.125-.862" />
    <path d="M7.496 3.75c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 0 1-1.75-1.75" />
  </g>
</svg>
`
// https://icon-sets.iconify.design/hugeicons/task-done-01/
const DEFAULT_DONE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
  <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path d="M13.5 20s1 0 2 2c0 0 3.177-5 6-6M7 16h4m-4-5h8M6.5 3.5c-1.556.047-2.483.22-3.125.862c-.879.88-.879 2.295-.879 5.126v6.506c0 2.832 0 4.247.879 5.127C4.253 22 5.668 22 8.496 22h2.5m4.496-18.5c1.556.047 2.484.22 3.125.862c.88.88.88 2.295.88 5.126V13.5"/><path d="M6.496 3.75c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 0 1-1.75-1.75" />
  </g>
</svg>
`

export const OPTIONS: MarkdownItCopyCodeOptions = {}

export {
  DEFAULT_BUTTON_CLASS,
  DEFAULT_CONTAINER_CLASS,
  DEFAULT_COPY_SVG_CLASS,
  DEFAULT_DONE_SVG_CLASS,
  DEFAULT_COPY_SVG,
  DEFAULT_DONE_SVG,
}

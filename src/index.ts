import type MarkdownIt from 'markdown-it'
import type { MarkdownItCopyCodeOptions } from './types'
import {
  DEFAULT_BUTTON_CLASS,
  DEFAULT_CODE_SVG_CLASS,
  DEFAULT_CONTAINER_CLASS,
  DEFAULT_COPY_SVG,
  DEFAULT_DONE_SVG,
  DEFAULT_DONE_SVG_CLASS,
  OPTIONS,
} from './stores'
import { useCopyCode } from './scripts'

function renderCodeFence(renderer: MarkdownIt.Renderer.RenderRule, options?: MarkdownItCopyCodeOptions) {
  const {
    containerClass: _container_ = DEFAULT_CONTAINER_CLASS,
    buttonClass: _button_ = DEFAULT_BUTTON_CLASS,
    codeSVGClass: _codesvg_ = DEFAULT_CODE_SVG_CLASS,
    doneSVGClass: _donesvg_ = DEFAULT_DONE_SVG_CLASS,
    codeSVG: _code_ = DEFAULT_COPY_SVG,
    doneSVG: _done_ = DEFAULT_DONE_SVG,
  } = options ?? {}
  Object.assign(OPTIONS, options)
  const rule: MarkdownIt.Renderer.RenderRule = (tokens, idx, options, env, self) => {
    const content = tokens[idx].content
    const rendered = renderer(tokens, idx, options, env, self)

    if (content.length === 0 || content === '\n')
      return rendered

    return `
      <div class="${_container_}">
        ${rendered}
        <button class="${_button_}">
          <div class="${_codesvg_}">
            ${_code_}
          </div>
          <div class="${_donesvg_}">
            ${_done_}
          </div>
        </button>
      </div>
    `
  }
  return rule
}

const MarkdownItCopyCode: MarkdownIt.PluginWithOptions<MarkdownItCopyCodeOptions> = (
  md: MarkdownIt,
  options?: MarkdownItCopyCodeOptions,
) => {
  md.renderer.rules.fence = renderCodeFence(md.renderer.rules.fence!, options)
}

export default MarkdownItCopyCode
export { useCopyCode }

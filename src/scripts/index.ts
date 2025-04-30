import { DEFAULT_BUTTON_CLASS, OPTIONS } from '../stores'
import type { UseCopyCodeOptions } from '../types'

// https://github.com/vuejs/vitepress/blob/main/src/client/app/composables/copyCode.ts
function useCopyCode(options?: UseCopyCodeOptions) {
  const btnClass = OPTIONS.buttonClass ?? options?.buttonClass ?? DEFAULT_BUTTON_CLASS
  const client = typeof window !== 'undefined'
  if (client) {
    const timeoutIdMap: WeakMap<HTMLButtonElement, NodeJS.Timeout> = new WeakMap()
    const handleClick = (e: MouseEvent) => {
      const el = e.target as HTMLButtonElement
      if (el.matches(`button.${btnClass}`)) {
        const parent = el.parentElement
        const preNode = parent?.querySelector('pre')
        const codeNode = preNode?.querySelector('code')
        if (!parent || !preNode || !codeNode)
          return
        const text = codeNode.textContent || ''

        copyToClipboard(text).then(() => {
          el.classList.add('copied')
          el.focus()
          clearTimeout(timeoutIdMap.get(el))
          const timeoutId = setTimeout(() => {
            el.classList.remove('copied')
            el.blur()
            timeoutIdMap.delete(el)
          }, options?.displayDuration ?? 2000)
          timeoutIdMap.set(el, timeoutId)
        })
      }
    }
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }
}

async function copyToClipboard(text: string) {
  try {
    return navigator.clipboard.writeText(text)
  }
  catch {
    const element = document.createElement('textarea')
    const previouslyFocusedElement = document.activeElement

    element.value = text

    // Prevent keyboard from showing on mobile
    element.setAttribute('readonly', '')

    element.style.contain = 'strict'
    element.style.position = 'absolute'
    element.style.left = '-9999px'
    element.style.fontSize = '12pt' // Prevent zooming on iOS

    const selection = document.getSelection()
    const originalRange = selection
      ? selection.rangeCount > 0 && selection.getRangeAt(0)
      : null

    document.body.appendChild(element)
    element.select()

    // Explicit selection workaround for iOS
    element.selectionStart = 0
    element.selectionEnd = text.length

    document.execCommand('copy')
    document.body.removeChild(element)

    if (originalRange) {
      selection!.removeAllRanges() // originalRange can't be truthy when selection is falsy
      selection!.addRange(originalRange)
    }

    // Get the focus back on the previously focused element, if any
    if (previouslyFocusedElement) {
      ; (previouslyFocusedElement as HTMLElement).focus()
    }
  }
}

export { useCopyCode }

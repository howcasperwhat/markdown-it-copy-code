# markdown-it-copy-code

[![npm version][npm-version-src]][npm-version-href]
[![License][license-src]][license-href]

Support copy code to clipboard for markdown-it.

## Usage

We supply plugin, style and script for you to use.
Script is required to activate click-event of the copy button.

### Install
``` sh
npm i markdown-it-copy-code
```

### Options
``` ts
import MarkdownIt from 'markdown-it'
import MarkdownItCopyCode from 'markdown-it-copy-code'

const md = new MarkdownIt()
md.use(MarkdownItCopyCode, {
  // below shows default options
  containerClass: 'markdown-copy-code-container',
  buttonClass: 'markdown-copy-code-button',
  codeSVGClass: 'markdown-copy-code-code',
  doneSVGClass: 'markdown-copy-code-done',
  // default is hugeicons:task-01
  codeSVG: '<svg>...</svg>',
  // default is hugeicons:task-done-01
  doneSVG: '<svg>...</svg>',
})
```

### Script
You should run this script in your html file.
As an example, you can run it after mounting components in Vue.
``` vue
<script setup lang="ts">
import { useCopyCode } from 'markdown-it-copy-code'
import { onMounted } from 'vue'

onMounted(() => {
  useCopyCode()
  // if you have customized the buttonClass, you should pass it as argument
  // useCopyCode('your-button-class')
})
</script>
<template></template>
<style></style>
```

### Style

We supply two styles for you to use.
If you use [shiki](https://shiki.style/packages/markdown-it) to highlight code, `shiki.css` may be more suitable for you.
``` ts
import 'markdown-it-copy-code/styles/base.css'
// if using shiki
import 'markdown-it-copy-code/styles/shiki.css'
// else
import 'markdown-it-copy-code/styles/default.css'
```

You can also customize the style by yourself based on `className` you set in options.
See [default.css](./styles/default.css) for reference.

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/markdown-it-copy-code
[npm-version-href]: https://npmjs.com/package/markdown-it-copy-code
[license-src]: https://img.shields.io/github/license/howcasperwhat/markdown-it-copy-code.svg
[license-href]: https://github.com/howcasperwhat/markdown-it-copy-code/blob/main/LICENSE

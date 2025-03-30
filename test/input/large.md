# Large SVG

``` markdown
## Single Line Code Block
```

``` ts
// this is a multiple line code block
const quicksort = (arr) => {
  if (arr.length <= 1) return arr
  const pivot = arr[Math.floor(arr.length / 2)]
  const left = arr.filter((x) => x < pivot)
  const right = arr.filter((x) => x > pivot)
  return [...quicksort(left), pivot, ...quicksort(right)]
}
```

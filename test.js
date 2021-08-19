import './index.js'

console.log(Function.iterate((recurse, i, s) => {
    if (i < 5) return recurse(i + 1, s + i);
    else return s;
}, 0, 0))
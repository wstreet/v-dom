# v-dom

简易版虚拟dom和diff算法

## 使用

```
npm i vdom.js -S

import el from 'vdom.js'

const ul = el('ul', { id: 'list' }, [
    el('li', { class: 'item' }, ['Item 1']),
    el('li', { class: 'item' }, ['Item 2']),
    el('li', { class: 'item' }, ['Item 3'])
]);

const ulDom = ul.render();

document.body.appendChild(ulDom)
```

## Demo

```
cd demo

npm install

npm start

```

然后在浏览器中打开index.html，可以看见页面渲染出来的节点


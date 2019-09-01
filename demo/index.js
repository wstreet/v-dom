import el from 'vdom.js';


const ul = el('ul', { id: 'list' }, [
    el('li', { class: 'item' }, ['Item 1']),
    el('li', { class: 'item' }, ['Item 2']),
    el('li', { class: 'item' }, ['Item 3'])
]);

const ulDom = ul.render();

document.body.appendChild(ulDom)
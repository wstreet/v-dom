import el from './element'
import diff from './diff'
import patch from './patch'

el.diff = diff
el.patch = patch

export default el

// const ul = el('ul', { id: 'list' }, [
//     el('li', { class: 'item' }, ['Item 1']),
//     el('li', { class: 'item' }, ['Item 2']),
//     el('li', { class: 'item' }, ['Item 3'])
// ]);

// const ulDom = ul.render();

// document.body.appendChild(ulDom)
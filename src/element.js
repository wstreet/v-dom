import _ from './utils';

/**
 * @class Element vdom
 * @param {String} tagName
 * @param {Object} attrs
 * @param {Array<Element | string>} children
 */


class Element {
    constructor(tagName, attrs, children) {
        // 只有两个参数
        if (_.isArray(attrs)) {
            children = attrs;
            attrs = {}
        }

        this.tagName = tagName;
        this.attrs = attrs;
        this.children = children;

        // this.key为后面的diff做准备
        this.key = attrs ? attrs.key : ''
    }

    render() {
        // 生成dom节点
        const el = document.createElement(this.tagName);
        const attrs = this.attrs;

        // 设置dom节点属性
        for (const attrName in attrs) {
            _.setAttr(el, attrName, attrs[attrName])
        }

        // 设置节点的内容
        const children = this.children || []
        children.forEach(child => {
            const childEl = child instanceof Element
                ? child.render() : document.createTextNode(child);

            el.appendChild(childEl);
        })
        return el;
    }
}

const el = (tagName, attrs, children) => {
    return new Element(tagName, attrs, children)
}


export default el



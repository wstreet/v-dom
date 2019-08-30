const utils = {
    setAttr(node, key, value) {
        switch (key) {
            case 'style': {
                node.style.cssText = value;
                break;
            }
            case 'value': {
                let tagName = node.TagName || '';
                tagName = tagName.toLowerCase();
                if (tagName === 'input' || tagName === 'textarea') {
                    node.value = value;
                } else {
                    node.setAttribute(key, value);
                }
                break;
            }
            default: {
                node.setAttribute(key, value);
                break;
            }
        }
    },

    slice(arrLike, index) {
        return Array.prototype.slice.call(arrLike, index);
    },

    type(obj) {
        return Object.prototype.toString.call(obj).replace(/\[object\s|\]/, '');
    },

    isArray(list) {
        return utils.type(list) === 'Array';
    },

    toArray(listLike) {
        if (!listLike) return [];

        return Array.from(listLike);
    },

    isString(string) {
        return utils.type(string) === 'String';
    },

    isElementNode(node) {
        return node.nodeType === 1
    }
}

export default utils;
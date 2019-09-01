(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vdom"] = factory();
	else
		root["vdom"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




_element__WEBPACK_IMPORTED_MODULE_0__["default"].diff = _diff__WEBPACK_IMPORTED_MODULE_1__["default"]
_element__WEBPACK_IMPORTED_MODULE_0__["default"].patch = _patch__WEBPACK_IMPORTED_MODULE_2__["default"]

/* harmony default export */ __webpack_exports__["default"] = (_element__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * @class Element vdom
 * @param {String} tagName
 * @param {Object} attrs
 * @param {Array<Element | string>} children
 */


class Element {
    constructor(tagName, attrs, children) {
        // 只有两个参数
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(attrs)) {
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
            _utils__WEBPACK_IMPORTED_MODULE_0__["default"].setAttr(el, attrName, attrs[attrName])
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


/* harmony default export */ __webpack_exports__["default"] = (el);




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (utils);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _listDiff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);





// 设置节点唯一标识
let key_id = 0


// diff入口
function diff(oldTree, newTree) {
    let index = 0
    let patches = {} // 用来记录每个节点差异的补丁对象
    walk(oldTree, newTree, index, patches)
    return patches
}


/**
 * walk 遍历查找节点差异
 * @param  { Object } oldNode
 * @param  { Object } newNode
 * @param  { Number } index   - currentNodeIndex
 * @param  { Object } patches - 记录节点差异的对象
 */

function walk(oldNode, newNode, index, patches) {
    const currentPatch = []


    // oldNode 被remove掉
    if (oldNode === null || oldNode === undefined) {
        // list diff来处理

    } else if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(oldNode) && _utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(newNode)) { // 处理字符串
        if (oldNode !== newNode) {
            currentPatch.push({
                type: _constant__WEBPACK_IMPORTED_MODULE_2__["TEXT"],
                content: newNode
            })
        }
    } else if (
        oldNode.tagName === newNode.tagName &&
        oldNode.key === newNode.key
    ) { // 比较attrs和children
        const attrsPatches = diffAttrs(oldNode, newNode);
        if (attrsPatches) {
            currentPatch.push({
                type: _constant__WEBPACK_IMPORTED_MODULE_2__["ATTRS"],
                attrs: attrPatches
            })
        }

        // 递归diff子节点
        diffChildren(oldNode.children, newNode.children, index, patches, currentPatch)
    } else { // replace
        currentPatch.push({
            type: _constant__WEBPACK_IMPORTED_MODULE_2__["REPLACE"],
            node: newNode
        })
    }

    if (currentPatch.length) { // 将currentPatch放进patches
        patches[index] = currentPatch
    }

}

// diff attrs
function diffAttrs(oldNode, newNode) {
    let count = 0
    let oldAttrs = oldNode.attrs
    let newAttrs = newNode.attrs

    let value
    let attrsPatches = {}

    // 被移除了一下attr
    for (const key in oldAttrs) {
        value = oldAttrs[key]
        if (newAttrs[key] !== value) {
            count++
            attrsPatches[key] = newAttrs[key]
        }
    }

    // 存在新增的attr
    for (const key in newAttrs) {
        value = newAttrs[key]
        if (!oldAttrs.hasOwnProperty(key)) {
            count++
            attrsPatches[key] = value
        }
    }

    if (count === 0) {
        return null
    }

    return attrsPatches
}


function diffChildren(oldChildren, newChildren, index, patches, currentPatch) {
    let diffs = Object(_listDiff__WEBPACK_IMPORTED_MODULE_1__["default"])(oldChildren, newChildren, 'key')
    newChildren = diffs.children

    if (diffs.moves.length) {
        let reorderPatch = { type: _constant__WEBPACK_IMPORTED_MODULE_2__["REORDER"], moves: diffs.moves }
        currentPatch.push(reorderPatch)
    }


    // 存放当前node的标识，初始化值为 0
    let currentNodeIndex = index

    oldChildren.forEach((child, index) => {
        key_id++
        let newChild = newChildren[index]

        currentNodeIndex = key_id

        // 递归继续比较
        walk(child, newChild, currentNodeIndex, patches)
    })

}


/* harmony default export */ __webpack_exports__["default"] = (diff);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Diff two list in O(N).
 * @param {Array} oldList - 原始列表
 * @param {Array} newList - 经过一些操作的得出的新列表
 * @return {Object} - {moves: <Array>}
 *                  - moves list操作记录的集合
 */
function diffList(oldList, newList, key) {
    const oldMap = getKeyIndexMapAndFree(oldList, key)
    const newMap = getKeyIndexMapAndFree(newList, key)

    const newFree = newMap.free

    const oldKeyIndexMap = oldMap.keyIndexMap
    const newKeyIndexMap = newMap.keyIndexMap

    const moves = [] // 记录所有move操作

    const children = [] // simulate list
    let i = 0
    let freeIndex

    // newList 向 oldList 的形式靠近进行操作
    while (i < oldList.length) {
        const item = oldList[i]
        const itemKey = getItemKey(item, key)

        if (itemKey) {
            if (!oldKeyIndexMap.hasOwnProperty(itemKey)) {
                children.push(null)
            } else {
                const newItemIndex = newKeyIndexMap[itemKey]
                children.push(newList[newItemIndex])
            }
        } else {
            const freeItem = newFree[freeIndex++]
            children.push(freeItem || null)
        }
        i++
    }

    const simulateList = children.slice(0)

    // 移除列表中一些不存在的元素
    i = 0
    while (i < simulateList.length) {
        if (simulateList[i] === null) {
            remove(i)
            removeSimulate(i)
        } else {
            i++
        }
    }


    // i  => new list
    // j  => simulateList
    let j = i = 0
    while (i < newList.length) {
        item = newList[i]
        itemKey = getItemKey(item, key)

        let simulateItem = simulateList[j]
        let simulateItemKey = getItemKey(simulateItem, key)

        if (simulateItem) {
            if (itemKey === simulateItemKey) {
                j++
            }
            else {
                // 如果移除掉当前的 simulateItem 可以让 item在一个正确的位置，那么直接移除
                let nextItemKey = getItemKey(simulateList[j + 1], key)
                if (nextItemKey === itemKey) {
                    remove(i)
                    removeSimulate(j)
                    j++ // 移除后，当前j的值是正确的，直接自加进入下一循环
                } else {
                    // 否则直接将item 执行 insert
                    insert(i, item)
                }
            }
            // 如果是新的 item, 直接执行 inesrt
        } else {
            insert(i, item)
        }
        i++
    }


    // 记录remove操作
    function remove(index) {
        const move = { index: index, type: 0 }
        moves.push(move)
    }


    // 记录insert操作
    function insert(index, item) {
        let move = { index: index, item: item, type: 1 }
        moves.push(move)
    }


    // 移除simulateList中对应实际list中remove掉节点的元素
    function removeSimulate(index) {
        simulateList.splice(index, 1)
    }


    // 返回所有操作记录
    return {
        moves: moves,
        children: children
    }
}



/**
 * 将 list转变成  key-item keyIndex 对象的形式进行展示.
 * @param {Array} list
 * @param {String|Function} key
 */
function getKeyIndexMapAndFree(list, key) {
    let keyIndexMap = {}
    let free = []
    for (let i = 0, len = list.length; i < len; i++) {
        let item = list[i]
        let itemKey = getItemKey(item, key)
        if (itemKey) {
            keyIndexMap[itemKey] = i
        } else {
            free.push(item)
        }
    }

    // 返回 key-item keyIndexMap
    return {
        keyIndexMap,
        free: free
    }
}


function getItemKey(item, key) {
    if (!item || !key) return void 0
    return typeof key === 'string'
        ? item[key]
        : key(item)
}


/* harmony default export */ __webpack_exports__["default"] = (diffList);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPLACE", function() { return REPLACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRS", function() { return ATTRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT", function() { return TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REORDER", function() { return REORDER; });
const REPLACE = 0
const ATTRS = 1
const TEXT = 2
const REORDER = 3



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



function patch(rootNode, patches) {
    let walker = { index: 0 }

    walk(rootNode, walker, patches)
}

function walk(node, walker, patches) {
    // 从patches中取出当前节点的差异
    const currentPatches = patches[walker.index]

    const childNodes = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(node.childNodes) ? node.childNodes : []

    // 对子节点进行遍历
    childNodes.forEach(childNode => {
        walker.index++
        walk(childNode, walker, patches)
    })

    // 对当前节点进行dom操作
    dealPatches(node, currentPatches)
}

function dealPatches(node, currentPatches) {
    console.log(currentPatches, 'currentPatches')
    currentPatches.forEach(currentPatche => {
        switch (currentPatche.type) {
            case _constant__WEBPACK_IMPORTED_MODULE_1__["REPLACE"]: {
                let newNode
                if (typeof currentPatche.node === 'string') {
                    newNode = document.createTextNode(currentPatche.node)
                } else {
                    newNode = currentPatche.render()
                }

                node.parentNode.replaceChild(newNode, node)
                break
            }

            case _constant__WEBPACK_IMPORTED_MODULE_1__["REORDER"]: {
                reorderChildren(node, currentPatche.moves)
                break
            }

            case _constant__WEBPACK_IMPORTED_MODULE_1__["ATTRS"]: {
                setAttrs(node, currentPatche.attrs)
                break
            }

            case _constant__WEBPACK_IMPORTED_MODULE_1__["TEXT"]: {
                if (node.textContent) {
                    node.textContent = currentPatche.content
                } else {  // ie
                    node.nodeValue = currentPatche.content
                }
                break
            }
            default:
                throw new Error('Unknown patch type ' + currentPatch.type)
        }
    })

}

function setAttrs(node, attrs) {
    for (const key in attrs) {
        if (attrs[key] === void 0) {
            node.removeAttribute(key)
        } else {
            value = attrs[key]
            _utils__WEBPACK_IMPORTED_MODULE_0__["default"].setAttr(node, key, value)
        }
    }
}

function reorderChildren(node, moves) {
    const staticNodeList = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(node.childNodes)

    const maps = {} // 存储含有key特殊字段的节点

    staticNodeList.forEach(node => {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isElementNode(node)) {
            const key = node.getAttribute('key')
            if (key) {
                maps[key] = node
            }
        }
    })

    moves.forEach(move => {
        const index = move.index

        if (move.type === 0) { // remove item
            if (staticNodeList[index] === node.childNodes[index]) { // maybe have been removed for inserting
                node.removeChild(node.childNodes[index])
            }
            staticNodeList.splice(index, 1)
        } else if (move.type === 1) { // insert item
            let insertNode = maps[move.item.key]
                ? maps[move.item.key] // reuse old item
                : (typeof move.item === 'object')
                    ? move.item.render()
                    : document.createTextNode(move.item)
            staticNodeList.splice(index, 0, insertNode)
            node.insertBefore(insertNode, node.childNodes[index] || null)
        }
    })
}

patch.REPLACE = _constant__WEBPACK_IMPORTED_MODULE_1__["REPLACE"]
patch.ATTRS = _constant__WEBPACK_IMPORTED_MODULE_1__["ATTRS"]
patch.TEXT = _constant__WEBPACK_IMPORTED_MODULE_1__["TEXT"]
patch.REORDER = _constant__WEBPACK_IMPORTED_MODULE_1__["REORDER"]

/* harmony default export */ __webpack_exports__["default"] = (patch);

/***/ })
/******/ ])["default"];
});
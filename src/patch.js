import _ from '../utils'
import {
    REPLACE,
    ATTRS,
    TEXT,
    REORDER
} from './constant'

function patch(rootNode, patches) {
    let walker = { index: 0 }

    walk(rootNode, walker, patches)
}

function walk(node, walker, patches) {
    // 从patches中取出当前节点的差异
    const currentPatches = patches[walker.index]

    const childNodes = _.isArray(node.childNodes) ? node.childNodes : []

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
            case REPLACE: {
                let newNode
                if (typeof currentPatche.node === 'string') {
                    newNode = document.createTextNode(currentPatche.node)
                } else {
                    newNode = currentPatche.render()
                }

                node.parentNode.replaceChild(newNode, node)
                break
            }

            case REORDER: {
                reorderChildren(node, currentPatche.moves)
                break
            }

            case ATTRS: {
                setAttrs(node, currentPatche.attrs)
                break
            }

            case TEXT: {
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
            _.setAttr(node, key, value)
        }
    }
}

function reorderChildren(node, moves) {
    const staticNodeList = _.toArray(node.childNodes)

    const maps = {} // 存储含有key特殊字段的节点

    staticNodeList.forEach(node => {
        if (_.isElementNode(node)) {
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
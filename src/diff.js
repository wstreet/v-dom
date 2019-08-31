import _ from './utils'
import diffList from './listDiff'
import {
    REPLACE,
    ATTRS,
    TEXT,
    REORDER
} from './constant'


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

    } else if (_.isString(oldNode) && _.isString(newNode)) { // 处理字符串
        if (oldNode !== newNode) {
            currentPatch.push({
                type: TEXT,
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
                type: ATTRS,
                attrs: attrPatches
            })
        }

        // 递归diff子节点
        diffChildren(oldNode.children, newNode.children, index, patches, currentPatch)
    } else { // replace
        currentPatch.push({
            type: REPLACE,
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
    let diffs = diffList(oldChildren, newChildren, 'key')
    newChildren = diffs.children

    if (diffs.moves.length) {
        let reorderPatch = { type: REORDER, moves: diffs.moves }
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


export default diff
import _ from '../utils'

const REPLACE = 0
const ATTRS = 1
const TEXT = 2
const REORDER = 3

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
        const attrPatches = diffAttrs(oldNode, newNode);
        if (attrPatches) {
            currentPatch.push({
                type: ATTRS,
                content: attrPatches
            })
        }

        // 递归diff子节点
        diffChildren(oldNode.children, newNode.children, index, patches)
    } else { // replace
        currentPatch.push({
            type: REPLACE,
            content: newNode
        })
    }

    if (currentPatch.length) { // 将currentPatch放进patches
        patches[index] = currentPatch
    }

}

// diff attrs
function diffAttrs(oldNode, newNode) {

}

// diff入口
function diff(oldTree, newTree) {
    let index = 0
    let patches = {} // 用来记录每个节点差异的补丁对象
    walk(oldTree, newTree, index, patches)
    return patches
}
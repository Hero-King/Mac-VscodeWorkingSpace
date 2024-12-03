export default {
  getTreeData,
  each
}
export function each(data, callback, childName = 'children') {
  let current
  let children
  for (let i = 0, len = data.length; i < len; i++) {
    current = data[i]
    children = []
    if (current[childName] && current[childName].length > 0) {
      children = current[childName]
    }
    callback && callback(current, children)
    if (children.length > 0) {
      each(children, callback, childName)
    }
  }
}

/**
 * @Author yihuang",
 * @param data     数据
 * @param id       要比对的名称
 * @param val      要比对的值
 * @param name     要返回的名称
 * @param children 子集名称
 * @param isRow    是否返回这一行的数据
 * @注 迭代判断多层
 * //=======================
 * 返回这一条数据的中文名
 * let name=utils.getTreeData(arr, 'flowId', item.decategoryId, 'name');
 * //=======================
 * 返回所有匹配的数据
 * let arr=utils.getTreeData(arr, 'flowId', item.decategoryId, 'name','children',true);
 */
export function getTreeData(data, id = 'id', val = '', name = 'name', children = 'children', isRow = false) {
  const arr = []
  each(
    data,
    (item) => {
      if (item[id] === val) {
        arr.push(item)
      }
    },
    children
  )
  return arr.length > 0 ? (isRow ? arr : arr[0][name]) : null
}

export function isElementVisibleInContainer(dom1, dom2, completely) {
  if (!dom1 || !dom2) {
    console.error('dom1 或 dom2 不存在')
    return false
  }

  // 获取 dom1 和 dom2 的边界信息
  const dom1Rect = dom1.getBoundingClientRect()
  const dom2Rect = dom2.getBoundingClientRect()

  // 判断 dom1 是否在 dom2 的可见范围内
  const isVisible =
    dom1Rect.top < dom2Rect.bottom && // dom1 的顶部在 dom2 的底部之上
    dom1Rect.bottom > dom2Rect.top && // dom1 的底部在 dom2 的顶部之下
    dom1Rect.left < dom2Rect.right && // dom1 的左边在 dom2 的右边之左
    dom1Rect.right > dom2Rect.left // dom1 的右边在 dom2 的左边之右

  const isCompletelyVisible =
    dom1Rect.top >= dom2Rect.top && dom1Rect.bottom <= dom2Rect.bottom && dom1Rect.left >= dom2Rect.left && dom1Rect.right <= dom2Rect.right

  return completely ? isCompletelyVisible : isVisible
}

export const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

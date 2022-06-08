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
  let arr = []
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

// 测试export 引用类型数据可否被程序修改(查看HelloWorld组件中的personsAgePlus)  => 可以的 变量在内存中 可修改
export const persons = [
  { name: 'wang', age: 12 },
  { name: 'jun', age: 20 }
]
// 测试export 深层对象
export const deepObj = [
  { name: 'wang', config: { face: true } },
  { name: 'jun', config: { face: false } }
]

export const constArr = [{ id: 1, bool: true }]

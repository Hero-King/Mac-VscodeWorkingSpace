import Mock from 'mockjs'

Mock.mock('/api/getTableData', 'get', {
  'data|10': [
    {
      'id|+1': 1,
      name: '@cname',
      'age|1-100': 10,
      date: '@date'
    }
  ]
})

Mock.mock('/api/getDict', 'post', {
  code: 0,
  'content|1-10': [
    {
      label: '@cname',
      value: '@name',
      id: '@id'
    }
  ]
})

// test DictSelect editable
Mock.mock('/api/getDict', 'post', {
  code: 0,
  content: [
    { label: '丁磊', value: 'Jessica Robinson', id: '360000201811167625' },
    { label: '沈超', value: 'Karen Wilson', id: '330000200902214650' },
    { label: '贺丽', value: 'Paul Wilson', id: '43000019870525506X' },
    { label: '邱刚', value: 'Anthony Perez', id: '420000201909034536' }
  ]
})

let tableData = []
for (let i = 0; i < 200; i++) {
  tableData.push({
    id: i,
    date: '2016-05-02',
    name: '王小虎' + i,
    province: '上海' + i,
    city: '普陀区' + i,
    address: '上海市普陀区金沙江路 1518 弄' + i,
    zip: i
  })
}
Mock.mock('/api/getTableData', 'post', (options) => {
  // options.body 是string
  const { page = 1, pageSize = 10 } = JSON.parse(options.body)
  return {
    code: 0,
    total: 200,
    data: tableData.slice(page * pageSize, (page + 1) * pageSize)
  }
})

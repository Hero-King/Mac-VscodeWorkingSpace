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

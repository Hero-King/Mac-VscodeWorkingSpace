console.log(module.exports === exports,"模块暴露方式",exports);
module.exports = {
    person: {
        pname: 'wang',
        page: '22222'
    },
    name: 'wangjunjie',
    age: '22',
    "gender": '男'
}
console.log(module.exports === exports,"修改modal.exports指向了新对象后exports:",exports);

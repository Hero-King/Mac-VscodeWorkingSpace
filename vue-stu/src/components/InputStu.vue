<template>
  <div class="wrap" title="">
    <h3>使用v-model绑定,数据为字符串类型</h3>
    <div class="item">
      <el-input v-model="input" placeholder="请输入内容" />
      <span>value: {{ input }} typeof value : {{ typeof input }}</span>
    </div>

    <h3>v-model.number 可以输入英文字符; 输入英文字符时类型是String, 输入数字时候是Number类型, 不好用</h3>
    <div class="item">
      <el-input v-model.number="input1" placeholder="请输入内容" />
      <span>value: {{ input1 }} typeof value : {{ typeof input1 }}</span>
    </div>

    <h3>NumberInput</h3>
    <div class="item">
      <NumberInput v-model="numberInput" placeholder="请输入内容" :decimal="5" />
      <span>value: {{ numberInput }} typeof value : {{ typeof numberInput }}</span>
    </div>

    <h3>label属性</h3>
    <div class="item">
      <el-button id="prettier-id" class-name="prettier-class" type="primary" circle> Click Here </el-button>
      <el-input label="姓名" />
    </div>
  </div>
</template>
<script>
import NumberInput from './NumberInput/index.vue'
export default {
  name: 'InputStu',
  components: {
    NumberInput
  },
  data() {
    return {
      input: '',
      input1: '',
      numberInput: '678'
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap {
  text-align: left;
}
.item {
  display: flex;
  span {
    width: 100%;
    line-height: 40px;
  }
}
</style>

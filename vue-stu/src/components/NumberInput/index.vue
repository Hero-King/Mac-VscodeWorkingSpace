<template>
  <el-input
    :value="value"
    :step="step"
    type="number"
    class="mo-input--number"
    v-bind="$attrs"
    v-on="_listeners"
    @input="handleInput"
  />
</template>
<script>
/**
 * 数字输入框
 * 拦截input事件冒泡的value值,做逻辑处理
 */
export default {
  name: 'NumberInput',
  inheritAttrs: false,
  props: {
    value: [String, Number],
    decimal: {
      type: Number,
      default: 2
    }
  },
  computed: {
    // 去除掉上层组件v-model 中的input事件,防止传入到下层组件中
    _listeners() {
      const { input, ...restListeners } = this.$listeners
      return restListeners
    },
    step() {
      return 1 / Math.pow(10, this.decimal)
    }
  },
  methods: {
    handleInput(v) {
      const decimals = v.toString().lastIndexOf('.') > -1 ? v.toString().slice(v.toString().lastIndexOf('.') + 1) : '0'
      if (!isNaN(parseFloat(v)) && decimals.length > this.decimal) {
        this.$emit('input', Number(v).toFixed(this.decimal))
      } else {
        this.$emit('input', v)
      }
    }
  }
}
</script>
<style lang="scss">
/* 去掉右侧上下箭头  */
.mo-input--number {
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
}
</style>

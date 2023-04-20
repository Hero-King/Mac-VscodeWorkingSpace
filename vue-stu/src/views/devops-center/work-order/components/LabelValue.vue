<template lang="">
  <div class="el-form-item">
    <label class="el-form-item__label" :style="{ width: labelWidth }">{{ label }}</label>
    <div class="el-form-item__content" :style="{ marginLeft: labelWidth }">
      <slot>
        <span :class="valueClass">{{ value }}</span>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LabelValue',
  props: {
    label: String,
    labelWidth: String,
    value: [String, Number],
    valueClass: String
  }
}
</script>
<style lang="less" scoped>
.el-form-item__label {
  font-weight: 700;
}
</style>

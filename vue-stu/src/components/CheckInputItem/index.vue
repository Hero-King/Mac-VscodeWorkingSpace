<template>
  <div class="select-wrap">
    <el-checkbox
      v-model="value.checked"
      :label="checkboxKey"
      :disabled="disabled"
      v-on="$listeners"
    >
      {{ checkboxLabel }}
    </el-checkbox>
    <el-form-item
      :prop="prop"
      :rules="[{ required: value.checked, message: '请输入' }]"
      label=" "
    >
      <slot>
        <el-input
          v-model="value.processNote"
          :disabled="disabled"
        />
      </slot>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: 'CheckInputItem',
  props: {
    value: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checkboxKey: {
      type: [String, Number],
      required: true
    },
    checkboxLabel: {
      type: String
    },
    prop: {
      type: String
    }
  },
  computed: {}
}
</script>
<style lang="scss" scoped>
.select-wrap {
  display: flex;
  justify-content: space-between;
  .el-input {
    flex: 0 1 250px;
  }
}
</style>

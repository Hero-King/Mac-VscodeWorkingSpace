<template>
  <el-table-column :prop="prop" :label="label" :width="width">
    <template slot-scope="scope">
      <el-form-item v-if="scope.row.isEdit" :prop="prop" label="" v-bind="formItemConfig">
        <component :is="fieldType" v-model="scope.row[prop]" v-bind="$attrs" v-on="$listeners">
          <slot v-bind="scope"></slot>
        </component>
      </el-form-item>
      <template v-else-if="$scopedSlots.default">
        <slot v-bind="scope"></slot>
      </template>
      <span v-else>
        {{ scope.row[prop] }}
      </span>
    </template>
  </el-table-column>
</template>
<script>
export default {
  inheritAttrs: false,
  name: 'EditTableColumn',
  props: {
    prop: String,
    label: String,
    width: String,
    fieldType: {
      type: String,
      default: 'el-input'
    },
    formItemConfig: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form-item {
  margin: 0;
  .el-date-editor {
    width: 100%;
  }
}
</style>

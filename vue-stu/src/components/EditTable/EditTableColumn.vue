<template>
  <el-table-column :prop="prop" :label="label" :width="width">
    <template slot-scope="scope">
      <span v-if="scope.row.isEdit">
        <component :is="fieldType" v-model="scope.row[prop]"></component>
      </span>
      <span v-else>
        {{ scope.row[prop] }}
      </span>
    </template>
  </el-table-column>
</template>
<script>
export default {
  name: 'EditTableColumn',
  props: {
    prop: String,
    label: String,
    width: String,
    fieldType: {
      type: String,
      default: 'el-input'
    }
  }
}
</script>

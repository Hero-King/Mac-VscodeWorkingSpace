<template>
  <div>
    <el-form :model="form" label-width="80px">
      <el-form-item label="Select">
        <!-- 简单的select -->
        <DictSelect
          labelKey="label"
          valueKey="value"
          resultKey="content"
          dictUrl="/getDict"
          v-model="form.factoryId"
          :options="selectOpts"
          methods="post"
          placeholder="请选择人员"
          @change="handleChange"
        >
        </DictSelect>

        <!-- slot -->
        <DictSelect
          labelKey="label"
          valueKey="value"
          resultKey="content"
          dictUrl="/getDict"
          v-model="form.factoryId"
          methods="post"
          :options.sync="selectOpts1"
          placeholder="请选择人员"
        >
          <template #default="{ optItem }">
            <div>{{ optItem.label }} -- {{ optItem.value }}</div>
          </template>
        </DictSelect>
      </el-form-item>

      <el-form-item label="checkbox">
        <DictSelect type="checkbox" resultKey="content" dictUrl="/getDict" v-model="form.checkbox" methods="post" @change="handleChange"> </DictSelect>
      </el-form-item>
      <el-form-item label="checkboxButton">
        <DictSelect type="checkboxButton" resultKey="content" dictUrl="/getDict" v-model="form.checkboxButton" methods="post" @change="handleChange">
        </DictSelect>
      </el-form-item>

      <el-form-item label="radio">
        <DictSelect type="radio" resultKey="content" dictUrl="/getDict" v-model="form.radio" methods="post" @change="handleChange"> </DictSelect>
      </el-form-item>
      <el-form-item label="radioButton">
        <!-- <DictSelect type="radioButton" resultKey="content" dictUrl="/getDict" v-model="form.radioButton" methods="post" @change="handleChange"> </DictSelect> -->
        <!-- 插槽 -->
        <DictSelect type="radioButton" resultKey="content" dictUrl="/getDict" v-model="form.radioButton" methods="post" @change="handleChange">
          <template #default="{ optItem }"> {{ optItem.id }} - {{ optItem.label }} </template>
        </DictSelect>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'DictSelectDemo',
  data() {
    this.selectOpts = [
      {
        label: '是',
        value: 1
      },
      {
        label: '否',
        value: 0
      }
    ]
    return {
      selectOpts1: [],
      form: {
        checkbox: [],
        checkboxButton: []
      }
    }
  },
  methods: {
    handleChange() {
      console.log('handleChange', arguments)
    },
    log() {
      window.console.log(arguments)
    }
  }
}
</script>
<style lang=""></style>

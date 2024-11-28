<template>
  <div>
    <el-form
      :model="form"
      label-width="80px"
    >
      <el-form-item label="Select">
        <!-- 简单的select -->
        <DictSelect
          v-model="form.factoryId"
          label-key="label"
          value-key="value"
          result-key="content"
          dict-url="/getDict"
          :options="selectOpts"
          methods="post"
          placeholder="请选择人员"
          @change="handleChange"
        />

        <!-- slot -->
        <DictSelect
          v-model="form.factoryId"
          label-key="label"
          value-key="value"
          result-key="content"
          dict-url="/getDict"
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
        <DictSelect
          v-model="form.checkbox"
          com-type="checkbox"
          result-key="content"
          dict-url="/getDict"
          methods="post"
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="checkboxButton">
        <DictSelect
          v-model="form.checkboxButton"
          com-type="checkboxButton"
          result-key="content"
          dict-url="/getDict"
          methods="post"
          @change="handleChange"
        />
      </el-form-item>

      <el-form-item label="radio">
        <DictSelect
          v-model="form.radio"
          com-type="radio"
          result-key="content"
          dict-url="/getDict"
          methods="post"
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="radioButton">
        <!-- <DictSelect comType="radioButton" resultKey="content" dictUrl="/getDict" v-model="form.radioButton" methods="post" @change="handleChange"> </DictSelect> -->
        <!-- 插槽 -->
        <DictSelect
          v-model="form.radioButton"
          com-type="radioButton"
          result-key="content"
          dict-url="/getDict"
          methods="post"
          @change="handleChange"
        >
          <template #default="{ optItem }">
            {{ optItem.id }} - {{ optItem.label }}
          </template>
        </DictSelect>
      </el-form-item>
      <el-form-item label="input">
        <DictSelect
          v-model="form.input"
          com-type="el-input"
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="date">
        <DictSelect
          v-model="form.date"
          com-type="el-date-picker"
          type="date"
        />
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
      //   form: {
      //     factoryId: 1,
      //     checkbox: [],
      //     checkboxButton: [],
      //     input: '',
      //     date: '2022-01-02'
      //   },
      //  test editable
      form: {
        factoryId: 1,
        checkbox: ['Karen Wilson', 'Anthony Perez'],
        checkboxButton: ['Karen Wilson', 'Paul Wilson'],
        input: '1212',
        radio: 'Karen Wilson',
        radioButton: 'Jessica Robinson',
        date: '2022-01-02'
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

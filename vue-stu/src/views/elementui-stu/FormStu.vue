<template>
  <div>
    <!-- 是否可编辑<el-switch v-model="editable" /> -->
    是否readonly<el-switch v-model="inputConf.readonly" /> 是否disabled<el-switch v-model="inputConf.disabled" />

    <el-input v-model="value" v-bind="inputConf"></el-input>
    <el-select v-model="value" v-bind="inputConf">
      <el-option label="1111" value="1"></el-option>
      <el-option label="2222" value="2"></el-option>
    </el-select>

    <hr />

    <el-form ref="form" :disabled="editable" :model="form" label-width="80px">
      <draggable>
        <el-form-item label="活动名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%" />
          </el-col>
          <el-col class="line" :span="2"> - </el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%" />
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type" />
            <el-checkbox label="地推活动" name="type" />
            <el-checkbox label="线下主题活动" name="type" />
            <el-checkbox label="单纯品牌曝光" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助" />
            <el-radio label="线下场地免费" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit"> 立即创建 </el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </draggable>
    </el-form>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'FormStu',
  components: {
    draggable
  },
  data() {
    return {
      editable: true,
      value: '1',
      inputConf: {
        disabled: false,
        readonly: false
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form)
    }
  }
}
</script>

<style scoped></style>

<template>
  <el-dialog title="通话小结" center top="30px" append-to-body :visible="callRecord.visible" @close="handleCancel">
    <el-scrollbar style="height: 60vh">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" style="margin-right: 20px">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form>
    </el-scrollbar>
    <template #footer>
      <el-button type="primary" size="small" @click="onSubmit" :loading="callRecord.loading">立即创建</el-button>
      <el-button size="small" @click="handleCancel">取消</el-button>
    </template>
  </el-dialog>
</template>
<script>
import { sleep } from '@/utils/utils'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'CallRecordDialog',
  data() {
    return {}
  },
  created() {
    this.ruleForm = new Proxy(this.callRecord, {
      get(target, key) {
        return target[key]
      },
      set: (target, key, value) => {
        this.setCallRecord({
          [key]: value
        })
        return true
      }
    })
  },
  inject: ['globalComParent'],
  computed: {
    ...mapState('caseDetail', ['callRecord', 'phoneCaseDetail'])
  },
  methods: {
    ...mapMutations('caseDetail', ['setCallRecord', 'setPhoneCaseDetail']),
    async onSubmit() {
      this.setCallRecord({ loading: true })
      console.log(JSON.parse(JSON.stringify(this.ruleForm)), 'submit')
      await sleep(600)
      //   如果phoneCaseDetail.id == this.ruleForm.id，说明电话的记录提交了
      console.log('电话触发的催记提交了')
      if (this.phoneCaseDetail.id === String(this.ruleForm.id)) {
        console.log('store中的phoneCaseDetail已清空')
        this.setPhoneCaseDetail({})
      }
      this.setCallRecord({ visible: false })
      // step2: 通知某一个折叠框刷新
      this.globalComParent.$emit('refresh:callRecordInfo')
    },
    handleCancel() {
      this.$refs.ruleForm.resetFields()
      this.setCallRecord({ visible: false })
    }
  },
  beforeDestroy() {
    this.ruleForm = null
  }
}
</script>
<style lang=""></style>

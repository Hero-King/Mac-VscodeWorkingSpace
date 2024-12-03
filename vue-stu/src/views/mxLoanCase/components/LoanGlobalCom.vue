<template>
  <div class="loan-global">
    <call-record-dialog />
    <el-button size="mini" @click="handleRing">响铃</el-button>
    <el-button size="mini" @click="handleHangup">挂断</el-button>

    <div class="base-info" v-show="status === 'communicate'">
      <el-descriptions title="基本信息" :column="1">
        <el-descriptions-item label="用户名">{{ phoneCaseDetail.name }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ phoneCaseDetail.phone }}</el-descriptions-item>
        <el-descriptions-item label="居住地">{{ phoneCaseDetail.address }}</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>
<script>
import CallRecordDialog from './CallRecordDialog.vue'
import { CallType } from '../const'
import { mapMutations, mapState } from 'vuex'
export default {
  components: { CallRecordDialog },
  name: 'LoanGlobalCom',
  computed: {
    ...mapState('caseDetail', ['phoneCaseDetail'])
  },
  data() {
    return {
      status: ''
    }
  },
  methods: {
    ...mapMutations('caseDetail', ['setCallRecord']),
    handleRing() {
      // mock receive Airudder msg
      const message = {
        id: Math.floor(Math.random() * 49 + 1)
      }
      this.status = 'communicate'
      this.id = message.id
      //   将响铃的id 存储到 store 中
      this.$store.commit('caseDetail/setPhoneCaseDetail', {})
      this.$store.commit('caseDetail/curPhoneCaseId', String(message.id))
      //   如果路由相同，手动触发getDetail
      if (String(message.id) === this.$route.params.id) {
        this.$store.dispatch('caseDetail/getDetail', message.id)
      } else {
        this.$router.push({
          path: `/mxLoanCase/detail/${message.id}`
        })
      }
    },
    handleHangup() {
      // mock receive Airudder msg
      const message = {
        id: this.id
      }
      this.status = ''
      this.setCallRecord({
        visible: true,
        type: CallType.pds,
        id: message.id,
        name: this.$store.state.caseDetail.phoneCaseDetail.name,
        phone: this.$store.state.caseDetail.phoneCaseDetail.phone
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.loan-global {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  .base-info {
    width: 200px;
    position: absolute;
    right: 0;
    background: #ccc;
    padding: 10px;
    ::v-deep .el-descriptions__body {
      background: unset;
    }
  }
}
</style>

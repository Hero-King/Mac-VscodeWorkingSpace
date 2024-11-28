<template>
  <div class="mt-20">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) in data"
        :key="index"
        :color="index == 0 ? '#0bbd87' : void 0"
        :hide-timestamp="true"
      >
        <el-row type="flex">
          <el-col :span="4">
            {{ item.nameMontagePhone || item.createBy }}
          </el-col>
          <el-col :span="4">
            {{ actionTxt(item) }}
          </el-col>
          <el-col :span="6">
            {{ item.processSuggestion || item.remark || '完成' }}
          </el-col>
          <!-- 附件 -->
          <el-col :span="6">
            <template v-if="item.knowledges && item.knowledges.length > 0">
              <el-link
                v-for="know in item.knowledges"
                :key="know.knowledgeId"
                class="mr-16"
                type="primary"
                :underline="false"
                @click="linkClick(know)"
              >
                {{ know.knowledgeName }}
              </el-link>
            </template>
            <template v-else-if="item.actionFile && item.actionFile.length > 0">
              <div
                v-for="file in item.actionFile"
                :key="file.id"
              >
                <el-link
                  class="mr-16"
                  :underline="false"
                  @click="download(file)"
                >
                  {{ file.fileName }} <i class="el-icon-download el-icon--right" />
                </el-link>
              </div>
            </template>
          </el-col>
          <!-- 执行时间 -->
          <el-col :span="4">
            {{ item.createDate }}
          </el-col>
        </el-row>
        <el-divider class="record-divider" />
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
import { saveAs } from 'file-saver'
export default {
  name: 'ExeRecord',
  props: {
    data: {
      type: Array
    },
    orderDetail: Object
  },
  data() {
    return {}
  },
  methods: {
    download(file) {
      saveAs(file.storePath, file.fileName)
    },
    linkClick(item) {
      this.$router.push({
        path: '/devops-center/knowledge-base/standard',
        query: { id: item.knowledgeId }
      })
    },
    actionTxt(row) {
      const { actionType } = row
      if (actionType == 'add') {
        return '创建工单'
      } else if (actionType == 'confirm') {
        if (row.isResolved == 0) {
          return '工单未解决'
        } else {
          return '工单已解决'
        }
      } else if (actionType == 'withdraw') {
        return '工单撤回'
      } else if (actionType === 'archive') {
        return '关联知识库'
      } else if (actionType === 'reject') {
        return `驳回: ${this.orderDetail.creatorName}`
      } else if (actionType == 'agree') {
        if (row.executorName) {
          return `指派: ${row.executorName}`
        } else if (row.technicianName) {
          return `加签 ${row.technicianName}`
        }
      } else if (actionType === 'process') {
        if (row.isResolved == 1) {
          return `工单已完成`
        } else if (row.isResolved == 0) {
          return '工单未完成'
        }
      } else {
        return '通过'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.record-divider {
  margin-top: 4px;
  margin-bottom: 0;
}
</style>

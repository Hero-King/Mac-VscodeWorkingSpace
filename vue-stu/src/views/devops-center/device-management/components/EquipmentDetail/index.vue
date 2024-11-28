<template>
  <div class="equipment-detail">
    <div class="left-wrap">
      <el-button
        type="primary"
        size="small"
        @click="handleBack"
      >
        返回
      </el-button>
      <el-tree
        ref="tree"
        class="mt-20"
        :data="treeData"
        auto-expand-parent
        :highlight-current="true"
        :current-node-key="realDeviceInfo.id"
        :default-expanded-keys="[realDeviceInfo.id]"
        :props="defaultProps"
        node-key="id"
        @node-click="handleNodeClick"
      />
    </div>
    <div class="right-wrap">
      <el-tabs v-model="activeName">
        <el-tab-pane
          v-for="(tab, index) in tabList"
          :key="tab.label"
          :label="tab.label"
          :name="tab.com"
        >
          <component
            :is="tab.com"
            :editable="canEditForm"
            :device-info="realDeviceInfo"
            :device-types="deviceTypes"
            @reload="reloadTreeData"
          />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import EquipmentBaseInfo from './EquipmentBaseInfo.vue'
import EquipmentRealData from './EquipmentRealData.vue'
import { queryDeviceGroupData } from '@/api/devops-center/deviceManage'

export default {
  name: 'EquipmentDetail',
  components: {
    EquipmentBaseInfo,
    EquipmentRealData
  },
  props: {
    deviceInfo: Object,
    visible: {
      type: Boolean,
      required: true
    },
    deviceTypes: Array
  },
  data() {
    this.id = 0
    this.defaultProps = {
      children: 'child',
      label: 'name'
    }
    this.tabList = [
      {
        label: '基本信息',
        com: 'EquipmentBaseInfo'
      },
      {
        label: '实时数据',
        com: 'EquipmentRealData'
      }
    ]
    // this.canEditForm = this.$store.state.poros.btnAuth.includes('deviceInfoEditor')
    this.canEditForm = true
    return {
      activeName: this.tabList[0].com,
      treeData: [],
      currentNodeKey: null,

      // 基本信息
      realDeviceInfo: {}
    }
  },
  created() {
    this.handleNodeClick(this.deviceInfo)
    this.loadTreeData()
  },
  methods: {
    handleBack() {
      if (Object.keys(this.$route.query).length > 0) {
        this.$router.back()
        return
      }
      // 上层组件表格数据重新加载, 防止名称字段是老数据
      this.$emit('reload')
      this.$emit('update:visible', false)
    },
    reloadTreeData() {
      this.loadTreeData().then((res) => {
        this.$nextTick(() => {
          const { children, child, ...rest } = this.$refs.tree.getCurrentNode()
          this.handleNodeClick(rest)
        }).catch((err) => {
          this.$message.error('获取数据失败')
        })
      })
    },
    handleNodeClick({ children, child, ...row }) {
      if (row.disabled) {
        return
      }
      this.realDeviceInfo = JSON.parse(JSON.stringify(row))
    },

    disabledTreeData(data, childenKey) {
      data.forEach((i) => {
        if (i.id == null) {
          i.id = this.id++
        }
        if (i[childenKey]?.length > 0) {
          i.disabled = true
          if (Array.isArray(i[childenKey])) {
            this.disabledTreeData(i[childenKey], childenKey)
          }
        } else {
          i.disabled = false
        }
      })
    },

    loadTreeData() {
      return new Promise((resolve, rej) => {
        queryDeviceGroupData().then((res) => {
          if (res?.code == 0) {
            this.disabledTreeData(res.data, this.defaultProps.children)
            this.treeData = res.data
            resolve()
          } else {
            rej()
          }
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.equipment-detail {
  display: flex;
}
.left-wrap {
  width: 270px;
  margin-right: 20px;
}
.right-wrap {
  flex: 1;
}
</style>

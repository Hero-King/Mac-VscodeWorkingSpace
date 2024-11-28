<template>
  <div class="device-account page">
    <div v-show="!showDetail">
      <!-- 查询form -->
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        inline
      >
        <el-form-item label="工厂选择">
          <DictSelect
            v-model="form.locationId"
            label-key="locationName"
            value-key="topParentId"
            for-key="topParentId"
            :dict-url="factorySelectUrl"
            methods="post"
            placeholder="请选择工厂"
            @getSuccess="getLocationOptSuccess"
            @change="setActiveTreeNode"
          />
        </el-form-item>
        <el-form-item label="设备类型">
          <DictSelect
            v-model="form.modelMark"
            label-key="modelName"
            value-key="modelMark"
            for-key="modelMark"
            :dict-url="deviceTypeListUrl"
            methods="get"
            :params="{ modelType: 'other' }"
            :options.sync="deviceTypes"
            placeholder="请选择设备类型"
            clearable
            @change="handleSearch"
          />
        </el-form-item>
        <el-form-item
          label=""
          label-width="0px"
        >
          <el-input
            v-model.trim="form.keyword"
            placeholder="请输入编号、名称等搜索"
            clearable
            @change="handleSearch"
          />
        </el-form-item>
        <el-form-item
          v-if="showExport"
          style="float: right"
        >
          <el-button
            size="mini"
            type="primary"
            @click="handleExport"
          >
            导出
          </el-button>
        </el-form-item>
      </el-form>

      <!-- content -->
      <div class="content">
        <div
          v-if="showLeftTree"
          class="left"
        >
          <el-tree
            ref="tree"
            :data="treeData"
            :current-node-key="currentNodeKey"
            :props="defaultProps"
            node-key="id"
            @node-click="handleNodeClick"
          />
        </div>
        <div class="right">
          <tables
            ref="table"
            :config="{
              tableData,
              tableList,
              border: true,
              limit,
              pageNo,
              total,
              background: '#edf2ff'
            }"
            @currentChange="currentChange"
            @sizeChange="sizeChange"
            @handleSelection="handleSelection"
          >
            <template
              slot="qr"
              slot-scope="scope"
            >
              <el-image
                class="table-img"
                fit="scale-down"
                :src="scope.data.qrcodeUrl"
                :preview-src-list="[scope.data.qrcodeUrl]"
              />
            </template>
            <template
              slot="operation"
              slot-scope="scope"
            >
              <el-button
                type="text"
                style="color: #4e60f6"
                size="small"
                @click.native.prevent="viewDetail(scope.data)"
              >
                查看
              </el-button>
            </template>
          </tables>
        </div>
      </div>
    </div>

    <!-- 设备详情页 -->
    <EquipmentDetail
      v-if="showDetail"
      :device-types="deviceTypes"
      :device-info="deviceInfo"
      :visible.sync="showDetail"
      @reload="query"
    />
  </div>
</template>

<script>
import {
  queryDeviceListByLocationId,
  exportDeviceList,
  getTreeQuery
} from '@/api/devops-center/deviceManage'

import tables from '@/components/table/index'
import EquipmentDetail from './components/EquipmentDetail/index.vue'
import DictSelect from '@/components/DictSelect'
import { factorySelectUrl, deviceTypeListUrl } from '@/components/DictSelect/urls'

function deepGetIds(dataObj, list) {
  if ('id' in dataObj) {
    list.push(dataObj.id)
  }
  if (Array.isArray(dataObj.children)) {
    dataObj.children.forEach((child) => {
      deepGetIds(child, list)
    })
  }
}

export default {
  name: 'EquipmentAccount',
  components: {
    tables,
    EquipmentDetail,
    DictSelect
  },
  props: {
    showExport: {
      type: Boolean,
      default: true
    },
    showLeftTree: {
      type: Boolean,
      default: true
    },
    showTableCheckbox: {
      type: Boolean,
      default: false
    },
    selectionList: {
      type: Array
    },
    showOperation: {
      type: Boolean,
      default: true
    },
    // 组件处于弹框中时 弹框状态
    opend: Boolean
  },
  data() {
    this.factorySelectUrl = factorySelectUrl
    this.deviceTypeListUrl = deviceTypeListUrl
    this.defaultProps = {
      children: 'children',
      label: 'locationName'
    }
    this.tableList = [
      {
        label: '序号',
        align: 'center',
        fixed: null,
        width: '60px',
        status: 'index'
      },
      {
        prop: 'modelName',
        label: '设备类型',
        align: 'center',
        fixed: null
      },
      {
        prop: 'deviceName',
        label: '设备名称',
        align: 'center',
        fixed: null
      },
      {
        prop: 'deviceMark',
        label: '设备编号',
        align: 'center',
        fixed: null
      },
      {
        prop: 'qr',
        label: '二维码',
        align: 'center',
        fixed: null,
        slotName: 'qr',
        type: 'slot'
      }
    ]
    return {
      showDetail: false,
      deviceInfo: {},
      form: {
        locationId: '',
        modelMark: '',
        keyword: null,
        modelType: 'other'
      },
      deviceTypes: [],
      factories: [],
      selfSelectionList: [],
      treeData: [],
      currentNodeKey: null,
      tableData: [],
      limit: 10,
      pageNo: 1,
      total: 0
    }
  },
  watch: {
    opend(v) {
      if (v) {
        this.filterTableDataBySelectionList()
      }
    }
  },
  created() {
    if (this.$route.query.id) {
      this.viewDetail(this.$route.query)
    }
    // this.getType()
    if (this.showLeftTree) {
      this.getTreeData()
    }
    if (this.showTableCheckbox) {
      this.tableList.unshift({
        status: 'selection',
        align: 'center',
        width: '50px',
        fixed: null
      })
    }
    if (this.showOperation) {
      this.tableList.push({
        prop: 'operation',
        label: '操作',
        align: 'center',
        fixed: 'right',
        slotName: 'operation',
        type: 'slot'
      })
    }
  },
  methods: {
    // 兼容 作为弹框时候, 过滤掉已选中数据
    filterTableDataBySelectionList() {
      if (this.showTableCheckbox) {
        const selectIdSet = new Set(this.selectionList.map((i) => i.id))
        this.tableData = this.tableDataBak.filter((i) => !selectIdSet.has(i.id))
        this.selfSelectionList = []
        if (!this.tableData.length) {
          this.opend && this.$message.info('当前页面已全部选中哦！可进行操作下一页')
        }
        this.$nextTick(() => {
          this.$refs.table.$refs.tables.clearSelection()
        })
      }
    },
    getLocationOptSuccess(list) {
      if (list.length > 0) {
        this.form.locationId = list[0].topParentId
        this.query()
      }
    },
    handleSelection(val) {
      this.selfSelectionList = val
      this.$emit('update:selectChange', val)
    },
    // 分页数量
    sizeChange(val) {
      this.limit = val
      this.query(false)
    },
    // 分页页数
    currentChange(val) {
      this.pageNo = val
      this.query(false)
    },
    viewDetail(row) {
      this.deviceInfo = JSON.parse(JSON.stringify(row))
      this.showDetail = true
    },
    getQueryParam() {
      const { limit, pageNo, form } = this
      const row = this.$refs.tree?.getCurrentNode()
      // 如果没有树节点数据, 认为只有上面的查询
      if (!row) {
        return {
          listLocationId: [form.locationId],
          ...this.form,
          topParentId: form.locationId,
          limit,
          pageNo
        }
      }

      const listLocationId = []
      deepGetIds(row, listLocationId)

      return {
        listLocationId,
        ...this.form,
        locationId: row?.id,
        topParentId: row?.topParentId,
        limit,
        pageNo
      }
    },
    query(initPagination = true) {
      if (initPagination) {
        this.pageNo = 1
        this.limit = 10
        this.total = 0
      }
      queryDeviceListByLocationId(this.getQueryParam())
        .then((res) => {
          if (res.code == 0) {
            this.tableData = res.data.list || []
            this.tableDataBak = JSON.parse(JSON.stringify(this.tableData))
            this.total = res.data.total
            this.filterTableDataBySelectionList()
          } else {
            throw res.msg || res.message
          }
        })
        .catch((err) => {
          this.tableData = []
          this.total = 0
        })
    },
    getTreeData() {
      getTreeQuery({ type: 'device', bindType: 'device', energyCode: 'common' }).then((res) => {
        if (res.code == 0) {
          this.treeData = res.data
          const locationId = this.form.locationId || res.data?.[0]?.id
          this.setActiveTreeNode(locationId, false)
        }
      })
    },

    handleSearch() {
      this.query()
    },
    setActiveTreeNode(locationId, query = true) {
      this.currentNodeKey = locationId
      this.$nextTick(() => {
        this.$refs.tree?.setCurrentKey(locationId)
        query && this.query()
      })
    },
    handleExport() {
      const param = this.getQueryParam()
      delete param.limit
      delete param.pageNo
      exportDeviceList(param).then((res) => {
        const fileType = 'application/octet-stream;charset=UTF-8'
        // this.$tool.downloadFile({ data: res }, fileType, '设备列表.xls')
      })
    },
    handleNodeClick(data) {
      this.setActiveTreeNode(data.id)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  min-height: 300px;
  .left {
    padding: 20px;
    min-width: 278px;
    margin-right: 16px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
  }
  .right {
    flex: 1;
    overflow: auto;
    /deep/ .box-table {
      margin-top: 0;
    }
  }
}

.table-img {
  max-width: 100% !important;
  max-height: 50px !important;
  /deep/img {
    max-width: 100% !important;
    max-height: 50px !important;
  }
}
</style>

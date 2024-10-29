<template>
  <div style="padding-left: 200px">
    <el-checkbox-group
      v-model="selectedKey"
      @change="change"
    >
      <div
        v-for="item in viewData"
        :key="item.id"
      >
        <el-checkbox :label="item.id">{{ item.name }}</el-checkbox>
      </div>
    </el-checkbox-group>
  </div>
</template>
<script>
import { getNoCacheTopParent } from '@/api/devops-center/deviceManage'
export default {
  name: 'LocationTree',
  props: {
    selectionList: Array,
    opend: Boolean
  },
  data() {
    this.idMap = {}
    return {
      selectedKey: [],
      treeData: [],
      viewData: []
    }
  },
  watch: {
    opend(v) {
      if (v) {
        this.filterDataBySelectList()
      }
    }
  },
  created() {
    this.getData()
  },

  methods: {
    filterDataBySelectList() {
      this.selectedKey = []
      const selectIdSet = new Set(this.selectionList.map((i) => i.id))
      this.viewData = this.treeData.filter((i) => !selectIdSet.has(i.id))
    },
    change() {
      this.$emit(
        'update:selectChange',
        this.selectedKey.map((id) => this.idMap[id])
      )
    },
    getData() {
      const params = {
        type: 'common',
        bindType: 'common',
        energyCode: 'common'
      }
      getNoCacheTopParent(params)
        .then((res) => {
          if (res?.code === 0) {
            this.treeData = this.changeTree(res.data || [])
            this.treeData.forEach((i) => {
              this.idMap[i.id] = i
            })
            this.filterDataBySelectList()
          } else {
            this.treeData = []
            this.$message.error(res.msg)
          }
        })
        .catch((err) => {
          console.log(err)
          this.treeData = []
        })
    },
    changeTree(arr) {
      arr.forEach((item) => {
        item.scopedSlots = { title: 'title' }
        if (item.children && item.children.length) {
          item.children = null
        }
      })
      return arr
    }
  }
}
</script>

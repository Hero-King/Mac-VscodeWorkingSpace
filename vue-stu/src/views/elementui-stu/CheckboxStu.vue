<template>
  <div>
    <el-checkbox-group v-model="checkList">
      <!-- el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。 -->
      <el-checkbox
        v-for="item in options"
        :key="item.label"
        :label="item.value"
      >
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>

    <hr>
    <h3>多层ckeckbox</h3>

    <el-form
      ref="form"
      :model="form"
      label-width="20px"
      size="small"
    >
      <div
        v-for="(item, index) in multipleOptions"
        :key="item.taskCode"
      >
        <template v-if="item.groupCode in checkAllConfig && index > 0 && multipleOptions[index - 1].groupCode !== item.groupCode">
          <el-checkbox
            v-model="checkAllConfig[item.groupCode].checked"
            :indeterminate="checkAllConfig[item.groupCode].isIndeterminate"
            :disabled="checkedList.length > 0 ? item.groupCode !== checkedList[0].groupCode : false"
            @change="handleCheckAllChange($event, item.groupCode)"
          >
            全选
          </el-checkbox>
        </template>
        <template>
          <CheckInputItem
            :checkbox-label="item.taskName"
            :checkbox-key="item.taskCode"
            :disabled="isDisabled(item)"
            :value="form[item.taskCode]"
            :prop="`${item.taskCode}.processNote`"
            @change="handleItemChange(item.groupCode, $event)"
          />
        </template>
      </div>
    </el-form>
  </div>
</template>

<script>
import CheckInputItem from '@/components/CheckInputItem/index.vue'
export default {
  name: 'CheckboxStu',
  components: {
    CheckInputItem
  },
  data() {
    return {
      checkList: [],
      options: [
        {
          label: 'label111',
          value: 2
        },
        {
          label: 'label2',
          value: 1
        }
      ],
      multipleOptions: [],
      form: {},
      checkAllConfig: {},
      nodeSizeMap: new Map()
    }
  },
  computed: {
    checkedList() {
      return this.multipleOptions.filter((item) => this.form[item.taskCode].checked)
    },
    checkedTaskNameSet() {
      return new Set(this.checkedList.map((i) => i.taskCode))
    }
  },
  updated() {
    console.log('updated')
  },
  created() {
    setTimeout(() => {
      // getData
      this.multipleOptions = [
        {
          id: '1579712168270163969',
          taskCode: 'pack_manufacture_examine',
          taskName: '模组PACK制造与产线费用审核',
          groupCode: 6,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579710966086168577',
          taskCode: 'transport_expense_examine',
          taskName: '包装运输费用审核',
          groupCode: 6,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579705481144496129',
          taskCode: 'pack_manufacture',
          taskName: '模组PACK制造与产线费用录入',
          groupCode: 6,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579704145166397441',
          taskCode: 'cell_bom_examine',
          taskName: '电芯BOM表、电芯设计信息表和产品数模审核',
          groupCode: 5,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579735891559804930',
          taskCode: 'rd_expense_examine',
          taskName: '研发费用审核',
          groupCode: 6,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579705481140301826',
          taskCode: 'finance_expense',
          taskName: '财务费用录入',
          groupCode: 6,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579713448174612482',
          taskCode: 'cell_manufacture_examine',
          taskName: '电芯制造与产线费用审核',
          groupCode: 6,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579705481144496130',
          taskCode: 'cell_manufacture',
          taskName: '电芯制造与产线费用录入',
          groupCode: 6,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579710658211672066',
          taskCode: 'finance_expense_examine',
          taskName: '财务费用审核',
          groupCode: 6,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579704503775195138',
          taskCode: 'pack_bom_examine',
          taskName: 'PACK bom表、产品数模和设计信息审核',
          groupCode: 5,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579713897657200642',
          taskCode: 'straight_material_examine',
          taskName: '直材价格审核',
          groupCode: 6,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579705481140301827',
          taskCode: 'transport_expense',
          taskName: '包装运输费用录入',
          groupCode: 6,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579705481144496131',
          taskCode: 'rd_expense',
          taskName: '研发费用录入',
          groupCode: 6,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579705481144496132',
          taskCode: 'straight_material',
          taskName: '直材价格录入',
          groupCode: 6,
          productType: null,
          uiConfig: null
        },
        {
          id: '1569926932116172801',
          taskCode: 'base_apply',
          taskName: '底价申请提交',
          groupCode: 1,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579424328332275714',
          taskCode: 'project_information',
          taskName: '项目信息输入',
          groupCode: 2,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579425023341031426',
          taskCode: 'cell_product',
          taskName: '电芯产品信息输入',
          groupCode: 3,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579425401923104770',
          taskCode: 'module_product',
          taskName: '模组PACK产品信息输入',
          groupCode: 4,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579703283287257089',
          taskCode: 'pack_bom',
          taskName: 'PACK bom表与产品数模上传、填写设计信息',
          groupCode: 5,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579703283287257090',
          taskCode: 'module_bom',
          taskName: '模组bom表与产品数模上传、填写设计信息',
          groupCode: 5,
          productType: null,
          uiConfig: null
        },
        {
          id: '1579703283287257091',
          taskCode: 'cell_bom',
          taskName: '电芯BOM表、电芯设计信息表和产品数模上传',
          groupCode: 5,
          productType: null,
          uiConfig: null
        }
      ].sort((a, b) => a.groupCode - b.groupCode)
      this.loopInitFormData(this.multipleOptions)
    }, 200)
  },
  methods: {
    isDisabled(nodeItem) {
      if (this.checkedList.length > 0) {
        if (this.form[nodeItem.taskCode].checked) {
          return false
        }
        // 退回并行任务中审核节点和非审核节点只能选择一个
        if (this.checkedTaskNameSet.has(nodeItem.taskCode.replace('_examine', '')) || this.checkedTaskNameSet.has(nodeItem.taskCode + '_examine')) {
          return true
        } else {
          // 不同groupCode 互斥
          return nodeItem.groupCode !== this.checkedList[0].groupCode
        }
      } else {
        return false
      }
    },
    handleCheckAllChange(checked, groupCode) {
      this.multipleOptions.forEach((item) => {
        if (item.groupCode === groupCode) {
          if (checked) {
            !item.taskCode.includes('_examine') ? (this.form[item.taskCode].checked = checked) : ''
          } else {
            this.form[item.taskCode].checked = checked
          }
        }
      })
      this.handleItemChange(groupCode)
    },
    getCheckedSizeByGroupCode(groupCode) {
      let size = 0
      this.multipleOptions.forEach((item) => {
        if (item.groupCode === groupCode && this.form[item.taskCode].checked) {
          size++
        }
      })
      return size
    },
    handleItemChange(groupCode, checked) {
      const sameGroupCodeSize = this.nodeSizeMap.get(groupCode)
      // 处理全选逻辑
      if (sameGroupCodeSize > 1) {
        const checkedSize = this.getCheckedSizeByGroupCode(groupCode)
        if (checkedSize === 0) {
          this.checkAllConfig[groupCode].checked = false
          this.checkAllConfig[groupCode].isIndeterminate = false
        } else if (checkedSize === sameGroupCodeSize) {
          this.checkAllConfig[groupCode].checked = true
          this.checkAllConfig[groupCode].isIndeterminate = false
        } else {
          this.checkAllConfig[groupCode].checked = false
          this.checkAllConfig[groupCode].isIndeterminate = true
        }
      }
    },
    loopInitFormData(data = []) {
      const { nodeSizeMap } = this
      nodeSizeMap.clear()
      data.forEach((i) => {
        const { groupCode, taskCode } = i
        nodeSizeMap.set(groupCode, (nodeSizeMap.get(groupCode) || 0) + 1)
        if (!(taskCode in this.form)) {
          this.$set(this.form, taskCode, { checked: false, processNote: null })
        }
        if (nodeSizeMap.get(groupCode) > 1 && !(groupCode in this.checkAllConfig)) {
          this.$set(this.checkAllConfig, groupCode, { isIndeterminate: false, checked: false })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.select-wrap {
  display: flex;
  justify-content: space-between;
  .el-input {
    flex: 0 1 250px;
  }
}
</style>

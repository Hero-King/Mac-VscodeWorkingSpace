<template>
  <div class="workorder-statistic page">
    <!-- 查询部分 -->
    <el-form :model="form" label-width="80px" inline size="small">
      <el-form-item label="工厂选择">
        <DictSelect
          labelKey="locationName"
          valueKey="topParentId"
          forKey="topParentId"
          :dictUrl="factorySelectUrl"
          v-model="form.factoryId"
          @getSuccess="handleSuccess"
          methods="post"
          placeholder="请选择工厂"
          @change="query"
        />
      </el-form-item>
      <el-form-item label="时间选择">
        <TimeSelect
          v-model="form.date"
          @change="query"
          format="YYYY-MM-DD HH:mm"
          datePickerFormat="yyyy-MM-dd HH:mm"
        />
      </el-form-item>
    </el-form>

    <!-- 统计部分 -->
    <el-row type="flex" justify="space-between">
      <el-col v-for="(item, index) in statisticConf" :span="item.span" :key="item.title">
        <el-statistic
          class="statistic-item"
          :value="statistic[item.valueKey]"
          :title="item.title"
          :valueStyle="{ color: '#4e60f6' }"
        ></el-statistic>
      </el-col>
      <el-col :span="5">
        <LabelValue
          value-class="primaryButton"
          label="平均响应时间"
          label-width="150px"
          :value="statistic.avgResponseTime"
        />
        <LabelValue
          value-class="primaryButton"
          label="平均工单处理时长"
          label-width="150px"
          :value="statistic.avgProcessTime"
        />
      </el-col>
    </el-row>

    <!-- 图表部分 -->
    <div class="chart-list">
      <div>
        <h3>工单类型分布</h3>
        <div class="echart-wrap">
          <WorkOrderTypeChart class="echart-dom" ref="left" :pieData="typeDistribution" />
          <el-empty class="echart-empty" v-show="typeDistribution.length == 0" />
        </div>
      </div>
      <div>
        <h3>工单统计</h3>
        <div class="echart-wrap">
          <WorkOrderLineChart class="echart-dom" :dataConf="barLineData" ref="right" />
          <el-empty
            class="echart-empty"
            v-show="
              barLineData.timeExpansionAxis == void 0 || barLineData.timeExpansionAxis.length == 0
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  workPlanStatistics,
  workPlanTypeDistribution,
  workPlanGlobalStatistic
} from '@/api/devops-center/workOrder'
import DictSelect from '@/components/DictSelect'
import { factorySelectUrl } from '@/components/DictSelect/urls'

import LabelValue from './components/LabelValue.vue'
import TimeSelect from './components/TimeSelect.vue'
import WorkOrderTypeChart from './components/category-chart.vue'
import WorkOrderLineChart from './components/BarLineChart.vue'

const initStatistic = {
  totalQuantity: 0,
  pendingQuantity: 0,
  completedQuantity: 0,
  goingQuantity: 0,
  avgResponseTime: 0,
  avgProcessTime: 0
}

const initBarLineData = {
  timeExpansionAxis: [],
  completedWorkPlanCount: [],
  goingWorkPlanCount: [],
  timeoutWorkPlanPercent: []
}

export default {
  name: 'WorkorderStatistic',
  components: {
    LabelValue,
    TimeSelect,
    DictSelect,
    WorkOrderTypeChart,
    WorkOrderLineChart,
  },
  data() {
    this.factorySelectUrl = factorySelectUrl
    this.statisticConf = [
      {
        title: '工单总数',
        span: 4,
        valueKey: 'totalQuantity'
      },
      {
        title: '待处理',
        span: 4,
        valueKey: 'pendingQuantity'
      },
      {
        title: '已完成',
        span: 4,
        valueKey: 'completedQuantity'
      },
      {
        title: '进行中',
        span: 4,
        valueKey: 'goingQuantity'
      }
    ]
    return {
      form: {
        factoryId: '',
        date: []
      },
      statistic: initStatistic,
      typeDistribution: [],
      barLineData: initBarLineData
    }
  },
  created() {
    // setTimeout(() => {
    //   this.typeDistribution = [
    //     { workTypeName: 'xxx', count: 10 },
    //     { workTypeName: 'bbb', count: 100 }
    //   ]
    //   this.barLineData = {
    //     timeExpansionAxis: ['1', '2', '3'],
    //     completedWorkPlanCount: ['100', '200', '300'],
    //     goingWorkPlanCount: ['200', '300', '400'],
    //     timeoutWorkPlanPercent: ['50', '60', '55']
    //   }
    //   this.resizeChart()
    // }, 3000)
  },
  methods: {
    formatParams() {
      const [beginDate, endDate] = this.form.date
      let beginDateMom = this.$moment(beginDate)
      let endDateMom = this.$moment(endDate)
      let timeType = 2
      if (endDateMom.diff(beginDateMom, 'hours', true) < 25) {
        timeType = 1
      } else if (endDateMom.diff(beginDateMom, 'months', true) > 1) {
        timeType = 3
      }
      return {
        timeType,
        factoryId: this.form.factoryId,
        beginDate,
        endDate
      }
    },
    resizeChart() {
      this.$refs.left?.chart.resize()
      this.$refs.right?.chart.resize()
    },
    handleSuccess(options) {
      this.form.factoryId = options[0].id
      this.query()
    },
    query() {
      const { form } = this
      if (!(form.factoryId && form.date?.length > 0)) {
        return
      }
      let params = this.formatParams()

      // 总数统计数据
      workPlanGlobalStatistic(params).then((res) => {
        if (res?.code === 0) {
          this.statistic = res.data
        } else {
          this.statistic = initStatistic
        }
      })

      workPlanTypeDistribution(params).then((res) => {
        if (res?.code === 0) {
          this.typeDistribution = res.data
          this.resizeChart()
        } else {
          this.typeDistribution = []
          this.resizeChart()
        }
      })

      workPlanStatistics(params).then((res) => {
        if (res?.code === 0) {
          this.barLineData = res.data
          this.resizeChart()
        } else {
          this.barLineData = initBarLineData
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.statistic-item {
  border: 1px solid #ebebeb;
  text-align: center;
  padding: 20px;
  /deep/ .poros-statistic-title {
    color: #000;
    font-size: 14px;
    font-weight: 700;
  }
}
.chart-list {
  > div {
    display: inline-block;
    width: 50%;
    padding: 0 20px;
  }
}
.echart-dom {
  height: 400px;
  width: 100%;
}
.echart-wrap {
  position: relative;
}
.echart-empty {
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>

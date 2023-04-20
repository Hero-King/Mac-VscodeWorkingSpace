<template>
  <div ref="dom"></div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
import { EventListener } from '@/utils'

export default {
  name: 'WorkOrderLineChart',
  props: {
    dataConf: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initPie()
      EventListener.add(window, 'resize', () => {
        this.chart?.resize()
      })
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initPie() {
      this.chart = echarts.init(this.$refs.dom)

      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          left: '40px',
          right: '30px',
          bottom: '30px',
          top: '10%',
          containLabel: true
        },
        legend: {
          show: false
        },
        xAxis: [
          {
            type: 'category',
            data: this.dataConf.timeExpansionAxis || [],
            axisPointer: {
              type: 'shadow'
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              //   formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '',
            min: 0,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: '{value} %'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '本周期完成',
            type: 'bar',
            tooltip: {
              //   valueFormatter: function (value) {
              //     return value + ' ml'
              //   }
            },
            barMaxWidth: 40,
            data: this.dataConf.completedWorkPlanCount || []
          },
          {
            name: '本周期派发',
            type: 'bar',
            tooltip: {
              //   valueFormatter: function (value) {
              //     return value + ' ml'
              //   }
            },
            barMaxWidth: 40,
            data: this.dataConf.goingWorkPlanCount || []
          },
          {
            name: '本周期逾期率',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %'
              }
            },
            data: this.dataConf.timeoutWorkPlanPercent || []
          }
        ]
      }
      this.chart.setOption(option, true)
    }
  },
  watch: {
    dataConf: {
      handler(data) {
        this.initPie(data)
      },
      deep: true
    }
  }
}
</script>

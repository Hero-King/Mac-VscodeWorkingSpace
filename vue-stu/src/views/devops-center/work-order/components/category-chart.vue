<template>
  <div ref="dom" />
</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
import { EventListener } from '@/utils'

export default {
  name: 'WorkOrderTypeChart',
  props: {
    pieData: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    pieData: {
      handler(data) {
        this.initPie(data)
      },
      deep: true
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
      const data = this.pieData
      this.chart = echarts.init(this.$refs.dom)

      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}',
          backgroundColor: '#FFF',
          textStyle: {
            color: '#000'
          }
        },
        grid: {
          left: '10px',
          right: '20px',
          bottom: '20px',
          top: '20px',
          containLabel: true
        },
        legend: {
          orient: 'vertical',
          top: 'center',
          right: '10%',
          align: 'right'
        },
        series: [
          {
            type: 'pie',
            hoverAnimation: false,
            radius: '75%',
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            selectedMode: 'single',
            top: '20px',
            bottom: '20px',
            right: '30%',
            label: {
              show: true,
              position: 'outside',
              formatter: '{b} {c}',
              color: '#333'
            },
            data: data.map((i) => ({ name: i.workTypeName, value: i.count })),
            labelLine: {
              show: true
            },
            emphasis: {
              disabled: true,
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      this.chart.setOption(option, true)
    }
  }
}
</script>

<template>
  <div class="pie-chart-box" />
</template>
<script>
import * as echarts from 'echarts'
import echartMixins from './echartsMixin'
export default {
  name: 'RadiusPie',
  mixins: [echartMixins],
  props: {
    data: {
      type: Array,
      default: () => []
    },
    pieName: {
      type: String,
      required: true
    },
    gridConfig: {
      type: Object,
      default: {}
    }
  },
  methods: {
    initChart() {
      if (!this.echartInstance) {
        this.echartInstance = echarts.init(this.$el)
      }

      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        grid: {
          ...this.gridConfig
        },
        legend: {
          type: 'scroll',
          top: 'center',
          right: '5%',
          // 图例间隔
          itemGap: this.getFontSize(20),
          orient: 'vertical',
          textStyle: {
            color: '#fff',
            fontSize: this.getFontSize(20)
          },
          formatter: function(name) {
            if (!name) return ''
            if (name.length > 8) {
              name = name.slice(0, 6) + '...'
            }
            return name
          },
          tooltip: {
            show: true,
            textStyle: {
              fontSize: this.getFontSize(20)
            }
          }
        },
        series: [
          {
            name: this.pieName,
            type: 'pie',
            radius: ['50%', '75%'],
            avoidLabelOverlap: true,
            center: ['40%', '50%'],
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: true,
              position: 'outside',
              formatter: '{d}%',
              fontSize: this.getFontSize(20),
              color: '#fff'
            },
            labelLine: {
              show: true,
              length: 10,
              length2: 10,
              lineStyle: {
                width: 2
              }
            },
            data: this.data
          }
        ]
      }
      this.echartInstance.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped>
.pie-chart-box {
  width: 100%;
  height: 100%;
}
</style>

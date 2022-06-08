<template>
  <div class="line-bar w100 h100"></div>
</template>

<script>
import * as echarts from 'echarts'
import echartMixins from './echartsMixin'
export default {
  name: 'MixLineBar',
  mixins: [echartMixins],
  data() {
    return {}
  },
  props: {
    gridConfig: {
      type: Object,
      default: {}
    },
    data: {
      type: Array,
      default: []
    },
    xAxisKey: {
      type: String,
      required: true
    },
    xAxisRotate: {
      type: Number,
      default: 0
    },
    leftYAxisNumber: {
      type: Boolean,
      default: true
    },
    rightSpiltLine: {
      type: Boolean,
      default: false
    },
    rightPercent: {
      type: Boolean,
      default: true
    },
    leftPercent: {
      type: Boolean,
      default: false
    },
    seriesConfig: {
      type: Array,
      default: []
    }
  },
  methods: {
    initChart() {
      if (!this.echartInstance) {
        this.echartInstance = echarts.init(this.$el)
      }

      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            color: '#FFFFFF',
            fontSize: this.getFontSize(16)
          }
        },
        xAxis: [
          {
            type: 'category',
            data: this._xData,
            axisLabel: {
              margin: this.xAxisRotate ? 10 : 6,
              color: '#FFFFFF',
              fontSize: this.getFontSize(18),
              rotate: this.xAxisRotate
            },
            axisPointer: {
              type: 'shadow'
            },
            axisTick: {
              show: false
            }
          }
        ],
        grid: {
          containLabel: true,
          ...this.gridConfig
        },
        yAxis: [
          {
            type: 'value',
            name: '',
            nameTextStyle: {
              color: '#FFFFFF',
              fontSize: this.getFontSize(16)
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              color: '#FFFFFF',
              fontSize: this.getFontSize(16),
              formatter: (value) => {
                if (value >= 10000 && value < 10000000) {
                  value = value / 10000 + '万'
                } else if (value >= 10000000) {
                  value = value / 10000000 + '千万'
                }
                return this.leftPercent ? value + '%' : value
              }
            }
          },
          {
            type: 'value',
            name: '',
            min: (value) => {
              const commonMin = this.rightPercent ? 0 : Math.floor(value.min) - 1 > 0 ? Math.floor(value.min) - 1 : 0
              return commonMin
            },
            max: (value) => {
              const commonMax = this.rightPercent && Math.ceil(value.max) < 100 ? 100 : Math.ceil(value.max)
              return commonMax
            },
            splitLine: {
              show: this.rightSpiltLine
            },
            axisLabel: {
              color: '#FFFFFF',
              fontSize: this.getFontSize(16),
              formatter: (value) => {
                return this.rightPercent ? value + '%' : value
              }
            }
          }
        ],
        series: this.seriesConfig.map((i) => ({
          name: i.name,
          data: this.data.map((item) => item[i.valueKey] || 0),
          barMaxWidth: 80,
          ...i,
          type: i.type
        }))
      }
      console.log(option, 'optionoptionoption')
      this.echartInstance.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped></style>

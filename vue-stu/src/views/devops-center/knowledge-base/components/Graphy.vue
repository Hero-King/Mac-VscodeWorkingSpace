<template>
  <div style="height: 100%" ref="dom"></div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/graph')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
import { EventListener } from '@/utils'

export default {
  name: 'Graphy',
  props: {
    dataConf: {
      type: Object,
      default: () => ({})
    },
    activeName: String
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
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
    getBase() {
      let values = this.dataConf.data.map((i) => Number(i.value)) || [10]
      const average = values.reduce((a, b) => a + b) / values.length
      return 40 / average
    },
    update() {
      this.chart.resize()

      const base = this.getBase()

      this.chart.setOption({
        series: [
          {
            data: (this.dataConf.data || []).map(({ symbolSize, ...i }) => ({
              ...i,
              symbolSize: base * Number(i.value),
              value: Number(i.value),
              category: Number(i.category),
              label: {
                show: true
              },
              itemStyle: {
                borderWidth: i.name === this.activeName ? 5 : 0,
                borderColor: '#9a9a9a'
              }
            })),
            links: this.dataConf.links || [],
            categories: this.dataConf.categories || []
          }
        ]
      })

      let model = this.chart.getModel().getSeriesByIndex(0).preservedPoints

      let index = this.dataConf.data.findIndex((i) => i.name === this.activeName)
      if (index !== -1) {
        this.chart.setOption({ series: [{ center: model[index] }] })
      }
      this.$nextTick(this.zoom)
    },
    zoom() {
      let model = this.chart.getModel().getSeriesByIndex(0).preservedPoints
      //   console.log('model', model)
      let [curWidth, curHeight] = this.getModelSize()
      let height = this.$refs.dom.clientHeight
      let width = this.$refs.dom.clientWidth
      let zoom = Math.min(width / (curWidth * 2 + 50), height / (curHeight * 2 + 50))
      //   console.log(zoom,'zoom');
      this.chart.setOption({ series: [{ zoom }] })
    },
    getModelSize() {
      let minx = Number.MAX_SAFE_INTEGER,
        miny = Number.MAX_SAFE_INTEGER,
        maxx = Number.MIN_SAFE_INTEGER,
        maxy = Number.MIN_SAFE_INTEGER
      let model = this.chart.getModel().getSeriesByIndex(0).preservedPoints
      Object.values(model).forEach((item) => {
        if (item[0] < minx) {
          minx = item[0]
        }
        if (item[0] > maxx) {
          maxx = item[0]
        }
        if (item[1] < miny) {
          miny = item[1]
        }
        if (item[1] > maxy) {
          maxy = item[1]
        }
      })
      return [maxx - minx, maxy - miny]
    },

    initChart() {
      if (!this.chart) {
        this.chart = echarts.init(this.$refs.dom)
      }

      let option = {
        tooltip: {},

        legend: {
          show: false
        },
        series: [
          {
            name: '运维图谱',
            type: 'graph',
            layout: 'force',
            roam: true,
            // animation: false,
            force: {
              //   initLayout: 'circula',
              //   节点之间的斥力因子。值越大则斥力越大
              repulsion: 300,
              edgeLength: [50, 150],
              //   节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
              gravity: 0.05
            },
            label: {
              position: 'right'
            },
            data: (this.dataConf.data || []).map(({ symbolSize, ...i }) => ({
              ...i,
              value: Number(i.value),
              category: Number(i.category),
              label: {
                show: true
              }
            })),
            links: this.dataConf.links || [],
            categories: this.dataConf.categories || []
          }
        ]
      }
      this.chart.setOption(option)
      this.chart.resize()

      this.chart.on('click', 'series.graph', (param) => {
        this.$emit('click', param)
      })
    }
  },
  watch: {
    dataConf: {
      handler(data) {
        this.update()
      },
      deep: true
    }
  }
}
</script>

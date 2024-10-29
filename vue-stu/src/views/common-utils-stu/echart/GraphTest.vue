<template>
  <div>
    <el-button
      type="primary"
      @click="click"
    >切换</el-button>
    <div
      ref="dom"
      style="height: 300px"
    />
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'GraphTest',
  props: {},
  data() {
    return {
      activeName: '现象A',
      data: []
    }
  },
  watch: {
    activeName: {
      handler() {
        this.goCenter()
      }
    },
    data(v) {
      if (v.length > 0) {
        this.initEchart()
      }
    }
  },
  mounted() {
    // this.initEchart()
    setTimeout(() => {
      this.data = [
        {
          id: '0',
          name: '现象A',

          symbolSize: 30,
          value: 58.685715,
          category: 0
        },
        {
          id: '1',
          name: '现象B',
          symbolSize: 32.6666666666666665,

          value: 40,
          category: 0
        },
        {
          id: '2',
          name: '措施A',
          symbolSize: 26.323809333333333,

          value: 9.485714,
          category: 1
        },
        {
          id: '3',
          name: '措施B',
          symbolSize: 16.323809333333333,

          value: 9.485714,
          category: 1
        }
      ]
    }, 1000)
  },
  methods: {
    click() {
      this.activeName = this.data[(this.data.findIndex((i) => i.name === this.activeName) + 1) % this.data.length].name
    },

    goCenter() {
      //   this.echart.setOption({
      //     series: [
      //       {
      //         force: { repulsion: Math.random() * 10 + 60, gravity: (Math.random() * 6) / 100 }
      //       }
      //     ]
      //   })

      // 力引导布局产生的关系图 获取渲染后的x ,y
      //   let model = this.echart.getModel().getSeriesByIndex(0).getData()._itemLayouts
      const model = this.echart.getModel().getSeriesByIndex(0).preservedPoints

      console.log('model', model)
      console.log(this.echart.getOption())
      // setTimeout(() => {
      //   let index = this.data.findIndex((i) => i.name === this.activeName)
      //   this.echart.setOption({ series: [{ center: model[index] }] })
      // }, 0)
      setTimeout(() => {
        const index = this.data.findIndex((i) => i.name === this.activeName)
        this.echart.setOption({ series: [{ center: model[index] }] })
      }, 0)
    },

    initEchart() {
      this.echart = echarts.init(this.$refs.dom)

      const width = this.$refs.dom.offsetWidth
      const height = this.$refs.dom.offsetHeight

      const option = {
        title: {
          text: '关系图',
          subtext: 'Force layout',
          top: 'bottom',
          left: 'right'
        },
        tooltip: {},

        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'force',
            roam: true,
            // animation: false,
            force: {
              //   initLayout: 'circula',
              //   节点之间的斥力因子。值越大则斥力越大
              repulsion: 100,
              edgeLength: [50, 150],
              //   节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
              gravity: 0.05
            },
            label: {
              position: 'right'
            },
            data: this.data.map((i) => {
              if (i.name == this.activeName) {
                return { ...i, x: width / 2, y: height / 2 }
                // return { ...i, x: 100, y: 100 }
              } else {
                return i
              }
            }),
            links: [
              {
                id: '0',
                source: '1',
                target: '0'
              },
              {
                id: '1',
                source: '3',
                target: '1'
              }
            ],
            categories: [
              {
                name: '现象'
              },
              {
                name: '措施'
              }
            ]
          }
        ]
      }
      console.log('initechart', option, this.echart)
      this.echart.setOption(option)
      this.goCenter()
    }
  }
}
</script>
<style lang=""></style>

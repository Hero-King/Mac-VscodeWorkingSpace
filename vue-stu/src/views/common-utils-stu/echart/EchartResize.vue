<template>
  <div>
    <h2>flex布局下的echarts resize</h2>
    <div class="module">
      <div class="chart-wrap flex w100 h100">
        <!-- 可以正常resize 左右两个都是echart实例时候就resize失败 -->
        <div ref="left" class="left w100" />
        <div />
        <div class="right w100" />

        <!-- 可以正常resize 左右两个都是echart实例时候就resize失败-->
        <!-- <div class="left widthpx"></div>
        <div class="right widthpx"></div> -->

        <!-- 多个title -->
        <!-- <div class="flexCol flex1">
            <div class="title">
                我是标题
            </div>
            <div class="body flex1 flex">
                <div class="left widthpx"></div>
                <div class="right widthpx"></div>
            </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'EchartResizeStu',
  mounted() {
    this.initChart()
    window.addEventListener('resize', () => {
      // 必须在dom更新结束后resize
      this.$nextTick(() => {
        this.rightChart.resize()
        this.leftChart.resize()
      })

      //   OK
      //   setTimeout(() => {
      // this.leftChart.resize()
      //   }, 50)
    })
    this.leftChart.on('click', function () {
      console.log('click')
    })
  },
  methods: {
    initChart() {
      const left = document.querySelector('.chart-wrap .left')
      const right = document.querySelector('.chart-wrap .right')
      this.leftChart = echarts.init(left)
      this.rightChart = echarts.init(right)
      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      this.leftChart.setOption(option)
      this.rightChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  height: 10%;
  width: 100%;
  border-bottom: 1px solid red;
}
.module {
  padding: 0;
  height: 40vh;
  width: 100%;
  margin: 0;
  .widthpx {
    flex: auto;
    &.left {
      width: 300px;
    }
    &.right {
      width: 600px;
    }
  }
}
</style>

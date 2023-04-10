<template lang="">
  <div>
    <el-button @click="show = !show">显示隐藏</el-button>
    <div class="chart-wrap" >
      <div v-show="show" style="height: 400px; width: 400px" ref="echart"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
let now = new Date(1997, 9, 3)
let oneDay = 24 * 3600 * 1000
let value = Math.random() * 1000
function randomData() {
  now = new Date(+now + oneDay)
  value = value + Math.random() * 21 - 10
  return {
    name: now.toString(),
    value: [[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'), Math.round(value)]
  }
}

export default {
  name: 'EchartDomVShow',

  data() {
    let data = []
    for (var i = 0; i < 1000; i++) {
      data.push(randomData())
    }
    this.option = {
      title: {
        text: 'Dynamic Data & Time Axis'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0]
          var date = new Date(params.name)
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: 'Fake Data',
          type: 'line',
          showSymbol: false,
          data: data
        }
      ]
    }
    return {
      show: true,
      dataArr: data
    }
  },
  mounted() {
    this.initEchart()
    setInterval(() => {
      // console.log("gender");
      for (var i = 0; i < 5; i++) {
        this.dataArr.shift()
        this.dataArr.push(randomData())
      }
      this.echart.setOption({
        series: [
          {
            data: this.dataArr
          }
        ]
      })
    }, 1000)
  },
  methods: {
    initEchart() {
      this.echart = echarts.init(this.$refs.echart)
      this.echart.setOption(this.option)
    }
  }
}
</script>
<style lang=""></style>

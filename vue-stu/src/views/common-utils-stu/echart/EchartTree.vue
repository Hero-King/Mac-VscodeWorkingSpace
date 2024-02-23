<template>
  <div>
    <div ref="echart" style="height: 400px; width: 375px" class="border"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'EchartTree',
  computed: {
    opt() {}
  },
  mounted() {
    this.echart = echarts.init(this.$refs.echart)
    const dotColor = new echarts.graphic.LinearGradient(
              0,
              0,
              1,
              1, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
              [
                { offset: 0, color: '#84FAB0' },
                { offset: 0, color: '#8FD3F4' }
              ]
            )
    this.echart.setOption({
      series: [
        {
          type: 'tree',
          data: [
            {
              name: '一体仓1',
              children: [
                {
                  name: '三级BMS1',
                  children: [
                    {
                      name: '二级BMS簇1'
                    },
                    {
                      name: '二级BMS簇2'
                    },
                    {
                      name: '二级BMS簇3'
                    },
                    {
                      name: '二级BMS簇4'
                    }
                  ]
                },
                {
                  name: 'Child B',
                  children: [
                    {
                      name: 'AAA'
                    },
                    {
                      name: 'bbb'
                    }
                  ]
                },
                {
                  name: 'ccc'
                },
                {
                  name: 'Child F',
                  children: [
                    {
                      name: 'ddd'
                    },
                    {
                      name: 'jjj'
                    }
                  ]
                }
              ]
            }
          ],
          label: {
            position: 'right',
            distance: 0,
            backgroundColor: 'white',
            padding: [0, 0, 0, 8]
          },
          roam: true,
          expandAndCollapse: false,
          right: '100',
          left: 20,
          symbolSize: 15,
          edgeShape: 'polyline',
          edgeForkPosition: '100%',
          initialTreeDepth: -1,
          itemStyle: {
            color: dotColor,
            borderWidth: 10,
            borderColor: null
          },
          lineStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              1,
              1, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
              [
                { offset: 0, color: '#A0D6FE' },
                { offset: 0, color: '#0C95FE' }
              ]
            )
          }
        }
      ]
    })
  },
  watch: {
    opt(v) {
    //   this.echart.setOption(v)
    }
  }
}
</script>
<style lang=""></style>

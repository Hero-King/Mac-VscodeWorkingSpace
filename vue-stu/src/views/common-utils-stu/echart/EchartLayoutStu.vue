<template>
  <div>
    <section>
      <div>
        containLabel:
        <el-switch v-model="containLabel"></el-switch>
      </div>
      <el-row :gutter="24">
        <el-col :span="6" v-for="i in sliderList" :key="i.text">
          {{ i.text }}
          <el-slider v-model="sliderOpt[i.valueKey]" show-input :format-tooltip="(v) => v + '%'"> </el-slider>
        </el-col>
      </el-row>

      <el-row :gutter="24">
        <el-col :span="6" v-for="(v, k) in borderColor" :key="k">
          {{ k }}
          <el-color-picker v-model="borderColor[k]"></el-color-picker>
        </el-col>
      </el-row>
    </section>

    <div ref="echart" style="height: 400px; width: 600px" class="border"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'EchartLayoutStu',
  data() {
    let data = {
      containLabel: true,
      sliderOpt: {},
      borderColor: {
        gridBorderColor: 'red',
        legendBorderColor: '#000',
        legendTextBorderColor: '#000'
      }
    }

    this.sliderList = ['gridLeft', 'gridTop', 'gridRight', 'gridBottom', 'legendLeft', 'legendTop', 'legendRight', 'legendBottom'].map((i) => {
      data.sliderOpt[i] = i.startsWith('grid') ? 20 : 0
      return {
        text: i,
        valueKey: i
      }
    })

    return data
  },
  computed: {
    opt() {
      const { sliderOpt, borderColor } = this
      return {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'white',
          borderColor: '#357EE7',
          borderWidth: '1',
          textStyle: {
            color: 'blank'
          },
          // 阻止溢出
          confine: true,
          // tooltip 中数值显示部分的格式化回调函数。  从 v5.3.0 开始支持
          // valueFormatter(value){
          //   return value + '个'
          // }
          // tooltip 数据添加单位 %  回调函数支持返回 HTML 字符串或者创建的 DOM 实例。
          formatter: function (params) {
            // console.log(params)
            var relVal = params[0].name
            for (var i = 0, l = params.length; i < l; i++) {
              relVal += '<br/>' + params[i].marker + params[i].seriesName + ':' + params[i].value + '%'
            }
            return relVal
          }
        },
        textStyle: {
          fontSize: 16
        },
        legend: {
          // backgroundColor: 'gray',
          borderColor: borderColor.legendBorderColor,
          borderWidth: 1,
          bottom: sliderOpt.legendBottom + '%',
          top: sliderOpt.legendTop + '%',
          right: sliderOpt.legendRight + '%',
          left: sliderOpt.legendLeft + '%',

          icon: 'circle',
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 0,
          // 使得图例换行并上下对其
          formatter: ['{a|{name}}'].join('\n'),
          // formatter: ['{a|{name}}'],
          inactiveColor: '#E6E6E6',
          textStyle: {
            backgroundColor: 'yellow',
            borderColor: borderColor.legendTextBorderColor,
            borderWidth: 1,
            // legend文字和边框的间距
            // padding: 5,
            // 注意，如果不定义 rich 属性，则不能指定 width 和 height。
            // width: 400  // 无效
            rich: {
              a: {
                width: 160,
                lineHeight: 20,
                align: 'left',
                padding: [0, 0, 0, 15]
              }
            }
          },
          data: [
            {
              name: '光伏发电使用',
              textStyle: {
                rich: {
                  a: {
                    width: 210
                  }
                }
              }
            },
            '美羊羊',
            '蜘蛛侠'
          ]
        },
        xAxis: {
          name: '时间(D)',
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          nameTextStyle: {
            align: 'right',
            lineHeight: 50,
            verticalAlign: 'top'
          },
          axisLabel: {
            color: '#08265F',
            fontWeight: 'bold',
            margin: 5,
            fontSize: 12
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#DDD'
            }
          }
        },
        yAxis: {
          name: '草垛(个)',
          type: 'value'
        },
        grid: {
          containLabel: this.containLabel,
          show: true,
          borderColor: borderColor.gridBorderColor,
          bottom: sliderOpt.gridBottom + '%',
          top: sliderOpt.gridTop + '%',
          right: sliderOpt.gridRight + '%',
          left: sliderOpt.gridLeft + '%'
        },
        series: [
          {
            name: '光伏发电使用',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          },
          {
            name: '美羊羊',
            data: [1290, 1330, 1320, 820, 932, 901, 934],
            type: 'line',
            smooth: true
          },
          {
            name: '蜘蛛侠',
            data: [932, 800, 934, 1290, 1330, 1320, 820],
            type: 'line',
            smooth: true
          }
        ]
      }
    }
  },
  mounted() {
    this.echart = echarts.init(this.$refs.echart)
    this.echart.setOption(this.opt)
  },
  watch: {
    opt(v) {
      this.echart.setOption(v)
    }
  }
}
</script>
<style lang=""></style>

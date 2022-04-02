<template>
  <div class="percent-board-wrap font-source-han-sans" v-show="isBoardVisible">
    <div class="right-percent-wrap">
      <div class="bg-box">
        <div class="percent-number">{{ percentCtx.value + "%" }}</div>

        <div class="process-box" ref="processRef"></div>
      </div>
      <div class="label-text">{{ percentCtx.label }}</div>
    </div>
    <div class="left-number-wrap">
      <div class="number-box">
        <div class="number-text">{{ numTopCtx.value }}</div>
        <div class="label-text">{{ numTopCtx.label }}</div>
      </div>

      <div class="number-box">
        <div class="number-text danger-text">{{ numBottomCtx.value }}</div>
        <div class="label-text">{{ numBottomCtx.label }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import echartMixins from "./echartsMixin";
export default {
  mixins: [echartMixins],
  props: {
    numTopCtx: {
      type: Object,
      default: () => ({
        value: "",
        label: "",
      }),
    },
    numBottomCtx: {
      type: Object,
      default: () => ({
        value: "",
        label: "",
      }),
    },
    percentCtx: {
      type: Object,
      default: () => ({
        value: "",
        label: "",
      }),
    },
  },
  methods: {
    initCircle() {
      this.echartInstance = echarts.init(this.$refs.processRef);
      const option = {
        series: [
          {
            name: "Indicator",
            type: "gauge",
            detail: {
              show: false,
            },
            data: [
              {
                value: Number(this.percentCtx.value),
              },
            ],
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },
            anchor: {
              show: false,
            },
            title: {
              show: false,
            },
            progress: {
              show: true,
              width: 12,
              itemStyle: {
                color: {
                  type: "linear",
                  x: 1,
                  y: 1,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#8160F5", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#73FAF6", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
            radius: "79%",
            startAngle: 225,
            endAngle: -45,
            center: ["50%", "60%"],
          },
        ],
      };
      this.echartInstance.setOption(option);
    },
  },
  computed: {
    isBoardVisible() {
      return (
        this.numTopCtx.value && this.numBottomCtx.value && this.percentCtx.value
      );
    },
  },
  watch: {
    ["percentCtx"]: {
      deep: true,
      // immediate: true,
      handler(val, oldVal) {
        if (val && val.value !== oldVal.value) {
          this.initCircle();
        }
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@function px2vh($value) {
  @return $value/1080 * 100vh;
}
.percent-board-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: px2vh(10);
  display: flex;
  justify-content: space-around;
  .number-text {
    color: #ffffff;
    font-size: px2vh(26);
    text-align: center;
  }
  .label-text {
    font-weight: 500;
    color: #45ccff;
    font-size: px2vh(22);
    text-align: center;
  }
  .danger-text {
    color: #ea381b;
  }
  .left-number-wrap {
    width: px2vh(150);
    box-sizing: border-box;
    padding-top: px2vh(38);
    .number-box:first-child {
      margin-bottom: 36.5px;
    }
  }
  .right-percent-wrap {
    .bg-box {
      width: px2vh(158);
      height: px2vh(174);
      background-size: 100% 100%;
      background-image: url("../img/bg-dial-one.png");
      position: relative;
      .percent-number {
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translateX(-50%);
        font-size: px2vh(30);
        font-weight: bold;
        text-align: center;
        color: white;
      }
    }
  }
  .process-box {
    width: px2vh(158);
    height: px2vh(158);
    position: absolute;
    left: 50%;
    bottom: 3px;
    transform: translateX(-50%);
  }
}
</style>

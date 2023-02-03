<template>
  <div class="efficiency-monitor">
    <ScreenHeader>
      <template v-slot:leftTitle>
        {{ leftTitle }}
      </template>
      <template v-slot:centerTitle>
        <div class="flex spaceAround w100 h100 center-content">
          <Selector
            v-model="formParam.factory"
            class="center-select"
            :options="allFactory"
            :multiple="false"
            @onChange="handleFactoryChange"
          />
          <Selector
            v-model="formParam.line"
            class="center-select"
            :options="allLine"
            value-key="base_name"
            label-key="base_name"
            :collapse-tags="true"
            :multiple="false"
            @onChange="handleLineChange"
          />
          <Selector
            v-model="formParam.product"
            class="center-select"
            :options="allProductType"
            value-key="product_type"
            label-key="product_type"
            :multiple="true"
            @onChange="handleSelectChange"
          />
        </div>
      </template>
      <template v-slot:rightTitle>
        <div class="flex h100 spaceAround">
          <ScreenDatePicker
            v-model="formParam.year"
            size="mini"
            :editable="false"
            type="year"
            :clearable="false"
            format="yyyy年"
            value-format="yyyy"
            placeholder="请选择"
            @onChange="handleSelectChange"
          />
          <ScreenDatePicker
            v-model="formParam.month"
            :editable="false"
            type="month"
            :clearable="false"
            size="mini"
            format="MM月"
            value-format="MM"
            placeholder="请选择"
            :disabled="monthPickerDisabled"
            :picker-options="monthPickerOptions"
            @onChange="handleSelectChange"
          />
        </div>
      </template>
    </ScreenHeader>
    <!-- body部分 -->
    <div class="efficiency-body">
      <div class="body-line">
        <BasicCard
          title="近12月产线生产趋势"
          class="body-line-card"
        >
          <MixLineBar
            :grid-config="barGridConfig"
            :data="EfficiencyTrend"
            x-axis-key="month_code"
            :x-axis-rotate="45"
            :series-config="efficiencyTrendSeriesConfig"
            :right-percent="true"
            :right-spilt-line="false"
          />
        </BasicCard>
        <BasicCard
          title="近12月综合良率&OEE趋势"
          class="body-line-card"
        >
          <MixLineBar
            :grid-config="barGridConfig"
            :data="RecentlyYieldOee"
            x-axis-key="month_code"
            :x-axis-rotate="40"
            :series-config="recentlyYieldOeeSeriesConfig"
            :right-percent="true"
            :left-percent="true"
            :right-spilt-line="false"
          />
        </BasicCard>
      </div>
      <div class="body-line">
        <BasicCard
          :title="`瓶颈工序(${procedureNameSet.join('|')})监控`"
          class="body-line-card"
        >
          <MixLineBar
            :grid-config="barGridConfig"
            :data="EfficiencyBottleneck"
            x-axis-key="month_code"
            :x-axis-rotate="40"
            :series-config="efficiencyBottleneckSeriesConfig"
            :right-percent="true"
            :right-spilt-line="false"
          />
        </BasicCard>
        <BasicCard
          :title="formParam.month + `月工序排名`"
          class="body-line-card table-wrap"
        >
          <div class="flex w100 spaceBetween">
            <div class="table-item">
              <VisualTable
                class="monitor-small-table"
                row-class-name="monitor-table-row"
                :table-data="EfficiencyStepTableData"
                height="100%"
              >
                <el-table-column
                  label="工序"
                  prop="procedure_code"
                  min-width="15%"
                  align="center"
                />
                <el-table-column
                  prop="good_rate_parent"
                  label="良率"
                  align="center"
                  show-overflow-tooltip
                  min-width="15%"
                />
                <el-table-column
                  label="环比"
                  min-width="15%"
                  align="center"
                  show-overflow-tooltip
                >
                  <template slot-scope="scope">
                    <img
                      class="arrow-img"
                      :src="scope.row['isGoodRateUp'] ? UpArrowImg : DownArrowImg"
                      alt=""
                      srcset=""
                      height="18px"
                    >
                    <span />
                  </template>
                </el-table-column>
              </VisualTable>
            </div>
            <div class="table-item">
              <VisualTable
                class="monitor-small-table"
                row-class-name="monitor-table-row"
                :table-data="EfficiencyStepTableData"
                height="100%"
              >
                <el-table-column
                  label="工序"
                  prop="procedure_code"
                  min-width="15%"
                  align="center"
                />
                <el-table-column
                  prop="oee_oee"
                  label="OEE"
                  align="center"
                  show-overflow-tooltip
                  min-width="15%"
                />
                <el-table-column
                  label="环比"
                  min-width="15%"
                  align="center"
                >
                  <template slot-scope="scope">
                    <img
                      class="arrow-img"
                      :src="scope.row['isOeeRateUp'] ? UpArrowImg : DownArrowImg"
                      alt=""
                      srcset=""
                      height="18px"
                    >
                    <span />
                  </template>
                </el-table-column>
              </VisualTable>
            </div>
            <div class="table-item">
              <VisualTable
                class="monitor-small-table"
                row-class-name="monitor-table-row"
                :table-data="EfficiencyStepTableData"
                height="100%"
              >
                <el-table-column
                  label="工序"
                  prop="procedure_code"
                  min-width="15%"
                  align="center"
                />
                <el-table-column
                  prop="act_jp"
                  label="实际节拍"
                  align="center"
                  show-overflow-tooltip
                  min-width="15%"
                />
                <el-table-column
                  prop="theory_jp"
                  label="理论节拍"
                  min-width="15%"
                  align="center"
                  show-overflow-tooltip
                />
              </VisualTable>
            </div>
          </div>
        </BasicCard>
      </div>
    </div>
  </div>
</template>

<script>
import BasicCard from '../components/BasicCard.vue'
import ScreenHeader from '../components/ScreenHeader.vue'
import Selector from '../components/ScreenSelector.vue'
import TimeSelect from '../components/TimeSelect.vue'
import RadiusPie from '../components/RadiusPie.vue'
import MixLineBar from '../components/MixLineBar.vue'
import PercentBoard from '../components/PercentBoard.vue'
import VisualTable from '../components/VisualTable.vue'
import DivisionTable from '../components/DivisionTable.vue'
import ScreenDatePicker from '../components/ScreenDatePicker.vue'
import Dot from '../components/Dot.vue'
import UpArrowImg from '../img/uparrow.png'
import DownArrowImg from '../img/downarrow.png'
import { debounce } from '@/utils/'
import { queryType, getEfficiencyStep, getEfficiencyBottleneck, getRecentlyYieldOee, getEfficiencyTrend } from '@/api/screen-monitor/efficiencyMonitor'
import mixin from '../mixin'

export default {
  name: 'EfficiencyMonitor',
  components: {
    BasicCard,
    ScreenHeader,
    Selector,
    TimeSelect,
    RadiusPie,
    PercentBoard,
    MixLineBar,
    VisualTable,
    DivisionTable,
    ScreenDatePicker,
    Dot
  },
  mixins: [mixin],
  data() {
    return {
      leftTitle: '生产效率监控看板',
      UpArrowImg,
      DownArrowImg,
      allTypeData: [],
      rateField: ['good_rate_parent', 'oee_oee'],
      formParam: {
        year: '2022',
        month: '01',
        factory: '金坛电芯厂',
        line: '常州一期装配3产线',
        grouptype: 1,
        product: []
        // year: "",
        // month: "",
        // factory: "",
        // line: "",
        // grouptype: 1,
        // product: [],
      },
      // 不是接口必须传递的字段
      notRequiredParam: new Set(['product']),
      EfficiencyTrend: [],
      RecentlyYieldOee: [],
      EfficiencyBottleneck: [],
      EfficiencyStepTableData: [],
      efficiencyTrendSeriesConfig: [
        {
          name: '合格产品',
          valueKey: 'good_qty',
          type: 'bar',
          itemStyle: {
            color: '#1091E8'
          }
        },
        {
          name: '下线产量',
          valueKey: 'act_out_qty',
          type: 'bar',
          itemStyle: {
            color: '#F1A836'
          }
        },
        {
          name: '合格率',
          valueKey: 'act_good_rate',
          type: 'line',
          yAxisIndex: 1,
          itemStyle: {
            color: '#1EDFDA'
          },
          tooltip: {
            valueFormatter: (value) => `${value} %`
          }
        }
      ],
      recentlyYieldOeeSeriesConfig: [
        {
          name: '综合良率',
          valueKey: 'good_rate_parent',
          type: 'line',
          itemStyle: {
            color: '#1EDFDA'
          },
          tooltip: {
            valueFormatter: (value) => `${value} %`
          }
        },
        {
          name: 'OEE',
          valueKey: 'oee_oee',
          type: 'line',
          itemStyle: {
            color: '#F1A836'
          },
          tooltip: {
            valueFormatter: (value) => `${value} %`
          }
        }
      ],
      efficiencyBottleneckSeriesConfig: [
        {
          name: '合格品',
          valueKey: 'good_qty',
          type: 'bar',
          itemStyle: {
            color: '#1091E8'
          }
        },
        {
          name: '综合良率',
          valueKey: 'good_rate_parent',
          type: 'line',
          yAxisIndex: 1,
          itemStyle: {
            color: '#1EDFDA'
          },
          tooltip: {
            valueFormatter: (value) => `${value} %`
          }
        },
        {
          name: 'OEE',
          valueKey: 'oee_oee',
          type: 'line',
          yAxisIndex: 1,
          itemStyle: {
            color: '#F1A836'
          },
          tooltip: {
            valueFormatter: (value) => `${value} %`
          }
        }
      ],
      barGridConfig: {
        left: '0%',
        bottom: '0%',
        right: '0%',
        top: '15%'
      }
    }
  },
  computed: {
    // 工序集合
    procedureNameSet() {
      return Array.from(new Set(this.EfficiencyBottleneck.map((i) => i['procedure_name'])))
    },
    monthPickerDisabled() {
      return this.formParam.year.length == 0
    },
    monthPickerOptions() {
      return {
        disabledDate: (time) => {
          return time.getFullYear() != this.formParam.year
        }
      }
    },
    filterDataByLine() {
      return this.filterDataByFactory.filter((i) => i['line'] === this.formParam.line)
    },
    allLine() {
      return Array.from(new Set(this.filterDataByFactory.map((i) => i['line'])))
    },
    allProductType() {
      return Array.from(new Set(this.filterDataByLine.map((i) => i['model'])))
    },
    filterDataByFactory() {
      return this.allTypeData.filter((i) => i['factory'] === this.formParam.factory)
    },
    allFactory() {
      const allFactorySet = new Set()
      this.allTypeData.forEach((i) => {
        if (!allFactorySet.has(i['factory'])) {
          allFactorySet.add(i['factory'])
        }
      })
      return Array.from(allFactorySet)
    },
    param() {
      const { factory, line, grouptype, product, month } = this.formParam
      return {
        factory,
        line,
        grouptype: product.length > 0 ? 4 : 3,
        product: product.join(','),
        start_month: month ? this.formParam.year - 1 + this.formParam.month : '',
        end_month: month ? this.formParam.year + this.formParam.month : ''
      }
    }
  },
  created() {
    this.handleSelectChange = debounce(this._handleSelectChange, 100)
    this.initData()
  },
  mounted() {
    this.getData()
  },
  methods: {
    handleFactoryChange(v) {
      this.formParam.line = ''
      this.formParam.product = []
      this._handleSelectChange()
    },
    handleLineChange() {
      this.formParam.product = []
      this._handleSelectChange()
    },
    _handleSelectChange() {
      console.log(this.formParam, '----', arguments)
      this.getData()
    },
    getData() {
      if (!this.validParam()) {
        return
      }
      getEfficiencyTrend({
        ...this.param,
        grouptype: this.formParam.product.length > 0 ? 2 : 1
      })
        .then((res) => {
          console.log('getEfficiencyTrend', res)
          this.EfficiencyTrend = res.data
            .map((i) => {
              let rate = this.formatRate(i['good_qty'] / i['act_out_qty'], 1)
              return { ...i, act_good_rate: rate }
            })
            .sort((a, b) => a['month_code'] - b['month_code'])
        })
        .catch((err) => {
          this.EfficiencyTrend = []
          this.msgError(err.errMsg || err)
        })
      getRecentlyYieldOee({
        ...this.param,
        grouptype: this.formParam.product.length === 0 ? 1 : this.formParam.product.length == 1 ? 2 : 4
      })
        .then((res) => {
          this.RecentlyYieldOee = this.parseAjaxData(res.data).sort((a, b) => a['month_code'] - b['month_code'])
          console.log('RecentlyYieldOee', res.data)
        })
        .catch((err) => {
          this.RecentlyYieldOee = []
          this.msgError(err.errMsg || err)
        })

      let productParam = { ...this.param }
      if (productParam.grouptype == 3) {
        productParam.product = '9999'
      }
      getEfficiencyBottleneck(productParam)
        .then((res) => {
          console.log('EfficiencyBottleneck', res.data)
          this.EfficiencyBottleneck = this.parseAjaxData(res.data).sort((a, b) => a['month_code'] - b['month_code'])
        })
        .catch((err) => {
          this.EfficiencyBottleneck = []
          this.msgError(err.errMsg || err)
        })

      getEfficiencyStep(productParam)
        .then((res) => {
          console.log('getEfficiencyStep', JSON.parse(JSON.stringify(res.data)))
          res.data.forEach((i) => {
            i['isGoodRateUp'] = (i['good_rate_parent'] || 0) - (i['good_rate_parent_lm'] || 0) > 0
            i['isOeeRateUp'] = (i['oee_oee'] || 0) - (i['oee_oee_lm'] || 0) > 0
            i['good_rate_parent'] = this.formatRate(i['good_rate_parent'], 1) + '%'
            i['oee_oee'] = this.formatRate(i['oee_oee'], 1) + '%'
            if (i['act_jp']) {
              i['act_jp'] = this.formatNum(i['act_jp'])
            }
            if (i['theory_jp']) {
              i['theory_jp'] = this.formatNum(i['theory_jp'])
            }
          })
          this.EfficiencyStepTableData = res.data.sort((a, b) => a['procedure_code'] - b['procedure_code'])
        })
        .catch((err) => {
          this.EfficiencyStepTableData = []
          this.msgError(err.errMsg || err)
        })
    },
    initData() {
      queryType()
        .then((res) => {
          this.allTypeData = res.data
        })
        .catch((err) => {
          this.msgError(err.errMsg || err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@function px2vh($value) {
  @return $value/1080 * 100vh;
}
.efficiency-monitor {
  width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  background-image: url('../img/bg.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  ::v-deep .screen-header .head-center .center-title {
    padding: 0 1.5vw;
  }
  .center-content {
    .center-select {
      width: 20vw;
      &:first-child {
        width: 12vw;
      }
      &:last-child {
        width: 7vw;
      }
    }
  }
  .efficiency-body {
    flex: 1;
    padding: 3.33vh 0 0 3.33vh;
    .body-line {
      display: flex;
      width: 100%;
      height: 50%;
      padding-bottom: 3.33vh;
    }
    .body-line-card {
      overflow: auto;
      margin-right: 3.33vh;
    }
    .table-wrap {
      padding-top: 4.5vh;
    }
    .table-item {
      width: 32%;
      height: 100%;
      overflow: auto;
      .arrow-img {
        vertical-align: middle;
      }
    }
  }
}
</style>

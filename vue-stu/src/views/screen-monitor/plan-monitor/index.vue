<template>
  <div class="plan-monitor">
    <ScreenHeader>
      <template v-slot:leftTitle>
        {{ leftTitle }}
      </template>
      <template v-slot:centerTitle>
        <div class="flex spaceAround w100 h100 center-content">
          <ScreenDatePicker v-model="formParam.year" type="year" format="yyyy年" value-format="yyyy" placeholder="请选择" @onChange="handleSelectChange" />
          <Selector
            class="center-multiple-select"
            v-model="formParam.base"
            :options="allBase"
            valueKey="base_name"
            labelKey="base_name"
            :collapse-tags="true"
            :multiple="true"
            @onChange="handleSelectChange"
          ></Selector>
          <Selector
            class="center-multiple-select"
            v-model="formParam.factory"
            :options="allFactory"
            valueKey="factory_name"
            labelKey="factory_code"
            :collapse-tags="true"
            :multiple="true"
            @onChange="handleSelectChange"
          ></Selector>
          <Selector
            v-model="formParam.product"
            :options="allProductType"
            valueKey="product_type"
            labelKey="product_type"
            @onChange="handleSelectChange"
          ></Selector>
        </div>
      </template>
      <template v-slot:rightTitle>
        <TimeSelect
          type="labelselect"
          :labels="['周', '月', '季度', '年']"
          defaultSelect="月"
          v-model="formParam['time_type']"
          @onChange="handleSelectChange"
        ></TimeSelect>
      </template>
    </ScreenHeader>
    <!-- body部分 -->
    <div class="plan-body flex">
      <div class="left-wrap h100 flexCol">
        <BasicCard title="生产总览" class="body-line-card left-card">
          <PercentBoard :percentCtx="productionPreview.qty.rate" :numBottomCtx="productionPreview.qty.act" :numTopCtx="productionPreview.qty.plan" />
          <PercentBoard :percentCtx="productionPreview.cap.rate" :numBottomCtx="productionPreview.cap.act" :numTopCtx="productionPreview.cap.plan" />
        </BasicCard>
        <BasicCard title="工厂计划完成率" class="body-line-card">
          <MixLineBar
            :gridConfig="barGridConfig"
            :data="ProductByFactory"
            xAxisKey="dim_factory_factory_name"
            :seriesConfig="factoryProductSeriesConfig"
            :rightPercent="true"
            :rightSpiltLine="false"
          />
        </BasicCard>
        <BasicCard title="产品计划完成率" class="body-line-card">
          <MixLineBar
            :gridConfig="barGridConfig"
            :data="ProductByModel"
            xAxisKey="dim_product_source_code_product_source_code"
            :seriesConfig="factoryProductSeriesConfig"
            :rightPercent="true"
            :rightSpiltLine="false"
          />
        </BasicCard>
      </div>
      <div class="right-wrap h100 flexCol">
        <BasicCard title="基地计划完成监控率" class="body-line-card table-wrap">
          <DivisionTable
            class="monitor-small-table"
            row-class-name="monitor-table-row"
            :tableData="ProductByBase"
            rowKey="dim_base_base_name"
            cellKey="act_qty_rate"
            colKey="show_col"
            rowTitle="基地"
            colTitle="时间"
          >
          </DivisionTable>
        </BasicCard>
        <BasicCard title="计划完成率明细" class="body-line-card table-wrap">
          <VisualTable class="monitor-small-table" row-class-name="monitor-table-row" :tableData="ProductMaterialdetail" height="100%">
            <el-table-column label="工厂" prop="dim_factory_factory_name" min-width="10%" align="center"> </el-table-column>
            <el-table-column prop="dim_product_source_code_product_source_code" label="产品编码" align="center" show-overflow-tooltip min-width="8%">
            </el-table-column>
            <el-table-column prop="dim_product_product_code" label="产品名称" min-width="15%" align="center" show-overflow-tooltip> </el-table-column>
            <el-table-column prop="plan_qty" label="计划生产" min-width="12%" show-overflow-tooltip align="center"> </el-table-column>
            <el-table-column prop="act_qty" label="实际生产" min-width="12%" align="center" show-overflow-tooltip> </el-table-column>
            <el-table-column prop="act_qty_rate" label="计划完成率" min-width="10%" align="center"> </el-table-column>
          </VisualTable>
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
import { debounce } from '@/utils/'
import { getAllBase, getProductType, getAllFactory } from '@/api/screen-monitor/deliveryMonitor'
import { getProductTotal, getProductByFactory, getProductByModel, getProductByBase, getProductMaterialdetail } from '@/api/screen-monitor/planMonitor'
import mixin from '../mixin'

export default {
  name: 'PlanMonitor',
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
    Dot,
    ScreenDatePicker
  },
  mixins: [mixin],
  data() {
    return {
      leftTitle: '生产计划监控看板',
      rateField: ['act_cap_rate', 'act_qty_rate'],
      formParam: {
        base: ['金坛'],
        factory: ['金坛电芯厂'],
        product: '电芯',
        year: '2021',
        time_type: ''
      },
      allFactory: [],
      allBase: [],
      allProductType: [],
      productionPreview: {
        qty: {
          rate: { value: '' },
          act: { value: '' },
          plan: { value: '' }
        },
        cap: {
          rate: {},
          act: {},
          plan: {}
        }
      },
      ProductByFactory: [],
      ProductByModel: [],
      ProductByBase: [],
      ProductMaterialdetail: [],
      factoryProductSeriesConfig: [
        {
          name: '计划生产',
          valueKey: 'plan_qty',
          type: 'bar',
          itemStyle: {
            color: '#1091E8'
          }
        },
        {
          name: '实际生产',
          valueKey: 'act_qty',
          type: 'bar',
          itemStyle: {
            color: '#F1A836'
          }
        },
        {
          name: '完成率',
          valueKey: 'act_qty_rate',
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
      barGridConfig: {
        left: '0%',
        bottom: '00%',
        right: '0%',
        top: '20%'
      }
    }
  },
  computed: {
    param() {
      // TODO 接口参数确认
      return {
        ...this.formParam,
        factory: this.formParam.factory.join(','),
        base: this.formParam.base.join(',')
      }
      // test
      return {
        base: '金坛,马鞍山',
        factory: '金坛电芯厂,马鞍山电芯厂',
        product: '电芯',
        year: '2021',
        time_type: this.formParam['time_type'] || '月'
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
    _handleSelectChange() {
      console.log(this.formParam, '----')
      this.getData()
    },
    getData() {
      if (!this.validParam()) {
        return
      }
      getProductTotal(this.param)
        .then((res) => {
          console.log('汇总', res)
          if (res.data.length > 0) {
            const tmp = res.data[0]
            this.productionPreview = {
              qty: {
                rate: {
                  label: '产出完成率',
                  value: this.formatRate(tmp['act_qty_rate'], 1)
                },
                act: {
                  label: '实际产出数',
                  value: this.formatNum(tmp['act_qty'])
                },
                plan: {
                  label: '计划产出数',
                  value: this.formatNum(tmp['plan_qty'])
                }
              },
              cap: {
                rate: {
                  label: '产出完成率(GWH)',
                  value: this.formatRate(tmp['act_cap_rate'], 1)
                },
                act: {
                  label: '实际产出GWH',
                  value: this.formatNum(tmp['act_cap'])
                },
                plan: {
                  label: '计划产出GWH',
                  value: this.formatNum(tmp['plan_cap'])
                }
              }
            }
          }
        })
        .catch((err) => {
          this.msgError(err.errMsg || err)
        })
      getProductByFactory(this.param)
        .then((res) => {
          this.ProductByFactory = this.parseAjaxData(res.data)
          console.log('ProductByFactory', res)
        })
        .catch((err) => {
          this.ProductByFactory = []
          this.msgError(err.errMsg || err)
        })
      getProductByModel(this.param)
        .then((res) => {
          this.ProductByModel = this.parseAjaxData(res.data)
          console.log('ProductByModel', res.data.length)
        })
        .catch((err) => {
          this.ProductByModel = []
          this.msgError(err.errMsg || err)
        })
      getProductByBase(this.param)
        .then((res) => {
          this.ProductByBase = this.parseAjaxData(res.data.sort((a, b) => a['show_col'] - b['show_col']))
          console.info('getProductByBase', res, this.ProductByBase)
        })
        .catch((err) => {
          this.ProductByBase = []
          this.msgError(err.errMsg || err)
        })
      getProductMaterialdetail(this.param)
        .then((res) => {
          res.data.forEach((i) => {
            if (i.hasOwnProperty('act_qty_rate') && i['act_qty_rate'] !== '-') {
              i['act_qty_rate'] = this.formatRate(i['act_qty_rate'], 1) + '%'
            }
            if (i['plan_qty']) {
              i['plan_qty'] = this.formatNum(i['plan_qty'])
            }
            if (i['act_qty']) {
              i['act_qty'] = this.formatNum(i['act_qty'])
            }
          })
          this.ProductMaterialdetail = res.data
          console.log('getProductMaterialdetail', res)
        })
        .catch((err) => {
          this.ProductMaterialdetail = []
          this.msgError(err.errMsg || err)
        })
    },
    initData() {
      getAllBase()
        .then((result) => {
          this.allBase = result.data
        })
        .catch((err) => {
          this.msgError(err.errMsg || err)
        })
      getAllFactory({ user_code: this.$store.getters.name })
        .then((result) => {
          this.allFactory = result.data
        })
        .catch((err) => {
          this.msgError(err.errMsg || err)
        })
      getProductType()
        .then((result) => {
          this.allProductType = result.data
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
$topSelectItemWidth: 8.4375vw;

.plan-monitor {
  width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  background-image: url('../img/bg.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  .center-content {
    .el-select {
      // width: px2vh(162);
      width: 7vw;
      &[class~='center-multiple-select'] {
        width: 11vw;
      }
    }
    ::v-deep .el-date-editor {
      width: 7vw;
      // width: $topSelectItemWidth;
    }
  }
  .plan-body {
    flex: 1;
    padding: 3.33vh 0 0 3.33vh;
    .left-wrap {
      width: 40%;
      padding-right: 3.33vh;
    }
    .right-wrap {
      width: 60%;
      padding-right: 3.33vh;
    }
    .body-line-card {
      margin: 0 0 3.33vh 0;
    }
    .table-wrap {
      padding-top: 4.5vh;
    }
  }
  ::v-deep .el-loading-mask {
    background-color: transparent;
  }
}
</style>

<template>
  <div class="delivery-monitor">
    <ScreenHeader>
      <template v-slot:leftTitle>
        {{ leftTitle }}
      </template>
      <template v-slot:centerTitle>
        <div class="center-content">
          <Selector
            v-model="formParam.factory"
            class="center-multiple-select"
            :multiple="true"
            :options="allBase"
            value-key="base_name"
            label-key="base_name"
            :collapse-tags="true"
            @onChange="handleSelectChange"
          />
          <Selector
            v-model="formParam.product"
            :options="allProductType"
            value-key="product_type"
            label-key="product_type"
            @onChange="handleSelectChange"
          />
        </div>
      </template>
      <template v-slot:rightTitle>
        <TimeSelect
          v-model="formParam"
          type="monthselect"
          :labels="['月', '季度', '年']"
          @onChange="handleSelectChange"
        />
      </template>
    </ScreenHeader>
    <!-- body部分 -->
    <div class="delivery-body flexCol">
      <div class="body-line">
        <BasicCard
          title="交付纵览"
          class="body-line-card left-card"
        >
          <PercentBoard
            :percent-ctx="deliveryPreview.qty.rate"
            :num-bottom-ctx="deliveryPreview.qty.act"
            :num-top-ctx="deliveryPreview.qty.plan"
          />
          <PercentBoard
            :percent-ctx="deliveryPreview.cap.rate"
            :num-bottom-ctx="deliveryPreview.cap.act"
            :num-top-ctx="deliveryPreview.cap.plan"
          />
        </BasicCard>
        <BasicCard
          title="产品交付占比"
          class="body-line-card right-card"
        >
          <RadiusPie
            :data="pieData"
            pie-name="已交付数量"
            :grid-config="pieGridConfig"
          />
          <RadiusPie
            :data="customerPieData"
            pie-name="按客户已交付数量"
            :grid-config="pieGridConfig"
          />
        </BasicCard>
      </div>
      <div class="body-line">
        <BasicCard
          title="基地交付计划完成率"
          class="body-line-card left-card"
        >
          <MixLineBar
            :grid-config="barGridConfig"
            :data="DeliveryDetailByFactory"
            x-axis-key="dim_base_base_name"
            :series-config="factoryDeliverySeriesConfig"
            :right-percent="true"
            :right-spilt-line="false"
          />
        </BasicCard>
        <BasicCard
          title="交付缺口占比"
          class="body-line-card table-wrap right-card"
        >
          <VisualTable
            class="monitor-small-table"
            row-class-name="monitor-table-row"
            :table-data="DeliveryDetailByFactoryAndProduction"
            height="100%"
          >
            <el-table-column
              prop="dim_base_base_name"
              label="工厂"
              min-width="18%"
              align="center"
            />
            <el-table-column
              prop="dim_product_source_code_product_source_code"
              label="产品"
              align="center"
              min-width="18%"
            />
            <el-table-column
              prop="wait_delivery_qty"
              label="待交付"
              min-width="20%"
              align="center"
              show-overflow-tooltip
            >
              <template slot-scope="scope">
                <span>{{ scope.row['wait_delivery_qty'] | parseNum }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="stock_qty"
              label="当前库存"
              align="center"
              min-width="20%"
              show-overflow-tooltip
            >
              <template slot-scope="scope">
                <span>{{ scope.row['stock_qty'] | parseNum }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="缺口"
              align="center"
              min-width="25%"
              prop="gap_delivery_qty"
              show-overflow-tooltip
            >
              <template slot-scope="scope">
                <div class="flex spaceAround">
                  <span>{{ scope.row['gap_delivery_qty'] | parseNum }}</span>
                  <Dot
                    v-show="scope.row['gap_delivery_qty'] && scope.row['gap_delivery_qty'].toString().length > 0"
                    width="2.4vh"
                    :color="
                      scope.row['stock_qty'] >= scope.row['wait_delivery_qty']
                        ? '#1AF476'
                        : scope.row['stock_qty'] / scope.row['wait_delivery_qty'] > 0.9
                          ? '#F5A210'
                          : '#F53010'
                    "
                  />
                </div>
              </template>
            </el-table-column>
          </VisualTable>
        </BasicCard>
      </div>
      <div class="body-line">
        <BasicCard
          title="产品交付计划完成率"
          class="body-line-card left-card"
        >
          <MixLineBar
            :grid-config="barGridConfig"
            :data="DeliveryDetailByProduction"
            x-axis-key="dim_product_source_code_product_source_code"
            :series-config="productDeliverySeriesConfig"
            :right-percent="true"
            :right-spilt-line="false"
          />
        </BasicCard>
        <BasicCard
          class="body-line-card table-wrap right-card"
          title="交付完成率明细"
        >
          <VisualTable
            class="monitor-small-table"
            :table-data="DeliveryDetailByFactoryAndProduction"
            height="100%"
            row-class-name="monitor-table-row"
          >
            <el-table-column
              label="基地名称"
              prop="dim_base_base_name"
              min-width="10%"
              align="center"
            />
            <el-table-column
              prop="dim_product_type_product_type_name"
              label="产品类型"
              min-width="10%"
              align="center"
            />
            <el-table-column
              prop="dim_product_source_code_product_source_code"
              label="产品编码"
              align="center"
              show-overflow-tooltip
              min-width="10%"
            />
            <el-table-column
              prop="plan_delivery_qty"
              label="计划交付数量"
              min-width="10%"
              align="center"
            >
              <template slot-scope="scope">
                <span>{{ scope.row['plan_delivery_qty'] | parseNum }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="plan_delivery_cap"
              label="计划交付(GWH)"
              min-width="15%"
              align="center"
            >
              <template slot-scope="scope">
                <span>{{ scope.row['plan_delivery_cap'] | parseNum }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="act_delivery_qty"
              label="实际交付数量"
              min-width="10%"
              align="center"
            >
              <template slot-scope="scope">
                <span>{{ scope.row['act_delivery_qty'] | parseNum }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="act_delivery_cap"
              label="实际交付(GWH)"
              min-width="15%"
              align="center"
            >
              <template slot-scope="scope">
                <span>{{ scope.row['act_delivery_cap'] | parseNum }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="delivery_rate"
              label="计划完成率"
              min-width="10%"
              align="center"
            />
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
import Dot from '../components/Dot.vue'
import { debounce } from '@/utils/'
import {
  getAllBase,
  getProductType,
  getTotalNums,
  getDeliveryByFactory,
  getDeliveryByCustomer,
  getDeliveryByProduction,
  getDeliveryByFactoryAndProduction
} from '@/api/screen-monitor/deliveryMonitor'
import mixin from '../mixin'
import { reduceToOtherPercent } from '../const'

export default {
  name: 'DeliveryMonitor',
  components: {
    BasicCard,
    ScreenHeader,
    Selector,
    TimeSelect,
    RadiusPie,
    PercentBoard,
    MixLineBar,
    VisualTable,
    Dot
  },
  mixins: [mixin],
  data() {
    return {
      leftTitle: '交付监控看板',
      tableData: [],
      formParam: {
        factory: ['金坛'],
        product: '电芯',
        start_month: '',
        end_month: ''
      },
      rateField: ['delivery_qty_rate', 'delivery_cap_rate'],
      allBase: [],
      allProductType: [],
      deliveryPreview: {
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
      DeliveryDetailByProduction: [],
      DeliveryDetailByCustomer: [],
      DeliveryDetailByFactory: [],
      DeliveryDetailByFactoryAndProduction: [],
      barGridConfig: {
        containLabel: true,
        left: '0%',
        bottom: '0%',
        right: '0%',
        top: '18%'
      },
      pieGridConfig: {
        containLabel: true,
        left: '0%',
        bottom: '0%',
        right: '0%',
        top: '18%'
      }
    }
  },
  computed: {
    factoryDeliverySeriesConfig() {
      return [
        {
          name: '计划交付',
          valueKey: 'plan_delivery_qty',
          type: 'bar',
          itemStyle: {
            color: '#1091E8'
          }
        },
        {
          name: '实际交付',
          valueKey: 'act_delivery_qty',
          type: 'bar',
          itemStyle: {
            color: '#F1A836'
          }
        },
        {
          name: '交付计划完成率',
          valueKey: 'delivery_qty_rate',
          type: 'line',
          yAxisIndex: 1,
          itemStyle: {
            color: '#1EDFDA'
          },
          tooltip: {
            valueFormatter: (value) => `${value} %`
          }
        }
      ]
    },
    productDeliverySeriesConfig() {
      return [
        {
          name: '计划交付',
          valueKey: 'plan_delivery_qty',
          type: 'bar',
          itemStyle: {
            color: '#1091E8'
          }
        },
        {
          name: '实际交付',
          valueKey: 'act_delivery_qty',
          type: 'bar',
          itemStyle: {
            color: '#F1A836'
          }
        },
        {
          name: '交付计划完成率',
          valueKey: 'delivery_qty_rate',
          type: 'line',
          yAxisIndex: 1,
          itemStyle: {
            color: '#1EDFDA'
          },
          tooltip: {
            valueFormatter: (value) => `${value} %`
          }
        }
      ]
    },
    param() {
      // TODO 接口入参确定
      return { ...this.formParam, factory: this.formParam.factory.join(',') }
      // test
      return {
        factory: '金坛',
        product: '电芯',
        start_month: '202101',
        end_month: '202111'
      }
    },
    pieData() {
      let res = []
      if (this.DeliveryDetailByProduction.length > 0) {
        const [filterData, lessPart, lessPartTotal] = this.filterDataToOther(this.DeliveryDetailByProduction, 'act_delivery_qty', reduceToOtherPercent)
        res = filterData.map((i) => {
          return {
            name: i['dim_product_source_code_product_source_code'],
            value: i['act_delivery_qty']
          }
        })
        if (lessPartTotal > 0) {
          res.push({ name: '其他', value: lessPartTotal })
        }
        res.sort((a, b) => b.value - a.value)
      }
      return res
    },
    customerPieData() {
      let res = []
      if (this.DeliveryDetailByCustomer.length > 0) {
        const [filterData, lessPart, lessPartTotal] = this.filterDataToOther(this.DeliveryDetailByCustomer, 'act_delivery_qty', reduceToOtherPercent)
        res = filterData.map((i) => {
          return {
            name: i['dim_customer_customer_name'],
            value: i['act_delivery_qty'] || 0
          }
        })
        if (lessPartTotal > 0) {
          res.push({ name: '其他', value: lessPartTotal })
        }
        res.sort((a, b) => b.value - a.value)
      }
      return res
    }
  },
  created() {
    this.handleSelectChange = debounce(this._handleSelectChange, 100)
    this.initData()
  },
  mounted() {
    this.getData()
    // setTimeout(() => {
    //   this.param.start_month = "202102";
    //   this.handleSelectChange();
    // }, 1000 * 3);
  },
  methods: {
    getData() {
      if (!this.validParam()) {
        return
      }
      getTotalNums(this.param)
        .then((res) => {
          console.log('交付件数', res.data)
          if (res.data.length > 0) {
            const tmp = res.data[0]
            this.deliveryPreview = {
              qty: {
                rate: {
                  label: '交付完成率',
                  value: this.formatRate(tmp['delivery_qty_rate'], 1)
                },
                act: {
                  label: '实际交付数',
                  value: this.formatNum(tmp['act_delivery_qty'])
                },
                plan: {
                  label: '计划交付数',
                  value: this.formatNum(tmp['plan_delivery_qty'])
                }
              },
              cap: {
                rate: {
                  label: '交付完成率(GWH)',
                  value: this.formatRate(tmp['delivery_cap_rate'], 1)
                },
                act: {
                  label: '实际达成GWH',
                  value: this.formatNum(tmp['act_delivery_cap'])
                },
                plan: {
                  label: '计划交付GWH',
                  value: this.formatNum(tmp['plan_delivery_cap'])
                }
              }
            }
          }
        })
        .catch((err) => {
          this.msgError(err.errMsg || err)
        })

      getDeliveryByFactory(this.param)
        .then((res) => {
          console.log('基地交付', res.data)
          this.DeliveryDetailByFactory = this.parseAjaxData(res.data)
        })
        .catch((err) => {
          this.DeliveryDetailByFactory = []
          this.msgError(err.errMsg || err)
        })
      getDeliveryByProduction(this.param)
        .then((res) => {
          console.log('产品交付', res.data)
          // 只有实际交付数量 > 0 的产品才显示
          this.DeliveryDetailByProduction = this.parseAjaxData(res.data.filter((i) => i['act_delivery_qty'] && i['act_delivery_qty'] > 0))
        })
        .catch((err) => {
          this.DeliveryDetailByProduction = []
          this.msgError(err.errMsg || err)
        })
      getDeliveryByCustomer(this.param)
        .then((res) => {
          console.log('按客户已交付数量', res.data)
          this.DeliveryDetailByCustomer = res.data.filter((i) => i['act_delivery_qty'] && i['act_delivery_qty'] > 0)
        })
        .catch((err) => {
          this.DeliveryDetailByCustomer = []
          this.msgError(err.errMsg || err)
        })

      getDeliveryByFactoryAndProduction(this.param)
        .then((res) => {
          res.data.forEach((i) => {
            if (i.hasOwnProperty('delivery_rate') && i['delivery_rate'] !== '-') {
              i['delivery_rate'] = this.formatRate(i['delivery_rate'], 1) + '%'
            }
          })
          this.DeliveryDetailByFactoryAndProduction = res.data
          console.log('9 10', res.data)
        })
        .catch((err) => {
          this.DeliveryDetailByFactoryAndProduction = []
          this.msgError(err.errMsg || err)
        })
    },
    _handleSelectChange() {
      console.log(this.param, '----')
      this.getData()
    },
    initData() {
      getAllBase()
        .then((result) => {
          this.allBase = result.data
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
.delivery-monitor {
  width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  background-image: url('../img/bg.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  .center-content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .center-multiple-select {
      width: px2vh(230);
    }
  }
  .delivery-body {
    flex: 1;
    padding: 3.33vh 0 0 3.33vh;
    .body-line {
      flex: 1;
      display: flex;
      margin-bottom: 3vh;
      .left-card {
        width: 40%;
      }
      .right-card {
        // flex: 0 1 60%
        width: 60%;
      }
      .body-line-card {
        overflow: auto;
        margin-right: 3.33vh;
      }
      .table-wrap {
        padding-top: 4.5vh;
      }
      .body-line-pie {
        width: px2vh(540);
      }
      // ::v-deep .monitor-small-table {
      //   .el-table__header {
      //     tr > th {
      //       height: px2vh(30);
      //       padding: 0;
      //       .cell {
      //         height: px2vh(30);
      //         line-height: px2vh(30);
      //         font-size: px2vh(18);
      //       }
      //     }
      //   }
      //   .monitor-table-row {
      //     > td {
      //       height: px2vh(30);
      //       font-size: px2vh(18);
      //       line-height: px2vh(30);
      //     }
      //   }
      // }
    }
  }
}
</style>

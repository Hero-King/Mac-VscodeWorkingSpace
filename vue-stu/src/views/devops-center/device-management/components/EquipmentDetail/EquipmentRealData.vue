<template lang="">
  <div>
    <el-row>
      <el-col :span="12">
        <span style="font-weight: bolder; padding-right: 10px">{{ deviceInfo.deviceName }}</span><span
          class="extra--span"
          @click.stop="() => viewLine()"
        >曲线</span><i
          class="el-icon-arrow-right"
          style="color: #4e60f6"
        />
      </el-col>
      <el-col :span="12">
&nbsp;
      </el-col>
    </el-row>
    <el-row>
      <el-col
        v-for="item in deviceList"
        :key="item"
        :span="6"
        style="margin: 10px 0; display: flex"
      >
        <span>{{ item.paramName }}：</span>
        <a-tooltip
          placement="topLeft"
          :title="item.throwDate"
        >
          <span v-if="item.lastData != null">
            <span>
              <div
                v-if="item.paramMark == 'operating_status'"
                class="box-item-content-text-status"
                @click.stop="() => viewLine(item.paramMark)"
              >
                <p
                  :class="[
                    'box-item-content-text-status-one',
                    'status-one' + Math.round(item.paramValueCode)
                  ]"
                />
                <p :class="['status-two' + Math.round(item.paramValueCode)]">{{ item.lastData }}</p>
              </div>
              <span
                v-else
                style="color: #1890ff"
                @click.stop="() => viewLine(item.paramMark)"
              >{{
                item.lastData
              }}</span>
            </span>
            <span v-if="item.unit != null && item.unit != ''">（{{ item.unit }}）</span>
          </span>
        </a-tooltip>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { queryDeviceParamLastData } from '@/api/devops-center/deviceManage'
import { deepClone } from '@/utils'
export default {
  name: 'EquipmentRealData',
  components: {
  },
  props: {
    deviceInfo: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    this.getDeviceData()
  },
  destroyed() {
    clearTimeout(this.pollingST)
    this.pollingST = null
  },
  methods: {
    cancelOtherModel() {
      this.visible = false
    },
    viewLine(specParamMark) {
      this.visible = true
      this.devicetitle = this.deviceInfo.deviceName
      this.specParamMark = specParamMark
      this.deviceInfo = deepClone(this.deviceInfo) || {}
    },
    // 获取实时数据
    getDeviceData() {
      const { modelMark, deviceMark } = this.deviceInfo
      queryDeviceParamLastData({ modelMark, deviceMark }).then((res) => {
        if (res.code == 0) {
          this.deviceList = res.data
          clearTimeout(this.pollingST)
          this.pollingST = null
          this.pollingST = setTimeout(() => {
            clearTimeout(this.pollingST)
            this.pollingST = null
            this.getDeviceData()
          }, 15000)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.extra--span {
  display: inline-block;
  width: 40px;
  height: 100%;
  padding: 0 3px;
  color: #4e60f6;
  cursor: pointer;
}
.mian {
  width: 100%;
  background-color: #f6f8fb;
  box-sizing: border-box;
  // padding: 10px;
  height: 100%;
  position: relative;

  /deep/ .el-tabs__item.is-active {
    color: #4e60f6;
  }

  /deep/ .el-tabs__active-bar {
    background-color: #4e60f6;
  }

  .box-card {
    position: relative;

    .box-item-content-text-status{
      flex: 1;
      text-align: right;
      display: flex;
      align-items: center;
      &-one{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 4px;
      }
      .status-one0{
        background-color: #FF0000;
      }
      .status-two0{
        color: #FF0000;
      }
      .status-one1{
        background-color: #FFB700;
        -webkit-animation: twinkling 1s infinite ease-in-out
      }
      .status-two1{
        color: #FFB700;
      }
      .status-one2{
        background-color: #27B148;
      }
      .status-two2{
        color: #27B148;
      }
      @keyframes twinkling{
        0%{
            opacity: 0.1;
        }
        100%{
            opacity: 1;
        }
      }
    }

    &-two-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: -8px;
    }
  }

  .empty {
    background-color: #f6f8fb;
    height: 434px;
  }

  .goback {
    position: absolute;
    right: 20px;
    top: 20px;
    color: #4e60f6;
    cursor: pointer;
    z-index: 1;
  }
}
</style>
<style>

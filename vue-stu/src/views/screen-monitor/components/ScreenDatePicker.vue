<template>
  <div class="screen-date-picker">
    <el-date-picker
      v-model="_value"
      v-bind="$attrs"
      class="datepickerclass"
      popper-class="datepicker-poper-class"
      @change="$emit('onChange', $event)"
    />
  </div>
</template>

<script>
export default {
  name: 'ScreenDatePicker',
  props: ['value'],
  computed: {
    _value: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss">
@function px2vh($value) {
  @return $value/1080 * 100vh;
}
.datepicker-poper-class {
  font-weight: 400;
  color: #fff;
  border: 1px solid #0c80d8;
  background: rgba(4, 27, 89, 0.5);
  border-radius: px2vh(6);
  text-align: center;
  box-shadow: inset 0px 0px 15px 0px rgb(2 90 215 / 66%);
  font-size: px2vh(24);
  &.el-popper[x-placement^='bottom'] {
    margin-top: 0;
  }
  .el-date-picker__header {
    color: #fff;
    .el-picker-panel__icon-btn {
      color: white;
    }
    .el-date-picker__header-label {
      color: white;
    }
  }
  .el-picker-panel__content table tr {
    th,
    td {
      .cell {
        color: white;
      }
      &.disabled .cell {
        color: #c0c4cc;
      }
    }
  }
  .popper__arrow {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
@function px2vh($value) {
  @return $value/1080 * 100vh;
}
.blue-border {
  font-weight: 400;
  color: #fefefe;
  border: 1px solid #0c80d8;
  background: rgba(4, 27, 89, 0.5);
  border-radius: px2vh(6);
  text-align: center;
  box-shadow: inset 0px 0px 15px 0px rgb(2 90 215 / 66%);
  font-size: px2vh(24);
}

.screen-date-picker {
  .datepickerclass {
    width: px2vh(180);
    font-size: px2vh(24);
    outline: none;
  }
  ::v-deep .el-input__inner {
    @extend .blue-border;
    padding-right: 15px;
    &::placeholder {
      color: #fefefe;
    }
  }
}
</style>

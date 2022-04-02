<template>
  <el-select
    :value="value"
    :multiple="multiple"
    placeholder="请选择"
    @change="handleChange"
    :popper-append-to-body="false"
    :value-key="valueKey"
    :class="['selectclass', multiple ? 'multiple-select' : '']"
    popper-class="select-dropdown-box"
    :size="size || 'medium'"
    v-bind="$attrs"
  >
    <el-option
      v-for="item in options"
      :key="item[valueKey] ? item[valueKey] : item"
      :label="item[labelKey] ? item[labelKey] : item"
      :value="returnSelectItem ? item : item[valueKey] ? item[valueKey] : item"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "ScreenSelector",
  props: {
    size: {
      type: String,
    },
    value: [String, Object, Array],
    multiple: {
      type: Boolean,
      default: false,
    },
    returnSelectItem: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    labelKey: {
      type: String,
      default: "label",
    },
    valueKey: {
      type: String,
      default: "value",
    },
  },
  methods: {
    handleChange(value) {
      this.$emit("input", value);
      this.$emit("onChange", value);
    },
    px2vh(px) {
      return (px / 1080) * 100 + "vh";
    },
  },
  mounted() {},
};
</script>

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

.selectclass {
  width: px2vh(180);
  font-size: px2vh(24);
  outline: none;
  ::v-deep .el-input {
    outline: none;
    .el-input__inner {
      @extend .blue-border;
      &::placeholder {
        color: #fefefe;
      }
    }
  }
  ::v-deep .select-dropdown-box {
    @extend .blue-border;
    margin-top: 0;
    .popper__arrow {
      display: none;
    }
    .el-select-dropdown__item {
      font-weight: 400;
      color: #fefefe;
      font-size: px2vh(24);
      &.hover {
        background-color: transparent;
      }
      &.selected,
      &:hover,
      &.selected.hover {
        background: #0c80d8;
        font-weight: 400;
        color: #fefefe;
        font-size: px2vh(24);
      }
    }
  }
}

.multiple-select {
  ::v-deep .el-tag {
    font-size: px2vh(24);
    background-color: transparent;
    font-weight: 400;
    color: #fefefe;
  }
}
</style>
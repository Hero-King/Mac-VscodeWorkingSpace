<template>
  <ul class="month-select" @click="handleSelect">
    <li v-for="label in labels" :key="label" :class="{ selected: selected == label }">
      {{ label }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TimeSelect',
  data() {
    return {
      selected: this.defaultSelect || this.labels[0],
      returnValue: ''
    }
  },
  methods: {
    handleSelect(e) {
      if (e.target.nodeName === 'LI') {
        this.selected = e.target.innerText
        this.boundReturnValue()
        this.$emit('onChange', this.returnValue)
      }
    },
    formatMonth(monthNumber) {
      const curMoment = this.$moment()
      return curMoment.year() + String(monthNumber).padStart(2, 0)
    },
    boundReturnValue() {
      let start_month = ''
      let end_month = ''
      const curMoment = this.$moment()
      switch (this.selected) {
        case '月':
          start_month = end_month = this.formatMonth(curMoment.month() + 1)
          break
        case '季度':
          end_month = this.formatMonth(curMoment.month() + 1)
          start_month = this.formatMonth((curMoment.quarter() - 1) * 3 + 1)
          break
        case '年':
          end_month = this.formatMonth(curMoment.month() + 1)
          start_month = this.formatMonth(1)
          break
        default:
          break
      }
      if (this.type == 'monthselect') {
        this.returnValue = { ...this.value, start_month, end_month }
      } else {
        this.returnValue = this.selected
      }
      this.$emit('input', this.returnValue)
    }
  },
  props: {
    value: {},
    defaultSelect: {
      type: String
    },
    labels: {
      type: Array,
      default: ['月', '季度', '年']
    },
    type: {
      type: String,
      default: 'labelselect',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['monthselect', 'labelselect'].indexOf(value) !== -1
      }
    }
  },
  created() {
    this.boundReturnValue()
  }
}
</script>

<style lang="scss" scoped>
@function px2vh($value) {
  @return $value/1080 * 100vh;
}
.month-select {
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: px2vh(24);
  color: #b7ceff;
  opacity: 0.8;
  > li {
    cursor: pointer;
    display: flex;
    height: 100%;
    align-items: center;
    &.selected {
      font-weight: bold;
      opacity: 1;
      color: #ffffff;
      position: relative;
      &::after {
        content: ' ';
        position: absolute;
        bottom: -3px;
        width: 10px;
        height: 10px;
        left: 50%;
        transform: translate(-50%, 50%) rotate(-45deg);
        border: 1px solid #5282db;
        background: #ffffff;
        overflow: hidden;
      }
    }
  }
}
</style>

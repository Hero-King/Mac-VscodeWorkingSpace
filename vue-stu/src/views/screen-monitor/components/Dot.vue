<template>
  <span class="dot" :style="dotStyle"></span>
</template>

<script>
export default {
  name: 'Dot',
  computed: {
    _width() {
      if (typeof this.width === 'number') {
        return this.width + 'px'
      }
      return this.width
    },
    dotStyle() {
      return {
        width: this._width,
        height: this._width,
        backgroundColor: this.color
      }
    }
  },
  props: {
    width: [String, Number],
    color: {
      type: String,
      default: '#000'
    }
  }
}
</script>

<style lang="scss" scoped>
.dot {
  display: inline-block;
  border-radius: 50%;
}
</style>

<template>
  <div>
    <div class="module">
      <h2>Perfect ScrollBar</h2>
      <div
        id="container"
        ref="container"
        class="redBorder"
      >
        <div style="width: 300px; height: 400px">
          112121
          <hr>
          112121
          <hr>
          112121
          <hr>
          112121
          <hr>
          112121
          <hr>
          112121
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
export default {
  components: {
    PerfectScrollbar
  },
  data() {
    return {
      intervalId: null
    }
  },
  mounted() {
    //   container的样式是必须的,主要是: position: relative; overflow: hidden
    const container = this.$refs.container
    const ps = new PerfectScrollbar(container, {
      wheelSpeed: 1,
      wheelPropagation: true,
      minScrollbarLength: 20
    })
    let i = 1
    // ps.update()
    this.intervalId = setInterval(() => {
      i++
      // If you want to scroll to somewhere, just update scrollTop.
      container.scrollTop = 20 * i
      console.log(20 * i, container.clientHeight)
      if (20 * i > container.clientHeight) {
        i = 0
      }
    }, 500)
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  }
}
</script>

<style lang="less" scoped>
.redBorder {
  border: 1px solid red;
}
#container {
  position: relative;
  width: 200px;
  height: 200px;
}
</style>

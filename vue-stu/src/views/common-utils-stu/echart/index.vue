<template>
  <div>
    <h2>echart v-show</h2>
    <EchartDomVShow />
    <graph-test />
    <EchartLayoutStu />
    <echart-tree />
    <EchartResizeStu />
  </div>
</template>
<script>
import EchartDomVShow from './EchartDomVShow.vue'
import GraphTest from './GraphTest.vue'
import EchartLayoutStu from './EchartLayoutStu.vue'
import EchartTree from './EchartTree.vue'
import EchartResizeStu from './EchartResize.vue'
export default {
  name: 'EchartStu',
  components: {
    EchartDomVShow,
    GraphTest,
    EchartLayoutStu,
    EchartTree,
    EchartResizeStu
  }
}
</script>
<style lang=""></style>

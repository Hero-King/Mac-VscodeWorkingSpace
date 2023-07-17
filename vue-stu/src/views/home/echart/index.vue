<template>
  <div>
    <h2>echart v-show</h2>
    <EchartDomVShow></EchartDomVShow>
    <graph-test></graph-test>
    <EchartLayoutStu />
    <echart-tree></echart-tree>
  </div>
</template>
<script>
import EchartDomVShow from './EchartDomVShow.vue'
import GraphTest from './GraphTest.vue'
import EchartLayoutStu from './EchartLayoutStu.vue'
import EchartTree from './EchartTree.vue'
export default {
  name: 'EchartStu',
  components: {
    EchartDomVShow,
    GraphTest,
    EchartLayoutStu,
    EchartTree
  }
}
</script>
<style lang=""></style>

<template>
  <div>
    <h2>echart v-show</h2>
    <EchartDomVShow></EchartDomVShow>
    <graph-test></graph-test>
    <EchartLayoutStu />
  </div>
</template>
<script>
import EchartDomVShow from './EchartDomVShow.vue'
import GraphTest from './GraphTest.vue'
import EchartLayoutStu from './EchartLayoutStu.vue'
export default {
  name: 'EchartStu',
  components: {
    EchartDomVShow,
    GraphTest,
    EchartLayoutStu
  }
}
</script>
<style lang=""></style>

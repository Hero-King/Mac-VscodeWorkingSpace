<template lang="">
  <div>
    <h2>echart v-show</h2>
    <EchartDomVShow></EchartDomVShow>
    <graph-test></graph-test>
  </div>
</template>
<script>
import EchartDomVShow from './EchartDomVShow'
import GraphTest from '@/views/home/echart/GraphTest'
export default {
  name: 'EchartStu',
  components: {
    EchartDomVShow,
    GraphTest
  }
}
</script>
<style lang=""></style>

<template>
  <div>1212</div>
</template>

<script>
export default {
  data() {
    return {
      i: 0
    }
  },
  methods: {
    handleAdd(e) {
      this.i++
      console.log(this.i)
    }
  }
}
</script>

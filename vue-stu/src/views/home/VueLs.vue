<template lang="">
  <div>VueLs</div>
</template>
<script>
export default {
  name: 'VueLs',
  mounted() {
    debugger
    this.$ls.set('foo', 'boo')
    //Set expire for item
    this.$ls.set('foo', 'boo', 60 * 60 * 1000) //expiry 1 hour
    this.$ls.get('foo')
    this.$ls.get('boo', 10) //if not set boo returned default 10

    let callback = (val, oldVal, uri) => {
      console.log('localStorage change', val)
    }

    this.$ls.on('foo', callback) //watch change foo key and triggered callback
    this.$ls.off('foo', callback) //unwatch

    this.$ls.remove('foo')
  }
}
</script>
<style lang=""></style>

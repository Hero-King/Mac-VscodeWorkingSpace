<template lang="">
  <div>
    <div class="module">
      <h2>v-clipboard</h2>
      <el-input type="text" v-model="message" />
      <el-button type="button" v-clipboard:copy="message" v-clipboard:success="onCopy" v-clipboard:error="onError">Copy!</el-button>
    </div>

    <div class="module">
      <input type="text" v-model="message" />
      <button type="button" @click="doCopy">Copy!</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VueClipboard',
  data() {
    return {
      message: 'Copy These Text'
    }
  },
  methods: {
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    },
    doCopy: function () {
      this.$copyText(this.message).then(
        function (e) {
          alert('Copied')
          console.log(e)
        },
        function (e) {
          alert('Can not copy')
          console.log(e)
        }
      )
    }
  }
}
</script>
<style lang=""></style>

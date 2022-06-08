<template>
  <div class="basic-card">
    <slot />
    <div
      v-if="title"
      class="basic-card-title"
    >
      {{ title }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'BasicCard',
  props: {
    width: {
      type: Number,
      default: 800
    },
    title: String
  }
}
</script>
<style lang="scss" scoped>
@function px2vh($value) {
  @return $value/1080 * 100vh;
}

.basic-card {
  padding: px2vh(30);
  padding-bottom: 10px;
  background-image: url('../img/leftLine.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  .basic-card-title {
    position: absolute;
    top: px2vh(15);
    left: px2vh(40);
    width: 50%;
    font-size: px2vh(20);
    font-family: Alibaba PuHuiTi;
    font-weight: 500;
    color: #ffffff;
  }
}
</style>

<template lang="">
  <div>
    <h2>图片列表</h2>
    <ul class="img-list">
      <li class="img-item" v-for="img in list">
        <img v-lazy="img.src" />
      </li>
    </ul>

    <h2>demo</h2>
    <img v-lazy="imgUrl" />
    <div v-lazy:background-image="imgUrl"></div>

    <!-- with customer error and loading -->
    <img v-lazy="imgObj" />
    <div v-lazy:background-image="imgObj"></div>

    <!-- Customer scrollable element -->
    <img v-lazy.container="imgUrl" />
  </div>
</template>
<script>
export default {
  name: 'VueLazyLoadStu',
  data() {
    let imgBaseUrl = 'http://hilongjw.github.io/vue-lazyload/dist/avatar/'
    let list = []
    for (let i = 0; i < 10; i++) {
      list.push({ src: `${imgBaseUrl}test${i}.jpg` })
    }

    return {
      list,
      imgObj: {
        src: 'http://hilongjw.github.io/vue-lazyload/dist/avatar/test18.jpg',
        error: 'http://xx.com/error.png',
        loading: 'http://xx.com/loading-spin.svg'
      },
      imgUrl: 'http://hilongjw.github.io/vue-lazyload/dist/avatar/test18.jpg' // String
    }
  }
}
</script>
<style lang="scss">
.img-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.img-item {
  width: 33%;
  > img {
    width: 100%;
  }
}
</style>

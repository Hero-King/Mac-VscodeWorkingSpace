<template>
  <div style="width: 600px">
    <el-switch
      v-model="autoplay"
      active-text="开"
      inactive-text="关"
      @change="switchPlay"
    ></el-switch>
    <swiper
      :slides-per-view="2"
      :space-between="20"
      @swiper="setControlledSwiper"
      @slideChange="onSlideChange"
      :autoplay="{
        delay: 1000
      }"
      :modules="[Autoplay, Navigation, Pagination]"
      loop
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts" setup name="VueSwiper">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/bundle'
const autoplay = ref(true)
const instance = ref(null)
const setControlledSwiper = (swiper) => {
  console.log(swiper)
  instance.value = swiper
}
const onSlideChange = () => {
  console.log('slide change')
}
const switchPlay = () => {
  if (autoplay.value) {
    instance.value.autoplay.start()
  } else {
    instance.value.autoplay.stop()
  }
}
</script>

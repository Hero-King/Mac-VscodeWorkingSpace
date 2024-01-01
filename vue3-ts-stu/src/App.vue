<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const componentClick = () => {
  alert('Component click')
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- vue3中inheritAttrs 
        如果是false 那么组件中 $attrs 不会绑定到根元素上
        如果是true(默认) 组件的 $attrs 默认会绑定到根元素中, 如果根元素是组件 那么将会透传给组件 如果组件没有根元素(多个组件)
        那么需要手动给某个组件 执行 v-bind=$attrs
      -->
      <HelloWorld msg="You did it!" @click="componentClick" />
      <el-link href="http://www.webgl3d.cn/">threejs中文网</el-link>
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">语法学习</RouterLink>
        <RouterLink to="/ComponentCommunicate">ComponentCommunicate</RouterLink>
        <RouterLink to="/HookStu">HookStu</RouterLink>
        <RouterLink to="/Select">Select</RouterLink>
        <RouterLink to="/Api">Api</RouterLink>
        <RouterLink to="/source/reactive">源码学习-reactive</RouterLink>
        <RouterLink to="/tailwind">tailwind</RouterLink>
        <RouterLink to="/swiper">swiper</RouterLink>
        <RouterLink to="/threejs/QuickStart">Three QuickStart</RouterLink>
        <RouterLink to="/threejs/DrawingLine">Three DrawingLine</RouterLink>
        <RouterLink to="/threejs/RotateGeometry">Three RotateGeometry</RouterLink>
        <RouterLink to="/threejs/OrbitControls">Three OrbitControls</RouterLink>
        <RouterLink to="/threejs/Gsap">Three Gsap</RouterLink>
        <RouterLink to="/threejs/BufferGeometry">Three BufferGeometry</RouterLink>
        <RouterLink to="/threejs/PlaneGeometry">Three PlaneGeometry</RouterLink>
        <RouterLink to="/threejs/color">Three color</RouterLink>
        <RouterLink to="/threejs/MeshBasicMaterial">Three MeshBasicMaterial</RouterLink>
        <RouterLink to="/threejs/MeshStandardMaterial">Three MeshStandardMaterial</RouterLink>
        <RouterLink to="/threejs/MeshLambertMaterial">Three MeshLambertMaterial</RouterLink>
        <RouterLink to="/threejs/Stats">Three Stats</RouterLink>
        <RouterLink to="/threejs/GeometryIndex">Three GeometryIndex</RouterLink>
        <RouterLink to="/threejs/group">Three Group</RouterLink>
        <RouterLink to="/threejs/GroupApi">Three GroupApi</RouterLink>
        <RouterLink to="/threejs/GeometryTranslate">Three GeometryTranslate</RouterLink>
        <RouterLink to="/threejs/Visible">Three Visible</RouterLink>
        <RouterLink to="/threejs/Texture">Three ThreeTexture</RouterLink>
        <RouterLink to="/threejs/CustomUV">Three CustomUV</RouterLink>
        <RouterLink to="/threejs/CircleGeometry">Three CircleGeometry</RouterLink>
        <RouterLink to="/threejs/UvAnimation">Three UvAnimation</RouterLink>
        <RouterLink to="/threejs/GLTFLoader">Three GLTFLoader</RouterLink>
        <RouterLink to="/threejs/MeshPhysicalMaterial">Three MeshPhysicalMaterial</RouterLink>
        <RouterLink to="/threejs/ZFighting">Three ZFighting</RouterLink>
        <RouterLink to="/threejs/DrawingCircle">Three DrawingCircle</RouterLink>
        <RouterLink to="/threejs/Curve">Three Curve</RouterLink>
        <RouterLink to="/threejs/TubeGeometry">Three TubeGeometry</RouterLink>
        <RouterLink to="/threejs/LatheGeometry">Three LatheGeometry</RouterLink>
        <RouterLink to="/threejs/ShapeGeometry">Three ShapeGeometry</RouterLink>
        <RouterLink to="/threejs/ExtrudeGeometry">Three ExtrudeGeometry</RouterLink>
        <RouterLink to="/threejs/EdgesGeometry">Three EdgesGeometry</RouterLink>
        <RouterLink to="/threejs/PointsMaterial">Three PointsMaterial</RouterLink>
        <RouterLink to="/threejs/DemoSnow">Three ThreeDemoSnow</RouterLink>
        <RouterLink to="/threejs/RayCaster">Three RayCaster</RouterLink>
        <RouterLink to="/threejs/DemoBall">Three DemoBall</RouterLink>
        <RouterLink to="/threejs/FullScroll">Three FullScroll</RouterLink>
        <RouterLink to="/threejs/Cannon">Three Cannon</RouterLink>
        <RouterLink to="/threejs/Shader">Three Shader</RouterLink>
        <RouterLink to="/threejs/DemoFlyLight">Three DemoFlyLight</RouterLink>
        <RouterLink to="/threejs/OrthographicCamera">Three OrthographicCamera</RouterLink>
        <RouterLink to="/threejs/sprite">Three sprite</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  max-height: 100vh;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  max-height: 80vh;
  margin-top: 2rem;
  overflow: clip auto;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    place-items: flex-start;
  }

  nav {
    margin-top: 1rem;
    margin-left: -1rem;
    padding: 1rem 0;
    font-size: 1rem;
    text-align: left;
  }
}
</style>

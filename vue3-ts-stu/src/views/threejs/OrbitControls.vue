<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeOrbitControls" setup>
import { Scene, WebGLRenderer, Color, PerspectiveCamera, AxesHelper, Clock } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// threejs + ts
const domRef = ref<HTMLElement>()
let camera:  PerspectiveCamera,
  controls:  OrbitControls,
  scene:  Scene,
  renderer:  WebGLRenderer,
  clock:  Clock

onMounted(() => {
  init()
})

const init = () => {
  const dom = domRef.value
  if (!dom) return

  scene = new Scene()
  scene.background = new Color(0xcccccc)

  renderer = new WebGLRenderer()
  renderer.setSize(dom.clientWidth, dom.clientHeight)
  dom.appendChild(renderer.domElement)

  camera = new PerspectiveCamera(60, dom.clientWidth / dom.clientWidth, 1, 500)
  camera.position.set(10, 10, 10)

  const axesHelper = new AxesHelper(5)
  axesHelper.setColors('red', 'green', 'blue')
  scene.add(axesHelper)

  // controls Orbit: 道；眼眶；势力范围；生活常规 盘旋；绕道运行
  controls = new OrbitControls(camera, renderer.domElement)
  // 设置控制器阻尼，让控制器更有真实效果,必须在动画循环里调用.update()。
  controls.enableDamping = true
  controls.autoRotate = false

  clock = new Clock()
  animate()
}

const animate = () => {
  requestAnimationFrame(animate)
  //   controls.update() // only required if controls.enableDamping = true, or if controls.autoRotate = true
  render()
}

const render = () => {
  renderer.render(scene, camera)
}
</script>

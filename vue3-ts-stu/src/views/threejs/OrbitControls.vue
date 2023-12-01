<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeOrbitControls" setup>
import { Scene, WebGLRenderer, Color, PerspectiveCamera, AxesHelper } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// threejs + ts
const domRef = ref<HTMLElement>()
let camera: InstanceType<typeof PerspectiveCamera>,
  controls: InstanceType<typeof OrbitControls>,
  scene: InstanceType<typeof Scene>,
  renderer: InstanceType<typeof WebGLRenderer>

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

  // controls
  controls = new OrbitControls(camera, renderer.domElement)
  controls.autoRotate = false
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

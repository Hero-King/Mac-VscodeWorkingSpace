<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeOrbitControls" setup>
import { Scene, WebGLRenderer, Color, PerspectiveCamera, AxesHelper, Clock, Vector3 } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// 轨道控制器 用于监听 renderer.domElement 元素的左击/右击/拖动事件 以更新摄像机的位置
// 想更新摄像机的朝向 需要调整controls.target值, 执行controls.update()通知摄像机更新,  不能使用camera.lookAt

const domRef = ref<HTMLElement>()
let camera: PerspectiveCamera,
  controls: OrbitControls,
  scene: Scene,
  renderer: WebGLRenderer,
  clock: Clock

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

  const useRequestAnimationFrame = false
  if (useRequestAnimationFrame) {
    animate() // 使用requestAnimationFrame 控制渲染
  } else {
    render()

    // 当摄像机被组件改变时触发。
    controls.addEventListener('change', () => {
      render()
    })

    // setTimeout(() => {
    //   camera.position.set(-20, 20, 20)
    //   // camera.lookAt(0.0, 20.0, 40.0)  // OrbitControls与lookAt不能一起使用??? 需要使用 controls.target
    //   controls.target = new Vector3(0, 20, 20)
    //   controls.update()
    // }, 2000)
  }
}

const animate = () => {
  requestAnimationFrame(animate)
  controls.update() // only required if controls.enableDamping = true, or if controls.autoRotate = true
  render()
}

const render = () => {
  renderer.render(scene, camera)
}
</script>

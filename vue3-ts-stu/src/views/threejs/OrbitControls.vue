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

  camera = new PerspectiveCamera(60, dom.clientWidth / dom.clientHeight, 1, 500)
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

  testCameraUp(camera)
}

const animate = () => {
  requestAnimationFrame(animate)
  controls.update() // only required if controls.enableDamping = true, or if controls.autoRotate = true
  render()
}

const render = () => {
  renderer.render(scene, camera)
}

/**
 *
 * .up是相机对象的上方向属性，当你改变.up属性时候，就好比你生活中拍照时候，扭转你的相机姿态角度进行拍照，这时候你的照片也会跟着相机姿态旋转。
 * @param camera
 */
const testCameraUp = (camera: THREE.PerspectiveCamera) => {
  console.log('.up默认值', camera.up)
  // 你可以看到模型相比原来上下颠倒  y坐标轴朝下
  // camera.up.set(0, -1, 0)
  //渲染效果：红色x轴向上
  // camera.up.set(1, 0, 0)
  camera.lookAt(0, 0, 0) //执行lookAt重新计算相机姿态
  controls.update()
}
</script>

<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeQuickStartStu" setup>
import * as THREE from 'three'

const domRef = ref<HTMLElement>()

onMounted(() => {
  renderThree()
})

const renderThree = () => {
  const dom = domRef.value
  if (!dom) return

  const scene = new THREE.Scene()
  //   视野角度（FOV）;长宽比（aspect ratio） ;近截面（near）和远截面（far）
  const camera = new THREE.PerspectiveCamera(75, dom.clientWidth / dom.clientHeight, 0.1, 1000)

  // 渲染器, 如果客户端不支持webgl, 可以使用threejs提供的低级渲染器
  const renderer = new THREE.WebGLRenderer()
  //  设置渲染器的尺寸 对性能比较敏感的应用程序来说，你可以使用setSize传入一个较小的值，
  renderer.setSize(dom.clientWidth, dom.clientHeight)
  dom.appendChild(renderer.domElement)

  // 一个BoxGeometry（立方体）对象
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  // 对于这个立方体，我们需要给它一个材质，来让它有颜色。
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  //   Mesh（网格）网格包含一个几何体以及作用在此几何体上的材质，
  const cube = new THREE.Mesh(geometry, material)
  //   将网格对象放入到我们的场景中，并让它在场景中自由移动。
  scene.add(cube)

  // 添加坐标系辅助线 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.
  const axesHelper = new THREE.AxesHelper(5)
  axesHelper.setColors('red', 'green', 'blue')
  scene.add(axesHelper)

  // console.log(camera.position) // 摄像机默认位置为[0,0,0]
  camera.position.setX(8).setY(2).setZ(5)
  camera.lookAt(0,0,0)

  //  渲染场景 使用requestAnimationFrame 动起来
  function animate() {
    requestAnimationFrame(animate)

    // 立方体动起来
    cube.rotation.x += 0.01
    // cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }
  animate()
}
</script>

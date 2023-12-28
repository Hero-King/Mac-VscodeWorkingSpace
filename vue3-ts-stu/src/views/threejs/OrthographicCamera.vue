<template>
  <div ref="domRef"></div>
</template>
<script setup lang="ts" name="ThreeOrthographicCamera">
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const domRef = ref<HTMLElement>()

onMounted(() => {
  renderThree()
})

const renderThree = () => {
  const dom = domRef.value!
  const width = dom.clientWidth
  const height = dom.clientHeight

  const scene = new THREE.Scene()
  const k = width / height //canvas画布宽高比
  const s = 200 //控制left, right, top, bottom范围大小
  const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 8000)
  //   const camera = new THREE.OrthographicCamera(
  //     width / -2,
  //     width / 2,
  //     height / 2,
  //     height / -2,
  //     1,
  //     1000
  //   )
  scene.add(camera)

  // 渲染器, 如果客户端不支持webgl, 可以使用threejs提供的低级渲染器
  const renderer = new THREE.WebGLRenderer()
  //  设置渲染器的尺寸 对性能比较敏感的应用程序来说，你可以使用setSize传入一个较小的值，
  renderer.setSize(dom.clientWidth, dom.clientHeight)
  dom.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  scene.add(new THREE.AxesHelper(100))
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide })
  const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide })
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 200), material)
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), material2)
  scene.add(plane, mesh)

  camera.position.z = 50
  //   camera.position.z = 0.1 // 看不到

  //  渲染场景 使用requestAnimationFrame 动起来
  function animate() {
    requestAnimationFrame(animate)

    renderer.render(scene, camera)
  }
  animate()
}
</script>
<style lang=""></style>

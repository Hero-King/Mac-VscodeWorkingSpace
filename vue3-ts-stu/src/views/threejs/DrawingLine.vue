<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeDrawingLine" setup>
import * as THREE from 'three'

const domRef = ref<HTMLElement>()

onMounted(() => {
  renderThree()
})

const renderThree = () => {
  const dom = domRef.value
  if (!dom) return

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(dom.clientWidth, dom.clientHeight)
  dom.appendChild(renderer.domElement)

  const camera = new THREE.PerspectiveCamera(45, dom.clientWidth / dom.clientHeight, 1, 500)
  camera.position.set(0, 0, 100)
  camera.lookAt(0, 0, 0)

  const scene = new THREE.Scene()

  // 定义材质
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff })
  const points = []
  points.push(new THREE.Vector3(-10, 0, 0))
  points.push(new THREE.Vector3(0, 10, 0))
  points.push(new THREE.Vector3(10, 0, 0))

  // 线是画在每一对连续的顶点之间的，而不是在第一个顶点和最后一个顶点之间绘制线条（线条并未闭合）
  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  const line = new THREE.Line(geometry, material)

  scene.add(line)
  renderer.render(scene, camera)
}
</script>

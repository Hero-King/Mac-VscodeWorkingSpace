<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeBufferGeometry" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef)

onMounted(() => {
  scene.value.remove(cube.value)

  // 创建几何体
  const geometry = new THREE.BufferGeometry()
  // 两个三角形组成的矩形
  // const vertices = new Float32Array([
  //   -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0
  // ])
  // geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

  // 由(-1,-1,1) (1,-1,1) (1,1,1)三个顶点组成的三角形
  // const vertices = new Float32Array([-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0])
  // geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

  // 两个三角形
  const vertices = new Float32Array([-1, -1, 1, 1, -1, 1, 1, 2, -1, 1, 2, 1, 1, 2, -1, -1, 0, -1])
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

  console.log(geometry)
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, material)
  scene.value.add(mesh)
})
</script>

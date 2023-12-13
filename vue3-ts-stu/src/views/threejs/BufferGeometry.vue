<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeBufferGeometry" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef)

onMounted(() => {
  // 创建几何体
  const geometry = new THREE.BufferGeometry()
  const vertices = new Float32Array([
    -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0
  ])

  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, material)
  console.log(mesh, scene)
  scene.add(mesh)
})
</script>

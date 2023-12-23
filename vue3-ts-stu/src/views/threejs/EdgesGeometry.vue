<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeEdgesGeometry" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import { Mesh } from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// 模型边界线EdgesGeometry 可以给模型设置一个模型边界线。

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null

  const box = new THREE.BoxGeometry(10, 10, 10)
  box.translate(20, -20, -20)
  const material = new THREE.MeshBasicMaterial({
    color: 0x004444,
    transparent: true,
    opacity: 0.5
  })
  scene.value.add(new Mesh(box, material))

  const geometry = new THREE.EdgesGeometry(box)
  scene.value.add(
    new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({ color: 0xffff00 }))
  )
})
</script>

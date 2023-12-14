<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeColor" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import { BufferAttribute, BufferGeometry, Color, Mesh, MeshBasicMaterial } from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef)

onMounted(() => {
  scene.value.remove(cube.value)

  for (let index = 0; index < 50; index++) {
    const geometry = new BufferGeometry()
    const vertices = new Float32Array(9)
    for (let j = 0; j < 9; j++) {
      vertices[j] = Math.random() * 10 - 5
    }
    geometry.setAttribute('position', new BufferAttribute(vertices, 3))
    const material = new MeshBasicMaterial({
      // Color: https://threejs.org/docs/index.html?q=col#api/zh/math/Color 支持16进制数值0xff0000; RGB string: "rgb(255, 0, 0)" ; color name String: 'red' ; Separate RGB values between 0 and 1: ( 1, 0, 0 )
      color: new Color(Math.random(), Math.random(), Math.random()),
      opacity: 0.5,
      transparent: true
    })
    scene.value.add(new Mesh(geometry, material))
  }
})
</script>

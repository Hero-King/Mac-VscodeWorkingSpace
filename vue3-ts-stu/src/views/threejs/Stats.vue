<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeStats" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
const domRef = ref()

//创建stats对象
const stats = new Stats()
document.body.appendChild(stats.dom)
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, undefined, function () {
  stats.update()
})

onMounted(() => {
  // scene.value.remove(cube.value)

  // 随机创建大量的模型,测试渲染性能
  const num = 1000 //控制长方体模型数量
  for (let i = 0; i < num; i++) {
    const geometry = new THREE.BoxGeometry(5, 5, 5)
    const material = new THREE.MeshLambertMaterial({
      color: 0x00ffff
    })
    const mesh = new THREE.Mesh(geometry, material)
    // 随机生成长方体xyz坐标
    const x = (Math.random() - 0.5) * 200
    const y = (Math.random() - 0.5) * 200
    const z = (Math.random() - 0.5) * 200
    mesh.position.set(x, y, z)
    scene.value.add(mesh) // 模型对象插入场景中
  }
})
</script>

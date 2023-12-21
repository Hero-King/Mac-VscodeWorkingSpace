<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeGeometryIndex" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// demo: 观察内置几何体的顶点位置数据和顶点索引 uv坐标

onMounted(() => {
  scene.value.remove(cube.value)

  // 创建5*5的平面
  const geometry = new THREE.PlaneGeometry(5, 1)
  //   const geometry = new THREE.PlaneGeometry(5, 1, 2, 1)
  //   const geometry = new THREE.BoxGeometry(5, 1, 1)
  //   const geometry = new THREE.SphereGeometry(2)
  // 创建带纹理的材质
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    wireframe: true // 显示线条
  })
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, material)
  scene.value.add(mesh)

  //   geometry.scale(2, 2, 2) // 放大2倍
  geometry.translate(5, 0, 0)
  //   geometry.center() // 几何体居中

  //   查看几何体顶点数据和索引数据
  console.log('geometry.attributes.position', geometry.attributes.position)
  console.log('geometry.index', geometry.index)
  console.log('uv', geometry.attributes.uv) // 查看uv坐标 顶点UV坐标的作用是从纹理贴图上提取像素映射到网格模型Mesh的几何体表面上。
  // 顶点UV坐标geometry.attributes.uv和顶点位置坐标geometry.attributes.position是一一对应的，UV顶点坐标你可以根据需要在0~1之间任意设置，具体怎么设置，要看你想把图片的哪部分映射到Mesh的几何体表面上。
})
</script>

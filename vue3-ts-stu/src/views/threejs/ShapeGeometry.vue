<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeShapeGeometry" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// 轮廓填充ShapeGeometry 已知一个多边形的外轮廓顶点坐标，想通过这些外轮廓坐标生成一个多边形几何体平面

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null

  // 一组二维向量表示一个多边形轮廓坐标 注意顺序问题，随意选择一个点作为起点都行，然后按照顺时针或逆时针依次写下点的坐标。
  const pointsArr = [
    new THREE.Vector2(-50, -50),
    new THREE.Vector2(-60, 0),
    new THREE.Vector2(0, 50),
    new THREE.Vector2(60, 0),
    new THREE.Vector2(50, -50)
  ]

  // Shape表示一个平面多边形轮廓,参数是二维向量构成的数组pointsArr
  const shape = new THREE.Shape(pointsArr)

  // 把五边形轮廓Shape作为ShapeGeometry的参数，形成一个多边形平面几何体。
  const geometry = new THREE.ShapeGeometry(shape)

  // ShapeGeometry形成一个多边形平面几何体,本质上就是根据轮廓坐标计算出一系列三角形面填充多边形
  scene.value.add(
    new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ color: 0x00ffff, side: 2, wireframe: false })
    )
  )
})
</script>

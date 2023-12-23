<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeLatheGeometry" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// 旋转成型LatheGeometry 利用一个2D轮廓，经过旋转变换生成一个3D的几何体曲面。

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null

  // Vector2表示的三个点坐标，三个点构成的轮廓相当于两端直线相连接
  // const pointsArr = [
  //   new THREE.Vector2(20, 30),
  //   new THREE.Vector2(10, 0),
  //   new THREE.Vector2(20, -30)
  // ]

  // 也可以使用样条曲线 生成points
  // 通过三个点定义一个二维样条曲线
  const curve = new THREE.SplineCurve([
    new THREE.Vector2(50, 60),
    new THREE.Vector2(25, 0),
    new THREE.Vector2(50, -60)
  ])
  //曲线上获取点,作为旋转几何体的旋转轮廓
  const pointsArr = curve.getPoints(50)

  // LatheGeometry：pointsArr轮廓绕y轴旋转生成几何体曲面
  // pointsArr：旋转几何体的旋转轮廓形状
  const geometry = new THREE.LatheGeometry(pointsArr, 30)
  scene.value.add(
    new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffff00, side: 2 }))
  )
})
</script>

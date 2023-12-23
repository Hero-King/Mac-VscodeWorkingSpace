<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeTubeGeometry" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import { Vector2, Vector3 } from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// TubeGeometry 管道几何体 基于一个3D曲线路径，生成一个管道几何体。

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.value.add(ambientLight)

  //   const path = renderLineTube()
  const path = renderCurvePathTube()

  // path:路径   40：沿着轨迹细分数  2：管道半径   25：管道截面圆细分数
  const geometry = new THREE.TubeGeometry(path, 40, 2, 25)

  scene.value.add(
    new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x00ffff, side: 2 }))
  )
})

const renderLineTube = () => {
  // 三维样条曲线
  //   const path = new THREE.CatmullRomCurve3([
  //     new THREE.Vector3(-15, 2, 19),
  //     new THREE.Vector3(0, 0, 0),
  //     new THREE.Vector3(10, 10, 10)
  //   ])

  //   直线
  const path = new THREE.LineCurve3(new Vector3(0, 0, 0), new Vector3(20, 20, 20))

  return path
}

const renderCurvePathTube = () => {
  // 创建多段线条的顶点数据
  const p1 = new THREE.Vector3(0, 0, 100)
  const p2 = new THREE.Vector3(0, 0, 30)
  const p3 = new THREE.Vector3(0, 0, 0)
  const p4 = new THREE.Vector3(30, 0, 0)
  const p5 = new THREE.Vector3(100, 0, 0)
  // 1. 3D直线线段
  const line1 = new THREE.LineCurve3(p1, p2)
  // 2. 三维二次贝塞尔曲线
  const curve = new THREE.QuadraticBezierCurve3(p2, p3, p4)
  // 3. 3D直线线段
  const line2 = new THREE.LineCurve3(p4, p5)

  const curvePath = new THREE.CurvePath<THREE.Vector3>()
  // 三条线拼接为一条曲线
  curvePath.curves.push(line1, curve, line2)

  return curvePath
}
</script>

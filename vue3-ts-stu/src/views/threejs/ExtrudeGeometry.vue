<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeExtrudeGeometry" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// 拉伸ExtrudeGeometry 基于一个基础的平面轮廓Shape进行变换，生成一个几何体。

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null

  // Shape表示一个平面多边形轮廓
  const shape = new THREE.Shape([
    // 按照特定顺序，依次书写多边形顶点坐标
    new THREE.Vector2(-4, -4), //多边形起点
    new THREE.Vector2(-4, 4),
    new THREE.Vector2(4, 4),
    new THREE.Vector2(4, -4)
  ])

  // const geometry = genderGeometry(shape)
  const geometry = genderGeometryByCurve(shape)

  // ShapeGeometry形成一个多边形平面几何体,本质上就是根据轮廓坐标计算出一系列三角形面填充多边形
  scene.value.add(
    new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ color: 0x00ffff, side: 2, wireframe: false })
    )
  )
})

/**
 * 轮廓拉伸成型
 * @param shape 轮廓
 */
const genderGeometry = (shape: THREE.Shape) => {
  //拉伸造型
  const geometry = new THREE.ExtrudeGeometry(
    shape, //二维轮廓
    {
      depth: 10, //拉伸长度
      bevelThickness: 5, //倒角尺寸:拉伸方向
      bevelSize: 5, //倒角尺寸:垂直拉伸方向
      bevelSegments: 20 //倒圆角：倒角细分精度，默认3 1就是倒直角
    }
  )
  return geometry
}

/**
 * 扫描成型 沿着曲线拉伸成型
 * @param shape 轮廓
 */
const genderGeometryByCurve = (shape: THREE.Shape) => {
  // 扫描轨迹：创建轮廓的扫描轨迹(3D样条曲线)
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 0, 0),
    new THREE.Vector3(20, 0, 0),
    new THREE.Vector3(30, 10, 20)
    // new THREE.Vector3(-5, 0, 40)
  ])
  const geometry = new THREE.ExtrudeGeometry(
    shape, //二维轮廓
    {
      extrudePath: curve,
      steps: 4 //沿着路径细分精度，越大越光滑
    }
  )
  return geometry
}
</script>

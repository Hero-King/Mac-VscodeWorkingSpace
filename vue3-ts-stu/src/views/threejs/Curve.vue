<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeQuadraticBezierCurve" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import { CubicBezierCurve3, CubicBezierCurve } from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

/**
 * 样条曲线: 给定空间中的几个点, 使用样条曲线API 生成连接这几个点的光滑的曲线点坐标
 * 三维样条曲线CatmullRomCurve3
 * 2D样条曲线SplineCurve
 * 二维二次贝塞尔曲线QuadraticBezierCurve
 * 三维二次贝赛尔曲线QuadraticBezierCurve3
 * 二维三次贝塞尔曲线CubicBezierCurve
 * 三维三次贝赛尔曲线CubicBezierCurve3
 * 3D直线LineCurve3
 * 2D直线LineCurve
 * 组合曲线CurvePath拼接曲线
 */

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null

  // renderQuadraticBezierCurve()
  // renderQuadraticBezierCurve3()
  // renderCubicBezierCurve()
  // renderCubicBezierCurve3()
  curvePathDemo()
})

/**
 * 二维二次贝赛尔曲线展示
 */
const renderQuadraticBezierCurve = () => {
  // p1、p2、p3表示三个点坐标
  // p1、p3是曲线起始点，p2是曲线的控制点
  const p1 = new THREE.Vector2(-8, 0)
  const p2 = new THREE.Vector2(4, 10)
  const p3 = new THREE.Vector2(8, 0)

  // 二维二次贝赛尔曲线
  const curve = new THREE.QuadraticBezierCurve(p1, p2, p3)

  const pointsArr = curve.getPoints(100) //曲线上获取点
  const geometry = new THREE.BufferGeometry()
  geometry.setFromPoints(pointsArr) //读取坐标数据赋值给几何体顶点
  const material = new THREE.LineBasicMaterial({ color: 0x00fffff })
  const line = new THREE.Line(geometry, material)
  scene.value.add(line)

  const pointGeometry = new THREE.BufferGeometry()
  pointGeometry.setFromPoints([p1, p2, p3])
  scene.value.add(
    new THREE.Points(pointGeometry, new THREE.PointsMaterial({ color: 0xffff00, size: 0.5 }))
  )

  // 观察贝塞尔曲线规则: 贝塞尔曲线经过p1、p3两个点，但是不经过p2点，贝塞尔曲线与直线p12和p23相切。
  // 三个点构成的线条
  const line2 = new THREE.Line(pointGeometry, new THREE.LineBasicMaterial())
  scene.value.add(line2)
}

const render = (
  pointsData: THREE.Vector3[] | THREE.Vector2[],
  type: 'CubicBezierCurve3' | 'CubicBezierCurve' | 'CubicBezierCurve' | 'QuadraticBezierCurve3'
) => {
  // @ts-ignore
  const curve = new THREE[type](...pointsData)
  const geometry = new THREE.BufferGeometry()
  geometry.setFromPoints(curve.getPoints(100))
  scene.value.add(new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x00fffff })))

  // 添加辅助点位 观察线
  const pointGeometry = new THREE.BufferGeometry()
  pointGeometry.setFromPoints(pointsData)
  scene.value.add(
    new THREE.Points(pointGeometry, new THREE.PointsMaterial({ color: 0xffff00, size: 0.5 })),
    new THREE.Line(pointGeometry, new THREE.LineBasicMaterial())
  )
}

/**
 * 三维二次贝赛尔曲线展示
 */
const renderQuadraticBezierCurve3 = () => {
  // p1、p2、p3表示三个点坐标
  const p1 = new THREE.Vector3(-8, 0, 0)
  const p2 = new THREE.Vector3(20, 10, 0)
  const p3 = new THREE.Vector3(8, 0, 10)
  render([p1, p2, p3], 'QuadraticBezierCurve3')
}

/**
 * 二维三次贝塞尔曲线展示
 */
const renderCubicBezierCurve = () => {
  // p1、p2、p3表示三个点坐标
  const p1 = new THREE.Vector2(-8, 0)
  const p2 = new THREE.Vector2(-4, 10)
  const p3 = new THREE.Vector2(4, 6)
  const p4 = new THREE.Vector2(8, 0)
  render([p1, p2, p3, p4], 'CubicBezierCurve')
}

/**
 * 三维二次贝赛尔曲线展示
 */
const renderCubicBezierCurve3 = () => {
  // p1、p2、p3表示三个点坐标
  const p1 = new THREE.Vector3(-8, 0, 0)
  const p2 = new THREE.Vector3(0, 10, 0)
  const p3 = new THREE.Vector3(8, 0, 0)
  const p4 = new THREE.Vector3(10, 0, 8)
  render([p1, p2, p3, p4], 'CubicBezierCurve3')
}

/**
 * 直线和圆弧线拼接: 使用CurvePath.curves
 * 组合曲线的坐标顺序和线条组合顺序不能随意写，总的方向，就是先确定整个曲线的起点，然后沿着一个方向依次绘制不同曲线，确保不同曲线首尾相接。
 */
const curvePathDemo = () => {
  const R = 10 //圆弧半径
  const H = 15 //直线部分高度
  // 直线1
  const line1 = new THREE.LineCurve(new THREE.Vector2(R, H), new THREE.Vector2(R, 0))
  // 圆弧
  const arc = new THREE.ArcCurve(0, 0, R, 0, Math.PI, true)
  // 直线2
  const line2 = new THREE.LineCurve(new THREE.Vector2(-R, 0), new THREE.Vector2(-R, H))

  // CurvePath创建一个组合曲线对象
  const curvePath = new THREE.CurvePath<THREE.Vector2>()
  //line1, arc, line2拼接出来一个U型轮廓曲线，注意顺序
  curvePath.curves.push(line1, arc, line2)

  const pointGeometry = new THREE.BufferGeometry()

  // 取点方式
  // pointGeometry.setFromPoints(curvePath.getPoints(16))
  pointGeometry.setFromPoints(curvePath.getSpacedPoints(16))

  // 使用点渲染还是线渲染
  // scene.value.add(new THREE.Line(pointGeometry, new THREE.LineBasicMaterial({ color: 0xffff00 })))
  scene.value.add(new THREE.Points(pointGeometry, new THREE.PointsMaterial({ color: 0xffff00 })))
}
</script>

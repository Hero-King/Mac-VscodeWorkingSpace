<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeDrawingCircle" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// demo: 画一个圆形

const drawCircleByBufferGeometry = () => {
  const geometry = new THREE.BufferGeometry() //创建一个几何体对象
  const R = 10 //圆弧半径
  const N = 50 //分段数量
  const sp = (2 * Math.PI) / N //两个相邻点间隔弧度
  // 批量生成圆弧上的顶点数据
  const arr = []
  for (let i = 0; i < N; i++) {
    const angle = sp * i //当前点弧度
    // 以坐标原点为中心，在XOY平面上生成圆弧上的顶点数据
    const x = R * Math.cos(angle)
    const y = R * Math.sin(angle)
    arr.push(x, y, 0)
  }
  //类型数组创建顶点数据
  const vertices = new Float32Array(arr)
  // 创建属性缓冲区对象
  //3个为一组，表示一个顶点的xyz坐标
  const attribue = new THREE.BufferAttribute(vertices, 3)
  // 设置几何体attributes属性的位置属性
  geometry.attributes.position = attribue

  // 线材质
  const material = new THREE.LineBasicMaterial({
    color: 0xff0000 //线条颜色
  })
  // 创建线模型对象   构造函数：Line、LineLoop、LineSegments
  // const line = new THREE.Line(geometry, material);
  const line = new THREE.LineLoop(geometry, material) //线条模型对象
  scene.value.add(line)
}

const drawCircleByBufferGeometrySetFromPoints = () => {
  const geometry = new THREE.BufferGeometry() //创建一个几何体对象
  const R = 10 //圆弧半径
  const N = 50 //分段数量
  const sp = (2 * Math.PI) / N //两个相邻点间隔弧度
  // 批量生成圆弧上的顶点数据
  const arr = []
  for (let i = 0; i < N + 1; i++) {
    const angle = sp * i //当前点弧度
    // 以坐标原点为中心，在XOY平面上生成圆弧上的顶点数据
    const x = R * Math.cos(angle)
    const y = R * Math.sin(angle)
    arr.push(new THREE.Vector2(x, y))
  }
  geometry.setFromPoints(arr)
  const material = new THREE.LineBasicMaterial({ color: 0xff0000 })
  scene.value.add(new THREE.Line(geometry, material))
}

/**
 * 使用Curve 曲线
 * threejs提供了很多常用的曲线或直线API，可以直接使用 这些API曲线都有一个共同的父类Curve
 * 通过.getPoints()可以从曲线上获取顶点数据 参数: 细分数  细分数越高返回的顶点数量越多，自然轮廓越接近于曲线形状
 * 通过.getSpacedPoints()是按照曲线长度等间距返回顶点数据，.getPoints()获取点的方式并不是按照曲线等间距的方式，而是会考虑曲线斜率变化，斜率变化快的位置返回的顶点更密集
 */
const drawCircle = () => {
  // 参数1和2表示椭圆中心坐标  参数3和4表示x和y方向半径
  const arc = new THREE.EllipseCurve(0, 0, 10, 5)
  //getPoints是基类Curve的方法，平面曲线会返回一个vector2对象作为元素组成的数组
  const pointsArr = arc.getPoints(50) //分段数50，返回51个顶点
  console.log('曲线上获取坐标', pointsArr)
  // 把数组pointsArr里面的坐标数据提取出来，赋值给geometry.attributes.position属性
  const geometry = new THREE.BufferGeometry()
  geometry.setFromPoints(pointsArr)
  console.log('geometry.attributes', geometry.attributes)

  const material = new THREE.PointsMaterial({ color: 0xffff00, size: 0.5 })
  scene.value.add(new THREE.Points(geometry, material))
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff })
  const line = new THREE.Line(geometry, lineMaterial)
  line.position.z = 5
  scene.value.add(line)
}

onMounted(() => {
  scene.value.remove(cube.value)
  // drawCircleByBufferGeometry()
  // drawCircleByBufferGeometrySetFromPoints()
  drawCircle()
})
</script>

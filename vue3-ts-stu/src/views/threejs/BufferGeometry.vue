<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeBufferGeometry" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef)

// demo: 几何体顶点位置数据, 顶点索引 点/线/面模型

onMounted(() => {
  scene.value.remove(cube.value)

  // 创建几何体
  const geometry = new THREE.BufferGeometry()
  // 两个三角形组成的矩形
  // const vertices = new Float32Array([
  //   -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0
  // ])
  // geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

  // 我们发现矩形中有重复的点坐标, 如果是复杂的图形, 那么重复坐标会很多 ==> 解决方案: 使用顶点索引geometry.index = new Uint16Array([])
  // 数组中的内容是顶点坐标对应的索引值 使用方式如下
  // 定义顶点位置数据 3个数字一组
  const vertices = new Float32Array([
    -1,
    -1,
    1, // 顶点1
    1,
    -1,
    1, // 顶点2
    1,
    1,
    1, // 顶点3
    -1,
    1,
    1 // 顶点4
  ])
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  // Uint16Array类型数组创建顶点索引数据
  const indexes = new Uint16Array([
    // 下面索引值对应顶点位置数据中的顶点坐标
    0, 1, 2, 0, 2, 3
  ])
  geometry.index = new THREE.BufferAttribute(indexes, 1) //1个为一组

  // 由(-1,-1,1) (1,-1,1) (1,1,1)三个顶点组成的三角形
  // const vertices = new Float32Array([-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0])
  // geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

  // 两个三角形
  // const vertices = new Float32Array([-1, -1, 1, 1, -1, 1, 1, 2, -1, 1, 2, 1, 1, 2, -1, -1, 0, -1])
  // geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

  console.log(geometry)

  // renderMesh(geometry)
  // renderPoint(geometry)
  // renderLine(geometry)
  positionBySetFromPoints()
})

const renderMesh = (geometry: THREE.BufferGeometry) => {
  // 网格材质 如果改用其他受光照影响的材质,因为没有light会是黑的,解决也简单,需要设置BufferGeometry的顶点法线geometry.attributes.normal
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide,
    wireframe: true // 是否展示几何体的线框,默认值为false（即渲染为平面多边形）。
  })
  // 用网格模型mesh渲染自定义的几何体bufferGeometry
  const mesh = new THREE.Mesh(geometry, material)
  scene.value.add(mesh)
}

const renderPoint = (geometry: THREE.BufferGeometry) => {
  // 点材质
  const material = new THREE.PointsMaterial({
    color: 0xffff00,
    size: 1
  })
  // 点模型
  const points = new THREE.Points(geometry, material)
  scene.value.add(points)
}

const renderLine = (geometry: THREE.BufferGeometry) => {
  // 线模型
  const material = new THREE.LineBasicMaterial({
    color: 0xffff00
  })
  // const line = new THREE.Line(geometry, material) // 从第一个点开始到最后一个点，依次连成线。
  // const line = new THREE.LineLoop(geometry, material) // 闭合线条 终点和起点连接到一起
  const line = new THREE.LineSegments(geometry, material) // 非连续的线条 位置坐标两两一组成线
  scene.value.add(line)
}

const positionBySetFromPoints = () => {
  const geometry = new THREE.BufferGeometry()
  const points = [
    // 三维向量Vector3表示的坐标值
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 10, 0),
    new THREE.Vector3(0, 10, 10),
    new THREE.Vector3(0, 0, 10)
  ]
  geometry.setFromPoints(points)
  const material = new THREE.LineBasicMaterial({ color: 0xffff00 })
  const line = new THREE.LineLoop(geometry, material)
  line.position.y = 2
  scene.value.add(line)
}
</script>

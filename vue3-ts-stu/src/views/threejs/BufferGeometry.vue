<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeBufferGeometry" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef)

// demo: 几何体顶点位置数据, 顶点索引 点/线/面模型

// 顶点位置数据geometry.attributes.position
// 顶点法向量数据geometry.attributes.normal
// 顶点UV数据geometry.attributes.uv
// 顶点颜色数据geometry.attributes.color

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
  geometry.index = new THREE.BufferAttribute(indexes, 1) // indexs 中每一个元素表示一个点

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
  // positionBySetFromPoints()
  attributesColor(geometry)
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

const attributesColor = (geometry: THREE.BufferGeometry) => {
  console.log(geometry.attributes.color) // undefined

  const colors = new Float32Array([
    1,
    0,
    0, //顶点1颜色
    0,
    0,
    1, //顶点2颜色
    0,
    1,
    0, //顶点3颜色
    0,
    1,
    1
  ])
  // 设置几何体attributes属性的颜色color属性
  //3个为一组,表示一个顶点的颜色数据RGB
  geometry.attributes.color = new THREE.BufferAttribute(colors, 3)

  // 点渲染模式 需要设置vertexColors true  geometry的不同点被你设置为了不同颜色
  const material = new THREE.PointsMaterial({
    // color: 0x333333,//使用顶点颜色数据，color属性可以不用设置
    vertexColors: true, //默认false，设置为true表示使用顶点颜色渲染
    size: 1 //点对象像素尺寸
  })
  const points = new THREE.Points(geometry, material)
  scene.value.add(points)

  // 使用线模型Line渲染，你可以看到直线的颜色是渐变的

  const lineMaterial = new THREE.LineBasicMaterial({
    vertexColors: true //使用顶点颜色渲染
  })
  const line = new THREE.LineLoop(geometry, lineMaterial)
  scene.value.add(line)

  // / 使用体模型渲染，你可以看到面的颜色是渐变的
  const meshMaterial = new THREE.MeshBasicMaterial({
    // color: 0x333333,//使用顶点颜色数据，color属性可以不用设置
    vertexColors: true, //默认false，设置为true表示使用顶点颜色渲染
    side: THREE.DoubleSide
  })
  const meshgeometry = geometry.clone().translate(4, 0, 0)
  scene.value.add(new THREE.Mesh(meshgeometry, meshMaterial))
}
</script>

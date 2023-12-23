<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeColor" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import { BufferAttribute, BufferGeometry, Color, Mesh, MeshBasicMaterial } from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef)

onMounted(() => {
  scene.value.remove(cube.value)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.value.add(ambientLight)

  // randomColorDemo()
  // lerpColor()
  renderMaintain()
})

const randomColorDemo = () => {
  for (let index = 0; index < 50; index++) {
    const geometry = new BufferGeometry()
    const vertices = new Float32Array(9)
    for (let j = 0; j < 9; j++) {
      vertices[j] = Math.random() * 10 - 5
    }
    geometry.setAttribute('position', new BufferAttribute(vertices, 3))
    const material = new MeshBasicMaterial({
      // Color: https://threejs.org/docs/index.html?q=col#api/zh/math/Color 支持16进制数值0xff0000; RGB string: "rgb(255, 0, 0)" ; color name String: 'red' ; Separate RGB values between 0 and 1: ( 1, 0, 0 )
      color: new Color(Math.random(), Math.random(), Math.random()),
      opacity: 0.5,
      transparent: true
    })
    scene.value.add(new Mesh(geometry, material))
  }
}

const lerpColor = () => {
  const c1 = new THREE.Color(0xff0000) //红色
  const c2 = new THREE.Color(0x0000ff) //蓝色
  const c = new THREE.Color()

  // .lerpColors(Color1,Color2, percent) percent 可以控制Color1和Color2两种颜色混合的百分比，rgb每个参数对应的计算公式 Color1对应1-percent，Color2对应percent
  c.lerpColors(c1, c2, 0) // 红色
  c.lerpColors(c1, c2, 1) // 蓝色
  c.lerpColors(c1, c2, 0.5) // {isColor: true, r: 0.5, g: 0, b: 0.5}
  c.lerpColors(c1, c2, 0.2) // {isColor: true, r: 0.8, g: 0, b: 0.2}
  c.lerpColors(new THREE.Color(1, 1, 0.8), new THREE.Color(0.2, 0.6, 0.4), 0.5) // {isColor: true, r: 0.6, g: 0.8, b: 0.6}
  console.log('颜色插值结果 c', c)

  const c11 = new THREE.Color(0xff0000) //红色
  const c12 = new THREE.Color(0x0000ff) //蓝色
  c11.lerp(c12, 0.5) // {isColor: true, r: 0.5, g: 0, b: 0.5}
  console.log('颜色插值结果', c11)
}

/**
 * 渲染一个圆锥, 并且根据高度设置颜色
 */
const renderMaintain = () => {
  const height = 12
  const curve = new THREE.SplineCurve([
    new THREE.Vector2(10, 0),
    new THREE.Vector2(7, 10),
    new THREE.Vector2(0, height)
  ])
  const pointsArr = curve.getSpacedPoints(50)
  const geometry = new THREE.LatheGeometry(pointsArr)

  const { position } = geometry.attributes

  const c1 = new THREE.Color(0x0000ff) //山谷颜色
  const c2 = new THREE.Color(0xff0000) //山顶颜色

  const colorArr = []
  for (let i = 0; i < position.count; i++) {
    const y = position.getY(i)
    const percent = y / height
    const c = c1.clone().lerp(c2, percent)
    colorArr.push(c.r, c.g, c.b)
  }
  const colors = new Float32Array(colorArr)
  geometry.attributes.color = new THREE.BufferAttribute(colors, 3)
  const material = new THREE.MeshLambertMaterial({ vertexColors: true })
  const cylinder = new THREE.Mesh(geometry, material)

  scene.value.add(cylinder)
  // scene.value.add(new THREE.Points(geometry, new THREE.PointsMaterial()))
}
</script>

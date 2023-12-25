<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeDemoSnow" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import pointImg1 from '@/assets/particles/1.png'
import pointImgxh from '@/assets/particles/xh.png'
import { BufferAttribute, BufferGeometry, Mesh, Points, PointsMaterial, TextureLoader } from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube, clock } = useThreeInit(domRef, {
  enableDamping: false
})

// demo: 雪花场景

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null
  camera.value.position.set(0, 0, 45)
  camera.value.far = 30
  camera.value.updateProjectionMatrix()
  controls.value.update()

  const points = createPoints(pointImg1, 1.5)
  const points2 = createPoints(pointImgxh, 1)
  const points3 = createPoints(pointImgxh, 2)
  scene.value.add(points, points2, points3)

  const animate = (time?: DOMHighResTimeStamp) => {
    requestAnimationFrame(animate)
    points.rotation.x += 0.002
    points2.rotation.x += 0.001
    points2.rotation.y += 0.001
    points3.rotation.x += 0.005
  }

  animate()
})

const createPoints = (url: string, size = 0.5) => {
  const geometry = new BufferGeometry()
  const count = 500

  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100
    colors[i] = Math.random()
  }
  geometry.setAttribute('position', new BufferAttribute(positions, 3))
  geometry.setAttribute('color', new BufferAttribute(colors, 3))

  //   加载纹理
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load(url)

  const pointMaterial = new PointsMaterial({
    color: 0xffff00,
    size,
    map: texture,
    alphaMap: texture,
    transparent: true,
    depthWrite: false,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    vertexColors: true //使用顶点颜色
  })

  const points = new Points(geometry, pointMaterial)

  return points
}
</script>

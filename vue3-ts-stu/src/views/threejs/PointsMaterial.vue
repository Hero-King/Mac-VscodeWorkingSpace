<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreePointsMaterial" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
// import pointImg from '@/assets/particles/1.png'
// import pointImg from '@/assets/particles/zs.png'
import pointImg from '@/assets/particles/zs2.png'
import { BufferAttribute, BufferGeometry, Mesh, Points, PointsMaterial, TextureLoader } from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// demo: 使用材质和点模型打造星河
// 素材: kenney.nl ; 爱给网 ; iconfont

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null

  const geometry = new BufferGeometry()
  const count = 5000

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
  const texture = textureLoader.load(pointImg)

  const pointMaterial = new PointsMaterial({
    color: 0xffff00,
    size: 0.5,
    map: texture,
    alphaMap: texture,
    transparent: true,
    depthWrite: false,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    vertexColors: true //使用顶点颜色
  })

  const points = new Points(geometry, pointMaterial)

  scene.value.add(points)
})
</script>

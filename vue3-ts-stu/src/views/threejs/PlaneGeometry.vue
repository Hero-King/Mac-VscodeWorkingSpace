<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreePlaneGeometry" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import colorTextureImg from '@/assets/color.jpg'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef)

onMounted(() => {
  scene.value.remove(cube.value)

  const textureLoader = new TextureLoader()
  const doorColorTexture = textureLoader.load(colorTextureImg)

  // 设置旋转的原点 纹理的旋转点范围是0~1 默认是(0,0) 即左下角
  // doorColorTexture.center.set(0.5, 0.5);

  // 创建5*5的平面
  const geometry = new THREE.PlaneGeometry(5, 5)
  // 创建带纹理的材质
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    map: doorColorTexture
  })
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.x = 2.5
  camera.value.position.set(8, 0, 5)

  scene.value.add(mesh)
})
</script>

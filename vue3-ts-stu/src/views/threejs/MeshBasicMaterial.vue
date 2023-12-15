<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeMeshBasicMaterial" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import colorTextureImg from '@/assets/color.jpg'
import aplhaTextureImg from '@/assets/alpha.jpg'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef)

onMounted(() => {
  // scene.value.remove(cube.value)

  const textureLoader = new TextureLoader()
  const doorColorTexture = textureLoader.load(colorTextureImg)
  const doorAplhaTexture = textureLoader.load(aplhaTextureImg)

  // 设置旋转的原点 纹理的旋转点范围是0~1 默认是(0,0) 即左下角
  // doorColorTexture.center.set(0.5, 0.5);

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  // 创建带纹理的材质 不受光照影响的材质
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    map: doorColorTexture,
    alphaMap: doorAplhaTexture,
    transparent: true, // 开启半透明
    opacity: 0.5 //透明度设置
  })
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, material)

  scene.value.add(mesh)
})
</script>

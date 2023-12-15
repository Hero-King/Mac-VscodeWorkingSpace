<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="MeshStandardMaterial" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import colorTextureImg from '@/assets/color.jpg'
import aplhaTextureImg from '@/assets/alpha.jpg'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef)

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null

  const textureLoader = new TextureLoader()
  const doorColorTexture = textureLoader.load(colorTextureImg)
  const doorAplhaTexture = textureLoader.load(aplhaTextureImg)

  // 创建5*5的平面
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  // 创建带纹理的材质 受光照影响的材质MeshStandardMaterial MeshLambertMaterial 没有光就是黑的 看不到
  const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00
    // map: doorColorTexture,
    // alphaMap: doorAplhaTexture,
    // transparent: true, // 开启半透明
    // opacity: 0.5 //透明度设置
  })
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, material)

  scene.value.add(mesh)

  // 光源
  const pointLight = new THREE.PointLight(0xffffff, 1.0) // 点光源 -> 灯泡
  pointLight.decay = 0.0 //取消光源衰减, 光源强度不随着距离元二衰减
  // pointLight.position.set(10, 0, 0) // 光源放到x轴10位置, 那只能照到一个面
  pointLight.position.set(5, 15, 10) // 调整光源位置查看效果

  scene.value.add(pointLight)
})
</script>

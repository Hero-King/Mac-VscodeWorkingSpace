<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeMeshBasicMaterial" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import colorTextureImg from '@/assets/door/color.jpg'
import aplhaTextureImg from '@/assets/door/alpha.jpg'
import aoImg from '@/assets/door/ambientOcclusion.jpg'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef)

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null

  const textureLoader = new TextureLoader()
  const doorColorTexture = textureLoader.load(colorTextureImg)
  const doorAplhaTexture = textureLoader.load(aplhaTextureImg)
  const doorAoTexture = textureLoader.load(aoImg)

  // 设置旋转的原点 纹理的旋转点范围是0~1 默认是(0,0) 即左下角
  // doorColorTexture.center.set(0.5, 0.5);

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  // 创建带纹理的材质 不受光照影响的材质
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    map: doorColorTexture,
    alphaMap: doorAplhaTexture, // 设置透明纹理，alpha.jpg中 黑色的部分透明 白色的部分不透明 需要设置transparent true
    aoMap: doorAoTexture, //  AO环境遮挡贴图 需要设置第二组uv坐标 纹理黑色的地方吸收灯光的影响 观察门框的黑色线条
    transparent: true, // 开启半透明
    opacity: 0.8 //透明度设置
  })
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, material)

  // 给geometry添加第二组uv
  geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2))

  scene.value.add(mesh)
})
</script>

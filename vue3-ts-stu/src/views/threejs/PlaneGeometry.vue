<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreePlaneGeometry" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import colorTextureImg from '@/assets/color.jpg'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

onMounted(() => {
  scene.value.remove(cube.value)

  const textureLoader = new TextureLoader()
  const doorColorTexture = textureLoader.load(colorTextureImg)

  // 设置旋转的原点 纹理的旋转点范围是0~1 默认是(0,0) 即左下角
  // doorColorTexture.center.set(0.5, 0.5);

  // 创建5*5的矩形平面
  const geometry = new THREE.PlaneGeometry(5, 5)
  // 创建带纹理的材质, threejs材质默认正面可见，反面不可见 需要设置side属性使得双面可见
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    map: doorColorTexture,
    side: THREE.DoubleSide
  })
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.x = 5
  scene.value.add(mesh)

  camera.value.position.set(8, 0, 10)
  camera.value.lookAt(mesh.position)
})
</script>

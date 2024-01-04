<template>
  <div class="p-5">
    <div ref="domRef" style="height: 50vh"></div>
  </div>
</template>
<script lang="ts" name="ThreeShaderMore" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
// 顶点着色器
import deepVertexShader from './shader/deep/vertex.glsl?raw'
// 片元着色器
import deepFragmentShader from './shader/deep/fragment.glsl?raw'
import renderImg from '@/assets/ca.jpeg'

const domRef = ref()
const { camera, controls, scene, renderer, cube, clock } = useThreeInit(domRef, {
  enableDamping: false
})

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null
  camera.value.position.set(0, 0, 3)
  controls.value.update()

  render()
})

const render = () => {
  // 创建纹理加载器对象
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(renderImg)
  const material = new THREE.ShaderMaterial({
    vertexShader: deepVertexShader,
    fragmentShader: deepFragmentShader,
    side: THREE.DoubleSide,
    uniforms: {
      uTime: {
        value: 0
      },
      uTexture: {
        value: texture
      }
    }
  })
  // 需要多给些顶点坐标
  scene.value.add(new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 64, 64), material))

  const animate = () => {
    material.uniforms.uTime.value = clock.value.getElapsedTime()
    requestAnimationFrame(animate)
  }
  animate()
}
</script>

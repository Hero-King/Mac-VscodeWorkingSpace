<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeTexture" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import earthImg from '@/assets/earth.jpg'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// demo: 纹理贴图

/**
 * 不同的几何体使用纹理达到不同的效果, 主要和几何体的UV坐标有关
 * 材质的颜色贴图属性.map设置后，模型会从纹理贴图上采集像素值，这时候一般来说不需要再设置材质颜色.color。.map贴图之所以称之为颜色贴图就是因为网格模型会获得颜色贴图的颜色值RGB。
 * 颜色贴图map和color属性颜色值会混合。如果没有特殊需要，设置了颜色贴图.map,不用设置color的值，color默认白色0xffffff。
 *
 */

onMounted(() => {
  scene.value.remove(cube.value)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.value.add(ambientLight)

  const geometry = new THREE.PlaneGeometry(20, 10)
  //   const geometry = new THREE.SphereGeometry(10)
  //   const geometry = new THREE.BoxGeometry(10, 10, 10)
  //纹理贴图加载器TextureLoader
  const texLoader = new THREE.TextureLoader()
  // .load()方法加载图像，返回一个纹理对象Texture
  const texture = texLoader.load(earthImg)
  const material = new THREE.MeshLambertMaterial({
    // 设置纹理贴图：Texture对象作为材质map属性的属性值
    map: texture //map表示材质的颜色贴图属性
  })

  const mesh = new THREE.Mesh(geometry, material)
  scene.value.add(mesh)

  console.log('查看几何体的UV坐标', geometry.attributes.uv)
  console.log('查看几何体的顶点坐标', geometry.attributes.position)
})
</script>

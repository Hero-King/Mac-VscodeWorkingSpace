<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeCircleGeometry" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import earthImg from '@/assets/earth.jpg'
import { BufferGeometry } from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// demo: 圆形平面设置纹理贴图
onMounted(() => {
  scene.value.remove(cube.value)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.value.add(ambientLight)

  //纹理贴图加载器TextureLoader
  const texLoader = new THREE.TextureLoader()
  // .load()方法加载图像，返回一个纹理对象Texture
  const texture = texLoader.load(earthImg)
  const material = new THREE.MeshLambertMaterial({
    side: THREE.DoubleSide,
    // 设置纹理贴图：Texture对象作为材质map属性的属性值
    map: texture //map表示材质的颜色贴图属性
  })

  const geometry = new THREE.CircleGeometry(10)

  // 创建几何体
  console.log('查看几何体的UV坐标', geometry.attributes.uv) // undefined
  console.log('查看几何体的顶点坐标', geometry.attributes.position)

  const mesh = new THREE.Mesh(geometry, material)
  scene.value.add(mesh)
})
</script>

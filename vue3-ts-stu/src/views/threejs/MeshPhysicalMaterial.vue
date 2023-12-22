<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreePhysicalMaterial" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
const domRef = ref()

const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, undefined)

onMounted(() => {
  scene.value.remove(cube.value)

  const geometry = new THREE.SphereGeometry(2)
  const material = new THREE.MeshPhysicalMaterial({
    clearcoat: 0.5, // 清漆层 用来模拟物体表面一层透明图层，就好比你在物体表面刷了一层透明清漆，喷了点水。.clearcoat的范围0到1，默认0。
    clearcoatRoughness: 0.1, // 清漆层粗糙度.clearcoatRoughness属性表示物体表面透明涂层.clearcoat对应的的粗糙度
    transmission: 0, // 透光率 范围从0.0到1.0。默认值是0.0。
    ior: 1.5 // 为非金属材质所设置的折射率，范围由1.0到2.333
  })
  const mesh = new THREE.Mesh(geometry, material)
  scene.value.add(mesh)

  // 加载hdr环境图
  const rgbeLoader = new RGBELoader()
  rgbeLoader.loadAsync('/hdr/002.hdr').then((texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping
    scene.value.background = texture
    scene.value.environment = texture
  })
})
</script>

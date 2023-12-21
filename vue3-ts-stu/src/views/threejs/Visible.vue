<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeVisible" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// demo: Object3D.visible隐藏物体/分组 材质隐藏会隐藏所有使用该材质的物体

onMounted(() => {
  scene.value.remove(cube.value)
  //   设置相机位置和朝向
  camera.value.position.set(5, 5, 20)
  controls.value.target.set(5, 0, 0)
  controls.value.update()

  //长方体的几何中心默认与本地坐标原点重合
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  // 创建带纹理的材质
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00
  })
  // 根据几何体和材质创建物体
  const mesh1 = new THREE.Mesh(geometry, material)
  const mesh2 = new THREE.Mesh(geometry, material)

  mesh2.position.x = 10
  const group = new THREE.Group()
  group.add(mesh1, mesh2)

  //   mesh1.visible = false
  //   group.visible = false // 分组中的物体全都隐藏

  //   material.visible = false // 使用material材质的物体全都隐藏

  mesh1.material = material.clone()
  material.visible = false

  scene.value.add(group)
})
</script>

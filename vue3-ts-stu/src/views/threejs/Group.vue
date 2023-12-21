<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeGroup" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// threejs 层级模型; 世界坐标

onMounted(() => {
  scene.value.remove(cube.value)

  // 创建5*5的平面
  const geometry = new THREE.PlaneGeometry(5, 5)
  // 创建带纹理的材质
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide
  })
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, material)

  //   层级关系
  const group = new THREE.Group() // group对象和Object3D对象基本类似
  group.add(mesh)
  group.name = 'meshGroup'
  scene.value.add(group)

  group.position.x = 5 // group调整 影响子模型

  const queryGroup = scene.value.getObjectByName('meshGroup')
  console.log(queryGroup == group) // true

  //   世界坐标和本地坐标
  //   任何一个模型的本地坐标(局部坐标)就是模型的.position属性。
  // 一个模型的世界坐标，说的是，模型自身.position和所有父对象.position累加的坐标 mesh.getWorldPosition(Vector3)读取一个模型的世界坐标，并把读取结果存储到参数Vector3中。
})
</script>

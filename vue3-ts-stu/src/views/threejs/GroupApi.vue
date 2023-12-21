<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeGroupApi" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// 小区楼栋demo

onMounted(() => {
  // 移除cube物体
  scene.value.remove(cube.value)
  camera.value.position.set(-30, 30, 30)

  // 批量创建多个长方体表示高层楼
  const group1 = new THREE.Group() //所有高层楼的父对象
  group1.name = '高层'
  for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(2, 10, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = i * 5 // 网格模型mesh沿着x轴方向阵列
    group1.add(mesh) //添加到组对象group1
    mesh.name = i + 1 + '号楼'
    // console.log('mesh.name',mesh.name);
  }
  group1.position.y = 10
  group1.add(new THREE.AxesHelper(10)) // 给子对象添加一个局部坐标系

  const group2 = new THREE.Group()
  group2.name = '洋房'
  // 批量创建多个长方体表示洋房
  for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(2, 5, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = i * 5
    group2.add(mesh) //添加到组对象group2
    mesh.name = i + 6 + '号楼'
  }
  group2.position.z = 10
  group2.position.y = 7.5

  const model = new THREE.Group()
  model.name = '小区房子'
  model.add(group1, group2)
  //   model.position.set(-5, -2, 0)

  scene.value.add(model)

  // 递归遍历model包含所有的模型节点
  model.traverse(function (obj: any) {
    console.log('所有模型节点的名称', obj.name)
    // obj.isMesh：if判断模型对象obj是不是网格模型'Mesh'
    if (obj.isMesh) {
      //判断条件也可以是obj.type === 'Mesh'
      obj.material.color.set(0xffff00)
    }
  })

  // 返回名.name为"4号楼"对应的对象
  const nameNode = scene.value.getObjectByName('4号楼') as THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshBasicMaterial
  >
  nameNode.material.color.set(0xff0000)
})
</script>

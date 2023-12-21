<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeGeometryTranslate" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// demo: 改变模型相对局部坐标原点位置

onMounted(() => {
  scene.value.remove(cube.value)

  //长方体的几何中心默认与本地坐标原点重合
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  // 创建带纹理的材质
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00
  })
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, material)
  mesh.add(new THREE.AxesHelper(4))

  //   平移几何体的顶点坐标,改变几何体自身相对局部坐标原点的位置
  geometry.translate(1, 0, 0)

  console.log(geometry.attributes.position)

  // .rotateY()默认绕几何体中心旋转，经过上面几何体平移变化，你会发现.rotateY()是绕长方体面上一条线旋转
  // mesh.rotateY(Math.PI / 4)
  mesh.translateX(-2)

  scene.value.add(mesh)

  function render() {
    mesh.rotateY(0.01) //旋转动画
    requestAnimationFrame(render)
  }
  render()
})
</script>

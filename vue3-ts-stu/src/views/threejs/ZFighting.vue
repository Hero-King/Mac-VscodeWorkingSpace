<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeZFighting" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import earthImg from '@/assets/earth.jpg'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// demo: 两个重合的矩形平面Mesh，通过浏览器预览，当你旋转三维场景的时候，你会发现模型渲染的时候产生闪烁。解决: 两个矩形Mesh拉开距离

onMounted(() => {
  scene.value.remove(cube.value)

  // 两个矩形平面Mesh重合，产生闪烁
  // 闪烁原因：两个矩形面位置重合，GPU无法分清谁在前谁在后
  const geometry = new THREE.PlaneGeometry(25, 25)
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    side: THREE.DoubleSide
  })
  const mesh = new THREE.Mesh(geometry, material)

  const geometry2 = new THREE.PlaneGeometry(30, 30)
  const material2 = new THREE.MeshBasicMaterial({
    color: 0xff6666,
    side: THREE.DoubleSide
  })
  const mesh2 = new THREE.Mesh(geometry2, material2)

  mesh2.position.z = 0.1 // 留点间距 但是当透视相机距离三维模型较远的时候，两个面也可能出现深度冲突 (透视投影相机的投影规律是远小近大，和人眼观察世界一样，模型距离相机越远，模型渲染的效果越小，两个mesh之间的间距同样也会变小。当两个Mesh和相机距离远到一定程度，两个模型的距离也会无限接近0。)

  //   透视相机问题解决  设置对数深度缓冲区 logarithmicDepthBuffer: true，优化深度冲突问题

  scene.value.add(mesh, mesh2)
})
</script>

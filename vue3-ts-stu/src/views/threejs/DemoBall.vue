<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeDemoBall" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import * as dat from 'dat.gui'
import {
  BufferAttribute,
  BufferGeometry,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
  PointLight,
  Points,
  PointsMaterial,
  SphereGeometry,
  TextureLoader
} from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube, clock } = useThreeInit(domRef, {
  enableDamping: false
})

// demo: 跳动的小球

onMounted(() => {
  scene.value.remove(cube.value)
  camera.value.position.set(0, 0, 8)
  controls.value.target.set(0, 0, 0)
  controls.value.update()
  scene.value.background = null
  // 设置渲染器，允许光源阴影渲染
  renderer.value.shadowMap.enabled = true

  const light = new THREE.AmbientLight(0xffffff, 0.5) // soft white light
  scene.value.add(light)

  //   创建圆球
  const sphere = new Mesh(new SphereGeometry(1, 20, 20), new MeshStandardMaterial())
  //   开启投射阴影
  sphere.castShadow = true
  scene.value.add(sphere)

  //   创建平面
  const plane = new Mesh(new PlaneGeometry(50, 50), new MeshStandardMaterial())
  // 接受投影
  plane.receiveShadow = true
  plane.position.set(0, -1, 0)
  plane.rotation.x = -Math.PI / 2
  scene.value.add(plane)

  //   创建点光源
  const pointLight = new PointLight(0xff0000, 1)
  //   产生阴影
  pointLight.castShadow = true
  //   pointLight.position.set(2, 2, 2)
  // 设置阴影贴图模糊度
  pointLight.shadow.radius = 20
  // 设置阴影贴图的分辨率
  pointLight.shadow.mapSize.set(512, 512)
  pointLight.decay = 0
  scene.value.add(pointLight)

  const gui = new dat.GUI()
  gui.add(pointLight.position, 'x').min(-5).max(5).step(0.1)
  gui.add(pointLight, 'distance').min(0).max(5).step(0.001)
  gui.add(pointLight, 'decay').min(0).max(5).step(0.01)

  //   将点光源添加到小球中
  const ball = new Mesh(
    new THREE.SphereGeometry(0.1, 20, 20),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
  )
  ball.position.set(2, 2, 2)
  ball.add(pointLight)
  scene.value.add(ball)

  const cameraHelper = new THREE.CameraHelper(pointLight.shadow.camera)
  //   scene.value.add(cameraHelper)

  function render() {
    let time = clock.value.getElapsedTime()
    ball.position.x = Math.sin(time) * 3
    ball.position.z = Math.cos(time) * 3
    ball.position.y = 2 + Math.sin(time * 10) / 2
    // controls.update()
    // renderer.value.render(scene, camera)
    //   渲染下一帧的时候就会调用render函数
    requestAnimationFrame(render)
  }

  render()
})
</script>

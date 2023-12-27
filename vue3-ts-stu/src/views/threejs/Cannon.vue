<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeCannon" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import * as Cannon from 'cannon-es'
import {
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Points,
  PointsMaterial,
  TextureLoader
} from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

/**
 * cannon-es 物理引擎
 * 在物理世界中 物体运动的位置数据给到renderer渲染器就可以
 */

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null
  camera.value.position.set(0, 0, 20)
  controls.value.target.set(0, -5, 0)
  controls.value.update()
  renderer.value.shadowMap.enabled = true

  // 创建球体
  const sphereGeometry = new THREE.SphereGeometry(1, 20, 10)
  const material = new MeshStandardMaterial()

  const sphere = new Mesh(sphereGeometry, material)
  sphere.castShadow = true

  scene.value.add(sphere)

  // 创建平面
  const floor = new Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial())
  floor.rotation.x = -Math.PI / 2
  floor.position.setY(-5)
  floor.receiveShadow = true
  scene.value.add(floor)

  // 添加环境光和平行光
  const ambientlight = new THREE.AmbientLight(0xffffff, 0.5)
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.5)
  dirLight.castShadow = true
  scene.value.add(ambientlight, dirLight)

  // 创建物理世界
  const world = new Cannon.World()
  world.gravity.set(0, -9.8, 0) // 设置重力
  const sphereShape = new Cannon.Sphere(1) // 创建物理小球形状
  //设置物体材质
  const sphereWorldMaterial = new Cannon.Material()

  // 创建物理世界的物体
  const sphereBody = new Cannon.Body({
    shape: sphereShape,
    position: new Cannon.Vec3(0, 10, 0),
    //   小球质量
    mass: 1,
    //   物体材质
    material: sphereWorldMaterial
  })

  // 将物体添加至物理世界
  world.addBody(sphereBody)
  // 物理世界创建地面
  const floorShape = new Cannon.Plane()
  const floorBody = new Cannon.Body()
  // 当质量为0的时候，可以使得物体保持不动
  floorBody.mass = 0
  floorBody.addShape(floorShape)
  // 地面位置
  floorBody.position.set(0, -5, 0)
  // 旋转地面的位置
  floorBody.quaternion.setFromAxisAngle(new Cannon.Vec3(1, 0, 0), -Math.PI / 2)
  world.addBody(floorBody)

  // 创建击打声音
  const hitSound = new Audio('/metalHit.mp3')
  // 添加监听碰撞事件
  function HitEvent(e) {
    // 获取碰撞的强度
    //   console.log("hit", e);
    const impactStrength = e.contact.getImpactVelocityAlongNormal()
    console.log(impactStrength)
    if (impactStrength > 5) {
      //   重新从零开始播放
      hitSound.currentTime = 0
      hitSound.play()
    }
  }
  sphereBody.addEventListener('collide', HitEvent)

  // 设置时钟
  const clock = new THREE.Clock()
  function render() {
    //   let time = clock.getElapsedTime();
    let deltaTime = clock.getDelta()
    // 更新物理引擎里世界的物体
    world.step(1 / 60, deltaTime)

    sphere.position.copy(sphereBody.position)

    //   渲染下一帧的时候就会调用render函数
    requestAnimationFrame(render)
  }

  render()
})
</script>

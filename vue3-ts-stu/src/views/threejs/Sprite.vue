<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeSprite" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import pointImg1 from '@/assets/particles/1.png'
const domRef = ref()

/**
 * sprite 精灵模型
 * Sprite形状是矩形，PlaneGeometry创建的网格模型Mesh的形状也是矩形。
Sprite与矩形平面Mesh的区别在于,当你旋转三维场景的时候，如果通过相机控件OrbitControls旋转测试，你可以发现Sprite矩形平面会始终平行于Canvas画布或者说屏幕，而矩形平面Mesh的姿态角度会跟着旋转，不一定平行于canvas画布

 */

const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, undefined)

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null

  //   baseStu()
  texture()
})

// Sprite标注三维场景
const markPosition = (sprite: THREE.Sprite) => {
  const geometry = new THREE.BoxGeometry(2.5, 10, 5)
  geometry.translate(0, 5, 0)
  // mesh顶部中心添加标注，顶部中心坐标是(0,100,0)
  const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xff00ff }))
  //   sprite.scale.set(10, 10, 1)

  sprite.position.set(0, 10 + 1 / 2, 0) //设置位置，要考虑sprite尺寸影响

  scene.value.add(mesh)
}

const texture = () => {
  const texture = new THREE.TextureLoader().load(pointImg1)
  const spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    color: 0xffff00,
    opacity: 0.5
  })
  const sprite = new THREE.Sprite(spriteMaterial)
  //   精灵模型Sprite默认是一个矩形形状，默认长宽都是1，默认在坐标原点位置。
  scene.value.add(sprite)
  markPosition(sprite)
}

const baseStu = () => {
  // 创建精灵材质对象SpriteMaterial
  const spriteMaterial = new THREE.SpriteMaterial({
    color: 0x00ffff, //设置颜色,
    rotation: Math.PI / 4
  })

  // 创建精灵模型对象，不需要几何体geometry参数
  const sprite = new THREE.Sprite(spriteMaterial)
  //   精灵模型Sprite默认是一个矩形形状，默认长宽都是1，默认在坐标原点位置。
  scene.value.add(sprite)

  // 控制精灵大小
  console.log('sprite.scale', sprite.scale)
  sprite.scale.set(10, 5, 1) //只需要设置x、y两个分量就可以
}
</script>

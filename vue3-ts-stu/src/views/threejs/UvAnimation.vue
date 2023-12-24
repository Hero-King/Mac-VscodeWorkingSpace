<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeUvAnimation" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import partImg from '@/assets/part.png'
import { BufferGeometry } from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// demo: 使用UV坐标offset属性做动画
onMounted(() => {
  scene.value.remove(cube.value)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.value.add(ambientLight)

  // 添加一个辅助网格地面
  const gridHelper = new THREE.GridHelper(100, 10, 0x004444, 0x004444)
  scene.value.add(gridHelper)

  //纹理贴图加载器TextureLoader
  const texLoader = new THREE.TextureLoader()
  // .load()方法加载图像，返回一个纹理对象Texture
  const texture = texLoader.load(partImg)
  const material = new THREE.MeshLambertMaterial({
    transparent: true,
    side: THREE.DoubleSide,
    // 设置纹理贴图：Texture对象作为材质map属性的属性值
    map: texture //map表示材质的颜色贴图属性
  })

  const geometry = new THREE.PlaneGeometry(20, 10)

  const mesh = new THREE.Mesh(geometry, material)
  mesh.rotateX(-Math.PI / 2) //平行地面：矩形Mesh默认单面可见，注意旋转-Math.PI / 2
  mesh.position.y = 1

  // texture.offset.x = 0.5 //纹理U方向偏移   实质就是修改几何体的uv坐标
  // 设置.wrapS也就是U方向，纹理映射模式(包裹模式) THREE.ClampToEdgeWrapping: 默认值，将最后一个像素点复制到边缘 MirroredRepeatWrapping 镜像重复， 第二个和第一是镜像对称
  texture.wrapS = THREE.RepeatWrapping //对应offste.x偏移
  texture.repeat.x = 30

  scene.value.add(mesh)

  function render() {
    texture.offset.x += 0.02
    renderer.value.render(scene.value, camera.value)
    requestAnimationFrame(render)
  }
  render()
})
</script>

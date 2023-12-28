<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeCustomUv" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import earthImg from '@/assets/earth.jpg'
import { BufferGeometry } from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

// demo: 自定义UV坐标

onMounted(() => {
  scene.value.remove(cube.value)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.value.add(ambientLight)

  //纹理贴图加载器TextureLoader
  const texLoader = new THREE.TextureLoader()
  // .load()方法加载图像，返回一个纹理对象Texture
  const texture = texLoader.load(earthImg)
  const material = new THREE.MeshLambertMaterial({
    side: THREE.DoubleSide,
    // 设置纹理贴图：Texture对象作为材质map属性的属性值
    map: texture //map表示材质的颜色贴图属性
  })

  // 创建几何体
  const geometry = new THREE.BufferGeometry()
  // 定义顶点位置数据 3个数字一组
  const vertices = new Float32Array([
    -10,
    -10,
    10, // 顶点1
    10,
    -10,
    10, // 顶点2
    10,
    10,
    10, // 顶点3
    -10,
    10,
    10 // 顶点4
  ])
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  // Uint16Array类型数组创建顶点索引数据
  const indexes = new Uint16Array([
    // 下面索引值对应顶点位置数据中的顶点坐标
    0, 1, 2, 0, 2, 3
  ])
  geometry.index = new THREE.BufferAttribute(indexes, 1) // indexs 中每一个元素表示一个点
  console.log('查看几何体的UV坐标', geometry.attributes.uv) // undefined
  console.log('查看几何体的顶点坐标', geometry.attributes.position)

  // 自定义顶点UVgeometry.attributes.uv 和顶点位置坐标geometry.attributes.position是一一对应的  对于PlaneGeometry position的顺序是左上,右上,左下,右下 0,1,1,1,0,0,1,0
  /**纹理坐标0~1之间随意定义*/
  const uvs = new Float32Array([
    0,
    0, //图片左下角
    1,
    0, //图片右下角
    1,
    1, //图片右上角
    0,
    1 //图片左上角
  ])

  // 获取纹理贴图左下角四分之一部分
  // const uvs = new Float32Array([0, 0, 0.5, 0, 0.5, 0.5, 0, 0.5])
  geometry.attributes.uv = new THREE.BufferAttribute(uvs, 2) //2个为一组,表示一个顶点的纹理坐标

  const mesh = new THREE.Mesh(geometry, material)
  scene.value.add(mesh)
})
</script>

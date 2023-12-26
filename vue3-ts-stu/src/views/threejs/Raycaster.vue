<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeRayCaster" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import {
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Mesh,
  MeshBasicMaterial,
  Points,
  PointsMaterial,
  TextureLoader
} from 'three'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null

  //   rayStu()
  rayCaster()
})

/**
 * 鼠标选中效果
 */
const rayCaster = () => {
  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({
    wireframe: true
  })
  const redMaterial = new THREE.MeshBasicMaterial({
    color: '#ff0000'
  })

  // 1000立方体
  type rayMesh = Mesh<BoxGeometry, MeshBasicMaterial>
  let cubeArr: rayMesh[] = []
  for (let i = -5; i < 5; i++) {
    for (let j = -5; j < 5; j++) {
      for (let z = -5; z < 5; z++) {
        const cube = new THREE.Mesh(geometry, material)
        cube.position.set(i, j, z)
        scene.value.add(cube)
        cubeArr.push(cube)
      }
    }
  }

  // 创建投射光线对象
  const raycaster = new THREE.Raycaster()

  // 鼠标的位置对象
  const mouse = new THREE.Vector2()

  // 监听鼠标的位置
  //   window.addEventListener('mousemove', (event) => {
  //     //   console.log(event);
  //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  //     mouse.y = -((event.clientY / window.innerHeight) * 2 - 1)
  //     raycaster.setFromCamera(mouse, camera.value)
  //     let result = raycaster.intersectObjects<rayMesh>(cubeArr)
  //     //   console.log(result);
  //     //   result[0].object.material = redMaterial;
  //     result.forEach((item) => {
  //       item.object.material = redMaterial
  //     })
  //   })

  //   // 监听鼠标的位置
  window.addEventListener('click', (event) => {
    //   console.log(event);
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -((event.clientY / window.innerHeight) * 2 - 1)
    raycaster.setFromCamera(mouse, camera.value)
    let result = raycaster.intersectObjects<rayMesh>(cubeArr)
    //   console.log(result);
    //   result[0].object.material = redMaterial;
    result.forEach((item) => {
      item.object.material = redMaterial
    })
  })
}

/**
 * 射线Ray 学习 射线由一个原点向一个确定的方向发射 包括射线起点和方向(必须是单位向量)
 * Ray( origin : Vector3, direction : Vector3 )
 */
const rayStu = () => {
  // 创建射线对象Ray
  const ray = new THREE.Ray()
  // 设置射线起点
  ray.origin = new THREE.Vector3(1, 0, 3) // ray.origin.set(1, 0, 3)
  // 表示射线沿着x轴正方向
  ray.direction = new THREE.Vector3(1, 0, 0)
  // 表示射线沿着x轴负方向
  //   ray.direction = new THREE.Vector3(-1, 0, 0)

  //   注意.direction的值需要是单位向量，不是的话可以执行.normalize()归一化或者说标准化。
  //   ray.direction = new THREE.Vector3(5,0,0).normalize();

  //   计算一个射线和一个三角形在3D空间中是否交叉
  // 三角形三个点坐标
  const p1 = new THREE.Vector3(100, 25, 0)
  const p2 = new THREE.Vector3(100, -25, 25)
  const p3 = new THREE.Vector3(100, -25, -25)
  const point = new THREE.Vector3() //用来记录射线和三角形的交叉点
  // `.intersectTriangle()`计算射线和三角形是否相交叉，相交返回交点，不相交返回null
  const result = ray.intersectTriangle(p1, p2, p3, false, point) // 参数4表示是否进行背面剔除: 三角形背面对着射线，视为交叉无效
  console.log('交叉点坐标', point)
  console.log('查看是否相交', result)

  //   const r = ray.intersectTriangle(p1, p2, p3, true, point)
  //   console.log('查看是否相交', r)
}
</script>

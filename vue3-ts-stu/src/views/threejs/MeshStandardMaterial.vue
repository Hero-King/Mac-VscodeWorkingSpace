<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="MeshStandardMaterial" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import { AmbientLight, TextureLoader, Vector3 } from 'three'
import colorTextureImg from '@/assets/color.jpg'
import aplhaTextureImg from '@/assets/alpha.jpg'
const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef)

/**
 * PBR材质: MeshStandardMaterial/MeshPhysicalMaterial
 * 金属度metalness  表示材质像金属的程度, 非金属材料,如木材或石材,使用0.0,金属使用1.0。
 * 粗糙度roughness  表示模型表面的光滑或者说粗糙程度，越光滑镜面反射能力越强，越粗糙，表面镜面反射能力越弱，更多地表现为漫反射。 0.0表示平滑的镜面反射,1.0表示完全漫反射,默认0.5
 * envMap  环境贴图，就是一个模型周围的环境的图像, 为了能够保证物理渲染准确; 使用立方体纹理加载器CubeTextureLoader 的.load()方法是加载6张图片，返回一个立方体纹理对象CubeTexture, 赋值给材质的envMap
 * 环境贴图反射率.envMapIntensity  主要用来设置模型表面反射周围环境贴图的能力，或者说环境贴图对模型表面的影响能力
 * 场景环境属性.environment 网格模型可以通过材质的.envMap属性设置环境贴图, 场景中所有的物体都需要环境贴图的话就需要递归遍历调整材质envMap; 可以使用scene.environment = textureCube 实现 
 * 如果renderer.outputEncoding=THREE.sRGBEncoding;环境贴图需要保持一致 textureCube.encoding = THREE.sRGBEncoding;   

 */

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null

  const textureLoader = new TextureLoader()
  const doorColorTexture = textureLoader.load(colorTextureImg)
  const doorAplhaTexture = textureLoader.load(aplhaTextureImg)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  // 创建带纹理的材质 受光照影响的材质MeshStandardMaterial 没有光就是黑的 看不到 基于物理的光照模型
  // MeshPhysicalMaterial 基于MeshStandardMaterial 的功能拓展
  const material = new THREE.MeshStandardMaterial({
    color: 0xffff00,
    map: doorColorTexture,
    // alphaMap: doorAplhaTexture,
    transparent: true // 开启半透明
    // opacity: 0.5 //透明度设置
  })
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, material)

  scene.value.add(mesh)

  // 光源 点光源没有朝向target
  const pointLight = new THREE.PointLight(0xffffff, 1.0) // 点光源 -> 灯泡
  pointLight.decay = 0.0 //取消光源衰减, 光源强度不随着距离元二衰减
  //   pointLight.position.set(10, 0, 0) // 光源放到x轴10位置, 那只能照到一个面
  pointLight.position.set(5, 15, 10) // 调整光源位置查看效果
  // scene.value.add(pointLight)

  //   光源辅助器
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 1) // 参数: 点光源对象, helper范围大小
  scene.value.add(pointLightHelper)

  //   环境光 均匀的照亮场景中的所有物体。
  const ambientLight = new AmbientLight(0xffffff, 0.4)
  scene.value.add(ambientLight)

  // 平行光是沿着特定方向发射的光, 模拟太阳光的效果
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  //   设置光源的方向：通过光源position属性和目标指向对象的position属性计算
  directionalLight.position.set(-10, 10, 10)
  directionalLight.target = mesh
  scene.value.add(directionalLight)

  const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1, 0xffff00)
  scene.value.add(directionalLightHelper)
})
</script>

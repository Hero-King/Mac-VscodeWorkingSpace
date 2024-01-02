<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeDemoFlyLight" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import * as dat from 'dat.gui'
import {
  BufferAttribute,
  BufferGeometry,
  Mesh,
  MeshStandardMaterial,
  Points,
  PointsMaterial,
  TextureLoader
} from 'three'
import gsap from 'gsap'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import vertexShader from './shader/flylight/vertex.glsl?raw'
import fragmentShader from './shader/flylight/fragment.glsl?raw'
const domRef = ref()
const { camera, controls, scene, renderer, cube, clock } = useThreeInit(domRef, {
  enableDamping: false
})
const gui = new dat.GUI()

// demo: 孔明灯

onMounted(() => {
  scene.value.remove(cube.value)
  scene.value.background = null
  scene.value.remove(scene.value.getObjectByName('axesHelper')!)
  camera.value.position.set(0, 0, 10)
  camera.value.updateProjectionMatrix()
  controls.value.update()

  //   加载hdr
  const rgbLoader = new RGBELoader()
  rgbLoader.loadAsync('/hdr/2k.hdr').then((texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping
    scene.value.environment = texture
    scene.value.background = texture
  })

  // 创建着色器材质;
  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {},
    side: THREE.DoubleSide
    //   transparent: true,
  })

  const gltfLoader = new GLTFLoader()
  type MaterialMesh = Mesh<BufferGeometry, MeshStandardMaterial>
  gltfLoader.load('/flyLight.glb', (gltf) => {
    console.log(gltf.scene, 'gltf.scene', gltf.scene.getObjectByName('灯体'))
    const bodyMesh: MaterialMesh = gltf.scene.getObjectByName('灯体') as MaterialMesh
    const bottomMesh: MaterialMesh = gltf.scene.getObjectByName('灯托') as MaterialMesh
    getBox(bottomMesh)
    // @ts-ignore
    bodyMesh.material = shaderMaterial

    for (let i = 0; i < 100; i++) {
      const flyLight = gltf.scene.clone()
      let x = (Math.random() - 0.5) * 300
      let z = (Math.random() - 0.5) * 300
      let y = Math.random() * 60 + 25
      flyLight.position.set(x, y, z)
      gsap.to(flyLight.rotation, {
        y: 2 * Math.PI,
        duration: 10 + Math.random() * 30,
        repeat: -1
      })
      gsap.to(flyLight.position, {
        x: '+=' + Math.random() * 5,
        y: '+=' + Math.random() * 20,
        yoyo: true,
        duration: 5 + Math.random() * 10,
        repeat: -1
      })
      scene.value.add(flyLight)
    }
  })
  renderer.value.outputColorSpace = THREE.SRGBColorSpace
  // 设置色调映射
  renderer.value.toneMapping = THREE.ACESFilmicToneMapping
  //   renderer.value.toneMapping = THREE.LinearToneMapping
  // 色调映射的曝光级别
  renderer.value.toneMappingExposure = 0.2

  addGui()
})
const addGui = () => {
  const renderGui = gui.addFolder('渲染器设置')
  renderGui.add(renderer.value, 'toneMappingExposure', 0, 1).name('色调映射的曝光级别')
  renderGui.add(renderer.value, 'toneMapping', [
    THREE.NoToneMapping,
    THREE.LinearToneMapping,
    THREE.ReinhardToneMapping,
    THREE.CineonToneMapping,
    THREE.ACESFilmicToneMapping,
    THREE.CustomToneMapping
  ])
}

/**
 * 获取模型包围盒
 * 包围盒Box3表示三维长方体包围区域，使用min和max两个属性来描述该包围区域，Box3的min和max属性值都是三维向量对象Vector3
 * 描述一个长方体包围盒需要通过xyz坐标来表示，X范围[Xmin,Xmax],Y范围[Ymin,Ymax],Z范围[Zmin,Zmax],.min属性值是Vector3(Xmin, Ymin, Zmin),.max属性值是Vector3(Xmax, Ymax, Zmax).
 *
 * 注意blender的坐标系 x - 右，y - 里，z - 上
 * threejs坐标系 x - 右，y - 上， z - 外
 * 具体关系为 Threejs -> Blender，是绕X轴 顺时针 90°
 */
const getBox = (mesh: Mesh) => {
  console.log(mesh)

  const box3 = new THREE.Box3()
  box3.expandByObject(mesh)
  console.log('查看包围盒', box3)

  const scale = new THREE.Vector3()
  // getSize()计算包围盒尺寸
  // 获得包围盒长宽高尺寸，结果保存在参数三维向量对象scale中
  box3.getSize(scale)
  console.log('模型包围盒尺寸', scale)

  // 计算包围盒中心坐标
  const center = new THREE.Vector3()
  box3.getCenter(center)
  console.log('模型中心坐标', center)
}
</script>

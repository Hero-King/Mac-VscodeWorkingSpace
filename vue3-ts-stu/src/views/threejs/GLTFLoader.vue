<template>
  <div ref="domRef"></div>
</template>
<script lang="ts" name="ThreeGltfLoader" setup>
import {
  Scene,
  WebGLRenderer,
  Color,
  PerspectiveCamera,
  AxesHelper,
  Clock,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  AmbientLight,
  SRGBColorSpace
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
const domRef = ref()

// demo: Gltf模型文件加载

onMounted(() => {
  const dom = domRef.value
  const scene = new Scene()

  scene.background = new Color(0xcccccc)

  const renderer = new WebGLRenderer({
    antialias: true //渲染器锯齿属性
  })
  renderer.setSize(dom.clientWidth, dom.clientHeight)
  dom.appendChild(renderer.domElement)

  const camera = new PerspectiveCamera(60, dom.clientWidth / dom.clientWidth, 1, 500)
  camera.position.set(-15, 15, 15)

  const axesHelper = new AxesHelper(30)
  axesHelper.name = 'axesHelper'
  axesHelper.setColors('red', 'green', 'blue')
  scene.add(axesHelper)

  const controls = new OrbitControls(camera, renderer.domElement)

  const ambientLight = new AmbientLight(0xffffff, 0.8)
  //   scene.add(ambientLight)

  const loader = new GLTFLoader()
  loader.load('/LeePerrySmith.glb', (gltf) => {
    console.log('gltf', gltf)
    scene.add(gltf.scene)
  })

  //   一般为了正常渲染，避免颜色偏差，threejs代码中需要颜色贴图.encoding和渲染器.outputEncoding属性值保持一致 可选值: LinearEncoding/LinearSRGBColorSpace：线性颜色空间 sRGBEncoding/SRGBColorSpace：sRGB颜色空间
  renderer.outputColorSpace = SRGBColorSpace // 解决加载gltf格式模型颜色偏差问题, 设置为SRGB颜色空间
  // 和webgl渲染器renderer.outputEncoding一致
  //   texture.encoding = SRGBColorSpace

  const animate = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  animate()
})
</script>

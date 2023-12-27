<template>
  <Teleport to="body">
    <div id="wrap">
      <div class="text-wrap page0">
        <h1 class="title-h1">Ray鼠标拾取</h1>
        <h3 class="title-h3">Raycaster实现3D交互</h3>
      </div>
      <div class="text-wrap page1">
        <h1 class="title-h1">炫酷三角形</h1>
        <h3 class="title-h3">BufferGeometry</h3>
      </div>
      <div class="text-wrap page2">
        <h1 class="title-h1">跳动小球</h1>
        <h3 class="title-h3">PointLight + SphereGeometry</h3>
      </div>
      <div ref="domRef" class="canvas-wrap"></div>
      <el-button class="fixed top-0 z-20" type="primary" @click="router.push('/')"
        >返回首页</el-button
      >
    </div>
  </Teleport>
</template>
<script lang="ts" name="ThreeFullScroll" setup>
import gsap from 'gsap'
import {
  AmbientLight,
  AxesHelper,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Clock,
  Color,
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  PointLightHelper,
  Points,
  PointsMaterial,
  Raycaster,
  Scene,
  SphereGeometry,
  TextureLoader,
  Vector2,
  WebGLRenderer
} from 'three'
import { useEventListener, useFullscreen, useMouse } from '@vueuse/core'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const router = useRouter()

const domRef = ref<HTMLElement>()

// demo: 炫酷首页

onMounted(async () => {
  const { scene, renderer, camera } = initThree()

  // 创建raycaster
  const raycaster = new Raycaster()
  const size = 2
  const rayGeometry = new BoxGeometry(size, size, size)
  const rayMaterial = new MeshBasicMaterial({
    wireframe: true
  })
  // 生成立方体
  type rayMesh = Mesh<BoxGeometry, MeshBasicMaterial>
  let cubeArr: rayMesh[] = []
  const rayGroup = new Group()
  const count = 5
  const moveCount = Math.floor(count / 2)
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      for (let z = 0; z < count; z++) {
        const cube = new Mesh(rayGeometry, rayMaterial.clone())
        cube.position.set((i - moveCount) * size, (j - moveCount) * size, (z - moveCount) * size)
        rayGroup.add(cube)
        cubeArr.push(cube)
      }
    }
  }
  const mouse = new Vector2()

  // 监听鼠标的位置
  useEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -((event.clientY / window.innerHeight) * 2 - 1)
  })
  useEventListener(domRef, 'click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -((event.clientY / window.innerHeight) * 2 - 1)
    raycaster.setFromCamera(mouse, camera)
    let result = raycaster.intersectObjects<rayMesh>(cubeArr)
    result.forEach((item) => {
      const material = item.object.material
      material.color.set(0xff0000)
      material.wireframe = false
    })
  })
  scene.add(rayGroup)

  // 创建多彩三角平面
  const colorGroup = new Group()
  for (let i = 0; i < 50; i++) {
    const geometry = new BufferGeometry()
    let color = new Color(Math.random(), Math.random(), Math.random())
    const material = new MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.4,
      side: DoubleSide
    })
    const position = new Float32Array(9)
    for (let j = 0; j < 9; j++) {
      position[j] = Math.random() * 10 - 5
    }
    geometry.setAttribute('position', new BufferAttribute(position, 3))
    const colorMesh = new Mesh(geometry, material)
    colorGroup.add(colorMesh)
  }
  colorGroup.position.set(0, -30, 0)
  scene.add(colorGroup)

  // 运动的点光源
  const sphereGroup = new Group()
  sphereGroup.position.setY(-60)
  const sphere = new Mesh(
    new SphereGeometry(1, 20, 20),
    new MeshStandardMaterial({ side: DoubleSide })
  )
  sphere.castShadow = true

  const planeGeometry = new PlaneGeometry(20, 20)
  const planeMaterial = new MeshStandardMaterial({ side: DoubleSide })
  const plane = new Mesh(planeGeometry, planeMaterial)
  plane.receiveShadow = true
  plane.rotateX(-Math.PI / 2)
  plane.position.setY(-1)

  // 光源
  const ambientlight = new AmbientLight(0xffffff, 0.5) // soft white light

  const pointLight = new PointLight(0xff0000, 3)
  pointLight.castShadow = true
  pointLight.shadow.radius = 20
  // 设置阴影贴图的分辨率
  pointLight.shadow.mapSize.set(512, 512)
  pointLight.decay = 0

  const smallBall = new Mesh(new SphereGeometry(0.1), new MeshBasicMaterial({ color: 0xff0000 }))
  smallBall.add(pointLight)
  smallBall.position.set(2, 2, 2)

  sphereGroup.add(smallBall, sphere, plane, ambientlight)
  scene.add(sphereGroup)

  // 给小球添加动画
  gsap.to(smallBall.position, {
    x: -3,
    duration: 6,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  })
  gsap.to(smallBall.position, {
    y: 0,
    duration: 0.5,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  })

  const clock = new Clock()
  function animate() {
    const time = clock.getElapsedTime()
    let deltaTime = clock.getDelta()
    const y = (window.scrollY / window.innerHeight) * 30
    camera.position.setY(-y)

    // 镜头根据鼠标左右摇晃
    // camera.position.x = mouse.x * 4
    // 惯性摇动
    camera.position.x += (mouse.x * 10 - camera.position.x) * deltaTime * 5

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()

  let curPage = 0
  const pageConfig: { [index: number]: GroupAnimate } = {
    0: new GroupAnimate(rayGroup, true),
    1: new GroupAnimate(colorGroup),
    2: new GroupAnimate(sphereGroup, false)
  }
  useEventListener('scroll', () => {
    const newPage = Math.round(window.scrollY / window.innerHeight)
    // 页面滚动到某一页时候 让他旋转180度
    if (newPage !== curPage) {
      curPage = newPage
      const curGroupAnimate = pageConfig[curPage]
      curGroupAnimate.quickRotate()

      gsap.fromTo(
        `.page${curPage} h1`,
        {
          x: -300
        },
        {
          x: 0,
          rotation: '+=360',
          duration: 1
        }
      )
    }
  })
})

class GroupAnimate {
  group: Group
  rotate: boolean
  animate: gsap.core.Tween | null = null
  scrollAnimate: gsap.core.Tween | null = null
  constructor(group: Group, rotate: boolean = true) {
    this.group = group
    this.rotate = rotate
    this.initAnimate()
  }
  initAnimate() {
    if (!this.rotate) {
      return
    }
    this.animate = gsap.to(this.group.rotation, {
      x: '+=' + Math.PI * 2,
      y: '+=' + Math.PI * 2,
      duration: 10,
      repeat: -1,
      ease: 'power2.inOut'
    })
  }
  quickRotate() {
    this.animate?.kill()
    if (this.scrollAnimate) {
      return
    }
    this.scrollAnimate = gsap.to(this.group.rotation, {
      x: '+=' + Math.PI * 2,
      y: '+=' + Math.PI * 2,
      duration: 2,
      ease: 'power2.inOut',
      onComplete: () => {
        this.scrollAnimate = null
        this.initAnimate()
      }
    })
  }
}

const initThree = () => {
  const dom = toValue(domRef)!
  const scene = new Scene()
  const renderer = new WebGLRenderer({ alpha: true, antialias: true })
  renderer.shadowMap.enabled = true
  renderer.setSize(dom.clientWidth, dom.clientHeight)
  dom.appendChild(renderer.domElement)
  const camera = new PerspectiveCamera(60, dom.clientWidth / dom.clientHeight, 1, 500)
  camera.position.set(0, 0, 30)

  const axes = new AxesHelper(10)
  scene.add(axes)

  // new OrbitControls(camera, renderer.domElement)

  // resize时调整threejs
  useEventListener('resize', () => {
    //   console.log("画面变化了"); windows改成对应的dom
    // 更新摄像头
    camera.aspect = dom.clientWidth / dom.clientHeight
    //   更新摄像机的投影矩阵
    camera.updateProjectionMatrix()

    //   更新渲染器
    renderer.setSize(dom.clientWidth, dom.clientHeight)
    //   设置渲染器的像素比
    renderer.setPixelRatio(window.devicePixelRatio)
  })

  return { scene, renderer, camera }
}
</script>
<style lang="scss" scoped>
#wrap {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  color: white;
  background-color: rgb(36, 58, 66);
}
.text-wrap {
  height: 100vh;
  text-align: center;
}
.canvas-wrap {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
}
.title-h1 {
  position: relative;
  z-index: 5;
  padding: 20px;
  font-weight: 700;
  font-size: 40px;
}
.title-h3 {
  position: relative;
  z-index: 5;
  font-weight: 500;
  font-size: 20px;
}
</style>

import gsap from 'gsap'
import {
  Scene,
  WebGLRenderer,
  Color,
  PerspectiveCamera,
  AxesHelper,
  Clock,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { MaybeElementRef, useEventListener, useFullscreen } from '@vueuse/core'
/**
 * threejs初始化场景 相机 渲染器
 * @param domRef domref
 */
export const useThreeInit = (
  domRef: MaybeElementRef<HTMLElement>,
  controlsConfig: { autoRotate?: boolean; enableDamping?: boolean } = {
    autoRotate: false,
    enableDamping: true
  },
  animateCallback?: Function
) => {
  let camera = shallowRef<PerspectiveCamera>({} as PerspectiveCamera),
    controls = shallowRef<OrbitControls>({} as OrbitControls),
    scene = shallowRef<Scene>({} as Scene),
    renderer = shallowRef<WebGLRenderer>({} as WebGLRenderer),
    cube = shallowRef<Mesh>({} as Mesh),
    clock = shallowRef<Clock>({} as Clock)

  const { isSupported, isFullscreen, enter, exit, toggle } = useFullscreen(domRef)

  onMounted(() => {
    init()
  })

  const init = () => {
    const dom = toValue(domRef)
    scene.value = new Scene()
    scene.value.background = new Color(0xcccccc)

    renderer.value = new WebGLRenderer({
      antialias: true //渲染器锯齿属性
    })
    renderer.value.setSize(dom.clientWidth, dom.clientHeight)
    dom.appendChild(renderer.value.domElement)

    camera.value = new PerspectiveCamera(60, dom.clientWidth / dom.clientWidth, 1, 500)
    camera.value.position.set(-5, 5, 5)

    const axesHelper = new AxesHelper(5)
    axesHelper.setColors('red', 'green', 'blue')
    scene.value.add(axesHelper)

    // controls Orbit: 道；眼眶；势力范围；生活常规 盘旋；绕道运行
    controls.value = new OrbitControls(camera.value, renderer.value.domElement)
    // 设置控制器阻尼，让控制器更有真实效果,必须在动画循环里调用.update()。
    controls.value.enableDamping = controlsConfig.enableDamping!
    controls.value.autoRotate = controlsConfig.autoRotate!

    clock.value = new Clock()

    // 创建立方体
    const cubeGeometry = new BoxGeometry(1, 1, 1)
    const cubeMaterial = new MeshBasicMaterial({ color: '#2E8B57' })
    cube.value = new Mesh(cubeGeometry, cubeMaterial)
    scene.value.add(cube.value)

    // 动起来方式2
    const animate1 = gsap.to(cube.value.position, {
      x: 5,
      //   设置重复的次数，无限次循环-1
      repeat: -1,
      duration: 3,
      //   往返运动
      yoyo: true,
      onComplete: () => {
        console.log('动画完成')
      },
      onStart: () => {
        console.log('动画开始')
      }
    })

    // 双击停止/开启动画
    useEventListener(domRef, 'dblclick', (e) => {
      e.stopPropagation()
      if (animate1.isActive()) {
        //   暂停
        animate1.pause()
      } else {
        //   恢复
        animate1.resume()
      }
    })

    // resize时调整threejs
    useEventListener('resize', () => {
      //   console.log("画面变化了"); windows改成对应的dom
      // 更新摄像头
      camera.value.aspect = window.innerWidth / window.innerHeight
      //   更新摄像机的投影矩阵
      camera.value.updateProjectionMatrix()

      //   更新渲染器
      renderer.value.setSize(window.innerWidth, window.innerHeight)
      //   设置渲染器的像素比
      renderer.value.setPixelRatio(window.devicePixelRatio)
    })

    // 双击进入全屏
    useEventListener('dblclick', () => {
      if (isSupported) {
        toggle()
      }
    })

    animate()

    console.log('inited')
  }
  const needControlUpdate = controlsConfig.autoRotate || controlsConfig.enableDamping

  const animate = (time?: DOMHighResTimeStamp) => {
    // const spt = clock.value.getDelta() * 1000 //毫秒
    // console.log('两帧渲染时间间隔(毫秒)', spt)
    // console.log('帧率FPS', 1000 / spt)
    animateCallback?.()
    requestAnimationFrame(animate)
    if (needControlUpdate) {
      controls.value.update() // only required if controls.enableDamping = true, or if controls.autoRotate = true
    }
    render()
  }

  const render = () => {
    renderer.value.render(scene.value, camera.value)
  }

  return {
    camera,
    controls,
    scene,
    renderer,
    cube
  }
}

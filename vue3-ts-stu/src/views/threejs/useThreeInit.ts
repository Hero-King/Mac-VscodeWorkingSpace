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
export const useThreeInit = (domRef: MaybeElementRef<HTMLElement>) => {
  let camera: PerspectiveCamera = {} as PerspectiveCamera,
    controls: OrbitControls = {} as OrbitControls,
    scene: Scene = {} as Scene,
    renderer: WebGLRenderer = {} as WebGLRenderer,
    cube: Mesh = {} as Mesh,
    clock: Clock = {} as Clock

  const { isSupported, isFullscreen, enter, exit, toggle } = useFullscreen(domRef)

  onMounted(() => {
    init()
  })

  onUnmounted(() => {
    camera = null!
    controls = null!
    scene = null!
    renderer = null!
    cube = null!
  })

  const init = () => {
    const dom = toValue(domRef)
    scene = new Scene()
    scene.background = new Color(0xcccccc)

    renderer = new WebGLRenderer()
    renderer.setSize(dom.clientWidth, dom.clientHeight)
    dom.appendChild(renderer.domElement)

    camera = new PerspectiveCamera(60, dom.clientWidth / dom.clientWidth, 1, 500)
    camera.position.set(-5, 5, 5)

    const axesHelper = new AxesHelper(5)
    axesHelper.setColors('red', 'green', 'blue')
    scene.add(axesHelper)

    // controls Orbit: 道；眼眶；势力范围；生活常规 盘旋；绕道运行
    controls = new OrbitControls(camera, renderer.domElement)
    // 设置控制器阻尼，让控制器更有真实效果,必须在动画循环里调用.update()。
    controls.enableDamping = true
    controls.autoRotate = false

    // 创建立方体
    const cubeGeometry = new BoxGeometry(1, 1, 1)
    const cubeMaterial = new MeshBasicMaterial({ color: '#2E8B57' })
    cube = new Mesh(cubeGeometry, cubeMaterial)
    scene.add(cube)

    // 动起来方式2
    const animate1 = gsap.to(cube.position, {
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
      camera.aspect = window.innerWidth / window.innerHeight
      //   更新摄像机的投影矩阵
      camera.updateProjectionMatrix()

      //   更新渲染器
      renderer.setSize(window.innerWidth, window.innerHeight)
      //   设置渲染器的像素比
      renderer.setPixelRatio(window.devicePixelRatio)
    })

    // 双击进入全屏
    useEventListener('dblclick', () => {
      if (isSupported) {
        toggle()
      }
    })

    animate()

    console.log("inited");
    
  }

  const animate = (time?) => {
    requestAnimationFrame(animate)
    //   controls.update() // only required if controls.enableDamping = true, or if controls.autoRotate = true
    render()
  }

  const render = () => {
    renderer.render(scene, camera)
  }

  return {
    camera,
    controls,
    scene,
    renderer,
    cube
  }
}

<template>
  <div class="p-5">
    <img :src="shaderImg" alt="" srcset="" />
    <img :src="img" alt="" srcset="" />
    <div ref="domRef" style="height: 50vh"></div>
  </div>
</template>
<script lang="ts" name="ThreeShader" setup>
import { useThreeInit } from './useThreeInit'
import * as THREE from 'three'
import shaderImg from '@/assets/img/shader渲染流程.png'
import img from '@/assets/img/渲染流程.png'
// 顶点着色器
import basicVertexShader from './shader/basic/vertex.glsl?raw'
// 片元着色器
import basicFragmentShader from './shader/basic/fragment.glsl?raw'

// 顶点着色器
import rawVertexShader from './shader/raw/vertex.glsl?raw'
// 片元着色器
import rawFragmentShader from './shader/raw/fragment.glsl?raw'
import renderImg from '@/assets/ca.jpeg'

const domRef = ref()
const { camera, controls, scene, renderer, cube } = useThreeInit(domRef, { enableDamping: false })

/**
 * shader
 * 渲染管线 在图形管道 (graphic pipeline) 中直接可执行的 OpenGL 着色语言, 着色器有两种类型——顶点着色器 (Vertex Shader) 和片段着色器（Fragment Shader）
 * 渲染流程: 顶点数据 Vertex Data[] => 顶点着色器(Vertex shader) => 形状/图元装配Shape Accembly => 几何着色器(Geometry Shader) => RASTERIZATION光栅化 => 片段着色器(FRAGEMENT SHADER) => 测试与混合(TESTS AND BLENDING)
 * 顶点着色器: 顶点位置, 将形状转换到真实的 3D 绘制坐标中, 顶点着色器操作 3D 空间的坐标并且每个顶点都会调用一次这个函数
 * 图元: 一个顶点或者一条线段或者一个多边形
 * 图元装配: 将我们设置的顶点、颜色、纹理等内容组装成一个可渲染的多边形的过程
 * 光栅化： 通过图元装配生成的多边形，计算像素并填充，剔除不可见的部分，裁减掉不在可视范围的部分，最终生成可见的带有颜色数据的图形并绘制
 * 片元着色器：光栅化后，每一个像素点都包含了颜色、深度、纹理数据，称为片元，着色器就是给每一个像素上色
 *
 */

onMounted(() => {
  scene.value.remove(cube.value)

  //   renderPlane()
  // renderPlane2()
  renderPlaneRawShader()
})

/**
 * 
1．什么是着色器材质
着色器材质（ShaderMaterial）是一个用GLSL编写的小程序，在GPU上运行。它能够提供materials之外的效果，也可以将许多对象组合成单个Geometry或BufferGeometry以提高性能。
2．着色器材质的变量
内置attributes和uniforms与代码一起传递到shaders
每个着色器材质都可以指定两种不同类型的shaders，他们是顶点着色器和片元着色器（Vertex shaders and fragmentshaders)。
·顶点着色器首先运行；它接收attributes，计算／操纵每个单独顶点的位置，并将其他数据（varyings）传递给片元着色器。
·片元（或像素）着色器后运行；它设置渲染到屏幕的每个单独的“片元”（像素）的颜色。shader中有三种类型的变量：uniforms，attributes，和varyings
·Uniforms是所有顶点都具有相同的值的变量。比如灯光，雾，和阴影贴图就是被储存在uniforms中的数据。uniforms可以通过顶点着色器和片元着色器来访问。
·Attributes 与每个顶点关联的变量。例如，顶点位置，法线和顶点颜色都是存储在attributes中的数据。attribuutes只可以在顶点着色器中访问。
·Varyings 是从顶点着色器传递到片元着色器的变量。对于每一个片元，每一个varying的值将是相邻顶点值的平滑插值。
注意：在shader 内部，uniforms和attributes就像常量；你只能使用JavaScript代码通过缓冲区来修改它们的值。 

  GLSL语言
  每一行代码必须带; 浮点数和整数不会做类型转换
  https://learnopengl-cn.github.io/01%20Getting%20started/05%20Shaders/#glsl
  https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-shaders-and-glsl.html
 */
const renderPlane = () => {
  const geometry = new THREE.PlaneGeometry(1, 1)
  console.log(geometry.getAttribute('position'))

  //   编写的是 GLSL 代码, 安装 shader vscode插件编写
  const material = new THREE.ShaderMaterial({
    // 顶点着色器 每个顶点数据都会执行一次, 计算出最终位置存放在gl_Position全局变量中
    vertexShader: `
        // varying vec4 v_color; 传递给片元着色器
        void main(){
            // gl_Position = vec4(position, 1); // 直接将(-0.5,0.5,0) ( 0.5, 0.5, 0) (-0.5, -0.5, 0)等四个顶点坐标 直接放到canvas中
            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 ) ; // 相乘顺序不能改变, 投影矩阵*视图矩阵*模型矩阵*顶点坐标, 模型矩阵 * 顶点坐标得到物体世界坐标系坐标, 在* 视图矩阵得到视点坐标,观察点坐标和上方向, 投影矩阵通常分为平行投影和透视投影

            // v_color = xxxx 给变量赋值
        }
    `,
    // 片元着色器 每个像素点都会执行片元着色器,计算出最终颜色值存放在gl_FragColor中
    fragmentShader: `
        // precision lowp float;  // 浮点数精度, lowp(低) medium(中) highp(高) 让GPU估算计算量
        // varying vec4 v_color; // varying代表接受顶点着色器传递的数据, 类型是vec4 变量名v_color
        void main(){
            gl_FragColor = vec4(1.0,0.0,0.0,1);   // 每个像素颜色: rgba
        }
    `
  })

  const floor = new THREE.Mesh(geometry, material)
  scene.value.add(floor)
}

/**
 * ShaderMaterial会自动给GLSL程序 声明常用的变量
 */
const renderPlane2 = () => {
  scene.value.add(
    new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.ShaderMaterial({
        vertexShader: basicVertexShader,
        fragmentShader: basicFragmentShader
      })
    )
  )
}

const renderPlaneRawShader = () => {
  // 创建纹理加载器对象
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(renderImg)
  scene.value.add(
    new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.RawShaderMaterial({
        vertexShader: rawVertexShader,
        fragmentShader: rawFragmentShader,
        side: THREE.DoubleSide,
        uniforms: {
          uTime: {
            value: 0
          },
          uTexture: {
            value: texture
          }
        }
      })
    )
  )
}
</script>

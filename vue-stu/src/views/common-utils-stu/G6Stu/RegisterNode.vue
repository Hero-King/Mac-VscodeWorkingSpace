<template>
  <div>
    RegisterNode
    <div ref="dom"></div>
  </div>
</template>
<script>
import G6 from '@antv/g6'
const { getLabelPosition, transform } = G6.Util

export default {
  name: 'RegisterNode',
  mounted() {
    const data = {
      nodes: [
        {
          id: 'topLeft',
          x: 100,
          y: 50,
          type: 'rect',
          size: [5, 5],
          style: {
            lineWidth: 0
          }
        },
        {
          id: 'node1',
          x: 100,
          y: 200,
          label: 'Node 1',
          value: 12
        },
        {
          id: 'node2',
          x: 100,
          y: 400,
          color: '#40a9ff',
          label: 'Node 2'
        }
      ],
      edges: [
        {
          source: 'topLeft',
          target: 'node2'
        }
        // {
        //   source: 'node1',
        //   target: 'node2'
        // }
      ]
    }

    // jsx方式注册节点
    G6.registerNode(
      'image-value',
      // (cfg) => `
      //   <group>
      //   <rect style={{width: ${cfg.r * 2}, height: ${cfg.r * 2}, lineWidth: 2, stroke: 'blank' }}>
      //   <image style={{ img: ${cfg.img}, width: ${cfg.imgSize}, height: ${cfg.imgSize}, marginLeft: ${cfg.r - cfg.imgSize/2}, marginTop: ${(cfg.r - cfg.imgSize) / 2}  }}/>
      //           <text  style={{fill: 'blank',fontSize: ${cfg.valFontSize}, textAlign: 'center' }}>{{value}}</text>
      //   </rect>

      //       <text >{{label}}</text>
      //   </group>
      // `

      (cfg) => `
         <group>
          <circle keyshape="true" style={{fill: ${cfg.color}, r: ${cfg.r}, lineWidth: 2, stroke: 'blank'}} }}>
            <image style={{ img: ${cfg.img},marginLeft: ${-cfg.imgSize / 2}, marginTop: ${
        cfg.value.length > 0 ? -(cfg.r + cfg.imgSize) / 2 : -cfg.imgSize / 2
      }, width: ${cfg.imgSize}, height: ${cfg.imgSize}  }}></image>
            <text style={{fill: ${cfg.valColor},fontSize: ${cfg.valFontSize}, textAlign: 'center', marginTop: ${-cfg.r + 10} }}>${cfg.value || ' '}</text>
            <rect style={{ lineWidth: 2, stroke: 'blank', fill: 'white', width: ${cfg.r * 2}, height : 20, marginLeft: ${-cfg.r}, }}>
            <text style={{fill: ${cfg.labelColor},fontSize: ${cfg.labelFontSize}, textAlign: 'center' }} >{{label}}</text>
            </rect>
          </circle>
        </group>
      `
    )

    G6.registerEdge(
      'arrow-running',
      {
        afterDraw(cfg, group) {
          // get the first shape in the group, it is the edge's path here=
          const shape = group.get('children')[0]

          const arrow = group.addShape('marker', {
            attrs: {
              x: 16,
              y: 0,
              r: 8,
              lineWidth: 2,
              stroke: '#3370ff',
              fill: '#fff',
              symbol: (x, y, r) => {
                return [
                  ['M', x - 6, y - 4],
                  ['L', x - 2, y],
                  ['L', x - 6, y + 4]
                ]
              }
            },
            name: 'arrow'
          })

          // arrow.hide()

          // animation for the red circle
          arrow.animate(
            (ratio) => {
              // the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
              // get the position on the edge according to the ratio
              const tmpPoint = shape.getPoint(ratio)
              const pos = getLabelPosition(shape, ratio)
              let matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1]
              matrix = transform(matrix, [
                ['t', -tmpPoint.x, -tmpPoint.y],
                ['r', pos.angle],
                ['t', tmpPoint.x, tmpPoint.y]
              ])

              // returns the modified configurations here, x and y here
              return {
                x: tmpPoint.x,
                y: tmpPoint.y
                // matrix
              }
            },
            {
              repeat: true, // Whether executes the animation repeatly
              duration: 3000 // the duration for executing once
            }
          )
        },
        // 边状态
        setState(name, value, item) {
          const group = item.getContainer()
          if (name == 'arrow') {
            const arrow = group.find((ele) => ele.get('name') == 'arrow')
            if (value == 'stop') {
              arrow.stopAnimate()
            } else if (value == 'reverse') {
              arrow.stopAnimate()

              const shape = group.get('children')[0]
              arrow.animate(
                (ratio) => {
                  // the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
                  // get the position on the edge according to the ratio
                  const tmpPoint = shape.getPoint(ratio)
                  const pos = getLabelPosition(shape, ratio)
                  let matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1]
                  matrix = transform(matrix, [
                    ['t', -tmpPoint.x, -tmpPoint.y],
                    ['r', Math.PI],
                    ['t', tmpPoint.x, tmpPoint.y]
                  ])

                  // returns the modified configurations here, x and y here
                  return {
                    x: tmpPoint.x,
                    y: tmpPoint.y
                    // matrix
                  }
                },
                {
                  repeat: true, // Whether executes the animation repeatly
                  duration: 3000 // the duration for executing once
                }
              )
            }
          }
        }
      },
      'line' // extend the built-in edge 'cubic'
    )

    const graph = new G6.Graph({
      container: this.$refs.dom, // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
      width: 800, // Number，必须，图的宽度
      height: 500, // Number，必须，图的高度
      defaultNode: {
        type: 'image-value',
        img: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        imgSize: 50,
        color: '#ccc',
        value: '',
        valFontSize: 16,
        valColor: 'white',
        labelFontSize: 16,
        labelColor: '#DDD',
        r: 70
      },
      defaultEdge: {
        type: 'arrow-running',
        style: {
          // stroke: "#F5F5F5",
          stroke: '#bae7ff',
          lineWidth: 2,
          // 拐弯处的圆角弧度，若不设置则为直角
          radius: 8
        }
      }
    })

    graph.data(data) // 读取 Step 2 中的数据源到图上
    graph.render() // 渲染图

    graph.on('node:click', (e) => {
      console.log(e)
      console.log('id', e?.item?.getID())
    })

    // update value
    setTimeout(() => {
      const nodes = graph.getNodes()
      console.log(nodes)
      graph.updateItem(nodes[1], { value: '7823239.223233KW' })
      const edge = graph.getEdges()[0]

      // 对调边的开始结束节点  不灵活   尝试在节点动画中设置起始结束节点位置即可
      // const tmp = edge.getSource()
      // console.log(tmp,'tmp');
      // edge.setSource(edge.getTarget())
      // edge.setTarget(tmp)
      // edge.updateShape()
      // edge.updatePosition()

      graph.setItemState(edge, 'arrow', 'reverse')
    }, 500)
  },
  methods: {}
}
</script>
<style lang="scss"></style>

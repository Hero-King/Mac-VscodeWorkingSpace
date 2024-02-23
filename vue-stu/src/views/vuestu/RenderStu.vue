<script>
import BaseH2 from '../../components/BaseH2.vue'
import TestJsRender from '../../components/jsrender/TestJsRender.vue'
export default {
  name: 'RenderStu',
  // render: function (createElement) {
  //   return createElement(
  //     'h' + this.level, // 标签名称
  //     // this.$slots.default // 子节点数组
  //     '1212'
  //   )
  // },
  props: {
    level: {
      type: Number,
      default: 2
    }
  },
  //   render: (h) => {
  //     return h('h2', '1111111111111')
  //   },
  //   render: (h) => {
  //     return h('h2',true)
  //   },
  //   render(h) {
  //     return h('h2', this.level)
  //   },
  //   render(h) {
  //     return h('h2', [this.level, '嘻嘻嘻嘻嘻'])
  //   },
  //   render(h) {
  //     return h(BaseH2,'slot内容')
  //   },

  // JSX 语法书写render  依赖 npm install @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props 插件
  render(h) {
    return (
      <div>
        <BaseH2>JSX语法</BaseH2>
        <TestJsRender />
      </div>
    )
  }
}
</script>

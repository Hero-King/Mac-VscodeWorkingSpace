<script>
export default {
  name: 'JsRender',
  props: {
    render: {
      type: Function,
      required: true
    },
    renderArgument: Object,
    renderContext: Object
  },
  render(h) {
    console.log('JSRender Component Render()', this.$options.name) // -> "JsRender"
    const { render, renderArgument, renderContext } = this
    console.log(renderContext, 'renderContext')
    return renderContext ? render.call(renderContext, h, renderArgument) : render(h, renderArgument)
  }
}
</script>

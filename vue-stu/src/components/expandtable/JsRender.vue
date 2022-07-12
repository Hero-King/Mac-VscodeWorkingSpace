<script>
export default {
  name: 'JsRender',
  functional: true,
  props: ['jsRender', 'renderNode', 'renderArgument'],
  render(h, context) {
    const { jsRender, renderNode, renderArgument } = context.props || context.parent
    const customNode = jsRender(h, renderNode, renderArgument)
    return customNode
  }
}
</script>

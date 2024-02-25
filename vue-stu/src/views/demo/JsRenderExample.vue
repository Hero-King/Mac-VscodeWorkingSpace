<template>
  <div>
    <el-table :data="data" style="width: 100%">
      <template v-for="column in columns">
        <el-table-column v-if="column.render" :key="column.label" :prop="column.prop" :label="column.label" :width="column.width">
          <template slot-scope="scope">
            <js-render :render="column.render" :renderArgument="scope.row" :renderContext="_self" />
          </template>
        </el-table-column>
        <el-table-column v-else :key="column.label" :prop="column.prop" :label="column.label" :width="column.width"> </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import JsRender from '../../components/jsrender/index.vue'
export default {
  name: 'JsRenderExample',
  components: {
    JsRender
  },
  data() {
    return {
      data: [
        {
          name: '哈哈',
          age: 10,
          title: '测试'
        }
      ],
      columns: [
        {
          label: '标题',
          prop: 'title',
          // Example 使用箭头函数绑定当前this指向
          // render: (h, row) => {
          //   return <span onClick={this.handleClick}>11122222222 {row.title} </span>
          // }
          // Example2 普通函数this指向函数调用时的对象, 需要在调用时使用call/apply方法改变函数内部this
          render(h, row) {
            console.log('column render this:', this, this?.$options?.name)
            return <span onClick={this?.handleClick}>11122222222 {row.title} </span>
          }
        }
      ]
    }
  },
  computed: {
    renderContext() {
      return this
    }
  },
  methods: {
    handleClick(e) {
      console.log(e, 'click', this.data)
    }
  }
}
</script>

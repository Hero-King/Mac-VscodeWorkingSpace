<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px">
      <el-menu router>
        <el-submenu index="1">
          <template slot="title"> Element UI 组件学习 </template>
          <el-menu-item index="/elementui-stu/FormStu"> FormStu </el-menu-item>
          <el-menu-item index="/elementui-stu/DatePickerStu"> DatePickerStu </el-menu-item>
          <el-menu-item index="/elementui-stu/DatePickerStu"> CheckboxStuVue </el-menu-item>
          <el-menu-item index="/elementui-stu/InputStu"> InputStu </el-menu-item>
          <el-menu-item index="/elementui-stu/UploadStu"> UploadStu </el-menu-item>
          <el-menu-item index="/elementui-stu/SelectStu"> SelectStu </el-menu-item>
          <el-menu-item index="/elementui-stu/TableStu"> TableStu </el-menu-item>
          <el-menu-item index="/elementui-stu/DescriptsStu"> DescriptsStu </el-menu-item>
          <el-menu-item index="/elementui-stu/LoadingStu"> LoadingStu </el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"> <i class="el-icon-setting" /> home </template>
          <el-menu-item index="/home/HelloWorld"> HelloWorld </el-menu-item>
          <el-menu-item index="/home/lazy"> 懒加载 </el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"> <i class="el-icon-setting" /> 工具组件学习 </template>
          <el-menu-item index="/common-utils-stu/DayjsStu"> dayjs </el-menu-item>
          <el-menu-item index="/common-utils-stu/SheetJsStu"> SheetJsStu </el-menu-item>
          <el-menu-item index="/common-utils-stu/ScssStu"> ScssStu </el-menu-item>
          <el-menu-item index="/common-utils-stu/EchartStu"> echart </el-menu-item>
          <el-menu-item index="/common-utils-stu/G6Stu"> G6Stu </el-menu-item>
          <el-menu-item index="/common-utils-stu/PerfectScrollbarStu"> PerfectScrollBar </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"> <i class="el-icon-message" />Vue知识点 </template>
          <el-menu-item index="/vuestu/VueLs"> vue-ls </el-menu-item>
          <el-menu-item index="/vuestu/DraggableStu"> draggable </el-menu-item>
          <el-menu-item index="/vuestu/RenderStu"> RenderStu </el-menu-item>
          <el-menu-item index="/vuestu/VueClipboardStu"> VueClipboard </el-menu-item>
          <el-menu-item index="/vuestu/VueLazyloadStu"> VueLazyLoad </el-menu-item>
          <el-menu-item index="/vuestu/VueStu"> VueStu </el-menu-item>
          <el-menu-item index="/vuestu/keepalive"> keepalive </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"> 组件封装Demo </template>
          <el-menu-item index="/demo/editTableDemo"> EditTableDemo </el-menu-item>
          <el-menu-item index="/demo/DictSelectDemo"> DictSelectDemo </el-menu-item>
          <el-menu-item index="/demo/AvueCrudDemo"> AvueCrudDemo </el-menu-item>
          <el-menu-item index="/demo/ExpandTableExample"> ExpandTableExample </el-menu-item>
          <el-menu-item index="/demo/JsRenderExample"> JsRenderExample </el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"> 项目 </template>
          <el-submenu index="60">
            <template slot="title"> 看板 </template>
            <el-menu-item index="/deliveryMonitor"> 交付看板 </el-menu-item>
            <el-menu-item index="/planMonitor"> 计划看板 </el-menu-item>
            <el-menu-item index="/EfficiencyMonitor"> 能效看板 </el-menu-item>
          </el-submenu>
          <el-submenu index="61">
            <template slot="title"> 工单 </template>
            <!-- 原型: https://modao.cc/app/i2qzxprrqpwreEvQ8BcPu#screen=sle2j2qha65lem7q0nfa48dtm -->
            <el-menu-item index="/work-order/statistics"> 工单统计 </el-menu-item>
            <el-menu-item index="/work-order/query"> 工单查询 </el-menu-item>
            <el-menu-item index="/knowledge-base/graphTopology"> 运维图谱 </el-menu-item>
            <el-menu-item index="/knowledge-base/takeNotes"> 运维记录 </el-menu-item>
            <el-menu-item index="/knowledge-base/standard"> 标准知识库 </el-menu-item>
            <el-menu-item index="/device-management/equipmentAccount"> 设备台账 </el-menu-item>
          </el-submenu>
          <el-submenu index="62">
            <template slot="title"> 催收 </template>
            <el-menu-item index="/mxLoanCase/list"> 工作台 </el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-main>
      <transition v-if="$route.path.includes('/keepalive')">
        <!-- 测试 keepalive时走下逻辑 -->
        <keep-alive include="KeepAliveTest">
          <router-view :key="$route.path" />
        </keep-alive>
      </transition>

      <router-view v-else />
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  beforeRouteEnter(to, from, next) {
    console.log('Home beforeRouteEnter')
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
    next(function (vm) {
      console.log(vm._uid, 'Home beforeRouteEnter 中next')
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log('Home beforeRouteUpdate')
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('Home beforeRouteLeave')
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
    next()
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(5).fill(item)
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px">
      <el-menu :default-openeds="['1']" router>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Element UI 组件学习</template>
          <el-menu-item index="/home/form">form</el-menu-item>
          <el-menu-item index="/home/hello">hello</el-menu-item>
          <el-menu-item index="/home/datePicker">datePicker</el-menu-item>
          <el-menu-item index="/home/checkbox">checkbox</el-menu-item>
          <el-menu-item index="/home/upload">upload</el-menu-item>
          <el-menu-item index="/home/select">Select</el-menu-item>
          <el-menu-item index="/home/ScssStu">ScssStu</el-menu-item>
          <el-menu-item index="/home/bar">Bar</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>懒加载</template>
          <el-menu-item index="/lazy">lazy</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-menu-item index="2-4">选项4</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>工具组件学习</template>
          <el-menu-item index="/home/draggable">draggable</el-menu-item>
          <el-menu-item index="/home/loadingstu">LoadingStu</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-message"></i>Vue知识点</template>
          <el-menu-item index="/home/VueStu">VueStu</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
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

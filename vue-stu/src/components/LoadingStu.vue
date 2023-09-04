<template>
  <div>
    <h4>loading-stu</h4>
    <div
      v-loading="loading"
      class="module"
      @click="loading = !loading"
    >
      组件内容...
    </div>
    <div
      v-loading="loading2"
      class="module"
      element-loading-text="加载中..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      @click="loading2 = !loading2"
    >
      组件内容...
    </div>

    <div
      v-loading.body="loading3"
      class="module"
      element-loading-text="加载中..."
      @click="loading3 = !loading3"
    >
      <h4>通过添加body修饰符，可以使遮罩插入至 DOM 中的 body 上 那么隐藏loading效果就要考虑好</h4>
      组件内容...
    </div>

    <div
      v-loading.fullscreen.lock="loading4"
      class="module"
      element-loading-text="加载中..."
      @click="loading4 = !loading4"
    >
      <h4>全屏遮罩需要添加fullscreen修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用lock修饰符；</h4>
      组件内容...
    </div>

    <div class="module">
      <h4>校验loading效果</h4>
      <el-button
        type="text"
        :icon="checkSuccess === true ? 'el-icon-check' : checkSuccess === false ? 'el-icon-error' : ''"
        :loading="loading"
        @click="handleCheck"
      >
        加载中
      </el-button>
    </div>

    <div class="module">
      <el-table :data="[]" border v-loading="tableLoading">
        <el-table-column label="姓名" prop="name"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingStu',
  data() {
    return {
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      checkSuccess: null,
      tableLoading: []
    }
  },
  methods: {
    handleCheck() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.checkSuccess = false
      }, 200)
    }
  }
}
</script>

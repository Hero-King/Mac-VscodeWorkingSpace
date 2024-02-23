<template>
  <div>
    <h2>普通 Select value是字符串</h2>
    <div class="module">
      <el-select
        v-model="selectValue"
        :multiple="multiple"
        placeholder="请选择"
        :popper-append-to-body="false"
        @change="handleChange"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <h2>多选 Select value是数组</h2>
    <div class="module">
      <button @click="collapseTags = !collapseTags">
        多选选中后显示Tag?
      </button> {{ collapseTags }}
      <el-select
        v-model="multipleValue"
        :collapse-tags="false"
        :multiple="true"
        placeholder="请选择"
        :popper-append-to-body="false"
        @change="handleChange"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <h2>Select option是对象</h2>
    <div class="module">
      <el-select
        v-model="selectItem"
        placeholder="请选择"
        :popper-append-to-body="false"
        value-key="value"
        @change="handleChange"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item"
        />
      </el-select>
    </div>

    <h2>Select 样式</h2>
    <div class="module style">
      <el-select
        v-model="multipleValue"
        class="selectclass"
        popper-class="select-dropdown-box"
        placeholder="请选择"
        :collapse-tags="false"
        :popper-append-to-body="false"
        value-key="value"
        :multiple="true"
        :style="selectStyle"
        @change="handleChange"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item"
        />
      </el-select>
      <el-input :style="{ width: '200px' }" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectStu',
  components: {},
  data() {
    return {
      collapseTags: false,
      selectValue: '',
      selectItem: {
        value: '选项2'
      },
      multipleValue: [],
      multiple: false,
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京1212烤鸭'
        }
      ],
      value1: [],
      value2: []
    }
  },
  computed: {
    selectStyle() {
      const width = this.multipleValue.length * 100
      return { width: ((width > 300 ? width : 310) / 1080) * 100 + 'vh' }
    }
  },
  watch: {
    $data: {
      handler: function (newV, oldV) {
        console.log('$data数据变化了,:', newV)
      },
      deep: true
    }
  },
  methods: {
    handleChange() {
      console.log(arguments, '---')
    },
    logValue() {
      console.log(arguments)
    }
  }
}
</script>

<style lang="scss" scoped>
@function px2vh($value) {
  @return $value/1080 * 100vh;
}

.blue-border {
  font-weight: 400;
  color: #fefefe;
  border: 1px solid #0c80d8;
  // background: rgba(4, 27, 89, 0.5);
  background: transparent;
  border-radius: px2vh(6);
  text-align: center;
  box-shadow: inset 0px 0px 15px 0px rgb(2 90 215 / 66%);
}
.style {
  background-color: #03164c;
  height: 300px;
  display: flex;
  justify-content: space-around;
}
.selectclass {
  // border: 1px solid pink;
  // 生成的样式  .selectclass[data-v-e15ce8d0] .el-input
  // ::v-deep .el-input{
  //   padding: 0 5px;
  // }
  width: px2vh(200);
  height: px2vh(40);
  font-size: px2vh(24);
  outline: none;
  ::v-deep .el-input {
    outline: none;
    .el-input__inner {
      @extend .blue-border;
    }
  }
  ::v-deep .select-dropdown-box {
    @extend .blue-border;
    margin-top: 0;
    .popper__arrow {
      display: none;
    }
    .el-select-dropdown__item {
      font-weight: 400;
      color: #fefefe;
      font-size: px2vh(24);
      &.hover {
        background-color: transparent;
      }
      &.selected,
      &:hover,
      &.selected.hover {
        background: #0c80d8;
        font-weight: 400;
        color: #fefefe;
        font-size: px2vh(24);
      }
    }
  }
}
</style>

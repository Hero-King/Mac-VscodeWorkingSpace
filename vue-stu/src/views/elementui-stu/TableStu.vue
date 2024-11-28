<template>
  <div class="module">
    <h3>表格</h3>
    <el-button @click="toggleSelection()">
      取消选择
    </el-button>
    <el-button @click="toggleSelection(initSelectedRows)">
      初始化选中状态
    </el-button>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      style="width: 100%"
      row-key="id"
      @selection-change="selectChange"
    >
      <!-- 显示多选框 -->
      <el-table-column
        type="selection"
        width="55"
        :reserve-selection="true"
      />
      <!-- 显示索引 该属性传入数字时，将作为索引的起始值 也可以传入一个方法，它提供当前行的行号（从 0 开始）作为参数，返回值将作为索引展示 -->
      <el-table-column
        type="index"
        width="55"
        :index="1000"
      />

      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150"
      />
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
      />
      <el-table-column
        prop="province"
        label="省份"
        width="120"
      />
      <el-table-column
        prop="city"
        label="市区"
        width="120"
      />
      <el-table-column
        prop="address"
        label="地址"
        width="300"
      />
      <el-table-column
        prop="zip"
        label="邮编"
        width="120"
      >
        <template slot-scope="scope">
          <el-input
            v-model.number="scope.row.zip"
            placeholder="请输入内容"
          />
        </template>
      </el-table-column>
      <el-table-column
        prop="select"
        label="select"
        width="120"
      >
        <template
          slot="header"
          slot-scope="scope"
        >
          <el-input
            size="mini"
            placeholder="输入关键字搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.select"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleClick(scope)"
          >
            查看
          </el-button>
          <el-button
            type="text"
            size="small"
          >
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="sizes, prev, pager, next"
      :total="total"
      :page-size.sync="pageSize"
      :page-sizes="[10, 20, 50, 100]"
      :current-page.sync="page"
      @current-change="getData"
    />
  </div>
</template>

<script>
export default {
  name: 'TableStu',
  data() {
    this.initSelectedRows = [
      {
        id: 11,
        date: '2016-05-02',
        name: '王小虎11',
        province: '上海11',
        city: '普陀区11',
        address: '上海市普陀区金沙江路 1518 弄11',
        zip: 11
      },
      {
        id: 12,
        date: '2016-05-02',
        name: '王小虎12',
        province: '上海12',
        city: '普陀区12',
        address: '上海市普陀区金沙江路 1518 弄12',
        zip: 12
      }
    ]
    return {
      total: 100,
      page: 1,
      pageSize: 10,
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
          label: '北京烤鸭'
        }
      ],
      tableData: [],
      selectedRows: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    addCol() {},
    handleClick(scope) {
      console.log('自定义列的内容 scope', scope)
    },
    selectChange(val) {
      // val reserve-selection="false"时 在分页了之后会返回空数组
      console.log(val, 'selectChange')
      this.selectedRows = val
    },
    pageChange() {
      this.tableData = []
    },
    getData() {
      const { page, pageSize } = this
      this.$http.post('/getTableData', { page, pageSize }).then((res) => {
        this.tableData = res.data
        this.total = res.total
      })
    },
    toggleSelection(rows) {
      if (rows) {
        const set = new Set()
        rows.forEach((i) => set.add(i.id))
        this.$nextTick(() => {
          // 做一个选中状态的回显 就用这里
          // rows.forEach((row) => {
          //   // toggleRowSelection方法如果不传第二个参数true 那就是切换选中状态, 传了true就是切换成选中状态\
          // 注意这里的row 必须使用Table 组件中data中的某一条数据引用
          //   this.$refs.multipleTable.toggleRowSelection(row, true)
          // })
          this.tableData.forEach((i) => {
            if (set.has(i.id)) {
              this.$refs.multipleTable.toggleRowSelection(i, true)
            }
          })
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    }
  }
}
</script>

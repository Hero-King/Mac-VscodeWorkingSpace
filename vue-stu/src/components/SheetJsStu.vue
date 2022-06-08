<template lang="">
  <div>
    <div class="module">
      <h2>使用表格数据</h2>
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        />
        <el-table-column
          prop="address"
          label="地址"
        />
      </el-table>
      <button @click="handleTableToExcel">
        下载
      </button>
    </div>

    <div class="module">
      <h2>使用JSON数据</h2>
      <button @click="handleJsonToExcel">
        下载
      </button>
    </div>
    <div class="module">
      <h2>使用二维数组</h2>
      <button @click="handleAoAToExcel">
        下载
      </button>
    </div>
    <div class="module">
      <h2>导入excel</h2>
      <input
        type="file"
        @change="handleImport"
      ></input>
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx'
export default {
  name: 'SheetJsStu',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }
      ],
      bigTableData: [],
      aoa: [
        ['A1', 'B1', 'C1'],
        ['A2', 'B2', 'C2'],
        ['A3', 'B3', 'C3']
      ]
    }
  },
  created() {
    let bigTableData = []
    for (let i = 0; i < 2000; i++) {
      const obj = {
        name: 'wang' + i,
        age: i,
        date: '2020' + i,
        hobby: '喝酒' + i,
        address: '江苏省无锡市GGGG',
        time: 'time' + i,
        time1: 'time' + i,
        time2: 'time' + i,
        time3: 'time' + i,
        time4: 'time' + i,
        time5: 'time' + i,
        time6: '南京那宁' + i,
        time13: '南京那宁啊啊啊啊啊啊啊啊啊啊啊啊1' + i,
        time24: '南京那宁啊啊嘚嘚嘚嘚扥啊啊啊啊啊啊啊啊啊啊啊2' + i,
        time35: 'sdsdfadsddadsdd是的是的多多多多多' + i,
        time46: '南京那宁啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊4',
        ddd: '哒哒哒哒哒哒多多'
      }
      bigTableData.push(obj)
    }
    this.bigTableData = bigTableData
  },
  mounted() {
    console.log('XLSX', XLSX)
  },
  methods: {
    handleTableToExcel() {
      // Acquire Data (reference to the HTML table)
      // Extract Data (create a workbook object from the table)
      const workbook = XLSX.utils.table_to_book(this.$el)

      //   Process Data (add a new row)
      const ws = workbook.Sheets['Sheet1']
      XLSX.utils.sheet_add_aoa(ws, [['Created ' + new Date().toISOString()]], { origin: -1 })

      //   Package and Release Data (`writeFile` tries to write and save an XLSB file)
      XLSX.writeFile(workbook, 'Report.xlsb')
    },
    handleJsonToExcel() {
      console.time('start to export')
      // generates a worksheet:
      const worksheet = XLSX.utils.json_to_sheet(this.bigTableData)
      //   By default, json_to_sheet creates a worksheet with a header row. In this case, the headers come from the JS object keys: date name address

      // XLSX.utils.sheet_add_aoa can write text values to the existing worksheet starting at cell A1:
      // XLSX.utils.sheet_add_aoa(worksheet, [['日期', '姓名', '地址']], { origin: 'A1' })

      // Column widths are set by setting the "!cols" worksheet property.
      worksheet['!cols'] = [{ wch: 10 }] // set column A width to 10 characters

      // XLSX.utils.book_new creates a new workbook and XLSX.utils.book_append_sheet appends a worksheet to the workbook.
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Dates')
      XLSX.writeFile(workbook, 'json.xlsb')
      console.timeEnd('start to export')
    },
    handleAoAToExcel() {
      const workbook = XLSX.utils.book_new()
      const worksheet = XLSX.utils.aoa_to_sheet(this.aoa)
      // f the fourth argument is true, the function will start with the specified worksheet name. If the sheet name exists in the workbook, a new worksheet name will be chosen by finding the name stem and incrementing the counter:
      XLSX.utils.book_append_sheet(workbook, worksheet, 'ArrayofArrayData', true)
      const wsnames = workbook.SheetNames
      console.log(wsnames, 'workbook:', workbook)
      // workbook.Sheets[sheet_name] = new_worksheet; // Replace a Worksheet in place

      // Modifying Cell Values
      // The sheet_add_aoa utility function modifies cell values in a worksheet.
      XLSX.utils.sheet_add_aoa(worksheet, [[1, 2]], { origin: 'B2' })
      console.log('workbook:', workbook)
      // The special origin value -1 instructs sheet_add_aoa to start in column A of the row after the last row in the range, appending the data
    },
    async handleImport(e) {
      const file = e.target.files[0]
      const data = await file.arrayBuffer() // 有兼容性问题 可以使用filereader转成arrayBuffer
      /* data is an ArrayBuffer */
      const workbook = XLSX.read(data)

      /* DO SOMETHING WITH workbook HERE */
      console.log('workbook:', workbook)
    },
    handleExcelToHtml(){
      // Generating HTML Tables
      // XLSX.utils.sheet_to_html(worksheet)
    }
  }
}
</script>
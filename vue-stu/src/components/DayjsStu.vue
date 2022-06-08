<template>
  <div>
    <div class="module">
      <h2>安装</h2>
      <p>yarn add dayjs -S</p>
    </div>
    <div class="module">
      <h2>解析</h2>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'DayjsStu',
  mounted() {
    console.clear()
    const now = dayjs()
    // 取当前时间
    console.log(now.format())

    console.log(now.month(), now.hour(), now.minute())

    // Date 转 Dayjs
    var d = new Date(2018, 8, 18)
    var day = dayjs(d)
    console.log('day.isValid()', day.isValid())

    //Dayjs -> Date
    console.log(now.toDate() instanceof Date, 'now.toDate() instanceof Date')

    // Dayjs 操作
    console.log(now.add(2, 'years').format())
    console.log(now.subtract(1, 'months').format())

    // 格式化 https://dayjs.fenxianglu.cn/category/display.html#%E6%A0%BC%E5%BC%8F%E5%8C%96
    console.log(dayjs('1997-01-01').format('DD/MM/YYYY'))

    // 获取月天数
    console.log(dayjs('2019-01-25').daysInMonth())

    let tmp = now.diff('2022-05-10', 'day')
    console.log(tmp, '距离多少天')
  }
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank"> Core Docs </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank"> Forum </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank"> Community Chat </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank"> Twitter </a>
      </li>
      <br />
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank"> Docs for This Template </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank"> vue-router </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank"> vuex </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank"> vue-loader </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank"> awesome-vue </a>
      </li>
    </ul>

    <div class="wangjj-test">
      <myh2 />
      <div style="height: 1vh" />
    </div>
    <div class="wangjj-test">
      <h2>测试export 引用类型数据可否被程序修改 可以 变量在内存中 可修改</h2>
      <p>{{ personsAgePlus }}</p>

      <h2>
        测试export 深层对象 personsNew会随着count变化,所以child组件会刷新,至于true false切换,是因为personsNew中没使用深拷贝,重新计算时将export出来的变量改变了
      </h2>
      <child :personsNew="personsNew"></child>

      <h2>
        测试export 深层对象
        personsNew会随着count变化,但是personsNew[0].config引用指向deepObj[0].config对象,这个引用一直没变化,并且对象非响应式对象,所以vue检测不到config.face的变化而去刷新页面
      </h2>
      <child2 :personsNewItemConfig="personsNew[0].config"></child2>

      <h2>
        测试export 深层对象 personsNew2会随着count变化, personsNew2[0].config每次都指向新的对象
        vue可以监听到props变化,同时改变了deepObj中的config.face数据,所以view会变化,同时会持续render
      </h2>
      <child2 :personsNewItemConfig="personsNew2[0].config"></child2>
    </div>
  </div>
</template>

<script>
import myh2 from './BaseH2.vue'
import { persons, deepObj } from './constant'
export default {
  name: 'HelloWorld',
  props: ['author'],
  components: {
    myh2,
    child: {
      props: ['personsNew'],
      render(h) {
        return <div>{this.personsNew.map((i) => i.config.face).join(';')}</div>
      }
    },
    child2: {
      props: ['personsNewItemConfig'],
      render(h) {
        console.log('personsNewItemConfig:', this.personsNewItemConfig.face)
        return <div>{this.personsNewItemConfig.face + ''}</div>
      }
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0
    }
  },
  computed: {
    personsAgePlus() {
      // console.log('calc personsAgePlus', this.count)
      persons.forEach((person) => {
        person.age += 1
      })
      return persons
    },
    personsNew() {
      let tmp = []
      console.log('calc personsNew', this.count)
      deepObj.forEach((obj) => {
        let j = { ...obj }
        j.config.face = !j.config.face
        tmp.push(j)
      })
      return tmp
    },
    personsNew2() {
      let tmp = []
      console.log('calc personsNew2', this.count)
      deepObj.forEach((obj) => {
        let j = { ...obj }
        const face = !j.config.face
        // j.config指向了新的对象; 促使deepObj中的config对象变成新的
        j.config = {
          face
        }

        tmp.push(j)
      })
      return tmp
    }
  },
  mounted() {
    console.log(this.author)
    console.clear()
    let interval = setInterval(() => {
      this.count++
    }, 1000)
    setTimeout(() => {
      // clearInterval(interval)
    }, 5000)
  },
  watch: {
    count(val) {
      console.log('HelloWorld: count变化了, 用来模拟render多次', val)
    },
    personsNew(val) {
      console.log('HelloWorld: personsNew 变化了', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

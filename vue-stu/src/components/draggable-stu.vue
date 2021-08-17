<template>
  <div>
    <h2>draggable</h2>
    <div class="module">
      <draggable v-model="myArray" @start="drag = true" @end="drag = false">
        <div v-for="element in myArray" :key="element.id">{{ element.name }}</div>
        <button slot="header" @click="handleAdd">Add</button>
      </draggable>
    </div>

    <h2>delay属性</h2>
    <div class="module">
      <draggable v-model="myArray" delay="100">
        <div v-for="element in myArray" :key="element.id">{{ element.name }}</div>
        <button slot="header" @click="handleAdd">Add</button>
      </draggable>
    </div>

    <h2>disabled属性</h2>
    <div class="module">
      <draggable v-model="myArray" :disabled="true">
        <div v-for="element in myArray" :key="element.id">{{ element.name }}</div>
        <button slot="header" @click="handleAdd">Add</button>
      </draggable>
    </div>

    <h2>animation属性</h2>
    <p>拖动时的动画效果，还是很酷的,数字类型。如设置animation=1000表示1秒过渡动画效果</p>
    <div class="module">
      <draggable v-model="myArray" :animation="1000">
        <div v-for="element in myArray" :key="element.id">{{ element.name }}</div>
        <button slot="header" @click="handleAdd">Add</button>
      </draggable>
    </div>

    <h2>handle & filter</h2>
    <p>只有当鼠标移动到css为handle指定的类的元素上才能拖动</p>
    <p>对应 filter=".unmover" 设置了unmover样式的元素不允许拖动</p>
    <div class="module">
      <!-- <draggable v-model="myArray" tag="p" handle=".mover"> -->
      <draggable v-model="myArray" tag="p" filter=".mover">
        <div :class="{ mover: element.id % 2 == 0 }" v-for="element in myArray" :key="element.id">
          {{ element.name }}
        </div>
        <button slot="header" @click="handleAdd">Add</button>
      </draggable>
    </div>

    <h2>chosen-class 选中时候的样式</h2>
    <div class="module">
      <draggable v-model="myArray" tag="p" chosen-class="chosen" :force-fallback="true">
        <div class="mover" v-for="element in myArray" :key="element.id">{{ element.name }}</div>
        <button slot="header" @click="handleAdd">Add</button>
      </draggable>
    </div>

    <h2>dragClass 拖动时候元素的样式</h2>
    <div class="module">
      <draggable v-model="myArray" tag="p" chosen-class="chosen" drag-class='dragging' :force-fallback="true">
        <div class="mover" v-for="element in myArray" :key="element.id">{{ element.name }}</div>
        <button slot="header" @click="handleAdd">Add</button>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'DraggableStu',
  components: {
    draggable
  },
  methods: {
    handleAdd(e) {
      this.i++
      console.log(this.i)
    }
  },
  data() {
    return {
      i: 0,
      myArray: [
        {
          name: '1',
          id: 1
        },
        {
          name: '2',
          id: 2
        },
        {
          name: '3',
          id: 3
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.module {
  p {
    > div {
      padding: 3px;
    }
  }

  .chosen {
    border: 2px solid blue;
  }

  .dragging{
    border: 2px solid yellow;
  }
}
</style>

<template>
  <div>
    <h2>draggable</h2>
    <draggable v-model="myArray" group="people" @start="drag = true" @end="drag = false">
      <div v-for="element in myArray" :key="element.id">{{ element.name }}</div>
      <button slot="header" @click="i++">Add</button>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'DraggableStu',
  components: {
    draggable
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

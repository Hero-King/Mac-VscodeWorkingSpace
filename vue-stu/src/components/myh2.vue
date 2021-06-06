<template>
    <h2 @click="log" class="myh2">这是我自己定义的h2组件,点击会打印</h2>
</template>

<script>
export default {

    methods: {
        log(){
            console.log("myh2 组件被点击了")
        }
    }
}
</script>

<style scoped>
.myh2{
    color: aqua;
}
.myh2::selection{
    background: plum;
}
</style>
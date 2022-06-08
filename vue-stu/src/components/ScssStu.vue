<template>
  <div>
    <a href="https://www.sass.hk/docs/" target="_blank                                                                                               "
      ><nav>Sass文档</nav></a
    >
    <h3>sass使用$符号来标识变量 当变量定义在css规则块内，那么该变量只能在此规则块内使用</h3>
    <h3>
      变量名用中划线还是下划线分隔效果相同
      <div>父选择器 : &</div>
      <div>注释 /* */ 与 //</div>
      <div>变量 $</div>
      <div>所有在被导入文件中定义的变量和混合器（参见2.5节）均可在导入文件中使用。</div>
      <div class="seriousError">@extend语法继承CSS</div>
      <div>定义混合器： @mixin name { 样式 }</div>
      <div>调用混合器： @include name</div>
      <span
        >然后就可以在你的样式表中通过@include来使用这个混合器，放在你希望的任何地方。@include调用会把混合器中的所有样式提取出来放在@include被调用的地方。</span
      >
      <div>给混合器传参数 @mixin link-colors($normal, $hover, $visited) { color: $normal; &:hover { color: $hover; } &:visited { color: $visited; } }</div>
      <div>Vue组件中的scss引用全局变量和方法使用: sass-resources-loader</div>
      <div class="other-scss">其他scss定义的样式</div>
      <div>
        打包问题: 1. 公共代码common.scss多次放在scoped内
        由于加了scoped，导致common里面的样式都加上了[data-v-aaaa]这样的标识，最后打出来的css重复，这就不是公共css了。
        并且在多少个vue里面import就会打包多少次common.scss进去，最后导致css打出来很大。
      </div>
      <div>2. 公共代码多次放在scoped外 多个Vue文件中引用同一个样式文件不会重复打包,但是还是建议放在main.js中</div>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'ScssStu'
}
</script>

<style lang="scss" scoped>
@import './common';
// 声明变量
$highlight-color: #f90;
$nav-color: #f90;
nav {
  $width: 100px;
  width: $width;
  color: $nav-color;
}

.selected {
  border: 1px solid $highlight-color;
}

.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}

.other-scss {
  color: $font-color; // 可以访问变量
}
</style>

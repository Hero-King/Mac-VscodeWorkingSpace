<template>
  <div>
    <a href="https://www.sass.hk/docs/" target="_blank                                                                                               "
      ><nav>Sass文档</nav></a
    >
    <h3>sass使用$符号来标识变量 当变量定义在css规则块内，那么该变量只能在此规则块内使用</h3>
    <h3>
      变量名用中划线还是下划线分隔效果相同
      <div>
        父选择器 : &
        <p>& 是表示父元素的字符串</p>
        <div>可以&:hover 也可以 body.main & {} 或者 & 作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器&-sidebar { border: 1px solid; }</div>
      </div>
      <h3>属性嵌套</h3>
      <p>
        有些 CSS 属性遵循相同的命名空间 (namespace)，比如 font-family, font-size, font-weight 都以 font 作为属性的命名空间。 font: { family: fantasy; size:30em;
        weight: bold; } =><strong> font-family: fantasy; font-size: 30em; font-weight: bold;</strong>
      </p>
      <div>注释 /* */ 与 //</div>
      <div>
        变量 $ 变量支持块级作用域
        <div>将局部变量转换为全局变量可以添加 !global</div>
        <div>使用 #{} (interpolation) 插值语法时，有引号字符串将被编译为无引号字符串</div>
        <div>如果需要使用变量，同时又要确保 / 不做除法运算而是完整地编译到 CSS 文件中，只需要用 #{} 插值语句将变量包裹。</div>
      </div>
      <div>
        Sass 拓展了 @import 的功能，允许其导入 SCSS 或 Sass 文件所有在被导入文件中定义的变量和混合器（参见2.5节）均可在导入文件中使用。需要导入 SCSS 或者 Sass
        文件，但又不希望将其编译为 CSS，只需要在文件名前添加下划线，这样会告诉 Sass 不要编译这些文件，但导入语句中却不需要添加下划线。例如，将文件命名为
        _colors.scss，便不会编译 _colours.css 文件。
      </div>
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

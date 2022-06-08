<template>
  <div class="screen-header">
    <div class="header-item head-left">
      <div class="left-title head-title">
        <slot name="leftTitle"></slot>
      </div>
    </div>
    <div class="header-item head-center">
      <div class="center-title">
        <slot name="centerTitle"></slot>
      </div>
    </div>
    <div class="header-item head-right">
      <div class="head-title right-title">
        <div class="rightTitle-body">
          <slot name="rightTitle"></slot>
        </div>
        <div class="rightTitle-line-wrap">
          <div class="rightTitle-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenHeader'
}
</script>

<style lang="scss" scoped>
@function px2vh($value) {
  @return $value/1080 * 100vh;
}
.screen-header {
  height: px2vh(70);
  display: flex;
  .header-item {
    flex: auto;
    .head-title {
      position: relative;
      height: 70%;
      top: 30%;
    }
  }
  .head-center {
    background-image: url('../img/centerHead.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 836px;
    .center-title {
      width: 100%;
      height: 100%;
      padding: 0 1.5vw;
      display: flex;
      justify-content: center;
    }
  }
  .head-left {
    width: 548px;
    .left-title {
      background-color: #0a6abb;
      overflow: hidden;
      &::after {
        content: ' ';
        position: absolute;
        height: 100%;
        width: 100%;
        right: 0;
        transform: rotate(45deg);
        transform-origin: right bottom;
        background-color: #03154a;
      }
      font-size: 3.33vh;
      text-align: center;
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
      color: #ffffff;
    }
  }
  .head-right {
    width: 543px;
    .right-title {
      .rightTitle-body {
        position: absolute;
        width: 100%;
        z-index: 100;
        height: 100%;
      }
      // background-color: #0A6ABB;
      .rightTitle-line-wrap {
        overflow: hidden;
        height: 100%;
        width: 100%;
        position: relative;
      }
      .rightTitle-line {
        border: 1px solid #4570c3;
        overflow: hidden;
        width: 100%;
        height: 100%;
        &::after {
          content: ' ';
          position: absolute;
          height: 100%;
          width: 100%;
          transform: rotate(-45deg);
          transform-origin: left bottom;
          background-color: #03154a;
          border-bottom: 1px solid #4570c3;
        }
      }
    }
  }
}
</style>

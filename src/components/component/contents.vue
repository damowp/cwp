<template>
  <div class="contents">
  <!-- 动画 -->
  <transition name="slide-fade">
    <keep-alive class="wrapper">
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
  </transition>
  <transition name="slide-fade">
    <router-view v-if="!$route.meta.keepAlive"/>
  </transition>
  </div>
</template>
<script>
export default {
  name:"",
  data(){
    return{
      msg:"contents"
    }
  }
}
</script>
<style scoped>
.contents{
  flex: 1;
  margin: 0;
  overflow: auto;
}
/*动画*/
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>

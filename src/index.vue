<template>
  <keep-alive class="wrapper">
    <router-view v-if="$route.meta.keepAlive"/>
  </keep-alive>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: ''
    }
  }
}
</script>

<style scoped>
 .wrapper{
  width:750px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>

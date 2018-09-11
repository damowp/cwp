
<template>
  <div class="navList">
    <div class="nav">
      <router-link to="/home/homePage">时下流行</router-link>
      <router-link to="/home/listPage">教学视频</router-link>
      <router-link to="/home/rankPage">武林排行</router-link>
      <router-link to="/home/hotPage">热门大师</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:"",
  data(){
    return{
      msg:"navList"
    }
  }
}
</script>
<style scoped>
.navList{
  width: 750px;
  height: auto;
} 
.nav{
  width: 750px;
  height: 100px;
  display: flex;
  flex-direction: row;
}
.nav a{
  flex: 1;
  text-align: center;
  line-height: 100px;
  font-weight: bold;
  font-size: .4rem;
}
 .active{
  border-bottom: .03rem solid #ce3d3e;
  color: #ce3d3e;
} 

</style>

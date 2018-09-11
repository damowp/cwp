<template>
  <div class="home">
    <title/>
    <navList/>
    <contents/>
    <footList/>
  </div>
</template>
<script>
import title from "./title";
import navList from "./navList";
import contents from "./contents";
import footList from "./footList";
export default {
  name:"",
  data(){
    return{
      msg:"home"
    }
  },
  components:{
    title,
    navList,
    contents,
    footList
  }
}
</script>
<style scoped>
.home{
  width:750px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>

<template>
  <div class="vip">
    <div class="vip-list">
        尚未开发
    </div>
    <footlist/>
  </div>
</template>
<script>
import footlist from "../footList"
export default {
  name:"vip",
  data(){
    return{
      msg:"vip"
    }
  },
  components:{
		footlist
  }
}
</script>
<style scoped>
.vip{
		width: 750px;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
.vip-list{
		flex: 1;
		overflow: auto;
	}
</style>

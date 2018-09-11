<template>
  <div class="timetable">
    timetable
    <div class="timetable-list">

    </div>
    <footlist/>
  </div>
</template>
<script>
import footlist from "../footList"
export default {
  name:"timetable",
  data(){
    return{
      msg:"timetable"
    }
  },
  components:{
		footlist
  }
}
</script>
<style scoped>
.timetable{
		width: 750px;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
.timetable-list{
		flex: 1;
		overflow: auto;
	}
</style>

<template>
  <div class="classify">
    <text>分类详情</text>
		<div class="classify-list">
				123
		</div>
		<footlist/>
  </div>
</template>
<script>
import footlist from "../footList"
export default {
  name:"classify",
  data(){
    return{
      msg:"classify"
    }
	},
	components:{
		footlist
	}
}
</script>
<style scoped>
.image{
	width: 100%;
	height: 100%;
}
  /*样式*/
.classify{
		width: 750px;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.classify p{
		width: 100%;
		height: 1rem;
		background: #ce3d3e;
		color: #fff;
		line-height: 1rem;
	}
	.classify p i{
		margin-left:.2rem;
	}
	.classify-list{
		flex: 1;
		overflow: auto;
	}

	/**/
	.iconfont1{
    font-family:iconfont;
    margin-left: .2rem;
  }
</style>

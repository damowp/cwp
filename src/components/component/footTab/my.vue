<template>
  <div class="my">
    <text @click="goBack()"><i class="iconfont1">&#xe77f;</i> 我的信息</text>
  </div>
</template>
<script>
export default {
  name:"my",
  data(){
    return{
      msg:"my"
    }
  },
  created(){
		/*icon*/
		var domModule = weex.requireModule('dom');
		console.log(domModule)
		domModule.addRule('fontFace', {
			'fontFamily': "iconfont",
			'src':"url('//at.alicdn.com/t/font_799344_zc9n017tn1f.ttf') format('truetype')",
		});
  },
  methods:{
    goBack(){
      window.history.go(-1)
    }
  }
}
</script>
<style scoped>

.my{
		width: 750px;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
  .my p{
		width: 100%;
		height: 1rem;
		background: #ce3d3e;
		color: #fff;
		line-height: 1rem;
	}
	.my p i{
		margin-left:.2rem;
	}
/*icon*/
	.iconfont1{
		font-family:iconfont
	}
</style>

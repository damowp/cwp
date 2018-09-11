<template>
	<div class="playList">
		<text @click="goBack()"><i class="iconfont1">&#xe77f;</i> 正在播放</text>
		<div class="play-list">
			<div class="_img">
				<image :src="img" style="width: 3rem;height: 3rem;" class="img_1" ref="test"></image>
			</div>
		</div>
		<div class="autoPlay">
			<audio class="audio" controls="controls" autoplay :src='"https://api.hibai.cn/music/Music/Music?id="+playList+"&type=url"'></audio>
		</div>
	</div>
</template>
<script>

//引入axios
import axios from 'axios'
export default {
  name: 'playList',
  data () {
    return {
		msg:"自动播放ing...可点击返回上一页",
		playList:[]
    }
  },
  created(){
	  this.playList=this.$route.params.id
	  // console.log(this.$route.params.id)
		axios.get("http://39.108.8.219:3000/music/url?id="+playList).then((res)=>{
			this.playList=res.data
			// console.log(res.data)
		})
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
	.playList{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.playList p{
		width: 100%;
		height: 1rem;
		background: #ce3d3e;
		color: #fff;
		line-height: 1rem;
	}
	.playList p i{
		margin-left:.2rem;
	}
	.autoPlay{
		width: 750px;
		height: 2rem;
	}
	audio{
		width: 750px;
		height: 2rem;
	}

	._img{
		width: 750px;
		height: 750px;
		background: rgba(0, 0, 0, .1);
		border-radius: 50%;
		margin-top: .5rem;
	}
	.play-list{
		width: 750px;
		height: 100%;
		flex: 1;
	}
	/*icon*/
	.iconfont1{
		font-family:iconfont
	}

</style>
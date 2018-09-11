<template>
	<div class="details">
		<div class="goBack">
			<span><i class="iconfont1" @click="goBack">&#xe77f;</i> 播放列表</span>
		</div>
		<div class="listL">
			<div class="imgBanner">
				<image :src="img" style="width: 3rem;height: 3rem;" class="img_1" ref="test"></image>
				<span>{{nameList}}</span>
			</div>
			<div class="musitList">
          <div v-for="(item,index) in list" @click="playList(item.id)" class="music-List">
            <span class="num-left">{{index+=1}}</span>
            <span class="name-right">{{item.name}}</span>
          </div>
			</div>
		</div>
		
	</div>
</template>
<script>
//引入axios
import axios from 'axios'
//动画
 const animation = weex.requireModule('animation')
 const modal = weex.requireModule('modal')
export default {
  name: 'details',
  data () {
    return {
		msg:"details",
		list:[],
		img:[],
		nameList:""
    }
  },
  created(){
	  this.getId(this.$route.params.id)
	  // console.log(this.$route.params.id)
		/*icon*/
		var domModule = weex.requireModule('dom');
		domModule.addRule('fontFace', {
			'fontFamily': "iconfont",
			'src':"url('//at.alicdn.com/t/font_799344_zc9n017tn1f.ttf') format('truetype')",
		});
  },
  methods:{
	  getId(iId){
		  // console.log(id)
		  axios.get('http://39.108.8.219:3000/playlist/detail?id='+iId).then((res)=>{
				this.list=res.data.result.tracks,
				this.img=res.data.result.coverImgUrl,
				this.nameList=res.data.result.name
			// console.log(res.data.result.tracks)
		  })
		  
	  },
	  goBack(){
		  window.history.go(-1)
	  },
		playList(playId){
			// console.log(playId)
			this.$router.push('/home/homePage/playList/'+playId)
		}
	 
  }
}
</script>
<style scoped>
	/*icon*/
	.iconfont1{
		font-family:iconfont
	}
	/**/
	.details{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.goBack{
		width: 100%;
		height: 1rem;
		background: #ce3d3e;
	}
	.goBack span{
		color: #fff;
		line-height: 1rem;
		margin-left: .2rem;
	}
	.imgBanner{
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 4rem;
		background:rgba(0,0,0,.35);
	}
	.imgBanner span{
		line-height: 2rem;
		color: #fff;
	}
	.img_1{
		margin: .3rem;
	}

	.musitList{
		flex: 1;
	}
	.listL{
		flex: 1;
		overflow: auto;
	}
  .music-List{
    width: 750px;
    flex-direction: row;
  }
  .num-left{
    width: 10%;
    height: 1rem;
    line-height: 1rem;
    display: block;
    text-align: center;
  }
  .name-right{
    width: 90%;
    height: 1rem;
    line-height: 1rem;
		border-bottom: 1px solid #F5F5F5;
    display: block;
  }
</style>
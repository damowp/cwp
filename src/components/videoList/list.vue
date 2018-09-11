<template>
	<div class="music-list">
          <scroller class="scroller">
            <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
              <text class="indicator-text">下拉刷新 ...</text>
              <loading-indicator class="indicator"></loading-indicator>
            </refresh>
            <!-- 列表渲染 -->
              <div class="cell">
                <div class="one-list" v-for="(item,index) in recommendList" style="">
                  <div class="look" style="position: relative;top:40px;z-index:200;">{{item.trackCount}}W</div>
                  <image :src="item.picUrl" style="width:3.2255rem; height: 3.2255rem;" @click="details(item.id)"></image>
                  <div class="text">
                    {{item.name}}
                  </div>
                </div>
              </div>
            <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
              <text class="indicator-text">加载中...</text>
              <loading-indicator class="indicator"></loading-indicator>
            </loading>
          </scroller>
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
			recommendList:[],
			refreshing: false,
      loadinging: false,
    }
  },
  created(){
	   //歌单
    axios.get('http://39.108.8.219:3000/personalized').then((res)=>{
        this.recommendList=res.data.result
      // console.log(res.data.result)
    })
  },
  methods:{
	 
  }
}
</script>
<style scoped>
	/*icon*/
	.iconfont1{
		font-family:iconfont
	}
	/**/
	/* 歌曲样式  */
  .cell{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .one-list{
    flex: 1 1 28%;
    height: auto;
    margin-left: 0;
    order: 0;
  }
  .look{
    width: 97%;
    background: rgba(0,0, 0,.1);
    color:#fff;
    text-align: right;
    font-size: .14rem;
    height: 40px;
    line-height: 40px;
    padding-right: 3%;
  }
</style>
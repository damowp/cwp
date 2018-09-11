
<template>
  <div class="homePage">
    <!-- 轮播模块 -->
    <div class="swiper">
      <slider class="slider" interval="3000" auto-play="true">
        <div class="frame" v-for="(img,index) in swiperList" :key="index">
          <image class="image" resize="cover" :src="img.src"></image>
        </div>
      </slider>
    </div>
    <!-- 团队介绍 -->
      <div class="damo-t">
        <div class="t">
          <span>
            <image src="http://bbs.daxiangclass.com/view/img/logo.png" style="width:50px; height:51px;" class="img"></image>
          </span>
          <span style="color:#ea4335;">达</span><span style="color:#f8bc05;">魔</span><span style="color:#34ab53;">团</span><span style="color:#4285f4;">队</span>
        </div>
        <ul>
          <li v-for="(team,index) in teamList"> 
            <image :src="team.picture" style="width:150px; height:150px;" class="img"></image>
            <text>{{team.title}}</text>
            <text>{{team.name}}</text>
          </li>
        </ul>
      </div>
    <!-- 免费试看 -->
    <div class="recommendList">
      <!-- 标题 bebebe-->
      <div class="free-list">
        <i class="look-banner">&#xe653;</i><span class="list-her">免费试看专区</span>
      </div>
      <!-- 视频渲染专区 -->
      <div class="v-list">
          <scroller class="scroller">
            <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
              <text class="indicator-text">下拉刷新 ...</text>
              <loading-indicator class="indicator"></loading-indicator>
            </refresh>
            <!-- 列表渲染 -->
              <div class="cell">
                <div class="one-list" v-for="(item,index) in recommendList" style="">
                  <div class="look" style="position: relative;top:0px;z-index:200;">{{item.trackCount}}W</div>
                  <image :src="item.picUrl" class="imgList" @click="details(item.id)"></image>
                  <div class="text">
                    {{item.name}}
                  </div>
                </div>
              </div>
            <!-- <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
              <text class="indicator-text">加载中...</text>
              <loading-indicator class="indicator"></loading-indicator>
            </loading> -->
          <div class="long-btn">
              <router-link to="/home/listPage">查看更多 ></router-link>
          </div>
          </scroller>
      </div>
    </div>
    <!-- 推荐mv -->
    <div class="">
      <!-- 标题 -->
      <div class="song-list">
        <span class="sing-list">精品课堂</span>
      </div>
      <!-- 内容渲染 -->
      <div class="video-list">
        <list class="list">
        <cell class="cell-one" v-for="">
          <div class="videolist">
            <text class="text">开发中</text>
          </div>
        </cell>
  </list>
      </div>
      <div class="long-btn">
        <router-link to="/home/listPage">查看更多 ></router-link>
      </div>
    </div>

  </div>
</template>
<script>
const modal = weex.requireModule("modal");
const LOADMORE_COUNT = 4
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      msg: "homePage",
      swiperList: [
        { src:"//10.url.cn/eth/ajNVdqHZLLBmfPTLKprl7sh6fNc7mTbeicNGwKZiaEibmd19oiaUVJgT6lglceJBz2Unh3ktC2Gv3lo/"},
        {src:"//10.url.cn/eth/ajNVdqHZLLCShKZfiaCy7wMO1GcrV02XFwgOO2cuMlYljkyPLPrzOiadcoaKTu7HnMLrDuwtxvTPw/"},
        {src:"//10.url.cn/eth/ajNVdqHZLLDPyRVGSBLPicUjHWtWdtZV5Wy1X2YkYD1TPAPcpSWTER3f7ekQFPhdFOZUMzvp7cNg/"},
        {src:"//10.url.cn/eth/ajNVdqHZLLBcMElLiazHp9KV3qGjmLnSflrfeGq7ibKqh8F1ej56OvccQcFay5vibFhxlP8yhAgH7M/"}
      ],
      recommendList: [],
      refreshing: false,
      // loadinging: false,
      vList: [],
      videoList: [],
      teamList:[
        {
          picture:"//10.url.cn/eth/ajNVdqHZLLCRzPwKFMLW8NWibbdPlwUPnB81lqtJS3IpnGP80aic0frDYORRrISviaFSK7wmGuMGx4/?tp=webp",
          title:"达魔",
          name:"老祖"
        },
        {
          picture:"//10.url.cn/eth/ajNVdqHZLLDsc9RnRZ4caXNwh8bdSshbCItof3QKsia2zAM8JKia7lSU7bN0ek0W8LicWbibSViaywn0/?tp=webp",
          title:"达魔",
          name:"令狐冲"
        },
        {
          picture:"//10.url.cn/eth/ajNVdqHZLLB3hhQicUeHGbYGWTzRYIGjNANheD9JM80PuRUdXXCuc2icMmficJa1bQC24dfU1BKXP8/?tp=webp",
          title:"达魔",
          name:"虚竹"
        },{
          picture:"//10.url.cn/eth/ajNVdqHZLLBZwG2L0WlkaLRhUL8XprwElrRrnzGJThicgBmurEVXFPBRKZtSZVfF97FQG6nApGpU/?tp=webp",
          title:"达魔",
          name:"张无忌"
        },{
          picture:"//10.url.cn/eth/ajNVdqHZLLAXXxz1HvW08mhfbTp0CiasyuLHmfuRTtt3VGmfk8PXBC1TJ9nTJgpUN2S4KteyBzwM/?tp=webp",
          title:"达魔",
          name:"天山童姥"
        }
      ]
    };
  },
  created() {
    //视频获取
    axios.get("http://39.108.8.219:3000/personalized").then(res => {
      // console.log(res.data.result)
      this.recommendList = res.data.result;
      // console.log(res.data.result)
    });
    //mv
    // axios
    //   .get(
    //     "http://www.daxiangclass.com/demo/teacher/daxiang/dist/api/polyv.php"
    //   )
    //   .then(res => {
    //     // console.log(res.data.result)
    //     // this.videoList=res.data.data
    //     console.log(res.data.data);
    //   });
    //免费专区icon
    var domModule = weex.requireModule("dom");
    domModule.addRule("fontFace", {
      fontFamily: "look-banner",
      src:
        "url('//at.alicdn.com/t/font_799344_zub7hiqyaj.ttf') format('truetype')"
    });
    //团队icon
    // var domModule = weex.requireModule('dom');
    // domModule.addRule('fontFace', {
    // 	'fontFamily': "tb",
    // 	'src':"url('//at.alicdn.com/t/font_799344_whv3xy47n.ttf') format('truetype')",
    // });
  },
  methods: {
    onrefresh(event) {
      modal.toast({ message: "刷新成功", duration: 1 });
      this.refreshing = true;
      setTimeout(() => {
        this.refreshing = false;
      }, 2000);
    },
    onloading(event) {
      modal.toast({ message: "加载中", duration: 1 });
      this.loadinging = true;
      setTimeout(() => {
        this.loadinging = false;
      }, 2000);
    },
    details(id) {
      // console.log(id)
      this.$router.push("/home/homePage/details/" + id);
    },
    fetch (event) {
        modal.toast({ message: 'loadmore', duration: 1 })
        setTimeout(() => {
          const length = this.lists.length
          for (let i = length; i < length + LOADMORE_COUNT; ++i) {
            this.lists.push(i + 1)
          }
        }, 800)
      }
  }
};
</script>
<style scoped>
.home {
  flex: 1;
}
.swiper {
  width: 750px;
  height: auto;
}
/*轮播*/
.image {
  width: 750px;
  height: 3rem;
}
.slider {
  width: 750px;
  height: 3rem;
}
/* 免费试听样式 */
.free-list {
  width: 750px;
  height: 1rem;
  margin-top: 0.2rem;
  flex-direction: row;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.1);
}
.long-btn {
  height: auto;
  width: 600px;
  height: 0.7rem;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  background: #efeff4;
  border-radius: 10px;
  margin-left: 75px;
  margin-right: 75px;
  margin-top: 15px;
  margin-bottom: 0.2rem;
}
.long-btn a {
  color: red;
  font-size: 14px;
}
.look-banner {
  font-family: look-banner;
  font-size: 70px;
  color: #9e9e9e;
}
/* 达魔团队 */
.t {
  width: 750px;
  height: 1rem;
  /* margin-top: .1rem; */
  flex-direction: row;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.1);
}
.t span {
  margin-left: 2px;
  font-weight: bold;
}
.damo-t {
  width: 750px;
  height: auto;
}
.damo-t ul li .weex-image {
  border-radius: 50%;
}
.damo-t ul {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 0.2rem;
}
.damo-t ul li {
  flex-wrap: wrap;
  margin-left: 0.2rem;
}
.damo-t ul li p {
  text-align: center;
}
/* icon */
.tb {
  font-family: tb;
  font-size: 70px;
  color: #9e9e9e;
}
/*推荐歌单*/
.song-list {
  width: 100%;
  height: 1rem;
  display: flex;
  flex-direction: row;
  padding: 0 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.1);
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
}
.song-list a {
  text-align: right;
  padding-right: 20px;
  color: #666;
  font-size: 14px;
}
.recommendList {
  width: 100%;
  height: auto;
}
.sing-list {
  display: inline-block;
  width: 200px;
}
.song-list-jump {
  width: 550px;
  line-height: 1rem;
  font-size: 12px;
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  padding: 5px;
  height: auto;
}
.v-list {
  padding: 0 5px;
}
.list-her {
  font-weight: bold;
}
/* 歌曲样式  */
.cell {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5px;
}
/* 单个样式 */
.one-list {
  flex: 1 1 35%;
  height: auto;
  margin: 5px;
  margin-top: 0.1rem;
  border-radius: 0.1rem;
  box-shadow: #bebebe 0 0 10px; /*阴影*/
}
.imgList {
  width: 95%;
  height: 3rem;
  margin: 0.1rem;
}
.look {
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  text-align: right;
  font-size: 0.14rem;
  height: 40px;
  line-height: 40px;
  padding-right: 3%;
}
/* 精品课堂 */
.video-list {
  width: 750px;
  height: auto;
}
.videolist {
  width: 600px;
  height: 200px;
  margin-left: 75px;
  margin-top: 35px;
  margin-bottom: 35px;
  flex-direction: column;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  border-radius: 0.2rem;
}
/**/
.one-video {
  flex: 1 1 50%;
  height: auto;
  margin-left: 0;
  order: 0;
  padding: 0.15rem;
}
.text span {
  font-size: 13px;
}
.MV {
  width: 97.5%;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  text-align: right;
  font-size: 0.14rem;
  height: 40px;
  line-height: 40px;
  padding-right: 3%;
}
/**/
</style>

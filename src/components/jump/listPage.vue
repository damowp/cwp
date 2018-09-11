<template>
	<div class="v-list">
          <scroller class="scroller">
            <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
              <text class="indicator-text">下拉刷新 ...</text>
              <loading-indicator class="indicator"></loading-indicator>
            </refresh>
            <!-- 列表渲染 -->
              <div class="cell">
                <div class="one-list" v-for="(item,index) in recommendList" style="">
                  <div class="look" style="position: relative;top:0;z-index:200;">{{item.trackCount}}W</div>
                  <image :src="item.picUrl" class="imgList" @click="details(item.id)"></image>
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
import axios from "axios";
//动画
const animation = weex.requireModule("animation");
const modal = weex.requireModule("modal");
export default {
  name: "details",
  data() {
    return {
      msg: "details",
      recommendList: [],
      refreshing: false,
      loadinging: false
    };
  },
  created() {
    //歌单
    axios.get("http://39.108.8.219:3000/personalized").then(res => {
      this.recommendList = res.data.result;
      // console.log(res.data.result)
    });
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
    }
  }
};
</script>
<style scoped>
/*icon*/
.iconfont1 {
  font-family: iconfont;
}
/**/
/* 歌曲样式  */
.cell {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
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
/*推荐歌单*/
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
  height: auto;
  padding: 5px;
}
.v-list {
  padding: 0 5px;
}
</style>
<template>
  <div class="navList">
    <div class="nav">
      <router-link to="/"><span class="home">&#xe7c6;</span>首页</router-link>      
      <router-link to="/classify"><span class="classify">&#xe792;</span>分类</router-link>
      <router-link to="/vip"><span class="vip">&#xe7af;</span>VIP</router-link>
      <router-link to="/timetable"><span class="timetable">&#xe793;</span>课程表</router-link>
      <router-link to="/my"><span class="my">&#xe7ae;</span>我的</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name:"",
  data(){
    return{
      msg:"navList"
    }
  },
  created(){
		/*icon*/
		var domModule = weex.requireModule('dom');
		domModule.addRule('fontFace', {
			'fontFamily': "classify",
			'src':"url('//at.alicdn.com/t/font_799344_gneapi27o.ttf') format('truetype')",
    });
    domModule.addRule('fontFace', {
			'fontFamily': "my",
			'src':"url('//at.alicdn.com/t/font_799344_1stivrjkju5.ttf') format('truetype')",
    });
    domModule.addRule('fontFace', {
			'fontFamily': "home",
			'src':"url('//at.alicdn.com/t/font_799344_dlg99uyqimk.ttf') format('truetype')",
    });
    domModule.addRule('fontFace', {
			'fontFamily': "timetable",
			'src':"url('//at.alicdn.com/t/font_799344_fwvdrvzmnrb.ttf') format('truetype')",
    }); 
    domModule.addRule('fontFace', {
			'fontFamily': "vip",
			'src':"url('//at.alicdn.com/t/font_799344_25b7nfoo14n.ttf') format('truetype')",
    }); 
  }
}
</script>
<style scoped>
.navList{
  width: 750px;
  height: auto;
  border-top: 2px solid #b7b7b7;
} 
.nav{
  width: 750px;
  display: flex;
  flex-direction: row;
}
.nav a{
  flex: 1;
  text-align: center;
  font-size: 15px;
  align-items:center;/*垂直居中*/
  justify-content: center;/*水平居中*/
}
/* .active{
  background: #ce3d3e;
  color: #fff;
} */
/*icon*/
	.classify{
    font-family:classify;
    font-size: 70px;
    color: #9e9e9e;
  }
  .my{
    font-family:my;
    font-size: 70px;
    color: #9e9e9e;
  }
  .home{
    font-family:home;
    font-size: 70px;
    color: #9e9e9e;
  }
  .timetable{
    font-family:timetable;
    font-size:70px;
    color: #9e9e9e;
  }
  .vip{
    font-family:vip;
      font-size:70px;
      color: #9e9e9e;
  }
</style>

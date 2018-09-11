<template>
  <div class="title">
    <div class="left-list">

    </div>
    <i class="sou">&#xe651;</i>
    <image src="http://bbs.daxiangclass.com/view/img/logo.png" style="width:50px; height:51px;" class="img"></image>
    <input type="text" placeholder="请输入搜索关键字"/>
    <span><i class="iconfont1" @click="broadside()">&#xe7f4;</i></span>
  </div>
</template>
<script>
export default {
  name:"",
  data(){
    return{
      msg:""
    }
  },created(){
		/*icon*/
		var domModule = weex.requireModule('dom');
		domModule.addRule('fontFace', {
			'fontFamily': "iconfont",
			'src':"url('//at.alicdn.com/t/font_799344_4evir6188j9.ttf') format('truetype')",
    });
    domModule.addRule('fontFace', {
			'fontFamily': "iconfont1",
			'src':"url('//at.alicdn.com/t/font_799344_37lxy1pbjgu.ttf') format('truetype')",
		});
  },
  methods:{
    broadside(){
      
    }
  }
}
</script>
<style scoped>
.title{
  width: 750px;
  height: 98px;
  flex-direction: row;
  align-items: center;
  position: relative;
}
/*弹出侧边栏*/ 
.title input{
  width: 550px;
  height: 56px;
  background: #efeff4;
  padding-left: 10px;
  border-radius: 10px;
  outline: none;
  margin-left: 15px;
  font-size: 12px;
  padding-left: 50px;
}
.img{
  margin-left: px;
}
/*icon*/
.iconfont1{
    font-family:iconfont;
    font-size: 55px;
    color: #9e9e9e;
    margin-left: .2rem;
  }
.sou{
  font-family:iconfont1;
    font-size: 40px;
    color: #9e9e9e;
    position: relative;
    left: 115px;
    z-index:18;
}
</style>

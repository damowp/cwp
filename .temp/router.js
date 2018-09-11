import Vue from 'vue'
/*global Vue*/
/* jshint esversion: 6 */
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import home from '@/components/component/home';
import classify from '@/components/component/footTab/classify';
import vip from '@/components/component/footTab/vip';
import timetable from '@/components/component/footTab/timetable';
import my from '@/components/component/footTab/my';

import homePage from '@/components/jump/homePage';
import listPage from '@/components/jump/listPage';
import rankPage from '@/components/jump/rankPage';
import hotPage from '@/components/jump/hotPage';
import details from '@/components/videoList/details';
import playList from '@/components/playList/playList';
Vue.use(Router);

module.exports = new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{keepAlive:true},//需要keepAlive
      children:[
        {
          path: '/',
          name:"homePage",
          component: homePage,
          meta:{keepAlive:true}//需要keepAlive
        },
        {
          path: '/home/homePage',
          component: homePage,
          name:"homePage",
          meta:{keepAlive:true}//需要keepAlive
        },{
          path: '/home/listPage',
          component: listPage,
          name:"listPage",
          meta:{keepAlive:true}//需要keepAlive
        },{
          path: '/home/rankPage',
          component: rankPage,
          name:"rankPage",
          meta:{keepAlive:true}//需要keepAlive
        },{
          path: '/home/hotPage',
          component: hotPage,
          name:"hotPage",
          meta:{keepAlive:true}//需要keepAlive
        }
      ]
    },{
      path:"/classify",
      component:classify,
      name:"classify",
      meta:{keepAlive:true}//需要keepAlive
    },{
      path:"/vip",
      component:vip,
      name:"vip",
      meta:{keepAlive:true}//需要keepAlive
    },{
      path:"/timetable",
      component:timetable,
      name:"timetable",
      meta:{keepAlive:true}//需要keepAlive
    },{
      path:"/my",
      component:my,
      name:"true",
      meta:{keepAlive:true}//需要keepAlive
    },
    {
			path: '/home/homePage/details/:id',
      component: details,
      name:"details",
      meta:{keepAlive:true}//需要keepAlive
    },
    {
			path: '/home/homePage/playList/:id',
      component: playList,
      name:"playList",
      meta:{keepAlive:true}//需要keepAlive
		},
    {
      path:"/*",
      redirect:"/home/homePage"
    }
  ]
});

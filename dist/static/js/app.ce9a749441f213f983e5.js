webpackJsonp([1],{"0j5d":function(t,e){},"3GbY":function(t,e){},"4ml/":function(t,e){},"9LyU":function(t,e){},A0ln:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkiFXSYAAAAVdFJOUwDm8Za4KQn7bBFG18herTkZBHyKTt6+JaAAAAIfSURBVFjDtVjbgqsgDCzXgHhB6/z/ry7a3XPUYg0uy0MfsA4hyUwSH4+/XOPglA6SQDJo5YaxFMA7LbFfUjtfgND0lF4KyjXGj4/Rm8apkHaob5gIc5v+rbt42I6dTsjtzEAwCUFMMfssTiKhmAsE+yQId+6+0QnQ014ZoT57zqvPpswSYbi87RAgT73SEXpO+HwP6vKPHDAxQzcBLmvFyf7ZeRlLZiqAWEDozSdG4lnEhifkITo2oC+kVI9gD6jCF2KkY3eWG6KhWBwGou1tWqgbCqPQbmJSfpM11wTmjRnultS5/4Y0EPYWhhVo/kVpetxb009GeKJ4eWJeBCOR/76VvtR4fUJU/e1Jje4XRF3Pt4TIImrOaRG0hGNAYMWRsqQMGNYTeDnaZUHUekfFTbCkMCpzR7W6dGZmQyPRH8vGvDo1wLCZ+g5iVm9K8PmWQLQ9BEakX0JBV2AE2h2IhUy/wHYP1yv4/QtvdjAwpH+zo8Qfi0P2xfblj4K4LNE9+PQVF35+rAV5zOUHO08X3ql8nnL5svB/OuELk7ejykrIi7c8/RjzPYd/6QdLx6yGbM51jKOnvoUcPukpQ9c1hPmo64z6YnT8XF+q1Lka9bZK3a/Rf1Tpg1I/Fn7bj1XpC2v0p1X65Cr9epW5ocr8UmWOStEJVxPfOjUGcz1XnqPY67myynxbZ84+zPvR35r363x32H7/SC+Le98/itYXKn4o0mvBsDUAAAAASUVORK5CYII="},HUiy:function(t,e){},IB8l:function(t,e){},KUnw:function(t,e){},"L+vd":function(t,e){},L67a:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"50px"}},[n("van-tabbar",{staticStyle:{"border-radius":"5px"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"wap-home",to:"/"}},[t._v("首页")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"new-arrival",to:"/BestSellers"}},[t._v("热卖")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"weapp-nav",to:"/classification"}},[t._v("分类")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"shopping-cart",to:"/shopCart"}},[t._v("购物车")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"manager",to:"myCenter"}},[t._v("我的")])],1)],1)},staticRenderFns:[]};var o={name:"App",components:{footNav:n("VU/8")({data:function(){return{active:0}},methods:{},created:function(){}},i,!1,function(t){n("L+vd")},"data-v-7ca49916",null).exports}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("footNav")],1)},staticRenderFns:[]};var r=n("VU/8")(o,s,!1,function(t){n("vasq")},null,null).exports,c=n("/ocq"),l=n("//Fk"),d=n.n(l),u=n("mtWM"),v=n.n(u);v.a.defaults.timeout=5e3;var h=v.a.create({headers:{"Content-Type":"application/json; charset=utf-8"}});h.interceptors.request.use(function(t){return t.method,t},function(t){return d.a.reject(t)}),h.interceptors.response.use(function(t){return t},function(t){console.log(t)});var p=h;function m(t){return p({url:"/heyushuo/heyushuo/search/helperaction",method:"get",params:t})}function f(t){return p({url:"/heyushuo/heyushuo/category/currentaction",method:"get",params:t})}function _(t){return p.post("/heyushuo/heyushuo/collect/addcollect",t)}function g(t){return p({url:"/heyushuo/heyushuo/address/getListAction",method:"get",params:t})}var y={data:function(){return{opens:!1,show:!1,searchHint:!1,params:{keyword:"",openId:""},searchList:"",indexactions:"",history:""}},methods:{onblur:function(){this.show=!0,this.indexAction()},searchHints:function(){this.searchHint=!0},hidden:function(){this.searchHint=!1},onSearchs:function(){var t=this;m(this.params).then(function(e){t.searchList=e.data.keywords}),null==this.params.keyword&&this.searchList},onSearch:function(){this.show=!0,this.$router.push({path:"/productList",query:{keywords:this.params.keyword}})},searchShop:function(t){this.params.keyword=t.keyword,this.onSearch()},indexAction:function(){var t,e=this;(t=this.params,p({url:"/heyushuo/heyushuo/search/indexaction",method:"get",params:t})).then(function(t){e.indexactions=t.data.hotKeywordList,e.history=t.data.historyData})},clearHistory:function(){var t=this;this.$dialog.confirm({title:"是否清空搜索记录"}).then(function(){var e;t.$toast("历史记录已清空"),e=t.params,p.post("/heyushuo/heyushuo/search/clearhistoryAction",e),t.indexAction()}).catch(function(){t.$toast("删除操作已取消")})}},created:function(){}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-search",{attrs:{"show-action":"",label:"请输入",placeholder:"要搜索的内容"},on:{focus:t.onblur},scopedSlots:t._u([{key:"action",fn:function(){return[n("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}])}),t._v(" "),n("van-popup",{style:{width:"80%",height:"100%"},attrs:{position:"left"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("van-search",{attrs:{"show-action":"",placeholder:"要搜索的内容"},on:{input:t.onSearchs,focus:t.searchHints,blur:t.hidden},scopedSlots:t._u([{key:"action",fn:function(){return[n("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.params.keyword,callback:function(e){t.$set(t.params,"keyword",e)},expression:"params.keyword"}}),t._v(" "),t.searchHint?n("div",t._l(t.searchList,function(e,a){return n("div",{key:a},[n("p",[t._v(t._s(e.name))])])}),0):n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.history.length,expression:"history.length != 0"}]},[n("p",{staticStyle:{padding:"10px 5px"}},[n("span",[t._v("历史记录")]),t._v(" "),n("van-icon",{staticStyle:{float:"right","margin-right":"10px"},attrs:{name:"delete"},on:{click:t.clearHistory}})],1),t._v(" "),t._l(t.history,function(e,a){return n("van-tag",{key:a,staticStyle:{margin:"5px 10px"},attrs:{plain:"",type:"primary"},on:{click:function(n){return t.searchShop(e)}}},[t._v(t._s(e.keyword))])})],2),t._v(" "),n("div",{staticStyle:{"margin-top":"10px",padding:"10px 5px"}},[n("p",[t._v("热门推荐")]),t._v(" "),t._l(t.indexactions,function(e,a){return n("van-tag",{key:a,staticStyle:{margin:"5px 10px"},attrs:{plain:"",type:"primary"},on:{click:function(n){return t.searchShop(e)}}},[t._v(t._s(e.keyword))])})],2)])],1)],1)},staticRenderFns:[]};var x=n("VU/8")(y,b,!1,function(t){n("9LyU")},"data-v-5b09a8db",null).exports,k={data:function(){return{homeProducts_banner:"",homeProducts_bannerList:"",homeProducts_zg:"",homeProducts_goods:"",homeProducts_hotGoods:"",homeProducts_newCategoryList:"",btnFlag:!1}},components:{topNav:x},methods:{getceshi:function(){var t,e=this;p({url:"/heyushuo/heyushuo/index/index",method:"get",params:t}).then(function(t){e.homeProducts_banner=t.data.banner,e.homeProducts_bannerList=t.data.channel,e.homeProducts_zg=t.data.brandList,e.homeProducts_goods=t.data.newGoods,e.homeProducts_hotGoods=t.data.hotGoods,e.homeProducts_newCategoryList=t.data.newCategoryList})},goodsDetail:function(t){return void 0==t.id?void this.$router.push({path:"/product",query:{id:t}}):void this.$router.push({path:"/product",query:{id:t.id}})},getcommodityDetails:function(t){this.$router.push({path:"/commodityDetails",query:{id:t.id}})},backTop:function(){var t=this,e=setInterval(function(){var n=Math.floor(-t.scrollTop/5);document.documentElement.scrollTop=document.body.scrollTop=t.scrollTop+n,0===t.scrollTop&&clearInterval(e)},16)},scrollToTop:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop=t,this.scrollTop>600?this.btnFlag=!0:this.btnFlag=!1}},mounted:function(){this.getceshi(),window.addEventListener("scroll",this.scrollToTop)},destroyed:function(){window.removeEventListener("scroll",this.scrollToTop)}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("top-nav"),t._v(" "),a("van-swipe",{staticClass:"my-swipe",attrs:{"indicator-dots":"true",autoplay:3e3}},t._l(t.homeProducts_banner,function(t,e){return a("van-swipe-item",{key:e},[a("img",{attrs:{src:t.image_url}})])}),1),t._v(" "),a("div",{staticClass:"channel"},[a("van-grid",{attrs:{border:!1,"column-num":5}},t._l(t.homeProducts_bannerList,function(e,n){return a("van-grid-item",{key:n,on:{click:function(n){return t.getcommodityDetails(e)}}},[a("van-image",{attrs:{src:e.icon_url}}),t._v(" "),a("span",[t._v(t._s(e.name))])],1)}),1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"15px"}},[a("router-link",{staticClass:"ppzg",attrs:{to:"/"}},[t._v("品牌制造商直供")]),t._v(" "),a("van-grid",{attrs:{border:!1,"column-num":2}},t._l(t.homeProducts_zg,function(e,n){return a("van-grid-item",{key:n},[a("van-image",{attrs:{src:e.new_pic_url}}),t._v(" "),a("span",{staticStyle:{position:"absolute",top:"20px",left:"15px",color:"#CC6600"}},[a("p",[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v(t._s(e.floor_price)+"起")])])],1)}),1)],1),t._v(" "),a("div",[t._m(0),t._v(" "),a("div",{staticClass:"list"},[a("ul",{staticStyle:{background:"#ffffff"}},t._l(t.homeProducts_goods,function(e,n){return a("li",{key:n,on:{click:function(n){return t.goodsDetail(e.id)}}},[a("img",{attrs:{src:e.list_pic_url,alt:""}}),t._v(" "),a("p",[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v(t._s(e.goods_brief))]),t._v(" "),a("p",{staticClass:"price"},[t._v("￥"+t._s(e.retail_price))])])}),0)])]),t._v(" "),a("div",[t._m(1),t._v(" "),a("div",{staticClass:"list"},[a("ul",{staticStyle:{background:"#ffffff"}},t._l(t.homeProducts_hotGoods,function(e,n){return a("li",{key:n,on:{click:function(n){return t.goodsDetail(e)}}},[a("img",{attrs:{src:e.list_pic_url}}),t._v(" "),a("p",[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v(t._s(e.goods_brief))]),t._v(" "),a("p",{staticClass:"price"},[t._v("￥"+t._s(e.retail_price))])])}),0)])]),t._v(" "),t._l(t.homeProducts_newCategoryList,function(e,i){return a("div",{key:i},[a("div",{staticStyle:{"text-align":"center",padding:"20px 0px 10px"}},[a("p",{staticStyle:{color:"#758a99","font-size":"14px"}},[t._v(t._s(e.name)+"好物")])]),t._v(" "),a("van-grid",{attrs:{border:!0,"column-num":2}},[t._l(e.goodsList,function(e,n){return a("van-grid-item",{key:n,on:{click:function(n){return t.goodsDetail(e)}}},[a("van-image",{attrs:{src:e.list_pic_url}}),t._v(" "),a("span",[a("p",[t._v(t._s(e.name))])])],1)}),t._v(" "),a("van-grid-item",[a("span",{on:{click:function(n){return t.getcommodityDetails(e)}}},[a("span",{staticStyle:{"font-size":"16px",color:"#758a99"}},[t._v("查看更多")]),t._v(" "),a("img",{staticStyle:{width:"14px"},attrs:{src:n("A0ln")}})])])],2)],1)}),t._v(" "),a("div",{staticStyle:{position:"fixed",top:"6rem",right:"12px"}},[t.btnFlag?a("van-icon",{attrs:{name:"back-top",color:"#FF4500",size:"30"},on:{click:function(e){return t.backTop()}}}):t._e()],1)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"newsShop"},[e("p",{staticStyle:{color:"#758a99","font-size":"14px"}},[this._v("新品首发")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"newsShop"},[e("p",{staticStyle:{color:"#758a99","font-size":"14px"}},[this._v("人气推荐·好物精选")])])}]};var S=n("VU/8")(k,w,!1,function(t){n("gwOW")},"data-v-3b9363e3",null).exports,L={data:function(){return{bestSellersList:[],params:{page:1,count:5}}},methods:{getBestSellers:function(){var t,e=this;(t=this.params,p({url:"/heyushuo/heyushuo/topic/listaction",method:"get",params:t})).then(function(t){e.bestSellersList=e.bestSellersList.concat(t.data.data)})}},created:function(){this.getBestSellers()},mounted:function(){var t=this;this.getBestSellers(this.params.page),window.addEventListener("scroll",function(){(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop)+window.innerHeight+0>=document.body.offsetHeight&&t.getBestSellers(t.params.page+=1)})}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-grid",{attrs:{"column-num":1,border:!1}},t._l(t.bestSellersList,function(e,a){return n("van-grid-item",{key:a},[n("img",{staticStyle:{width:"9rem"},attrs:{src:e.scene_pic_url}}),t._v(" "),n("span",{staticStyle:{"font-size":"14px",display:"inline-block","margin-top":"5px"}},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticStyle:{"font-size":"12px",color:"#758a99","text-align":"center"}},[t._v(t._s(e.subtitle))]),t._v(" "),n("span",{staticStyle:{color:"#CC6600"}},[t._v("￥"+t._s(e.price_info)+"起")])])}),1)],1)},staticRenderFns:[]};var A=n("VU/8")(L,C,!1,function(t){n("0j5d")},"data-v-4bb09f58",null).exports,P={data:function(){return{activeKey:0,indexactionList:"",indexactionContent:"",indexactionContentList:"",params:{id:1005e3},choseClick:!1}},components:{topNav:x},methods:{getindexaction:function(){var t,e=this;p({url:"/heyushuo/heyushuo/category/indexaction",method:"get",params:t}).then(function(t){e.indexactionList=t.data.categoryList})},getDetails:function(t){this.$router.push({path:"/commodityDetails",query:{id:t.id}})},choseName:function(t){var e=this;this.choseClick=!0,this.params.id=this.indexactionList[t].id,f(this.params).then(function(t){e.indexactionContent=t.data.data.currentOne,e.indexactionContentList=t.data.data.currentOne.subList})},getContent:function(){var t=this;0==this.choseClick&&f(this.params).then(function(e){t.indexactionContent=e.data.data.currentOne,t.indexactionContentList=e.data.data.currentOne.subList})}},created:function(){this.getindexaction(),this.getContent()}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top-nav"),t._v(" "),n("div",{staticClass:"leftNav"},[n("van-sidebar",{on:{change:t.choseName},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.indexactionList,function(t,e){return n("div",{key:e},[n("van-sidebar-item",{attrs:{title:t.name}})],1)}),0)],1),t._v(" "),n("div",{staticClass:"content"},[n("div",[n("img",{staticStyle:{height:"3rem",width:"7rem"},attrs:{src:t.indexactionContent.banner_url}})]),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v("——"+t._s(t.indexactionContent.name)+"分类——")]),t._v(" "),n("van-grid",{attrs:{"column-num":2,gutter:10,border:!1}},t._l(t.indexactionContentList,function(e,a){return n("van-grid-item",{key:a,on:{click:function(n){return t.getDetails(e)}}},[n("img",{staticStyle:{width:"2rem"},attrs:{src:e.wap_banner_url}}),t._v(" "),n("span",[t._v(t._s(e.name))])])}),1)],1)],1)},staticRenderFns:[]};var Z=n("VU/8")(P,$,!1,function(t){n("Rngz")},"data-v-42c80a32",null).exports,T={data:function(){return{shopList:"",params:{openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",id:""},cartParams:{allPrise:"",goodsId:"",openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"},result:[],allcheck:!0}},components:{},computed:{totalPrice:function(){var t=0;if(0!=this.result.length)for(var e=0;e<this.result.length;e++){var n=this.result[e];t+=n.retail_price*n.number}return t.toString().replace(/\B(?=(\d{3})+$)/g,",")}},methods:{getCartList:function(){var t,e=this;(t=this.params,p({url:"/heyushuo/heyushuo/cart/cartList",method:"get",params:t})).then(function(t){e.shopList=t.data.data})},deleteShop:function(t){var e=this;this.params.id=t.id,this.$dialog.confirm({title:"从购物删除商品"}).then(function(){var t;e.$toast("商品删除成功"),t=e.params,p({url:"/heyushuo/heyushuo/cart/deleteAction",method:"get",params:t}),e.getCartList()}).catch(function(){e.$toast("删除操作已取消")})},onSubmit:function(){var t,e=this;this.cartParams.allPrise=this.totalPrice,(t=this.cartParams,p.post("/heyushuo/heyushuo/order/submitAction",t)).then(function(t){1==t.data.data?e.$router.push({path:"/orderDetails"}):e.$toast("购物车信息有误")})},toggle:function(t,e){this.$refs.checkboxes[t].toggle(),this.cartParams.goodsId=this.cartParams.goodsId.concat(e.goods_id+",")},quanxuan:function(){this.allcheck=!1,this.$refs.checkboxesAll.toggleAll(!0)},Qxquanxuan:function(){this.allcheck=!0,this.$refs.checkboxesAll.toggleAll(!1)}},created:function(){this.getCartList()}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"shopTitle"},[t._v("我的购物车")]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"100px"}},[n("van-checkbox-group",{ref:"checkboxesAll",model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},[t._l(t.shopList,function(e,a){return n("div",{key:a,staticClass:"content"},[n("van-card",{attrs:{num:e.number,price:e.retail_price,title:e.goods_name,thumb:e.list_pic_url},on:{click:function(n){return t.toggle(a,e)}},scopedSlots:t._u([{key:"footer",fn:function(){return[n("van-checkbox",{ref:"checkboxes",refInFor:!0,staticStyle:{position:"absolute",left:"5px",top:"45px"},attrs:{name:e,"checked-color":"#0066cc"}})]},proxy:!0}],null,!0)})],1)}),t._v(" "),0!=t.result.length?n("van-submit-bar",{attrs:{"button-text":"去结算"},on:{submit:t.onSubmit}},[t.allcheck?n("van-button",{staticStyle:{border:"none"},on:{click:t.quanxuan}},[t._v("全选")]):n("van-button",{staticStyle:{border:"none"},on:{click:t.Qxquanxuan}},[t._v("取消")]),t._v(" "),n("span",{staticStyle:{width:"3rem","margin-left":"50px",color:"#cc6600"}},[t._v("总计:￥"+t._s(t.totalPrice))])],1):n("van-submit-bar",{attrs:{"button-text":"去结算",disabled:""},on:{submit:t.onSubmit}},[t.allcheck?n("van-button",{staticStyle:{border:"none"},on:{click:t.quanxuan}},[t._v("全选")]):n("van-button",{staticStyle:{border:"none"},on:{click:t.Qxquanxuan}},[t._v("取消")]),t._v(" "),n("span",{staticStyle:{width:"3rem","margin-left":"50px",color:"#cc6600"}},[t._v("总计:￥"+t._s(t.totalPrice))])],1)],2)],1)])},staticRenderFns:[]};var F=n("VU/8")(T,U,!1,function(t){n("3GbY")},"data-v-3aa22ff2",null).exports,V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"17rem"}},[n("van-nav-bar",{attrs:{title:"个人中心"}}),t._v(" "),t._m(0),t._v(" "),n("van-divider",{attrs:{"content-position":"left"}},[t._v("我的购物")]),t._v(" "),n("van-grid",{attrs:{gutter:3}},[n("van-grid-item",{attrs:{icon:"goods-collect-o",text:"收藏夹"},on:{click:t.lookCollect}}),t._v(" "),n("van-grid-item",{attrs:{icon:"todo-list-o",text:"浏览记录"}}),t._v(" "),n("van-grid-item",{attrs:{icon:"orders-o",text:"我的订单"}}),t._v(" "),n("van-grid-item",{attrs:{icon:"idcard",text:"我的卡包"}})],1),t._v(" "),n("van-divider",{attrs:{"content-position":"left"}},[t._v("我的管理")]),t._v(" "),n("van-grid",{attrs:{gutter:3}},[n("van-grid-item",{attrs:{icon:"logistics",text:"收货地址"},on:{click:t.address}})],1),t._v(" "),n("van-divider",{attrs:{"content-position":"left"}},[t._v("联系客服")]),t._v(" "),n("van-grid",{attrs:{gutter:3}},[n("van-grid-item",{attrs:{icon:"comment-circle-o",text:"联系客服"}}),t._v(" "),n("van-grid-item",{attrs:{icon:"question-o",text:"帮助中心"}}),t._v(" "),n("van-grid-item",{attrs:{icon:"envelop-o",text:"意见反馈"},on:{click:t.feedback}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"myCenter"},[e("img",{attrs:{src:n("zbmm")}}),this._v(" "),e("div",{staticClass:"user"},[this._v("用户名")])])}]};var z=n("VU/8")({components:{},methods:{lookCollect:function(){this.$router.push("/collect")},address:function(){this.$router.push("/address")},feedback:function(){this.$router.push("/Feedback")}}},V,!1,function(t){n("ZPd4")},"data-v-47e6c335",null).exports,D={data:function(){return{productMessage:"",productMessageName:"",productMessageGoods_brief:"",productMessageRetail_price:"",primary_pic_urls:"",goods_desc:"",productList:"",number:1,issue:"",show:!1,collect:!1,value:"",params:{id:"",openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",goodsId:""},btnFlag:!1}},created:function(){this.params.id=this.$route.query.id,this.getProduct()},methods:{getProduct:function(){var t,e=this;(t=this.params,p({url:"/heyushuo/heyushuo/goods/detailaction",method:"get",params:t})).then(function(t){e.productMessage=t.data,e.productMessageName=t.data.info.name,e.productMessageGoods_brief=t.data.info.goods_brief,e.productMessageRetail_price=t.data.info.retail_price,e.primary_pic_urls=t.data.info.primary_pic_url,e.goods_desc=t.data.info.goods_desc,e.issue=t.data.issue,e.productList=t.data.productList})},addCollect:function(){var t=this;this.params.goodsId=this.params.id,_(this.params).then(function(e){"success"==e.data.data?(t.$toast("收藏成功"),t.collect=!0):t.$toast("收藏失败，请重试")})},cancelCollect:function(){var t=this;this.params.goodsId=this.params.id,_(this.params).then(function(e){0==e.data.code?(t.$toast("取消收藏成功"),t.collect=!1):t.$toast("取消收藏失败，请重试")})},addCart:function(){var t,e=this;this.params.goodsId=this.params.id,this.params.number=this.number,(t=this.params,p.post("/heyushuo/heyushuo/cart/addCart",t)).then(function(t){"success"==t.data.data?e.$toast("加入购物车成功"):e.$toast("加入购物车失败，请重试")})},lookProducts:function(t){this.$router.push({path:"/product",query:{id:t.id}}),this.backTop()},onClickLeft:function(){this.$router.back(-1)},backTop:function(){var t=this,e=setInterval(function(){var n=Math.floor(-t.scrollTop/5);document.documentElement.scrollTop=document.body.scrollTop=t.scrollTop+n,0===t.scrollTop&&clearInterval(e)},16)},scrollToTop:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop=t,this.scrollTop>200?this.btnFlag=!0:this.btnFlag=!1}},mounted:function(){window.addEventListener("scroll",this.scrollToTop)},destroyed:function(){window.removeEventListener("scroll",this.scrollToTop)}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",[n("van-swipe",{attrs:{autoplay:3e3}},t._l(t.productMessage.gallery,function(t,e){return n("van-swipe-item",{key:e},[n("img",{staticStyle:{width:"10rem"},attrs:{src:t.img_url}})])}),1),t._v(" "),n("div",{staticClass:"title",staticStyle:{padding:"10px 20px"}},[n("p",{staticStyle:{"font-size":"14px","font-weight":"bold"}},[t._v(t._s(t.productMessageName))]),t._v(" "),n("p",{staticStyle:{"font-size":"12px",color:"#758a99"}},[t._v(t._s(t.productMessageGoods_brief))]),t._v(" "),n("p",{staticStyle:{color:"#CC6600","font-size":"14px"}},[t._v("￥"+t._s(t.productMessageRetail_price))])]),t._v(" "),n("van-cell",{attrs:{"is-link":"",title:"请选择规格和数量"},on:{click:function(e){t.show=!0}}}),t._v(" "),n("van-action-sheet",{attrs:{title:"请选择"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"content",staticStyle:{height:"8rem"}},[n("p",{staticStyle:{"text-align":"center","font-size":"14px","font-weight":"bold"}},[t._v(t._s(t.productMessageName))]),t._v(" "),n("p",{staticStyle:{"text-align":"center","font-size":"14px","font-weight":"bold",color:"#CC6600"}},[t._v("￥"+t._s(t.productMessageRetail_price))]),t._v(" "),n("img",{staticStyle:{width:"3rem","margin-left":"20px"},attrs:{src:t.primary_pic_urls}}),t._v(" "),n("van-stepper",{staticStyle:{margin:"10px 20px 0px"},attrs:{theme:"round","button-size":"22","disable-input":""},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}}),t._v(" "),n("van-goods-action",[n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addCart}}),t._v(" "),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"}})],1)],1)])],1),t._v(" "),n("div",{staticClass:"parameter"},[n("p",[t._v("商品参数")]),t._v(" "),t._l(t.productMessage.attribute,function(e,a){return n("div",{key:a},[n("p",[t._v(t._s(e.name)+" : "+t._s(e.value))])])})],2),t._v(" "),n("van-divider",{attrs:{"content-position":"center"}},[t._v("商品详情")]),t._v(" "),n("div",{staticClass:"list",domProps:{innerHTML:t._s(t.goods_desc)}}),t._v(" "),n("van-divider",{attrs:{"content-position":"center"}},[t._v("常见问题")]),t._v(" "),t._l(t.issue,function(e,a){return n("div",{key:a,staticClass:"question"},[n("p",{staticStyle:{color:"#CC6600"}},[t._v("·"+t._s(e.question))]),t._v(" "),n("p",{staticStyle:{color:"#758a99","text-indent":"2em"}},[t._v(t._s(e.answer))])])}),t._v(" "),n("van-divider",{attrs:{"content-position":"center"}},[t._v("商品类似推荐")]),t._v(" "),n("van-grid",{attrs:{"column-num":2,gutter:10}},t._l(t.productList,function(e,a){return n("van-grid-item",{key:a,staticStyle:{"z-index":"0"},on:{click:function(n){return t.lookProducts(e)}}},[n("img",{staticStyle:{width:"3rem"},attrs:{src:e.list_pic_url}}),t._v(" "),n("span",[t._v(t._s(e.name))]),t._v(" "),n("span",{staticStyle:{color:"#CC6600"}},[t._v("￥"+t._s(e.retail_price))])])}),1),t._v(" "),n("div",{staticStyle:{position:"fixed",top:"6rem",right:"12px"}},[t.btnFlag?n("van-icon",{attrs:{name:"back-top",color:"#FF4500",size:"30"},on:{click:function(e){return t.backTop()}}}):t._e()],1),t._v(" "),n("div",{staticStyle:{"margin-bottom":"60px"}}),t._v(" "),n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服",color:"#07c160"}}),t._v(" "),n("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车"}}),t._v(" "),t.collect?n("van-goods-action-icon",{attrs:{icon:"star",text:"收藏"},on:{click:t.cancelCollect}}):n("van-goods-action-icon",{attrs:{icon:"star-o",text:"收藏"},on:{click:t.addCollect}}),t._v(" "),n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addCart}}),t._v(" "),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"}})],1)],2)},staticRenderFns:[]};var N=n("VU/8")(D,E,!1,function(t){n("L67a")},"data-v-1fa718cd",null).exports,I={data:function(){return{orderDetailActionList:"",show:!1,list:"",name:"",mobile:"",address:"",is_default:"",allPrise:"",params:{openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"}}},computed:{},created:function(){this.getAddress(),this.getorderDetailAction()},methods:{getAddress:function(){var t=this;g(this.params).then(function(e){t.list=e.data.data})},getorderDetailAction:function(){var t,e=this;(t=this.params,p({url:"/heyushuo/heyushuo/order/detailAction",method:"get",params:t})).then(function(t){e.orderDetailActionList=t.data,e.name=e.orderDetailActionList.address.name,e.mobile=e.orderDetailActionList.address.mobile,e.address=e.orderDetailActionList.address.address,e.is_default=e.orderDetailActionList.address.is_default,e.allPrise=e.orderDetailActionList.allPrise,console.log(e.orderDetailActionList)})},onClickLeft:function(){var t=this;this.$dialog.confirm({title:"确定要取消该订单？"}).then(function(){t.$router.go(-1)}).catch()},onSubmit:function(){}}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"订单详情","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("van-divider",{attrs:{"content-position":"left"}},[t._v("收货地址")]),t._v(" "),0==t.is_default?n("van-contact-card",{on:{click:function(e){t.show=!0}}}):n("div",{staticStyle:{margin:"10px 8px",background:"#ffffff",padding:"10px 15px","border-radius":"5px"},on:{click:function(e){t.show=!0}}},[n("p",{staticStyle:{padding:"2px 5px"}},[t._v("收件人："+t._s(t.name))]),t._v(" "),n("p",{staticStyle:{padding:"2px 5px"}},[t._v("联系方式："+t._s(t.mobile))]),t._v(" "),n("p",{staticStyle:{padding:"2px 5px"}},[t._v("收货地址："+t._s(t.address))])]),t._v(" "),n("van-divider",{attrs:{"content-position":"left"}},[t._v("商品列表")]),t._v(" "),t._l(t.orderDetailActionList.goodsList,function(t,e){return n("div",{key:e},[n("van-card",{staticStyle:{background:"#ffffff","margin-top":"10px"},attrs:{num:t.number,price:t.retail_price,title:t.goods_name,thumb:t.list_pic_url}})],1)}),t._v(" "),n("van-divider",{attrs:{"content-position":"left"}},[t._v("支付方式")]),t._v(" "),n("van-submit-bar",{attrs:{"button-text":"提交订单"},on:{submit:t.onSubmit}},[n("span",{staticStyle:{"margin-right":"30px","font-size":"16px",color:"#cc6600"}},[t._v("总计：￥"),n("span",[t._v(t._s(t.allPrise))])])]),t._v(" "),n("van-action-sheet",{staticStyle:{height:"13rem"},attrs:{title:"请选择收货地址"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},t._l(t.list,function(e,a){return n("div",{key:a,staticClass:"box",staticStyle:{"margin-top":"10px"}},[n("div",{staticStyle:{float:"left",width:"60px","text-align":"center"}},[n("p",[t._v(t._s(e.name))]),t._v(" "),n("van-tag",{directives:[{name:"show",rawName:"v-show",value:1==e.is_default,expression:"item.is_default == 1"}],attrs:{plain:"",type:"primary"}},[t._v("默认地址")])],1),t._v(" "),n("div",{staticStyle:{overflow:"hidden","margin-left":"20px","padding-left":"10px"}},[n("div",{staticStyle:{float:"left"}},[n("p",[t._v(t._s(e.mobile))]),t._v(" "),n("p",[t._v(t._s(e.address)+t._s(e.address_detail))])]),t._v(" "),n("van-icon",{staticStyle:{border:"1px solid #c6c6c6","border-radius":"3px",float:"right"},attrs:{name:"edit",size:"25",color:"#c6c6c6"},on:{click:function(n){return t.editAddress(e)}}})],1)])}),0)],2)},staticRenderFns:[]};var q=n("VU/8")(I,R,!1,function(t){n("myNh")},"data-v-73f2ffda",null).exports,Q={data:function(){return{active:0,goodsLists:"",categoryNav:"",params:{categoryId:"",id:""}}},created:function(){this.params.categoryId=this.$route.query.id,this.params.id=this.$route.query.id,this.getCategoryNav(),this.getGoodsLists()},methods:{getCategoryNav:function(){var t,e=this;(t=this.params,p({url:"/heyushuo/heyushuo/category/categoryNav",method:"get",params:t})).then(function(t){e.categoryNav=t.data.navData}),this.params.categoryId=this.categoryNav[this.active],this.getGoodsLists()},getGoodsLists:function(){var t,e=this;(t=this.params,p({url:"/heyushuo/heyushuo/goods/goodsList",method:"get",params:t})).then(function(t){e.goodsLists=t.data.data})},onClickLeft:function(){this.$router.back(-1)},goProduct:function(t){this.$router.push({path:"/product",query:{id:t.id}})}}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"商品列表","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.categoryNav,function(e,a){return n("div",{key:a},[n("van-tab",{attrs:{title:e.name}},[n("div",{staticClass:"banner"},[n("p",[t._v(t._s(e.name))]),t._v(" "),n("p",{staticStyle:{color:"#758a99"}},[t._v(t._s(e.front_name))]),t._v(" "),n("img",{attrs:{src:e.img_url}})]),t._v(" "),n("van-grid",{staticStyle:{"margin-top":"10px"},attrs:{"column-num":2,gutter:3}},t._l(t.goodsLists,function(e,a){return n("van-grid-item",{key:a,on:{click:function(n){return t.goProduct(e)}}},[n("img",{staticStyle:{width:"4rem"},attrs:{src:e.banner_url}}),t._v(" "),n("p",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v("销量："+t._s(e.sell_volume))]),t._v(" "),n("p",{staticStyle:{color:"#CC6600"}},[t._v("￥"+t._s(e.retail_price))])])}),1)],1)],1)}),0)],1)},staticRenderFns:[]};var G=n("VU/8")(Q,O,!1,function(t){n("IB8l")},"data-v-bde5ab26",null).exports,M={data:function(){return{listAction:"",params:{openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"}}},created:function(){this.getlistAction()},methods:{getlistAction:function(){var t,e=this;(t=this.params,p({url:"/heyushuo/heyushuo/collect/listAction",method:"get",params:t})).then(function(t){e.listAction=t.data.collectGoodsList})},onClickLeft:function(){this.$router.go(-1)},goodsDetail:function(t){return void 0==t.id?void this.$router.push({path:"/product",query:{id:t}}):void this.$router.push({path:"/product",query:{id:t.id}})}}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"标题","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("van-grid",{attrs:{gutter:5,"column-num":2}},t._l(t.listAction,function(e,a){return n("van-grid-item",{key:a,on:{click:function(n){return t.goodsDetail(e)}}},[n("img",{staticStyle:{width:"4rem"},attrs:{src:e.list_pic_url}}),t._v(" "),n("span",[t._v(t._s(e.name))]),t._v(" "),n("span",{staticStyle:{color:"#cc6600"}},[t._v("￥"+t._s(e.retail_price))])])}),1)],1)},staticRenderFns:[]};var H=n("VU/8")(M,B,!1,function(t){n("jT+x")},"data-v-4ade9c25",null).exports,Y={data:function(){return{getListAction:"",show:!1,editValue:"",checked:0,params:{openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",id:"",address:"",addressId:"",userName:"",telNumber:""}}},created:function(){this.getListActions()},methods:{getListActions:function(){var t=this;g(this.params).then(function(e){t.getListAction=e.data.data})},onClickLeft:function(){this.$router.go(-1)},editAddress:function(t){this.show=!0,this.editValue=t},close:function(){this.show=!1,this.getListActions()},saveAddress:function(){var t;this.show=!1,this.params.id=this.editValue.id,this.params.address=this.editValue.address,this.params.addressId=this.editValue.id,this.params.userName=this.editValue.name,this.params.telNumber=this.editValue.mobile,this.params.detailadress=this.editValue.address_detail,0==this.checked?this.params.checked=!1:1==this.checked&&(this.params.checked=!0),t=this.params,p.post("/heyushuo/heyushuo/address/saveAction",t),this.getListActions(),this.checked=0}}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"收货地址","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",t._l(t.getListAction,function(e,a){return n("div",{key:a,staticClass:"box"},[n("div",{staticStyle:{float:"left",width:"60px","text-align":"center"}},[n("p",[t._v(t._s(e.name))]),t._v(" "),n("van-tag",{directives:[{name:"show",rawName:"v-show",value:1==e.is_default,expression:"item.is_default == 1"}],attrs:{plain:"",type:"primary"}},[t._v("默认地址")])],1),t._v(" "),n("div",{staticStyle:{overflow:"hidden","margin-left":"20px","padding-left":"10px"}},[n("div",{staticStyle:{float:"left"}},[n("p",[t._v(t._s(e.mobile))]),t._v(" "),n("p",[t._v(t._s(e.address)+t._s(e.address_detail))])]),t._v(" "),n("van-icon",{staticStyle:{border:"1px solid #c6c6c6","border-radius":"3px",float:"right"},attrs:{name:"edit",size:"25",color:"#c6c6c6"},on:{click:function(n){return t.editAddress(e)}}})],1)])}),0),t._v(" "),n("van-popup",{style:{height:"100%"},attrs:{position:"bottom",closeable:!0},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("p",{staticStyle:{"text-align":"center",padding:"10px 0px","font-size":"16px"}},[t._v("编辑收货信息")]),t._v(" "),n("van-cell-group",{attrs:{closeable:!0}},[n("van-field",{attrs:{label:"姓名",placeholder:"请输入用户名"},model:{value:t.editValue.name,callback:function(e){t.$set(t.editValue,"name",e)},expression:"editValue.name"}}),t._v(" "),n("van-field",{attrs:{label:"联系方式",placeholder:"请输入用户名"},model:{value:t.editValue.mobile,callback:function(e){t.$set(t.editValue,"mobile",e)},expression:"editValue.mobile"}}),t._v(" "),n("van-field",{attrs:{label:"地址",placeholder:"请输入用户名"},model:{value:t.editValue.address,callback:function(e){t.$set(t.editValue,"address",e)},expression:"editValue.address"}}),t._v(" "),n("van-cell",{attrs:{center:"",title:"是否为默认地址"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("van-switch",{attrs:{size:"24"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})]},proxy:!0}])})],1),t._v(" "),n("van-button",{staticStyle:{position:"fixed",bottom:"0px",width:"9rem",margin:"0px 0.5rem"},attrs:{type:"danger",round:!0},on:{click:t.saveAddress}},[t._v("保存编辑")])],1)],1)},staticRenderFns:[]};var K=n("VU/8")(Y,j,!1,function(t){n("KUnw")},"data-v-4bb0311c",null).exports,J={data:function(){return{content:"",phone:"",params:{content:"",phone:"",openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",name:"何玉硕"}}},created:function(){},methods:{onClickLeft:function(){this.$router.go(-1)},submit:function(){var t,e=this;""==this.content?this.$toast("反馈内容不能为空"):""==this.phone?this.$toast("联系方式不能为空"):(this.params.content=this.content,this.params.phone=this.phone,(t=this.params,p.post("/heyushuo/heyushuo/feedback/submitAction",t)).then(function(t){"true"==t.data.data?e.$toast("提交成功，感谢您的反馈"):e.$toast("提交失败，请重试")})),this.content="",this.phone=""}}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"意见反馈","left-text":"返回"},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",[n("van-field",{attrs:{rows:"4",autosize:"",label:"您的反馈",type:"textarea",maxlength:"100",placeholder:"请输入反馈","show-word-limit":""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("van-field",{attrs:{rows:"1",autosize:"",label:"联系方式",type:"textarea",placeholder:"邮箱/手机号/微信号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),n("van-button",{staticStyle:{width:"9rem",margin:"2rem 0.5rem 0rem"},attrs:{type:"danger",round:!0},on:{click:t.submit}},[t._v("提交反馈")])],1)],1)},staticRenderFns:[]};var X=n("VU/8")(J,W,!1,function(t){n("HUiy")},"data-v-5e2c549c",null).exports,tt={data:function(){return{productList:"",params:{keyword:"",openId:""},sorts:{keyword:"",order:""},sortJg:!0,active:0}},created:function(){this.params.keyword=this.$route.query.keywords,this.getProductList()},methods:{getProductList:function(){var t=this;m(this.params).then(function(e){t.productList=e.data.keywords})},onClickLeft:function(){this.$router.go(-1)},product:function(t){this.$router.push({path:"/product",query:{id:t.id}})},sort:function(t){var e=this;1==t&&1==this.sortJg?(this.sorts.order="desc",this.sorts.keyword=this.params.keyword,this.sortJg=!1):1==t&&0==this.sortJg&&(this.sorts.order="asc",this.sorts.keyword=this.params.keyword,this.sortJg=!0),m(this.sorts).then(function(t){e.productList=t.data.keywords})}}},et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"商品列表","left-text":"返回"},on:{"click-left":t.onClickLeft}}),t._v(" "),n("van-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{on:{click:function(e){return t.sort(t.active)}}},[t._v("综合")]),t._v(" "),1==t.sortJg?n("van-tabbar-item",{on:{click:function(e){return t.sort(t.active)}}},[t._v("价格（由高到低）")]):n("van-tabbar-item",{on:{click:function(e){return t.sort(t.active)}}},[t._v("价格（由低到高）")]),t._v(" "),n("van-tabbar-item",{on:{click:function(e){return t.sort(t.active)}}},[t._v("分类")])],1),t._v(" "),n("van-empty",{directives:[{name:"show",rawName:"v-show",value:0==t.productList.length,expression:"productList.length == 0"}],attrs:{image:"search",description:"暂未搜索到相关商品"}}),t._v(" "),n("van-grid",{attrs:{"column-num":2,gutter:5}},t._l(t.productList,function(e,a){return n("van-grid-item",{key:a,on:{click:function(n){return t.product(e)}}},[n("img",{staticStyle:{width:"4rem"},attrs:{src:e.list_pic_url}}),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticStyle:{color:"#cc6600"}},[t._v("￥"+t._s(e.retail_price))])])}),1)],1)},staticRenderFns:[]};var nt=n("VU/8")(tt,et,!1,function(t){n("RNI4")},"data-v-cc246b5e",null).exports;a.a.use(c.a);var at=new c.a({routes:[{path:"/",name:"index",component:S},{path:"/BestSellers",name:"BestSellers",component:A},{path:"/classification",name:"classification",component:Z},{path:"/shopCart",name:"shopCart",component:F},{path:"/myCenter",name:"myCenter",component:z},{path:"/product",name:"product",component:N},{path:"/orderDetails",name:"orderDetails",component:q},{path:"/commodityDetails",name:"commodityDetails",component:G},{path:"/collect",name:"collect",component:H},{path:"/address",name:"address",component:K},{path:"/Feedback",name:"Feedback",component:X},{path:"/productList",name:"productList",component:nt}]}),it=c.a.prototype.push;c.a.prototype.push=function(t){return it.call(this,t).catch(function(t){return t})};var ot=n("Fd2+");n("4ml/"),n("sVYa");a.a.config.productionTip=!1,a.a.use(ot.a),new a.a({el:"#app",router:at,components:{App:r},template:"<App/>"})},RNI4:function(t,e){},Rngz:function(t,e){},ZPd4:function(t,e){},gwOW:function(t,e){},"jT+x":function(t,e){},myNh:function(t,e){},vasq:function(t,e){},zbmm:function(t,e,n){t.exports=n.p+"static/img/timg.20fcb71.gif"}},["NHnr"]);
//# sourceMappingURL=app.ce9a749441f213f983e5.js.map
(function(){"use strict";var t={838:function(t,i,r){var n=r(9242),o=r(3396);const c={class:"align-horizontal"},e={id:"app",class:"align-horizontal"};function a(t,i,r,n,a,l){const s=(0,o.up)("MyPanel"),p=(0,o.up)("MyFooter");return(0,o.wg)(),(0,o.iD)("body",c,[(0,o._)("div",e,[(0,o.Wm)(s),(0,o.Wm)(p)])])}var l=r(7139),s=r.p+"img/azuki_cry.e9b0e1a3.jpg",p=r.p+"img/azuki_lookup.9c8ad2d5.jpg",u=r.p+"img/loading_.43005f4e.svg";const d={class:"plate_split align-horizontal"},h=(0,o._)("div",{class:(0,l.C_)(["maintitle"])},"Merlyn",-1),k={class:(0,l.C_)(["loading_split","align-vertical"])},m=(0,o._)("img",{alt:"",class:"loading",src:u},null,-1);function f(t,i,r,n,c,e){return(0,o.wg)(),(0,o.iD)("div",{class:(0,l.C_)(["panel","align-vertical",{paneldark:c.darkmode}])},[(0,o._)("div",d,[(0,o._)("div",{class:(0,l.C_)(["plate",{platedark:c.darkmode}])},[c.azuki_cry?((0,o.wg)(),(0,o.iD)("img",{key:0,alt:"",class:(0,l.C_)(["portrait",{platedark:c.darkmode}]),src:s,onClick:i[0]||(i[0]=(...t)=>e.click&&e.click(...t))},null,2)):((0,o.wg)(),(0,o.iD)("img",{key:1,alt:"",class:(0,l.C_)(["portrait",{platedark:c.darkmode}]),src:p,onClick:i[1]||(i[1]=(...t)=>e.click&&e.click(...t))},null,2))],2)]),h,(0,o._)("div",k,[m,(0,o._)("div",{class:(0,l.C_)([{warn:c.prompt_warn},"prompt",{blink:c.prompt_blink},{promptdark:c.darkmode}])}," Page visited "+(0,l.zw)(c.total_click)+" times. ",3)])],2)}var _={name:"MyPanel",props:{},data(){return{azuki_cry:!0,prompt:"主页正在施工捏",prompts:[["憋点辣，宁已经点了","次辣"],["宁都点了","次了，宁还是人？"],["快爬呀！"]],clickcount:0,total_click:0,prompt_warn:!1,prompt_blink:!1,darkmode:!1}},async mounted(){const t=r(6265)["default"];await t.get("https://counter.merlyn.workers.dev/").then((t=>{this.total_click=t.data}))},methods:{click(){this.cry=!this.cry,this.clickcount++,this.clickcount%2==0?(this.azuki_cry=!0,this.darkmode=!1):(this.azuki_cry=!1,this.darkmode=!0),this.clickcount>=1002&&(window.opener=null,window.open("about:balnk","_top").close()),this.clickcount>=1e3?this.prompt=this.prompts[2][0]:this.clickcount>=100?this.prompt=this.prompts[1][0]+this.clickcount+this.prompts[1][1]:(this.clickcount>=10&&(this.prompt=this.prompts[0][0]+this.clickcount+this.prompts[0][1],this.prompt_warn=!0,this.prompt_blink=!0),setTimeout((()=>{this.prompt_warn=!1,this.prompt_blink=!1}),1200),console.log(this.clickcount))},provide:function(){return{portrait:this.portrait,click:this.click}}}},g=r(89);const v=(0,g.Z)(_,[["render",f]]);var b=v,y=r.p+"img/github-brands.08c6aedc.svg",w=r.p+"img/telegram-brands.bd42655c.svg";const C={id:"myfooter"},O=["href"],z=["href"],j=["href"],M=(0,o._)("img",{class:"footer-icon",src:w},null,-1),x=[M],P=(0,o.Uk)("' ");function D(t,i,r,n,c,e){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",C,[(0,o._)("a",{href:c.github_link},[(0,o._)("img",{class:"footer-icon",src:y,href:c.github_link},null,8,z)],8,O),(0,o._)("a",{href:c.telegram_link},x,8,j)]),P],64)}var F={name:"MyFooter",props:{},data(){return{github_link:"https://b-i.li/gh",telegram_link:"https://b-i.li/tg"}}};const T=(0,g.Z)(F,[["render",D]]);var Z=T,W={name:"App",components:{MyPanel:b,MyFooter:Z}};const A=(0,g.Z)(W,[["render",a]]);var E=A;(0,n.ri)(E).mount("#app")}},i={};function r(n){var o=i[n];if(void 0!==o)return o.exports;var c=i[n]={exports:{}};return t[n](c,c.exports,r),c.exports}r.m=t,function(){var t=[];r.O=function(i,n,o,c){if(!n){var e=1/0;for(p=0;p<t.length;p++){n=t[p][0],o=t[p][1],c=t[p][2];for(var a=!0,l=0;l<n.length;l++)(!1&c||e>=c)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(a=!1,c<e&&(e=c));if(a){t.splice(p--,1);var s=o();void 0!==s&&(i=s)}}return i}c=c||0;for(var p=t.length;p>0&&t[p-1][2]>c;p--)t[p]=t[p-1];t[p]=[n,o,c]}}(),function(){r.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(i,{a:i}),i}}(),function(){r.d=function(t,i){for(var n in i)r.o(i,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){r.p="/"}(),function(){var t={826:0};r.O.j=function(i){return 0===t[i]};var i=function(i,n){var o,c,e=n[0],a=n[1],l=n[2],s=0;if(e.some((function(i){return 0!==t[i]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var p=l(r)}for(i&&i(n);s<e.length;s++)c=e[s],r.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return r.O(p)},n=self["webpackChunkxiaorui_li"]=self["webpackChunkxiaorui_li"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(838)}));n=r.O(n)})();
//# sourceMappingURL=index.a6b67798.js.map
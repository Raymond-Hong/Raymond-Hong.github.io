(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{237:function(t,i,e){},244:function(t,i,e){"use strict";e(237)},252:function(t,i,e){"use strict";e.r(i);e(88);const s=function(...t){return!!function(t,r,o,u,a){let h=[];return e(t,r,o).forEach(t=>{s(u,t[0])&&h.push(24)&&(a.process=t[1]+";"+i(u,t[0]))}),!h.length&&n(t,r).forEach(t=>{n(o,u).forEach(e=>{let s=i(t[0],e[0]);if(s)return h.push(24),a.process=t[1]+";"+e[1]+";"+s,h})}),!h.length&&n(t,o).forEach(t=>{n(r,u).forEach(e=>{let s=i(t[0],e[0]);if(s)return h.push(24),a.process=t[1]+";"+e[1]+";"+s,h})}),!h.length&&n(t,u).forEach(t=>{n(r,o).forEach(e=>{let s=i(t[0],e[0]);if(s)return h.push(24),a.process=t[1]+";"+e[1]+";"+s,h})}),!h.length&&e(t,r,u).forEach(t=>{if(s(o,t[0])&&h.push(24)&&(a.process=t[1]+";"+i(o,t[0])),h.length)return h}),!h.length&&e(t,o,u).forEach(t=>{if(s(r,t[0])&&h.push(24)&&(a.process=t[1]+";"+i(r,t[0])),h.length)return h}),!h.length&&e(r,o,u).forEach(e=>{if(s(t,e[0])&&h.push(24)&&(a.process=e[1]+";"+i(t,e[0])),h.length)return h}),h}(t[0],t[1],t[2],t[3],t[4]).length;function i(t,i){i=+i;let e=(t=+t).toFixed(2)==t?t:t.toFixed(2),s=i.toFixed(2)==i?i:i.toFixed(2);return Math.abs(t+i-24)<1e-4?`${e}+${s}=24`:Math.abs(t-i-24)<1e-4?`${e}-${s}=24`:Math.abs(i-t-24)<1e-4?`${s}-${e}=24`:Math.abs(t*i-24)<1e-4?`${e}*${s}=24`:Math.abs(t/i-24)<1e-4?`${e}/${s}=24`:Math.abs(i/t-24)<1e-4&&`${s}/${e}=24`}function e(t,i,e){let s=[];return n(t,i).forEach(t=>{let i=n(t[0],e);i.forEach(i=>{i[1]=t[1]+";"+i[1]}),s=[...s,...i]}),n(t,e).forEach(t=>{let e=n(t[0],i);e.forEach(i=>{i[1]=t[1]+";"+i[1]}),s=[...s,...e]}),n(i,e).forEach(i=>{let e=n(i[0],t);e.forEach(t=>{t[1]=i[1]+";"+t[1]}),s=[...s,...e]}),s}function s(t,i){if([[],[23,25,24,1/24],[22,26,12,48,1/12],[21,27,8,72,1/8],[20,28,6,96,1/6],[19,29,4.8,120,5/24],[18,30,4,144,1/4],[17,31,24/7,168,7/24],[16,32,3,192,1/3],[15,33,24/9,216,9/24]][t].some(t=>Math.abs(i-t)<1e-4))return 24}function n(t,i){i=+i;let e=(t=+t).toFixed(2)==t?t:t.toFixed(2),s=i.toFixed(2)==i?i:i.toFixed(2);return t?i?[[t+i,`${e}+${s}=${e+s}`],[t-i,`${e}-${s}=${(e-s).toFixed(2)==e-s?e-s:(e-s).toFixed(2)}`],[i-t,`${s}-${e}=${(s-e).toFixed(2)==s-e?s-e:(s-e).toFixed(2)}`],[t*i,`${e}*${s}=${e*s}`],[t/i,`${e}/${s}=${(e/s).toFixed(2)==e/s?e/s:(e/s).toFixed(2)}`],[i/t,`${s}/${e}=${(s/e).toFixed(2)==s/e?s/e:(s/e).toFixed(2)}`]]:[[t+i,`${e}+${s}=${e+s}`],[t-i,`${e}-${s}=${(e-s).toFixed(2)==e-s?e-s:(e-s).toFixed(2)}`],[i-t,`${s}-${e}=${(s-e).toFixed(2)==s-e?s-e:(s-e).toFixed(2)}`],[t*i,`${e}*${s}=${e*s}`],[i/t,`${s}/${e}=${(s/e).toFixed(2)==s/e?s/e:(s/e).toFixed(2)}`]]:[[t+i,`${e}+${s}=${e+s}`],[t-i,`${e}-${s}=${(e-s).toFixed(2)==e-s?e-s:(e-s).toFixed(2)}`],[t*i,`${e}*${s}=${e*s}`],[t/i,`${e}/${s}=${(e/s).toFixed(2)==e/s?e/s:(e/s).toFixed(2)}`]]}};var n={data:()=>({num1:1,num2:1,num3:1,num4:1,imgUrl:"url(../../img/poker.png)",img1:{x:0,y:0},img2:{x:0,y:0},img3:{x:0,y:0},img4:{x:0,y:0},process:"",strNum:"",noNum:"输入,如:1,2,3,4"}),mounted(){this.initNum()},methods:{handleinput(t){if(t.target.value){var i=+t.data;null!==t.data?t.target.value.length>=8?this.strNum=t.target.value.slice(0,t.target.value.length-1):this.strNum=i==i?this.strNum+",":t.target.value.slice(0,t.target.value.length-1):this.strNum=this.strNum.slice(0,this.strNum.length-1)}},checkNum(){if(!this.strNum)return void alert("请输入!");let t=this.strNum.split(",");t.length=t.length-1,console.log(t),t.some(t=>t>9||t<1)?alert("输入有误!"):s(...t,this)?(t.forEach((t,i)=>{this["num"+(i+1)]=t}),this.initImg(...t)):alert("输入无解!")},getNumber:()=>1+(9*Math.random()|0),initNum(){this.strNum="";do{this.num1=this.getNumber(),this.num2=this.getNumber(),this.num3=this.getNumber(),this.num4=this.getNumber()}while(!s(this.num1,this.num2,this.num3,this.num4,this));this.initImg(this.num1,this.num2,this.num3,this.num4)},initImg(...t){t.sort();for(let i=0;i<4;i++)this["img"+(1+i)].x=-68*(t[i]-1),this["img"+(1+i)].y=0,i&&t[i-1]===t[i]&&(this["img"+(1+i)].y=-97*([...t].filter((e,s)=>s<=i&&e===t[i]).length-1))}}},r=(e(244),e(14)),o=Object(r.a)(n,(function(){var t=this,i=t._self._c;return i("div",[i("button",{on:{click:t.initNum}},[t._v("换一组")]),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"img",style:{backgroundImage:t.imgUrl,backgroundPosition:t.img1.x+"px "+t.img1.y+"px"}}),t._v(" "),i("div",{staticClass:"img",style:{backgroundImage:t.imgUrl,backgroundPosition:t.img2.x+"px "+t.img2.y+"px"}}),t._v(" "),i("div",{staticClass:"img",style:{backgroundImage:t.imgUrl,backgroundPosition:t.img3.x+"px "+t.img3.y+"px"}}),t._v(" "),i("div",{staticClass:"img",style:{backgroundImage:t.imgUrl,backgroundPosition:t.img4.x+"px "+t.img4.y+"px"}})]),t._v(" "),i("div",[i("input",{attrs:{type:"checkbox",id:"answer"}}),t._v(" "),t._m(0),t._v(" "),i("span",[t._v(t._s(t.process))])]),t._v(" "),i("div",{staticClass:"footer"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.strNum,expression:"strNum"}],attrs:{type:"text",placeholder:t.noNum},domProps:{value:t.strNum},on:{input:[function(i){i.target.composing||(t.strNum=i.target.value)},t.handleinput]}}),t._v(" "),i("button",{on:{click:t.checkNum}},[t._v("查询")])])])}),[function(){var t=this._self._c;return t("label",{attrs:{for:"answer"}},[t("span",[this._v("查看答案")]),this._v(" "),t("span",[this._v("参考答案:")])])}],!1,null,"4ffbb5d1",null);i.default=o.exports}}]);
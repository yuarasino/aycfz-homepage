(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(t,e,n){var content=n(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("2493748f",content,!0,{sourceMap:!1})},160:function(t,e,n){var content=n(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("fdd2fdde",content,!0,{sourceMap:!1})},161:function(t,e,n){var content=n(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("38ecf862",content,!0,{sourceMap:!1})},162:function(t,e,n){var content=n(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("277e1768",content,!0,{sourceMap:!1})},180:function(t,e,n){"use strict";var o=n(10),l=Object(o.defineComponent)({}),r=(n(269),n(18)),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"SiteLayout"},[e("SiteHeader"),e("SiteMain"),e("SiteFooter")],1)}),[],!1,null,"7d9fe8a7",null);e.a=component.exports;installComponents(component,{SiteHeader:n(290).default,SiteMain:n(291).default,SiteFooter:n(292).default})},189:function(t,e,n){n(190),t.exports=n(191)},247:function(t,e,n){var content=n(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("397593c0",content,!0,{sourceMap:!1})},248:function(t,e,n){(e=n(20)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Barlow:wght@500;700&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap);"]),e.push([t.i,"body{font-family:$textFontFamily;color:#333}ol[class],ul[class]{list-style:none;padding-left:0}a[class]{display:block;text-decoration:none;color:inherit}",""]),t.exports=e},269:function(t,e,n){"use strict";n(159)},270:function(t,e,n){(e=n(20)(!1)).push([t.i,".SiteLayout[data-v-7d9fe8a7]{width:100%}",""]),t.exports=e},271:function(t,e,n){"use strict";n(160)},272:function(t,e,n){(e=n(20)(!1)).push([t.i,'.SiteHeader[data-v-151c519b]{display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:4rem;transition:1s}.SiteHeader.scroll-over[data-v-151c519b]{background-color:#333;color:#fff}.logo-wrapper[data-v-151c519b]{margin-left:1rem}.logo[data-v-151c519b]{padding:0 .25em;font-size:2rem;font-weight:700}.logo .en[data-v-151c519b]{font-family:"Barlow",sans-serif}.logo .jp[data-v-151c519b]{margin-left:.1875em;font-family:"YakuHanJP_Noto","Noto Sans JP",sans-serif;font-size:1rem}.flex-spacer[data-v-151c519b]{flex:1}.menu-wrapper[data-v-151c519b]{margin-right:1.5rem}.menu-list[data-v-151c519b]{display:flex;justify-content:center;align-items:center}.menu-item[data-v-151c519b]{margin-left:1rem}.menu[data-v-151c519b]{padding:0 .25em;font-size:1rem;font-weight:700}.menu .en[data-v-151c519b]{font-family:"Barlow",sans-serif}',""]),t.exports=e},273:function(t,e,n){"use strict";n(161)},274:function(t,e,n){(e=n(20)(!1)).push([t.i,".SiteMain[data-v-a60d6f22]{width:100%}",""]),t.exports=e},275:function(t,e,n){"use strict";n(162)},276:function(t,e,n){(e=n(20)(!1)).push([t.i,'.SiteFooter[data-v-2f90f485]{display:flex;justify-content:center;align-items:center;width:100%;height:4rem;background-color:#333;color:#fff}.copyright[data-v-2f90f485]{font-size:.875rem;font-weight:700}.copyright .en[data-v-2f90f485]{font-family:"Barlow",sans-serif}',""]),t.exports=e},290:function(t,e,n){"use strict";n.r(e);var o=n(10),l=n(177),r=Object(o.defineComponent)({setup:function(){var t=Object(o.ref)(!1);return Object(o.onMounted)((function(){window.addEventListener("scroll",Object(l.a)(500,!1,(function(){var e=Math.floor(9*document.body.clientWidth/16);t.value=window.scrollY>=e})))})),{isScrollOver:t}}}),c=(n(271),n(18)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"SiteHeader",class:this.isScrollOver?"scroll-over":""},[e("div",{staticClass:"logo-wrapper"},[e("NuxtLink",{staticClass:"logo-link",attrs:{to:"/"}},[e("h1",{staticClass:"logo"},[e("span",{staticClass:"en"},[this._v("AYCFZ")]),e("span",{staticClass:"jp"},[this._v("/えーゆーちごふれずも")])])])],1),e("div",{staticClass:"flex-spacer"}),e("nav",{staticClass:"menu-wrapper"},[e("ul",{staticClass:"menu-list"},[e("li",{staticClass:"menu-item"},[e("NuxtLink",{staticClass:"menu-link",attrs:{to:"/#top"}},[e("div",{staticClass:"menu"},[e("span",{staticClass:"en"},[this._v("TOP")])])])],1),e("li",{staticClass:"menu-item"},[e("NuxtLink",{staticClass:"menu-link",attrs:{to:"/#news"}},[e("div",{staticClass:"menu"},[e("span",{staticClass:"en"},[this._v("NEWS")])])])],1),e("li",{staticClass:"menu-item"},[e("NuxtLink",{staticClass:"menu-link",attrs:{to:"/#member"}},[e("div",{staticClass:"menu"},[e("span",{staticClass:"en"},[this._v("MEMBER")])])])],1)])])])}),[],!1,null,"151c519b",null);e.default=component.exports},291:function(t,e,n){"use strict";n.r(e);var o=n(10),l=Object(o.defineComponent)({}),r=(n(273),n(18)),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"SiteMain"},[e("Nuxt")],1)}),[],!1,null,"a60d6f22",null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);var o=n(10),l=Object(o.defineComponent)({}),r=(n(275),n(18)),component=Object(r.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"SiteFooter"},[e("div",{staticClass:"copyright-wrapper"},[e("p",{staticClass:"copyright"},[e("span",{staticClass:"en"},[this._v("© AYCFZ")])])])])}],!1,null,"2f90f485",null);e.default=component.exports}},[[189,3,1,4]]]);
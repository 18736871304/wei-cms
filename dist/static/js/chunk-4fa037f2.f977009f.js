(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fa037f2"],{"1b75":function(e,n,a){"use strict";var t=a("da36"),o=a.n(t);o.a},d70d:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("div",[e._v("这是百度地图")]),a("el-row",{attrs:{span:24}},[a("el-col",{attrs:{span:24}},[e._v(" 经度:"),a("el-input",{model:{value:e.map.center.lng,callback:function(n){e.$set(e.map.center,"lng",n)},expression:"map.center.lng"}}),e._v("纬度: "),a("el-input",{model:{value:e.map.center.lat,callback:function(n){e.$set(e.map.center,"lat",n)},expression:"map.center.lat"}}),e._v("关键词: "),a("el-input",{model:{value:e.map.center.lng,callback:function(n){e.$set(e.map.center,"lng",n)},expression:"map.center.lng"}}),e._v("地区: "),a("el-input",{model:{value:e.map.center.lat,callback:function(n){e.$set(e.map.center,"lat",n)},expression:"map.center.lat"}})],1)],1),a("baidu-map",{staticClass:"map",attrs:{center:e.map.center,zoom:e.map.zoom},on:{ready:e.handler}},[a("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_LEFT"}}),a("bm-geolocation",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",showAddressBar:!0,autoLocation:!0}}),a("bm-marker",{attrs:{position:e.map.center,dragging:e.map.dragging,animation:"BMAP_ANIMATION_DROP"}})],1)],1)},o=[],r=(a("d81d"),{name:"demo",data:function(){return{map:{center:{lng:121.46367502472232,lat:31.190170615650633},zoom:15,show:!0,dragging:!0}}},methods:{handler:function(e){var n=e.BMap,a=e.map;console.log(n,a),a.enableScrollWheelZoom(!0),a.addEventListener("click",(function(e){console.log(e.point.lng,e.point.lat)}))}}}),l=r,c=(a("1b75"),a("2877")),i=Object(c["a"])(l,t,o,!1,null,"187316c2",null);n["default"]=i.exports},d81d:function(e,n,a){"use strict";var t=a("23e7"),o=a("b727").map,r=a("1dde"),l=a("ae40"),c=r("map"),i=l("map");t({target:"Array",proto:!0,forced:!c||!i},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},da36:function(e,n,a){}}]);
//# sourceMappingURL=chunk-4fa037f2.f977009f.js.map
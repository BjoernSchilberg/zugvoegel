(function(t){function e(e){for(var n,i,s=e[0],u=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var u=a[s];0!==r[u]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"13a8":function(t,e,a){},"304d":function(t){t.exports=JSON.parse('{"backgroundmap":"Hintergrundkarte","de":"Deutsch","en":"Englisch","flightRoute":"Flugstrecke seit letzter Ortung:","hello":"Hallo","janFail":"Sender ist im September 2017 ausgefallen.","journey":"Reise","language":"Sprache","legend":"Legende","nicolaFail":"Sender ist im August 2017 ausgefallen.","routes":"Flugrouten","satellite":"Satellit","streetmap":"Karte","title":"Zugvögel auf Reisen","turtledoves":"Turteltauben","who":"Wer ist wer?","whitestorks":"Weißstorch"}')},3654:function(t,e,a){"use strict";var n=a("6fc9"),r=a.n(n);r.a},"3f1d":function(t){t.exports=JSON.parse('[{"action":"mdi-crosshairs-gps","active":true,"title":"2019 / 2020","turtledoves":[{"active":true,"color":"#ffff01","data":"data/WhiteStork-Hamburg-02-2019_2020.csv","name":"Alexander","opacity":1},{"active":true,"color":"#05ab03","data":"data/WhiteStork-Hamburg-01-2019_2020.csv","name":"Ombeni","opacity":1},{"active":true,"color":"#FF7F00","data":"data/WhiteStork-Hamburg-06-2019_2020.csv","name":"Jürgen","opacity":1},{"active":true,"color":"#8102b3","data":"data/WhiteStork-Hamburg-03-2019_2020.csv","name":"7061","opacity":1},{"active":true,"color":"#87d5fb","data":"data/WhiteStork-Hamburg-04-2019_2020.csv","name":"7062","opacity":1},{"active":true,"color":"#0b7ac1","data":"data/WhiteStork-Hamburg-05-2019_2020.csv","name":"7063","opacity":1}]}]')},"50ea":function(t,e,a){"use strict";var n=a("519c"),r=a.n(n);r.a},"519c":function(t,e,a){},5490:function(t,e,a){"use strict";var n=a("13a8"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{staticClass:"grey lighten-4 navi",attrs:{app:"",permanent:"","mini-variant":t.mini},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},nativeOn:{mouseover:function(e){t.mini=!1},mouseleave:function(e){t.mini=!0}}},[a("Navi",{attrs:{phrases:t.phrases,seasons:t.seasons,turtledoves:t.turtledoves,backgroundmap:t.backgroundmap,language:t.language},on:{"update:seasons":function(e){t.seasons=e},"update:turtledoves":function(e){t.turtledoves=e},"update:backgroundmap":function(e){t.backgroundmap=e},"update:language":function(e){t.language=e}}})],1),a("Menu",{attrs:{mini:t.mini},on:{"update:mini":function(e){t.mini=e}}}),a("v-content",[a("Map",{attrs:{seasons:t.seasons,turtledoves:t.turtledoves,phrases:t.phrases,backgroundmap:t.backgroundmap,mini:t.mini},on:{"update:seasons":function(e){t.seasons=e},"update:turtledoves":function(e){t.turtledoves=e},"update:backgroundmap":function(e){t.backgroundmap=e},"update:mini":function(e){t.mini=e}}})],1)],1)},o=[],i=a("7857"),s=a("304d"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],attrs:{id:"map"}})},l=[],c=(a("6cc5"),a("e11e")),p=a.n(c),d=a("36ec"),m=a.n(d),f=(a("a309"),a("8f76")),v=a.n(f);function g(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=h(t))){var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,o=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){i=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw r}}}}function h(t,e){if(t){if("string"===typeof t)return b(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var y=a("feb7");delete p.a.Icon.Default.prototype._getIconUrl,p.a.Icon.Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")});var k={props:{seasons:{type:Array,default:function(){return[]}},turtledoves:{type:Array,default:function(){return[]}},phrases:{type:Object,default:function(){return{}}},backgroundmap:{type:String,default:function(){return"streetmap"}},mini:Boolean},data:function(){return{map:{},urlTemplate:{},layerGroups:[],dialog:!1,streetmap:p.a.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>, g8b0465d',maxZoom:18,id:"mapbox.streets",accessToken:"pk.eyJ1IjoiYmpvZXJuc2NoaWxiZXJnIiwiYSI6InRzOVZKeWsifQ.y20mr9o3MolFOUdTQekhUA",noWrap:!0}),satellite:p.a.tileLayer.wms("https://tiles.maps.eox.at/?",{layers:"s2cloudless_3857",attribution:'<a href="https://s2maps.eu" target="_blank">Sentinel-2 cloudless - https://s2maps.eu</a> by <a href="https://eox.at/" target="_blank">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2017 & 2018), g8b0465d'})}},watch:{backgroundmap:{handler:function(t){"streetmap"===t?(this.satellite.remove(),this.streetmap.addTo(this.map)):(this.streetmap.remove(),this.satellite.addTo(this.map))},immediate:!1},layerGroups:{handler:function(t){this.fitMapBounds(t)}},seasons:{handler:function(){var t,e=this,a=g(this.seasons);try{for(a.s();!(t=a.n()).done;){var n,r=t.value,o=g(r.turtledoves);try{var i=function(){var t=n.value;s=e.layerGroups.filter((function(e){return e.data===t.data})),t.active&&0==s.length?e.processBird(t):!t.active&&s.length>0&&(u=e.layerGroups.filter((function(e){return e.data==t.data}))[0],u.group.removeFrom(e.map),u.group.clearLayers(),e.layerGroups=e.layerGroups.filter((function(t){return t!==s[0]})))};for(o.s();!(n=o.n()).done;){var s,u;i()}}catch(l){o.e(l)}finally{o.f()}}}catch(l){a.e(l)}finally{a.f()}},deep:!0,immediate:!0}},mounted:function(){var t=p.a.map("map",{attributionControl:!1,center:[35.5322,21.09375],zoom:4,maxZoom:18,minZoom:2,fadeAnimation:!1,zoomControl:!1});this.map=t,this.map.addControl(p.a.control.attribution({position:"bottomright",prefix:!1})),p.a.control.scale({position:"bottomright"}).addTo(this.map),this.streetmap.addTo(this.map),p.a.Browser.mobile&&(t.tap.disable(),t.on("click",(function(t){t&&console.log(t),this.$emit("update:mini",!this.mini)})))},methods:{fitMapBounds:function(t){if(t.length>0){var e,a=p.a.latLngBounds(),n=g(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;a.extend(r.group.getBounds())}}catch(o){n.e(o)}finally{n.f()}this.map.invalidateSize(!0),this.map.panTo(a.getCenter())}else p.a.Browser.mobile?this.map.setView([37.7185,13.18359],3):this.map.setView([35.5322,21.09375],4)},onResize:function(){this.map instanceof p.a.Map&&this.map.invalidateSize({pan:!1})},processBird:function(t){var e=this.turtledoves.filter((function(e){return e.name==t.name}))[0];e.data=t.data,e.opacity=t.opacity;var a=this;fetch(e.data).then((function(t){return t.text()})).then((function(t){a.paintBird(t,e)})).catch((function(t){console.log(t)}))},paintBird:function(t,e){var a=this,n=this.phrases,r={radius:5,fillColor:e.color,color:"#000",weight:1,opacity:1,fillOpacity:e.opacity};m.a.csv2geojson(t,{latfield:"location_lat",lonfield:"location_long",delimiter:","},(function(t,o){if(t)console.log(t);else{var i=[],s=[],u=p.a.geoJSON(o,{onEachFeature:function(t,a){var r;s.push(new p.a.LatLng(t.geometry.coordinates[1],t.geometry.coordinates[0])),r="undefined"!==typeof i[0]&&null!==i[0]?y.point(i[0]):y.point([Number(t.geometry.coordinates[1]),Number(t.geometry.coordinates[0])]);var o=y.point([Number(t.geometry.coordinates[1]),Number(t.geometry.coordinates[0])]),u=v()(r,o,"kilometers");t.properties["image"]=e.image,t.properties["name"]=e.name,t.properties["distance"]=Number(u.toFixed(2)),i[0]=[t.geometry.coordinates[1],t.geometry.coordinates[0]],a.bindTooltip(String("<b>"+t.properties["name"]+"</b> ("+t.properties["timestamp"]+" )<br>"+n["flightRoute"]+" <b>"+t.properties["distance"]+" km</b>"),{})},pointToLayer:function(t,a){return t===o.features[o.features.length-1]?p.a.marker(a,{icon:p.a.icon({iconSize:[38,38],iconUrl:e.avatar,className:"endpoint"})}):p.a.circleMarker(a,r)}}),l=p.a.polyline(s,{color:e.color,opacity:e.opacity}),c=p.a.polylineDecorator(l,{patterns:[{offset:25,repeat:75,symbol:p.a.Symbol.arrowHead({pixelSize:10,pathOptions:{color:e.color,fillOpacity:1,weight:0}})}]}),d=p.a.featureGroup([u,l,c]);d.addTo(a.map),a.layerGroups.push({data:e.data,group:d})}}))}}},_=k,w=(a("5490"),a("2877")),S=a("269a"),x=a.n(S),O=a("dc22"),j=Object(w["a"])(_,u,l,!1,null,null,null),V=j.exports;x()(j,{Resize:O["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{model:{value:t.phrases,callback:function(e){t.phrases=e},expression:"phrases"}},[a("v-list-group",{attrs:{value:"true","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-icon",[a("v-icon",[t._v("mdi-crosshairs-gps")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.phrases.routes))])],1)]},proxy:!0}])},t._l(t.seasons,(function(e){return a("v-list-group",{key:e.title,attrs:{"prepend-icon":e.action,"no-action":"","sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-title",[t._v(t._s(t.phrases.journey)+" "+t._s(e.title))])]},proxy:!0}],null,!0),model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"season.active"}},t._l(e.turtledoves,(function(e){return a("v-list-item",{key:e.name},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.name))])],1),a("v-list-item-action",[a("v-switch",{attrs:{color:e.color,inset:""},model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"turtledove.active"}})],1)],1)})),1)})),1),a("v-list-group",{attrs:{"prepend-icon":"mdi-twitter-circle","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-title",[t._v(t._s(t.phrases.who))])]},proxy:!0}])},t._l(t.turtledoves,(function(e,n){return a("v-list-item",{key:n,attrs:{inactive:"",ripple:""},on:{click:function(a){return t.openLink(e.blog)}},model:{value:t.turtledoves,callback:function(e){t.turtledoves=e},expression:"turtledoves"}},[e.divider?a("v-divider"):t._e(),e.avatar?a("v-list-item-avatar",[a("v-img",{attrs:{src:e.avatar}})],1):t._e(),e.name?a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1):t._e()],1)})),1),a("v-list-group",{attrs:{"prepend-icon":"mdi-layers","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-title",[t._v(t._s(t.phrases.backgroundmap))])]},proxy:!0}])},[a("v-list-item",[a("v-radio-group",{attrs:{column:""},model:{value:t.backgroundmap,callback:function(e){t.backgroundmap=e},expression:"backgroundmap"}},[a("v-radio",{attrs:{label:t.phrases.satellite,value:"satellite"}}),a("v-radio",{attrs:{label:t.phrases.streetmap,value:"streetmap"}})],1)],1)],1),a("v-list-group",{attrs:{"prepend-icon":"mdi-translate","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-title",[t._v(t._s(t.phrases.language))])]},proxy:!0}])},[a("v-list-item",[a("v-radio-group",{attrs:{column:""},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}},[a("v-radio",{attrs:{label:t.phrases.en,value:"en"}}),a("v-radio",{attrs:{label:t.phrases.de,value:"de"}})],1)],1)],1)],1)},T=[],A=(a("5363"),{props:{seasons:{type:Array,default:function(){return[]}},turtledoves:{type:Array,default:function(){return[]}},phrases:{type:Object,default:function(){return{}}},backgroundmap:{type:String,default:function(){return"streetmap"}},language:{type:String,default:function(){return""}}},data:function(){return{}},watch:{backgroundmap:{handler:function(t){"streetmap"===t?this.$emit("update:backgroundmap","streetmap"):this.$emit("update:backgroundmap","satellite")},immediate:!1},language:function(t){"de"===t?this.$emit("update:language","de"):this.$emit("update:language","en")}},methods:{openLink:function(t){t&&window.open(t,"_blank")}}}),L=A,M=(a("3654"),a("6544")),N=a.n(M),F=a("ce7e"),z=a("132d"),B=a("adda"),E=a("8860"),C=a("56b0"),$=a("da13"),J=a("1800"),R=a("8270"),W=a("5d23"),G=a("34c3"),H=a("67b6"),D=a("43a6"),P=a("b73d"),U=Object(w["a"])(L,I,T,!1,null,"23f9b279",null),Z=U.exports;N()(U,{VDivider:F["a"],VIcon:z["a"],VImg:B["a"],VList:E["a"],VListGroup:C["a"],VListItem:$["a"],VListItemAction:J["a"],VListItemAvatar:R["a"],VListItemContent:W["a"],VListItemIcon:G["a"],VListItemTitle:W["b"],VRadio:H["a"],VRadioGroup:D["a"],VSwitch:P["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{id:"hamburger",absolute:"",fab:"",top:"",color:"primary",medium:"",right:""},on:{click:function(e){return t.toggle()}},model:{value:t.btn,callback:function(e){t.btn=e},expression:"btn"}},[a("v-icon",[t._v("mdi-menu")])],1)},Y=[],K={props:{mini:Boolean},computed:{btn:function(){return!this.mini}},methods:{toggle:function(){this.$emit("update:mini",!this.mini)}}},Q=K,q=(a("efa6"),a("8336")),tt=Object(w["a"])(Q,X,Y,!1,null,null,null),et=tt.exports;N()(tt,{VBtn:q["a"],VIcon:z["a"]});var at=a("3f1d"),nt=a("ef61"),rt={name:"App",components:{Menu:et,Map:V,Navi:Z},data:function(){return{mini:!0,phrases:{},phrasesDE:s,phrasesEN:i,backgroundmap:"streetmap",seasons:at,turtledoves:nt,language:""}},watch:{language:function(t){this.phrases="de"===t?this.phrasesDE:this.phrasesEN}},created:function(){var t=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage;this.language=t.substring(0,2),this.phrases={de:this.phrasesDE,en:this.phrasesEN}["de"===t?"de":"en"]}},ot=rt,it=(a("50ea"),a("7496")),st=a("a75b"),ut=a("f774"),lt=Object(w["a"])(ot,r,o,!1,null,"45899525",null),ct=lt.exports;N()(lt,{VApp:it["a"],VContent:st["a"],VNavigationDrawer:ut["a"]});var pt=a("f309");n["a"].use(pt["a"]);var dt=new pt["a"]({theme:{themes:{light:{base:"#0068b4",primary:"#0068b4",secondary:"#0068b4",accent:"#0068b4"}}},icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,new n["a"]({vuetify:dt,render:function(t){return t(ct)}}).$mount("#app")},"6fc9":function(t,e,a){},7857:function(t){t.exports=JSON.parse('{"backgroundmap":"Background map","de":"German","en":"English","flightRoute":"Distance from last location:","hello":"Hello","janFail":"Transmitter was not operational anymore since September 2017.","journey":"Journey","language":"Language","legend":"Legend","nicolaFail":"Transmitter was not operational anymore since August 2017.","routes":"Flight routes","satellite":"Satellite","streetmap":"Map","title":"Migratory birds travelling","turtledoves":"Turteldoves","who":"Who is who?","whitestorks":"White Storks"}')},dc84:function(t,e,a){},ef61:function(t){t.exports=JSON.parse('[{"active":true,"avatar":"images/whitestorks_hamburg/storch2_alexander.jpg","blog":"","color":"#ffff01","name":"Alexander"},{"active":true,"avatar":"images/whitestorks_hamburg/storch6_juergen.jpg","blog":"","color":"#FF7F00","name":"Jürgen"},{"active":true,"avatar":"images/whitestorks_hamburg/storch1_ombeni.jpg","color":"#05ab03","name":"Ombeni"},{"active":true,"avatar":"images/whitestorks_hamburg/storch3_7061.jpg","blog":"","color":"#8102b3","name":"7061"},{"active":true,"avatar":"images/whitestorks_hamburg/storch4_7062.jpg","blog":"","color":"#87d5fb","name":"7062"},{"active":false,"avatar":"images/whitestorks_hamburg/storch5_7063.jpg","blog":"","color":"#0b7ac1","name":"7063"}]')},efa6:function(t,e,a){"use strict";var n=a("dc84"),r=a.n(n);r.a}});
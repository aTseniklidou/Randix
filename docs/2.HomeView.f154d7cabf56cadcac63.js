webpackJsonp([2],{319:function(e,a){e.exports={image:"Rules__image___7QqS8",rules:"Rules__rules___KbdzI"}},430:function(e,a,t){e.exports=t.p+"8fe7e913adac15ae05a0b0f652b171d2.jpg"},431:function(e,a,t){e.exports=t.p+"dc7779a9bddef78601b48c89e08d48f3.png"},432:function(e,a,t){e.exports=t.p+"e689888dea28f8a555ec89b0756798a7.png"},449:function(e,a,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0}),a.Rules=void 0;var l=t(12),u=o(l),r=t(1),i=(o(r),t(431)),n=(o(i),t(432)),d=(o(n),t(430)),s=o(d),c=t(319),f=o(c),m=t(25),p=o(m),v=t(451),h=(0,u["default"])("h2",{},void 0,"Rules of Randix."),y=(0,u["default"])("a",{href:"https://en.wikipedia.org/wiki/TacTix",target:"_blank"},void 0,(0,u["default"])("strong",{},void 0," here")),g=a.Rules=function(){return(0,u["default"])("div",{},void 0,h,(0,u["default"])("img",{alt:"Game Image",className:f["default"].image,src:s["default"]}),(0,u["default"])("div",{className:f["default"].rules},void 0,"Randix is a a two-player game, where players take turns removing pieces from the board. The goal is to force the other player to remove the last piece. On your turn you may remove as many sequentially ",(0,u["default"])("span",{},void 0,(0,u["default"])(p["default"],{zDepth:5,circle:!0,style:v.styles.marble}))," as you like either horizontally or vertically. You must remove at least one piece on your turn and as many as you want from that row or column (but not both) unless you encounter a ",(0,u["default"])("span",{},void 0,(0,u["default"])(p["default"],{zDepth:5,circle:!1,style:v.styles.obstacle}))," that blocks your path."),(0,u["default"])("div",{className:f["default"].rules},void 0,"Click and drag your mouse to select the pieces you want to remove."),(0,u["default"])("div",{className:f["default"].rules},void 0,"Randix is a variation of the popular computational game TacTix played in a NxN board. In this variation however, pieces are placed randomly on the board. There are also obstacles blocking the path preventing players from cutting a whole row or column. You can read more about the original game (now in the public domain) ",y,"."))};a["default"]=g},450:function(e,a,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0}),a.RulesOld=void 0;var l=t(12),u=o(l),r=t(1),i=(o(r),t(431)),n=o(i),d=t(432),s=o(d),c=t(430),f=o(c),m=t(319),p=o(m),v=(0,u["default"])("h2",{},void 0,"Rules of Randix."),h=(0,u["default"])("span",{},void 0,(0,u["default"])("img",{alt:"pieces",src:n["default"]})),y=(0,u["default"])("span",{},void 0,(0,u["default"])("img",{alt:"stone",src:s["default"]})),g=(0,u["default"])("a",{href:"https://en.wikipedia.org/wiki/TacTix",target:"_blank"},void 0,(0,u["default"])("strong",{},void 0," here")),b=a.RulesOld=function(){return(0,u["default"])("div",{},void 0,v,(0,u["default"])("img",{alt:"Game Image",className:p["default"].image,src:f["default"]}),(0,u["default"])("p",{className:p["default"].rules},void 0,"Randix is a a two-player game, where players take turns removing pieces from the board. The goal is to force the other player to remove the last piece. On your turn you may remove as many sequentially ",h," as you like either horizontally or vertically. You must remove at least one piece on your turn and as many as you want from that row or column (but not both) unless you encounter a ",y," that blocks your path."),(0,u["default"])("p",{className:p["default"].rules},void 0,"Click and drag your mouse to select the pieces you want to remove."),(0,u["default"])("p",{className:p["default"].rules},void 0,"Randix is a variation of the popular computational game TacTix played in a NxN board. In this variation however, pieces are placed randomly on the board. There are also obstacles blocking the path preventing players from cutting a whole row or column. You can read more about the original game (now in the public domain) ",g,"."))};a["default"]=b},451:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.styles={marble:{backgroundColor:"#E0E0E0",height:50,width:50,textAlign:"center",display:"inline-block"},obstacle:{backgroundColor:"#A1887F",height:50,width:50,textAlign:"center",display:"inline-block"}}},452:function(e,a,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0}),a.RulesOld=a.Rules=void 0;var l=t(449),u=o(l),r=t(450),i=o(r);a.Rules=u["default"],a.RulesOld=i["default"]},467:function(e,a,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0}),a.HomeView=void 0;var l=t(12),u=o(l),r=t(1),i=(o(r),t(452)),n=(t(88),(0,u["default"])(i.Rules,{})),d=(0,u["default"])(i.RulesOld,{}),s={material:function(){return[n]},bootstrap:function(){return[d]}},c=a.HomeView=function(e){var a=e.view;return(0,u["default"])("div",{},void 0,s[a.theme]())};a["default"]=c},468:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.HomeView=void 0;var o=t(35),l=(t(55),t(467)),u={},r=function(e){return{view:e.view}};a.HomeView=(0,o.connect)(r,u)(l.HomeView)}});
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),o=a(7),m=a(5),i=(a(22),function(){return c.a.createElement("h1",null,"Home page")}),s=(a(23),function(e){var t=e.tabs,a=e.tabId;return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"tabs"},t.map(function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(o.b,{to:"/tabs/".concat(e.id)},e.title))})),c.a.createElement("div",{className:"tabs__content"},a&&t[t.findIndex(function(e){return e.id===a})].content))}),b=function(e){var t=e.tabs,a=e.tabId;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Tabs page"),c.a.createElement(s,{tabs:t,tabId:a}))},u=[{id:"tab-1",title:"Tabs 1",content:"Some text 1"},{id:"tab-2",title:"Tabs 2",content:"Some text 2"},{id:"tab-3",title:"Tabs 3",content:"Some text 3"}],d=function(){return c.a.createElement(o.a,null,c.a.createElement("nav",{className:"nav"},c.a.createElement(o.b,{exact:!0,to:"/"},"Home"),c.a.createElement(o.b,{to:"/tabs"},"Tabs")),c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/",component:i}),c.a.createElement(m.a,{path:"/tabs/:tabId?",render:function(e){var t=e.match.params.tabId;return c.a.createElement(b,{tabId:t,tabs:u})}})))};l.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.459ac2be.chunk.js.map
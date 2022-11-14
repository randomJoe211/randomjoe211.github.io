"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7326],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),b=a,m=f["".concat(l,".").concat(b)]||f[b]||u[b]||i;return t?n.createElement(m,o(o({ref:r},s),{},{components:t})):n.createElement(m,o({ref:r},s))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5385:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const i={},o="\u8bfe\u7a0b\u4ecb\u7ecd",c={unversionedId:"graph-basics/overview",id:"graph-basics/overview",title:"\u8bfe\u7a0b\u4ecb\u7ecd",description:"\u57fa\u7840\u77e5\u8bc6\u7cfb\u5217\u8bfe\u7a0b\u5c06\u5e2e\u52a9\u60a8\u4e86\u89e3\u56fe\u6570\u636e\u5e93\u4e2d\u56fe\u7684\u6982\u5ff5\u3001\u56fe\u7ed3\u6784\u3001\u53ca\u56fe\u7684\u5c5e\u6027\u76f8\u5173\u5185\u5bb9\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-training/current/2.graph-basics/1.overview.md",sourceDirName:"2.graph-basics",slug:"/graph-basics/overview",permalink:"/zh-Hans/training/graph-basics/overview",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/edit/main/training/2.graph-basics/1.overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"training",previous:{title:"NebulaGraph \u57f9\u8bad\u4e2d\u5fc3",permalink:"/zh-Hans/training/"},next:{title:"\u56fe",permalink:"/zh-Hans/training/graph-basics/basic-knowledge-graph"}},l={},p=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u65f6\u957f",id:"\u65f6\u957f",level:2}],s={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8bfe\u7a0b\u4ecb\u7ecd"},"\u8bfe\u7a0b\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u57fa\u7840\u77e5\u8bc6\u7cfb\u5217\u8bfe\u7a0b\u5c06\u5e2e\u52a9\u60a8\u4e86\u89e3\u56fe\u6570\u636e\u5e93\u4e2d\u56fe\u7684\u6982\u5ff5\u3001\u56fe\u7ed3\u6784\u3001\u53ca\u56fe\u7684\u5c5e\u6027\u76f8\u5173\u5185\u5bb9\u3002"),(0,a.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("p",null,"\u60a8\u65e0\u9700\u5177\u5907\u4efb\u4f55\u524d\u63d0\u6761\u4ef6\u5373\u53ef\u5f00\u59cb\u5b66\u4e60\u672c\u8bfe\u7a0b\u3002"),(0,a.kt)("h2",{id:"\u65f6\u957f"},"\u65f6\u957f"),(0,a.kt)("p",null,"\u5b8c\u6210\u672c\u7cfb\u5217\u6240\u6709\u8bfe\u7a0b\u5c06\u8017\u65f6\u7ea6 15 \u5206\u949f\u3002"))}u.isMDXComponent=!0}}]);
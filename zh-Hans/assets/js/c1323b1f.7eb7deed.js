"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,c(c({ref:t},s),{},{components:n})):r.createElement(b,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={},c="\u8fde\u63a5\u670d\u52a1",l={unversionedId:"nebula-cloud-on-aws/aws-connect-to-services",id:"nebula-cloud-on-aws/aws-connect-to-services",title:"\u8fde\u63a5\u670d\u52a1",description:"\u5b8c\u6210 NebulaGraph \u670d\u52a1\u96c6\u7fa4\u90e8\u7f72\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u5728 Stack \u8be6\u60c5\u9875\u7684 Outputs \u9875\u7b7e\u4e0b\u67e5\u770b\u5404\u670d\u52a1\u7684\u8fde\u63a5\u5730\u5740\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-cloud/current/nebula-cloud-on-aws/5.aws-connect-to-services.md",sourceDirName:"nebula-cloud-on-aws",slug:"/nebula-cloud-on-aws/aws-connect-to-services",permalink:"/zh-Hans/cloud/nebula-cloud-on-aws/aws-connect-to-services",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/edit/main/cloud/nebula-cloud-on-aws/5.aws-connect-to-services.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"cloud",previous:{title:"\u90e8\u7f72\u6b65\u9aa4",permalink:"/zh-Hans/cloud/nebula-cloud-on-aws/aws-deployment-steps"}},u={},i=[],s={toc:i};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8fde\u63a5\u670d\u52a1"},"\u8fde\u63a5\u670d\u52a1"),(0,o.kt)("p",null,"\u5b8c\u6210 NebulaGraph \u670d\u52a1\u96c6\u7fa4\u90e8\u7f72\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u5728 Stack \u8be6\u60c5\u9875\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Outputs")," \u9875\u7b7e\u4e0b\u67e5\u770b\u5404\u670d\u52a1\u7684\u8fde\u63a5\u5730\u5740\u3002"),(0,o.kt)("p",null,"\u8fde\u63a5\u5730\u5740\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BastionIP\uff1a\u5821\u5792\u673a\u7684\u5f39\u6027 IP \u5730\u5740\u3002"),(0,o.kt)("li",{parentName:"ul"},"ExplorerPortal\uff1aNebula Explorer \u670d\u52a1\u7684\u8fde\u63a5\u5730\u5740\u3002"),(0,o.kt)("li",{parentName:"ul"},"GraphPrivateIP\uff1aGraph \u670d\u52a1\u7684\u79c1\u7f51 IP \u5730\u5740\u3002")),(0,o.kt)("p",null,"\u4f7f\u7528 Nebula Explorer \u8fde\u63a5 NebulaGraph \u7684\u8bf4\u660e\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"../../nebula-explorer/deploy-connect/ex-ug-connect.md"},"\u8fde\u63a5\u6570\u636e\u5e93"),"\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u5ba2\u6237\u7aef\u8fde\u63a5 NebulaGraph \u7684\u8bf4\u660e\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"../../14.client/1.nebula-client.md"},"\u5ba2\u6237\u7aef\u6587\u6863"),"\u3002"))}p.isMDXComponent=!0}}]);
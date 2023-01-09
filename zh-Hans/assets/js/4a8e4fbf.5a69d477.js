"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,p(p({ref:t},c),{},{components:n})):a.createElement(k,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={},p="\u90e8\u7f72\u6b65\u9aa4",l={unversionedId:"nebula-cloud-on-aws/aws-deployment-steps",id:"nebula-cloud-on-aws/aws-deployment-steps",title:"\u90e8\u7f72\u6b65\u9aa4",description:"\u5b8c\u6210\u90e8\u7f72\u51c6\u5907\u540e\u5373\u53ef\u5f00\u59cb\u90e8\u7f72 NebulaGraph \u670d\u52a1\u96c6\u7fa4\u3002\u90e8\u7f72\u8fc7\u7a0b\u8017\u65f6\u7ea6 15 \u5230 20 \u5206\u949f\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-cloud/current/nebula-cloud-on-aws/4.aws-deployment-steps.md",sourceDirName:"nebula-cloud-on-aws",slug:"/nebula-cloud-on-aws/aws-deployment-steps",permalink:"/zh-Hans/cloud/nebula-cloud-on-aws/aws-deployment-steps",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/edit/main/cloud/nebula-cloud-on-aws/4.aws-deployment-steps.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"cloud",previous:{title:"\u90e8\u7f72\u51c6\u5907",permalink:"/zh-Hans/cloud/nebula-cloud-on-aws/aws-planning-deployment"},next:{title:"\u8fde\u63a5\u670d\u52a1",permalink:"/zh-Hans/cloud/nebula-cloud-on-aws/aws-connect-to-services"}},s={},i=[],c={toc:i};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u90e8\u7f72\u6b65\u9aa4"},"\u90e8\u7f72\u6b65\u9aa4"),(0,r.kt)("p",null,"\u5b8c\u6210\u90e8\u7f72\u51c6\u5907\u540e\u5373\u53ef\u5f00\u59cb\u90e8\u7f72 NebulaGraph \u670d\u52a1\u96c6\u7fa4\u3002\u90e8\u7f72\u8fc7\u7a0b\u8017\u65f6\u7ea6 15 \u5230 20 \u5206\u949f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u62e5\u6709\u5fc5\u8981 IAM \u6743\u9650\u7684 AWS \u8d26\u53f7\u767b\u5f55 ",(0,r.kt)("a",{parentName:"p",href:"https://us-east-1.console.aws.amazon.com/console/home"},"AWS Console"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6839\u636e\u9009\u5b9a\u7684\u90e8\u7f72\u65b9\u5f0f\uff0c\u5355\u51fb",(0,r.kt)("a",{parentName:"p",href:"https://fwd.aws/8rkyW?"},"\u5728\u65b0\u7684 VPC \u4e2d\u90e8\u7f72 NebulaGraph")," \u6216",(0,r.kt)("a",{parentName:"p",href:"https://fwd.aws/rBBkY?"},"\u5728\u73b0\u6709 VPC \u4e2d\u90e8\u7f72 NebulaGraph")," \u4ee5\u6307\u5b9a\u6a21\u677f\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5\u9875\u9762\u53f3\u4e0a\u89d2\u7684\u5730\u57df\uff0c\u5982\u6709\u9700\u8981\u5219\u4fee\u6539\u5730\u57df\u3002\u9ed8\u8ba4\u5730\u57df\u4e3a us-east-1\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Create stack")," \u9875\u9762\uff0c\u5355\u51fb\u53f3\u4e0b\u89d2\u7684 ",(0,r.kt)("strong",{parentName:"p"},"Next"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Specify stack details")," \u9875\u9762\uff0c\u8bbe\u7f6e ",(0,r.kt)("strong",{parentName:"p"},"Stack name"),"\uff0c\u5373\u670d\u52a1\u96c6\u7fa4\u7684\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5\u9875\u9762\u4e2d\u7684\u6a21\u677f\u53c2\u6570\uff0c\u6839\u636e\u4e1a\u52a1\u9700\u8981\u548c\u53c2\u6570\u4e0b\u65b9\u7684\u8be6\u7ec6\u8bf4\u660e\u8bbe\u7f6e\u6216\u4fee\u6539\u76f8\u5173\u53c2\u6570\uff0c\u4e4b\u540e\u5355\u51fb\u9875\u9762\u53f3\u4e0b\u89d2\u7684 ",(0,r.kt)("strong",{parentName:"p"},"Next"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Configure stack options")," \u9875\u9762\uff0c\u6839\u636e\u9700\u8981\u8bbe\u7f6e ",(0,r.kt)("strong",{parentName:"p"},"Tags"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"Permissions"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"Stack failure options")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"Advanced options"),"\uff0c\u4e4b\u540e\u5355\u51fb\u9875\u9762\u53f3\u4e0b\u89d2\u7684 ",(0,r.kt)("strong",{parentName:"p"},"Next"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5404\u9009\u9879\u7684\u8be6\u7ec6\u8bf4\u660e\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html"},"Setting AWS CLoudFormation stack options"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Review")," \u9875\u9762\uff0c\u68c0\u67e5\u6a21\u677f\u7684\u8bbe\u7f6e\u3002\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Capacities")," \u533a\u57df\uff0c\u786e\u8ba4\u987b\u77e5\u5185\u5bb9\u540e\u9009\u4e2d\u4e24\u4e2a\u590d\u9009\u6846\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb\u9875\u9762\u53f3\u4e0b\u89d2\u7684 ",(0,r.kt)("strong",{parentName:"p"},"Create stack"),"\uff0c\u5f00\u59cb\u90e8\u7f72\u670d\u52a1\u96c6\u7fa4\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Events")," \u9875\u7b7e\u4e2d\u5173\u6ce8 stack \u7684 ",(0,r.kt)("strong",{parentName:"p"},"Status"),"\uff0c\u5f53\u5176\u53d8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE_COMPLETE")," \u65f6\uff0cNebulaGraph \u670d\u52a1\u96c6\u7fa4\u7684\u521b\u5efa\u6210\u529f\u3002"))))}m.isMDXComponent=!0}}]);
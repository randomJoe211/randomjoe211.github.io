"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1557],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=u(t),h=r,m=b["".concat(o,".").concat(h)]||b[h]||s[h]||l;return t?a.createElement(m,p(p({ref:n},c),{},{components:t})):a.createElement(m,p({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=b;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},2341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={title:"\u5b9e\u8df5\u8bfe\u7a0b\uff08\u4e8c\uff09"},p="\u5f00\u53d1\u57fa\u4e8e NebulaGraph \u667a\u80fd\u95ee\u7b54\u673a\u5668\u4eba\u5e94\u7528",i={unversionedId:"practice-nebulagraph-app",id:"practice-nebulagraph-app",title:"\u5b9e\u8df5\u8bfe\u7a0b\uff08\u4e8c\uff09",description:"\u5728\u5bf9 NebulaGraph \u6709\u4e86\u57fa\u672c\u7684\u4e86\u89e3\u540e\uff0c\u6211\u4eec\u5c06\u5e26\u60a8\u4f53\u9a8c\u5f00\u53d1\u4e00\u4e2a\u57fa\u4e8e NebulaGraph \u5e94\u7528\u7684\u4e50\u8da3\u3002\u672c\u8282\u5b9e\u8df5\u8bfe\u7a0b\u6f14\u793a\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u57fa\u4e8e NebulaGraph \u7684\u667a\u80fd\u95ee\u7b54\u673a\u5668\u4eba\u5e94\u7528\u3002\u8bfe\u7a0b\u65f6\u957f\u7ea6\u4e3a6\u5206\u949f\u3002",source:"@site/training/4.practice-nebulagraph-app.md",sourceDirName:".",slug:"/practice-nebulagraph-app",permalink:"/training/practice-nebulagraph-app",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/edit/main/training/4.practice-nebulagraph-app.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u5b9e\u8df5\u8bfe\u7a0b\uff08\u4e8c\uff09"},sidebar:"training",previous:{title:"NebulaGraph\u4f18\u52bf",permalink:"/training/nebulagraph-intro/nebulagraph-features"}},o={},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6570\u636e\u5efa\u6a21",id:"\u6570\u636e\u5efa\u6a21",level:2},{value:"\u5e94\u7528\u8bbe\u8ba1",id:"\u5e94\u7528\u8bbe\u8ba1",level:2},{value:"\u524d\u7aef",id:"\u524d\u7aef",level:3},{value:"\u540e\u7aef",id:"\u540e\u7aef",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}],c={toc:u};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5f00\u53d1\u57fa\u4e8e-nebulagraph-\u667a\u80fd\u95ee\u7b54\u673a\u5668\u4eba\u5e94\u7528"},"\u5f00\u53d1\u57fa\u4e8e NebulaGraph \u667a\u80fd\u95ee\u7b54\u673a\u5668\u4eba\u5e94\u7528"),(0,r.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=647525312&bvid=BV1he4y1W76N&cid=891346458&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"720px",height:"480px"}," "),(0,r.kt)("p",null,"\u5728\u5bf9 NebulaGraph \u6709\u4e86\u57fa\u672c\u7684\u4e86\u89e3\u540e\uff0c\u6211\u4eec\u5c06\u5e26\u60a8\u4f53\u9a8c\u5f00\u53d1\u4e00\u4e2a\u57fa\u4e8e NebulaGraph \u5e94\u7528\u7684\u4e50\u8da3\u3002\u672c\u8282\u5b9e\u8df5\u8bfe\u7a0b\u6f14\u793a\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u57fa\u4e8e NebulaGraph \u7684\u667a\u80fd\u95ee\u7b54\u673a\u5668\u4eba\u5e94\u7528\u3002\u8bfe\u7a0b\u65f6\u957f\u7ea6\u4e3a6\u5206\u949f\u3002"),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u50cf\u4e00\u822c\u7684 Web \u5e94\u7528\u4e4b\u4e8e\u6570\u636e\u5e93\u4e00\u6837\uff0c\u4e00\u4e2a\u5178\u578b\u7684\u57fa\u4e8e NebulaGraph \u7684\u4f20\u7edf\u7ebf\u4e0a\u5e94\u7528\u53ef\u4ee5\u7531\u4e09\u90e8\u5206\u7ec4\u6210\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u524d\u7aef\uff1a\u4f5c\u4e3a\u4eba\u673a\u4ea4\u4e92\u754c\u9762\uff0c\u8c03\u7528\u540e\u7aef API\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u7aef\uff1a\u5904\u7406\u57fa\u4e8e Web \u7684 API\uff0c\u751f\u6210 NebulaGraph \u56fe\u6570\u636e\u5e93\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u8bf7\u6c42 NebulaGraph\uff0c\u5904\u7406\u7ed3\u679c\u8fd4\u56de API \u8c03\u7528\u65b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u56fe\u6570\u636e\u5e93\uff1aNebulaGraph\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u4eb2\u81ea\u5f00\u53d1\u4ee5\u4e0a\u5e94\u7528\u5e76\u8bed\u97f3\u8bbf\u95ee NebulaGraph \u6570\u636e\uff0c\u53ef\u5728",(0,r.kt)("a",{parentName:"p",href:"/training/practice-cloud-deployment"},"\u4e91\u4e0a\u5feb\u901f\u90e8\u7f72\u548c\u8fde\u63a5 NebulaGraph"),"\uff0c\u7136\u540e\u4f7f\u7528\u5f00\u53d1\u7684\u5e94\u7528\u8bbf\u95ee NebulaGraph\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u5efa\u6a21"},"\u6570\u636e\u5efa\u6a21"),(0,r.kt)("p",null,"\u8bfe\u7a0b\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nebula-graph.io/2.0/basketballplayer-2.X.ngql"},"basketballplayer "),"\u6570\u636e\u96c6\u3002\u8fd9\u4e2a\u6570\u636e\u96c6\u7684\u5efa\u6a21\u5982\u4e0b\u56fe\u3002"),(0,r.kt)("img",{alt:"practice-siwi.png",src:"https://docs-cdn.nebula-graph.com.cn/figures/courses/practice-siwi.png"}),(0,r.kt)("h2",{id:"\u5e94\u7528\u8bbe\u8ba1"},"\u5e94\u7528\u8bbe\u8ba1"),(0,r.kt)("h3",{id:"\u524d\u7aef"},"\u524d\u7aef"),(0,r.kt)("p",null,"\u6211\u4eec\u7528 VueJS \u505a\u4e00\u4e2a\u5e26\u6709\u6587\u5b57\u548c\u8bed\u97f3\u8f93\u5165\u8f93\u51fa\u7684\u673a\u5668\u4eba\u754c\u9762\uff0c\u5b83\u80fd\u63a5\u53d7\u95ee\u9898\uff0c\u900f\u8fc7\u540e\u7aef\u5904\u7406\u95ee\u9898\uff0c\u8fd4\u56de\u95ee\u9898\u7684\u7b54\u6848\u3002\u8fd9\u5176\u4e2d\u7528\u5230\u4e86 Vue Bot UI \u8fd9\u4e2a\u9879\u76ee\u548c Chrome \u6d4f\u89c8\u5668\u7684 Web Speech API\u3002"),(0,r.kt)("p",null,"\u4e0b\u56fe\u4e3a\u524d\u7aef\u754c\u9762\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u63d0\u51fa\u7684\u95ee\u9898\u548c\u56de\u590d\u7684\u7b54\u6848\uff0c\u4ee5\u53ca\u53f3\u8fb9\u6d4f\u89c8\u5668\u8c03\u8bd5 Console \u91cc\u8fd4\u56de\u6570\u636e\u7684\u7ed3\u6784\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/figures/courses/vue_app_221117.png",alt:"vue_app"})),(0,r.kt)("h3",{id:"\u540e\u7aef"},"\u540e\u7aef"),(0,r.kt)("p",null,"\u6211\u4eec\u7528 Python Flask \u4f5c\u4e3a Web \u6846\u67b6\uff0c\u7528 Nebula-Python \u4f5c\u4e3a\u540e\u7aef\u8bbf\u95ee NebulaGraph\u3002"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u524d\u7aef\u7684\u8bed\u53e5\u901a\u8fc7 RESTful API \u53d1\u9001\u5230\u540e\u7aef\u5e94\u7528\u7684\u65f6\u5019\uff0c\u6211\u4eec\u8981\u5b9e\u73b0\u7684\u903b\u8f91\u662f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u8bed\u53e5\u8fdb\u884c\u610f\u56fe\u8bc6\u522b\u548c\u8bed\u4e49\u5904\u7406\uff0c\u5f97\u5230\u95ee\u53e5\u7684\u610f\u56fe\uff08Intent\uff0c\u4f8b\u5982\u201c\u67e5\u5173\u8054\u201d\uff09\u4e0e\u95ee\u53e5\u6d89\u53ca\u7684\u5b9e\u4f53\uff08Entities\uff0c\u4f8b\u5982\u201cYao Ming\u201d \u4e0e\u201c\u706b\u7bad\u961f\u201d\uff09\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6839\u636e\u4e0d\u540c\u610f\u56fe\uff0c\u518d\u6784\u9020\u56fe\u5e93\u67e5\u8be2\uff08Intent Actor\uff09\uff0c\u8c03\u7528 Nebula-Python \u8bbf\u95ee NebulaGraph\uff0c\u901a\u8fc7 nGQL \u67e5\u8be2\u7ed3\u679c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u7ed3\u679c\u5904\u7406\u4e3a\u4eba\u80fd\u591f\u7406\u89e3\u7684\u7b54\u6848\u8bed\u53e5\u5e76\u8fd4\u56de\u3002"))),(0,r.kt)("p",null,"\u67b6\u6784\u548c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                \u2502                                      \u2502\n\u2502                \u2502  Speech                              \u2502\n\u2502     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25bc\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                           \u2502\n\u2502     \u2502            Frontend \u2502   Siwi, /\u02c8s\u026awi/           \u2502\n\u2502     \u2502 Web_Speech_API      \u2502   A PoC of                \u2502\n\u2502     \u2502                     \u2502   Dialog System           \u2502\n\u2502     \u2502 Vue.JS              \u2502   With Graph Database     \u2502\n\u2502     \u2502                     \u2502   Backed Knowledge Graph  \u2502\n\u2502     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                           \u2502\n\u2502                \u2502  Sentence                            \u2502\n\u2502                \u2502                                      \u2502\n\u2502   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       \u2502\n\u2502   \u2502            \u2502                              \u2502       \u2502\n\u2502   \u2502            \u2502              Backend         \u2502       \u2502\n\u2502   \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25bc\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                   \u2502       \u2502\n\u2502   \u2502 \u2502 Web API, Flask      \u2502   ./app/          \u2502       \u2502\n\u2502   \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                   \u2502       \u2502\n\u2502   \u2502            \u2502  Sentence    ./bot/          \u2502       \u2502\n\u2502   \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25bc\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                   \u2502       \u2502\n\u2502   \u2502 \u2502                     \u2502                   \u2502       \u2502\n\u2502   \u2502 \u2502 Intent matching,    \u2502   ./bot/classifier\u2502       \u2502\n\u2502   \u2502 \u2502 Symentic Processing \u2502                   \u2502       \u2502\n\u2502   \u2502 \u2502                     \u2502                   \u2502       \u2502\n\u2502   \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                   \u2502       \u2502\n\u2502   \u2502            \u2502  Intent, Entities            \u2502       \u2502\n\u2502   \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25bc\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                   \u2502       \u2502\n\u2502   \u2502 \u2502                     \u2502                   \u2502       \u2502\n\u2502   \u2502 \u2502 Intent Actor        \u2502   ./bot/actions   \u2502       \u2502\n\u2502   \u2502 \u2502                     \u2502                   \u2502       \u2502\n\u2502   \u2514\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518       \u2502\n\u2502                \u2502  Graph Query                         \u2502\n\u2502     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25bc\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                           \u2502\n\u2502     \u2502                     \u2502                           \u2502\n\u2502     \u2502 Graph Database      \u2502    NebulaGraph            \u2502\n\u2502     \u2502                     \u2502                           \u2502\n\u2502     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                           \u2502\n\u2502                                                       \u2502\n\u2502                                                       \u2502\n\u2502                                                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/figures/courses/answer_221117.png",alt:"vue_app"})),(0,r.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("p",null,"\u6211\u4eec\u4e0d\u4f1a\u8bb2\u89e3\u5b9e\u9645\u5e94\u7528\u7684\u4ee3\u7801\uff0c\u6b22\u8fce\u8bbf\u95ee",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wey-gu/nebula-siwi/"},"\u4ee3\u7801\u4ed3\u5e93"),"\u8fdb\u884c\u4e86\u89e3\u3001\u8ba8\u8bba\u3002\u4ee3\u7801\u7684\u76ee\u5f55\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 siwi                        # Siwi-API Backend\n\u2502   \u2502   \u251c\u2500\u2500 app                     # Web Server, take HTTP requests and calls Bot API\n\u2502   \u2502   \u2514\u2500\u2500 bot                     # Bot API\n\u2502   \u2502       \u251c\u2500\u2500 actions             # Take Intent, Slots, Query Knowledge Graph here\n\u2502   \u2502       \u251c\u2500\u2500 bot                 # Entrypoint of the Bot API\n\u2502   \u2502       \u251c\u2500\u2500 classifier          # Symentic Parsing, Intent Matching, Slot Filling\n\u2502   \u2502       \u2514\u2500\u2500 test                # Example Data Source as equivalent/mocked module\n\u2502   \u2514\u2500\u2500 siwi_frontend               # Browser End\n\u2502       \u251c\u2500\u2500 README.md\n\u2502       \u251c\u2500\u2500 package.json\n\u2502       \u2514\u2500\u2500 src\n\u2502           \u251c\u2500\u2500 App.vue             # Listening to user and pass Questions to Siwi-API\n\u2502           \u2514\u2500\u2500 main.js\n\u2514\u2500\u2500 wsgi.py\n")))}s.isMDXComponent=!0}}]);
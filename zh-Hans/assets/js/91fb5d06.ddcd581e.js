"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,s=m["".concat(o,".").concat(k)]||m[k]||u[k]||i;return n?r.createElement(s,p(p({ref:t},d),{},{components:n})):r.createElement(s,p({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},p="Graph \u670d\u52a1",l={unversionedId:"introduction/nebula-graph-architecture/graph-service",id:"introduction/nebula-graph-architecture/graph-service",title:"Graph \u670d\u52a1",description:"Graph \u670d\u52a1\u4e3b\u8981\u8d1f\u8d23\u5904\u7406\u67e5\u8be2\u8bf7\u6c42\uff0c\u5305\u62ec\u89e3\u6790\u67e5\u8be2\u8bed\u53e5\u3001\u6821\u9a8c\u8bed\u53e5\u3001\u751f\u6210\u6267\u884c\u8ba1\u5212\u4ee5\u53ca\u6309\u7167\u6267\u884c\u8ba1\u5212\u6267\u884c\u56db\u4e2a\u5927\u6b65\u9aa4\uff0c\u672c\u6587\u5c06\u57fa\u4e8e\u8fd9\u4e9b\u6b65\u9aa4\u4ecb\u7ecd Graph \u670d\u52a1\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/2.introduction/5.nebula-graph-architecture/3.graph-service.md",sourceDirName:"2.introduction/5.nebula-graph-architecture",slug:"/introduction/nebula-graph-architecture/graph-service",permalink:"/zh-Hans/next/introduction/nebula-graph-architecture/graph-service",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/edit/main/docs/2.introduction/5.nebula-graph-architecture/3.graph-service.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"Meta \u670d\u52a1",permalink:"/zh-Hans/next/introduction/nebula-graph-architecture/meta-service"},next:{title:"Storage \u670d\u52a1",permalink:"/zh-Hans/next/introduction/nebula-graph-architecture/storage-service"}},o={},c=[{value:"Graph \u670d\u52a1\u67b6\u6784",id:"graph-\u670d\u52a1\u67b6\u6784",level:2},{value:"Parser",id:"parser",level:2},{value:"Validator",id:"validator",level:2},{value:"Planner",id:"planner",level:2},{value:"Executor",id:"executor",level:2},{value:"\u4ee3\u7801\u7ed3\u6784",id:"\u4ee3\u7801\u7ed3\u6784",level:2},{value:"\u89c6\u9891",id:"\u89c6\u9891",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"graph-\u670d\u52a1"},"Graph \u670d\u52a1"),(0,a.kt)("p",null,"Graph \u670d\u52a1\u4e3b\u8981\u8d1f\u8d23\u5904\u7406\u67e5\u8be2\u8bf7\u6c42\uff0c\u5305\u62ec\u89e3\u6790\u67e5\u8be2\u8bed\u53e5\u3001\u6821\u9a8c\u8bed\u53e5\u3001\u751f\u6210\u6267\u884c\u8ba1\u5212\u4ee5\u53ca\u6309\u7167\u6267\u884c\u8ba1\u5212\u6267\u884c\u56db\u4e2a\u5927\u6b65\u9aa4\uff0c\u672c\u6587\u5c06\u57fa\u4e8e\u8fd9\u4e9b\u6b65\u9aa4\u4ecb\u7ecd Graph \u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"graph-\u670d\u52a1\u67b6\u6784"},"Graph \u670d\u52a1\u67b6\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/docs-2.0/1.introduction/2.nebula-graph-architecture/query-engine-architecture.png",alt:"The architecture of the Graph Service"})),(0,a.kt)("p",null,"\u67e5\u8be2\u8bf7\u6c42\u53d1\u9001\u5230 Graph \u670d\u52a1\u540e\uff0c\u4f1a\u7531\u5982\u4e0b\u6a21\u5757\u4f9d\u6b21\u5904\u7406\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parser"),"\uff1a\u8bcd\u6cd5\u8bed\u6cd5\u89e3\u6790\u6a21\u5757\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Validator"),"\uff1a\u8bed\u4e49\u6821\u9a8c\u6a21\u5757\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Planner"),"\uff1a\u6267\u884c\u8ba1\u5212\u4e0e\u4f18\u5316\u5668\u6a21\u5757\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Executor"),"\uff1a\u6267\u884c\u5f15\u64ce\u6a21\u5757\u3002"))),(0,a.kt)("h2",{id:"parser"},"Parser"),(0,a.kt)("p",null,"Parser \u6a21\u5757\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u901a\u8fc7 Flex\uff08\u8bcd\u6cd5\u5206\u6790\u5de5\u5177\uff09\u548c Bison\uff08\u8bed\u6cd5\u5206\u6790\u5de5\u5177\uff09\u751f\u6210\u7684\u8bcd\u6cd5\u8bed\u6cd5\u89e3\u6790\u5668\uff0c\u5c06\u8bed\u53e5\u8f6c\u6362\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811\uff08AST\uff09\uff0c\u5728\u8bed\u6cd5\u89e3\u6790\u9636\u6bb5\u4f1a\u62e6\u622a\u4e0d\u7b26\u5408\u8bed\u6cd5\u89c4\u5219\u7684\u8bed\u53e5\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},'GO FROM "Tim" OVER like WHERE properties(edge).likeness > 8.0 YIELD dst(edge)'),"\u8bed\u53e5\u8f6c\u6362\u7684 AST \u5982\u4e0b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/docs-2.0/1.introduction/2.nebula-graph-architecture/parser-ast-tree.png",alt:"AST"})),(0,a.kt)("h2",{id:"validator"},"Validator"),(0,a.kt)("p",null,"Validator \u6a21\u5757\u5bf9\u751f\u6210\u7684 AST \u8fdb\u884c\u8bed\u4e49\u6821\u9a8c\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6821\u9a8c\u5143\u6570\u636e\u4fe1\u606f"),(0,a.kt)("p",{parentName:"li"},"  \u6821\u9a8c\u8bed\u53e5\u4e2d\u7684\u5143\u6570\u636e\u4fe1\u606f\u662f\u5426\u6b63\u786e\u3002"),(0,a.kt)("p",{parentName:"li"},"  \u4f8b\u5982\u89e3\u6790 ",(0,a.kt)("inlineCode",{parentName:"p"},"OVER"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"YIELD")," \u8bed\u53e5\u65f6\uff0c\u4f1a\u67e5\u627e Schema \u6821\u9a8c Edge type\u3001Tag \u7684\u4fe1\u606f\u662f\u5426\u5b58\u5728\uff0c\u6216\u8005\u63d2\u5165\u6570\u636e\u65f6\u6821\u9a8c\u63d2\u5165\u7684\u6570\u636e\u7c7b\u578b\u548c Schema \u4e2d\u7684\u662f\u5426\u4e00\u81f4\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6821\u9a8c\u4e0a\u4e0b\u6587\u5f15\u7528\u4fe1\u606f"),(0,a.kt)("p",{parentName:"li"},"  \u6821\u9a8c\u5f15\u7528\u7684\u53d8\u91cf\u662f\u5426\u5b58\u5728\u6216\u8005\u5f15\u7528\u7684\u5c5e\u6027\u662f\u5426\u5c5e\u4e8e\u53d8\u91cf\u3002"),(0,a.kt)("p",{parentName:"li"},"  \u4f8b\u5982\u8bed\u53e5",(0,a.kt)("inlineCode",{parentName:"p"},'$var = GO FROM "Tim" OVER like YIELD dst(edge) AS ID; GO FROM $var.ID OVER serve YIELD dst(edge)'),"\uff0cValidator \u6a21\u5757\u9996\u5148\u4f1a\u68c0\u67e5\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," \u662f\u5426\u5b9a\u4e49\uff0c\u5176\u6b21\u518d\u68c0\u67e5\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," \u662f\u5426\u5c5e\u4e8e\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6821\u9a8c\u7c7b\u578b\u63a8\u65ad"),(0,a.kt)("p",{parentName:"li"},"  \u63a8\u65ad\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u7c7b\u578b\uff0c\u5e76\u6839\u636e\u5b50\u53e5\u6821\u9a8c\u7c7b\u578b\u662f\u5426\u6b63\u786e\u3002"),(0,a.kt)("p",{parentName:"li"},"  \u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," \u5b50\u53e5\u8981\u6c42\u7ed3\u679c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"bool"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"null")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"empty"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6821\u9a8c ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," \u4ee3\u8868\u7684\u4fe1\u606f"),(0,a.kt)("p",{parentName:"li"},"  \u67e5\u8be2\u8bed\u53e5\u4e2d\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," \u65f6\uff0c\u6821\u9a8c\u5b50\u53e5\u65f6\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," \u6d89\u53ca\u7684 Schema \u90fd\u8fdb\u884c\u6821\u9a8c\u3002"),(0,a.kt)("p",{parentName:"li"},"  \u4f8b\u5982\u8bed\u53e5",(0,a.kt)("inlineCode",{parentName:"p"},'GO FROM "Tim" OVER * YIELD dst(edge), properties(edge).likeness, dst(edge)'),"\uff0c\u6821\u9a8c",(0,a.kt)("inlineCode",{parentName:"p"},"OVER"),"\u5b50\u53e5\u65f6\u9700\u8981\u6821\u9a8c\u6240\u6709\u7684 Edge type\uff0c\u5982\u679c Edge type \u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"like"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"serve"),"\uff0c\u8be5\u8bed\u53e5\u4f1a\u5c55\u5f00\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},'GO FROM "Tim" OVER like,serve YIELD dst(edge), properties(edge).likeness, dst(edge)'),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6821\u9a8c\u8f93\u5165\u8f93\u51fa"),(0,a.kt)("p",{parentName:"li"},"  \u6821\u9a8c\u7ba1\u9053\u7b26\uff08|\uff09\u524d\u540e\u7684\u4e00\u81f4\u6027\u3002"),(0,a.kt)("p",{parentName:"li"},"  \u4f8b\u5982\u8bed\u53e5",(0,a.kt)("inlineCode",{parentName:"p"},'GO FROM "Tim" OVER like YIELD dst(edge) AS ID | GO FROM $-.ID OVER serve YIELD dst(edge)'),"\uff0cValidator \u6a21\u5757\u4f1a\u6821\u9a8c ",(0,a.kt)("inlineCode",{parentName:"p"},"$-.ID")," \u5728\u7ba1\u9053\u7b26\u5de6\u4fa7\u662f\u5426\u5df2\u7ecf\u5b9a\u4e49\u3002"))),(0,a.kt)("p",null,"\u6821\u9a8c\u5b8c\u6210\u540e\uff0cValidator \u6a21\u5757\u8fd8\u4f1a\u751f\u6210\u4e00\u4e2a\u9ed8\u8ba4\u53ef\u6267\u884c\uff0c\u4f46\u662f\u672a\u8fdb\u884c\u4f18\u5316\u7684\u6267\u884c\u8ba1\u5212\uff0c\u5b58\u50a8\u5728\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/planner")," \u5185\u3002"),(0,a.kt)("h2",{id:"planner"},"Planner"),(0,a.kt)("p",null,"\u5982\u679c\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"nebula-graphd.conf")," \u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"enable_optimizer")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff0cPlanner \u6a21\u5757\u4e0d\u4f1a\u4f18\u5316 Validator \u6a21\u5757\u751f\u6210\u7684\u6267\u884c\u8ba1\u5212\uff0c\u800c\u662f\u76f4\u63a5\u4ea4\u7ed9 Executor \u6a21\u5757\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"nebula-graphd.conf"),"\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"enable_optimizer")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0cPlanner \u6a21\u5757\u4f1a\u5bf9 Validator \u6a21\u5757\u751f\u6210\u7684\u6267\u884c\u8ba1\u5212\u8fdb\u884c\u4f18\u5316\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/docs-2.0/1.introduction/2.nebula-graph-architecture/optimizer.png",alt:"Optimizer"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f18\u5316\u524d"),(0,a.kt)("p",{parentName:"li"},"  \u5982\u4e0a\u56fe\u53f3\u4fa7\u672a\u4f18\u5316\u7684\u6267\u884c\u8ba1\u5212\uff0c\u6bcf\u4e2a\u8282\u70b9\u4f9d\u8d56\u53e6\u4e00\u4e2a\u8282\u70b9\uff0c\u4f8b\u5982\u6839\u8282\u70b9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Project")," \u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Filter")," \u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"GetNeighbor"),"\uff0c\u6700\u7ec8\u627e\u5230\u53f6\u5b50\u8282\u70b9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Start"),"\uff0c\u624d\u80fd\u5f00\u59cb\u6267\u884c\uff08\u5e76\u975e\u771f\u6b63\u6267\u884c\uff09\u3002"),(0,a.kt)("p",{parentName:"li"},"  \u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u6bcf\u4e2a\u8282\u70b9\u4f1a\u6709\u5bf9\u5e94\u7684\u8f93\u5165\u53d8\u91cf\u548c\u8f93\u51fa\u53d8\u91cf\uff0c\u8fd9\u4e9b\u53d8\u91cf\u5b58\u50a8\u5728\u4e00\u4e2a\u54c8\u5e0c\u8868\u4e2d\u3002\u7531\u4e8e\u6267\u884c\u8ba1\u5212\u4e0d\u662f\u771f\u6b63\u6267\u884c\uff0c\u6240\u4ee5\u54c8\u5e0c\u8868\u4e2d\u6bcf\u4e2a key \u7684 value \u503c\u90fd\u4e3a\u7a7a\uff08\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Start")," \u8282\u70b9\uff0c\u8d77\u59cb\u6570\u636e\u4f1a\u5b58\u50a8\u5728\u8be5\u8282\u70b9\u7684\u8f93\u5165\u53d8\u91cf\u4e2d\uff09\u3002\u54c8\u5e0c\u8868\u5b9a\u4e49\u5728\u4ed3\u5e93 ",(0,a.kt)("inlineCode",{parentName:"p"},"nebula-graph")," \u5185\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/context/ExecutionContext.cpp")," \u4e2d\u3002"),(0,a.kt)("p",{parentName:"li"},"  \u4f8b\u5982\u54c8\u5e0c\u8868\u7684\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"ResultMap"),"\uff0c\u5728\u5efa\u7acb ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter")," \u8fd9\u4e2a\u8282\u70b9\u65f6\uff0c\u5b9a\u4e49\u8be5\u8282\u70b9\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},'ResultMap["GN1"]')," \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u7136\u540e\u5c06\u7ed3\u679c\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},'ResultMap["Filter2"]')," \u4e2d\uff0c\u4f9d\u6b21\u7c7b\u63a8\uff0c\u5c06\u6bcf\u4e2a\u8282\u70b9\u7684\u8f93\u5165\u8f93\u51fa\u90fd\u786e\u5b9a\u597d\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f18\u5316\u8fc7\u7a0b"),(0,a.kt)("p",{parentName:"li"},"  Planner \u6a21\u5757\u76ee\u524d\u7684\u4f18\u5316\u65b9\u5f0f\u662f RBO\uff08rule-based optimization\uff09\uff0c\u5373\u9884\u5b9a\u4e49\u4f18\u5316\u89c4\u5219\uff0c\u7136\u540e\u5bf9 Validator \u6a21\u5757\u751f\u6210\u7684\u9ed8\u8ba4\u6267\u884c\u8ba1\u5212\u8fdb\u884c\u4f18\u5316\u3002\u65b0\u7684\u4f18\u5316\u89c4\u5219 CBO\uff08cost-based optimization\uff09\u6b63\u5728\u5f00\u53d1\u4e2d\u3002\u4f18\u5316\u4ee3\u7801\u5b58\u50a8\u5728\u4ed3\u5e93 ",(0,a.kt)("inlineCode",{parentName:"p"},"nebula-graph")," \u7684\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/optimizer/")," \u5185\u3002"),(0,a.kt)("p",{parentName:"li"},"  RBO \u662f\u4e00\u4e2a\u81ea\u5e95\u5411\u4e0a\u7684\u63a2\u7d22\u8fc7\u7a0b\uff0c\u5373\u5bf9\u4e8e\u6bcf\u4e2a\u89c4\u5219\u800c\u8a00\uff0c\u90fd\u4f1a\u7531\u6267\u884c\u8ba1\u5212\u7684\u6839\u8282\u70b9\uff08\u793a\u4f8b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Project"),"\uff09\u5f00\u59cb\uff0c\u4e00\u6b65\u6b65\u5411\u4e0b\u63a2\u7d22\u5230\u6700\u5e95\u5c42\u7684\u8282\u70b9\uff0c\u5728\u8fc7\u7a0b\u4e2d\u67e5\u770b\u662f\u5426\u53ef\u4ee5\u5339\u914d\u89c4\u5219\u3002"),(0,a.kt)("p",{parentName:"li"},"  \u5982\u4e0a\u56fe\u6240\u793a\uff0c\u63a2\u7d22\u5230\u8282\u70b9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter")," \u65f6\uff0c\u53d1\u73b0\u4f9d\u8d56\u7684\u8282\u70b9\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"GetNeighbor"),"\uff0c\u5339\u914d\u9884\u5148\u5b9a\u4e49\u7684\u89c4\u5219\uff0c\u5c31\u4f1a\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter")," \u878d\u5165\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"GetNeighbor")," \u4e2d\uff0c\u7136\u540e\u79fb\u9664\u8282\u70b9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter"),"\uff0c\u7ee7\u7eed\u5339\u914d\u4e0b\u4e00\u4e2a\u89c4\u5219\u3002\u5728\u6267\u884c\u9636\u6bb5\uff0c\u5f53\u7b97\u5b50 ",(0,a.kt)("inlineCode",{parentName:"p"},"GetNeighbor")," \u8c03\u7528 Storage \u670d\u52a1\u7684\u63a5\u53e3\u83b7\u53d6\u4e00\u4e2a\u70b9\u7684\u90bb\u8fb9\u65f6\uff0cStorage \u670d\u52a1\u5185\u90e8\u4f1a\u76f4\u63a5\u5c06\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u8fb9\u8fc7\u6ee4\u6389\uff0c\u8fd9\u6837\u53ef\u4ee5\u6781\u5927\u5730\u51cf\u5c11\u4f20\u8f93\u7684\u6570\u636e\u91cf\uff0c\u8be5\u4f18\u5316\u79f0\u4e3a\u8fc7\u6ee4\u4e0b\u63a8\u3002"))),(0,a.kt)("h2",{id:"executor"},"Executor"),(0,a.kt)("p",null,"Executor \u6a21\u5757\u5305\u542b\u8c03\u5ea6\u5668\uff08Scheduler\uff09\u548c\u6267\u884c\u5668\uff08Executor\uff09\uff0c\u901a\u8fc7\u8c03\u5ea6\u5668\u8c03\u5ea6\u6267\u884c\u8ba1\u5212\uff0c\u8ba9\u6267\u884c\u5668\u6839\u636e\u6267\u884c\u8ba1\u5212\u751f\u6210\u5bf9\u5e94\u7684\u6267\u884c\u7b97\u5b50\uff0c\u4ece\u53f6\u5b50\u8282\u70b9\u5f00\u59cb\u6267\u884c\uff0c\u76f4\u5230\u6839\u8282\u70b9\u7ed3\u675f\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/docs-2.0/1.introduction/2.nebula-graph-architecture/executor.png",alt:"Executor"})),(0,a.kt)("p",null,"\u6bcf\u4e00\u4e2a\u6267\u884c\u8ba1\u5212\u8282\u70b9\u90fd\u4e00\u4e00\u5bf9\u5e94\u4e00\u4e2a\u6267\u884c\u7b97\u5b50\uff0c\u8282\u70b9\u7684\u8f93\u5165\u8f93\u51fa\u5728\u4f18\u5316\u6267\u884c\u8ba1\u5212\u65f6\u5df2\u7ecf\u786e\u5b9a\uff0c\u6bcf\u4e2a\u7b97\u5b50\u53ea\u9700\u8981\u62ff\u5230\u8f93\u5165\u53d8\u91cf\u4e2d\u7684\u503c\u8fdb\u884c\u8ba1\u7b97\uff0c\u6700\u540e\u5c06\u8ba1\u7b97\u7ed3\u679c\u653e\u5165\u5bf9\u5e94\u7684\u8f93\u51fa\u53d8\u91cf\u4e2d\u5373\u53ef\uff0c\u6240\u4ee5\u53ea\u9700\u8981\u4ece\u8282\u70b9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Start")," \u4e00\u6b65\u6b65\u6267\u884c\uff0c\u6700\u540e\u4e00\u4e2a\u7b97\u5b50\u7684\u8f93\u51fa\u53d8\u91cf\u4f1a\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("h2",{id:"\u4ee3\u7801\u7ed3\u6784"},"\u4ee3\u7801\u7ed3\u6784"),(0,a.kt)("p",null,"Nebula Graph \u7684\u4ee3\u7801\u5c42\u6b21\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"|--src\n   |--context    //\u6821\u9a8c\u671f\u548c\u6267\u884c\u671f\u4e0a\u4e0b\u6587\n   |--daemons\n   |--executor   //\u6267\u884c\u7b97\u5b50\n   |--mock\n   |--optimizer  //\u4f18\u5316\u89c4\u5219\n   |--parser     //\u8bcd\u6cd5\u8bed\u6cd5\u5206\u6790\n   |--planner    //\u6267\u884c\u8ba1\u5212\u7ed3\u6784\n   |--scheduler  //\u8c03\u5ea6\u5668\n   |--service\n   |--util       //\u57fa\u7840\u7ec4\u4ef6\n   |--validator  //\u8bed\u53e5\u6821\u9a8c\n   |--visitor\n")),(0,a.kt)("h2",{id:"\u89c6\u9891"},"\u89c6\u9891"),(0,a.kt)("p",null,"\u7528\u6237\u4e5f\u53ef\u4ee5\u901a\u8fc7\u89c6\u9891\u5168\u65b9\u4f4d\u4e86\u89e3 Nebula Graph \u7684\u67e5\u8be2\u5f15\u64ce\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1xV411n7DD"},"nMeetup\xb7\u4e0a\u6d77 \uff5c\u5168\u9762\u89e3\u6790 Query Engine"),"\uff0833 \u5206 30 \u79d2\uff09")),(0,a.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=417369444&bvid=BV1xV411n7DD&cid=317029694&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"720px",height:"480px"}," "))}u.isMDXComponent=!0}}]);
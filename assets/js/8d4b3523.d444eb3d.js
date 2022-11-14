"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={},o="Path types",p={unversionedId:"introduction/path",id:"version-1.0.0/introduction/path",title:"Path types",description:"In graph theory, a path in a graph is a finite or infinite sequence of edges which joins a sequence of vertices. Paths are fundamental concepts of graph theory.",source:"@site/versioned_docs/version-1.0.0/2.introduction/7.path.md",sourceDirName:"2.introduction",slug:"/introduction/path",permalink:"/docs/1.0.0/introduction/path",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/edit/main/versioned_docs/version-1.0.0/2.introduction/7.path.md",tags:[],version:"1.0.0",sidebarPosition:7,frontMatter:{},sidebar:"docs",previous:{title:"Data modeling",permalink:"/docs/1.0.0/introduction/data-model"},next:{title:"VID",permalink:"/docs/1.0.0/introduction/vid"}},l={},s=[{value:"Walk",id:"walk",level:2},{value:"Trail",id:"trail",level:2},{value:"Path",id:"path",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"path-types"},"Path types"),(0,i.kt)("p",null,"In graph theory, a path in a graph is a finite or infinite sequence of edges which joins a sequence of vertices. Paths are fundamental concepts of graph theory."),(0,i.kt)("p",null,"Paths can be categorized into 3 types: ",(0,i.kt)("inlineCode",{parentName:"p"},"walk"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"trail"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),". For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Path_(graph_theory)#Walk,_trail,_path"},"Wikipedia"),"."),(0,i.kt)("p",null,"The following figure is an example for a brief introduction."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/figures/path1.png",alt:"path"})),(0,i.kt)("h2",{id:"walk"},"Walk"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"walk")," is a finite or infinite sequence of edges. Both vertices and edges can be repeatedly visited in graph traversal."),(0,i.kt)("p",null,"In the above figure C, D, and E form a cycle. So, this figure contains infinite paths, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"A->B->C->D->E"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"A->B->C->D->E->C"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"A->B->C->D->E->C->D"),"."),(0,i.kt)("p",null,"!!! note"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"`GO` statements use `walk`.\n")),(0,i.kt)("h2",{id:"trail"},"Trail"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"trail")," is a finite sequence of edges. Only vertices can be repeatedly visited in graph traversal. The Seven Bridges of K\xf6nigsberg is a typical ",(0,i.kt)("inlineCode",{parentName:"p"},"trail"),"."),(0,i.kt)("p",null,"In the above figure, edges cannot be repeatedly visited. So, this figure contains finite paths. The longest path in this figure consists of 5 edges: ",(0,i.kt)("inlineCode",{parentName:"p"},"A->B->C->D->E->C"),"."),(0,i.kt)("p",null,"!!! note"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"`MATCH`, `FIND PATH`, and `GET SUBGRAPH` statements use `trail`.\n")),(0,i.kt)("p",null,"There are two special cases of trail, ",(0,i.kt)("inlineCode",{parentName:"p"},"cycle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"circuit"),". The following figure is an example for a brief introduction."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/figures/Circuits1.png",alt:"trail"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cycle"),(0,i.kt)("p",{parentName:"li"}," A ",(0,i.kt)("inlineCode",{parentName:"p"},"cycle")," refers to a closed ",(0,i.kt)("inlineCode",{parentName:"p"},"trail"),". Only the terminal vertices can be repeatedly visited. The longest path in this figure consists of 3 edges: ",(0,i.kt)("inlineCode",{parentName:"p"},"A->B->C->A")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"C->D->E->C"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"circuit"),(0,i.kt)("p",{parentName:"li"}," A ",(0,i.kt)("inlineCode",{parentName:"p"},"circuit")," refers to a closed ",(0,i.kt)("inlineCode",{parentName:"p"},"trail"),". Edges cannot be repeatedly visited in graph traversal. Apart from the terminal vertices, other vertices can also be repeatedly visited. The longest path in this figure: ",(0,i.kt)("inlineCode",{parentName:"p"},"A->B->C->D->E->C->A"),"."))),(0,i.kt)("h2",{id:"path"},"Path"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," is a finite sequence of edges. Neither vertices nor edges can be repeatedly visited in graph traversal."),(0,i.kt)("p",null,"So, the above figure contains finite paths. The longest path in this figure consists of 4 edges: ",(0,i.kt)("inlineCode",{parentName:"p"},"A->B->C->D->E"),"."))}d.isMDXComponent=!0}}]);
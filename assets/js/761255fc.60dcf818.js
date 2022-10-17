"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6684],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(r),v=i,d=h["".concat(s,".").concat(v)]||h[v]||u[v]||n;return r?a.createElement(d,c(c({ref:t},p),{},{components:r})):a.createElement(d,c({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,c=new Array(n);c[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<n;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7542:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=r(7462),i=(r(7294),r(3905));const n={},c="Architecture overview",o={unversionedId:"introduction/nebula-graph-architecture/architecture-overview",id:"version-1.1.0/introduction/nebula-graph-architecture/architecture-overview",title:"Architecture overview",description:"Nebula Graph consists of three services: the Graph Service, the Storage Service, and the Meta Service. It applies the separation of storage and computing architecture.",source:"@site/versioned_docs/version-1.1.0/2.introduction/5.nebula-graph-architecture/1.architecture-overview.md",sourceDirName:"2.introduction/5.nebula-graph-architecture",slug:"/introduction/nebula-graph-architecture/architecture-overview",permalink:"/introduction/nebula-graph-architecture/architecture-overview",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/versioned_docs/version-1.1.0/2.introduction/5.nebula-graph-architecture/1.architecture-overview.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"NebulaGraph Architecture",permalink:"/category/nebulagraph-architecture"},next:{title:"Meta Service",permalink:"/introduction/nebula-graph-architecture/meta-service"}},s={},l=[{value:"The Meta Service",id:"the-meta-service",level:2},{value:"The Graph Service and the Storage Service",id:"the-graph-service-and-the-storage-service",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture-overview"},"Architecture overview"),(0,i.kt)("p",null,"Nebula Graph consists of three services: the Graph Service, the Storage Service, and the Meta Service. It applies the separation of storage and computing architecture."),(0,i.kt)("p",null,"Each service has its executable binaries and processes launched from the binaries. Users can deploy a Nebula Graph cluster on a single machine or multiple machines using these binaries."),(0,i.kt)("p",null,"The following figure shows the architecture of a typical Nebula Graph cluster."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/figures/nebula-graph-architecture_3.png",alt:"Nebula Graph architecture",title:"Nebula Graph architecture"})),(0,i.kt)("h2",{id:"the-meta-service"},"The Meta Service"),(0,i.kt)("p",null,"The Meta Service in the Nebula Graph architecture is run by the nebula-metad processes. It is responsible for metadata management, such as schema operations, cluster administration, and user privilege management."),(0,i.kt)("p",null,"For details on the Meta Service, see ",(0,i.kt)("a",{parentName:"p",href:"/introduction/nebula-graph-architecture/meta-service"},"Meta Service"),"."),(0,i.kt)("h2",{id:"the-graph-service-and-the-storage-service"},"The Graph Service and the Storage Service"),(0,i.kt)("p",null,"Nebula Graph applies the separation of storage and computing architecture. The Graph Service is responsible for querying. The Storage Service is responsible for storage. They are run by different processes, i.e., nebula-graphd and nebula-storaged. The benefits of the separation of storage and computing architecture are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Great scalability"),(0,i.kt)("p",{parentName:"li"},"  The separated structure makes both the Graph Service and the Storage Service flexible and easy to scale in or out.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"High availability"),(0,i.kt)("p",{parentName:"li"},"  If part of the Graph Service fails, the data stored by the Storage Service suffers no loss. And if the rest part of the Graph Service is still able to serve the clients, service recovery can be performed quickly, even unfelt by the users.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cost-effective"),(0,i.kt)("p",{parentName:"li"},"  The separation of storage and computing architecture provides a higher resource utilization rate, and it enables clients to manage the cost flexibly according to business demands."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open to more possibilities"),(0,i.kt)("p",{parentName:"li"},"  With the ability to run separately, the Graph Service may work with multiple types of storage engines, and the Storage Service may also serve more types of computing engines."))),(0,i.kt)("p",null,"For details on the Graph Service and the Storage Service, see ",(0,i.kt)("a",{parentName:"p",href:"/introduction/nebula-graph-architecture/graph-service"},"Graph Service")," and ",(0,i.kt)("a",{parentName:"p",href:"/introduction/nebula-graph-architecture/storage-service"},"Storage Service"),"."))}u.isMDXComponent=!0}}]);
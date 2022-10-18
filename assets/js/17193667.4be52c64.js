"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return a?r.createElement(m,i(i({ref:t},h),{},{components:a})):r.createElement(m,i({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4024:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={},i="Meta Service",s={unversionedId:"introduction/nebula-graph-architecture/meta-service",id:"version-1.1.0/introduction/nebula-graph-architecture/meta-service",title:"Meta Service",description:"This topic introduces the architecture and functions of the Meta Service.",source:"@site/versioned_docs/version-1.1.0/2.introduction/5.nebula-graph-architecture/2.meta-service.md",sourceDirName:"2.introduction/5.nebula-graph-architecture",slug:"/introduction/nebula-graph-architecture/meta-service",permalink:"/introduction/nebula-graph-architecture/meta-service",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/edit/main/versioned_docs/version-1.1.0/2.introduction/5.nebula-graph-architecture/2.meta-service.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Architecture overview",permalink:"/introduction/nebula-graph-architecture/architecture-overview"},next:{title:"Graph Service",permalink:"/introduction/nebula-graph-architecture/graph-service"}},c={},l=[{value:"The architecture of the Meta Service",id:"the-architecture-of-the-meta-service",level:2},{value:"Functions of the Meta Service",id:"functions-of-the-meta-service",level:2},{value:"Manages user accounts",id:"manages-user-accounts",level:3},{value:"Manages partitions",id:"manages-partitions",level:3},{value:"Manages graph spaces",id:"manages-graph-spaces",level:3},{value:"Manages schema information",id:"manages-schema-information",level:3},{value:"Manages TTL information",id:"manages-ttl-information",level:3},{value:"Manages jobs",id:"manages-jobs",level:3}],h={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"meta-service"},"Meta Service"),(0,n.kt)("p",null,"This topic introduces the architecture and functions of the Meta Service."),(0,n.kt)("h2",{id:"the-architecture-of-the-meta-service"},"The architecture of the Meta Service"),(0,n.kt)("p",null,"The architecture of the Meta Service is as follows:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/docs-2.0/1.introduction/2.nebula-graph-architecture/meta-architecture1.png",alt:"The architecture of the Meta Service"})),(0,n.kt)("p",null,"The Meta Service is run by nebula-metad processes. Users can deploy nebula-metad processes according to the scenario:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In a test environment, users can deploy one or three nebula-metad processes on different machines or a single machine."),(0,n.kt)("li",{parentName:"ul"},"In a production environment, we recommend that users deploy three nebula-metad processes on different machines for high availability.")),(0,n.kt)("p",null,"All the nebula-metad processes form a Raft-based cluster, with one process as the leader and the others as the followers."),(0,n.kt)("p",null,"The leader is elected by the majorities and only the leader can provide service to the clients or other components of Nebula Graph. The followers will be run in a standby way and each has a data replication of the leader. Once the leader fails, one of the followers will be elected as the new leader."),(0,n.kt)("p",null,"!!! Note"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"The data of the leader and the followers will keep consistent through Raft. Thus the breakdown and election of the leader will not cause data inconsistency. For more information on Raft, see [Storage service architecture](/introduction/nebula-graph-architecture/storage-service#raft).\n")),(0,n.kt)("h2",{id:"functions-of-the-meta-service"},"Functions of the Meta Service"),(0,n.kt)("h3",{id:"manages-user-accounts"},"Manages user accounts"),(0,n.kt)("p",null,"The Meta Service stores the information of user accounts and the privileges granted to the accounts. When the clients send queries to the Meta Service through an account, the Meta Service checks the account information and whether the account has the right privileges to execute the queries or not."),(0,n.kt)("p",null,"For more information on Nebula Graph access control, see ",(0,n.kt)("a",{parentName:"p",href:"../../7.data-security/1.authentication/1.authentication.md"},"Authentication"),"."),(0,n.kt)("h3",{id:"manages-partitions"},"Manages partitions"),(0,n.kt)("p",null,"The Meta Service stores and manages the locations of the storage partitions and helps balance the partitions."),(0,n.kt)("h3",{id:"manages-graph-spaces"},"Manages graph spaces"),(0,n.kt)("p",null,"Nebula Graph supports multiple graph spaces. Data stored in different graph spaces are securely isolated. The Meta Service stores the metadata of all graph spaces and tracks the changes of them, such as adding or dropping a graph space."),(0,n.kt)("h3",{id:"manages-schema-information"},"Manages schema information"),(0,n.kt)("p",null,"Nebula Graph is a strong-typed graph database. Its schema contains tags (i.e., the vertex types), edge types, tag properties, and edge type properties."),(0,n.kt)("p",null,"The Meta Service stores the schema information. Besides, it performs the addition, modification, and deletion of the schema, and logs the versions of them."),(0,n.kt)("p",null,"For more information on Nebula Graph schema, see ",(0,n.kt)("a",{parentName:"p",href:"../2.data-model.md"},"Data model"),"."),(0,n.kt)("h3",{id:"manages-ttl-information"},"Manages TTL information"),(0,n.kt)("p",null,"The Meta Service stores the definition of TTL (Time to Live) options which are used to control data expiration. The Storage Service takes care of the expiring and evicting processes. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"../../3.ngql-guide/8.clauses-and-options/ttl-options.md"},"TTL"),"."),(0,n.kt)("h3",{id:"manages-jobs"},"Manages jobs"),(0,n.kt)("p",null,"The Job Management module in the Meta Service is responsible for the creation, queuing, querying, and deletion of jobs."))}u.isMDXComponent=!0}}]);
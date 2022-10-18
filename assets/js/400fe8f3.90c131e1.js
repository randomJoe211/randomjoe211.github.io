"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9719],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={},o="Storage Service",l={unversionedId:"introduction/nebula-graph-architecture/storage-service",id:"introduction/nebula-graph-architecture/storage-service",title:"Storage Service",description:"The persistent data of Nebula Graph have two parts. One is the Meta Service that stores the meta-related data.",source:"@site/docs/2.introduction/5.nebula-graph-architecture/4.storage-service.md",sourceDirName:"2.introduction/5.nebula-graph-architecture",slug:"/introduction/nebula-graph-architecture/storage-service",permalink:"/next/introduction/nebula-graph-architecture/storage-service",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/edit/main/docs/2.introduction/5.nebula-graph-architecture/4.storage-service.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"Graph Service",permalink:"/next/introduction/nebula-graph-architecture/graph-service"},next:{title:"Data modeling",permalink:"/next/introduction/data-model"}},s={},p=[{value:"Advantages",id:"advantages",level:2},{value:"The architecture of the Storage Service",id:"the-architecture-of-the-storage-service",level:2},{value:"Storage writing process",id:"storage-writing-process",level:2},{value:"KVStore",id:"kvstore",level:2},{value:"Data storage structure",id:"data-storage-structure",level:2},{value:"Property descriptions",id:"property-descriptions",level:3},{value:"Data partitioning",id:"data-partitioning",level:2},{value:"Edge partitioning and storage amplification",id:"edge-partitioning-and-storage-amplification",level:3},{value:"Partition algorithm",id:"partition-algorithm",level:3},{value:"Raft",id:"raft",level:2},{value:"Raft implementation",id:"raft-implementation",level:3},{value:"Multi Group Raft",id:"multi-group-raft",level:3},{value:"Batch",id:"batch",level:3},{value:"Transfer Leadership",id:"transfer-leadership",level:3},{value:"Peer changes",id:"peer-changes",level:3},{value:"Cache",id:"cache",level:2},{value:"Differences with HDFS",id:"differences-with-hdfs",level:2}],d={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"storage-service"},"Storage Service"),(0,n.kt)("p",null,"The persistent data of Nebula Graph have two parts. One is the ",(0,n.kt)("a",{parentName:"p",href:"/next/introduction/nebula-graph-architecture/meta-service"},"Meta Service")," that stores the meta-related data."),(0,n.kt)("p",null,"The other is the Storage Service that stores the data, which is run by the nebula-storaged process. This topic will describe the architecture of the Storage Service."),(0,n.kt)("h2",{id:"advantages"},"Advantages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"High performance (Customized built-in KVStore)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Great scalability (Shared-nothing architecture, not rely on NAS/SAN-like devices)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Strong consistency (Raft)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"High availability (Raft)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Supports synchronizing with the third party systems, such as ",(0,n.kt)("a",{parentName:"p",href:"../../4.deployment-and-installation/6.deploy-text-based-index/2.deploy-es.md"},"Elasticsearch"),"."))),(0,n.kt)("h2",{id:"the-architecture-of-the-storage-service"},"The architecture of the Storage Service"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www-cdn.nebula-graph.com.cn/nebula-blog/nebula-reading-storage-architecture.png",alt:"image"})),(0,n.kt)("p",null,"The Storage Service is run by the nebula-storaged process. Users can deploy nebula-storaged processes on different occasions. For example, users can deploy 1 nebula-storaged process in a test environment and deploy 3 nebula-storaged processes in a production environment."),(0,n.kt)("p",null,"All the nebula-storaged processes consist of a Raft-based cluster. There are three layers in the Storage Service:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Storage interface"),(0,n.kt)("p",{parentName:"li"}," The top layer is the storage interface. It defines a set of APIs that are related to the graph concepts. These API requests will be translated into a set of KV operations targeting the corresponding ",(0,n.kt)("a",{parentName:"p",href:"#data_partitioning"},"Partition"),". For example:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"getNeighbors"),": queries the in-edge or out-edge of a set of vertices, returns the edges and the corresponding properties, and supports conditional filtering.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"insert vertex/edge"),": inserts a vertex or edge and its properties.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"getProps"),": gets the properties of a vertex or an edge."))),(0,n.kt)("p",{parentName:"li"},"It is this layer that makes the Storage Service a real graph storage. Otherwise, it is just a KV storage.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Consensus"),(0,n.kt)("p",{parentName:"li"},"Below the storage interface is the consensus layer that implements ",(0,n.kt)("a",{parentName:"p",href:"#multi_group_raft"},"Multi Group Raft"),", which ensures the strong consistency and high availability of the Storage Service.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Store engine"),(0,n.kt)("p",{parentName:"li"},"The bottom layer is the local storage engine library, providing operations like ",(0,n.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"put"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"scan")," on local disks. The related interfaces are stored in ",(0,n.kt)("inlineCode",{parentName:"p"},"KVStore.h")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"KVEngine.h")," files. You can develop your own local store plugins based on your needs."))),(0,n.kt)("p",null,"The following will describe some features of the Storage Service based on the above architecture."),(0,n.kt)("h2",{id:"storage-writing-process"},"Storage writing process"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/figures/storage_write_process.png",alt:"image"})),(0,n.kt)("h2",{id:"kvstore"},"KVStore"),(0,n.kt)("p",null,"Nebula Graph develops and customizes its built-in KVStore for the following reasons."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It is a high-performance KVStore.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It is provided as a (kv) library and can be easily developed for the filter pushdown purpose. As a strong-typed database, how to provide Schema during pushdown is the key to efficiency for Nebula Graph.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It has strong data consistency."))),(0,n.kt)("p",null,"Therefore, Nebula Graph develops its own KVStore with RocksDB as the local storage engine. The advantages are as follows."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For multiple local hard disks, Nebula Graph can make full use of its concurrent capacities through deploying multiple data directories.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Meta Service manages all the Storage servers. All the partition distribution data and current machine status can be found in the meta service. Accordingly, users can execute a manual load balancing plan in meta service."),(0,n.kt)("p",{parentName:"li"},"!!! Note"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Nebula Graph does not support auto load balancing because auto data transfer will affect online business.\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Nebula Graph provides its own WAL mode so one can customize the WAL. Each partition owns its WAL.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"One Nebula Graph KVStore cluster supports multiple graph spaces, and each graph space has its own partition number and replica copies. Different graph spaces are isolated physically from each other in the same cluster."))),(0,n.kt)("h2",{id:"data-storage-structure"},"Data storage structure"),(0,n.kt)("p",null,"Graphs consist of vertices and edges. Nebula Graph uses key-value pairs to store vertices, edges, and their properties. Vertices and edges are stored in keys and their properties are stored in values. Such structure enables efficient property filtering."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The storage structure of vertices"),(0,n.kt)("p",{parentName:"li"},"Different from Nebula Graph version 2.x, version 3.x added a new key for each vertex. Compared to the old key that still exists, the new key has no ",(0,n.kt)("inlineCode",{parentName:"p"},"TagID")," field and no value. Vertices in Nebula Graph can now live without tags owing to the new key."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/figures/3.0-vertex-key.png",alt:"The vertex structure of Nebula Graph"})),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Type")),(0,n.kt)("td",{parentName:"tr",align:"left"},"One byte, used to indicate the key type.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"PartID")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Three bytes, used to indicate the sharding partition and to scan the partition data based on the prefix when re-balancing the partition.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"VertexID")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The vertex ID. For an integer VertexID, it occupies eight bytes. However, for a string VertexID, it is changed to ",(0,n.kt)("inlineCode",{parentName:"td"},"fixed_string")," of a fixed length which needs to be specified by users when they create the space.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"TagID")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Four bytes, used to indicate the tags that vertex relate with.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"SerializedValue")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The serialized value of the key. It stores the property information of the vertex."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The storage structure of edges"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/figures/3.0-edge-key.png",alt:"The edge structure of Nebula Graph"})),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Type")),(0,n.kt)("td",{parentName:"tr",align:"left"},"One byte, used to indicate the key type.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"PartID")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Three bytes, used to indicate the partition ID. This field can be used to scan the partition data based on the prefix when re-balancing the partition.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"VertexID")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Used to indicate vertex ID. The former VID refers to the source VID in the outgoing edge and the dest VID in the incoming edge, while the latter VID refers to the dest VID in the outgoing edge and the source VID in the incoming edge.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Edge Type")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Four bytes, used to indicate the edge type. Greater than zero indicates out-edge, less than zero means in-edge.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Rank")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Eight bytes, used to indicate multiple edges in one edge type. Users can set the field based on needs and store weight, such as transaction time and transaction number.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"PlaceHolder")),(0,n.kt)("td",{parentName:"tr",align:"left"},"One byte. Reserved.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"SerializedValue")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The serialized value of the key. It stores the property information of the edge.")))))),(0,n.kt)("h3",{id:"property-descriptions"},"Property descriptions"),(0,n.kt)("p",null,"Nebula Graph uses strong-typed Schema."),(0,n.kt)("p",null,"Nebula Graph will store the properties of vertex and edges in order after encoding them. Since the length of properties is fixed, queries can be made in no time according to offset. Before decoding, Nebula Graph needs to get (and cache) the schema information in the Meta Service. In addition, when encoding properties, Nebula Graph will add the corresponding schema version to support online schema change."),(0,n.kt)("h2",{id:"data-partitioning"},"Data partitioning"),(0,n.kt)("p",null,"Since in an ultra-large-scale relational network, vertices can be as many as tens to hundreds of billions, and edges are even more than trillions. Even if only vertices and edges are stored, the storage capacity of both exceeds that of ordinary servers. Therefore, Nebula Graph uses hash to shard the graph elements and store them in different partitions."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www-cdn.nebula-graph.com.cn/nebula-blog/DataModel02.png",alt:"data partitioning"})),(0,n.kt)("h3",{id:"edge-partitioning-and-storage-amplification"},"Edge partitioning and storage amplification"),(0,n.kt)("p",null,"In Nebula Graph, an edge corresponds to two key-value pairs on the hard disk. When there are lots of edges and each has many properties, storage amplification will be obvious. The storage format of edges is shown in the figure below."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/figures/edge-division.png",alt:"partitioning by edge"})),(0,n.kt)("p",null,"In this example, ScrVertex connects DstVertex via EdgeA, forming the path of ",(0,n.kt)("inlineCode",{parentName:"p"},"(SrcVertex)-[EdgeA]->(DstVertex)"),". ScrVertex, DstVertex, and EdgeA will all be stored in Partition x and Partition y as four key-value pairs in the storage layer. Details are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The key value of SrcVertex is stored in Partition x. Key fields include Type, PartID(x), VID(Src), and TagID. SerializedValue, namely Value, refers to serialized vertex properties.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The first key value of EdgeA, namely EdgeA_Out, is stored in the same partition as the ScrVertex. Key fields include Type, PartID(x), VID(Src), EdgeType(+ means out-edge), Rank(0), VID(Dst), and PlaceHolder. SerializedValue, namely Value, refers to serialized edge properties.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The key value of DstVertex is stored in Partition y. Key fields include Type, PartID(y), VID(Dst), and TagID. SerializedValue, namely Value, refers to serialized vertex properties.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The second key value of EdgeA, namely EdgeA_In, is stored in the same partition as the DstVertex. Key fields include Type, PartID(y), VID(Dst), EdgeType(- means in-edge), Rank(0), VID(Src), and PlaceHolder. SerializedValue, namely Value, refers to serialized edge properties, which is exactly the same as that in EdgeA_Out."))),(0,n.kt)("p",null,"EdgeA_Out and EdgeA_In are stored in storage layer with opposite directions, constituting EdgeA logically. EdgeA_Out is used for traversal requests starting from SrcVertex, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"(a)-[]->()"),"; EdgeA_In is used for traversal requests starting from DstVertex, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"()-[]->(a)"),"."),(0,n.kt)("p",null,"Like EdgeA_Out and EdgeA_In, Nebula Graph redundantly stores the information of each edge, which doubles the actual capacities needed for edge storage. The key corresponding to the edge occupies a small hard disk space, but the space occupied by Value is proportional to the length and amount of the property value. Therefore, it will occupy a relatively large hard disk space if the property value of the edge is large or there are many edge property values."),(0,n.kt)("p",null,"To ensure the final consistency of the two key-value pairs when operating on edges, enable the ",(0,n.kt)("a",{parentName:"p",href:"../../5.configurations-and-logs/1.configurations/3.graph-config.md"},"TOSS function"),". After that, the operation will be performed in Partition x first where the out-edge is located, and then in Partition y where the in-edge is located. Finally, the result is returned.\n--\x3e"),(0,n.kt)("h3",{id:"partition-algorithm"},"Partition algorithm"),(0,n.kt)("p",null,"Nebula Graph uses a ",(0,n.kt)("strong",{parentName:"p"},"static Hash")," strategy to shard data through a modulo operation on vertex ID. All the out-keys, in-keys, and tag data will be placed in the same partition. In this way, query efficiency is increased dramatically."),(0,n.kt)("p",null,"!!! Note"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"The number of partitions needs to be determined when users are creating a graph space since it cannot be changed afterward. Users are supposed to take into consideration the demands of future business when setting it.\n")),(0,n.kt)("p",null,"When inserting into Nebula Graph, vertices and edges are distributed across different partitions. And the partitions are located on different machines. The number of partitions is set in the CREATE SPACE statement and cannot be changed afterward."),(0,n.kt)("p",null,"If certain vertices need to be placed on the same partition (i.e., on the same machine), see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/vesoft-inc/nebula-common/blob/master/src/common/clients/meta/MetaClient.cpp"},"Formula/code"),"."),(0,n.kt)("p",null,"The following code will briefly describe the relationship between VID and partition."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// If VertexID occupies 8 bytes, it will be stored in int64 to be compatible with the version 1.0.\nuint64_t vid = 0;\nif (id.size() == 8) {\n    memcpy(static_cast<void*>(&vid), id.data(), 8);\n} else {\n    MurmurHash2 hash;\n    vid = hash(id.data());\n}\nPartitionID pId = vid % numParts + 1;\n")),(0,n.kt)("p",null,"Roughly speaking, after hashing a fixed string to int64, (the hashing of int64 is the number itself), do modulo, and then plus one, namely:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},"pId = vid % numParts + 1;\n")),(0,n.kt)("p",null,"Parameters and descriptions of the preceding formula are as follows:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"%")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The modulo operation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"numParts")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of partitions for the graph space where the ",(0,n.kt)("inlineCode",{parentName:"td"},"VID")," is located, namely the value of ",(0,n.kt)("inlineCode",{parentName:"td"},"partition_num")," in the ",(0,n.kt)("a",{parentName:"td",href:"../../3.ngql-guide/9.space-statements/1.create-space.md"},"CREATE SPACE")," statement.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"pId")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ID for the partition where the ",(0,n.kt)("inlineCode",{parentName:"td"},"VID")," is located.")))),(0,n.kt)("p",null,"Suppose there are 100 partitions, the vertices with ",(0,n.kt)("inlineCode",{parentName:"p"},"VID")," 1, 101, and 1001 will be stored on the same partition. But, the mapping between the partition ID and the machine address is random. Therefore, we cannot assume that any two partitions are located on the same machine."),(0,n.kt)("h2",{id:"raft"},"Raft"),(0,n.kt)("h3",{id:"raft-implementation"},"Raft implementation"),(0,n.kt)("p",null,"In a distributed system, one data usually has multiple replicas so that the system can still run normally even if a few copies fail. It requires certain technical means to ensure consistency between replicas."),(0,n.kt)("p",null,"Basic principle: Raft is designed to ensure consistency between replicas. Raft uses election between replicas, and the (candidate) replica that wins more than half of the votes will become the Leader, providing external services on behalf of all replicas. The rest Followers will play backups. When the Leader fails (due to communication failure, operation and maintenance commands, etc.), the rest Followers will conduct a new round of elections and vote for a new Leader. The Leader and Followers will detect each other's survival through heartbeats and write them to the hard disk in Raft-wal mode. Replicas that do not respond to more than multiple heartbeats will be considered faulty."),(0,n.kt)("p",null,"!!! Note"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Raft-wal needs to be written into the hard disk periodically. If hard disk bottlenecks to write, Raft will fail to send a heartbeat and conduct a new round of elections. If the hard disk IO is severely blocked, there will be no Leader for a long time.\n")),(0,n.kt)("p",null,"Read and write: For every writing request of the clients, the Leader will initiate a Raft-wal and synchronize it with the Followers. Only after over half replicas have received the Raft-wal will it return to the clients successfully. For every reading request of the clients, it will get to the Leader directly, while Followers will not be involved."),(0,n.kt)("p",null,"Failure: Scenario 1: Take a (space) cluster of a single replica as an example. If the system has only one replica, the Leader will be itself. If failure happens, the system will be completely unavailable. Scenario 2: Take a (space) cluster of three replicas as an example. If the system has three replicas, one of them will be the Leader and the rest will be the Followers. If the Leader fails, the rest two can still vote for a new Leader (and a Follower), and the system is still available. But if any of the two Followers fails again, the system will be completely unavailable due to inadequate voters."),(0,n.kt)("p",null,"!!! Note"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Raft and HDFS have different modes of duplication. Raft is based on a quorum vote, so the number of replicas cannot be even.\n")),(0,n.kt)("h3",{id:"multi-group-raft"},"Multi Group Raft"),(0,n.kt)("p",null,"The Storage Service supports a distributed cluster architecture, so Nebula Graph implements Multi Group Raft according to Raft protocol. Each Raft group stores all the replicas of each partition. One replica is the leader, while others are followers. In this way, Nebula Graph achieves strong consistency and high availability. The functions of Raft are as follows."),(0,n.kt)("p",null,"Nebula Graph uses Multi Group Raft to improve performance when there are many partitions because Raft-wal cannot be NULL. When there are too many partitions, costs will increase, such as storing information in Raft group, WAL files, or batch operation in low load."),(0,n.kt)("p",null,"There are two key points to implement the Multi Raft Group:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To share transport layer"),(0,n.kt)("p",{parentName:"li"}," Each Raft Group sends messages to its corresponding peers. So if the transport layer cannot be shared, the connection costs will be very high.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To share thread pool"),(0,n.kt)("p",{parentName:"li"},"Raft Groups share the same thread pool to prevent starting too many threads and a high context switch cost."))),(0,n.kt)("h3",{id:"batch"},"Batch"),(0,n.kt)("p",null,"For each partition, it is necessary to do a batch to improve throughput when writing the WAL serially. As Nebula Graph uses WAL to implement some special functions, batches need to be grouped, which is a feature of Nebula Graph."),(0,n.kt)("p",null,"For example, lock-free CAS operations will execute after all the previous WALs are committed. So for a batch, if there are several WALs in CAS type, we need to divide this batch into several smaller groups and make sure they are committed serially."),(0,n.kt)("h3",{id:"transfer-leadership"},"Transfer Leadership"),(0,n.kt)("p",null,"Transfer leadership is extremely important for balance. When moving a partition from one machine to another, Nebula Graph first checks if the source is a leader. If so, it should be moved to another peer. After data migration is completed, it is important to ",(0,n.kt)("a",{parentName:"p",href:"../../8.service-tuning/load-balance.md"},"balance leader distribution")," again."),(0,n.kt)("p",null,"When a transfer leadership command is committed, the leader will abandon its leadership and the followers will start a leader election."),(0,n.kt)("h3",{id:"peer-changes"},"Peer changes"),(0,n.kt)("p",null,"To avoid split-brain, when members in a Raft Group change, an intermediate state is required. In such a state, the quorum of the old group and new group always have an overlap. Thus it prevents the old or new group from making decisions unilaterally. To make it even simpler, in his doctoral thesis Diego Ongaro suggests adding or removing a peer once to ensure the overlap between the quorum of the new group and the old group. Nebula Graph also uses this approach, except that the way to add or remove a member is different. For details, please refer to addPeer/removePeer in the Raft Part class."),(0,n.kt)("h2",{id:"cache"},"Cache"),(0,n.kt)("p",null,"The cache management of RocksDB can not cache vertices or edges on demand. Nebula Graph implements its own cache management for Storage, allowing you to set the storage cache size, content, etc. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"../../5.configurations-and-logs/1.configurations/4.storage-config.md"},"Storage cache configurations"),"."),(0,n.kt)("h2",{id:"differences-with-hdfs"},"Differences with HDFS"),(0,n.kt)("p",null,"The Storage Service is a Raft-based distributed architecture, which has certain differences with that of HDFS. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Storage Service ensures consistency through Raft. Usually, the number of its replicas is odd to elect a leader. However, DataNode used by HDFS ensures consistency through NameNode, which has no limit on the number of replicas.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the Storage Service, only the replicas of the leader can read and write, while in HDFS all the replicas can do so.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the Storage Service, the number of replicas needs to be determined when creating a space, since it cannot be changed afterward. But in HDFS, the number of replicas can be changed freely.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Storage Service can access the file system directly. While the applications of HDFS (such as HBase) have to access HDFS before the file system, which requires more RPC times."))),(0,n.kt)("p",null,"In a word, the Storage Service is more lightweight with some functions simplified and its architecture is simpler than HDFS, which can effectively improve the read and write performance of a smaller block of data."))}h.isMDXComponent=!0}}]);
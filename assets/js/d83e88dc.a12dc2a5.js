"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[315],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>u});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),p=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),u=n,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||o;return t?r.createElement(m,s(s({ref:a},d),{},{components:t})):r.createElement(m,s({ref:a},d))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1885:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const o={},s="Market overview of graph databases",i={unversionedId:"introduction/graph-database",id:"introduction/graph-database",title:"Market overview of graph databases",description:"Now that we have discussed what a graph is, let's move on to further understanding graph databases developed based on graph theory and the property graph model.",source:"@site/docs/2.introduction/2.graph-database.md",sourceDirName:"2.introduction",slug:"/introduction/graph-database",permalink:"/docs/next/introduction/graph-database",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/edit/main/docs/2.introduction/2.graph-database.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"An introduction to graphs",permalink:"/docs/next/introduction/graph"},next:{title:"Related technologies",permalink:"/docs/next/introduction/related-tech"}},l={},p=[{value:"Third-party services market predictions",id:"third-party-services-market-predictions",level:2},{value:"DB-Engines ranking",id:"db-engines-ranking",level:3},{value:"Gartner\u2019s predictions",id:"gartners-predictions",level:3},{value:"Market size of graph databases",id:"market-size-of-graph-databases",level:3},{value:"Market participants",id:"market-participants",level:2},{value:"Neo4j, the pioneer of (first generation) graph databases",id:"neo4j-the-pioneer-of-first-generation-graph-databases",level:3},{value:"Overview of the recent history of graph databases",id:"overview-of-the-recent-history-of-graph-databases",level:4},{value:"The early history of Neo4j",id:"the-early-history-of-neo4j",level:4},{value:"The creation of Gremlin",id:"the-creation-of-gremlin",level:4},{value:"The creation of Cypher",id:"the-creation-of-cypher",level:4},{value:"Subsequent events",id:"subsequent-events",level:4},{value:"Distributed graph databases",id:"distributed-graph-databases",level:3},{value:"The second generation (distributed) graph database: Titan and its successor JanusGraph",id:"the-second-generation-distributed-graph-database-titan-and-its-successor-janusgraph",level:4},{value:"Famous products of the same period OrientDB, TigerGraph, ArangoDB, and DGraph",id:"famous-products-of-the-same-period-orientdb-tigergraph-arangodb-and-dgraph",level:4},{value:"Traditional giants Microsoft, Amazon, and Oracle",id:"traditional-giants-microsoft-amazon-and-oracle",level:4},{value:"Nebula Graph, a new generation of open-source distributed graph databases",id:"nebula-graph-a-new-generation-of-open-source-distributed-graph-databases",level:4}],d={toc:p};function h(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"market-overview-of-graph-databases"},"Market overview of graph databases"),(0,n.kt)("p",null,"Now that we have discussed what a graph is, let's move on to further understanding graph databases developed based on graph theory and the property graph model."),(0,n.kt)("p",null,"Different graph databases may differ slightly in terms of terminology, but in the end, they all talk about vertices, edges, and properties. As for more advanced features such as labels, indexes, constraints, TTL, long tasks, stored procedures, and UDFs, these advanced features will vary significantly from one graph database to another."),(0,n.kt)("p",null,"Graph databases use graphs to store data, and the graph structure is one of the structures that are closest to high flexibility and high performance. A graph database is a storage engine specifically designed to store and retrieve large information, which efficiently stores data as vertices and edges and allows high-performance retrieval and querying of these vertex-edge structures. We can also add properties to these vertices and edges."),(0,n.kt)("h2",{id:"third-party-services-market-predictions"},"Third-party services market predictions"),(0,n.kt)("h3",{id:"db-engines-ranking"},"DB-Engines ranking"),(0,n.kt)("p",null,"According to DB-Engines.com, the world's leading database ranking site, graph databases have been the fastest growing database category since 2013 ",(0,n.kt)("sup",{parentName:"p",id:"fnref-dbe"},(0,n.kt)("a",{parentName:"sup",href:"#fn-dbe",className:"footnote-ref"},"dbe")),"."),(0,n.kt)("p",null,"The site counts trends in the popularity of each category based on several metrics, including records and trends based on search engines such as Google, technical topics discussed on major IT technology forums and social networking sites, job posting changes on job boards. 371 database products are included in the site and are divided into 12 categories. Of these 12 categories, a category like graph databases is growing much faster than any of the others."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/db-rankings.png",alt:"Image"})),(0,n.kt)("h3",{id:"gartners-predictions"},"Gartner\u2019s predictions"),(0,n.kt)("p",null,"Gartner, one of the world's top think tanks, identified graph databases as a major business intelligence and analytics technology trend long before 2013 ",(0,n.kt)("sup",{parentName:"p",id:"fnref-gartner1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-gartner1",className:"footnote-ref"},"Gartner1")),". At that time, big data was hot as ever, and data scientists were in a hot position."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/gartner.jpg",alt:"Image"})),(0,n.kt)("p",null,"Until recently, graph databases and related graph technologies were ranked in the Top 10 Data and Analytics Trends for 2021 ",(0,n.kt)("sup",{parentName:"p",id:"fnref-gartner2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-gartner2",className:"footnote-ref"},"Gartner2")),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://images-cdn.newscred.com/Zz01NWM5ZDE3YzcxM2UxMWViODBhMDE5NTExMjNjOTZmZQ==",alt:"Image"})),(0,n.kt)("p",null,'!!! quote "Trend 8: Graph Relates Everything"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Graphs form the foundation of many modern data and analytics capabilities to find relationships between people, places, things, events, and locations across diverse data assets. D&A leaders rely on graphs to quickly answer complex business questions which require contextual awareness and an understanding of the nature of connections and strengths across multiple entities.\n\nGartner predicts that by 2025, graph technologies will be used in 80% of data and analytics innovations, up from 10% in 2021, facilitating rapid decision-making across the organization.      \n")),(0,n.kt)("p",null,"It can be noted that Gartner's predictions match the DB-Engines ranking well. There is usually a period of rapid bubble development, then a plateau period, followed by a new bubble period due to the emergence of new technologies, and then a plateau period again. "),(0,n.kt)("h3",{id:"market-size-of-graph-databases"},"Market size of graph databases"),(0,n.kt)("p",null,"According to statistics and forecasts from Verifiedmarketresearc",(0,n.kt)("sup",{parentName:"p",id:"fnref-ver"},(0,n.kt)("a",{parentName:"sup",href:"#fn-ver",className:"footnote-ref"},"ver")),", fnfresearch",(0,n.kt)("sup",{parentName:"p",id:"fnref-fnf"},(0,n.kt)("a",{parentName:"sup",href:"#fn-fnf",className:"footnote-ref"},"fnf")),", MarketsandMarkets",(0,n.kt)("sup",{parentName:"p",id:"fnref-mam"},(0,n.kt)("a",{parentName:"sup",href:"#fn-mam",className:"footnote-ref"},"mam")),", and Gartner",(0,n.kt)("sup",{parentName:"p",id:"fnref-gar"},(0,n.kt)("a",{parentName:"sup",href:"#fn-gar",className:"footnote-ref"},"gar")),", the global graph database market size is about to grow from about USD 0.8 billion in 2019 to USD 3-4 billion by 2026, at a Compound Annual Growth Rate (CAGR) of about 25%, which corresponds to about 5%-10% market share of the global database market. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.verifiedmarketresearch.com/wp-content/uploads/2020/10/Graph-Database-Market-Size.jpg",alt:"Image"})),(0,n.kt)("h2",{id:"market-participants"},"Market participants"),(0,n.kt)("h3",{id:"neo4j-the-pioneer-of-first-generation-graph-databases"},"Neo4j, the pioneer of (first generation) graph databases"),(0,n.kt)("p",null,"Although some graph-like data models and products, and the corresponding graph language G/G+ had been proposed in the 1970s (e.g. CODASYL ",(0,n.kt)("sup",{parentName:"p",id:"fnref-ddia"},(0,n.kt)("a",{parentName:"sup",href:"#fn-ddia",className:"footnote-ref"},"DDIA")),"). But it is Neo4j, the main pioneer in this market, that has really made the concept of graph databases popular, and even the two main terms (labeled) property graphs and graph databases were first introduced and practiced by Neo4j. "),(0,n.kt)("p",null,'!!! Info "This section on the history of Neo4j and the graph query language it created, Cypher, is largely excerpted from the ISO WG3 paper ',(0,n.kt)("em",{parentName:"p"},"An overview of the recent history of Graph Query Languages")," ",(0,n.kt)("sup",{parentName:"p",id:"fnref-tobias2018"},(0,n.kt)("a",{parentName:"sup",href:"#fn-tobias2018",className:"footnote-ref"},"Tobias2018"))," and ",(0,n.kt)("sup",{parentName:"p",id:"fnref-glang"},(0,n.kt)("a",{parentName:"sup",href:"#fn-glang",className:"footnote-ref"},"Glang")),". To take into account the latest two years of development, the content mentioned in this topic has been abridged and updated by the authors of this book.  "),(0,n.kt)("p",null,'!!! Note "About GQL (Graph Query Language) and the development of an International Standard"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Readers familiar with databases are probably aware of the Structured Query Language SQL. by using SQL, people access databases in a way that is close to natural language. Before SQL was widely adopted and standardized, the market for relational databases was very fragmented. Each vendor\'s product had a completely different way of accessing. Developers of the database product itself, developers of the tools surrounding the database product, and end-users of the database, all had to learn each product. When the SQL-89 standard was developed in 1989, the entire relational database market quickly focus on SQL-89. This greatly reduced the learning costs for the people mentioned above.\n\nGQL (Graph Query Language) assumes a role similar to SQL in the field of graph databases. Uses interacts with graphs with GQL. Unlike international standards such as SQL-89, there are no international standards for GQL. Two mainstream graph languages are Neo4j\u2019s Cypher and Apache TinkerPop\'s Gremlin. The former is often referred to as the DQL, Declarative Query Language. DQL tells the system "what to do", regardless of "how to do". The latter is referred to as the IQL, Imperative Query Language. IQL explicitly specifies the system\'s actions.\n\nThe GQL International Standard is in the process of being developed. \n')),(0,n.kt)("h4",{id:"overview-of-the-recent-history-of-graph-databases"},"Overview of the recent history of graph databases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In 2000, the idea of modeling data as a network came to the founders of Neo4j."),(0,n.kt)("li",{parentName:"ul"},"In 2001, Neo4j developed the earliest core part of the code."),(0,n.kt)("li",{parentName:"ul"},"In 2007, Neo4j started operating as a company. "),(0,n.kt)("li",{parentName:"ul"},"In 2009, Neo4j borrowed XPath as a graph query language. Gremlin ",(0,n.kt)("sup",{parentName:"li",id:"fnref-gremlin"},(0,n.kt)("a",{parentName:"sup",href:"#fn-gremlin",className:"footnote-ref"},"Gremlin"))," is also similar to XPath."),(0,n.kt)("li",{parentName:"ul"},"In 2010, Marko Rodriguez, a Neo4j employee, used the term Property Graph to describe the data model of Neo4j and TinkerPop (Gremlin)."),(0,n.kt)("li",{parentName:"ul"},"In 2011, the first public version Neo4j 1.4 was released, and the first version of Cypher was released."),(0,n.kt)("li",{parentName:"ul"},"In 2012, Neo4j 1.8 enabled you to write a Cypher. Neo4j 2.0 added labels and indexes. Cypher became a declarative graph query language."),(0,n.kt)("li",{parentName:"ul"},"In 2015, Cypher was opened up by Neo4j through the openCypher project."),(0,n.kt)("li",{parentName:"ul"},"In 2017, the ISO WG3 organization discussed how to use SQL to query property graph data."),(0,n.kt)("li",{parentName:"ul"},"In 2018, Starting from the Neo4j 3.5 GA, the core of Neo4j only for the Enterprise Edition will no longer be open source."),(0,n.kt)("li",{parentName:"ul"},"In 2019, ISO officially established two projects ISO/IEC JTC 1 N 14279 and ISO/IEC JTC 1/SC 32 N 3228 to develop an international standard for graph database language."),(0,n.kt)("li",{parentName:"ul"},"In 2021, the $325 million Series F funding round for Neo4j marks the largest investment round in database history.")),(0,n.kt)("h4",{id:"the-early-history-of-neo4j"},"The early history of Neo4j"),(0,n.kt)("p",null,"The data model property graph was first conceived in 2000. The founders of Neo4j were developing a media management system, and the schema of the system was often changed. To adapt to such changes, Peter Neubauer, one of the founders, wanted to enable the system to be modeled to a conceptually interconnected network. A group of graduate students at the Indian Institute of Technology Bombay implemented the earliest prototypes. Emil Eifr\xe9m, the Neo4j co-founder, and these students spent a week extending Peter's idea into a more abstract model: vertices were connected by relationships, and key-values were used as properties of vertices and relationships. They developed a Java API to interact with this data model and implemented an abstraction layer on top of the relational database. "),(0,n.kt)("p",null,"Although this network model greatly improved productivity, its performance has been poor. So Johan Svensson, Neo4j co-founder, put a lot of effort into implementing a native data management system, that is Neo4j. For the first few years, Neo4j was successful as an in-house product. In 2007, the intellectual property of Neo4j was transferred to an independent database company. "),(0,n.kt)("p",null,"In the first public release of Neo4j ( Neo4j 1.4\uff0c2011), the data model was consisted of vertices and typed edges. Vertices and edges have properties. The early versions of Neo4j did not have indexes. Applications had to construct their search structure from the root vertex. Because this was very unwieldy for the applications, Neo4j 2.0 (2013.12) introduced a new concept label on vertices. Based on labels, Neo4j can index some predefined vertex properties."),(0,n.kt)("p",null,'"Vertex", "Relationship", "Property", "Relationships can only have one label.", "Vertices can have zero or multiple labels.". All these concepts form the data model definitions for Neo4j property graphs. With the later addition of indexing, Cypher became the main way of interacting with Neo4j. This is because the application developer only needs to focus on the data itself, not on the search structure that the developer built himself as mentioned above.'),(0,n.kt)("h4",{id:"the-creation-of-gremlin"},"The creation of Gremlin"),(0,n.kt)("p",null,"Gremlin is a graph query language based on Apache TinkerPop, which is close in style to a sequence of function (procedure) calls. Initially, Neo4j was queried through the Java API. applications could embed the query engine as a library into the application and then use the API to query the graph."),(0,n.kt)("p",null,"The early Neo4j employees Tobias Lindaaker, Ivarsson, Peter Neubauer, and Marko Rodriguez used XPath as a graph query. Groovy provides loop structures, branching, and computation. This was the original prototype of Gremlin, the first version of which was released in November 2009."),(0,n.kt)("p",null,"Later, Marko found a lot of problems with using two different parsers (XPath and Groovy) at the same time and changed Gremlin to a Domain Specific Language (DSL) based on Groovy."),(0,n.kt)("h4",{id:"the-creation-of-cypher"},"The creation of Cypher"),(0,n.kt)("p",null,"Gremlin, like Neo4j's Java API, was originally intended to be a procedural way of expressing how to query databases. It uses shorter syntaxes to query and remotely access databases through the network. The procedural nature of Gremlin requires users to know the best way to query results, which is still burdensome for application developers. Over the last 30 years, the declarative language SQL has been a great success. SQL can separate the declarative way to get data from how the engine gets data. So the Neo4j engineers wanted to develop a declarative graph query language."),(0,n.kt)("p",null,"In 2010, Andr\xe9s Taylor joined Neo4j as an engineer. Inspired by SQL, he started a project to develop graph query language, which was released as Neo4j 1.4 in 2011. The language is the ancestor of most graph query languages today - Cypher. "),(0,n.kt)("p",null,"Cypher's syntax is based on the use of ASCII art to describe graph patterns. This approach originally came from the annotations on how to describe graph patterns in the source code. An example can be seen as follows."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www-cdn.nebula-graph.com.cn/nebula-blog/the-origin-of-cypher.png",alt:"Image"})),(0,n.kt)("p",null,"Simply put, ASCII art uses printable text to describe vertices and edges. Cypher syntax uses ",(0,n.kt)("inlineCode",{parentName:"p"},"()")," for vertices and ",(0,n.kt)("inlineCode",{parentName:"p"},"-[]->")," for edges. ",(0,n.kt)("inlineCode",{parentName:"p"},"(query)-[modeled as]->(drawing)")," is used to represent a simple graph relationship (which can also be called graph schema): ",(0,n.kt)("inlineCode",{parentName:"p"},"the starting vertex - query"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"the destination vertex - drawing"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"the edge - modeled as"),". "),(0,n.kt)("p",null,"The first version of Cypher implemented graph reading, but users should specify vertices from which to start querying. Only from these vertices could graph schema matching be supported. "),(0,n.kt)("p",null,"In a later version, Neo4j 1.8, released in October 2012, Cypher added the ability to modify graphs. However, queries still need to specify which nodes to start from."),(0,n.kt)("p",null,"In December 2013, Neo4j 2.0 introduced the concept of a label, which is essentially an index. This allows the query engine to use the index to select the vertices matched by the schema, without requiring the user to specify the vertex to start the query."),(0,n.kt)("p",null,"With the popularity of Neo4j, Cypher has a wide community of developers and is widely used in a variety of industries. It is still the most popular graph query language."),(0,n.kt)("p",null,"In September 2015, Neo4j established the openCypher Implementors Group (oCIG) to open source Cypher to openCypher, to govern and advance the evolution of the language itself through open source."),(0,n.kt)("h4",{id:"subsequent-events"},"Subsequent events"),(0,n.kt)("p",null,"Cypher has inspired a series of graph query languages, including:"),(0,n.kt)("p",null,"2015, Oracle released PGQL, a graph language used by the graph engine PGX."),(0,n.kt)("p",null,"2016, the Linked Data Benchmarking Council (short for LDBC) an industry-renowned benchmarking organization for graph performance, released G-CORE."),(0,n.kt)("p",null,"2018, RedisGraph, a Redis-based graph library, adopted Cypher as its graph language. "),(0,n.kt)("p",null,"2019, the International Standards Organization ISO started two projects to initiate the process of developing an international standard for graph languages based on existing industry achievements such as openCypher, PGQL, GSQL",(0,n.kt)("sup",{parentName:"p",id:"fnref-gsql"},(0,n.kt)("a",{parentName:"sup",href:"#fn-gsql",className:"footnote-ref"},"GSQL")),", and G-CORE."),(0,n.kt)("p",null,"2019, Nebula Graph released Nebula Graph Query Language (nGQL) based on openCypher."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/langhis.jpg",alt:"Image",title:"\u56fe\u8bed\u8a00\u7684\u5386\u53f2"})),(0,n.kt)("h3",{id:"distributed-graph-databases"},"Distributed graph databases"),(0,n.kt)("p",null,'From 2005 to 2010, with the release of Google\'s cloud computing "Troika", various distributed architectures became increasingly popular, including Hadoop and Cassandra, which have been open-sourced. Several implications are as follows:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The technical and cost advantages of distributed systems over single machines (e.g. Neo4j) or small machines are more obvious due to the increasing volume of data and computation. Distributed systems allow applications to access these thousands of machines as if they were local systems, without the need for much modification at the code level.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The open-source approach allows more people to know emerging technologies and feedback to the community in a more cost-effective way, including code developers, data scientists, and product managers. "))),(0,n.kt)("p",null,"Strictly speaking, Neo4j also offers several distributed capabilities, which are quite different from the industry's sense of the distributed system."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Neo4j 3. x requires that the full amount of data must be stored on a single machine. Although it supports full replication and high availability between multiple machines, the data cannot be sliced into different subgraphs. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/causal.png",alt:null}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Neo4j 4. x stores a part of data on different machines (subgraphs), and then the application layer assembles data in a certain way (called Fabric)",(0,n.kt)("sup",{parentName:"p",id:"fnref-fosdem20"},(0,n.kt)("a",{parentName:"sup",href:"#fn-fosdem20",className:"footnote-ref"},"fosdem20"))," and distributes the reads and writes to each machine. This approach requires a log of involvement and work from the application layer code. For example, designing how to place different subgraphs on which machines they should be placed and how to assemble some of the results obtained from each machine into the final result."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://dist.neo4j.com/wp-content/uploads/20200131191103/Neo4j-Fabric-LDBC-sharding-scheme.jpg",alt:null})),(0,n.kt)("p",{parentName:"li"},"The style of its syntax is as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},"USE graphA  \nMATCH (movie:Movie)\nReturn movie.title AS title\n    UNION   \nUSE graphB  \nMATCH \uff08move:Movie)\nRETURN movie.title AS title\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/fabric.png",alt:null})))),(0,n.kt)("h4",{id:"the-second-generation-distributed-graph-database-titan-and-its-successor-janusgraph"},"The second generation (distributed) graph database: Titan and its successor JanusGraph"),(0,n.kt)("p",null,"In 2011, Aurelius was founded to develop an open-source distributed graph database called Titan ",(0,n.kt)("sup",{parentName:"p",id:"fnref-titan"},(0,n.kt)("a",{parentName:"sup",href:"#fn-titan",className:"footnote-ref"},"titan")),". By the first official release of Titan in 2015, the backend of Titan can support many major distributed storage architectures (e.g. Cassandra, HBase, Elasticsearch, BerkeleyDB) and can reuse many of the conveniences of the Hadoop ecosystem, with Gremlin as a unified query language on the frontend. It is easy for programmers to use, develop and participate in the community. Large-scale graphs could be sharded and stored on HBase or Cassandra (which were relatively mature distributed storage solutions at the time), and the Gremlin language was relatively full-featured though slightly lengthy. The whole solution was competitive at that time (2011-2015)."),(0,n.kt)("p",null,"The following picture shows the growth of Titan and Neo4j stars on Github.com from 2012 to 2015."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/titan-2015-neo4j.png",alt:"Image"})),(0,n.kt)("p",null,"After Aurelius (Titan) was acquired by DataStax in 2015, Titan was gradually transformed into a closed-source commercial product(DataStax Enterprise Graph)."),(0,n.kt)("p",null,"After the acquisition of Aurelius(Titan), there has been a strong demand for an open-source distributed graph database, and there were not many mature and active products in the market. In the era of big data, data is still being generated in a steady stream, far faster than Moore's Law. The Linux Foundation, along with some technology giants (Expero, Google, GRAKN.AI, Hortonworks, IBM, and Amazon) replicated and forked the original Titan project and started it as a new project  JanusGraph",(0,n.kt)("sup",{parentName:"p",id:"fnref-janus"},(0,n.kt)("a",{parentName:"sup",href:"#fn-janus",className:"footnote-ref"},"Janus")),". Most of the community work including development, testing, release, and promotion, has been gradually shifted to the new JanusGraph\u3002"),(0,n.kt)("p",null,"The following graph shows the evolution of daily code commits (pull requests) for the two projects, and we can see:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Although Aurelius(Titan) still has some activity in its open-source code after its acquisition in 2015, the growth rate has slowed down significantly. This reflects the strength of the community.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After the new project was started in January 2017, its community became active quickly, surpassing the number of pull requests accumulated by Titan in the past 5 years in just one year. At the same time, the open-source Titan came to a halt."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/titan-janus-dev.png",alt:"Image"})))),(0,n.kt)("h4",{id:"famous-products-of-the-same-period-orientdb-tigergraph-arangodb-and-dgraph"},"Famous products of the same period OrientDB, TigerGraph, ArangoDB, and DGraph"),(0,n.kt)("p",null,"In addition to JanusGraph managed by the Linux Foundation, more vendors have been joined the overall market. Some distributed graph databases that were developed by commercial companies use different data models and access methods."),(0,n.kt)("p",null,"The following table only lists the main differences."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Vendors"),(0,n.kt)("th",{parentName:"tr",align:null},"Creation time"),(0,n.kt)("th",{parentName:"tr",align:null},"Core product"),(0,n.kt)("th",{parentName:"tr",align:null},"Open source protocol"),(0,n.kt)("th",{parentName:"tr",align:null},"Data model"),(0,n.kt)("th",{parentName:"tr",align:null},"Query language"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OrientDB LTD (Acquired by SAP in 2017)"),(0,n.kt)("td",{parentName:"tr",align:null},"2011"),(0,n.kt)("td",{parentName:"tr",align:null},"OrientDB"),(0,n.kt)("td",{parentName:"tr",align:null},"Open source"),(0,n.kt)("td",{parentName:"tr",align:null},"Document + KV + Graph"),(0,n.kt)("td",{parentName:"tr",align:null},"OrientDB SQL (SQL-based extended graph abilities)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GraphSQL (was renamed TigerGraph)"),(0,n.kt)("td",{parentName:"tr",align:null},"2012"),(0,n.kt)("td",{parentName:"tr",align:null},"TigerGraph"),(0,n.kt)("td",{parentName:"tr",align:null},"Commercial version"),(0,n.kt)("td",{parentName:"tr",align:null},"Graph (Analysis)"),(0,n.kt)("td",{parentName:"tr",align:null},"GraphSQL (similar to SQL)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ArangoDB GmbH"),(0,n.kt)("td",{parentName:"tr",align:null},"2014"),(0,n.kt)("td",{parentName:"tr",align:null},"ArangoDB"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache License 2.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Document + KV + Graph"),(0,n.kt)("td",{parentName:"tr",align:null},"AQL (Simultaneous operation of documents, KVs and graphs)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DGraph Labs"),(0,n.kt)("td",{parentName:"tr",align:null},"2016"),(0,n.kt)("td",{parentName:"tr",align:null},"DGraph"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache Public License 2.0 + Dgraph Community License"),(0,n.kt)("td",{parentName:"tr",align:null},"Originally RDF, later changed to GraphQL"),(0,n.kt)("td",{parentName:"tr",align:null},"GraphQL+-")))),(0,n.kt)("h4",{id:"traditional-giants-microsoft-amazon-and-oracle"},"Traditional giants Microsoft, Amazon, and Oracle"),(0,n.kt)("p",null,"In addition to vendors focused on graph products, traditional giants have also entered the graph database field."),(0,n.kt)("p",null,"Microsoft Azure Cosmos DB",(0,n.kt)("sup",{parentName:"p",id:"fnref-cosmos"},(0,n.kt)("a",{parentName:"sup",href:"#fn-cosmos",className:"footnote-ref"},"cosmos"))," is a multimodal database cloud service on the Microsoft cloud that provides SQL, document, graph, key-value, and other capabilities.\nAmazon AWS Neptune",(0,n.kt)("sup",{parentName:"p",id:"fnref-neptune"},(0,n.kt)("a",{parentName:"sup",href:"#fn-neptune",className:"footnote-ref"},"neptune"))," is a graph database cloud service provided by AWS support property graphs and RDF two data models.\nOracle Graph",(0,n.kt)("sup",{parentName:"p",id:"fnref-oracle"},(0,n.kt)("a",{parentName:"sup",href:"#fn-oracle",className:"footnote-ref"},"Oracle"))," is a product of the relational database giant Oracle in the direction of graph technology and graph databases."),(0,n.kt)("h4",{id:"nebula-graph-a-new-generation-of-open-source-distributed-graph-databases"},"Nebula Graph, a new generation of open-source distributed graph databases"),(0,n.kt)("p",null,"In the following topics, we will formally introduce Nebula Graph, a new generation of open-source distributed graph databases."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-dbe"},(0,n.kt)("a",{parentName:"li",href:"https://db-engines.com/en/ranking_categories"},"https://db-engines.com/en/ranking_categories"),(0,n.kt)("a",{parentName:"li",href:"#fnref-dbe",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-gartner1"},(0,n.kt)("a",{parentName:"li",href:"https://www.yellowfinbi.com/blog/2014/06/yfcommunitynews-big-data-analytics-the-need-for-pragmatism-tangible-benefits-and-real-world-case-165305"},"https://www.yellowfinbi.com/blog/2014/06/yfcommunitynews-big-data-analytics-the-need-for-pragmatism-tangible-benefits-and-real-world-case-165305"),(0,n.kt)("a",{parentName:"li",href:"#fnref-gartner1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-gartner2"},(0,n.kt)("a",{parentName:"li",href:"https://www.gartner.com/smarterwithgartner/gartner-top-10-data-and-analytics-trends-for-2021/"},"https://www.gartner.com/smarterwithgartner/gartner-top-10-data-and-analytics-trends-for-2021/"),(0,n.kt)("a",{parentName:"li",href:"#fnref-gartner2",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-ver"},(0,n.kt)("a",{parentName:"li",href:"https://www.verifiedmarketresearch.com/product/graph-database-market/"},"https://www.verifiedmarketresearch.com/product/graph-database-market/"),(0,n.kt)("a",{parentName:"li",href:"#fnref-ver",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-fnf"},(0,n.kt)("a",{parentName:"li",href:"https://www.globenewswire.com/news-release/2021/01/28/2165742/0/en/Global-Graph-Database-Market-Size-Share-to-Exceed-USD-4-500-Million-By-2026-Facts-Factors.html"},"https://www.globenewswire.com/news-release/2021/01/28/2165742/0/en/Global-Graph-Database-Market-Size-Share-to-Exceed-USD-4-500-Million-By-2026-Facts-Factors.html"),(0,n.kt)("a",{parentName:"li",href:"#fnref-fnf",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-mam"},(0,n.kt)("a",{parentName:"li",href:"https://www.marketsandmarkets.com/Market-Reports/graph-database-market-126230231.html"},"https://www.marketsandmarkets.com/Market-Reports/graph-database-market-126230231.html"),(0,n.kt)("a",{parentName:"li",href:"#fnref-mam",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-gar"},(0,n.kt)("a",{parentName:"li",href:"https://www.gartner.com/en/newsroom/press-releases/2019-07-01-gartner-says-the-future-of-the-database-market-is-the"},"https://www.gartner.com/en/newsroom/press-releases/2019-07-01-gartner-says-the-future-of-the-database-market-is-the"),(0,n.kt)("a",{parentName:"li",href:"#fnref-gar",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-ddia"},(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321"},"https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321"),(0,n.kt)("a",{parentName:"li",href:"#fnref-ddia",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-tobias2018"},'"An overview of the recent history of Graph Query Languages". Authors: Tobias Lindaaker, U.S. National Expert.Date: 2018-05-14 ',(0,n.kt)("a",{parentName:"li",href:"#fnref-tobias2018",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-glang"},"I. F. Cruz, A. O. Mendelzon, and P. T. Wood. A Graphical Query Language Supporting Recursion. In Proceedings of the Association for Computing Machinery Special Interest Group on Management of Data, pages 323\u2013330. ACM Press, May 1987.",(0,n.kt)("a",{parentName:"li",href:"#fnref-glang",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-gremlin"},"Gremlin is a graph language developed based on ",(0,n.kt)("a",{parentName:"li",href:"https://tinkerpop.apache.org/"},"Apache TinkerPop"),".",(0,n.kt)("a",{parentName:"li",href:"#fnref-gremlin",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-gsql"},(0,n.kt)("a",{parentName:"li",href:"https://docs.tigergraph.com/dev/gsql-ref"},"https://docs.tigergraph.com/dev/gsql-ref"),(0,n.kt)("a",{parentName:"li",href:"#fnref-gsql",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-fosdem20"},(0,n.kt)("a",{parentName:"li",href:"https://neo4j.com/fosdem20/"},"https://neo4j.com/fosdem20/"),(0,n.kt)("a",{parentName:"li",href:"#fnref-fosdem20",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-titan"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/thinkaurelius/titan"},"https://github.com/thinkaurelius/titan"),(0,n.kt)("a",{parentName:"li",href:"#fnref-titan",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-janus"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JanusGraph/janusgraph"},"https://github.com/JanusGraph/janusgraph"),(0,n.kt)("a",{parentName:"li",href:"#fnref-janus",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-cosmos"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/free/cosmos-db/"},"https://azure.microsoft.com/en-us/free/cosmos-db/"),(0,n.kt)("a",{parentName:"li",href:"#fnref-cosmos",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-neptune"},(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/neptune/"},"https://aws.amazon.com/cn/neptune/"),(0,n.kt)("a",{parentName:"li",href:"#fnref-neptune",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-oracle"},(0,n.kt)("a",{parentName:"li",href:"https://www.oracle.com/database/graph/"},"https://www.oracle.com/database/graph/"),(0,n.kt)("a",{parentName:"li",href:"#fnref-oracle",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);
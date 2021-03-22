(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(301)),i={id:"odata",title:"OData / Microsoft Graph",sidebar_label:"OData / Microsoft Graph"},l={unversionedId:"handlers/odata",id:"handlers/odata",isDocsHomePage:!1,title:"OData / Microsoft Graph",description:"image",source:"@site/docs/handlers/odata.md",slug:"/handlers/odata",permalink:"/docs/handlers/odata",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/odata.md",version:"current",sidebar_label:"OData / Microsoft Graph",sidebar:"sidebar",previous:{title:"MongoDB / Mongoose",permalink:"/docs/handlers/mongoose"},next:{title:"Apache Thrift",permalink:"/docs/handlers/thrift"}},c=[{value:"Dynamic Header Values",id:"dynamic-header-values",children:[{value:"From Context (HTTP Header for <code>mesh serve</code>)",id:"from-context-http-header-for-mesh-serve",children:[]},{value:"From Environmental Variable",id:"from-environmental-variable",children:[]}]},{value:"Codesandbox Example",id:"codesandbox-example",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/20847995/79219762-87947a80-7e5b-11ea-903d-ba159935fa17.png",alt:"image"})),Object(o.b)("p",null,"This handler allows you to load remote ",Object(o.b)("a",{parentName:"p",href:"https://www.odata.org/"},"OData")," metadata/schema as GraphQL Schema."),Object(o.b)("p",null,"To get started, install the handler library from NPM:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ yarn add @graphql-mesh/odata\n")),Object(o.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: TripPin\n    handler:\n      odata:\n        baseUrl: https://services.odata.org/TripPinRESTierService/\n")),Object(o.b)("h2",{id:"dynamic-header-values"},"Dynamic Header Values"),Object(o.b)("p",null,"Mesh can take dynamic values from the GraphQL Context or the environmental variables. If you use ",Object(o.b)("inlineCode",{parentName:"p"},"mesh serve"),", GraphQL Context will be the incoming HTTP request."),Object(o.b)("p",null,"The expression inside dynamic values should be as in JS."),Object(o.b)("h3",{id:"from-context-http-header-for-mesh-serve"},"From Context (HTTP Header for ",Object(o.b)("inlineCode",{parentName:"h3"},"mesh serve"),")"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: MyGraphQLApi\n    handler:\n      odata:\n        baseUrl: https://graph.microsoft.com/v1.0\n        operationHeaders:\n          # Please do not use capital letters while getting the headers\n          Authorization: Bearer {context.headers['x-my-api-token']} \n          # You can also access to the cookies like below;\n          # Authorization: Bearer {context.cookies.myApiToken}\n")),Object(o.b)("p",null,"And for ",Object(o.b)("inlineCode",{parentName:"p"},"mesh serve"),", you can pass the value using ",Object(o.b)("inlineCode",{parentName:"p"},"x-my-graphql-api-token")," HTTP header."),Object(o.b)("h3",{id:"from-environmental-variable"},"From Environmental Variable"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MY_API_TOKEN")," is the name of the environmental variable you have the value."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: MyGraphQLApi\n    handler:\n      odata:\n        baseUrl: https://graph.microsoft.com/v1.0\n        operationHeaders:\n          Authorization: Bearer ${MY_API_TOKEN}\n")),Object(o.b)("h2",{id:"codesandbox-example"},"Codesandbox Example"),Object(o.b)("p",null,"You can check out our TripPin example that uses OData handler."),Object(o.b)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/odata-trippin?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"odata-trippin-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(o.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(o.b)("p",null,Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"baseUrl")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required) - Base URL for OData API"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"metadata")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),") - Custom $metadata File or URL"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"JSON"),") - Headers to be used with the operation requests"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"JSON"),") - Headers to be used with the $metadata requests"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"batch")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String (multipart | json)"),") - Enable batching"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"expandNavProps")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - Use $expand for navigation props instead of seperate HTTP requests (Default: false)"))))}p.isMDXComponent=!0},301:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||o;return a?r.a.createElement(u,l(l({ref:t},s),{},{components:a})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
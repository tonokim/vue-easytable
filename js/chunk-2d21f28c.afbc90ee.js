(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f28c"],{d945:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Pagination 分页")]),n("Usage"),n("BaseUsage"),n("PageIndex"),n("PageSize"),n("PagingButtons"),n("PagingConfiguration"),n("CallbackEvents"),n("LayoutSettings"),n("Api")],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"使用方法",fileName:"usage.md"}}),e._m(0),e._m(1),n("p",[e._v("使用")]),e._m(2)],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("引入 "),n("code",[e._v("VePagination")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-javascript"},[e._v('import Vue from "vue";\nimport { VePagination } from "vue-easytable";\n\nVue.use(VePagination);\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-javascript"},[e._v('<template>\n  <ve-pagination :total="600" />\n</template>\n')])])}],i=n("2877"),l={},s=Object(i["a"])(l,o,c,!1,null,null,null),p=s.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"基础示例",fileName:"base-usage.md"}}),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-pagination :total="600" />\n</template>\n')])])])],2)],1)},v=[];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600}})]],2)},t=[],n={};return m({render:e,staticRenderFns:t},n)}()}},f=b,_=Object(i["a"])(f,u,v,!1,null,null,null),O=_.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"当前页码",fileName:"page-index.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v("page-index")]),e._v(" 属性设置当前页码")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-pagination :total="600" :page-index="2" />\n</template>\n')])])])],2)],1)},j=[];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600,"page-index":2}})]],2)},t=[],n={};return P({render:e,staticRenderFns:t},n)}()}},x=E,z=Object(i["a"])(x,h,j,!1,null,null,null),C=z.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"每页大小",fileName:"page-size.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v("page-size")]),e._v(" 属性设置每页大小")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-pagination :total="600" :page-size="30" />\n</template>\n')])])])],2)],1)},S=[];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600,"page-size":30}})]],2)},t=[],n={};return $({render:e,staticRenderFns:t},n)}()}},R=F,I=Object(i["a"])(R,D,S,!1,null,null,null),A=I.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"分页按钮个数",fileName:"paging-buttons.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v("pagingCount")]),e._v(" 属性设置向前 5 页和向后 5 页，其中间按钮的个数分页按钮个数")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-pagination :total="600" :paging-count="6" />\n</template>\n')])])])],2)],1)},B=[];function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600,"paging-count":6}})]],2)},t=[],n={};return L({render:e,staticRenderFns:t},n)}()}},q=J,G=Object(i["a"])(q,V,B,!1,null,null,null),H=G.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"分页下拉配置",fileName:"paging-configuration.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v("pageSizeOption")]),e._v(" 属性设置分页下拉配置")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-pagination :total="600" :page-size-option="[5,10,15]" :page-size="5" />\n</template>\n')])])])],2)],1)},M=[];function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){X(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600,"page-size-option":[5,10,15],"page-size":5}})]],2)},t=[],n={};return W({render:e,staticRenderFns:t},n)}()}},Z=Y,ee=Object(i["a"])(Z,K,M,!1,null,null,null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Callback Events",fileName:"callback-events.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、"),n("code",[e._v("on-page-number-change")]),e._v("Page number change callback event"),n("br"),e._v("2、"),n("code",[e._v("on-page-size-change")]),e._v("Change callback events under each page")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-pagination\n        :total="600"\n        @on-page-number-change="pageNumberChange"\n        @on-page-size-change="pageSizeChange"\n    />\n</template>\n<script>\n    export default {\n        methods: {\n            pageNumberChange(pageIndex) {\n                console.log(pageIndex);\n            },\n\n            pageSizeChange(pageSize) {\n                console.log(pageSize);\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},re=[];function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ie={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600},on:{"on-page-number-change":e.pageNumberChange,"on-page-size-change":e.pageSizeChange}})]],2)},t=[],n={methods:{pageNumberChange:function(e){console.log(e)},pageSizeChange:function(e){console.log(e)}}};return oe({render:e,staticRenderFns:t},n)}()}},le=ie,se=Object(i["a"])(le,ne,re,!1,null,null,null),pe=se.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"布局设置",fileName:"layout-settings.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、通过设置 "),n("code",[e._v("layout")]),e._v(" 属性，改变布局。"),n("br"),e._v("2、"),n("code",[e._v("layout")]),e._v(" 属性支持以下配置项："),n("br"),n("code",[e._v("total")]),e._v("：显示总条数、"),n("code",[e._v("prev")]),e._v("：显示上一页按钮、"),n("code",[e._v("pager")]),e._v("：显示页码按钮、"),n("code",[e._v("next")]),e._v("：显示下一页按钮、"),n("code",[e._v("sizer")]),e._v("：显示每页大小设置、"),n("code",[e._v("jumper")]),e._v("：显示跳转文本框")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <div>\n        <div>\n            <div class=\"mb20 bold\">不显示页码按钮</div>\n            <ve-pagination :total=\"600\" :layout=\"['total', 'prev', 'next', 'sizer', 'jumper']\" />\n        </div>\n        <div>\n            <div class=\"mt30 mb20 bold\">调整显示顺序</div>\n            <ve-pagination\n                :total=\"600\"\n                :layout=\"['total', 'sizer', 'prev', 'pager', 'next', 'jumper']\"\n            />\n        </div>\n\n        <div>\n            <div class=\"mt30 mb20 bold\">完整布局</div>\n            <ve-pagination\n                :total=\"600\"\n                :layout=\"['total', 'prev', 'pager', 'next', 'sizer', 'jumper']\"\n            />\n        </div>\n    </div>\n</template>\n")])])])],2)],1)},ve=[];function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("div",[n("div",{staticClass:"mb20 bold"},[e._v("不显示页码按钮")]),e._v(" "),n("ve-pagination",{attrs:{total:600,layout:["total","prev","next","sizer","jumper"]}})],1),e._v(" "),n("div",[n("div",{staticClass:"mt30 mb20 bold"},[e._v("调整显示顺序")]),e._v(" "),n("ve-pagination",{attrs:{total:600,layout:["total","sizer","prev","pager","next","jumper"]}})],1),e._v(" "),n("div",[n("div",{staticClass:"mt30 mb20 bold"},[e._v("完整布局")]),e._v(" "),n("ve-pagination",{attrs:{total:600,layout:["total","prev","pager","next","sizer","jumper"]}})],1)])]],2)},t=[],n={};return me({render:e,staticRenderFns:t},n)}()}},fe=be,_e=Object(i["a"])(fe,ue,ve,!1,null,null,null),Oe=_e.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"API",fileName:"api.md"}}),n("h3",[e._v("props")]),e._m(0),n("h3",[e._v("Event")]),e._m(1)],1)},je=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",[e._v("Property")]),n("th",[e._v("Description")]),n("th",[e._v("Type")]),n("th",[e._v("Optional value")]),n("th",[e._v("Default")])])]),n("tbody",[n("tr",[n("td",[e._v("layout")]),n("td",[e._v("Layout settings can be matched according to your own business scenarios")]),n("td",[n("code",[e._v("Array")])]),n("td",[e._v("['total', 'prev', 'pager', 'next', 'sizer', 'jumper']")]),n("td",[e._v("['total', 'prev', 'pager', 'next', 'sizer', 'jumper']")])]),n("tr",[n("td",[e._v("total")]),n("td",[e._v("Total Count")]),n("td",[n("code",[e._v("Number")])]),n("td",[e._v("-")]),n("td",[e._v("-")])]),n("tr",[n("td",[e._v("pageIndex")]),n("td",[e._v("Current page number")]),n("td",[n("code",[e._v("Number")])]),n("td",[e._v("-")]),n("td",[e._v("1")])]),n("tr",[n("td",[e._v("pagingCount")]),n("td",[e._v("The number of buttons in the middle of forward 5 pages and backward 5 pages")]),n("td",[n("code",[e._v("Number")])]),n("td",[e._v("-")]),n("td",[e._v("5")])]),n("tr",[n("td",[e._v("pageSize")]),n("td",[e._v("Page size")]),n("td",[n("code",[e._v("Number")])]),n("td",[e._v("-")]),n("td",[e._v("10")])]),n("tr",[n("td",[e._v("pageSizeOption")]),n("td",[e._v("Per page size drop-down configuration")]),n("td",[n("code",[e._v("Array")])]),n("td",[e._v("-")]),n("td",[e._v("[10, 20, 30]")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",[e._v("Event Name")]),n("th",[e._v("Description")]),n("th",[e._v("Parameters")])])]),n("tbody",[n("tr",[n("td",[e._v("on-page-number-change")]),n("td",[e._v("Page change callback event")]),n("td",[e._v("Current page number")])]),n("tr",[n("td",[e._v("on-page-size-change")]),n("td",[e._v("Page size dropdown change callback")]),n("td",[e._v("Current page size")])])])])}],ye={},Pe=Object(i["a"])(ye,he,je,!1,null,null,null),we=Pe.exports,Ee={components:{Usage:p,BaseUsage:O,PageIndex:C,PageSize:A,PagingButtons:H,PagingConfiguration:te,CallbackEvents:pe,LayoutSettings:Oe,Api:we}},xe=Ee,ze=Object(i["a"])(xe,r,a,!1,null,null,null);t["default"]=ze.exports}}]);
//# sourceMappingURL=chunk-2d21f28c.afbc90ee.js.map
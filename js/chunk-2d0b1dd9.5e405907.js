(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1dd9"],{2258:function(t,l,e){"use strict";e.r(l);var o=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[e("h2",[t._v("实例方法")]),e("Explain"),e("ScrollTo")],1)},n=[],i=function(){var t=this,l=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("section",{staticClass:"content example-md-doc"},[e("div",{staticClass:"tip"},[e("p",[t._v("1、表格")])])])}],r=e("2877"),a={},s=Object(r["a"])(a,i,c,!1,null,null,null),u=s.exports,d=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("section",{staticClass:"content example-md-doc"},[e("anchor",{attrs:{"is-edit":"",label:"scrollTo",fileName:"scroll-to.md"}}),e("demo-block",[e("div",[e("p",[t._v("1、Params refer to "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo"}},[t._v("scrollTo")])])]),e("template",{slot:"source"},[e("element-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <div style="margin-bottom:20px;line-height:3.0;">\n            <button class="button-demo" @click="scrollY(1000)">Scroll vertically to 1000px</button>\n            <button class="button-demo" @click="scrollY(500)">Scroll vertically to 500px</button>\n            <button class="button-demo" @click="scrollY(0)">Scroll vertically to 0px</button>\n            <button class="button-demo" @click="scrollX(500)">Scroll horizontally to 300px</button>\n            <button class="button-demo" @click="scrollX(300)">Scroll horizontally to 200px</button>\n            <button class="button-demo" @click="scrollX(0)">Scroll horizontally to 0px</button>\n        </div>\n        <ve-table\n            ref="tableRef"\n            style="width:1000px"\n            :scroll-width="1600"\n            :max-height="350"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            rowKeyFieldName="rowkey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 80; i++) {\n                    data.push({\n                        rowkey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                        col9: i,\n                        col10: i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // scroll y\n            scrollY(val) {\n                this.$refs["tableRef"].scrollTo({ top: val, behavior: "smooth" });\n            },\n            // scroll x\n            scrollX(val) {\n                this.$refs["tableRef"].scrollTo({ left: val, behavior: "smooth" });\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},f=[];function b(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?b(Object(e),!0).forEach((function(l){p(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function p(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}var h={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[[e("div",[e("div",{staticStyle:{"margin-bottom":"20px","line-height":"3.0"}},[e("button",{staticClass:"button-demo",on:{click:function(l){return t.scrollY(1e3)}}},[t._v("Scroll vertically to 1000px")]),t._v(" "),e("button",{staticClass:"button-demo",on:{click:function(l){return t.scrollY(500)}}},[t._v("Scroll vertically to 500px")]),t._v(" "),e("button",{staticClass:"button-demo",on:{click:function(l){return t.scrollY(0)}}},[t._v("Scroll vertically to 0px")]),t._v(" "),e("button",{staticClass:"button-demo",on:{click:function(l){return t.scrollX(500)}}},[t._v("Scroll horizontally to 300px")]),t._v(" "),e("button",{staticClass:"button-demo",on:{click:function(l){return t.scrollX(300)}}},[t._v("Scroll horizontally to 200px")]),t._v(" "),e("button",{staticClass:"button-demo",on:{click:function(l){return t.scrollX(0)}}},[t._v("Scroll horizontally to 0px")])]),t._v(" "),e("ve-table",{ref:"tableRef",staticStyle:{width:"1000px"},attrs:{"scroll-width":1600,"max-height":350,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowkey"}})],1)]],2)},l=[],e={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}]}},methods:{initTableData:function(){for(var t=[],l=0;l<80;l++)t.push({rowkey:l,col1:l,col2:l,col3:l,col4:l,col5:l,col6:l,col7:l,col8:l,col9:l,col10:l});this.tableData=t},scrollY:function(t){this.$refs["tableRef"].scrollTo({top:t,behavior:"smooth"})},scrollX:function(t){this.$refs["tableRef"].scrollTo({left:t,behavior:"smooth"})}},created:function(){this.initTableData()}};return m({render:t,staticRenderFns:l},e)}()}},v=h,y=Object(r["a"])(v,d,f,!1,null,null,null),k=y.exports,x={name:"basic-main",components:{Explain:u,ScrollTo:k}},T=x,_=Object(r["a"])(T,o,n,!1,null,null,null);l["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0b1dd9.5e405907.js.map
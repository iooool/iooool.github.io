(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27b49870"],{5653:function(e,t,a){"use strict";a("e713")},"920e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("vx-card",{staticClass:"mb-5"},[a("div",{staticClass:"flex justify-between"},[a("h3",{staticClass:"w-full"},[a("b",[e._v("나의 질문지")]),a("div",{staticClass:"flex items-center pt-4 justify-between"},[a("vs-input",{staticClass:"lg-6 sm-12",attrs:{placeholder:"질문지 제목을 입력하세요"},model:{value:e.document_title,callback:function(t){e.document_title=t},expression:"document_title"}}),a("vs-button",{staticClass:"nowrap ml-2",attrs:{size:"small"}},[e._v("질문 추가")])],1)])])]),a("vx-card",{staticClass:"mb-5"},[a("div",{staticClass:"flex flex-wrap justify-between w-full mb-3"},[a("div",{staticClass:"flex lg-8 sm-12 items-center m-mb-4"},[a("i",{staticClass:"handle feather icon-pack icon-menu mr-2"}),a("vs-input",{staticClass:"question inputx mr-3 w-1/2",attrs:{placeholder:"질문을 입력하세요"},model:{value:e.addList.name,callback:function(t){e.$set(e.addList,"name",t)},expression:"addList.name"}}),a("div",{staticClass:"flex items-center"},[a("vs-checkbox",{model:{value:e.addList.essential,callback:function(t){e.$set(e.addList,"essential",t)},expression:"addList.essential"}}),a("small",{staticClass:"nowrap"},[e._v("필수")])],1)],1),a("div",{staticClass:"flex items-center justify-end sm-12",attrs:{"vs-sm":"12"}},[a("v-select",{attrs:{searchable:!1,taggable:!0,readonly:"",options:e.option,clearable:!1},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),a("span",{staticClass:"px-5"},[a("i",{staticClass:"feather icon-pack icon-trash text-warning"})])],1)]),a("div",[a("vs-list",[a("draggable",{attrs:{list:e.addList.content,handle:".handle","drag-class":"dragging"}},[a("transition-group",{attrs:{type:"transition",name:"flip-list"}},e._l(e.addList.content,(function(t,s){return a("vs-list-item",{key:s,staticClass:"w-full list-item pt-3"},[1==e.selected.id?a("div",{staticClass:"flex"},[a("i",{staticClass:"handle feather icon-pack icon-more-vertical pr-3"}),a("vs-textarea",{staticClass:"w-full autosize",on:{keydown:e.resize,keyup:e.resize},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"aItem.value"}}),a("span",{staticClass:"pl-3"},[a("i",{staticClass:"feather icon-pack icon-trash text-warning"})])],1):e._e(),2==e.selected.id?a("div",{staticClass:"flex"},[a("i",{staticClass:"feather icon-pack icon-more-vertical handle pr-3"}),a("vs-radio",{attrs:{"vs-value":"radios1"},model:{value:t.radios,callback:function(a){e.$set(t,"radios",a)},expression:"aItem.radios"}}),a("vs-input",{staticClass:"inputx",attrs:{placeholder:"내용을 입력하세요"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"aItem.value"}}),a("span",{staticClass:"pl-3"},[a("i",{staticClass:"feather icon-pack icon-trash text-warning"})])],1):e._e(),3==e.selected.id?a("div",{staticClass:"flex"},[a("i",{staticClass:"handle feather icon-pack icon-more-vertical pr-3"}),a("vs-checkbox",{attrs:{"vs-value":"default"},model:{value:e.addList.value,callback:function(t){e.$set(e.addList,"value",t)},expression:"addList.value"}}),a("vs-input",{staticClass:"inputx",attrs:{placeholder:"내용을 입력하세요"},model:{value:e.addList.value,callback:function(t){e.$set(e.addList,"value",t)},expression:"addList.value"}}),a("span",{staticClass:"pl-3"},[a("i",{staticClass:"feather icon-pack icon-trash text-warning"})])],1):e._e(),4==e.selected.id?a("div",{staticClass:"flex"},[a("i",{staticClass:"handle feather icon-pack icon-more-vertical pr-3"}),e._v("\n                                        "+e._s(t.index+1)+"\n                                        "),a("vs-input",{staticClass:"inputx ml-3",attrs:{placeholder:"내용을 입력하세요"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"aItem.value"}}),a("span",{staticClass:"pl-3"},[a("i",{staticClass:"feather icon-pack icon-trash text-warning"})])],1):e._e(),5==e.selected.id?a("div",{staticClass:"flex"},[a("i",{staticClass:"handle feather icon-pack icon-more-vertical pr-3"}),a("vs-input",{staticClass:"inputx",attrs:{placeholder:"내용을 입력하세요"},model:{value:e.addList.value,callback:function(t){e.$set(e.addList,"value",t)},expression:"addList.value"}}),a("span",{staticClass:"pl-3"},[a("i",{staticClass:"feather icon-pack icon-trash text-warning"})])],1):e._e(),6==e.selected.id?a("div",{staticClass:"flex"},[a("i",{staticClass:"handle feather icon-pack icon-more-vertical pr-3"}),a("vs-upload",{attrs:{automatic:"",action:""},on:{"on-success":e.successUpload}}),a("span",{staticClass:"pl-3"},[a("i",{staticClass:"feather icon-pack icon-trash text-warning"})])],1):e._e()])})),1)],1)],1),a("vs-button",{attrs:{radius:"",color:"primary",type:"filled","icon-pack":"feather",icon:"icon-plus"},on:{click:e.addAnswer}})],1),a("div",{staticClass:"flex flex-wrap items-center justify-end pt-5"},[a("vs-button",{attrs:{color:"warning"},on:{click:e.resetAnswer}},[e._v("리셋")]),a("vs-button",{staticClass:"ml-2"},[e._v("등록")])],1)]),a("vx-card",{staticClass:"added_question"},[a("h3",{staticClass:"pb-3"},[e._v(e._s(e.document_title))]),a("vs-list",[a("draggable",{attrs:{list:e.list,handle:".handle"},on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}}},[a("transition-group",{attrs:{type:"transition",name:"flip-list"}},e._l(e.list,(function(t,s){return a("vs-list-item",{key:"Registered"+s,staticClass:"list-item py-3 relative"},[a("h5",{staticClass:"py-2"},[a("i",{staticClass:"handle feather icon-pack icon-menu mr-2"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"listItem.name"}],attrs:{type:"text",size:t.name.length,placeholder:"질문을 입력하세요"},domProps:{value:t.name},on:{input:function(a){a.target.composing||e.$set(t,"name",a.target.value)}}}),a("small",{staticClass:"ml-2 text-danger"},[e._v("*필수")])]),a("div",{staticClass:"flex justify-between items-center"},[1==t.type?a("div",{staticClass:"w-full flex flex-column"},e._l(t.content,(function(t,s){return a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],key:s,staticClass:"w-full",domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}})})),0):e._e(),2==t.type?a("div",{staticClass:"flex flex-column w-full"},e._l(t.content,(function(t,s){return a("div",{key:s,staticClass:"flex"},[a("vs-radio",{attrs:{"vs-value":"default"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"item.label"}],staticClass:"text",domProps:{value:t.label},on:{input:function(a){a.target.composing||e.$set(t,"label",a.target.value)}}})],1)})),0):e._e(),3==t.type?a("div",{staticClass:"flex flex-column w-full"},e._l(t.content,(function(t,s){return a("div",{key:s,staticClass:"flex"},[a("vs-checkbox",{model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"item.label"}],staticClass:"text",domProps:{value:t.label},on:{input:function(a){a.target.composing||e.$set(t,"label",a.target.value)}}})],1)})),0):e._e(),4==t.type?a("div",{staticClass:"flex flex-column w-full"},e._l(t.content,(function(t,s){return a("div",{key:s,staticClass:"flex items-center"},[e._v("\n                                            "+e._s(s+1)+"\n                                            "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"item.label"}],staticClass:"text",domProps:{value:t.label},on:{input:function(a){a.target.composing||e.$set(t,"label",a.target.value)}}})])})),0):e._e(),5==t.type?a("div",{staticClass:"w-full flex flex-column"},e._l(t.content,(function(t,s){return a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],key:s,staticClass:"w-full",domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}})})),0):e._e(),6==t.type?a("a",{staticClass:"text-primary",attrs:{download:"",href:"listItem.content"}},[e._v("첨부파일 다운로드")]):e._e()]),a("i",{staticClass:"absolute delete_list icon-pack feather icon-x",on:{click:e.delAnswer}})])})),1)],1)],1)],1),a("div",{staticClass:"flex flex-end py-3"},[a("vs-button",{on:{click:function(t){return e.$router.push("/setting/document")}}},[e._v("목록으로")])],1)],1)])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mb-6"},[a("div",{staticClass:"router-header flex flex-wrap items-center"},[a("div",{staticClass:"content-area__heading pr-4 border-0 md:border-r border-solid border-grey-light"},[a("h2",{staticClass:"mb-1"},[e._v("설정")])]),a("div",{staticClass:"vx-breadcrumb ml-4 md:block hidden"},[a("ul",{staticClass:"flex flex-wrap items-center"},[a("li",{staticClass:"inline-flex items-center"},[a("span",{staticClass:"text-primary cursor-default"},[e._v("서류 관리")])])])])])])])}],i=a("b76a"),n=a.n(i),c=a("4a7a"),o=a.n(c),r={data:function(){return{addEvent:!1,drag:!1,document_title:"",selected:{id:1,label:"텍스트 답변"},option:[{id:1,label:"텍스트 답변"},{id:2,label:"라디오 버튼"},{id:3,label:"체크박스"},{id:4,label:"드롭다운"},{id:5,label:"검색"},{id:6,label:"첨부파일 업로드"}],addList:{title:"질문지 제목",name:"",content:[{index:0,value:"",radios:!1,check:!1},{index:1,value:"",radios:!1,check:!1}],value:"",essential:!1},list:[{type:1,name:"질문1",content:[{value:"답변 내용 1"},{value:"답변 내용 2"}],essential:!1},{type:2,name:"질문지1",content:[{value:!1,label:"라디오타입 1"},{value:!1,label:"라디오타입 1"},{value:!1,label:"라디오타입 1"}],essential:!1},{type:3,name:"질문",content:[{value:!1,label:"체크박스타입 1"},{value:!1,label:"체크박스타입 1"},{value:!1,label:"체크박스타입 1"}],essential:!1},{type:4,name:"드롭다운",content:[{value:!1,label:"드롭다운 index"},{value:!1,label:"드롭다운 index"},{value:!1,label:"드롭다운 index"}],essential:!1},{type:5,name:"질문1",content:[{value:"답변 내용 1"},{value:"답변 내용 2"}],essential:!1},{type:6,name:"질문",content:"답변 내용",essential:!1}]}},components:{draggable:n.a,"v-select":o.a},methods:{resize:function(e){e.target.style.height="1px",e.target.style.height=12+e.target.scrollHeight+"px"},successUpload:function(){this.$vs.notify({color:"success",title:"Upload Success",text:"Lorem ipsum dolor sit amet, consectetur"})},addAnswer:function(){var e=this.addList.content.length;this.addList.content.push({index:e,value:"",radios:!1,check:!1})},delAnswer:function(){},resetAnswer:function(){this.addList.content=[{index:0,value:"",radios:!1,check:!1}]}}},d=r,u=(a("5653"),a("2877")),v=Object(u["a"])(d,s,l,!1,null,null,null);t["default"]=v.exports},e713:function(e,t,a){}}]);
//# sourceMappingURL=chunk-27b49870.70547ce5.js.map
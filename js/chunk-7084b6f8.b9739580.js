(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7084b6f8"],{"3ef9":function(t,e,a){t.exports=a.p+"img/logo1.9fa9e0a5.png"},"553f":function(t,e,a){"use strict";a("e6af")},c78a:function(t,e,a){"use strict";a("cf06")},cf06:function(t,e,a){},e30a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sendDc"},[s("div",{staticClass:"vx-row"},[t._m(0),s("div",{staticClass:"vx-col w-full"},[s("vx-card",{staticClass:"relative"},[s("vs-tabs",{attrs:{grow:""},model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},[s("vs-tab",{staticClass:"pt-6",attrs:{label:"Check Info"}},[s("vs-alert",{staticClass:"mb-3",attrs:{active:"true"}},[t._v("\n\t\t\t\t\t\t\tinfo area\n\t\t\t\t\t\t\t")]),s("vs-alert",{staticClass:"mb-4",attrs:{color:"dark",title:"Title Here",active:"true"}},[t._v("\n\t\t\t\t\t\t\ttitle info area\n\t\t\t\t\t\t\t")]),s("div",{staticClass:"flex align-items-center mb-3"},[s("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-user"}}),t._v(t._s(t.user_name)+"에게 보내는 서류\n\t\t\t\t\t\t\t")],1),s("div",{staticClass:"px-5 mb-6"},[s("h3",{staticClass:"mb-3"},[t._v("Consent Documents")]),s("ul",[s("li",{staticClass:"mb-2"},[s("vs-checkbox",{model:{value:t.checkbox1,callback:function(e){t.checkbox1=e},expression:"checkbox1"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tcheckbox1\n\t\t\t\t\t\t\t\t\t\t")])],1),s("li",{staticClass:"mb-2"},[s("vs-checkbox",{model:{value:t.checkbox2,callback:function(e){t.checkbox2=e},expression:"checkbox2"}},[t._v("checkbox2")])],1),s("li",{staticClass:"mb-2"},[s("vs-checkbox",{model:{value:t.checkbox3,callback:function(e){t.checkbox3=e},expression:"checkbox3"}},[t._v("checkbox3")])],1),s("li",{staticClass:"mb-2"},[s("vs-checkbox",{model:{value:t.checkbox4,callback:function(e){t.checkbox4=e},expression:"checkbox4"}},[t._v("checkbox4")])],1)])]),s("div",{staticClass:"px-5 mb-3"},[s("h3",{staticClass:"mb-3"},[t._v("Questionnaires")]),s("ul",[s("li",{staticClass:"mb-2"},[s("vs-checkbox",{model:{value:t.checkbox5,callback:function(e){t.checkbox5=e},expression:"checkbox5"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tcheckbox1\n\t\t\t\t\t\t\t\t\t\t")])],1),s("li",{staticClass:"mb-2"},[s("vs-checkbox",{model:{value:t.checkbox6,callback:function(e){t.checkbox6=e},expression:"checkbox6"}},[t._v("checkbox2")])],1),s("li",{staticClass:"mb-2"},[s("vs-checkbox",{model:{value:t.checkbox7,callback:function(e){t.checkbox7=e},expression:"checkbox7"}},[t._v("checkbox3")])],1),s("li",{staticClass:"mb-2"},[s("vs-checkbox",{model:{value:t.checkbox8,callback:function(e){t.checkbox8=e},expression:"checkbox8"}},[t._v("checkbox4")])],1)])]),s("div",{staticClass:"flex justify-content-between py-4 button_wraps"},[s("vs-button",{attrs:{color:"grey",type:"filled"}},[t._v("cancel")]),s("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(e){t.active_tab=1}}},[t._v("Continue to Email")])],1)],1),s("vs-tab",{attrs:{label:"Compose Email"}},[s("vs-tabs",{attrs:{color:"success",alignment:"left"}},[s("vs-tab",{attrs:{label:"이메일로 전송",icon:"mail"}},[s("div",{staticClass:"mailform"},[s("img",{attrs:{src:a("3ef9"),alt:"",width:"100"}}),s("vs-textarea",{staticClass:"center bg-white custom_textarea my-5 p-3 autosize",on:{keydown:t.resize,keyup:t.resize},model:{value:t.emailArea,callback:function(e){t.emailArea=e},expression:"emailArea"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.emailInput,expression:"emailInput"}],staticClass:"custom_input center",attrs:{type:"text"},domProps:{value:t.emailInput},on:{input:function(e){e.target.composing||(t.emailInput=e.target.value)}}}),s("div",{staticClass:"disabled py-3"},[s("a",{staticClass:"center",attrs:{href:"#"}},[t._v("https://www.youtube.com/watch?v=hbPUW8AewC0&list=LL&index=24&ab_channel=%EC%9D%B4%ED%94%BC%EB%A6%ACL%D2%BD%CE%B1PIRI")])]),s("div",{staticClass:"footer text-center pt-6 px-3"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tⓒ2021 EPI Co, Ltd All rights reserved."),s("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t\t본 메일은 회원님의 이메일 수신 동의 여부를 확인 후 발송되었습니다.\n\t\t\t\t\t\t\t\t\t\t")])],1)]),s("vs-tab",{attrs:{label:"문자로 전송",icon:"message"}},[s("div",{staticClass:"phoneframe mt-6 bg-grey"},[s("img",{attrs:{src:a("3ef9"),alt:"",width:"100"}}),s("textarea",{staticClass:"center bg-white custom_textarea my-5 p-3 pt-6",domProps:{value:t.textarea}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.emailInput,expression:"emailInput"}],staticClass:"bg-white custom_input center p-3",attrs:{type:"text"},domProps:{value:t.emailInput},on:{input:function(e){e.target.composing||(t.emailInput=e.target.value)}}}),s("div",{staticClass:"disabled py-3"},[s("a",{staticClass:"center",attrs:{href:"#"}},[t._v("https://www.youtube.com/watch?v=hbPUW8AewC0&list=LL&index=24&ab_channel=%EC%9D%B4%ED%94%BC%EB%A6%ACL%D2%BD%CE%B1PIRI")])])])])],1),s("div",{staticClass:"flex justify-content-between py-4 button_wraps"},[s("vs-button",{attrs:{color:"grey",type:"filled"}},[t._v("돌아가기")]),s("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(e){t.active_tab=2}}},[t._v("Continue to Review")])],1)],1),s("vs-tab",{attrs:{label:"Review & Send"}},[s("vs-alert",{staticClass:"mb-3",attrs:{active:"true"}},[t._v("\n\t\t\t\t\t\t\tinfo area\n\t\t\t\t\t\t\t")]),s("vs-alert",{staticClass:"mb-4",attrs:{color:"dark",title:"Title Here",active:"true"}},[t._v("\n\t\t\t\t\t\t\ttitle info area\n\t\t\t\t\t\t\t")]),s("div",{staticClass:"mb-3"},[s("div",{staticClass:"flex align-items-center pb-3"},[s("vs-avatar",{staticClass:"mr-2",attrs:{"icon-pack":"feather",icon:"icon-user"}}),t._v("Sharing "+t._s(t.list?t.list.length:0)+" items with vale\n\t\t\t\t\t\t\t\t")],1),s("ul",{staticClass:"flex px-4"},t._l(t.list,(function(e,a){return s("li",{key:a},[s("i",{staticClass:"text-success feather icon-check"}),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.title))])})),0)]),s("div",{staticClass:"flex justify-content-between py-4 button_wraps"},[s("vs-button",{attrs:{color:"grey",type:"filled"}},[t._v("Back to Email")]),s("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(e){return t.$router.push("/send-success")}}},[t._v("Share & Send Now")])],1)],1)],1)],1)],1)])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vx-col w-full mb-6"},[a("div",{staticClass:"router-header flex flex-wrap items-center"},[a("div",{staticClass:"content-area__heading pr-4 border-0"},[a("h2",{staticClass:"mb-1"},[t._v("서류보내기")])])])])}],i={data:function(){return{active_tab:0,checkbox1:!0,checkbox2:!1,checkbox3:!1,checkbox4:!1,checkbox5:!1,checkbox6:!1,checkbox7:!1,checkbox8:!1,user_name:"김가명",textarea:"",list:[{title:"서류1"}],emailArea:"원활한 상담 진행을 위하여 방문 전 서류를 확인해 주세요",emailInput:"아래 링크를 누르면 고객 포털로 이동이 가능합니다"}},methods:{resize:function(t){t.target.style.height="1px",t.target.style.height=12+t.target.scrollHeight+"px"}}},l=i,o=(a("553f"),a("c78a"),a("2877")),n=Object(o["a"])(l,s,c,!1,null,"70366605",null);e["default"]=n.exports},e6af:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7084b6f8.b9739580.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5752"],{9522:function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[s._m(0),t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full"},[t("vx-card",[t("vs-tabs",{key:s.isSmallerScreen,staticClass:"tabs-shadow-none",attrs:{position:s.isSmallerScreen?"top":"left",id:"profile-tabs"}},[t("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-user",label:s.isSmallerScreen?"":"General"}},[t("div",{staticClass:"tab-general md:ml-4 md:mt-0 mt-4 ml-0"},[t("div",{staticClass:"flex flex-wrap items-center mb-base"},[t("vs-avatar",{staticClass:"mr-4 mb-4",attrs:{src:s.photoURL,size:"70px"}}),t("div",[t("vs-button",{staticClass:"mr-4 sm:mb-0 mb-2"},[s._v("Upload photo")]),t("vs-button",{attrs:{type:"border",color:"danger"}},[s._v("Remove")]),t("p",{staticClass:"text-sm mt-2"},[s._v("Allowed JPG, GIF or PNG. Max size of 800kB")])],1)],1),t("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Name"},model:{value:s.name,callback:function(a){s.name=a},expression:"name"}}),t("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Email"},model:{value:s.email,callback:function(a){s.email=a},expression:"email"}}),t("vs-alert",{staticClass:"h-full my-4",attrs:{"icon-pack":"feather",icon:"icon-info",color:"warning"}},[t("span",[s._v("Your account is not verified. "),t("a",{staticClass:"hover:underline",attrs:{href:"#"}},[s._v("Resend Confirmation")])])]),t("div",{staticClass:"flex flex-wrap items-center justify-end"},[t("vs-button",{staticClass:"ml-auto mt-2"},[s._v("Save Changes")])],1),t("vs-divider"),t("div",[t("h5",{staticClass:"my-2 px-3"},[s._v("요금제")]),t("vs-row",{staticClass:"py-3",attrs:{type:"flex",w:"12"}},[t("vs-col",{attrs:{"vs-lg":"1"}},[t("span",{staticClass:"badge mx-0 my-2"},[s._v(s._s(s.plan)+" 플랜")])]),t("vs-col",{staticClass:"flex flex-column pl-0",attrs:{"vs-lg":"11","vs-sm":"12"}},[t("div",{staticClass:"my-2 flex justify-between"},[t("span",{staticClass:"mr-2"},[t("b",[s._v(s._s(s.plan_price)+" ")]),s._v("원")]),t("router-link",{attrs:{to:"/setting/change_plan"}},[s._v("요금제 바꾸기")])],1),t("small",[s._v("플랜 기능 설명"),t("br"),s._v("\n                                        플랜 기능 설명"),t("br"),s._v("\n                                        플랜 기능 설명")])])],1)],1),t("div",{staticClass:"flex flex-wrap items-center justify-end"},[t("router-link",{staticClass:"ml-auto mt-2 text-danger",attrs:{to:"/setting/myinfo/remove"}},[s._v("\n                                계정 삭제\n                            ")])],1)],1)]),t("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-lock",label:s.isSmallerScreen?"":"Password"}},[t("div",{staticClass:"tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0"},[t("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Old Password"},model:{value:s.old_password,callback:function(a){s.old_password=a},expression:"old_password"}}),t("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"New Password"},model:{value:s.new_password,callback:function(a){s.new_password=a},expression:"new_password"}}),t("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Confirm Password"},model:{value:s.confirm_new_password,callback:function(a){s.confirm_new_password=a},expression:"confirm_new_password"}}),t("div",{staticClass:"flex flex-wrap items-center justify-end"},[t("vs-button",{staticClass:"ml-auto mt-2"},[s._v("Save Changes")])],1)],1)])],1)],1)],1)])])},l=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full mb-6"},[t("div",{staticClass:"router-header flex flex-wrap items-center"},[t("div",{staticClass:"content-area__heading pr-4 border-0 md:border-r border-solid border-grey-light"},[t("h2",{staticClass:"mb-1"},[s._v("설정")])]),t("div",{staticClass:"vx-breadcrumb ml-4 md:block hidden"},[t("ul",{staticClass:"flex flex-wrap items-center"},[t("li",{staticClass:"inline-flex items-center"},[t("span",{staticClass:"text-primary cursor-default"},[s._v("내 정보")])])])])])])])}],r={data:function(){return{name:"관리자1",email:"admin@co.kr",plan:"gold",plan_price:3e5,photoURL:"",old_password:"",new_password:"",confirm_new_password:""}},computed:{isSmallerScreen:function(){return this.$store.state.windowWidth<768}}},i=r,n=t("2877"),o=Object(n["a"])(i,e,l,!1,null,"53dea219",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0e5752.8b0ca15a.js.map
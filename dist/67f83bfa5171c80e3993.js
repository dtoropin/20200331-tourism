(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{356:function(t,e,n){},379:function(t,e,n){"use strict";var r=n(356);n.n(r).a},422:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper__content"},[t.isLogin?n("a",{staticClass:"logout",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("logout")]):t._e(),n("List"),t.isEditedStat?n("EditStatistic",{attrs:{stat:t.edit}}):t._e(),t.isEditedComm?n("EditComment",{attrs:{comment:t.edit}}):t._e(),t.isEditedMarker?n("EditMarker",{attrs:{marker:t.edit}}):t._e()],1)};r._withStripped=!0;var i=n(64),o=n(65),s=n.n(o);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={computed:u({},Object(i.c)("base",{isLogin:function(t){return t.isLogin},isEditedStat:function(t){return t.isEditedStat},isEditedComm:function(t){return t.isEditedComm},isEditedMarker:function(t){return t.isEditedMarker},edit:function(t){return t.edit}})),methods:u({},Object(i.b)("base",["setIsLogin"]),{logout:function(){confirm("Вы хотите выйти?")&&(this.setIsLogin(!1),localStorage.removeItem("token"),this.$router.push("/login"))}}),components:{List:function(){return n.e(4).then(n.bind(null,421))},EditStatistic:function(){return n.e(10).then(n.bind(null,430))},EditComment:function(){return n.e(8).then(n.bind(null,428))},EditMarker:function(){return n.e(9).then(n.bind(null,427))}},mounted:function(){var t=localStorage.getItem("token");t&&(this.setIsLogin(!0),s.a.defaults.headers.common.Authorization=t)}},l=(n(379),n(95)),f=Object(l.a)(d,r,[],!1,null,"477a3944",null);f.options.__file="src/components/pages/Admin.vue";e.default=f.exports}}]);
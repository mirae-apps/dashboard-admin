(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{590:function(t,e,n){"use strict";n.r(e);n(42),n(25),n(164);var r=n(3),c=n(52),o=(n(115),n(28),Object(r.a)(Object(r.a)({layout:"admin/main",head:function(){return{title:"Menus - Admin RA Nurul Hidayah"}},data:function(){return{search:""}},watchQuery:["q","page"],asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.query,c=r.page?parseInt(r.page):"",o=r.q?r.q:"",e.next=5,n.get("api/admin/tags?q=".concat(o,"&page=").concat(c));case 5:return l=e.sent,e.abrupt("return",{tags:l.data.data.data,pagination:l.data.data});case 7:case"end":return e.stop()}}),e)})))()},methods:{changePage:function(t){this.$router.push({path:this.$route.path,query:{q:this.$route.query.q,page:t}})},searchData:function(){this.$router.push({path:this.$route.path,query:{q:this.search}})},deletePost:function(t){var e=this;this.$swal.fire({title:"Apakah Anda Yakin ?",text:"Ingin Menghapus Data Ini !",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"YA, HAPUS!",cancelButtonText:"TIDAK"}).then((function(n){n.isConfirmed&&e.$axios.delete("/api/admin/tags/".concat(t)).then((function(){e.$nuxt.refresh(),e.$swal.fire({title:"BERHASIL!",text:"Data Berhasil Dihapus!",icon:"success",showConfirmButton:!1,timer:2e3})}))}))}}},"head",(function(){return{title:"Tags - Admin RA Nurul Hidayah",script:[{src:"/admin/js/dashboard.js",body:!0},{src:"/admin/js/Chart.roundedBarCharts.js",body:!0}],link:[{rel:"stylesheet",href:"/admin/vendors/datatables.net-bs4/dataTables.bootstrap4.css"},{rel:"stylesheet",href:"/admin/vendors/ti-icons/css/themify-icons.css"},{rel:"stylesheet",type:"text/css",href:"/admin/js/select.dataTables.min.css"}]}})),"components",{})),l=n(54),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title pb-4"},[t._v("Tags")]),t._v(" "),e("div",{staticClass:"row bg-white"},[e("div",{staticClass:"col-md-6"},[e("NuxtLink",{staticClass:"btn btn-success btn-icon-text mb-3",attrs:{to:{name:"admin-tag-create"}}},[e("i",{staticClass:"mdi mdi-plus"}),t._v(" "),e("span",{staticClass:"menu-title"},[t._v("Tambah Data")])])],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search data"},domProps:{value:t.search},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchData.apply(null,arguments)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-sm btn-success",attrs:{type:"button"},on:{click:t.searchData}},[e("i",{staticClass:"icon icon-search"})])])])])])]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover table-bordered"},[t._m(0),t._v(" "),e("tbody",t._l(t.tags,(function(n,r){return e("tr",{key:r},[e("td",{staticClass:"text-center"},[t._v(t._s(r+1))]),t._v(" "),e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",{staticClass:"text-center"},[e("NuxtLink",{staticClass:"btn btn-sm btn-warning btn-icon-text",attrs:{to:{name:"admin-tag-edit-id",params:{id:n.id}}}},[e("i",{staticClass:"mdi mdi-lead-pencil"}),t._v("\n                  Edit\n                ")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-danger btn-icon-text",attrs:{type:"button"},on:{click:function(e){return t.deletePost(n.id)}}},[e("i",{staticClass:"mdi mdi-delete"}),t._v("\n                  Delete\n                ")])],1)])})),0)])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-end"},[e("vs-pagination",{attrs:{"current-page":t.pagination.current_page,"total-pages":t.pagination.last_page},on:{change:t.changePage}})],1)])])])}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",{staticClass:"text-center"},[e("th",[t._v("No")]),t._v(" "),e("th",[t._v("Nama Tag")]),t._v(" "),e("th",[t._v("Action")])])])}],!1,null,null,null);e.default=component.exports}}]);
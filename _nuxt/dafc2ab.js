(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{596:function(t,e,n){"use strict";n.r(e);var o=n(52),r=(n(115),{layout:"admin/main",head:function(){return{title:"Tambah Agenda Kegiatan - Admin RA Nurul Hidayah",script:[{src:"/admin/vendors/typeahead.js/typeahead.bundle.min.js",body:!0},{src:"/admin/vendors/select2/select2.min.js",body:!0},{src:"/admin/js/file-upload.js",body:!0},{src:"/admin/js/typeahead.js",body:!0},{src:"/admin/js/select2.js",body:!0}],link:[{rel:"stylesheet",href:"/admin/vendors/select2/select2.min.css"},{rel:"stylesheet",href:"/admin/vendors/select2-bootstrap-theme/select2-bootstrap.min.css"}]}},components:{},data:function(){return{agenda:{title:"",content:"",location:"",date:""},validation:[]}},mounted:function(){},methods:{storeAgenda:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("title",t.agenda.title),n.append("content",t.agenda.content),n.append("location",t.agenda.location),n.append("date",t.agenda.date),e.next=7,t.$axios.post("/api/admin/agendas",n).then((function(){t.$swal.fire({title:"BERHASIL!",text:"Data Berhasil Disimpan!",icon:"success",showConfirmButton:!1,timer:2e3}),t.$router.push({name:"admin-agenda"})})).catch((function(e){t.validation=e.response.data}));case 7:case"end":return e.stop()}}),e)})))()}}}),l=n(54),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("Tambah Data Agenda Kegiatan")]),t._v(" "),e("form",{staticClass:"forms-sample",on:{submit:function(e){return e.preventDefault(),t.storeAgenda.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputName1"}},[t._v("Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.agenda.title,expression:"agenda.title"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName1",placeholder:"Masukan Judul Agenda"},domProps:{value:t.agenda.title},on:{input:function(e){e.target.composing||t.$set(t.agenda,"title",e.target.value)}}}),t._v(" "),t.validation.title?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.title[0])+" ")])],1):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleTextarea1"}},[t._v("Detail Isi Kegiatan")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.agenda.content,expression:"agenda.content"}],staticClass:"form-control",attrs:{placeholder:"Masukan Detail Mengenai Isi Kegiatan",rows:"4"},domProps:{value:t.agenda.content},on:{input:function(e){e.target.composing||t.$set(t.agenda,"content",e.target.value)}}}),t._v(" "),t.validation.content?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.content[0])+" ")])],1):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputName1"}},[t._v("Tanggal")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.agenda.date,expression:"agenda.date"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName1",placeholder:"yyyy-mm-dd"},domProps:{value:t.agenda.date},on:{input:function(e){e.target.composing||t.$set(t.agenda,"date",e.target.value)}}}),t._v(" "),t.validation.date?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.date[0])+" ")])],1):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputName1"}},[t._v("Lokasi")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.agenda.location,expression:"agenda.location"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName1",placeholder:"Masukan Lokasi Agenda Kegiatan"},domProps:{value:t.agenda.location},on:{input:function(e){e.target.composing||t.$set(t.agenda,"location",e.target.value)}}}),t._v(" "),t.validation.location?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.location[0])+" ")])],1):t._e()]),t._v(" "),e("button",{staticClass:"btn btn-success mr-2",attrs:{type:"submit"}},[t._v("Tambah")]),t._v(" "),e("NuxtLink",{staticClass:"btn btn-light",attrs:{to:{name:"admin-agenda"}}},[t._v("\n          Cancel\n        ")])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);
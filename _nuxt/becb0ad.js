(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{518:function(t,e,o){var content=o(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("1ec72481",content,!0,{sourceMap:!1})},551:function(t,e,o){"use strict";o(518)},552:function(t,e,o){var n=o(71)((function(i){return i[1]}));n.push([t.i,".ck-editor__editable{min-height:400px}",""]),n.locals={},t.exports=n},597:function(t,e,o){"use strict";o.r(e);o(4),o(63);var n=o(34),r=(o(90),o(1),o(11),o(48),o(183),o(3),o(51),{layout:"admin/main",head:function(){return{title:"Edit Post - Admin RA Nurul Hidayah",script:[{src:"/admin/vendors/typeahead.js/typeahead.bundle.min.js",body:!0},{src:"/admin/vendors/select2/select2.min.js",body:!0},{src:"/admin/js/file-upload.js",body:!0},{src:"/admin/js/typeahead.js",body:!0},{src:"/admin/js/select2.js",body:!0}],link:[{rel:"stylesheet",href:"/admin/vendors/select2/select2.min.css"},{rel:"stylesheet",href:"/admin/vendors/select2-bootstrap-theme/select2-bootstrap.min.css"}]}},components:{"ckeditor-nuxt":function(){return o.e(0).then(o.t.bind(null,556,7))}},data:function(){return{post:{image:"",title:"",category_id:"",content:"",description:"",tags:[]},categories:[],tags:[],validation:[],editorConfig:{removePlugins:["Title"],simpleUpload:{uploadUrl:"http://localhost:8000/api/web/posts/storeImage"}}}},mounted:function(){var t=this;this.$axios.get("/api/admin/posts/".concat(this.$route.params.id)).then((function(e){t.post.title=e.data.data.title,t.post.category_id=e.data.data.category,t.post.content=e.data.data.content,t.post.tags=e.data.data.tags,t.post.description=e.data.data.description})),this.$axios.get("/api/admin/categories").then((function(e){t.categories=e.data.data.data})),this.$axios.get("/api/admin/tags").then((function(e){t.tags=e.data.data.data}))},methods:{handleFileChange:function(t){(this.post.image=t.target.files[0]).type.match("image.*")||(t.target.value="",this.post.image=null,this.$swal.fire({title:"OOPS!",text:"Format File Tidak Didukung!",icon:"error",showConfirmButton:!1,timer:2e3}))},updatePost:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=t.post.tags,n=[],o.forEach((function(t){n.push(t.id)})),(r=new FormData).append("image",t.post.image),r.append("title",t.post.title),r.append("category_id",t.post.category_id?t.post.category_id.id:""),r.append("content",t.post.content),r.append("description",t.post.description),r.append("_method","PATCH"),i=0;i<n.length;i++)r.append("tags[]",n[i]);return e.next=13,t.$axios.post("/api/admin/posts/".concat(t.$route.params.id),r).then((function(){t.$swal.fire({title:"BERHASIL!",text:"Data Berhasil Diupdate!",icon:"success",showConfirmButton:!1,timer:2e3}),t.$router.push({name:"admin-post"})})).catch((function(e){t.validation=e.response.data}));case 13:case"end":return e.stop()}}),e)})))()}}}),l=(o(551),o(36)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("Edit Data Post")]),t._v(" "),e("form",{staticClass:"forms-sample",on:{submit:function(e){return e.preventDefault(),t.updatePost.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Gambar Post")]),t._v(" "),e("div",{staticClass:"input-group col-xs-12"},[e("input",{staticClass:"form-control file-upload-info",attrs:{type:"file",placeholder:"Upload Image"},on:{change:t.handleFileChange}}),t._v(" "),t._m(0)]),t._v(" "),t.validation.image?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.image[0])+" ")])],1):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputName1"}},[t._v("Judul Post")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName1",placeholder:"Masukan Judul Post"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}}),t._v(" "),t.validation.title?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.title[0])+" ")])],1):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail3"}},[t._v("Kategori")]),t._v(" "),e("multiselect",{attrs:{options:t.categories,label:"name","track-by":"id",searchable:!0},model:{value:t.post.category_id,callback:function(e){t.$set(t.post,"category_id",e)},expression:"post.category_id"}}),t._v(" "),t.validation.category_id?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.category_id[0])+" ")])],1):t._e()],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail3"}},[t._v("Konten Post")]),t._v(" "),e("client-only",{attrs:{placeholder:"loading..."}},[e("ckeditor-nuxt",{attrs:{config:t.editorConfig},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1),t._v(" "),t.validation.content?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.content[0])+" ")])],1):t._e()],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail3"}},[t._v("Tags")]),t._v(" "),e("multiselect",{attrs:{options:t.tags,label:"name","track-by":"id",multiple:!0,searchable:!0},model:{value:t.post.tags,callback:function(e){t.$set(t.post,"tags",e)},expression:"post.tags"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleTextarea1"}},[t._v("Deskripsi")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.description,expression:"post.description"}],staticClass:"form-control",attrs:{placeholder:"Masukan Deskripsi Singkat",rows:"4"},domProps:{value:t.post.description},on:{input:function(e){e.target.composing||t.$set(t.post,"description",e.target.value)}}}),t._v(" "),t.validation.description?e("div",{staticClass:"mt-3"},[e("vs-alert",{attrs:{variant:"error"}},[t._v(" "+t._s(t.validation.description[0])+" ")])],1):t._e()]),t._v(" "),e("button",{staticClass:"btn btn-success mr-2",attrs:{type:"submit"}},[t._v("Edit")]),t._v(" "),e("NuxtLink",{staticClass:"btn btn-light",attrs:{to:{name:"admin-post"}}},[t._v("\n          Cancel\n        ")])],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"input-group-append"},[t("span",{staticClass:"file-upload-browse btn bg-success text-white"},[this._v("Image")])])}],!1,null,null,null);e.default=component.exports}}]);
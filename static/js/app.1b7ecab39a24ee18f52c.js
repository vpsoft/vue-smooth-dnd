webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=a("woOf"),r=a.n(i),o=a("Xori"),s=a.n(o);s.a.dropHandler=o.dropHandlers.reactDropHandler().handler;var l=function(t){var e=r()({},t.$props,t.$listeners),a={};return e.behaviour&&(a.behaviour=e.behaviour),e.groupName&&(a.groupName=e.groupName),e.orientation&&(a.orientation=e.orientation),e.dragHandleSelector&&(a.dragHandleSelector=e.dragHandleSelector),e.nonDragAreaSelector&&(a.nonDragAreaSelector=e.nonDragAreaSelector),void 0!==e.dragBeginDelay&&(a.dragBeginDelay=e.dragBeginDelay),void 0!==e.animationDuration&&(a.animationDuration=e.animationDuration),void 0!==e.autoScrollEnabled&&(a.autoScrollEnabled=e.autoScrollEnabled),e.lockAxis&&(a.lockAxis=e.lockAxis),e.dragClass&&(a.dragClass=e.dragClass),e.dropClass&&(a.dropClass=e.dropClass),e["drag-start"]&&(a.onDragStart=function(e,a){t.$emit("drag-start",{index:e,payload:a})}),e.drop&&(a.onDrop=function(e){console.log(e),t.$emit("drop",e)}),e.getChildPayload&&(a.getChildPayload=e.getChildPayload),e.shouldAnimateDrop&&(a.shouldAnimateDrop=e.shouldAnimateDrop),e.shouldAcceptDrop&&(a.shouldAcceptDrop=e.shouldAcceptDrop),e["drag-enter"]&&(a.onDragEnter=function(){t.$emit("drag-enter")}),e["drag-leave"]&&(a.onDragLeave=function(){t.$emit("drag-leave")}),a},d={name:"Container",mounted:function(){this.containerElement=this.$refs.container,this.container=s()(this.containerElement,l(this))},updated:function(){this.$refs.container!==this.containerElement&&(this.container&&this.container.dispose(),this.containerElement=this.$refs.container,this.container=s()(this.containerElement,l(this)))},destroyed:function(){this.container&&this.container.dispose()},props:{behaviour:String,groupName:String,orientation:String,dragHandleSelector:String,nonDragAreaSelector:String,dragBeginDelay:Number,animationDuration:Number,autoScrollEnabled:{type:Boolean,default:!0},lockAxis:String,dragClass:String,dropClass:String,"drag-start":Function,drop:Function,getChildPayload:Function,shouldAnimateDrop:Function,shouldAcceptDrop:Function,"drag-enter":Function,"drag-leave":Function}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"container"},[this._t("default")],2)},staticRenderFns:[]},u=a("VU/8")(d,c,!1,null,null,null).exports,g={name:"Draggable",data:function(){return{draggableClasses:""+o.constants.wrapperClass}}},p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.draggableClasses},[this._t("default")],2)},staticRenderFns:[]},m=a("VU/8")(g,p,!1,null,null,null).exports,v=a("Gu7T"),f=a.n(v),h=function(t,e){var a=e.removedIndex,n=e.addedIndex,i=e.payload;if(null===a&&null===n)return t;var r=[].concat(f()(t)),o=i;return null!==a&&(o=r.splice(a,1)[0]),null!==n&&r.splice(n,0,o),r},_=function(t,e){for(var a=[],n=0;n<t;n++)a.push(e(n));return a},b={name:"Simple",components:{Container:u,Draggable:m},data:function(){return{items:_(50,function(t){return{id:t,data:"Draggable "+t}})}},methods:{onDrop:function(t){this.items=h(this.items,t)}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"simple-page"},[a("Container",{on:{drop:t.onDrop}},t._l(t.items,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n            "+t._s(e.data)+"\n          ")])])}))],1)])},staticRenderFns:[]},y=a("VU/8")(b,C,!1,null,null,null).exports,D={name:"SimpleScroller",components:{Container:u,Draggable:m},data:function(){return{items:_(50,function(t){return{id:t,data:"Draggable "+t}})}},methods:{onDrop:function(t){this.items=h(this.items,t)}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"simple-page-scroller"},[a("Container",{on:{drop:t.onDrop}},t._l(t.items,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n            "+t._s(e.data)+"\n          ")])])}))],1)])},staticRenderFns:[]},k=a("VU/8")(D,x,!1,null,null,null).exports,S={name:"SimpleHorizontal",components:{Container:u,Draggable:m},data:function(){return{items:_(50,function(t){return{id:t,data:"Draggable "+t}})}},methods:{onDrop:function(t){this.items=h(this.items,t)}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{style:{margin:"50px",overflowX:"auto"}},[a("Container",{attrs:{orientation:"horizontal"},on:{drop:t.onDrop}},t._l(t.items,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item-horizontal"},[t._v("\n            "+t._s(e.data)+"\n          ")])])}))],1)])},staticRenderFns:[]},N=a("VU/8")(S,P,!1,null,null,null).exports,E={name:"Copy",components:{Container:u,Draggable:m},data:function(){return{items1:_(15,function(t){return{id:"1"+t,data:"Source Draggable - "+t}}),items2:_(15,function(t){return{id:"2"+t,data:"Draggable 2 - "+t}}),items3:_(15,function(t){return{id:"3"+t,data:"Draggable 3 - "+t}})}},methods:{onDrop:function(t,e){this[t]=h(this[t],e)},getChildPayload1:function(t){return this.items1[t]},getChildPayload2:function(t){return this.items2[t]},getChildPayload3:function(t){return this.items3[t]}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{display:"flex",justifyContent:"stretch",marginTop:"50px",marginRight:"50px"}},[a("div",{style:{marginLeft:"50px",flex:"1"}},[a("Container",{attrs:{behaviour:"copy","group-name":"1","get-child-payload":t.getChildPayload1}},t._l(t.items1,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.data)+"\n\t\t\t\t\t\t")])])}))],1),t._v(" "),a("div",{style:{marginLeft:"50px",flex:"1"}},[a("Container",{attrs:{"group-name":"1","get-child-payload":t.getChildPayload2},on:{drop:function(e){t.onDrop("items2",e)}}},t._l(t.items2,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.data)+"\n\t\t\t\t\t\t")])])}))],1),t._v(" "),a("div",{style:{marginLeft:"50px",flex:"1"}},[a("Container",{attrs:{"group-name":"1","get-child-payload":t.getChildPayload3},on:{drop:function(e){t.onDrop("items3",e)}}},t._l(t.items3,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.data)+"\n\t\t\t\t\t\t")])])}))],1)])},staticRenderFns:[]},F=a("VU/8")(E,A,!1,null,null,null).exports,I={name:"Groups",components:{Container:u,Draggable:m},data:function(){return{items1:_(15,function(t){return{id:"1"+t,data:"Draggable 1 - "+t}}),items2:_(15,function(t){return{id:"2"+t,data:"Draggable 2 - "+t}}),items3:_(15,function(t){return{id:"3"+t,data:"Draggable 3 - "+t}}),items4:_(15,function(t){return{id:"4"+t,data:"Draggable 3 - "+t}})}},methods:{onDrop:function(t,e){this[t]=h(this[t],e)},getChildPayload1:function(t){return this.items1[t]},getChildPayload2:function(t){return this.items2[t]},getChildPayload3:function(t){return this.items3[t]},getChildPayload4:function(t){return this.items4[t]}}},H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{display:"flex",justifyContent:"stretch",marginTop:"50px",marginRight:"50px"}},[a("div",{style:{marginLeft:"50px",flex:"1"}},[a("Container",{attrs:{"group-name":"1","get-child-payload":t.getChildPayload1},on:{drop:function(e){t.onDrop("items1",e)}}},t._l(t.items1,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.data)+"\n\t\t\t\t\t\t")])])}))],1),t._v(" "),a("div",{style:{marginLeft:"50px",flex:"1"}},[a("Container",{attrs:{"group-name":"1","get-child-payload":t.getChildPayload2},on:{drop:function(e){t.onDrop("items2",e)}}},t._l(t.items2,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.data)+"\n\t\t\t\t\t\t")])])}))],1),t._v(" "),a("div",{style:{marginLeft:"50px",flex:"1"}},[a("Container",{attrs:{"group-name":"1","get-child-payload":t.getChildPayload3},on:{drop:function(e){t.onDrop("items3",e)}}},t._l(t.items3,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.data)+"\n\t\t\t\t\t\t")])])}))],1),t._v(" "),a("div",{style:{marginLeft:"50px",flex:"1"}},[a("Container",{attrs:{"group-name":"1","get-child-payload":t.getChildPayload4},on:{drop:function(e){t.onDrop("items4",e)}}},t._l(t.items4,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.data)+"\n\t\t\t\t\t\t")])])}))],1)])},staticRenderFns:[]},$=a("VU/8")(I,H,!1,null,null,null).exports,L=(_(30,function(t){return{id:t,type:"draggable",data:"Container 1 Draggable - "+t}}),{name:"Nested",components:{Container:u,Draggable:m},data:function(){var t={items:_(30,function(t){return{id:t,type:"draggable",data:"Container 1 Draggable - "+t}}),items2:_(5,function(t){return{id:t,type:"draggable",data:"Container 2 Draggable - "+t}}),items3:_(4,function(t){return{id:t,type:"draggable",data:"Container 3 Draggable - "+t}}),innerContainerStyle:{padding:"20px 20px",marginTop:"2px",marginBottom:"2px",border:"1px solid rgba(0,0,0,.125)",backgroundColor:"#f4f5f9aa",cursor:"move"}};return t.items[5]={id:5,type:"container",items:t.items2},t.items[9]={id:9,type:"container",items:t.items3},t},methods:{onDrop:function(t){this.items=h(this.items,t)},onInnerDrop:function(t,e){var a=[].concat(f()(this.items)),n=a.indexOf(t);a[n].items=h(a[n].items,e),this.items=a}}}),R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"simple-page"},[a("Container",{on:{drop:function(e){t.onDrop(e)}}},t._l(t.items,function(e){return a("Draggable",{key:e.id},["draggable"==e.type?a("div",{staticClass:"draggable-item"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.data)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),"container"==e.type?a("div",[a("div",{style:t.innerContainerStyle},[a("h4",[t._v("Sortable List")]),t._v(" "),a("div",{style:{cursor:"default"}},[a("Container",{on:{drop:function(a){t.onInnerDrop(e,a)}}},t._l(e.items,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n                            "+t._s(e.data)+"\n                          ")])])}))],1)])]):t._e()])}))],1)])},staticRenderFns:[]},w=a("VU/8")(L,R,!1,null,null,null).exports,U={name:"DragClass",components:{Container:u,Draggable:m},data:function(){return{items:_(50,function(t){return{id:t,data:"Draggable "+t}})}},methods:{onDrop:function(t){this.items=h(this.items,t)}}},Z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"simple-page"},[a("Container",{attrs:{"drag-class":"opacity-ghost","drop-class":"opacity-ghost-drop"},on:{drop:t.onDrop}},t._l(t.items,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n            "+t._s(e.data)+"\n          ")])])}))],1)])},staticRenderFns:[]},O=a("VU/8")(U,Z,!1,null,null,null).exports,G={name:"DragDelay",components:{Container:u,Draggable:m},data:function(){return{items:_(50,function(t){return{id:t,data:"Draggable "+t}})}},methods:{onDrop:function(t){this.items=h(this.items,t)}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"simple-page"},[a("Container",{attrs:{"drag-begin-delay":500,"drag-class":"form-ghost","drop-class":"form-ghost-drop"},on:{drop:t.onDrop}},t._l(t.items,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n            "+t._s(e.data)+"\n          ")])])}))],1)])},staticRenderFns:[]},V=a("VU/8")(G,M,!1,null,null,null).exports,z={name:"DragHandle",components:{Container:u,Draggable:m},data:function(){return{items:_(50,function(t){return{id:t,data:"Draggable "+t}})}},methods:{onDrop:function(t){this.items=h(this.items,t)}}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"simple-page"},[a("Container",{attrs:{"drag-handle-selector":".column-drag-handle"},on:{drop:t.onDrop}},t._l(t.items,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[a("span",{staticClass:"column-drag-handle",staticStyle:{float:"left",padding:"0 10px"}},[t._v("☰")]),t._v("\n              "+t._s(e.data)+"\n            ")])])}))],1)])},staticRenderFns:[]},T=a("VU/8")(z,B,!1,null,null,null).exports,j={name:"LockAxis",components:{Container:u,Draggable:m},data:function(){return{items:_(50,function(t){return{id:t,data:"Draggable "+t}})}},methods:{onDrop:function(t){this.items=h(this.items,t)}}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"simple-page"},[a("Container",{attrs:{"lock-axis":"y"},on:{drop:t.onDrop}},t._l(t.items,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n            "+t._s(e.data)+"\n          ")])])}))],1)])},staticRenderFns:[]},Y=a("VU/8")(j,q,!1,null,null,null).exports,W={name:"TransitionDuration",components:{Container:u,Draggable:m},data:function(){return{items:_(50,function(t){return{id:t,data:"Draggable "+t}})}},methods:{onDrop:function(t){this.items=h(this.items,t)}}},Q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"simple-page"},[a("Container",{attrs:{"animation-duration":500},on:{drop:t.onDrop}},t._l(t.items,function(e){return a("Draggable",{key:e.id},[a("div",{staticClass:"draggable-item"},[t._v("\n            "+t._s(e.data)+"\n          ")])])}))],1)])},staticRenderFns:[]},X=a("VU/8")(W,Q,!1,null,null,null).exports,J=["Lorem","Ipsum","Consectetur","Eiusmod"],K=["azure","beige","bisque","blanchedalmond","burlywood","cornsilk","gainsboro","ghostwhite","ivory","khaki"],tt={type:"container",props:{orientation:"horizontal"},children:_(4,function(t){return{id:"column"+t,type:"container",name:J[t],props:{orientation:"vertical",className:"card-container"},children:_(+(10*Math.random()).toFixed()+5,function(e){return{type:"draggable",id:""+t+e,props:{className:"card",style:{backgroundColor:(a=Math.floor(10*Math.random()),K[a])}},data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".slice(0,Math.floor(150*Math.random())+30)};var a})}})},et={name:"Cards",components:{Container:u,Draggable:m},data:function(){return{scene:tt}},methods:{onColumnDrop:function(t){var e=r()({},this.scene);e.children=h(e.children,t),this.scene=e},onCardDrop:function(t,e){if(null!==e.removedIndex||null!==e.addedIndex){var a=r()({},this.scene),n=a.children.filter(function(e){return e.id===t})[0],i=a.children.indexOf(n),o=r()({},n);o.children=h(o.children,e),a.children.splice(i,1,o),this.scene=a}},getCardPayload:function(t){var e=this;return function(a){return e.scene.children.filter(function(e){return e.id===t})[0].children[a]}},dragStart:function(){console.log("drag started")}}},at={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-scene"},[a("Container",{attrs:{orientation:"horizontal","drag-handle-selector":".column-drag-handle"},on:{drop:function(e){t.onColumnDrop(e)},"drag-start":t.dragStart}},t._l(t.scene.children,function(e){return a("Draggable",{key:e.id},[a("div",{class:e.props.className},[a("div",{staticClass:"card-column-header"},[a("span",{staticClass:"column-drag-handle"},[t._v("☰")]),t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t")]),t._v(" "),a("Container",{attrs:{"group-name":"col","get-child-payload":t.getCardPayload(e.id),"drag-class":"card-ghost","drop-class":"card-ghost-drop"},on:{drop:function(a){return t.onCardDrop(e.id,a)}}},t._l(e.children,function(e){return a("Draggable",{key:e.id},[a("div",{class:e.props.className,style:e.props.style},[a("p",[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.data)+"\n\t\t\t\t\t\t\t\t\t")])])])}))],1)])}))],1)},staticRenderFns:[]},nt=a("VU/8")(et,at,!1,null,null,null).exports,it=[{type:"header"},{type:"fullname",label:"Full Name"},{type:"email",label:"E Mail"},{type:"address",label:"Address"},{type:"dropdown",label:"Options"},{type:"checkbox",label:"Checkbox Options"},{type:"radio",label:"Radio Options"},{type:"submit"}],rt={name:"Form",components:{Container:u,Draggable:m},data:function(){return{form:[].concat(it)}},methods:{onDrop:function(t){this.form=h(this.form,t)}}},ot={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-demo"},[a("div",{staticClass:"form"},[a("Container",{attrs:{"non-drag-area-selector":".field","drag-class":"form-ghost","drop-class":"form-ghost-drop"},on:{drop:function(e){t.onDrop(e)}}},t._l(t.form,function(e){return a("Draggable",{key:e.type},[a("div",{staticClass:"form-line"},[a("div",{staticClass:"label"},[a("span",[t._v(t._s(e.label))])]),t._v(" "),a("div",{staticClass:"field"},["header"==e.type?a("h2",{staticClass:"field"},[t._v("\n\t\t\t\t\t\t\t\tForm Header\n\t\t\t\t\t\t\t")]):t._e(),t._v(" "),"fullname"==e.type?a("div",{staticClass:"field-group"},[a("input",{attrs:{type:"text"}}),a("input",{attrs:{type:"text"}})]):t._e(),t._v(" "),"email"==e.type?a("div",{staticClass:"field"},[a("input",{attrs:{type:"email"}})]):t._e(),t._v(" "),"address"==e.type?a("div",{staticClass:"field"},[a("textarea")]):t._e(),t._v(" "),"dropdown"==e.type?a("div",{staticClass:"field"},[a("select",[a("option",{attrs:{value:"1"}},[t._v("Option 1")]),t._v(" "),a("option",{attrs:{value:"2",selected:""}},[t._v("Option 2")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Option 3")]),t._v(" "),a("option",{attrs:{value:"4"}},[t._v("Option 4")])])]):t._e(),t._v(" "),"checkbox"==e.type?a("div",{staticClass:"field"},[a("div",[a("label",[a("input",{attrs:{type:"checkbox",name:"r"}}),t._v(" option 1")])]),t._v(" "),a("div",[a("label",[a("input",{attrs:{type:"checkbox",name:"r"}}),t._v(" option 2")])]),t._v(" "),a("div",[a("label",[a("input",{attrs:{type:"checkbox",name:"r"}}),t._v(" option 3")])]),t._v(" "),a("div",[a("label",[a("input",{attrs:{type:"checkbox",name:"r"}}),t._v(" option 4")])]),t._v(" "),a("div",[a("label",[a("input",{attrs:{type:"checkbox",name:"r"}}),t._v(" option 5")])])]):t._e(),t._v(" "),"radio"==e.type?a("div",{staticClass:"field"},[a("div",[a("label",[a("input",{attrs:{type:"radio",name:"r"}}),t._v(" option 1")])]),t._v(" "),a("div",[a("label",[a("input",{attrs:{type:"radio",name:"r"}}),t._v(" option 2")])]),t._v(" "),a("div",[a("label",[a("input",{attrs:{type:"radio",name:"r"}}),t._v(" option 3")])]),t._v(" "),a("div",[a("label",[a("input",{attrs:{type:"radio",name:"r"}}),t._v(" option 4")])]),t._v(" "),a("div",[a("label",[a("input",{attrs:{type:"radio",name:"r"}}),t._v(" option 5")])])]):t._e(),t._v(" "),"submit"==e.type?a("div",{staticClass:"field"},[a("button",{staticClass:"form-submit-button"},[t._v("Submit")])]):t._e()])])])}))],1)])},staticRenderFns:[]},st=a("VU/8")(rt,ot,!1,null,null,null).exports,lt=function(t){return"https://github.com/kutlugsahin/vue-smooth-dnd/blob/master/src/demo/pages/"+t},dt=[{title:"Showcase",pages:[{title:"Card board",page:"cards",url:lt("cards.vue")},{title:"Form elements",page:"form",url:lt("form.vue")}]},{title:"Basic Sortables",pages:[{title:"Sortable with default options",page:"simple",url:lt("simple.vue")},{title:"Sortable inside scroller",page:"simple-scroller",url:lt("simple-scroller.vue")},{title:"Horizontal sortable",page:"simple-horizontal",url:lt("simple-horizontal.vue")}]},{title:"Groups",pages:[{title:"DnD between groups",page:"groups",url:lt("groups.vue")},{title:"Copy draggable",page:"copy",url:lt("copy.vue")}]},{title:"Nested Groups",pages:[{title:"Nested vertical sortable",page:"nested",url:lt("nested.vue")}]},{title:"Advanced options",pages:[{title:"Lock axis",page:"lock-axis",url:lt("lock-axis.vue")},{title:"Drag begin delay of 500ms",page:"drag-delay",url:lt("drag-delay.vue")},{title:"Drag handle",page:"drag-handle",url:lt("drag-handle.vue")},{title:"Drag and Drop classses",page:"drag-class",url:lt("drag-class.vue")},{title:"Animation duration 500ms",page:"transition-duration",url:lt("transition-duration.vue")}]}],ct={name:"Demo",components:{Simple:y,SimpleHorizontal:N,SimpleScroller:k,Copy:F,Groups:$,Nested:w,LockAxis:Y,DragDelay:V,DragHandle:T,DragClass:O,TransitionDuration:X,Cards:nt,Form:st},data:function(){return{isNavOpen:!0,selectedPage:dt[0].pages[0],pages:dt}},methods:{toggleNav:function(){this.isNavOpen=!this.isNavOpen},selectPage:function(t){this.selectedPage=t},openCode:function(){window.open(this.selectedPage.url,"_blank")}},computed:{navButtonClass:function(){return"nav-button"+(this.isNavOpen?" open":" closed")},navigatorClass:function(){return"navigator"+(this.isNavOpen?" open":" closed")},headerClass:function(){return"header"+(this.isNavOpen?" open":" closed")}}},ut={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"app"},[a("div",{class:t.navButtonClass,on:{click:function(e){t.toggleNav()}}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span")]),t._v(" "),a("div",{class:t.navigatorClass},[a("div",{class:"navigator-content"},[a("div",{class:"navigator-header"},[a("h3",[t._v("vue-smooth-dnd")]),t._v(" "),a("div",{class:"divider"})]),t._v(" "),a("div",t._l(t.pages,function(e){return a("div",{key:e.title,class:"menu-section"},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("ul",t._l(e.pages,function(e){return a("li",{key:e.title,class:e.selected?"selected":"",on:{click:function(a){t.selectPage(e)}}},[t._v(t._s(e.title))])}))])}))])]),t._v(" "),a("div",{class:"content"},[a("div",{class:t.headerClass},[t._v("\n\t\t\t"+t._s(t.selectedPage.title)+"\n\t\t\t"),a("div",{class:"source-code",on:{click:function(e){t.openCode()}}},[a("img",{attrs:{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZml0PSIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ij48L3BhdGg+CiAgICA8cGF0aCBkPSJNOS40IDE2LjZMNC44IDEybDQuNi00LjZMOCA2bC02IDYgNiA2IDEuNC0xLjR6bTUuMiAwbDQuNi00LjYtNC42LTQuNkwxNiA2bDYgNi02IDYtMS40LTEuNHoiIGZpbGw9IiNGRkYiPjwvcGF0aD4KPC9zdmc+Cg==",alt:""}}),t._v(" "),a("span",[t._v("source")])])]),t._v(" "),a("div",{class:"demo"},["simple"==t.selectedPage.page?a("Simple"):"simple-scroller"==t.selectedPage.page?a("SimpleScroller"):"simple-horizontal"==t.selectedPage.page?a("SimpleHorizontal"):"copy"==t.selectedPage.page?a("Copy"):"groups"==t.selectedPage.page?a("Groups"):"nested"==t.selectedPage.page?a("Nested"):t._e(),t._v(" "),"lock-axis"==t.selectedPage.page?a("LockAxis"):t._e(),t._v(" "),"drag-handle"==t.selectedPage.page?a("DragHandle"):t._e(),t._v(" "),"drag-class"==t.selectedPage.page?a("DragClass"):t._e(),t._v(" "),"drag-delay"==t.selectedPage.page?a("DragDelay"):t._e(),t._v(" "),"transition-duration"==t.selectedPage.page?a("TransitionDuration"):t._e(),t._v(" "),"cards"==t.selectedPage.page?a("Cards"):t._e(),t._v(" "),"form"==t.selectedPage.page?a("Form"):t._e()],1)])])},staticRenderFns:[]};var gt=a("VU/8")(ct,ut,!1,function(t){a("ZYHG")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{Demo:gt},template:"<Demo/>"})},ZYHG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1b7ecab39a24ee18f52c.js.map
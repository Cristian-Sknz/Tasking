(this["webpackJsonptime-tracking"]=this["webpackJsonptime-tracking"]||[]).push([[0],{19:function(t){t.exports=JSON.parse('[{"id":0,"title":"Fazer um website","category":0,"createdDate":"","dateTime":"","hours":"03:00"},{"id":1,"title":"Jogar truco","category":1,"createdDate":"","dateTime":"","hours":"01:00"},{"id":2,"title":"Estudar react","category":2,"createdDate":"","dateTime":"","hours":"01:00"},{"id":3,"title":"Escutar musica no parque","category":3,"createdDate":"","dateTime":"","hours":"01:00"}]')},21:function(t){t.exports=JSON.parse('{"months":["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],"monthsShort":["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],"weekdays":["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"],"weekdaysShort":["dom","seg","ter","qua","qui","sex","s\xe1b"],"weekdaysMin":["dom","2\xaa","3\xaa","4\xaa","5\xaa","6\xaa","s\xe1b"],"longDateFormat":{"LT":"HH:mm","L":"DD/MM/YYYY","LL":"D [de] MMMM [de] YYYY","LLL":"D [de] MMMM [de] YYYY [\xe0s] LT","LLLL":"dddd, D [de] MMMM [de] YYYY [\xe0s] LT"},"calendar":{"sameDay":"[Hoje \xe0s] LT","nextDay":"[Amanh\xe3 \xe0s] LT","nextWeek":"dddd [\xe0s] LT","lastDay":"[Ontem \xe0s] LT","sameElse":"L"},"relativeTime":{"future":"em %s","past":"%s atr\xe1s","s":"segundos","m":"um minuto","mm":"%d minutos","h":"uma hora","hh":"%d horas","d":"um dia","dd":"%d dias","M":"um m\xeas","MM":"%d meses","y":"um ano","yy":"%d anos"},"ordinal":"%d\xba"}')},40:function(t,e,a){},41:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){},45:function(t,e,a){},46:function(t,e,a){},47:function(t,e,a){},48:function(t,e,a){},49:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(18),s=a.n(i),c=a(3),u=a.n(c),o=a(11),l=a(16),d=a(2),h=a(6),m=a(8),f=a(7),v=a(9),j=a(12),p=a(13),b=a.n(p),O=a(0),k=function(t){Object(m.a)(a,t);var e=Object(f.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={duration:t.data.getTimerString(),option:!1},n.interval=null,n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){var e=t.props.data.getTimerString();t.state.duration!==e&&t.setState(Object(v.a)(Object(v.a)({},t.state),{},{duration:e}))}),1e3)}},{key:"componentDidUpdate",value:function(){var t=this.props.data;t.isExpired()&&!this.interval&&(this.setState(Object(v.a)(Object(v.a)({},this.state),{},{duration:t.getTimerString()})),clearInterval(this.interval))}},{key:"componentWillUnmount",value:function(){this.interval||clearInterval(this.interval)}},{key:"handleTaskOptions",value:function(){this.setState(Object(v.a)(Object(v.a)({},this.state),{},{option:!this.state.option}))}},{key:"handleRemoveCard",value:function(){this.props.data.delete()}},{key:"render",value:function(){var t,e,a,n,r;return Object(O.jsx)("li",{className:"task ".concat(null===(t=this.props)||void 0===t?void 0:t.data.category.style),children:Object(O.jsxs)("div",{className:"task-body",children:[Object(O.jsxs)("header",{className:"task-header",children:[Object(O.jsx)("p",{className:"task-category",children:null===(e=this.props)||void 0===e?void 0:e.data.category.name}),Object(O.jsxs)("div",{className:"task-options",children:[Object(O.jsx)(j.a,{onClick:this.handleTaskOptions.bind(this),icon:["fas","ellipsis-h"],className:"option-icon"}),Object(O.jsx)("ul",{className:"options-list".concat(this.state.option?" active":""),children:Object(O.jsx)("li",{className:"task-option",onClick:this.handleRemoveCard.bind(this),children:"Deletar"})})]})]}),Object(O.jsxs)("section",{className:"task-content",children:[Object(O.jsx)("div",{className:"task-title",children:null===(a=this.props)||void 0===a?void 0:a.data.title}),Object(O.jsx)(b.a,{className:"time-remaining",mode:"single",forceSingleModeWidth:!0,max:45,children:Object(O.jsx)("h2",{children:this.state.duration})}),Object(O.jsx)("div",{className:"task-state ".concat(null===(n=this.props)||void 0===n?void 0:n.data.state[0]),children:null===(r=this.props)||void 0===r?void 0:r.data.state[1]})]}),Object(O.jsx)("div",{className:"task-footer",children:Object(O.jsx)("div",{className:"task-createddate",title:this.props.data.createdDate.calendar(),children:"h\xe1 "+this.props.data.getDateAgo().humanize()})})]})})}}]),a}(n.Component),y=a(5),g=a.n(y),x=a(10),w=function(){function t(){Object(d.a)(this,t)}return Object(h.a)(t,null,[{key:"get",value:function(e){return new Promise((function(a,n){var r=localStorage.getItem(t._prefix+e);r?a(r):n("LocalStorage: ".concat(e," not found"))}))}},{key:"set",value:function(e,a){return new Promise((function(n){localStorage.setItem(t._prefix+e,a),n(a)}))}}]),t}();w._prefix="taskapp_";var T=w,S=a(19),N=[{name:"Trabalho",style:"work"},{name:"Jogos",style:"play"},{name:"Estudo",style:"study"},{name:"Lazer",style:"selfCare"}],D=function(){function t(e,a,n){Object(d.a)(this,t),this.id=e,this.name=a,this.style=n}return Object(h.a)(t,null,[{key:"values",value:function(){return N.map((function(e,a){return new t(a,e.name,e.style)}))}},{key:"getById",value:function(e){var a=t.values().filter((function(t){return t.id===parseInt(e)}))[0];return a||(a=t.values()[0]),a}}]),t}(),I=function(){function t(){Object(d.a)(this,t)}return Object(h.a)(t,null,[{key:"getLoadedTasks",value:function(){var t=Object(x.a)(g.a.mark((function t(){var e,a=this;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getTasks();case 2:return e=t.sent,t.abrupt("return",e.map((function(t){return a.toStorageTask(t)})));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getTasks",value:function(){var t=Object(x.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=JSON,t.next=4,T.get("tasks");case 4:return t.t1=t.sent,t.abrupt("return",t.t0.parse.call(t.t0,t.t1));case 8:return t.prev=8,t.t2=t.catch(0),t.abrupt("return",S.map((function(t,e){return t.createdDate=u()().toISOString(),t.dateTime=u()().add(e+1+2,"hours").toISOString(),t})));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"getById",value:function(){var t=Object(x.a)(g.a.mark((function t(e){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getTasks();case 2:return a=t.sent,t.abrupt("return",a.filter((function(t){return t.id===e}))[0]);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"hasById",value:function(){var t=Object(x.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getById(e);case 2:return t.t0=t.sent,t.t1=void 0,t.abrupt("return",t.t0!==t.t1);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"save",value:function(){var t=Object(x.a)(g.a.mark((function t(e){var a=this;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(x.a)(g.a.mark((function t(n){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.getTasks();case 2:return r=t.sent,t.next=5,a.hasById(e.id);case 5:if(!t.sent){t.next=10;break}a.storageAll(r.map((function(t){return t.id===e.id?e:t}))),n(e),t.next=16;break;case 10:return t.next=12,a.nextId();case 12:e.id=t.sent,r.push(e),a.storageAll(r),n(r);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(t){return a.notify(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(x.a)(g.a.mark((function t(e){var a=this;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getTasks().then(function(){var t=Object(x.a)(g.a.mark((function t(n){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e instanceof Number?e:e.id,t.next=3,a.hasById(r);case 3:if(!t.sent){t.next=6;break}return a.storageAll(n.filter((function(t){return t.id!==r}))),t.abrupt("return",!0);case 6:return t.abrupt("return",!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(t){return a.notify(t)})));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"notify",value:function(e){return t.getLoadedTasks().then((function(e){return t._observers.forEach((function(t){t(e)}))})),e}},{key:"register",value:function(){var t=Object(x.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this._observers.push(e);case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"unregister",value:function(){var t=Object(x.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this._observers=this._observers.filter((function(t){return t===e})));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"toStorageTask",value:function(t){return new M(t)}},{key:"storageAll",value:function(){var t=Object(x.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",T.set("tasks",JSON.stringify(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"nextId",value:function(){var t=Object(x.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.get("nextId").then((function(t){return T.set("nextId",parseInt(t)+1)})).catch((function(){return T.set("nextId",4)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),t}();I._observers=[];var M=function(){function t(e){var a=e.id,n=e.title,r=e.category,i=e.createdDate,s=e.dateTime,c=e.hours;Object(d.a)(this,t),this.id=a,this.title=n,this.category=D.getById(r),this.createdDate=u()(i),this.dateTime=u()(s),this.time=c.split(":"),this.hours=this.dateTime.clone().add(this.time[0],"h").add(this.time[1],"m"),this.duration=null}return Object(h.a)(t,[{key:"state",get:function(){return this.isExpired()?["complete","Finalizado"]:this.isActive()?["active","Ativo"]:["scheduled","Agendado"]}},{key:"isScheduled",value:function(){return this.dateTime-u()()>0}},{key:"isActive",value:function(){return this.dateTime-u()()<=0&&!this.isExpired()}},{key:"isExpired",value:function(){return this.hours-u()()<=0}},{key:"getDateAgo",value:function(){return u.a.duration(this.createdDate-u()(),"milliseconds")}},{key:"getDuration",value:function(){return this.duration||(this.duration=new C(this)),this.isScheduled()?this.duration.scheduleDuration():this.isActive()?this.duration.activeDuration():null}},{key:"getTimerString",value:function(){if(null==this.getDuration())return this.hours.format("DD/MM - HH:mm");var t=this.getDuration();return 0!==t.hours()?"".concat(t.hours(),"h").concat(t.minutes(),"m"):"".concat(t.minutes(),"m")}},{key:"delete",value:function(){I.delete(this)}},{key:"toTask",value:function(){return{id:this.id,title:this.title,category:this.category.id,createdDate:this.createdDate.toISOString(),dateTime:this.dateTime.toISOString(),hours:"".concat(this.time[0],":").concat(this.time[1])}}},{key:"getFixedTime",value:function(){return this.time[0]&&this.time[1]?"".concat(this.time[0],":").concat(this.time[1]):"01:00"}}]),t}(),C=function t(e){var a=e.dateTime,n=e.hours;Object(d.a)(this,t),this.scheduleDuration=function(){return u.a.duration(a-u()(),"milliseconds")},this.activeDuration=function(){return u.a.duration(n-u()(),"milliseconds")}};var Y=I,L=(a(40),function(t){Object(m.a)(a,t);var e=Object(f.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={tasks:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;Y.register(this.updateTasks.bind(this)).then((function(){Y.getLoadedTasks().then((function(e){t.setState({tasks:e})}))}))}},{key:"componentWillUnmount",value:function(){Y.unregister(this.updateTasks.bind(this))}},{key:"updateTasks",value:function(t){this.setState(Object(v.a)(Object(v.a)({},this.state),{},{tasks:t}))}},{key:"render",value:function(){return Object(O.jsx)("ul",{className:"tasks",children:this.state.tasks.map((function(t){return Object(O.jsx)(k,{data:t},t.id)}))})}}]),a}(n.Component)),A=(a(41),function(t){Object(m.a)(a,t);var e=Object(f.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(O.jsx)("section",{className:"dashboard",children:Object(O.jsx)("div",{className:"taskboard",children:Object(O.jsx)(L,{})})})}}]),a}(n.Component)),P=A,F=a(20),E=a.n(F),U=function(){function t(){Object(d.a)(this,t)}return Object(h.a)(t,null,[{key:"getImage",value:function(){var t=Object(x.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",T.get(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"setImage",value:function(){var t=Object(x.a)(g.a.mark((function t(e,a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(a);case 2:return n=t.sent,T.set(e,n),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}]),t}();function B(t){return new Promise((function(e,a){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return a(t)}}))}var _=U,J=a.p+"static/media/avatar-icon.e5117e8e.jpg",R=(a(43),function(t){Object(m.a)(a,t);var e=Object(f.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={username:"username",src:J},n.imageInput=r.a.createRef(),n.imagePreview=r.a.createRef(),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;_.getImage("avatar").then((function(e){return t.setState(Object(v.a)(Object(v.a)({},t.state),{},{src:e}))})),T.get("username").then((function(e){return t.setState(Object(v.a)(Object(v.a)({},t.state),{},{username:e}))}))}},{key:"handleUsername",value:function(t){var e=this;T.set("username",t.target.value).then((function(a){return e.setState(Object(v.a)(Object(v.a)({},e.state),{},{username:t.target.value}))}))}},{key:"handleImageUpload",value:function(t){var e;(null===(e=this.imageInput)||void 0===e?void 0:e.current).click()}},{key:"handlePreviewUpdate",value:function(t){var e=this;_.setImage("avatar",t.target.files[0]).then((function(t){return e.setState(Object(v.a)(Object(v.a)({},e.state),{},{src:t}))}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"user",children:[Object(O.jsx)("div",{className:"user-image",ref:this.imagePreview,onClick:this.handleImageUpload.bind(this),style:{backgroundImage:"url(".concat(this.state.src,")")},children:Object(O.jsx)("input",{accept:".png, .jpg, .gif",className:"image-upload",type:"file",ref:this.imageInput,onChange:this.handlePreviewUpdate.bind(this)})}),Object(O.jsxs)("div",{className:"user-text",children:[Object(O.jsx)("p",{children:"Bem vindo,"}),Object(O.jsx)(b.a,{className:"username",mode:"single",forceSingleModeWidth:!0,max:55,children:Object(O.jsx)(E.a,{html:this.state.username,onChange:this.handleUsername.bind(this),tagName:"h2"})})]})]})}}]),a}(n.Component)),z=(a(44),function(t){Object(m.a)(a,t);var e=Object(f.a)(a);function a(){var t;return Object(d.a)(this,a),(t=e.call(this)).state={active:!0},t}return Object(h.a)(a,[{key:"handleTitleClick",value:function(){this.setState({active:!this.state.active})}},{key:"render",value:function(){var t;return Object(O.jsxs)("div",{className:"dashboard-filter",children:[Object(O.jsx)("div",{className:"filter-title",onClick:this.handleTitleClick.bind(this),children:"Filtrar"}),(null===(t=this.state)||void 0===t?void 0:t.active)?Object(O.jsx)("ul",{className:"filter-list",children:D.values().map((function(t,e){return Object(O.jsx)("li",{className:"filter-item",children:t.name},e)}))}):""]})}}]),a}(n.Component)),q=function(t){Object(m.a)(a,t);var e=Object(f.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t;return Object(O.jsx)("div",{className:"task-add",onClick:null===(t=this.props)||void 0===t?void 0:t.onClick,children:Object(O.jsx)("p",{children:"Adicionar Tarefa"})})}}]),a}(n.Component),H=q,W=function(t){Object(m.a)(a,t);var e=Object(f.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"handleForm",value:function(t){var e=t.target,a=e[0].value,n=e[1].value,r=e[2].value,i=e[3].value;r=r?u()(r):u()().add(3,"hours"),Y.save(Y.toStorageTask({title:a,category:n,createdDate:u()().toISOString(),dateTime:u()(r).toISOString(),hours:i})),this.props.onSubmit()}},{key:"handlePreview",value:function(t){var e=t.target.form,a=e[0].value,n=e[1].value,r=e[2].value,i=e[3].value;r=r?u()(r):u()().add(3,"hours"),this.props.setPreview(a,n,r,i)}},{key:"checkDate",value:function(t){u()(t.value)}},{key:"render",value:function(){return Object(O.jsxs)("form",{className:"task-form",onReset:this.handleForm.bind(this),onChange:this.handlePreview.bind(this),children:[Object(O.jsxs)("div",{className:"form-title",children:[Object(O.jsx)("label",{htmlFor:"title",children:"Titulo"}),Object(O.jsx)("input",{name:"title",id:"title"})]}),Object(O.jsxs)("div",{className:"form-category",children:[Object(O.jsx)("label",{htmlFor:"category",children:"Categoria"}),Object(O.jsx)("select",{name:"category",id:"category",children:D.values().map((function(t,e){return Object(O.jsx)("option",{value:e,children:t.name},e)}))})]}),Object(O.jsxs)("div",{className:"form-startdate",children:[Object(O.jsx)("label",{htmlFor:"startdate",children:"Inicio"}),Object(O.jsx)("input",{name:"startdate",id:"startdate",type:"datetime-local",pattern:"YYYY-MM-DDThh:mm",min:u()().format("YYYY-MM-DDThh:mm"),max:u()().add(7,"days").format("YYYY-MM-DDThh:mm")})]}),Object(O.jsxs)("div",{className:"form-endtime",children:[Object(O.jsx)("label",{htmlFor:"endtime",children:"Dura\xe7\xe3o"}),Object(O.jsx)("input",{name:"endtime",id:"endtime",type:"time"})]}),Object(O.jsx)("button",{className:"submit-button",type:"reset",children:"Adicionar"})]})}}]),a}(n.Component),G=W,K=(a(45),function(t){Object(m.a)(a,t);var e=Object(f.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={preview:Y.toStorageTask({title:"Preview",category:0,createdDate:u()().toISOString(),dateTime:u()().add(3,"hours").toISOString(),hours:"01:00"})},n}return Object(h.a)(a,[{key:"setPreview",value:function(t,e,a,n){var r=Y.toStorageTask({title:t,category:e,createdDate:u()().toISOString(),dateTime:a,hours:n});this.setState({preview:r})}},{key:"render",value:function(){return Object(O.jsx)("section",{className:"modal taskmodal",children:Object(O.jsxs)("div",{className:"taskmodal-body",children:[Object(O.jsx)("div",{className:"modal-close",onClick:this.props.onClick,children:Object(O.jsx)(j.a,{icon:["fas","times"]})}),Object(O.jsx)("div",{className:"taskmodal-form",children:Object(O.jsx)(G,{setPreview:this.setPreview.bind(this),onSubmit:this.props.onClick})}),Object(O.jsx)("div",{className:"taskmodal-preview",children:Object(O.jsx)(k,{data:this.state.preview})})]})})}}]),a}(n.Component)),Q=(a(46),function(t){Object(m.a)(a,t);var e=Object(f.a)(a);function a(){var t;return Object(d.a)(this,a),(t=e.call(this)).state={modal:!0},t}return Object(h.a)(a,[{key:"handleModal",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return Object(O.jsx)("section",{className:"user-profile",children:Object(O.jsxs)("div",{className:"profile",children:[Object(O.jsx)(R,{}),Object(O.jsx)("div",{className:"profile-buttons",children:Object(O.jsx)(z,{})}),Object(O.jsx)(H,{onClick:this.handleModal.bind(this)}),this.state.modal?Object(O.jsx)(K,{onClick:this.handleModal.bind(this)}):""]})})}}]),a}(n.Component)),V=(a(47),function(t){Object(m.a)(a,t);var e=Object(f.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("div",{className:"app-body",children:[Object(O.jsx)(Q,{}),Object(O.jsx)(P,{})]})})}}]),a}(n.Component)),X=V,Z=a(21);a(48);o.b.add(l.a),o.b.add(l.b),u.a.defineLocale("pt-br",Z),s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(X,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.74f89053.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{88:function(e,t,r){},89:function(e,t,r){},90:function(e,t,r){},91:function(e,t,r){},98:function(e,t,r){},99:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),n=r(26),s=r.n(n),o=r(34),i=r(21),l=r(25),j=r(51),u=r(24),d=r(8),b=r(13),O=r(22),h=r(28),p=r.n(h),m="/api",x=function(e){return"app/".concat("concerts","/").concat(e)},f=x("START_REQUEST"),y=x("END_REQUEST"),v=x("ERROR_REQUEST"),g=x("LOAD_CONCERTS"),_={data:[],request:{pending:!1,error:null,success:null}};var S=r(10),k=function(e){return e.seats.requests},E=function(e){return"app/".concat("seats","/").concat(e)},D=E("START_REQUEST"),A=E("END_REQUEST"),T=E("ERROR_REQUEST"),w=E("LOAD_SEATS"),N=E("ADD_SEAT"),q=function(e){return{payload:e,type:D}},R=function(e){return{payload:e,type:A}},C=function(e){return{payload:e,type:T}},L=function(){return function(){var e=Object(O.a)(Object(b.a)().mark((function e(t){var r;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(q({name:"LOAD_SEATS"})),e.prev=1,e.next=4,p.a.get("".concat(m,"/seats"));case 4:r=e.sent,t({payload:r.data,type:w}),t(R({name:"LOAD_SEATS"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(C({name:"LOAD_SEATS",error:e.t0.message}));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},F={data:[],requests:[]};var I=Object(l.c)({concerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},{data:Object(u.a)(t.payload)});case f:return Object(d.a)(Object(d.a)({},e),{},{request:{pending:!0,error:null,success:!1}});case y:return Object(d.a)(Object(d.a)({},e),{},{request:{pending:!1,error:null,success:!0}});case v:return Object(d.a)(Object(d.a)({},e),{},{request:{pending:!1,error:t.error,success:!1}});default:return e}},seats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object(d.a)(Object(d.a)({},e),{},{data:Object(u.a)(t.payload)});case N:return Object(d.a)(Object(d.a)({},e),{},{data:[].concat(Object(u.a)(e.data),[t.payload])});case D:return Object(d.a)(Object(d.a)({},e),{},{requests:Object(d.a)(Object(d.a)({},e.requests),{},Object(S.a)({},t.payload.name,{pending:!0,error:null,success:!1}))});case A:return Object(d.a)(Object(d.a)({},e),{},{requests:Object(d.a)(Object(d.a)({},e.requests),{},Object(S.a)({},t.payload.name,{pending:!1,error:null,success:!0}))});case T:return Object(d.a)(Object(d.a)({},e),{},{requests:Object(d.a)(Object(d.a)({},e.requests),{},Object(S.a)({},t.payload.name,{pending:!1,error:t.payload.error,success:!1}))});default:return e}}}),U=Object(l.e)(I,Object(l.d)(Object(l.a)(j.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),H=r(16),P=r(17),M=r(18),W=r(19),Q=r(23),J=r(100),X=r(101),Y=r(102),$=r(103),G=r(104),V=r(105),B=r(106),z=r(107),K=r(2),Z=function(e){Object(M.a)(r,e);var t=Object(W.a)(r);function r(){var e;Object(H.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(P.a)(r,[{key:"render",value:function(){return Object(K.jsx)("div",{children:Object(K.jsxs)(J.a,{color:"dark",dark:!0,expand:"md",children:[Object(K.jsx)(X.a,{href:"/",children:"New Wave Festival"}),Object(K.jsx)(Y.a,{onClick:this.toggle}),Object(K.jsx)($.a,{isOpen:this.state.isOpen,navbar:!0,children:Object(K.jsxs)(G.a,{className:"ml-auto align-items-center",navbar:!0,children:[Object(K.jsx)(V.a,{children:Object(K.jsx)(B.a,{href:"/",children:"Home"})}),Object(K.jsx)(V.a,{children:Object(K.jsx)(B.a,{href:"/prices",children:"Prices"})}),Object(K.jsx)(V.a,{children:Object(K.jsx)(B.a,{href:"/order-a-ticket",children:Object(K.jsx)(z.a,{outline:!0,color:"primary",children:"Order a ticket!"})})})]})})]})})}}]),r}(a.a.Component),ee=Z,te=function(){return Object(K.jsx)("footer",{id:"sticky-footer",className:"py-4 mt-5 bg-dark text-white-50",children:Object(K.jsx)("div",{className:"text-center",children:Object(K.jsx)("small",{children:"Copyright \xa9 New Wave Festival 2019"})})})},re=function(e){var t=e.children;return Object(K.jsxs)("div",{children:[Object(K.jsx)(ee,{}),t,Object(K.jsx)(te,{})]})},ce=r(111),ae=r(116),ne=(r(88),[{src:"/img/promo/promo1.jpg",header:"Great atmosphere!",caption:"Have fun with thousands of people!",alt:"Have fun with thousands of people!"},{src:"/img/promo/promo2.jpg",altText:"Listen to the greatest hits!",caption:"Take a part in phenomenal performances.",header:"Listen to the greatest hits"},{src:"/img/promo/promo3.jpg",altText:"Meet stars!",caption:"Meet the biggest music starts live!",header:"Meet stars!"}]),se=function(){return Object(K.jsx)(ae.a,{className:"promoCarousel",items:ne})},oe=r(110),ie=r(117),le=r(108),je=r(109),ue=(r(89),function(e){var t=e.performer,r=e.price,c=e.genre,a=e.day,n=e.image;return Object(K.jsx)("article",{className:"concert",children:Object(K.jsxs)(le.a,{noGutters:!0,children:[Object(K.jsx)(je.a,{xs:"6",children:Object(K.jsx)("div",{className:"concert__image-container",children:Object(K.jsx)("img",{className:"concert__image-container__img",src:n,alt:t})})}),Object(K.jsx)(je.a,{xs:"6",children:Object(K.jsxs)("div",{className:"concert__info",children:[Object(K.jsx)("img",{className:"concert__info__back",src:n,alt:t}),Object(K.jsx)("h2",{className:"concert__info__performer",children:t}),Object(K.jsx)("h3",{className:"concert__info__genre",children:c}),Object(K.jsxs)("p",{className:"concert__info__day-n-price",children:["Day: ",a,", Price: ",r,"$"]})]})})]})})}),de=function(e){var t=e.concerts;return Object(K.jsx)("section",{children:t.map((function(e){return Object(K.jsx)(ue,Object(d.a)({},e),e.id)}))})},be=function(e){Object(M.a)(r,e);var t=Object(W.a)(r);function r(){return Object(H.a)(this,r),t.apply(this,arguments)}return Object(P.a)(r,[{key:"componentDidMount",value:function(){(0,this.props.loadConcerts)()}},{key:"render",value:function(){var e=this.props,t=e.request,r=e.concerts;return t.pending?Object(K.jsx)(oe.a,{animated:!0,color:"primary",value:50}):t.error?Object(K.jsx)(ie.a,{color:"warning",children:t.error}):t.success&&r.length?t.success?Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(de,{concerts:r})}):void 0:Object(K.jsx)(ie.a,{color:"info",children:"No concerts"})}}]),r}(a.a.Component),Oe=be,he=Object(i.b)((function(e){return{concerts:(r=e,r.concerts.data),request:(t=e,t.concerts.request)};var t,r}),(function(e){return{loadConcerts:function(){return e(function(){var e=Object(O.a)(Object(b.a)().mark((function e(t){var r;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:f}),e.prev=1,e.next=4,p.a.get("".concat(m,"/concerts"));case 4:r=e.sent,t({payload:r.data,type:g}),t({type:y}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({error:e.t0.message,type:v});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}}}))(Oe),pe=function(){return Object(K.jsxs)("div",{children:[Object(K.jsx)(se,{}),Object(K.jsxs)(ce.a,{children:[Object(K.jsx)("h1",{children:"Who's on?"}),Object(K.jsx)(he,{})]})]})},me=function(){return Object(K.jsx)("div",{children:Object(K.jsx)("h1",{children:"404 Not Found"})})},xe=function(){return Object(K.jsxs)(ce.a,{children:[Object(K.jsx)("h1",{children:"Prices"}),Object(K.jsx)("p",{children:"Prices may differ according the day of the festival. Remember that ticket includes not only the star performance, but also 10+ workshops. We gathered several genre teachers to help you increase your vocal skills, as well as self confidence."}),Object(K.jsxs)(ie.a,{color:"info",children:["Attention! ",Object(K.jsx)("strong",{children:"Children under 4 can go freely with you without any other fee!"})]}),Object(K.jsx)("h2",{children:"Day one"}),Object(K.jsx)("p",{children:"Price: 25$"}),Object(K.jsx)("p",{children:'Workshops: "Rock Music Style", "How to make you voice grooowl", "Make your voice stronger", "History of Rock"'}),Object(K.jsx)("h2",{children:"Day Two"}),Object(K.jsx)("p",{children:"Price: 25$"}),Object(K.jsx)("p",{children:'Workshops: "Find your real tune", "Find your real YOU", "Fell the music", "Jam session"'}),Object(K.jsx)("h2",{children:"Day three"}),Object(K.jsx)("p",{children:"Price: 50$"}),Object(K.jsx)("p",{children:'Workshops: "Increase your vocal range", "How to properly warmup before singing", "It\'s time for YOU!"'})]})},fe=r(112),ye=r(113),ve=r(114),ge=r(115),_e=(r(90),r(7)),Se=(r(91),function(e){Object(M.a)(r,e);var t=Object(W.a)(r);function r(){var e;Object(H.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).isTaken=function(t){var r=e.props,c=r.seats,a=r.chosenDay;return c.some((function(e){return e.seat===t&&e.day===a}))},e.prepareSeat=function(t){var r=e.props,c=r.chosenSeat,a=r.updateSeat,n=Object(_e.a)(e).isTaken;return t===c?Object(K.jsx)(z.a,{className:"seats__seat",color:"primary",children:t},t):n(t)?Object(K.jsx)(z.a,{className:"seats__seat",disabled:!0,color:"secondary",children:t},t):Object(K.jsx)(z.a,{color:"primary",className:"seats__seat",outline:!0,onClick:function(e){return a(e,t)},children:t},t)},e}return Object(P.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.loadSeats;e(),this.interval=setInterval(e,12e3)}},{key:"stopInterval",value:function(){clearInterval(this.interval)}},{key:"componentWillUnmount",value:function(){this.stopInterval()}},{key:"render",value:function(){var e=this.prepareSeat,t=this.props.requests;return Object(K.jsxs)("div",{children:[Object(K.jsx)("h3",{children:"Pick a seat"}),Object(K.jsxs)("small",{id:"pickHelp",className:"form-text text-muted ml-2",children:[Object(K.jsx)(z.a,{color:"secondary"})," \u2013 seat is already taken"]}),Object(K.jsxs)("small",{id:"pickHelpTwo",className:"form-text text-muted ml-2 mb-4",children:[Object(K.jsx)(z.a,{outline:!0,color:"primary"})," \u2013 it's empty"]}),t.LOAD_SEATS&&t.LOAD_SEATS.success&&Object(K.jsx)("div",{className:"seats",children:Object(u.a)(Array(50)).map((function(t,r){return e(r+1)}))}),t.LOAD_SEATS&&t.LOAD_SEATS.pending&&Object(K.jsx)(oe.a,{animated:!0,color:"primary",value:50}),t.LOAD_SEATS&&t.LOAD_SEATS.error&&Object(K.jsx)(ie.a,{color:"warning",children:"Couldn't load seats..."})]})}}]),r}(a.a.Component)),ke=Se,Ee=Object(i.b)((function(e){return{seats:(t=e,t.seats.data),requests:k(e)};var t}),(function(e){return{loadSeats:function(){return e(L())}}}))(ke),De=function(e){Object(M.a)(r,e);var t=Object(W.a)(r);function r(){var e;Object(H.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={order:{client:"",email:"",day:1,seat:""},isError:!1},e.updateSeat=function(t,r){var c=e.state.order;t.preventDefault(),e.setState({order:Object(d.a)(Object(d.a)({},c),{},{seat:r})})},e.updateTextField=function(t){var r=t.target,c=e.state.order,a=r.value,n=r.name;e.setState({order:Object(d.a)(Object(d.a)({},c),{},Object(S.a)({},n,a))})},e.updateNumberField=function(t){var r=t.target,c=e.state.order,a=r.value,n=r.name;e.setState({order:Object(d.a)(Object(d.a)({},c),{},Object(S.a)({},n,parseInt(a)))})},e.submitForm=function(){var t=Object(O.a)(Object(b.a)().mark((function t(r){var c,a;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=e.state.order,a=e.props.addSeat,r.preventDefault(),c.client&&c.email&&c.day&&c.seat?(a(c),e.setState({order:{client:"",email:"",day:1,seat:""},isError:!1})):e.setState({isError:!0});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(P.a)(r,[{key:"render",value:function(){var e=this.updateSeat,t=this.updateTextField,r=this.updateNumberField,c=this.submitForm,a=this.props.requests,n=this.state,s=n.order,o=n.isError;return Object(K.jsx)(fe.a,{className:"order-ticket-form",onSubmit:c,children:Object(K.jsxs)(le.a,{children:[Object(K.jsxs)(je.a,{xs:"12",md:"6",children:[o&&Object(K.jsx)(ie.a,{color:"warning",children:"There are some errors in you form. Have you fill all the fields? Maybe you forgot to choose your seat?"}),a.ADD_SEAT&&a.ADD_SEAT.error&&!o&&Object(K.jsx)(ie.a,{color:"danger",children:a.ADD_SEAT.error}),a.ADD_SEAT&&a.ADD_SEAT.success&&!o&&Object(K.jsx)(ie.a,{color:"success",children:"You've booked your ticket! Check you email in order to make a payment."}),a.ADD_SEAT&&a.ADD_SEAT.pending&&Object(K.jsx)(oe.a,{animated:!0,className:"mb-5",color:"primary",value:75}),Object(K.jsxs)(ye.a,{children:[Object(K.jsx)(ve.a,{for:"clientEmail",children:"Name"}),Object(K.jsx)(ge.a,{type:"text",value:s.client,name:"client",onChange:t,id:"clientName",placeholder:"John Doe"})]}),Object(K.jsxs)(ye.a,{children:[Object(K.jsx)(ve.a,{for:"clientEmail",children:"Email"}),Object(K.jsx)(ge.a,{type:"email",value:s.email,name:"email",onChange:t,id:"clientEmail",placeholder:"johndoe@example.com"})]}),Object(K.jsxs)(ye.a,{children:[Object(K.jsx)(ve.a,{for:"clientDay",children:"Select which day of festivals are you interested in:"}),Object(K.jsxs)(ge.a,{type:"select",value:s.day,name:"day",onChange:r,id:"exampleSelect",children:[Object(K.jsx)("option",{children:"1"}),Object(K.jsx)("option",{children:"2"}),Object(K.jsx)("option",{children:"3"})]}),Object(K.jsx)("small",{id:"dayHelp",className:"form-text text-muted",children:"Every day of the festival uses individual ticket. You can book only one ticket at the time."})]}),Object(K.jsx)(ye.a,{check:!0,children:Object(K.jsxs)(ve.a,{check:!0,children:[Object(K.jsx)(ge.a,{required:!0,type:"checkbox"})," I agree with ",Object(K.jsx)("a",{href:"#",children:"Terms and conditions"})," and ",Object(K.jsx)("a",{href:"#",children:"Privacy Policy"}),"."]})}),Object(K.jsx)(z.a,{color:"primary",className:"mt-3",children:"Submit"})]}),Object(K.jsx)(je.a,{xs:"12",md:"6",children:Object(K.jsx)(Ee,{chosenDay:s.day,chosenSeat:s.seat,updateSeat:e})})]})})}}]),r}(a.a.Component),Ae=De,Te=Object(i.b)((function(e){return{requests:k(e)}}),(function(e){return{addSeat:function(t){return e(function(e){return function(){var t=Object(O.a)(Object(b.a)().mark((function t(r){var c;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(q({name:"ADD_SEAT"})),t.prev=1,t.next=4,p.a.post("".concat(m,"/seats"),e);case 4:c=t.sent,r({payload:c,type:N}),r(R({name:"ADD_SEAT"})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(C({name:"ADD_SEAT",error:t.t0.message}));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},loadSeats:function(){return e(L())}}}))(Ae),we=function(){return Object(K.jsxs)(ce.a,{children:[Object(K.jsx)("h1",{children:"Order a ticket"}),Object(K.jsx)(Te,{})]})},Ne=function(e){Object(M.a)(r,e);var t=Object(W.a)(r);function r(){return Object(H.a)(this,r),t.apply(this,arguments)}return Object(P.a)(r,[{key:"render",value:function(){return Object(K.jsx)(re,{children:Object(K.jsxs)(Q.c,{children:[Object(K.jsx)(Q.a,{path:"/",exact:!0,component:pe}),Object(K.jsx)(Q.a,{path:"/prices",exact:!0,component:xe}),Object(K.jsx)(Q.a,{path:"/order-a-ticket",exact:!0,component:we}),Object(K.jsx)(Q.a,{component:me})]})})}}]),r}(a.a.Component),qe=Ne,Re=(r(97),r(98),function(){return Object(K.jsx)(i.a,{store:U,children:Object(K.jsx)(o.a,{children:Object(K.jsx)(qe,{})})})});s.a.render(Object(K.jsx)(Re,{}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.abddf0d1.chunk.js.map
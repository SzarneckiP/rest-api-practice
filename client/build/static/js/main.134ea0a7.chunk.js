(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,a){e.exports=a(98)},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(26),o=a.n(c),l=a(33),s=a(21),u=a(25),i=a(49),m=a(24),p=a(7),d=a(11),E=a.n(d),f=a(22),h=a(28),y=a.n(h),b="http://localhost:8000/api",O=function(e){return"app/".concat("concerts","/").concat(e)},v=O("START_REQUEST"),j=O("END_REQUEST"),g=O("ERROR_REQUEST"),_=O("LOAD_CONCERTS"),S={data:[],request:{pending:!1,error:null,success:null}};var k=a(19),D=function(e){return e.seats.requests},A=function(e){return"app/".concat("seats","/").concat(e)},T=A("START_REQUEST"),w=A("END_REQUEST"),x=A("ERROR_REQUEST"),N=A("LOAD_SEATS"),q=A("ADD_SEAT"),R=function(e){return{payload:e,type:T}},C=function(e){return{payload:e,type:w}},L=function(e){return{payload:e,type:x}},F={data:[],requests:[]};var P=Object(u.c)({concerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case _:return Object(p.a)(Object(p.a)({},e),{},{data:Object(m.a)(t.payload)});case v:return Object(p.a)(Object(p.a)({},e),{},{request:{pending:!0,error:null,success:!1}});case j:return Object(p.a)(Object(p.a)({},e),{},{request:{pending:!1,error:null,success:!0}});case g:return Object(p.a)(Object(p.a)({},e),{},{request:{pending:!1,error:t.error,success:!1}});default:return e}},seats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case N:return Object(p.a)(Object(p.a)({},e),{},{data:Object(m.a)(t.payload)});case q:return Object(p.a)(Object(p.a)({},e),{},{data:[].concat(Object(m.a)(e.data),[t.payload])});case T:return Object(p.a)(Object(p.a)({},e),{},{requests:Object(p.a)(Object(p.a)({},e.requests),{},Object(k.a)({},t.payload.name,{pending:!0,error:null,success:!1}))});case w:return Object(p.a)(Object(p.a)({},e),{},{requests:Object(p.a)(Object(p.a)({},e.requests),{},Object(k.a)({},t.payload.name,{pending:!1,error:null,success:!0}))});case x:return Object(p.a)(Object(p.a)({},e),{},{requests:Object(p.a)(Object(p.a)({},e.requests),{},Object(k.a)({},t.payload.name,{pending:!1,error:t.payload.error,success:!1}))});default:return e}}}),H=Object(u.e)(P,Object(u.d)(Object(u.a)(i.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),U=a(14),M=a(15),I=a(18),W=a(17),Q=a(23),J=a(99),X=a(100),Y=a(101),$=a(102),G=a(103),V=a(104),B=a(105),z=a(106),K=function(e){Object(I.a)(a,e);var t=Object(W.a)(a);function a(){var e;Object(U.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(M.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(J.a,{color:"dark",dark:!0,expand:"md"},n.a.createElement(X.a,{href:"/"},"New Wave Festival"),n.a.createElement(Y.a,{onClick:this.toggle}),n.a.createElement($.a,{isOpen:this.state.isOpen,navbar:!0},n.a.createElement(G.a,{className:"ml-auto align-items-center",navbar:!0},n.a.createElement(V.a,null,n.a.createElement(B.a,{href:"/"},"Home")),n.a.createElement(V.a,null,n.a.createElement(B.a,{href:"/prices"},"Prices")),n.a.createElement(V.a,null,n.a.createElement(B.a,{href:"/order-a-ticket"},n.a.createElement(z.a,{outline:!0,color:"primary"},"Order a ticket!")))))))}}]),a}(n.a.Component),Z=function(){return n.a.createElement("footer",{id:"sticky-footer",className:"py-4 mt-5 bg-dark text-white-50"},n.a.createElement("div",{className:"text-center"},n.a.createElement("small",null,"Copyright \xa9 New Wave Festival 2019")))},ee=function(e){var t=e.children;return n.a.createElement("div",null,n.a.createElement(K,null),t,n.a.createElement(Z,null))},te=a(110),ae=a(115),re=(a(87),[{src:"/img/promo/promo1.jpg",header:"Great atmosphere!",caption:"Have fun with thousands of people!",alt:"Have fun with thousands of people!"},{src:"/img/promo/promo2.jpg",altText:"Listen to the greatest hits!",caption:"Take a part in phenomenal performances.",header:"Listen to the greatest hits"},{src:"/img/promo/promo3.jpg",altText:"Meet stars!",caption:"Meet the biggest music starts live!",header:"Meet stars!"}]),ne=function(){return n.a.createElement(ae.a,{className:"promoCarousel",items:re})},ce=a(109),oe=a(116),le=a(107),se=a(108),ue=(a(88),function(e){var t=e.performer,a=e.price,r=e.genre,c=e.day,o=e.image;return n.a.createElement("article",{className:"concert"},n.a.createElement(le.a,{noGutters:!0},n.a.createElement(se.a,{xs:"6"},n.a.createElement("div",{className:"concert__image-container"},n.a.createElement("img",{className:"concert__image-container__img",src:o,alt:t}))),n.a.createElement(se.a,{xs:"6"},n.a.createElement("div",{className:"concert__info"},n.a.createElement("img",{className:"concert__info__back",src:o,alt:t}),n.a.createElement("h2",{className:"concert__info__performer"},t),n.a.createElement("h3",{className:"concert__info__genre"},r),n.a.createElement("p",{className:"concert__info__day-n-price"},"Day: ",c,", Price: ",a,"$")))))}),ie=function(e){var t=e.concerts;return n.a.createElement("section",null,t.map(function(e){return n.a.createElement(ue,Object.assign({key:e.id},e))}))},me=function(e){Object(I.a)(a,e);var t=Object(W.a)(a);function a(){return Object(U.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.loadConcerts)()}},{key:"render",value:function(){var e=this.props,t=e.request,a=e.concerts;return t.pending?n.a.createElement(ce.a,{animated:!0,color:"primary",value:50}):t.error?n.a.createElement(oe.a,{color:"warning"},t.error):t.success&&a.length?t.success?n.a.createElement(n.a.Fragment,null,n.a.createElement(ie,{concerts:a})):void 0:n.a.createElement(oe.a,{color:"info"},"No concerts")}}]),a}(n.a.Component),pe=Object(s.b)(function(e){return{concerts:(a=e,a.concerts.data),request:(t=e,t.concerts.request)};var t,a},function(e){return{loadConcerts:function(){return e(function(){var e=Object(f.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:v}),e.prev=1,e.next=4,y.a.get("".concat(b,"/concerts"));case 4:return a=e.sent,e.next=7,new Promise(function(e,t){return setTimeout(e,2e3)});case 7:t({payload:a.data,type:_}),t({type:j}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({error:e.t0.message,type:g});case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}())}}})(me),de=function(){return n.a.createElement("div",null,n.a.createElement(ne,null),n.a.createElement(te.a,null,n.a.createElement("h1",null,"Who's on?"),n.a.createElement(pe,null)))},Ee=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"404 Not Found"))},fe=function(){return n.a.createElement(te.a,null,n.a.createElement("h1",null,"Prices"),n.a.createElement("p",null,"Prices may differ according the day of the festival. Remember that ticket includes not only the star performance, but also 10+ workshops. We gathered several genre teachers to help you increase your vocal skills, as well as self confidence."),n.a.createElement(oe.a,{color:"info"},"Attention! ",n.a.createElement("strong",null,"Children under 4 can go freely with you without any other fee!")),n.a.createElement("h2",null,"Day one"),n.a.createElement("p",null,"Price: 25$"),n.a.createElement("p",null,'Workshops: "Rock Music Style", "How to make you voice grooowl", "Make your voice stronger", "History of Rock"'),n.a.createElement("h2",null,"Day Two"),n.a.createElement("p",null,"Price: 25$"),n.a.createElement("p",null,'Workshops: "Find your real tune", "Find your real YOU", "Fell the music", "Jam session"'),n.a.createElement("h2",null,"Day three"),n.a.createElement("p",null,"Price: 50$"),n.a.createElement("p",null,'Workshops: "Increase your vocal range", "How to properly warmup before singing", "It\'s time for YOU!"'))},he=a(111),ye=a(112),be=a(113),Oe=a(114),ve=(a(89),a(31)),je=(a(90),function(e){Object(I.a)(a,e);var t=Object(W.a)(a);function a(){var e;Object(U.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).isTaken=function(t){var a=e.props,r=a.seats,n=a.chosenDay;return r.some(function(e){return e.seat===t&&e.day===n})},e.prepareSeat=function(t){var a=e.props,r=a.chosenSeat,c=a.updateSeat,o=Object(ve.a)(e).isTaken;return t===r?n.a.createElement(z.a,{key:t,className:"seats__seat",color:"primary"},t):o(t)?n.a.createElement(z.a,{key:t,className:"seats__seat",disabled:!0,color:"secondary"},t):n.a.createElement(z.a,{key:t,color:"primary",className:"seats__seat",outline:!0,onClick:function(e){return c(e,t)}},t)},e}return Object(M.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.loadSeats)()}},{key:"render",value:function(){var e=this.prepareSeat,t=this.props.requests;return n.a.createElement("div",null,n.a.createElement("h3",null,"Pick a seat"),n.a.createElement("small",{id:"pickHelp",className:"form-text text-muted ml-2"},n.a.createElement(z.a,{color:"secondary"})," \u2013 seat is already taken"),n.a.createElement("small",{id:"pickHelpTwo",className:"form-text text-muted ml-2 mb-4"},n.a.createElement(z.a,{outline:!0,color:"primary"})," \u2013 it's empty"),t.LOAD_SEATS&&t.LOAD_SEATS.success&&n.a.createElement("div",{className:"seats"},Object(m.a)(Array(50)).map(function(t,a){return e(a+1)})),t.LOAD_SEATS&&t.LOAD_SEATS.pending&&n.a.createElement(ce.a,{animated:!0,color:"primary",value:50}),t.LOAD_SEATS&&t.LOAD_SEATS.error&&n.a.createElement(oe.a,{color:"warning"},"Couldn't load seats..."))}}]),a}(n.a.Component)),ge=Object(s.b)(function(e){return{seats:(t=e,t.seats.data),requests:D(e)};var t},function(e){return{loadSeats:function(){return e(function(){var e=Object(f.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(R({name:"LOAD_SEATS"})),e.prev=1,e.next=4,y.a.get("".concat(b,"/seats"));case 4:return a=e.sent,e.next=7,new Promise(function(e){return setTimeout(e,2e3)});case 7:t({payload:a.data,type:N}),t(C({name:"LOAD_SEATS"})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t(L({name:"LOAD_SEATS",error:e.t0.message}));case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}())}}})(je),_e=function(e){Object(I.a)(a,e);var t=Object(W.a)(a);function a(){var e;Object(U.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={order:{client:"",email:"",day:1,seat:""},isError:!1},e.updateSeat=function(t,a){var r=e.state.order;t.preventDefault(),e.setState({order:Object(p.a)(Object(p.a)({},r),{},{seat:a})})},e.updateTextField=function(t){var a=t.target,r=e.state.order,n=a.value,c=a.name;e.setState({order:Object(p.a)(Object(p.a)({},r),{},Object(k.a)({},c,n))})},e.updateNumberField=function(t){var a=t.target,r=e.state.order,n=a.value,c=a.name;e.setState({order:Object(p.a)(Object(p.a)({},r),{},Object(k.a)({},c,parseInt(n)))})},e.submitForm=function(){var t=Object(f.a)(E.a.mark(function t(a){var r,n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=e.state.order,n=e.props.addSeat,a.preventDefault(),r.client&&r.email&&r.day&&r.seat?(n(r),e.setState({order:{client:"",email:"",day:1,seat:""},isError:!1})):e.setState({isError:!0});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e}return Object(M.a)(a,[{key:"render",value:function(){var e=this.updateSeat,t=this.updateTextField,a=this.updateNumberField,r=this.submitForm,c=this.props.requests,o=this.state,l=o.order,s=o.isError;return n.a.createElement(he.a,{className:"order-ticket-form",onSubmit:r},n.a.createElement(le.a,null,n.a.createElement(se.a,{xs:"12",md:"6"},s&&n.a.createElement(oe.a,{color:"warning"},"There are some errors in you form. Have you fill all the fields? Maybe you forgot to choose your seat?"),c.ADD_SEAT&&c.ADD_SEAT.error&&!s&&n.a.createElement(oe.a,{color:"danger"},c.ADD_SEAT.error),c.ADD_SEAT&&c.ADD_SEAT.success&&!s&&n.a.createElement(oe.a,{color:"success"},"You've booked your ticket! Check you email in order to make a payment."),c.ADD_SEAT&&c.ADD_SEAT.pending&&n.a.createElement(ce.a,{animated:!0,className:"mb-5",color:"primary",value:75}),n.a.createElement(ye.a,null,n.a.createElement(be.a,{for:"clientEmail"},"Name"),n.a.createElement(Oe.a,{type:"text",value:l.client,name:"client",onChange:t,id:"clientName",placeholder:"John Doe"})),n.a.createElement(ye.a,null,n.a.createElement(be.a,{for:"clientEmail"},"Email"),n.a.createElement(Oe.a,{type:"email",value:l.email,name:"email",onChange:t,id:"clientEmail",placeholder:"johndoe@example.com"})),n.a.createElement(ye.a,null,n.a.createElement(be.a,{for:"clientDay"},"Select which day of festivals are you interested in:"),n.a.createElement(Oe.a,{type:"select",value:l.day,name:"day",onChange:a,id:"exampleSelect"},n.a.createElement("option",null,"1"),n.a.createElement("option",null,"2"),n.a.createElement("option",null,"3")),n.a.createElement("small",{id:"dayHelp",className:"form-text text-muted"},"Every day of the festival uses individual ticket. You can book only one ticket at the time.")),n.a.createElement(ye.a,{check:!0},n.a.createElement(be.a,{check:!0},n.a.createElement(Oe.a,{required:!0,type:"checkbox"})," I agree with ",n.a.createElement("a",{href:"#"},"Terms and conditions")," and ",n.a.createElement("a",{href:"#"},"Privacy Policy"),".")),n.a.createElement(z.a,{color:"primary",className:"mt-3"},"Submit")),n.a.createElement(se.a,{xs:"12",md:"6"},n.a.createElement(ge,{chosenDay:l.day,chosenSeat:l.seat,updateSeat:e}))))}}]),a}(n.a.Component),Se=Object(s.b)(function(e){return{requests:D(e)}},function(e){return{addSeat:function(t){return e(function(e){return function(){var t=Object(f.a)(E.a.mark(function t(a){var r;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(R({name:"ADD_SEAT"})),t.prev=1,t.next=4,y.a.post("".concat(b,"/seats"),e);case 4:return r=t.sent,t.next=7,new Promise(function(e){return setTimeout(e,1e3)});case 7:a({payload:r,type:q}),a(C({name:"ADD_SEAT"})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a(L({name:"ADD_SEAT",error:t.t0.message}));case 14:case"end":return t.stop()}},t,null,[[1,11]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(_e),ke=function(){return n.a.createElement(te.a,null,n.a.createElement("h1",null,"Order a ticket"),n.a.createElement(Se,null))},De=function(e){Object(I.a)(a,e);var t=Object(W.a)(a);function a(){return Object(U.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"render",value:function(){return n.a.createElement(ee,null,n.a.createElement(Q.c,null,n.a.createElement(Q.a,{path:"/",exact:!0,component:de}),n.a.createElement(Q.a,{path:"/prices",exact:!0,component:fe}),n.a.createElement(Q.a,{path:"/order-a-ticket",exact:!0,component:ke}),n.a.createElement(Q.a,{component:Ee})))}}]),a}(n.a.Component),Ae=(a(96),a(97),function(){return n.a.createElement(s.a,{store:H},n.a.createElement(l.a,null,n.a.createElement(De,null)))});o.a.render(n.a.createElement(Ae,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.134ea0a7.chunk.js.map
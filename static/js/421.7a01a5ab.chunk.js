(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[421],{1421:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ue}});var r,a,o,i,s,c,l,u,f,d,p=t(2791),h=t(1614),m=t(168),b=t(225),g=t(3677),x=(0,b.Z)(g.Z)(r||(r=(0,m.Z)(["\n  margin-top: 25px;\n  padding-top: 10px;\n  padding-bottm: 10px;\n  .MuiInput-underline::before {\n    border-color: #fff;\n  }\n  .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before {\n    border-color: #fff;\n  }\n  .MuiFormLabel-root,\n  .MuiInputBase-root {\n    color: #fff;\n  }\n"]))),v=t(5048),Z=t(7491),y=t(4554),j=t(184),w=function(){var e=(0,v.I0)();return(0,j.jsx)(y.Z,{children:(0,j.jsx)(x,{type:"text",id:"filter",placeholder:"Find contacts by name",onChange:function(n){var t=n.currentTarget.value;e((0,Z.G)(t))},autoComplete:"off",label:"Find contacts by name",variant:"standard"})})},M=t(5861),S=t(9439),C=t(4687),k=t.n(C),O=t(5705),T=t(6727),I=t(3524),E=function(e,n){if(!e.length)return!1;var t=e.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}));return console.log(t),t},V=function(e,n){return!!e.filter((function(e){return e.name===n.name&&e.number!==n.number})).length},_=t(8482),H=t(6151),F=b.Z.form({display:"flex",flexDirection:"column",maxWidth:"500px",gap:"20px",marginTop:"25px"}),P=(0,b.Z)(g.Z)(a||(a=(0,m.Z)(["\n  padding-top: 10px;\n  padding-bottm: 10px;\n  .MuiInput-underline::before {\n    border-color: #fff;\n  }\n  .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before {\n    border-color: #fff;\n  }\n  .MuiFormLabel-root,\n  .MuiInputBase-root {\n    color: #fff;\n  }\n"]))),B=b.Z.div({marginTop:"10px",color:"red"}),L=t(9315),z=function(){var e=(0,_.wY)().data,n=(0,_.Tn)(),t=(0,S.Z)(n,2),r=t[0],a=t[1],o=a.isError,i=a.error,s=a.status,c=(0,L.Z)(),l=c.toggleState,u=c.showErrorMessage,f=c.showSuccessfulMessage,d=c.showInfoMessage,h=(0,p.useState)(!1),m=(0,S.Z)(h,2),b=m[0],g=m[1],x=T.Ry().shape({name:T.Z_().matches(I.cS,"Invalid name").required("Name is required"),number:T.Z_().matches(I.Oj,"Invalid phone number").required("Phone number is required")}),v=(0,O.TA)({initialValues:{name:"",number:""},validationSchema:x,onSubmit:function(){var n=(0,M.Z)(k().mark((function n(t,a){var o;return k().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=a.resetForm,n.next=3,E(e,t.name);case 3:if(!n.sent){n.next=8;break}return g(!0),l(),n.abrupt("return");case 8:return n.prev=8,n.next=11,r(t);case 11:l(),o(),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(8),l();case 18:case"end":return n.stop()}}),n,null,[[8,15]])})));return function(e,t){return n.apply(this,arguments)}}()});return(0,j.jsxs)(j.Fragment,{children:[o&&u(i.status,I.LJ),b&&d("This user already exists"),"fulfilled"===s&&f("The contact was successfully created."),(0,j.jsxs)(F,{onSubmit:v.handleSubmit,children:[(0,j.jsxs)(y.Z,{children:[(0,j.jsx)(P,{id:"name",name:"name",placeholder:"Name",autoComplete:"off",onChange:v.handleChange,onBlur:v.handleBlur,value:v.values.name,label:"name",variant:"standard"}),v.touched.name&&v.errors.name&&(0,j.jsx)(B,{children:v.errors.name})]}),(0,j.jsxs)(y.Z,{children:[(0,j.jsx)(P,{id:"number",name:"number",placeholder:"Number",autoComplete:"off",onChange:v.handleChange,onBlur:v.handleBlur,value:v.values.number,label:"number",variant:"standard"}),v.touched.number&&v.errors.number&&(0,j.jsx)("div",{children:(0,j.jsx)(B,{children:v.errors.number})})]}),(0,j.jsx)(H.Z,{variant:"contained",type:"submit",children:"Add contact"})]})]})},D=t(2007),N=t.n(D),R=b.Z.ul(o||(o=(0,m.Z)(["\n  margin-bottom: 15px;\n  padding: 25px 0;\n"]))),A=b.Z.li(i||(i=(0,m.Z)(["\n  display: flex;\n  gap: 50px;\n  align-items: center;\n  margin-bottom: 50px;\n  color: #fff;\n"]))),q=b.Z.button(s||(s=(0,m.Z)(["\n  background-color: transparent;\n  position: relative;\n  border: none;\n  cursor: pointer;\n  fill: #fff;\n  &::after {\n    content: 'delete';\n    position: absolute;\n    top: -130%;\n    left: 50%;\n    transform: translateX(-50%);\n    width: fit-content;\n    height: fit-content;\n    background-color: rgb(168, 7, 7);\n    padding: 4px 8px;\n    border-radius: 5px;\n    transition: 0.2s linear;\n    transition-delay: 0.2s;\n    color: white;\n    text-transform: uppercase;\n    font-size: 12px;\n    opacity: 0;\n    visibility: hidden;\n  }\n  & > .icon {\n    transform: scale(1.2);\n    transition: 0.2s linear;\n  }\n  &:hover > .icon {\n    transform: scale(1.5);\n  }\n\n  &:hover > .icon path {\n    fill: rgb(168, 7, 7);\n  }\n\n  &:hover::after {\n    visibility: visible;\n    opacity: 1;\n    top: -160%;\n  }\n"]))),W=b.Z.button(c||(c=(0,m.Z)([""]))),Y=b.Z.span(l||(l=(0,m.Z)([""]))),U=b.Z.span(u||(u=(0,m.Z)([""]))),G=b.Z.span(f||(f=(0,m.Z)(["\n  color: #fff;\n"]))),J=t(3654),X=["title","titleId"];function K(){return K=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K.apply(this,arguments)}function Q(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function $(e,n){var t=e.title,r=e.titleId,a=Q(e,X);return p.createElement("svg",K({viewBox:"0 0 15 17.5",height:17.5,width:15,xmlns:"http://www.w3.org/2000/svg",className:"icon",ref:n,"aria-labelledby":r},a),t?p.createElement("title",{id:r},t):null,d||(d=p.createElement("path",{transform:"translate(-2.5 -1.25)",d:"M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z",id:"Fill"})))}var ee,ne,te=p.forwardRef($),re=(t.p,(0,t(9201).Z)((0,j.jsx)("path",{d:"M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z"}),"EditNote")),ae=t(6524),oe=(0,b.Z)(ae.Z)(ee||(ee=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n"]))),ie=(0,b.Z)(y.Z)(ne||(ne=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  gap: 15px;\n  width: 400px;\n  background-color: #fff;\n"]))),se=function(e){var n=e.contactData,t=e.editeModal,r=e.toggleEditModal,a=(0,p.useState)(n.name),o=(0,S.Z)(a,2),i=o[0],s=o[1],c=(0,p.useState)(n.number),l=(0,S.Z)(c,2),u=l[0],f=l[1],d=(0,p.useState)(!1),h=(0,S.Z)(d,2),m=h[0],b=h[1],x=(0,_.wY)().data,v=(0,_.wv)(),Z=(0,S.Z)(v,1)[0],y=(0,L.Z)(),w=y.toggleState,C=y.showInfoMessage,O=function(){var e=(0,M.Z)(k().mark((function e(t){var r,a,o;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,r={contactId:n.id,contact:{name:i,number:u}},a=x&&E(x,i),o=V(x,r.contact),!a||o){e.next=9;break}return w(),b(!0),e.abrupt("return");case 9:return e.next=11,Z(r);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsx)(oe,{open:t,onClose:r,onSubmit:O,children:(0,j.jsxs)(ie,{component:"form",children:[(0,j.jsx)(g.Z,{placeholder:"name",value:i,onChange:function(e){return s(e.target.value)},type:"text"}),(0,j.jsx)(g.Z,{placeholder:"number",value:u,onChange:function(e){return f(e.target.value)},type:"text"}),(0,j.jsx)(H.Z,{variant:"contained",type:"submit",children:"Save"}),m&&C("A user with the same name already exists")]})})};se.propsTypes={contactData:N().object,editeModal:N().bool,toggleEditModal:N().func};var ce=function(e){var n=e.contacts,t=(0,p.useState)(!1),r=(0,S.Z)(t,2),a=r[0],o=r[1],i=(0,p.useState)(null),s=(0,S.Z)(i,2),c=s[0],l=s[1],u=(0,_.Nt)(),f=(0,S.Z)(u,2),d=f[0],h=f[1].status,m=(0,L.Z)(),b=m.toggleState,g=m.showSuccessfulMessage,x=(0,v.v9)(J.B4),Z=function(e){o(!a),l(e)},y=n&&function(e,n){var t=n.trim().toLowerCase();if(!e.length||!t.length)return e;var r=e.filter((function(e){return e.name.toLowerCase().includes(t)}));return r.length?r:[]}(n,x),w=y.length>0,M=n.length>0&&!y.length>0;return(0,j.jsxs)(j.Fragment,{children:[w&&(0,j.jsx)(R,{children:y.map((function(e){var n=e.name,t=e.number,r=e.id;return(0,j.jsxs)(A,{children:[(0,j.jsx)(Y,{children:n}),(0,j.jsx)(U,{children:t}),(0,j.jsx)(W,{onClick:function(){return Z({name:n,number:t,id:r})},children:(0,j.jsx)(re,{})}),(0,j.jsx)(q,{size:"small",onClick:function(){return function(e){d(e),b()}(r)},children:(0,j.jsx)(te,{})})]},r)}))}),a&&(0,j.jsx)(se,{contactData:c,editeModal:a,toggleEditModal:Z}),M&&(0,j.jsx)(G,{children:"There is no matches"}),"fulfilled"===h&&g("The contact was successfully deleted.")]})};ce.propsTypes={contacts:N().object};var le=t(6137),ue=function(){var e=(0,_.wY)(),n=e.data,t=e.isFetching,r=e.isError,a=e.error,o=e.refetch,i=(0,v.v9)(J.dy);return(0,p.useEffect)((function(){o()}),[i,o]),(0,j.jsxs)(h.Z,{children:[t&&(0,j.jsx)(le.Z,{}),r&&a.message,(0,j.jsx)(z,{}),(0,j.jsx)(w,{}),!t&&n.length>0&&(0,j.jsx)(ce,{contacts:n})]})}},9315:function(e,n,t){"use strict";var r=t(9439),a=t(2791),o=t(3543),i=t(9658),s=t(184);n.Z=function(){var e=(0,a.useState)(!1),n=(0,r.Z)(e,2),t=n[0],c=n[1],l=function(){c(!t)},u=function(e,n){return(0,s.jsx)(o.Z,{open:t,autoHideDuration:3e3,onClose:l,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,s.jsx)(i.Z,{variant:"filled",severity:n,children:e})})};return{toggleState:l,showErrorMessage:function(e,n){var t=function(e,n){return n.filter((function(n){return n.code===e}))}(e,n);return u(t[0].message,"error")},showSuccessfulMessage:function(e){return u(e,"success")},showInfoMessage:function(e){return u(e,"info")}}}},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=421.7a01a5ab.chunk.js.map
(this["webpackJsonpquotes-project"]=this["webpackJsonpquotes-project"]||[]).push([[3],{36:function(e,t,n){e.exports={form:"NewCommentForm_form__1elHr",loading:"NewCommentForm_loading__31Gs4",control:"NewCommentForm_control__16tCL",actions:"NewCommentForm_actions__1dOrC"}},37:function(e,t,n){e.exports={item:"CommentItem_item__3kllh"}},38:function(e,t,n){e.exports={comments:"CommentsList_comments__2YIY_"}},39:function(e,t,n){e.exports={comments:"Comments_comments__3gwGz"}},41:function(e,t,n){"use strict";n.r(t);var c=n(6),s=n(0),o=n(2),m=n(13),r=n(14),a=n(12),i=n(36),d=n.n(i),j=n(1),l=function(e){var t=Object(m.a)(r.a),n=t.sendRequest,c=t.status,o=t.error,i=e.onAddedComment,l=Object(s.useRef)();Object(s.useEffect)((function(){"completed"!==c||o||i()}),[c,o,i]);var u=function(t){t.preventDefault();var c=l.current.value;n({commentData:{text:c},quoteId:e.quoteId})};return Object(j.jsxs)("form",{className:d.a.form,onSubmit:u,children:["pending"===c&&Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(a.default,{})}),Object(j.jsxs)("div",{className:d.a.control,onSubmit:u,children:[Object(j.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(j.jsx)("textarea",{id:"comment",rows:"5",ref:l})]}),Object(j.jsx)("div",{className:d.a.actions,children:Object(j.jsx)("button",{className:"btn",children:"Add Comment"})})]})},u=n(37),b=n.n(u),O=function(e){return Object(j.jsx)("li",{className:b.a.item,children:Object(j.jsx)("p",{children:e.text})})},x=n(38),f=n.n(x),h=function(e){return Object(j.jsx)("ul",{className:f.a.comments,children:e.comments.map((function(e){return Object(j.jsx)(O,{text:e.text},e.id)}))})},_=n(39),p=n.n(_);t.default=function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],d=Object(m.a)(r.c,!0),u=d.sendRequest,b=d.status,O=d.data,x=Object(o.i)().quoteId;Object(s.useEffect)((function(){u(x)}),[u,x]);var f,_=Object(s.useCallback)((function(){u(x)}),[u,x]);return"pending"===b&&(f=Object(j.jsxs)("div",{className:"centered",children:[Object(j.jsx)(a.default,{}),";"]})),"completed"===b&&(O||O.length>0)&&(f=Object(j.jsx)(h,{comments:O})),"completed"!==b||O&&0!==O.length||(f=Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)("p",{children:"No comments yet!"})})),Object(j.jsxs)("section",{className:p.a.comments,children:[Object(j.jsx)("h2",{children:"User Comments"}),!n&&Object(j.jsx)("button",{className:"btn",onClick:function(){i(!0)},children:"Add a Comment"}),n&&Object(j.jsx)(l,{quoteId:x,onAddedComment:_}),f]})}}}]);
//# sourceMappingURL=3.d08aee34.chunk.js.map
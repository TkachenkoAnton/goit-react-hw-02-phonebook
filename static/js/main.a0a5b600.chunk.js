(this["webpackJsonpmacpro_goit-react-hw-02-phonebook"]=this["webpackJsonpmacpro_goit-react-hw-02-phonebook"]||[]).push([[0],{24:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),s=n(10),i=n(2),u=n(3),h=n(5),j=n(4),b=n(9),l=n.n(b),d=n(0),p=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={value:""},t.handleChange=function(e){var n=e.target.value;t.setState({value:n})},t.handleSubmit=function(e){e.preventDefault();var n=t.state.value,a=l.a.generate();t.props.onSubmit({name:n,id:a}),t.reset()},t.reset=function(){t.setState({value:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)("h3",{children:"Name"}),Object(d.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.contacts;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)("ul",{children:t.map((function(t){var e=t.name,n=t.id;return Object(d.jsx)("li",{children:e},n)}))})]})}}]),n}(a.Component),v=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:""},t.getAndAddContactNameAndId=function(e){t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(s.a)(n))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(p,{onSubmit:this.getAndAddContactNameAndId}),Object(d.jsx)(O,{contacts:this.state.contacts})]})}}]),n}(a.Component);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.a0a5b600.chunk.js.map
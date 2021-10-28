(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={input:"ContactForm_input__1h-5c",button:"ContactForm_button__1g5BX"}},,,,,function(t,e,n){t.exports={list:"ContactsList_list__2oVta",item:"ContactsList_item__UwP8t",btn:"ContactsList_btn__PyQDv"}},,,,function(t,e,n){t.exports={input:"Filter_input__39R7k"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),s=(n(17),n(12)),o=n(3),u=n(4),l=n(6),d=n(5),b=(n(18),n(10)),m=n(2),h=n.n(m),j=n(22),p=n(0),f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a={name:n.name,number:n.number,id:Object(j.a)()};t.setState({contact:a}),t.props.addNewContact(a),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.handleSubmit,c=this.handleChange;return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{className:h.a.form,onSubmit:a,children:[Object(p.jsxs)("label",{children:["Name",Object(p.jsx)("input",{className:h.a.input,onChange:c,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{children:["Number",Object(p.jsx)("input",{className:h.a.input,onChange:c,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{type:"submit",className:h.a.button,children:"Add contact"})]})})}}]),n}(a.Component),C=n(7),O=n.n(C);function v(t){var e=t.contacts,n=t.handleDelContact;return Object(p.jsx)("ul",{className:O.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:O.a.item,children:[Object(p.jsx)("p",{children:a}),Object(p.jsx)("p",{children:c}),Object(p.jsx)("button",{className:O.a.btn,type:"button",onClick:function(){return n(e)},children:"X"})]},e)}))})}var x=n(11),g=n.n(x);function _(t){var e=t.filter,n=t.onChange;return Object(p.jsxs)("label",{children:["Find contacts by name:",Object(p.jsx)("input",{className:g.a.input,type:"text",name:"filter",value:e,onChange:n})]})}var y=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.addNewContact=function(e){var n=t.state.contacts,a=e.name;n.some((function(t){return t.name===e.name}))?alert("Sorry, ".concat(a," is already in contacts list")):t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(s.a)(n),[e])}}))},t.handleDelContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onChangeFilter=function(e){t.setState({filter:e.target.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.handleDelContact,n=this.addNewContact,a=this.onChangeFilter,c=this.getFilteredContacts();return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h2",{children:"Phonebook"}),Object(p.jsx)(f,{addNewContact:n}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(_,{filter:t,onChange:a}),Object(p.jsx)(v,{contacts:c,handleDelContact:e})]})}}]),n}(a.Component);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.4e0900b8.chunk.js.map
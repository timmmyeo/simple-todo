(this["webpackJsonpsimple-todo"]=this["webpackJsonpsimple-todo"]||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),i=(a(28),a(21)),o=a(9),u=a(10),m=a(8),s=a(12),d=a(11),h=(a(29),a(7));var b=function(){return r.a.createElement("div",null,r.a.createElement(h.a,{bg:"dark",sticky:"top",expand:"lg",variant:"dark"},r.a.createElement(h.a.Brand,{href:"#home"},"Todo App")))};var p=function(){return r.a.createElement("div",null,r.a.createElement(h.a,{fixed:"bottom"},r.a.createElement(h.a.Toggle,null),r.a.createElement(h.a.Collapse,{className:"justify-content-end"},r.a.createElement(h.a.Text,null,"Made by Timothy Yeo"))))},v=a(18),E=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{border:"dark",bg:"light"},r.a.createElement(v.a.Body,null,this.props.text)))}}]),a}(r.a.Component),f=a(15),j=a(22),y=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={text:""},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({text:t})}},{key:"handleSubmit",value:function(e){e.preventDefault(),""==this.state.text?alert("Textbox is empty :/"):this.props.onSubmit(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,{onSubmit:this.handleSubmit},r.a.createElement(f.a.Group,{controlId:"newItemForm"},r.a.createElement(f.a.Control,{value:this.state.text,type:"text",placeholder:"New Item",onChange:this.handleChange})),r.a.createElement(j.a,{variant:"primary",type:"submit"},"Add")))}}]),a}(r.a.Component),O=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={todos:[]},e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){this.setState((function(t){return{todos:[].concat(Object(i.a)(t.todos),[e])}}))}},{key:"render",value:function(){var e=this.state.todos.map((function(e){return r.a.createElement(E,{text:e})}));return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("br",null),r.a.createElement(y,{onSubmit:this.handleSubmit}),r.a.createElement("br",null),e,r.a.createElement(p,null))}}]),a}(r.a.Component);a(33);c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.410bc983.chunk.js.map
(this["webpackJsonpassignment3-bank-of-react"]=this["webpackJsonpassignment3-bank-of-react"]||[]).push([[0],{31:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(25),i=n.n(r),s=(n(31),n(23)),o=n(2),u=n(9),j=n(10),b=n(11),d=n(12),l=n(5),O=n(3),h=n(0),p=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(c.Component),m=p,x=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(h.jsx)("h1",{children:"Bank of React"}),Object(h.jsx)(l.b,{to:"/userProfile",children:"User Profile"}),Object(h.jsx)("br",{}),Object(h.jsx)(l.b,{to:"/login",children:"Login"}),Object(h.jsx)("br",{}),Object(h.jsx)(l.b,{to:"/credits",children:"Credits"}),Object(h.jsx)("br",{}),Object(h.jsx)(l.b,{to:"/debits",children:"Debits"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(m,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),f=x,v=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"User Profile"}),Object(h.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(h.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(h.jsx)("br",{}),Object(h.jsx)(l.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),g=v,S=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).handleChange=function(t){var e=Object(o.a)({},c.state.user);e.userName=t.target.value,c.setState({user:e})},c.handleSubmit=function(t){t.preventDefault(),c.props.mockLogIn(c.state.user),c.setState({redirect:!0})},c.state={user:{userName:c.props.user.userName,password:""},redirect:!1},c}return Object(j.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(h.jsx)(O.a,{to:"/userProfile"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"User Name"}),Object(h.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",name:"password"})]}),Object(h.jsx)("button",{children:"Log In"})]}),Object(h.jsx)("br",{}),Object(h.jsx)(l.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),B=n(19),F=function(t){var e=t.credits,n=t.addCredit,a=t.accountBalance,r=Object(c.useState)({description:"",amount:0}),i=Object(B.a)(r,2),s=i[0],u=i[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Credits"}),Object(h.jsxs)("div",{children:["Account Balance: $",parseFloat(a).toFixed(2)]}),Object(h.jsx)("ul",{children:e.map((function(t,e){return Object(h.jsxs)("li",{children:[t.description," - $",parseFloat(t.amount).toFixed(2)," - ",t.date.slice(0,10)]},e)}))}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=Object(o.a)(Object(o.a)({},s),{},{date:(new Date).toISOString().split("T")[0],amount:parseFloat(s.amount).toFixed(2)});n(e),u({description:"",amount:0})},children:[Object(h.jsx)("input",{type:"text",placeholder:"Description",value:s.description,onChange:function(t){return u(Object(o.a)(Object(o.a)({},s),{},{description:t.target.value}))}}),Object(h.jsx)("input",{type:"number",placeholder:"Amount",value:s.amount,onChange:function(t){return u(Object(o.a)(Object(o.a)({},s),{},{amount:t.target.value}))}}),Object(h.jsx)("button",{type:"submit",children:"Add Credit"})]}),Object(h.jsx)("br",{}),Object(h.jsx)(l.b,{to:"/",children:"Return to Home"})]})},C=function(t){var e=t.debits,n=t.addDebit,a=t.accountBalance,r=Object(c.useState)({description:"",amount:0}),i=Object(B.a)(r,2),s=i[0],u=i[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Debits"}),Object(h.jsxs)("div",{children:["Account Balance: $",parseFloat(a).toFixed(2)]}),Object(h.jsx)("ul",{children:e.map((function(t,e){return Object(h.jsxs)("li",{children:[t.description," - $",parseFloat(t.amount).toFixed(2)," - ",t.date.slice(0,10)]},e)}))}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=Object(o.a)(Object(o.a)({},s),{},{date:(new Date).toISOString().split("T")[0],amount:parseFloat(s.amount).toFixed(2)});n(e),u({description:"",amount:0})},children:[Object(h.jsx)("input",{type:"text",placeholder:"Description",value:s.description,onChange:function(t){return u(Object(o.a)(Object(o.a)({},s),{},{description:t.target.value}))}}),Object(h.jsx)("input",{type:"number",placeholder:"Amount",value:s.amount,onChange:function(t){return u(Object(o.a)(Object(o.a)({},s),{},{amount:t.target.value}))}}),Object(h.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(h.jsx)("br",{}),Object(h.jsx)(l.b,{to:"/",children:"Return to Home"})]})},L=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).mockLogIn=function(e){var n=Object(o.a)({},t.state.currentUser);n.userName=e.userName,t.setState({currentUser:n})},t.calculateAccountBalance=function(){return t.state.creditList.reduce((function(t,e){return t+parseFloat(e.amount)}),0)-t.state.debitList.reduce((function(t,e){return t+parseFloat(e.amount)}),0)},t.addCredit=function(e){var n=parseFloat(e.amount),c=Object(o.a)(Object(o.a)({},e),{},{amount:n});t.setState({creditList:[].concat(Object(s.a)(t.state.creditList),[c])},(function(){var e=t.calculateAccountBalance();t.setState({accountBalance:e})}))},t.addDebit=function(e){var n=parseFloat(e.amount),c=Object(o.a)(Object(o.a)({},e),{},{amount:n});t.setState({debitList:[].concat(Object(s.a)(t.state.debitList),[c])},(function(){var e=t.calculateAccountBalance();t.setState({accountBalance:e})}))},t.state={accountBalance:1234567.89,creditList:[],debitList:[],currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://johnnylaicode.github.io/api/credits.json").then((function(t){return t.json()})).then((function(e){var n=e.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{amount:parseFloat(t.amount).toFixed(2)})}));t.setState({creditList:n},(function(){var e=t.calculateAccountBalance();t.setState({accountBalance:parseFloat(e).toFixed(2)})}))})).catch((function(t){return console.error("Error fetching credits:",t)})),fetch("https://johnnylaicode.github.io/api/debits.json").then((function(t){return t.json()})).then((function(e){var n=e.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{amount:parseFloat(t.amount)})}));t.setState({debitList:n},(function(){var e=t.calculateAccountBalance();t.setState({accountBalance:parseFloat(e).toFixed(2)})}))})).catch((function(t){return console.error("Error fetching debits:",t)}))}},{key:"render",value:function(){var t=this;return Object(h.jsx)(l.a,{basename:"/assignment3-bank-of-react",children:Object(h.jsxs)("div",{children:[Object(h.jsx)(O.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(f,{accountBalance:t.state.accountBalance})}}),Object(h.jsx)(O.b,{exact:!0,path:"/userProfile",render:function(){return Object(h.jsx)(g,{userName:t.state.currentUser.userName,memberSince:t.state.currentUser.memberSince})}}),Object(h.jsx)(O.b,{exact:!0,path:"/login",render:function(){return Object(h.jsx)(S,{user:t.state.currentUser,mockLogIn:t.mockLogIn})}}),Object(h.jsx)(O.b,{exact:!0,path:"/credits",render:function(){return Object(h.jsx)(F,{credits:t.state.creditList,addCredit:t.addCredit,accountBalance:t.state.accountBalance})}}),Object(h.jsx)(O.b,{exact:!0,path:"/debits",render:function(){return Object(h.jsx)(C,{debits:t.state.debitList,addDebit:t.addDebit,accountBalance:t.state.accountBalance})}})]})})}}]),n}(c.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),y()}},[[41,1,2]]]);
//# sourceMappingURL=main.8988e82d.chunk.js.map
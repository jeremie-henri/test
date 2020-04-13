(this["webpackJsonpprojet-web"]=this["webpackJsonpprojet-web"]||[]).push([[0],{14:function(e,t,n){e.exports=n(24)},19:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),c=n.n(s),i=(n(19),n(6)),o=n.n(i),u=n(7),l=n(2),m=n(3),p=n(4),h=n(5),d=n(13),b=n(1),f=new function e(){Object(l.a)(this,e),Object(b.i)(this,{loading:!0,isLoggedIn:!1,username:""})},g=n(11),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inputField"},r.a.createElement("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}}))}}]),n}(r.a.Component),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={username:"",password:"",buttonDisabled:!1},a}return Object(m.a)(n,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(g.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.password){e.next=4;break}return e.abrupt("return");case 4:return this.setState({buttonDisabled:!1}),e.prev=5,e.next=8,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 8:return t=e.sent,e.next=11,t.json();case 11:(n=e.sent)&&n.success?(f.isLoggedIn=!0,f.username=n.username):n&&!1===n.success&&(this.resetForm(),alert(n.msg)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),this.resetForm();case 18:case"end":return e.stop()}}),e,this,[[5,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"doRegister",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.password){e.next=4;break}return e.abrupt("return");case 4:return this.setState({buttonDisabled:!1}),e.prev=5,e.next=8,fetch("/register",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 8:return t=e.sent,e.next=11,t.json();case 11:(n=e.sent)&&n.success?(f.isLoggedIn=!0,f.username=n.username):n&&!1===n.success&&(this.resetForm(),alert(n.msg)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0),this.resetForm();case 19:case"end":return e.stop()}}),e,this,[[5,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginForm"},"Log in",r.a.createElement(v,{type:"text",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),r.a.createElement(v,{type:"password",placeholder:"Password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),r.a.createElement("div",{className:"submitButton"},r.a.createElement("button",{className:"btn",onClick:function(){return e.doLogin()}},"Login"),r.a.createElement("button",{className:"btn",onClick:function(){return e.doRegister()}},"Register")))}}]),n}(r.a.Component),j=n(9),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.color;return r.a.createElement("td",{className:"td_square",onClick:this.props.handleClick},r.a.createElement("div",{style:{color:e,backgroundColor:e,borderRadius:"50%",borderColor:e,height:25}}))}}]),n}(r.a.Component),k=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isWhite:!0,grid:Array(19).fill().map((function(e){return Array(19).fill("+")}))},a.handleClick=a.handleClick.bind(Object(j.a)(a)),a.ResetGrid=a.ResetGrid.bind(Object(j.a)(a)),a}return Object(m.a)(n,[{key:"ResetGrid",value:function(){var e=Array(19).fill().map((function(e){return Array(19).fill("+")}));this.setState({grid:e})}},{key:"handleClick",value:function(e,t){if("+"===this.state.grid[e][t]){var n=this.state.grid;function a(a,r,s){for(var c=0,i=e,o=t;void 0!==n[i]&&n[i][o]===s;)c+=1,o+=r,i+=a;return c}n[e][t]=!0===this.state.isWhite?"w":"b",this.setState({grid:n,isWhite:!this.state.isWhite});var r=a(0,1,"w")+a(0,-1,"w")-1,s=a(0,1,"b")+a(0,-1,"b")-1,c=a(1,0,"w")+a(-1,0,"w")-1,i=a(1,0,"b")+a(-1,0,"b")-1,o=a(1,1,"w")+a(-1,-1,"w")-1,u=a(1,1,"b")+a(-1,-1,"b")-1,l=a(1,1,"w")+a(-1,-1,"w")-1,m=a(-1,1,"b")+a(1,-1,"b")-1;(r>=5||c>=5||o>=5||l>=5)&&(setTimeout((function(){alert("white wins")}),1),this.ResetGrid()),(s>=5||i>=5||u>=5||m>=5)&&(setTimeout((function(){alert("black wins")}),1),this.ResetGrid())}}},{key:"render",value:function(){var e=this,t=this.state.grid,n=t.map((function(n,a){return r.a.createElement("tr",{key:"row_"+a},n.map((function(n,s){var c="+"===t[a][s]?"#20555d":"w"===t[a][s]?"white":"black";return r.a.createElement(y,{handleClick:function(){return e.handleClick(a,s)},color:c,key:a+"_"+s})})))}));return r.a.createElement("div",{className:"div_grid"},r.a.createElement("div",{className:"sub_div"},r.a.createElement("table",{className:"table_grid",cellSpacing:"0"},r.a.createElement("tbody",null,n))),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.ResetGrid},"RESET"))}}]),n}(r.a.Component),E=(n(23),n(12)),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={message:""},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{action:".",onSubmit:function(t){t.preventDefault(),e.props.onSubmitMessage(e.state.message),e.setState({message:""})}},r.a.createElement("input",{type:"text",placeholder:"Enter message...",value:this.state.message,onChange:function(t){return e.setState({message:t.target.value})}}),r.a.createElement("input",{type:"submit",value:"Send"}))}}]),n}(a.Component),C=function(e){var t=e.name,n=e.message;return r.a.createElement("p",null,r.a.createElement("strong",null,t)," ",r.a.createElement("em",null,n))},S="ws://www.jeremie-henri-test.glitch.me:8080",x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:f.username,messages:[]},e.ws=new WebSocket(S),e.addMessage=function(t){return e.setState((function(e){return{messages:[t].concat(Object(E.a)(e.messages))}}))},e.submitMessage=function(t){var n={name:f.username,message:t};e.ws.send(JSON.stringify(n)),e.addMessage(n)},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.ws.onopen=function(){console.log("connected")},this.ws.onmessage=function(t){var n=JSON.parse(t.data);e.addMessage(n)},this.ws.onclose=function(){console.log("disconnected"),e.setState({ws:new WebSocket(S)})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"chat"},r.a.createElement("label",{htmlFor:"name"},"Chat :"),r.a.createElement(O,{ws:this.ws,onSubmitMessage:function(t){return e.submitMessage(t)}}),this.state.messages.map((function(e,t){return r.a.createElement(C,{key:t,message:e.message,name:e.name})})))}}]),n}(a.Component),N=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success?(f.loading=!1,f.isLoggedIn=!0,f.username=n.username):(f.loading=!1,f.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),f.loading=!1,f.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(f.isLoggedIn=!1,f.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return f.loading?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},"Chargement ....")):f.isLoggedIn?r.a.createElement("div",{className:"app"},r.a.createElement(x,null),r.a.createElement("div",{className:"container"},"Welcome ",f.username,r.a.createElement("div",{className:"submitButton"},r.a.createElement("button",{className:"btn",onClick:function(){return e.doLogout()}},"LogOut"),r.a.createElement(k,null)))):r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Projet React L3"),r.a.createElement(w,null)))}}]),n}(r.a.Component),L=Object(d.a)(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.f73f10bf.chunk.js.map
(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),s=n.n(r),l=(n(15),n(9)),i=n(1),o=n(2),u=n(3),m=n(5),h=n(4),d=n(6),p=(n(16),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={color:this.props.color};return c.a.createElement("h1",null,this.props.icone,c.a.createElement("a",{href:this.props.link,style:e}," ",this.props.title))}}]),t}(c.a.Component)),k=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"link"},c.a.createElement("h4",null,"Mes Resaux Sociaux "),c.a.createElement(p,{title:"Google",link:"https://www.google.fr/ ",color:"#EA4335",icone:"\u24c2"}),c.a.createElement(p,{title:"Twitter",link:"https://www.twitter.com ",color:"#1DA1F2",icone:"\ud83d\udc6c"}),c.a.createElement(p,{title:"Instagram",link:"https://www.instagram.com/?hl=fr",color:"#AA3888",icone:"\u26f9"}))}}]),t}(c.a.Component),f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={count:0,trop:""},n.increment=n.increment.bind(Object(i.a)(n)),n.decrement=n.decrement.bind(Object(i.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"increment",value:function(){this.state.count<=9&&this.setState({count:this.state.count+1}),this.state.count>=2&&this.setState({trop:"\u2705"})}},{key:"decrement",value:function(){this.state.count>0&&this.setState({count:this.state.count-1}),this.state.count<=3&&this.setState({trop:"\ud83d\ude34 "})}},{key:"render",value:function(){return c.a.createElement("div",{className:"count"},c.a.createElement("h1",null,"Vous avez ",this.state.count," point. ",this.state.trop),c.a.createElement("div",{className:"btn"},c.a.createElement("button",{onClick:this.increment},"J'ai un nouveau point"),c.a.createElement("button",{onClick:this.decrement},"J'ai perdu un point")))}}]),t}(c.a.Component),E={home:"#/",completeTasks:"#/c-task",incompleteTasks:"#/i-task"},b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={curruntRoute:E.incompleteTasks,task:[{id:1,desc:"Faire du code",complete:!0},{id:2,desc:"Go to Pita",complete:!1},{id:3,desc:"Suivre OM",complete:!1}]},n.addTask=n.addTask.bind(Object(i.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.location.hash=E.home,window.onhashchange=function(t){e.setState({curruntRoute:window.location.hash})}}},{key:"allTasks",value:function(){return this.state.task}},{key:"completeTasks",value:function(){return this.state.task.filter((function(e){return e.complete}))}},{key:"incompleteTasks",value:function(){return this.state.task.filter((function(e){return!e.complete}))}},{key:"renderRoute",value:function(){switch(this.state.curruntRoute){case E.home:return c.a.createElement(v,{tasks:this.allTasks(),title:"Toutes les taches"});case E.completeTasks:return c.a.createElement(v,{tasks:this.completeTasks(),title:"Les Taches Completes"});case E.incompleteTasks:return c.a.createElement(v,{tasks:this.incompleteTasks(),title:"Les Taches Incompletes"});default:return c.a.createElement("h1",null,"404 Page note found")}}},{key:"addTask",value:function(e){var t=this;e.preventDefault(),this.setState((function(e){var n={id:e.task.length+1,desc:t.newTaskDes.value,complete:!1};return t.addTaskForm.reset(),{task:[].concat(Object(l.a)(e.task),[n])}}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"menu"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:E.home},"Home")),c.a.createElement("li",null,c.a.createElement("a",{href:E.completeTasks},"Completes")),c.a.createElement("li",null,c.a.createElement("a",{href:E.incompleteTasks},"Incompletes"))),c.a.createElement("form",{className:"form",onSubmit:this.addTask.bind(this),ref:function(t){return e.addTaskForm=t}},c.a.createElement("input",{type:"text",defaultValue:"",ref:function(t){return e.newTaskDes=t},required:!0,placeholder:"Ajouter votre t\xe2che"}),c.a.createElement("input",{className:"val",type:"submit",value:"Ajouter"})),this.renderRoute())}}]),t}(a.Component),v=function(e){return c.a.createElement("div",{className:"Task"},c.a.createElement("h5",null,e.title),e.tasks.map((function(e){return c.a.createElement(j,{key:e.id,detail:e})})))},j=function(e){var t=e.detail.complete?c.a.createElement("strike",null,"# ",e.detail.id," - ",e.detail.desc,"-' \u2705 ' "):c.a.createElement("span",null,e.detail.id," - ",e.detail.desc);return c.a.createElement("article",null,c.a.createElement("h4",null,t))},O=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement(k,null),c.a.createElement(b,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.7b0b1d87.chunk.js.map
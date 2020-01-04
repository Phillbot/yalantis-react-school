(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],{35:function(e,t,a){e.exports=a(53)},49:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),s=a(19),o=a(8),i=a(24),u=a(25),m=a(32),h=a(26),d=a(34),p=a(27),b=a(15),E="https://yalantis-react-school.herokuapp.com/api/",v={getUsers:"task0/users"},f=a(14),g=a.n(f);var y=a(29),N=(a(49),a(9)),w=a.n(N);function k(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"desctop-chart-home-skeleton center"},r.a.createElement(w.a,{count:1,circle:!0,height:450,width:450})),r.a.createElement("div",{className:"mobile-chart-home-skeleton center"},r.a.createElement(w.a,{count:1,circle:!0,height:250,width:250})))}function O(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt120 desctop-home-skeleton"},r.a.createElement("div",{className:"col l7 m12 center"},r.a.createElement(w.a,{count:1,circle:!0,height:450,width:450})),r.a.createElement("div",{className:"col l4 m12 mt20"},r.a.createElement(w.a,{count:20}))),r.a.createElement("div",{className:"row mt40 mobile-home-skeleton"},r.a.createElement("div",{className:"col s12 center"},r.a.createElement(w.a,{count:1,circle:!0,height:250,width:250})),r.a.createElement("div",{className:"col s12 mt50"},r.a.createElement(w.a,{count:15}))))}var j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={error:null,isLoaded:!1,userList:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState=this.setState.bind(this),function(e){var t=E,a=v.getUsers;fetch("".concat(t).concat(a)).then((function(e){return e.json()})).then((function(t){var a={January:[],February:[],March:[],April:[],May:[],June:[],July:[],August:[],September:[],October:[],November:[],December:[]};t.forEach((function(e){var t=e.dob,n=g()(t,"YYYY-MM-DD HH:mm:ss").format("MM"),r=a.January,c=a.February,l=a.March,s=a.April,o=a.May,i=a.June,u=a.July,m=a.August,h=a.September,d=a.October,p=a.November,b=a.December;switch(n){case"01":r.push(e);break;case"02":c.push(e);break;case"03":l.push(e);break;case"04":s.push(e);break;case"05":o.push(e);break;case"06":i.push(e);break;case"07":u.push(e);break;case"08":m.push(e);break;case"09":h.push(e);break;case"10":d.push(e);break;case"11":p.push(e);break;case"12":b.push(e)}})),e({isLoaded:!0,userList:a})}),(function(t){e({isLoaded:!0,error:!0})}))}(this.setState)}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,c=t.userList;if(a)return r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"center mt50 mb50"},"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :-("),r.a.createElement("p",{className:"center"},"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 "));if(n){for(var l=[],s=[],o={},i=0;i<Object.keys(c).length;i++){var u=Object.keys(c)[i],m=Object.values(c)[i];l.push([u.slice(0,3),m.length]);o[i]={offset:.04}}for(var h=0;h<Object.values(c).length;h++){var d=Object.values(c)[h];d.length<2?s.push("#bdbdbd"):d.length>2&&d.length<=6?s.push("#3f51b5"):d.length>6&&d.length<=10?s.push("#4caf50"):d.length>=11&&s.push("#f44336")}var b=null!==this.props.row&&Object.values(c)[this.props.row];return r.a.createElement("div",{className:"home container-fluid"},r.a.createElement(p.Helmet,null,r.a.createElement("title",null,"Yalantis React School")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col l7 s12"},r.a.createElement(y.a,{className:"chart",chartType:"PieChart",loader:r.a.createElement("div",null,r.a.createElement(k,null)),data:[["month","users"]].concat(l),options:{title:"Yalantis Users",titleTextStyle:{fontSize:22},fontName:"Ubuntu",is3D:!0,pieSliceText:"label",pieSliceTextStyle:{fontSize:14,bold:!0,color:"#fff"},pieSliceBorderColor:"green",legend:"none",tooltip:{text:"both"},colors:s,chartArea:{left:0,top:50,width:"100%",height:"100%"},slices:o},chartEvents:[{eventName:"ready",callback:function(t){var a=t.chartWrapper,n=t.google,r=a.getChart();n.visualization.events.addListener(r,"onmouseover",(function(t){var a=t.row;e.props.getRowToDispatch(a)})),n.visualization.events.addListener(r,"onmouseout",(function(t){e.props.getRowToDispatch(null)}))}}]})),r.a.createElement("div",{className:"col l4 s12 users-container"},null!==this.props.row?r.a.createElement("h4",{className:"center"},Object.keys(c)[this.props.row]):"",null!==this.props.row?r.a.createElement("table",{className:"centered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Birthday"))),r.a.createElement("tbody",null,b.sort((function(e,t){return e.dob>t.dob?1:t.dob>e.dob?-1:0})).map((function(e){var t=e.id,a=e.firstName,n=e.lastName,c=e.dob;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,g()(c,"YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD")))})))):r.a.createElement("h4",{className:"center"}," Hover month to see data "))))}return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(O,null))}}]),t}(n.Component),Y=Object(b.b)((function(e){return{row:e.getRowReducer.row}}),(function(e){return{getRowToDispatch:function(t){e(function(e){return{type:"ROW",payload:e}}(t))}}}))(j);function D(){return r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:Y}),r.a.createElement(o.b,{path:"*",render:function(){return r.a.createElement(o.a,{to:"/"})}}))}a(51),a(52);var M=a(10),S=a(33),L={row:null};var R=Object(M.b)({getRowReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROW":return Object(S.a)({},e,{row:t.payload});default:return e}}}),J=Object(M.c)(R);l.a.render(r.a.createElement(b.a,{store:J},r.a.createElement((function(){return r.a.createElement(s.a,{basename:"yalantis-react-school"},r.a.createElement("div",{className:"app"},r.a.createElement(D,null)))}),null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e4bf6fce.chunk.js.map
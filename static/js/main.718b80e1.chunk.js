(this["webpackJsonpjs-calculator"]=this["webpackJsonpjs-calculator"]||[]).push([[0],{13:function(t,e,a){"use strict";e.a=function(t){return{type:"CAL",data:t}}},14:function(t,e,a){"use strict";e.a=function(t){return{type:"DISPLAY",data:t}}},15:function(t,e,a){"use strict";e.a=function(t){return{type:"CLEAR",data:t}}},25:function(module,__webpack_exports__,__webpack_require__){"use strict";var _actions_addOpr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_actions_disOpr__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),_actions_clearOpr__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),intState={input:"",result:"0"},oprReducer=function oprReducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:intState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"CAL":var res=action.data.substring(0,action.data.length-1);return{input:action.data+eval(res),result:eval(res)};case"DISPLAY":var disVal="",newVal="0";if(action.data.length>0&&(newVal=action.data.substring(action.data.length-1).toString()),action.data.length>1)if(disVal=action.data.substring(action.data.length-2),"0."==action.data.slice(-2))newVal="0.";else{var chk=/[+*/-]/.test(newVal);!1===chk&&(chk=/[+*/-]/.test(disVal),!1===chk&&(newVal=state.result.concat(newVal)))}return{input:action.data,result:newVal};case"CLEAR":return{input:"",result:"0"};default:return intState}};__webpack_exports__.a=oprReducer},27:function(t,e,a){t.exports=a(41)},32:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(4),s=a.n(r),c=(a(32),a(5)),l=a(6),u=a(12),o=a(8),p=a(11),d=[{id:"clear",val:"AC"},{id:"divide",val:"/"},{id:"multiply",val:"*"},{id:"seven",val:7},{id:"eight",val:8},{id:"nine",val:9},{id:"subtract",val:"-"},{id:"four",val:4},{id:"five",val:5},{id:"six",val:6},{id:"add",val:"+"},{id:"one",val:1},{id:"two",val:2},{id:"three",val:3},{id:"zero",val:0},{id:"decimal",val:"."}],_=a(43),v=a(13),h=a(14),f=a(15),m=a(10),b=(a(38),function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"HandelCal",value:function(t){var e=this.props.input;if((a=e.indexOf("="))>-1&&("number"===typeof t?e="":"."===t?(e=(e="0").concat(t),this.props.disMe(e)):e=this.props.result.toString()),"="===t){var a=this.props.input.indexOf("=");!1===/[+*/-]$/.test(e)&&-1===a&&""!==this.props.input&&(e=e.concat(t),this.props.calMe(e))}else if("AC"===t)this.props.clearMe("");else if("."===t)!1===/\./.test(this.props.result)&&"0."!==e&&(!1===/[0-9]$/.test(e)&&(t="0."),e=e.concat(t),this.props.disMe(e));else{var n;"number"===typeof t?"0"==this.props.result&&(n=!0):"+"===t||"*"===t||"/"===t?""==this.props.input||"-"==this.props.input?t="":n=/[+*/-]$/.test(e):"-"===t?n=/-$/.test(e):"0"==t&&"0"==this.props.result&&(n=!0),!0===n&&(e=e.substring(0,e.length-1)),e=e.concat(t),this.props.disMe(e)}}},{key:"render",value:function(){var t=this,e=[],a=d.map((function(e){return i.a.createElement(_.a,{className:"btn btn-primary ",id:e.id,onClick:function(){return t.HandelCal(e.val)}},e.val)})),n=[];e.push(i.a.createElement("div",{className:"row"},a.slice(0,3)));for(var r=3;r<9;r+=4)e.push(i.a.createElement("div",{className:"row"},a.slice(r,r+4)));for(var s=11;s<16;s+=3)n.push(i.a.createElement("div",{className:"row"},a.slice(s,s+3)));return e.push(i.a.createElement("div",{className:"row",id:"newRow"},i.a.createElement("div",{style:{display:"inline-block",float:"left"},id:"hRow"},n),i.a.createElement(_.a,{className:"btn btn-primary ",id:"equals",onClick:function(){return t.HandelCal("=")},style:{display:"inline-block",float:"right"}},"="))),i.a.createElement("div",{className:"App countainer-fluid"},i.a.createElement("div",{className:"well",id:"display"},i.a.createElement("input",{id:"up",value:this.props.input}),i.a.createElement("input",{id:"down",value:this.props.result})),i.a.createElement("div",null,e))}}]),e}(n.Component)),E=Object(m.b)((function(t){return{input:t.input,result:t.result}}),(function(t){return{calMe:function(e){t(Object(v.a)(e))},disMe:function(e){t(Object(h.a)(e))},clearMe:function(e){t(Object(f.a)(e))}}}))(b),w=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(E,null))}}]),e}(n.Component),O=a(9),g=a(25),y=Object(O.b)(g.a);s.a.render(i.a.createElement(m.a,{store:y},i.a.createElement(w,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.718b80e1.chunk.js.map
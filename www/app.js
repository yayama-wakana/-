(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(0)),u=(i(n(1)),n(2)),a=i(n(22));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={count:0,data:""},n.incrementCount=n.incrementCount.bind(n),n.decreaseCount=n.decreaseCount.bind(n),n.clearCount=n.clearCount.bind(n),n.updateFromChild=n.updateFromChild.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"incrementCount",value:function(){var e=this.state;e.count+=1,this.setState(e)}},{key:"decreaseCount",value:function(){var e=this.state;e.count-=1,this.setState(e)}},{key:"clearCount",value:function(){var e=this.state;e.count=0,this.setState(e)}},{key:"updateFromChild",value:function(e){var t=this.state;t.data=e,this.setState(t)}},{key:"updateFromGChild",value:function(e){var t=this.state;t.data=e,this.setState(t)}},{key:"render",value:function(){return o.default.createElement(u.Page,null,o.default.createElement("div",null,"App"),o.default.createElement("div",null,"カウント:",this.state.count),o.default.createElement(u.Button,{modifier:"large",onClick:this.incrementCount},"Up"),o.default.createElement(a.default,{count:this.state.count,decreaseCount:this.decreaseCount,updateFromChild:this.updateFromChild,updateFromGChild:this.updateFromGChild,clearCount:this.clearCount}))}}]),t}(o.default.Component);t.default=l},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(0)),u=(i(n(1)),n(2)),a=i(n(23));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.updateInputText=n.updateInputText.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"updateInputText",value:function(e){this.setState({inputText:e.target.value}),this.props.updateFromChild(this.state.inputText)}},{key:"render",value:function(){return o.default.createElement(u.Card,null,o.default.createElement("div",{className:"title"},"Childコンポーネント"),o.default.createElement("div",{className:"content"},o.default.createElement("div",null,"Appから渡された count=",this.props.count),o.default.createElement(u.Button,{modifier:"large",onClick:this.props.decreaseCount},"Down"),o.default.createElement(a.default,{count:this.props.count,clearCount:this.props.clearCount,updateFromGChild:this.props.updateFromGChild})))}}]),t}(o.default.Component);t.default=l},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),u=(a(n(1)),n(2));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.updateInputText=n.updateInputText.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"updateInputText",value:function(e){this.setState({inputText:e.target.value}),this.props.updateFromGChild(this.state.inputText)}},{key:"render",value:function(){return o.default.createElement(u.Card,null,o.default.createElement("div",{className:"title"},"GChildコンポーネント"),o.default.createElement("div",{className:"content"},o.default.createElement("div",null,"Appから渡された count=",this.props.count),o.default.createElement(u.Button,{modifier:"large",onClick:this.props.clearCount},"Clear")))}}]),t}(o.default.Component);t.default=i},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n(10);var r=n(12),o=l(n(0)),u=l(n(1)),a=l(n(5)),i=l(n(18));function l(e){return e&&e.__esModule?e:{default:e}}n(24),n(25),a.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var c=document.getElementById("app");u.default.render(o.default.createElement(r.AppContainer,null,o.default.createElement(i.default,null)),c)}},[[8,1,2]]]);
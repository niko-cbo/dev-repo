insites.loadBundle("1l9jodrr",["exports"],function(e){var n=window.insites.h,t=function(){function e(){this.instance="",this.link=""}return e.prototype.routeInstanceSubItemHandler=function(){this.routeInstanceSubItem.emit({instance:this.instance,link:this.link})},e.prototype.val=function(e,n){if(e&&"object"==typeof e&&!n);else{if(e&&!n)return this[e];if(!e||!n)return{instance:this.instance,link:this.link};this[e]=n}},e.prototype.render=function(){var e=this;return n("div",{class:"ins-instance-sub-item"},n("a",{href:this.link,onClick:function(){return e.routeInstanceSubItemHandler()}},n("span",{class:"instance-sub-item-label"},this.instance?this.instance:"Label")))},Object.defineProperty(e,"is",{get:function(){return"ins-instances-sub-item"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{instance:{type:String,attr:"instance",mutable:!0},link:{type:String,attr:"link",mutable:!0},val:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"routeInstanceSubItem",method:"routeInstanceSubItem",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host .ins-instance-sub-item:hover{background-color:#e4e6ec}:host a{display:block;width:100%;padding:15px 20px 15px 57px;-webkit-box-sizing:border-box;box-sizing:border-box;text-decoration:none;color:#8c94a4;font-size:16px;position:relative}"},enumerable:!0,configurable:!0}),e}();e.InsInstancesSubItem=t,Object.defineProperty(e,"__esModule",{value:!0})});
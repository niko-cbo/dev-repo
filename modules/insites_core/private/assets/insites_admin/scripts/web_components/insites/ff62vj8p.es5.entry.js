insites.loadBundle("ff62vj8p",["exports"],function(e){var t=window.insites.h,i=function(){function e(){this.fullLogo="",this.iconLogo=""}return e.prototype.insSidebarFooterButtonEventHandler=function(e){var t=e.target;t.attributes.open&&this.insSidebarEl.querySelector('ins-sidebar-item[footer-link="'+t.attributes.open.value+'"]').showSubMenu()},e.prototype.minimise=function(){this.minimised=!this.minimised},e.prototype.val=function(e,t){if(e&&"object"==typeof e&&!t);else{if(e&&!t)return this[e];if(!e||!t)return{fullLogo:this.fullLogo,iconLogo:this.iconLogo};this[e]=t}},e.prototype.sidebarActionEventHandler=function(e){this.sidebarAction.emit(e)},e.prototype.render=function(){return t("div",{class:"sidebar"},t("div",{class:"insites-logo-wrap"},t("img",this.minimised?{src:this.iconLogo?this.iconLogo:"http://ins-styleguide.s3-website-us-west-2.amazonaws.com/assets/images/insites_logo_icon.svg"}:{src:this.fullLogo?this.fullLogo:"http://ins-styleguide.s3-website-us-west-2.amazonaws.com/assets/images/Insites_logo.svg"})),t("div",{class:"sidebar-items-wrap"},t("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"ins-sidebar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{fullLogo:{type:String,attr:"full-logo",mutable:!0},iconLogo:{type:String,attr:"icon-logo",mutable:!0},insSidebarEl:{elementRef:!0},minimise:{method:!0},minimised:{state:!0},val:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"sidebarAction",method:"sidebarAction",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"insSidebarFooterButtonEvent",method:"insSidebarFooterButtonEventHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sidebar{width:240px;height:100vh;position:fixed;top:0;background-color:#f5f6f8;overflow:hidden;-webkit-transition:.75s;transition:.75s;z-index:1050}.sidebar .insites-logo-wrap{width:100%;height:56px;background-color:#1a1d2c;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.35);box-shadow:0 1px 5px rgba(0,0,0,.35);position:relative;z-index:2001;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center}.sidebar .insites-logo-wrap img{width:140px;height:48px;margin:auto;margin:4px auto 0;-webkit-transition:margin .25s;transition:margin .25s;-webkit-box-sizing:border-box;box-sizing:border-box}.sidebar .insites-logo-wrap img.ins-hide{display:none}.sidebar .sidebar-items-wrap{position:relative;padding:16px 0;height:calc(100% - 56px)}.sidebar .sidebar-items-wrap>ins-sidebar-item>.no-icon .fas{border:1px solid #1e86e3;height:12px;width:12px;margin-right:19px}.sidebar .sidebar-action{background-color:#e4e6ec;width:100%;position:absolute;bottom:0}.sidebar .sidebar-action>div{height:48px;width:calc(100%/3);display:inline-block;padding:13px;text-align:center}.sidebar .sidebar-action>div:hover{color:#fff;background-color:#2c3148;cursor:pointer}"},enumerable:!0,configurable:!0}),e}();e.InsSidebar=i,Object.defineProperty(e,"__esModule",{value:!0})});
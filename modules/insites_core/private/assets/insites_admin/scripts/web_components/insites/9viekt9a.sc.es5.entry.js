insites.loadBundle("9viekt9a",["exports"],function(t){var o=window.insites.h,n=function(){function t(){this.closeButtonLabel="CLOSE",this.confirmButtonLabel="OK"}return t.prototype.componentDidLoad=function(){this.adjustPosition()},t.prototype.componentDidUpdate=function(){this.adjustPosition()},t.prototype.adjustPosition=function(){var t=this.InsConfirmModalEl.querySelector(".ins-card-wrap");t.parentElement.style.left="calc(50% - "+(t.clientWidth/2+1)+"px)"},t.prototype.closeConfirmModal=function(){this.onInsConfirmModalCofirm.emit({action:"closed",callback:this.callback}),this.InsConfirmModalEl.style.display="none"},t.prototype.callbackHandler=function(){this.onInsConfirmModalCofirm.emit({action:"confirmed",callback:this.callback}),this.InsConfirmModalEl.style.display="none"},t.prototype.open=function(){this.InsConfirmModalEl.style.display="block"},t.prototype.render=function(){var t=this;return o("div",{class:"ins-confirm-modal-wrap"},this.withBackdrop?o("ins-backdrop",null):"",o("ins-card",{steady:!0},o("ins-loader",{"state-title":this.heading,"state-message":this.message,"state-icon":this.icon,"icon-color":this.iconColor}),o("div",{class:"ins-confirm-modal-button-wrap"},this.withConfirm?o("ins-button",{label:this.closeButtonLabel,icon:this.closeButtonIcon,color:this.closeButtonColor,outlined:!0,onClick:function(){return t.closeConfirmModal()}}):"",o("ins-button",{label:this.confirmButtonLabel,icon:this.confirmButtonIcon,color:this.confirmButtonColor,solid:!0,onClick:function(){return t.callbackHandler()}}))))},Object.defineProperty(t,"is",{get:function(){return"ins-confirm-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{callback:{type:"Any",attr:"callback"},closeButtonColor:{type:String,attr:"close-button-color"},closeButtonIcon:{type:String,attr:"close-button-icon"},closeButtonLabel:{type:String,attr:"close-button-label"},confirmButtonColor:{type:String,attr:"confirm-button-color"},confirmButtonIcon:{type:String,attr:"confirm-button-icon"},confirmButtonLabel:{type:String,attr:"confirm-button-label"},heading:{type:String,attr:"heading"},icon:{type:String,attr:"icon"},iconColor:{type:String,attr:"icon-color"},InsConfirmModalEl:{elementRef:!0},message:{type:String,attr:"message"},open:{method:!0},withBackdrop:{type:Boolean,attr:"with-backdrop"},withConfirm:{type:Boolean,attr:"with-confirm"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"onInsConfirmModalCofirm",method:"onInsConfirmModalCofirm",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".ins-confirm-modal-wrap ins-backdrop{background-color:#2c3148;opacity:.1}.ins-confirm-modal-wrap ins-card{position:fixed;top:20%;z-index:9999;min-width:300px;min-height:300px}.ins-confirm-modal-wrap ins-card .ins-card-wrap{padding:24px;border:none;border-radius:0}.ins-confirm-modal-wrap ins-card .ins-card-wrap,.ins-confirm-modal-wrap ins-card .ins-card-wrap:hover{-webkit-box-shadow:0 8px 21px #aaa;box-shadow:0 8px 21px #aaa}.ins-confirm-modal-wrap .ins-loader-wrap .ins-loader-title-wrap{margin-top:18px;color:#2c3148}.ins-confirm-modal-wrap .ins-loader-wrap .ins-loader-message-wrap{margin-top:10px;margin-bottom:32px;color:#8694a4}.ins-confirm-modal-wrap .ins-confirm-modal-button-wrap{text-align:center}.ins-confirm-modal-wrap .ins-confirm-modal-button-wrap button{min-width:82px;margin:0 8px}"},enumerable:!0,configurable:!0}),t}();t.InsConfirmModal=n,Object.defineProperty(t,"__esModule",{value:!0})});
const e=window.insites.h;class t{constructor(){this.maxlength="",this.hasError=!1,this.readonly=!1,this.disabled=!1,this.required=!1}onTextareaHandler(e){this.oninput.emit({value:e.target.value,keyCode:e.which||e.keyCode}),this.valueChange.emit(e.target.value)}render(){return e("div",{class:`ins-textarea-wrap ${this.hasError?"is-invalid":""}`},e("div",{class:"ins-ta"},this.label?e("label",null,this.label):"",e("textarea",{class:"ins-textarea-field",name:this.name,placeholder:this.placeholder,value:this.value,disabled:this.disabled,readonly:this.readonly,required:this.required,maxlength:this.maxlength,onKeyUp:e=>this.onTextareaHandler(e)}),this.hasError?e("div",{class:"ins-form-error"},this.errorMessage):""))}static get is(){return"ins-textarea"}static get properties(){return{disabled:{type:Boolean,attr:"disabled",mutable:!0},errorMessage:{type:String,attr:"error-message",mutable:!0},hasError:{type:Boolean,attr:"has-error",mutable:!0},label:{type:String,attr:"label",mutable:!0},maxlength:{type:String,attr:"maxlength",mutable:!0},name:{type:String,attr:"name",mutable:!0},placeholder:{type:String,attr:"placeholder",mutable:!0},readonly:{type:Boolean,attr:"readonly",mutable:!0},required:{type:Boolean,attr:"required",mutable:!0},value:{type:String,attr:"value",mutable:!0}}}static get events(){return[{name:"oninput",method:"oninput",bubbles:!0,cancelable:!0,composed:!0},{name:"valueChange",method:"valueChange",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".ins-ta{position:relative}.ins-ta textarea{-webkit-box-shadow:none;box-shadow:none;font-family:Open Sans,sans-serif;font-size:14px;font-weight:400;border:1px solid #e4e6ec;border-radius:4px;margin-bottom:20px;padding:.5rem;padding-right:30px}.ins-ta textarea:active,.ins-ta textarea:focus{border-color:#1e86e3;-webkit-box-shadow:none;box-shadow:none}.ins-ta textarea:active+.icon-search,.ins-ta textarea:focus+.icon-search{color:#1e86e3}.ins-ta textarea:disabled{color:#8c94a4}.ins-ta textarea:disabled,.ins-ta textarea[readonly]{border-color:#e4e6ec!important;background-color:#fafbfc}.ins-ta textarea[readonly]{color:#2c3148}.ins-ta label{font-size:12px;font-weight:600;color:#2c3148;font-family:Open Sans,sans-serif;margin-bottom:2px}.ins-textarea-wrap.is-invalid label{color:#f27474}.ins-textarea-wrap.is-invalid textarea{color:#f27474;border-color:#f27474;background-color:#fef8f8;margin-bottom:8px}.ins-textarea-wrap.is-invalid textarea::-webkit-input-placeholder{color:#f27474}.ins-textarea-wrap.is-invalid textarea:-moz-placeholder,.ins-textarea-wrap.is-invalid textarea::-moz-placeholder{color:#f27474}.ins-textarea-wrap.is-invalid textarea:-ms-input-placeholder{color:#f27474}.ins-textarea-wrap.is-invalid .ins-form-error{display:block;font-size:12px;font-family:Open Sans,sans-serif;line-height:16px;color:#f27474;margin-bottom:20px}"}}export{t as InsTextarea};
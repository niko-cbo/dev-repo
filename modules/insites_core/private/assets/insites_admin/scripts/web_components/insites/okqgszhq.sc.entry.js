const e=window.insites.h;class t{constructor(){this.type="picture",this.buttonColor="blue"}componentDidLoad(){this.modal=this.insLogo.querySelector(".modal"),this.hiddeninput=this.insLogo.querySelector(".hidden-input")}initCropper(){let e=this;this.image=this.insLogo.querySelector(".image"),this.cropper=new Cropper(this.image,{aspectRatio:1,crop(){e.base64=this.cropper.getCroppedCanvas({width:"120",height:"120"}).toDataURL()},ready(){e.base64=this.cropper.getCroppedCanvas({width:"120",height:"120"}).toDataURL()}})}displayImage(e){let t=(e.target||window.event.srcElement).files,s=this;if(FileReader&&t&&t.length){var i=new FileReader;i.onload=function(){s.ImageElement=s.insLogo.querySelector(".image"),s.insLogo.querySelector(".upload").classList.remove("show"),s.insLogo.querySelector(".save").classList.add("show"),s.initCropper()},i.readAsDataURL(t[0])}}exportImage(e){e.preventDefault(),this.ImageElement=this.insLogo.querySelector(".profile"),this.ImageElement.src=this.base64,this.insLogo.querySelector(".img-placeholder").classList.remove("show"),this.ImageElement.classList.add("show"),this.closeModal(e)}openModal(){this.modal.classList.add("show")}closeModal(e){e.preventDefault(),this.modal.classList.remove("show")}addImage(){this.hiddeninput.click()}render(){return e("div",{class:"ins-logo-wrapper"},e("div",{class:"image-picker"},e("div",{class:"inline-block"},e("div",{class:"img-placeholder show",onClick:this.openModal.bind(this)},e("span",null,"Drag and drop the file or add an image")),e("img",{src:"",alt:"",class:"profile",onClick:this.openModal.bind(this)})),e("div",{class:"inline-block"},e("span",null,"Transparent PNG or SVG at least 300px"),e("ins-button",{label:"ADD "+this.type,outlined:!0,color:this.buttonColor,onClick:this.openModal.bind(this)})),e("div",{class:"modal"},e("ins-backdrop",null,e("ins-card",{steady:!0},e("div",{class:"image-preview"},e("div",{class:"label-content"},e("i",{class:"icon-image"}),e("h4",null,"Add Picture")),e("img",{src:"",alt:"",class:"image"})),e("div",{class:"controllers"},e("ins-button",{label:"CANCEL",outlined:!0,onClick:this.closeModal.bind(this),class:"cancel show"}),e("ins-button",{label:"SAVE",solid:!0,onClick:this.exportImage.bind(this),class:"save"}),e("ins-button",{label:"CHOOSE A FILE",solid:!0,onClick:this.addImage.bind(this),class:"upload show"}),e("input",{type:"file",class:"hidden-input",onChange:this.displayImage.bind(this)})))))))}static get is(){return"ins-logo"}static get properties(){return{base64:{state:!0},buttonColor:{type:String,attr:"button-color"},cropper:{state:!0},hiddeninput:{state:!0},image:{state:!0},ImageElement:{state:!0},insLogo:{elementRef:!0},modal:{state:!0},type:{type:String,attr:"type"}}}static get style(){return".ins-logo-wrapper .image-picker{margin-bottom:30px}.ins-logo-wrapper .image-picker .img-placeholder{margin-right:25px;margin-bottom:0;border-radius:4px;border:1px solid #e4e6ec;width:285px;height:100px;display:none;position:relative;cursor:pointer}.ins-logo-wrapper .image-picker .img-placeholder span{width:220px;text-align:center;padding:0;margin:0 auto;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;position:relative;top:40px}.ins-logo-wrapper .image-picker .profile{border-radius:4px;width:285px;height:100px;margin-right:35px;display:none}.ins-logo-wrapper .image-picker span{font-family:Open sans,sans-serif;color:#8c94a4;display:block;font-size:12px;margin-bottom:12px}.ins-logo-wrapper .image-picker .inline-block{display:inline-block;vertical-align:middle}.ins-logo-wrapper .image-picker .clearfix:after{display:table;content:\" \";-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;clear:both}.ins-logo-wrapper .image-picker .show{display:block!important}.ins-logo-wrapper .image-picker .modal{display:none}.ins-logo-wrapper .image-picker .modal ins-card .ins-card-wrap.steady{position:fixed;margin-left:-250px;margin-top:-250px;left:50%;top:50%;z-index:9999;width:500px;-webkit-box-shadow:none;box-shadow:none;height:auto}.ins-logo-wrapper .image-picker .modal ins-card .ins-card-wrap.steady .controllers{float:right}.ins-logo-wrapper .image-picker .modal ins-card .ins-card-wrap.steady .controllers ins-button{display:none;padding-right:5px;padding-left:5px}.ins-logo-wrapper .image-picker .modal ins-card .ins-card-wrap.steady .controllers ins-button:first-of-type{padding-left:0}.ins-logo-wrapper .image-picker .modal ins-card .ins-card-wrap.steady .controllers ins-button:last-of-type{padding-right:0}.ins-logo-wrapper .image-picker .modal ins-card .ins-card-wrap.steady .controllers ins-button.show{display:inline-block!important}.ins-logo-wrapper .image-picker .modal ins-card .ins-card-wrap.steady .controllers .hidden-input{display:none}.ins-logo-wrapper .image-picker .modal ins-card .ins-card-wrap.steady .image-preview{border:1px dashed #8c94a4;margin:0 auto 30px auto;min-height:100px;width:452px;z-index:1;border-radius:5px;text-align:center;position:relative}.ins-logo-wrapper .image-picker .modal ins-card .ins-card-wrap.steady .image-preview .label-content{color:#8c94a4;position:absolute;z-index:0;width:100%}.ins-logo-wrapper .image-picker .modal ins-card .ins-card-wrap.steady .image-preview .label-content h4{font-family:Open sans,sans-serif;font-size:16px;margin-top:20px}.ins-logo-wrapper .image-picker .modal ins-card .ins-card-wrap.steady .image-preview .label-content i{font-size:40px;top:15px;position:relative}.ins-logo-wrapper .image-picker .modal ins-card .ins-card-wrap.steady .icon-close-1{position:absolute;top:23px;right:23px;font-size:16px;font-weight:700;cursor:pointer}"}}export{t as InsLogo};
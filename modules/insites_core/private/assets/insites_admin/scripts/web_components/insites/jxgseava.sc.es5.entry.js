insites.loadBundle("jxgseava",["exports"],function(e){var t=window.insites.h,i=function(){function e(){this.imgType="picture",this.label="CHANGE PICTURE",this.buttonColor="blue",this.placeholder="Drag and drop the file or add an image",this.uploadImgContainer="",this.uploadImgRecWidth=120,this.uploadImgRecHeight=120,this.uploadImgRecFileSize=25}return e.prototype.val=function(e,t){if(e&&"object"==typeof e&&!t);else{if(e&&!t)return this[e];if(!e||!t)return{imgType:this.imgType,buttonColor:this.buttonColor};this[e]=t}},e.prototype.componentDidLoad=function(){this.modal=this.insImagePickerEl.querySelector(".modal"),this.hiddeninput=this.insImagePickerEl.querySelector(".hidden-input")},e.prototype.displayImage=function(e){var t=e.target||window.event.srcElement;this.processImgFile(t.files)},e.prototype.handleDrop=function(e){e.preventDefault();var t=e.dataTransfer;this.openModal(),this.processImgFile(t.files)},e.prototype.processImgFile=function(e){var t=this;if("image/jpeg"===e[0].type||"image/png"===e[0].type){if(this.notImageFile=!1,this.fileName=e[0].name,FileReader&&e&&e.length){var i=new FileReader;i.onload=function(){t.ImageElement=t.insImagePickerEl.querySelector(".image"),t.ImageElement.src=i.result,t.initCropper()},i.readAsDataURL(e[0])}}else this.notImageFile=!0,this.ImageElement=this.insImagePickerEl.querySelector(".image"),this.ImageElement.src="",this.cropper.destroy()},e.prototype.initCropper=function(){var e;e="rectangle"===this.uploadImgContainer?NaN:1;var t=this;this.cropper&&this.cropper.destroy(),this.image=this.insImagePickerEl.querySelector(".image"),this.cropper=new Cropper(this.image,{aspectRatio:e,crop:function(){t.base64=this.cropper.getCroppedCanvas({}).toDataURL()},ready:function(){t.base64=this.cropper.getCroppedCanvas({}).toDataURL()}})},e.prototype.exportImage=function(e){e.preventDefault(),this.value=this.base64,this.valueChange.emit({base64:this.base64,filename:this.fileName}),this.closeModal(e)},e.prototype.openModal=function(){this.showModal=!0},e.prototype.closeModal=function(e){var t=this;e.preventDefault(),this.showModal=!1,setTimeout(function(){for(var e=t.insImagePickerEl.querySelectorAll(".ripple-wave"),i=0;i<e.length;i++)e[i].parentNode.removeChild(e[i])})},e.prototype.addImage=function(){this.hiddeninput.click()},e.prototype.handleDrag=function(e){e.preventDefault()},e.prototype.render=function(){return t("div",{class:"image-picker "+this.uploadImgContainer},t("div",{class:"inline-block img-container",onDragOver:this.handleDrag,onDrop:this.handleDrop.bind(this)},this.value?t("img",{src:this.value,alt:this.fileName,class:"profile",onClick:this.openModal.bind(this)}):t("div",{class:"img-placeholder img-preview-holder",onClick:this.openModal.bind(this)},t("span",{class:"texts_image"},this.placeholder))),t("div",{class:"inline-block"},t("span",{class:"texts_uploadinfo"},"File Formats: JPG, JPEG or PNG. ",t("br",null),"Recommended Dimensions: ",this.uploadImgRecWidth+"px x "+this.uploadImgRecHeight+"px",t("br",null),"File Size: ",this.uploadImgRecFileSize+" kb"),t("ins-button",{label:this.value?"CHANGE "+this.imgType:"ADD "+this.imgType,type:"button",size:"small",color:this.buttonColor,outlined:!0,onClick:this.openModal.bind(this)})),t("div",{class:"modal "+(this.showModal?"show":"")+" "+(this.notImageFile?"has-error":"")},t("ins-backdrop",null,t("ins-card",{steady:!0},t("div",{class:"modal-header"},t("h3",null,"Upload Image"),t("span",{class:"icon-close-1",onClick:this.closeModal.bind(this)})),t("div",{class:"image-preview",onDragOver:this.handleDrag,onDrop:this.handleDrop.bind(this)},this.base64?"":t("p",{class:"placeholder-text"},"Drag and drop the file or add an image"),t("img",{src:"",alt:"",class:"image"})),t("div",{class:"error-wrap"},t("span",null,"Please choose image files only.")),t("div",{class:"controllers"},t("ins-button",{label:"CANCEL",type:"button",outlined:!0,onOnClickInsButton:this.closeModal.bind(this)}),this.image?t("ins-button",{label:"SAVE",type:"button",solid:!0,color:"green",onOnClickInsButton:this.exportImage.bind(this),disabled:this.notImageFile}):"",t("ins-button",{label:"CHOOSE A FILE",type:"button",solid:!0,onOnClickInsButton:this.addImage.bind(this)}),t("input",{type:"file",class:"hidden-input",onChange:this.displayImage.bind(this)}))))))},Object.defineProperty(e,"is",{get:function(){return"ins-image-picker"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{base64:{state:!0},buttonColor:{type:String,attr:"button-color",mutable:!0},cropper:{state:!0},fileName:{type:"Any",attr:"file-name",mutable:!0},hiddeninput:{state:!0},image:{state:!0},ImageElement:{state:!0},imgType:{type:String,attr:"img-type",mutable:!0},insImagePickerEl:{elementRef:!0},label:{type:String,attr:"label",mutable:!0},modal:{state:!0},notImageFile:{type:Boolean,attr:"not-image-file",mutable:!0},placeholder:{type:String,attr:"placeholder",mutable:!0},showModal:{state:!0},uploadImgContainer:{type:String,attr:"upload-img-container",mutable:!0},uploadImgRecFileSize:{type:Number,attr:"upload-img-rec-file-size",mutable:!0},uploadImgRecHeight:{type:Number,attr:"upload-img-rec-height",mutable:!0},uploadImgRecWidth:{type:Number,attr:"upload-img-rec-width",mutable:!0},val:{method:!0},value:{type:"Any",attr:"value",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"valueChange",method:"valueChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".image-picker .img-container img,.image-picker .img-placeholder span,.image-picker.rectangle .img-container img,.image-picker.rectangle .img-preview-holder .texts_image,.image-picker.square .img-container img,.image-picker.square .img-preview-holder .texts_image{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.image-picker{margin-bottom:30px}.image-picker .img-placeholder{margin-bottom:0;border-radius:50%;width:120px;height:120px;position:relative;cursor:pointer}.image-picker .img-placeholder span{text-align:center;width:100px;margin:auto;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.image-picker .img-placeholder .icon-wrap{width:100%;top:calc(50% - 16px);position:absolute;color:#e4e6ec;text-align:center;font-size:32px}.image-picker .img-container{margin-right:20px;border:1px solid #e4e6ec;border-radius:50%;position:relative;width:120px;height:120px}.image-picker .img-container img{height:auto;max-height:100%}.image-picker .profile{border-radius:50%;background-color:#000}.image-picker .texts_image,.image-picker .texts_uploadinfo{font-family:Open sans,sans-serif;color:#8c94a4;display:block;font-size:12px}.image-picker .texts_uploadinfo{margin-bottom:12px}.image-picker .inline-block{display:inline-block;vertical-align:middle}.image-picker .clearfix:after{display:table;content:\" \";-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;clear:both}.image-picker .show{display:block!important}.image-picker .modal{display:none}.image-picker .modal .ins-card-wrap.steady{position:fixed;margin-left:-250px;margin-top:-250px;left:50%;top:50%;z-index:9999;width:500px;-webkit-box-shadow:none;box-shadow:none;height:auto!important}.image-picker .modal .ins-card-wrap.steady .controllers{text-align:right}.image-picker .modal .ins-card-wrap.steady .controllers .hidden-input{display:none}.image-picker .modal .ins-card-wrap.steady .modal-header{position:relative}.image-picker .modal .ins-card-wrap.steady .modal-header h3{font-size:18px;color:#2c3148;margin-bottom:20px}.image-picker .modal .ins-card-wrap.steady .modal-header .icon-close-1{position:absolute;right:0;top:0;color:#8c94a4;cursor:pointer}.image-picker .modal .ins-card-wrap.steady .error-wrap{display:none;font-size:12px;font-family:Open Sans,sans-serif;line-height:16px;color:#f27474;margin-bottom:20px;margin-top:10px;height:auto}.image-picker .modal .ins-card-wrap.steady .image-preview{border:1px dashed #e4e6ec;margin:0 0 20px;min-height:200px;max-height:300px;width:100%;z-index:1;border-radius:5px;text-align:center;position:relative}.image-picker .modal .ins-card-wrap.steady .image-preview .placeholder-text{color:#8c94a4;font-size:14px;margin-bottom:0;position:absolute;width:100%;text-align:center;top:calc(50% - 14px)}.image-picker .modal .ins-card-wrap.steady .image-preview .label-content{color:#8c94a4;position:absolute;z-index:0;width:100%}.image-picker .modal .ins-card-wrap.steady .image-preview .label-content h4{font-family:Open sans,sans-serif;font-size:16px;margin-top:20px}.image-picker .modal .ins-card-wrap.steady .image-preview .label-content i{font-size:40px;top:15px;position:relative}.image-picker .modal .ins-card-wrap.steady .ins-button{margin-left:15px;font-size:12px}.image-picker .modal.show.has-error .ins-card-wrap .error-wrap{display:block}.image-picker .modal.show.has-error .ins-card-wrap .placeholder-text{color:#f27474}.image-picker .modal.show.has-error .ins-card-wrap .image-preview{border-color:#f27474;margin-bottom:0}.image-picker.rectangle .img-preview-holder{border-radius:0}.image-picker.rectangle .img-preview-holder .texts_image{text-align:center}.image-picker.rectangle .img-preview-holder,.image-picker.rectangle .profile{width:auto}.image-picker.rectangle .img-container{margin-right:20px;border-radius:0;border:1px solid #e4e6ec;position:relative;width:360px;height:120px}.image-picker.rectangle .img-container img{border-radius:0;height:auto;max-height:100%}.image-picker.square .img-preview-holder{border-radius:0}.image-picker.square .img-preview-holder .texts_image{text-align:center}.image-picker.square .img-preview-holder,.image-picker.square .profile{width:auto}.image-picker.square .img-container{margin-right:20px;border-radius:0;border:1px solid #e4e6ec;position:relative;width:120px;height:120px}.image-picker.square .img-container img{border-radius:0;height:auto;max-height:100%;border:none}.cropper-crop-box span,.cropper-line.line-s{margin-bottom:0}"},enumerable:!0,configurable:!0}),e}();e.InsImagePicker=i,Object.defineProperty(e,"__esModule",{value:!0})});
const t=window.insites.h;class e{constructor(){this.color="blue"}render(){return t("div",{class:`tag-btn ${this.size?"size--"+this.size:""}\n                ${this.solid?"mdc-button--unelevated":""}\n                ${this.outlined?"mdc-button--outlined":""}\n                ${this.textTransform?"text-transform--"+this.textTransform:""}\n                ${this.color} mdc-button`},t("div",{class:"tag-btn__label"},this.label))}static get is(){return"ins-tags-button"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},label:{type:String,attr:"label"},outlined:{type:Boolean,attr:"outlined"},size:{type:String,attr:"size"},solid:{type:Boolean,attr:"solid"},textTransform:{type:String,attr:"text-transform"}}}static get style(){return".sc-ins-tags-button-h   .tag-btn.sc-ins-tags-button{cursor:text!important;letter-spacing:1px;font-family:Open Sans,sans-serif!important;font-weight:600!important;font-size:14px;border-radius:4px!important;color:#fff;display:table;height:36px;padding:0 16px}.sc-ins-tags-button-h   .tag-btn__label.sc-ins-tags-button{display:table-cell;vertical-align:middle}.sc-ins-tags-button-h   .tag-btn.text-transform--uppercase.sc-ins-tags-button{text-transform:uppercase!important}.sc-ins-tags-button-h   .tag-btn.text-transform--lowercase.sc-ins-tags-button{text-transform:lowercase!important}.sc-ins-tags-button-h   .tag-btn.text-transform--none.sc-ins-tags-button{text-transform:none!important}.sc-ins-tags-button-h   .tag-btn.size--small.sc-ins-tags-button{height:24px;font-size:10px;border-radius:2px!important;letter-spacing:.5px!important}.sc-ins-tags-button-h   .tag-btn.size--large.sc-ins-tags-button{height:48px;padding:10px 24px}.sc-ins-tags-button-h   .tag-btn.green.sc-ins-tags-button, .sc-ins-tags-button-h   .tag-btn.positive.sc-ins-tags-button{background-color:#24be8d}.sc-ins-tags-button-h   .tag-btn.warning.sc-ins-tags-button{background-color:#ffa639}.sc-ins-tags-button-h   .tag-btn.negative.sc-ins-tags-button{background-color:#f27474}.sc-ins-tags-button-h   .tag-btn.information-1.sc-ins-tags-button{background-color:#f36}.sc-ins-tags-button-h   .tag-btn.information-2.sc-ins-tags-button{background-color:#fdd836;background:#fce26d}.sc-ins-tags-button-h   .tag-btn.blue.sc-ins-tags-button{background-color:#1e86e3}.sc-ins-tags-button-h   .tag-btn.turquoise.sc-ins-tags-button{background-color:#2bbad9}.sc-ins-tags-button-h   .tag-btn.grey.sc-ins-tags-button{background-color:#8c94a4}"}}export{e as InsTagsButton};
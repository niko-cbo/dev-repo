const e=window.insites.h;class t{componentDidLoad(){$("#"+this.name).timezones()}render(){return this.label?e("div",{class:"ins-timezone"},e("label",null,this.label),e("select",{id:this.name,class:"ins-timezone_zone"})):e("div",{class:"ins-timezone"},e("select",{id:this.name,class:"ins-timezone_zone"}))}static get is(){return"ins-timezone"}static get properties(){return{label:{type:String,attr:"label"},name:{type:String,attr:"name"}}}static get style(){return"ins-timezone .ins-timezone{position:relative}ins-timezone .ins-timezone select{-webkit-box-shadow:none;box-shadow:none;font-family:Open Sans,sans-serif;font-size:14px;font-weight:400;border:1px solid #e4e6ec;border-radius:4px;margin-bottom:5px;padding:.5rem;padding-right:30px;width:100%}ins-timezone .ins-timezone select:hover{border:1px solid #8c94a4}ins-timezone .ins-timezone select:active+.icon-search,ins-timezone .ins-timezone select:focus+.icon-search{color:#1f86e3}ins-timezone .ins-timezone label{font-size:12px;font-weight:600;color:#2c3148;font-family:Open Sans,sans-serif;margin-bottom:2px}"}}export{t as InsTimezone};
const e=window.insites.h;class t{constructor(){this.icon="icon-user-1",this.name="Sparkline",this.value="0",this.percentage="0",this.description="N/A",this.movement="none"}componentDidLoad(){this.container=this.insSparklineEl.querySelector(".chart-container"),this.dataSrc&&this.fetchSparkline()}componentWillUpdate(){const e=this;switch(e.movement=e.movement.toLowerCase(),e.movement){case"1":case"increase":e.movement="increase";break;case"0":case"decrease":e.movement="decrease";break;default:e.movement="none"}}val(e,t){let a={icon:this.icon,name:this.name,value:this.value,chartData:this.chartData,percentage:this.percentage,description:this.description,movement:this.movement,dataSrc:this.dataSrc};return e&&!t?this[e]:e&&t?this[e]=t:a}setValue(e){"object"==typeof e&&e instanceof Object&&0==!Object.keys(e).length&&(this.icon=e.icon,this.name=e.name,this.value=e.value,this.percentage=e.percentage,this.description=e.description,this.movement=e.movement,this.dataSrc=e.data_src,this.chartData=e.sparkline_data,this.reRenderChart(this.chartData))}getValue(){return{icon:this.icon,name:this.name,value:this.value,percentage:this.percentage,description:this.description,movement:this.movement,sparkline_data:this.chartData,data_src:this.dataSrc}}refSparklineDetails(e){this.icon=e.icon,this.name=e.name,this.value=e.value,this.percentage=e.percentage,this.description=e.description,this.movement=e.movement.toLowerCase()}fetchSparkline(){const e=this;let t=new XMLHttpRequest;t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){let t=JSON.parse(this.responseText);e.refSparklineDetails(t);let a=[];t.sparkline_data.map(e=>{let t=parseInt(e[1]);a.push([e[0],t])}),e.reRenderChart(a)}},t.open("GET",this.dataSrc,!0),t.send()}reRenderChart(e){this.chartData=e,this.renderChart()}watchChartData(){this.renderChart()}renderChart(){let e=this;setTimeout(()=>{window.Highcharts&&Highcharts.chart({chart:{renderTo:e.container,type:"spline",height:150,marginBottom:30,style:{fontFamily:"Open Sans"}},title:{text:!1},legend:{enabled:!1},exporting:{enabled:!1},yAxis:{visible:!1,minRange:.1},xAxis:{categories:[],visible:!1},credits:{enabled:!1},plotOptions:{series:{marker:{enabled:!1}},areaspline:{marker:{enabled:!1},fillOpacity:.1}},series:[{name:e.name,data:e.chartData}],tooltip:{headerFormat:"<div>",pointFormat:"<span>{point.y}</span>",footerFormat:"</div>",borderWidth:0,shadow:{opacity:.02,offsetX:1,offsetY:1,width:10},padding:5,backgroundColor:"#fff",formatter:function(){return`<span> ${this.key} <br /> <strong>${this.y}</strong></span>`}}})},1e3)}render(){return e("div",{class:"sparkline"},e("i",{class:`far ${this.icon}`}),e("h3",null,this.name),e("span",{class:"value"},this.value),e("div",{class:"chart-container"}),"N/A"!==this.percentage&&0!==this.percentage?e("div",{class:`description ${this.movement}`},this.percentage?e("div",null,"increase"===this.movement||"decrease"===this.movement?e("span",{class:"arrow"}):"- ",e("span",null,this.percentage,"%")," ",this.description):e("div",null,"- 0% ",this.description)):e("div",{class:"description"},e("span",null,"N/A")))}static get is(){return"ins-sparkline"}static get properties(){return{chartData:{type:"Any",attr:"chart-data",mutable:!0,watchCallbacks:["watchChartData"]},container:{state:!0},dataSrc:{type:String,attr:"data-src",mutable:!0},description:{type:String,attr:"description",mutable:!0},getValue:{method:!0},icon:{type:String,attr:"icon",mutable:!0},insSparklineEl:{elementRef:!0},movement:{type:"Any",attr:"movement",mutable:!0},name:{type:String,attr:"name",mutable:!0},percentage:{type:"Any",attr:"percentage",mutable:!0},reRenderChart:{method:!0},setValue:{method:!0},val:{method:!0},value:{type:String,attr:"value",mutable:!0}}}static get style(){return"ins-sparkline{color:#2c3148}ins-sparkline .sparkline{background-color:#fff}ins-sparkline i{color:#1e86e3;padding-right:12px}ins-sparkline h3{font-size:14px;font-weight:400;line-height:20px;font-family:Open Sans,sans-serif;display:inline-block}ins-sparkline span.value{font-size:55px;font-weight:300;font-family:Open Sans,sans-serif;-webkit-font-smoothing:antialiased;letter-spacing:.8px;line-height:98px;display:block}ins-sparkline .chart-container{width:100%;height:auto}ins-sparkline .description{color:#8c94a4;font-size:12px;letter-spacing:.13px;line-height:17px;position:relative}ins-sparkline .description span.arrow{position:absolute;left:5px;top:3px;background:#222;display:inline-block;height:9px;width:2px}ins-sparkline .description span.arrow:before{position:absolute;content:\"\";height:7px;width:2px;top:-2px;left:-2px;background:#222;-webkit-transform:rotate(51deg);transform:rotate(51deg)}ins-sparkline .description span.arrow:after{position:absolute;content:\"\";height:7px;width:2px;top:-2px;left:2px;background:#222;-webkit-transform:rotate(-51deg);transform:rotate(-51deg)}ins-sparkline .description.decrease,ins-sparkline .description.increase{padding-left:18px}ins-sparkline .description.increase span{color:#3eb98c}ins-sparkline .description.increase span.arrow,ins-sparkline .description.increase span.arrow:after,ins-sparkline .description.increase span.arrow:before{background-color:#3eb98c}ins-sparkline .description.decrease span{color:#f27474}ins-sparkline .description.decrease span.arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}ins-sparkline .description.decrease span.arrow,ins-sparkline .description.decrease span.arrow:after,ins-sparkline .description.decrease span.arrow:before{background-color:#f27474}"}}export{t as InsSparkline};
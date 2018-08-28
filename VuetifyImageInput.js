!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("paperduck")):"function"==typeof define&&define.amd?define(["paperduck"],e):t.VuetifyImageInput=e(t.PaperDuck)}(this,function(i){"use strict";i=i&&i.hasOwnProperty("default")?i.default:i;function a(){}var t={name:"VImageInput",props:{value:String,imageWidth:{type:Number,default:256},imageHeight:{type:Number,default:256},imageFormat:{type:String,default:"png"},encoderOptions:{},minImageWidth:{type:Number,default:0},maxImageWidth:{type:Number,default:1/0},minImageHeight:{type:Number,default:0},maxImageHeight:{type:Number,default:1/0},clearable:{type:Boolean,default:!1},croppable:{type:Boolean,default:!1},notMovable:{type:Boolean,default:!1},notFlippable:{type:Boolean,default:!1},notRotatable:{type:Boolean,default:!1},notZoomable:{type:Boolean,default:!1}},data:function(){return{lazyImage:void 0}},computed:{image:{get:function(){return this.lazyImage},set:function(t){this.lazyImage=t,this.$emit("input",this.internalValue)}},internalValue:function(){return this.image?this.image.toDataURL("image/"+this.imageFormat,this.encoderOptions):null}},watch:{value:{handler:function(t){this.internalValue!==t&&(this.lazyImage=i.from(t))},immediate:!0}},methods:{clear:function(){this.image=null},flipHorizontally:function(){this.image=this.image.flop()},flipVertically:function(){this.image=this.image.flip()},rotateClockwise:function(){this.image=this.image.rotate90()},rotateCounterclockwise:function(){this.image=this.image.rotate270()},upload:function(){var e=this,t=document.createElement("input");t.type="file",t.addEventListener("change",function(){i.load(t).then(function(t){e.image=t.scaleMin(e.imageWidth,e.imageHeight)}).catch(a)}),t.click()}},render:function(t){var e=this,i=e.clearable,a=e.image,o=e.imageHeight,n=e.imageWidth,l=e.notFlippable,r=e.notRotatable;if(a){var p=t("img",{attrs:{src:a.toDataURL()}}),c=[];if(i){var s=t("v-icon","clear"),u=t("v-btn",{props:{flat:!0,icon:!0},on:{click:this.clear}},[s]),d=t("v-spacer");c.push(u,d)}if(!l){var f=t("v-icon",{style:{transform:"rotate(180deg)"}},"flip"),m=t("v-tooltip",{props:{right:!0}},[t("v-btn",{slot:"activator",props:{flat:!0,icon:!0},on:{click:this.flipHorizontally}},[f]),t("span","flip horizontally")]),g=t("v-icon",{style:{transform:"rotate(90deg)"}},"flip"),h=t("v-tooltip",{props:{right:!0}},[t("v-btn",{slot:"activator",props:{flat:!0,icon:!0},on:{click:this.flipVertically}},[g]),t("span","flip vertically")]);c.push(m,h)}if(!r){var y=t("v-icon",{style:{transform:"rotate(180deg)"}},"rotate_90_degrees_ccw"),v=t("v-tooltip",{props:{right:!0}},[t("v-btn",{slot:"activator",props:{flat:!0,icon:!0},on:{click:this.rotateClockwise}},[y]),t("span","rotate clockwise")]),b=t("v-icon","rotate_90_degrees_ccw"),w=t("v-tooltip",{props:{right:!0}},[t("v-btn",{slot:"activator",props:{flat:!0,icon:!0},on:{click:this.rotateCounterclockwise}},[b]),t("span","rotate counterclockwise")]);c.push(v,w)}if(0<c.length){var k=t("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}},c);return t("div",{style:{display:"inline"}},[t("div",{style:{display:"flex"}},[t("div",{style:{width:n+"px",height:o+"px",backgroundColor:"#000000",display:"flex",justifyContent:"center",alignItems:"center"}},[p]),k])])}return p}var x=t("v-icon","cloud_upload");return t("div",{style:{width:n+"px",height:o+"px",border:"1px dashed #bdbdbd",borderRadius:"8px",backgroundColor:"#eeeeee",display:"inline-flex",justifyContent:"center",alignItems:"center"}},[t("v-btn",{props:{color:"primary",fab:!0,large:!0},on:{click:this.upload}},[x])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(t.name,t),t});
(function(p){function l(a,b){console&&console.log&&(b||(b="info"),console.log(b.toUpperCase()+":"+a))}window.W$=window;W$.D$=W$.document;W$.H$=D$.getElementsByTagName("head")[0];W$.T$=D$.getElementById("tail");W$.B$=D$.getElementsByTagName("body")[0];W$.C$=D$.styleSheets;W$.S$=D$.scripts;W$.M$={};(function(){return void 0!=W$.M$?W$.M$:null});Function.prototype.bind=function(a){var b=this;return function(){return b.apply(a,arguments)}};window.onload=function(){M$._I.domLoaded||(M$._I.domLoaded=!0,
appts.onload=performance.now(),M$.addEvents(),M$.onResizeComplete(),function(a,b,c,d,e,f,h){a.GoogleAnalyticsObject=e;a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)};a[e].l=1*new Date;f=b.createElement(c);h=b.getElementsByTagName(c)[0];f.async=1;f.src=d;h.parentNode.insertBefore(f,h)}(window,document,"script","","ga"),ga("create","UA-35732532-1","i2tmlabs.com"),ga("send","pageview"),W$.M$=W$.M$)};window.M$=window.Maestro={_I:{w:2E3},VERSION:"1.7.0",APP_BASE:"",VIEWPORT:"wrapper",resizeTimer:0,
LOADING:0,addEvent:function(a,b,c){a&&a.addEventListener(b,c,!1)},removeEvent:function(a,b,c){a.removeEventListener(b,c,!1)},addEvents:function(){M$.addEvent(W$,"resize",this.resize.bind(this));M$.addEvent(M$.gei(this.VIEWPORT),"onchange",this.viewchanged.bind(this));M$.loadAllScripts()},viewchanged:function(){this.autoHeight()},on3PL:function(){appts.on3PL=performance.now();M$.loadAllScripts(M$._I.scripts);M$._I.applet||(M$._I.applet=M$.APP_BASE+"/applets/applet.main.html");M$.xhr(M$._I.applet,M$.VIEWPORT)},
start:function(a,b,c){appts.maestrostart=performance.now();try{this.APP_BASE=this.gei("base").baseURI}catch(d){l("error","Setting APP_BASE, Unauthorized use of API possible.")}if("file:"==location.protocol)return this.alert("error","You cannot run document locally. Please access through web server."),!1;"127.0.0.1"==location.hostname||"localhost"==location.hostname?(this.SERVER=location.origin+"/i2tmlabs.com/",this.PATH={cdn:this.SERVER+"cdn/framework/",stc:this.SERVER+"/cdn/static/",shr:this.SERVER+
"/cdn/static/shared/",app:this.SERVER+"/apps/i2tm/shared/"}):this.PATH={cdn:"http://cdn.i2tmlabs.com/framework/",stc:"http://static.i2tmlabs.com/",shr:"http://static.i2tmlabs.com/shared/",app:"http://apps.i2tmlabs.com/"};this.lds("link","nano-css",this.PATH.cdn+"css/production.css","first",!1,this.contentLoaded,function(){l("Production.css error")});this.lds("js","nano-js",this.PATH.cdn+"js/production_tail.js","last",!0,this.contentLoaded,function(){l("Production_tail.js error")});"string"===typeof b&&
(b=this.gei(b),"object"===typeof b&&(this.VIEWPORT=b));this._I.scripts=c;this._I.applet=a},loadAllScripts:function(a){var b=document.getElementById("tail");if(b&&"DIV"==b.tagName&&a&&"Array"===a.constructor.name){var c;do c=a.shift(),this.lds(this.gex(c),this.gfn(c),c,"last",!1,this.contentLoaded,function(){l(c+" Error.")});while(0<a.length)}},wait:function(){var a=performance.now();a<M$._I.w?(M$.gei("position").style.width=500-Math.floor(M$._I.w/a)+"%",M$._I.t=setTimeout(M$.wait,500)):1>M$.LOADING&&
(clearTimeout(M$._I.t),M$._I.rc||(M$._I.rc=!0,W$.MaestroReady&&W$.MaestroReady(),M$.cls(M$.VIEWPORT,"set","opacity100"),M$.cls("splash","set","vanish")))},contentLoaded:function(){var a=this.src?this.src:this.href;appts[M$.gfn(a)+" loaded"]=performance.now();l(M$.gfn(a)+" loaded.");M$.LOADING--;M$.wait()},insertAds:function(){B$.getElementsByClassName("googleAd")},mobileMenuCollapse:function(){$("#bs-example-navbar-collapse-1").on("show.bs.collapse",function(){$("#bs-example-navbar-collapse-1").append($("#sidebar").html());
$("#bs-example-navbar-collapse-1 ul").last().removeClass("nav-pills nav-stacked").addClass("navbar navbar-nav")});$("#bs-example-navbar-collapse-1").on("hidden.bs.collapse",function(){$("#bs-example-navbar-collapse-1 ul:last-child").remove()});$(window).on("resize",function(){768<window.innerWidth&&$("#bs-example-navbar-collapse-1").collapse("hide")})},autoScale:function(){for(var a,b,c,d=B$.getElementsByClassName("autoscale"),e=0;e<d.length;e++)d[e].dataset.desired&&(c=d[e].dataset.desired.split(","),
a=window.outerWidth,b=window.outerHeight,c=Math.min(c[0]/a,c[1]/b),a*=c,b*=c,d[e].style.width=a+"px",d[e].style.height=b+"px")},autoHeight:function(){for(var a=0,b=[],b=b.concat(B$.getElementsByClassName("row autoheight")),b=b.concat(B$.getElementsByClassName("row-fluid autoheight")),c=0;c<b.length;c++)if(0<b[c].length)for(var d=0;d<b[c].length;d++){for(var e=0;e<b[c][d].children.length;e++)b[c][d].children[e].clientHeight>a&&(a=b[c][d].children[e].clientHeight);for(e=0;e<b[c][d].children.length;e++)b[c][d].children[e].style.height=
a}},resize:function(){clearTimeout(this.resizeTimer);this.resizeTimer=setTimeout(this.onResizeComplete,250)},onResizeComplete:function(){M$.autoHeight();M$.autoScale()},getDB:function(a,b){function c(a,b){var c=new RegExp(Object.keys(b).join("|"),"gi");return a.replace(c,function(a){return b[a.toLowerCase()]})}var d,e=[],f={};d=['<div class="headerDIV greenBG"><span class="headerBigGold">VAR0</span><span class="headerSmall">VAR1</span></div>','<p class="greenBG">VAR0</p>','<div class="jumbotron greenBG"><h1>VAR0</h1><p>VAR1</p></div>',
"framework/","static/"];d[17]="<h1>&#98";d[18]="</h1><h3>";d[19]="</h3>";d[20]="div";d[21]="ul";d[22]="li";d[23]="common";d[24]="splash";d[25]='Application&nbsp;<small class="headerSmall">';d[50]='<style>.CaptHover{background-color:#ccc;padding:0;position:relative;overflow:hidden;height:200px}.CaptHover:hover .caption{opacity:1;transform:translateY(-150px);-webkit-transform:translateY(-150px);-moz-transform:translateY(-150px);-ms-transform:translateY(-150px);-o-transform:translateY(-150px)}.CaptHover img{z-index:4;padding:20px;margin:0 auto}.CaptHover h3{border-top:2px solid #fff;border-bottom:2px solid #fff;padding:10px}.CaptHover .caption{position:absolute;top:150px;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;transition:all .3s ease-in-out;width:100%}.CaptHover .blur{background-color:rgba(10,81,117,.75);height:300px;z-index:5;position:absolute;width:100%}.CaptHover .caption-text{z-index:10;color:#fff;position:absolute;height:300px;text-align:center;top:-20px;width:100%}</style><div class="CaptHover"><p style="text-align:center;margin-top:20px"><img src="{IMG:URL}" class="img-responsive" /></p><div class="caption"><div class="blur"></div><div class="caption-text"><h3>{TITLE}</h3><p>{DESC}</p><a href="{URL}" target="{TARGET}">{LABEL}</span></a></div></div></div>';
if(d[a]){d=d[a];if(!b)return d;if(arguments&&(e=Array.prototype.slice.call(arguments,0),a=e.shift(),0<e.length))for(var h,k=0;k<e.length;k++)h="VAR"+k,f[h]=e[k];return c(d,f)}},component:function(a,b){var c=this.gei(a);c&&c.appendChild(b)},header:function(a,b){if("object"==typeof("object"==typeof a?a:this.gei(a))){var c=b.split(" ");c.length&&1<c.length&&(res1=c.slice(0,c.length/2),res2=c.slice(c.length/2,c.length),c='<div class="page-header"><h1>'+res1.join(" ")+"<small>"+res2.join(" ")+"</small></h1></div>",
a.innerHTML=c+a.innerHTML)}},toggleFullScreen:function(a){D$.fullScreenElement&&null!==D$.fullScreenElement||!D$.mozFullScreen&&!D$.webkitIsFullScreen?(D$.documentElement.requestFullScreen?D$.documentElement.requestFullScreen():D$.documentElement.mozRequestFullScreen?D$.documentElement.mozRequestFullScreen():D$.documentElement.webkitRequestFullScreen&&D$.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT),a.attributes[2]&&(a.attributes[2].value="glyphicon glyphicon-remove",a.attributes[6].value=
"Cancel fullscreen")):(D$.cancelFullScreen?D$.cancelFullScreen():D$.mozCancelFullScreen?D$.mozCancelFullScreen():D$.webkitCancelFullScreen&&D$.webkitCancelFullScreen(),a.attributes[2]&&(a.attributes[2].value="glyphicon glyphicon-fullscreen",a.attributes[6].value="Enter Fullscreen"))},redraw:function(){B$.style.display="none";B$.offsetHeight=B$.offsetHeight;B$.style.display="block"},feature:function(a,b){var c=D$.createElement("div");c.innerHTML='<div class="headerDIV greenBG"><span class="headerBigGold">'+
b.titleBig+'</span><span class="headerSmall">'+b.titleSmall+"</span></div>";c.innerHTML+='<p class="greenBG">'+b.content+"</p>";b.linkHref&&""!=b.linkHref&&(c.innerHTML+='<p><a class="btn btn-i2tm" href="'+b.linkHref+'" role="button">'+b.linkName+"</a></p>");this.component(a,c)},jumbotron:function(a,b){var c=D$.createElement("div");c.innerHTML='<div class="jumbotron greenBG"><h1>'+b.title+"</h1><p>"+b.content+"</p></div>";this.component(a,c)},article:function(a,b){var c=D$.createElement("div");c.innerHTML=
'<div class="page-header">';c.innerHTML=this.getDB(0,"Article","header","image_src","content paragraph1","content paragraph2")},play:function(a,b){ga&&a&&ga("send","event","button","click",a);b&&(location.href=b)},cls:function(a,b,c,d){try{if(a="string"!=typeof a?a:this.gei(a))switch(b.toLowerCase()){case "set":a.className=c;break;case "clear":a.className="";break;case "add":a.classList.add(c);break;case "remove":try{a.classList.remove(c)}catch(e){}break;case "replace":try{a.classList.remove(c)}catch(f){}try{a.classList.add(d)}catch(h){}break;
case "toggle":a.classList.toggle(c)}}catch(k){alert(k)}},click:function(a){if(arguments&&arguments.callee&&arguments.callee.caller&&arguments.callee.caller.arguments&&arguments.callee.caller.arguments[0].srcElement)var b=arguments.callee.caller.arguments&&arguments.callee.caller.arguments[0].srcElement.parentElement;for(var c=b.parentElement,d=0;d<c.children.length;d++)M$.cls(c.children[d],"remove","active");M$.cls(b,"add","active");ga("send","event","button","click",a);M$.xhr(M$.APP_BASE+"applets/"+
a+".html",$M._onLoad,$M._onError)},aet:function(a,b,c,d){a=this.gei(a);b=D$.createElement(b);c&&(b.id=c);d&&(b.innerHTML=d);a.appendChild(b);return b},vld:function(a){return!(null===a||"undefined"===typeof a||!1===a||""===a)},chk:function(a,b){return this.vld(a)?a:b},gei:function(a,b){return D$.getElementById(a)},gex:function(a){return"undefined"===typeof a||""==a?"":/(?:\.([^.]+))?$/.exec(a)[1].toLowerCase()},gfn:function(a){if("string"===typeof a)return a.substring(a.lastIndexOf("/")+1)},bnd:function(a,
b){return function(){b.apply(a,arguments)}},_onLoad:function(a){var b=M$.parseApplet(a);if("object"===typeof b&&"applet"==b.attributes.component.value){a=b.attributes.target.value||"body";if(""!=b.attributes.files.value)for(var c,d=b.attributes.files.value.split(","),e=M$.APP_BASE+b.attributes.publisher.value+"/assets/",f=0;f<d.length;f++)c=M$.gex(d[f]),"js"==c?M$.lds("script","",e+d[f],!0):"css"==c&&M$.lds("link","",e+d[f],!1);"replace"==b.attributes.render.value&&(M$.gei(a).innerHTML="");M$.gei(a).appendChild(b);
if("function"==typeof window.onAppletLoaded)window.onAppletLoaded();window.hljs&&(hljs.initHighlightingOnLoad(),$("pre code").each(function(a,b){hljs.highlightBlock(b)}))}else if(b=M$.gei(M$.VIEWPORT))b.innerHTML=a},_onError:function(a){var b=M$.gei(M$.VIEWPORT);b&&(b.innerHTML=a)},lds:function(a,b,c,d,e,f,h){function k(a){m=!0==d?T$:H$;"string"!=typeof e&&(e="last");if("first"==e)return m.firstElementChild(g),M$.LOADING++,!0;if("last"==e)return m.appendChild(g),M$.LOADING++,!0;m=a.gei(e);return"undefined"!=
typeof m&&null!=m.nextElementSibling?(m.nextElementSibling.insertBefore(g),M$.LOADING++,!0):!1}var g,m;c.indexOf("applet.");for(var n=0;3>n;n++)arguments[n]=this.chk(arguments[n],!1);this.chk(e,!1);if("script"==arguments[0]||"js"==arguments[0])g=D$.createElement("script"),g.async=1,g.src=c,g.type="application/javascript";else if("link"==arguments[0]||"css"==arguments[0])g=D$.createElement("link"),g.href=c,g.rel="stylesheet",g.type="text/css";else return!1;g.id=arguments[1];g.onload=f?f:M$.contentLoaded;
g.onerror=h?h:function(){l("Error","Loading "+c)};return-1===d?!0:k(this)},upo:function(a){a||(a=location.search.substring(1));return""==a?!1:JSON.parse('{"'+decodeURI(a).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')},minimizeCSS:function(a){a=a.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"");a=a.replace(/ {2,}/g," ");a=a.replace(/ ([{:}]) /g,"$1");a=a.replace(/([;,]) /g,"$1");return a=a.replace(/ !/g,"!")},parseApplet:function(a){(new DOMParser).parseFromString(a,"text/html").getElementsByTagName("m-nano");
if(a&&a.tagName&&"M-NANO"===a.tagName&&a.component&&"applet"===a.component){a.dataset.publisher||a.setAttribute("data-publisher","shared");a.dataset.target||a.setAttribute("data-target",this.VIEWPORT);a.dataset.render||a.setAttribute("data-render","replace");a.dataset.files||a.setAttribute("data-files","");M$.VIEWPORT=a.dataset.target.value||"wrapper";if(""!=a.dataset.files)for(var b,c=a.dataset.files.split(","),d=0;d<c.length;d++)b=M$.gex(c[d]),"js"==b?M$.lds("script","",M$.APP_BASE+c[d],!0):"css"==
b&&M$.lds("link","",M$.APP_BASE+c[d],!1);var e;b=a.getElementsByTagName("style");if(0<b.length){for(d=0;d<b.length;d++)e+=b[d].innerText,a.removeChild(b[d]);e=this.minimizeCSS(e);d=D$.createElement("style");d.rel="stylesheet";d.type="text/css";d.id=a.id+"_css";d.innerText=e;H$.appendChild(d)}"replace"===a.dataset.render&&(M$.gei(M$.VIEWPORT).innerHTML="");M$.gei(M$.VIEWPORT).appendChild(a);a="onApplet"+a.id+"Loaded";if("function"===typeof window[a])window[a]();window.hljs&&(hljs.initHighlightingOnLoad(),
$("pre code").each(function(a,b){hljs.highlightBlock(b)}));return!0}return a},alert:function(a,b){var c=this.gei("modaltitle");this.gei("modaltext").innerHTML=b;switch(a.toLowerCase()){case "error":c.innerHTML=this.getDB(25)+"Error</small>";this.cls("modaltitle","set","headerBig modal-title-error");break;case "warning":c.innerHTML=this.getDB(25)+"Warning</small>";this.cls("modaltitle","set","headerBig modal-title-warning");break;default:c.innerHTML=this.getDB(25)+"Info</small>",this.cls("modaltitle",
"set","headerBig modal-title-info")}this.cls("ErrorModal","set","opacity100")},xhr:function(a,b,c,d,e,f){createCORSRequest=function(b,c){var d=new XMLHttpRequest;"withCredentials"in d?d.open(b,c,!0):"undefined"!=typeof XDomainRequest?(d=new XDomainRequest,xr.open(b,c)):(d=null,M$.alert("error",maestro2.gfn(a)+": CORS not supported."));return d};getTitle=function(a){return a.match("<title>(.*)?</title>")[1]};makeCorsRequest=function(a,b,c){M$.gei("LED-Rec")&&(M$.gei("LED-Rec").className="led round green-on");
var d=createCORSRequest("GET",a);d?(d.onloadstart=function(){M$.gei("LED-Snd")&&(M$.gei("LED-Snd").className="led round red-on")},d.onloadend=function(){M$.gei("LED-Snd")&&(M$.gei("LED-Snd").className="led round red-off")},d.onload=function(){if("function"===typeof b)b(d.responseText);else if("string"===typeof b){var a;if(a=M$.gei(b))a.innerHTML=d.responseText}else l("ERROR: [XHR] Ajax data received but no default handler found.")},d.onerror=function(){M$.alert("error",this.responseText)},d&&d.send&&
d.send(),M$.gei("LED-Rec")&&(M$.gei("LED-Rec").className="led round green-off")):alert("CORS not supported")};makeCorsRequest(a,b,c,d,e)}};registerComponents=function(){M$.Component.search={init:function(a,b){var c,d;c="m-nano #nav-search{border-radius:2em 0em 0em 2em;background-color:#008000;color:#FFF;width:5em;border:none}m-nano #nav-search:active,#nav-search:focus{width:20em;border:none}";c+="m-nano .btn-i2tm-search{height:2.4em;background-color:#008000}";d='<form class="navbar-form" role="search" action="#" onclick=""><div class="input-group">';
d+='<input type="text" class="form-control" name="nav-search" id="nav-search" x-webkit-speech="">';d+='<input name="siteurl" type="hidden" value="i2tmlabs.com/">';d+='<div class="input-group-btn">';d+='<button class="btn btn-i2tm-search" type="submit"><i class="glyphicon glyphicon-search"></i></button>';d+="</div></div></form>";return[c,d]}};M$.Component.length++;M$.Component.applet={init:function(a,b){return!0===M$.parseApplet(M$.gei(b.id))?!0:["",""]}};M$.Component.length++;M$.Component.header=
{init:function(a,b){a.innerHTML=this.parse(a.innerHTML);a.children[0].css="font-family:neuropol;color:green;text-transform:uppercase";a.children[1].css="color:white;text-trassform:lowercase";return!0},parse:function(a){a=a.split(" ");if(a.length&&1<a.length)return res1=a.slice(0,a.length/2),res2=a.slice(a.length/2,a.length),'<h1 class="reflect">'+res1.join(" ")+"&nbsp;<small>"+res2.join(" ")+'</small></h1><hr class="reflect">'}};M$.Component.length++;M$.Component.led={init:function(a,b){var c;c="margin:0.75em;display:inline-block;"+
this.getShape(b.shape);c+=this.getColorState(b.color,b.state);return[c,""]},getShape:function(a){var b="";return"square"==a?b+"width:1em;height:1em;border-radius:0%;":"rectangle"==a?b+"width:2em;height:1em;border-radius:0%;":b+"width:1em;height:1em;border-radius:50%;"},getColorState:function(a,b){var c="";return"red"==a&&"on"==b?c+"background-color:#F40;box-shadow:#000 0 -1px 7px 1px, inset #600 0 -1px 9px, #F00 0 2px 1em;":"red"==a&&"off"==b?c+"background-color:#690606;box-shadow:#000 0 -1px 7px 1px, inset #300 0 -1px 9px, #600 0 2px 1em;":
"green"==a&&"on"==b?c+"background-color:#393;box-shadow:#000 0 -1px 7px 1px, inset #0F0 0 -1px 9px, #7D0 0 2px 1em;":"green"==a&&"off"==b?c+"background-color:#250;box-shadow:#000 0 -1px 7px 1px, inset #020 0 -1px 9px, #040 0 2px 1em;":"blue"==a&&"on"==b?c+"background-color:#0BF;box-shadow:#000 0 -1px 7px 1px, inset #006 0 -1px 9px, #0BF 0 2px 1em;":"blue"==a&&"off"==b?c+"background-color:#060669;box-shadow: #000 0 -1px 7px 1px, inset #003 0 -1px 9px, #006 0 2px 1em;":"yellow"==a&&"on"==b?c+"background-color:#FF0;box-shadow:#000 0 -1px 7px 1px, inset #660 0 -1px 9px, #FF0 0 2px 1em;":
c+"background-color:#A90;box-shadow:#000 0 -1px 7px 1px, inset #220 0 -1px 9px, #440 0 2px 1em;"},onchanged:function(a,b){a.style.cssText=this.init(a,b)[0]}};M$.Component.length++};M$.Component=[];M$.Element={};registerComponents();M$.Element.prototype=Object.create(HTMLModElement.prototype);M$.Element.prototype.createdCallback=function(){var a=this.parseAttributes();this.init(a)};M$.Element.prototype.attachedCallback=function(){if(M$.Component[this.component].oninsert)M$.Component[this.component].oninsert(this,
arguments)};M$.Element.prototype.detachedCallback=function(){if(M$.Component[this.component].onremove)M$.Component[this.component].onremove(this,arguments)};M$.Element.prototype.attributeChangedCallback=function(){if(M$.Component[this.component].onchanged)M$.Component[this.component].onchanged(this,this.parseAttributes())};M$.Element.prototype.parseAttributes=function(){for(var a,b,c={},d=["component","data-component"],e=0;e<this.attributes.length;e++)a=this.attributes[e].name.toLowerCase()||"",b=
this.attributes[e].value||"",-1!=d.indexOf(a)?this.component=b:c[a]=b;return c};M$.Element.prototype.init=function(a){a=M$.Component[this.component].init(this,a);!0!==a&&(this.style.css=a[0],this.innerHTML=a[1])};Object.defineProperty(M$.Element.prototype,"css",{value:""});M$.Element=D$.registerElement("m-nano",{prototype:M$.Element.prototype})})();M$.start();
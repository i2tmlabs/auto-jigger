(function(){dbg("Maestro loaded.");window.W$=window;W$.D$=W$.document;W$.H$=D$.getElementsByTagName("head")[0];W$.T$=D$.getElementById("tail");W$.B$=D$.getElementsByTagName("body")[0];W$.C$=D$.styleSheets;W$.S$=D$.scripts;W$.mobilecheck=function(){var a=!1,b=navigator.userAgent||navigator.vendor||window.opera;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b)||
/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,
4)))a=!0;return a};W$.M$={};(function(){return void 0!=W$.M$?W$.M$:null});Function.prototype.bind=function(a){var b=this;return function(){return b.apply(a,arguments)}};window.onload=function(){if(!M$._I.domLoaded&&(M$._I.domLoaded=!0,dbg("window event onLoaded."),M$.addEvents(),M$.onResizeComplete(),"undefined"!=typeof M$))M$.on3PL()};var n={_I:{w:2E3,l:0,tgt:[]},VERSION:"1.8.0",VIEWPORT:"wrapper",resizeTimer:0,addEvent:function(a,b,e){a&&a.addEventListener(b,e,!1)},removeEvent:function(a,b,e){a.removeEventListener(b,
e,!1)},addEvents:function(){M$.addEvent(W$,"resize",this.resize.bind(this));M$.addEvent(M$.gei(this.VIEWPORT),"onchange",this.viewchanged.bind(this))},UUID:{valid:function(a){if(vld(a)&&""!==a&&4==a.split("-").length-1){if("1"==a.charAt(4)&&"9"==a.charAt(17)&&"6"==a.charAt(22)&&"9"==a.charAt(30))return!0;if("file:"===location.protocol&&r2wl.Class.devMode)return this.error("Validation Failed, Bad UUID!"),!1}},create:function(){return"xxxx1xxx-xxxx-4xx9-yxx6-xxxxxx9xxxxx".replace(/[xy]/g,function(a){var b=
16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}},viewchanged:function(){this.autoHeight()},on3PL:function(){dbg("Load 3rd party APIs.");var a=this.asset(this.config.app.publisher,this.config.app.name);M$._I.applet=a+"applets/applet.main.html";M$.xhr(M$._I.applet,M$._onLoad,M$._onError)},start:function(){dbg("Suucessful, Initializing Maestro.");if("file:"==location.protocol)return this.dbg("error","You cannot run document locally. Please access through web server."),!1;"127.0.0.1"==location.hostname||
"localhost"==location.hostname?(this.SERVER=location.origin+"/i2tmlabs.com/",this.PATH={cdn:this.SERVER+"cdn/framework/",stc:this.SERVER+"/cdn/static",shr:this.SERVER+"/cdn/static/maestro/shared/",app:this.SERVER+"/apps/i2tm/shared/"}):this.PATH={cdn:"http://cdn.i2tmlabs.com/framework/",stc:"http://static.i2tmlabs.com",shr:"http://static.i2tmlabs.com/maestro/shared/",app:"http://apps.i2tmlabs.com/"};"string"===typeof target&&(target=this.gei(target),"object"===typeof target&&(this.VIEWPORT=target))},
parseApplet:function(a,b){function e(b,d){function e(a){dbg("Minimizing...");a=a.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"");a=a.replace(/ {2,}/g," ");a=a.replace(/ ([{:}]) /g,"$1");a=a.replace(/([;,]) /g,"$1");return a=a.replace(/ !/g,"!")}dbg("Processing "+b+" embeded code...");var c,g="";c=a.getElementsByTagName(b.toLowerCase());if(0<c.length){for(var f=0;f<c.length;f++)"script"==b?-1===c[f].outerHTML.indexOf("adsbygoogle")&&(g+=c[f].innerText,a.removeChild(c[f])):"style"==b&&(g+=c[f].innerText,
a.removeChild(c[f]));if(0<g.length)if(g=e(g),c=D$.createElement(b),c.id=a.id+"_"+b,c.innerText=g,dbg("Attaching "+b+" "+c.id+" to DOM."),H$&&T$)if("style"==b)H$.appendChild(c);else{try{T$.appendChild(c),eval(c.id.innerHTML)}catch(n){dbg("Applet "+a.id+" Error: "+n.message)}if("function"===typeof M$["applet."+a.id].onUnloaded){dbg("Attaching "+a.id+":onUnloaded() event.");try{c.id.onunload=M$["applet."+a.id].onUnloaded().bind(window)}catch(p){dbg("Applet "+a.id+" Error: "+p.message)}}if("function"===
typeof M$["applet."+a.id].onLoaded){dbg("Envoking "+a.id+":onLoaded() event.");try{M$["applet."+a.id].onLoaded().bind(window)}catch(q){dbg("Applet "+a.id+" Error: "+q.message)}}}else dbg("Head (H$) and Tail (T$) alias not set.")}}function c(a,b,c){return a.replace(new RegExp(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),c)}dbg("Is Applet?...");var d=(new DOMParser).parseFromString(a,"text/html").getElementsByTagName("ins")[0];"string"===typeof a&&(a=d);if(a&&a.tagName&&"INS"===a.tagName&&a.dataset.component&&
"applet"===a.dataset.component){a.dataset.publisher||a.setAttribute("data-publisher","shared");a.dataset.folder||a.setAttribute("data-folder","");a.dataset.target||a.setAttribute("data-target",this.VIEWPORT);a.dataset.render||a.setAttribute("data-render","replace");a.dataset.files||a.setAttribute("data-files","");a.innerHTML=c(a.innerHTML,"{ROOT}",this.asset(a.dataset.publisher,a.dataset.folder));M$._I.tgt&&M$._I.tgt[M$.gfn(b)]?(M$.VIEWPORT=M$._I.tgt[M$.gfn(b)],delete M$._I.tgt[M$.gfn(b)]):M$.VIEWPORT=
a.dataset.target.value||"wrapper";dbg("Yes, Applet "+a.id+" by "+a.dataset.publisher+" processing...");if(""!=a.dataset.files){var f=a.dataset.files.split(",");dbg(f.length+" Required files - Loading...");for(var g=0;g<f.length;g++)d=M$.gex(f[g]),path=M$.asset(a.dataset.publisher,a.dataset.folder+M$.getDB(11)+d,f[g]),"js"==d?M$.lds("script",M$.gfn(f[g]),path,!0):"css"==d&&M$.lds("link",M$.gfn(f[g]),path,!1)}e("style",a.getElementsByTagName("style"));e("script",a.getElementsByTagName("script"));"replace"===
a.dataset.render&&(M$.gei(M$.VIEWPORT).innerHTML="");M$.gei(M$.VIEWPORT).appendChild(a);d=a.id+"Loaded";if("function"===typeof window[d])window[d]();window.hljs&&(hljs.initHighlightingOnLoad(),$("pre code").each(function(a,b){hljs.highlightBlock(b)}));dbg("Complete.");return!0}return!1},wait:function(){performance.now()<M$._I.w?M$._I.t=setTimeout(M$.wait,500):1>=M$._I.l&&(clearTimeout(M$._I.t),M$._I.rc||(M$._I.rc=!0,W$.MaestroReady&&W$.MaestroReady(),M$.cls(M$.VIEWPORT,"set","opacity100"),M$.cls("splash",
"set","vanish")))},contentLoaded:function(){dbg(M$.gfn(this.src?this.src:this.href)+" loaded.");M$._I.l--;M$.wait()},mobileMenuCollapse:function(){$("#bs-example-navbar-collapse-1").on("show.bs.collapse",function(){$("#bs-example-navbar-collapse-1").append($("#sidebar").html());$("#bs-example-navbar-collapse-1 ul").last().removeClass("nav-pills nav-stacked").addClass("navbar navbar-nav")});$("#bs-example-navbar-collapse-1").on("hidden.bs.collapse",function(){$("#bs-example-navbar-collapse-1 ul:last-child").remove()});
$(window).on("resize",function(){768<window.innerWidth&&$("#bs-example-navbar-collapse-1").collapse("hide")})},autoScale:function(){var a,b;if("undefined"!==typeof B$)for(var e,c=B$.getElementsByClassName("autoscale"),d=0;d<c.length;d++)c[d].dataset.desired&&(e=c[d].dataset.desired.split(","),a=window.outerWidth,b=window.outerHeight,e=Math.min(e[0]/a,e[1]/b),a*=e,b*=e,c[d].style.width=a+"px",c[d].style.height=b+"px")},autoHeight:function(){if("undefined"!==typeof B$)for(var a=0,b=[],b=b.concat(B$.getElementsByClassName(this.getDB(9))),
b=b.concat(B$.getElementsByClassName(this.getDB(10))),e=0;e<b.length;e++)if(0<b[e].length)for(var c=0;c<b[e].length;c++){for(var d=0;d<b[e][c].children.length;d++)b[e][c].children[d].clientHeight>a&&(a=b[e][c].children[d].clientHeight);for(d=0;d<b[e][c].children.length;d++)b[e][c].children[d].style.height=a}},resize:function(){clearTimeout(this.resizeTimer);this.resizeTimer=setTimeout(this.onResizeComplete,250)},onResizeComplete:function(){M$.autoHeight();M$.autoScale()},getDB:function(a,b){function e(a,
b){var c=new RegExp(Object.keys(b).join("|"),"gi");return a.replace(c,function(a){return b[a.toLowerCase()]})}var c,d=[],f={};c='<div class="headerDIV greenBG"><span class="headerBigGold">VAR0</span><span class="headerSmall">VAR1</span></div>;<p class="greenBG">VAR0</p>;<div class="jumbotron greenBG"><h1>VAR0</h1><p>VAR1</p></div>;framework/;static/;glyphicon glyphicon-remove;Cancel fullscreen;glyphicon glyphicon-fullscreen;Enter Fullscreen;row autoheight;row-fluid autoheight;/;undefined;application/javascript'.split(";");
c[23]="common";c[25]='Application&nbsp;<small class="headerSmall">';c[50]='<style>.CaptHover{background-color:#ccc;padding:0;position:relative;overflow:hidden;height:200px}.CaptHover:hover .caption{opacity:1;transform:translateY(-150px);-webkit-transform:translateY(-150px);-moz-transform:translateY(-150px);-ms-transform:translateY(-150px);-o-transform:translateY(-150px)}.CaptHover img{z-index:4;padding:20px;margin:0 auto}.CaptHover h3{border-top:2px solid #fff;border-bottom:2px solid #fff;padding:10px}.CaptHover .caption{position:absolute;top:150px;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;transition:all .3s ease-in-out;width:100%}.CaptHover .blur{background-color:rgba(10,81,117,.75);height:300px;z-index:5;position:absolute;width:100%}.CaptHover .caption-text{z-index:10;color:#fff;position:absolute;height:300px;text-align:center;top:-20px;width:100%}</style><div class="CaptHover"><p style="text-align:center;margin-top:20px"><img src="{IMG:URL}" class="img-responsive" /></p><div class="caption"><div class="blur"></div><div class="caption-text"><h3>{TITLE}</h3><p>{DESC}</p><a href="{URL}" target="{TARGET}">{LABEL}</span></a></div></div></div>';
if(c[a]){c=c[a];if(!b)return c;if(arguments&&(d=Array.prototype.slice.call(arguments,0),a=d.shift(),0<d.length))for(var g,k=0;k<d.length;k++)g="VAR"+k,f[g]=d[k];return e(c,f)}},toggleFullScreen:function(a){D$.fullScreenElement&&null!==D$.fullScreenElement||!D$.mozFullScreen&&!D$.webkitIsFullScreen?(D$.documentElement.requestFullScreen?D$.documentElement.requestFullScreen():D$.documentElement.mozRequestFullScreen?D$.documentElement.mozRequestFullScreen():D$.documentElement.webkitRequestFullScreen&&
D$.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT),a.attributes[2]&&(a.attributes[2].value=this.getDB(5),a.attributes[6].value=this.getDB(6))):(D$.cancelFullScreen?D$.cancelFullScreen():D$.mozCancelFullScreen?D$.mozCancelFullScreen():D$.webkitCancelFullScreen&&D$.webkitCancelFullScreen(),a.attributes[2]&&(a.attributes[2].value=this.getDB(7),a.attributes[6].value=this.getDB(8)))},redraw:function(){B$.style.display="none";B$.offsetHeight=B$.offsetHeight;B$.style.display="block"},
play:function(a,b){ga&&a&&ga("send","event","button","click",a);b&&(location.href=b)},cls:function(a,b,e,c){try{if(a="string"!=typeof a?a:this.gei(a))switch(b.toLowerCase()){case "set":a.className=e;break;case "clear":a.className="";break;case "add":a.classList.add(e);break;case "remove":try{a.classList.remove(e)}catch(d){}break;case "replace":try{a.classList.remove(e)}catch(f){}try{a.classList.add(c)}catch(g){}break;case "toggle":a.classList.toggle(e)}}catch(k){dbg(k)}},asset:function(a,b,e){var c=
"";if(1==arguments.length){for(var d=a.split(M$.getDB(11));1<d.length;)slice=d.shift(),c+=""!=slice?slice+M$.getDB(11):M$.getDB(11);c=this.PATH.stc+M$.getDB(11)+c+d[0]}else c=2==arguments.length?this.PATH.stc+M$.getDB(11)+a+M$.getDB(11)+b+M$.getDB(11):3==arguments.length?[this.PATH.stc,a,b,e].join(M$.getDB(11)):"";return c},click:function(a,b){if(arguments&&arguments.callee&&arguments.callee.caller&&arguments.callee.caller.arguments&&arguments.callee.caller.arguments[0].srcElement)var e=arguments.callee.caller.arguments&&
arguments.callee.caller.arguments[0].srcElement.parentElement;for(var c=e.parentElement,d=0;d<c.children.length;d++)M$.cls(c.children[d],"remove","active");M$.cls(e,"add","active");"#"!=M$.gfn(a).charAt(0)&&(file=M$.asset(a),M$._I.tgt[M$.gfn(a)]=b||M$.VIEWPORT,M$.xhr(file,M$._onLoad,M$._onError));ga&&ga("send","event","button","click",a)},aet:function(a,b,e,c){a=this.gei(a);b=D$.createElement(b);e&&(b.id=e);c&&(b.innerHTML=c);a.appendChild(b);return b},vld:function(a){return!(null===a||M$.getDB(12)===
typeof a||!1===a||""===a)},chk:function(a,b){return this.vld(a)?a:b},gei:function(a,b){return D$.getElementById(a)},gex:function(a){return typeof a===M$.getDB(12)||""==a?"":/(?:\.([^.]+))?$/.exec(a)[1].toLowerCase()},gph:function(a){if(typeof a===M$.getDB(12)||""==a)return"";a.replace(/^.*[\\\/]/,"")},gfn:function(a){if("string"===typeof a)return a.substring(a.lastIndexOf("/")+1)},_onLoad:function(a,b){M$.parseApplet(a,b)},_onError:function(a){var b=M$.gei(M$.VIEWPORT);b&&(b.innerHTML=a)},lds:function(a,
b,e,c,d,f,g){function k(a){l=!0==c?T$:H$;"string"!=typeof d&&(d="last");if("first"==d)return l.firstElementChild,M$._I.l++,!0;if("last"==d)return l.appendChild(h),M$._I.l++,!0;l=a.gei(d);return typeof l!=M$.getDB(12)&&null!=l.nextElementSibling?(l.nextElementSibling.insertBefore(h),M$._I.l++,!0):!1}var h,l;e.indexOf("applet.");for(var m=0;3>m;m++)arguments[m]=this.chk(arguments[m],!1);this.chk(d,!1);if("script"==arguments[0]||"js"==arguments[0])h=D$.createElement("script"),h.async=1,h.src=e,h.type=
this.getDB(13);else if("link"==arguments[0]||"css"==arguments[0])h=D$.createElement("link"),h.href=e,h.rel="stylesheet",h.type="text/css";else return!1;h.id=arguments[1];h.onload=f?f:M$.contentLoaded;h.onerror=g?g:function(){dbg("Error","Loading "+e)};return-1===c?!0:k(this)},upo:function(a){a||(a=location.search.substring(1));return""==a?!1:JSON.parse('{"'+decodeURI(a).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')},xhr:function(a,b,e,c,d,f){createCORSRequest=function(b,c){var d=
new XMLHttpRequest;"withCredentials"in d?d.open(b,c,!0):typeof XDomainRequest!=M$.getDB(12)?(d=new XDomainRequest,xr.open(b,c)):(d=null,dbg("error",maestro2.gfn(a)+": CORS not supported."));return d};getTitle=function(a){return a.match("<title>(.*)?</title>")[1]};makeCorsRequest=function(a,b,c){M$.gei("LED-Rec")&&(M$.gei("LED-Rec").className="led round green-on");var d=createCORSRequest("GET",a);d?(d.onloadstart=function(){M$.gei("LED-Snd")&&(M$.gei("LED-Snd").className="led round red-on")},d.onloadend=
function(){M$.gei("LED-Snd")&&(M$.gei("LED-Snd").className="led round red-off")},d.onload=function(){"function"===typeof b?b(d.responseText,a):dbg("ERROR: [XHR] Ajax data received but no default handler found.")},d.onerror=function(){dbg("error "+this.responseText)},d&&d.send&&d.send(),M$.gei("LED-Rec")&&(M$.gei("LED-Rec").className="led round green-off")):dbg("CORS not supported")};makeCorsRequest(a,b,e,c,d)}};try{dbg("Maestro Bootstrap..."),window.M$=window.Maestro=n,M$.start()}catch(p){dbg("Failed with error "+
p)}})();
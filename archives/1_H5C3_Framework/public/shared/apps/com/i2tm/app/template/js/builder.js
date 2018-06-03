window._h5c3_fluid_config = {
	
	prefix: 'css/style/breakpoint/style',

	doc: {
		//Style for outter box
		model: 'absolute',
		
		//Stylesheet to use (user)
		style: 'default',
		
		//Style for outter box
		box: 'border',
		
		zoom: 1.0,
		factors: {
			fontSize: 1.0,
			
		},
		grid: { 
			gutters: 40, 
			collapse: false 
		}
	},

	panels: {
		 //0px for none
		sidebar: {
			left: {width:'0px',content:'<div id="leftSidebar"></div>',collapse: false},
			right: {width:'0px',content:'<div id="rightSidebar"></div>',collapse: false},
		},
		
		header: {width:'0px', height:'0px', content: '<div id="rightSidebar"></div>', collapse: false},
		footer: {width:'0px', height:'0px', content: '<div id="rightSidebar"></div>', collapse: false},
		
		// position = top, bottom, left, right or embed
		social: {width:'0px', height:'0px', content: '<div id="rightSidebar"></div>', collapse: false, position:'bottom'},
		
		// Is displayed when the page resolution is too small.
		toosmalld: {
			breakpoints: 'nope',
			position: 'top-center',
			width: '100%',
			height: '100%',
			html: '<div id="tooSmall" data-action="copyHTML" data-args="title"><div style="margin: 0 auto; padding-top: 33%; text-align: center; font:45px arial,sans-serif; width:50%; height:200px;"><img src="css/img/error.png" /><br />We are sorry, but your resolution is too small.<div></div>'
		}
	},

	breakpoints: {
		normal: 	{ range: {min:768, max:1023}, container: 700, grid: { collapse: false }, panel: {leftSide:false, rightSide: false, header:false, footer:false} },
		mobile: 	{ range: '-999', containers: 700, grid: { collapse: false } },
		nope: 		{ range: '-699', containers: 'fluid', grid: { collapse: false } } 
	}
};

/**
 * @class H5C3
 * @desc
 * <p>
 * Primary object in which the entire engine and framework reside. This is for the production
 * version of the Framework.
 * </p> 
 */

StyleSheets = ({
	/**
	 * Holds the name of this class
	 *
	 * @property {string} NAME
	 * @protected
	 * @memberof H5C3
	 */
	NAME: 'H5C3 Framework StyleSheet Controller',
	/**
	 * Holds the current version of the class
	 *
	 * @property {string} VERSION 
	 * @protected
	 * @memberof H5C3
	 */
	VERSION: '0.0.1'
	
	},{
	
	/**
	 * Initialization
	 *
	 * @memberof H5C3
	 * @method
	 * @public
	 */
	init: function() {
		this._super();
		if (H5C3.DISTRO==="Developer") { this.devMode = true; } else { this.devMode = false; }
	}
});
function createStyleSheet() {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.title = "base";
	style.innerHTML = '.cssClass { color: #F00; }';
	document.getElementsByTagName('head')[0].appendChild(style);
}
function addClassToStyleSheet() {
}

//Assign CSS
//document.getElementById('someElementId').className = 'cssClass';

function addLeftSidebar() {
	
}

function recalc() {
	
}

function strProperties(element) {
	var e = $(element);	
	//var str = e.style.
}

var resizeTimer;
//var panelPosition = {'top-left','top-center','top-right','bottom-left','bottom-center','bottom-right''left-top','left-center','left-bottom','right-top','right-center','right-bottom','dead-center'}

function setStylesheet(type,name) {
	var preDoc = $('#preview');	
		
	try {
		var frm = frames['preview'].document;
		var otherhead = frm.getElementsByTagName("head")[0];
		var link = frm.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("type", "text/css");
		link.setAttribute("href", "css/"+type+"/"+name+".html/style.css");
		otherhead.appendChild(link);

		//USING - Update Information
		$('#curr'+type).value = name;
		alert( $('#curr'+type).value );// or $(this).val()
	} catch (err) {
		console.log('Error: Running on local file system - operation not permitted.');
	}
}


$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {}, 250);
	var w = $(document).width();
	if (w>=min || w<=max) { 
		var foobar; 
		//our break point
	} 
});

$(window).load(function () {
	var json = '{"result":true,"count":1}',
    obj = JSON && JSON.parse(json) || $.parseJSON(json);
	
	$("#preview").attr("src", "builder0.2.0.html");
	
	$('#myLayout').on('change', function() {
		window.setStylesheet('Layout',this.value)
		alert( this.value ); // or $(this).val()
	});

	$('#myColors').on('change', function() {
		window.setStylesheet('Skin',this.value)
		alert( this.value ); // or $(this).val()
	});
	
	$('#myTypeography').on('change', function() {
		window.setStylesheet('Type',this.value)
		alert( this.value ); // or $(this).val()
	});
	
	$('#myName').on('blur', function() {
	  alert( this.value ); // or $(this).val()
	});

	$('#myBDay').on('blur', function() {
	  alert( this.value ); // or $(this).val()
	});
	
	$('#myTagLine').on('blur', function() {
	  alert( this.value ); // or $(this).val()
	});
	
});

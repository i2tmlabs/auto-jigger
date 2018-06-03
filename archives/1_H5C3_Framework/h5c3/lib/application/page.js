
/**
 * H5C3 Framework - Forked from Playcraft v0.5.6
 * See licence.txt for details
 */

 /**
 * Page - this class is used to create & manipulate the document in which the 
 * DIV and Canvas elements reside. It determines the device OS, Screen Dimensions
 * and orientation and reacts accordinaly. There is no need to interact with the
 * object. Everything is internal and automatic to the engine.
 */
h5c3.Page = h5c3.Base.extend('h5c3.Page',
    { 
		_CLASSNAME: 'Page',
		_CLASSVERSION:'0.1.0'
	},
    {
		device: null,
		wrapper:
		{
			div:null,			/** Container DIV for all other elements */
			dim:{w:0,h:0}		/** Actual wrapper div dimensions */
		},
		banner: 
		{
			name: null,			/** the name of the banner class that was constructed */
			obj: null,			/** the banner object constructed at startup */
			id:null,			/** element Id of the banner canvas */
			div:null,			/** div element upon which all banner drawing will occur */
			dim:{w:0,h:0}		/** Actual banner canvas dimensions */
		},	
		game:
		{
			name: null,			/** the name of the game class that was constructed */
			obj: null,			/** the game object constructed at startup */
			id:null,			/** element Id of the game/app canvas */
			canvas:null,		/** canvas element upon which all game/app drawing will occur */
			ctx:null,			/** current Game/App 2D draw context */		
			dim:{w:0,h:0}		/** Actual game/app canvas dimensions */
		},
		touchpad:
		{
			name: null,			/** the name of the touchpad class that was constructed */		        
			obj: null,			/** the tocupad object constructed at startup */
			id:null,			/** element Id of the touch canvas */        
			canvas:null,		/** canvas element upon which all touchpad drawing will occur */
			ctx:null,			/** current Touchpad 2D draw context */
			dim:{w:0,h:0}		/** Actual touchpad canvas dimensions */
		},
		
		options: {
			desktopsuspend:true,		/** Suspend/resume on losing or gaining focus */
			suspend:true,		/** Suspend/resume on losing or gaining focus */
			network:true		/** trigger events for going online or offline */
		},
        
		orientation: {
			event: false,		/** Whether or not we are reacting to the deviceorientation event */
			state: null			/** Orientation of the display/device. Determined by Engine */
		},						/** Landscape is for Desktop/Notebook non touch devices only. **/
								/** ALL touch devices are rendered in Portrait. **/
		devWindow:null,			/** Integrated Developer Window */
		
		init:function(owner,title)
		{
			this._super();
			this.device = owner;
			CHK(title,'Undefined Page');
			DOC().title = title;
			this.wrapper.div = GEI('waDIV');
			//this.waDIV(true); //Save waDIV innerHTML, False restores
			
			this.debug('Initialization started.');
			this.debug('UA='+window.navigator.userAgent);
			this.debug('Detected Device Screen Dimensions are ['+window.screen.availWidth+'x'+window.screen.availHeight+']');
			this.debug('Detected Device Usable Dimensions are ['+window.innerWidth+'x'+window.innerHeight+']');
			/** if touch device create canvas for touchpad **/
			if (this.device.useTouch) { 
				this.debug('Mobile Media Detected '+this.device.media.browser.name+' v'+this.device.media.browser.version+' on '+this.device.media.OS.name);
				this.initBanner();			
				this.initGame();
				this.initTouchPad();
			} else { 
				this.debug('Static Media Detected '+this.device.media.browser.name+' v'+this.device.media.browser.version+' on '+this.device.media.OS.name);
				//if (h5c3.devMode===true) { this.initBanner(); }
				this.initGame();
			}
						
			if (this.options.suspend===true) {
				this.debug('OPTION: Suspened on focus enabled.');
				window.addEventListener('blur', this._onBlur.bind(this), true);
				window.addEventListener('focus', this._onFocus.bind(this), true);
			} else {
				this.debug('OPTION: Suspened on focus disabled.');
			}
			
			if (this.options.network===true) {
				this.debug('OPTION: Network monitoring enabled.');
				window.document.addEventListener('offline', this._onOffline.bind(this), true);
				window.document.addEventListener('online', this._onOnline.bind(this), true);
			} else {
				this.debug('OPTION: Network monitoring disabled.');
			}
            window.onresize = this._onResize.bind(this);
		},
		
		initBanner:function()
		{
			var e = GEI('waDIV');
			this.banner.div = document.createElement("div"); 
			this.banner.div.id = this.banner.id = "waBannerDIV";
			this.banner.div.width = window.innerWidth;
			this.banner.div.height= 32;
			e.appendChild(this.banner.div);
			
			if (!this.banner.div) {	this.debug('Could not get a banner element using the id [' + this.banner.id + ']. '); }

			this.banner.obj = new h5c3.Banners(this.banner.div);
			if (!this.banner.obj) {	this.debug('Invalid Banner class. Must be named [Banners]'); }

			this.banner.dim = {w:this.banner.div.width, h:this.banner.div.height};
			this.debug('Created Banner panel ['+this.banner.dim.w+'x'+this.banner.dim.h+']');
		},
			
		initGame:function()
		{
			this.setOrientation();
			if (!VLD(this.game.canvas = GEI('waCANVAS'))) { 
				this.debug('ERROR: Could not attach to a canvas element using the id [' + this.game.id + ']. ');
			} else {
				this.game.ctx = this.game.canvas.getContext('2d');
				this.game.dim = {w:this.game.canvas.width, h:this.game.canvas.height};
				if (typeof Game === 'function') {
					this.game.obj = new Game(this.game);
				   if (!VLD(this.game.obj)) {
						this.debug('ERROR: Invalid Game class, Must be named [Game]');
					} else {
						this.debug('Created Game panel ['+this.game.dim.w+'x'+this.game.dim.h+']');
					}
				}
			}
		},
		
		initTouchPad:function()
		{
			var e = GEI('waDIV');
			this.touchpad.canvas = document.createElement("canvas"); 
			this.touchpad.canvas.id = this.touchpad.id = "pcTouchCanvas";
			this.touchpad.canvas.width = 1080;
			this.touchpad.canvas.height= 540;
			e.appendChild(this.touchpad.canvas);
			
            if (!this.touchpad.canvas) {
                throw 'device.js::initTouchpad() - Abort! Could not attach to a canvas element using the id [' + this.touchpad.id + ']. ';
			}

            this.touchpad.ctx = this.touchpad.canvas.getContext('2d');
			this.touchpad.dim = {w:this.touchpad.canvas.width, h:this.touchpad.canvas.height};
			this.touchpad.obj = new h5c3.TouchPad(this.touchpad.ctx,this.touchpad.dim);
            if (!this.touchpad.obj) {
                throw "device.js::initTouchpad() - Invalid touchpad class. Must be named [TouchPad]";
			}

			this.debug('Created Touchpad panel ['+this.touchpad.dim.w+'x'+this.touchpad.dim.h+']');
		},
		
		setOrientation:function() 
		{
			if (!this.device.started) {
				return;
			}
			if (window.DeviceOrientationEvent) {
				this.orientation.event = true;
				this.debug("Device Orientation is supported - Event Hooked Added.");
				window.addEventListener('deviceorientation', this.onDeviceMotion, false);
			} else {
				this.orientation.event = false;
				this.debug("Device Orientation not supported");
			}	
			
			if (h5c3.device.useTouch || window.innerHeight > window.innerWidth) {
				this.orientation.state = H5c3.ORIENTATION.PORTRAIT;
			} else {
				this.orientation.state = H5C3.ORIENTATION.LANDSCAPE;
			}
		},
		
		onDeviceMotion:function(event) {
			if (event.alpha===null || event.beta===null || event.gamma===null) {
				if (h5c3.device.page.orientation.event === true) {
					window.removeEventListener('deviceorientation', this.onDeviceMotion, false);
					h5c3.device.page.orientation.event = false;
					h5c3.device.page.debug("This device does not REALLY have orientation capabilities - Event Hooked Removed.");
				}
			}
		},
		
        _calcScreenSize:function ()
        {			
			if (this.orientation.state===H5C3.ORIENTATION.LANDSCAPE)
			{
				this.debug('Orientation set to Landscape.');
				if (!document.fullScreen) {
					GEI('waCANVAS').webkitRequestFullScreen();
				}
				this.wrapper.dim.w = window.innerWidth; this.wrapper.div.width = this.wrapper.dim.w+"px"; this.wrapper.div.style.width = this.wrapper.dim.w+"px";
				this.wrapper.dim.h = window.innerHeight; this.wrapper.div.height = this.wrapper.dim.h+"px"; this.wrapper.div.style.height = this.wrapper.dim.h+"px";
			}
			else
			{
				this.debug('Orientation set to Portrait.');
				this.wrapper.dim.w = window.innerWidth; this.wrapper.div.width = this.wrapper.dim.w+"px"; this.wrapper.div.style.width = this.wrapper.dim.w+"px";
				this.wrapper.dim.h = window.innerHeight; this.wrapper.div.height = this.wrapper.dim.h+"px"; this.wrapper.div.style.height = this.wrapper.dim.h+"px";
			}

			this.debug('Calculated screen space is ['+this.wrapper.dim.w+'x'+this.wrapper.dim.h+']');
			var remainingHeight = this.wrapper.dim.h;

			//Now assign all other dimension based off wrapper
			/** If in Portrait view, render single ad bar at top otherwise	**/
			/** use the extra space on either side of the game canvas		**/
			//if (h5c3.devMode===true) {
			//	this.banner.dim.w = this.wrapper.dim.w; 
			////	this.banner.div.width = this.banner.dim.w; 
			//	this.banner.div.style.width = this.banner.dim.w+"px";
			//	this.banner.dim.h = this.banner.div.height = 32; 
			//	this.banner.div.style.height = "32px";
			//	remainingHeight -= this.banner.dim.h;
			//}
			
			if (h5c3.device.useTouch) {
				this.game.dim.w = this.wrapper.dim.w; 
				this.game.canvas.style.width = this.game.dim.w+"px";
				this.game.dim.h = this.wrapper.dim.w; 
				this.game.canvas.style.height = this.game.dim.h+"px";
				remainingHeight -=this.game.dim.h;

				this.touchpad.dim.w = this.wrapper.dim.w; 
				this.touchpad.canvas.style.width = this.touchpad.dim.w+"px";
				this.touchpad.dim.h = remainingHeight; 
				this.touchpad.canvas.style.height = this.touchpad.dim.h+"px";
				remainingHeight -= this.touchpad.dim.h;
			} else {
				this.game.dim.w = this.wrapper.dim.w; 
				this.game.canvas.style.width = this.game.dim.w+"px";
				this.game.dim.h = this.wrapper.dim.h; 
				this.game.canvas.style.height = remainingHeight+"px";
				remainingHeight -=remainingHeight;
			}


			//if (h5c3.devMode) {
			//	this.debug('Used ['+this.banner.dim.w+'x'+this.banner.dim.h+'] for Banner Panel.');
			//}
			this.debug('Used ['+this.game.dim.w+'x'+this.game.dim.h+'] for Game Panel.');
			this.debug('Used ['+this.touchpad.dim.w+'x'+this.touchpad.dim.h+'] for Touchpad Panel.');
			
			if (remainingHeight !== 0) { this.debug("Layout was not done correctly. "+remainingHeight+'px difference.'); }
		},
		
		render:function()
		{
			//if (h5c3.devMode===true) { this.devWindow.objStats.update(h5c3.device.elapsed);	this.devWindow.objStats.draw();	}
		},
		
		waDIV:function(clear)
		{
			CHK(clear,true);
			this.wrapper.div.display = 'none';
			if (clear===true) {
				this.wrapper.div.innerHTML = '';
			} else {
				document.location.reload();
			}
			this.wrapper.div.display = 'block';
		},
				
		/**
		 * Triggers when the page loses focus
		*/
		_onBlur:function(event)
		{
			this.game.obj.onBlur();
		},
		
		/**
		 * Triggers when the page gets focus
		 */
		_onFocus:function(event)
		{
			this.game.obj.onFocus();
		},
		
		/**
		 * Triggers when the page goes offline
		*/
		_onOffline:function(event)
		{
			this.debug('Lost network connection.');
		},

		/**
		 * Triggers when the page come online
		*/
		_onOnline:function(event)
		{
			this.debug('Gained network connection.');
		},
		
		/**
		 * Triggers when the page is resized
		 */
        _onResize:function (e)
        {
			this.debug('Dimension changed detected.');
            this._calcScreenSize();
            this.game.dim.w = this.game.canvas.width;
            this.game.dim.h = this.game.canvas.height;
            this.game.obj.onResize(this.game.dim.w, this.game.dim.h);
			//if (h5c3.device.showDebug) this.devWindow.onResize();
        }, //end onResize()
		
        /**
         * Automatically called by onReady()
         */
        onReady:function ()
        {
			this.debug('onReady Called.');
			//if (h5c3.devMode) { this.banner.obj.onReady(); this.devWindow.onReady(); }
            this.game.obj.onReady();
            if (h5c3.device.useTouch) {
				this.touchpad.obj.onReady();
			}
			
        } //end onReady()
    });

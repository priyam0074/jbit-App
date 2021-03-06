(function(c){var a=c.document,d=c.Modernizr;d.addTest("csstransformspreserve3d",function(){var h=d.prefixed("transformStyle");var g="preserve-3d";var f;if(!h){return false}h=h.replace(/([A-Z])/g,function(j,i){return"-"+i.toLowerCase()}).replace(/^ms-/,"-ms-");d.testStyles("#modernizr{"+h+":"+g+";}",function(i,j){f=c.getComputedStyle?getComputedStyle(i,null).getPropertyValue(h):""});return(f===g)});function e(g,f){for(var h in f){if(f.hasOwnProperty(h)){g[h]=f[h]}}return g}function b(g,f){this.el=g;this.options=e(this.defaults,f);this._init()}b.prototype={defaults:{startPage:1,orientation:"vertical",direction:"ltr",speed:1000,easing:"ease-in-out",shadows:true,shadowSides:0.2,shadowFlip:0.1,circular:false,nextEl:"",prevEl:"",autoplay:false,interval:3000,onEndFlip:function(f,h,g){return false},onBeforeFlip:function(f){return false}},_init:function(){this.el.className+=" bb-"+this.options.orientation;this.items=Array.prototype.slice.call(this.el.querySelectorAll(".bb-item"));this.itemsCount=this.items.length;if((this.options.startPage>0)&&(this.options.startPage<=this.itemsCount)){this.currentIdx=(this.options.startPage-1)}else{this.currentIdx=0}this.previous=-1;this.current=this.items[this.currentIdx];this.current.style.display="block";this.elWidth=this.el.offsetWidth;var f={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};this.transEndEventName=f[d.prefixed("transition")];this.support=d.csstransitions&&d.csstransforms3d&&d.csstransformspreserve3d;this._initEvents();if(this.options.autoplay){this.options.circular=true;this._startSlideshow()}},_initEvents:function(){var f=this;if(this.options.nextEl!==""){a.querySelector(this.options.nextEl).addEventListener("click",function(){f._action("next");return false});a.querySelector(this.options.nextEl).addEventListener("touchstart",function(){f._action("next");return false})}if(this.options.prevEl!==""){a.querySelector(this.options.prevEl).addEventListener("click",function(){f._action("prev");return false});a.querySelector(this.options.prevEl).addEventListener("touchstart",function(){f._action("prev");return false})}c.addEventListener("resize",function(){f._resizeHandler()})},_action:function(f,g){this._stopSlideshow();this._navigate(f,g)},_navigate:function(f,g){if(this.isAnimating){return false}this.options.onBeforeFlip(this.currentIdx);this.isAnimating=true;this.current=this.items[this.currentIdx];if(g!==undefined){this.currentIdx=g}else{if(f==="next"&&this.options.direction==="ltr"||f==="prev"&&this.options.direction==="rtl"){if(!this.options.circular&&this.currentIdx===this.itemsCount-1){this.end=true}else{this.previous=this.currentIdx;this.currentIdx=this.currentIdx<this.itemsCount-1?this.currentIdx+1:0}}else{if(f==="prev"&&this.options.direction==="ltr"||f==="next"&&this.options.direction==="rtl"){if(!this.options.circular&&this.currentIdx===0){this.end=true}else{this.previous=this.currentIdx;this.currentIdx=this.currentIdx>0?this.currentIdx-1:this.itemsCount-1}}}}this.nextItem=!this.options.circular&&this.end?this.current:this.items[this.currentIdx];this.items.forEach(function(j,h){j.style.display="none"});if(!this.support){this._layoutNoSupport(f)}else{this._layout(f)}},_layoutNoSupport:function(g){this.nextItem.style.display="block";this.end=false;this.isAnimating=false;var f=g==="next"&&this.currentIdx===this.itemsCount-1||g==="prev"&&this.currentIdx===0;this.options.onEndFlip(this.previous,this.currentIdx,f)},_layout:function(i){var o=this,j=this._addSide("left",i),p=this._addSide("middle",i),l=this._addSide("right",i),f=j.querySelector("div.bb-overlay"),m=p.querySelector("div.bb-front").querySelector("div.bb-flipoverlay"),n=p.querySelector("div.bb-back").querySelector("div.bb-flipoverlay"),k=l.querySelector("div.bb-overlay"),h=this.end?400:this.options.speed;var g=this.items[0];this.el.insertBefore(j,g);this.el.insertBefore(p,g);this.el.insertBefore(l,g);j.style.zIndex=102;p.style.zIndex=103;l.style.zIndex=101;p.style.transitionDuration=h+"ms";p.style.transitionTimingFunction=this.options.easing;p.addEventListener(this.transEndEventName,function(r){if((" "+r.target.className+" ").replace(/[\n\t]/g," ").indexOf(" bb-page ")>-1){Array.prototype.slice.call(o.el.querySelectorAll(".bb-page")).forEach(function(t,s){o.el.removeChild(t)});o.nextItem.style.display="block";o.end=false;o.isAnimating=false;var q=i==="next"&&o.currentIdx===o.itemsCount-1||i==="prev"&&o.currentIdx===0;o.options.onEndFlip(o.previous,o.currentIdx,q)}});if(i==="prev"){p.className+=" bb-flip-initial"}if(this.options.shadows&&!this.end){if(i==="next"){m.style.transition="opacity "+this.options.speed/2+"ms linear";n.style.transition="opacity "+this.options.speed/2+"ms linear "+this.options.speed/2+"ms";n.style.opacity=this.options.shadowFlip;f.style.transition="opacity "+this.options.speed/2+"ms linear "+this.options.speed/2+"ms";k.style.transition="opacity "+this.options.speed/2+"ms linear";k.style.opacity=this.options.shadowSides}else{if(i==="prev"){m.style.transition="opacity "+this.options.speed/2+"ms linear "+this.options.speed/2+"ms";m.style.opacity=this.options.shadowFlip;n.style.transition="opacity "+this.options.speed/2+"ms linear";f.style.transition="opacity "+this.options.speed/2+"ms linear";f.style.opacity=this.options.shadowSides;k.style.transition="opacity "+this.options.speed/2+"ms linear "+this.options.speed/2+"ms"}}}setTimeout(function(){p.className+=o.end?" bb-flip-"+i+"-end":" bb-flip-"+i;if(o.options.shadows&&!o.end){m.style.opacity=i==="next"?o.options.shadowFlip:0;n.style.opacity=i==="next"?0:o.options.shadowFlip;f.style.opacity=i==="next"?o.options.shadowSides:0;k.style.opacity=i==="next"?0:o.options.shadowSides}},25)},_addSide:function(h,g){var j=a.createElement("div");j.className="bb-page";switch(h){case"left":var f=g==="next"?this.current.innerHTML:this.nextItem.innerHTML;j.innerHTML='<div class="bb-back"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">'+f+'</div></div><div class="bb-overlay"></div></div></div>';break;case"middle":var k=g==="next"?this.current.innerHTML:this.nextItem.innerHTML;var i=g==="next"?this.nextItem.innerHTML:this.current.innerHTML;j.innerHTML='<div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">'+k+'</div></div><div class="bb-flipoverlay"></div></div></div><div class="bb-back"><div class="bb-outer"><div class="bb-content" style="width:'+this.elWidth+'px"><div class="bb-inner">'+i+'</div></div><div class="bb-flipoverlay"></div></div></div>';break;case"right":var f=g==="next"?this.nextItem.innerHTML:this.current.innerHTML;j.innerHTML='<div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">'+f+'</div></div><div class="bb-overlay"></div></div></div>';break}return j},_startSlideshow:function(){var f=this;this.slideshow=setTimeout(function(){f._navigate("next");if(f.options.autoplay){f._startSlideshow()}},this.options.interval)},_stopSlideshow:function(){if(this.options.autoplay){clearTimeout(this.slideshow);this.options.autoplay=false}},next:function(){this._action(this.options.direction==="ltr"?"next":"prev")},prev:function(){this._action(this.options.direction==="ltr"?"prev":"next")},jump:function(g){g-=1;if(g===this.currentIdx||g>=this.itemsCount||g<0){return false}var f;if(this.options.direction==="ltr"){f=g>this.currentIdx?"next":"prev"}else{f=g>this.currentIdx?"prev":"next"}this._action(f,g)},last:function(){this.jump(this.itemsCount)},first:function(){this.jump(1)},_resizeHandler:function(){var f=this;function g(){f._resize();f._resizeTimeout=null}if(this._resizeTimeout){clearTimeout(this._resizeTimeout)}this._resizeTimeout=setTimeout(g,50)},_resize:function(){this.elWidth=this.el.offsetWidth},isActive:function(){return this.isAnimating},update:function(){var f=this.items[this.current];this.items=Array.prototype.slice.call(this.el.querySelectorAll(".bb-item"));this.itemsCount=this.items.length;this.currentIdx=this.items.indexOf(f)},destroy:function(){if(this.options.autoplay){this._stopSlideshow()}this.el.className=this.el.className.replace(new RegExp("(^|\\s+)bb-"+this.options.orientation+"(\\s+|$)")," ");this.items.forEach(function(g,f){g.style.display="block"});if(this.options.nextEl!==""){this.options.nextEl.removeEventListener("click");this.options.nextEl.removeEventListener("touchstart")}if(this.options.prevEl!==""){this.options.prevEl.removeEventListener("click");this.options.prevEl.removeEventListener("touchstart")}c.removeEventListener("debouncedresize")}};c.BookBlock=b})(window);




// classie


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );




/**
 * bookshelf.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var supportAnimations = 'WebkitAnimation' in document.body.style ||
			'MozAnimation' in document.body.style ||
			'msAnimation' in document.body.style ||
			'OAnimation' in document.body.style ||
			'animation' in document.body.style,
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		scrollWrap = document.getElementById( 'scroll-wrap' ),
		docscroll = 0,
		books = document.querySelectorAll( '#bookshelf > figure' );

	function scrollY() {
		return window.pageYOffset || window.document.documentElement.scrollTop;
	}

	function Book( el ) {
		this.el = el;
		this.book = this.el.querySelector( '.book' );
		this.ctrls = this.el.querySelector( '.buttons' );
		this.details = this.el.querySelector( '.details' );
		// create the necessary structure for the books to rotate in 3d
		this._layout();

		this.bbWrapper = document.getElementById( this.book.getAttribute( 'data-book' ) );
		if( this.bbWrapper ) {
			this._initBookBlock();
		}
		this._initEvents();
	}

	Book.prototype._layout = function() {
		
			this.book.innerHTML = '<div class="cover"><div class="front"></div><div class="inner inner-left"></div></div><div class="inner inner-right"></div>';
			var perspective = document.createElement( 'div' );
			perspective.className = 'perspective';
			perspective.appendChild( this.book );
			this.el.insertBefore( perspective, this.ctrls );

		this.closeDetailsCtrl = document.createElement( 'span' )
		this.closeDetailsCtrl.className = 'close-details';
		this.details.appendChild( this.closeDetailsCtrl );
	}

	Book.prototype._initBookBlock = function() {
		// initialize bookblock instance
		this.bb = new BookBlock( this.bbWrapper.querySelector( '.bb-bookblock' ), {
			speed : 700,
			shadowSides : 0.8,
			shadowFlip : 0.4
		} );
		// boobkblock controls
		this.ctrlBBClose = this.bbWrapper.querySelector( ' .bb-nav-close' );
		this.ctrlBBNext = this.bbWrapper.querySelector( ' .bb-nav-next' );
		this.ctrlBBPrev = this.bbWrapper.querySelector( ' .bb-nav-prev' );
	}

	Book.prototype._initEvents = function() {
		var self = this;
		if( !this.ctrls ) return;

		if( this.bb ) {
			this.ctrls.querySelector( 'a:nth-child(1)' ).addEventListener( 'click', function( ev ) { ev.preventDefault(); self._open(); } );
			this.ctrlBBClose.addEventListener( 'click', function( ev ) { ev.preventDefault(); self._close(); } );
			this.ctrlBBNext.addEventListener( 'click', function( ev ) { ev.preventDefault(); self._nextPage(); } );
			this.ctrlBBPrev.addEventListener( 'click', function( ev ) { ev.preventDefault(); self._prevPage(); } );
		}

		//this.ctrls.querySelector( 'a:nth-child(2)' ).addEventListener( 'click', function( ev ) { ev.preventDefault(); self._showDetails(); } );
		//this.closeDetailsCtrl.addEventListener( 'click', function() { self._hideDetails(); } );
	}

	Book.prototype._open = function() {
		docscroll = scrollY();
		
		classie.add( this.el, 'open' );
		classie.add( this.bbWrapper, 'showen' );

		var self = this,
			onOpenBookEndFn = function( ev ) {
				this.removeEventListener( animEndEventName, onOpenBookEndFn );
				document.body.scrollTop = document.documentElement.scrollTop = 0;
				classie.add( scrollWrap, 'hide-overflow' );
			};

		if( supportAnimations ) {
			this.bbWrapper.addEventListener( animEndEventName, onOpenBookEndFn );
		}
		else {
			onOpenBookEndFn.call();
		}
	}

	Book.prototype._close = function() {
		classie.remove( scrollWrap, 'hide-overflow' );
		setTimeout( function() { document.body.scrollTop = document.documentElement.scrollTop = docscroll; }, 25 );
		classie.remove( this.el, 'open' );
		classie.add( this.el, 'close' );
		classie.remove( this.bbWrapper, 'showen' );
		classie.add( this.bbWrapper, 'hiden' );

		var self = this,
			onCloseBookEndFn = function( ev ) {
				this.removeEventListener( animEndEventName, onCloseBookEndFn );
				// reset bookblock starting page
				self.bb.jump(1);
				classie.remove( self.el, 'close' );
				classie.remove( self.bbWrapper, 'hiden' );
			};

		if( supportAnimations ) {
			this.bbWrapper.addEventListener( animEndEventName, onCloseBookEndFn );
		}
		else {
			onCloseBookEndFn.call();
		}
	}

	Book.prototype._nextPage = function() {
		this.bb.next();
	}

	Book.prototype._prevPage = function() {
		this.bb.prev();
	}

	Book.prototype._showDetails = function() {
		classie.add( this.el, 'details-open' );
	}

	Book.prototype._hideDetails = function() {
		classie.remove( this.el, 'details-open' );
	}

	function init() {
		[].slice.call( books ).forEach( function( el ) {
			new Book( el );
		} );
	}

	init();

})();




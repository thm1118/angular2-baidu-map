webpackJsonp([1,3],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var refs = 0;
	var dispose;
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	exports.use = exports.ref = function() {
		if(!(refs++)) {
			exports.locals = content.locals;
			dispose = __webpack_require__(4)(content, {});
		}
		return exports;
	};
	exports.unuse = exports.unref = function() {
		if(!(--refs)) {
			dispose();
			dispose = null;
		}
	};
	if(false) {
		var lastRefs = module.hot.data && module.hot.data.refs || 0;
		if(lastRefs) {
			exports.ref();
			if(!content.locals) {
				refs = lastRefs;
			}
		}
		if(!content.locals) {
			module.hot.accept();
		}
		module.hot.dispose(function(data) {
			data.refs = content.locals ? 0 : refs;
			if(dispose) {
				dispose();
			}
		});
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".splashing{width:100vw;height:100vh;margin:0;max-width:100%;max-height:100%;overflow:hidden}.splashing .splash{width:75pt;height:75pt;position:fixed;margin:-50px auto auto -50px;left:50%;top:50%;box-sizing:content-box}.splashing .splash.tailing{border-radius:50%;box-shadow:0 0 5px #fff}.splashing .splash.tailing:before{content:\"\";position:absolute;width:100%;height:100%;border-radius:50%;background:linear-gradient(#000,#dcdcdc);-webkit-animation:splash-spin 1s infinite linear;animation:splash-spin 1s infinite linear}.splashing .splash.tailing:after{content:\"\";position:absolute;width:95%;height:95%;top:2.5%;left:2.5%;background-color:#fff;border-radius:50%;box-shadow:inset 0 0 5px #fff}.splashing .splash.tailing span{position:absolute;left:25px;top:45px;z-index:100}.splashing .splash.audio-wave{width:5pc;height:60px;top:50%;margin-top:-30px;left:50%;margin-left:-40px;background:linear-gradient(#fb7c4d,#fb7c4d) 0 50%,linear-gradient(#fb7c4d,#fb7c4d) 25% 50%,linear-gradient(#fb7c4d,#fb7c4d) 50% 50%,linear-gradient(#fb7c4d,#fb7c4d) 75% 50%,linear-gradient(#fb7c4d,#fb7c4d) 100% 50%;background-repeat:no-repeat;background-size:19% 10px,19% 10px,19% 10px,19% 10px,19% 10px;-webkit-animation:splash-audio-wave-animation 1.5s linear infinite;animation:splash-audio-wave-animation 1.5s linear infinite}.splashing .splash.spinner-section,.splashing .splash.spinner-section-far{width:50px;height:50px;left:50%;margin-left:-25px;top:50%;margin-top:-25px;border-radius:50%;border:3.13px solid #aaa;-webkit-animation:splash-spinner 1.2s linear infinite;animation:splash-spinner 1.2s linear infinite}.splashing .splash.spinner-section-far:after,.splashing .splash.spinner-section-far:before,.splashing .splash.spinner-section:after,.splashing .splash.spinner-section:before{content:'';position:absolute;top:-3.13px;left:-3.13px;display:block;width:50px;height:50px;border-radius:50%;border:3.13px solid transparent;border-top-color:tomato}.splashing .splash.spinner-section-far:after,.splashing .splash.spinner-section:after{display:none;border-top-color:transparent;border-bottom-color:tomato}.splashing .splash.spinner-section-far:after,.splashing .splash.spinner-section-far:before{top:-9.38px;left:-9.38px;width:62.5px;height:62.5px}.splashing .splash.windcatcher{width:40px;height:auto;left:50%;margin-left:-20px;top:50%;margin-top:-50px;-webkit-perspective:500px;perspective:500px;-webkit-animation:splash-rotate 4s linear infinite;animation:splash-rotate 4s linear infinite}.splashing .splash.windcatcher .blade{height:5px;background-color:#0277bd;margin-bottom:1px;-webkit-animation:splash-windcatcherSpin 4s linear infinite,splash-windcatcherBg 2s linear infinite;animation:splash-windcatcherSpin 4s linear infinite,splash-windcatcherBg 2s linear infinite}.splashing .splash.windcatcher .blade:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.splashing .splash.windcatcher .blade:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.splashing .splash.windcatcher .blade:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.splashing .splash.windcatcher .blade:nth-child(4){-webkit-animation-delay:.75s;animation-delay:.75s}.splashing .splash.windcatcher .blade:nth-child(5){-webkit-animation-delay:1s;animation-delay:1s}.splashing .splash.windcatcher .blade:nth-child(6){-webkit-animation-delay:1.25s;animation-delay:1.25s}.splashing .splash.windcatcher .blade:nth-child(7){-webkit-animation-delay:1.5s;animation-delay:1.5s}.splashing .splash.windcatcher .blade:nth-child(8){-webkit-animation-delay:1.75s;animation-delay:1.75s}.splashing .splash.circular{display:inline-block;width:4pc;height:4pc;margin-left:-2pc;margin-top:-2pc;-webkit-animation:splash-container-rotate 1568ms linear infinite;animation:splash-container-rotate 1568ms linear infinite}.splashing .splash.circular .spinner-layer{position:absolute;width:100%;height:100%;opacity:0}.splashing .splash.circular .spinner-layer.spinner-blue{border-color:#4285f4;-webkit-animation:splash-fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,splash-blue-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:splash-fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,splash-blue-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.splashing .splash.circular .spinner-layer.spinner-red{border-color:#db4437;-webkit-animation:splash-fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,splash-red-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:splash-fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,splash-red-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.splashing .splash.circular .spinner-layer.spinner-yellow{border-color:#f4b400;-webkit-animation:splash-fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,splash-yellow-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:splash-fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,splash-yellow-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.splashing .splash.circular .spinner-layer.spinner-green{border-color:#0f9d58;-webkit-animation:splash-fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,splash-green-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:splash-fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,splash-green-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.splashing .splash.circular .spinner-layer .circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.splashing .splash.circular .spinner-layer .circle-clipper .circle{width:200%;box-sizing:border-box;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent!important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}.splashing .splash.circular .spinner-layer .circle-clipper.left .circle{left:0;border-right-color:transparent!important;-webkit-transform:rotate(129deg);-ms-transform:rotate(129deg);transform:rotate(129deg);-webkit-animation:splash-left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:splash-left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.splashing .splash.circular .spinner-layer .circle-clipper.right .circle{left:-100%;border-left-color:transparent!important;-webkit-transform:rotate(-129deg);-ms-transform:rotate(-129deg);transform:rotate(-129deg);-webkit-animation:splash-right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:splash-right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.splashing .splash.circular .spinner-layer .gap-patch{position:absolute;box-sizing:border-box;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.splashing .splash.circular .spinner-layer .gap-patch .circle{width:1000%;left:-450%}@-webkit-keyframes splash-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes splash-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes splash-audio-wave-animation{25%{background:linear-gradient(#fecb3d,#fecb3d) 0 50%,linear-gradient(#fb7c4d,#fb7c4d) 25% 50%,linear-gradient(#fb7c4d,#fb7c4d) 50% 50%,linear-gradient(#fb7c4d,#fb7c4d) 75% 50%,linear-gradient(#fb7c4d,#fb7c4d) 100% 50%;background-repeat:no-repeat;background-size:19% 50px,19% 10px,19% 10px,19% 10px,19% 10px}37.5%{background:linear-gradient(#fb7c4d,#fb7c4d) 0 50%,linear-gradient(#fecb3d,#fecb3d) 25% 50%,linear-gradient(#fb7c4d,#fb7c4d) 50% 50%,linear-gradient(#fb7c4d,#fb7c4d) 75% 50%,linear-gradient(#fb7c4d,#fb7c4d) 100% 50%;background-repeat:no-repeat;background-size:19% 10px,19% 50px,19% 10px,19% 10px,19% 10px}50%{background:linear-gradient(#fb7c4d,#fb7c4d) 0 50%,linear-gradient(#fb7c4d,#fb7c4d) 25% 50%,linear-gradient(#fecb3d,#fecb3d) 50% 50%,linear-gradient(#fb7c4d,#fb7c4d) 75% 50%,linear-gradient(#fb7c4d,#fb7c4d) 100% 50%;background-repeat:no-repeat;background-size:19% 10px,19% 10px,19% 50px,19% 10px,19% 10px}62.5%{background:linear-gradient(#fb7c4d,#fb7c4d) 0 50%,linear-gradient(#fb7c4d,#fb7c4d) 25% 50%,linear-gradient(#fb7c4d,#fb7c4d) 50% 50%,linear-gradient(#fecb3d,#fecb3d) 75% 50%,linear-gradient(#fb7c4d,#fb7c4d) 100% 50%;background-repeat:no-repeat;background-size:19% 10px,19% 10px,19% 10px,19% 50px,19% 10px}75%{background:linear-gradient(#fb7c4d,#fb7c4d) 0 50%,linear-gradient(#fb7c4d,#fb7c4d) 25% 50%,linear-gradient(#fb7c4d,#fb7c4d) 50% 50%,linear-gradient(#fb7c4d,#fb7c4d) 75% 50%,linear-gradient(#fecb3d,#fecb3d) 100% 50%;background-repeat:no-repeat;background-size:19% 10px,19% 10px,19% 10px,19% 10px,19% 50px}}@keyframes splash-audio-wave-animation{25%{background:linear-gradient(#fecb3d,#fecb3d) 0 50%,linear-gradient(#fb7c4d,#fb7c4d) 25% 50%,linear-gradient(#fb7c4d,#fb7c4d) 50% 50%,linear-gradient(#fb7c4d,#fb7c4d) 75% 50%,linear-gradient(#fb7c4d,#fb7c4d) 100% 50%;background-repeat:no-repeat;background-size:19% 50px,19% 10px,19% 10px,19% 10px,19% 10px}37.5%{background:linear-gradient(#fb7c4d,#fb7c4d) 0 50%,linear-gradient(#fecb3d,#fecb3d) 25% 50%,linear-gradient(#fb7c4d,#fb7c4d) 50% 50%,linear-gradient(#fb7c4d,#fb7c4d) 75% 50%,linear-gradient(#fb7c4d,#fb7c4d) 100% 50%;background-repeat:no-repeat;background-size:19% 10px,19% 50px,19% 10px,19% 10px,19% 10px}50%{background:linear-gradient(#fb7c4d,#fb7c4d) 0 50%,linear-gradient(#fb7c4d,#fb7c4d) 25% 50%,linear-gradient(#fecb3d,#fecb3d) 50% 50%,linear-gradient(#fb7c4d,#fb7c4d) 75% 50%,linear-gradient(#fb7c4d,#fb7c4d) 100% 50%;background-repeat:no-repeat;background-size:19% 10px,19% 10px,19% 50px,19% 10px,19% 10px}62.5%{background:linear-gradient(#fb7c4d,#fb7c4d) 0 50%,linear-gradient(#fb7c4d,#fb7c4d) 25% 50%,linear-gradient(#fb7c4d,#fb7c4d) 50% 50%,linear-gradient(#fecb3d,#fecb3d) 75% 50%,linear-gradient(#fb7c4d,#fb7c4d) 100% 50%;background-repeat:no-repeat;background-size:19% 10px,19% 10px,19% 10px,19% 50px,19% 10px}75%{background:linear-gradient(#fb7c4d,#fb7c4d) 0 50%,linear-gradient(#fb7c4d,#fb7c4d) 25% 50%,linear-gradient(#fb7c4d,#fb7c4d) 50% 50%,linear-gradient(#fb7c4d,#fb7c4d) 75% 50%,linear-gradient(#fecb3d,#fecb3d) 100% 50%;background-repeat:no-repeat;background-size:19% 10px,19% 10px,19% 10px,19% 10px,19% 50px}}@-webkit-keyframes splash-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes splash-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes splash-rotate{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes splash-rotate{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes splash-windcatcherSpin{from{-webkit-transform:rotateY(0) rotateX(-20deg);transform:rotateY(0) rotateX(-20deg)}to{-webkit-transform:rotateY(360deg) rotateX(-20deg);transform:rotateY(360deg) rotateX(-20deg)}}@keyframes splash-windcatcherSpin{from{-webkit-transform:rotateY(0) rotateX(-20deg);transform:rotateY(0) rotateX(-20deg)}to{-webkit-transform:rotateY(360deg) rotateX(-20deg);transform:rotateY(360deg) rotateX(-20deg)}}@-webkit-keyframes splash-windcatcherBg{0%,100%{background-color:#0277bd}50%{background-color:#01579b}51%{background-color:#40c4ff}70%{background-color:#039be5}}@keyframes splash-windcatcherBg{0%,100%{background-color:#0277bd}50%{background-color:#01579b}51%{background-color:#40c4ff}70%{background-color:#039be5}}@-webkit-keyframes splash-container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes splash-container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes splash-fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes splash-fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@-webkit-keyframes splash-blue-fade-in-out{100%,25%,90%,from{opacity:1}26%,89%{opacity:0}}@keyframes splash-blue-fade-in-out{100%,25%,90%,from{opacity:1}26%,89%{opacity:0}}@-webkit-keyframes splash-red-fade-in-out{15%,51%,from{opacity:0}25%,50%{opacity:1}}@keyframes splash-red-fade-in-out{15%,51%,from{opacity:0}25%,50%{opacity:1}}@-webkit-keyframes splash-yellow-fade-in-out{40%,76%,from{opacity:0}50%,75%{opacity:1}}@keyframes splash-yellow-fade-in-out{40%,76%,from{opacity:0}50%,75%{opacity:1}}@-webkit-keyframes splash-green-fade-in-out{100%,65%,from{opacity:0}75%,90%{opacity:1}}@keyframes splash-green-fade-in-out{100%,65%,from{opacity:0}75%,90%{opacity:1}}@-webkit-keyframes splash-left-spin{from,to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}}@keyframes splash-left-spin{from,to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}}@-webkit-keyframes splash-right-spin{from,to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}}@keyframes splash-right-spin{from,to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else {
			var a = factory();
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports) {

		/**
		 * splash-screen is very simple to use to setup a splash-screen for your
		 * application
		 *
		 * @author Howard.Zuo
		 * @date   May 11th, 2016
		 *
		 **/
		"use strict";
		var Splash = {
		    version: '2.4.0',
		    enable: function (theme) {
		        loadBody(function ($body) {
		            addClass($body, 'splashing');
		            var $splash = splashDiv();
		            $body.appendChild($splash);
		            if (!theme || !themes[theme]) {
		                theme = 'tailing';
		            }
		            themes[theme]($splash);
		            addClass($splash, theme);
		        });
		    },
		    isRunning: function () {
		        if (!document || !document.body) {
		            return;
		        }
		        return hasClass(document.body, 'splashing');
		    },
		    destroy: function () {
		        loadBody(function ($body) {
		            removeClass($body, 'splashing');
		            var $splash = getSplash($body);
		            if ($splash) {
		                $body.removeChild($splash);
		            }
		        });
		    }
		};
		exports.Splash = Splash;
		var elementClass = function (tag, className) {
		    var ele = document.createElement(tag);
		    ele.setAttribute('class', className);
		    return ele;
		};
		var elementTxt = function (tag, text) {
		    var ele = document.createElement(tag);
		    ele.innerText = text;
		    return ele;
		};
		var splashDiv = function () {
		    return elementClass('div', 'splash');
		};
		var tailingHandler = function ($splash) {
		    $splash.appendChild(elementTxt('span', 'Loading'));
		};
		var windcatcherHandler = function ($splash) {
		    for (var i = 0; i < 8; i++) {
		        $splash.appendChild(elementClass('div', 'blade'));
		    }
		};
		var circularHandler = function ($splash) {
		    var arr = [
		        'spinner-blue',
		        'spinner-red',
		        'spinner-yellow',
		        'spinner-green'
		    ];
		    for (var i = 0; i < arr.length; i++) {
		        var layer = elementClass('div', 'spinner-layer ' + arr[i]);
		        var circleLeft = elementClass('div', 'circle-clipper left');
		        var circle01 = elementClass('div', 'circle');
		        circleLeft.appendChild(circle01);
		        layer.appendChild(circleLeft);
		        var gapPatch = elementClass('div', 'gap-patch');
		        var circle02 = elementClass('div', 'circle');
		        gapPatch.appendChild(circle02);
		        layer.appendChild(gapPatch);
		        var circleRight = elementClass('div', 'circle-clipper right');
		        var circle03 = elementClass('div', 'circle');
		        circleRight.appendChild(circle03);
		        layer.appendChild(circleRight);
		        $splash.appendChild(layer);
		    }
		};
		var emptyHandler = function () { };
		var themes = {
		    tailing: tailingHandler,
		    windcatcher: windcatcherHandler,
		    'audio-wave': emptyHandler,
		    'spinner-section': emptyHandler,
		    'spinner-section-far': emptyHandler,
		    circular: circularHandler
		};
		var hasClass = function (ele, cls) {
		    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
		};
		var addClass = function (ele, cls) {
		    if (!hasClass(ele, cls)) {
		        ele.className += ' ' + cls;
		    }
		};
		var removeClass = function (ele, cls) {
		    if (hasClass(ele, cls)) {
		        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		        ele.className = ele.className.replace(reg, ' ');
		    }
		};
		var loadBody = function (callback) {
		    var $body = document.body;
		    if ($body) {
		        callback($body);
		        return;
		    }
		    setTimeout(function () {
		        $body = document.body;
		        if (!$body) {
		            loadBody(callback);
		            return;
		        }
		        callback($body);
		    }, 100);
		};
		var getSplash = function ($body) {
		    var children = $body.children;
		    for (var i = 0; i < children.length; i++) {
		        if (hasClass(children[i], 'splash')) {
		            return children[i];
		        }
		    }
		};


	/***/ }
	/******/ ])
	});
	;

/***/ }
]);
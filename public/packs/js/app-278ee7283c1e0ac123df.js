/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/app.jsx":
/*!**************************************!*\
  !*** ./app/javascript/packs/app.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/benn/projects/ga/shopping-react/app/javascript/packs/app.jsx: Unexpected token (44:44)\n\n  42 |     const {allProducts} = this.state\n  43 |     return <Slider {...settings}>\n> 44 |       {this.state.allProducts.length !== 0? }\n     |                                             ^\n  45 |     </Slider>;\n  46 |   }\n  47 | }\n    at Object.raise (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:6975:17)\n    at Object.unexpected (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:8368:16)\n    at Object.parseExprAtom (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:9627:20)\n    at Object.parseExprAtom (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:4097:20)\n    at Object.parseExprSubscripts (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:9210:23)\n    at Object.parseMaybeUnary (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:9190:21)\n    at Object.parseExprOps (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Object.parseMaybeConditional (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Object.parseMaybeAssign (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Object.parseConditional (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:9043:30)\n    at Object.parseMaybeConditional (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:9036:17)\n    at Object.parseMaybeAssign (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Object.parseExpression (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:8925:23)\n    at Object.jsxParseExpressionContainer (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:3948:30)\n    at Object.jsxParseElementAt (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:4042:36)\n    at Object.jsxParseElement (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:4085:17)\n    at Object.parseExprAtom (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:4092:19)\n    at Object.parseExprSubscripts (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:9210:23)\n    at Object.parseMaybeUnary (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:9190:21)\n    at Object.parseExprOps (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Object.parseMaybeConditional (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Object.parseMaybeAssign (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Object.parseExpression (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:8925:23)\n    at Object.parseReturnStatement (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:11025:28)\n    at Object.parseStatementContent (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:10704:21)\n    at Object.parseStatement (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:10656:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:11232:25)\n    at Object.parseBlockBody (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:11219:10)\n    at Object.parseBlock (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:11203:10)\n    at Object.parseFunctionBody (/Users/benn/projects/ga/shopping-react/node_modules/@babel/parser/lib/index.js:10222:24)");

/***/ })

/******/ });
//# sourceMappingURL=app-278ee7283c1e0ac123df.js.map
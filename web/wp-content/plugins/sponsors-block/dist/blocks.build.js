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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\n * BLOCK: sponsors-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$editor = wp.editor,\n    MediaUpload = _wp$editor.MediaUpload,\n    InspectorControls = _wp$editor.InspectorControls; //Import MediaUpload from wp.editor\n\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    TextControl = _wp$components.TextControl,\n    SelectControl = _wp$components.SelectControl,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow; //Import Button from wp.components\n\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/sponsors-block', {\n    title: __('Sponsors'), // Block title.\n    icon: 'editor-kitchensink', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n    category: 'common', // Block category\n    keywords: [//Keywords\n    __('sponsors')],\n    attributes: { //Attributes\n        images: { //Images array\n            type: 'array'\n        },\n        columns: {\n            type: 'string',\n            default: '3'\n        },\n        size: {\n            type: 'string',\n            default: 'large'\n        }\n    },\n\n    /**\n     * The edit function describes the structure of your block in the context of the editor.\n     * This represents what the editor will render when the block is used.\n     *\n     * The \"edit\" property must be a valid function.\n     *\n     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n     */\n    edit: function edit(_ref) {\n        var attributes = _ref.attributes,\n            className = _ref.className,\n            setAttributes = _ref.setAttributes,\n            focus = _ref.focus;\n\n\n        //Destructuring the images array attribute\n        var _attributes$images = attributes.images,\n            images = _attributes$images === undefined ? [] : _attributes$images,\n            columns = attributes.columns,\n            size = attributes.size;\n\n        // This removes an image from the gallery\n\n        var removeImage = function removeImage(_removeImage) {\n            //filter the images\n            var newImages = images.filter(function (image) {\n                //If the current image is equal to removeImage the image will be returnd\n                if (image.id != _removeImage.id) {\n                    return image;\n                }\n            });\n\n            //Saves the new state\n            setAttributes({\n                images: newImages\n            });\n        };\n\n        //Displays the images\n        var displayImages = function displayImages(images) {\n            return (\n                //Loops through the images\n                images.map(function (image) {\n                    return wp.element.createElement(\n                        'li',\n                        { 'class': 'blocks-gallery-item' },\n                        wp.element.createElement(\n                            'figure',\n                            null,\n                            wp.element.createElement('img', { className: 'gallery-item', src: image.url, key: images.id }),\n                            wp.element.createElement(\n                                'div',\n                                { className: 'remove-item', onClick: function onClick() {\n                                        return removeImage(image);\n                                    } },\n                                wp.element.createElement('span', { 'class': 'dashicons dashicons-trash' })\n                            )\n                        )\n                    );\n                })\n            );\n        };\n\n        function onColumnsChange(changes) {\n            setAttributes({\n                columns: changes\n            });\n        }\n\n        function onSizeChange(changes) {\n            setAttributes({\n                size: changes\n            });\n        }\n\n        //JSX to return\n        return [wp.element.createElement(\n            InspectorControls,\n            null,\n            wp.element.createElement(\n                PanelBody,\n                null,\n                wp.element.createElement(\n                    PanelRow,\n                    null,\n                    wp.element.createElement(\n                        'div',\n                        null,\n                        wp.element.createElement(TextControl, {\n                            label: 'Columns:',\n                            value: columns,\n                            onChange: onColumnsChange\n                        })\n                    )\n                ),\n                wp.element.createElement(\n                    PanelRow,\n                    null,\n                    wp.element.createElement(\n                        'div',\n                        null,\n                        wp.element.createElement(SelectControl, {\n                            label: 'Size of the logos:',\n                            value: size,\n                            onChange: onSizeChange,\n                            options: [{ label: 'Large', value: 'large' }, { label: 'Medium', value: 'medium' }, { label: 'Small', value: 'small' }]\n                        })\n                    )\n                )\n            )\n        ), wp.element.createElement(\n            'div',\n            null,\n            wp.element.createElement(\n                'ul',\n                { 'class': 'wp-block-gallery columns-3 is-cropped' },\n                displayImages(images)\n            ),\n            wp.element.createElement('br', null),\n            wp.element.createElement(MediaUpload, {\n                onSelect: function onSelect(media) {\n                    setAttributes({ images: [].concat(_toConsumableArray(images), _toConsumableArray(media)).sort(function (a, b) {\n                            return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;\n                        }) });\n                },\n                type: 'image',\n                multiple: true,\n                value: images,\n\n                render: function render(_ref2) {\n                    var open = _ref2.open;\n                    return wp.element.createElement(\n                        Button,\n                        { className: 'select-images-button is-button is-default is-large', onClick: open },\n                        'Add images'\n                    );\n                }\n            })\n        )];\n    },\n\n\n    /**\n     * The save function defines the way in which the different attributes should be combined\n     * into the final markup, which is then serialized by Gutenberg into post_content.\n     *\n     * The \"save\" property must be specified and must be a valid function.\n     *\n     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n     */\n    save: function save(_ref3) {\n        var attributes = _ref3.attributes;\n\n        //Destructuring the images array attribute\n        var _attributes$images2 = attributes.images,\n            images = _attributes$images2 === undefined ? [] : _attributes$images2,\n            columns = attributes.columns,\n            size = attributes.size;\n\n        // Displays the images\n\n        var displayImages = function displayImages(images) {\n            return images.map(function (image, index) {\n                return wp.element.createElement(\n                    'li',\n                    { 'class': 'blocks-gallery-item' },\n                    wp.element.createElement(\n                        'figure',\n                        null,\n                        wp.element.createElement(\n                            'a',\n                            { href: image.description },\n                            wp.element.createElement('img', {\n                                src: image.url,\n                                alt: image.alt,\n                                'data-id': image.id,\n                                'data-link': image.url,\n                                className: 'wp-image-' + image.id\n                            })\n                        )\n                    )\n                );\n            });\n        };\n\n        //JSX to return\n        return wp.element.createElement(\n            'ul',\n            { className: 'wp-block-gallery alignwide columns-' + columns + ' is-cropped ' + size },\n            displayImages(images)\n        );\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4vKipcbiAqIEJMT0NLOiBzcG9uc29ycy1ibG9ja1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzOyAvL0ltcG9ydCBNZWRpYVVwbG9hZCBmcm9tIHdwLmVkaXRvclxuXG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIEJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkJ1dHRvbixcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sLFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBQYW5lbFJvdyA9IF93cCRjb21wb25lbnRzLlBhbmVsUm93OyAvL0ltcG9ydCBCdXR0b24gZnJvbSB3cC5jb21wb25lbnRzXG5cblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9zcG9uc29ycy1ibG9jaycsIHtcbiAgICB0aXRsZTogX18oJ1Nwb25zb3JzJyksIC8vIEJsb2NrIHRpdGxlLlxuICAgIGljb246ICdlZGl0b3Ita2l0Y2hlbnNpbmsnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG4gICAgY2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeVxuICAgIGtleXdvcmRzOiBbLy9LZXl3b3Jkc1xuICAgIF9fKCdzcG9uc29ycycpXSxcbiAgICBhdHRyaWJ1dGVzOiB7IC8vQXR0cmlidXRlc1xuICAgICAgICBpbWFnZXM6IHsgLy9JbWFnZXMgYXJyYXlcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheSdcbiAgICAgICAgfSxcbiAgICAgICAgY29sdW1uczoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiAnMydcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiAnbGFyZ2UnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAgICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgICAgKlxuICAgICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICAgICovXG4gICAgZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzLFxuICAgICAgICAgICAgZm9jdXMgPSBfcmVmLmZvY3VzO1xuXG5cbiAgICAgICAgLy9EZXN0cnVjdHVyaW5nIHRoZSBpbWFnZXMgYXJyYXkgYXR0cmlidXRlXG4gICAgICAgIHZhciBfYXR0cmlidXRlcyRpbWFnZXMgPSBhdHRyaWJ1dGVzLmltYWdlcyxcbiAgICAgICAgICAgIGltYWdlcyA9IF9hdHRyaWJ1dGVzJGltYWdlcyA9PT0gdW5kZWZpbmVkID8gW10gOiBfYXR0cmlidXRlcyRpbWFnZXMsXG4gICAgICAgICAgICBjb2x1bW5zID0gYXR0cmlidXRlcy5jb2x1bW5zLFxuICAgICAgICAgICAgc2l6ZSA9IGF0dHJpYnV0ZXMuc2l6ZTtcblxuICAgICAgICAvLyBUaGlzIHJlbW92ZXMgYW4gaW1hZ2UgZnJvbSB0aGUgZ2FsbGVyeVxuXG4gICAgICAgIHZhciByZW1vdmVJbWFnZSA9IGZ1bmN0aW9uIHJlbW92ZUltYWdlKF9yZW1vdmVJbWFnZSkge1xuICAgICAgICAgICAgLy9maWx0ZXIgdGhlIGltYWdlc1xuICAgICAgICAgICAgdmFyIG5ld0ltYWdlcyA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgLy9JZiB0aGUgY3VycmVudCBpbWFnZSBpcyBlcXVhbCB0byByZW1vdmVJbWFnZSB0aGUgaW1hZ2Ugd2lsbCBiZSByZXR1cm5kXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlLmlkICE9IF9yZW1vdmVJbWFnZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vU2F2ZXMgdGhlIG5ldyBzdGF0ZVxuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgaW1hZ2VzOiBuZXdJbWFnZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vRGlzcGxheXMgdGhlIGltYWdlc1xuICAgICAgICB2YXIgZGlzcGxheUltYWdlcyA9IGZ1bmN0aW9uIGRpc3BsYXlJbWFnZXMoaW1hZ2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIC8vTG9vcHMgdGhyb3VnaCB0aGUgaW1hZ2VzXG4gICAgICAgICAgICAgICAgaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICdjbGFzcyc6ICdibG9ja3MtZ2FsbGVyeS1pdGVtJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmaWd1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IGNsYXNzTmFtZTogJ2dhbGxlcnktaXRlbScsIHNyYzogaW1hZ2UudXJsLCBrZXk6IGltYWdlcy5pZCB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3JlbW92ZS1pdGVtJywgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVtb3ZlSW1hZ2UoaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7ICdjbGFzcyc6ICdkYXNoaWNvbnMgZGFzaGljb25zLXRyYXNoJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBvbkNvbHVtbnNDaGFuZ2UoY2hhbmdlcykge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgY29sdW1uczogY2hhbmdlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvblNpemVDaGFuZ2UoY2hhbmdlcykge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgc2l6ZTogY2hhbmdlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0pTWCB0byByZXR1cm5cbiAgICAgICAgcmV0dXJuIFt3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgUGFuZWxCb2R5LFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBQYW5lbFJvdyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDb2x1bW5zOicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbHVtbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IG9uQ29sdW1uc0NoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBQYW5lbFJvdyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NpemUgb2YgdGhlIGxvZ29zOicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IG9uU2l6ZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbeyBsYWJlbDogJ0xhcmdlJywgdmFsdWU6ICdsYXJnZScgfSwgeyBsYWJlbDogJ01lZGl1bScsIHZhbHVlOiAnbWVkaXVtJyB9LCB7IGxhYmVsOiAnU21hbGwnLCB2YWx1ZTogJ3NtYWxsJyB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICd1bCcsXG4gICAgICAgICAgICAgICAgeyAnY2xhc3MnOiAnd3AtYmxvY2stZ2FsbGVyeSBjb2x1bW5zLTMgaXMtY3JvcHBlZCcgfSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5SW1hZ2VzKGltYWdlcylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcbiAgICAgICAgICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QobWVkaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IGltYWdlczogW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShpbWFnZXMpLCBfdG9Db25zdW1hYmxlQXJyYXkobWVkaWEpKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudGl0bGUgPiBiLnRpdGxlID8gMSA6IGIudGl0bGUgPiBhLnRpdGxlID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpbWFnZXMsXG5cbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3NlbGVjdC1pbWFnZXMtYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLWxhcmdlJywgb25DbGljazogb3BlbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0FkZCBpbWFnZXMnXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKV07XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgICAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICAgICpcbiAgICAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgICAgKi9cbiAgICBzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYzKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gX3JlZjMuYXR0cmlidXRlcztcblxuICAgICAgICAvL0Rlc3RydWN0dXJpbmcgdGhlIGltYWdlcyBhcnJheSBhdHRyaWJ1dGVcbiAgICAgICAgdmFyIF9hdHRyaWJ1dGVzJGltYWdlczIgPSBhdHRyaWJ1dGVzLmltYWdlcyxcbiAgICAgICAgICAgIGltYWdlcyA9IF9hdHRyaWJ1dGVzJGltYWdlczIgPT09IHVuZGVmaW5lZCA/IFtdIDogX2F0dHJpYnV0ZXMkaW1hZ2VzMixcbiAgICAgICAgICAgIGNvbHVtbnMgPSBhdHRyaWJ1dGVzLmNvbHVtbnMsXG4gICAgICAgICAgICBzaXplID0gYXR0cmlidXRlcy5zaXplO1xuXG4gICAgICAgIC8vIERpc3BsYXlzIHRoZSBpbWFnZXNcblxuICAgICAgICB2YXIgZGlzcGxheUltYWdlcyA9IGZ1bmN0aW9uIGRpc3BsYXlJbWFnZXMoaW1hZ2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgeyAnY2xhc3MnOiAnYmxvY2tzLWdhbGxlcnktaXRlbScgfSxcbiAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpZ3VyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhyZWY6IGltYWdlLmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogaW1hZ2UudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IGltYWdlLmFsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtaWQnOiBpbWFnZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtbGluayc6IGltYWdlLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnd3AtaW1hZ2UtJyArIGltYWdlLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvL0pTWCB0byByZXR1cm5cbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICd1bCcsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3dwLWJsb2NrLWdhbGxlcnkgYWxpZ253aWRlIGNvbHVtbnMtJyArIGNvbHVtbnMgKyAnIGlzLWNyb3BwZWQgJyArIHNpemUgfSxcbiAgICAgICAgICAgIGRpc3BsYXlJbWFnZXMoaW1hZ2VzKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
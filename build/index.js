/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BlockVariation_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlockVariation.scss */ "./src/BlockVariation.scss");






function Edit({
  attributes: {
    selectedCPT,
    CPTPosts,
    selectedTax,
    termArray,
    sortedTax,
    selectedVariation,
    selectedLayout,
    PostBorder,
    PostBorderColor,
    PostBorderRadius,
    PostBorderThick,
    PostBgColor,
    PostPadding,
    PostMargin,
    TitleColor,
    TitleFontSize,
    TitleMargin,
    TitlePadding,
    ContentColor,
    ContentFontSize,
    ContentMargin,
    ContentPadding
  },
  setAttributes
}) {
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
  const PostStyling = {
    border: PostBorderThick + "px solid " + PostBorderColor,
    borderRadius: PostBorderRadius + "px",
    backgroundColor: PostBgColor,
    padding: PostPadding + "px",
    margin: PostMargin + "px"
  };
  const TitleStyling = {
    color: TitleColor,
    fontSize: TitleFontSize + "px",
    margin: TitleMargin + "px",
    padding: TitlePadding + "px"
  };
  const ContentStyling = {
    color: ContentColor,
    fontSize: ContentFontSize + "px",
    margin: ContentMargin + "px",
    padding: ContentPadding + "px"
  };

  // Custom Posttype

  function updateCPT(value) {
    setAttributes({
      selectedCPT: value
    });
  }
  function updateDataValue(newDataValue) {
    setAttributes({
      CPTPosts: newDataValue
    });
    console.log(CPTPosts);
  }
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    if (selectedCPT) {
      const api_url = `/wp-json/wp/v2/${selectedCPT}/`;
      fetch(api_url).then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        setData(data);
        updateDataValue(data);
        console.log(data);
      }).catch(error => {
        console.error(error);
      });
    }
  }, [selectedCPT]);

  // taxonomies

  function updateTax(value) {
    const sortedTaxonomies = value.toString();
    setAttributes({
      selectedTax: sortedTaxonomies
    });
    setAttributes({
      sortedTax: sortedTaxonomies.split(',')
    });
  }
  function updateTaxArray(value) {
    setAttributes({
      termArray: value
    });
  }
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    if (sortedTax && sortedTax.length > 0) {
      const collectedTerms = [];
      const fetchTerms = async () => {
        for (const tax of sortedTax) {
          const api_url = `/wp-json/wp/v2/${tax}/`;
          try {
            const response = await fetch(api_url);
            const data = await response.json();
            data.forEach(term => {
              collectedTerms.push(term);
            });
          } catch (error) {
            console.error(error);
          }
        }
        updateTaxArray(collectedTerms);
      };
      fetchTerms();
    }
  }, [sortedTax]);
  const variations = [{
    name: 'Grid',
    title: 'Grid',
    css: 'gridview'
  }, {
    name: 'Listview',
    title: 'Listview',
    css: "listview"
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Custom Post Type Slug",
    value: selectedCPT,
    onChange: e => updateCPT(e),
    type: "text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Taxonomy slugs * separate with comma, no space *",
    value: selectedTax,
    onChange: e => updateTax(e),
    type: "text"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: "Post Styling",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalBlockVariationPicker, {
    variations: variations,
    value: selectedVariation,
    onSelect: variation => {
      setAttributes({
        selectedVariation: variation
      });
      setAttributes({
        selectedLayout: variation['css']
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: "Post Attributes",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: "Post Border",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Has border:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FormToggle, {
    checked: PostBorder,
    onChange: e => setAttributes({
      PostBorder: e
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: [{
      name: 'red',
      color: '#f00'
    }, {
      name: 'white',
      color: '#fff'
    }, {
      name: 'blue',
      color: '#00f'
    }],
    value: PostBorderColor,
    style: {
      width: "150px"
    },
    onChange: color => setAttributes({
      PostBorderColor: color
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: thick => setAttributes({
      PostBorderThick: thick
    }),
    shiftStep: 1,
    value: PostBorderThick,
    style: {
      width: "200px"
    },
    label: "Border Thickness"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: e => setAttributes({
      PostBorderRadius: e
    }),
    shiftStep: 1,
    min: 1,
    max: 1000,
    value: PostBorderRadius,
    style: {
      width: "200px"
    },
    label: "Border Radius"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "BackgroundColor:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: [{
      name: 'red',
      color: '#f00'
    }, {
      name: 'white',
      color: '#fff'
    }, {
      name: 'blue',
      color: '#00f'
    }],
    value: PostBgColor,
    style: {
      width: "150px"
    },
    onChange: color => setAttributes({
      PostBgColor: color
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: e => setAttributes({
      PostPadding: e
    }),
    shiftStep: 10,
    value: PostPadding,
    style: {
      width: "100px"
    },
    label: "Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: e => setAttributes({
      PostMargin: e
    }),
    shiftStep: 10,
    value: PostMargin,
    style: {
      width: "100px"
    },
    label: "Margin"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: "Title",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FontSizePicker, {
    fontSizes: [{
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small'),
      slug: 'small',
      size: 12
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large'),
      slug: 'large',
      size: 26
    }],
    value: TitleFontSize,
    fallbackFontSize: 12,
    onChange: size => setAttributes({
      TitleFontSize: size
    }),
    withSlider: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: [{
      name: 'red',
      color: '#f00'
    }, {
      name: 'white',
      color: '#fff'
    }, {
      name: 'blue',
      color: '#00f'
    }],
    value: TitleColor,
    style: {
      width: "150px"
    },
    onChange: color => setAttributes({
      TitleColor: color
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: e => setAttributes({
      TitlePadding: e
    }),
    shiftStep: 10,
    value: TitlePadding,
    style: {
      width: "100px"
    },
    label: "Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: e => setAttributes({
      TitleMargin: e
    }),
    shiftStep: 10,
    value: TitleMargin,
    style: {
      width: "100px"
    },
    label: "Margin"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: "Content",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FontSizePicker, {
    fontSizes: [{
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small'),
      slug: 'small',
      size: 12
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large'),
      slug: 'large',
      size: 26
    }],
    value: ContentFontSize,
    fallbackFontSize: 12,
    onChange: size => setAttributes({
      ContentFontSize: size
    }),
    withSlider: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: [{
      name: 'red',
      color: '#f00'
    }, {
      name: 'white',
      color: '#fff'
    }, {
      name: 'blue',
      color: '#00f'
    }],
    value: ContentColor,
    style: {
      width: "150px"
    },
    onChange: color => setAttributes({
      ContentColor: color
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: e => setAttributes({
      ContentPadding: e
    }),
    shiftStep: 10,
    value: ContentPadding,
    style: {
      width: "100px"
    },
    label: "Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: e => setAttributes({
      ContentMargin: e
    }),
    shiftStep: 10,
    value: ContentMargin,
    style: {
      width: "100px"
    },
    label: "Margin"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: selectedLayout
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "filter-post",
    style: PostStyling
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-image-wrapper"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-title-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: TitleStyling
  }, "Lorem Ipsum")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: ContentStyling,
    className: "post-content-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "2021-07-02"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "filter-post",
    style: PostStyling
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-image-wrapper"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-title-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: TitleStyling
  }, "Lorem Ipsum")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: ContentStyling,
    className: "post-content-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "2021-07-02"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "filter-post",
    style: PostStyling
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-image-wrapper"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-title-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: TitleStyling
  }, "Lorem Ipsum")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: ContentStyling,
    className: "post-content-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "2021-07-02"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "filter-post",
    style: PostStyling
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-image-wrapper"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-title-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: TitleStyling
  }, "Lorem Ipsum")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: ContentStyling,
    className: "post-content-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "2021-07-02")))));
}

// collumn 

// excerpt, ta bort html tags. lägg till compenet för att styra mängden text som visas

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _BlockVariation_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockVariation.scss */ "./src/BlockVariation.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BlockVariation_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlockVariation.scss */ "./src/BlockVariation.scss");




function save({
  attributes: {
    selectedCPT,
    CPTPosts,
    selectedTax,
    termArray,
    sortedTax,
    selectedVariation,
    selectedLayout,
    PostBorder,
    PostBorderColor,
    PostBorderRadius,
    PostBorderThick,
    PostBgColor,
    PostPadding,
    PostMargin,
    TitleColor,
    TitleFontSize,
    TitleMargin,
    TitlePadding,
    ContentColor,
    ContentFontSize,
    ContentMargin,
    ContentPadding
  },
  setAttributes
}) {
  const PostStyling = {
    border: PostBorderThick + "px solid " + PostBorderColor,
    borderRadius: PostBorderRadius + "px",
    backgroundColor: PostBgColor,
    padding: PostPadding + "px",
    margin: PostMargin + "px"
  };
  const TitleStyling = {
    color: TitleColor,
    fontSize: TitleFontSize + "px",
    margin: TitleMargin + "px",
    padding: TitlePadding + "px"
  };
  const storeActiveTermsToURL = () => {
    if (CPTPosts && selectedTax) {
      const activeTerms = new Set();
      CPTPosts.forEach(post => {
        if (post[selectedTax]) {
          if (Array.isArray(post[selectedTax])) {
            post[selectedTax].forEach(value => {
              termArray.forEach(term => {
                if (term.id === value) {
                  activeTerms.add(term.name);
                }
              });
            });
          } else {
            termArray.forEach(term => {
              if (term.id === post[selectedTax]) {
                activeTerms.add(term.name);
              }
            });
          }
        }
      });
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('filter', [...activeTerms].join(','));
      const newURL = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}`;
      window.history.replaceState(null, '', newURL);
    }
  };
  if (CPTPosts) {
    let posts = CPTPosts.map(post => {
      return {
        ...post,
        status: 'active'
      };
    });
    var postObjects = posts.map(post => {
      let postTerms = [];
      if (sortedTax) {
        sortedTax.map(tax => {
          if (post[tax] != null) {
            if (Array.isArray(post[tax])) {
              post[tax].forEach(value => {
                termArray.forEach(term => {
                  if (term.id === value) {
                    postTerms.push(term.name);
                  }
                });
              });
            } else {
              termArray.forEach(term => {
                if (term.id === post[tax]) {
                  postTerms.push(term.name);
                }
              });
            }
          }
        });
      }
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: PostStyling,
        key: post.id,
        className: postTerms.map(term => term.toString()).join(' ') + ' filter-post'
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: TitleStyling
      }, post.title.rendered), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, post.date));
    });
    const taxFilter = sortedTax.map((tax, index) => {
      const activeTerms = new Set();
      posts.forEach(post => {
        if (post[tax]) {
          if (Array.isArray(post[tax])) {
            post[tax].forEach(value => {
              termArray.forEach(term => {
                if (term.id === value) {
                  activeTerms.add(term.name);
                }
              });
            });
          } else {
            termArray.forEach(term => {
              if (term.id === post[tax]) {
                activeTerms.add(term.name);
              }
            });
          }
        }
      });
      const uniqueId = `selectElementId_${index}`;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: tax
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
        action: ""
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, tax, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
        className: "selectElementClass",
        id: uniqueId,
        onChange: storeActiveTermsToURL
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null, "Visa Alla"), [...activeTerms].map(term => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        key: term
      }, term))))));
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
    }, taxFilter, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: selectedLayout
    }, postObjects));
  }
}

/***/ }),

/***/ "./src/BlockVariation.scss":
/*!*********************************!*\
  !*** ./src/BlockVariation.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/filter-block-wpbyran","version":"0.1.0","title":"Filter Block Wpbyran","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"attributes":{"selectedCPT":{"type":"string"},"CPTPosts":{"type":"array"},"selectedTax":{"type":"string"},"sortedTax":{"type":"array"},"termArray":{"type":"array"},"selectedVariation":{"type":"string"},"selectedLayout":{"type":"string"},"PostBorder":{"type":"boolean"},"PostBorderColor":{"type":"string"},"PostBorderThick":{"type":"string"},"PostBorderRadius":{"type":"string"},"PostBgColor":{"type":"string"},"PostPadding":{"type":"string"},"PostMargin":{"type":"string"},"PostHeight":{"type":"string"},"PostWidth":{"type":"string"},"TitleColor":{"type":"string"},"TitleFontSize":{"type":"integer"},"TitleMargin":{"type":"string"},"TitlePadding":{"type":"string"},"ContentColor":{"type":"string"},"ContentFontSize":{"type":"integer"},"ContentMargin":{"type":"string"},"ContentPadding":{"type":"string"}},"textdomain":"filter-block-wpbyran","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfilter_block_wpbyran"] = self["webpackChunkfilter_block_wpbyran"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
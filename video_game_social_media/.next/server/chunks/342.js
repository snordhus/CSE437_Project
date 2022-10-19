"use strict";
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 2583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/kratos.74268691.jpg","height":512,"width":512,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAmQJ//8QAHhAAAgEDBQAAAAAAAAAAAAAAAQIRAwQSABMUMVL/2gAIAQEAAT8Ap29vxaiPjuFlwcGYMdMfOv/EABcRAQADAAAAAAAAAAAAAAAAAAEAEkH/2gAIAQIBAT8Asmz/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQISQf/aAAgBAwEBPwCsXh//2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/SidebarLink.js



function SidebarLink({ Icon , text , active  }) {
    if (text == "User") {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/login",
            className: "hidden xl:inline",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `text-black flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                            className: "h-7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "hidden xl:inline",
                            children: text
                        })
                    ]
                })
            })
        });
    } else if (text == "Marketplace") {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/marketplace",
            className: "hidden xl:inline",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `text-black flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                            className: "h-7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "hidden xl:inline",
                            children: text
                        })
                    ]
                })
            })
        });
    } else if (text == "Home") {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/",
            className: "hidden xl:inline",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `text-black flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                            className: "h-7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "hidden xl:inline",
                            children: text
                        })
                    ]
                })
            })
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `text-black flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                    className: "h-7"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "hidden xl:inline",
                    children: text
                })
            ]
        });
    }
}
/* harmony default export */ const components_SidebarLink = (SidebarLink);

// EXTERNAL MODULE: external "@heroicons/react/24/solid"
var solid_ = __webpack_require__(8802);
// EXTERNAL MODULE: external "@heroicons/react/24/outline"
var outline_ = __webpack_require__(2135);
;// CONCATENATED MODULE: ./components/Sidebar.js






function Sidebar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center hoverAnimation w-14 h-14 p-0 xl:ml-24",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: __webpack_require__(8272),
                    alt: "Logo",
                    width: 100,
                    height: 100
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-2.5 mt-4 mb-2.5 xl:ml-24",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "Home",
                        Icon: solid_.HomeIcon,
                        active: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "Game Forums",
                        Icon: outline_.ChatBubbleBottomCenterIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "Marketplace",
                        Icon: outline_.BuildingStorefrontIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "Daily Game",
                        Icon: outline_.PuzzlePieceIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SidebarLink, {
                        text: "User",
                        Icon: outline_.UserCircleIcon
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "hidden xl:inline xl:ml-24 bg-white text-black rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-blue-300",
                children: "Create Post"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-gray-100 flex items-center justify-center hoverAnimation xl:ml-24 xl:-mr-5 mt-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: __webpack_require__(2583),
                        alt: "User Icon",
                        width: 40,
                        height: 40,
                        className: "h-10 w-10 rounded-full"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden xl:inline leading-5 xl:ml-2.5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "font-bold",
                                children: "User 1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-black",
                                children: "@User1"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_.EllipsisHorizontalCircleIcon, {
                        className: "h-5 hidden xl:inline ml-10"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Sidebar = (Sidebar);


/***/ })

};
;
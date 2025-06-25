(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/feedback/feedback-home.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const FeedbackHome = ()=>{
    _s();
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [comment, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleStarClick = (starIndex)=>{
        setRating(starIndex + 1);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container d-flex align-items-center justify-content-center min-vh-100",
        style: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card border-0 shadow-lg p-5 w-100",
            style: {
                maxWidth: 480,
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "display-4 fw-bold",
                                style: {
                                    background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                },
                                children: "Feedback"
                            }, void 0, false, {
                                fileName: "[project]/src/app/feedback/feedback-home.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/feedback/feedback-home.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted",
                            children: "We'd love to hear your thoughts!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/feedback/feedback-home.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/feedback/feedback-home.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '4rem'
                                },
                                children: "🎉"
                            }, void 0, false, {
                                fileName: "[project]/src/app/feedback/feedback-home.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/feedback/feedback-home.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-success fw-bold mb-2",
                            children: "Thank You!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/feedback/feedback-home.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted",
                            children: "Your feedback has been submitted successfully."
                        }, void 0, false, {
                            fileName: "[project]/src/app/feedback/feedback-home.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/feedback/feedback-home.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "form-label fw-semibold text-dark mb-3",
                                    children: "How would you rate your experience?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/feedback/feedback-home.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex justify-content-center mb-3",
                                    children: [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4
                                    ].map((starIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "btn btn-link p-0 me-3",
                                            onClick: ()=>handleStarClick(starIndex),
                                            style: {
                                                fontSize: '2.5rem',
                                                color: starIndex < rating ? '#ffd700' : '#e0e0e0',
                                                transition: 'all 0.3s ease',
                                                filter: starIndex < rating ? 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5))' : 'none'
                                            },
                                            onMouseEnter: (e)=>{
                                                if (rating === 0) {
                                                    e.currentTarget.style.color = '#ffd700';
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }
                                            },
                                            onMouseLeave: (e)=>{
                                                if (rating === 0) {
                                                    e.currentTarget.style.color = '#e0e0e0';
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }
                                            },
                                            children: "⭐"
                                        }, starIndex, false, {
                                            fileName: "[project]/src/app/feedback/feedback-home.tsx",
                                            lineNumber: 43,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/feedback/feedback-home.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "badge bg-light text-dark px-3 py-2",
                                        style: {
                                            fontSize: '0.9rem'
                                        },
                                        children: [
                                            rating === 0 && 'Click to rate',
                                            rating === 1 && 'Poor',
                                            rating === 2 && 'Fair',
                                            rating === 3 && 'Good',
                                            rating === 4 && 'Very Good',
                                            rating === 5 && 'Excellent'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/feedback/feedback-home.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/feedback/feedback-home.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/feedback/feedback-home.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "comment",
                                    className: "form-label fw-semibold text-dark mb-3",
                                    children: "Tell us more about your experience"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/feedback/feedback-home.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "form-control border-0",
                                    id: "comment",
                                    rows: 4,
                                    value: comment,
                                    onChange: (e)=>setComment(e.target.value),
                                    placeholder: "Share your thoughts, suggestions, or any other feedback...",
                                    style: {
                                        borderRadius: '15px',
                                        background: '#f8f9fa',
                                        padding: '15px',
                                        fontSize: '1rem',
                                        resize: 'none',
                                        transition: 'all 0.3s ease'
                                    },
                                    onFocus: (e)=>{
                                        e.target.style.background = '#fff';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                    },
                                    onBlur: (e)=>{
                                        e.target.style.background = '#f8f9fa';
                                        e.target.style.boxShadow = 'none';
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/feedback/feedback-home.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/feedback/feedback-home.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "btn w-100 rounded-pill fw-bold py-3",
                            disabled: rating === 0,
                            style: {
                                background: rating === 0 ? '#e0e0e0' : 'linear-gradient(45deg, #ff6b6b, #feca57)',
                                color: rating === 0 ? '#999' : '#fff',
                                border: 'none',
                                fontSize: '1.1rem',
                                transition: 'all 0.3s ease',
                                transform: rating === 0 ? 'none' : 'translateY(0)'
                            },
                            onMouseEnter: (e)=>{
                                if (rating !== 0) {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.3)';
                                }
                            },
                            onMouseLeave: (e)=>{
                                if (rating !== 0) {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }
                            },
                            children: "Submit Feedback"
                        }, void 0, false, {
                            fileName: "[project]/src/app/feedback/feedback-home.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/feedback/feedback-home.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/feedback/feedback-home.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/feedback/feedback-home.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_s(FeedbackHome, "AD9fz++RSEe+qM1i/T+nASMxapA=");
_c = FeedbackHome;
const __TURBOPACK__default__export__ = FeedbackHome;
var _c;
__turbopack_context__.k.register(_c, "FeedbackHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Header": (()=>Header),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const notifications = [
    {
        id: 1,
        text: 'Your event registration was approved.'
    },
    {
        id: 2,
        text: 'New sponsor joined the platform.'
    },
    {
        id: 3,
        text: 'Your profile was updated successfully.'
    }
];
const Header = ()=>{
    _s();
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPopover, setShowPopover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUserPopover, setShowUserPopover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const notifBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setIsClient(true);
            if ("TURBOPACK compile-time truthy", 1) {
                __turbopack_context__.r("[project]/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js [app-client] (ecmascript)");
                const loggedInStatus = localStorage.getItem('loginState') === 'true';
                setIsLoggedIn(loggedInStatus);
            }
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                document.body.classList.toggle('dark-mode', darkMode);
            }
            const handleClickOutside = {
                "Header.useEffect.handleClickOutside": (event)=>{
                    if (notifBtnRef.current && !notifBtnRef.current.contains(event.target) && !document.getElementById('notif-popover')?.contains(event.target)) {
                        setShowPopover(false);
                    }
                    if (userBtnRef.current && !userBtnRef.current.contains(event.target) && !document.getElementById('user-popover')?.contains(event.target)) {
                        setShowUserPopover(false);
                    }
                }
            }["Header.useEffect.handleClickOutside"];
            if (showPopover || showUserPopover) {
                document.addEventListener('mousedown', handleClickOutside);
            } else {
                document.removeEventListener('mousedown', handleClickOutside);
            }
            return ({
                "Header.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        darkMode,
        showPopover,
        showUserPopover
    ]);
    const handleThemeToggle = ()=>{
        setDarkMode((prev)=>!prev);
        setIsLoggedIn(false);
        setShowUserPopover(false);
    };
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogout = ()=>{
        localStorage.setItem('loginState', 'false');
        setIsLoggedIn(false);
        setShowUserPopover(false);
        router.push('/');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-flex flex-wrap justify-content-between align-items-center px-3 px-md-5 py-2 sticky-top",
        style: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex align-items-center gap-2 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 50,
                            height: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#fff',
                            borderRadius: '50%',
                            border: '2px solid #FF9900',
                            boxShadow: '0 2px 8px rgba(255,153,0,0.08)',
                            marginRight: 6
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://images.scalebranding.com/elegant-b-letter-logo-e7491532-e662-48ce-ad79-29c55306d662.jpg",
                            alt: "Logo",
                            style: {
                                width: 49,
                                height: 49,
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/header.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/header.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "fw-bold lh-1",
                        style: {
                            color: '#29999',
                            fontFamily: 'Inter, Arial, sans-serif',
                            fontWeight: 800,
                            fontSize: '1.6rem',
                            letterSpacing: '1px',
                            lineHeight: 1.1,
                            userSelect: 'none'
                        },
                        children: [
                            "Sponso",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#FF9900'
                                },
                                children: "r"
                            }, void 0, false, {
                                fileName: "[project]/src/app/header.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#FF9900'
                                },
                                children: "Zone"
                            }, void 0, false, {
                                fileName: "[project]/src/app/header.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/header.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/header.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex align-items-center gap-1 flex-nowrap ms-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn rounded-circle p-2 border-0",
                        title: "Toggle Theme",
                        type: "button",
                        style: {
                            background: 'rgba(255,255,255,0.15)',
                            color: '#fff',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                        },
                        onClick: handleThemeToggle,
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.transform = 'scale(1.1)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            role: "img",
                            "aria-label": "theme",
                            style: {
                                fontSize: '1.1rem'
                            },
                            children: darkMode ? '🌞' : '🌓'
                        }, void 0, false, {
                            fileName: "[project]/src/app/header.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/header.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: notifBtnRef,
                                className: "btn rounded-circle p-2 border-0 position-relative",
                                title: "Notifications",
                                type: "button",
                                style: {
                                    background: 'rgba(255,255,255,0.15)',
                                    color: '#fff',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                },
                                onClick: ()=>setShowPopover((v)=>!v),
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        role: "img",
                                        "aria-label": "notifications",
                                        style: {
                                            fontSize: '1.1rem'
                                        },
                                        children: "🔔"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/header.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "position-absolute top-0 start-100 translate-middle badge rounded-pill",
                                        style: {
                                            background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                                            color: '#fff',
                                            fontSize: '0.7rem',
                                            border: '2px solid #fff',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                                        },
                                        children: notifications.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/header.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/header.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            showPopover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "notif-popover",
                                style: {
                                    position: 'absolute',
                                    top: '110%',
                                    right: 0,
                                    minWidth: 260,
                                    background: 'rgba(255,255,255,0.98)',
                                    borderRadius: 12,
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                                    border: '1px solid rgba(102,126,234,0.15)',
                                    zIndex: 2000,
                                    padding: '0.5rem 0',
                                    backdropFilter: 'blur(10px)'
                                },
                                className: "shadow-lg mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 py-2 border-bottom fw-bold text-primary",
                                        style: {
                                            fontSize: '1rem'
                                        },
                                        children: "Notifications"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/header.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 py-3 text-muted text-center",
                                        children: "No new notifications"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/header.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this) : notifications.map((notif)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-2 border-bottom text-dark",
                                            style: {
                                                fontSize: '0.97rem',
                                                background: 'none'
                                            },
                                            children: notif.text
                                        }, notif.id, false, {
                                            fileName: "[project]/src/app/header.tsx",
                                            lineNumber: 206,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 py-2 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "small text-muted",
                                            children: "View all"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/header.tsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/header.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/header.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/header.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    isClient && (isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: userBtnRef,
                                className: "btn rounded-circle p-2 border-0",
                                title: "User Menu",
                                type: "button",
                                style: {
                                    background: 'rgba(255,255,255,0.15)',
                                    color: '#fff',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                },
                                onClick: ()=>setShowUserPopover((v)=>!v),
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    role: "img",
                                    "aria-label": "user",
                                    style: {
                                        fontSize: '1.2rem'
                                    },
                                    children: "👤"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/header.tsx",
                                    lineNumber: 244,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/header.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this),
                            showUserPopover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "user-popover",
                                style: {
                                    position: 'absolute',
                                    top: '110%',
                                    right: 0,
                                    minWidth: 180,
                                    background: 'rgba(255,255,255,0.98)',
                                    borderRadius: 12,
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                                    border: '1px solid rgba(102,126,234,0.15)',
                                    zIndex: 2000,
                                    padding: '0.5rem',
                                    backdropFilter: 'blur(10px)'
                                },
                                className: "shadow-lg mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/admin",
                                        passHref: true,
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "btn w-100 text-start mb-2",
                                            style: {
                                                background: 'rgba(102,126,234,0.1)',
                                                border: '1px solid rgba(102,126,234,0.2)',
                                                color: '#667eea',
                                                transition: 'all 0.3s ease',
                                                padding: '8px 16px',
                                                borderRadius: '8px',
                                                fontSize: '0.95rem'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = 'rgba(102,126,234,0.15)';
                                                e.currentTarget.style.transform = 'translateY(-1px)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = 'rgba(102,126,234,0.1)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    role: "img",
                                                    "aria-label": "admin",
                                                    className: "me-2",
                                                    children: "⚙️"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/header.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 23
                                                }, this),
                                                "Admin"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/header.tsx",
                                            lineNumber: 265,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/header.tsx",
                                        lineNumber: 264,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/analytics",
                                        passHref: true,
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "btn w-100 text-start mb-2",
                                            style: {
                                                background: 'rgba(255, 206, 86, 0.12)',
                                                border: '1px solid rgba(255, 206, 86, 0.2)',
                                                color: '#e6a800',
                                                transition: 'all 0.3s ease',
                                                padding: '8px 16px',
                                                borderRadius: '8px',
                                                fontSize: '0.95rem'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = 'rgba(255, 206, 86, 0.18)';
                                                e.currentTarget.style.transform = 'translateY(-1px)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = 'rgba(255, 206, 86, 0.12)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    role: "img",
                                                    "aria-label": "analytics",
                                                    className: "me-2",
                                                    children: "📊"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/header.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 23
                                                }, this),
                                                "Analytics"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/header.tsx",
                                            lineNumber: 290,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/header.tsx",
                                        lineNumber: 289,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/sponsor-management",
                                        passHref: true,
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "btn w-100 text-start mb-2",
                                            style: {
                                                background: 'rgba(102, 204, 153, 0.12)',
                                                border: '1px solid rgba(102, 204, 153, 0.2)',
                                                color: '#26a96c',
                                                transition: 'all 0.3s ease',
                                                padding: '8px 16px',
                                                borderRadius: '8px',
                                                fontSize: '0.95rem'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = 'rgba(102, 204, 153, 0.18)';
                                                e.currentTarget.style.transform = 'translateY(-1px)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = 'rgba(102, 204, 153, 0.12)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    role: "img",
                                                    "aria-label": "sponsor management",
                                                    className: "me-2",
                                                    children: "🤝"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/header.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 23
                                                }, this),
                                                "Sponsor Management"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/header.tsx",
                                            lineNumber: 315,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/header.tsx",
                                        lineNumber: 314,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: "btn w-100 text-start",
                                        style: {
                                            background: 'rgba(255,107,107,0.1)',
                                            border: '1px solid rgba(255,107,107,0.2)',
                                            color: '#ff6b6b',
                                            transition: 'all 0.3s ease',
                                            padding: '8px 16px',
                                            borderRadius: '8px',
                                            fontSize: '0.95rem'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.background = 'rgba(255,107,107,0.15)';
                                            e.currentTarget.style.transform = 'translateY(-1px)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = 'rgba(255,107,107,0.1)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                role: "img",
                                                "aria-label": "logout",
                                                className: "me-2",
                                                children: "🚪"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/header.tsx",
                                                lineNumber: 360,
                                                columnNumber: 21
                                            }, this),
                                            "Logout"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/header.tsx",
                                        lineNumber: 339,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/header.tsx",
                                lineNumber: 247,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/header.tsx",
                        lineNumber: 220,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                passHref: true,
                                legacyBehavior: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "btn rounded-pill px-3 py-1 fw-semibold",
                                    style: {
                                        background: 'rgba(255,255,255,0.15)',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                        color: '#fff',
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                    },
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/header.tsx",
                                    lineNumber: 369,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/header.tsx",
                                lineNumber: 368,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/registraton",
                                passHref: true,
                                legacyBehavior: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "btn rounded-pill px-3 py-1 fw-semibold",
                                    style: {
                                        background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                                        border: 'none',
                                        color: '#fff',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(255,107,107,0.3)'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,107,107,0.4)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,107,107,0.3)';
                                    },
                                    children: "Register"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/header.tsx",
                                    lineNumber: 391,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/header.tsx",
                                lineNumber: 390,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/feedback",
                        passHref: true,
                        legacyBehavior: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "btn rounded-pill px-3 py-1 fw-semibold",
                            style: {
                                background: 'rgba(255,255,255,0.15)',
                                border: '1px solid rgba(255,255,255,0.3)',
                                color: '#fff',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                            },
                            children: "Feedback"
                        }, void 0, false, {
                            fileName: "[project]/src/app/header.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/header.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/header.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/header.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
};
_s(Header, "06YemZMvyHTkz5poTmu6XHuKXbE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_294657eb._.js.map
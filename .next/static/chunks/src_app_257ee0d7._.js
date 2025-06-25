(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/app/carousel-sponsor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CarouselSponsor": (()=>CarouselSponsor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const sponsors = [
    {
        name: 'Sponsor One',
        img: '/images/a1.jpg',
        link: '#'
    },
    {
        name: 'Sponsor Two',
        img: '/images/a2.jpg',
        link: '#'
    },
    {
        name: 'Sponsor Three',
        img: '/images/a3.jpg',
        link: '#'
    }
];
const CarouselSponsor = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarouselSponsor.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                __turbopack_context__.r("[project]/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js [app-client] (ecmascript)");
            }
        }
    }["CarouselSponsor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container my-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "fw-bold",
                        style: {
                            background: 'linear-gradient(45deg, #667eea, #764ba2)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: '2.5rem'
                        },
                        children: "Our Featured Sponsors"
                    }, void 0, false, {
                        fileName: "[project]/src/app/carousel-sponsor.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted",
                        children: "Discover the amazing companies that support our mission"
                    }, void 0, false, {
                        fileName: "[project]/src/app/carousel-sponsor.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/carousel-sponsor.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "sponsorCarousel",
                className: "carousel slide",
                "data-bs-ride": "carousel",
                style: {
                    borderRadius: '20px',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "carousel-inner",
                        style: {
                            borderRadius: '20px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)'
                        },
                        children: sponsors.map((sponsor, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `carousel-item${idx === 0 ? ' active' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex flex-column align-items-center justify-content-center py-5 px-2",
                                    style: {
                                        minHeight: 280
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2",
                                            style: {
                                                padding: '15px',
                                                background: 'rgba(255,255,255,0.95)',
                                                borderRadius: '15px',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                width: '90%'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: sponsor.img,
                                                alt: sponsor.name,
                                                className: "w-100",
                                                style: {
                                                    height: 'auto',
                                                    maxWidth: '150%',
                                                    maxHeight: 280,
                                                    objectFit: 'contain',
                                                    borderRadius: '10px',
                                                    transition: 'transform 0.3s ease'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = 'scale(1.05)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/carousel-sponsor.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/carousel-sponsor.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "fw-bold mb-2",
                                                style: {
                                                    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                                                },
                                                children: sponsor.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/carousel-sponsor.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/carousel-sponsor.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/carousel-sponsor.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            }, sponsor.name, false, {
                                fileName: "[project]/src/app/carousel-sponsor.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/carousel-sponsor.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "carousel-control-prev",
                        type: "button",
                        "data-bs-target": "#sponsorCarousel",
                        "data-bs-slide": "prev",
                        style: {
                            width: '50px',
                            height: '50px',
                            background: 'rgba(255,255,255,0.15)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '50%',
                            margin: 'auto 20px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                            e.currentTarget.style.transform = 'scale(1.1)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                            e.currentTarget.style.transform = 'scale(1)';
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "carousel-control-prev-icon",
                                "aria-hidden": "true",
                                style: {
                                    filter: 'invert(1)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/carousel-sponsor.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "visually-hidden",
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/src/app/carousel-sponsor.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/carousel-sponsor.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "carousel-control-next",
                        type: "button",
                        "data-bs-target": "#sponsorCarousel",
                        "data-bs-slide": "next",
                        style: {
                            width: '50px',
                            height: '50px',
                            background: 'rgba(255,255,255,0.15)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '50%',
                            margin: 'auto 20px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                            e.currentTarget.style.transform = 'scale(1.1)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                            e.currentTarget.style.transform = 'scale(1)';
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "carousel-control-next-icon",
                                "aria-hidden": "true",
                                style: {
                                    filter: 'invert(1)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/carousel-sponsor.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "visually-hidden",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/src/app/carousel-sponsor.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/carousel-sponsor.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/carousel-sponsor.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/carousel-sponsor.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
_s(CarouselSponsor, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = CarouselSponsor;
var _c;
__turbopack_context__.k.register(_c, "CarouselSponsor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/chatbot-icon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
const ChatbotIcon = ()=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const chatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close chat if clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatbotIcon.useEffect": ()=>{
            function handleClickOutside(event) {
                if (chatRef.current && !chatRef.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            if (open) {
                document.addEventListener('mousedown', handleClickOutside);
            } else {
                document.removeEventListener('mousedown', handleClickOutside);
            }
            return ({
                "ChatbotIcon.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["ChatbotIcon.useEffect"];
        }
    }["ChatbotIcon.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-lg",
                style: {
                    position: 'fixed',
                    bottom: 28,
                    right: 28,
                    width: 60,
                    height: 60,
                    zIndex: 1200,
                    fontSize: 28,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                    border: 'none'
                },
                onClick: ()=>setOpen((v)=>!v),
                "aria-label": "Open Chatbot",
                children: "🤖"
            }, void 0, false, {
                fileName: "[project]/src/app/chatbot-icon.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: chatRef,
                className: "card shadow-lg border-0",
                style: {
                    position: 'fixed',
                    bottom: 100,
                    right: 32,
                    width: 340,
                    maxWidth: '95vw',
                    zIndex: 1300,
                    borderRadius: 18,
                    background: 'rgba(255,255,255,0.98)',
                    backdropFilter: 'blur(8px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-header d-flex justify-content-between align-items-center bg-primary text-white rounded-top",
                        style: {
                            borderTopLeftRadius: 18,
                            borderTopRightRadius: 18
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "fw-bold",
                                children: "Chatbot"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chatbot-icon.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-sm btn-light ms-2 px-2 py-0",
                                style: {
                                    borderRadius: 8,
                                    fontWeight: 700
                                },
                                onClick: ()=>setOpen(false),
                                "aria-label": "Close Chatbot",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chatbot-icon.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chatbot-icon.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body p-3",
                        style: {
                            minHeight: 180,
                            maxHeight: 260,
                            overflowY: 'auto',
                            background: 'rgba(245,247,250,0.95)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 text-muted small",
                                children: "Hi! How can I help you today?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chatbot-icon.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 p-2 bg-primary text-white rounded-pill w-75 ms-auto text-end small",
                                children: "Show me the plans"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chatbot-icon.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 p-2 bg-light rounded-pill w-75 text-start small",
                                children: "Here are our subscription plans..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/chatbot-icon.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chatbot-icon.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-footer bg-white border-0 p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "d-flex align-items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "form-control rounded-pill",
                                    placeholder: "Type your message...",
                                    style: {
                                        fontSize: 15
                                    },
                                    disabled: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chatbot-icon.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary rounded-pill px-3",
                                    type: "button",
                                    disabled: true,
                                    children: "Send"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chatbot-icon.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/chatbot-icon.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/chatbot-icon.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/chatbot-icon.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(ChatbotIcon, "drHz60LlzlhNaUhiRN3Vt3DrVU4=");
_c = ChatbotIcon;
const __TURBOPACK__default__export__ = ChatbotIcon;
var _c;
__turbopack_context__.k.register(_c, "ChatbotIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/forum.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ForumLink": (()=>ForumLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const ForumLink = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#forum",
        title: "Visit Forum",
        className: "position-fixed rounded-circle shadow-lg d-flex align-items-center justify-content-center",
        style: {
            left: 24,
            bottom: 24,
            width: 60,
            height: 60,
            background: '#198754',
            color: '#fff',
            border: 'none',
            zIndex: 1050,
            transition: 'box-shadow 0.2s, background 0.2s',
            fontSize: 28,
            cursor: 'pointer',
            textDecoration: 'none'
        },
        onMouseOver: (e)=>e.currentTarget.style.background = '#146c43',
        onMouseOut: (e)=>e.currentTarget.style.background = '#198754',
        "aria-label": "Open forum",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            role: "img",
            "aria-label": "forum",
            children: "💬"
        }, void 0, false, {
            fileName: "[project]/src/app/forum.tsx",
            lineNumber: 27,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/forum.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, this);
_c = ForumLink;
var _c;
__turbopack_context__.k.register(_c, "ForumLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_257ee0d7._.js.map
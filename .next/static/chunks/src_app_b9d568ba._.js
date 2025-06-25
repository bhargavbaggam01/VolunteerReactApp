(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/analytics/analytics-graph.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarController"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineController"]);
const labels = Array.from({
    length: 30
}, (_, i)=>`Day ${i + 1}`);
const newUsersData = [
    12,
    19,
    15,
    25,
    30,
    38,
    45,
    32,
    28,
    40,
    55,
    60,
    50,
    48,
    52,
    70,
    75,
    65,
    58,
    62,
    80,
    85,
    90,
    78,
    72,
    68,
    88,
    95,
    105,
    100
];
const movingAverage = (data, windowSize)=>{
    const result = [];
    for(let i = 0; i < data.length; i++){
        if (i < windowSize - 1) {
            result.push(null);
        } else {
            const window = data.slice(i - windowSize + 1, i + 1);
            const average = window.reduce((a, b)=>a + b, 0) / windowSize;
            result.push(average);
        }
    }
    return result;
};
const movingAverageData = movingAverage(newUsersData, 7);
const data = {
    labels,
    datasets: [
        {
            type: 'line',
            label: '7-Day Moving Average',
            data: movingAverageData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            yAxisID: 'y'
        },
        {
            type: 'bar',
            label: 'New Users',
            data: newUsersData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            borderRadius: 5,
            yAxisID: 'y'
        }
    ]
};
const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: '30-Day New User Growth and Trend',
            font: {
                size: 20
            }
        },
        legend: {
            position: 'top'
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(200, 200, 200, 0.2)'
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
};
const MonthlyTrendChart = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 bg-white shadow-lg rounded-lg",
        style: {
            maxWidth: '1000px',
            margin: '2rem auto'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chart"], {
            type: "bar",
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/src/app/analytics/analytics-graph.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/analytics/analytics-graph.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
};
_c = MonthlyTrendChart;
const __TURBOPACK__default__export__ = MonthlyTrendChart;
var _c;
__turbopack_context__.k.register(_c, "MonthlyTrendChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/analytics/weely-subs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
'use client';
;
;
;
// Register components
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"]);
const labels = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
];
const data = {
    labels,
    datasets: [
        {
            label: 'New Subscriptions',
            data: [
                65,
                59,
                80,
                81,
                56,
                55,
                40
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            borderRadius: 5
        },
        {
            label: 'Cancellations',
            data: [
                12,
                19,
                3,
                5,
                2,
                3,
                7
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            borderRadius: 5
        }
    ]
};
const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Weekly Subscriptions vs Cancellations',
            font: {
                size: 20,
                weight: 'bold'
            },
            padding: {
                bottom: 20
            }
        },
        legend: {
            position: 'top'
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(200, 200, 200, 0.2)'
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
};
const WeeklyAnalysisChart = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 bg-white shadow-lg rounded-lg",
        style: {
            maxWidth: '800px',
            margin: 'auto'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/src/app/analytics/weely-subs.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/analytics/weely-subs.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
};
_c = WeeklyAnalysisChart;
const __TURBOPACK__default__export__ = WeeklyAnalysisChart;
var _c;
__turbopack_context__.k.register(_c, "WeeklyAnalysisChart");
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
"[project]/src/app/analytics/graph01.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"]);
const labels = [
    'Art',
    'Tech',
    'Education',
    'Sports',
    'Health',
    'Music',
    'Science'
];
const data = {
    labels,
    datasets: [
        {
            label: 'Sponsorship Amount ($K)',
            data: [
                120,
                200,
                150,
                90,
                170,
                130,
                110
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(100, 200, 100, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(100, 200, 100, 1)'
            ],
            borderWidth: 2,
            borderRadius: 8
        }
    ]
};
const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Sponsorship Amounts by Category',
            font: {
                size: 20
            },
            padding: {
                bottom: 20
            }
        },
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(200, 200, 200, 0.15)'
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
};
const SponsorshipCategoryChart = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 bg-white shadow-lg rounded-lg",
        style: {
            maxWidth: '700px',
            margin: '2rem auto'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/src/app/analytics/graph01.tsx",
            lineNumber: 81,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/analytics/graph01.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this);
_c = SponsorshipCategoryChart;
const __TURBOPACK__default__export__ = SponsorshipCategoryChart;
var _c;
__turbopack_context__.k.register(_c, "SponsorshipCategoryChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/analytics/graph02.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"]);
const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
const data = {
    labels,
    datasets: [
        {
            label: 'Sponsor Signups',
            data: [
                22,
                35,
                28,
                40,
                55,
                60,
                48,
                52,
                70,
                65,
                58,
                80
            ],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.15)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointRadius: 5,
            borderWidth: 3,
            tension: 0.4
        }
    ]
};
const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Monthly Sponsor Signups (Last 12 Months)',
            font: {
                size: 20
            },
            padding: {
                bottom: 20
            }
        },
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(200, 200, 200, 0.15)'
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
};
const MonthlySponsorSignupsChart = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 bg-white shadow-lg rounded-lg",
        style: {
            maxWidth: '700px',
            margin: '2rem auto'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/src/app/analytics/graph02.tsx",
            lineNumber: 82,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/analytics/graph02.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, this);
_c = MonthlySponsorSignupsChart;
const __TURBOPACK__default__export__ = MonthlySponsorSignupsChart;
var _c;
__turbopack_context__.k.register(_c, "MonthlySponsorSignupsChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_b9d568ba._.js.map
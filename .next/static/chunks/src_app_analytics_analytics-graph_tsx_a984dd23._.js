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
}]);

//# sourceMappingURL=src_app_analytics_analytics-graph_tsx_a984dd23._.js.map
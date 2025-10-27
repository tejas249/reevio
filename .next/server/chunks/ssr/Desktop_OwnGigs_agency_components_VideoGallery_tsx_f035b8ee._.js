module.exports = [
"[project]/Desktop/OwnGigs/agency/components/VideoGallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const videos = [
    {
        id: 1,
        title: "Real Estate Promo",
        src: "https://youtu.be/0qdmOGkuuwk"
    },
    {
        id: 2,
        title: "Cinematic Gym Promo",
        src: "https://youtu.be/_NVjXGDimn4"
    },
    {
        id: 3,
        title: "Cinematic Property Video",
        src: "https://youtu.be/giwFI73FxNY"
    },
    {
        id: 4,
        title: "Cooking Videos",
        src: "https://youtu.be/Ad9uylA8u1k"
    },
    {
        id: 5,
        title: "Travel Vlog",
        src: "https://youtube.com/shorts/BtDUVawmnDA"
    }
];
function getYouTubeEmbedUrl(url) {
    if (!url) return null;
    const shortMatch = url.match(/youtu\.be\/([^\?&/]+)/);
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}?rel=0&modestbranding=1&playsinline=1`;
    const watchMatch = url.match(/[?&]v=([^&]+)/);
    if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}?rel=0&modestbranding=1&playsinline=1`;
    const embedMatch = url.match(/youtube\.com\/embed\/([^\?&/]+)/);
    if (embedMatch) return `https://www.youtube.com/embed/${embedMatch[1]}?rel=0&modestbranding=1&playsinline=1`;
    const shortsMatch = url.match(/\/shorts\/([^\?&/]+)/);
    if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}?rel=0&modestbranding=1&playsinline=1`;
    return null;
}
function VideoGallery() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-background text-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14",
                    children: "Our Work"
                }, void 0, false, {
                    fileName: "[project]/Desktop/OwnGigs/agency/components/VideoGallery.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",
                    children: videos.map((video)=>{
                        const embedUrl = getYouTubeEmbedUrl(video.src);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group rounded-xl overflow-hidden bg-card shadow-xl hover:shadow-2xl border border-border transition-all duration-300 hover:scale-[1.02]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-video relative overflow-hidden bg-black",
                                    children: embedUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: embedUrl,
                                        title: video.title,
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                        allowFullScreen: true,
                                        loading: "lazy",
                                        className: "w-full h-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/OwnGigs/agency/components/VideoGallery.tsx",
                                        lineNumber: 51,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: video.src,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-sm text-primary underline",
                                            children: "Open video"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/OwnGigs/agency/components/VideoGallery.tsx",
                                            lineNumber: 61,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/OwnGigs/agency/components/VideoGallery.tsx",
                                        lineNumber: 60,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/OwnGigs/agency/components/VideoGallery.tsx",
                                    lineNumber: 49,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300",
                                        children: video.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/OwnGigs/agency/components/VideoGallery.tsx",
                                        lineNumber: 74,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/OwnGigs/agency/components/VideoGallery.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, video.id, true, {
                            fileName: "[project]/Desktop/OwnGigs/agency/components/VideoGallery.tsx",
                            lineNumber: 45,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/OwnGigs/agency/components/VideoGallery.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/OwnGigs/agency/components/VideoGallery.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/OwnGigs/agency/components/VideoGallery.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_OwnGigs_agency_components_VideoGallery_tsx_f035b8ee._.js.map
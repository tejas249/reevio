(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttributeToStateChangeEventMap",
    ()=>AttributeToStateChangeEventMap,
    "AvailabilityStates",
    ()=>AvailabilityStates,
    "MediaStateChangeEvents",
    ()=>MediaStateChangeEvents,
    "MediaStateReceiverAttributes",
    ()=>MediaStateReceiverAttributes,
    "MediaUIAttributes",
    ()=>MediaUIAttributes,
    "MediaUIEvents",
    ()=>MediaUIEvents,
    "MediaUIProps",
    ()=>MediaUIProps,
    "PointerTypes",
    ()=>PointerTypes,
    "ReadyStates",
    ()=>ReadyStates,
    "StateChangeEventToAttributeMap",
    ()=>StateChangeEventToAttributeMap,
    "StreamTypes",
    ()=>StreamTypes,
    "TextTrackKinds",
    ()=>TextTrackKinds,
    "TextTrackModes",
    ()=>TextTrackModes,
    "VolumeLevels",
    ()=>VolumeLevels,
    "WebkitPresentationModes",
    ()=>WebkitPresentationModes
]);
const MediaUIEvents = {
    MEDIA_PLAY_REQUEST: "mediaplayrequest",
    MEDIA_PAUSE_REQUEST: "mediapauserequest",
    MEDIA_MUTE_REQUEST: "mediamuterequest",
    MEDIA_UNMUTE_REQUEST: "mediaunmuterequest",
    MEDIA_VOLUME_REQUEST: "mediavolumerequest",
    MEDIA_SEEK_REQUEST: "mediaseekrequest",
    MEDIA_AIRPLAY_REQUEST: "mediaairplayrequest",
    MEDIA_ENTER_FULLSCREEN_REQUEST: "mediaenterfullscreenrequest",
    MEDIA_EXIT_FULLSCREEN_REQUEST: "mediaexitfullscreenrequest",
    MEDIA_PREVIEW_REQUEST: "mediapreviewrequest",
    MEDIA_ENTER_PIP_REQUEST: "mediaenterpiprequest",
    MEDIA_EXIT_PIP_REQUEST: "mediaexitpiprequest",
    MEDIA_ENTER_CAST_REQUEST: "mediaentercastrequest",
    MEDIA_EXIT_CAST_REQUEST: "mediaexitcastrequest",
    MEDIA_SHOW_TEXT_TRACKS_REQUEST: "mediashowtexttracksrequest",
    MEDIA_HIDE_TEXT_TRACKS_REQUEST: "mediahidetexttracksrequest",
    MEDIA_SHOW_SUBTITLES_REQUEST: "mediashowsubtitlesrequest",
    MEDIA_DISABLE_SUBTITLES_REQUEST: "mediadisablesubtitlesrequest",
    MEDIA_TOGGLE_SUBTITLES_REQUEST: "mediatogglesubtitlesrequest",
    MEDIA_PLAYBACK_RATE_REQUEST: "mediaplaybackraterequest",
    MEDIA_RENDITION_REQUEST: "mediarenditionrequest",
    MEDIA_AUDIO_TRACK_REQUEST: "mediaaudiotrackrequest",
    MEDIA_SEEK_TO_LIVE_REQUEST: "mediaseektoliverequest",
    REGISTER_MEDIA_STATE_RECEIVER: "registermediastatereceiver",
    UNREGISTER_MEDIA_STATE_RECEIVER: "unregistermediastatereceiver"
};
const MediaStateReceiverAttributes = {
    MEDIA_CHROME_ATTRIBUTES: "mediachromeattributes",
    MEDIA_CONTROLLER: "mediacontroller"
};
const MediaUIProps = {
    MEDIA_AIRPLAY_UNAVAILABLE: "mediaAirplayUnavailable",
    MEDIA_AUDIO_TRACK_ENABLED: "mediaAudioTrackEnabled",
    MEDIA_AUDIO_TRACK_LIST: "mediaAudioTrackList",
    MEDIA_AUDIO_TRACK_UNAVAILABLE: "mediaAudioTrackUnavailable",
    MEDIA_BUFFERED: "mediaBuffered",
    MEDIA_CAST_UNAVAILABLE: "mediaCastUnavailable",
    MEDIA_CHAPTERS_CUES: "mediaChaptersCues",
    MEDIA_CURRENT_TIME: "mediaCurrentTime",
    MEDIA_DURATION: "mediaDuration",
    MEDIA_ENDED: "mediaEnded",
    MEDIA_ERROR: "mediaError",
    MEDIA_ERROR_CODE: "mediaErrorCode",
    MEDIA_ERROR_MESSAGE: "mediaErrorMessage",
    MEDIA_FULLSCREEN_UNAVAILABLE: "mediaFullscreenUnavailable",
    MEDIA_HAS_PLAYED: "mediaHasPlayed",
    MEDIA_HEIGHT: "mediaHeight",
    MEDIA_IS_AIRPLAYING: "mediaIsAirplaying",
    MEDIA_IS_CASTING: "mediaIsCasting",
    MEDIA_IS_FULLSCREEN: "mediaIsFullscreen",
    MEDIA_IS_PIP: "mediaIsPip",
    MEDIA_LOADING: "mediaLoading",
    MEDIA_MUTED: "mediaMuted",
    MEDIA_PAUSED: "mediaPaused",
    MEDIA_PIP_UNAVAILABLE: "mediaPipUnavailable",
    MEDIA_PLAYBACK_RATE: "mediaPlaybackRate",
    MEDIA_PREVIEW_CHAPTER: "mediaPreviewChapter",
    MEDIA_PREVIEW_COORDS: "mediaPreviewCoords",
    MEDIA_PREVIEW_IMAGE: "mediaPreviewImage",
    MEDIA_PREVIEW_TIME: "mediaPreviewTime",
    MEDIA_RENDITION_LIST: "mediaRenditionList",
    MEDIA_RENDITION_SELECTED: "mediaRenditionSelected",
    MEDIA_RENDITION_UNAVAILABLE: "mediaRenditionUnavailable",
    MEDIA_SEEKABLE: "mediaSeekable",
    MEDIA_STREAM_TYPE: "mediaStreamType",
    MEDIA_SUBTITLES_LIST: "mediaSubtitlesList",
    MEDIA_SUBTITLES_SHOWING: "mediaSubtitlesShowing",
    MEDIA_TARGET_LIVE_WINDOW: "mediaTargetLiveWindow",
    MEDIA_TIME_IS_LIVE: "mediaTimeIsLive",
    MEDIA_VOLUME: "mediaVolume",
    MEDIA_VOLUME_LEVEL: "mediaVolumeLevel",
    MEDIA_VOLUME_UNAVAILABLE: "mediaVolumeUnavailable",
    MEDIA_WIDTH: "mediaWidth"
};
const MediaUIPropsEntries = Object.entries(MediaUIProps);
const MediaUIAttributes = MediaUIPropsEntries.reduce((dictObj, param)=>{
    let [key, propName] = param;
    dictObj[key] = propName.toLowerCase();
    return dictObj;
}, {});
const AdditionalStateChangeEvents = {
    USER_INACTIVE_CHANGE: "userinactivechange",
    BREAKPOINTS_CHANGE: "breakpointchange",
    BREAKPOINTS_COMPUTED: "breakpointscomputed"
};
const MediaStateChangeEvents = MediaUIPropsEntries.reduce((dictObj, param)=>{
    let [key, propName] = param;
    dictObj[key] = propName.toLowerCase();
    return dictObj;
}, {
    ...AdditionalStateChangeEvents
});
const StateChangeEventToAttributeMap = Object.entries(MediaStateChangeEvents).reduce((mapObj, param)=>{
    let [key, eventType] = param;
    const attrName = MediaUIAttributes[key];
    if (attrName) {
        mapObj[eventType] = attrName;
    }
    return mapObj;
}, {
    userinactivechange: "userinactive"
});
const AttributeToStateChangeEventMap = Object.entries(MediaUIAttributes).reduce((mapObj, param)=>{
    let [key, attrName] = param;
    const evtType = MediaStateChangeEvents[key];
    if (evtType) {
        mapObj[attrName] = evtType;
    }
    return mapObj;
}, {
    userinactive: "userinactivechange"
});
const TextTrackKinds = {
    SUBTITLES: "subtitles",
    CAPTIONS: "captions",
    DESCRIPTIONS: "descriptions",
    CHAPTERS: "chapters",
    METADATA: "metadata"
};
const TextTrackModes = {
    DISABLED: "disabled",
    HIDDEN: "hidden",
    SHOWING: "showing"
};
const ReadyStates = {
    HAVE_NOTHING: 0,
    HAVE_METADATA: 1,
    HAVE_CURRENT_DATA: 2,
    HAVE_FUTURE_DATA: 3,
    HAVE_ENOUGH_DATA: 4
};
const PointerTypes = {
    MOUSE: "mouse",
    PEN: "pen",
    TOUCH: "touch"
};
const AvailabilityStates = {
    UNAVAILABLE: "unavailable",
    UNSUPPORTED: "unsupported"
};
const StreamTypes = {
    LIVE: "live",
    ON_DEMAND: "on-demand",
    UNKNOWN: "unknown"
};
const VolumeLevels = {
    HIGH: "high",
    MEDIUM: "medium",
    LOW: "low",
    OFF: "off"
};
const WebkitPresentationModes = {
    INLINE: "inline",
    FULLSCREEN: "fullscreen",
    PICTURE_IN_PICTURE: "picture-in-picture"
};
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "camelCase",
    ()=>camelCase,
    "capitalize",
    ()=>capitalize,
    "constToCamel",
    ()=>constToCamel,
    "dashedToCamel",
    ()=>dashedToCamel,
    "delay",
    ()=>delay,
    "isNumericString",
    ()=>isNumericString,
    "isValidNumber",
    ()=>isValidNumber,
    "parseAudioTrack",
    ()=>parseAudioTrack,
    "parseAudioTrackList",
    ()=>parseAudioTrackList,
    "parseRendition",
    ()=>parseRendition,
    "parseRenditionList",
    ()=>parseRenditionList,
    "stringifyAudioTrack",
    ()=>stringifyAudioTrack,
    "stringifyAudioTrackList",
    ()=>stringifyAudioTrackList,
    "stringifyRendition",
    ()=>stringifyRendition,
    "stringifyRenditionList",
    ()=>stringifyRenditionList
]);
function stringifyRenditionList(renditions) {
    return renditions == null ? void 0 : renditions.map(stringifyRendition).join(" ");
}
function parseRenditionList(renditions) {
    return renditions == null ? void 0 : renditions.split(/\s+/).map(parseRendition);
}
function stringifyRendition(rendition) {
    if (rendition) {
        const { id, width, height } = rendition;
        return [
            id,
            width,
            height
        ].filter((a)=>a != null).join(":");
    }
}
function parseRendition(rendition) {
    if (rendition) {
        const [id, width, height] = rendition.split(":");
        return {
            id,
            width: +width,
            height: +height
        };
    }
}
function stringifyAudioTrackList(audioTracks) {
    return audioTracks == null ? void 0 : audioTracks.map(stringifyAudioTrack).join(" ");
}
function parseAudioTrackList(audioTracks) {
    return audioTracks == null ? void 0 : audioTracks.split(/\s+/).map(parseAudioTrack);
}
function stringifyAudioTrack(audioTrack) {
    if (audioTrack) {
        const { id, kind, language, label } = audioTrack;
        return [
            id,
            kind,
            language,
            label
        ].filter((a)=>a != null).join(":");
    }
}
function parseAudioTrack(audioTrack) {
    if (audioTrack) {
        const [id, kind, language, label] = audioTrack.split(":");
        return {
            id,
            kind,
            language,
            label
        };
    }
}
function dashedToCamel(word) {
    return word.split("-").map(function(x, i) {
        return (i ? x[0].toUpperCase() : x[0].toLowerCase()) + x.slice(1).toLowerCase();
    }).join("");
}
function constToCamel(word) {
    let upperFirst = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return word.split("_").map(function(x, i) {
        return (i || upperFirst ? x[0].toUpperCase() : x[0].toLowerCase()) + x.slice(1).toLowerCase();
    }).join("");
}
function camelCase(name) {
    return name.replace(/[-_]([a-z])/g, ($0, $1)=>$1.toUpperCase());
}
function isValidNumber(x) {
    return typeof x === "number" && !Number.isNaN(x) && Number.isFinite(x);
}
function isNumericString(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}
const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
const capitalize = (str)=>str && str[0].toUpperCase() + str.slice(1);
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/time.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emptyTimeRanges",
    ()=>emptyTimeRanges,
    "formatAsTimePhrase",
    ()=>formatAsTimePhrase,
    "formatTime",
    ()=>formatTime,
    "serializeTimeRanges",
    ()=>serializeTimeRanges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/utils.js [app-client] (ecmascript)");
;
const UnitLabels = [
    {
        singular: "hour",
        plural: "hours"
    },
    {
        singular: "minute",
        plural: "minutes"
    },
    {
        singular: "second",
        plural: "seconds"
    }
];
const toTimeUnitPhrase = (timeUnitValue, unitIndex)=>{
    const unitLabel = timeUnitValue === 1 ? UnitLabels[unitIndex].singular : UnitLabels[unitIndex].plural;
    return "".concat(timeUnitValue, " ").concat(unitLabel);
};
const formatAsTimePhrase = (seconds)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNumber"])(seconds)) return "";
    const positiveSeconds = Math.abs(seconds);
    const negative = positiveSeconds !== seconds;
    const secondsDateTime = new Date(0, 0, 0, 0, 0, positiveSeconds, 0);
    const timeParts = [
        secondsDateTime.getHours(),
        secondsDateTime.getMinutes(),
        secondsDateTime.getSeconds()
    ];
    const timeString = timeParts.map((timeUnitValue, index)=>timeUnitValue && toTimeUnitPhrase(timeUnitValue, index)).filter((x)=>x).join(", ");
    const negativeSuffix = negative ? " remaining" : "";
    return "".concat(timeString).concat(negativeSuffix);
};
function formatTime(seconds, guide) {
    let negative = false;
    if (seconds < 0) {
        negative = true;
        seconds = 0 - seconds;
    }
    seconds = seconds < 0 ? 0 : seconds;
    let s = Math.floor(seconds % 60);
    let m = Math.floor(seconds / 60 % 60);
    let h = Math.floor(seconds / 3600);
    const gm = Math.floor(guide / 60 % 60);
    const gh = Math.floor(guide / 3600);
    if (isNaN(seconds) || seconds === Infinity) {
        h = m = s = "0";
    }
    h = h > 0 || gh > 0 ? h + ":" : "";
    m = ((h || gm >= 10) && m < 10 ? "0" + m : m) + ":";
    s = s < 10 ? "0" + s : s;
    return (negative ? "-" : "") + h + m + s;
}
const emptyTimeRanges = Object.freeze({
    length: 0,
    start (index) {
        const unsignedIdx = index >>> 0;
        if (unsignedIdx >= this.length) {
            throw new DOMException("Failed to execute 'start' on 'TimeRanges': The index provided (".concat(unsignedIdx, ") is greater than or equal to the maximum bound (").concat(this.length, ")."));
        }
        return 0;
    },
    end (index) {
        const unsignedIdx = index >>> 0;
        if (unsignedIdx >= this.length) {
            throw new DOMException("Failed to execute 'end' on 'TimeRanges': The index provided (".concat(unsignedIdx, ") is greater than or equal to the maximum bound (").concat(this.length, ")."));
        }
        return 0;
    }
});
function serializeTimeRanges() {
    let timeRanges = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : emptyTimeRanges;
    return Array.from(timeRanges).map((_, i)=>[
            Number(timeRanges.start(i).toFixed(3)),
            Number(timeRanges.end(i).toFixed(3))
        ].join(":")).join(" ");
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/lang/en.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "En",
    ()=>En
]);
const En = {
    "Start airplay": "Start airplay",
    "Stop airplay": "Stop airplay",
    Audio: "Audio",
    Captions: "Captions",
    "Enable captions": "Enable captions",
    "Disable captions": "Disable captions",
    "Start casting": "Start casting",
    "Stop casting": "Stop casting",
    "Enter fullscreen mode": "Enter fullscreen mode",
    "Exit fullscreen mode": "Exit fullscreen mode",
    Mute: "Mute",
    Unmute: "Unmute",
    "Enter picture in picture mode": "Enter picture in picture mode",
    "Exit picture in picture mode": "Exit picture in picture mode",
    Play: "Play",
    Pause: "Pause",
    "Playback rate": "Playback rate",
    "Playback rate {playbackRate}": "Playback rate {playbackRate}",
    Quality: "Quality",
    "Seek backward": "Seek backward",
    "Seek forward": "Seek forward",
    Settings: "Settings",
    Auto: "Auto",
    "audio player": "audio player",
    "video player": "video player",
    volume: "volume",
    seek: "seek",
    "closed captions": "closed captions",
    "current playback rate": "current playback rate",
    "playback time": "playback time",
    "media loading": "media loading",
    settings: "settings",
    "audio tracks": "audio tracks",
    quality: "quality",
    play: "play",
    pause: "pause",
    mute: "mute",
    unmute: "unmute",
    live: "live",
    Off: "Off",
    "start airplay": "start airplay",
    "stop airplay": "stop airplay",
    "start casting": "start casting",
    "stop casting": "stop casting",
    "enter fullscreen mode": "enter fullscreen mode",
    "exit fullscreen mode": "exit fullscreen mode",
    "enter picture in picture mode": "enter picture in picture mode",
    "exit picture in picture mode": "exit picture in picture mode",
    "seek to live": "seek to live",
    "playing live": "playing live",
    "seek back {seekOffset} seconds": "seek back {seekOffset} seconds",
    "seek forward {seekOffset} seconds": "seek forward {seekOffset} seconds",
    "Network Error": "Network Error",
    "Decode Error": "Decode Error",
    "Source Not Supported": "Source Not Supported",
    "Encryption Error": "Encryption Error",
    "A network error caused the media download to fail.": "A network error caused the media download to fail.",
    "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.": "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",
    "An unsupported error occurred. The server or network failed, or your browser does not support this format.": "An unsupported error occurred. The server or network failed, or your browser does not support this format.",
    "The media is encrypted and there are no keys to decrypt it.": "The media is encrypted and there are no keys to decrypt it."
};
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTranslation",
    ()=>addTranslation,
    "setLanguage",
    ()=>setLanguage,
    "t",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$lang$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/lang/en.js [app-client] (ecmascript)");
var _a;
;
const translations = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$lang$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["En"]
};
let currentLang = ((_a = globalThis.navigator) == null ? void 0 : _a.language) || "en";
const setLanguage = (langCode)=>{
    currentLang = langCode;
};
const addTranslation = (lang, languageDictionary)=>{
    translations[lang] = languageDictionary;
};
const resolveTranslation = (key)=>{
    var _a2, _b, _c;
    const [base] = currentLang.split("-");
    return ((_a2 = translations[currentLang]) == null ? void 0 : _a2[key]) || ((_b = translations[base]) == null ? void 0 : _b[key]) || ((_c = translations.en) == null ? void 0 : _c[key]) || key;
};
const t = function(key) {
    let vars = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return resolveTranslation(key).replace(/\{(\w+)\}/g, (_, v)=>v in vars ? String(vars[v]) : "{".concat(v, "}"));
};
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Document",
    ()=>Document,
    "GlobalThis",
    ()=>GlobalThis,
    "document",
    ()=>Document,
    "globalThis",
    ()=>GlobalThis,
    "isServer",
    ()=>isServer
]);
class EventTarget {
    addEventListener() {}
    removeEventListener() {}
    dispatchEvent() {
        return true;
    }
}
class Node extends EventTarget {
}
class Element extends Node {
    constructor(){
        super(...arguments);
        this.role = null;
    }
}
class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}
const documentShim = {
    createElement: function() {
        return new globalThisShim.HTMLElement();
    },
    createElementNS: function() {
        return new globalThisShim.HTMLElement();
    },
    addEventListener () {},
    removeEventListener () {},
    dispatchEvent (_event) {
        return false;
    }
};
const globalThisShim = {
    ResizeObserver,
    document: documentShim,
    Node,
    Element,
    HTMLElement: class HTMLElement extends Element {
        get content() {
            return new globalThisShim.DocumentFragment();
        }
        constructor(){
            super(...arguments);
            this.innerHTML = "";
        }
    },
    DocumentFragment: class DocumentFragment extends EventTarget {
    },
    customElements: {
        get: function() {},
        define: function() {},
        whenDefined: function() {}
    },
    localStorage: {
        getItem (_key) {
            return null;
        },
        setItem (_key, _value) {},
        removeItem (_key) {}
    },
    CustomEvent: function CustomEvent() {},
    getComputedStyle: function() {},
    navigator: {
        languages: [],
        get userAgent () {
            return "";
        }
    },
    matchMedia (media) {
        return {
            matches: false,
            media
        };
    },
    DOMParser: class DOMParser {
        parseFromString(string, _contentType) {
            return {
                body: {
                    textContent: string
                }
            };
        }
    }
};
const isServer = typeof window === "undefined" || typeof window.customElements === "undefined";
const isShimmed = Object.keys(globalThisShim).every((key)=>key in globalThis);
const GlobalThis = isServer && !isShimmed ? globalThisShim : globalThis;
const Document = isServer && !isShimmed ? documentShim : globalThis.document;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/resize-observer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "observeResize",
    ()=>observeResize,
    "unobserveResize",
    ()=>unobserveResize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
;
const callbacksMap = /* @__PURE__ */ new WeakMap();
const getCallbacks = (element)=>{
    let callbacks = callbacksMap.get(element);
    if (!callbacks) callbacksMap.set(element, callbacks = /* @__PURE__ */ new Set());
    return callbacks;
};
const observer = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].ResizeObserver((entries)=>{
    for (const entry of entries){
        for (const callback of getCallbacks(entry.target)){
            callback(entry);
        }
    }
});
function observeResize(element, callback) {
    getCallbacks(element).add(callback);
    observer.observe(element);
}
function unobserveResize(element, callback) {
    const callbacks = getCallbacks(element);
    callbacks.delete(callback);
    if (!callbacks.size) {
        observer.unobserve(element);
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closestComposedNode",
    ()=>closestComposedNode,
    "containsComposedNode",
    ()=>containsComposedNode,
    "distance",
    ()=>distance,
    "getActiveElement",
    ()=>getActiveElement,
    "getAllSlotted",
    ()=>getAllSlotted,
    "getAttributeMediaController",
    ()=>getAttributeMediaController,
    "getBooleanAttr",
    ()=>getBooleanAttr,
    "getCSSRule",
    ()=>getCSSRule,
    "getDocumentOrShadowRoot",
    ()=>getDocumentOrShadowRoot,
    "getMediaController",
    ()=>getMediaController,
    "getNumericAttr",
    ()=>getNumericAttr,
    "getOrInsertCSSRule",
    ()=>getOrInsertCSSRule,
    "getPointProgressOnLine",
    ()=>getPointProgressOnLine,
    "getSlotted",
    ()=>getSlotted,
    "getStringAttr",
    ()=>getStringAttr,
    "insertCSSRule",
    ()=>insertCSSRule,
    "isElementVisible",
    ()=>isElementVisible,
    "namedNodeMapToObject",
    ()=>namedNodeMapToObject,
    "setBooleanAttr",
    ()=>setBooleanAttr,
    "setNumericAttr",
    ()=>setNumericAttr,
    "setStringAttr",
    ()=>setStringAttr,
    "updateIconText",
    ()=>updateIconText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
;
function namedNodeMapToObject(namedNodeMap) {
    const obj = {};
    for (const attr of namedNodeMap){
        obj[attr.name] = attr.value;
    }
    return obj;
}
function getMediaController(host) {
    var _a;
    return (_a = getAttributeMediaController(host)) != null ? _a : closestComposedNode(host, "media-controller");
}
function getAttributeMediaController(host) {
    var _a;
    const { MEDIA_CONTROLLER } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"];
    const mediaControllerId = host.getAttribute(MEDIA_CONTROLLER);
    if (mediaControllerId) {
        return (_a = getDocumentOrShadowRoot(host)) == null ? void 0 : _a.getElementById(mediaControllerId);
    }
}
const updateIconText = function(svg, value) {
    let selector = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".value";
    const node = svg.querySelector(selector);
    if (!node) return;
    node.textContent = value;
};
const getAllSlotted = (el, name)=>{
    const slotSelector = 'slot[name="'.concat(name, '"]');
    const slot = el.shadowRoot.querySelector(slotSelector);
    if (!slot) return [];
    return slot.children;
};
const getSlotted = (el, name)=>getAllSlotted(el, name)[0];
const containsComposedNode = (rootNode, childNode)=>{
    if (!rootNode || !childNode) return false;
    if (rootNode == null ? void 0 : rootNode.contains(childNode)) return true;
    return containsComposedNode(rootNode, childNode.getRootNode().host);
};
const closestComposedNode = (childNode, selector)=>{
    if (!childNode) return null;
    const closest = childNode.closest(selector);
    if (closest) return closest;
    return closestComposedNode(childNode.getRootNode().host, selector);
};
function getActiveElement() {
    let root = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    var _a;
    const activeEl = root == null ? void 0 : root.activeElement;
    if (!activeEl) return null;
    return (_a = getActiveElement(activeEl.shadowRoot)) != null ? _a : activeEl;
}
function getDocumentOrShadowRoot(node) {
    var _a;
    const rootNode = (_a = node == null ? void 0 : node.getRootNode) == null ? void 0 : _a.call(node);
    if (rootNode instanceof ShadowRoot || rootNode instanceof Document) {
        return rootNode;
    }
    return null;
}
function isElementVisible(element) {
    let { depth = 3, checkOpacity = true, checkVisibilityCSS = true } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (element.checkVisibility) {
        return element.checkVisibility({
            checkOpacity,
            checkVisibilityCSS
        });
    }
    let el = element;
    while(el && depth > 0){
        const style = getComputedStyle(el);
        if (checkOpacity && style.opacity === "0" || checkVisibilityCSS && style.visibility === "hidden" || style.display === "none") {
            return false;
        }
        el = el.parentElement;
        depth--;
    }
    return true;
}
function getPointProgressOnLine(x, y, p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const lengthSquared = dx * dx + dy * dy;
    if (lengthSquared === 0) return 0;
    const projection = ((x - p1.x) * dx + (y - p1.y) * dy) / lengthSquared;
    return Math.max(0, Math.min(1, projection));
}
function distance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function getOrInsertCSSRule(styleParent, selectorText) {
    const cssRule = getCSSRule(styleParent, (st)=>st === selectorText);
    if (cssRule) return cssRule;
    return insertCSSRule(styleParent, selectorText);
}
function getCSSRule(styleParent, predicate) {
    var _a, _b;
    let style;
    for (style of (_a = styleParent.querySelectorAll("style:not([media])")) != null ? _a : []){
        let cssRules;
        try {
            cssRules = (_b = style.sheet) == null ? void 0 : _b.cssRules;
        } catch (e) {
            continue;
        }
        for (const rule of cssRules != null ? cssRules : []){
            if (predicate(rule.selectorText)) return rule;
        }
    }
}
function insertCSSRule(styleParent, selectorText) {
    var _a, _b;
    const styles = (_a = styleParent.querySelectorAll("style:not([media])")) != null ? _a : [];
    const style = styles == null ? void 0 : styles[styles.length - 1];
    if (!(style == null ? void 0 : style.sheet)) {
        console.warn("Media Chrome: No style sheet found on style tag of", styleParent);
        return {
            // @ts-ignore
            style: {
                setProperty: ()=>{},
                removeProperty: ()=>"",
                getPropertyValue: ()=>""
            }
        };
    }
    style == null ? void 0 : style.sheet.insertRule("".concat(selectorText, "{}"), style.sheet.cssRules.length);
    return /** @type {CSSStyleRule} */ (_b = style.sheet.cssRules) == null ? void 0 : _b[style.sheet.cssRules.length - 1];
}
function getNumericAttr(el, attrName) {
    let defaultValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN;
    const attrVal = el.getAttribute(attrName);
    return attrVal != null ? +attrVal : defaultValue;
}
function setNumericAttr(el, attrName, value) {
    const nextNumericValue = +value;
    if (value == null || Number.isNaN(nextNumericValue)) {
        if (el.hasAttribute(attrName)) {
            el.removeAttribute(attrName);
        }
        return;
    }
    if (getNumericAttr(el, attrName, void 0) === nextNumericValue) return;
    el.setAttribute(attrName, "".concat(nextNumericValue));
}
function getBooleanAttr(el, attrName) {
    return el.hasAttribute(attrName);
}
function setBooleanAttr(el, attrName, value) {
    if (value == null) {
        if (el.hasAttribute(attrName)) {
            el.removeAttribute(attrName);
        }
        return;
    }
    if (getBooleanAttr(el, attrName) == value) return;
    el.toggleAttribute(attrName, value);
}
function getStringAttr(el, attrName) {
    let defaultValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var _a;
    return (_a = el.getAttribute(attrName)) != null ? _a : defaultValue;
}
function setStringAttr(el, attrName, value) {
    if (value == null) {
        if (el.hasAttribute(attrName)) {
            el.removeAttribute(attrName);
        }
        return;
    }
    const nextValue = "".concat(value);
    if (getStringAttr(el, attrName, void 0) === nextValue) return;
    el.setAttribute(attrName, nextValue);
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-gesture-receiver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_gesture_receiver_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _mediaController;
;
;
;
function getTemplateHTML(_attrs) {
    return "\n    <style>\n      :host {\n        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));\n        box-sizing: border-box;\n      }\n    </style>\n  ";
}
class MediaGestureReceiver extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    // NOTE: Currently "baking in" actions + attrs until we come up with
    // a more robust architecture (CJP)
    static get observedAttributes() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        var _a, _b, _c, _d, _e;
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER) {
            if (oldValue) {
                (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
                __privateSet(this, _mediaController, null);
            }
            if (newValue && this.isConnected) {
                __privateSet(this, _mediaController, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
                (_e = (_d = __privateGet(this, _mediaController)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
            }
        }
    }
    connectedCallback() {
        var _a, _b, _c, _d;
        this.tabIndex = -1;
        this.setAttribute("aria-hidden", "true");
        __privateSet(this, _mediaController, getMediaControllerEl(this));
        if (this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER)) {
            (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.associateElement) == null ? void 0 : _b.call(_a, this);
        }
        (_c = __privateGet(this, _mediaController)) == null ? void 0 : _c.addEventListener("pointerdown", this);
        (_d = __privateGet(this, _mediaController)) == null ? void 0 : _d.addEventListener("click", this);
    }
    disconnectedCallback() {
        var _a, _b, _c, _d;
        if (this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER)) {
            (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        }
        (_c = __privateGet(this, _mediaController)) == null ? void 0 : _c.removeEventListener("pointerdown", this);
        (_d = __privateGet(this, _mediaController)) == null ? void 0 : _d.removeEventListener("click", this);
        __privateSet(this, _mediaController, null);
    }
    handleEvent(event) {
        var _a;
        const composedTarget = (_a = event.composedPath()) == null ? void 0 : _a[0];
        const allowList = [
            "video",
            "media-controller"
        ];
        if (!allowList.includes(composedTarget == null ? void 0 : composedTarget.localName)) return;
        if (event.type === "pointerdown") {
            this._pointerType = event.pointerType;
        } else if (event.type === "click") {
            const { clientX, clientY } = event;
            const { left, top, width, height } = this.getBoundingClientRect();
            const x = clientX - left;
            const y = clientY - top;
            if (x < 0 || y < 0 || x > width || y > height || // In case this element has no dimensions (or display: none) return.
            width === 0 && height === 0) {
                return;
            }
            const { pointerType = this._pointerType } = event;
            this._pointerType = void 0;
            if (pointerType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerTypes"].TOUCH) {
                this.handleTap(event);
                return;
            } else if (pointerType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerTypes"].MOUSE) {
                this.handleMouseClick(event);
                return;
            }
        }
    }
    /**
   * @type {boolean} Is the media paused
   */ get mediaPaused() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED);
    }
    set mediaPaused(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, value);
    }
    // NOTE: Currently "baking in" actions + attrs until we come up with
    // a more robust architecture (CJP)
    /**
   * @abstract
   * @argument {Event} e
   */ handleTap(e) {}
    // eslint-disable-line
    // eslint-disable-next-line
    handleMouseClick(e) {
        const eventName = this.mediaPaused ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PLAY_REQUEST : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PAUSE_REQUEST;
        this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(eventName, {
            composed: true,
            bubbles: true
        }));
    }
    constructor(){
        super();
        __privateAdd(this, _mediaController, void 0);
        if (!this.shadowRoot) {
            this.attachShadow(this.constructor.shadowRootOptions);
            const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
            this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
        }
    }
}
_mediaController = new WeakMap();
MediaGestureReceiver.shadowRootOptions = {
    mode: "open"
};
MediaGestureReceiver.getTemplateHTML = getTemplateHTML;
function getMediaControllerEl(controlEl) {
    var _a;
    const mediaControllerId = controlEl.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER);
    if (mediaControllerId) {
        return (_a = controlEl.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestComposedNode"])(controlEl, "media-controller");
}
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-gesture-receiver")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-gesture-receiver", MediaGestureReceiver);
}
var media_gesture_receiver_default = MediaGestureReceiver;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-container.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "MediaContainer",
    ()=>MediaContainer,
    "default",
    ()=>media_container_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/resize-observer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$gesture$2d$receiver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-gesture-receiver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _pointerDownTimeStamp, _currentMedia, _inactiveTimeout, _autohide, _mutationObserver, _handleMutation, handleMutation_fn, _isResizePending, _handleResize, _handlePointerMove, handlePointerMove_fn, _handlePointerUp, handlePointerUp_fn, _setInactive, setInactive_fn, _setActive, setActive_fn, _scheduleInactive, scheduleInactive_fn;
;
;
;
;
;
;
;
const Attributes = {
    AUDIO: "audio",
    AUTOHIDE: "autohide",
    BREAKPOINTS: "breakpoints",
    GESTURES_DISABLED: "gesturesdisabled",
    KEYBOARD_CONTROL: "keyboardcontrol",
    NO_AUTOHIDE: "noautohide",
    USER_INACTIVE: "userinactive",
    AUTOHIDE_OVER_CONTROLS: "autohideovercontrols"
};
function getTemplateHTML(_attrs) {
    return /*html*/ "\n    <style>\n      \n      :host([".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_FULLSCREEN, "]) ::slotted([slot=media]) {\n        outline: none;\n      }\n\n      :host {\n        box-sizing: border-box;\n        position: relative;\n        display: inline-block;\n        line-height: 0;\n        background-color: var(--media-background-color, #000);\n      }\n\n      :host(:not([").concat(Attributes.AUDIO, "])) [part~=layer]:not([part~=media-layer]) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        display: flex;\n        flex-flow: column nowrap;\n        align-items: start;\n        pointer-events: none;\n        background: none;\n      }\n\n      slot[name=media] {\n        display: var(--media-slot-display, contents);\n      }\n\n      ", "\n      :host([").concat(Attributes.AUDIO, "]) slot[name=media] {\n        display: var(--media-slot-display, none);\n      }\n\n      ", "\n      :host([").concat(Attributes.AUDIO, "]) [part~=layer][part~=gesture-layer] {\n        height: 0;\n        display: block;\n      }\n\n      ", "\n      :host(:not([").concat(Attributes.AUDIO, "])[").concat(Attributes.GESTURES_DISABLED, "]) ::slotted([slot=gestures-chrome]),\n          :host(:not([").concat(Attributes.AUDIO, "])[").concat(Attributes.GESTURES_DISABLED, "]) media-gesture-receiver[slot=gestures-chrome] {\n        display: none;\n      }\n\n      ", "\n      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {\n        pointer-events: auto;\n      }\n\n      :host(:not([").concat(Attributes.AUDIO, "])) *[part~=layer][part~=centered-layer] {\n        align-items: center;\n        justify-content: center;\n      }\n\n      :host(:not([").concat(Attributes.AUDIO, "])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),\n      :host(:not([").concat(Attributes.AUDIO, "])) media-gesture-receiver[slot=gestures-chrome] {\n        align-self: stretch;\n        flex-grow: 1;\n      }\n\n      slot[name=middle-chrome] {\n        display: inline;\n        flex-grow: 1;\n        pointer-events: none;\n        background: none;\n      }\n\n      ", "\n      ::slotted([slot=media]),\n      ::slotted([slot=poster]) {\n        width: 100%;\n        height: 100%;\n      }\n\n      ", "\n      :host(:not([").concat(Attributes.AUDIO, "])) .spacer {\n        flex-grow: 1;\n      }\n\n      ", "\n      :host(:-webkit-full-screen) {\n        ", "\n        width: 100% !important;\n        height: 100% !important;\n      }\n\n      ", "\n      ::slotted(:not([slot=media]):not([slot=poster]):not([").concat(Attributes.NO_AUTOHIDE, "]):not([hidden]):not([role=dialog])) {\n        opacity: 1;\n        transition: var(--media-control-transition-in, opacity 0.25s);\n      }\n\n      ", "\n      :host([").concat(Attributes.USER_INACTIVE, "]:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, "]):not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_AIRPLAYING, "]):not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_CASTING, "]):not([").concat(Attributes.AUDIO, "])) ::slotted(:not([slot=media]):not([slot=poster]):not([").concat(Attributes.NO_AUTOHIDE, "]):not([role=dialog])) {\n        opacity: 0;\n        transition: var(--media-control-transition-out, opacity 1s);\n      }\n\n      :host([").concat(Attributes.USER_INACTIVE, "]:not([").concat(Attributes.NO_AUTOHIDE, "]):not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, "]):not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_CASTING, "]):not([").concat(Attributes.AUDIO, "])) ::slotted([slot=media]) {\n        cursor: none;\n      }\n\n      :host([").concat(Attributes.USER_INACTIVE, "][").concat(Attributes.AUTOHIDE_OVER_CONTROLS, "]:not([").concat(Attributes.NO_AUTOHIDE, "]):not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, "]):not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_CASTING, "]):not([").concat(Attributes.AUDIO, "])) * {\n        --media-cursor: none;\n        cursor: none;\n      }\n\n\n      ::slotted(media-control-bar)  {\n        align-self: stretch;\n      }\n\n      ", "\n      :host(:not([").concat(Attributes.AUDIO, "])[").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_HAS_PLAYED, ']) slot[name=poster] {\n        display: none;\n      }\n\n      ::slotted([role=dialog]) {\n        width: 100%;\n        height: 100%;\n        align-self: center;\n      }\n\n      ::slotted([role=menu]) {\n        align-self: end;\n      }\n    </style>\n\n    <slot name="media" part="layer media-layer"></slot>\n    <slot name="poster" part="layer poster-layer"></slot>\n    <slot name="gestures-chrome" part="layer gesture-layer">\n      <media-gesture-receiver slot="gestures-chrome">\n        <template shadowrootmode="').concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$gesture$2d$receiver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shadowRootOptions.mode, '">\n          ').concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$gesture$2d$receiver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getTemplateHTML({}), '\n        </template>\n      </media-gesture-receiver>\n    </slot>\n    <span part="layer vertical-layer">\n      <slot name="top-chrome" part="top chrome"></slot>\n      <slot name="middle-chrome" part="middle chrome"></slot>\n      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>\n      ', '\n      <slot part="bottom chrome"></slot>\n    </span>\n    <slot name="dialog" part="layer dialog-layer"></slot>\n  ');
}
const MEDIA_UI_ATTRIBUTE_NAMES = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"]);
const defaultBreakpoints = "sm:384 md:576 lg:768 xl:960";
function resizeCallback(entry) {
    setBreakpoints(entry.target, entry.contentRect.width);
}
function setBreakpoints(container, width) {
    var _a;
    if (!container.isConnected) return;
    const breakpoints = (_a = container.getAttribute(Attributes.BREAKPOINTS)) != null ? _a : defaultBreakpoints;
    const ranges = createBreakpointMap(breakpoints);
    const activeBreakpoints = getBreakpoints(ranges, width);
    let changed = false;
    Object.keys(ranges).forEach((name)=>{
        if (activeBreakpoints.includes(name)) {
            if (!container.hasAttribute("breakpoint".concat(name))) {
                container.setAttribute("breakpoint".concat(name), "");
                changed = true;
            }
            return;
        }
        if (container.hasAttribute("breakpoint".concat(name))) {
            container.removeAttribute("breakpoint".concat(name));
            changed = true;
        }
    });
    if (changed) {
        const evt = new CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateChangeEvents"].BREAKPOINTS_CHANGE, {
            detail: activeBreakpoints
        });
        container.dispatchEvent(evt);
    }
    if (!container.breakpointsComputed) {
        container.breakpointsComputed = true;
        container.dispatchEvent(new CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateChangeEvents"].BREAKPOINTS_COMPUTED, {
            bubbles: true,
            composed: true
        }));
    }
}
function createBreakpointMap(breakpoints) {
    const pairs = breakpoints.split(/\s+/);
    return Object.fromEntries(pairs.map((pair)=>pair.split(":")));
}
function getBreakpoints(breakpoints, width) {
    return Object.keys(breakpoints).filter((name)=>{
        return width >= parseInt(breakpoints[name]);
    });
}
class MediaContainer extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    static get observedAttributes() {
        return [
            Attributes.AUTOHIDE,
            Attributes.GESTURES_DISABLED
        ].concat(MEDIA_UI_ATTRIBUTE_NAMES).filter((name)=>![
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_LIST,
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_LIST,
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CHAPTERS_CUES,
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_WIDTH,
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_HEIGHT,
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_ERROR,
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_ERROR_MESSAGE
            ].includes(name));
    }
    // Could share this code with media-chrome-html-element instead
    attributeChangedCallback(attrName, _oldValue, newValue) {
        if (attrName.toLowerCase() == Attributes.AUTOHIDE) {
            this.autohide = newValue;
        }
    }
    // First direct child with slot=media, or null
    get media() {
        let media = this.querySelector(":scope > [slot=media]");
        if ((media == null ? void 0 : media.nodeName) == "SLOT") media = media.assignedElements({
            flatten: true
        })[0];
        return media;
    }
    async handleMediaUpdated(media) {
        if (!media) return;
        __privateSet(this, _currentMedia, media);
        if (media.localName.includes("-")) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.whenDefined(media.localName);
        }
        this.mediaSetCallback(media);
    }
    connectedCallback() {
        var _a;
        __privateGet(this, _mutationObserver).observe(this, {
            childList: true,
            subtree: true
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeResize"])(this, __privateGet(this, _handleResize));
        const isAudioChrome = this.getAttribute(Attributes.AUDIO) != null;
        const label = isAudioChrome ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("audio player") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("video player");
        this.setAttribute("role", "region");
        this.setAttribute("aria-label", label);
        this.handleMediaUpdated(this.media);
        this.setAttribute(Attributes.USER_INACTIVE, "");
        setBreakpoints(this, this.getBoundingClientRect().width);
        this.addEventListener("pointerdown", this);
        this.addEventListener("pointermove", this);
        this.addEventListener("pointerup", this);
        this.addEventListener("mouseleave", this);
        this.addEventListener("keyup", this);
        (_a = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].window) == null ? void 0 : _a.addEventListener("mouseup", this);
    }
    disconnectedCallback() {
        var _a;
        __privateGet(this, _mutationObserver).disconnect();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unobserveResize"])(this, __privateGet(this, _handleResize));
        if (this.media) {
            this.mediaUnsetCallback(this.media);
        }
        (_a = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].window) == null ? void 0 : _a.removeEventListener("mouseup", this);
    }
    /**
   * @abstract
   */ mediaSetCallback(_media) {}
    mediaUnsetCallback(_media) {
        __privateSet(this, _currentMedia, null);
    }
    handleEvent(event) {
        switch(event.type){
            case "pointerdown":
                __privateSet(this, _pointerDownTimeStamp, event.timeStamp);
                break;
            case "pointermove":
                __privateMethod(this, _handlePointerMove, handlePointerMove_fn).call(this, event);
                break;
            case "pointerup":
                __privateMethod(this, _handlePointerUp, handlePointerUp_fn).call(this, event);
                break;
            case "mouseleave":
                __privateMethod(this, _setInactive, setInactive_fn).call(this);
                break;
            case "mouseup":
                this.removeAttribute(Attributes.KEYBOARD_CONTROL);
                break;
            case "keyup":
                __privateMethod(this, _scheduleInactive, scheduleInactive_fn).call(this);
                this.setAttribute(Attributes.KEYBOARD_CONTROL, "");
                break;
        }
    }
    set autohide(seconds) {
        const parsedSeconds = Number(seconds);
        __privateSet(this, _autohide, isNaN(parsedSeconds) ? 0 : parsedSeconds);
    }
    get autohide() {
        return (__privateGet(this, _autohide) === void 0 ? 2 : __privateGet(this, _autohide)).toString();
    }
    get breakpoints() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, Attributes.BREAKPOINTS);
    }
    set breakpoints(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, Attributes.BREAKPOINTS, value);
    }
    get audio() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.AUDIO);
    }
    set audio(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.AUDIO, value);
    }
    get gesturesDisabled() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.GESTURES_DISABLED);
    }
    set gesturesDisabled(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.GESTURES_DISABLED, value);
    }
    get keyboardControl() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.KEYBOARD_CONTROL);
    }
    set keyboardControl(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.KEYBOARD_CONTROL, value);
    }
    get noAutohide() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.NO_AUTOHIDE);
    }
    set noAutohide(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.NO_AUTOHIDE, value);
    }
    get autohideOverControls() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.AUTOHIDE_OVER_CONTROLS);
    }
    set autohideOverControls(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.AUTOHIDE_OVER_CONTROLS, value);
    }
    get userInteractive() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.USER_INACTIVE);
    }
    set userInteractive(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.USER_INACTIVE, value);
    }
    constructor(){
        super();
        __privateAdd(this, _handleMutation);
        __privateAdd(this, _handlePointerMove);
        __privateAdd(this, _handlePointerUp);
        __privateAdd(this, _setInactive);
        __privateAdd(this, _setActive);
        __privateAdd(this, _scheduleInactive);
        __privateAdd(this, _pointerDownTimeStamp, 0);
        __privateAdd(this, _currentMedia, null);
        __privateAdd(this, _inactiveTimeout, null);
        __privateAdd(this, _autohide, void 0);
        this.breakpointsComputed = false;
        __privateAdd(this, _mutationObserver, new MutationObserver(__privateMethod(this, _handleMutation, handleMutation_fn).bind(this)));
        __privateAdd(this, _isResizePending, false);
        __privateAdd(this, _handleResize, (entry)=>{
            if (__privateGet(this, _isResizePending)) return;
            setTimeout(()=>{
                resizeCallback(entry);
                __privateSet(this, _isResizePending, false);
            }, 0);
            __privateSet(this, _isResizePending, true);
        });
        if (!this.shadowRoot) {
            this.attachShadow(this.constructor.shadowRootOptions);
            const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
            const html = this.constructor.getTemplateHTML(attrs);
            this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(html) : this.shadowRoot.innerHTML = html;
        }
        const chainedSlot = this.querySelector(":scope > slot[slot=media]");
        if (chainedSlot) {
            chainedSlot.addEventListener("slotchange", ()=>{
                const slotEls = chainedSlot.assignedElements({
                    flatten: true
                });
                if (!slotEls.length) {
                    if (__privateGet(this, _currentMedia)) {
                        this.mediaUnsetCallback(__privateGet(this, _currentMedia));
                    }
                    return;
                }
                this.handleMediaUpdated(this.media);
            });
        }
    }
}
_pointerDownTimeStamp = new WeakMap();
_currentMedia = new WeakMap();
_inactiveTimeout = new WeakMap();
_autohide = new WeakMap();
_mutationObserver = new WeakMap();
_handleMutation = new WeakSet();
handleMutation_fn = function(mutationsList) {
    const media = this.media;
    for (const mutation of mutationsList){
        if (mutation.type !== "childList") continue;
        const removedNodes = mutation.removedNodes;
        for (const node of removedNodes){
            if (node.slot != "media" || mutation.target != this) continue;
            let previousSibling = mutation.previousSibling && mutation.previousSibling.previousElementSibling;
            if (!previousSibling || !media) {
                this.mediaUnsetCallback(node);
            } else {
                let wasFirst = previousSibling.slot !== "media";
                while((previousSibling = previousSibling.previousSibling) !== null){
                    if (previousSibling.slot == "media") wasFirst = false;
                }
                if (wasFirst) this.mediaUnsetCallback(node);
            }
        }
        if (media) {
            for (const node of mutation.addedNodes){
                if (node === media) this.handleMediaUpdated(media);
            }
        }
    }
};
_isResizePending = new WeakMap();
_handleResize = new WeakMap();
_handlePointerMove = new WeakSet();
handlePointerMove_fn = function(event) {
    if (event.pointerType !== "mouse") {
        const MAX_TAP_DURATION = 250;
        if (event.timeStamp - __privateGet(this, _pointerDownTimeStamp) < MAX_TAP_DURATION) return;
    }
    __privateMethod(this, _setActive, setActive_fn).call(this);
    clearTimeout(__privateGet(this, _inactiveTimeout));
    const autohideOverControls = this.hasAttribute(Attributes.AUTOHIDE_OVER_CONTROLS);
    if ([
        this,
        this.media
    ].includes(event.target) || autohideOverControls) {
        __privateMethod(this, _scheduleInactive, scheduleInactive_fn).call(this);
    }
};
_handlePointerUp = new WeakSet();
handlePointerUp_fn = function(event) {
    if (event.pointerType === "touch") {
        const controlsVisible = !this.hasAttribute(Attributes.USER_INACTIVE);
        if ([
            this,
            this.media
        ].includes(event.target) && controlsVisible) {
            __privateMethod(this, _setInactive, setInactive_fn).call(this);
        } else {
            __privateMethod(this, _scheduleInactive, scheduleInactive_fn).call(this);
        }
    } else if (event.composedPath().some((el)=>[
            "media-play-button",
            "media-fullscreen-button"
        ].includes(el == null ? void 0 : el.localName))) {
        __privateMethod(this, _scheduleInactive, scheduleInactive_fn).call(this);
    }
};
_setInactive = new WeakSet();
setInactive_fn = function() {
    if (__privateGet(this, _autohide) < 0) return;
    if (this.hasAttribute(Attributes.USER_INACTIVE)) return;
    this.setAttribute(Attributes.USER_INACTIVE, "");
    const evt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateChangeEvents"].USER_INACTIVE_CHANGE, {
        composed: true,
        bubbles: true,
        detail: true
    });
    this.dispatchEvent(evt);
};
_setActive = new WeakSet();
setActive_fn = function() {
    if (!this.hasAttribute(Attributes.USER_INACTIVE)) return;
    this.removeAttribute(Attributes.USER_INACTIVE);
    const evt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateChangeEvents"].USER_INACTIVE_CHANGE, {
        composed: true,
        bubbles: true,
        detail: false
    });
    this.dispatchEvent(evt);
};
_scheduleInactive = new WeakSet();
scheduleInactive_fn = function() {
    __privateMethod(this, _setActive, setActive_fn).call(this);
    clearTimeout(__privateGet(this, _inactiveTimeout));
    const autohide = parseInt(this.autohide);
    if (autohide < 0) return;
    __privateSet(this, _inactiveTimeout, setTimeout(()=>{
        __privateMethod(this, _setInactive, setInactive_fn).call(this);
    }, autohide * 1e3));
};
MediaContainer.shadowRootOptions = {
    mode: "open"
};
MediaContainer.getTemplateHTML = getTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-container")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-container", MediaContainer);
}
var media_container_default = MediaContainer;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/attribute-token-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttributeTokenList",
    ()=>AttributeTokenList
]);
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _el, _attr, _defaultSet, _tokenSet, _tokens, tokens_get;
class AttributeTokenList {
    [Symbol.iterator]() {
        return __privateGet(this, _tokens, tokens_get).values();
    }
    get length() {
        return __privateGet(this, _tokens, tokens_get).size;
    }
    get value() {
        var _a;
        return (_a = [
            ...__privateGet(this, _tokens, tokens_get)
        ].join(" ")) != null ? _a : "";
    }
    set value(val) {
        var _a;
        if (val === this.value) return;
        __privateSet(this, _tokenSet, /* @__PURE__ */ new Set());
        this.add(...(_a = val == null ? void 0 : val.split(" ")) != null ? _a : []);
    }
    toString() {
        return this.value;
    }
    item(index) {
        return [
            ...__privateGet(this, _tokens, tokens_get)
        ][index];
    }
    values() {
        return __privateGet(this, _tokens, tokens_get).values();
    }
    forEach(callback, thisArg) {
        __privateGet(this, _tokens, tokens_get).forEach(callback, thisArg);
    }
    add() {
        for(var _len = arguments.length, tokens = new Array(_len), _key = 0; _key < _len; _key++){
            tokens[_key] = arguments[_key];
        }
        var _a, _b;
        tokens.forEach((t)=>__privateGet(this, _tokenSet).add(t));
        if (this.value === "" && !((_a = __privateGet(this, _el)) == null ? void 0 : _a.hasAttribute("".concat(__privateGet(this, _attr))))) {
            return;
        }
        (_b = __privateGet(this, _el)) == null ? void 0 : _b.setAttribute("".concat(__privateGet(this, _attr)), "".concat(this.value));
    }
    remove() {
        for(var _len = arguments.length, tokens = new Array(_len), _key = 0; _key < _len; _key++){
            tokens[_key] = arguments[_key];
        }
        var _a;
        tokens.forEach((t)=>__privateGet(this, _tokenSet).delete(t));
        (_a = __privateGet(this, _el)) == null ? void 0 : _a.setAttribute("".concat(__privateGet(this, _attr)), "".concat(this.value));
    }
    contains(token) {
        return __privateGet(this, _tokens, tokens_get).has(token);
    }
    toggle(token, force) {
        if (typeof force !== "undefined") {
            if (force) {
                this.add(token);
                return true;
            } else {
                this.remove(token);
                return false;
            }
        }
        if (this.contains(token)) {
            this.remove(token);
            return false;
        }
        this.add(token);
        return true;
    }
    replace(oldToken, newToken) {
        this.remove(oldToken);
        this.add(newToken);
        return oldToken === newToken;
    }
    constructor(el, attr, { defaultValue } = {
        defaultValue: void 0
    }){
        __privateAdd(this, _tokens);
        __privateAdd(this, _el, void 0);
        __privateAdd(this, _attr, void 0);
        __privateAdd(this, _defaultSet, void 0);
        __privateAdd(this, _tokenSet, /* @__PURE__ */ new Set());
        __privateSet(this, _el, el);
        __privateSet(this, _attr, attr);
        __privateSet(this, _defaultSet, new Set(defaultValue));
    }
}
_el = new WeakMap();
_attr = new WeakMap();
_defaultSet = new WeakMap();
_tokenSet = new WeakMap();
_tokens = new WeakSet();
tokens_get = function() {
    return __privateGet(this, _tokenSet).size ? __privateGet(this, _tokenSet) : __privateGet(this, _defaultSet);
};
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/captions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areSubsOn",
    ()=>areSubsOn,
    "formatTextTrackObj",
    ()=>formatTextTrackObj,
    "getTextTracksList",
    ()=>getTextTracksList,
    "isMatchingPropOf",
    ()=>isMatchingPropOf,
    "parseTextTrackStr",
    ()=>parseTextTrackStr,
    "parseTextTracksStr",
    ()=>parseTextTracksStr,
    "parseTracks",
    ()=>parseTracks,
    "splitTextTracksStr",
    ()=>splitTextTracksStr,
    "stringifyTextTrackList",
    ()=>stringifyTextTrackList,
    "textTrackObjAsPred",
    ()=>textTrackObjAsPred,
    "updateTracksModeTo",
    ()=>updateTracksModeTo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
;
const splitTextTracksStr = function() {
    let textTracksStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return textTracksStr.split(/\s+/);
};
const parseTextTrackStr = function() {
    let textTrackStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    const [kind, language, encodedLabel] = textTrackStr.split(":");
    const label = encodedLabel ? decodeURIComponent(encodedLabel) : void 0;
    return {
        kind: kind === "cc" ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackKinds"].CAPTIONS : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackKinds"].SUBTITLES,
        language,
        label
    };
};
const parseTextTracksStr = function() {
    let textTracksStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", textTrackLikeObj = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return splitTextTracksStr(textTracksStr).map((textTrackStr)=>{
        const textTrackObj = parseTextTrackStr(textTrackStr);
        return {
            ...textTrackLikeObj,
            ...textTrackObj
        };
    });
};
const parseTracks = (trackOrTracks)=>{
    if (!trackOrTracks) return [];
    if (Array.isArray(trackOrTracks)) {
        return trackOrTracks.map((trackObjOrStr)=>{
            if (typeof trackObjOrStr === "string") {
                return parseTextTrackStr(trackObjOrStr);
            }
            return trackObjOrStr;
        });
    }
    if (typeof trackOrTracks === "string") {
        return parseTextTracksStr(trackOrTracks);
    }
    return [
        trackOrTracks
    ];
};
const formatTextTrackObj = function() {
    let { kind, label, language } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        kind: "subtitles"
    };
    if (!label) return language;
    return "".concat(kind === "captions" ? "cc" : "sb", ":").concat(language, ":").concat(encodeURIComponent(label));
};
const stringifyTextTrackList = function() {
    let textTracks = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return Array.prototype.map.call(textTracks, formatTextTrackObj).join(" ");
};
const isMatchingPropOf = (key, value)=>(obj)=>obj[key] === value;
const textTrackObjAsPred = (filterObj)=>{
    const preds = Object.entries(filterObj).map((param)=>{
        let [key, value] = param;
        return isMatchingPropOf(key, value);
    });
    return (textTrack)=>preds.every((pred)=>pred(textTrack));
};
const updateTracksModeTo = function(mode) {
    let tracks = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], tracksToUpdate = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    const preds = parseTracks(tracksToUpdate).map(textTrackObjAsPred);
    const isTrackToUpdate = (textTrack)=>{
        return preds.some((pred)=>pred(textTrack));
    };
    Array.from(tracks).filter(isTrackToUpdate).forEach((textTrack)=>{
        textTrack.mode = mode;
    });
};
const getTextTracksList = function(media) {
    let filterPredOrObj = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ()=>true;
    if (!(media == null ? void 0 : media.textTracks)) return [];
    const filterPred = typeof filterPredOrObj === "function" ? filterPredOrObj : textTrackObjAsPred(filterPredOrObj);
    return Array.from(media.textTracks).filter(filterPred);
};
const areSubsOn = (el)=>{
    var _a;
    const showingSubtitles = !!((_a = el.mediaSubtitlesShowing) == null ? void 0 : _a.length) || el.hasAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING);
    return showingSubtitles;
};
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/fullscreen-api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enterFullscreen",
    ()=>enterFullscreen,
    "exitFullscreen",
    ()=>exitFullscreen,
    "getFullscreenElement",
    ()=>getFullscreenElement,
    "isFullscreen",
    ()=>isFullscreen,
    "isFullscreenEnabled",
    ()=>isFullscreenEnabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
;
;
;
const enterFullscreen = (stateOwners)=>{
    var _a;
    const { media, fullscreenElement } = stateOwners;
    try {
        const enterFullscreenKey = fullscreenElement && "requestFullscreen" in fullscreenElement ? "requestFullscreen" : fullscreenElement && "webkitRequestFullScreen" in fullscreenElement ? "webkitRequestFullScreen" : void 0;
        if (enterFullscreenKey) {
            const maybePromise = (_a = fullscreenElement[enterFullscreenKey]) == null ? void 0 : _a.call(fullscreenElement);
            if (maybePromise instanceof Promise) {
                return maybePromise.catch(()=>{});
            }
        } else if (media == null ? void 0 : media.webkitEnterFullscreen) {
            media.webkitEnterFullscreen();
        } else if (media == null ? void 0 : media.requestFullscreen) {
            media.requestFullscreen();
        }
    } catch (e) {
        console.error(e);
    }
};
const exitFullscreenKey = "exitFullscreen" in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"] ? "exitFullscreen" : "webkitExitFullscreen" in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"] ? "webkitExitFullscreen" : "webkitCancelFullScreen" in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"] ? "webkitCancelFullScreen" : void 0;
const exitFullscreen = (stateOwners)=>{
    var _a;
    const { documentElement } = stateOwners;
    if (exitFullscreenKey) {
        const maybePromise = (_a = documentElement == null ? void 0 : documentElement[exitFullscreenKey]) == null ? void 0 : _a.call(documentElement);
        if (maybePromise instanceof Promise) {
            return maybePromise.catch(()=>{});
        }
    }
};
const fullscreenElementKey = "fullscreenElement" in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"] ? "fullscreenElement" : "webkitFullscreenElement" in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"] ? "webkitFullscreenElement" : void 0;
const getFullscreenElement = (stateOwners)=>{
    const { documentElement, media } = stateOwners;
    const docFullscreenElement = documentElement == null ? void 0 : documentElement[fullscreenElementKey];
    if (!docFullscreenElement && "webkitDisplayingFullscreen" in media && "webkitPresentationMode" in media && media.webkitDisplayingFullscreen && media.webkitPresentationMode === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebkitPresentationModes"].FULLSCREEN) {
        return media;
    }
    return docFullscreenElement;
};
const isFullscreen = (stateOwners)=>{
    var _a;
    const { media, documentElement, fullscreenElement = media } = stateOwners;
    if (!media || !documentElement) return false;
    const currentFullscreenElement = getFullscreenElement(stateOwners);
    if (!currentFullscreenElement) return false;
    if (currentFullscreenElement === fullscreenElement || currentFullscreenElement === media) {
        return true;
    }
    if (currentFullscreenElement.localName.includes("-")) {
        let currentRoot = currentFullscreenElement.shadowRoot;
        if (!(fullscreenElementKey in currentRoot)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsComposedNode"])(currentFullscreenElement, /** @TODO clean up type assumptions (e.g. Node) (CJP) */ // @ts-ignore
            fullscreenElement);
        }
        while(currentRoot == null ? void 0 : currentRoot[fullscreenElementKey]){
            if (currentRoot[fullscreenElementKey] === fullscreenElement) return true;
            currentRoot = (_a = currentRoot[fullscreenElementKey]) == null ? void 0 : _a.shadowRoot;
        }
    }
    return false;
};
const fullscreenEnabledKey = "fullscreenEnabled" in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"] ? "fullscreenEnabled" : "webkitFullscreenEnabled" in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"] ? "webkitFullscreenEnabled" : void 0;
const isFullscreenEnabled = (stateOwners)=>{
    const { documentElement, media } = stateOwners;
    return !!(documentElement == null ? void 0 : documentElement[fullscreenEnabledKey]) || media && "webkitSupportsFullscreen" in media;
};
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/platform-tests.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "airplaySupported",
    ()=>airplaySupported,
    "castSupported",
    ()=>castSupported,
    "fullscreenSupported",
    ()=>fullscreenSupported,
    "getTestMediaEl",
    ()=>getTestMediaEl,
    "hasFullscreenSupport",
    ()=>hasFullscreenSupport,
    "hasPipSupport",
    ()=>hasPipSupport,
    "hasVolumeSupportAsync",
    ()=>hasVolumeSupportAsync,
    "pipSupported",
    ()=>pipSupported
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$fullscreen$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/fullscreen-api.js [app-client] (ecmascript)");
;
;
;
let testMediaEl;
const getTestMediaEl = ()=>{
    var _a, _b;
    if (testMediaEl) return testMediaEl;
    testMediaEl = (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"]) == null ? void 0 : _a.createElement) == null ? void 0 : _b.call(_a, "video");
    return testMediaEl;
};
const hasVolumeSupportAsync = async function() {
    let mediaEl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getTestMediaEl();
    if (!mediaEl) return false;
    const prevVolume = mediaEl.volume;
    mediaEl.volume = prevVolume / 2 + 0.1;
    const abortController = new AbortController();
    const volumeSupported = await Promise.race([
        dispatchedVolumeChange(mediaEl, abortController.signal),
        volumeChanged(mediaEl, prevVolume)
    ]);
    abortController.abort();
    return volumeSupported;
};
const dispatchedVolumeChange = (mediaEl, signal)=>{
    return new Promise((resolve)=>{
        mediaEl.addEventListener("volumechange", ()=>resolve(true), {
            signal
        });
    });
};
const volumeChanged = async (mediaEl, prevVolume)=>{
    for(let i = 0; i < 10; i++){
        if (mediaEl.volume === prevVolume) return false;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delay"])(10);
    }
    return mediaEl.volume !== prevVolume;
};
const isSafari = /.*Version\/.*Safari\/.*/.test(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].navigator.userAgent);
const hasPipSupport = function() {
    let mediaEl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getTestMediaEl();
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].matchMedia("(display-mode: standalone)").matches && isSafari) return false;
    return typeof (mediaEl == null ? void 0 : mediaEl.requestPictureInPicture) === "function";
};
const hasFullscreenSupport = function() {
    let mediaEl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getTestMediaEl();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$fullscreen$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFullscreenEnabled"])({
        documentElement: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"],
        media: mediaEl
    });
};
const fullscreenSupported = hasFullscreenSupport();
const pipSupported = hasPipSupport();
const airplaySupported = !!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].WebKitPlaybackTargetAvailabilityEvent;
const castSupported = !!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].chrome;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-store/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areArraysEq",
    ()=>areArraysEq,
    "areValuesEq",
    ()=>areValuesEq,
    "getShowingSubtitleTracks",
    ()=>getShowingSubtitleTracks,
    "getSubtitleTracks",
    ()=>getSubtitleTracks,
    "toggleSubtitleTracks",
    ()=>toggleSubtitleTracks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/captions.js [app-client] (ecmascript)");
;
;
const getSubtitleTracks = (stateOwners)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextTracksList"])(stateOwners.media, (textTrack)=>{
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackKinds"].SUBTITLES,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackKinds"].CAPTIONS
        ].includes(textTrack.kind);
    }).sort((a, b)=>a.kind >= b.kind ? 1 : -1);
};
const getShowingSubtitleTracks = (stateOwners)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextTracksList"])(stateOwners.media, (textTrack)=>{
        return textTrack.mode === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackModes"].SHOWING && [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackKinds"].SUBTITLES,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackKinds"].CAPTIONS
        ].includes(textTrack.kind);
    });
};
const toggleSubtitleTracks = (stateOwners, force)=>{
    const tracks = getSubtitleTracks(stateOwners);
    const showingSubitleTracks = getShowingSubtitleTracks(stateOwners);
    const subtitlesShowing = !!showingSubitleTracks.length;
    if (!tracks.length) return;
    if (force === false || subtitlesShowing && force !== true) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTracksModeTo"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackModes"].DISABLED, tracks, showingSubitleTracks);
    } else if (force === true || !subtitlesShowing && force !== false) {
        let subTrack = tracks[0];
        const { options } = stateOwners;
        if (!(options == null ? void 0 : options.noSubtitlesLangPref)) {
            const subtitlesPref = globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang");
            const userLangPrefs = subtitlesPref ? [
                subtitlesPref,
                ...globalThis.navigator.languages
            ] : globalThis.navigator.languages;
            const preferredAvailableSubs = tracks.filter((textTrack)=>{
                return userLangPrefs.some((lang)=>textTrack.language.toLowerCase().startsWith(lang.split("-")[0]));
            }).sort((textTrackA, textTrackB)=>{
                const idxA = userLangPrefs.findIndex((lang)=>textTrackA.language.toLowerCase().startsWith(lang.split("-")[0]));
                const idxB = userLangPrefs.findIndex((lang)=>textTrackB.language.toLowerCase().startsWith(lang.split("-")[0]));
                return idxA - idxB;
            });
            if (preferredAvailableSubs[0]) {
                subTrack = preferredAvailableSubs[0];
            }
        }
        const { language, label, kind } = subTrack;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTracksModeTo"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackModes"].DISABLED, tracks, showingSubitleTracks);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTracksModeTo"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackModes"].SHOWING, tracks, [
            {
                language,
                label,
                kind
            }
        ]);
    }
};
const areValuesEq = (x, y)=>{
    if (x === y) return true;
    if (x == null || y == null) return false;
    if (typeof x !== typeof y) return false;
    if (typeof x === "number" && Number.isNaN(x) && Number.isNaN(y)) return true;
    if (typeof x !== "object") return false;
    if (Array.isArray(x)) return areArraysEq(x, y);
    return Object.entries(x).every(// NOTE: Checking key in y to disambiguate between between missing keys and keys whose value are undefined (CJP)
    (param)=>{
        let [key, value] = param;
        return key in y && areValuesEq(value, y[key]);
    });
};
const areArraysEq = (xs, ys)=>{
    const xIsArray = Array.isArray(xs);
    const yIsArray = Array.isArray(ys);
    if (xIsArray !== yIsArray) return false;
    if (!(xIsArray || yIsArray)) return true;
    if (xs.length !== ys.length) return false;
    return xs.every((x, i)=>areValuesEq(x, ys[i]));
};
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-store/state-mediator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prepareStateOwners",
    ()=>prepareStateOwners,
    "stateMediator",
    ()=>stateMediator,
    "volumeSupportPromise",
    ()=>volumeSupportPromise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$fullscreen$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/fullscreen-api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$platform$2d$tests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/platform-tests.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-store/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/captions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const StreamTypeValues = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamTypes"]);
let volumeSupported;
const volumeSupportPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$platform$2d$tests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasVolumeSupportAsync"])().then((supported)=>{
    volumeSupported = supported;
    return volumeSupported;
});
const prepareStateOwners = async function() {
    for(var _len = arguments.length, stateOwners = new Array(_len), _key = 0; _key < _len; _key++){
        stateOwners[_key] = arguments[_key];
    }
    await Promise.all(stateOwners.filter((x)=>x).map(async (stateOwner)=>{
        if (!("localName" in stateOwner && stateOwner instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement)) {
            return;
        }
        const name = stateOwner.localName;
        if (!name.includes("-")) return;
        const classDef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get(name);
        if (classDef && stateOwner instanceof classDef) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.whenDefined(name);
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.upgrade(stateOwner);
    }));
};
const domParser = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].DOMParser();
const parseHtmlToText = (text)=>text ? domParser.parseFromString(text, "text/html").body.textContent || text : text;
const stateMediator = {
    mediaError: {
        get (stateOwners, event) {
            const { media } = stateOwners;
            if ((event == null ? void 0 : event.type) === "playing") return;
            return media == null ? void 0 : media.error;
        },
        mediaEvents: [
            "emptied",
            "error",
            "playing"
        ]
    },
    mediaErrorCode: {
        get (stateOwners, event) {
            var _a;
            const { media } = stateOwners;
            if ((event == null ? void 0 : event.type) === "playing") return;
            return (_a = media == null ? void 0 : media.error) == null ? void 0 : _a.code;
        },
        mediaEvents: [
            "emptied",
            "error",
            "playing"
        ]
    },
    mediaErrorMessage: {
        get (stateOwners, event) {
            var _a, _b;
            const { media } = stateOwners;
            if ((event == null ? void 0 : event.type) === "playing") return;
            return (_b = (_a = media == null ? void 0 : media.error) == null ? void 0 : _a.message) != null ? _b : "";
        },
        mediaEvents: [
            "emptied",
            "error",
            "playing"
        ]
    },
    mediaWidth: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            return (_a = media == null ? void 0 : media.videoWidth) != null ? _a : 0;
        },
        mediaEvents: [
            "resize"
        ]
    },
    mediaHeight: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            return (_a = media == null ? void 0 : media.videoHeight) != null ? _a : 0;
        },
        mediaEvents: [
            "resize"
        ]
    },
    mediaPaused: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            return (_a = media == null ? void 0 : media.paused) != null ? _a : true;
        },
        set (value, stateOwners) {
            var _a;
            const { media } = stateOwners;
            if (!media) return;
            if (value) {
                media.pause();
            } else {
                (_a = media.play()) == null ? void 0 : _a.catch(()=>{});
            }
        },
        mediaEvents: [
            "play",
            "playing",
            "pause",
            "emptied"
        ]
    },
    mediaHasPlayed: {
        // We want to let the user know that the media started playing at any point (`media-has-played`).
        // Since these propagators are all called when boostrapping state, let's verify this is
        // a real playing event by checking that 1) there's media and 2) it isn't currently paused.
        get (stateOwners, event) {
            const { media } = stateOwners;
            if (!media) return false;
            if (!event) return !media.paused;
            return event.type === "playing";
        },
        mediaEvents: [
            "playing",
            "emptied"
        ]
    },
    mediaEnded: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            return (_a = media == null ? void 0 : media.ended) != null ? _a : false;
        },
        mediaEvents: [
            "seeked",
            "ended",
            "emptied"
        ]
    },
    mediaPlaybackRate: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            return (_a = media == null ? void 0 : media.playbackRate) != null ? _a : 1;
        },
        set (value, stateOwners) {
            const { media } = stateOwners;
            if (!media) return;
            if (!Number.isFinite(+value)) return;
            media.playbackRate = +value;
        },
        mediaEvents: [
            "ratechange",
            "loadstart"
        ]
    },
    mediaMuted: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            return (_a = media == null ? void 0 : media.muted) != null ? _a : false;
        },
        set (value, stateOwners) {
            const { media } = stateOwners;
            if (!media) return;
            try {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].localStorage.setItem("media-chrome-pref-muted", value ? "true" : "false");
            } catch (e) {
                console.debug("Error setting muted pref", e);
            }
            media.muted = value;
        },
        mediaEvents: [
            "volumechange"
        ],
        stateOwnersUpdateHandlers: [
            (handler, stateOwners)=>{
                const { options: { noMutedPref } } = stateOwners;
                const { media } = stateOwners;
                if (!media || media.muted || noMutedPref) return;
                try {
                    const mutedPref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].localStorage.getItem("media-chrome-pref-muted") === "true";
                    stateMediator.mediaMuted.set(mutedPref, stateOwners);
                    handler(mutedPref);
                } catch (e) {
                    console.debug("Error getting muted pref", e);
                }
            }
        ]
    },
    mediaVolume: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            return (_a = media == null ? void 0 : media.volume) != null ? _a : 1;
        },
        set (value, stateOwners) {
            const { media } = stateOwners;
            if (!media) return;
            try {
                if (value == null) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].localStorage.removeItem("media-chrome-pref-volume");
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].localStorage.setItem("media-chrome-pref-volume", value.toString());
                }
            } catch (e) {
                console.debug("Error setting volume pref", e);
            }
            if (!Number.isFinite(+value)) return;
            media.volume = +value;
        },
        mediaEvents: [
            "volumechange"
        ],
        stateOwnersUpdateHandlers: [
            (handler, stateOwners)=>{
                const { options: { noVolumePref } } = stateOwners;
                if (noVolumePref) return;
                try {
                    const { media } = stateOwners;
                    if (!media) return;
                    const volumePref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].localStorage.getItem("media-chrome-pref-volume");
                    if (volumePref == null) return;
                    stateMediator.mediaVolume.set(+volumePref, stateOwners);
                    handler(+volumePref);
                } catch (e) {
                    console.debug("Error getting volume pref", e);
                }
            }
        ]
    },
    // NOTE: Keeping this roughly equivalent to prior impl to reduce number of changes,
    // however we may want to model "derived" state differently from "primary" state
    // (in this case, derived === mediaVolumeLevel, primary === mediaMuted, mediaVolume) (CJP)
    mediaVolumeLevel: {
        get (stateOwners) {
            const { media } = stateOwners;
            if (typeof (media == null ? void 0 : media.volume) == "undefined") return "high";
            if (media.muted || media.volume === 0) return "off";
            if (media.volume < 0.5) return "low";
            if (media.volume < 0.75) return "medium";
            return "high";
        },
        mediaEvents: [
            "volumechange"
        ]
    },
    mediaCurrentTime: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            return (_a = media == null ? void 0 : media.currentTime) != null ? _a : 0;
        },
        set (value, stateOwners) {
            const { media } = stateOwners;
            if (!media || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNumber"])(value)) return;
            media.currentTime = value;
        },
        mediaEvents: [
            "timeupdate",
            "loadedmetadata"
        ]
    },
    mediaDuration: {
        get (stateOwners) {
            const { media, options: { defaultDuration } = {} } = stateOwners;
            if (defaultDuration && (!media || !media.duration || Number.isNaN(media.duration) || !Number.isFinite(media.duration))) {
                return defaultDuration;
            }
            return Number.isFinite(media == null ? void 0 : media.duration) ? media.duration : Number.NaN;
        },
        mediaEvents: [
            "durationchange",
            "loadedmetadata",
            "emptied"
        ]
    },
    mediaLoading: {
        get (stateOwners) {
            const { media } = stateOwners;
            return (media == null ? void 0 : media.readyState) < 3;
        },
        mediaEvents: [
            "waiting",
            "playing",
            "emptied"
        ]
    },
    mediaSeekable: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            if (!((_a = media == null ? void 0 : media.seekable) == null ? void 0 : _a.length)) return void 0;
            const start = media.seekable.start(0);
            const end = media.seekable.end(media.seekable.length - 1);
            if (!start && !end) return void 0;
            return [
                Number(start.toFixed(3)),
                Number(end.toFixed(3))
            ];
        },
        mediaEvents: [
            "loadedmetadata",
            "emptied",
            "progress",
            "seekablechange"
        ]
    },
    mediaBuffered: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            const timeRanges = (_a = media == null ? void 0 : media.buffered) != null ? _a : [];
            return Array.from(timeRanges).map((_, i)=>[
                    Number(timeRanges.start(i).toFixed(3)),
                    Number(timeRanges.end(i).toFixed(3))
                ]);
        },
        mediaEvents: [
            "progress",
            "emptied"
        ]
    },
    mediaStreamType: {
        get (stateOwners) {
            const { media, options: { defaultStreamType } = {} } = stateOwners;
            const usedDefaultStreamType = [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamTypes"].LIVE,
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamTypes"].ON_DEMAND
            ].includes(defaultStreamType) ? defaultStreamType : void 0;
            if (!media) return usedDefaultStreamType;
            const { streamType } = media;
            if (StreamTypeValues.includes(streamType)) {
                if (streamType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamTypes"].UNKNOWN) {
                    return usedDefaultStreamType;
                }
                return streamType;
            }
            const duration = media.duration;
            if (duration === Infinity) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamTypes"].LIVE;
            } else if (Number.isFinite(duration)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamTypes"].ON_DEMAND;
            }
            return usedDefaultStreamType;
        },
        mediaEvents: [
            "emptied",
            "durationchange",
            "loadedmetadata",
            "streamtypechange"
        ]
    },
    mediaTargetLiveWindow: {
        get (stateOwners) {
            const { media } = stateOwners;
            if (!media) return Number.NaN;
            const { targetLiveWindow } = media;
            const streamType = stateMediator.mediaStreamType.get(stateOwners);
            if ((targetLiveWindow == null || Number.isNaN(targetLiveWindow)) && streamType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamTypes"].LIVE) {
                return 0;
            }
            return targetLiveWindow;
        },
        mediaEvents: [
            "emptied",
            "durationchange",
            "loadedmetadata",
            "streamtypechange",
            "targetlivewindowchange"
        ]
    },
    mediaTimeIsLive: {
        get (stateOwners) {
            const { media, // Default to 10 seconds
            options: { liveEdgeOffset = 10 } = {} } = stateOwners;
            if (!media) return false;
            if (typeof media.liveEdgeStart === "number") {
                if (Number.isNaN(media.liveEdgeStart)) return false;
                return media.currentTime >= media.liveEdgeStart;
            }
            const live = stateMediator.mediaStreamType.get(stateOwners) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamTypes"].LIVE;
            if (!live) return false;
            const seekable = media.seekable;
            if (!seekable) return true;
            if (!seekable.length) return false;
            const liveEdgeStart = seekable.end(seekable.length - 1) - liveEdgeOffset;
            return media.currentTime >= liveEdgeStart;
        },
        mediaEvents: [
            "playing",
            "timeupdate",
            "progress",
            "waiting",
            "emptied"
        ]
    },
    // Text Tracks modeling
    mediaSubtitlesList: {
        get (stateOwners) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubtitleTracks"])(stateOwners).map((param)=>{
                let { kind, label, language } = param;
                return {
                    kind,
                    label,
                    language
                };
            });
        },
        mediaEvents: [
            "loadstart"
        ],
        textTracksEvents: [
            "addtrack",
            "removetrack"
        ]
    },
    mediaSubtitlesShowing: {
        get (stateOwners) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShowingSubtitleTracks"])(stateOwners).map((param)=>{
                let { kind, label, language } = param;
                return {
                    kind,
                    label,
                    language
                };
            });
        },
        mediaEvents: [
            "loadstart"
        ],
        textTracksEvents: [
            "addtrack",
            "removetrack",
            "change"
        ],
        stateOwnersUpdateHandlers: [
            (_handler, stateOwners)=>{
                var _a, _b;
                const { media, options } = stateOwners;
                if (!media) return;
                const updateDefaultSubtitlesCallback = (event)=>{
                    var _a2;
                    if (!options.defaultSubtitles) return;
                    const nonSubsEvent = event && ![
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackKinds"].CAPTIONS,
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackKinds"].SUBTITLES
                    ].includes(// @ts-ignore
                    (_a2 = event == null ? void 0 : event.track) == null ? void 0 : _a2.kind);
                    if (nonSubsEvent) return;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleSubtitleTracks"])(stateOwners, true);
                };
                media.addEventListener("loadstart", updateDefaultSubtitlesCallback);
                (_a = media.textTracks) == null ? void 0 : _a.addEventListener("addtrack", updateDefaultSubtitlesCallback);
                (_b = media.textTracks) == null ? void 0 : _b.addEventListener("removetrack", updateDefaultSubtitlesCallback);
                return ()=>{
                    var _a2, _b2;
                    media.removeEventListener("loadstart", updateDefaultSubtitlesCallback);
                    (_a2 = media.textTracks) == null ? void 0 : _a2.removeEventListener("addtrack", updateDefaultSubtitlesCallback);
                    (_b2 = media.textTracks) == null ? void 0 : _b2.removeEventListener("removetrack", updateDefaultSubtitlesCallback);
                };
            }
        ]
    },
    mediaChaptersCues: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            if (!media) return [];
            const [chaptersTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextTracksList"])(media, {
                kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackKinds"].CHAPTERS
            });
            return Array.from((_a = chaptersTrack == null ? void 0 : chaptersTrack.cues) != null ? _a : []).map((param)=>{
                let { text, startTime, endTime } = param;
                return {
                    text: parseHtmlToText(text),
                    startTime,
                    endTime
                };
            });
        },
        mediaEvents: [
            "loadstart",
            "loadedmetadata"
        ],
        textTracksEvents: [
            "addtrack",
            "removetrack",
            "change"
        ],
        stateOwnersUpdateHandlers: [
            (handler, stateOwners)=>{
                var _a;
                const { media } = stateOwners;
                if (!media) return;
                const chaptersTrack = media.querySelector('track[kind="chapters"][default][src]');
                const shadowChaptersTrack = (_a = media.shadowRoot) == null ? void 0 : _a.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');
                chaptersTrack == null ? void 0 : chaptersTrack.addEventListener("load", handler);
                shadowChaptersTrack == null ? void 0 : shadowChaptersTrack.addEventListener("load", handler);
                return ()=>{
                    chaptersTrack == null ? void 0 : chaptersTrack.removeEventListener("load", handler);
                    shadowChaptersTrack == null ? void 0 : shadowChaptersTrack.removeEventListener("load", handler);
                };
            }
        ]
    },
    // Modeling state tied to root node
    mediaIsPip: {
        get (stateOwners) {
            var _a, _b;
            const { media, documentElement } = stateOwners;
            if (!media || !documentElement) return false;
            if (!documentElement.pictureInPictureElement) return false;
            if (documentElement.pictureInPictureElement === media) return true;
            if (documentElement.pictureInPictureElement instanceof HTMLMediaElement) {
                if (!((_a = media.localName) == null ? void 0 : _a.includes("-"))) return false;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsComposedNode"])(media, documentElement.pictureInPictureElement);
            }
            if (documentElement.pictureInPictureElement.localName.includes("-")) {
                let currentRoot = documentElement.pictureInPictureElement.shadowRoot;
                while(currentRoot == null ? void 0 : currentRoot.pictureInPictureElement){
                    if (currentRoot.pictureInPictureElement === media) return true;
                    currentRoot = (_b = currentRoot.pictureInPictureElement) == null ? void 0 : _b.shadowRoot;
                }
            }
            return false;
        },
        set (value, stateOwners) {
            const { media } = stateOwners;
            if (!media) return;
            if (value) {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"].pictureInPictureEnabled) {
                    console.warn("MediaChrome: Picture-in-picture is not enabled");
                    return;
                }
                if (!media.requestPictureInPicture) {
                    console.warn("MediaChrome: The current media does not support picture-in-picture");
                    return;
                }
                const warnNotReady = ()=>{
                    console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.");
                };
                media.requestPictureInPicture().catch((err)=>{
                    if (err.code === 11) {
                        if (!media.src) {
                            console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");
                            return;
                        }
                        if (media.readyState === 0 && media.preload === "none") {
                            const cleanup = ()=>{
                                media.removeEventListener("loadedmetadata", tryPip);
                                media.preload = "none";
                            };
                            const tryPip = ()=>{
                                media.requestPictureInPicture().catch(warnNotReady);
                                cleanup();
                            };
                            media.addEventListener("loadedmetadata", tryPip);
                            media.preload = "metadata";
                            setTimeout(()=>{
                                if (media.readyState === 0) warnNotReady();
                                cleanup();
                            }, 1e3);
                        } else {
                            throw err;
                        }
                    } else {
                        throw err;
                    }
                });
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"].pictureInPictureElement) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"].exitPictureInPicture();
            }
        },
        mediaEvents: [
            "enterpictureinpicture",
            "leavepictureinpicture"
        ]
    },
    mediaRenditionList: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            return [
                ...(_a = media == null ? void 0 : media.videoRenditions) != null ? _a : []
            ].map((videoRendition)=>({
                    ...videoRendition
                }));
        },
        mediaEvents: [
            "emptied",
            "loadstart"
        ],
        videoRenditionsEvents: [
            "addrendition",
            "removerendition"
        ]
    },
    /** @TODO Model this as a derived value? (CJP) */ mediaRenditionSelected: {
        get (stateOwners) {
            var _a, _b, _c;
            const { media } = stateOwners;
            return (_c = (_b = media == null ? void 0 : media.videoRenditions) == null ? void 0 : _b[(_a = media.videoRenditions) == null ? void 0 : _a.selectedIndex]) == null ? void 0 : _c.id;
        },
        set (value, stateOwners) {
            const { media } = stateOwners;
            if (!(media == null ? void 0 : media.videoRenditions)) {
                console.warn("MediaController: Rendition selection not supported by this media.");
                return;
            }
            const renditionId = value;
            const index = Array.prototype.findIndex.call(media.videoRenditions, (r)=>r.id == renditionId);
            if (media.videoRenditions.selectedIndex != index) {
                media.videoRenditions.selectedIndex = index;
            }
        },
        mediaEvents: [
            "emptied"
        ],
        videoRenditionsEvents: [
            "addrendition",
            "removerendition",
            "change"
        ]
    },
    mediaAudioTrackList: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            return [
                ...(_a = media == null ? void 0 : media.audioTracks) != null ? _a : []
            ];
        },
        mediaEvents: [
            "emptied",
            "loadstart"
        ],
        audioTracksEvents: [
            "addtrack",
            "removetrack"
        ]
    },
    mediaAudioTrackEnabled: {
        get (stateOwners) {
            var _a, _b;
            const { media } = stateOwners;
            return (_b = [
                ...(_a = media == null ? void 0 : media.audioTracks) != null ? _a : []
            ].find((audioTrack)=>audioTrack.enabled)) == null ? void 0 : _b.id;
        },
        set (value, stateOwners) {
            const { media } = stateOwners;
            if (!(media == null ? void 0 : media.audioTracks)) {
                console.warn("MediaChrome: Audio track selection not supported by this media.");
                return;
            }
            const audioTrackId = value;
            for (const track of media.audioTracks){
                track.enabled = audioTrackId == track.id;
            }
        },
        mediaEvents: [
            "emptied"
        ],
        audioTracksEvents: [
            "addtrack",
            "removetrack",
            "change"
        ]
    },
    mediaIsFullscreen: {
        get (stateOwners) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$fullscreen$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFullscreen"])(stateOwners);
        },
        set (value, stateOwners) {
            if (!value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$fullscreen$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exitFullscreen"])(stateOwners);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$fullscreen$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enterFullscreen"])(stateOwners);
            }
        },
        // older Safari version may require webkit-specific events
        rootEvents: [
            "fullscreenchange",
            "webkitfullscreenchange"
        ],
        // iOS requires webkit-specific events on the video.
        mediaEvents: [
            "webkitbeginfullscreen",
            "webkitendfullscreen",
            "webkitpresentationmodechanged"
        ]
    },
    mediaIsCasting: {
        // Note this relies on a customized castable-video element.
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            if (!(media == null ? void 0 : media.remote) || ((_a = media.remote) == null ? void 0 : _a.state) === "disconnected") return false;
            return !!media.remote.state;
        },
        set (value, stateOwners) {
            var _a, _b;
            const { media } = stateOwners;
            if (!media) return;
            if (value && ((_a = media.remote) == null ? void 0 : _a.state) !== "disconnected") return;
            if (!value && ((_b = media.remote) == null ? void 0 : _b.state) !== "connected") return;
            if (typeof media.remote.prompt !== "function") {
                console.warn("MediaChrome: Casting is not supported in this environment");
                return;
            }
            media.remote.prompt().catch(()=>{});
        },
        remoteEvents: [
            "connect",
            "connecting",
            "disconnect"
        ]
    },
    // NOTE: Newly added state for tracking airplaying
    mediaIsAirplaying: {
        // NOTE: Cannot know if airplaying since Safari doesn't fully support HTMLMediaElement::remote yet (e.g. remote::state) (CJP)
        get () {
            return false;
        },
        set (_value, stateOwners) {
            const { media } = stateOwners;
            if (!media) return;
            if (!(media.webkitShowPlaybackTargetPicker && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].WebKitPlaybackTargetAvailabilityEvent)) {
                console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");
                return;
            }
            media.webkitShowPlaybackTargetPicker();
        },
        mediaEvents: [
            "webkitcurrentplaybacktargetiswirelesschanged"
        ]
    },
    mediaFullscreenUnavailable: {
        get (stateOwners) {
            const { media } = stateOwners;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$platform$2d$tests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullscreenSupported"] || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$platform$2d$tests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasFullscreenSupport"])(media)) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvailabilityStates"].UNSUPPORTED;
            return void 0;
        }
    },
    mediaPipUnavailable: {
        get (stateOwners) {
            const { media } = stateOwners;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$platform$2d$tests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipSupported"] || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$platform$2d$tests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPipSupport"])(media)) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvailabilityStates"].UNSUPPORTED;
        }
    },
    mediaVolumeUnavailable: {
        get (stateOwners) {
            const { media } = stateOwners;
            if (volumeSupported === false || (media == null ? void 0 : media.volume) == void 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvailabilityStates"].UNSUPPORTED;
            }
            return void 0;
        },
        // NOTE: Slightly different impl here. Added generic support for
        // "stateOwnersUpdateHandlers" since the original impl had to hack around
        // race conditions. (CJP)
        stateOwnersUpdateHandlers: [
            (handler)=>{
                if (volumeSupported == null) {
                    volumeSupportPromise.then((supported)=>handler(supported ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvailabilityStates"].UNSUPPORTED));
                }
            }
        ]
    },
    mediaCastUnavailable: {
        // @ts-ignore
        get (stateOwners) {
            let { availability = "not-available" } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var _a;
            const { media } = stateOwners;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$platform$2d$tests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castSupported"] || !((_a = media == null ? void 0 : media.remote) == null ? void 0 : _a.state)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvailabilityStates"].UNSUPPORTED;
            }
            if (availability == null || availability === "available") return void 0;
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvailabilityStates"].UNAVAILABLE;
        },
        stateOwnersUpdateHandlers: [
            (handler, stateOwners)=>{
                var _a;
                const { media } = stateOwners;
                if (!media) return;
                const remotePlaybackDisabled = media.disableRemotePlayback || media.hasAttribute("disableremoteplayback");
                if (!remotePlaybackDisabled) {
                    (_a = media == null ? void 0 : media.remote) == null ? void 0 : _a.watchAvailability((availabilityBool)=>{
                        const availability = availabilityBool ? "available" : "not-available";
                        handler({
                            availability
                        });
                    }).catch((error)=>{
                        if (error.name === "NotSupportedError") {
                            handler({
                                availability: null
                            });
                        } else {
                            handler({
                                availability: "not-available"
                            });
                        }
                    });
                }
                return ()=>{
                    var _a2;
                    (_a2 = media == null ? void 0 : media.remote) == null ? void 0 : _a2.cancelWatchAvailability().catch(()=>{});
                };
            }
        ]
    },
    mediaAirplayUnavailable: {
        get (_stateOwners, event) {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$platform$2d$tests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["airplaySupported"]) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvailabilityStates"].UNSUPPORTED;
            if ((event == null ? void 0 : event.availability) === "not-available") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvailabilityStates"].UNAVAILABLE;
            }
            return void 0;
        },
        // NOTE: Keeping this event, as it's still the documented way of monitoring
        // for AirPlay availability from Apple.
        // See: https://developer.apple.com/documentation/webkitjs/adding_an_airplay_button_to_your_safari_media_controls#2940021 (CJP)
        mediaEvents: [
            "webkitplaybacktargetavailabilitychanged"
        ],
        stateOwnersUpdateHandlers: [
            (handler, stateOwners)=>{
                var _a;
                const { media } = stateOwners;
                if (!media) return;
                const remotePlaybackDisabled = media.disableRemotePlayback || media.hasAttribute("disableremoteplayback");
                if (!remotePlaybackDisabled) {
                    (_a = media == null ? void 0 : media.remote) == null ? void 0 : _a.watchAvailability((availabilityBool)=>{
                        const availability = availabilityBool ? "available" : "not-available";
                        handler({
                            availability
                        });
                    }).catch((error)=>{
                        if (error.name === "NotSupportedError") {
                            handler({
                                availability: null
                            });
                        } else {
                            handler({
                                availability: "not-available"
                            });
                        }
                    });
                }
                return ()=>{
                    var _a2;
                    (_a2 = media == null ? void 0 : media.remote) == null ? void 0 : _a2.cancelWatchAvailability().catch(()=>{});
                };
            }
        ]
    },
    mediaRenditionUnavailable: {
        get (stateOwners) {
            var _a;
            const { media } = stateOwners;
            if (!(media == null ? void 0 : media.videoRenditions)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvailabilityStates"].UNSUPPORTED;
            }
            if (!((_a = media.videoRenditions) == null ? void 0 : _a.length)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvailabilityStates"].UNAVAILABLE;
            }
            return void 0;
        },
        mediaEvents: [
            "emptied",
            "loadstart"
        ],
        videoRenditionsEvents: [
            "addrendition",
            "removerendition"
        ]
    },
    mediaAudioTrackUnavailable: {
        get (stateOwners) {
            var _a, _b;
            const { media } = stateOwners;
            if (!(media == null ? void 0 : media.audioTracks)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvailabilityStates"].UNSUPPORTED;
            }
            if (((_b = (_a = media.audioTracks) == null ? void 0 : _a.length) != null ? _b : 0) <= 1) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvailabilityStates"].UNAVAILABLE;
            }
            return void 0;
        },
        mediaEvents: [
            "emptied",
            "loadstart"
        ],
        audioTracksEvents: [
            "addtrack",
            "removetrack"
        ]
    }
};
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-store/request-map.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requestMap",
    ()=>requestMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/captions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-store/util.js [app-client] (ecmascript)");
;
;
;
;
const requestMap = {
    /**
   * @TODO Consider adding state to `StateMediator` for e.g. `mediaThumbnailCues` and use that for derived state here (CJP)
   */ [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PREVIEW_REQUEST] (stateMediator, stateOwners, param) {
        let { detail } = param;
        var _a, _b, _c;
        const { media } = stateOwners;
        const mediaPreviewTime = detail != null ? detail : void 0;
        let mediaPreviewImage = void 0;
        let mediaPreviewCoords = void 0;
        if (media && mediaPreviewTime != null) {
            const [track] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextTracksList"])(media, {
                kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackKinds"].METADATA,
                label: "thumbnails"
            });
            const cue = Array.prototype.find.call((_a = track == null ? void 0 : track.cues) != null ? _a : [], (c, i, cs)=>{
                if (i === 0) return c.endTime > mediaPreviewTime;
                if (i === cs.length - 1) return c.startTime <= mediaPreviewTime;
                return c.startTime <= mediaPreviewTime && c.endTime > mediaPreviewTime;
            });
            if (cue) {
                const base = !/'^(?:[a-z]+:)?\/\//i.test(cue.text) ? (_b = media == null ? void 0 : media.querySelector('track[label="thumbnails"]')) == null ? void 0 : _b.src : void 0;
                const url = new URL(cue.text, base);
                const previewCoordsStr = new URLSearchParams(url.hash).get("#xywh");
                mediaPreviewCoords = previewCoordsStr.split(",").map((numStr)=>+numStr);
                mediaPreviewImage = url.href;
            }
        }
        const mediaDuration = stateMediator.mediaDuration.get(stateOwners);
        const mediaChaptersCues = stateMediator.mediaChaptersCues.get(stateOwners);
        let mediaPreviewChapter = (_c = mediaChaptersCues.find((c, i, cs)=>{
            if (i === cs.length - 1 && mediaDuration === c.endTime) {
                return c.startTime <= mediaPreviewTime && c.endTime >= mediaPreviewTime;
            }
            return c.startTime <= mediaPreviewTime && c.endTime > mediaPreviewTime;
        })) == null ? void 0 : _c.text;
        if (detail != null && mediaPreviewChapter == null) {
            mediaPreviewChapter = "";
        }
        return {
            mediaPreviewTime,
            mediaPreviewImage,
            mediaPreviewCoords,
            mediaPreviewChapter
        };
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PAUSE_REQUEST] (stateMediator, stateOwners) {
        const key = "mediaPaused";
        const value = true;
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PLAY_REQUEST] (stateMediator, stateOwners) {
        var _a, _b, _c, _d;
        const key = "mediaPaused";
        const value = false;
        const isLive = stateMediator.mediaStreamType.get(stateOwners) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamTypes"].LIVE;
        const canAutoSeekToLive = !((_a = stateOwners.options) == null ? void 0 : _a.noAutoSeekToLive);
        const isDVR = stateMediator.mediaTargetLiveWindow.get(stateOwners) > 0;
        if (isLive && canAutoSeekToLive && !isDVR) {
            const seekableEnd = (_b = stateMediator.mediaSeekable.get(stateOwners)) == null ? void 0 : _b[1];
            if (seekableEnd) {
                const seekToLiveOffset = (_d = (_c = stateOwners.options) == null ? void 0 : _c.seekToLiveOffset) != null ? _d : 0;
                const liveEdgeTime = seekableEnd - seekToLiveOffset;
                stateMediator.mediaCurrentTime.set(liveEdgeTime, stateOwners);
            }
        }
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PLAYBACK_RATE_REQUEST] (stateMediator, stateOwners, param) {
        let { detail } = param;
        const key = "mediaPlaybackRate";
        const value = detail;
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_MUTE_REQUEST] (stateMediator, stateOwners) {
        const key = "mediaMuted";
        const value = true;
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_UNMUTE_REQUEST] (stateMediator, stateOwners) {
        const key = "mediaMuted";
        const value = false;
        if (!stateMediator.mediaVolume.get(stateOwners)) {
            stateMediator.mediaVolume.set(0.25, stateOwners);
        }
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_VOLUME_REQUEST] (stateMediator, stateOwners, param) {
        let { detail } = param;
        const key = "mediaVolume";
        const value = detail;
        if (value && stateMediator.mediaMuted.get(stateOwners)) {
            stateMediator.mediaMuted.set(false, stateOwners);
        }
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_SEEK_REQUEST] (stateMediator, stateOwners, param) {
        let { detail } = param;
        const key = "mediaCurrentTime";
        const value = detail;
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_SEEK_TO_LIVE_REQUEST] (stateMediator, stateOwners) {
        var _a, _b, _c;
        const key = "mediaCurrentTime";
        const seekableEnd = (_a = stateMediator.mediaSeekable.get(stateOwners)) == null ? void 0 : _a[1];
        if (Number.isNaN(Number(seekableEnd))) return;
        const seekToLiveOffset = (_c = (_b = stateOwners.options) == null ? void 0 : _b.seekToLiveOffset) != null ? _c : 0;
        const value = seekableEnd - seekToLiveOffset;
        stateMediator[key].set(value, stateOwners);
    },
    // Text Tracks state change requests
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_SHOW_SUBTITLES_REQUEST] (_stateMediator, stateOwners, param) {
        let { detail } = param;
        var _a;
        const { options } = stateOwners;
        const tracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubtitleTracks"])(stateOwners);
        const tracksToUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTracks"])(detail);
        const preferredLanguage = (_a = tracksToUpdate[0]) == null ? void 0 : _a.language;
        if (preferredLanguage && !options.noSubtitlesLangPref) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].localStorage.setItem("media-chrome-pref-subtitles-lang", preferredLanguage);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTracksModeTo"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackModes"].SHOWING, tracks, tracksToUpdate);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_DISABLE_SUBTITLES_REQUEST] (_stateMediator, stateOwners, param) {
        let { detail } = param;
        const tracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubtitleTracks"])(stateOwners);
        const tracksToUpdate = detail != null ? detail : [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTracksModeTo"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextTrackModes"].DISABLED, tracks, tracksToUpdate);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_TOGGLE_SUBTITLES_REQUEST] (_stateMediator, stateOwners, param) {
        let { detail } = param;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleSubtitleTracks"])(stateOwners, detail);
    },
    // Renditions/Tracks state change requests
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_RENDITION_REQUEST] (stateMediator, stateOwners, param) {
        let { detail } = param;
        const key = "mediaRenditionSelected";
        const value = detail;
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_AUDIO_TRACK_REQUEST] (stateMediator, stateOwners, param) {
        let { detail } = param;
        const key = "mediaAudioTrackEnabled";
        const value = detail;
        stateMediator[key].set(value, stateOwners);
    },
    // State change requests dependent on root node
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_ENTER_PIP_REQUEST] (stateMediator, stateOwners) {
        const key = "mediaIsPip";
        const value = true;
        if (stateMediator.mediaIsFullscreen.get(stateOwners)) {
            stateMediator.mediaIsFullscreen.set(false, stateOwners);
        }
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_EXIT_PIP_REQUEST] (stateMediator, stateOwners) {
        const key = "mediaIsPip";
        const value = false;
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_ENTER_FULLSCREEN_REQUEST] (stateMediator, stateOwners) {
        const key = "mediaIsFullscreen";
        const value = true;
        if (stateMediator.mediaIsPip.get(stateOwners)) {
            stateMediator.mediaIsPip.set(false, stateOwners);
        }
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_EXIT_FULLSCREEN_REQUEST] (stateMediator, stateOwners) {
        const key = "mediaIsFullscreen";
        const value = false;
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_ENTER_CAST_REQUEST] (stateMediator, stateOwners) {
        const key = "mediaIsCasting";
        const value = true;
        if (stateMediator.mediaIsFullscreen.get(stateOwners)) {
            stateMediator.mediaIsFullscreen.set(false, stateOwners);
        }
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_EXIT_CAST_REQUEST] (stateMediator, stateOwners) {
        const key = "mediaIsCasting";
        const value = false;
        stateMediator[key].set(value, stateOwners);
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_AIRPLAY_REQUEST] (stateMediator, stateOwners) {
        const key = "mediaIsAirplaying";
        const value = true;
        stateMediator[key].set(value, stateOwners);
    }
};
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-store/media-store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMediaStore",
    ()=>createMediaStore,
    "default",
    ()=>media_store_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$state$2d$mediator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-store/state-mediator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-store/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$request$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-store/request-map.js [app-client] (ecmascript)");
;
;
;
const createMediaStore = (param)=>{
    let { media, fullscreenElement, documentElement, stateMediator = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$state$2d$mediator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stateMediator"], requestMap = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$request$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestMap"], options = {}, monitorStateOwnersOnlyWithSubscriptions = true } = param;
    const callbacks = [];
    const stateOwners = {
        // Spreading options here since folks should not rely on holding onto references
        // for any app-level logic wrt options.
        options: {
            ...options
        }
    };
    let state = Object.freeze({
        mediaPreviewTime: void 0,
        mediaPreviewImage: void 0,
        mediaPreviewCoords: void 0,
        mediaPreviewChapter: void 0
    });
    const updateState = (nextStateDelta)=>{
        if (nextStateDelta == void 0) return;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areValuesEq"])(nextStateDelta, state)) {
            return;
        }
        state = Object.freeze({
            ...state,
            ...nextStateDelta
        });
        callbacks.forEach((cb)=>cb(state));
    };
    const updateStateFromFacade = ()=>{
        const nextState = Object.entries(stateMediator).reduce((nextState2, param)=>{
            let [stateName, { get }] = param;
            nextState2[stateName] = get(stateOwners);
            return nextState2;
        }, {});
        updateState(nextState);
    };
    const stateUpdateHandlers = {};
    let nextStateOwners = void 0;
    const updateStateOwners = async (nextStateOwnersDelta, nextSubscriberCount)=>{
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
        const pendingUpdate = !!nextStateOwners;
        nextStateOwners = {
            ...stateOwners,
            ...nextStateOwners != null ? nextStateOwners : {},
            ...nextStateOwnersDelta
        };
        if (pendingUpdate) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$state$2d$mediator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareStateOwners"])(...Object.values(nextStateOwnersDelta));
        const shouldTeardownFromSubscriberCount = callbacks.length > 0 && nextSubscriberCount === 0 && monitorStateOwnersOnlyWithSubscriptions;
        const mediaChanged = stateOwners.media !== nextStateOwners.media;
        const textTracksChanged = ((_a = stateOwners.media) == null ? void 0 : _a.textTracks) !== ((_b = nextStateOwners.media) == null ? void 0 : _b.textTracks);
        const videoRenditionsChanged = ((_c = stateOwners.media) == null ? void 0 : _c.videoRenditions) !== ((_d = nextStateOwners.media) == null ? void 0 : _d.videoRenditions);
        const audioTracksChanged = ((_e = stateOwners.media) == null ? void 0 : _e.audioTracks) !== ((_f = nextStateOwners.media) == null ? void 0 : _f.audioTracks);
        const remoteChanged = ((_g = stateOwners.media) == null ? void 0 : _g.remote) !== ((_h = nextStateOwners.media) == null ? void 0 : _h.remote);
        const rootNodeChanged = stateOwners.documentElement !== nextStateOwners.documentElement;
        const teardownMedia = !!stateOwners.media && (mediaChanged || shouldTeardownFromSubscriberCount);
        const teardownTextTracks = !!((_i = stateOwners.media) == null ? void 0 : _i.textTracks) && (textTracksChanged || shouldTeardownFromSubscriberCount);
        const teardownVideoRenditions = !!((_j = stateOwners.media) == null ? void 0 : _j.videoRenditions) && (videoRenditionsChanged || shouldTeardownFromSubscriberCount);
        const teardownAudioTracks = !!((_k = stateOwners.media) == null ? void 0 : _k.audioTracks) && (audioTracksChanged || shouldTeardownFromSubscriberCount);
        const teardownRemote = !!((_l = stateOwners.media) == null ? void 0 : _l.remote) && (remoteChanged || shouldTeardownFromSubscriberCount);
        const teardownRootNode = !!stateOwners.documentElement && (rootNodeChanged || shouldTeardownFromSubscriberCount);
        const teardownSomething = teardownMedia || teardownTextTracks || teardownVideoRenditions || teardownAudioTracks || teardownRemote || teardownRootNode;
        const shouldSetupFromSubscriberCount = callbacks.length === 0 && nextSubscriberCount === 1 && monitorStateOwnersOnlyWithSubscriptions;
        const setupMedia = !!nextStateOwners.media && (mediaChanged || shouldSetupFromSubscriberCount);
        const setupTextTracks = !!((_m = nextStateOwners.media) == null ? void 0 : _m.textTracks) && (textTracksChanged || shouldSetupFromSubscriberCount);
        const setupVideoRenditions = !!((_n = nextStateOwners.media) == null ? void 0 : _n.videoRenditions) && (videoRenditionsChanged || shouldSetupFromSubscriberCount);
        const setupAudioTracks = !!((_o = nextStateOwners.media) == null ? void 0 : _o.audioTracks) && (audioTracksChanged || shouldSetupFromSubscriberCount);
        const setupRemote = !!((_p = nextStateOwners.media) == null ? void 0 : _p.remote) && (remoteChanged || shouldSetupFromSubscriberCount);
        const setupRootNode = !!nextStateOwners.documentElement && (rootNodeChanged || shouldSetupFromSubscriberCount);
        const setupSomething = setupMedia || setupTextTracks || setupVideoRenditions || setupAudioTracks || setupRemote || setupRootNode;
        const somethingToDo = teardownSomething || setupSomething;
        if (!somethingToDo) {
            Object.entries(nextStateOwners).forEach((param)=>{
                let [stateOwnerName, stateOwner] = param;
                stateOwners[stateOwnerName] = stateOwner;
            });
            updateStateFromFacade();
            nextStateOwners = void 0;
            return;
        }
        Object.entries(stateMediator).forEach((param)=>{
            let [stateName, { get, mediaEvents = [], textTracksEvents = [], videoRenditionsEvents = [], audioTracksEvents = [], remoteEvents = [], rootEvents = [], stateOwnersUpdateHandlers = [] }] = param;
            if (!stateUpdateHandlers[stateName]) {
                stateUpdateHandlers[stateName] = {};
            }
            const handler = (event)=>{
                const nextValue = get(stateOwners, event);
                updateState({
                    [stateName]: nextValue
                });
            };
            let prevHandler;
            prevHandler = stateUpdateHandlers[stateName].mediaEvents;
            mediaEvents.forEach((eventType)=>{
                if (prevHandler && teardownMedia) {
                    stateOwners.media.removeEventListener(eventType, prevHandler);
                    stateUpdateHandlers[stateName].mediaEvents = void 0;
                }
                if (setupMedia) {
                    nextStateOwners.media.addEventListener(eventType, handler);
                    stateUpdateHandlers[stateName].mediaEvents = handler;
                }
            });
            prevHandler = stateUpdateHandlers[stateName].textTracksEvents;
            textTracksEvents.forEach((eventType)=>{
                var _a2, _b2;
                if (prevHandler && teardownTextTracks) {
                    (_a2 = stateOwners.media.textTracks) == null ? void 0 : _a2.removeEventListener(eventType, prevHandler);
                    stateUpdateHandlers[stateName].textTracksEvents = void 0;
                }
                if (setupTextTracks) {
                    (_b2 = nextStateOwners.media.textTracks) == null ? void 0 : _b2.addEventListener(eventType, handler);
                    stateUpdateHandlers[stateName].textTracksEvents = handler;
                }
            });
            prevHandler = stateUpdateHandlers[stateName].videoRenditionsEvents;
            videoRenditionsEvents.forEach((eventType)=>{
                var _a2, _b2;
                if (prevHandler && teardownVideoRenditions) {
                    (_a2 = stateOwners.media.videoRenditions) == null ? void 0 : _a2.removeEventListener(eventType, prevHandler);
                    stateUpdateHandlers[stateName].videoRenditionsEvents = void 0;
                }
                if (setupVideoRenditions) {
                    (_b2 = nextStateOwners.media.videoRenditions) == null ? void 0 : _b2.addEventListener(eventType, handler);
                    stateUpdateHandlers[stateName].videoRenditionsEvents = handler;
                }
            });
            prevHandler = stateUpdateHandlers[stateName].audioTracksEvents;
            audioTracksEvents.forEach((eventType)=>{
                var _a2, _b2;
                if (prevHandler && teardownAudioTracks) {
                    (_a2 = stateOwners.media.audioTracks) == null ? void 0 : _a2.removeEventListener(eventType, prevHandler);
                    stateUpdateHandlers[stateName].audioTracksEvents = void 0;
                }
                if (setupAudioTracks) {
                    (_b2 = nextStateOwners.media.audioTracks) == null ? void 0 : _b2.addEventListener(eventType, handler);
                    stateUpdateHandlers[stateName].audioTracksEvents = handler;
                }
            });
            prevHandler = stateUpdateHandlers[stateName].remoteEvents;
            remoteEvents.forEach((eventType)=>{
                var _a2, _b2;
                if (prevHandler && teardownRemote) {
                    (_a2 = stateOwners.media.remote) == null ? void 0 : _a2.removeEventListener(eventType, prevHandler);
                    stateUpdateHandlers[stateName].remoteEvents = void 0;
                }
                if (setupRemote) {
                    (_b2 = nextStateOwners.media.remote) == null ? void 0 : _b2.addEventListener(eventType, handler);
                    stateUpdateHandlers[stateName].remoteEvents = handler;
                }
            });
            prevHandler = stateUpdateHandlers[stateName].rootEvents;
            rootEvents.forEach((eventType)=>{
                if (prevHandler && teardownRootNode) {
                    stateOwners.documentElement.removeEventListener(eventType, prevHandler);
                    stateUpdateHandlers[stateName].rootEvents = void 0;
                }
                if (setupRootNode) {
                    nextStateOwners.documentElement.addEventListener(eventType, handler);
                    stateUpdateHandlers[stateName].rootEvents = handler;
                }
            });
            const prevHandlerTeardown = stateUpdateHandlers[stateName].stateOwnersUpdateHandlers;
            stateOwnersUpdateHandlers.forEach((fn)=>{
                if (prevHandlerTeardown && teardownSomething) {
                    prevHandlerTeardown();
                }
                if (setupSomething) {
                    stateUpdateHandlers[stateName].stateOwnersUpdateHandlers = fn(handler, nextStateOwners);
                }
            });
        });
        Object.entries(nextStateOwners).forEach((param)=>{
            let [stateOwnerName, stateOwner] = param;
            stateOwners[stateOwnerName] = stateOwner;
        });
        updateStateFromFacade();
        nextStateOwners = void 0;
    };
    updateStateOwners({
        media,
        fullscreenElement,
        documentElement,
        options
    });
    return {
        // note that none of these cases directly interact with the media element, root node, full screen element, etc.
        // note these "actions" could just be the events if we wanted, especially if we normalize on "detail" for
        // any payload-relevant values
        // This is roughly equivalent to our used to be in our state requests dictionary object, though much of the
        // "heavy lifting" is now moved into the facade `set()`
        dispatch (action) {
            const { type, detail } = action;
            if (requestMap[type] && state.mediaErrorCode == null) {
                updateState(requestMap[type](stateMediator, stateOwners, action));
                return;
            }
            if (type === "mediaelementchangerequest") {
                updateStateOwners({
                    media: detail
                });
            } else if (type === "fullscreenelementchangerequest") {
                updateStateOwners({
                    fullscreenElement: detail
                });
            } else if (type === "documentelementchangerequest") {
                updateStateOwners({
                    documentElement: detail
                });
            } else if (type === "optionschangerequest") {
                Object.entries(detail != null ? detail : {}).forEach((param)=>{
                    let [optionName, optionValue] = param;
                    stateOwners.options[optionName] = optionValue;
                });
            }
        },
        getState () {
            return state;
        },
        subscribe (callback) {
            updateStateOwners({}, callbacks.length + 1);
            callbacks.push(callback);
            callback(state);
            return ()=>{
                const idx = callbacks.indexOf(callback);
                if (idx >= 0) {
                    updateStateOwners({}, callbacks.length - 1);
                    callbacks.splice(idx, 1);
                }
            };
        }
    };
};
var media_store_default = createMediaStore;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-controller.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "MediaController",
    ()=>MediaController,
    "default",
    ()=>media_controller_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$attribute$2d$token$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/attribute-token-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/captions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$media$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-store/media-store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _hotKeys, _fullscreenElement, _mediaStore, _mediaStateCallback, _mediaStoreUnsubscribe, _mediaStateEventHandler, _setupDefaultStore, setupDefaultStore_fn, _keyUpHandler, keyUpHandler_fn, _keyDownHandler, keyDownHandler_fn;
;
;
;
;
;
;
;
;
;
const ButtonPressedKeys = [
    "ArrowLeft",
    "ArrowRight",
    "Enter",
    " ",
    "f",
    "m",
    "k",
    "c"
];
const DEFAULT_SEEK_OFFSET = 10;
const Attributes = {
    DEFAULT_SUBTITLES: "defaultsubtitles",
    DEFAULT_STREAM_TYPE: "defaultstreamtype",
    DEFAULT_DURATION: "defaultduration",
    FULLSCREEN_ELEMENT: "fullscreenelement",
    HOTKEYS: "hotkeys",
    KEYS_USED: "keysused",
    LIVE_EDGE_OFFSET: "liveedgeoffset",
    SEEK_TO_LIVE_OFFSET: "seektoliveoffset",
    NO_AUTO_SEEK_TO_LIVE: "noautoseektolive",
    NO_HOTKEYS: "nohotkeys",
    NO_VOLUME_PREF: "novolumepref",
    NO_SUBTITLES_LANG_PREF: "nosubtitleslangpref",
    NO_DEFAULT_STORE: "nodefaultstore",
    KEYBOARD_FORWARD_SEEK_OFFSET: "keyboardforwardseekoffset",
    KEYBOARD_BACKWARD_SEEK_OFFSET: "keyboardbackwardseekoffset",
    LANG: "lang"
};
class MediaController extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaContainer"] {
    static get observedAttributes() {
        return super.observedAttributes.concat(Attributes.NO_HOTKEYS, Attributes.HOTKEYS, Attributes.DEFAULT_STREAM_TYPE, Attributes.DEFAULT_SUBTITLES, Attributes.DEFAULT_DURATION, Attributes.LANG);
    }
    get mediaStore() {
        return __privateGet(this, _mediaStore);
    }
    set mediaStore(value) {
        var _a, _b;
        if (__privateGet(this, _mediaStore)) {
            (_a = __privateGet(this, _mediaStoreUnsubscribe)) == null ? void 0 : _a.call(this);
            __privateSet(this, _mediaStoreUnsubscribe, void 0);
        }
        __privateSet(this, _mediaStore, value);
        if (!__privateGet(this, _mediaStore) && !this.hasAttribute(Attributes.NO_DEFAULT_STORE)) {
            __privateMethod(this, _setupDefaultStore, setupDefaultStore_fn).call(this);
            return;
        }
        __privateSet(this, _mediaStoreUnsubscribe, (_b = __privateGet(this, _mediaStore)) == null ? void 0 : _b.subscribe(__privateGet(this, _mediaStateCallback)));
    }
    get fullscreenElement() {
        var _a;
        return (_a = __privateGet(this, _fullscreenElement)) != null ? _a : this;
    }
    set fullscreenElement(element) {
        var _a;
        if (this.hasAttribute(Attributes.FULLSCREEN_ELEMENT)) {
            this.removeAttribute(Attributes.FULLSCREEN_ELEMENT);
        }
        __privateSet(this, _fullscreenElement, element);
        (_a = __privateGet(this, _mediaStore)) == null ? void 0 : _a.dispatch({
            type: "fullscreenelementchangerequest",
            detail: this.fullscreenElement
        });
    }
    get defaultSubtitles() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.DEFAULT_SUBTITLES);
    }
    set defaultSubtitles(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.DEFAULT_SUBTITLES, value);
    }
    get defaultStreamType() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, Attributes.DEFAULT_STREAM_TYPE);
    }
    set defaultStreamType(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, Attributes.DEFAULT_STREAM_TYPE, value);
    }
    get defaultDuration() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, Attributes.DEFAULT_DURATION);
    }
    set defaultDuration(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, Attributes.DEFAULT_DURATION, value);
    }
    get noHotkeys() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.NO_HOTKEYS);
    }
    set noHotkeys(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.NO_HOTKEYS, value);
    }
    get keysUsed() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, Attributes.KEYS_USED);
    }
    set keysUsed(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, Attributes.KEYS_USED, value);
    }
    get liveEdgeOffset() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, Attributes.LIVE_EDGE_OFFSET);
    }
    set liveEdgeOffset(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, Attributes.LIVE_EDGE_OFFSET, value);
    }
    get noAutoSeekToLive() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.NO_AUTO_SEEK_TO_LIVE);
    }
    set noAutoSeekToLive(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.NO_AUTO_SEEK_TO_LIVE, value);
    }
    get noVolumePref() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.NO_VOLUME_PREF);
    }
    set noVolumePref(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.NO_VOLUME_PREF, value);
    }
    get noSubtitlesLangPref() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.NO_SUBTITLES_LANG_PREF);
    }
    set noSubtitlesLangPref(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.NO_SUBTITLES_LANG_PREF, value);
    }
    get noDefaultStore() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.NO_DEFAULT_STORE);
    }
    set noDefaultStore(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.NO_DEFAULT_STORE, value);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === Attributes.NO_HOTKEYS) {
            if (newValue !== oldValue && newValue === "") {
                if (this.hasAttribute(Attributes.HOTKEYS)) {
                    console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled.");
                }
                this.disableHotkeys();
            } else if (newValue !== oldValue && newValue === null) {
                this.enableHotkeys();
            }
        } else if (attrName === Attributes.HOTKEYS) {
            __privateGet(this, _hotKeys).value = newValue;
        } else if (attrName === Attributes.DEFAULT_SUBTITLES && newValue !== oldValue) {
            (_a = __privateGet(this, _mediaStore)) == null ? void 0 : _a.dispatch({
                type: "optionschangerequest",
                detail: {
                    defaultSubtitles: this.hasAttribute(Attributes.DEFAULT_SUBTITLES)
                }
            });
        } else if (attrName === Attributes.DEFAULT_STREAM_TYPE) {
            (_c = __privateGet(this, _mediaStore)) == null ? void 0 : _c.dispatch({
                type: "optionschangerequest",
                detail: {
                    defaultStreamType: (_b = this.getAttribute(Attributes.DEFAULT_STREAM_TYPE)) != null ? _b : void 0
                }
            });
        } else if (attrName === Attributes.LIVE_EDGE_OFFSET) {
            (_d = __privateGet(this, _mediaStore)) == null ? void 0 : _d.dispatch({
                type: "optionschangerequest",
                detail: {
                    liveEdgeOffset: this.hasAttribute(Attributes.LIVE_EDGE_OFFSET) ? +this.getAttribute(Attributes.LIVE_EDGE_OFFSET) : void 0,
                    seekToLiveOffset: !this.hasAttribute(Attributes.SEEK_TO_LIVE_OFFSET) ? +this.getAttribute(Attributes.LIVE_EDGE_OFFSET) : void 0
                }
            });
        } else if (attrName === Attributes.SEEK_TO_LIVE_OFFSET) {
            (_e = __privateGet(this, _mediaStore)) == null ? void 0 : _e.dispatch({
                type: "optionschangerequest",
                detail: {
                    seekToLiveOffset: this.hasAttribute(Attributes.SEEK_TO_LIVE_OFFSET) ? +this.getAttribute(Attributes.SEEK_TO_LIVE_OFFSET) : void 0
                }
            });
        } else if (attrName === Attributes.NO_AUTO_SEEK_TO_LIVE) {
            (_f = __privateGet(this, _mediaStore)) == null ? void 0 : _f.dispatch({
                type: "optionschangerequest",
                detail: {
                    noAutoSeekToLive: this.hasAttribute(Attributes.NO_AUTO_SEEK_TO_LIVE)
                }
            });
        } else if (attrName === Attributes.FULLSCREEN_ELEMENT) {
            const el = newValue ? (_g = this.getRootNode()) == null ? void 0 : _g.getElementById(newValue) : void 0;
            __privateSet(this, _fullscreenElement, el);
            (_h = __privateGet(this, _mediaStore)) == null ? void 0 : _h.dispatch({
                type: "fullscreenelementchangerequest",
                detail: this.fullscreenElement
            });
        } else if (attrName === Attributes.LANG && newValue !== oldValue) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLanguage"])(newValue);
        }
    }
    connectedCallback() {
        var _a, _b;
        if (!__privateGet(this, _mediaStore) && !this.hasAttribute(Attributes.NO_DEFAULT_STORE)) {
            __privateMethod(this, _setupDefaultStore, setupDefaultStore_fn).call(this);
        }
        (_a = __privateGet(this, _mediaStore)) == null ? void 0 : _a.dispatch({
            type: "documentelementchangerequest",
            detail: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"]
        });
        super.connectedCallback();
        if (__privateGet(this, _mediaStore) && !__privateGet(this, _mediaStoreUnsubscribe)) {
            __privateSet(this, _mediaStoreUnsubscribe, (_b = __privateGet(this, _mediaStore)) == null ? void 0 : _b.subscribe(__privateGet(this, _mediaStateCallback)));
        }
        this.enableHotkeys();
    }
    disconnectedCallback() {
        var _a, _b, _c, _d;
        (_a = super.disconnectedCallback) == null ? void 0 : _a.call(this);
        if (__privateGet(this, _mediaStore)) {
            (_b = __privateGet(this, _mediaStore)) == null ? void 0 : _b.dispatch({
                type: "documentelementchangerequest",
                detail: void 0
            });
            (_c = __privateGet(this, _mediaStore)) == null ? void 0 : _c.dispatch({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_TOGGLE_SUBTITLES_REQUEST,
                detail: false
            });
        }
        if (__privateGet(this, _mediaStoreUnsubscribe)) {
            (_d = __privateGet(this, _mediaStoreUnsubscribe)) == null ? void 0 : _d.call(this);
            __privateSet(this, _mediaStoreUnsubscribe, void 0);
        }
    }
    /**
   * @override
   * @param {HTMLMediaElement} media
   */ mediaSetCallback(media) {
        var _a;
        super.mediaSetCallback(media);
        (_a = __privateGet(this, _mediaStore)) == null ? void 0 : _a.dispatch({
            type: "mediaelementchangerequest",
            detail: media
        });
        if (!media.hasAttribute("tabindex")) {
            media.tabIndex = -1;
        }
    }
    /**
   * @override
   * @param {HTMLMediaElement} media
   */ mediaUnsetCallback(media) {
        var _a;
        super.mediaUnsetCallback(media);
        (_a = __privateGet(this, _mediaStore)) == null ? void 0 : _a.dispatch({
            type: "mediaelementchangerequest",
            detail: void 0
        });
    }
    propagateMediaState(stateName, state) {
        propagateMediaState(this.mediaStateReceivers, stateName, state);
    }
    associateElement(element) {
        if (!element) return;
        const { associatedElementSubscriptions } = this;
        if (associatedElementSubscriptions.has(element)) return;
        const registerMediaStateReceiver = this.registerMediaStateReceiver.bind(this);
        const unregisterMediaStateReceiver = this.unregisterMediaStateReceiver.bind(this);
        const unsubscribe = monitorForMediaStateReceivers(element, registerMediaStateReceiver, unregisterMediaStateReceiver);
        Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"]).forEach((eventName)=>{
            element.addEventListener(eventName, __privateGet(this, _mediaStateEventHandler));
        });
        associatedElementSubscriptions.set(element, unsubscribe);
    }
    unassociateElement(element) {
        if (!element) return;
        const { associatedElementSubscriptions } = this;
        if (!associatedElementSubscriptions.has(element)) return;
        const unsubscribe = associatedElementSubscriptions.get(element);
        unsubscribe();
        associatedElementSubscriptions.delete(element);
        Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"]).forEach((eventName)=>{
            element.removeEventListener(eventName, __privateGet(this, _mediaStateEventHandler));
        });
    }
    registerMediaStateReceiver(el) {
        if (!el) return;
        const els = this.mediaStateReceivers;
        const index = els.indexOf(el);
        if (index > -1) return;
        els.push(el);
        if (__privateGet(this, _mediaStore)) {
            Object.entries(__privateGet(this, _mediaStore).getState()).forEach((param)=>{
                let [stateName, stateValue] = param;
                propagateMediaState([
                    el
                ], stateName, stateValue);
            });
        }
    }
    unregisterMediaStateReceiver(el) {
        const els = this.mediaStateReceivers;
        const index = els.indexOf(el);
        if (index < 0) return;
        els.splice(index, 1);
    }
    enableHotkeys() {
        this.addEventListener("keydown", __privateMethod(this, _keyDownHandler, keyDownHandler_fn));
    }
    disableHotkeys() {
        this.removeEventListener("keydown", __privateMethod(this, _keyDownHandler, keyDownHandler_fn));
        this.removeEventListener("keyup", __privateMethod(this, _keyUpHandler, keyUpHandler_fn));
    }
    get hotkeys() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, Attributes.HOTKEYS);
    }
    set hotkeys(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, Attributes.HOTKEYS, value);
    }
    keyboardShortcutHandler(e) {
        var _a, _b, _c, _d, _e;
        const target = e.target;
        const keysUsed = ((_c = (_b = (_a = target.getAttribute(Attributes.KEYS_USED)) == null ? void 0 : _a.split(" ")) != null ? _b : target == null ? void 0 : target.keysUsed) != null ? _c : []).map((key)=>key === "Space" ? " " : key).filter(Boolean);
        if (keysUsed.includes(e.key)) {
            return;
        }
        let eventName, detail, evt;
        if (__privateGet(this, _hotKeys).contains("no".concat(e.key.toLowerCase()))) return;
        if (e.key === " " && __privateGet(this, _hotKeys).contains("nospace")) return;
        switch(e.key){
            case " ":
            case "k":
                eventName = __privateGet(this, _mediaStore).getState().mediaPaused ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PLAY_REQUEST : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PAUSE_REQUEST;
                this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(eventName, {
                    composed: true,
                    bubbles: true
                }));
                break;
            case "m":
                eventName = this.mediaStore.getState().mediaVolumeLevel === "off" ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_UNMUTE_REQUEST : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_MUTE_REQUEST;
                this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(eventName, {
                    composed: true,
                    bubbles: true
                }));
                break;
            case "f":
                eventName = this.mediaStore.getState().mediaIsFullscreen ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_EXIT_FULLSCREEN_REQUEST : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_ENTER_FULLSCREEN_REQUEST;
                this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(eventName, {
                    composed: true,
                    bubbles: true
                }));
                break;
            case "c":
                this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_TOGGLE_SUBTITLES_REQUEST, {
                    composed: true,
                    bubbles: true
                }));
                break;
            case "ArrowLeft":
                {
                    const offsetValue = this.hasAttribute(Attributes.KEYBOARD_BACKWARD_SEEK_OFFSET) ? +this.getAttribute(Attributes.KEYBOARD_BACKWARD_SEEK_OFFSET) : DEFAULT_SEEK_OFFSET;
                    detail = Math.max(((_d = this.mediaStore.getState().mediaCurrentTime) != null ? _d : 0) - offsetValue, 0);
                    evt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_SEEK_REQUEST, {
                        composed: true,
                        bubbles: true,
                        detail
                    });
                    this.dispatchEvent(evt);
                    break;
                }
            case "ArrowRight":
                {
                    const offsetValue = this.hasAttribute(Attributes.KEYBOARD_FORWARD_SEEK_OFFSET) ? +this.getAttribute(Attributes.KEYBOARD_FORWARD_SEEK_OFFSET) : DEFAULT_SEEK_OFFSET;
                    detail = Math.max(((_e = this.mediaStore.getState().mediaCurrentTime) != null ? _e : 0) + offsetValue, 0);
                    evt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_SEEK_REQUEST, {
                        composed: true,
                        bubbles: true,
                        detail
                    });
                    this.dispatchEvent(evt);
                    break;
                }
            default:
                break;
        }
    }
    constructor(){
        super();
        __privateAdd(this, _setupDefaultStore);
        __privateAdd(this, _keyUpHandler);
        __privateAdd(this, _keyDownHandler);
        this.mediaStateReceivers = [];
        this.associatedElementSubscriptions = /* @__PURE__ */ new Map();
        __privateAdd(this, _hotKeys, new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$attribute$2d$token$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttributeTokenList"](this, Attributes.HOTKEYS));
        __privateAdd(this, _fullscreenElement, void 0);
        __privateAdd(this, _mediaStore, void 0);
        __privateAdd(this, _mediaStateCallback, void 0);
        __privateAdd(this, _mediaStoreUnsubscribe, void 0);
        __privateAdd(this, _mediaStateEventHandler, (event)=>{
            var _a;
            (_a = __privateGet(this, _mediaStore)) == null ? void 0 : _a.dispatch(event);
        });
        this.associateElement(this);
        let prevState = {};
        __privateSet(this, _mediaStateCallback, (nextState)=>{
            Object.entries(nextState).forEach((param)=>{
                let [stateName, stateValue] = param;
                if (stateName in prevState && prevState[stateName] === stateValue) return;
                this.propagateMediaState(stateName, stateValue);
                const attrName = stateName.toLowerCase();
                const evt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttributeToStateChangeEventMap"][attrName], {
                    composed: true,
                    detail: stateValue
                });
                this.dispatchEvent(evt);
            });
            prevState = nextState;
        });
        this.enableHotkeys();
    }
}
_hotKeys = new WeakMap();
_fullscreenElement = new WeakMap();
_mediaStore = new WeakMap();
_mediaStateCallback = new WeakMap();
_mediaStoreUnsubscribe = new WeakMap();
_mediaStateEventHandler = new WeakMap();
_setupDefaultStore = new WeakSet();
setupDefaultStore_fn = function() {
    var _a;
    this.mediaStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$store$2f$media$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMediaStore"])({
        media: this.media,
        fullscreenElement: this.fullscreenElement,
        options: {
            defaultSubtitles: this.hasAttribute(Attributes.DEFAULT_SUBTITLES),
            defaultDuration: this.hasAttribute(Attributes.DEFAULT_DURATION) ? +this.getAttribute(Attributes.DEFAULT_DURATION) : void 0,
            defaultStreamType: /** @type {import('./media-store/state-mediator.js').StreamTypeValue} */ (_a = this.getAttribute(Attributes.DEFAULT_STREAM_TYPE)) != null ? _a : void 0,
            liveEdgeOffset: this.hasAttribute(Attributes.LIVE_EDGE_OFFSET) ? +this.getAttribute(Attributes.LIVE_EDGE_OFFSET) : void 0,
            seekToLiveOffset: this.hasAttribute(Attributes.SEEK_TO_LIVE_OFFSET) ? +this.getAttribute(Attributes.SEEK_TO_LIVE_OFFSET) : this.hasAttribute(Attributes.LIVE_EDGE_OFFSET) ? +this.getAttribute(Attributes.LIVE_EDGE_OFFSET) : void 0,
            noAutoSeekToLive: this.hasAttribute(Attributes.NO_AUTO_SEEK_TO_LIVE),
            // NOTE: This wasn't updated if it was changed later. Should it be? (CJP)
            noVolumePref: this.hasAttribute(Attributes.NO_VOLUME_PREF),
            noSubtitlesLangPref: this.hasAttribute(Attributes.NO_SUBTITLES_LANG_PREF)
        }
    });
};
_keyUpHandler = new WeakSet();
keyUpHandler_fn = function(e) {
    const { key } = e;
    if (!ButtonPressedKeys.includes(key)) {
        this.removeEventListener("keyup", __privateMethod(this, _keyUpHandler, keyUpHandler_fn));
        return;
    }
    this.keyboardShortcutHandler(e);
};
_keyDownHandler = new WeakSet();
keyDownHandler_fn = function(e) {
    const { metaKey, altKey, key } = e;
    if (metaKey || altKey || !ButtonPressedKeys.includes(key)) {
        this.removeEventListener("keyup", __privateMethod(this, _keyUpHandler, keyUpHandler_fn));
        return;
    }
    if ([
        " ",
        "ArrowLeft",
        "ArrowRight"
    ].includes(key) && !(__privateGet(this, _hotKeys).contains("no".concat(key.toLowerCase())) || key === " " && __privateGet(this, _hotKeys).contains("nospace"))) {
        e.preventDefault();
    }
    this.addEventListener("keyup", __privateMethod(this, _keyUpHandler, keyUpHandler_fn), {
        once: true
    });
};
const MEDIA_UI_ATTRIBUTE_NAMES = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"]);
const MEDIA_UI_PROP_NAMES = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIProps"]);
const getMediaUIAttributesFrom = (child)=>{
    var _a, _b, _c, _d;
    let { observedAttributes } = child.constructor;
    if (!observedAttributes && ((_a = child.nodeName) == null ? void 0 : _a.includes("-"))) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.upgrade(child);
        ({ observedAttributes } = child.constructor);
    }
    const mediaChromeAttributesList = (_d = (_c = (_b = child == null ? void 0 : child.getAttribute) == null ? void 0 : _b.call(child, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CHROME_ATTRIBUTES)) == null ? void 0 : _c.split) == null ? void 0 : _d.call(_c, /\s+/);
    if (!Array.isArray(observedAttributes || mediaChromeAttributesList)) return [];
    return (observedAttributes || mediaChromeAttributesList).filter((attrName)=>MEDIA_UI_ATTRIBUTE_NAMES.includes(attrName));
};
const hasMediaUIProps = (mediaStateReceiverCandidate)=>{
    var _a, _b;
    if (((_a = mediaStateReceiverCandidate.nodeName) == null ? void 0 : _a.includes("-")) && !!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get((_b = mediaStateReceiverCandidate.nodeName) == null ? void 0 : _b.toLowerCase()) && !(mediaStateReceiverCandidate instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get(mediaStateReceiverCandidate.nodeName.toLowerCase()))) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.upgrade(mediaStateReceiverCandidate);
    }
    return MEDIA_UI_PROP_NAMES.some((propName)=>propName in mediaStateReceiverCandidate);
};
const isMediaStateReceiver = (child)=>{
    return hasMediaUIProps(child) || !!getMediaUIAttributesFrom(child).length;
};
const serializeTuple = (tuple)=>{
    var _a;
    return (_a = tuple == null ? void 0 : tuple.join) == null ? void 0 : _a.call(tuple, ":");
};
const CustomAttrSerializer = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_LIST]: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyTextTrackList"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING]: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyTextTrackList"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SEEKABLE]: serializeTuple,
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_BUFFERED]: (tuples)=>tuples == null ? void 0 : tuples.map(serializeTuple).join(" "),
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_COORDS]: (coords)=>coords == null ? void 0 : coords.join(" "),
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_LIST]: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyRenditionList"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_LIST]: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyAudioTrackList"]
};
const setAttr = async (child, attrName, attrValue)=>{
    var _a, _b;
    if (!child.isConnected) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delay"])(0);
    }
    if (typeof attrValue === "boolean" || attrValue == null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(child, attrName, attrValue);
    }
    if (typeof attrValue === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(child, attrName, attrValue);
    }
    if (typeof attrValue === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(child, attrName, attrValue);
    }
    if (Array.isArray(attrValue) && !attrValue.length) {
        return child.removeAttribute(attrName);
    }
    const val = (_b = (_a = CustomAttrSerializer[attrName]) == null ? void 0 : _a.call(CustomAttrSerializer, attrValue)) != null ? _b : attrValue;
    return child.setAttribute(attrName, val);
};
const isMediaSlotElementDescendant = (el)=>{
    var _a;
    return !!((_a = el.closest) == null ? void 0 : _a.call(el, '*[slot="media"]'));
};
const traverseForMediaStateReceivers = (rootNode, mediaStateReceiverCallback)=>{
    if (isMediaSlotElementDescendant(rootNode)) {
        return;
    }
    const traverseForMediaStateReceiversSync = (rootNode2, mediaStateReceiverCallback2)=>{
        var _a, _b;
        if (isMediaStateReceiver(rootNode2)) {
            mediaStateReceiverCallback2(rootNode2);
        }
        const { children = [] } = rootNode2 != null ? rootNode2 : {};
        const shadowChildren = (_b = (_a = rootNode2 == null ? void 0 : rootNode2.shadowRoot) == null ? void 0 : _a.children) != null ? _b : [];
        const allChildren = [
            ...children,
            ...shadowChildren
        ];
        allChildren.forEach((child)=>traverseForMediaStateReceivers(child, mediaStateReceiverCallback2));
    };
    const name = rootNode == null ? void 0 : rootNode.nodeName.toLowerCase();
    if (name.includes("-") && !isMediaStateReceiver(rootNode)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.whenDefined(name).then(()=>{
            traverseForMediaStateReceiversSync(rootNode, mediaStateReceiverCallback);
        });
        return;
    }
    traverseForMediaStateReceiversSync(rootNode, mediaStateReceiverCallback);
};
const propagateMediaState = (els, stateName, val)=>{
    els.forEach((el)=>{
        if (stateName in el) {
            el[stateName] = val;
            return;
        }
        const relevantAttrs = getMediaUIAttributesFrom(el);
        const attrName = stateName.toLowerCase();
        if (!relevantAttrs.includes(attrName)) return;
        setAttr(el, attrName, val);
    });
};
const monitorForMediaStateReceivers = (rootNode, registerMediaStateReceiver, unregisterMediaStateReceiver)=>{
    traverseForMediaStateReceivers(rootNode, registerMediaStateReceiver);
    const registerMediaStateReceiverHandler = (evt)=>{
        var _a;
        const el = (_a = evt == null ? void 0 : evt.composedPath()[0]) != null ? _a : evt.target;
        registerMediaStateReceiver(el);
    };
    const unregisterMediaStateReceiverHandler = (evt)=>{
        var _a;
        const el = (_a = evt == null ? void 0 : evt.composedPath()[0]) != null ? _a : evt.target;
        unregisterMediaStateReceiver(el);
    };
    rootNode.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].REGISTER_MEDIA_STATE_RECEIVER, registerMediaStateReceiverHandler);
    rootNode.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].UNREGISTER_MEDIA_STATE_RECEIVER, unregisterMediaStateReceiverHandler);
    const mutationCallback = (mutationsList)=>{
        mutationsList.forEach((mutationRecord)=>{
            const { addedNodes = [], removedNodes = [], type, target, attributeName } = mutationRecord;
            if (type === "childList") {
                Array.prototype.forEach.call(addedNodes, (node)=>traverseForMediaStateReceivers(node, registerMediaStateReceiver));
                Array.prototype.forEach.call(removedNodes, (node)=>traverseForMediaStateReceivers(node, unregisterMediaStateReceiver));
            } else if (type === "attributes" && attributeName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CHROME_ATTRIBUTES) {
                if (isMediaStateReceiver(target)) {
                    registerMediaStateReceiver(target);
                } else {
                    unregisterMediaStateReceiver(target);
                }
            }
        });
    };
    let prevSlotted = [];
    const slotChangeHandler = (event)=>{
        const slotEl = event.target;
        if (slotEl.name === "media") return;
        prevSlotted.forEach((node)=>traverseForMediaStateReceivers(node, unregisterMediaStateReceiver));
        prevSlotted = [
            ...slotEl.assignedElements({
                flatten: true
            })
        ];
        prevSlotted.forEach((node)=>traverseForMediaStateReceivers(node, registerMediaStateReceiver));
    };
    rootNode.addEventListener("slotchange", slotChangeHandler);
    const observer = new MutationObserver(mutationCallback);
    observer.observe(rootNode, {
        childList: true,
        attributes: true,
        subtree: true
    });
    const unsubscribe = ()=>{
        traverseForMediaStateReceivers(rootNode, unregisterMediaStateReceiver);
        rootNode.removeEventListener("slotchange", slotChangeHandler);
        observer.disconnect();
        rootNode.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].REGISTER_MEDIA_STATE_RECEIVER, registerMediaStateReceiverHandler);
        rootNode.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].UNREGISTER_MEDIA_STATE_RECEIVER, unregisterMediaStateReceiverHandler);
    };
    return unsubscribe;
};
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-controller")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-controller", MediaController);
}
var media_controller_default = MediaController;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-tooltip.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "default",
    ()=>media_tooltip_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
;
;
const Attributes = {
    PLACEMENT: "placement",
    BOUNDS: "bounds"
};
function getTemplateHTML(_attrs) {
    return '\n    <style>\n      :host {\n        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));\n        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));\n        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);\n        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);\n        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));\n        position: relative;\n        pointer-events: none;\n        display: var(--media-tooltip-display, inline-flex);\n        justify-content: center;\n        align-items: center;\n        box-sizing: border-box;\n        z-index: var(--media-tooltip-z-index, 1);\n        background: var(--_tooltip-background);\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        font: var(--media-font,\n          var(--media-font-weight, 400)\n          var(--media-font-size, 13px) /\n          var(--media-text-content-height, var(--media-control-height, 18px))\n          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n        padding: var(--media-tooltip-padding, .35em .7em);\n        border: var(--media-tooltip-border, none);\n        border-radius: var(--media-tooltip-border-radius, 5px);\n        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));\n        white-space: var(--media-tooltip-white-space, nowrap);\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      img, svg {\n        display: inline-block;\n      }\n\n      #arrow {\n        position: absolute;\n        width: 0px;\n        height: 0px;\n        border-style: solid;\n        display: var(--media-tooltip-arrow-display, block);\n      }\n\n      :host(:not([placement])),\n      :host([placement="top"]) {\n        position: absolute;\n        bottom: calc(100% + var(--media-tooltip-distance, 12px));\n        left: 50%;\n        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);\n      }\n      :host(:not([placement])) #arrow,\n      :host([placement="top"]) #arrow {\n        top: 100%;\n        left: 50%;\n        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);\n        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;\n        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);\n      }\n\n      :host([placement="right"]) {\n        position: absolute;\n        left: calc(100% + var(--media-tooltip-distance, 12px));\n        top: 50%;\n        transform: translate(0, -50%);\n      }\n      :host([placement="right"]) #arrow {\n        top: 50%;\n        right: 100%;\n        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;\n        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;\n        transform: translate(0, -50%);\n      }\n\n      :host([placement="bottom"]) {\n        position: absolute;\n        top: calc(100% + var(--media-tooltip-distance, 12px));\n        left: 50%;\n        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);\n      }\n      :host([placement="bottom"]) #arrow {\n        bottom: 100%;\n        left: 50%;\n        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);\n        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;\n        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);\n      }\n\n      :host([placement="left"]) {\n        position: absolute;\n        right: calc(100% + var(--media-tooltip-distance, 12px));\n        top: 50%;\n        transform: translate(0, -50%);\n      }\n      :host([placement="left"]) #arrow {\n        top: 50%;\n        left: 100%;\n        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);\n        border-color: transparent transparent transparent var(--_tooltip-arrow-background);\n        transform: translate(0, -50%);\n      }\n      \n      :host([placement="none"]) #arrow {\n        display: none;\n      }\n    </style>\n    <slot></slot>\n    <div id="arrow"></div>\n  ';
}
class MediaTooltip extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    static get observedAttributes() {
        return [
            Attributes.PLACEMENT,
            Attributes.BOUNDS
        ];
    }
    /**
   * Get or set tooltip placement
   */ get placement() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, Attributes.PLACEMENT);
    }
    set placement(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, Attributes.PLACEMENT, value);
    }
    /**
   * Get or set tooltip container ID selector that will constrain the tooltips
   * horizontal position.
   */ get bounds() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, Attributes.BOUNDS);
    }
    set bounds(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, Attributes.BOUNDS, value);
    }
    constructor(){
        super();
        // Adjusts tooltip position relative to the closest specified container
        // such that it doesn't spill out of the left or right sides. Only applies
        // to 'top' and 'bottom' placed tooltips.
        this.updateXOffset = ()=>{
            var _a;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementVisible"])(this, {
                checkOpacity: false,
                checkVisibilityCSS: false
            })) return;
            const placement = this.placement;
            if (placement === "left" || placement === "right") {
                this.style.removeProperty("--media-tooltip-offset-x");
                return;
            }
            const tooltipStyle = getComputedStyle(this);
            const containingEl = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestComposedNode"])(this, "#" + this.bounds)) != null ? _a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaController"])(this);
            if (!containingEl) return;
            const { x: containerX, width: containerWidth } = containingEl.getBoundingClientRect();
            const { x: tooltipX, width: tooltipWidth } = this.getBoundingClientRect();
            const tooltipRight = tooltipX + tooltipWidth;
            const containerRight = containerX + containerWidth;
            const offsetXVal = tooltipStyle.getPropertyValue("--media-tooltip-offset-x");
            const currOffsetX = offsetXVal ? parseFloat(offsetXVal.replace("px", "")) : 0;
            const marginVal = tooltipStyle.getPropertyValue("--media-tooltip-container-margin");
            const currMargin = marginVal ? parseFloat(marginVal.replace("px", "")) : 0;
            const leftDiff = tooltipX - containerX + currOffsetX - currMargin;
            const rightDiff = tooltipRight - containerRight + currOffsetX + currMargin;
            if (leftDiff < 0) {
                this.style.setProperty("--media-tooltip-offset-x", "".concat(leftDiff, "px"));
                return;
            }
            if (rightDiff > 0) {
                this.style.setProperty("--media-tooltip-offset-x", "".concat(rightDiff, "px"));
                return;
            }
            this.style.removeProperty("--media-tooltip-offset-x");
        };
        if (!this.shadowRoot) {
            this.attachShadow(this.constructor.shadowRootOptions);
            const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
            this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
        }
        this.arrowEl = this.shadowRoot.querySelector("#arrow");
        if (Object.prototype.hasOwnProperty.call(this, "placement")) {
            const placement = this.placement;
            delete this.placement;
            this.placement = placement;
        }
    }
}
MediaTooltip.shadowRootOptions = {
    mode: "open"
};
MediaTooltip.getTemplateHTML = getTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-tooltip")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-tooltip", MediaTooltip);
}
var media_tooltip_default = MediaTooltip;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaChromeButton",
    ()=>MediaChromeButton,
    "default",
    ()=>media_chrome_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _mediaController, _clickListener, _positionTooltip, _keyupListener, _keydownListener, _setupTooltip, setupTooltip_fn;
;
;
;
;
const Attributes = {
    TOOLTIP_PLACEMENT: "tooltipplacement",
    DISABLED: "disabled",
    NO_TOOLTIP: "notooltip"
};
function getTemplateHTML(_attrs) {
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return /*html*/ '\n    <style>\n      :host {\n        position: relative;\n        font: var(--media-font,\n          var(--media-font-weight, bold)\n          var(--media-font-size, 14px) /\n          var(--media-text-content-height, var(--media-control-height, 24px))\n          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));\n        padding: var(--media-button-padding, var(--media-control-padding, 10px));\n        justify-content: var(--media-button-justify-content, center);\n        display: inline-flex;\n        align-items: center;\n        vertical-align: middle;\n        box-sizing: border-box;\n        transition: background .15s linear;\n        pointer-events: auto;\n        cursor: var(--media-cursor, pointer);\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      \n      :host(:focus-visible) {\n        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);\n        outline: 0;\n      }\n      \n      :host(:where(:focus)) {\n        box-shadow: none;\n        outline: 0;\n      }\n\n      :host(:hover) {\n        background: var(--media-control-hover-background, rgba(50 50 70 / .7));\n      }\n\n      svg, img, ::slotted(svg), ::slotted(img) {\n        width: var(--media-button-icon-width);\n        height: var(--media-button-icon-height, var(--media-control-height, 24px));\n        transform: var(--media-button-icon-transform);\n        transition: var(--media-button-icon-transition);\n        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));\n        vertical-align: middle;\n        max-width: 100%;\n        max-height: 100%;\n        min-width: 100%;\n      }\n\n      media-tooltip {\n        \n        max-width: 0;\n        overflow-x: clip;\n        opacity: 0;\n        transition: opacity .3s, max-width 0s 9s;\n      }\n\n      :host(:hover) media-tooltip,\n      :host(:focus-visible) media-tooltip {\n        max-width: 100vw;\n        opacity: 1;\n        transition: opacity .3s;\n      }\n\n      :host([notooltip]) slot[name="tooltip"] {\n        display: none;\n      }\n    </style>\n\n    '.concat(this.getSlotTemplateHTML(_attrs, _props), '\n\n    <slot name="tooltip">\n      <media-tooltip part="tooltip" aria-hidden="true">\n        <template shadowrootmode="').concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shadowRootOptions.mode, '">\n          ').concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getTemplateHTML({}), '\n        </template>\n        <slot name="tooltip-content">\n          ').concat(this.getTooltipContentHTML(_attrs), "\n        </slot>\n      </media-tooltip>\n    </slot>\n  ");
}
function getSlotTemplateHTML(_attrs, _props) {
    return "\n    <slot></slot>\n  ";
}
function getTooltipContentHTML() {
    return "";
}
class MediaChromeButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    static get observedAttributes() {
        return [
            "disabled",
            Attributes.TOOLTIP_PLACEMENT,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER
        ];
    }
    enable() {
        this.addEventListener("click", __privateGet(this, _clickListener));
        this.addEventListener("keydown", __privateGet(this, _keydownListener));
        this.tabIndex = 0;
    }
    disable() {
        this.removeEventListener("click", __privateGet(this, _clickListener));
        this.removeEventListener("keydown", __privateGet(this, _keydownListener));
        this.removeEventListener("keyup", __privateGet(this, _keyupListener));
        this.tabIndex = -1;
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        var _a, _b, _c, _d, _e;
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER) {
            if (oldValue) {
                (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
                __privateSet(this, _mediaController, null);
            }
            if (newValue && this.isConnected) {
                __privateSet(this, _mediaController, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
                (_e = (_d = __privateGet(this, _mediaController)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
            }
        } else if (attrName === "disabled" && newValue !== oldValue) {
            if (newValue == null) {
                this.enable();
            } else {
                this.disable();
            }
        } else if (attrName === Attributes.TOOLTIP_PLACEMENT && this.tooltipEl && newValue !== oldValue) {
            this.tooltipEl.placement = newValue;
        }
        __privateGet(this, _positionTooltip).call(this);
    }
    connectedCallback() {
        var _a, _b, _c;
        const { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, ":host");
        style.setProperty("display", "var(--media-control-display, var(--".concat(this.localName, "-display, inline-flex))"));
        if (!this.hasAttribute("disabled")) {
            this.enable();
        } else {
            this.disable();
        }
        this.setAttribute("role", "button");
        const mediaControllerId = this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER);
        if (mediaControllerId) {
            __privateSet(this, _mediaController, // @ts-ignore
            (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
            (_c = (_b = __privateGet(this, _mediaController)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.whenDefined("media-tooltip").then(()=>__privateMethod(this, _setupTooltip, setupTooltip_fn).call(this));
    }
    disconnectedCallback() {
        var _a, _b;
        this.disable();
        (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet(this, _mediaController, null);
        this.removeEventListener("mouseenter", __privateGet(this, _positionTooltip));
        this.removeEventListener("focus", __privateGet(this, _positionTooltip));
        this.removeEventListener("click", __privateGet(this, _clickListener));
    }
    get keysUsed() {
        return [
            "Enter",
            " "
        ];
    }
    /**
   * Get or set tooltip placement
   */ get tooltipPlacement() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, Attributes.TOOLTIP_PLACEMENT);
    }
    set tooltipPlacement(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, Attributes.TOOLTIP_PLACEMENT, value);
    }
    get mediaController() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER);
    }
    set mediaController(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER, value);
    }
    get disabled() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.DISABLED);
    }
    set disabled(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.DISABLED, value);
    }
    get noTooltip() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.NO_TOOLTIP);
    }
    set noTooltip(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.NO_TOOLTIP, value);
    }
    /**
   * @abstract
   * @argument {Event} e
   */ handleClick(e) {}
    constructor(){
        super();
        // Called when we know the tooltip is ready / defined
        __privateAdd(this, _setupTooltip);
        __privateAdd(this, _mediaController, void 0);
        this.preventClick = false;
        this.tooltipEl = null;
        __privateAdd(this, _clickListener, (e)=>{
            if (!this.preventClick) {
                this.handleClick(e);
            }
            setTimeout(__privateGet(this, _positionTooltip), 0);
        });
        __privateAdd(this, _positionTooltip, ()=>{
            var _a, _b;
            (_b = (_a = this.tooltipEl) == null ? void 0 : _a.updateXOffset) == null ? void 0 : _b.call(_a);
        });
        // NOTE: There are definitely some "false positive" cases with multi-key pressing,
        // but this should be good enough for most use cases.
        __privateAdd(this, _keyupListener, (e)=>{
            const { key } = e;
            if (!this.keysUsed.includes(key)) {
                this.removeEventListener("keyup", __privateGet(this, _keyupListener));
                return;
            }
            if (!this.preventClick) {
                this.handleClick(e);
            }
        });
        __privateAdd(this, _keydownListener, (e)=>{
            const { metaKey, altKey, key } = e;
            if (metaKey || altKey || !this.keysUsed.includes(key)) {
                this.removeEventListener("keyup", __privateGet(this, _keyupListener));
                return;
            }
            this.addEventListener("keyup", __privateGet(this, _keyupListener), {
                once: true
            });
        });
        if (!this.shadowRoot) {
            this.attachShadow(this.constructor.shadowRootOptions);
            const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
            const html = this.constructor.getTemplateHTML(attrs);
            this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(html) : this.shadowRoot.innerHTML = html;
        }
        this.tooltipEl = this.shadowRoot.querySelector("media-tooltip");
    }
}
_mediaController = new WeakMap();
_clickListener = new WeakMap();
_positionTooltip = new WeakMap();
_keyupListener = new WeakMap();
_keydownListener = new WeakMap();
_setupTooltip = new WeakSet();
setupTooltip_fn = function() {
    this.addEventListener("mouseenter", __privateGet(this, _positionTooltip));
    this.addEventListener("focus", __privateGet(this, _positionTooltip));
    this.addEventListener("click", __privateGet(this, _clickListener));
    const initialPlacement = this.tooltipPlacement;
    if (initialPlacement && this.tooltipEl) {
        this.tooltipEl.placement = initialPlacement;
    }
};
MediaChromeButton.shadowRootOptions = {
    mode: "open"
};
MediaChromeButton.getTemplateHTML = getTemplateHTML;
MediaChromeButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaChromeButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-chrome-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-chrome-button", MediaChromeButton);
}
var media_chrome_button_default = MediaChromeButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-airplay-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_airplay_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
;
;
;
;
;
const airplayIcon = '<svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>\n</svg>\n';
function getSlotTemplateHTML(_attrs) {
    return /*html*/ "\n    <style>\n      :host([".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_AIRPLAYING, "]) slot[name=icon] slot:not([name=exit]) {\n        display: none !important;\n      }\n\n      ", "\n      :host(:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_AIRPLAYING, "])) slot[name=icon] slot:not([name=enter]) {\n        display: none !important;\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_AIRPLAYING, "]) slot[name=tooltip-enter],\n      :host(:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_AIRPLAYING, '])) slot[name=tooltip-exit] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="enter">').concat(airplayIcon, '</slot>\n      <slot name="exit">').concat(airplayIcon, "</slot>\n    </slot>\n  ");
}
function getTooltipContentHTML() {
    return /*html*/ '\n    <slot name="tooltip-enter">'.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("start airplay"), '</slot>\n    <slot name="tooltip-exit">').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("stop airplay"), "</slot>\n  ");
}
const updateAriaLabel = (el)=>{
    const label = el.mediaIsAirplaying ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("stop airplay") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("start airplay");
    el.setAttribute("aria-label", label);
};
class MediaAirplayButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_AIRPLAYING,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AIRPLAY_UNAVAILABLE
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        updateAriaLabel(this);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_AIRPLAYING) {
            updateAriaLabel(this);
        }
    }
    /**
   * Are we currently airplaying
   */ get mediaIsAirplaying() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_AIRPLAYING);
    }
    set mediaIsAirplaying(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_AIRPLAYING, value);
    }
    /**
   * Airplay unavailability state
   */ get mediaAirplayUnavailable() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AIRPLAY_UNAVAILABLE);
    }
    set mediaAirplayUnavailable(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AIRPLAY_UNAVAILABLE, value);
    }
    handleClick() {
        const evt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_AIRPLAY_REQUEST, {
            composed: true,
            bubbles: true
        });
        this.dispatchEvent(evt);
    }
}
MediaAirplayButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaAirplayButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-airplay-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-airplay-button", MediaAirplayButton);
}
var media_airplay_button_default = MediaAirplayButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-captions-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaCaptionsButton",
    ()=>MediaCaptionsButton,
    "default",
    ()=>media_captions_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/captions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
;
;
;
;
;
const ccIconOn = '<svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>\n</svg>';
const ccIconOff = '<svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>\n</svg>';
function getSlotTemplateHTML(_attrs) {
    return /*html*/ '\n    <style>\n      :host([aria-checked="true"]) slot[name=off] {\n        display: none !important;\n      }\n\n      \n      :host(:not([aria-checked="true"])) slot[name=on] {\n        display: none !important;\n      }\n\n      :host([aria-checked="true"]) slot[name=tooltip-enable],\n      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="on">'.concat(ccIconOn, '</slot>\n      <slot name="off">').concat(ccIconOff, "</slot>\n    </slot>\n  ");
}
function getTooltipContentHTML() {
    return /*html*/ '\n    <slot name="tooltip-enable">'.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Enable captions"), '</slot>\n    <slot name="tooltip-disable">').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Disable captions"), "</slot>\n  ");
}
const updateAriaChecked = (el)=>{
    el.setAttribute("aria-checked", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areSubsOn"])(el).toString());
};
class MediaCaptionsButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_LIST,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("role", "switch");
        this.setAttribute("aria-label", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("closed captions"));
        updateAriaChecked(this);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING) {
            updateAriaChecked(this);
        }
    }
    /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */ get mediaSubtitlesList() {
        return getSubtitlesListAttr(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_LIST);
    }
    set mediaSubtitlesList(list) {
        setSubtitlesListAttr(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_LIST, list);
    }
    /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */ get mediaSubtitlesShowing() {
        return getSubtitlesListAttr(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING);
    }
    set mediaSubtitlesShowing(list) {
        setSubtitlesListAttr(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING, list);
    }
    handleClick() {
        this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_TOGGLE_SUBTITLES_REQUEST, {
            composed: true,
            bubbles: true
        }));
    }
}
MediaCaptionsButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaCaptionsButton.getTooltipContentHTML = getTooltipContentHTML;
const getSubtitlesListAttr = (el, attrName)=>{
    const attrVal = el.getAttribute(attrName);
    return attrVal ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTextTracksStr"])(attrVal) : [];
};
const setSubtitlesListAttr = (el, attrName, list)=>{
    if (!(list == null ? void 0 : list.length)) {
        el.removeAttribute(attrName);
        return;
    }
    const newValStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyTextTrackList"])(list);
    const oldVal = el.getAttribute(attrName);
    if (oldVal === newValStr) return;
    el.setAttribute(attrName, newValStr);
};
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-captions-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-captions-button", MediaCaptionsButton);
}
var media_captions_button_default = MediaCaptionsButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-cast-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_cast_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
;
;
;
;
;
const enterIcon = '<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>';
const exitIcon = '<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';
function getSlotTemplateHTML(_attrs) {
    return /*html*/ "\n    <style>\n      :host([".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_CASTING, "]) slot[name=icon] slot:not([name=exit]) {\n        display: none !important;\n      }\n\n      ", "\n      :host(:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_CASTING, "])) slot[name=icon] slot:not([name=enter]) {\n        display: none !important;\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_CASTING, "]) slot[name=tooltip-enter],\n      :host(:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_CASTING, '])) slot[name=tooltip-exit] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="enter">').concat(enterIcon, '</slot>\n      <slot name="exit">').concat(exitIcon, "</slot>\n    </slot>\n  ");
}
function getTooltipContentHTML() {
    return /*html*/ '\n    <slot name="tooltip-enter">'.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Start casting"), '</slot>\n    <slot name="tooltip-exit">').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Stop casting"), "</slot>\n  ");
}
const updateAriaLabel = (el)=>{
    const label = el.mediaIsCasting ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("stop casting") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("start casting");
    el.setAttribute("aria-label", label);
};
class MediaCastButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_CASTING,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CAST_UNAVAILABLE
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        updateAriaLabel(this);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_CASTING) {
            updateAriaLabel(this);
        }
    }
    /**
   * @type {boolean} Are we currently casting
   */ get mediaIsCasting() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_CASTING);
    }
    set mediaIsCasting(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_CASTING, value);
    }
    /**
   * @type {string | undefined} Cast unavailability state
   */ get mediaCastUnavailable() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CAST_UNAVAILABLE);
    }
    set mediaCastUnavailable(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CAST_UNAVAILABLE, value);
    }
    handleClick() {
        const eventName = this.mediaIsCasting ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_EXIT_CAST_REQUEST : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_ENTER_CAST_REQUEST;
        this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(eventName, {
            composed: true,
            bubbles: true
        }));
    }
}
MediaCastButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaCastButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-cast-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-cast-button", MediaCastButton);
}
var media_cast_button_default = MediaCastButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-dialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "MediaChromeDialog",
    ()=>MediaChromeDialog,
    "default",
    ()=>media_chrome_dialog_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _isInit, _previouslyFocused, _invokerElement, _init, init_fn, _handleOpen, handleOpen_fn, _handleClosed, handleClosed_fn, _handleInvoke, handleInvoke_fn, _handleFocusOut, handleFocusOut_fn, _handleKeyDown, handleKeyDown_fn;
;
;
function getTemplateHTML(_attrs) {
    return /*html*/ "\n    <style>\n      :host {\n        font: var(--media-font,\n          var(--media-font-weight, normal)\n          var(--media-font-size, 14px) /\n          var(--media-text-content-height, var(--media-control-height, 24px))\n          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        display: var(--media-dialog-display, inline-flex);\n        justify-content: center;\n        align-items: center;\n        \n        transition-behavior: allow-discrete;\n        visibility: hidden;\n        opacity: 0;\n        transform: translateY(2px) scale(.99);\n        pointer-events: none;\n      }\n\n      :host([open]) {\n        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;\n        visibility: visible;\n        opacity: 1;\n        transform: translateY(0) scale(1);\n        pointer-events: auto;\n      }\n\n      #content {\n        display: flex;\n        position: relative;\n        box-sizing: border-box;\n        width: min(320px, 100%);\n        word-wrap: break-word;\n        max-height: 100%;\n        overflow: auto;\n        text-align: center;\n        line-height: 1.4;\n      }\n    </style>\n    ".concat(this.getSlotTemplateHTML(_attrs), "\n  ");
}
function getSlotTemplateHTML(_attrs) {
    return '\n    <slot id="content"></slot>\n  ';
}
const Attributes = {
    OPEN: "open",
    ANCHOR: "anchor"
};
class MediaChromeDialog extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    static get observedAttributes() {
        return [
            Attributes.OPEN,
            Attributes.ANCHOR
        ];
    }
    get open() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.OPEN);
    }
    set open(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.OPEN, value);
    }
    handleEvent(event) {
        switch(event.type){
            case "invoke":
                __privateMethod(this, _handleInvoke, handleInvoke_fn).call(this, event);
                break;
            case "focusout":
                __privateMethod(this, _handleFocusOut, handleFocusOut_fn).call(this, event);
                break;
            case "keydown":
                __privateMethod(this, _handleKeyDown, handleKeyDown_fn).call(this, event);
                break;
        }
    }
    connectedCallback() {
        __privateMethod(this, _init, init_fn).call(this);
        if (!this.role) {
            this.role = "dialog";
        }
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        __privateMethod(this, _init, init_fn).call(this);
        if (attrName === Attributes.OPEN && newValue !== oldValue) {
            if (this.open) {
                __privateMethod(this, _handleOpen, handleOpen_fn).call(this);
            } else {
                __privateMethod(this, _handleClosed, handleClosed_fn).call(this);
            }
        }
    }
    focus() {
        __privateSet(this, _previouslyFocused, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])());
        const focusCancelled = !this.dispatchEvent(new Event("focus", {
            composed: true,
            cancelable: true
        }));
        const focusInCancelled = !this.dispatchEvent(new Event("focusin", {
            composed: true,
            bubbles: true,
            cancelable: true
        }));
        if (focusCancelled || focusInCancelled) return;
        const focusable = this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');
        focusable == null ? void 0 : focusable.focus();
    }
    get keysUsed() {
        return [
            "Escape",
            "Tab"
        ];
    }
    constructor(){
        super();
        __privateAdd(this, _init);
        __privateAdd(this, _handleOpen);
        __privateAdd(this, _handleClosed);
        __privateAdd(this, _handleInvoke);
        __privateAdd(this, _handleFocusOut);
        __privateAdd(this, _handleKeyDown);
        __privateAdd(this, _isInit, false);
        __privateAdd(this, _previouslyFocused, null);
        __privateAdd(this, _invokerElement, null);
        this.addEventListener("invoke", this);
        this.addEventListener("focusout", this);
        this.addEventListener("keydown", this);
    }
}
_isInit = new WeakMap();
_previouslyFocused = new WeakMap();
_invokerElement = new WeakMap();
_init = new WeakSet();
init_fn = function() {
    if (__privateGet(this, _isInit)) return;
    __privateSet(this, _isInit, true);
    if (!this.shadowRoot) {
        this.attachShadow(this.constructor.shadowRootOptions);
        const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
        this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
        queueMicrotask(()=>{
            const { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, ":host");
            style.setProperty("transition", "display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in");
        });
    }
};
_handleOpen = new WeakSet();
handleOpen_fn = function() {
    var _a;
    (_a = __privateGet(this, _invokerElement)) == null ? void 0 : _a.setAttribute("aria-expanded", "true");
    this.dispatchEvent(new Event("open", {
        composed: true,
        bubbles: true
    }));
    this.addEventListener("transitionend", ()=>this.focus(), {
        once: true
    });
};
_handleClosed = new WeakSet();
handleClosed_fn = function() {
    var _a;
    (_a = __privateGet(this, _invokerElement)) == null ? void 0 : _a.setAttribute("aria-expanded", "false");
    this.dispatchEvent(new Event("close", {
        composed: true,
        bubbles: true
    }));
};
_handleInvoke = new WeakSet();
handleInvoke_fn = function(event) {
    __privateSet(this, _invokerElement, event.relatedTarget);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsComposedNode"])(this, event.relatedTarget)) {
        this.open = !this.open;
    }
};
_handleFocusOut = new WeakSet();
handleFocusOut_fn = function(event) {
    var _a;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsComposedNode"])(this, event.relatedTarget)) {
        (_a = __privateGet(this, _previouslyFocused)) == null ? void 0 : _a.focus();
        if (__privateGet(this, _invokerElement) && __privateGet(this, _invokerElement) !== event.relatedTarget && this.open) {
            this.open = false;
        }
    }
};
_handleKeyDown = new WeakSet();
handleKeyDown_fn = function(event) {
    var _a, _b, _c, _d, _e;
    const { key, ctrlKey, altKey, metaKey } = event;
    if (ctrlKey || altKey || metaKey) {
        return;
    }
    if (!this.keysUsed.includes(key)) {
        return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (key === "Tab") {
        if (event.shiftKey) {
            (_b = (_a = this.previousElementSibling) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
        } else {
            (_d = (_c = this.nextElementSibling) == null ? void 0 : _c.focus) == null ? void 0 : _d.call(_c);
        }
        this.blur();
    } else if (key === "Escape") {
        (_e = __privateGet(this, _previouslyFocused)) == null ? void 0 : _e.focus();
        this.open = false;
    }
};
MediaChromeDialog.shadowRootOptions = {
    mode: "open"
};
MediaChromeDialog.getTemplateHTML = getTemplateHTML;
MediaChromeDialog.getSlotTemplateHTML = getSlotTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-chrome-dialog")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-chrome-dialog", MediaChromeDialog);
}
var media_chrome_dialog_default = MediaChromeDialog;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-range.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaChromeRange",
    ()=>MediaChromeRange,
    "default",
    ()=>media_chrome_range_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/resize-observer.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _mediaController, _isInputTarget, _startpoint, _endpoint, _cssRules, _segments, _onFocusIn, _onFocusOut, _updateComputedStyles, _updateActiveSegment, updateActiveSegment_fn, _enableUserEvents, enableUserEvents_fn, _disableUserEvents, disableUserEvents_fn, _handlePointerDown, handlePointerDown_fn, _handlePointerEnter, handlePointerEnter_fn, _handlePointerUp, handlePointerUp_fn, _handlePointerLeave, handlePointerLeave_fn, _handlePointerMove, handlePointerMove_fn;
;
;
;
;
function getTemplateHTML(_attrs) {
    return '\n    <style>\n      :host {\n        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));\n        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));\n\n        box-shadow: var(--_focus-visible-box-shadow, none);\n        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));\n        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));\n        display: inline-flex;\n        align-items: center;\n        \n        vertical-align: middle;\n        box-sizing: border-box;\n        position: relative;\n        width: 100px;\n        transition: background .15s linear;\n        cursor: var(--media-cursor, pointer);\n        pointer-events: auto;\n        touch-action: none; \n      }\n\n      \n      input[type=range]:focus {\n        outline: 0;\n      }\n      input[type=range]:focus::-webkit-slider-runnable-track {\n        outline: 0;\n      }\n\n      :host(:hover) {\n        background: var(--media-control-hover-background, rgb(50 50 70 / .7));\n      }\n\n      #leftgap {\n        padding-left: var(--media-range-padding-left, var(--_media-range-padding));\n      }\n\n      #rightgap {\n        padding-right: var(--media-range-padding-right, var(--_media-range-padding));\n      }\n\n      #startpoint,\n      #endpoint {\n        position: absolute;\n      }\n\n      #endpoint {\n        right: 0;\n      }\n\n      #container {\n        \n        width: var(--media-range-track-width, 100%);\n        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));\n        position: relative;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        min-width: 40px;\n      }\n\n      #range {\n        \n        display: var(--media-time-range-hover-display, block);\n        bottom: var(--media-time-range-hover-bottom, -7px);\n        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));\n        width: 100%;\n        position: absolute;\n        cursor: var(--media-cursor, pointer);\n\n        -webkit-appearance: none; \n        -webkit-tap-highlight-color: transparent;\n        background: transparent; \n        margin: 0;\n        z-index: 1;\n      }\n\n      @media (hover: hover) {\n        #range {\n          bottom: var(--media-time-range-hover-bottom, -5px);\n          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));\n        }\n      }\n\n      \n      \n      #range::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        background: transparent;\n        width: .1px;\n        height: .1px;\n      }\n\n      \n      #range::-moz-range-thumb {\n        background: transparent;\n        border: transparent;\n        width: .1px;\n        height: .1px;\n      }\n\n      #appearance {\n        height: var(--media-range-track-height, 4px);\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        width: 100%;\n        position: absolute;\n        \n        will-change: transform;\n      }\n\n      #track {\n        background: var(--media-range-track-background, rgb(255 255 255 / .2));\n        border-radius: var(--media-range-track-border-radius, 1px);\n        border: var(--media-range-track-border, none);\n        outline: var(--media-range-track-outline);\n        outline-offset: var(--media-range-track-outline-offset);\n        backdrop-filter: var(--media-range-track-backdrop-filter);\n        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);\n        box-shadow: var(--media-range-track-box-shadow, none);\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      #progress,\n      #pointer {\n        position: absolute;\n        height: 100%;\n        will-change: width;\n      }\n\n      #progress {\n        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));\n        transition: var(--media-range-track-transition);\n      }\n\n      #pointer {\n        background: var(--media-range-track-pointer-background);\n        border-right: var(--media-range-track-pointer-border-right);\n        transition: visibility .25s, opacity .25s;\n        visibility: hidden;\n        opacity: 0;\n      }\n\n      @media (hover: hover) {\n        :host(:hover) #pointer {\n          transition: visibility .5s, opacity .5s;\n          visibility: visible;\n          opacity: 1;\n        }\n      }\n\n      #thumb,\n      ::slotted([slot=thumb]) {\n        width: var(--media-range-thumb-width, 10px);\n        height: var(--media-range-thumb-height, 10px);\n        transition: var(--media-range-thumb-transition);\n        transform: var(--media-range-thumb-transform, none);\n        opacity: var(--media-range-thumb-opacity, 1);\n        translate: -50%;\n        position: absolute;\n        left: 0;\n        cursor: var(--media-cursor, pointer);\n      }\n\n      #thumb {\n        border-radius: var(--media-range-thumb-border-radius, 10px);\n        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));\n        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);\n        border: var(--media-range-thumb-border, none);\n      }\n\n      :host([disabled]) #thumb {\n        background-color: #777;\n      }\n\n      .segments #appearance {\n        height: var(--media-range-segment-hover-height, 7px);\n      }\n\n      #track {\n        clip-path: url(#segments-clipping);\n      }\n\n      #segments {\n        --segments-gap: var(--media-range-segments-gap, 2px);\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n\n      #segments-clipping {\n        transform: translateX(calc(var(--segments-gap) / 2));\n      }\n\n      #segments-clipping:empty {\n        display: none;\n      }\n\n      #segments-clipping rect {\n        height: var(--media-range-track-height, 4px);\n        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);\n        transition: var(--media-range-segment-transition, transform .1s ease-in-out);\n        transform: var(--media-range-segment-transform, scaleY(1));\n        transform-origin: center;\n      }\n    </style>\n    <div id="leftgap"></div>\n    <div id="container">\n      <div id="startpoint"></div>\n      <div id="endpoint"></div>\n      <div id="appearance">\n        <div id="track" part="track">\n          <div id="pointer"></div>\n          <div id="progress" part="progress"></div>\n        </div>\n        <slot name="thumb">\n          <div id="thumb" part="thumb"></div>\n        </slot>\n        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>\n      </div>\n      <input id="range" type="range" min="0" max="1" step="any" value="0">\n    </div>\n    <div id="rightgap"></div>\n  ';
}
class MediaChromeRange extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    static get observedAttributes() {
        return [
            "disabled",
            "aria-disabled",
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        var _a, _b, _c, _d, _e;
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER) {
            if (oldValue) {
                (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
                __privateSet(this, _mediaController, null);
            }
            if (newValue && this.isConnected) {
                __privateSet(this, _mediaController, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
                (_e = (_d = __privateGet(this, _mediaController)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
            }
        } else if (attrName === "disabled" || attrName === "aria-disabled" && oldValue !== newValue) {
            if (newValue == null) {
                this.range.removeAttribute(attrName);
                __privateMethod(this, _enableUserEvents, enableUserEvents_fn).call(this);
            } else {
                this.range.setAttribute(attrName, newValue);
                __privateMethod(this, _disableUserEvents, disableUserEvents_fn).call(this);
            }
        }
    }
    connectedCallback() {
        var _a, _b, _c;
        const { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, ":host");
        style.setProperty("display", "var(--media-control-display, var(--".concat(this.localName, "-display, inline-flex))"));
        __privateGet(this, _cssRules).pointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, "#pointer");
        __privateGet(this, _cssRules).progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, "#progress");
        __privateGet(this, _cssRules).thumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, '#thumb, ::slotted([slot="thumb"])');
        __privateGet(this, _cssRules).activeSegment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, "#segments-clipping rect:nth-child(0)");
        const mediaControllerId = this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER);
        if (mediaControllerId) {
            __privateSet(this, _mediaController, (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
            (_c = (_b = __privateGet(this, _mediaController)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
        }
        this.updateBar();
        this.shadowRoot.addEventListener("focusin", __privateGet(this, _onFocusIn));
        this.shadowRoot.addEventListener("focusout", __privateGet(this, _onFocusOut));
        __privateMethod(this, _enableUserEvents, enableUserEvents_fn).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeResize"])(this.container, __privateGet(this, _updateComputedStyles));
    }
    disconnectedCallback() {
        var _a, _b;
        __privateMethod(this, _disableUserEvents, disableUserEvents_fn).call(this);
        (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet(this, _mediaController, null);
        this.shadowRoot.removeEventListener("focusin", __privateGet(this, _onFocusIn));
        this.shadowRoot.removeEventListener("focusout", __privateGet(this, _onFocusOut));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unobserveResize"])(this.container, __privateGet(this, _updateComputedStyles));
    }
    updatePointerBar(evt) {
        var _a;
        (_a = __privateGet(this, _cssRules).pointer) == null ? void 0 : _a.style.setProperty("width", "".concat(this.getPointerRatio(evt) * 100, "%"));
    }
    updateBar() {
        var _a, _b;
        const rangePercent = this.range.valueAsNumber * 100;
        (_a = __privateGet(this, _cssRules).progress) == null ? void 0 : _a.style.setProperty("width", "".concat(rangePercent, "%"));
        (_b = __privateGet(this, _cssRules).thumb) == null ? void 0 : _b.style.setProperty("left", "".concat(rangePercent, "%"));
    }
    updateSegments(segments) {
        const clipping = this.shadowRoot.querySelector("#segments-clipping");
        clipping.textContent = "";
        this.container.classList.toggle("segments", !!(segments == null ? void 0 : segments.length));
        if (!(segments == null ? void 0 : segments.length)) return;
        const normalized = [
            .../* @__PURE__ */ new Set([
                +this.range.min,
                ...segments.flatMap((s)=>[
                        s.start,
                        s.end
                    ]),
                +this.range.max
            ])
        ];
        __privateSet(this, _segments, [
            ...normalized
        ]);
        const lastMarker = normalized.pop();
        for (const [i, marker] of normalized.entries()){
            const [isFirst, isLast] = [
                i === 0,
                i === normalized.length - 1
            ];
            const x = isFirst ? "calc(var(--segments-gap) / -1)" : "".concat(marker * 100, "%");
            const x2 = isLast ? lastMarker : normalized[i + 1];
            const width = "calc(".concat((x2 - marker) * 100, "%").concat(isFirst || isLast ? "" : " - var(--segments-gap)", ")");
            const segmentEl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"].createElementNS("http://www.w3.org/2000/svg", "rect");
            const cssRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, "#segments-clipping rect:nth-child(".concat(i + 1, ")"));
            cssRule.style.setProperty("x", x);
            cssRule.style.setProperty("width", width);
            clipping.append(segmentEl);
        }
    }
    getPointerRatio(evt) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPointProgressOnLine"])(evt.clientX, evt.clientY, __privateGet(this, _startpoint).getBoundingClientRect(), __privateGet(this, _endpoint).getBoundingClientRect());
    }
    get dragging() {
        return this.hasAttribute("dragging");
    }
    handleEvent(evt) {
        switch(evt.type){
            case "pointermove":
                __privateMethod(this, _handlePointerMove, handlePointerMove_fn).call(this, evt);
                break;
            case "input":
                this.updateBar();
                break;
            case "pointerenter":
                __privateMethod(this, _handlePointerEnter, handlePointerEnter_fn).call(this, evt);
                break;
            case "pointerdown":
                __privateMethod(this, _handlePointerDown, handlePointerDown_fn).call(this, evt);
                break;
            case "pointerup":
                __privateMethod(this, _handlePointerUp, handlePointerUp_fn).call(this);
                break;
            case "pointerleave":
                __privateMethod(this, _handlePointerLeave, handlePointerLeave_fn).call(this);
                break;
        }
    }
    get keysUsed() {
        return [
            "ArrowUp",
            "ArrowRight",
            "ArrowDown",
            "ArrowLeft"
        ];
    }
    constructor(){
        super();
        __privateAdd(this, _updateActiveSegment);
        __privateAdd(this, _enableUserEvents);
        __privateAdd(this, _disableUserEvents);
        __privateAdd(this, _handlePointerDown);
        __privateAdd(this, _handlePointerEnter);
        __privateAdd(this, _handlePointerUp);
        __privateAdd(this, _handlePointerLeave);
        __privateAdd(this, _handlePointerMove);
        __privateAdd(this, _mediaController, void 0);
        __privateAdd(this, _isInputTarget, void 0);
        __privateAdd(this, _startpoint, void 0);
        __privateAdd(this, _endpoint, void 0);
        __privateAdd(this, _cssRules, {});
        __privateAdd(this, _segments, []);
        __privateAdd(this, _onFocusIn, ()=>{
            if (this.range.matches(":focus-visible")) {
                const { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, ":host");
                style.setProperty("--_focus-visible-box-shadow", "var(--_focus-box-shadow)");
            }
        });
        __privateAdd(this, _onFocusOut, ()=>{
            const { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, ":host");
            style.removeProperty("--_focus-visible-box-shadow");
        });
        __privateAdd(this, _updateComputedStyles, ()=>{
            const clipping = this.shadowRoot.querySelector("#segments-clipping");
            if (clipping) clipping.parentNode.append(clipping);
        });
        if (!this.shadowRoot) {
            this.attachShadow(this.constructor.shadowRootOptions);
            const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
            const html = this.constructor.getTemplateHTML(attrs);
            this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(html) : this.shadowRoot.innerHTML = html;
        }
        this.container = this.shadowRoot.querySelector("#container");
        __privateSet(this, _startpoint, this.shadowRoot.querySelector("#startpoint"));
        __privateSet(this, _endpoint, this.shadowRoot.querySelector("#endpoint"));
        this.range = this.shadowRoot.querySelector("#range");
        this.appearance = this.shadowRoot.querySelector("#appearance");
    }
}
_mediaController = new WeakMap();
_isInputTarget = new WeakMap();
_startpoint = new WeakMap();
_endpoint = new WeakMap();
_cssRules = new WeakMap();
_segments = new WeakMap();
_onFocusIn = new WeakMap();
_onFocusOut = new WeakMap();
_updateComputedStyles = new WeakMap();
_updateActiveSegment = new WeakSet();
updateActiveSegment_fn = function(evt) {
    const rule = __privateGet(this, _cssRules).activeSegment;
    if (!rule) return;
    const pointerRatio = this.getPointerRatio(evt);
    const segmentIndex = __privateGet(this, _segments).findIndex((start, i, arr)=>{
        const end = arr[i + 1];
        return end != null && pointerRatio >= start && pointerRatio <= end;
    });
    const selectorText = "#segments-clipping rect:nth-child(".concat(segmentIndex + 1, ")");
    if (rule.selectorText != selectorText || !rule.style.transform) {
        rule.selectorText = selectorText;
        rule.style.setProperty("transform", "var(--media-range-segment-hover-transform, scaleY(2))");
    }
};
_enableUserEvents = new WeakSet();
enableUserEvents_fn = function() {
    if (this.hasAttribute("disabled")) return;
    this.addEventListener("input", this);
    this.addEventListener("pointerdown", this);
    this.addEventListener("pointerenter", this);
};
_disableUserEvents = new WeakSet();
disableUserEvents_fn = function() {
    var _a, _b;
    this.removeEventListener("input", this);
    this.removeEventListener("pointerdown", this);
    this.removeEventListener("pointerenter", this);
    (_a = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].window) == null ? void 0 : _a.removeEventListener("pointerup", this);
    (_b = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].window) == null ? void 0 : _b.removeEventListener("pointermove", this);
};
_handlePointerDown = new WeakSet();
handlePointerDown_fn = function(evt) {
    var _a;
    __privateSet(this, _isInputTarget, evt.composedPath().includes(this.range));
    (_a = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].window) == null ? void 0 : _a.addEventListener("pointerup", this);
};
_handlePointerEnter = new WeakSet();
handlePointerEnter_fn = function(evt) {
    var _a;
    if (evt.pointerType !== "mouse") __privateMethod(this, _handlePointerDown, handlePointerDown_fn).call(this, evt);
    this.addEventListener("pointerleave", this);
    (_a = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].window) == null ? void 0 : _a.addEventListener("pointermove", this);
};
_handlePointerUp = new WeakSet();
handlePointerUp_fn = function() {
    var _a;
    (_a = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].window) == null ? void 0 : _a.removeEventListener("pointerup", this);
    this.toggleAttribute("dragging", false);
    this.range.disabled = this.hasAttribute("disabled");
};
_handlePointerLeave = new WeakSet();
handlePointerLeave_fn = function() {
    var _a, _b;
    this.removeEventListener("pointerleave", this);
    (_a = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].window) == null ? void 0 : _a.removeEventListener("pointermove", this);
    this.toggleAttribute("dragging", false);
    this.range.disabled = this.hasAttribute("disabled");
    (_b = __privateGet(this, _cssRules).activeSegment) == null ? void 0 : _b.style.removeProperty("transform");
};
_handlePointerMove = new WeakSet();
handlePointerMove_fn = function(evt) {
    this.toggleAttribute("dragging", evt.buttons === 1 || evt.pointerType !== "mouse");
    this.updatePointerBar(evt);
    __privateMethod(this, _updateActiveSegment, updateActiveSegment_fn).call(this, evt);
    if (this.dragging && (evt.pointerType !== "mouse" || !__privateGet(this, _isInputTarget))) {
        this.range.disabled = true;
        this.range.valueAsNumber = this.getPointerRatio(evt);
        this.range.dispatchEvent(new Event("input", {
            bubbles: true,
            composed: true
        }));
    }
};
MediaChromeRange.shadowRootOptions = {
    mode: "open"
};
MediaChromeRange.getTemplateHTML = getTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-chrome-range")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-chrome-range", MediaChromeRange);
}
var media_chrome_range_default = MediaChromeRange;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-control-bar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_control_bar_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _mediaController;
;
;
;
function getTemplateHTML(_attrs) {
    return '\n    <style>\n      :host {\n        \n        box-sizing: border-box;\n        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        --media-loading-indicator-icon-height: 44px;\n      }\n\n      ::slotted(media-time-range),\n      ::slotted(media-volume-range) {\n        min-height: 100%;\n      }\n\n      ::slotted(media-time-range),\n      ::slotted(media-clip-selector) {\n        flex-grow: 1;\n      }\n\n      ::slotted([role="menu"]) {\n        position: absolute;\n      }\n    </style>\n\n    <slot></slot>\n  ';
}
class MediaControlBar extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    static get observedAttributes() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        var _a, _b, _c, _d, _e;
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER) {
            if (oldValue) {
                (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
                __privateSet(this, _mediaController, null);
            }
            if (newValue && this.isConnected) {
                __privateSet(this, _mediaController, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
                (_e = (_d = __privateGet(this, _mediaController)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
            }
        }
    }
    connectedCallback() {
        var _a, _b, _c;
        const mediaControllerId = this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER);
        if (mediaControllerId) {
            __privateSet(this, _mediaController, (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
            (_c = (_b = __privateGet(this, _mediaController)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
        }
    }
    disconnectedCallback() {
        var _a, _b;
        (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet(this, _mediaController, null);
    }
    constructor(){
        super();
        __privateAdd(this, _mediaController, void 0);
        if (!this.shadowRoot) {
            this.attachShadow(this.constructor.shadowRootOptions);
            const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
            this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
        }
    }
}
_mediaController = new WeakMap();
MediaControlBar.shadowRootOptions = {
    mode: "open"
};
MediaControlBar.getTemplateHTML = getTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-control-bar")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-control-bar", MediaControlBar);
}
var media_control_bar_default = MediaControlBar;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-text-display.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaTextDisplay",
    ()=>MediaTextDisplay,
    "default",
    ()=>media_text_display_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _mediaController;
;
;
;
function getTemplateHTML(_attrs) {
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return /*html*/ "\n    <style>\n      :host {\n        font: var(--media-font,\n          var(--media-font-weight, normal)\n          var(--media-font-size, 14px) /\n          var(--media-text-content-height, var(--media-control-height, 24px))\n          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));\n        padding: var(--media-control-padding, 10px);\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        vertical-align: middle;\n        box-sizing: border-box;\n        text-align: center;\n        pointer-events: auto;\n      }\n\n      \n      :host(:focus-visible) {\n        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);\n        outline: 0;\n      }\n\n      \n      :host(:where(:focus)) {\n        box-shadow: none;\n        outline: 0;\n      }\n    </style>\n\n    ".concat(this.getSlotTemplateHTML(_attrs, _props), "\n  ");
}
function getSlotTemplateHTML(_attrs, _props) {
    return "\n    <slot></slot>\n  ";
}
class MediaTextDisplay extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    static get observedAttributes() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        var _a, _b, _c, _d, _e;
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER) {
            if (oldValue) {
                (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
                __privateSet(this, _mediaController, null);
            }
            if (newValue && this.isConnected) {
                __privateSet(this, _mediaController, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
                (_e = (_d = __privateGet(this, _mediaController)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
            }
        }
    }
    connectedCallback() {
        var _a, _b, _c;
        const { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, ":host");
        style.setProperty("display", "var(--media-control-display, var(--".concat(this.localName, "-display, inline-flex))"));
        const mediaControllerId = this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER);
        if (mediaControllerId) {
            __privateSet(this, _mediaController, (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
            (_c = (_b = __privateGet(this, _mediaController)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
        }
    }
    disconnectedCallback() {
        var _a, _b;
        (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet(this, _mediaController, null);
    }
    constructor(){
        super();
        __privateAdd(this, _mediaController, void 0);
        if (!this.shadowRoot) {
            this.attachShadow(this.constructor.shadowRootOptions);
            const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
            this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
        }
    }
}
_mediaController = new WeakMap();
MediaTextDisplay.shadowRootOptions = {
    mode: "open"
};
MediaTextDisplay.getTemplateHTML = getTemplateHTML;
MediaTextDisplay.getSlotTemplateHTML = getSlotTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-text-display")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-text-display", MediaTextDisplay);
}
var media_text_display_default = MediaTextDisplay;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-duration-display.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_duration_display_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$text$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-text-display.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _slot;
;
;
;
;
;
function getSlotTemplateHTML(_attrs, props) {
    return /*html*/ "\n    <slot>".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(props.mediaDuration), "</slot>\n  ");
}
class MediaDurationDisplay extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$text$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaTextDisplay"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_DURATION
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_DURATION) {
            __privateGet(this, _slot).textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(+newValue);
        }
        super.attributeChangedCallback(attrName, oldValue, newValue);
    }
    /**
   * @type {number | undefined} In seconds
   */ get mediaDuration() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_DURATION);
    }
    set mediaDuration(time) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_DURATION, time);
    }
    constructor(){
        var _a;
        super();
        __privateAdd(this, _slot, void 0);
        __privateSet(this, _slot, this.shadowRoot.querySelector("slot"));
        __privateGet(this, _slot).textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])((_a = this.mediaDuration) != null ? _a : 0);
    }
}
_slot = new WeakMap();
MediaDurationDisplay.getSlotTemplateHTML = getSlotTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-duration-display")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-duration-display", MediaDurationDisplay);
}
var media_duration_display_default = MediaDurationDisplay;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/labels/labels.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatError",
    ()=>formatError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
;
const defaultErrorTitles = {
    2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Network Error"),
    3: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Decode Error"),
    4: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Source Not Supported"),
    5: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Encryption Error")
};
const defaultErrorMessages = {
    2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("A network error caused the media download to fail."),
    3: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),
    4: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("An unsupported error occurred. The server or network failed, or your browser does not support this format."),
    5: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("The media is encrypted and there are no keys to decrypt it.")
};
const formatError = (error)=>{
    var _a, _b;
    if (error.code === 1) return null;
    return {
        title: (_a = defaultErrorTitles[error.code]) != null ? _a : "Error ".concat(error.code),
        message: (_b = defaultErrorMessages[error.code]) != null ? _b : error.message
    };
};
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-error-dialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaErrorDialog",
    ()=>MediaErrorDialog,
    "default",
    ()=>media_error_dialog_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$labels$2f$labels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/labels/labels.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _mediaError;
;
;
;
;
;
function getSlotTemplateHTML(attrs) {
    return /*html*/ '\n    <style>\n      :host {\n        background: rgb(20 20 30 / .8);\n      }\n\n      #content {\n        display: block;\n        padding: 1.2em 1.5em;\n      }\n\n      h3,\n      p {\n        margin-block: 0 .3em;\n      }\n    </style>\n    <slot name="error-'.concat(attrs.mediaerrorcode, '" id="content">\n      ').concat(formatErrorMessage({
        code: +attrs.mediaerrorcode,
        message: attrs.mediaerrormessage
    }), "\n    </slot>\n  ");
}
function shouldOpenErrorDialog(error) {
    return error.code && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$labels$2f$labels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatError"])(error) !== null;
}
function formatErrorMessage(error) {
    var _a;
    const { title, message } = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$labels$2f$labels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatError"])(error)) != null ? _a : {};
    let html = "";
    if (title) html += '<slot name="error-'.concat(error.code, '-title"><h3>').concat(title, "</h3></slot>");
    if (message) html += '<slot name="error-'.concat(error.code, '-message"><p>').concat(message, "</p></slot>");
    return html;
}
const observedAttributes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_ERROR_CODE,
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_ERROR_MESSAGE
];
class MediaErrorDialog extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeDialog"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            ...observedAttributes
        ];
    }
    formatErrorMessage(error) {
        return this.constructor.formatErrorMessage(error);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        var _a;
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (!observedAttributes.includes(attrName)) return;
        const mediaError = (_a = this.mediaError) != null ? _a : {
            code: this.mediaErrorCode,
            message: this.mediaErrorMessage
        };
        this.open = shouldOpenErrorDialog(mediaError);
        if (this.open) {
            this.shadowRoot.querySelector("slot").name = "error-".concat(this.mediaErrorCode);
            this.shadowRoot.querySelector("#content").innerHTML = this.formatErrorMessage(mediaError);
        }
    }
    get mediaError() {
        return __privateGet(this, _mediaError);
    }
    set mediaError(value) {
        __privateSet(this, _mediaError, value);
    }
    get mediaErrorCode() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, "mediaerrorcode");
    }
    set mediaErrorCode(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, "mediaerrorcode", value);
    }
    get mediaErrorMessage() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, "mediaerrormessage");
    }
    set mediaErrorMessage(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, "mediaerrormessage", value);
    }
    constructor(){
        super(...arguments);
        __privateAdd(this, _mediaError, null);
    }
}
_mediaError = new WeakMap();
MediaErrorDialog.getSlotTemplateHTML = getSlotTemplateHTML;
MediaErrorDialog.formatErrorMessage = formatErrorMessage;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-error-dialog")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-error-dialog", MediaErrorDialog);
}
var media_error_dialog_default = MediaErrorDialog;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-fullscreen-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_fullscreen_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
;
;
;
;
;
const enterFullscreenIcon = '<svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>\n</svg>';
const exitFullscreenIcon = '<svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>\n</svg>';
function getSlotTemplateHTML(_attrs) {
    return /*html*/ "\n    <style>\n      :host([".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_FULLSCREEN, "]) slot[name=icon] slot:not([name=exit]) {\n        display: none !important;\n      }\n\n      ", "\n      :host(:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_FULLSCREEN, "])) slot[name=icon] slot:not([name=enter]) {\n        display: none !important;\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_FULLSCREEN, "]) slot[name=tooltip-enter],\n      :host(:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_FULLSCREEN, '])) slot[name=tooltip-exit] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="enter">').concat(enterFullscreenIcon, '</slot>\n      <slot name="exit">').concat(exitFullscreenIcon, "</slot>\n    </slot>\n  ");
}
function getTooltipContentHTML() {
    return /*html*/ '\n    <slot name="tooltip-enter">'.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Enter fullscreen mode"), '</slot>\n    <slot name="tooltip-exit">').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Exit fullscreen mode"), "</slot>\n  ");
}
const updateAriaLabel = (el)=>{
    const label = el.mediaIsFullscreen ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("exit fullscreen mode") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("enter fullscreen mode");
    el.setAttribute("aria-label", label);
};
class MediaFullscreenButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_FULLSCREEN,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_FULLSCREEN_UNAVAILABLE
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        updateAriaLabel(this);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_FULLSCREEN) {
            updateAriaLabel(this);
        }
    }
    /**
   * @type {string | undefined} Fullscreen unavailability state
   */ get mediaFullscreenUnavailable() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_FULLSCREEN_UNAVAILABLE);
    }
    set mediaFullscreenUnavailable(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_FULLSCREEN_UNAVAILABLE, value);
    }
    /**
   * @type {boolean} Whether fullscreen is available
   */ get mediaIsFullscreen() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_FULLSCREEN);
    }
    set mediaIsFullscreen(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_FULLSCREEN, value);
    }
    handleClick() {
        const eventName = this.mediaIsFullscreen ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_EXIT_FULLSCREEN_REQUEST : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_ENTER_FULLSCREEN_REQUEST;
        this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(eventName, {
            composed: true,
            bubbles: true
        }));
    }
}
MediaFullscreenButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaFullscreenButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-fullscreen-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-fullscreen-button", MediaFullscreenButton);
}
var media_fullscreen_button_default = MediaFullscreenButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-live-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_live_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
;
;
;
;
;
const { MEDIA_TIME_IS_LIVE, MEDIA_PAUSED } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"];
const { MEDIA_SEEK_TO_LIVE_REQUEST, MEDIA_PLAY_REQUEST } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"];
const indicatorSVG = '<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';
function getSlotTemplateHTML(_attrs) {
    return /*html*/ "\n    <style>\n      :host { --media-tooltip-display: none; }\n      \n      slot[name=indicator] > *,\n      :host ::slotted([slot=indicator]) {\n        \n        min-width: auto;\n        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));\n        color: var(--media-live-button-icon-color, rgb(140, 140, 140));\n      }\n\n      :host([".concat(MEDIA_TIME_IS_LIVE, "]:not([").concat(MEDIA_PAUSED, "])) slot[name=indicator] > *,\n      :host([").concat(MEDIA_TIME_IS_LIVE, "]:not([").concat(MEDIA_PAUSED, "])) ::slotted([slot=indicator]) {\n        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));\n        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));\n      }\n\n      :host([").concat(MEDIA_TIME_IS_LIVE, "]:not([").concat(MEDIA_PAUSED, '])) {\n        cursor: var(--media-cursor, not-allowed);\n      }\n\n      slot[name=text]{\n        text-transform: uppercase;\n      }\n\n    </style>\n\n    <slot name="indicator">').concat(indicatorSVG, "</slot>\n    ", '\n    <slot name="spacer">&nbsp;</slot><slot name="text">').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("live"), "</slot>\n  ");
}
const updateAriaAttributes = (el)=>{
    const isPausedOrNotLive = el.mediaPaused || !el.mediaTimeIsLive;
    const label = isPausedOrNotLive ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("seek to live") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("playing live");
    el.setAttribute("aria-label", label);
    isPausedOrNotLive ? el.removeAttribute("aria-disabled") : el.setAttribute("aria-disabled", "true");
};
class MediaLiveButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            MEDIA_TIME_IS_LIVE,
            MEDIA_PAUSED
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        updateAriaAttributes(this);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        updateAriaAttributes(this);
    }
    /**
   * @type {boolean} Is the media paused
   */ get mediaPaused() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED);
    }
    set mediaPaused(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, value);
    }
    /**
   * @type {boolean} Is the media playback currently live
   */ get mediaTimeIsLive() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_TIME_IS_LIVE);
    }
    set mediaTimeIsLive(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_TIME_IS_LIVE, value);
    }
    handleClick() {
        if (!this.mediaPaused && this.mediaTimeIsLive) return;
        this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(MEDIA_SEEK_TO_LIVE_REQUEST, {
            composed: true,
            bubbles: true
        }));
        if (this.hasAttribute(MEDIA_PAUSED)) {
            this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(MEDIA_PLAY_REQUEST, {
                composed: true,
                bubbles: true
            }));
        }
    }
}
MediaLiveButton.getSlotTemplateHTML = getSlotTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-live-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-live-button", MediaLiveButton);
}
var media_live_button_default = MediaLiveButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-loading-indicator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "default",
    ()=>media_loading_indicator_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _mediaController, _delay;
;
;
;
;
const Attributes = {
    LOADING_DELAY: "loadingdelay",
    NO_AUTOHIDE: "noautohide"
};
const DEFAULT_LOADING_DELAY = 500;
const loadingIndicatorIcon = '\n<svg aria-hidden="true" viewBox="0 0 100 100">\n  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">\n    <animateTransform\n       attributeName="transform"\n       attributeType="XML"\n       type="rotate"\n       dur="1s"\n       from="0 50 50"\n       to="360 50 50"\n       repeatCount="indefinite" />\n  </path>\n</svg>\n';
function getTemplateHTML(_attrs) {
    return /*html*/ "\n    <style>\n      :host {\n        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));\n        vertical-align: middle;\n        box-sizing: border-box;\n        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ".concat(DEFAULT_LOADING_DELAY, "ms);\n      }\n\n      #status {\n        color: rgba(0,0,0,0);\n        width: 0px;\n        height: 0px;\n      }\n\n      :host slot[name=icon] > *,\n      :host ::slotted([slot=icon]) {\n        opacity: var(--media-loading-indicator-opacity, 0);\n        transition: opacity 0.15s;\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_LOADING, "]:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, "])) slot[name=icon] > *,\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_LOADING, "]:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, "])) ::slotted([slot=icon]) {\n        opacity: var(--media-loading-indicator-opacity, 1);\n        transition: opacity 0.15s var(--_loading-indicator-delay);\n      }\n\n      :host #status {\n        visibility: var(--media-loading-indicator-opacity, hidden);\n        transition: visibility 0.15s;\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_LOADING, "]:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, '])) #status {\n        visibility: var(--media-loading-indicator-opacity, visible);\n        transition: visibility 0.15s var(--_loading-indicator-delay);\n      }\n\n      svg, img, ::slotted(svg), ::slotted(img) {\n        width: var(--media-loading-indicator-icon-width);\n        height: var(--media-loading-indicator-icon-height, 100px);\n        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));\n        vertical-align: middle;\n      }\n    </style>\n\n    <slot name="icon">').concat(loadingIndicatorIcon, '</slot>\n    <div id="status" role="status" aria-live="polite">').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("media loading"), "</div>\n  ");
}
class MediaLoadingIndicator extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    static get observedAttributes() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_LOADING,
            Attributes.LOADING_DELAY
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        var _a, _b, _c, _d, _e;
        if (attrName === Attributes.LOADING_DELAY && oldValue !== newValue) {
            this.loadingDelay = Number(newValue);
        } else if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER) {
            if (oldValue) {
                (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
                __privateSet(this, _mediaController, null);
            }
            if (newValue && this.isConnected) {
                __privateSet(this, _mediaController, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
                (_e = (_d = __privateGet(this, _mediaController)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
            }
        }
    }
    connectedCallback() {
        var _a, _b, _c;
        const mediaControllerId = this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER);
        if (mediaControllerId) {
            __privateSet(this, _mediaController, (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
            (_c = (_b = __privateGet(this, _mediaController)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
        }
    }
    disconnectedCallback() {
        var _a, _b;
        (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet(this, _mediaController, null);
    }
    /**
   * Delay in ms
   */ get loadingDelay() {
        return __privateGet(this, _delay);
    }
    set loadingDelay(delay) {
        __privateSet(this, _delay, delay);
        const { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, ":host");
        style.setProperty("--_loading-indicator-delay", "var(--media-loading-indicator-transition-delay, ".concat(delay, "ms)"));
    }
    /**
   * Is the media paused
   */ get mediaPaused() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED);
    }
    set mediaPaused(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, value);
    }
    /**
   * Is the media loading
   */ get mediaLoading() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_LOADING);
    }
    set mediaLoading(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_LOADING, value);
    }
    get mediaController() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER);
    }
    set mediaController(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER, value);
    }
    get noAutohide() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.NO_AUTOHIDE);
    }
    set noAutohide(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.NO_AUTOHIDE, value);
    }
    constructor(){
        super();
        __privateAdd(this, _mediaController, void 0);
        __privateAdd(this, _delay, DEFAULT_LOADING_DELAY);
        if (!this.shadowRoot) {
            this.attachShadow(this.constructor.shadowRootOptions);
            const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
            this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
        }
    }
}
_mediaController = new WeakMap();
_delay = new WeakMap();
MediaLoadingIndicator.shadowRootOptions = {
    mode: "open"
};
MediaLoadingIndicator.getTemplateHTML = getTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-loading-indicator")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-loading-indicator", MediaLoadingIndicator);
}
var media_loading_indicator_default = MediaLoadingIndicator;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-mute-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_mute_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
;
;
;
;
;
const offIcon = '<svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>\n</svg>';
const lowIcon = '<svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>\n</svg>';
const highIcon = '<svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>\n</svg>';
function getSlotTemplateHTML(_attrs) {
    return /*html*/ "\n    <style>\n      :host(:not([".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_LEVEL, "])) slot[name=icon] slot:not([name=high]),\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_LEVEL, "=high]) slot[name=icon] slot:not([name=high]) {\n        display: none !important;\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_LEVEL, "=off]) slot[name=icon] slot:not([name=off]) {\n        display: none !important;\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_LEVEL, "=low]) slot[name=icon] slot:not([name=low]) {\n        display: none !important;\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_LEVEL, "=medium]) slot[name=icon] slot:not([name=medium]) {\n        display: none !important;\n      }\n\n      :host(:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_LEVEL, "=off])) slot[name=tooltip-unmute],\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_LEVEL, '=off]) slot[name=tooltip-mute] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="off">').concat(offIcon, '</slot>\n      <slot name="low">').concat(lowIcon, '</slot>\n      <slot name="medium">').concat(lowIcon, '</slot>\n      <slot name="high">').concat(highIcon, "</slot>\n    </slot>\n  ");
}
function getTooltipContentHTML() {
    return /*html*/ '\n    <slot name="tooltip-mute">'.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Mute"), '</slot>\n    <slot name="tooltip-unmute">').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Unmute"), "</slot>\n  ");
}
const updateAriaLabel = (el)=>{
    const muted = el.mediaVolumeLevel === "off";
    const label = muted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("unmute") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("mute");
    el.setAttribute("aria-label", label);
};
class MediaMuteButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_LEVEL
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        updateAriaLabel(this);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_LEVEL) {
            updateAriaLabel(this);
        }
    }
    /**
   * @type {string | undefined}
   */ get mediaVolumeLevel() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_LEVEL);
    }
    set mediaVolumeLevel(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_LEVEL, value);
    }
    handleClick() {
        const eventName = this.mediaVolumeLevel === "off" ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_UNMUTE_REQUEST : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_MUTE_REQUEST;
        this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(eventName, {
            composed: true,
            bubbles: true
        }));
    }
}
MediaMuteButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaMuteButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-mute-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-mute-button", MediaMuteButton);
}
var media_mute_button_default = MediaMuteButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-pip-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_pip_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
;
;
;
;
;
const pipIcon = '<svg aria-hidden="true" viewBox="0 0 28 24">\n  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>\n</svg>';
function getSlotTemplateHTML(_attrs) {
    return /*html*/ "\n    <style>\n      :host([".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_PIP, "]) slot[name=icon] slot:not([name=exit]) {\n        display: none !important;\n      }\n\n      :host(:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_PIP, "])) slot[name=icon] slot:not([name=enter]) {\n        display: none !important;\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_PIP, "]) slot[name=tooltip-enter],\n      :host(:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_PIP, '])) slot[name=tooltip-exit] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="enter">').concat(pipIcon, '</slot>\n      <slot name="exit">').concat(pipIcon, "</slot>\n    </slot>\n  ");
}
function getTooltipContentHTML() {
    return /*html*/ '\n    <slot name="tooltip-enter">'.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Enter picture in picture mode"), '</slot>\n    <slot name="tooltip-exit">').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Exit picture in picture mode"), "</slot>\n  ");
}
const updateAriaLabel = (el)=>{
    const label = el.mediaIsPip ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("exit picture in picture mode") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("enter picture in picture mode");
    el.setAttribute("aria-label", label);
};
class MediaPipButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_PIP,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PIP_UNAVAILABLE
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        updateAriaLabel(this);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_PIP) {
            updateAriaLabel(this);
        }
    }
    /**
   * @type {string | undefined} Pip unavailability state
   */ get mediaPipUnavailable() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PIP_UNAVAILABLE);
    }
    set mediaPipUnavailable(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PIP_UNAVAILABLE, value);
    }
    /**
   * @type {boolean} Is the media currently playing picture-in-picture
   */ get mediaIsPip() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_PIP);
    }
    set mediaIsPip(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_IS_PIP, value);
    }
    handleClick() {
        const eventName = this.mediaIsPip ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_EXIT_PIP_REQUEST : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_ENTER_PIP_REQUEST;
        this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(eventName, {
            composed: true,
            bubbles: true
        }));
    }
}
MediaPipButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaPipButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-pip-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-pip-button", MediaPipButton);
}
var media_pip_button_default = MediaPipButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-playback-rate-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "DEFAULT_RATE",
    ()=>DEFAULT_RATE,
    "DEFAULT_RATES",
    ()=>DEFAULT_RATES,
    "default",
    ()=>media_playback_rate_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$attribute$2d$token$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/attribute-token-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var _rates;
;
;
;
;
;
;
const Attributes = {
    RATES: "rates"
};
const DEFAULT_RATES = [
    1,
    1.2,
    1.5,
    1.7,
    2
];
const DEFAULT_RATE = 1;
function getSlotTemplateHTML(attrs) {
    return /*html*/ '\n    <style>\n      :host {\n        min-width: 5ch;\n        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));\n      }\n    </style>\n    <slot name="icon">'.concat(attrs["mediaplaybackrate"] || DEFAULT_RATE, "x</slot>\n  ");
}
function getTooltipContentHTML() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Playback rate");
}
class MediaPlaybackRateButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE,
            Attributes.RATES
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === Attributes.RATES) {
            __privateGet(this, _rates).value = newValue;
        }
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE) {
            const newPlaybackRate = newValue ? +newValue : Number.NaN;
            const playbackRate = !Number.isNaN(newPlaybackRate) ? newPlaybackRate : DEFAULT_RATE;
            this.container.innerHTML = "".concat(playbackRate, "x");
            this.setAttribute("aria-label", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Playback rate {playbackRate}", {
                playbackRate
            }));
        }
    }
    /**
   * Get the playback rates for the button.
   */ get rates() {
        return __privateGet(this, _rates);
    }
    /**
   * Set the playback rates for the button.
   * For React 19+ compatibility, accept a string of space-separated rates.
   */ set rates(value) {
        if (!value) {
            __privateGet(this, _rates).value = "";
        } else if (Array.isArray(value)) {
            __privateGet(this, _rates).value = value.join(" ");
        } else if (typeof value === "string") {
            __privateGet(this, _rates).value = value;
        }
    }
    /**
   * @type {number} The current playback rate
   */ get mediaPlaybackRate() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE, DEFAULT_RATE);
    }
    set mediaPlaybackRate(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE, value);
    }
    handleClick() {
        var _a, _b;
        const availableRates = Array.from(__privateGet(this, _rates).values(), (str)=>+str).sort((a, b)=>a - b);
        const detail = (_b = (_a = availableRates.find((r)=>r > this.mediaPlaybackRate)) != null ? _a : availableRates[0]) != null ? _b : DEFAULT_RATE;
        const evt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PLAYBACK_RATE_REQUEST, {
            composed: true,
            bubbles: true,
            detail
        });
        this.dispatchEvent(evt);
    }
    constructor(){
        var _a;
        super();
        __privateAdd(this, _rates, new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$attribute$2d$token$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttributeTokenList"](this, Attributes.RATES, {
            defaultValue: DEFAULT_RATES
        }));
        this.container = this.shadowRoot.querySelector('slot[name="icon"]');
        this.container.innerHTML = "".concat((_a = this.mediaPlaybackRate) != null ? _a : DEFAULT_RATE, "x");
    }
}
_rates = new WeakMap();
MediaPlaybackRateButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaPlaybackRateButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-playback-rate-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-playback-rate-button", MediaPlaybackRateButton);
}
var media_playback_rate_button_default = MediaPlaybackRateButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-play-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaPlayButton",
    ()=>MediaPlayButton,
    "default",
    ()=>media_play_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
;
;
;
;
;
const playIcon = '<svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="m6 21 15-9L6 3v18Z"/>\n</svg>';
const pauseIcon = '<svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>\n</svg>';
function getSlotTemplateHTML(_attrs) {
    return /*html*/ "\n    <style>\n      :host([".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, "]) slot[name=pause],\n      :host(:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, "])) slot[name=play] {\n        display: none !important;\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, "]) slot[name=tooltip-pause],\n      :host(:not([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, '])) slot[name=tooltip-play] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="play">').concat(playIcon, '</slot>\n      <slot name="pause">').concat(pauseIcon, "</slot>\n    </slot>\n  ");
}
function getTooltipContentHTML() {
    return /*html*/ '\n    <slot name="tooltip-play">'.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Play"), '</slot>\n    <slot name="tooltip-pause">').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Pause"), "</slot>\n  ");
}
const updateAriaLabel = (el)=>{
    const label = el.mediaPaused ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("play") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("pause");
    el.setAttribute("aria-label", label);
};
class MediaPlayButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_ENDED
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        updateAriaLabel(this);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED) {
            updateAriaLabel(this);
        }
    }
    /**
   * Is the media paused
   */ get mediaPaused() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED);
    }
    set mediaPaused(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, value);
    }
    handleClick() {
        const eventName = this.mediaPaused ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PLAY_REQUEST : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PAUSE_REQUEST;
        this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(eventName, {
            composed: true,
            bubbles: true
        }));
    }
}
MediaPlayButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaPlayButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-play-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-play-button", MediaPlayButton);
}
var media_play_button_default = MediaPlayButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-poster-image.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "default",
    ()=>media_poster_image_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
;
;
const Attributes = {
    PLACEHOLDER_SRC: "placeholdersrc",
    SRC: "src"
};
function getTemplateHTML(_attrs) {
    return '\n    <style>\n      :host {\n        pointer-events: none;\n        display: var(--media-poster-image-display, inline-block);\n        box-sizing: border-box;\n      }\n\n      img {\n        max-width: 100%;\n        max-height: 100%;\n        min-width: 100%;\n        min-height: 100%;\n        background-repeat: no-repeat;\n        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));\n        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));\n        object-fit: var(--media-object-fit, contain);\n        object-position: var(--media-object-position, center);\n      }\n    </style>\n\n    <img part="poster img" aria-hidden="true" id="image"/>\n  ';
}
const unsetBackgroundImage = (el)=>{
    el.style.removeProperty("background-image");
};
const setBackgroundImage = (el, image)=>{
    el.style["background-image"] = "url('".concat(image, "')");
};
class MediaPosterImage extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    static get observedAttributes() {
        return [
            Attributes.PLACEHOLDER_SRC,
            Attributes.SRC
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === Attributes.SRC) {
            if (newValue == null) {
                this.image.removeAttribute(Attributes.SRC);
            } else {
                this.image.setAttribute(Attributes.SRC, newValue);
            }
        }
        if (attrName === Attributes.PLACEHOLDER_SRC) {
            if (newValue == null) {
                unsetBackgroundImage(this.image);
            } else {
                setBackgroundImage(this.image, newValue);
            }
        }
    }
    /**
   *
   */ get placeholderSrc() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, Attributes.PLACEHOLDER_SRC);
    }
    set placeholderSrc(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, Attributes.SRC, value);
    }
    /**
   *
   */ get src() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, Attributes.SRC);
    }
    set src(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, Attributes.SRC, value);
    }
    constructor(){
        super();
        if (!this.shadowRoot) {
            this.attachShadow(this.constructor.shadowRootOptions);
            const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
            this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
        }
        this.image = this.shadowRoot.querySelector("#image");
    }
}
MediaPosterImage.shadowRootOptions = {
    mode: "open"
};
MediaPosterImage.getTemplateHTML = getTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-poster-image")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-poster-image", MediaPosterImage);
}
var media_poster_image_default = MediaPosterImage;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-preview-chapter-display.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_preview_chapter_display_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$text$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-text-display.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _slot;
;
;
;
;
class MediaPreviewChapterDisplay extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$text$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaTextDisplay"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_CHAPTER
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_CHAPTER) {
            if (newValue !== oldValue && newValue != null) {
                __privateGet(this, _slot).textContent = newValue;
                if (newValue !== "") {
                    this.setAttribute("aria-valuetext", "chapter: ".concat(newValue));
                } else {
                    this.removeAttribute("aria-valuetext");
                }
            }
        }
    }
    /**
   * @type {string | undefined} Timeline preview chapter
   */ get mediaPreviewChapter() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_CHAPTER);
    }
    set mediaPreviewChapter(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_CHAPTER, value);
    }
    constructor(){
        super();
        __privateAdd(this, _slot, void 0);
        __privateSet(this, _slot, this.shadowRoot.querySelector("slot"));
    }
}
_slot = new WeakMap();
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-preview-chapter-display")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-preview-chapter-display", MediaPreviewChapterDisplay);
}
var media_preview_chapter_display_default = MediaPreviewChapterDisplay;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-preview-thumbnail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_preview_thumbnail_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _mediaController;
;
;
;
function getTemplateHTML(_attrs) {
    return '\n    <style>\n      :host {\n        box-sizing: border-box;\n        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));\n        overflow: hidden;\n      }\n\n      img {\n        display: none;\n        position: relative;\n      }\n    </style>\n    <img crossorigin loading="eager" decoding="async">\n  ';
}
class MediaPreviewThumbnail extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    static get observedAttributes() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_COORDS
        ];
    }
    connectedCallback() {
        var _a, _b, _c;
        const mediaControllerId = this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER);
        if (mediaControllerId) {
            __privateSet(this, _mediaController, // @ts-ignore
            (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
            (_c = (_b = __privateGet(this, _mediaController)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
        }
    }
    disconnectedCallback() {
        var _a, _b;
        (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet(this, _mediaController, null);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        var _a, _b, _c, _d, _e;
        if ([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_COORDS
        ].includes(attrName)) {
            this.update();
        }
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER) {
            if (oldValue) {
                (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
                __privateSet(this, _mediaController, null);
            }
            if (newValue && this.isConnected) {
                __privateSet(this, _mediaController, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
                (_e = (_d = __privateGet(this, _mediaController)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
            }
        }
    }
    /**
   * @type {string | undefined} The url of the preview image
   */ get mediaPreviewImage() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE);
    }
    set mediaPreviewImage(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE, value);
    }
    /**
   * @type {Array<number> | undefined} Fixed length array [x, y, width, height] or undefined
   */ get mediaPreviewCoords() {
        const attrVal = this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_COORDS);
        if (!attrVal) return void 0;
        return attrVal.split(/\s+/).map((coord)=>+coord);
    }
    set mediaPreviewCoords(value) {
        if (!value) {
            this.removeAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_COORDS);
            return;
        }
        this.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_COORDS, value.join(" "));
    }
    update() {
        const coords = this.mediaPreviewCoords;
        const previewImage = this.mediaPreviewImage;
        if (!(coords && previewImage)) return;
        const [x, y, w, h] = coords;
        const src = previewImage.split("#")[0];
        const computedStyle = getComputedStyle(this);
        const { maxWidth, maxHeight, minWidth, minHeight } = computedStyle;
        const maxRatio = Math.min(parseInt(maxWidth) / w, parseInt(maxHeight) / h);
        const minRatio = Math.max(parseInt(minWidth) / w, parseInt(minHeight) / h);
        const isScalingDown = maxRatio < 1;
        const scale = isScalingDown ? maxRatio : minRatio > 1 ? minRatio : 1;
        const { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, ":host");
        const imgStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, "img").style;
        const img = this.shadowRoot.querySelector("img");
        const extremum = isScalingDown ? "min" : "max";
        style.setProperty("".concat(extremum, "-width"), "initial", "important");
        style.setProperty("".concat(extremum, "-height"), "initial", "important");
        style.width = "".concat(w * scale, "px");
        style.height = "".concat(h * scale, "px");
        const resize = ()=>{
            imgStyle.width = "".concat(this.imgWidth * scale, "px");
            imgStyle.height = "".concat(this.imgHeight * scale, "px");
            imgStyle.display = "block";
        };
        if (img.src !== src) {
            img.onload = ()=>{
                this.imgWidth = img.naturalWidth;
                this.imgHeight = img.naturalHeight;
                resize();
            };
            img.src = src;
            resize();
        }
        resize();
        imgStyle.transform = "translate(-".concat(x * scale, "px, -").concat(y * scale, "px)");
    }
    constructor(){
        super();
        __privateAdd(this, _mediaController, void 0);
        if (!this.shadowRoot) {
            this.attachShadow(this.constructor.shadowRootOptions);
            const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
            this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
        }
    }
}
_mediaController = new WeakMap();
MediaPreviewThumbnail.shadowRootOptions = {
    mode: "open"
};
MediaPreviewThumbnail.getTemplateHTML = getTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-preview-thumbnail")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-preview-thumbnail", MediaPreviewThumbnail);
}
var media_preview_thumbnail_default = MediaPreviewThumbnail;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-preview-time-display.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_preview_time_display_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$text$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-text-display.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _slot;
;
;
;
;
;
class MediaPreviewTimeDisplay extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$text$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaTextDisplay"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_TIME
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_TIME && newValue != null) {
            __privateGet(this, _slot).textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(parseFloat(newValue));
        }
    }
    /**
   * Timeline preview time
   */ get mediaPreviewTime() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_TIME);
    }
    set mediaPreviewTime(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_TIME, value);
    }
    constructor(){
        super();
        __privateAdd(this, _slot, void 0);
        __privateSet(this, _slot, this.shadowRoot.querySelector("slot"));
        __privateGet(this, _slot).textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(0);
    }
}
_slot = new WeakMap();
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-preview-time-display")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-preview-time-display", MediaPreviewTimeDisplay);
}
var media_preview_time_display_default = MediaPreviewTimeDisplay;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-seek-backward-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "default",
    ()=>media_seek_backward_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
;
;
;
;
;
const Attributes = {
    SEEK_OFFSET: "seekoffset"
};
const DEFAULT_SEEK_OFFSET = 30;
const backwardIcon = (seekOffset)=>'\n  <svg aria-hidden="true" viewBox="0 0 20 24">\n    <defs>\n      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>\n    </defs>\n    <text class="text value" transform="translate(2.18 19.87)">'.concat(seekOffset, '</text>\n    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>\n  </svg>');
function getSlotTemplateHTML(_attrs, props) {
    return /*html*/ '\n    <slot name="icon">'.concat(backwardIcon(props.seekOffset), "</slot>\n  ");
}
function getTooltipContentHTML() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Seek backward");
}
const DEFAULT_TIME = 0;
class MediaSeekBackwardButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME,
            Attributes.SEEK_OFFSET
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.seekOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, Attributes.SEEK_OFFSET, DEFAULT_SEEK_OFFSET);
    }
    attributeChangedCallback(attrName, _oldValue, newValue) {
        super.attributeChangedCallback(attrName, _oldValue, newValue);
        if (attrName === Attributes.SEEK_OFFSET) {
            this.seekOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, Attributes.SEEK_OFFSET, DEFAULT_SEEK_OFFSET);
        }
    }
    // Own props
    /**
   * Seek amount in seconds
   */ get seekOffset() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, Attributes.SEEK_OFFSET, DEFAULT_SEEK_OFFSET);
    }
    set seekOffset(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, Attributes.SEEK_OFFSET, value);
        this.setAttribute("aria-label", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("seek back {seekOffset} seconds", {
            seekOffset: this.seekOffset
        }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateIconText"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSlotted"])(this, "icon"), this.seekOffset);
    }
    // Props derived from Media UI Attributes
    /**
   * The current time in seconds
   */ get mediaCurrentTime() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME, DEFAULT_TIME);
    }
    set mediaCurrentTime(time) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME, time);
    }
    handleClick() {
        const detail = Math.max(this.mediaCurrentTime - this.seekOffset, 0);
        const evt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_SEEK_REQUEST, {
            composed: true,
            bubbles: true,
            detail
        });
        this.dispatchEvent(evt);
    }
}
MediaSeekBackwardButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaSeekBackwardButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-seek-backward-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-seek-backward-button", MediaSeekBackwardButton);
}
var media_seek_backward_button_default = MediaSeekBackwardButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-seek-forward-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "default",
    ()=>media_seek_forward_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
;
;
;
;
;
const Attributes = {
    SEEK_OFFSET: "seekoffset"
};
const DEFAULT_SEEK_OFFSET = 30;
const forwardIcon = (seekOffset)=>'\n  <svg aria-hidden="true" viewBox="0 0 20 24">\n    <defs>\n      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>\n    </defs>\n    <text class="text value" transform="translate(8.9 19.87)">'.concat(seekOffset, '</text>\n    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>\n  </svg>');
function getSlotTemplateHTML(_attrs, props) {
    return /*html*/ '\n    <slot name="icon">'.concat(forwardIcon(props.seekOffset), "</slot>\n  ");
}
function getTooltipContentHTML() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Seek forward");
}
const DEFAULT_TIME = 0;
class MediaSeekForwardButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME,
            Attributes.SEEK_OFFSET
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.seekOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, Attributes.SEEK_OFFSET, DEFAULT_SEEK_OFFSET);
    }
    attributeChangedCallback(attrName, _oldValue, newValue) {
        super.attributeChangedCallback(attrName, _oldValue, newValue);
        if (attrName === Attributes.SEEK_OFFSET) {
            this.seekOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, Attributes.SEEK_OFFSET, DEFAULT_SEEK_OFFSET);
        }
    }
    // Own props
    /**
   * Seek amount in seconds
   */ get seekOffset() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, Attributes.SEEK_OFFSET, DEFAULT_SEEK_OFFSET);
    }
    set seekOffset(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, Attributes.SEEK_OFFSET, value);
        this.setAttribute("aria-label", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("seek forward {seekOffset} seconds", {
            seekOffset: this.seekOffset
        }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateIconText"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSlotted"])(this, "icon"), this.seekOffset);
    }
    // Props derived from Media UI Attributes
    /**
   * The current time in seconds
   */ get mediaCurrentTime() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME, DEFAULT_TIME);
    }
    set mediaCurrentTime(time) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME, time);
    }
    handleClick() {
        const detail = this.mediaCurrentTime + this.seekOffset;
        const evt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_SEEK_REQUEST, {
            composed: true,
            bubbles: true,
            detail
        });
        this.dispatchEvent(evt);
    }
}
MediaSeekForwardButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaSeekForwardButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-seek-forward-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-seek-forward-button", MediaSeekForwardButton);
}
var media_seek_forward_button_default = MediaSeekForwardButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-time-display.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "default",
    ()=>media_time_display_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$text$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-text-display.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _slot;
;
;
;
;
;
;
const Attributes = {
    REMAINING: "remaining",
    SHOW_DURATION: "showduration",
    NO_TOGGLE: "notoggle"
};
const CombinedAttributes = [
    ...Object.values(Attributes),
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME,
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_DURATION,
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SEEKABLE
];
const ButtonPressedKeys = [
    "Enter",
    " "
];
const DEFAULT_TIMES_SEP = "&nbsp;/&nbsp;";
const formatTimesLabel = function(el) {
    let { timesSep = DEFAULT_TIMES_SEP } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _a, _b;
    const currentTime = (_a = el.mediaCurrentTime) != null ? _a : 0;
    const [, seekableEnd] = (_b = el.mediaSeekable) != null ? _b : [];
    let endTime = 0;
    if (Number.isFinite(el.mediaDuration)) {
        endTime = el.mediaDuration;
    } else if (Number.isFinite(seekableEnd)) {
        endTime = seekableEnd;
    }
    const timeLabel = el.remaining ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(0 - (endTime - currentTime)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(currentTime);
    if (!el.showDuration) return timeLabel;
    return "".concat(timeLabel).concat(timesSep).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(endTime));
};
const DEFAULT_MISSING_TIME_PHRASE = "video not loaded, unknown time.";
const updateAriaValueText = (el)=>{
    var _a;
    const currentTime = el.mediaCurrentTime;
    const [, seekableEnd] = (_a = el.mediaSeekable) != null ? _a : [];
    let endTime = null;
    if (Number.isFinite(el.mediaDuration)) {
        endTime = el.mediaDuration;
    } else if (Number.isFinite(seekableEnd)) {
        endTime = seekableEnd;
    }
    if (currentTime == null || endTime === null) {
        el.setAttribute("aria-valuetext", DEFAULT_MISSING_TIME_PHRASE);
        return;
    }
    const currentTimePhrase = el.remaining ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAsTimePhrase"])(0 - (endTime - currentTime)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAsTimePhrase"])(currentTime);
    if (!el.showDuration) {
        el.setAttribute("aria-valuetext", currentTimePhrase);
        return;
    }
    const totalTimePhrase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAsTimePhrase"])(endTime);
    const fullPhrase = "".concat(currentTimePhrase, " of ").concat(totalTimePhrase);
    el.setAttribute("aria-valuetext", fullPhrase);
};
function getSlotTemplateHTML(_attrs, props) {
    return /*html*/ "\n    <slot>".concat(formatTimesLabel(props), "</slot>\n  ");
}
class MediaTimeDisplay extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$text$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaTextDisplay"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            ...CombinedAttributes,
            "disabled"
        ];
    }
    connectedCallback() {
        const { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, ":host(:hover:not([notoggle]))");
        style.setProperty("cursor", "var(--media-cursor, pointer)");
        style.setProperty("background", "var(--media-control-hover-background, rgba(50 50 70 / .7))");
        if (!this.hasAttribute("disabled")) {
            this.enable();
        }
        this.setAttribute("role", "progressbar");
        this.setAttribute("aria-label", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("playback time"));
        const keyUpHandler = (evt)=>{
            const { key } = evt;
            if (!ButtonPressedKeys.includes(key)) {
                this.removeEventListener("keyup", keyUpHandler);
                return;
            }
            this.toggleTimeDisplay();
        };
        this.addEventListener("keydown", (evt)=>{
            const { metaKey, altKey, key } = evt;
            if (metaKey || altKey || !ButtonPressedKeys.includes(key)) {
                this.removeEventListener("keyup", keyUpHandler);
                return;
            }
            this.addEventListener("keyup", keyUpHandler);
        });
        this.addEventListener("click", this.toggleTimeDisplay);
        super.connectedCallback();
    }
    toggleTimeDisplay() {
        if (this.noToggle) {
            return;
        }
        if (this.hasAttribute("remaining")) {
            this.removeAttribute("remaining");
        } else {
            this.setAttribute("remaining", "");
        }
    }
    disconnectedCallback() {
        this.disable();
        super.disconnectedCallback();
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (CombinedAttributes.includes(attrName)) {
            this.update();
        } else if (attrName === "disabled" && newValue !== oldValue) {
            if (newValue == null) {
                this.enable();
            } else {
                this.disable();
            }
        }
        super.attributeChangedCallback(attrName, oldValue, newValue);
    }
    enable() {
        this.tabIndex = 0;
    }
    disable() {
        this.tabIndex = -1;
    }
    // Own props
    /**
   * Whether to show the remaining time
   */ get remaining() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.REMAINING);
    }
    set remaining(show) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.REMAINING, show);
    }
    /**
   * Whether to show the duration
   */ get showDuration() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.SHOW_DURATION);
    }
    set showDuration(show) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.SHOW_DURATION, show);
    }
    /**
   * Disable the default behavior that toggles between current and remaining time
   */ get noToggle() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, Attributes.NO_TOGGLE);
    }
    set noToggle(noToggle) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, Attributes.NO_TOGGLE, noToggle);
    }
    // Props derived from media UI attributes
    /**
   * Get the duration
   */ get mediaDuration() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_DURATION);
    }
    set mediaDuration(time) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_DURATION, time);
    }
    /**
   * The current time in seconds
   */ get mediaCurrentTime() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME);
    }
    set mediaCurrentTime(time) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME, time);
    }
    /**
   * Range of values that can be seeked to.
   * An array of two numbers [start, end]
   */ get mediaSeekable() {
        const seekable = this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SEEKABLE);
        if (!seekable) return void 0;
        return seekable.split(":").map((time)=>+time);
    }
    set mediaSeekable(range) {
        if (range == null) {
            this.removeAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SEEKABLE);
            return;
        }
        this.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SEEKABLE, range.join(":"));
    }
    update() {
        const timesLabel = formatTimesLabel(this);
        updateAriaValueText(this);
        if (timesLabel !== __privateGet(this, _slot).innerHTML) {
            __privateGet(this, _slot).innerHTML = timesLabel;
        }
    }
    constructor(){
        super();
        __privateAdd(this, _slot, void 0);
        __privateSet(this, _slot, this.shadowRoot.querySelector("slot"));
        __privateGet(this, _slot).innerHTML = "".concat(formatTimesLabel(this));
    }
}
_slot = new WeakMap();
MediaTimeDisplay.getSlotTemplateHTML = getSlotTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-time-display")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-time-display", MediaTimeDisplay);
}
var media_time_display_default = MediaTimeDisplay;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/range-animation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RangeAnimation",
    ()=>RangeAnimation
]);
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value1)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value1);
};
var __privateSet = (obj, member, value1, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value1) : member.set(obj, value1);
    return value1;
};
var __privateWrapper = (obj, member, setter, getter)=>({
        set _ (value){
            __privateSet(obj, member, value, setter);
        },
        get _ () {
            return __privateGet(obj, member, getter);
        }
    });
var _range, _startTime, _previousTime, _deltaTime, _frameCount, _updateTimestamp, _updateStartValue, _lastRangeIncrease, _id, _animate;
class RangeAnimation {
    start() {
        if (__privateGet(this, _id) !== 0) return;
        __privateSet(this, _previousTime, performance.now());
        __privateSet(this, _startTime, __privateGet(this, _previousTime));
        __privateSet(this, _frameCount, 0);
        __privateGet(this, _animate).call(this);
    }
    stop() {
        if (__privateGet(this, _id) === 0) return;
        cancelAnimationFrame(__privateGet(this, _id));
        __privateSet(this, _id, 0);
    }
    update(param) {
        let { start, duration, playbackRate } = param;
        const increase = start - __privateGet(this, _range).valueAsNumber;
        const durationDelta = Math.abs(duration - this.duration);
        if (increase > 0 || increase < -0.03 || durationDelta >= 0.5) {
            this.callback(start);
        }
        __privateSet(this, _updateStartValue, start);
        __privateSet(this, _updateTimestamp, performance.now());
        this.duration = duration;
        this.playbackRate = playbackRate;
    }
    constructor(range, callback, fps){
        var _this = this;
        __privateAdd(this, _range, void 0);
        __privateAdd(this, _startTime, void 0);
        __privateAdd(this, _previousTime, void 0);
        __privateAdd(this, _deltaTime, void 0);
        __privateAdd(this, _frameCount, void 0);
        __privateAdd(this, _updateTimestamp, void 0);
        __privateAdd(this, _updateStartValue, void 0);
        __privateAdd(this, _lastRangeIncrease, void 0);
        __privateAdd(this, _id, 0);
        __privateAdd(this, _animate, function() {
            let now = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : performance.now();
            __privateSet(_this, _id, requestAnimationFrame(__privateGet(_this, _animate)));
            __privateSet(_this, _deltaTime, performance.now() - __privateGet(_this, _previousTime));
            const fpsInterval = 1e3 / _this.fps;
            if (__privateGet(_this, _deltaTime) > fpsInterval) {
                __privateSet(_this, _previousTime, now - __privateGet(_this, _deltaTime) % fpsInterval);
                const fps = 1e3 / ((now - __privateGet(_this, _startTime)) / ++__privateWrapper(_this, _frameCount)._);
                const delta = (now - __privateGet(_this, _updateTimestamp)) / 1e3 / _this.duration;
                let value1 = __privateGet(_this, _updateStartValue) + delta * _this.playbackRate;
                const increase = value1 - __privateGet(_this, _range).valueAsNumber;
                if (increase > 0) {
                    __privateSet(_this, _lastRangeIncrease, _this.playbackRate / _this.duration / fps);
                } else {
                    __privateSet(_this, _lastRangeIncrease, 0.995 * __privateGet(_this, _lastRangeIncrease));
                    value1 = __privateGet(_this, _range).valueAsNumber + __privateGet(_this, _lastRangeIncrease);
                }
                _this.callback(value1);
            }
        });
        __privateSet(this, _range, range);
        this.callback = callback;
        this.fps = fps;
    }
}
_range = new WeakMap();
_startTime = new WeakMap();
_previousTime = new WeakMap();
_deltaTime = new WeakMap();
_frameCount = new WeakMap();
_updateTimestamp = new WeakMap();
_updateStartValue = new WeakMap();
_lastRangeIncrease = new WeakMap();
_id = new WeakMap();
_animate = new WeakMap();
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-time-range.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_time_range_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$preview$2d$thumbnail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-preview-thumbnail.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$preview$2d$time$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-preview-time-display.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$preview$2d$chapter$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-preview-chapter-display.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$range$2d$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/range-animation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _rootNode, _animation, _boxes, _previewTime, _previewBox, _currentBox, _boxPaddingLeft, _boxPaddingRight, _mediaChaptersCues, _toggleRangeAnimation, toggleRangeAnimation_fn, _shouldRangeAnimate, shouldRangeAnimate_fn, _updateRange, _getElementRects, getElementRects_fn, _getBoxPosition, getBoxPosition_fn, _getBoxShiftPosition, getBoxShiftPosition_fn, _handlePointerMove, handlePointerMove_fn, _previewRequest, previewRequest_fn, _seekRequest, seekRequest_fn;
;
;
;
;
;
;
;
;
;
;
;
;
;
const DEFAULT_MISSING_TIME_PHRASE = "video not loaded, unknown time.";
const updateAriaValueText = (el)=>{
    const range = el.range;
    const currentTimePhrase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAsTimePhrase"])(+calcTimeFromRangeValue(el));
    const totalTimePhrase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAsTimePhrase"])(+el.mediaSeekableEnd);
    const fullPhrase = !(currentTimePhrase && totalTimePhrase) ? DEFAULT_MISSING_TIME_PHRASE : "".concat(currentTimePhrase, " of ").concat(totalTimePhrase);
    range.setAttribute("aria-valuetext", fullPhrase);
};
function getTemplateHTML(_attrs) {
    return /*html*/ "\n    ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeRange"].getTemplateHTML(_attrs), "\n    <style>\n      :host {\n        --media-box-border-radius: 4px;\n        --media-box-padding-left: 10px;\n        --media-box-padding-right: 10px;\n        --media-preview-border-radius: var(--media-box-border-radius);\n        --media-box-arrow-offset: var(--media-box-border-radius);\n        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));\n        --_preview-background: var(--media-preview-background, var(--_control-background));\n\n        ", '\n        contain: layout;\n      }\n\n      #buffered {\n        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));\n        position: absolute;\n        height: 100%;\n        will-change: width;\n      }\n\n      #preview-rail,\n      #current-rail {\n        width: 100%;\n        position: absolute;\n        left: 0;\n        bottom: 100%;\n        pointer-events: none;\n        will-change: transform;\n      }\n\n      [part~="box"] {\n        width: min-content;\n        ', '\n        position: absolute;\n        bottom: 100%;\n        flex-direction: column;\n        align-items: center;\n        transform: translateX(-50%);\n      }\n\n      [part~="current-box"] {\n        display: var(--media-current-box-display, var(--media-box-display, flex));\n        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));\n        visibility: hidden;\n      }\n\n      [part~="preview-box"] {\n        display: var(--media-preview-box-display, var(--media-box-display, flex));\n        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));\n        transition-property: var(--media-preview-transition-property, visibility, opacity);\n        transition-duration: var(--media-preview-transition-duration-out, .25s);\n        transition-delay: var(--media-preview-transition-delay-out, 0s);\n        visibility: hidden;\n        opacity: 0;\n      }\n\n      :host(:is([').concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE, "], [").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_TIME, '])[dragging]) [part~="preview-box"] {\n        transition-duration: var(--media-preview-transition-duration-in, .5s);\n        transition-delay: var(--media-preview-transition-delay-in, .25s);\n        visibility: visible;\n        opacity: 1;\n      }\n\n      @media (hover: hover) {\n        :host(:is([').concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE, "], [").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_TIME, ']):hover) [part~="preview-box"] {\n          transition-duration: var(--media-preview-transition-duration-in, .5s);\n          transition-delay: var(--media-preview-transition-delay-in, .25s);\n          visibility: visible;\n          opacity: 1;\n        }\n      }\n\n      media-preview-thumbnail,\n      ::slotted(media-preview-thumbnail) {\n        visibility: hidden;\n        ', "\n        transition: visibility 0s .25s;\n        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));\n        background: var(--media-preview-thumbnail-background, var(--_preview-background));\n        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));\n        max-width: var(--media-preview-thumbnail-max-width, 180px);\n        max-height: var(--media-preview-thumbnail-max-height, 160px);\n        min-width: var(--media-preview-thumbnail-min-width, 120px);\n        min-height: var(--media-preview-thumbnail-min-height, 80px);\n        border: var(--media-preview-thumbnail-border);\n        border-radius: var(--media-preview-thumbnail-border-radius,\n          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE, "][dragging]) media-preview-thumbnail,\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE, "][dragging]) ::slotted(media-preview-thumbnail) {\n        transition-delay: var(--media-preview-transition-delay-in, .25s);\n        visibility: visible;\n      }\n\n      @media (hover: hover) {\n        :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE, "]:hover) media-preview-thumbnail,\n        :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE, "]:hover) ::slotted(media-preview-thumbnail) {\n          transition-delay: var(--media-preview-transition-delay-in, .25s);\n          visibility: visible;\n        }\n\n        :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_TIME, "]:hover) {\n          --media-time-range-hover-display: block;\n        }\n      }\n\n      media-preview-chapter-display,\n      ::slotted(media-preview-chapter-display) {\n        font-size: var(--media-font-size, 13px);\n        line-height: 17px;\n        min-width: 0;\n        visibility: hidden;\n        ", "\n        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;\n        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));\n        background: var(--media-preview-chapter-background, var(--_preview-background));\n        border-radius: var(--media-preview-chapter-border-radius,\n          var(--media-preview-border-radius) var(--media-preview-border-radius)\n          var(--media-preview-border-radius) var(--media-preview-border-radius));\n        padding: var(--media-preview-chapter-padding, 3.5px 9px);\n        margin: var(--media-preview-chapter-margin, 0 0 5px);\n        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE, "]) media-preview-chapter-display,\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE, "]) ::slotted(media-preview-chapter-display) {\n        transition-delay: var(--media-preview-transition-delay-in, .25s);\n        border-radius: var(--media-preview-chapter-border-radius, 0);\n        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);\n        margin: var(--media-preview-chapter-margin, 0);\n        min-width: 100%;\n      }\n\n      media-preview-chapter-display[").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_CHAPTER, "],\n      ::slotted(media-preview-chapter-display[").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_CHAPTER, "]) {\n        visibility: visible;\n      }\n\n      media-preview-chapter-display:not([aria-valuetext]),\n      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {\n        display: none;\n      }\n\n      media-preview-time-display,\n      ::slotted(media-preview-time-display),\n      media-time-display,\n      ::slotted(media-time-display) {\n        font-size: var(--media-font-size, 13px);\n        line-height: 17px;\n        min-width: 0;\n        ", "\n        transition: min-width 0s, border-radius 0s;\n        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));\n        background: var(--media-preview-time-background, var(--_preview-background));\n        border-radius: var(--media-preview-time-border-radius,\n          var(--media-preview-border-radius) var(--media-preview-border-radius)\n          var(--media-preview-border-radius) var(--media-preview-border-radius));\n        padding: var(--media-preview-time-padding, 3.5px 9px);\n        margin: var(--media-preview-time-margin, 0);\n        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));\n        transform: translateX(min(\n          max(calc(50% - var(--_box-width) / 2),\n          calc(var(--_box-shift, 0))),\n          calc(var(--_box-width) / 2 - 50%)\n        ));\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE, "]) media-preview-time-display,\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE, "]) ::slotted(media-preview-time-display) {\n        transition-delay: var(--media-preview-transition-delay-in, .25s);\n        border-radius: var(--media-preview-time-border-radius,\n          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));\n        min-width: 100%;\n      }\n\n      :host([").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_TIME, ']:hover) {\n        --media-time-range-hover-display: block;\n      }\n\n      [part~="arrow"],\n      ::slotted([part~="arrow"]) {\n        display: var(--media-box-arrow-display, inline-block);\n        transform: translateX(min(\n          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),\n          calc(var(--_box-shift, 0))),\n          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))\n        ));\n        ', '\n        border-color: transparent;\n        border-top-color: var(--media-box-arrow-background, var(--_control-background));\n        border-width: var(--media-box-arrow-border-width,\n          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);\n        border-style: solid;\n        justify-content: center;\n        height: 0;\n      }\n    </style>\n    <div id="preview-rail">\n      <slot name="preview" part="box preview-box">\n        <media-preview-thumbnail>\n          <template shadowrootmode="').concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$preview$2d$thumbnail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shadowRootOptions.mode, '">\n            ').concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$preview$2d$thumbnail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getTemplateHTML({}), '\n          </template>\n        </media-preview-thumbnail>\n        <media-preview-chapter-display></media-preview-chapter-display>\n        <media-preview-time-display></media-preview-time-display>\n        <slot name="preview-arrow"><div part="arrow"></div></slot>\n      </slot>\n    </div>\n    <div id="current-rail">\n      <slot name="current" part="box current-box">\n        ', "\n      </slot>\n    </div>\n  ");
}
const calcRangeValueFromTime = function(el) {
    let time = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : el.mediaCurrentTime;
    const startTime = Number.isFinite(el.mediaSeekableStart) ? el.mediaSeekableStart : 0;
    const endTime = Number.isFinite(el.mediaDuration) ? el.mediaDuration : el.mediaSeekableEnd;
    if (Number.isNaN(endTime)) return 0;
    const value = (time - startTime) / (endTime - startTime);
    return Math.max(0, Math.min(value, 1));
};
const calcTimeFromRangeValue = function(el) {
    let value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : el.range.valueAsNumber;
    const startTime = Number.isFinite(el.mediaSeekableStart) ? el.mediaSeekableStart : 0;
    const endTime = Number.isFinite(el.mediaDuration) ? el.mediaDuration : el.mediaSeekableEnd;
    if (Number.isNaN(endTime)) return 0;
    return value * (endTime - startTime) + startTime;
};
class MediaTimeRange extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeRange"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_DURATION,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SEEKABLE,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_TIME,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_CHAPTER,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_BUFFERED,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_LOADING,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_ENDED
        ];
    }
    connectedCallback() {
        var _a;
        super.connectedCallback();
        this.range.setAttribute("aria-label", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("seek"));
        __privateMethod(this, _toggleRangeAnimation, toggleRangeAnimation_fn).call(this);
        __privateSet(this, _rootNode, this.getRootNode());
        (_a = __privateGet(this, _rootNode)) == null ? void 0 : _a.addEventListener("transitionstart", this);
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        __privateMethod(this, _toggleRangeAnimation, toggleRangeAnimation_fn).call(this);
        (_a = __privateGet(this, _rootNode)) == null ? void 0 : _a.removeEventListener("transitionstart", this);
        __privateSet(this, _rootNode, null);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (oldValue == newValue) return;
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME || attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED || attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_ENDED || attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_LOADING || attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_DURATION || attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SEEKABLE) {
            __privateGet(this, _animation).update({
                start: calcRangeValueFromTime(this),
                duration: this.mediaSeekableEnd - this.mediaSeekableStart,
                playbackRate: this.mediaPlaybackRate
            });
            __privateMethod(this, _toggleRangeAnimation, toggleRangeAnimation_fn).call(this);
            updateAriaValueText(this);
        } else if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_BUFFERED) {
            this.updateBufferedBar();
        }
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_DURATION || attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SEEKABLE) {
            this.mediaChaptersCues = __privateGet(this, _mediaChaptersCues);
            this.updateBar();
        }
    }
    get mediaChaptersCues() {
        return __privateGet(this, _mediaChaptersCues);
    }
    set mediaChaptersCues(value) {
        var _a;
        __privateSet(this, _mediaChaptersCues, value);
        this.updateSegments((_a = __privateGet(this, _mediaChaptersCues)) == null ? void 0 : _a.map((c)=>({
                start: calcRangeValueFromTime(this, c.startTime),
                end: calcRangeValueFromTime(this, c.endTime)
            })));
    }
    /**
   * Is the media paused
   */ get mediaPaused() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED);
    }
    set mediaPaused(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PAUSED, value);
    }
    /**
   * Is the media loading
   */ get mediaLoading() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_LOADING);
    }
    set mediaLoading(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_LOADING, value);
    }
    /**
   *
   */ get mediaDuration() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_DURATION);
    }
    set mediaDuration(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_DURATION, value);
    }
    /**
   *
   */ get mediaCurrentTime() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME);
    }
    set mediaCurrentTime(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_CURRENT_TIME, value);
    }
    /**
   *
   */ get mediaPlaybackRate() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE, 1);
    }
    set mediaPlaybackRate(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE, value);
    }
    /**
   * An array of ranges, each range being an array of two numbers.
   * e.g. [[1, 2], [3, 4]]
   */ get mediaBuffered() {
        const buffered = this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_BUFFERED);
        if (!buffered) return [];
        return buffered.split(" ").map((timePair)=>timePair.split(":").map((timeStr)=>+timeStr));
    }
    set mediaBuffered(list) {
        if (!list) {
            this.removeAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_BUFFERED);
            return;
        }
        const strVal = list.map((tuple)=>tuple.join(":")).join(" ");
        this.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_BUFFERED, strVal);
    }
    /**
   * Range of values that can be seeked to
   * An array of two numbers [start, end]
   */ get mediaSeekable() {
        const seekable = this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SEEKABLE);
        if (!seekable) return void 0;
        return seekable.split(":").map((time)=>+time);
    }
    set mediaSeekable(range) {
        if (range == null) {
            this.removeAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SEEKABLE);
            return;
        }
        this.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SEEKABLE, range.join(":"));
    }
    /**
   *
   */ get mediaSeekableEnd() {
        var _a;
        const [, end = this.mediaDuration] = (_a = this.mediaSeekable) != null ? _a : [];
        return end;
    }
    get mediaSeekableStart() {
        var _a;
        const [start = 0] = (_a = this.mediaSeekable) != null ? _a : [];
        return start;
    }
    /**
   * The url of the preview image
   */ get mediaPreviewImage() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE);
    }
    set mediaPreviewImage(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_IMAGE, value);
    }
    /**
   *
   */ get mediaPreviewTime() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_TIME);
    }
    set mediaPreviewTime(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PREVIEW_TIME, value);
    }
    /**
   *
   */ get mediaEnded() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_ENDED);
    }
    set mediaEnded(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_ENDED, value);
    }
    /* Add a buffered progress bar */ updateBar() {
        super.updateBar();
        this.updateBufferedBar();
        this.updateCurrentBox();
    }
    updateBufferedBar() {
        var _a;
        const buffered = this.mediaBuffered;
        if (!buffered.length) {
            return;
        }
        let relativeBufferedEnd;
        if (!this.mediaEnded) {
            const currentTime = this.mediaCurrentTime;
            const [, bufferedEnd = this.mediaSeekableStart] = (_a = buffered.find((param)=>{
                let [start, end] = param;
                return start <= currentTime && currentTime <= end;
            })) != null ? _a : [];
            relativeBufferedEnd = calcRangeValueFromTime(this, bufferedEnd);
        } else {
            relativeBufferedEnd = 1;
        }
        const { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, "#buffered");
        style.setProperty("width", "".concat(relativeBufferedEnd * 100, "%"));
    }
    updateCurrentBox() {
        const currentSlot = this.shadowRoot.querySelector('slot[name="current"]');
        if (!currentSlot.assignedElements().length) return;
        const currentRailRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, "#current-rail");
        const currentBoxRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, '[part~="current-box"]');
        const rects = __privateMethod(this, _getElementRects, getElementRects_fn).call(this, __privateGet(this, _currentBox));
        const boxPos = __privateMethod(this, _getBoxPosition, getBoxPosition_fn).call(this, rects, this.range.valueAsNumber);
        const boxShift = __privateMethod(this, _getBoxShiftPosition, getBoxShiftPosition_fn).call(this, rects, this.range.valueAsNumber);
        currentRailRule.style.transform = "translateX(".concat(boxPos, ")");
        currentRailRule.style.setProperty("--_range-width", "".concat(rects.range.width));
        currentBoxRule.style.setProperty("--_box-shift", "".concat(boxShift));
        currentBoxRule.style.setProperty("--_box-width", "".concat(rects.box.width, "px"));
        currentBoxRule.style.setProperty("visibility", "initial");
    }
    handleEvent(evt) {
        super.handleEvent(evt);
        switch(evt.type){
            case "input":
                __privateMethod(this, _seekRequest, seekRequest_fn).call(this);
                break;
            case "pointermove":
                __privateMethod(this, _handlePointerMove, handlePointerMove_fn).call(this, evt);
                break;
            case "pointerup":
            case "pointerleave":
                __privateMethod(this, _previewRequest, previewRequest_fn).call(this, null);
                break;
            case "transitionstart":
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsComposedNode"])(evt.target, this)) {
                    setTimeout(()=>__privateMethod(this, _toggleRangeAnimation, toggleRangeAnimation_fn).call(this), 0);
                }
                break;
        }
    }
    constructor(){
        super();
        __privateAdd(this, _toggleRangeAnimation);
        __privateAdd(this, _shouldRangeAnimate);
        __privateAdd(this, _getElementRects);
        /**
     * Get the position, max and min for the box in percentage.
     * It's important this is in percentage so when the player is resized
     * the box will move accordingly.
     */ __privateAdd(this, _getBoxPosition);
        __privateAdd(this, _getBoxShiftPosition);
        __privateAdd(this, _handlePointerMove);
        __privateAdd(this, _previewRequest);
        __privateAdd(this, _seekRequest);
        __privateAdd(this, _rootNode, void 0);
        __privateAdd(this, _animation, void 0);
        __privateAdd(this, _boxes, void 0);
        __privateAdd(this, _previewTime, void 0);
        __privateAdd(this, _previewBox, void 0);
        __privateAdd(this, _currentBox, void 0);
        __privateAdd(this, _boxPaddingLeft, void 0);
        __privateAdd(this, _boxPaddingRight, void 0);
        __privateAdd(this, _mediaChaptersCues, void 0);
        __privateAdd(this, _updateRange, (value)=>{
            if (this.dragging) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNumber"])(value)) {
                this.range.valueAsNumber = value;
            }
            this.updateBar();
        });
        const track = this.shadowRoot.querySelector("#track");
        track.insertAdjacentHTML("afterbegin", '<div id="buffered" part="buffered"></div>');
        __privateSet(this, _boxes, this.shadowRoot.querySelectorAll('[part~="box"]'));
        __privateSet(this, _previewBox, this.shadowRoot.querySelector('[part~="preview-box"]'));
        __privateSet(this, _currentBox, this.shadowRoot.querySelector('[part~="current-box"]'));
        const computedStyle = getComputedStyle(this);
        __privateSet(this, _boxPaddingLeft, parseInt(computedStyle.getPropertyValue("--media-box-padding-left")));
        __privateSet(this, _boxPaddingRight, parseInt(computedStyle.getPropertyValue("--media-box-padding-right")));
        __privateSet(this, _animation, new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$range$2d$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangeAnimation"](this.range, __privateGet(this, _updateRange), 60));
    }
}
_rootNode = new WeakMap();
_animation = new WeakMap();
_boxes = new WeakMap();
_previewTime = new WeakMap();
_previewBox = new WeakMap();
_currentBox = new WeakMap();
_boxPaddingLeft = new WeakMap();
_boxPaddingRight = new WeakMap();
_mediaChaptersCues = new WeakMap();
_toggleRangeAnimation = new WeakSet();
toggleRangeAnimation_fn = function() {
    if (__privateMethod(this, _shouldRangeAnimate, shouldRangeAnimate_fn).call(this)) {
        __privateGet(this, _animation).start();
    } else {
        __privateGet(this, _animation).stop();
    }
};
_shouldRangeAnimate = new WeakSet();
shouldRangeAnimate_fn = function() {
    return this.isConnected && !this.mediaPaused && !this.mediaLoading && !this.mediaEnded && this.mediaSeekableEnd > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementVisible"])(this);
};
_updateRange = new WeakMap();
_getElementRects = new WeakSet();
getElementRects_fn = function(box) {
    var _a;
    const bounds = (_a = this.getAttribute("bounds") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestComposedNode"])(this, "#".concat(this.getAttribute("bounds"))) : this.parentElement) != null ? _a : this;
    const boundsRect = bounds.getBoundingClientRect();
    const rangeRect = this.range.getBoundingClientRect();
    const width = box.offsetWidth;
    const min = -(rangeRect.left - boundsRect.left - width / 2);
    const max = boundsRect.right - rangeRect.left - width / 2;
    return {
        box: {
            width,
            min,
            max
        },
        bounds: boundsRect,
        range: rangeRect
    };
};
_getBoxPosition = new WeakSet();
getBoxPosition_fn = function(rects, ratio) {
    let position = "".concat(ratio * 100, "%");
    const { width, min, max } = rects.box;
    if (!width) return position;
    if (!Number.isNaN(min)) {
        const pad = "var(--media-box-padding-left)";
        const minPos = "calc(1 / var(--_range-width) * 100 * ".concat(min, "% + ").concat(pad, ")");
        position = "max(".concat(minPos, ", ").concat(position, ")");
    }
    if (!Number.isNaN(max)) {
        const pad = "var(--media-box-padding-right)";
        const maxPos = "calc(1 / var(--_range-width) * 100 * ".concat(max, "% - ").concat(pad, ")");
        position = "min(".concat(position, ", ").concat(maxPos, ")");
    }
    return position;
};
_getBoxShiftPosition = new WeakSet();
getBoxShiftPosition_fn = function(rects, ratio) {
    const { width, min, max } = rects.box;
    const pointerX = ratio * rects.range.width;
    if (pointerX < min + __privateGet(this, _boxPaddingLeft)) {
        const offset = rects.range.left - rects.bounds.left - __privateGet(this, _boxPaddingLeft);
        return "".concat(pointerX - width / 2 + offset, "px");
    }
    if (pointerX > max - __privateGet(this, _boxPaddingRight)) {
        const offset = rects.bounds.right - rects.range.right - __privateGet(this, _boxPaddingRight);
        return "".concat(pointerX + width / 2 - offset - rects.range.width, "px");
    }
    return 0;
};
_handlePointerMove = new WeakSet();
handlePointerMove_fn = function(evt) {
    const isOverBoxes = [
        ...__privateGet(this, _boxes)
    ].some((b)=>evt.composedPath().includes(b));
    if (!this.dragging && (isOverBoxes || !evt.composedPath().includes(this))) {
        __privateMethod(this, _previewRequest, previewRequest_fn).call(this, null);
        return;
    }
    const duration = this.mediaSeekableEnd;
    if (!duration) return;
    const previewRailRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, "#preview-rail");
    const previewBoxRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrInsertCSSRule"])(this.shadowRoot, '[part~="preview-box"]');
    const rects = __privateMethod(this, _getElementRects, getElementRects_fn).call(this, __privateGet(this, _previewBox));
    let pointerRatio = (evt.clientX - rects.range.left) / rects.range.width;
    pointerRatio = Math.max(0, Math.min(1, pointerRatio));
    const boxPos = __privateMethod(this, _getBoxPosition, getBoxPosition_fn).call(this, rects, pointerRatio);
    const boxShift = __privateMethod(this, _getBoxShiftPosition, getBoxShiftPosition_fn).call(this, rects, pointerRatio);
    previewRailRule.style.transform = "translateX(".concat(boxPos, ")");
    previewRailRule.style.setProperty("--_range-width", "".concat(rects.range.width));
    previewBoxRule.style.setProperty("--_box-shift", "".concat(boxShift));
    previewBoxRule.style.setProperty("--_box-width", "".concat(rects.box.width, "px"));
    const diff = Math.round(__privateGet(this, _previewTime)) - Math.round(pointerRatio * duration);
    if (Math.abs(diff) < 1 && pointerRatio > 0.01 && pointerRatio < 0.99) return;
    __privateSet(this, _previewTime, pointerRatio * duration);
    __privateMethod(this, _previewRequest, previewRequest_fn).call(this, __privateGet(this, _previewTime));
};
_previewRequest = new WeakSet();
previewRequest_fn = function(detail) {
    this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PREVIEW_REQUEST, {
        composed: true,
        bubbles: true,
        detail
    }));
};
_seekRequest = new WeakSet();
seekRequest_fn = function() {
    __privateGet(this, _animation).stop();
    const detail = calcTimeFromRangeValue(this);
    this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_SEEK_REQUEST, {
        composed: true,
        bubbles: true,
        detail
    }));
};
MediaTimeRange.shadowRootOptions = {
    mode: "open"
};
MediaTimeRange.getTemplateHTML = getTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-time-range")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-time-range", MediaTimeRange);
}
var media_time_range_default = MediaTimeRange;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-volume-range.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_volume_range_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
;
;
;
;
;
const DEFAULT_VOLUME = 1;
const toVolume = (el)=>{
    if (el.mediaMuted) return 0;
    return el.mediaVolume;
};
const formatAsPercentString = (value)=>"".concat(Math.round(value * 100), "%");
class MediaVolumeRange extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeRange"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_MUTED,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_UNAVAILABLE
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.range.setAttribute("aria-label", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("volume"));
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME || attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_MUTED) {
            this.range.valueAsNumber = toVolume(this);
            this.range.setAttribute("aria-valuetext", formatAsPercentString(this.range.valueAsNumber));
            this.updateBar();
        }
    }
    /**
   *
   */ get mediaVolume() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME, DEFAULT_VOLUME);
    }
    set mediaVolume(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME, value);
    }
    /**
   * Is the media currently muted
   */ get mediaMuted() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_MUTED);
    }
    set mediaMuted(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBooleanAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_MUTED, value);
    }
    /**
   * The volume unavailability state
   */ get mediaVolumeUnavailable() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_UNAVAILABLE);
    }
    set mediaVolumeUnavailable(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_VOLUME_UNAVAILABLE, value);
    }
    constructor(){
        super();
        this.range.addEventListener("input", ()=>{
            const detail = this.range.value;
            const evt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_VOLUME_REQUEST, {
                composed: true,
                bubbles: true,
                detail
            });
            this.dispatchEvent(evt);
        });
    }
}
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-volume-range")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-volume-range", MediaVolumeRange);
}
var media_volume_range_default = MediaVolumeRange;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$controller$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-controller.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$airplay$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-airplay-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$captions$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-captions-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$cast$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-cast-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$control$2d$bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-control-bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$duration$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-duration-display.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$error$2d$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-error-dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$fullscreen$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-fullscreen-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$gesture$2d$receiver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-gesture-receiver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$live$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-live-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$loading$2d$indicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-loading-indicator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$mute$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-mute-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$pip$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-pip-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$playback$2d$rate$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-playback-rate-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$play$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-play-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$poster$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-poster-image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$preview$2d$chapter$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-preview-chapter-display.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$preview$2d$thumbnail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-preview-thumbnail.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$preview$2d$time$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-preview-time-display.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$seek$2d$backward$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-seek-backward-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$seek$2d$forward$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-seek-forward-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$time$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-time-display.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$time$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-time-range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$volume$2d$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-volume-range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$text$2d$display$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-text-display.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/template-parts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttrPart",
    ()=>AttrPart,
    "AttrPartList",
    ()=>AttrPartList,
    "ChildNodePart",
    ()=>ChildNodePart,
    "InnerTemplatePart",
    ()=>InnerTemplatePart,
    "Part",
    ()=>Part,
    "TemplateInstance",
    ()=>TemplateInstance,
    "defaultProcessor",
    ()=>defaultProcessor,
    "parse",
    ()=>parse,
    "tokenize",
    ()=>tokenize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _parts, _processor, _items, _value, _element, _attributeName, _namespaceURI, _list, list_get, _parentNode, _nodes;
;
const ELEMENT = 1;
const STRING = 0;
const PART = 1;
const defaultProcessor = {
    processCallback (instance, parts, state) {
        if (!state) return;
        for (const [expression, part] of parts){
            if (expression in state) {
                const value = state[expression];
                if (typeof value === "boolean" && part instanceof AttrPart && typeof part.element[part.attributeName] === "boolean") {
                    part.booleanValue = value;
                } else if (typeof value === "function" && part instanceof AttrPart) {
                    part.element[part.attributeName] = value;
                } else {
                    part.value = value;
                }
            }
        }
    }
};
class TemplateInstance extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].DocumentFragment {
    update(state) {
        __privateGet(this, _processor).processCallback(this, __privateGet(this, _parts), state);
    }
    constructor(template, state, processor = defaultProcessor){
        var _a;
        super();
        __privateAdd(this, _parts, void 0);
        __privateAdd(this, _processor, void 0);
        this.append(template.content.cloneNode(true));
        __privateSet(this, _parts, parse(this));
        __privateSet(this, _processor, processor);
        (_a = processor.createCallback) == null ? void 0 : _a.call(processor, this, __privateGet(this, _parts), state);
        processor.processCallback(this, __privateGet(this, _parts), state);
    }
}
_parts = new WeakMap();
_processor = new WeakMap();
const parse = function(element) {
    let parts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    let type, value;
    for (const attr of element.attributes || []){
        if (attr.value.includes("{{")) {
            const list = new AttrPartList();
            for ([type, value] of tokenize(attr.value)){
                if (!type) list.append(value);
                else {
                    const part = new AttrPart(element, attr.name, attr.namespaceURI);
                    list.append(part);
                    parts.push([
                        value,
                        part
                    ]);
                }
            }
            attr.value = list.toString();
        }
    }
    for (const node of element.childNodes){
        if (node.nodeType === ELEMENT && !(node instanceof HTMLTemplateElement)) {
            parse(node, parts);
        } else {
            const data = node.data;
            if (node.nodeType === ELEMENT || data.includes("{{")) {
                const items = [];
                if (data) {
                    for ([type, value] of tokenize(data))if (!type) items.push(new Text(value));
                    else {
                        const part = new ChildNodePart(element);
                        items.push(part);
                        parts.push([
                            value,
                            part
                        ]);
                    }
                } else if (node instanceof HTMLTemplateElement) {
                    const part = new InnerTemplatePart(element, node);
                    items.push(part);
                    parts.push([
                        part.expression,
                        part
                    ]);
                }
                node.replaceWith(...items.flatMap((part)=>part.replacementNodes || [
                        part
                    ]));
            }
        }
    }
    return parts;
};
const mem = {};
const tokenize = (text)=>{
    let value = "", open = 0, tokens = mem[text], i = 0, c;
    if (tokens) return tokens;
    else tokens = [];
    for(; c = text[i]; i++){
        if (c === "{" && text[i + 1] === "{" && text[i - 1] !== "\\" && text[i + 2] && ++open == 1) {
            if (value) tokens.push([
                STRING,
                value
            ]);
            value = "";
            i++;
        } else if (c === "}" && text[i + 1] === "}" && text[i - 1] !== "\\" && !--open) {
            tokens.push([
                PART,
                value.trim()
            ]);
            value = "";
            i++;
        } else value += c || "";
    }
    if (value) tokens.push([
        STRING,
        (open > 0 ? "{{" : "") + value
    ]);
    return mem[text] = tokens;
};
const FRAGMENT = 11;
class Part {
    get value() {
        return "";
    }
    set value(val) {}
    toString() {
        return this.value;
    }
}
const attrPartToList = /* @__PURE__ */ new WeakMap();
class AttrPartList {
    [Symbol.iterator]() {
        return __privateGet(this, _items).values();
    }
    get length() {
        return __privateGet(this, _items).length;
    }
    item(index) {
        return __privateGet(this, _items)[index];
    }
    append() {
        for(var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++){
            items[_key] = arguments[_key];
        }
        for (const item of items){
            if (item instanceof AttrPart) {
                attrPartToList.set(item, this);
            }
            __privateGet(this, _items).push(item);
        }
    }
    toString() {
        return __privateGet(this, _items).join("");
    }
    constructor(){
        __privateAdd(this, _items, []);
    }
}
_items = new WeakMap();
class AttrPart extends Part {
    get attributeName() {
        return __privateGet(this, _attributeName);
    }
    get attributeNamespace() {
        return __privateGet(this, _namespaceURI);
    }
    get element() {
        return __privateGet(this, _element);
    }
    get value() {
        return __privateGet(this, _value);
    }
    set value(newValue) {
        if (__privateGet(this, _value) === newValue) return;
        __privateSet(this, _value, newValue);
        if (!__privateGet(this, _list, list_get) || __privateGet(this, _list, list_get).length === 1) {
            if (newValue == null) {
                __privateGet(this, _element).removeAttributeNS(__privateGet(this, _namespaceURI), __privateGet(this, _attributeName));
            } else {
                __privateGet(this, _element).setAttributeNS(__privateGet(this, _namespaceURI), __privateGet(this, _attributeName), newValue);
            }
        } else {
            __privateGet(this, _element).setAttributeNS(__privateGet(this, _namespaceURI), __privateGet(this, _attributeName), __privateGet(this, _list, list_get).toString());
        }
    }
    get booleanValue() {
        return __privateGet(this, _element).hasAttributeNS(__privateGet(this, _namespaceURI), __privateGet(this, _attributeName));
    }
    set booleanValue(value) {
        if (!__privateGet(this, _list, list_get) || __privateGet(this, _list, list_get).length === 1) this.value = value ? "" : null;
        else throw new DOMException("Value is not fully templatized");
    }
    constructor(element, attributeName, namespaceURI){
        super();
        __privateAdd(this, _list);
        __privateAdd(this, _value, "");
        __privateAdd(this, _element, void 0);
        __privateAdd(this, _attributeName, void 0);
        __privateAdd(this, _namespaceURI, void 0);
        __privateSet(this, _element, element);
        __privateSet(this, _attributeName, attributeName);
        __privateSet(this, _namespaceURI, namespaceURI);
    }
}
_value = new WeakMap();
_element = new WeakMap();
_attributeName = new WeakMap();
_namespaceURI = new WeakMap();
_list = new WeakSet();
list_get = function() {
    return attrPartToList.get(this);
};
class ChildNodePart extends Part {
    get replacementNodes() {
        return __privateGet(this, _nodes);
    }
    get parentNode() {
        return __privateGet(this, _parentNode);
    }
    get nextSibling() {
        return __privateGet(this, _nodes)[__privateGet(this, _nodes).length - 1].nextSibling;
    }
    get previousSibling() {
        return __privateGet(this, _nodes)[0].previousSibling;
    }
    // FIXME: not sure why do we need string serialization here? Just because parent class has type DOMString?
    get value() {
        return __privateGet(this, _nodes).map((node)=>node.textContent).join("");
    }
    set value(newValue) {
        this.replace(newValue);
    }
    replace() {
        for(var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++){
            nodes[_key] = arguments[_key];
        }
        const normalisedNodes = nodes.flat().flatMap((node)=>node == null ? [
                new Text()
            ] : node.forEach ? [
                ...node
            ] : node.nodeType === FRAGMENT ? [
                ...node.childNodes
            ] : node.nodeType ? [
                node
            ] : [
                new Text(node)
            ]);
        if (!normalisedNodes.length) normalisedNodes.push(new Text());
        __privateSet(this, _nodes, swapdom(__privateGet(this, _nodes)[0].parentNode, __privateGet(this, _nodes), normalisedNodes, this.nextSibling));
    }
    constructor(parentNode, nodes){
        super();
        __privateAdd(this, _parentNode, void 0);
        __privateAdd(this, _nodes, void 0);
        __privateSet(this, _parentNode, parentNode);
        __privateSet(this, _nodes, nodes ? [
            ...nodes
        ] : [
            new Text()
        ]);
    }
}
_parentNode = new WeakMap();
_nodes = new WeakMap();
class InnerTemplatePart extends ChildNodePart {
    constructor(parentNode, template){
        const directive = template.getAttribute("directive") || template.getAttribute("type");
        let expression = template.getAttribute("expression") || template.getAttribute(directive) || "";
        if (expression.startsWith("{{")) expression = expression.trim().slice(2, -2).trim();
        super(parentNode);
        this.expression = expression;
        this.template = template;
        this.directive = directive;
    }
}
function swapdom(parent, a, b) {
    let end = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    let i = 0, cur, next, bi, n = b.length, m = a.length;
    while(i < n && i < m && a[i] == b[i])i++;
    while(i < n && i < m && b[n - 1] == a[m - 1])end = b[--m, --n];
    if (i == m) while(i < n)parent.insertBefore(b[i++], end);
    if (i == n) while(i < m)parent.removeChild(a[i++]);
    else {
        cur = a[i];
        while(i < n){
            bi = b[i++], next = cur ? cur.nextSibling : end;
            if (cur == bi) cur = next;
            else if (i < n && b[i] == next) parent.replaceChild(bi, cur), cur = next;
            else parent.insertBefore(bi, cur);
        }
        while(cur != end)next = cur.nextSibling, parent.removeChild(cur), cur = next;
    }
    return b;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/template-processor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluateExpression",
    ()=>evaluateExpression,
    "getParamValue",
    ()=>getParamValue,
    "processor",
    ()=>processor,
    "tokenizeExpression",
    ()=>tokenizeExpression
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$template$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/template-parts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/utils.js [app-client] (ecmascript)");
;
;
const pipeModifiers = {
    string: (value)=>String(value)
};
class PartialTemplate {
    constructor(template){
        this.template = template;
        this.state = void 0;
    }
}
const templates = /* @__PURE__ */ new WeakMap();
const templateInstances = /* @__PURE__ */ new WeakMap();
const Directives = {
    partial: (part, state)=>{
        state[part.expression] = new PartialTemplate(part.template);
    },
    if: (part, state)=>{
        var _a;
        if (evaluateExpression(part.expression, state)) {
            if (templates.get(part) !== part.template) {
                templates.set(part, part.template);
                const tpl = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$template$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TemplateInstance"](part.template, state, processor);
                part.replace(tpl);
                templateInstances.set(part, tpl);
            } else {
                (_a = templateInstances.get(part)) == null ? void 0 : _a.update(state);
            }
        } else {
            part.replace("");
            templates.delete(part);
            templateInstances.delete(part);
        }
    }
};
const DirectiveNames = Object.keys(Directives);
const processor = {
    processCallback (instance, parts, state) {
        var _a, _b;
        if (!state) return;
        for (const [expression, part] of parts){
            if (part instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$template$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InnerTemplatePart"]) {
                if (!part.directive) {
                    const directive = DirectiveNames.find((n)=>part.template.hasAttribute(n));
                    if (directive) {
                        part.directive = directive;
                        part.expression = part.template.getAttribute(directive);
                    }
                }
                (_a = Directives[part.directive]) == null ? void 0 : _a.call(Directives, part, state);
                continue;
            }
            let value = evaluateExpression(expression, state);
            if (value instanceof PartialTemplate) {
                if (templates.get(part) !== value.template) {
                    templates.set(part, value.template);
                    value = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$template$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TemplateInstance"](value.template, value.state, processor);
                    part.value = value;
                    templateInstances.set(part, value);
                } else {
                    (_b = templateInstances.get(part)) == null ? void 0 : _b.update(value.state);
                }
                continue;
            }
            if (value) {
                if (part instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$template$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttrPart"]) {
                    if (part.attributeName.startsWith("aria-")) {
                        value = String(value);
                    }
                }
                if (part instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$template$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttrPart"]) {
                    if (typeof value === "boolean") {
                        part.booleanValue = value;
                    } else if (typeof value === "function") {
                        part.element[part.attributeName] = value;
                    } else {
                        part.value = value;
                    }
                } else {
                    part.value = value;
                    templates.delete(part);
                    templateInstances.delete(part);
                }
            } else {
                if (part instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$template$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttrPart"]) {
                    part.value = void 0;
                } else {
                    part.value = void 0;
                    templates.delete(part);
                    templateInstances.delete(part);
                }
            }
        }
    }
};
const operators = {
    "!": (a)=>!a,
    "!!": (a)=>!!a,
    "==": (a, b)=>a == b,
    "!=": (a, b)=>a != b,
    ">": (a, b)=>a > b,
    ">=": (a, b)=>a >= b,
    "<": (a, b)=>a < b,
    "<=": (a, b)=>a <= b,
    "??": (a, b)=>a != null ? a : b,
    "|": (a, b)=>{
        var _a;
        return (_a = pipeModifiers[b]) == null ? void 0 : _a.call(pipeModifiers, a);
    }
};
function tokenizeExpression(expr) {
    return tokenize(expr, {
        boolean: /true|false/,
        number: /-?\d+\.?\d*/,
        string: /(["'])((?:\\.|[^\\])*?)\1/,
        operator: /[!=><][=!]?|\?\?|\|/,
        ws: /\s+/,
        param: /[$a-z_][$\w]*/i
    }).filter((param)=>{
        let { type } = param;
        return type !== "ws";
    });
}
function evaluateExpression(expr) {
    let state = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _a, _b, _c, _d, _e, _f, _g;
    const tokens = tokenizeExpression(expr);
    if (tokens.length === 0 || tokens.some((param)=>{
        let { type } = param;
        return !type;
    })) {
        return invalidExpression(expr);
    }
    if (((_a = tokens[0]) == null ? void 0 : _a.token) === ">") {
        const partial = state[(_b = tokens[1]) == null ? void 0 : _b.token];
        if (!partial) {
            return invalidExpression(expr);
        }
        const partialState = {
            ...state
        };
        partial.state = partialState;
        const args = tokens.slice(2);
        for(let i = 0; i < args.length; i += 3){
            const name = (_c = args[i]) == null ? void 0 : _c.token;
            const operator = (_d = args[i + 1]) == null ? void 0 : _d.token;
            const value = (_e = args[i + 2]) == null ? void 0 : _e.token;
            if (name && operator === "=") {
                partialState[name] = getParamValue(value, state);
            }
        }
        return partial;
    }
    if (tokens.length === 1) {
        if (!isValidParam(tokens[0])) {
            return invalidExpression(expr);
        }
        return getParamValue(tokens[0].token, state);
    }
    if (tokens.length === 2) {
        const operator = (_f = tokens[0]) == null ? void 0 : _f.token;
        const run = operators[operator];
        if (!run || !isValidParam(tokens[1])) {
            return invalidExpression(expr);
        }
        const a = getParamValue(tokens[1].token, state);
        return run(a);
    }
    if (tokens.length === 3) {
        const operator = (_g = tokens[1]) == null ? void 0 : _g.token;
        const run = operators[operator];
        if (!run || !isValidParam(tokens[0]) || !isValidParam(tokens[2])) {
            return invalidExpression(expr);
        }
        const a = getParamValue(tokens[0].token, state);
        if (operator === "|") {
            return run(a, tokens[2].token);
        }
        const b = getParamValue(tokens[2].token, state);
        return run(a, b);
    }
}
function invalidExpression(expr) {
    console.warn("Warning: invalid expression `".concat(expr, "`"));
    return false;
}
function isValidParam(param) {
    let { type } = param;
    return [
        "number",
        "boolean",
        "string",
        "param"
    ].includes(type);
}
function getParamValue(raw, state) {
    const firstChar = raw[0];
    const lastChar = raw.slice(-1);
    if (raw === "true" || raw === "false") {
        return raw === "true";
    }
    if (firstChar === lastChar && [
        "'",
        '"'
    ].includes(firstChar)) {
        return raw.slice(1, -1);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumericString"])(raw)) {
        return parseFloat(raw);
    }
    return state[raw];
}
function tokenize(str, parsers) {
    let len, match, token;
    const tokens = [];
    while(str){
        token = null;
        len = str.length;
        for(const key in parsers){
            match = parsers[key].exec(str);
            if (match && match.index < len) {
                token = {
                    token: match[0],
                    type: key,
                    matches: match.slice(1)
                };
                len = match.index;
            }
        }
        if (len) {
            tokens.push({
                token: str.substr(0, len),
                type: void 0
            });
        }
        if (token) {
            tokens.push(token);
        }
        str = str.substr(len + (token ? token.token.length : 0));
    }
    return tokens;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-theme-element.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaThemeElement",
    ()=>MediaThemeElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$template$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/template-parts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$template$2d$processor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/template-processor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/utils.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _template, _prevTemplate, _prevTemplateId, _upgradeProperty, upgradeProperty_fn, _updateTemplate, updateTemplate_fn;
;
;
;
;
;
;
const observedMediaAttributes = {
    mediatargetlivewindow: "targetlivewindow",
    mediastreamtype: "streamtype"
};
const prependTemplate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"].createElement("template");
prependTemplate.innerHTML = "\n  <style>\n    :host {\n      display: inline-block;\n      line-height: 0;\n    }\n\n    media-controller {\n      width: 100%;\n      height: 100%;\n    }\n\n    media-captions-button:not([mediasubtitleslist]),\n    media-captions-menu:not([mediasubtitleslist]),\n    media-captions-menu-button:not([mediasubtitleslist]),\n    media-audio-track-menu[mediaaudiotrackunavailable],\n    media-audio-track-menu-button[mediaaudiotrackunavailable],\n    media-rendition-menu[mediarenditionunavailable],\n    media-rendition-menu-button[mediarenditionunavailable],\n    media-volume-range[mediavolumeunavailable],\n    media-airplay-button[mediaairplayunavailable],\n    media-fullscreen-button[mediafullscreenunavailable],\n    media-cast-button[mediacastunavailable],\n    media-pip-button[mediapipunavailable] {\n      display: none;\n    }\n  </style>\n";
class MediaThemeElement extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    /** @type {HTMLElement & { breakpointsComputed?: boolean }} */ get mediaController() {
        return this.renderRoot.querySelector("media-controller");
    }
    get template() {
        var _a;
        return (_a = __privateGet(this, _template)) != null ? _a : this.constructor.template;
    }
    set template(element) {
        __privateSet(this, _prevTemplateId, null);
        __privateSet(this, _template, element);
        this.createRenderer();
    }
    get props() {
        var _a, _b, _c;
        const observedAttributes = [
            ...Array.from((_b = (_a = this.mediaController) == null ? void 0 : _a.attributes) != null ? _b : []).filter((param)=>{
                let { name } = param;
                return observedMediaAttributes[name] || name.startsWith("breakpoint");
            }),
            ...Array.from(this.attributes)
        ];
        const props = {};
        for (const attr of observedAttributes){
            const name = (_c = observedMediaAttributes[attr.name]) != null ? _c : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelCase"])(attr.name);
            let { value } = attr;
            if (value != null) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumericString"])(value)) {
                    value = parseFloat(value);
                }
                props[name] = value === "" ? true : value;
            } else {
                props[name] = false;
            }
        }
        return props;
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === "template" && oldValue != newValue) {
            __privateMethod(this, _updateTemplate, updateTemplate_fn).call(this);
        }
    }
    connectedCallback() {
        __privateMethod(this, _updateTemplate, updateTemplate_fn).call(this);
    }
    createRenderer() {
        if (this.template && this.template !== __privateGet(this, _prevTemplate)) {
            __privateSet(this, _prevTemplate, this.template);
            this.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$template$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TemplateInstance"](this.template, this.props, // @ts-ignore
            this.constructor.processor);
            this.renderRoot.textContent = "";
            this.renderRoot.append(prependTemplate.content.cloneNode(true), this.renderer);
        }
    }
    render() {
        var _a;
        (_a = this.renderer) == null ? void 0 : _a.update(this.props);
    }
    constructor(){
        super();
        __privateAdd(this, _upgradeProperty);
        __privateAdd(this, _updateTemplate);
        __privateAdd(this, _template, void 0);
        __privateAdd(this, _prevTemplate, void 0);
        __privateAdd(this, _prevTemplateId, void 0);
        if (this.shadowRoot) {
            this.renderRoot = this.shadowRoot;
        } else {
            this.renderRoot = this.attachShadow({
                mode: "open"
            });
            this.createRenderer();
        }
        const observer = new MutationObserver((mutationList)=>{
            var _a;
            if (this.mediaController && !((_a = this.mediaController) == null ? void 0 : _a.breakpointsComputed)) return;
            if (mutationList.some((mutation)=>{
                const target = mutation.target;
                if (target === this) return true;
                if (target.localName !== "media-controller") return false;
                if (observedMediaAttributes[mutation.attributeName]) return true;
                if (mutation.attributeName.startsWith("breakpoint")) return true;
                return false;
            })) {
                this.render();
            }
        });
        observer.observe(this, {
            attributes: true
        });
        observer.observe(this.renderRoot, {
            attributes: true,
            subtree: true
        });
        this.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateChangeEvents"].BREAKPOINTS_COMPUTED, this.render);
        __privateMethod(this, _upgradeProperty, upgradeProperty_fn).call(this, "template");
    }
}
_template = new WeakMap();
_prevTemplate = new WeakMap();
_prevTemplateId = new WeakMap();
_upgradeProperty = new WeakSet();
upgradeProperty_fn = function(prop) {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
        const value = this[prop];
        delete this[prop];
        this[prop] = value;
    }
};
_updateTemplate = new WeakSet();
updateTemplate_fn = function() {
    var _a;
    const templateId = this.getAttribute("template");
    if (!templateId || templateId === __privateGet(this, _prevTemplateId)) return;
    const rootNode = this.getRootNode();
    const template = (_a = rootNode == null ? void 0 : rootNode.getElementById) == null ? void 0 : _a.call(rootNode, templateId);
    if (template) {
        __privateSet(this, _prevTemplateId, templateId);
        __privateSet(this, _template, template);
        this.createRenderer();
        return;
    }
    if (isValidUrl(templateId)) {
        __privateSet(this, _prevTemplateId, templateId);
        request(templateId).then((data)=>{
            const template2 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"].createElement("template");
            template2.innerHTML = data;
            __privateSet(this, _template, template2);
            this.createRenderer();
        }).catch(console.error);
    }
};
MediaThemeElement.observedAttributes = [
    "template"
];
MediaThemeElement.processor = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$template$2d$processor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processor"];
function isValidUrl(url) {
    if (!/^(\/|\.\/|https?:\/\/)/.test(url)) return false;
    const base = /^https?:\/\//.test(url) ? void 0 : location.origin;
    try {
        new URL(url, base);
    } catch (e) {
        return false;
    }
    return true;
}
async function request(resource) {
    const response = await fetch(resource);
    if (response.status !== 200) {
        throw new Error("Failed to load resource: the server responded with a status of ".concat(response.status));
    }
    return response.text();
}
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-theme")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-theme", MediaThemeElement);
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/anchor-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computePosition",
    ()=>computePosition
]);
function computePosition(param) {
    let { anchor, floating, placement } = param;
    const rects = getElementRects({
        anchor,
        floating
    });
    const { x, y } = computeCoordsFromPlacement(rects, placement);
    return {
        x,
        y
    };
}
function getElementRects(param) {
    let { anchor, floating } = param;
    return {
        anchor: getRectRelativeToOffsetParent(anchor, floating.offsetParent),
        floating: {
            x: 0,
            y: 0,
            width: floating.offsetWidth,
            height: floating.offsetHeight
        }
    };
}
function getRectRelativeToOffsetParent(element, offsetParent) {
    var _a;
    const rect = element.getBoundingClientRect();
    const offsetRect = (_a = offsetParent == null ? void 0 : offsetParent.getBoundingClientRect()) != null ? _a : {
        x: 0,
        y: 0
    };
    return {
        x: rect.x - offsetRect.x,
        y: rect.y - offsetRect.y,
        width: rect.width,
        height: rect.height
    };
}
function computeCoordsFromPlacement(param, placement) {
    let { anchor, floating } = param;
    const alignmentAxis = getSideAxis(placement) === "x" ? "y" : "x";
    const alignLength = alignmentAxis === "y" ? "height" : "width";
    const side = getSide(placement);
    const commonX = anchor.x + anchor.width / 2 - floating.width / 2;
    const commonY = anchor.y + anchor.height / 2 - floating.height / 2;
    const commonAlign = anchor[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch(side){
        case "top":
            coords = {
                x: commonX,
                y: anchor.y - floating.height
            };
            break;
        case "bottom":
            coords = {
                x: commonX,
                y: anchor.y + anchor.height
            };
            break;
        case "right":
            coords = {
                x: anchor.x + anchor.width,
                y: commonY
            };
            break;
        case "left":
            coords = {
                x: anchor.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: anchor.x,
                y: anchor.y
            };
    }
    switch(placement.split("-")[1]){
        case "start":
            coords[alignmentAxis] -= commonAlign;
            break;
        case "end":
            coords[alignmentAxis] += commonAlign;
            break;
    }
    return coords;
}
function getSide(placement) {
    return placement.split("-")[0];
}
function getSideAxis(placement) {
    return [
        "top",
        "bottom"
    ].includes(getSide(placement)) ? "y" : "x";
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/events.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvokeEvent",
    ()=>InvokeEvent,
    "ToggleEvent",
    ()=>ToggleEvent
]);
class InvokeEvent extends Event {
    /**
   * @param init - The event options.
   */ constructor({ action = "auto", relatedTarget, ...options }){
        super("invoke", options);
        this.action = action;
        this.relatedTarget = relatedTarget;
    }
}
class ToggleEvent extends Event {
    /**
   * @param init - The event options.
   */ constructor({ newState, oldState, ...options }){
        super("toggle", options);
        this.newState = newState;
        this.oldState = oldState;
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "MediaChromeMenu",
    ()=>MediaChromeMenu,
    "createIndicator",
    ()=>createIndicator,
    "createMenuItem",
    ()=>createMenuItem,
    "default",
    ()=>media_chrome_menu_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$anchor$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/anchor-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/resize-observer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _mediaController, _previouslyFocused, _invokerElement, _previousItems, _mutationObserver, _isPopover, _cssRule, _handleSlotChange, handleSlotChange_fn, _handleMenuItems, _updateLayoutStyle, updateLayoutStyle_fn, _handleInvoke, handleInvoke_fn, _handleOpen, handleOpen_fn, _handleClosed, handleClosed_fn, _handleBoundsResize, _handleMenuResize, _positionMenu, positionMenu_fn, _resizeMenu, resizeMenu_fn, _handleClick, handleClick_fn, _backButtonElement, backButtonElement_get, _handleToggle, handleToggle_fn, _checkSubmenuHasExpanded, checkSubmenuHasExpanded_fn, _handleFocusOut, handleFocusOut_fn, _handleKeyDown, handleKeyDown_fn, _getItem, getItem_fn, _getTabItem, getTabItem_fn, _setTabItem, setTabItem_fn, _selectItem, selectItem_fn;
;
;
;
;
;
;
function createMenuItem(param) {
    let { type, text, value, checked } = param;
    const item = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"].createElement("media-chrome-menu-item");
    item.type = type != null ? type : "";
    item.part.add("menu-item");
    if (type) item.part.add(type);
    item.value = value;
    item.checked = checked;
    const label = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"].createElement("span");
    label.textContent = text;
    item.append(label);
    return item;
}
function createIndicator(el, name) {
    let customIndicator = el.querySelector(':scope > [slot="'.concat(name, '"]'));
    if ((customIndicator == null ? void 0 : customIndicator.nodeName) == "SLOT") customIndicator = customIndicator.assignedElements({
        flatten: true
    })[0];
    if (customIndicator) {
        customIndicator = customIndicator.cloneNode(true);
        return customIndicator;
    }
    const fallbackIndicator = el.shadowRoot.querySelector('[name="'.concat(name, '"] > svg'));
    if (fallbackIndicator) {
        return fallbackIndicator.cloneNode(true);
    }
    return "";
}
function getTemplateHTML(_attrs) {
    return '\n    <style>\n      :host {\n        font: var(--media-font,\n          var(--media-font-weight, normal)\n          var(--media-font-size, 14px) /\n          var(--media-text-content-height, var(--media-control-height, 24px))\n          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n        --_menu-bg: rgb(20 20 30 / .8);\n        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));\n        border-radius: var(--media-menu-border-radius);\n        border: var(--media-menu-border, none);\n        display: var(--media-menu-display, inline-flex);\n        transition: var(--media-menu-transition-in,\n          visibility 0s,\n          opacity .2s ease-out,\n          transform .15s ease-out,\n          left .2s ease-in-out,\n          min-width .2s ease-in-out,\n          min-height .2s ease-in-out\n        ) !important;\n        \n        visibility: var(--media-menu-visibility, visible);\n        opacity: var(--media-menu-opacity, 1);\n        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));\n        transform: var(--media-menu-transform-in, translateY(0) scale(1));\n        flex-direction: column;\n        \n        min-height: 0;\n        position: relative;\n        bottom: var(--_menu-bottom);\n        box-sizing: border-box;\n      } \n\n      @-moz-document url-prefix() {\n        :host{\n          --_menu-bg: rgb(20 20 30);\n        }\n      }\n\n      :host([hidden]) {\n        transition: var(--media-menu-transition-out,\n          visibility .15s ease-in,\n          opacity .15s ease-in,\n          transform .15s ease-in\n        ) !important;\n        visibility: var(--media-menu-hidden-visibility, hidden);\n        opacity: var(--media-menu-hidden-opacity, 0);\n        max-height: var(--media-menu-hidden-max-height,\n          var(--media-menu-max-height, var(--_menu-max-height, 300px)));\n        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));\n        pointer-events: none;\n      }\n\n      :host([slot="submenu"]) {\n        background: none;\n        width: 100%;\n        min-height: 100%;\n        position: absolute;\n        bottom: 0;\n        right: -100%;\n      }\n\n      #container {\n        display: flex;\n        flex-direction: column;\n        min-height: 0;\n        transition: transform .2s ease-out;\n        transform: translate(0, 0);\n      }\n\n      #container.has-expanded {\n        transition: transform .2s ease-in;\n        transform: translate(-100%, 0);\n      }\n\n      button {\n        background: none;\n        color: inherit;\n        border: none;\n        padding: 0;\n        font: inherit;\n        outline: inherit;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      slot[name="header"][hidden] {\n        display: none;\n      }\n\n      slot[name="header"] > *,\n      slot[name="header"]::slotted(*) {\n        padding: .4em .7em;\n        border-bottom: 1px solid rgb(255 255 255 / .25);\n        cursor: var(--media-cursor, default);\n      }\n\n      slot[name="header"] > button[part~="back"],\n      slot[name="header"]::slotted(button[part~="back"]) {\n        cursor: var(--media-cursor, pointer);\n      }\n\n      svg[part~="back"] {\n        height: var(--media-menu-icon-height, var(--media-control-height, 24px));\n        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));\n        display: block;\n        margin-right: .5ch;\n      }\n\n      slot:not([name]) {\n        gap: var(--media-menu-gap);\n        flex-direction: var(--media-menu-flex-direction, column);\n        overflow: var(--media-menu-overflow, hidden auto);\n        display: flex;\n        min-height: 0;\n      }\n\n      :host([role="menu"]) slot:not([name]) {\n        padding-block: .4em;\n      }\n\n      slot:not([name])::slotted([role="menu"]) {\n        background: none;\n      }\n\n      media-chrome-menu-item > span {\n        margin-right: .5ch;\n        max-width: var(--media-menu-item-max-width);\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n    </style>\n    <style id="layout-row" media="width:0">\n\n      slot[name="header"] > *,\n      slot[name="header"]::slotted(*) {\n        padding: .4em .5em;\n      }\n\n      slot:not([name]) {\n        gap: var(--media-menu-gap, .25em);\n        flex-direction: var(--media-menu-flex-direction, row);\n        padding-inline: .5em;\n      }\n\n      media-chrome-menu-item {\n        padding: .3em .5em;\n      }\n\n      media-chrome-menu-item[aria-checked="true"] {\n        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));\n      }\n\n      \n      media-chrome-menu-item::part(checked-indicator) {\n        display: var(--media-menu-item-checked-indicator-display, none);\n      }\n    </style>\n    <div id="container">\n      <slot name="header" hidden>\n        <button part="back button" aria-label="Back to previous menu">\n          <slot name="back-icon">\n            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">\n              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>\n            </svg>\n          </slot>\n          <slot name="title"></slot>\n        </button>\n      </slot>\n      <slot></slot>\n    </div>\n    <slot name="checked-indicator" hidden></slot>\n  ';
}
const Attributes = {
    STYLE: "style",
    HIDDEN: "hidden",
    DISABLED: "disabled",
    ANCHOR: "anchor"
};
class MediaChromeMenu extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    static get observedAttributes() {
        return [
            Attributes.DISABLED,
            Attributes.HIDDEN,
            Attributes.STYLE,
            Attributes.ANCHOR,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER
        ];
    }
    static formatMenuItemText(text, _data) {
        return text;
    }
    enable() {
        this.addEventListener("click", this);
        this.addEventListener("focusout", this);
        this.addEventListener("keydown", this);
        this.addEventListener("invoke", this);
        this.addEventListener("toggle", this);
    }
    disable() {
        this.removeEventListener("click", this);
        this.removeEventListener("focusout", this);
        this.removeEventListener("keyup", this);
        this.removeEventListener("invoke", this);
        this.removeEventListener("toggle", this);
    }
    handleEvent(event) {
        switch(event.type){
            case "slotchange":
                __privateMethod(this, _handleSlotChange, handleSlotChange_fn).call(this, event);
                break;
            case "invoke":
                __privateMethod(this, _handleInvoke, handleInvoke_fn).call(this, event);
                break;
            case "click":
                __privateMethod(this, _handleClick, handleClick_fn).call(this, event);
                break;
            case "toggle":
                __privateMethod(this, _handleToggle, handleToggle_fn).call(this, event);
                break;
            case "focusout":
                __privateMethod(this, _handleFocusOut, handleFocusOut_fn).call(this, event);
                break;
            case "keydown":
                __privateMethod(this, _handleKeyDown, handleKeyDown_fn).call(this, event);
                break;
        }
    }
    connectedCallback() {
        var _a, _b;
        __privateSet(this, _cssRule, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertCSSRule"])(this.shadowRoot, ":host"));
        __privateMethod(this, _updateLayoutStyle, updateLayoutStyle_fn).call(this);
        if (!this.hasAttribute("disabled")) {
            this.enable();
        }
        if (!this.role) {
            this.role = "menu";
        }
        __privateSet(this, _mediaController, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttributeMediaController"])(this));
        (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.associateElement) == null ? void 0 : _b.call(_a, this);
        if (!this.hidden) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeResize"])(getBoundsElement(this), __privateGet(this, _handleBoundsResize));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeResize"])(this, __privateGet(this, _handleMenuResize));
        }
    }
    disconnectedCallback() {
        var _a, _b;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unobserveResize"])(getBoundsElement(this), __privateGet(this, _handleBoundsResize));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unobserveResize"])(this, __privateGet(this, _handleMenuResize));
        this.disable();
        (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet(this, _mediaController, null);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        var _a, _b, _c, _d;
        if (attrName === Attributes.HIDDEN && newValue !== oldValue) {
            if (!__privateGet(this, _isPopover)) __privateSet(this, _isPopover, true);
            if (this.hidden) {
                __privateMethod(this, _handleClosed, handleClosed_fn).call(this);
            } else {
                __privateMethod(this, _handleOpen, handleOpen_fn).call(this);
            }
            this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleEvent"]({
                oldState: this.hidden ? "open" : "closed",
                newState: this.hidden ? "closed" : "open",
                bubbles: true
            }));
        } else if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStateReceiverAttributes"].MEDIA_CONTROLLER) {
            if (oldValue) {
                (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
                __privateSet(this, _mediaController, null);
            }
            if (newValue && this.isConnected) {
                __privateSet(this, _mediaController, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttributeMediaController"])(this));
                (_d = (_c = __privateGet(this, _mediaController)) == null ? void 0 : _c.associateElement) == null ? void 0 : _d.call(_c, this);
            }
        } else if (attrName === Attributes.DISABLED && newValue !== oldValue) {
            if (newValue == null) {
                this.enable();
            } else {
                this.disable();
            }
        } else if (attrName === Attributes.STYLE && newValue !== oldValue) {
            __privateMethod(this, _updateLayoutStyle, updateLayoutStyle_fn).call(this);
        }
    }
    formatMenuItemText(text, data) {
        return this.constructor.formatMenuItemText(text, data);
    }
    get anchor() {
        return this.getAttribute("anchor");
    }
    set anchor(value) {
        this.setAttribute("anchor", "".concat(value));
    }
    /**
   * Returns the anchor element when it is a floating menu.
   */ get anchorElement() {
        var _a;
        if (this.anchor) {
            return (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentOrShadowRoot"])(this)) == null ? void 0 : _a.querySelector("#".concat(this.anchor));
        }
        return null;
    }
    /**
   * Returns the menu items.
   */ get items() {
        return this.defaultSlot.assignedElements({
            flatten: true
        }).filter(isMenuItem);
    }
    get radioGroupItems() {
        return this.items.filter((item)=>item.role === "menuitemradio");
    }
    get checkedItems() {
        return this.items.filter((item)=>item.checked);
    }
    get value() {
        var _a, _b;
        return (_b = (_a = this.checkedItems[0]) == null ? void 0 : _a.value) != null ? _b : "";
    }
    set value(newValue) {
        const item = this.items.find((item2)=>item2.value === newValue);
        if (!item) return;
        __privateMethod(this, _selectItem, selectItem_fn).call(this, item);
    }
    focus() {
        __privateSet(this, _previouslyFocused, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])());
        if (this.items.length) {
            __privateMethod(this, _setTabItem, setTabItem_fn).call(this, this.items[0]);
            this.items[0].focus();
            return;
        }
        const focusable = this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');
        focusable == null ? void 0 : focusable.focus();
    }
    handleSelect(event) {
        var _a;
        const item = __privateMethod(this, _getItem, getItem_fn).call(this, event);
        if (!item) return;
        __privateMethod(this, _selectItem, selectItem_fn).call(this, item, item.type === "checkbox");
        if (__privateGet(this, _invokerElement) && !this.hidden) {
            (_a = __privateGet(this, _previouslyFocused)) == null ? void 0 : _a.focus();
            this.hidden = true;
        }
    }
    get keysUsed() {
        return [
            "Enter",
            "Escape",
            "Tab",
            " ",
            "ArrowDown",
            "ArrowUp",
            "Home",
            "End"
        ];
    }
    handleMove(event) {
        var _a, _b;
        const { key } = event;
        const items = this.items;
        const currentItem = (_b = (_a = __privateMethod(this, _getItem, getItem_fn).call(this, event)) != null ? _a : __privateMethod(this, _getTabItem, getTabItem_fn).call(this)) != null ? _b : items[0];
        const currentIndex = items.indexOf(currentItem);
        let index = Math.max(0, currentIndex);
        if (key === "ArrowDown") {
            index++;
        } else if (key === "ArrowUp") {
            index--;
        } else if (event.key === "Home") {
            index = 0;
        } else if (event.key === "End") {
            index = items.length - 1;
        }
        if (index < 0) {
            index = items.length - 1;
        }
        if (index > items.length - 1) {
            index = 0;
        }
        __privateMethod(this, _setTabItem, setTabItem_fn).call(this, items[index]);
        items[index].focus();
    }
    constructor(){
        super();
        __privateAdd(this, _handleSlotChange);
        /**
     * Sets the layout style for the menu.
     * It can be a row or column layout. e.g. playback-rate-menu
     */ __privateAdd(this, _updateLayoutStyle);
        __privateAdd(this, _handleInvoke);
        __privateAdd(this, _handleOpen);
        __privateAdd(this, _handleClosed);
        /**
     * Updates the popover menu position based on the anchor element.
     * @param  {number} [menuWidth]
     */ __privateAdd(this, _positionMenu);
        /**
     * Resize this menu to fit the submenu.
     * @param  {boolean} animate
     */ __privateAdd(this, _resizeMenu);
        __privateAdd(this, _handleClick);
        __privateAdd(this, _backButtonElement);
        /**
     * Handle the toggle event of submenus.
     * Closes all other open submenus when opening a submenu.
     * Resizes this menu to fit the submenu.
     *
     * @param  {ToggleEvent} event
     */ __privateAdd(this, _handleToggle);
        /**
     * Check if any submenu is expanded and update the container class accordingly.
     * When the CSS :has() selector is supported, this can be done with CSS only.
     */ __privateAdd(this, _checkSubmenuHasExpanded);
        __privateAdd(this, _handleFocusOut);
        __privateAdd(this, _handleKeyDown);
        __privateAdd(this, _getItem);
        __privateAdd(this, _getTabItem);
        __privateAdd(this, _setTabItem);
        __privateAdd(this, _selectItem);
        __privateAdd(this, _mediaController, null);
        __privateAdd(this, _previouslyFocused, null);
        __privateAdd(this, _invokerElement, null);
        __privateAdd(this, _previousItems, /* @__PURE__ */ new Set());
        __privateAdd(this, _mutationObserver, void 0);
        __privateAdd(this, _isPopover, false);
        __privateAdd(this, _cssRule, null);
        /**
     * Fires an event when a menu item is added or removed.
     * This is needed to update the description slot of an ancestor menu item.
     */ __privateAdd(this, _handleMenuItems, ()=>{
            const previousItems = __privateGet(this, _previousItems);
            const currentItems = new Set(this.items);
            for (const item of previousItems){
                if (!currentItems.has(item)) {
                    this.dispatchEvent(new CustomEvent("removemenuitem", {
                        detail: item
                    }));
                }
            }
            for (const item of currentItems){
                if (!previousItems.has(item)) {
                    this.dispatchEvent(new CustomEvent("addmenuitem", {
                        detail: item
                    }));
                }
            }
            __privateSet(this, _previousItems, currentItems);
        });
        __privateAdd(this, _handleBoundsResize, ()=>{
            __privateMethod(this, _positionMenu, positionMenu_fn).call(this);
            __privateMethod(this, _resizeMenu, resizeMenu_fn).call(this, false);
        });
        __privateAdd(this, _handleMenuResize, ()=>{
            __privateMethod(this, _positionMenu, positionMenu_fn).call(this);
        });
        if (!this.shadowRoot) {
            this.attachShadow(this.constructor.shadowRootOptions);
            const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
            this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
        }
        this.container = this.shadowRoot.querySelector("#container");
        this.defaultSlot = this.shadowRoot.querySelector("slot:not([name])");
        this.shadowRoot.addEventListener("slotchange", this);
        __privateSet(this, _mutationObserver, new MutationObserver(__privateGet(this, _handleMenuItems)));
        __privateGet(this, _mutationObserver).observe(this.defaultSlot, {
            childList: true
        });
    }
}
_mediaController = new WeakMap();
_previouslyFocused = new WeakMap();
_invokerElement = new WeakMap();
_previousItems = new WeakMap();
_mutationObserver = new WeakMap();
_isPopover = new WeakMap();
_cssRule = new WeakMap();
_handleSlotChange = new WeakSet();
handleSlotChange_fn = function(event) {
    const slot = event.target;
    for (const node of slot.assignedNodes({
        flatten: true
    })){
        if (node.nodeType === 3 && node.textContent.trim() === "") {
            node.remove();
        }
    }
    if ([
        "header",
        "title"
    ].includes(slot.name)) {
        const header = this.shadowRoot.querySelector('slot[name="header"]');
        header.hidden = slot.assignedNodes().length === 0;
    }
    if (!slot.name) {
        __privateGet(this, _handleMenuItems).call(this);
    }
};
_handleMenuItems = new WeakMap();
_updateLayoutStyle = new WeakSet();
updateLayoutStyle_fn = function() {
    var _a;
    const layoutRowStyle = this.shadowRoot.querySelector("#layout-row");
    const menuLayout = (_a = getComputedStyle(this).getPropertyValue("--media-menu-layout")) == null ? void 0 : _a.trim();
    layoutRowStyle.setAttribute("media", menuLayout === "row" ? "" : "width:0");
};
_handleInvoke = new WeakSet();
handleInvoke_fn = function(event) {
    __privateSet(this, _invokerElement, event.relatedTarget);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsComposedNode"])(this, event.relatedTarget)) {
        this.hidden = !this.hidden;
    }
};
_handleOpen = new WeakSet();
handleOpen_fn = function() {
    var _a;
    (_a = __privateGet(this, _invokerElement)) == null ? void 0 : _a.setAttribute("aria-expanded", "true");
    this.addEventListener("transitionend", ()=>this.focus(), {
        once: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeResize"])(getBoundsElement(this), __privateGet(this, _handleBoundsResize));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeResize"])(this, __privateGet(this, _handleMenuResize));
};
_handleClosed = new WeakSet();
handleClosed_fn = function() {
    var _a;
    (_a = __privateGet(this, _invokerElement)) == null ? void 0 : _a.setAttribute("aria-expanded", "false");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unobserveResize"])(getBoundsElement(this), __privateGet(this, _handleBoundsResize));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$resize$2d$observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unobserveResize"])(this, __privateGet(this, _handleMenuResize));
};
_handleBoundsResize = new WeakMap();
_handleMenuResize = new WeakMap();
_positionMenu = new WeakSet();
positionMenu_fn = function(menuWidth) {
    if (this.hasAttribute("mediacontroller") && !this.anchor) return;
    if (this.hidden || !this.anchorElement) return;
    const { x, y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$anchor$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computePosition"])({
        anchor: this.anchorElement,
        floating: this,
        placement: "top-start"
    });
    menuWidth != null ? menuWidth : menuWidth = this.offsetWidth;
    const bounds = getBoundsElement(this);
    const boundsRect = bounds.getBoundingClientRect();
    const right = boundsRect.width - x - menuWidth;
    const bottom = boundsRect.height - y - this.offsetHeight;
    const { style } = __privateGet(this, _cssRule);
    style.setProperty("position", "absolute");
    style.setProperty("right", "".concat(Math.max(0, right), "px"));
    style.setProperty("--_menu-bottom", "".concat(bottom, "px"));
    const computedStyle = getComputedStyle(this);
    const isBottomCalc = style.getPropertyValue("--_menu-bottom") === computedStyle.bottom;
    const realBottom = isBottomCalc ? bottom : parseFloat(computedStyle.bottom);
    const maxHeight = boundsRect.height - realBottom - parseFloat(computedStyle.marginBottom);
    this.style.setProperty("--_menu-max-height", "".concat(maxHeight, "px"));
};
_resizeMenu = new WeakSet();
resizeMenu_fn = function(animate) {
    const expandedMenuItem = this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]');
    const expandedSubmenu = expandedMenuItem == null ? void 0 : expandedMenuItem.querySelector('[role="menu"]');
    const { style } = __privateGet(this, _cssRule);
    if (!animate) {
        style.setProperty("--media-menu-transition-in", "none");
    }
    if (expandedSubmenu) {
        const height = expandedSubmenu.offsetHeight;
        const width = Math.max(expandedSubmenu.offsetWidth, expandedMenuItem.offsetWidth);
        this.style.setProperty("min-width", "".concat(width, "px"));
        this.style.setProperty("min-height", "".concat(height, "px"));
        __privateMethod(this, _positionMenu, positionMenu_fn).call(this, width);
    } else {
        this.style.removeProperty("min-width");
        this.style.removeProperty("min-height");
        __privateMethod(this, _positionMenu, positionMenu_fn).call(this);
    }
    style.removeProperty("--media-menu-transition-in");
};
_handleClick = new WeakSet();
handleClick_fn = function(event) {
    var _a;
    event.stopPropagation();
    if (event.composedPath().includes(__privateGet(this, _backButtonElement, backButtonElement_get))) {
        (_a = __privateGet(this, _previouslyFocused)) == null ? void 0 : _a.focus();
        this.hidden = true;
        return;
    }
    const item = __privateMethod(this, _getItem, getItem_fn).call(this, event);
    if (!item || item.hasAttribute("disabled")) return;
    __privateMethod(this, _setTabItem, setTabItem_fn).call(this, item);
    this.handleSelect(event);
};
_backButtonElement = new WeakSet();
backButtonElement_get = function() {
    var _a;
    const headerSlot = this.shadowRoot.querySelector('slot[name="header"]');
    return (_a = headerSlot.assignedElements({
        flatten: true
    })) == null ? void 0 : _a.find((el)=>el.matches('button[part~="back"]'));
};
_handleToggle = new WeakSet();
handleToggle_fn = function(event) {
    if (event.target === this) return;
    __privateMethod(this, _checkSubmenuHasExpanded, checkSubmenuHasExpanded_fn).call(this);
    const menuItemsWithSubmenu = Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));
    for (const item of menuItemsWithSubmenu){
        if (item.invokeTargetElement == event.target) continue;
        if (event.newState == "open" && item.getAttribute("aria-expanded") == "true" && !item.invokeTargetElement.hidden) {
            item.invokeTargetElement.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvokeEvent"]({
                relatedTarget: item
            }));
        }
    }
    for (const item of menuItemsWithSubmenu){
        item.setAttribute("aria-expanded", "".concat(!item.submenuElement.hidden));
    }
    __privateMethod(this, _resizeMenu, resizeMenu_fn).call(this, true);
};
_checkSubmenuHasExpanded = new WeakSet();
checkSubmenuHasExpanded_fn = function() {
    const selector = '[role="menuitem"] > [role="menu"]:not([hidden])';
    const expandedMenuItem = this.querySelector(selector);
    this.container.classList.toggle("has-expanded", !!expandedMenuItem);
};
_handleFocusOut = new WeakSet();
handleFocusOut_fn = function(event) {
    var _a;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsComposedNode"])(this, event.relatedTarget)) {
        if (__privateGet(this, _isPopover)) {
            (_a = __privateGet(this, _previouslyFocused)) == null ? void 0 : _a.focus();
        }
        if (__privateGet(this, _invokerElement) && __privateGet(this, _invokerElement) !== event.relatedTarget && !this.hidden) {
            this.hidden = true;
        }
    }
};
_handleKeyDown = new WeakSet();
handleKeyDown_fn = function(event) {
    var _a, _b, _c, _d, _e;
    const { key, ctrlKey, altKey, metaKey } = event;
    if (ctrlKey || altKey || metaKey) {
        return;
    }
    if (!this.keysUsed.includes(key)) {
        return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (key === "Tab") {
        if (__privateGet(this, _isPopover)) {
            this.hidden = true;
            return;
        }
        if (event.shiftKey) {
            (_b = (_a = this.previousElementSibling) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
        } else {
            (_d = (_c = this.nextElementSibling) == null ? void 0 : _c.focus) == null ? void 0 : _d.call(_c);
        }
        this.blur();
    } else if (key === "Escape") {
        (_e = __privateGet(this, _previouslyFocused)) == null ? void 0 : _e.focus();
        if (__privateGet(this, _isPopover)) {
            this.hidden = true;
        }
    } else if (key === "Enter" || key === " ") {
        this.handleSelect(event);
    } else {
        this.handleMove(event);
    }
};
_getItem = new WeakSet();
getItem_fn = function(event) {
    return event.composedPath().find((el)=>{
        return [
            "menuitemradio",
            "menuitemcheckbox"
        ].includes(el.role);
    });
};
_getTabItem = new WeakSet();
getTabItem_fn = function() {
    return this.items.find((item)=>item.tabIndex === 0);
};
_setTabItem = new WeakSet();
setTabItem_fn = function(tabItem) {
    for (const item of this.items){
        item.tabIndex = item === tabItem ? 0 : -1;
    }
};
_selectItem = new WeakSet();
selectItem_fn = function(item, toggle) {
    const oldCheckedItems = [
        ...this.checkedItems
    ];
    if (item.type === "radio") {
        this.radioGroupItems.forEach((el)=>el.checked = false);
    }
    if (toggle) {
        item.checked = !item.checked;
    } else {
        item.checked = true;
    }
    if (this.checkedItems.some((opt, i)=>opt != oldCheckedItems[i])) {
        this.dispatchEvent(new Event("change", {
            bubbles: true,
            composed: true
        }));
    }
};
MediaChromeMenu.shadowRootOptions = {
    mode: "open"
};
MediaChromeMenu.getTemplateHTML = getTemplateHTML;
function isMenuItem(element) {
    return [
        "menuitem",
        "menuitemradio",
        "menuitemcheckbox"
    ].includes(element == null ? void 0 : element.role);
}
function getBoundsElement(host) {
    var _a;
    return (_a = host.getAttribute("bounds") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestComposedNode"])(host, "#".concat(host.getAttribute("bounds"))) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaController"])(host) || host.parentElement) != null ? _a : host;
}
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-chrome-menu")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-chrome-menu", MediaChromeMenu);
}
var media_chrome_menu_default = MediaChromeMenu;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu-item.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "MediaChromeMenuItem",
    ()=>MediaChromeMenuItem,
    "default",
    ()=>media_chrome_menu_item_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _dirty, _ownerElement, _handleSlotChange, handleSlotChange_fn, _submenuConnected, submenuConnected_fn, _submenuDisconnected, submenuDisconnected_fn, _handleMenuItem, _handleKeyUp, handleKeyUp_fn, _handleKeyDown, handleKeyDown_fn, _reset, reset_fn;
;
;
;
function getTemplateHTML(_attrs) {
    return /*html*/ '\n    <style>\n      :host {\n        transition: var(--media-menu-item-transition,\n          background .15s linear,\n          opacity .2s ease-in-out\n        );\n        outline: var(--media-menu-item-outline, 0);\n        outline-offset: var(--media-menu-item-outline-offset, -1px);\n        cursor: var(--media-cursor, pointer);\n        display: flex;\n        align-items: center;\n        align-self: stretch;\n        justify-self: stretch;\n        white-space: nowrap;\n        white-space-collapse: collapse;\n        text-wrap: nowrap;\n        padding: .4em .8em .4em 1em;\n      }\n\n      :host(:focus-visible) {\n        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));\n        outline: var(--media-menu-item-hover-outline, 0);\n        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));\n      }\n\n      :host(:hover) {\n        cursor: var(--media-cursor, pointer);\n        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));\n        outline: var(--media-menu-item-hover-outline);\n        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));\n      }\n\n      :host([aria-checked="true"]) {\n        background: var(--media-menu-item-checked-background);\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        color: rgba(255, 255, 255, .3);\n      }\n\n      slot:not([name]) {\n        width: 100%;\n      }\n\n      slot:not([name="submenu"]) {\n        display: inline-flex;\n        align-items: center;\n        transition: inherit;\n        opacity: var(--media-menu-item-opacity, 1);\n      }\n\n      slot[name="description"] {\n        justify-content: end;\n      }\n\n      slot[name="description"] > span {\n        display: inline-block;\n        margin-inline: 1em .2em;\n        max-width: var(--media-menu-item-description-max-width, 100px);\n        text-overflow: ellipsis;\n        overflow: hidden;\n        font-size: .8em;\n        font-weight: 400;\n        text-align: right;\n        position: relative;\n        top: .04em;\n      }\n\n      slot[name="checked-indicator"] {\n        display: none;\n      }\n\n      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {\n        display: var(--media-menu-item-checked-indicator-display, inline-block);\n      }\n\n      \n      svg, img, ::slotted(svg), ::slotted(img) {\n        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));\n        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));\n        display: block;\n      }\n\n      \n      [part~="indicator"],\n      ::slotted([part~="indicator"]) {\n        fill: var(--media-menu-item-indicator-fill,\n          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));\n        height: var(--media-menu-item-indicator-height, 1.25em);\n        margin-right: .5ch;\n      }\n\n      [part~="checked-indicator"] {\n        visibility: hidden;\n      }\n\n      :host([aria-checked="true"]) [part~="checked-indicator"] {\n        visibility: visible;\n      }\n    </style>\n    <slot name="checked-indicator">\n      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">\n        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>\n      </svg>\n    </slot>\n    <slot name="prefix"></slot>\n    <slot></slot>\n    <slot name="description"></slot>\n    <slot name="suffix">\n      '.concat(this.getSuffixSlotInnerHTML(_attrs), '\n    </slot>\n    <slot name="submenu"></slot>\n  ');
}
function getSuffixSlotInnerHTML(_attrs) {
    return "";
}
const Attributes = {
    TYPE: "type",
    VALUE: "value",
    CHECKED: "checked",
    DISABLED: "disabled"
};
class MediaChromeMenuItem extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].HTMLElement {
    static get observedAttributes() {
        return [
            Attributes.TYPE,
            Attributes.DISABLED,
            Attributes.CHECKED,
            Attributes.VALUE
        ];
    }
    enable() {
        if (!this.hasAttribute("tabindex")) {
            this.setAttribute("tabindex", "-1");
        }
        if (isCheckable(this) && !this.hasAttribute("aria-checked")) {
            this.setAttribute("aria-checked", "false");
        }
        this.addEventListener("click", this);
        this.addEventListener("keydown", this);
    }
    disable() {
        this.removeAttribute("tabindex");
        this.removeEventListener("click", this);
        this.removeEventListener("keydown", this);
        this.removeEventListener("keyup", this);
    }
    handleEvent(event) {
        switch(event.type){
            case "slotchange":
                __privateMethod(this, _handleSlotChange, handleSlotChange_fn).call(this, event);
                break;
            case "click":
                this.handleClick(event);
                break;
            case "keydown":
                __privateMethod(this, _handleKeyDown, handleKeyDown_fn).call(this, event);
                break;
            case "keyup":
                __privateMethod(this, _handleKeyUp, handleKeyUp_fn).call(this, event);
                break;
        }
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === Attributes.CHECKED && isCheckable(this) && !__privateGet(this, _dirty)) {
            this.setAttribute("aria-checked", newValue != null ? "true" : "false");
        } else if (attrName === Attributes.TYPE && newValue !== oldValue) {
            this.role = "menuitem" + newValue;
        } else if (attrName === Attributes.DISABLED && newValue !== oldValue) {
            if (newValue == null) {
                this.enable();
            } else {
                this.disable();
            }
        }
    }
    connectedCallback() {
        if (!this.hasAttribute(Attributes.DISABLED)) {
            this.enable();
        }
        this.role = "menuitem" + this.type;
        __privateSet(this, _ownerElement, closestMenuItemsContainer(this, this.parentNode));
        __privateMethod(this, _reset, reset_fn).call(this);
    }
    disconnectedCallback() {
        this.disable();
        __privateMethod(this, _reset, reset_fn).call(this);
        __privateSet(this, _ownerElement, null);
    }
    get invokeTarget() {
        return this.getAttribute("invoketarget");
    }
    set invokeTarget(value) {
        this.setAttribute("invoketarget", "".concat(value));
    }
    /**
   * Returns the element with the id specified by the `invoketarget` attribute
   * or the slotted submenu element.
   */ get invokeTargetElement() {
        var _a;
        if (this.invokeTarget) {
            return (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentOrShadowRoot"])(this)) == null ? void 0 : _a.querySelector("#".concat(this.invokeTarget));
        }
        return this.submenuElement;
    }
    /**
   * Returns the slotted submenu element.
   */ get submenuElement() {
        const submenuSlot = this.shadowRoot.querySelector('slot[name="submenu"]');
        return submenuSlot.assignedElements({
            flatten: true
        })[0];
    }
    get type() {
        var _a;
        return (_a = this.getAttribute(Attributes.TYPE)) != null ? _a : "";
    }
    set type(val) {
        this.setAttribute(Attributes.TYPE, "".concat(val));
    }
    get value() {
        var _a;
        return (_a = this.getAttribute(Attributes.VALUE)) != null ? _a : this.text;
    }
    set value(val) {
        this.setAttribute(Attributes.VALUE, val);
    }
    get text() {
        var _a;
        return ((_a = this.textContent) != null ? _a : "").trim();
    }
    get checked() {
        if (!isCheckable(this)) return void 0;
        return this.getAttribute("aria-checked") === "true";
    }
    set checked(value) {
        if (!isCheckable(this)) return;
        __privateSet(this, _dirty, true);
        this.setAttribute("aria-checked", value ? "true" : "false");
        if (value) {
            this.part.add("checked");
        } else {
            this.part.remove("checked");
        }
    }
    handleClick(event) {
        if (isCheckable(this)) return;
        if (this.invokeTargetElement && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsComposedNode"])(this, event.target)) {
            this.invokeTargetElement.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvokeEvent"]({
                relatedTarget: this
            }));
        }
    }
    get keysUsed() {
        return [
            "Enter",
            " "
        ];
    }
    constructor(){
        super();
        __privateAdd(this, _handleSlotChange);
        __privateAdd(this, _submenuConnected);
        __privateAdd(this, _submenuDisconnected);
        __privateAdd(this, _handleKeyUp);
        __privateAdd(this, _handleKeyDown);
        __privateAdd(this, _reset);
        __privateAdd(this, _dirty, false);
        __privateAdd(this, _ownerElement, void 0);
        /**
     * If there is a slotted submenu the fallback content of the description slot
     * is populated with the text of the first checked item.
     */ __privateAdd(this, _handleMenuItem, ()=>{
            var _a, _b;
            this.setAttribute("submenusize", "".concat(this.submenuElement.items.length));
            const descriptionSlot = this.shadowRoot.querySelector('slot[name="description"]');
            const checkedItem = (_a = this.submenuElement.checkedItems) == null ? void 0 : _a[0];
            const description = (_b = checkedItem == null ? void 0 : checkedItem.dataset.description) != null ? _b : checkedItem == null ? void 0 : checkedItem.text;
            const span = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["document"].createElement("span");
            span.textContent = description != null ? description : "";
            descriptionSlot.replaceChildren(span);
        });
        if (!this.shadowRoot) {
            this.attachShadow(this.constructor.shadowRootOptions);
            const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedNodeMapToObject"])(this.attributes);
            this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
        }
        this.shadowRoot.addEventListener("slotchange", this);
    }
}
_dirty = new WeakMap();
_ownerElement = new WeakMap();
_handleSlotChange = new WeakSet();
handleSlotChange_fn = function(event) {
    const slot = event.target;
    const isDefaultSlot = !(slot == null ? void 0 : slot.name);
    if (isDefaultSlot) {
        for (const node of slot.assignedNodes({
            flatten: true
        })){
            if (node instanceof Text && node.textContent.trim() === "") {
                node.remove();
            }
        }
    }
    if (slot.name === "submenu") {
        if (this.submenuElement) {
            __privateMethod(this, _submenuConnected, submenuConnected_fn).call(this);
        } else {
            __privateMethod(this, _submenuDisconnected, submenuDisconnected_fn).call(this);
        }
    }
};
_submenuConnected = new WeakSet();
submenuConnected_fn = async function() {
    this.setAttribute("aria-haspopup", "menu");
    this.setAttribute("aria-expanded", "".concat(!this.submenuElement.hidden));
    this.submenuElement.addEventListener("change", __privateGet(this, _handleMenuItem));
    this.submenuElement.addEventListener("addmenuitem", __privateGet(this, _handleMenuItem));
    this.submenuElement.addEventListener("removemenuitem", __privateGet(this, _handleMenuItem));
    __privateGet(this, _handleMenuItem).call(this);
};
_submenuDisconnected = new WeakSet();
submenuDisconnected_fn = function() {
    this.removeAttribute("aria-haspopup");
    this.removeAttribute("aria-expanded");
    this.submenuElement.removeEventListener("change", __privateGet(this, _handleMenuItem));
    this.submenuElement.removeEventListener("addmenuitem", __privateGet(this, _handleMenuItem));
    this.submenuElement.removeEventListener("removemenuitem", __privateGet(this, _handleMenuItem));
    __privateGet(this, _handleMenuItem).call(this);
};
_handleMenuItem = new WeakMap();
_handleKeyUp = new WeakSet();
handleKeyUp_fn = function(event) {
    const { key } = event;
    if (!this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateMethod(this, _handleKeyUp, handleKeyUp_fn));
        return;
    }
    this.handleClick(event);
};
_handleKeyDown = new WeakSet();
handleKeyDown_fn = function(event) {
    const { metaKey, altKey, key } = event;
    if (metaKey || altKey || !this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateMethod(this, _handleKeyUp, handleKeyUp_fn));
        return;
    }
    this.addEventListener("keyup", __privateMethod(this, _handleKeyUp, handleKeyUp_fn), {
        once: true
    });
};
_reset = new WeakSet();
reset_fn = function() {
    var _a;
    const items = (_a = __privateGet(this, _ownerElement)) == null ? void 0 : _a.radioGroupItems;
    if (!items) return;
    let checkedItem = items.filter((item)=>item.getAttribute("aria-checked") === "true").pop();
    if (!checkedItem) checkedItem = items[0];
    for (const item of items){
        item.setAttribute("aria-checked", "false");
    }
    checkedItem == null ? void 0 : checkedItem.setAttribute("aria-checked", "true");
};
MediaChromeMenuItem.shadowRootOptions = {
    mode: "open"
};
MediaChromeMenuItem.getTemplateHTML = getTemplateHTML;
MediaChromeMenuItem.getSuffixSlotInnerHTML = getSuffixSlotInnerHTML;
function isCheckable(item) {
    return item.type === "radio" || item.type === "checkbox";
}
function closestMenuItemsContainer(childNode, parentNode) {
    if (!childNode) return null;
    const { host } = childNode.getRootNode();
    if (!parentNode && host) return closestMenuItemsContainer(childNode, host);
    if (parentNode == null ? void 0 : parentNode.items) return parentNode;
    return closestMenuItemsContainer(parentNode, parentNode == null ? void 0 : parentNode.parentNode);
}
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-chrome-menu-item")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-chrome-menu-item", MediaChromeMenuItem);
}
var media_chrome_menu_item_default = MediaChromeMenuItem;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-settings-menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaSettingsMenu",
    ()=>MediaSettingsMenu,
    "default",
    ()=>media_settings_menu_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
;
;
;
function getTemplateHTML(_attrs) {
    return /*html*/ "\n    ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenu"].getTemplateHTML(_attrs), '\n    <style>\n      :host {\n        --_menu-bg: rgb(20 20 30 / .8);\n        background: var(--media-settings-menu-background,\n            var(--media-menu-background,\n              var(--media-control-background,\n                var(--media-secondary-color, var(--_menu-bg)))));\n        min-width: var(--media-settings-menu-min-width, 170px);\n        border-radius: 2px 2px 0 0;\n        overflow: hidden;\n      }\n\n      @-moz-document url-prefix() {\n        :host{\n          --_menu-bg: rgb(20 20 30);\n        }\n      }\n\n      :host([role="menu"]) {\n        ', "\n        justify-content: end;\n      }\n\n      slot:not([name]) {\n        justify-content: var(--media-settings-menu-justify-content);\n        flex-direction: var(--media-settings-menu-flex-direction, column);\n        overflow: visible;\n      }\n\n      #container.has-expanded {\n        --media-settings-menu-item-opacity: 0;\n      }\n    </style>\n  ");
}
class MediaSettingsMenu extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenu"] {
    /**
   * Returns the anchor element when it is a floating menu.
   */ get anchorElement() {
        if (this.anchor !== "auto") return super.anchorElement;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaController"])(this).querySelector("media-settings-menu-button");
    }
}
MediaSettingsMenu.getTemplateHTML = getTemplateHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-settings-menu")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-settings-menu", MediaSettingsMenu);
}
var media_settings_menu_default = MediaSettingsMenu;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-settings-menu-item.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaSettingsMenuItem",
    ()=>MediaSettingsMenuItem,
    "default",
    ()=>media_settings_menu_item_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu-item.js [app-client] (ecmascript)");
;
;
function getTemplateHTML(_attrs) {
    return /*html*/ "\n    ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenuItem"].getTemplateHTML.call(this, _attrs), '\n    <style>\n      slot:not([name="submenu"]) {\n        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));\n      }\n\n      :host([aria-expanded="true"]:hover) {\n        background: transparent;\n      }\n    </style>\n  ');
}
function getSuffixSlotInnerHTML(_attrs) {
    return '\n    <svg aria-hidden="true" viewBox="0 0 20 24">\n      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>\n    </svg>\n  ';
}
class MediaSettingsMenuItem extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenuItem"] {
}
MediaSettingsMenuItem.shadowRootOptions = {
    mode: "open"
};
MediaSettingsMenuItem.getTemplateHTML = getTemplateHTML;
MediaSettingsMenuItem.getSuffixSlotInnerHTML = getSuffixSlotInnerHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-settings-menu-item")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-settings-menu-item", MediaSettingsMenuItem);
}
var media_settings_menu_item_default = MediaSettingsMenuItem;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaChromeMenuButton",
    ()=>MediaChromeMenuButton,
    "default",
    ()=>media_chrome_menu_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-chrome-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
;
;
;
;
class MediaChromeMenuButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$chrome$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeButton"] {
    connectedCallback() {
        super.connectedCallback();
        if (this.invokeTargetElement) {
            this.setAttribute("aria-haspopup", "menu");
        }
    }
    get invokeTarget() {
        return this.getAttribute("invoketarget");
    }
    set invokeTarget(value) {
        this.setAttribute("invoketarget", "".concat(value));
    }
    /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   * @return {HTMLElement | null}
   */ get invokeTargetElement() {
        var _a;
        if (this.invokeTarget) {
            return (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentOrShadowRoot"])(this)) == null ? void 0 : _a.querySelector("#".concat(this.invokeTarget));
        }
        return null;
    }
    handleClick() {
        var _a;
        (_a = this.invokeTargetElement) == null ? void 0 : _a.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvokeEvent"]({
            relatedTarget: this
        }));
    }
}
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-chrome-menu-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-chrome-menu-button", MediaChromeMenuButton);
}
var media_chrome_menu_button_default = MediaChromeMenuButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-settings-menu-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaSettingsMenuButton",
    ()=>MediaSettingsMenuButton,
    "default",
    ()=>media_settings_menu_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
;
;
;
;
function getSlotTemplateHTML() {
    return '\n    <style>\n      :host([aria-expanded="true"]) slot[name=tooltip] {\n        display: none;\n      }\n    </style>\n    <slot name="icon">\n      <svg aria-hidden="true" viewBox="0 0 24 24">\n        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>\n      </svg>\n    </slot>\n  ';
}
function getTooltipContentHTML() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Settings");
}
class MediaSettingsMenuButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenuButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            "target"
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("aria-label", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("settings"));
    }
    /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   * @return {HTMLElement | null}
   */ get invokeTargetElement() {
        if (this.invokeTarget != void 0) return super.invokeTargetElement;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaController"])(this).querySelector("media-settings-menu");
    }
}
MediaSettingsMenuButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaSettingsMenuButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-settings-menu-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-settings-menu-button", MediaSettingsMenuButton);
}
var media_settings_menu_button_default = MediaSettingsMenuButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-audio-track-menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaAudioTrackMenu",
    ()=>MediaAudioTrackMenu,
    "default",
    ()=>media_audio_track_menu_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _audioTrackList, _prevState, _render, render_fn, _onChange, onChange_fn;
;
;
;
;
;
class MediaAudioTrackMenu extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenu"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_LIST,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_ENABLED,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_UNAVAILABLE
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_ENABLED && oldValue !== newValue) {
            this.value = newValue;
        } else if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_LIST && oldValue !== newValue) {
            __privateSet(this, _audioTrackList, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAudioTrackList"])(newValue != null ? newValue : ""));
            __privateMethod(this, _render, render_fn).call(this);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    }
    /**
   * Returns the anchor element when it is a floating menu.
   */ get anchorElement() {
        var _a;
        if (this.anchor !== "auto") return super.anchorElement;
        return (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaController"])(this)) == null ? void 0 : _a.querySelector("media-audio-track-menu-button");
    }
    get mediaAudioTrackList() {
        return __privateGet(this, _audioTrackList);
    }
    set mediaAudioTrackList(list) {
        __privateSet(this, _audioTrackList, list);
        __privateMethod(this, _render, render_fn).call(this);
    }
    /**
   * Get enabled audio track id.
   */ get mediaAudioTrackEnabled() {
        var _a;
        return (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_ENABLED)) != null ? _a : "";
    }
    set mediaAudioTrackEnabled(id) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_ENABLED, id);
    }
    constructor(){
        super(...arguments);
        __privateAdd(this, _render);
        __privateAdd(this, _onChange);
        __privateAdd(this, _audioTrackList, []);
        __privateAdd(this, _prevState, void 0);
    }
}
_audioTrackList = new WeakMap();
_prevState = new WeakMap();
_render = new WeakSet();
render_fn = function() {
    if (__privateGet(this, _prevState) === JSON.stringify(this.mediaAudioTrackList)) return;
    __privateSet(this, _prevState, JSON.stringify(this.mediaAudioTrackList));
    const audioTrackList = this.mediaAudioTrackList;
    this.defaultSlot.textContent = "";
    for (const audioTrack of audioTrackList){
        const text = this.formatMenuItemText(audioTrack.label, audioTrack);
        const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMenuItem"])({
            type: "radio",
            text,
            value: "".concat(audioTrack.id),
            checked: audioTrack.enabled
        });
        item.prepend((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIndicator"])(this, "checked-indicator"));
        this.defaultSlot.append(item);
    }
};
_onChange = new WeakSet();
onChange_fn = function() {
    if (this.value == null) return;
    const event = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_AUDIO_TRACK_REQUEST, {
        composed: true,
        bubbles: true,
        detail: this.value
    });
    this.dispatchEvent(event);
};
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-audio-track-menu")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-audio-track-menu", MediaAudioTrackMenu);
}
var media_audio_track_menu_default = MediaAudioTrackMenu;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-audio-track-menu-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaAudioTrackMenuButton",
    ()=>MediaAudioTrackMenuButton,
    "default",
    ()=>media_audio_track_menu_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
;
;
;
;
;
const audioTrackIcon = '<svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>\n  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>\n</svg>';
function getSlotTemplateHTML() {
    return /*html*/ '\n    <style>\n      :host([aria-expanded="true"]) slot[name=tooltip] {\n        display: none;\n      }\n    </style>\n    <slot name="icon">'.concat(audioTrackIcon, "</slot>\n  ");
}
function getTooltipContentHTML() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Audio");
}
class MediaAudioTrackMenuButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenuButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_ENABLED,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_UNAVAILABLE
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("aria-label", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Audio"));
    }
    /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   * @return {HTMLElement | null}
   */ get invokeTargetElement() {
        var _a;
        if (this.invokeTarget != void 0) return super.invokeTargetElement;
        return (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaController"])(this)) == null ? void 0 : _a.querySelector("media-audio-track-menu");
    }
    /**
   * Get enabled audio track id.
   * @return {string}
   */ get mediaAudioTrackEnabled() {
        var _a;
        return (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_ENABLED)) != null ? _a : "";
    }
    set mediaAudioTrackEnabled(id) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_AUDIO_TRACK_ENABLED, id);
    }
}
MediaAudioTrackMenuButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaAudioTrackMenuButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-audio-track-menu-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-audio-track-menu-button", MediaAudioTrackMenuButton);
}
var media_audio_track_menu_button_default = MediaAudioTrackMenuButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-captions-menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaCaptionsMenu",
    ()=>MediaCaptionsMenu,
    "default",
    ()=>media_captions_menu_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/captions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _prevState, _render, render_fn, _onChange, onChange_fn;
;
;
;
;
;
;
const ccIcon = '\n  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">\n    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>\n  </svg>';
function getTemplateHTML(_attrs) {
    return /*html*/ "\n    ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenu"].getTemplateHTML(_attrs), '\n    <slot name="captions-indicator" hidden>').concat(ccIcon, "</slot>\n  ");
}
class MediaCaptionsMenu extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenu"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_LIST,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_LIST && oldValue !== newValue) {
            __privateMethod(this, _render, render_fn).call(this);
        } else if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING && oldValue !== newValue) {
            this.value = newValue;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    }
    /**
   * Returns the anchor element when it is a floating menu.
   */ get anchorElement() {
        if (this.anchor !== "auto") return super.anchorElement;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaController"])(this).querySelector("media-captions-menu-button");
    }
    /**
   * @type {Array<object>} An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */ get mediaSubtitlesList() {
        return getSubtitlesListAttr(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_LIST);
    }
    set mediaSubtitlesList(list) {
        setSubtitlesListAttr(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_LIST, list);
    }
    /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */ get mediaSubtitlesShowing() {
        return getSubtitlesListAttr(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING);
    }
    set mediaSubtitlesShowing(list) {
        setSubtitlesListAttr(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING, list);
    }
    constructor(){
        super(...arguments);
        __privateAdd(this, _render);
        __privateAdd(this, _onChange);
        __privateAdd(this, _prevState, void 0);
    }
}
_prevState = new WeakMap();
_render = new WeakSet();
render_fn = function() {
    var _a;
    if (__privateGet(this, _prevState) === JSON.stringify(this.mediaSubtitlesList)) return;
    __privateSet(this, _prevState, JSON.stringify(this.mediaSubtitlesList));
    this.defaultSlot.textContent = "";
    const isOff = !this.value;
    const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMenuItem"])({
        type: "radio",
        text: this.formatMenuItemText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Off")),
        value: "off",
        checked: isOff
    });
    item.prepend((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIndicator"])(this, "checked-indicator"));
    this.defaultSlot.append(item);
    const subtitlesList = this.mediaSubtitlesList;
    for (const subs of subtitlesList){
        const item2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMenuItem"])({
            type: "radio",
            text: this.formatMenuItemText(subs.label, subs),
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTextTrackObj"])(subs),
            checked: this.value == (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTextTrackObj"])(subs)
        });
        item2.prepend((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIndicator"])(this, "checked-indicator"));
        const type = (_a = subs.kind) != null ? _a : "subs";
        if (type === "captions") {
            item2.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIndicator"])(this, "captions-indicator"));
        }
        this.defaultSlot.append(item2);
    }
};
_onChange = new WeakSet();
onChange_fn = function() {
    const showingSubs = this.mediaSubtitlesShowing;
    const showingSubsStr = this.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING);
    const localStateChange = this.value !== showingSubsStr;
    if ((showingSubs == null ? void 0 : showingSubs.length) && localStateChange) {
        this.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_DISABLE_SUBTITLES_REQUEST, {
            composed: true,
            bubbles: true,
            detail: showingSubs
        }));
    }
    if (!this.value || !localStateChange) return;
    const event = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_SHOW_SUBTITLES_REQUEST, {
        composed: true,
        bubbles: true,
        detail: this.value
    });
    this.dispatchEvent(event);
};
MediaCaptionsMenu.getTemplateHTML = getTemplateHTML;
const getSubtitlesListAttr = (el, attrName)=>{
    const attrVal = el.getAttribute(attrName);
    return attrVal ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTextTracksStr"])(attrVal) : [];
};
const setSubtitlesListAttr = (el, attrName, list)=>{
    if (!(list == null ? void 0 : list.length)) {
        el.removeAttribute(attrName);
        return;
    }
    const newValStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyTextTrackList"])(list);
    const oldVal = el.getAttribute(attrName);
    if (oldVal === newValStr) return;
    el.setAttribute(attrName, newValStr);
};
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-captions-menu")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-captions-menu", MediaCaptionsMenu);
}
var media_captions_menu_default = MediaCaptionsMenu;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-captions-menu-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaCaptionsMenuButton",
    ()=>MediaCaptionsMenuButton,
    "default",
    ()=>media_captions_menu_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/captions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
;
;
;
;
;
;
const ccIconOn = '<svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>\n</svg>';
const ccIconOff = '<svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>\n</svg>';
function getSlotTemplateHTML() {
    return /*html*/ '\n    <style>\n      :host([aria-checked="true"]) slot[name=off] {\n        display: none !important;\n      }\n\n      \n      :host(:not([aria-checked="true"])) slot[name=on] {\n        display: none !important;\n      }\n\n      :host([aria-expanded="true"]) slot[name=tooltip] {\n        display: none;\n      }\n    </style>\n\n    <slot name="icon">\n      <slot name="on">'.concat(ccIconOn, '</slot>\n      <slot name="off">').concat(ccIconOff, "</slot>\n    </slot>\n  ");
}
function getTooltipContentHTML() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Captions");
}
const updateAriaChecked = (el)=>{
    el.setAttribute("aria-checked", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areSubsOn"])(el).toString());
};
class MediaCaptionsMenuButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenuButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_LIST,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("aria-label", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("closed captions"));
        updateAriaChecked(this);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING) {
            updateAriaChecked(this);
        }
    }
    /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   * @return {HTMLElement | null}
   */ get invokeTargetElement() {
        var _a;
        if (this.invokeTarget != void 0) return super.invokeTargetElement;
        return (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaController"])(this)) == null ? void 0 : _a.querySelector("media-captions-menu");
    }
    /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */ get mediaSubtitlesList() {
        return getSubtitlesListAttr(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_LIST);
    }
    set mediaSubtitlesList(list) {
        setSubtitlesListAttr(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_LIST, list);
    }
    /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */ get mediaSubtitlesShowing() {
        return getSubtitlesListAttr(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING);
    }
    set mediaSubtitlesShowing(list) {
        setSubtitlesListAttr(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_SUBTITLES_SHOWING, list);
    }
}
MediaCaptionsMenuButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaCaptionsMenuButton.getTooltipContentHTML = getTooltipContentHTML;
const getSubtitlesListAttr = (el, attrName)=>{
    const attrVal = el.getAttribute(attrName);
    return attrVal ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTextTracksStr"])(attrVal) : [];
};
const setSubtitlesListAttr = (el, attrName, list)=>{
    if (!(list == null ? void 0 : list.length)) {
        el.removeAttribute(attrName);
        return;
    }
    const newValStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$captions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyTextTrackList"])(list);
    const oldVal = el.getAttribute(attrName);
    if (oldVal === newValStr) return;
    el.setAttribute(attrName, newValStr);
};
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-captions-menu-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-captions-menu-button", MediaCaptionsMenuButton);
}
var media_captions_menu_button_default = MediaCaptionsMenuButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-playback-rate-menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "MediaPlaybackRateMenu",
    ()=>MediaPlaybackRateMenu,
    "default",
    ()=>media_playback_rate_menu_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$attribute$2d$token$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/attribute-token-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$playback$2d$rate$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-playback-rate-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _rates, _render, render_fn, _onChange, onChange_fn;
;
;
;
;
;
;
const Attributes = {
    RATES: "rates"
};
class MediaPlaybackRateMenu extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenu"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE,
            Attributes.RATES
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE && oldValue != newValue) {
            this.value = newValue;
        } else if (attrName === Attributes.RATES && oldValue != newValue) {
            __privateGet(this, _rates).value = newValue;
            __privateMethod(this, _render, render_fn).call(this);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    }
    /**
   * Returns the anchor element when it is a floating menu.
   */ get anchorElement() {
        if (this.anchor !== "auto") return super.anchorElement;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaController"])(this).querySelector("media-playback-rate-menu-button");
    }
    /**
   * Get the playback rates for the button.
   */ get rates() {
        return __privateGet(this, _rates);
    }
    /**
   * Set the playback rates for the button.
   * For React 19+ compatibility, accept a string of space-separated rates.
   */ set rates(value) {
        if (!value) {
            __privateGet(this, _rates).value = "";
        } else if (Array.isArray(value)) {
            __privateGet(this, _rates).value = value.join(" ");
        } else if (typeof value === "string") {
            __privateGet(this, _rates).value = value;
        }
        __privateMethod(this, _render, render_fn).call(this);
    }
    /**
   * The current playback rate
   */ get mediaPlaybackRate() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$playback$2d$rate$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RATE"]);
    }
    set mediaPlaybackRate(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE, value);
    }
    constructor(){
        super();
        __privateAdd(this, _render);
        __privateAdd(this, _onChange);
        __privateAdd(this, _rates, new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$attribute$2d$token$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttributeTokenList"](this, Attributes.RATES, {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$playback$2d$rate$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RATES"]
        }));
        __privateMethod(this, _render, render_fn).call(this);
    }
}
_rates = new WeakMap();
_render = new WeakSet();
render_fn = function() {
    this.defaultSlot.textContent = "";
    for (const rate of __privateGet(this, _rates)){
        const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMenuItem"])({
            type: "radio",
            text: this.formatMenuItemText("".concat(rate, "x"), rate),
            value: rate,
            checked: this.mediaPlaybackRate === Number(rate)
        });
        item.prepend((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIndicator"])(this, "checked-indicator"));
        this.defaultSlot.append(item);
    }
};
_onChange = new WeakSet();
onChange_fn = function() {
    if (!this.value) return;
    const event = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_PLAYBACK_RATE_REQUEST, {
        composed: true,
        bubbles: true,
        detail: this.value
    });
    this.dispatchEvent(event);
};
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-playback-rate-menu")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-playback-rate-menu", MediaPlaybackRateMenu);
}
var media_playback_rate_menu_default = MediaPlaybackRateMenu;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-playback-rate-menu-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_RATE",
    ()=>DEFAULT_RATE,
    "MediaPlaybackRateMenuButton",
    ()=>MediaPlaybackRateMenuButton,
    "default",
    ()=>media_playback_rate_menu_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
;
;
;
;
;
const DEFAULT_RATE = 1;
function getSlotTemplateHTML(attrs) {
    return /*html*/ '\n    <style>\n      :host {\n        min-width: 5ch;\n        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));\n      }\n      \n      :host([aria-expanded="true"]) slot[name=tooltip] {\n        display: none;\n      }\n    </style>\n    <slot name="icon">'.concat(attrs["mediaplaybackrate"] || DEFAULT_RATE, "x</slot>\n  ");
}
function getTooltipContentHTML() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Playback rate");
}
class MediaPlaybackRateMenuButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenuButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE) {
            const newPlaybackRate = newValue ? +newValue : Number.NaN;
            const playbackRate = !Number.isNaN(newPlaybackRate) ? newPlaybackRate : DEFAULT_RATE;
            this.container.innerHTML = "".concat(playbackRate, "x");
            this.setAttribute("aria-label", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Playback rate {playbackRate}", {
                playbackRate
            }));
        }
    }
    /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   */ get invokeTargetElement() {
        if (this.invokeTarget != void 0) return super.invokeTargetElement;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaController"])(this).querySelector("media-playback-rate-menu");
    }
    /**
   * The current playback rate
   */ get mediaPlaybackRate() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE, DEFAULT_RATE);
    }
    set mediaPlaybackRate(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_PLAYBACK_RATE, value);
    }
    constructor(){
        var _a;
        super();
        this.container = this.shadowRoot.querySelector('slot[name="icon"]');
        this.container.innerHTML = "".concat((_a = this.mediaPlaybackRate) != null ? _a : DEFAULT_RATE, "x");
    }
}
MediaPlaybackRateMenuButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaPlaybackRateMenuButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-playback-rate-menu-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-playback-rate-menu-button", MediaPlaybackRateMenuButton);
}
var media_playback_rate_menu_button_default = MediaPlaybackRateMenuButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-rendition-menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaRenditionMenu",
    ()=>MediaRenditionMenu,
    "default",
    ()=>media_rendition_menu_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var _renditionList, _prevState, _render, render_fn, _onChange, onChange_fn;
;
;
;
;
;
;
class MediaRenditionMenu extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenu"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_LIST,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_SELECTED,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_UNAVAILABLE,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_HEIGHT
        ];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_SELECTED && oldValue !== newValue) {
            this.value = newValue != null ? newValue : "auto";
            __privateMethod(this, _render, render_fn).call(this);
        } else if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_LIST && oldValue !== newValue) {
            __privateSet(this, _renditionList, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseRenditionList"])(newValue));
            __privateMethod(this, _render, render_fn).call(this);
        } else if (attrName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_HEIGHT && oldValue !== newValue) {
            __privateMethod(this, _render, render_fn).call(this);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    }
    /**
   * Returns the anchor element when it is a floating menu.
   */ get anchorElement() {
        if (this.anchor !== "auto") return super.anchorElement;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaController"])(this).querySelector("media-rendition-menu-button");
    }
    get mediaRenditionList() {
        return __privateGet(this, _renditionList);
    }
    set mediaRenditionList(list) {
        __privateSet(this, _renditionList, list);
        __privateMethod(this, _render, render_fn).call(this);
    }
    /**
   * Get selected rendition id.
   */ get mediaRenditionSelected() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_SELECTED);
    }
    set mediaRenditionSelected(id) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_SELECTED, id);
    }
    get mediaHeight() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_HEIGHT);
    }
    set mediaHeight(height) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_HEIGHT, height);
    }
    constructor(){
        super(...arguments);
        __privateAdd(this, _render);
        __privateAdd(this, _onChange);
        __privateAdd(this, _renditionList, []);
        __privateAdd(this, _prevState, {});
    }
}
_renditionList = new WeakMap();
_prevState = new WeakMap();
_render = new WeakSet();
render_fn = function() {
    if (__privateGet(this, _prevState).mediaRenditionList === JSON.stringify(this.mediaRenditionList) && __privateGet(this, _prevState).mediaHeight === this.mediaHeight) return;
    __privateGet(this, _prevState).mediaRenditionList = JSON.stringify(this.mediaRenditionList);
    __privateGet(this, _prevState).mediaHeight = this.mediaHeight;
    const renditionList = this.mediaRenditionList.sort((a, b)=>b.height - a.height);
    for (const rendition of renditionList){
        rendition.selected = rendition.id === this.mediaRenditionSelected;
    }
    this.defaultSlot.textContent = "";
    const isAuto = !this.mediaRenditionSelected;
    for (const rendition of renditionList){
        const text2 = this.formatMenuItemText("".concat(Math.min(rendition.width, rendition.height), "p"), rendition);
        const item2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMenuItem"])({
            type: "radio",
            text: text2,
            value: "".concat(rendition.id),
            checked: rendition.selected && !isAuto
        });
        item2.prepend((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIndicator"])(this, "checked-indicator"));
        this.defaultSlot.append(item2);
    }
    const text = isAuto ? this.formatMenuItemText("".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Auto"), " (").concat(this.mediaHeight, "p)")) : this.formatMenuItemText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Auto"));
    const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMenuItem"])({
        type: "radio",
        text,
        value: "auto",
        checked: isAuto
    });
    const autoDescription = this.mediaHeight > 0 ? "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Auto"), " (").concat(this.mediaHeight, "p)") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Auto");
    item.dataset.description = autoDescription;
    item.prepend((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIndicator"])(this, "checked-indicator"));
    this.defaultSlot.append(item);
};
_onChange = new WeakSet();
onChange_fn = function() {
    if (this.value == null) return;
    const event = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIEvents"].MEDIA_RENDITION_REQUEST, {
        composed: true,
        bubbles: true,
        detail: this.value
    });
    this.dispatchEvent(event);
};
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-rendition-menu")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-rendition-menu", MediaRenditionMenu);
}
var media_rendition_menu_default = MediaRenditionMenu;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-rendition-menu-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaRenditionMenuButton",
    ()=>MediaRenditionMenuButton,
    "default",
    ()=>media_rendition_menu_button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/element-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/i18n.js [app-client] (ecmascript)");
;
;
;
;
;
const renditionIcon = '<svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />\n</svg>';
function getSlotTemplateHTML() {
    return /*html*/ '\n    <style>\n      :host([aria-expanded="true"]) slot[name=tooltip] {\n        display: none;\n      }\n    </style>\n    <slot name="icon">'.concat(renditionIcon, "</slot>\n  ");
}
function getTooltipContentHTML() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("Quality");
}
class MediaRenditionMenuButton extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaChromeMenuButton"] {
    static get observedAttributes() {
        return [
            ...super.observedAttributes,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_SELECTED,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_UNAVAILABLE,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_HEIGHT
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("aria-label", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("quality"));
    }
    /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   */ get invokeTargetElement() {
        if (this.invokeTarget != void 0) return super.invokeTargetElement;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaController"])(this).querySelector("media-rendition-menu");
    }
    /**
   * Get selected rendition id.
   */ get mediaRenditionSelected() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_SELECTED);
    }
    set mediaRenditionSelected(id) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStringAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_RENDITION_SELECTED, id);
    }
    get mediaHeight() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_HEIGHT);
    }
    set mediaHeight(height) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$element$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNumericAttr"])(this, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaUIAttributes"].MEDIA_HEIGHT, height);
    }
}
MediaRenditionMenuButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaRenditionMenuButton.getTooltipContentHTML = getTooltipContentHTML;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get("media-rendition-menu-button")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define("media-rendition-menu-button", MediaRenditionMenuButton);
}
var media_rendition_menu_button_default = MediaRenditionMenuButton;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu-item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$settings$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-settings-menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$settings$2d$menu$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-settings-menu-item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$settings$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-settings-menu-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$audio$2d$track$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-audio-track-menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$audio$2d$track$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-audio-track-menu-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$captions$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-captions-menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$captions$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-captions-menu-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$playback$2d$rate$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-playback-rate-menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$playback$2d$rate$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-playback-rate-menu-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$rendition$2d$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-rendition-menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$rendition$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-rendition-menu-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$media$2d$chrome$2d$menu$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/media-chrome-menu-button.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/themes/sutro/dist/media-theme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
<media-theme-sutro>
  <video
    slot="media"
    src="https://stream.mux.com/fXNzVtmtWuyz00xnSrJg4OJH6PyNo6D02UzmgeKGkP5YQ/high.mp4"
  ></video>
</media-theme-sutro>
*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/utils/server-safe-globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$theme$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/media-theme-element.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$menu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/node_modules/media-chrome/dist/menu/index.js [app-client] (ecmascript) <locals>");
;
var _globalThis_document_createElement, _globalThis_document;
;
;
;
;
const template = (_globalThis_document = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].document) === null || _globalThis_document === void 0 ? void 0 : (_globalThis_document_createElement = _globalThis_document.createElement) === null || _globalThis_document_createElement === void 0 ? void 0 : _globalThis_document_createElement.call(_globalThis_document, 'template');
if (template) {
    template.innerHTML = '\n    <!-- Sutro -->\n    <style>\n      :host {\n        --_primary-color: var(--media-primary-color, #fff);\n        --_secondary-color: var(--media-secondary-color, transparent);\n        --_accent-color: var(--media-accent-color, #fff);\n      }\n\n      media-controller {\n        --base: 18px;\n\n        font-size: calc(0.75 * var(--base));\n        font-family: Roboto, Arial, sans-serif;\n        --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;\n        -webkit-font-smoothing: antialiased;\n\n        --media-primary-color: #fff;\n        --media-secondary-color: transparent;\n        --media-menu-background: rgba(28, 28, 28, 0.6);\n        --media-text-color: var(--_primary-color);\n        --media-control-hover-background: var(--media-secondary-color);\n\n        --media-range-track-height: calc(0.125 * var(--base));\n        --media-range-thumb-height: var(--base);\n        --media-range-thumb-width: var(--base);\n        --media-range-thumb-border-radius: var(--base);\n\n        --media-control-height: calc(2 * var(--base));\n      }\n\n      media-controller[breakpointmd] {\n        --base: 20px;\n      }\n\n      /* The biggest size controller is tied to going fullscreen\n          instead of a player width */\n      media-controller[mediaisfullscreen] {\n        --base: 24px;\n      }\n\n      .media-button {\n        --media-control-hover-background: var(--_secondary-color);\n        --media-tooltip-background: rgb(28 28 28 / .24);\n        --media-text-content-height: 1.2;\n        --media-tooltip-padding: .7em 1em;\n        --media-tooltip-distance: 8px;\n        --media-tooltip-container-margin: 18px;\n        position: relative;\n        padding: 0;\n        opacity: 0.9;\n        transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);\n      }\n\n      .media-button svg {\n        fill: none;\n        stroke: var(--_primary-color);\n        stroke-width: 1;\n        stroke-linecap: \'round\';\n        stroke-linejoin: \'round\';\n      }\n\n      svg .svg-shadow {\n        stroke: #000;\n        stroke-opacity: 0.15;\n        stroke-width: 2px;\n        fill: none;\n      }\n    </style>\n\n    <media-controller\n      breakpoints="md:480"\n      defaultsubtitles="{{defaultsubtitles}}"\n      defaultduration="{{defaultduration}}"\n      gesturesdisabled="{{disabled}}"\n      hotkeys="{{hotkeys}}"\n      nohotkeys="{{nohotkeys}}"\n      defaultstreamtype="on-demand"\n    >\n      <slot name="media" slot="media"></slot>\n      <slot name="poster" slot="poster"></slot>\n      <slot name="centered-chrome" slot="centered-chrome"></slot>\n      <media-error-dialog slot="dialog"></media-error-dialog>\n\n      <!-- Controls Gradient -->\n      <style>\n        .media-gradient-bottom {\n          position: absolute;\n          bottom: 0;\n          width: 100%;\n          height: calc(8 * var(--base));\n          pointer-events: none;\n        }\n\n        .media-gradient-bottom::before {\n          content: \'\';\n          --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,\n            hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,\n            hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,\n            hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,\n            hsl(0 0% 0%) 100%;\n\n          position: absolute;\n          inset: 0;\n          opacity: 0.7;\n          background: linear-gradient(to bottom, var(--gradient-steps));\n        }\n      </style>\n      <div class="media-gradient-bottom"></div>\n\n      <!-- Settings Menu -->\n      <style>\n        media-settings-menu {\n          --media-menu-icon-height: 20px;\n          --media-menu-item-icon-height: 20px;\n          --media-settings-menu-min-width: calc(10 * var(--base));\n          --media-menu-transform-in: translateY(0) scale(1);\n          --media-menu-transform-out: translateY(20px) rotate(3deg) scale(1);\n          padding-block: calc(0.15 * var(--base));\n          margin-right: 10px;\n          margin-bottom: 17px;\n          border-radius: 8px;\n          z-index: 2;\n          user-select: none;\n        }\n\n        media-settings-menu-item,\n        [role=\'menu\']::part(menu-item) {\n          --media-icon-color: var(--_primary-color);\n          margin-inline: calc(0.45 * var(--base));\n          height: calc(1.6 * var(--base));\n          font-size: calc(0.7 * var(--base));\n          font-weight: 400;\n          padding: 0;\n          padding-left: calc(0.4 * var(--base));\n          padding-right: calc(0.1 * var(--base));\n          border-radius: 6px;\n          text-shadow: none;\n        }\n\n        [slot=\'submenu\']::part(back button) {\n          font-size: calc(0.7 * var(--base));\n        }\n\n        media-settings-menu-item:hover {\n          --media-icon-color: #000;\n          color: #000;\n          background-color: #fff;\n        }\n\n        media-settings-menu-item:hover [slot=\'submenu\']::part(menu-item),\n        [slot=\'submenu\']::part(back indicator) {\n          --media-icon-color: var(--_primary-color);\n        }\n\n        media-settings-menu-item:hover [slot=\'submenu\']::part(menu-item):hover {\n          --media-icon-color: #000;\n          color: #000;\n          background-color: #fff;\n        }\n\n        media-settings-menu-item[submenusize=\'0\'] {\n          display: none;\n        }\n\n        /* Also hide if only \'Auto\' is added. */\n        .quality-settings[submenusize=\'1\'] {\n          display: none;\n        }\n      </style>\n      <media-settings-menu hidden anchor="auto">\n        <media-settings-menu-item>\n          Playback Speed\n          <media-playback-rate-menu slot="submenu" hidden>\n            <div slot="title">Playback Speed</div>\n          </media-playback-rate-menu>\n        </media-settings-menu-item>\n        <media-settings-menu-item class="quality-settings">\n          Quality\n          <media-rendition-menu slot="submenu" hidden>\n            <div slot="title">Quality</div>\n          </media-rendition-menu>\n        </media-settings-menu-item>\n        <media-settings-menu-item>\n          Subtitles/CC\n          <media-captions-menu slot="submenu" hidden>\n            <div slot="title">Subtitles/CC</div>\n          </media-captions-menu>\n        </media-settings-menu-item>\n      </media-settings-menu>\n\n      <!-- Control Bar -->\n      <style>\n        media-control-bar {\n          position: absolute;\n          height: calc(2 * var(--base));\n          line-height: calc(2 * var(--base));\n          bottom: var(--base);\n          left: var(--base);\n          right: var(--base);\n        }\n      </style>\n      <media-control-bar>\n        <!-- Play/Pause -->\n        <style>\n          @keyframes bounce-scale-play {\n            0% {\n              transform: scale(0.75, 0.75);\n            }\n            50% {\n              transform: scale(115%, 115%);\n            }\n            100% {\n              transform: scale(1, 1);\n            }\n          }\n\n          .media-button {\n            border-radius: 25%;\n            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);\n            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);\n            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s, box-shadow 0.3s;\n          }\n\n          .media-button:hover {\n            /* background-color: rgba(0, 0, 0, 0.05); */\n            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;\n            /* hue-rotate(120deg) */\n            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);\n            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);\n            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s;\n          }\n\n          media-play-button #icon-play {\n            opacity: 0;\n            transform-box: view-box;\n            transform-origin: center center;\n            transform: scale(0.5, 0.5);\n            transition: all 0.5s;\n          }\n\n          media-play-button[mediapaused] #icon-play {\n            opacity: 1;\n            transform: scale(1, 1);\n            animation: 0.35s bounce-scale-play ease-in-out;\n          }\n\n          @keyframes bounce-pause-left {\n            0% {\n              font-size: 10px;\n            }\n            50% {\n              font-size: 3px;\n            }\n            100% {\n              font-size: 4px;\n            }\n          }\n\n          @keyframes bounce-pause-right {\n            0% {\n              font-size: 10px;\n              transform: translateX(-8px);\n            }\n            50% {\n              font-size: 3px;\n              transform: translateX(1px);\n            }\n            100% {\n              font-size: 4px;\n              transform: translateX(0);\n            }\n          }\n\n          media-play-button #pause-left,\n          media-play-button #pause-right {\n            /* Using font-size to animate height because using scale was resulting in unexpected positioning */\n            font-size: 4px;\n            opacity: 1;\n            transform: translateX(0);\n            transform-box: view-box;\n          }\n\n          media-play-button:not([mediapaused]) #pause-left {\n            animation: 0.3s bounce-pause-left ease-out;\n          }\n\n          media-play-button:not([mediapaused]) #pause-right {\n            animation: 0.3s bounce-pause-right ease-out;\n          }\n\n          media-play-button[mediapaused] #pause-left,\n          media-play-button[mediapaused] #pause-right {\n            opacity: 0;\n            font-size: 10px;\n          }\n\n          media-play-button[mediapaused] #pause-right {\n            transform-origin: right center;\n            transform: translateX(-8px);\n          }\n        </style>\n        <media-play-button mediapaused class="media-button">\n          <svg slot="icon" viewBox="0 0 32 32">\n            <!-- <use class="svg-shadow" xlink:href="#icon-play"></use> -->\n            <g>\n              <path\n                id="icon-play"\n                d="M20.7131 14.6976C21.7208 15.2735 21.7208 16.7265 20.7131 17.3024L12.7442 21.856C11.7442 22.4274 10.5 21.7054 10.5 20.5536L10.5 11.4464C10.5 10.2946 11.7442 9.57257 12.7442 10.144L20.7131 14.6976Z"\n              />\n            </g>\n            <!-- <use class="svg-shadow" xlink:href="#icon-pause"></use> -->\n            <g id="icon-pause">\n              <rect id="pause-left" x="10.5" width="1em" y="10.5" height="11" rx="0.5" />\n              <rect id="pause-right" x="17.5" width="1em" y="10.5" height="11" rx="0.5" />\n            </g>\n          </svg>\n        </media-play-button>\n\n        <!-- Volume/Mute -->\n        <style>\n          media-mute-button {\n            position: relative;\n          }\n\n          media-mute-button .muted-path {\n            transition: clip-path 0.2s ease-out;\n          }\n\n          media-mute-button #muted-path-2 {\n            transition-delay: 0.2s;\n          }\n\n          media-mute-button .muted-path {\n            clip-path: inset(0);\n          }\n\n          media-mute-button:not([mediavolumelevel=\'off\']) #muted-path-1 {\n            clip-path: inset(0 0 100% 0);\n          }\n\n          media-mute-button:not([mediavolumelevel=\'off\']) #muted-path-2 {\n            clip-path: inset(0 0 100% 0);\n          }\n\n          media-mute-button .muted-path {\n            opacity: 0;\n          }\n\n          media-mute-button[mediavolumelevel=\'off\'] .muted-path {\n            opacity: 1;\n          }\n\n          media-mute-button .vol-path {\n            opacity: 1;\n            transition: opacity 0.4s;\n          }\n\n          media-mute-button[mediavolumelevel=\'off\'] .vol-path {\n            opacity: 0;\n          }\n\n          media-mute-button[mediavolumelevel=\'low\'] #vol-high-path,\n          media-mute-button[mediavolumelevel=\'medium\'] #vol-high-path {\n            opacity: 0;\n          }\n\n          media-volume-range {\n            --media-range-track-background: rgba(255, 255, 255, 0.2);\n            --media-range-thumb-opacity: 0;\n          }\n\n          @keyframes volume-in {\n            0% {\n              visibility: hidden;\n              opacity: 0;\n              transform: translateY(50%) rotate(1deg);\n            }\n            50% {\n              visibility: visible;\n              opacity: 1;\n              transform: rotate(-2deg);\n            }\n            100% {\n              visibility: visible;\n              opacity: 1;\n              transform: translateY(0) rotate(0deg);\n            }\n          }\n\n          @keyframes volume-out {\n            0% {\n              visibility: visible;\n              opacity: 1;\n              transform: translateY(0) rotate(0deg);\n            }\n            50% {\n              opacity: 1;\n              transform: rotate(0deg);\n            }\n            100% {\n              visibility: hidden;\n              opacity: 0;\n              transform: translateY(50%) rotate(1deg);\n            }\n          }\n\n          .media-volume-range-wrapper {\n            opacity: 0;\n            visibility: hidden;\n\n            position: absolute;\n            top: -100%;\n            left: calc(2 * var(--base));\n\n            width: calc(10 * var(--base));\n            height: calc(2.5 * var(--base));\n            transform-origin: center left;\n          }\n\n          media-volume-range {\n            /*\n              Hide range and animation until mediavolume attribute is set.\n              \'visibility\' didn\'t work, hovering over media-volume-range-wrapper\n              caused it to show. Should require mute-button:hover.\n            */\n            opacity: 0;\n            transition: opacity 0s 1s;\n\n            width: calc(10 * var(--base));\n            height: var(--base);\n            padding: 0;\n            border-radius: calc(0.25 * var(--base));\n            overflow: hidden;\n            background: rgba(0, 0, 0, 0.2);\n\n            --media-range-bar-color: var(--media-accent-color);\n\n            --media-range-padding-left: 0;\n            --media-range-padding-right: 0;\n\n            --media-range-track-width: calc(10 * var(--base));\n            --media-range-track-height: var(--base);\n            --media-range-track-border-radius: calc(0.25 * var(--base));\n            --media-range-track-backdrop-filter: blur(10px) brightness(80%);\n\n            /* This makes zero volume still show some of the bar.\n               I can\'t make the bar have curved corners otherwise though. */\n            --media-range-thumb-width: var(--base);\n            --media-range-thumb-border-radius: calc(0.25 * var(--base));\n\n            /* The Sutro design has a gradient like this, but not sure I like it */\n            /* --media-range-thumb-box-shadow: 10px 0px 20px rgba(255, 255, 255, 0.5); */\n          }\n\n          media-volume-range[mediavolume] {\n            opacity: 1;\n          }\n\n          [keyboardcontrol] media-volume-range:focus {\n            /* TODO: This appears to be creating a think outline */\n            outline: 1px solid rgba(27, 127, 204, 0.9);\n          }\n\n          media-mute-button:hover + .media-volume-range-wrapper,\n          media-mute-button:focus + .media-volume-range-wrapper,\n          media-mute-button:focus-within + .media-volume-range-wrapper,\n          .media-volume-range-wrapper:hover,\n          .media-volume-range-wrapper:focus,\n          .media-volume-range-wrapper:focus-within {\n            animation: 0.3s volume-in forwards ease-out;\n          }\n\n          .media-volume-range-wrapper:not(:hover, :focus-within) {\n            animation: 0.3s volume-out ease-out;\n          }\n\n          /* When keyboard navigating the volume range and wrapper need to always be visible\n            otherwise focus state can\'t land on it. This is ok when keyboard navigating because\n            the hovering issues aren\'t a concern, unless you happen to be keyboard AND mouse navigating.\n          */\n          [keyboardcontrol] .media-volume-range-wrapper,\n          [keyboardcontrol] .media-volume-range-wrapper:focus-within,\n          [keyboardcontrol] .media-volume-range-wrapper:focus-within media-volume-range {\n            visibility: visible;\n          }\n        </style>\n        <media-mute-button class="media-button" notooltip>\n          <use class="svg-shadow" xlink:href="#vol-paths"></use>\n          <svg slot="icon" viewBox="0 0 32 32">\n            <g id="vol-paths">\n              <path\n                id="speaker-path"\n                d="M16.5 20.486v-8.972c0-1.537-2.037-2.08-2.802-.745l-1.026 1.79a2.5 2.5 0 0 1-.8.85l-1.194.78A1.5 1.5 0 0 0 10 15.446v1.11c0 .506.255.978.678 1.255l1.194.782a2.5 2.5 0 0 1 .8.849l1.026 1.79c.765 1.334 2.802.792 2.802-.745Z"\n              />\n              <path\n                id="vol-low-path"\n                class="vol-path"\n                d="M18.5 18C19.6046 18 20.5 17.1046 20.5 16C20.5 14.8954 19.6046 14 18.5 14"\n              />\n              <path\n                id="vol-high-path"\n                class="vol-path"\n                d="M18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11"\n              />\n              <path id="muted-path-1" class="muted-path" d="M23 18L19 14" />\n              <path id="muted-path-2" class="muted-path" d="M23 14L19 18" />\n            </g>\n          </svg>\n        </media-mute-button>\n        <div class="media-volume-range-wrapper">\n          <media-volume-range></media-volume-range>\n        </div>\n\n        <!-- Time Display -->\n        <style>\n          media-time-display {\n            position: relative;\n            padding: calc(0.5 * var(--base));\n            font-size: calc(0.7 * var(--base));\n            border-radius: calc(0.5 * var(--base));\n          }\n\n          media-controller[breakpointmd] media-time-display:not([showduration]) {\n            display: none;\n          }\n\n          media-controller:not([breakpointmd]) media-time-display[showduration] {\n            display: none;\n          }\n        </style>\n        <media-time-display></media-time-display>\n        <media-time-display showduration></media-time-display>\n\n        <!-- Time Range / Progress Bar -->\n        <style>\n          media-time-range {\n            height: calc(2 * var(--base));\n            border-radius: calc(0.25 * var(--base));\n\n            --media-range-track-backdrop-filter: invert(10%) blur(5px) brightness(110%);\n            --media-range-track-background: rgba(255, 255, 255, 0.2);\n            --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);\n            --media-range-track-border-radius: calc(0.25 * var(--base));\n\n            --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);\n            --media-range-bar-color: var(--media-accent-color);\n\n            --media-range-thumb-background: var(--media-accent-color);\n            --media-range-thumb-transition: opacity 0.1s linear;\n            --media-range-thumb-opacity: 0;\n\n            --media-preview-thumbnail-border: calc(0.125 * var(--base)) solid #fff;\n            --media-preview-thumbnail-border-radius: calc(0.5 * var(--base));\n            --media-preview-thumbnail-min-width: calc(8 * var(--base));\n            --media-preview-thumbnail-max-width: calc(10 * var(--base));\n            --media-preview-thumbnail-min-height: calc(5 * var(--base));\n            --media-preview-thumbnail-max-height: calc(7 * var(--base));\n            --media-preview-box-margin: 0 0 -10px;\n          }\n          media-time-range:hover {\n            --media-range-thumb-opacity: 1;\n            --media-range-track-height: calc(0.25 * var(--base));\n          }\n\n          media-preview-thumbnail {\n            margin-bottom: 5px;\n          }\n\n          media-preview-chapter-display {\n            font-size: calc(0.6 * var(--base));\n            padding-block: 0;\n          }\n\n          media-preview-time-display {\n            font-size: calc(0.65 * var(--base));\n            padding-top: 0;\n          }\n        </style>\n        <media-time-range>\n          <media-preview-thumbnail slot="preview"></media-preview-thumbnail>\n          <media-preview-chapter-display slot="preview"></media-preview-chapter-display>\n          <media-preview-time-display slot="preview"></media-preview-time-display>\n        </media-time-range>\n\n        <!-- Subtitles/CC Button -->\n        <style>\n          media-captions-button {\n            position: relative;\n          }\n\n          media-controller:not([breakpointmd]) media-captions-button {\n            display: none;\n          }\n\n          media-captions-button svg :is(path, rect) {\n            stroke: none;\n            fill: var(--_primary-color);\n          }\n\n          /* Disble the captions button when no subtitles are available */\n          media-captions-button:not([mediasubtitleslist]) svg {\n            opacity: 0.3;\n          }\n\n          media-captions-button #cc-underline {\n            opacity: 1;\n          }\n\n          media-captions-button[mediasubtitleslist][aria-checked=\'true\'] #cc-underline {\n            opacity: 1;\n          }\n\n          media-captions-button #cc-underline {\n            transition: clip-path 0.15s ease-out;\n          }\n\n          media-captions-button #cc-underline {\n            clip-path: inset(0 100% 0 0);\n          }\n\n          media-captions-button[aria-checked=\'true\'] #cc-underline {\n            clip-path: inset(0 0 0 0);\n          }\n        </style>\n        <media-captions-button class="media-button">\n          <svg slot="icon" viewBox="0 0 32 32">\n            <use class="svg-shadow" xlink:href="#cc-icon"></use>\n            <g id="cc-icon">\n              <path\n                class="cc-c"\n                d="M15.6634 14.3574H14.5636C14.4985 14.0523 14.3847 13.7842 14.2221 13.5532C14.0624 13.3222 13.8673 13.1283 13.6367 12.9715C13.409 12.8118 13.1562 12.692 12.8783 12.6122C12.6004 12.5323 12.3107 12.4924 12.0091 12.4924C11.4592 12.4924 10.961 12.6264 10.5146 12.8945C10.0711 13.1625 9.71776 13.5575 9.45463 14.0794C9.19445 14.6012 9.06436 15.2414 9.06436 16C9.06436 16.7586 9.19445 17.3988 9.45463 17.9206C9.71776 18.4425 10.0711 18.8375 10.5146 19.1055C10.961 19.3736 11.4592 19.5076 12.0091 19.5076C12.3107 19.5076 12.6004 19.4677 12.8783 19.3878C13.1562 19.308 13.409 19.1896 13.6367 19.0328C13.8673 18.8731 14.0624 18.6778 14.2221 18.4468C14.3847 18.2129 14.4985 17.9449 14.5636 17.6426H15.6634C15.5806 18.0903 15.4298 18.491 15.2111 18.8446C14.9923 19.1982 14.7203 19.499 14.3951 19.7471C14.0698 19.9924 13.7047 20.1792 13.2996 20.3075C12.8976 20.4358 12.4674 20.5 12.0091 20.5C11.2345 20.5 10.5456 20.3175 9.94246 19.9525C9.33932 19.5875 8.8648 19.0684 8.51888 18.3954C8.17296 17.7224 8 16.924 8 16C8 15.076 8.17296 14.2776 8.51888 13.6046C8.8648 12.9316 9.33932 12.4125 9.94246 12.0475C10.5456 11.6825 11.2345 11.5 12.0091 11.5C12.4674 11.5 12.8976 11.5642 13.2996 11.6925C13.7047 11.8208 14.0698 12.009 14.3951 12.2571C14.7203 12.5024 14.9923 12.8018 15.2111 13.1554C15.4298 13.5062 15.5806 13.9068 15.6634 14.3574Z"\n              />\n              <path\n                class="cc-c"\n                d="M24 14.3574H22.9002C22.8351 14.0523 22.7213 13.7842 22.5587 13.5532C22.399 13.3222 22.2039 13.1283 21.9733 12.9715C21.7456 12.8118 21.4928 12.692 21.2149 12.6122C20.937 12.5323 20.6473 12.4924 20.3457 12.4924C19.7958 12.4924 19.2976 12.6264 18.8511 12.8945C18.4077 13.1625 18.0543 13.5575 17.7912 14.0794C17.531 14.6012 17.4009 15.2414 17.4009 16C17.4009 16.7586 17.531 17.3988 17.7912 17.9206C18.0543 18.4425 18.4077 18.8375 18.8511 19.1055C19.2976 19.3736 19.7958 19.5076 20.3457 19.5076C20.6473 19.5076 20.937 19.4677 21.2149 19.3878C21.4928 19.308 21.7456 19.1896 21.9733 19.0328C22.2039 18.8731 22.399 18.6778 22.5587 18.4468C22.7213 18.2129 22.8351 17.9449 22.9002 17.6426H24C23.9172 18.0903 23.7664 18.491 23.5476 18.8446C23.3289 19.1982 23.0569 19.499 22.7316 19.7471C22.4064 19.9924 22.0413 20.1792 21.6362 20.3075C21.2341 20.4358 20.804 20.5 20.3457 20.5C19.5711 20.5 18.8822 20.3175 18.279 19.9525C17.6759 19.5875 17.2014 19.0684 16.8555 18.3954C16.5095 17.7224 16.3366 16.924 16.3366 16C16.3366 15.076 16.5095 14.2776 16.8555 13.6046C17.2014 12.9316 17.6759 12.4125 18.279 12.0475C18.8822 11.6825 19.5711 11.5 20.3457 11.5C20.804 11.5 21.2341 11.5642 21.6362 11.6925C22.0413 11.8208 22.4064 12.009 22.7316 12.2571C23.0569 12.5024 23.3289 12.8018 23.5476 13.1554C23.7664 13.5062 23.9172 13.9068 24 14.3574Z"\n              />\n              <rect id="cc-underline" x="8" y="23" width="16" height="1" rx="0.5" />\n            </g>\n          </svg>\n        </media-captions-button>\n\n        <!-- Settings Menu Button -->\n        <style>\n          media-settings-menu-button svg {\n            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);\n            transform: rotateZ(0deg);\n          }\n          media-settings-menu-button[aria-expanded=\'true\'] svg {\n            transform: rotateZ(30deg);\n          }\n        </style>\n        <media-settings-menu-button class="media-button">\n          <svg slot="icon" viewBox="0 0 32 32">\n            <use class="svg-shadow" xlink:href="#settings-icon"></use>\n            <g id="settings-icon">\n              <path\n                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"\n              />\n              <path\n                d="M21.0176 13.0362L20.9715 12.9531C20.8445 12.7239 20.7797 12.4629 20.784 12.1982L20.8049 10.8997C20.8092 10.6343 20.675 10.3874 20.4545 10.2549L18.5385 9.10362C18.3186 8.97143 18.0472 8.9738 17.8293 9.10981L16.7658 9.77382C16.5485 9.90953 16.2999 9.98121 16.0465 9.98121H15.9543C15.7004 9.98121 15.4513 9.90922 15.2336 9.77295L14.1652 9.10413C13.9467 8.96728 13.674 8.96518 13.4535 9.09864L11.5436 10.2545C11.3242 10.3873 11.1908 10.6336 11.1951 10.8981L11.216 12.1982C11.2203 12.4629 11.1555 12.7239 11.0285 12.9531L10.9831 13.0351C10.856 13.2645 10.6715 13.4535 10.4493 13.5819L9.36075 14.2109C9.13763 14.3398 8.99942 14.5851 9 14.8511L9.00501 17.152C9.00559 17.4163 9.1432 17.6597 9.36476 17.7883L10.4481 18.4167C10.671 18.546 10.8559 18.7364 10.9826 18.9673L11.0313 19.0559C11.1565 19.284 11.2203 19.5431 11.2161 19.8059L11.1951 21.1003C11.1908 21.3657 11.325 21.6126 11.5456 21.7452L13.4615 22.8964C13.6814 23.0286 13.9528 23.0262 14.1707 22.8902L15.2342 22.2262C15.4515 22.0905 15.7001 22.0188 15.9535 22.0188H16.0457C16.2996 22.0188 16.5487 22.0908 16.7664 22.227L17.8348 22.8959C18.0534 23.0327 18.326 23.0348 18.5465 22.9014L20.4564 21.7455C20.6758 21.6127 20.8092 21.3664 20.8049 21.1019L20.784 19.8018C20.7797 19.5371 20.8445 19.2761 20.9715 19.0469L21.0169 18.9649C21.144 18.7355 21.3285 18.5465 21.5507 18.4181L22.6393 17.7891C22.8624 17.6602 23.0006 17.4149 23 17.1489L22.995 14.848C22.9944 14.5837 22.8568 14.3403 22.6352 14.2117L21.5493 13.5818C21.328 13.4534 21.1442 13.2649 21.0176 13.0362Z"\n              />\n            </g>\n          </svg>\n        </media-settings-menu-button>\n\n        <!-- PIP/Mini Player Button -->\n        <style>\n          media-controller:not([breakpointmd]) media-pip-button {\n            display: none;\n          }\n        </style>\n        <media-pip-button class="media-button">\n          <svg slot="icon" viewBox="0 0 32 32">\n            <use class="svg-shadow" xlink:href="#pip-icon"></use>\n            <g id="pip-icon">\n              <path\n                d="M12 22H9.77778C9.34822 22 9 21.6162 9 21.1429V10.8571C9 10.3838 9.34822 10 9.77778 10L22.2222 10C22.6518 10 23 10.3838 23 10.8571V12.5714"\n              />\n              <path\n                d="M15 21.5714V16.4286C15 16.1919 15.199 16 15.4444 16H22.5556C22.801 16 23 16.1919 23 16.4286V17V21.5714C23 21.8081 22.801 22 22.5556 22H20.3333H17.6667H15.4444C15.199 22 15 21.8081 15 21.5714Z"\n              />\n            </g>\n          </svg>\n        </media-pip-button>\n\n        <!-- Airplay Button -->\n        <media-airplay-button class="media-button">\n          <svg viewBox="0 0 32 32" aria-hidden="true" slot="icon">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 20h1.722c.43 0 .778-.32.778-.714v-8.572c0-.394-.348-.714-.778-.714H9.778c-.43 0-.778.32-.778.714v1.429"/>\n            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5 20H9.778c-.43 0-.778-.32-.778-.714v-8.572c0-.394.348-.714.778-.714h12.444c.43 0 .778.32.778.714v1.429"/>\n            <path stroke-linejoin="round" d="m16 19 3.464 3.75h-6.928L16 19Z"/>\n          </svg>\n        </media-airplay-button>\n\n        <!-- Cast Button -->\n        <media-cast-button class="media-button">\n          <svg slot="icon" viewBox="0 0 32 32">\n            <use class="svg-shadow" xlink:href="#cast-icon"></use>\n            <g id="cast-icon">\n              <path\n                d="M18.5 21.833h4.167c.46 0 .833-.373.833-.833V11a.833.833 0 0 0-.833-.833H9.333A.833.833 0 0 0 8.5 11v1.111m0 8.056c.92 0 1.667.746 1.667 1.666M8.5 17.667a4.167 4.167 0 0 1 4.167 4.166"\n              />\n              <path d="M8.5 15.167a6.667 6.667 0 0 1 6.667 6.666" />\n            </g>\n          </svg>\n        </media-cast-button>\n\n        <!-- Fullscreen Button -->\n        <style>\n          /* Having trouble getting @property to work in the shadow dom\n             to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */\n\n          media-fullscreen-button .fs-arrow {\n            translate: 0% 0%;\n          }\n          media-fullscreen-button:hover .fs-arrow {\n            animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);\n          }\n          media-fullscreen-button:hover #fs-enter-top,\n          media-fullscreen-button:hover #fs-exit-bottom {\n            animation-name: up-right-bounce;\n          }\n\n          media-fullscreen-button:hover #fs-enter-bottom,\n          media-fullscreen-button:hover #fs-exit-top {\n            animation-name: down-left-bounce;\n          }\n\n          @keyframes up-left-bounce {\n            0% {\n              translate: 0 0;\n            }\n            50% {\n              translate: -4% -4%;\n            }\n          }\n          @keyframes up-right-bounce {\n            0% {\n              translate: 0 0;\n            }\n            50% {\n              translate: 4% -4%;\n            }\n          }\n          @keyframes down-left-bounce {\n            0% {\n              translate: 0 0;\n            }\n            50% {\n              translate: -4% 4%;\n            }\n          }\n          @keyframes down-right-bounce {\n            0% {\n              translate: 0 0;\n            }\n            50% {\n              translate: 4% 4%;\n            }\n          }\n        </style>\n        <media-fullscreen-button class="media-button">\n          <svg slot="enter" viewBox="0 0 32 32">\n            <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>\n            <g id="fs-enter-paths">\n              <g id="fs-enter-top" class="fs-arrow">\n                <path d="M18 10H22V14" />\n                <path d="M22 10L18 14" />\n              </g>\n              <g id="fs-enter-bottom" class="fs-arrow">\n                <path d="M14 22L10 22V18" />\n                <path d="M10 22L14 18" />\n              </g>\n            </g>\n          </svg>\n          <svg slot="exit" viewBox="0 0 32 32">\n            <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>\n            <g id="fs-exit-paths">\n              <g id="fs-exit-top" class="fs-arrow">\n                <path d="M22 14H18V10" />\n                <path d="M22 10L18 14" />\n              </g>\n              <g id="fs-exit-bottom" class="fs-arrow">\n                <path d="M10 18L14 18V22" />\n                <path d="M14 18L10 22" />\n              </g>\n            </g>\n          </svg>\n        </media-fullscreen-button>\n      </media-control-bar>\n    </media-controller>\n\n  ';
}
class MediaThemeSutroElement extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$media$2d$theme$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MediaThemeElement"] {
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MediaThemeSutroElement, "template", template);
if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements && !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.get('media-theme-sutro')) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$node_modules$2f$media$2d$chrome$2f$dist$2f$utils$2f$server$2d$safe$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThis"].customElements.define('media-theme-sutro', MediaThemeSutroElement);
}
const __TURBOPACK__default__export__ = MediaThemeSutroElement;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/player.style/themes/sutro/dist/react.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>react_default
]);
// dist/react.js
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$themes$2f$sutro$2f$dist$2f$media$2d$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/themes/sutro/dist/media-theme.js [app-client] (ecmascript)");
"use client";
;
;
// ../../node_modules/ce-la-react/dist/ce-la-react.js
var reservedReactProps = /* @__PURE__ */ new Set([
    "style",
    "children",
    "ref",
    "key",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "dangerouslySetInnerHTML"
]);
var reactPropToAttrNameMap = {
    className: "class",
    htmlFor: "for"
};
function defaultToAttributeName(propName) {
    return propName.toLowerCase();
}
function defaultToAttributeValue(propValue) {
    if (typeof propValue === "boolean") return propValue ? "" : void 0;
    if (typeof propValue === "function") return void 0;
    if (typeof propValue === "object" && propValue !== null) return void 0;
    return propValue;
}
function createComponent(param) {
    let { react: React2, tagName, elementClass, events, displayName, toAttributeName = defaultToAttributeName, toAttributeValue = defaultToAttributeValue } = param;
    const IS_REACT_19_OR_NEWER = Number.parseInt(React2.version) >= 19;
    const ReactComponent = React2.forwardRef((props, ref)=>{
        const elementRef = React2.useRef(null);
        const prevElemPropsRef = React2.useRef(/* @__PURE__ */ new Map());
        const eventProps = {};
        const attrs = {};
        const reactProps = {};
        const elementProps = {};
        for (const [k, v] of Object.entries(props)){
            var _globalThis_HTMLElement, _elementClass_observedAttributes;
            if (reservedReactProps.has(k)) {
                reactProps[k] = v;
                continue;
            }
            var _reactPropToAttrNameMap_k;
            const attrName = toAttributeName((_reactPropToAttrNameMap_k = reactPropToAttrNameMap[k]) !== null && _reactPropToAttrNameMap_k !== void 0 ? _reactPropToAttrNameMap_k : k);
            var _globalThis_HTMLElement_prototype;
            if (k in elementClass.prototype && !(k in ((_globalThis_HTMLElement_prototype = (_globalThis_HTMLElement = globalThis.HTMLElement) === null || _globalThis_HTMLElement === void 0 ? void 0 : _globalThis_HTMLElement.prototype) !== null && _globalThis_HTMLElement_prototype !== void 0 ? _globalThis_HTMLElement_prototype : {})) && !((_elementClass_observedAttributes = elementClass.observedAttributes) === null || _elementClass_observedAttributes === void 0 ? void 0 : _elementClass_observedAttributes.some((attr)=>attr === attrName))) {
                elementProps[k] = v;
                continue;
            }
            if (k.startsWith("on")) {
                eventProps[k] = v;
                continue;
            }
            const attrValue = toAttributeValue(v);
            if (attrName && attrValue != null) {
                attrs[attrName] = String(attrValue);
                if (!IS_REACT_19_OR_NEWER) {
                    reactProps[attrName] = attrValue;
                }
            }
            if (attrName && IS_REACT_19_OR_NEWER) {
                reactProps[attrName] = v;
            }
        }
        if (typeof window !== "undefined") {
            for(const propName in eventProps){
                const callback = eventProps[propName];
                const useCapture = propName.endsWith("Capture");
                var _events_propName;
                const eventName = ((_events_propName = events === null || events === void 0 ? void 0 : events[propName]) !== null && _events_propName !== void 0 ? _events_propName : propName.slice(2).toLowerCase()).slice(0, useCapture ? -7 : void 0);
                React2.useLayoutEffect({
                    "createComponent.ReactComponent.useLayoutEffect": ()=>{
                        const eventTarget = elementRef === null || elementRef === void 0 ? void 0 : elementRef.current;
                        if (!eventTarget || typeof callback !== "function") return;
                        eventTarget.addEventListener(eventName, callback, useCapture);
                        return ({
                            "createComponent.ReactComponent.useLayoutEffect": ()=>{
                                eventTarget.removeEventListener(eventName, callback, useCapture);
                            }
                        })["createComponent.ReactComponent.useLayoutEffect"];
                    }
                }["createComponent.ReactComponent.useLayoutEffect"], [
                    elementRef === null || elementRef === void 0 ? void 0 : elementRef.current,
                    callback
                ]);
            }
            React2.useLayoutEffect({
                "createComponent.ReactComponent.useLayoutEffect": ()=>{
                    if (elementRef.current === null) return;
                    const newElemProps = /* @__PURE__ */ new Map();
                    for(const key in elementProps){
                        setProperty(elementRef.current, key, elementProps[key]);
                        prevElemPropsRef.current.delete(key);
                        newElemProps.set(key, elementProps[key]);
                    }
                    for (const [key, _value] of prevElemPropsRef.current){
                        setProperty(elementRef.current, key, void 0);
                    }
                    prevElemPropsRef.current = newElemProps;
                }
            }["createComponent.ReactComponent.useLayoutEffect"]);
        }
        if (typeof window === "undefined" && (elementClass === null || elementClass === void 0 ? void 0 : elementClass.getTemplateHTML) && (elementClass === null || elementClass === void 0 ? void 0 : elementClass.shadowRootOptions)) {
            const { mode, delegatesFocus } = elementClass.shadowRootOptions;
            const templateShadowRoot = React2.createElement("template", {
                shadowrootmode: mode,
                shadowrootdelegatesfocus: delegatesFocus,
                dangerouslySetInnerHTML: {
                    __html: elementClass.getTemplateHTML(attrs)
                }
            });
            reactProps.children = [
                templateShadowRoot,
                reactProps.children
            ];
        }
        return React2.createElement(tagName, {
            ...reactProps,
            ref: React2.useCallback({
                "createComponent.ReactComponent.useCallback": (node)=>{
                    elementRef.current = node;
                    if (typeof ref === "function") {
                        ref(node);
                    } else if (ref !== null) {
                        ref.current = node;
                    }
                }
            }["createComponent.ReactComponent.useCallback"], [
                ref
            ])
        });
    });
    ReactComponent.displayName = displayName !== null && displayName !== void 0 ? displayName : elementClass.name;
    return ReactComponent;
}
function setProperty(node, name, value) {
    var _globalThis_HTMLElement;
    node[name] = value;
    var _globalThis_HTMLElement_prototype;
    if (value == null && name in ((_globalThis_HTMLElement_prototype = (_globalThis_HTMLElement = globalThis.HTMLElement) === null || _globalThis_HTMLElement === void 0 ? void 0 : _globalThis_HTMLElement.prototype) !== null && _globalThis_HTMLElement_prototype !== void 0 ? _globalThis_HTMLElement_prototype : {})) {
        node.removeAttribute(name);
    }
}
// dist/react.js
var react_default = createComponent({
    react: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    tagName: "media-theme-sutro",
    elementClass: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$themes$2f$sutro$2f$dist$2f$media$2d$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
;
 /*! Bundled license information:

ce-la-react/dist/ce-la-react.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *
   * Modified version of `@lit/react` for vanilla custom elements with support for SSR.
   *)
*/ }),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/mux/transformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPlaybackId",
    ()=>getPlaybackId,
    "getPosterURLFromPlaybackId",
    ()=>getPosterURLFromPlaybackId,
    "transform",
    ()=>transform
]);
const MUX_VIDEO_DOMAIN = "mux.com";
function transform(asset, props) {
    var _asset_providerMetadata_mux, _asset_providerMetadata, _props_tokens;
    const playbackId = getPlaybackId(asset);
    if (!playbackId) return asset;
    var _asset_providerMetadata_mux_thumbnailTime, _ref;
    const thumbnailTime = (_ref = (_asset_providerMetadata_mux_thumbnailTime = (_asset_providerMetadata = asset.providerMetadata) === null || _asset_providerMetadata === void 0 ? void 0 : (_asset_providerMetadata_mux = _asset_providerMetadata.mux) === null || _asset_providerMetadata_mux === void 0 ? void 0 : _asset_providerMetadata_mux.thumbnailTime) !== null && _asset_providerMetadata_mux_thumbnailTime !== void 0 ? _asset_providerMetadata_mux_thumbnailTime : props === null || props === void 0 ? void 0 : props.thumbnailTime) !== null && _ref !== void 0 ? _ref : props === null || props === void 0 ? void 0 : props.startTime;
    var _props_customDomain;
    const transformedAsset = {
        ...asset,
        sources: [
            {
                src: "https://stream.".concat((_props_customDomain = props === null || props === void 0 ? void 0 : props.customDomain) !== null && _props_customDomain !== void 0 ? _props_customDomain : MUX_VIDEO_DOMAIN, "/").concat(playbackId, ".m3u8"),
                type: "application/x-mpegURL"
            }
        ],
        poster: getPosterURLFromPlaybackId(playbackId, {
            thumbnailTime,
            customDomain: props === null || props === void 0 ? void 0 : props.customDomain,
            token: props === null || props === void 0 ? void 0 : (_props_tokens = props.tokens) === null || _props_tokens === void 0 ? void 0 : _props_tokens.thumbnail
        })
    };
    if (thumbnailTime >= 0) {
        transformedAsset.thumbnailTime = thumbnailTime;
    }
    return transformedAsset;
}
function getPlaybackId(asset) {
    var _asset_providerMetadata;
    var _asset_providerMetadata_mux;
    const providerMetadata = (_asset_providerMetadata_mux = (_asset_providerMetadata = asset.providerMetadata) === null || _asset_providerMetadata === void 0 ? void 0 : _asset_providerMetadata.mux) !== null && _asset_providerMetadata_mux !== void 0 ? _asset_providerMetadata_mux : asset.externalIds;
    return providerMetadata === null || providerMetadata === void 0 ? void 0 : providerMetadata.playbackId;
}
const getPosterURLFromPlaybackId = function(playbackId) {
    let { token, thumbnailTime, width, customDomain = MUX_VIDEO_DOMAIN } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const time = token == null ? thumbnailTime : void 0;
    const { aud } = parseJwt(token);
    if (token && aud !== "t") {
        return;
    }
    return "https://image.".concat(customDomain, "/").concat(playbackId, "/thumbnail.webp").concat(toQuery({
        token,
        time,
        width
    }));
};
function toQuery(obj) {
    const params = toParams(obj).toString();
    return params ? "?" + params : "";
}
function toParams(obj) {
    const params = {};
    for(const key in obj){
        if (obj[key] != null) params[key] = obj[key];
    }
    return new URLSearchParams(params);
}
function parseJwt(token) {
    const base64Url = (token !== null && token !== void 0 ? token : "").split(".")[1];
    if (!base64Url) return {};
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(atob(base64).split("").map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
    return JSON.parse(jsonPayload);
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "camelCase",
    ()=>camelCase,
    "config",
    ()=>config,
    "getUrlExtension",
    ()=>getUrlExtension,
    "isReactComponent",
    ()=>isReactComponent,
    "svgBlurImage",
    ()=>svgBlurImage,
    "toSymlinkPath",
    ()=>toSymlinkPath,
    "useInterval",
    ()=>useInterval,
    "usePolling",
    ()=>usePolling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _process_env_NEXT_PUBLIC_DEV_VIDEO_OPTS, _ref;
const config = JSON.parse((_ref = (_process_env_NEXT_PUBLIC_DEV_VIDEO_OPTS = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DEV_VIDEO_OPTS) !== null && _process_env_NEXT_PUBLIC_DEV_VIDEO_OPTS !== void 0 ? _process_env_NEXT_PUBLIC_DEV_VIDEO_OPTS : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_VIDEO_OPTS) !== null && _ref !== void 0 ? _ref : "{}");
const DEFAULT_POLLING_INTERVAL = 5e3;
var _config_folder;
const FILES_FOLDER = "".concat((_config_folder = config.folder) !== null && _config_folder !== void 0 ? _config_folder : "videos", "/");
function toSymlinkPath(path) {
    if (!(path === null || path === void 0 ? void 0 : path.startsWith(FILES_FOLDER))) return path;
    return path === null || path === void 0 ? void 0 : path.replace(FILES_FOLDER, "_next-video/");
}
function camelCase(name) {
    return name.toLowerCase().replace(/[-_]([a-z])/g, ($0, $1)=>$1.toUpperCase());
}
function getUrlExtension(url) {
    if (typeof url === "string") {
        var _url_split__split_pop;
        return (_url_split__split_pop = url.split(/[#?]/)[0].split(".").pop()) === null || _url_split__split_pop === void 0 ? void 0 : _url_split__split_pop.trim();
    }
}
function usePolling(callback) {
    let interval = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_POLLING_INTERVAL;
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new AbortController());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePolling.useEffect": ()=>{
            abortControllerRef.current = new AbortController();
            callback(abortControllerRef.current.signal);
            return ({
                "usePolling.useEffect": ()=>{
                    abortControllerRef.current.abort();
                }
            })["usePolling.useEffect"];
        }
    }["usePolling.useEffect"], []);
    const intervalFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePolling.useCallback[intervalFn]": ()=>{
            return callback(abortControllerRef.current.signal);
        }
    }["usePolling.useCallback[intervalFn]"], []);
    useInterval(intervalFn, interval);
}
function useInterval(callback, delay) {
    const savedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInterval.useEffect": ()=>{
            savedCallback.current = callback;
        }
    }["useInterval.useEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInterval.useEffect": ()=>{
            const tick = {
                "useInterval.useEffect.tick": async ()=>{
                    var _savedCallback_current;
                    await ((_savedCallback_current = savedCallback.current) === null || _savedCallback_current === void 0 ? void 0 : _savedCallback_current.call(savedCallback));
                }
            }["useInterval.useEffect.tick"];
            if (delay != null) {
                let id = setInterval(tick, delay);
                return ({
                    "useInterval.useEffect": ()=>clearInterval(id)
                })["useInterval.useEffect"];
            }
        }
    }["useInterval.useEffect"], [
        delay
    ]);
}
function isReactComponent(component) {
    return isClassComponent(component) || typeof component === "function" || isExoticComponent(component);
}
function isClassComponent(component) {
    return typeof component === "function" && (()=>{
        const proto = Object.getPrototypeOf(component);
        return proto.prototype && proto.prototype.isReactComponent;
    })();
}
function isExoticComponent(component) {
    return typeof component === "object" && typeof component.$$typeof === "symbol" && [
        "react.memo",
        "react.forward_ref"
    ].includes(component.$$typeof.description);
}
function svgBlurImage(blurDataURL) {
    const svg = /*html*/ '<svg xmlns="http://www.w3.org/2000/svg"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(#b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="'.concat(blurDataURL, '"/></g></svg>');
    return svg.replace(/#/g, "%23");
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/players/media/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>media_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/utils.js [app-client] (ecmascript)");
;
;
;
let MuxVideo;
let HlsVideo;
let DashVideo;
const Media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
    if (typeof props.playbackId === "string") {
        MuxVideo !== null && MuxVideo !== void 0 ? MuxVideo : MuxVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/Desktop/OwnGigs/agency/node_modules/@mux/mux-video/dist/react.mjs [app-client] (ecmascript, async loader)"));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MuxVideo, {
            ref: forwardedRef,
            ...props,
            controls: false
        });
    }
    const fileExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrlExtension"])(props.src);
    if (fileExtension === "m3u8") {
        HlsVideo !== null && HlsVideo !== void 0 ? HlsVideo : HlsVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/Desktop/OwnGigs/agency/node_modules/hls-video-element/dist/react.js [app-client] (ecmascript, async loader)"));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(HlsVideo, {
            ref: forwardedRef,
            ...props,
            controls: false
        });
    }
    if (fileExtension === "mpd") {
        DashVideo !== null && DashVideo !== void 0 ? DashVideo : DashVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/Desktop/OwnGigs/agency/node_modules/dash-video-element/dist/react.js [app-client] (ecmascript, async loader)"));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DashVideo, {
            ref: forwardedRef,
            ...props,
            controls: false
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("video", {
        ref: forwardedRef,
        ...props,
        controls: false
    });
});
var media_default = Media;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/players/default-player.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>default_player_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$themes$2f$sutro$2f$dist$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/player.style/themes/sutro/dist/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$mux$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/mux/transformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$players$2f$media$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/players/media/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const DefaultPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((allProps, forwardedRef)=>{
    let { style, children, asset, controls = true, poster, blurDataURL, theme: Theme = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$player$2e$style$2f$themes$2f$sutro$2f$dist$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], ...rest } = allProps;
    const slottedPoster = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children).find((child)=>{
        return typeof child === "object" && "type" in child && child.props.slot === "poster";
    });
    let slottedPosterImg;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(slottedPoster)) {
        poster = "";
        blurDataURL = void 0;
        slottedPosterImg = slottedPoster;
        children = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children).filter((child)=>child !== slottedPoster);
    }
    const props = rest;
    const imgStyleProps = {};
    const playbackId = asset ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$mux$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlaybackId"])(asset) : void 0;
    let isCustomPoster = true;
    let srcSet;
    if (playbackId && (asset === null || asset === void 0 ? void 0 : asset.status) === "ready") {
        props.src = void 0;
        props.playbackId = playbackId;
        if (poster) {
            isCustomPoster = poster !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$mux$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosterURLFromPlaybackId"])(playbackId, props);
            if (!isCustomPoster) {
                srcSet = "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$mux$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosterURLFromPlaybackId"])(playbackId, {
                    ...props,
                    width: 480
                }), " 480w,").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$mux$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosterURLFromPlaybackId"])(playbackId, {
                    ...props,
                    width: 640
                }), " 640w,").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$mux$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosterURLFromPlaybackId"])(playbackId, {
                    ...props,
                    width: 960
                }), " 960w,").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$mux$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosterURLFromPlaybackId"])(playbackId, {
                    ...props,
                    width: 1280
                }), " 1280w,").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$mux$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosterURLFromPlaybackId"])(playbackId, {
                    ...props,
                    width: 1600
                }), " 1600w,").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$mux$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosterURLFromPlaybackId"])(playbackId, {
                    ...props
                }), " 1920w");
            }
        }
    }
    if (blurDataURL) {
        const showGeneratedBlur = !isCustomPoster && blurDataURL === (asset === null || asset === void 0 ? void 0 : asset.blurDataURL);
        const showCustomBlur = isCustomPoster && blurDataURL !== (asset === null || asset === void 0 ? void 0 : asset.blurDataURL);
        if (showGeneratedBlur || showCustomBlur) {
            imgStyleProps.gridArea = "1/1";
            imgStyleProps.width = "100%";
            imgStyleProps.height = "100%";
            imgStyleProps.color = "transparent";
            imgStyleProps.backgroundSize = "cover";
            imgStyleProps.backgroundPosition = "center";
            imgStyleProps.backgroundRepeat = "no-repeat";
            imgStyleProps.backgroundImage = "url('data:image/svg+xml;charset=utf-8,".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svgBlurImage"])(blurDataURL), "')");
        }
    }
    delete props.thumbnailTime;
    if (controls && Theme) {
        const dataNextVideo = props["data-next-video"];
        if (poster) {
            slottedPosterImg = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
                slot: "poster",
                src: isCustomPoster ? poster : void 0,
                srcSet,
                style: imgStyleProps,
                decoding: "async",
                "aria-hidden": "true"
            });
            poster = "";
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Theme, {
            "data-next-video": dataNextVideo,
            style: {
                display: "grid",
                ...style
            },
            children: [
                slottedPosterImg,
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$players$2f$media$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        suppressHydrationWarning: true,
                        ref: forwardedRef,
                        style: {
                            gridArea: "1/1"
                        },
                        slot: "media",
                        poster,
                        crossOrigin: "",
                        ...props,
                        children: [
                            playbackId && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("track", {
                                default: true,
                                kind: "metadata",
                                label: "thumbnails",
                                src: "https://image.mux.com/".concat(playbackId, "/storyboard.vtt")
                            }),
                            children
                        ]
                    })
                })
            ]
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$players$2f$media$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            suppressHydrationWarning: true,
            ref: forwardedRef,
            style: {
                gridArea: "1/1",
                ...style
            },
            controls: controls === false ? void 0 : true,
            poster,
            crossOrigin: "",
            ...props,
            children: [
                playbackId && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("track", {
                    default: true,
                    kind: "metadata",
                    label: "thumbnails",
                    src: "https://image.mux.com/".concat(playbackId, "/storyboard.vtt")
                }),
                children
            ]
        })
    });
});
var default_player_default = DefaultPlayer;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
function Alert(param) {
    let { status, hidden } = param;
    let title = "";
    let message = "";
    switch(status){
        case "error":
            title = "Error";
            message = "An error occurred while uploading your video. Please check the CLI logs for more info.";
            break;
        case "sourced":
            title = "Video is not processing";
            message = "Make sure to run next-video sync. The currently loaded video is the source file.";
            break;
        default:
            title = "Upload in progress...";
            message = "Your video file is being uploaded. The currently loaded video is the source file.";
            break;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
                /* css */ children: "\n        .next-video-alert {\n          position: absolute;\n          inset: 1em;\n          bottom: auto;\n          padding: .75rem 1rem;\n          border-radius: 1rem;\n          color: hsl(0, 0%, 100%);\n          background-color: hsl(240 10% 3.9% / .7);\n          border: 1px solid hsl(240 3.7% 15.9%);\n          transition: visibility 0s, opacity .25s;\n          visibility: visible;\n          opacity: 1;\n        }\n\n        .next-video-alert[hidden] {\n          display: block;\n          transition: visibility 1s, opacity 1s;\n          visibility: hidden;\n          opacity: 0;\n        }\n\n        .next-video-alert svg {\n          position: absolute;\n        }\n\n        .next-video-alert h5 {\n          line-height: 1;\n          font-weight: 500;\n          margin-bottom: 0.25rem;\n          padding-left: 1.75rem;\n          font-size: inherit;\n        }\n\n        .next-video-alert div {\n          padding-left: 1.75rem;\n          font-size: 0.875rem;\n          line-height: 1.25rem;\n        }\n        "
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                role: "alert",
                className: "next-video-alert next-video-alert-".concat(status),
                hidden,
                children: [
                    status === "error" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                        width: "15",
                        height: "15",
                        viewBox: "0 0 15 15",
                        fill: "none",
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                            d: "M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z",
                            fill: "currentColor",
                            fillRule: "evenodd",
                            clipRule: "evenodd"
                        })
                    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                        width: "15",
                        height: "15",
                        viewBox: "0 0 15 15",
                        fill: "none",
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                            d: "M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z",
                            fill: "currentColor",
                            fillRule: "evenodd",
                            clipRule: "evenodd"
                        })
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                        children: title
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        children: message
                    })
                ]
            })
        ]
    });
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/video-loader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createVideoRequest",
    ()=>createVideoRequest,
    "defaultLoader",
    ()=>defaultLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/utils.js [app-client] (ecmascript)");
;
async function defaultLoader(param) {
    let { config: config2, src, width, height } = param;
    let requestUrl = "".concat(config2.path, "?url=").concat(encodeURIComponent("".concat(src)));
    if (width) requestUrl += "&w=".concat(width);
    if (height) requestUrl += "&h=".concat(height);
    return "".concat(requestUrl);
}
function createVideoRequest(loader, props, callback) {
    return async (abortSignal)=>{
        if (typeof props.src !== "string") return;
        try {
            const requestUrl = await loader({
                ...props,
                config: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]
            });
            const res = await fetch(requestUrl, {
                signal: abortSignal
            });
            const json = await res.json();
            if (res.ok) {
                callback(json);
            } else {
                let message = "[next-video] The request to ".concat(res.url, " failed. ");
                message += "Did you configure the `".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].path, "` route to handle video API requests?\n");
                throw new Error(message);
            }
        } catch (err) {
            if (!abortSignal.aborted) {
                console.error(err);
            }
        }
    };
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/vercel-blob/transformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transform",
    ()=>transform
]);
function transform(asset) {
    var _asset_providerMetadata;
    var _asset_providerMetadata_vercelblob;
    const providerDetails = (_asset_providerMetadata_vercelblob = (_asset_providerMetadata = asset.providerMetadata) === null || _asset_providerMetadata === void 0 ? void 0 : _asset_providerMetadata["vercel-blob"]) !== null && _asset_providerMetadata_vercelblob !== void 0 ? _asset_providerMetadata_vercelblob : asset.externalIds;
    if (!providerDetails) return asset;
    const source = {
        src: providerDetails.url
    };
    if (providerDetails.contentType) {
        source.type = providerDetails.contentType;
    }
    return {
        ...asset,
        sources: [
            source
        ]
    };
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/backblaze/transformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transform",
    ()=>transform
]);
function transform(asset) {
    var _asset_providerMetadata;
    const providerMetadata = (_asset_providerMetadata = asset.providerMetadata) === null || _asset_providerMetadata === void 0 ? void 0 : _asset_providerMetadata.backblaze;
    if (!providerMetadata) return asset;
    const src = new URL(providerMetadata.endpoint);
    src.hostname = "".concat(providerMetadata.bucket, ".").concat(src.hostname);
    src.pathname = providerMetadata.key;
    const source = {
        src: "".concat(src)
    };
    return {
        ...asset,
        sources: [
            source
        ]
    };
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/amazon-s3/transformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transform",
    ()=>transform
]);
function transform(asset) {
    var _asset_providerMetadata;
    const providerMetadata = (_asset_providerMetadata = asset.providerMetadata) === null || _asset_providerMetadata === void 0 ? void 0 : _asset_providerMetadata["amazon-s3"];
    if (!providerMetadata) return asset;
    const src = new URL(providerMetadata.endpoint);
    src.hostname = "".concat(providerMetadata.bucket, ".").concat(src.hostname);
    src.pathname = providerMetadata.key;
    const source = {
        src: "".concat(src)
    };
    return {
        ...asset,
        sources: [
            source
        ]
    };
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/cloudflare-r2/transformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transform",
    ()=>transform
]);
function transform(asset) {
    var _asset_providerMetadata;
    const providerMetadata = (_asset_providerMetadata = asset.providerMetadata) === null || _asset_providerMetadata === void 0 ? void 0 : _asset_providerMetadata["cloudflare-r2"];
    if (!providerMetadata) return asset;
    const src = new URL(providerMetadata.bucketUrlPublic);
    src.pathname = providerMetadata.key;
    const source = {
        src: "".concat(src)
    };
    return {
        ...asset,
        sources: [
            source
        ]
    };
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/transformers.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$mux$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/mux/transformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$vercel$2d$blob$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/vercel-blob/transformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$backblaze$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/backblaze/transformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$amazon$2d$s3$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/amazon-s3/transformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$cloudflare$2d$r2$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/cloudflare-r2/transformer.js [app-client] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/transformers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "amazonS3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$amazon$2d$s3$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "backblaze",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$backblaze$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "cloudflareR2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$cloudflare$2d$r2$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "mux",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$mux$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "vercelBlob",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$vercel$2d$blob$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$transformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/transformers.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$mux$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/mux/transformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$vercel$2d$blob$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/vercel-blob/transformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$backblaze$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/backblaze/transformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$amazon$2d$s3$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/amazon-s3/transformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$cloudflare$2d$r2$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/cloudflare-r2/transformer.js [app-client] (ecmascript)");
}),
"[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/video.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>video_default,
    "getVideoProps",
    ()=>getVideoProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$players$2f$default$2d$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/players/default-player.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$video$2d$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/video-loader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$transformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/transformers.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$transformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/providers/transformers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next-video/dist/components/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const NextVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
    const DEV_MODE = true;
    let { as: VideoPlayer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$players$2f$default$2d$player$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], loader = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$video$2d$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultLoader"], transform = defaultTransformer, className, style, src, width, height } = props;
    let [asset, setAsset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(typeof src === "object" ? src : void 0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (typeof src === "object") {
        asset = src;
        src = void 0;
    }
    const loaderProps = {
        src,
        width,
        height
    };
    const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$video$2d$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVideoRequest"])(loader, loaderProps, (json)=>setAsset(json));
    const status = asset === null || asset === void 0 ? void 0 : asset.status;
    const fileExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrlExtension"])(src);
    const needsPolling = DEV_MODE && typeof src === "string" && status != "ready" && ![
        "m3u8",
        "mpd"
    ].includes(fileExtension !== null && fileExtension !== void 0 ? fileExtension : "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePolling"])(request, needsPolling ? 1e3 : null);
    const videoProps = getVideoProps({
        ...props,
        transform,
        src
    }, {
        asset
    });
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactComponent"])(VideoPlayer)) {
        console.warn("The `as` property is not a valid component:", VideoPlayer);
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "".concat(className ? "".concat(className, " ") : "", "next-video-container"),
        style,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
                /* css */ children: "\n        .next-video-container {\n          display: grid;  /* Fixes a Safari aspect-ratio + height bug. */\n          position: relative;\n          width: 100%;\n          aspect-ratio: 16 / 9;\n        }\n\n        [data-next-video] {\n          display: block;\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        [data-next-video] img {\n          object-fit: var(--media-object-fit, contain);\n          object-position: var(--media-object-position, center);\n          max-width: 100%;\n          max-height: 100%;\n          min-width: 100%;\n          min-height: 100%;\n        }\n        "
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(VideoPlayer, {
                ref: forwardedRef,
                "data-next-video": status !== null && status !== void 0 ? status : "",
                style: {
                    width,
                    height
                },
                asset,
                onPlaying: ()=>setPlaying(true),
                onPause: ()=>setPlaying(false),
                ...videoProps
            }),
            DEV_MODE && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                hidden: Boolean(playing || !status || status === "ready"),
                status
            })
        ]
    });
});
function getVideoProps(allProps, state) {
    const { asset } = state;
    const { controls = true, as, className, style, src, poster, blurDataURL, loader, transform, ...rest } = allProps;
    const props = {
        src,
        poster,
        controls,
        blurDataURL,
        ...rest
    };
    if (typeof poster === "object") {
        props.poster = poster.src;
        var _props_blurDataURL;
        (_props_blurDataURL = props.blurDataURL) !== null && _props_blurDataURL !== void 0 ? _props_blurDataURL : props.blurDataURL = poster.blurDataURL;
    }
    if (asset) {
        if (asset.status === "ready") {
            var _props_blurDataURL1;
            (_props_blurDataURL1 = props.blurDataURL) !== null && _props_blurDataURL1 !== void 0 ? _props_blurDataURL1 : props.blurDataURL = asset.blurDataURL;
            const transformedAsset = transform(asset, props);
            if (transformedAsset) {
                var _transformedAsset_sources_, _transformedAsset_sources;
                props.src = (_transformedAsset_sources = transformedAsset.sources) === null || _transformedAsset_sources === void 0 ? void 0 : (_transformedAsset_sources_ = _transformedAsset_sources[0]) === null || _transformedAsset_sources_ === void 0 ? void 0 : _transformedAsset_sources_.src;
                var _props_poster;
                (_props_poster = props.poster) !== null && _props_poster !== void 0 ? _props_poster : props.poster = transformedAsset.poster;
                var _props_thumbnailTime;
                (_props_thumbnailTime = props.thumbnailTime) !== null && _props_thumbnailTime !== void 0 ? _props_thumbnailTime : props.thumbnailTime = transformedAsset.thumbnailTime;
            }
        } else {
            props.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSymlinkPath"])(asset.originalFilePath);
        }
    }
    return props;
}
function defaultTransformer(asset, props) {
    var _asset_provider;
    const provider = (_asset_provider = asset.provider) !== null && _asset_provider !== void 0 ? _asset_provider : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].provider;
    for (let [key, transformer] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$providers$2f$transformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__)){
        if (key === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2d$video$2f$dist$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelCase"])(provider)) {
            return transformer.transform(asset, props);
        }
    }
}
var video_default = NextVideo;
;
}),
]);

//# sourceMappingURL=a9971_87948565._.js.map
module.exports = [
"[project]/Desktop/OwnGigs/agency/node_modules/custom-media-element/dist/custom-media-element.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "CustomAudioElement",
    ()=>CustomAudioElement,
    "CustomMediaMixin",
    ()=>CustomMediaMixin,
    "CustomVideoElement",
    ()=>CustomVideoElement,
    "Events",
    ()=>Events
]);
const Events = [
    "abort",
    "canplay",
    "canplaythrough",
    "durationchange",
    "emptied",
    "encrypted",
    "ended",
    "error",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "pause",
    "play",
    "playing",
    "progress",
    "ratechange",
    "seeked",
    "seeking",
    "stalled",
    "suspend",
    "timeupdate",
    "volumechange",
    "waiting",
    "waitingforkey",
    "resize",
    "enterpictureinpicture",
    "leavepictureinpicture",
    "webkitbeginfullscreen",
    "webkitendfullscreen",
    "webkitpresentationmodechanged"
];
const Attributes = [
    "autopictureinpicture",
    "disablepictureinpicture",
    "disableremoteplayback",
    "autoplay",
    "controls",
    "controlslist",
    "crossorigin",
    "loop",
    "muted",
    "playsinline",
    "poster",
    "preload",
    "src"
];
function getAudioTemplateHTML(attrs) {
    return /*html*/ `
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${serializeAttributes(attrs)}></audio>
    </slot>
    <slot></slot>
  `;
}
function getVideoTemplateHTML(attrs) {
    return /*html*/ `
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${serializeAttributes(attrs)}></video>
    </slot>
    <slot></slot>
  `;
}
function CustomMediaMixin(superclass, { tag, is }) {
    const nativeElTest = globalThis.document?.createElement?.(tag, {
        is
    });
    const nativeElProps = nativeElTest ? getNativeElProps(nativeElTest) : [];
    return class CustomMedia extends superclass {
        static getTemplateHTML = tag.endsWith("audio") ? getAudioTemplateHTML : getVideoTemplateHTML;
        static shadowRootOptions = {
            mode: "open"
        };
        static Events = Events;
        static #isDefined = false;
        static get observedAttributes() {
            CustomMedia.#define();
            const natAttrs = nativeElTest?.constructor?.observedAttributes ?? [];
            return [
                ...natAttrs,
                ...Attributes
            ];
        }
        static #define() {
            if (this.#isDefined) return;
            this.#isDefined = true;
            const propsToAttrs = new Set(this.observedAttributes);
            propsToAttrs.delete("muted");
            for (const prop of nativeElProps){
                if (prop in this.prototype) continue;
                if (typeof nativeElTest[prop] === "function") {
                    this.prototype[prop] = function(...args) {
                        this.#init();
                        const fn = ()=>{
                            if (this.call) return this.call(prop, ...args);
                            const nativeFn = this.nativeEl?.[prop];
                            return nativeFn?.apply(this.nativeEl, args);
                        };
                        return fn();
                    };
                } else {
                    const config = {
                        get () {
                            this.#init();
                            const attr = prop.toLowerCase();
                            if (propsToAttrs.has(attr)) {
                                const val = this.getAttribute(attr);
                                return val === null ? false : val === "" ? true : val;
                            }
                            return this.get?.(prop) ?? this.nativeEl?.[prop];
                        }
                    };
                    if (prop !== prop.toUpperCase()) {
                        config.set = function(val) {
                            this.#init();
                            const attr = prop.toLowerCase();
                            if (propsToAttrs.has(attr)) {
                                if (val === true || val === false || val == null) {
                                    this.toggleAttribute(attr, Boolean(val));
                                } else {
                                    this.setAttribute(attr, val);
                                }
                                return;
                            }
                            if (this.set) {
                                this.set(prop, val);
                                return;
                            }
                            if (this.nativeEl) {
                                this.nativeEl[prop] = val;
                            }
                        };
                    }
                    Object.defineProperty(this.prototype, prop, config);
                }
            }
        }
        // Private fields
        #isInit = false;
        #nativeEl = null;
        #childMap = /* @__PURE__ */ new Map();
        #childObserver;
        get;
        set;
        call;
        // If the custom element is defined before the custom element's HTML is parsed
        // no attributes will be available in the constructor (construction process).
        // Wait until initializing in the attributeChangedCallback or
        // connectedCallback or accessing any properties.
        get nativeEl() {
            this.#init();
            return this.#nativeEl ?? this.querySelector(":scope > [slot=media]") ?? this.querySelector(tag) ?? this.shadowRoot?.querySelector(tag) ?? null;
        }
        set nativeEl(val) {
            this.#nativeEl = val;
        }
        get defaultMuted() {
            return this.hasAttribute("muted");
        }
        set defaultMuted(val) {
            this.toggleAttribute("muted", val);
        }
        get src() {
            return this.getAttribute("src");
        }
        set src(val) {
            this.setAttribute("src", `${val}`);
        }
        get preload() {
            return this.getAttribute("preload") ?? this.nativeEl?.preload;
        }
        set preload(val) {
            this.setAttribute("preload", `${val}`);
        }
        #init() {
            if (this.#isInit) return;
            this.#isInit = true;
            this.init();
        }
        init() {
            if (!this.shadowRoot) {
                this.attachShadow({
                    mode: "open"
                });
                const attrs = namedNodeMapToObject(this.attributes);
                if (is) attrs.is = is;
                if (tag) attrs.part = tag;
                this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
            }
            this.nativeEl.muted = this.hasAttribute("muted");
            for (const prop of nativeElProps){
                this.#upgradeProperty(prop);
            }
            this.#childObserver = new MutationObserver(this.#syncMediaChildAttribute.bind(this));
            this.shadowRoot.addEventListener("slotchange", ()=>this.#syncMediaChildren());
            this.#syncMediaChildren();
            for (const type of this.constructor.Events){
                this.shadowRoot.addEventListener(type, this, true);
            }
        }
        handleEvent(event) {
            if (event.target === this.nativeEl) {
                this.dispatchEvent(new CustomEvent(event.type, {
                    detail: event.detail
                }));
            }
        }
        #syncMediaChildren() {
            const removeNativeChildren = new Map(this.#childMap);
            const defaultSlot = this.shadowRoot?.querySelector("slot:not([name])");
            const mediaChildren = defaultSlot?.assignedElements({
                flatten: true
            }).filter((el)=>[
                    "track",
                    "source"
                ].includes(el.localName));
            mediaChildren.forEach((el)=>{
                removeNativeChildren.delete(el);
                let clone = this.#childMap.get(el);
                if (!clone) {
                    clone = el.cloneNode();
                    this.#childMap.set(el, clone);
                    this.#childObserver?.observe(el, {
                        attributes: true
                    });
                }
                this.nativeEl?.append(clone);
                this.#enableDefaultTrack(clone);
            });
            removeNativeChildren.forEach((clone, el)=>{
                clone.remove();
                this.#childMap.delete(el);
            });
        }
        #syncMediaChildAttribute(mutations) {
            for (const mutation of mutations){
                if (mutation.type === "attributes") {
                    const { target, attributeName } = mutation;
                    const clone = this.#childMap.get(target);
                    if (clone && attributeName) {
                        clone.setAttribute(attributeName, target.getAttribute(attributeName) ?? "");
                        this.#enableDefaultTrack(clone);
                    }
                }
            }
        }
        #enableDefaultTrack(trackEl) {
            if (trackEl && trackEl.localName === "track" && trackEl.default && (trackEl.kind === "chapters" || trackEl.kind === "metadata") && trackEl.track.mode === "disabled") {
                trackEl.track.mode = "hidden";
            }
        }
        #upgradeProperty(prop) {
            if (Object.prototype.hasOwnProperty.call(this, prop)) {
                const value = this[prop];
                delete this[prop];
                this[prop] = value;
            }
        }
        attributeChangedCallback(attrName, oldValue, newValue) {
            this.#init();
            this.#forwardAttribute(attrName, oldValue, newValue);
        }
        #forwardAttribute(attrName, _oldValue, newValue) {
            if ([
                "id",
                "class"
            ].includes(attrName)) return;
            if (!CustomMedia.observedAttributes.includes(attrName) && this.constructor.observedAttributes.includes(attrName)) {
                return;
            }
            if (newValue === null) {
                this.nativeEl?.removeAttribute(attrName);
            } else if (this.nativeEl?.getAttribute(attrName) !== newValue) {
                this.nativeEl?.setAttribute(attrName, newValue);
            }
        }
        connectedCallback() {
            this.#init();
        }
    };
}
function getNativeElProps(nativeElTest) {
    const nativeElProps = [];
    for(let proto = Object.getPrototypeOf(nativeElTest); proto && proto !== HTMLElement.prototype; proto = Object.getPrototypeOf(proto)){
        const props = Object.getOwnPropertyNames(proto);
        nativeElProps.push(...props);
    }
    return nativeElProps;
}
function serializeAttributes(attrs) {
    let html = "";
    for(const key in attrs){
        if (!Attributes.includes(key)) continue;
        const value = attrs[key];
        if (value === "") html += ` ${key}`;
        else html += ` ${key}="${value}"`;
    }
    return html;
}
function namedNodeMapToObject(namedNodeMap) {
    const obj = {};
    for (const attr of namedNodeMap){
        obj[attr.name] = attr.value;
    }
    return obj;
}
const CustomVideoElement = CustomMediaMixin(globalThis.HTMLElement ?? class {
}, {
    tag: "video"
});
const CustomAudioElement = CustomMediaMixin(globalThis.HTMLElement ?? class {
}, {
    tag: "audio"
});
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/track-event.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackEvent",
    ()=>TrackEvent
]);
class TrackEvent extends Event {
    track;
    constructor(type, init){
        super(type);
        this.track = init.track;
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPrivate",
    ()=>getPrivate,
    "setPrivate",
    ()=>setPrivate
]);
const privateProps = /* @__PURE__ */ new WeakMap();
function getPrivate(instance) {
    return privateProps.get(instance) ?? setPrivate(instance, {});
}
function setPrivate(instance, props) {
    let saved = privateProps.get(instance);
    if (!saved) privateProps.set(instance, saved = {});
    return Object.assign(saved, props);
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track-list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoTrackList",
    ()=>VideoTrackList,
    "addVideoTrack",
    ()=>addVideoTrack,
    "removeVideoTrack",
    ()=>removeVideoTrack,
    "selectedChanged",
    ()=>selectedChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/track-event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/utils.js [app-ssr] (ecmascript)");
;
;
function addVideoTrack(media, track) {
    const trackList = media.videoTracks;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media = media;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet = /* @__PURE__ */ new Set();
    }
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.add(track);
    const index = trackSet.size - 1;
    if (!(index in VideoTrackList.prototype)) {
        Object.defineProperty(VideoTrackList.prototype, index, {
            get () {
                return [
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet
                ][index];
            }
        });
    }
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackEvent"]("addtrack", {
            track
        }));
    });
}
function removeVideoTrack(track) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media?.videoTracks;
    if (!trackList) return;
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.delete(track);
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackEvent"]("removetrack", {
            track
        }));
    });
}
function selectedChanged(selected) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(selected).media.videoTracks ?? [];
    let hasUnselected = false;
    for (const track of trackList){
        if (track === selected) continue;
        track.selected = false;
        hasUnselected = true;
    }
    if (hasUnselected) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested = true;
        queueMicrotask(()=>{
            delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested;
            trackList.dispatchEvent(new Event("change"));
        });
    }
}
class VideoTrackList extends EventTarget {
    #addTrackCallback;
    #removeTrackCallback;
    #changeCallback;
    constructor(){
        super();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet = /* @__PURE__ */ new Set();
    }
    get #tracks() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet;
    }
    [Symbol.iterator]() {
        return this.#tracks.values();
    }
    get length() {
        return this.#tracks.size;
    }
    getTrackById(id) {
        return [
            ...this.#tracks
        ].find((track)=>track.id === id) ?? null;
    }
    get selectedIndex() {
        return [
            ...this.#tracks
        ].findIndex((track)=>track.selected);
    }
    get onaddtrack() {
        return this.#addTrackCallback;
    }
    set onaddtrack(callback) {
        if (this.#addTrackCallback) {
            this.removeEventListener("addtrack", this.#addTrackCallback);
            this.#addTrackCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#addTrackCallback = callback;
            this.addEventListener("addtrack", callback);
        }
    }
    get onremovetrack() {
        return this.#removeTrackCallback;
    }
    set onremovetrack(callback) {
        if (this.#removeTrackCallback) {
            this.removeEventListener("removetrack", this.#removeTrackCallback);
            this.#removeTrackCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#removeTrackCallback = callback;
            this.addEventListener("removetrack", callback);
        }
    }
    get onchange() {
        return this.#changeCallback;
    }
    set onchange(callback) {
        if (this.#changeCallback) {
            this.removeEventListener("change", this.#changeCallback);
            this.#changeCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#changeCallback = callback;
            this.addEventListener("change", callback);
        }
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/rendition-event.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenditionEvent",
    ()=>RenditionEvent
]);
class RenditionEvent extends Event {
    rendition;
    constructor(type, init){
        super(type);
        this.rendition = init.rendition;
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition-list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoRenditionList",
    ()=>VideoRenditionList,
    "addRendition",
    ()=>addRendition,
    "removeRendition",
    ()=>removeRendition,
    "selectedChanged",
    ()=>selectedChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/rendition-event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/utils.js [app-ssr] (ecmascript)");
;
;
function addRendition(track, rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media.videoRenditions;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track = track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.add(rendition);
    const index = renditionSet.size - 1;
    if (!(index in VideoRenditionList.prototype)) {
        Object.defineProperty(VideoRenditionList.prototype, index, {
            get () {
                return getCurrentRenditions(this)[index];
            }
        });
    }
    queueMicrotask(()=>{
        if (!track.selected) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenditionEvent"]("addrendition", {
            rendition
        }));
    });
}
function removeRendition(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.videoRenditions;
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.delete(rendition);
    queueMicrotask(()=>{
        const track2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track2.selected) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenditionEvent"]("removerendition", {
            rendition
        }));
    });
}
function selectedChanged(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.videoRenditions;
    if (!renditionList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested = true;
    queueMicrotask(()=>{
        delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested;
        const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track.selected) return;
        renditionList.dispatchEvent(new Event("change"));
    });
}
function getCurrentRenditions(renditionList) {
    const media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).media;
    return [
        ...media.videoTracks
    ].filter((track)=>track.selected).flatMap((track)=>[
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet
        ]);
}
class VideoRenditionList extends EventTarget {
    #addRenditionCallback;
    #removeRenditionCallback;
    #changeCallback;
    [Symbol.iterator]() {
        return getCurrentRenditions(this).values();
    }
    get length() {
        return getCurrentRenditions(this).length;
    }
    getRenditionById(id) {
        return getCurrentRenditions(this).find((rendition)=>`${rendition.id}` === `${id}`) ?? null;
    }
    get selectedIndex() {
        return getCurrentRenditions(this).findIndex((rendition)=>rendition.selected);
    }
    set selectedIndex(index) {
        for (const [i, rendition] of getCurrentRenditions(this).entries()){
            rendition.selected = i === index;
        }
    }
    get onaddrendition() {
        return this.#addRenditionCallback;
    }
    set onaddrendition(callback) {
        if (this.#addRenditionCallback) {
            this.removeEventListener("addrendition", this.#addRenditionCallback);
            this.#addRenditionCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#addRenditionCallback = callback;
            this.addEventListener("addrendition", callback);
        }
    }
    get onremoverendition() {
        return this.#removeRenditionCallback;
    }
    set onremoverendition(callback) {
        if (this.#removeRenditionCallback) {
            this.removeEventListener("removerendition", this.#removeRenditionCallback);
            this.#removeRenditionCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#removeRenditionCallback = callback;
            this.addEventListener("removerendition", callback);
        }
    }
    get onchange() {
        return this.#changeCallback;
    }
    set onchange(callback) {
        if (this.#changeCallback) {
            this.removeEventListener("change", this.#changeCallback);
            this.#changeCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#changeCallback = callback;
            this.addEventListener("change", callback);
        }
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoRendition",
    ()=>VideoRendition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition-list.js [app-ssr] (ecmascript)");
;
class VideoRendition {
    src;
    id;
    width;
    height;
    bitrate;
    frameRate;
    codec;
    #selected = false;
    get selected() {
        return this.#selected;
    }
    set selected(val) {
        if (this.#selected === val) return;
        this.#selected = val;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectedChanged"])(this);
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoTrack",
    ()=>VideoTrack,
    "VideoTrackKind",
    ()=>VideoTrackKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition-list.js [app-ssr] (ecmascript)");
;
;
;
const VideoTrackKind = {
    alternative: "alternative",
    captions: "captions",
    main: "main",
    sign: "sign",
    subtitles: "subtitles",
    commentary: "commentary"
};
class VideoTrack {
    id;
    kind;
    label = "";
    language = "";
    sourceBuffer;
    #selected = false;
    addRendition(src, width, height, codec, bitrate, frameRate) {
        const rendition = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoRendition"]();
        rendition.src = src;
        rendition.width = width;
        rendition.height = height;
        rendition.frameRate = frameRate;
        rendition.bitrate = bitrate;
        rendition.codec = codec;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addRendition"])(this, rendition);
        return rendition;
    }
    removeRendition(rendition) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeRendition"])(rendition);
    }
    get selected() {
        return this.#selected;
    }
    set selected(val) {
        if (this.#selected === val) return;
        this.#selected = val;
        if (val !== true) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectedChanged"])(this);
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition-list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioRenditionList",
    ()=>AudioRenditionList,
    "addRendition",
    ()=>addRendition,
    "removeRendition",
    ()=>removeRendition,
    "selectedChanged",
    ()=>selectedChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/rendition-event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/utils.js [app-ssr] (ecmascript)");
;
;
function addRendition(track, rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media.audioRenditions;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track = track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.add(rendition);
    const index = renditionSet.size - 1;
    if (!(index in AudioRenditionList.prototype)) {
        Object.defineProperty(AudioRenditionList.prototype, index, {
            get () {
                return getCurrentRenditions(this)[index];
            }
        });
    }
    queueMicrotask(()=>{
        if (!track.enabled) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenditionEvent"]("addrendition", {
            rendition
        }));
    });
}
function removeRendition(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.audioRenditions;
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.delete(rendition);
    queueMicrotask(()=>{
        const track2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track2.enabled) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenditionEvent"]("removerendition", {
            rendition
        }));
    });
}
function selectedChanged(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.audioRenditions;
    if (!renditionList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested = true;
    queueMicrotask(()=>{
        delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested;
        const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track.enabled) return;
        renditionList.dispatchEvent(new Event("change"));
    });
}
function getCurrentRenditions(renditionList) {
    const media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).media;
    return [
        ...media.audioTracks
    ].filter((track)=>track.enabled).flatMap((track)=>[
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet
        ]);
}
class AudioRenditionList extends EventTarget {
    #addRenditionCallback;
    #removeRenditionCallback;
    #changeCallback;
    [Symbol.iterator]() {
        return getCurrentRenditions(this).values();
    }
    get length() {
        return getCurrentRenditions(this).length;
    }
    getRenditionById(id) {
        return getCurrentRenditions(this).find((rendition)=>`${rendition.id}` === `${id}`) ?? null;
    }
    get selectedIndex() {
        return getCurrentRenditions(this).findIndex((rendition)=>rendition.selected);
    }
    set selectedIndex(index) {
        for (const [i, rendition] of getCurrentRenditions(this).entries()){
            rendition.selected = i === index;
        }
    }
    get onaddrendition() {
        return this.#addRenditionCallback;
    }
    set onaddrendition(callback) {
        if (this.#addRenditionCallback) {
            this.removeEventListener("addrendition", this.#addRenditionCallback);
            this.#addRenditionCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#addRenditionCallback = callback;
            this.addEventListener("addrendition", callback);
        }
    }
    get onremoverendition() {
        return this.#removeRenditionCallback;
    }
    set onremoverendition(callback) {
        if (this.#removeRenditionCallback) {
            this.removeEventListener("removerendition", this.#removeRenditionCallback);
            this.#removeRenditionCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#removeRenditionCallback = callback;
            this.addEventListener("removerendition", callback);
        }
    }
    get onchange() {
        return this.#changeCallback;
    }
    set onchange(callback) {
        if (this.#changeCallback) {
            this.removeEventListener("change", this.#changeCallback);
            this.#changeCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#changeCallback = callback;
            this.addEventListener("change", callback);
        }
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioRendition",
    ()=>AudioRendition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition-list.js [app-ssr] (ecmascript)");
;
class AudioRendition {
    src;
    id;
    bitrate;
    codec;
    #selected = false;
    get selected() {
        return this.#selected;
    }
    set selected(val) {
        if (this.#selected === val) return;
        this.#selected = val;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectedChanged"])(this);
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track-list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioTrackList",
    ()=>AudioTrackList,
    "addAudioTrack",
    ()=>addAudioTrack,
    "enabledChanged",
    ()=>enabledChanged,
    "removeAudioTrack",
    ()=>removeAudioTrack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/track-event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/utils.js [app-ssr] (ecmascript)");
;
;
function addAudioTrack(media, track) {
    const trackList = media.audioTracks;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media = media;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet = /* @__PURE__ */ new Set();
    }
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.add(track);
    const index = trackSet.size - 1;
    if (!(index in AudioTrackList.prototype)) {
        Object.defineProperty(AudioTrackList.prototype, index, {
            get () {
                return [
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet
                ][index];
            }
        });
    }
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackEvent"]("addtrack", {
            track
        }));
    });
}
function removeAudioTrack(track) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media?.audioTracks;
    if (!trackList) return;
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.delete(track);
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrackEvent"]("removetrack", {
            track
        }));
    });
}
function enabledChanged(track) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(track).media.audioTracks;
    if (!trackList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested = true;
    queueMicrotask(()=>{
        delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested;
        trackList.dispatchEvent(new Event("change"));
    });
}
class AudioTrackList extends EventTarget {
    #addTrackCallback;
    #removeTrackCallback;
    #changeCallback;
    constructor(){
        super();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet = /* @__PURE__ */ new Set();
    }
    get #tracks() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet;
    }
    [Symbol.iterator]() {
        return this.#tracks.values();
    }
    get length() {
        return this.#tracks.size;
    }
    getTrackById(id) {
        return [
            ...this.#tracks
        ].find((track)=>track.id === id) ?? null;
    }
    get onaddtrack() {
        return this.#addTrackCallback;
    }
    set onaddtrack(callback) {
        if (this.#addTrackCallback) {
            this.removeEventListener("addtrack", this.#addTrackCallback);
            this.#addTrackCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#addTrackCallback = callback;
            this.addEventListener("addtrack", callback);
        }
    }
    get onremovetrack() {
        return this.#removeTrackCallback;
    }
    set onremovetrack(callback) {
        if (this.#removeTrackCallback) {
            this.removeEventListener("removetrack", this.#removeTrackCallback);
            this.#removeTrackCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#removeTrackCallback = callback;
            this.addEventListener("removetrack", callback);
        }
    }
    get onchange() {
        return this.#changeCallback;
    }
    set onchange(callback) {
        if (this.#changeCallback) {
            this.removeEventListener("change", this.#changeCallback);
            this.#changeCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#changeCallback = callback;
            this.addEventListener("change", callback);
        }
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioTrack",
    ()=>AudioTrack,
    "AudioTrackKind",
    ()=>AudioTrackKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition-list.js [app-ssr] (ecmascript)");
;
;
;
const AudioTrackKind = {
    alternative: "alternative",
    descriptions: "descriptions",
    main: "main",
    "main-desc": "main-desc",
    translation: "translation",
    commentary: "commentary"
};
class AudioTrack {
    id;
    kind;
    label = "";
    language = "";
    sourceBuffer;
    #enabled = false;
    addRendition(src, codec, bitrate) {
        const rendition = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioRendition"]();
        rendition.src = src;
        rendition.codec = codec;
        rendition.bitrate = bitrate;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addRendition"])(this, rendition);
        return rendition;
    }
    removeRendition(rendition) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeRendition"])(rendition);
    }
    get enabled() {
        return this.#enabled;
    }
    set enabled(val) {
        if (this.#enabled === val) return;
        this.#enabled = val;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enabledChanged"])(this);
    }
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/mixin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaTracksMixin",
    ()=>MediaTracksMixin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const nativeVideoTracksFn = getBaseMediaTracksFn(globalThis.HTMLMediaElement, "video");
const nativeAudioTracksFn = getBaseMediaTracksFn(globalThis.HTMLMediaElement, "audio");
function MediaTracksMixin(MediaElementClass) {
    if (!MediaElementClass?.prototype) return MediaElementClass;
    const videoTracksFn = getBaseMediaTracksFn(MediaElementClass, "video");
    if (!videoTracksFn || `${videoTracksFn}`.includes("[native code]")) {
        Object.defineProperty(MediaElementClass.prototype, "videoTracks", {
            get () {
                return getVideoTracks(this);
            }
        });
    }
    const audioTracksFn = getBaseMediaTracksFn(MediaElementClass, "audio");
    if (!audioTracksFn || `${audioTracksFn}`.includes("[native code]")) {
        Object.defineProperty(MediaElementClass.prototype, "audioTracks", {
            get () {
                return getAudioTracks(this);
            }
        });
    }
    if (!("addVideoTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.addVideoTrack = function(kind, label = "", language = "") {
            const track = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoTrack"]();
            track.kind = kind;
            track.label = label;
            track.language = language;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addVideoTrack"])(this, track);
            return track;
        };
    }
    if (!("removeVideoTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.removeVideoTrack = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeVideoTrack"];
    }
    if (!("addAudioTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.addAudioTrack = function(kind, label = "", language = "") {
            const track = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioTrack"]();
            track.kind = kind;
            track.label = label;
            track.language = language;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAudioTrack"])(this, track);
            return track;
        };
    }
    if (!("removeAudioTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.removeAudioTrack = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeAudioTrack"];
    }
    if (!("videoRenditions" in MediaElementClass.prototype)) {
        Object.defineProperty(MediaElementClass.prototype, "videoRenditions", {
            get () {
                return initVideoRenditions(this);
            }
        });
    }
    const initVideoRenditions = (media)=>{
        let renditions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoRenditions;
        if (!renditions) {
            renditions = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoRenditionList"]();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditions).media = media;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoRenditions = renditions;
        }
        return renditions;
    };
    if (!("audioRenditions" in MediaElementClass.prototype)) {
        Object.defineProperty(MediaElementClass.prototype, "audioRenditions", {
            get () {
                return initAudioRenditions(this);
            }
        });
    }
    const initAudioRenditions = (media)=>{
        let renditions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioRenditions;
        if (!renditions) {
            renditions = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioRenditionList"]();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(renditions).media = media;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioRenditions = renditions;
        }
        return renditions;
    };
    return MediaElementClass;
}
function getBaseMediaTracksFn(MediaElementClass, type) {
    if (MediaElementClass?.prototype) {
        return Object.getOwnPropertyDescriptor(MediaElementClass.prototype, `${type}Tracks`)?.get;
    }
}
function getVideoTracks(media) {
    let tracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoTracks;
    if (!tracks) {
        tracks = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoTrackList"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoTracks = tracks;
        if (nativeVideoTracksFn) {
            const nativeTracks = nativeVideoTracksFn.call(media.nativeEl ?? media);
            for (const nativeTrack of nativeTracks){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addVideoTrack"])(media, nativeTrack);
            }
            nativeTracks.addEventListener("change", ()=>{
                tracks.dispatchEvent(new Event("change"));
            });
            nativeTracks.addEventListener("addtrack", (event)=>{
                if ([
                    ...tracks
                ].some((t)=>t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoTrack"])) {
                    for (const nativeTrack of nativeTracks){
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeVideoTrack"])(nativeTrack);
                    }
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addVideoTrack"])(media, event.track);
            });
            nativeTracks.addEventListener("removetrack", (event)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeVideoTrack"])(event.track);
            });
        }
    }
    return tracks;
}
function getAudioTracks(media) {
    let tracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioTracks;
    if (!tracks) {
        tracks = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioTrackList"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioTracks = tracks;
        if (nativeAudioTracksFn) {
            const nativeTracks = nativeAudioTracksFn.call(media.nativeEl ?? media);
            for (const nativeTrack of nativeTracks){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAudioTrack"])(media, nativeTrack);
            }
            nativeTracks.addEventListener("change", ()=>{
                tracks.dispatchEvent(new Event("change"));
            });
            nativeTracks.addEventListener("addtrack", (event)=>{
                if ([
                    ...tracks
                ].some((t)=>t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioTrack"])) {
                    for (const nativeTrack of nativeTracks){
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeAudioTrack"])(nativeTrack);
                    }
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAudioTrack"])(media, event.track);
            });
            nativeTracks.addEventListener("removetrack", (event)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeAudioTrack"])(event.track);
            });
        }
    }
    return tracks;
}
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$mixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/mixin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-track-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/video-rendition-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-track-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/audio-rendition-list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$track$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/track-event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/rendition-event.js [app-ssr] (ecmascript)");
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
"[project]/Desktop/OwnGigs/agency/node_modules/hls-video-element/dist/hls-video-element.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HlsVideoElement",
    ()=>HlsVideoElement,
    "HlsVideoMixin",
    ()=>HlsVideoMixin,
    "default",
    ()=>hls_video_element_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/custom-media-element/dist/custom-media-element.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$mixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/media-tracks/dist/mixin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/hls.js/dist/hls.mjs [app-ssr] (ecmascript)");
;
;
;
const HlsVideoMixin = (superclass)=>{
    return class HlsVideo extends superclass {
        static shadowRootOptions = {
            ...superclass.shadowRootOptions
        };
        static getTemplateHTML = (attrs, props = {})=>{
            const { src, ...rest } = attrs;
            return `
        <script type="application/json" id="config">
          ${JSON.stringify(props.config || {})}
        </script>
        ${superclass.getTemplateHTML(rest)}
      `;
        };
        #airplaySourceEl = null;
        #config = null;
        constructor(){
            super();
            this.#upgradeProperty("config");
        }
        get config() {
            return this.#config;
        }
        set config(value) {
            this.#config = value;
        }
        attributeChangedCallback(attrName, oldValue, newValue) {
            if (attrName !== "src") {
                super.attributeChangedCallback(attrName, oldValue, newValue);
            }
            if (attrName === "src" && oldValue != newValue) {
                this.load();
            }
        }
        #destroy() {
            var _a, _b;
            (_a = this.#airplaySourceEl) == null ? void 0 : _a.remove();
            (_b = this.nativeEl) == null ? void 0 : _b.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged", this.#toggleHlsLoad);
            if (this.api) {
                this.api.detachMedia();
                this.api.destroy();
                this.api = null;
            }
        }
        async load() {
            var _a, _b;
            const isFirstLoad = !this.api;
            this.#destroy();
            if (!this.src) {
                return;
            }
            if (isFirstLoad && !this.#config) {
                this.#config = JSON.parse(((_a = this.shadowRoot.getElementById("config")) == null ? void 0 : _a.textContent) || "{}");
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isSupported()) {
                await Promise.resolve();
                this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                    // Mimic the media element with an Infinity duration for live streams.
                    liveDurationInfinity: true,
                    // Disable auto quality level/fragment loading.
                    autoStartLoad: false,
                    // Custom configuration for hls.js.
                    ...this.config
                });
                this.api.loadSource(this.src);
                this.api.attachMedia(this.nativeEl);
                switch(this.nativeEl.preload){
                    case "none":
                        {
                            const loadSourceOnPlay = ()=>this.api.startLoad();
                            this.nativeEl.addEventListener("play", loadSourceOnPlay, {
                                once: true
                            });
                            this.api.on(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Events.DESTROYING, ()=>{
                                this.nativeEl.removeEventListener("play", loadSourceOnPlay);
                            });
                            break;
                        }
                    case "metadata":
                        {
                            const originalLength = this.api.config.maxBufferLength;
                            const originalSize = this.api.config.maxBufferSize;
                            this.api.config.maxBufferLength = 1;
                            this.api.config.maxBufferSize = 1;
                            const increaseBufferOnPlay = ()=>{
                                this.api.config.maxBufferLength = originalLength;
                                this.api.config.maxBufferSize = originalSize;
                            };
                            this.nativeEl.addEventListener("play", increaseBufferOnPlay, {
                                once: true
                            });
                            this.api.on(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Events.DESTROYING, ()=>{
                                this.nativeEl.removeEventListener("play", increaseBufferOnPlay);
                            });
                            this.api.startLoad();
                            break;
                        }
                    default:
                        this.api.startLoad();
                }
                if (this.nativeEl.webkitCurrentPlaybackTargetIsWireless) {
                    this.api.stopLoad();
                }
                this.nativeEl.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", this.#toggleHlsLoad);
                this.#airplaySourceEl = document.createElement("source");
                this.#airplaySourceEl.setAttribute("type", "application/x-mpegURL");
                this.#airplaySourceEl.setAttribute("src", this.src);
                this.nativeEl.disableRemotePlayback = false;
                this.nativeEl.append(this.#airplaySourceEl);
                const levelIdMap = /* @__PURE__ */ new WeakMap();
                this.api.on(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Events.MANIFEST_PARSED, (event, data)=>{
                    if (this.nativeEl.autoplay && this.nativeEl.paused) {
                        this.nativeEl.play().catch((err)=>{
                            console.warn("Autoplay failed:", err);
                        });
                    }
                    removeAllMediaTracks();
                    let videoTrack = this.videoTracks.getTrackById("main");
                    if (!videoTrack) {
                        videoTrack = this.addVideoTrack("main");
                        videoTrack.id = "main";
                        videoTrack.selected = true;
                    }
                    for (const [id, level] of data.levels.entries()){
                        const videoRendition = videoTrack.addRendition(level.url[0], level.width, level.height, level.videoCodec, level.bitrate);
                        levelIdMap.set(level, `${id}`);
                        videoRendition.id = `${id}`;
                    }
                    for (let [id, a] of data.audioTracks.entries()){
                        const kind = a.default ? "main" : "alternative";
                        const audioTrack = this.addAudioTrack(kind, a.name, a.lang);
                        audioTrack.id = `${id}`;
                        if (a.default) {
                            audioTrack.enabled = true;
                        }
                    }
                });
                this.audioTracks.addEventListener("change", ()=>{
                    var _a2;
                    const audioTrackId = +((_a2 = [
                        ...this.audioTracks
                    ].find((t)=>t.enabled)) == null ? void 0 : _a2.id);
                    const availableIds = this.api.audioTracks.map((t)=>t.id);
                    if (audioTrackId != this.api.audioTrack && availableIds.includes(audioTrackId)) {
                        this.api.audioTrack = audioTrackId;
                    }
                });
                this.api.on(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Events.LEVELS_UPDATED, (event, data)=>{
                    const videoTrack = this.videoTracks[this.videoTracks.selectedIndex ?? 0];
                    if (!videoTrack) return;
                    const levelIds = data.levels.map((l)=>levelIdMap.get(l));
                    for (const rendition of this.videoRenditions){
                        if (rendition.id && !levelIds.includes(rendition.id)) {
                            videoTrack.removeRendition(rendition);
                        }
                    }
                });
                const switchRendition = (event)=>{
                    const level = event.target.selectedIndex;
                    if (level != this.api.nextLevel) {
                        this.api.nextLevel = level;
                    }
                };
                (_b = this.videoRenditions) == null ? void 0 : _b.addEventListener("change", switchRendition);
                const removeAllMediaTracks = ()=>{
                    for (const videoTrack of this.videoTracks){
                        this.removeVideoTrack(videoTrack);
                    }
                    for (const audioTrack of this.audioTracks){
                        this.removeAudioTrack(audioTrack);
                    }
                };
                this.api.once(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Events.DESTROYING, removeAllMediaTracks);
                return;
            }
            await Promise.resolve();
            if (this.nativeEl.canPlayType("application/vnd.apple.mpegurl")) {
                this.nativeEl.src = this.src;
            }
        }
        #toggleHlsLoad = ()=>{
            var _a, _b, _c;
            if ((_a = this.nativeEl) == null ? void 0 : _a.webkitCurrentPlaybackTargetIsWireless) {
                (_b = this.api) == null ? void 0 : _b.stopLoad();
            } else {
                (_c = this.api) == null ? void 0 : _c.startLoad();
            }
        };
        // This is a pattern to update property values that are set before
        // the custom element is upgraded.
        // https://web.dev/custom-elements-best-practices/#make-properties-lazy
        #upgradeProperty(prop) {
            if (Object.prototype.hasOwnProperty.call(this, prop)) {
                const value = this[prop];
                delete this[prop];
                this[prop] = value;
            }
        }
    };
};
const HlsVideoElement = HlsVideoMixin((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$mixin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaTracksMixin"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomVideoElement"]));
if (globalThis.customElements && !globalThis.customElements.get("hls-video")) {
    globalThis.customElements.define("hls-video", HlsVideoElement);
}
var hls_video_element_default = HlsVideoElement;
;
}),
"[project]/Desktop/OwnGigs/agency/node_modules/hls-video-element/dist/react.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>react_default
]);
// dist/react.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$hls$2d$video$2d$element$2f$dist$2f$hls$2d$video$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/OwnGigs/agency/node_modules/hls-video-element/dist/hls-video-element.js [app-ssr] (ecmascript) <locals>");
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
function createComponent({ react: React2, tagName, elementClass, events, displayName, defaultProps, toAttributeName = defaultToAttributeName, toAttributeValue = defaultToAttributeValue }) {
    const IS_REACT_19_OR_NEWER = Number.parseInt(React2.version) >= 19;
    const ReactComponent = React2.forwardRef((props, ref)=>{
        var _a, _b;
        const elementRef = React2.useRef(null);
        const prevElemPropsRef = React2.useRef(/* @__PURE__ */ new Map());
        const eventProps = {};
        const attrs = {};
        const reactProps = {};
        const elementProps = {};
        for (const [k, v] of Object.entries(props)){
            if (reservedReactProps.has(k)) {
                reactProps[k] = v;
                continue;
            }
            const attrName = toAttributeName(reactPropToAttrNameMap[k] ?? k);
            if (elementClass.prototype && k in elementClass.prototype && !(k in (((_a = globalThis.HTMLElement) == null ? void 0 : _a.prototype) ?? {})) && !((_b = elementClass.observedAttributes) == null ? void 0 : _b.some((attr)=>attr === attrName))) {
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
                const attrValueFromDefault = defaultToAttributeValue(v);
                if (attrValue !== attrValueFromDefault) {
                    reactProps[attrName] = attrValue;
                } else {
                    reactProps[attrName] = v;
                }
            }
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ("undefined" === "undefined" && (elementClass == null ? void 0 : elementClass.getTemplateHTML) && (elementClass == null ? void 0 : elementClass.shadowRootOptions)) {
            const { mode, delegatesFocus } = elementClass.shadowRootOptions;
            const templateShadowRoot = React2.createElement("template", {
                shadowrootmode: mode,
                shadowrootdelegatesfocus: delegatesFocus,
                dangerouslySetInnerHTML: {
                    __html: elementClass.getTemplateHTML(attrs, props)
                }
            });
            reactProps.children = [
                templateShadowRoot,
                reactProps.children
            ];
        }
        return React2.createElement(tagName, {
            ...defaultProps,
            ...reactProps,
            ref: React2.useCallback((node)=>{
                elementRef.current = node;
                if (typeof ref === "function") {
                    ref(node);
                } else if (ref !== null) {
                    ref.current = node;
                }
            }, [
                ref
            ])
        });
    });
    ReactComponent.displayName = displayName ?? elementClass.name;
    return ReactComponent;
}
function setProperty(node, name, value) {
    var _a;
    node[name] = value;
    if (value == null && name in (((_a = globalThis.HTMLElement) == null ? void 0 : _a.prototype) ?? {})) {
        node.removeAttribute(name);
    }
}
// dist/react.ts
var react_default = createComponent({
    react: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    tagName: "hls-video",
    elementClass: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$OwnGigs$2f$agency$2f$node_modules$2f$hls$2d$video$2d$element$2f$dist$2f$hls$2d$video$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    toAttributeName (propName) {
        if (propName === "muted") return "";
        if (propName === "defaultMuted") return "muted";
        return defaultToAttributeName(propName);
    }
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
];

//# sourceMappingURL=a9971_26ee741e._.js.map
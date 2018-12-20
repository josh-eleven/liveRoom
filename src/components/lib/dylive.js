/* eslint-disable */
module.exports =
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
/******/ 			function getDefault() { return module['default'] } :
/******/ 			function getModuleExports() { return module };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property) };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
//log开关
var enable = false;
function setEnable(flag) {
    enable = flag;
}
function customize(logFunc) {
    var tags = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        tags[_i - 1] = arguments[_i];
    }
    var prefix = ["[html5 player]"].concat(tags.map(function (tag) { return "[" + tag + "]" }));
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (enable) {
            logFunc.call.apply(logFunc, [console].concat(prefix, args));
        }
    };
}
function makeLogger() {
    var tags = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tags[_i] = arguments[_i];
    }
    return {
        log: customize.apply(void 0, [console.log].concat(tags)),
        debug: customize.apply(void 0, [console.debug].concat(tags)),
        info: customize.apply(void 0, [console.info].concat(tags)),
        warn: customize.apply(void 0, [console.warn].concat(tags)),
        error: customize.apply(void 0, [console.error].concat(tags)),
        setEnable: setEnable
    };
}
exports.makeLogger = makeLogger;
exports.default = makeLogger("dylive");


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 遍历对象，绑定全部函数
 * @param {*} target 要绑定到的目标
 * @param {*} proto 要执行绑定的对象，省略则以target为目标
 */
function bindAll(target, proto) {
    if (proto === undefined) {
        proto = Object.getPrototypeOf(target);
    }
    Object.getOwnPropertyNames(proto).forEach(function (name) {
        var value = target[name];
        if (typeof value === "function") {
            target[name] = value.bind(target);
        }
    });
}
exports.bindAll = bindAll;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DyNetworkError = /** @class */ (function (_super) {
    __extends(DyNetworkError, _super);
    function DyNetworkError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.name = DyNetworkError.NAME;
        return _this;
    }
    DyNetworkError.NAME = 'DyNetworkError';
    return DyNetworkError;
}(Error));
exports.DyNetworkError = DyNetworkError;
var DyMediaError = /** @class */ (function (_super) {
    __extends(DyMediaError, _super);
    function DyMediaError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.name = DyMediaError.NAME;
        return _this;
    }
    DyMediaError.NAME = 'DyMediaError';
    return DyMediaError;
}(Error));
exports.DyMediaError = DyMediaError;
var DyDemuxError = /** @class */ (function (_super) {
    __extends(DyDemuxError, _super);
    function DyDemuxError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.name = DyDemuxError.NAME;
        return _this;
    }
    DyDemuxError.NAME = 'DyDemuxError';
    return DyDemuxError;
}(Error));
exports.DyDemuxError = DyDemuxError;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = {
    // 每次解码的字节数
    stashBuffer: 65536,
    // 每次解码间隔时长(ms)
    stashTime: 200,
    // 当前播放点之前的内容保存多少秒(s)
    videoBackTime: 20,
    // 当前播放点之前的内容达到多少秒时执行清除操作(s)
    videoBackTimeThreshold: 40,
    // sample lost阀值
    lostThreshold: 3000
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
var bind_all_1 = __webpack_require__(1);
var BaseLoader = /** @class */ (function () {
    function BaseLoader() {
        this._loaderBytes = 0;
        bind_all_1.bindAll(this);
        bind_all_1.bindAll(this, BaseLoader.prototype);
    }
    Object.defineProperty(BaseLoader.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLoader.prototype, "redirectUrl", {
        get: function () {
            return this._redirectUrl;
        },
        enumerable: true,
        configurable: true
    });
    BaseLoader.prototype.load = function (url, options) {
        this._loaderBytes = 0;
        this._url = url;
    };
    BaseLoader.prototype.dispose = function () {
        this.onData = null;
        this.onEnd = null;
        this.onError = null;
    };
    BaseLoader.prototype.getStatistics = function () {
        return {
            loaderBytes: this._loaderBytes,
            cdnBytes: this._loaderBytes,
            p2pBytes: 0
        };
    };
    BaseLoader.prototype._onData = function (buffer) {
        if (buffer) {
            this._loaderBytes += buffer.byteLength;
            this.onData && this.onData(buffer);
        }
    };
    BaseLoader.prototype._onRedirectUrl = function (redirectUrl) {
        this._redirectUrl = redirectUrl;
    };
    BaseLoader.prototype._onError = function (reason) {
        this.onError && this.onError(reason);
    };
    return BaseLoader;
}());
exports.BaseLoader = BaseLoader;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
var base_loader_1 = __webpack_require__(4);
exports.BaseLoader = base_loader_1.BaseLoader;
var fetch_stream_loader_1 = __webpack_require__(17);
exports.FetchStreamLoader = fetch_stream_loader_1.FetchStreamLoader;
var xhr_moz_chunked_loader_1 = __webpack_require__(18);
exports.MozChunkedLoader = xhr_moz_chunked_loader_1.MozChunkedLoader;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Browser = {};
function detect() {
    // modified from jquery-browser-plugin
    var ua = self.navigator.userAgent.toLowerCase();
    var match = /(edge)\/([\w.]+)/.exec(ua) ||
        /(opr)[\/]([\w.]+)/.exec(ua) ||
        /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(iemobile)[\/]([\w.]+)/.exec(ua) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        ua.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) ||
        ua.indexOf('compatible') < 0 && /(firefox)[ \/]([\w.]+)/.exec(ua) ||
        [];
    var platform_match = /(ipad)/.exec(ua) ||
        /(ipod)/.exec(ua) ||
        /(windows phone)/.exec(ua) ||
        /(iphone)/.exec(ua) ||
        /(kindle)/.exec(ua) ||
        /(android)/.exec(ua) ||
        /(windows)/.exec(ua) ||
        /(mac)/.exec(ua) ||
        /(linux)/.exec(ua) ||
        /(cros)/.exec(ua) ||
        [];
    var matched = {
        browser: match[5] || match[3] || match[1] || '',
        version: match[2] || match[4] || '0',
        majorVersion: match[4] || match[2] || '0',
        platform: platform_match[0] || ''
    };
    var browser = {};
    if (matched.browser) {
        browser[matched.browser] = true;
        var versionArray = matched.majorVersion.split('.');
        browser.version = {
            major: parseInt(matched.majorVersion, 10),
            string: matched.version
        };
        if (versionArray.length > 1) {
            browser.version.minor = parseInt(versionArray[1], 10);
        }
        if (versionArray.length > 2) {
            browser.version.build = parseInt(versionArray[2], 10);
        }
    }
    if (matched.platform) {
        browser[matched.platform] = true;
    }
    if (browser.chrome || browser.opr || browser.safari) {
        browser.webkit = true;
    }
    // MSIE. IE11 has 'rv' identifer
    if (browser.rv || browser.iemobile) {
        if (browser.rv) {
            delete browser.rv;
        }
        var msie = 'msie';
        matched.browser = msie;
        browser[msie] = true;
    }
    // Microsoft Edge
    if (browser.edge) {
        delete browser.edge;
        var msedge = 'msedge';
        matched.browser = msedge;
        browser[msedge] = true;
    }
    // Opera 15+
    if (browser.opr) {
        var opera = 'opera';
        matched.browser = opera;
        browser[opera] = true;
    }
    // Stock android browsers are marked as Safari
    if (browser.safari && browser.android) {
        var android = 'android';
        matched.browser = android;
        browser[android] = true;
    }
    browser.name = matched.browser;
    browser.platform = matched.platform;
    for (var key in Browser) {
        if (Browser.hasOwnProperty(key)) {
            delete Browser[key];
        }
    }
    Object.assign(Browser, browser);
}
detect();
exports.default = Browser;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {



/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var MediaInfo = /** @class */ (function () {
    function MediaInfo() {
        this.mimeType = null;
        this.duration = null;
        this.hasAudio = null;
        this.hasVideo = null;
        this.audioCodec = null;
        this.videoCodec = null;
        this.audioDataRate = null;
        this.videoDataRate = null;
        this.audioSampleRate = null;
        this.audioChannelCount = null;
        this.width = null;
        this.height = null;
        this.fps = null;
        this.profile = null;
        this.level = null;
        this.chromaFormat = null;
        this.sarNum = null;
        this.sarDen = null;
        this.metadata = null;
        this.segments = null; // MediaInfo[]
        this.segmentCount = null;
        this.hasKeyframesIndex = null;
        this.keyframesIndex = null;
    }
    MediaInfo.prototype.isComplete = function () {
        var audioInfoComplete = (this.hasAudio === false) ||
            (this.hasAudio === true &&
                this.audioCodec != null &&
                this.audioSampleRate != null &&
                this.audioChannelCount != null);
        var videoInfoComplete = (this.hasVideo === false) ||
            (this.hasVideo === true &&
                this.videoCodec != null &&
                this.width != null &&
                this.height != null &&
                this.fps != null &&
                this.profile != null &&
                this.level != null &&
                this.chromaFormat != null &&
                this.sarNum != null &&
                this.sarDen != null);
        // keyframesIndex may not be present
        return this.mimeType != null &&
            this.duration != null &&
            this.metadata != null &&
            this.hasKeyframesIndex != null &&
            audioInfoComplete &&
            videoInfoComplete;
    };
    MediaInfo.prototype.isSeekable = function () {
        return this.hasKeyframesIndex === true;
    };
    MediaInfo.prototype.getNearestKeyframe = function (milliseconds) {
        if (this.keyframesIndex == null) {
            return null;
        }
        var table = this.keyframesIndex;
        var keyframeIdx = this._search(table.times, milliseconds);
        return {
            index: keyframeIdx,
            milliseconds: table.times[keyframeIdx],
            fileposition: table.filepositions[keyframeIdx]
        };
    };
    MediaInfo.prototype._search = function (list, value) {
        var idx = 0;
        var last = list.length - 1;
        var mid = 0;
        var lbound = 0;
        var ubound = last;
        if (value < list[0]) {
            idx = 0;
            lbound = ubound + 1; // skip search
        }
        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || (value >= list[mid] && value < list[mid + 1])) {
                idx = mid;
                break;
            }
            else if (list[mid] < value) {
                lbound = mid + 1;
            }
            else {
                ubound = mid - 1;
            }
        }
        return idx;
    };
    return MediaInfo;
}());
exports.default = MediaInfo;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {



var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1] }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this }), g;
    function verb(n) { return function (v) { return step([n, v]) }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0 } finally { f = t = 0 }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var byte_array_1 = __webpack_require__(9);
var amf_parser_1 = __webpack_require__(21);
var logger_1 = __webpack_require__(0);
var sps_parser_1 = __webpack_require__(23);
var sei_parser_1 = __webpack_require__(25);
var media_info_1 = __webpack_require__(7);
var config_1 = __webpack_require__(3);
// import { throttle } from '../util/throttle';
var error_1 = __webpack_require__(2);
var WaitState;
(function (WaitState) {
    WaitState[WaitState["WAIT_FLV_FLAG"] = 0] = "WAIT_FLV_FLAG";
    WaitState[WaitState["WAIT_PRE_TAG_SIZE"] = 1] = "WAIT_PRE_TAG_SIZE";
    WaitState[WaitState["WAIT_TAG"] = 2] = "WAIT_TAG";
})(WaitState || (WaitState = {}));
/**
 * Flv分离器
 *
 * @author wangxingwei@douyu.tv
 *
 */
var FlvDemuxer = /** @class */ (function () {
    function FlvDemuxer(config) {
        this.TAG = "FlvDemuxer";
        this._referenceFrameRate = {
            fixed: true,
            fps: 23.976,
            fps_num: 23976,
            fps_den: 1000
        };
        this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48000];
        this._mpegSamplingRates = [
            96000, 88200, 64000, 48000, 44100, 32000,
            24000, 22050, 16000, 12000, 11025, 8000, 7350
        ];
        this._mpegAudioV10SampleRateTable = [44100, 48000, 32000, 0];
        this._mpegAudioV20SampleRateTable = [22050, 24000, 16000, 0];
        this._mpegAudioV25SampleRateTable = [11025, 12000, 8000, 0];
        this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1];
        this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1];
        this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1];
        this._byteArray = new byte_array_1.default({ initLength: config_1.Config.stashBuffer, autoClear: true });
        //当前解析状态
        this._status = WaitState.WAIT_FLV_FLAG;
        this._timestampBase = 0;
        this._timescale = 1000;
        this._duration = 0;
        this._naluLengthSize = 4;
        this._videoTrack = {
            type: "video",
            id: 1,
            sequenceNumber: 0,
            samples: [],
            length: 0,
            sei: undefined
        };
        this._audioTrack = {
            type: "audio",
            id: 2,
            sequenceNumber: 0,
            samples: [],
            length: 0
        };
        this._audioInitialMetadataDispatched = false;
        this._videoInitialMetadataDispatched = false;
        this._mediaInfo = new media_info_1.default();
        this._lastParseTime = 0;
        this._config = config;
    }
    FlvDemuxer.prototype.dispose = function () {
        this.onInit = null;
        this.onTrackData = null;
        this.onTrackMeta = null;
        this.onError = null;
        if (this._parser) {
            this._parser.return();
            this._parser = null;
        }
        this._mediaInfo = null;
        this._audioMeta = null;
        this._videoMeta = null;
        this._videoTrack = null;
        this._audioTrack = null;
        this._byteArray = null;
        this._audioInitialMetadataDispatched = false;
        this._videoInitialMetadataDispatched = false;
    };
    FlvDemuxer.prototype.appendData = function (buffer) {
        this._byteArray.write(buffer);
        this._parseData();
    };
    FlvDemuxer.prototype.appendEnd = function () {
        this._parseData(true, true);
        this._parser && this._parser.return();
    };
    FlvDemuxer.prototype._parseData = function (flush, end) {
        if (flush === void 0) { flush = false }
        if (end === void 0) { end = false }
        if (this._byteArray.byteAvailable > 0) {
            if (!this._parser)
                this._parser = this._parse();
            var now = Date.now();
            if (flush || this._byteArray.byteAvailable > config_1.Config.stashBuffer || now - this._lastParseTime > config_1.Config.stashTime) {
                this._parser.next();
                this._flush(end);
                this._lastParseTime = now;
            }
        }
    };
    FlvDemuxer.prototype._parse = function () {
        var _a, flv, ver, stream, type, size, ts1, ts2, ts, streamId, bytePosition, buffer;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (false) return [3 /*break*/, 14];
                    _a = this._status;
                    switch (_a) {
                        case WaitState.WAIT_FLV_FLAG: return [3 /*break*/, 1];
                        case WaitState.WAIT_PRE_TAG_SIZE: return [3 /*break*/, 4];
                        case WaitState.WAIT_TAG: return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 13];
                case 1:
                    if (!(this._byteArray.byteAvailable < 9)) return [3 /*break*/, 3];
                    return [4 /*yield*/];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 1];
                case 3:
                    flv = this._byteArray.readString(3);
                    if (flv !== "FLV")
                        return [2 /*return*/, this._error("Not valid flv file : " + flv)];
                    ver = this._byteArray.readUint8();
                    stream = this._byteArray.readUint8();
                    this._mediaInfo.hasVideo = !!(stream & 1);
                    this._mediaInfo.hasAudio = !!(stream & 4);
                    // override hasVideo hasAudio
                    if (this._config.hasVideo !== undefined) {
                        this._mediaInfo.hasVideo = this._config.hasVideo;
                    }
                    if (this._config.hasAudio !== undefined) {
                        this._mediaInfo.hasAudio = this._config.hasAudio;
                    }
                    this._byteArray.read(4); //head size : 9
                    this._status = WaitState.WAIT_PRE_TAG_SIZE;
                    return [3 /*break*/, 13];
                case 4:
                    if (!(this._byteArray.byteAvailable < 4)) return [3 /*break*/, 6];
                    return [4 /*yield*/];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 6:
                    this._byteArray.read(4);
                    this._status = WaitState.WAIT_TAG;
                    return [3 /*break*/, 13];
                case 7:
                    if (!(this._byteArray.byteAvailable < 11)) return [3 /*break*/, 9];
                    return [4 /*yield*/];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 9:
                    type = this._byteArray.readUint8();
                    size = this._byteArray.readUint24();
                    ts1 = this._byteArray.readUint24();
                    ts2 = this._byteArray.readUint8();
                    ts = (ts2 << 24) | ts1;
                    streamId = this._byteArray.readUint24();
                    _b.label = 10;
                case 10:
                    if (!(this._byteArray.byteAvailable < size)) return [3 /*break*/, 12];
                    return [4 /*yield*/];
                case 11:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 12:
                    bytePosition = this._byteArray.bytePosition;
                    buffer = this._byteArray.read(size);
                    switch (type) {
                        case 0x8:
                            //audio
                            if (this._config.hasAudio === false) {
                                break;
                            }
                            if (this._config.hasAudio === undefined) {
                                this._mediaInfo.hasAudio = true;
                            }
                            this._parseAudio(buffer, ts);
                            break;
                        case 0x9:
                            //video
                            if (this._config.hasVideo === false) {
                                break;
                            }
                            if (this._config.hasVideo === undefined) {
                                this._mediaInfo.hasVideo = true;
                            }
                            this._parseVideo(buffer, ts, bytePosition);
                            break;
                        case 0x12:
                            //script
                            this._parseScript(buffer);
                            break;
                        default:
                            // unsupport type
                            logger_1.default.warn('unsupport flv tag type', type);
                            break;
                    }
                    this._status = WaitState.WAIT_PRE_TAG_SIZE;
                    return [3 /*break*/, 13];
                case 13: return [3 /*break*/, 0];
                case 14: return [2 /*return*/];
            }
        });
    };
    FlvDemuxer.prototype._onInit = function (mediaInfo) {
        var mi = Object.assign(new media_info_1.default(), mediaInfo); // clone
        this.onInit && this.onInit(mi);
    };
    FlvDemuxer.prototype._flush = function (end) {
        if (end === void 0) { end = false }
        if (this._mediaInfo.isComplete() && (this._audioTrack.length || this._videoTrack.length || end)) {
            this.onTrackData && this.onTrackData(this._audioTrack, this._videoTrack, end);
        }
    };
    FlvDemuxer.prototype._error = function (msg) {
        logger_1.default.error("[" + this.TAG + "] " + msg);
        this.onError && this.onError(new error_1.DyDemuxError(msg));
    };
    FlvDemuxer.prototype._parseAudio = function (buffer, ts) {
        var ba = new byte_array_1.default({ buffer: buffer });
        var header = ba.readUint8();
        /** 音频编码类型
          0
          Linear PCM，platform endian
          1
          ADPCM
          2
          MP3
          3
          Linear PCM，little endian
          4
          Nellymoser 16-kHz mono
          5
          Nellymoser 8-kHz mono
          6
          Nellymoser
          7
          G.711 A-law logarithmic PCM
          8
          G.711 mu-law logarithmic PCM
          9
          reserved
          10
          AAC
          14
          MP3 8-Khz
          15
          Device-specific sound
         */
        var type = (header & 240) >> 4;
        /** 音频采样率
          0
          5.5kHz
          1
          11KHz
          2
          22 kHz
          3 (For AAC: always 3)
          44 kHz
         */
        var rate = (header & 12) >> 2;
        /** 音频采样精度
          0
          8bits
          1
          16bits
         */
        var depth = (header & 2) >> 1;
        /** 音频类型
          0
          sndMono
          1
          sndStereo
         */
        var channel = header & 1;
        // 音频数据
        var data = ba.read(ba.byteAvailable);
        var meta = this._audioMeta;
        var track = this._audioTrack;
        if (!meta) {
            //init meta
            meta = this._audioMeta = {};
            meta.type = track.type;
            meta.id = track.id;
            meta.timescale = this._timescale;
            meta.duration = this._duration;
            meta.audioSampleRate = this._flvSoundRateTable[rate];
            meta.channelCount = channel === 0 ? 1 : 2;
        }
        if (type === 10) {
            //AAC
            var aacData = this._parseAACAudioData(data, 0, data.byteLength);
            if (!aacData) {
                return;
            }
            if (aacData.packetType === 0) {
                // AAC sequence header (AudioSpecificConfig)
                if (meta.config) {
                    logger_1.default.warn(this.TAG, "Found another AudioSpecificConfig!");
                }
                var misc = aacData.data;
                meta.audioSampleRate = misc.samplingRate;
                meta.channelCount = misc.channelCount;
                meta.codec = misc.codec;
                meta.originalCodec = misc.originalCodec;
                meta.config = misc.config;
                // The decode result of an aac sample is 1024 PCM samples
                meta.refSampleDuration = 1024 / meta.audioSampleRate * meta.timescale;
                logger_1.default.log(this.TAG, "Parsed AudioSpecificConfig");
                if (this._audioInitialMetadataDispatched) {
                    // Non-initial metadata, force dispatch (or flush) parsed frames to remuxer
                    this._flush();
                }
                else {
                    this._audioInitialMetadataDispatched = true;
                }
                this.onTrackMeta && this.onTrackMeta("audio", meta);
                var mi = this._mediaInfo;
                mi.audioCodec = meta.originalCodec;
                mi.audioSampleRate = meta.audioSampleRate;
                mi.audioChannelCount = meta.channelCount;
                if (mi.hasVideo) {
                    if (mi.videoCodec != null) {
                        mi.mimeType =
                            'video/x-flv; codecs="' +
                                mi.videoCodec +
                                "," +
                                mi.audioCodec +
                                '"';
                    }
                }
                else {
                    mi.mimeType = 'video/x-flv; codecs="' + mi.audioCodec + '"';
                }
                if (mi.isComplete()) {
                    this._onInit(mi);
                }
            }
            else if (aacData.packetType === 1) {
                // AAC raw frame data
                var dts = this._timestampBase + ts;
                var aacSample = { unit: aacData.data, dts: dts, pts: dts, cts: 0 };
                track.samples.push(aacSample);
                track.length += aacData.data.length;
            }
            else {
                logger_1.default.error(this.TAG, "Flv: Unsupported AAC data type " + aacData.packetType);
            }
        }
        else if (type === 2) {
            //MP3
            if (!meta.codec) {
                // We need metadata for mp3 audio track, extract info from frame header
                var misc = this._parseMP3AudioData(data, 0, data.byteLength, true);
                if (!misc) {
                    return;
                }
                meta.audioSampleRate = misc.samplingRate;
                meta.channelCount = misc.channelCount;
                meta.codec = misc.codec;
                meta.originalCodec = misc.originalCodec;
                // The decode result of an mp3 sample is 1152 PCM samples
                meta.refSampleDuration = 1152 / meta.audioSampleRate * meta.timescale;
                logger_1.default.log(this.TAG, "Parsed MPEG Audio Frame Header");
                this._audioInitialMetadataDispatched = true;
                this.onTrackMeta && this.onTrackMeta("audio", meta);
                var mi = this._mediaInfo;
                mi.audioCodec = meta.codec;
                mi.audioSampleRate = meta.audioSampleRate;
                mi.audioChannelCount = meta.channelCount;
                mi.audioDataRate = misc.bitRate;
                if (mi.hasVideo) {
                    if (mi.videoCodec != null) {
                        mi.mimeType =
                            'video/x-flv; codecs="' +
                                mi.videoCodec +
                                "," +
                                mi.audioCodec +
                                '"';
                    }
                }
                else {
                    mi.mimeType = 'video/x-flv; codecs="' + mi.audioCodec + '"';
                }
                if (mi.isComplete()) {
                    this._onInit(mi);
                }
            }
            // This packet is always a valid audio packet, extract it
            var mp3 = this._parseMP3AudioData(data, 0, data.byteLength, false);
            if (!mp3) {
                return;
            }
            var dts = this._timestampBase + ts;
            var mp3Sample = { unit: mp3, dts: dts, pts: dts, cts: 0 };
            track.samples.push(mp3Sample);
            track.length += mp3.length;
        }
        else {
            this._error("unsupport audio type = " + type);
        }
    };
    FlvDemuxer.prototype._parseVideo = function (buffer, ts, bytePosition) {
        var ba = new byte_array_1.default({ buffer: buffer });
        var header = ba.readUint8();
        /** 帧类型
          1
          keyframe （for AVC，a seekable frame）
          2
          inter frame （for AVC，a nonseekable frame）
          3
          disposable inter frame （H.263 only）
          4
          generated keyframe （reserved for server use）
          5
          video info/command frame
         */
        var frameType = (header & 240) >> 4;
        /** 视频编码类型
          1
          JPEG （currently unused）
          2
          Sorenson H.263
          3
          Screen video
          4
          On2 VP6
          5
          On2 VP6 with alpha channel
          6
          Screen video version 2
          7
          AVC
         */
        var codecType = header & 15;
        if (codecType !== 7) {
            return this._error("unsupport video codec type = " + codecType);
        }
        //parse avc video packet
        var data = ba.read(ba.byteAvailable);
        this._parseAVCVideoPacket(data, 0, data.byteLength, ts, bytePosition, frameType);
    };
    FlvDemuxer.prototype._parseScript = function (buffer) {
        //only want metadata
        var script = amf_parser_1.default.parseScriptData(buffer, 0, buffer.byteLength);
        if ("onMetaData" in script) {
            var onMetaData = script["onMetaData"];
            if (typeof onMetaData.audiodatarate === "number") {
                // audiodatarate
                this._mediaInfo.audioDataRate = onMetaData.audiodatarate;
            }
            if (typeof onMetaData.videodatarate === "number") {
                // videodatarate
                this._mediaInfo.videoDataRate = onMetaData.videodatarate;
            }
            if (typeof onMetaData.width === "number") {
                // width
                this._mediaInfo.width = onMetaData.width;
            }
            if (typeof onMetaData.height === "number") {
                // height
                this._mediaInfo.height = onMetaData.height;
            }
            if (typeof onMetaData.duration === "number") {
                // duration
                this._duration = this._mediaInfo.duration = Math.floor(onMetaData.duration * this._timescale);
            }
            else {
                this._duration = this._mediaInfo.duration = 0;
            }
            if (typeof onMetaData.framerate === "number") {
                // framerate
                var fps_num = Math.floor(onMetaData.framerate * 1000);
                if (fps_num > 0) {
                    var fps = fps_num / 1000;
                    this._referenceFrameRate.fixed = true;
                    this._referenceFrameRate.fps = fps;
                    this._referenceFrameRate.fps_num = fps_num;
                    this._referenceFrameRate.fps_den = 1000;
                    this._mediaInfo.fps = fps;
                }
            }
            if (typeof onMetaData.keyframes === "object") {
                // keyframes
                this._mediaInfo.hasKeyframesIndex = true;
                var keyframes = onMetaData.keyframes;
                this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(keyframes);
                onMetaData.keyframes = null; // keyframes has been extracted, remove it
            }
            else {
                this._mediaInfo.hasKeyframesIndex = false;
            }
            this._mediaInfo.metadata = onMetaData;
            logger_1.default.log(this.TAG, "Parsed onMetaData");
            if (this._mediaInfo.isComplete()) {
                this._onInit(this._mediaInfo);
            }
        }
    };
    FlvDemuxer.prototype._parseKeyframesIndex = function (keyframes) {
        var times = [];
        var filepositions = [];
        // ignore first keyframe which is actually AVC Sequence Header (AVCDecoderConfigurationRecord)
        for (var i = 1; i < keyframes.times.length; i++) {
            var time = this._timestampBase + Math.floor(keyframes.times[i] * 1000);
            times.push(time);
            filepositions.push(keyframes.filepositions[i]);
        }
        return {
            times: times,
            filepositions: filepositions
        };
    };
    FlvDemuxer.prototype._parseAACAudioData = function (arrayBuffer, dataOffset, dataSize) {
        if (dataSize <= 1) {
            logger_1.default.warn(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!");
            return;
        }
        var result = {};
        var array = new Uint8Array(arrayBuffer, dataOffset, dataSize);
        result.packetType = array[0];
        if (array[0] === 0) {
            result.data = this._parseAACAudioSpecificConfig(arrayBuffer, dataOffset + 1, dataSize - 1);
        }
        else {
            result.data = array.subarray(1);
        }
        return result;
    };
    FlvDemuxer.prototype._parseAACAudioSpecificConfig = function (arrayBuffer, dataOffset, dataSize) {
        var array = new Uint8Array(arrayBuffer, dataOffset, dataSize);
        var config = [].slice.call(array);
        /* Audio Object Type:
           0: Null
           1: AAC Main
           2: AAC LC
           3: AAC SSR (Scalable Sample Rate)
           4: AAC LTP (Long Term Prediction)
           5: HE-AAC / SBR (Spectral Band Replication)
           6: AAC Scalable
        */
        var audioObjectType = 0;
        var originalAudioObjectType = 0;
        var audioExtensionObjectType = null;
        var samplingIndex = 0;
        var extensionSamplingIndex = null;
        // 5 bits
        audioObjectType = originalAudioObjectType = array[0] >>> 3;
        // 4 bits
        samplingIndex = ((array[0] & 0x07) << 1) | (array[1] >>> 7);
        if (samplingIndex < 0 || samplingIndex >= this._mpegSamplingRates.length) {
            this._error("Flv: AAC invalid sampling frequency index!");
            return;
        }
        var samplingFrequence = this._mpegSamplingRates[samplingIndex];
        // 4 bits
        var channelConfig = (array[1] & 0x78) >>> 3;
        if (channelConfig < 0 || channelConfig >= 8) {
            this._error("Flv: AAC invalid channel configuration");
            return;
        }
        if (audioObjectType === 5) { // HE-AAC?
            // 4 bits
            extensionSamplingIndex = ((array[1] & 0x07) << 1) | (array[2] >>> 7);
            // 5 bits
            audioExtensionObjectType = (array[2] & 0x7c) >>> 2;
        }
        // workarounds for various browsers
        var userAgent = self.navigator.userAgent.toLowerCase();
        if (userAgent.indexOf('firefox') !== -1) {
            // firefox: use SBR (HE-AAC) if freq less than 24kHz
            if (samplingIndex >= 6) {
                audioObjectType = 5;
                config = new Array(4);
                extensionSamplingIndex = samplingIndex - 3;
            }
            else { // use LC-AAC
                audioObjectType = 2;
                config = new Array(2);
                extensionSamplingIndex = samplingIndex;
            }
        }
        else if (userAgent.indexOf('android') !== -1) {
            // android: always use LC-AAC
            audioObjectType = 2;
            config = new Array(2);
            extensionSamplingIndex = samplingIndex;
        }
        else {
            // for other browsers, e.g. chrome...
            // Always use HE-AAC to make it easier to switch aac codec profile
            audioObjectType = 5;
            extensionSamplingIndex = samplingIndex;
            config = new Array(4);
            if (samplingIndex >= 6) {
                extensionSamplingIndex = samplingIndex - 3;
            }
            else if (channelConfig === 1) { // Mono channel
                audioObjectType = 2;
                config = new Array(2);
                extensionSamplingIndex = samplingIndex;
            }
        }
        config[0] = audioObjectType << 3;
        config[0] |= (samplingIndex & 0x0F) >>> 1;
        config[1] = (samplingIndex & 0x0F) << 7;
        config[1] |= (channelConfig & 0x0F) << 3;
        if (audioObjectType === 5) {
            config[1] |= ((extensionSamplingIndex & 0x0F) >>> 1);
            config[2] = (extensionSamplingIndex & 0x01) << 7;
            // extended audio object type: force to 2 (LC-AAC)
            config[2] |= (2 << 2);
            config[3] = 0;
        }
        return {
            config: config,
            samplingRate: samplingFrequence,
            channelCount: channelConfig,
            codec: "mp4a.40." + audioObjectType,
            originalCodec: "mp4a.40." + originalAudioObjectType
        };
    };
    FlvDemuxer.prototype._parseMP3AudioData = function (arrayBuffer, dataOffset, dataSize, requestHeader) {
        if (dataSize < 4) {
            logger_1.default.warn(this.TAG, "Flv: Invalid MP3 packet, header missing!");
            return;
        }
        var array = new Uint8Array(arrayBuffer, dataOffset, dataSize);
        var result = null;
        if (requestHeader) {
            if (array[0] !== 0xff) {
                return;
            }
            var ver = (array[1] >>> 3) & 0x03;
            var layer = (array[1] & 0x06) >> 1;
            var bitrate_index = (array[2] & 0xf0) >>> 4;
            var sampling_freq_index = (array[2] & 0x0c) >>> 2;
            var channel_mode = (array[3] >>> 6) & 0x03;
            var channel_count = channel_mode !== 3 ? 2 : 1;
            var sample_rate = 0;
            var bit_rate = 0;
            var object_type = 34; // Layer-3, listed in MPEG-4 Audio Object Types
            var codec = "mp3";
            switch (ver) {
                case 0: // MPEG 2.5
                    sample_rate = this._mpegAudioV25SampleRateTable[sampling_freq_index];
                    break;
                case 2: // MPEG 2
                    sample_rate = this._mpegAudioV20SampleRateTable[sampling_freq_index];
                    break;
                case 3: // MPEG 1
                    sample_rate = this._mpegAudioV10SampleRateTable[sampling_freq_index];
                    break;
            }
            switch (layer) {
                case 1: // Layer 3
                    object_type = 34;
                    if (bitrate_index < this._mpegAudioL3BitRateTable.length) {
                        bit_rate = this._mpegAudioL3BitRateTable[bitrate_index];
                    }
                    break;
                case 2: // Layer 2
                    object_type = 33;
                    if (bitrate_index < this._mpegAudioL2BitRateTable.length) {
                        bit_rate = this._mpegAudioL2BitRateTable[bitrate_index];
                    }
                    break;
                case 3: // Layer 1
                    object_type = 32;
                    if (bitrate_index < this._mpegAudioL1BitRateTable.length) {
                        bit_rate = this._mpegAudioL1BitRateTable[bitrate_index];
                    }
                    break;
            }
            result = {
                bitRate: bit_rate,
                samplingRate: sample_rate,
                channelCount: channel_count,
                codec: codec,
                originalCodec: codec
            };
        }
        else {
            result = array;
        }
        return result;
    };
    /**
   * 获取SEI信息
   * 如果一个video tag有SEI的话, 会放在第一个NALU
   * @param {ArrayBuffer} arrayBuffer
   * @param {Number} dataOffset
   * @param {Number} dataSize
   */
    FlvDemuxer.prototype._parseSEI = function (arrayBuffer, dataOffset, dataSize) {
        var le = byte_array_1.default.littleEndian;
        var v = new DataView(arrayBuffer, dataOffset, dataSize);
        var offset = 0;
        var lengthSize = this._naluLengthSize;
        if (offset + 4 >= dataSize) {
            logger_1.default.warn(this.TAG, 'Malformed Nalu');
            return;
        }
        var naluSize = v.getUint32(offset, le); // Big-Endian read
        if (lengthSize === 3) {
            naluSize >>>= 8;
        }
        if (naluSize > dataSize - lengthSize) {
            logger_1.default.warn(this.TAG, 'Malformed Nalus near, NaluSize > DataSize!');
            return;
        }
        var unitType = v.getUint8(offset + lengthSize) & 0x1F;
        if (unitType === 6) { // SEI
            var sei = sei_parser_1.default.parseSEI(arrayBuffer);
            return sei;
        }
    };
    FlvDemuxer.prototype._parseAVCVideoPacket = function (arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition, frameType) {
        if (dataSize < 4) {
            logger_1.default.warn(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");
            return;
        }
        var le = byte_array_1.default.littleEndian;
        var v = new DataView(arrayBuffer, dataOffset, dataSize);
        var packetType = v.getUint8(0);
        var cts_unsigned = v.getUint32(0, le) & 0x00FFFFFF;
        var cts = (cts_unsigned << 8) >> 8; // convert to 24-bit signed int
        if (packetType === 0) {
            // AVCDecoderConfigurationRecord
            this._parseAVCDecoderConfigurationRecord(arrayBuffer, dataOffset + 4, dataSize - 4);
        }
        else if (packetType === 1) {
            // tencent cloud custom timestamp parse
            var sei = +this._parseSEI(arrayBuffer, dataOffset + 4, dataSize - 4);
            if (sei) {
                this._videoTrack.sei = sei;
            }
            // One or more Nalus
            this._parseAVCVideoData(arrayBuffer, dataOffset + 4, dataSize - 4, tagTimestamp, tagPosition, frameType, cts);
        }
        else if (packetType === 2) {
            // empty, AVC end of sequence
        }
        else {
            this._error("Flv: Invalid video packet type " + packetType);
            return;
        }
    };
    FlvDemuxer.prototype._parseAVCDecoderConfigurationRecord = function (arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 7) {
            logger_1.default.warn(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
            return;
        }
        var meta = this._videoMeta;
        var track = this._videoTrack;
        var le = byte_array_1.default.littleEndian;
        var v = new DataView(arrayBuffer, dataOffset, dataSize);
        if (!meta) {
            meta = this._videoMeta = {};
            meta.type = "video";
            meta.id = track.id;
            meta.timescale = this._timescale;
            meta.duration = this._duration;
        }
        else if (typeof meta.avcc !== "undefined") {
                logger_1.default.warn(this.TAG, "Found another AVCDecoderConfigurationRecord!");
            }
        var version = v.getUint8(0); // configurationVersion
        var avcProfile = v.getUint8(1); // avcProfileIndication
        var profileCompatibility = v.getUint8(2); // profile_compatibility
        var avcLevel = v.getUint8(3); // AVCLevelIndication
        if (version !== 1 || avcProfile === 0) {
            this._error("Flv: Invalid AVCDecoderConfigurationRecord");
            return;
        }
        this._naluLengthSize = (v.getUint8(4) & 3) + 1; // lengthSizeMinusOne
        if (this._naluLengthSize !== 3 && this._naluLengthSize !== 4) {
            // holy shit!!!
            this._error("Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
            return;
        }
        var spsCount = v.getUint8(5) & 31; // numOfSequenceParameterSets
        if (spsCount === 0) {
            this._error("Flv: Invalid AVCDecoderConfigurationRecord: No SPS");
            return;
        }
        else if (spsCount > 1) {
            logger_1.default.warn(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " + spsCount);
        }
        var offset = 6;
        for (var i = 0; i < spsCount; i++) {
            var len = v.getUint16(offset, le); // sequenceParameterSetLength
            offset += 2;
            if (len === 0) {
                continue;
            }
            // Notice: Nalu without startcode header (00 00 00 01)
            var sps = new Uint8Array(arrayBuffer, dataOffset + offset, len);
            offset += len;
            var config = sps_parser_1.default.parseSPS(sps);
            if (i !== 0) {
                // ignore other sps's config
                continue;
            }
            meta.codecWidth = config.codec_size.width;
            meta.codecHeight = config.codec_size.height;
            meta.presentWidth = config.present_size.width;
            meta.presentHeight = config.present_size.height;
            meta.profile = config.profile_string;
            meta.level = config.level_string;
            meta.bitDepth = config.bit_depth;
            meta.chromaFormat = config.chroma_format;
            meta.sarRatio = config.sar_ratio;
            meta.frameRate = config.frame_rate;
            if (config.frame_rate.fixed === false ||
                config.frame_rate.fps_num === 0 ||
                config.frame_rate.fps_den === 0) {
                meta.frameRate = this._referenceFrameRate;
            }
            var fps_den = meta.frameRate.fps_den;
            var fps_num = meta.frameRate.fps_num;
            meta.refSampleDuration = meta.timescale * (fps_den / fps_num);
            var codecArray = sps.subarray(1, 4);
            var codecString = "avc1.";
            for (var j = 0; j < 3; j++) {
                var h = codecArray[j].toString(16);
                if (h.length < 2) {
                    h = "0" + h;
                }
                codecString += h;
            }
            meta.codec = codecString;
            var mi = this._mediaInfo;
            mi.width = meta.codecWidth;
            mi.height = meta.codecHeight;
            mi.fps = meta.frameRate.fps;
            mi.profile = meta.profile;
            mi.level = meta.level;
            mi.chromaFormat = config.chroma_format_string;
            mi.sarNum = meta.sarRatio.width;
            mi.sarDen = meta.sarRatio.height;
            mi.videoCodec = codecString;
            if (mi.hasAudio) {
                if (mi.audioCodec != null) {
                    mi.mimeType =
                        'video/x-flv; codecs="' + mi.videoCodec + "," + mi.audioCodec + '"';
                }
            }
            else {
                mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + '"';
            }
        }
        var ppsCount = v.getUint8(offset); // numOfPictureParameterSets
        if (ppsCount === 0) {
            this._error("Flv: Invalid AVCDecoderConfigurationRecord: No PPS");
            return;
        }
        else if (ppsCount > 1) {
            logger_1.default.warn(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " + ppsCount);
        }
        offset++;
        for (var i = 0; i < ppsCount; i++) {
            var len = v.getUint16(offset, le); // pictureParameterSetLength
            offset += 2;
            if (len === 0) {
                continue;
            }
            // pps is useless for extracting video information
            offset += len;
        }
        meta.avcc = new Uint8Array(dataSize);
        meta.avcc.set(new Uint8Array(arrayBuffer, dataOffset, dataSize), 0);
        logger_1.default.log(this.TAG, "Parsed AVCDecoderConfigurationRecord");
        if (this._videoInitialMetadataDispatched) {
            // flush parsed frames
            this._flush();
        }
        else {
            this._videoInitialMetadataDispatched = true;
        }
        // notify new metadata
        this.onTrackMeta && this.onTrackMeta("video", meta);
        if (this._mediaInfo.isComplete()) {
            this._onInit(this._mediaInfo);
        }
    };
    FlvDemuxer.prototype._parseAVCVideoData = function (arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition, frameType, cts) {
        var le = byte_array_1.default.littleEndian;
        var v = new DataView(arrayBuffer, dataOffset, dataSize);
        var units = [], length = 0;
        var offset = 0;
        var lengthSize = this._naluLengthSize;
        var dts = this._timestampBase + tagTimestamp;
        var keyframe = frameType === 1; // from FLV Frame Type constants
        while (offset < dataSize) {
            if (offset + 4 >= dataSize) {
                logger_1.default.warn(this.TAG, "Malformed Nalu near timestamp " + dts + ", offset = " + offset + ", dataSize = " + dataSize);
                break; // data not enough for next Nalu
            }
            // Nalu with length-header (AVC1)
            var naluSize = v.getUint32(offset, le); // Big-Endian read
            if (lengthSize === 3) {
                naluSize >>>= 8;
            }
            if (naluSize > dataSize - lengthSize) {
                logger_1.default.warn(this.TAG, "Malformed Nalus near timestamp " + dts + ", NaluSize > DataSize!");
                return;
            }
            var unitType = v.getUint8(offset + lengthSize) & 0x1f;
            if (unitType === 5) {
                // IDR
                keyframe = true;
            }
            var data = new Uint8Array(arrayBuffer, dataOffset + offset, lengthSize + naluSize);
            var unit = { type: unitType, data: data };
            units.push(unit);
            length += data.byteLength;
            offset += lengthSize + naluSize;
        }
        if (units.length) {
            var track = this._videoTrack;
            var avcSample = {
                units: units,
                length: length,
                isKeyframe: keyframe,
                dts: dts,
                cts: cts,
                pts: dts + cts
            };
            if (keyframe) {
                avcSample.fileposition = tagPosition;
            }
            track.samples.push(avcSample);
            track.length += length;
            // keyframe force flush
            if (keyframe) {
                this._flush();
            }
        }
    };
    return FlvDemuxer;
}());
exports.default = FlvDemuxer;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
/**
 * simulate as3 ByteArray, write and read data as your wish, no need care of size.
 *
 * @author sky-wang@qq.com
 */
var ByteArray = /** @class */ (function () {
    function ByteArray(_a) {
        var _b = _a === void 0 ? {} : _a, buffer = _b.buffer, _c = _b.initLength, initLength = _c === void 0 ? 1024 : _c, _d = _b.autoClear, autoClear = _d === void 0 ? false : _d, _e = _b.increase, increase = _e === void 0 ? 0 : _e, _f = _b.littleEndian, littleEndian = _f === void 0 ? ByteArray.littleEndian : _f;
        //read position
        this._rposition = 0;
        //write position
        this._wposition = 0;
        //increase times
        this._count = 0;
        this._autoClear = autoClear;
        this.increase = increase;
        this.littleEndian = littleEndian;
        if (buffer) {
            this._buffer = buffer;
            this._wposition = buffer.byteLength;
            // this._buffer = new ArrayBuffer(buffer.byteLength);
            // this.write(buffer);
        }
        else {
            this._buffer = new ArrayBuffer(initLength);
        }
    }
    Object.defineProperty(ByteArray.prototype, "buffer", {
        get: function () {
            return this._buffer.slice(0, this._wposition);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ByteArray.prototype, "byteAvailable", {
        get: function () {
            return this._wposition - this._rposition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ByteArray.prototype, "byteLength", {
        get: function () {
            return this._wposition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ByteArray.prototype, "bytePosition", {
        get: function () {
            return this._rposition;
        },
        enumerable: true,
        configurable: true
    });
    ByteArray.prototype.read = function (size) {
        if (size > this.byteAvailable) {
            throw new Error("[" + ByteArray.TAG + "] not enough data for read.");
        }
        var buffer = this._buffer.slice(this._rposition, this._rposition + size);
        this._rposition += size;
        return buffer;
    };
    ByteArray.prototype.readUint8 = function () {
        var dv = new DataView(this.read(1));
        return dv.getUint8(0);
    };
    ByteArray.prototype.readUint16 = function () {
        var dv = new DataView(this.read(2));
        return dv.getUint16(0, this.littleEndian);
    };
    ByteArray.prototype.readUint24 = function () {
        var array = new Uint8Array(this.read(3));
        if (this.littleEndian)
            array.reverse();
        return (array[0] << 16) | (array[1] << 8) | array[2];
    };
    ByteArray.prototype.readUint32 = function () {
        var dv = new DataView(this.read(4));
        return dv.getUint32(0, this.littleEndian);
    };
    ByteArray.prototype.readString = function (size) {
        return String.fromCharCode.apply(null, new Uint8Array(this.read(size)));
    };
    ByteArray.prototype.write = function (buffer) {
        if (buffer && buffer.byteLength > 0) {
            var length_1 = buffer.byteLength;
            var need = this._wposition + length_1;
            if (need > this._buffer.byteLength) {
                var clearBytes = this._autoClear ? this._rposition : 0;
                var size = need - clearBytes;
                var oldbuffer = this._buffer.slice(clearBytes, this._wposition);
                var newbuffer = void 0;
                if (size > this._buffer.byteLength) {
                    //need increase
                    if (this.increase)
                        size += this.increase;
                    else
                        size = (this.buffer.byteLength + length_1) * 2; //auto increase two times
                    this._count++;
                    // logger.log(`increase to ${size} ${this._count}`);
                    newbuffer = new ArrayBuffer(size);
                }
                else {
                    //use old one
                    newbuffer = this._buffer;
                }
                var array_1 = new Uint8Array(newbuffer);
                array_1.set(new Uint8Array(oldbuffer), 0);
                this._rposition -= clearBytes;
                this._wposition = oldbuffer.byteLength;
                this._buffer = newbuffer;
                // logger.log(
                //   `clear bytes: ${clearBytes} ${length} ${this._buffer.byteLength} ${this._buffer.byteLength - this.byteAvailable} ${this._count}`
                // );
            }
            var array = new Uint8Array(this._buffer);
            array.set(new Uint8Array(buffer), this._wposition);
            this._wposition += length_1;
        }
    };
    ByteArray.fromArray = function (array) {
        var size = 0;
        array.forEach(function (buffer) { return (size += buffer.byteLength) });
        var ba = new ByteArray({ initLength: size });
        array.forEach(function (buffer) { return ba.write(buffer) });
        return ba;
    };
    ByteArray.TAG = "ByteArray";
    /** global default value */
    ByteArray.littleEndian = false;
    return ByteArray;
}());
exports.default = ByteArray;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
var mp4_generator_1 = __webpack_require__(26);
var browser_1 = __webpack_require__(6);
var byte_array_1 = __webpack_require__(9);
var logger_1 = __webpack_require__(0);
var config_1 = __webpack_require__(3);
/**
 * mp4 remuxer
 *
 * @author wangxingwei@douyu.tv
 *
 */
var Mp4Remuxer = /** @class */ (function () {
    function Mp4Remuxer() {
        this.TAG = "MP4Remuxer";
        this._audioTrack = {
            container: "audio/mp4",
            codec: "",
            buffers: [],
            timeOffset: -1,
        };
        this._videoTrack = {
            container: "video/mp4",
            codec: "",
            buffers: [],
            ts: 0,
            sei: undefined,
            hasKeyframe: false
        };
        this._lastAudioSample = null;
        this._lastVideoSample = null;
        this._useAudioMpeg = false;
        this._isAudioInited = false;
        this._isVideoInited = false;
        this._isAudioTimeNeedUpdate = false; // mp3没有相对时间戳，在视频开始、片段丢失的情况下，需要人工update
    }
    Mp4Remuxer.prototype.dispose = function () {
        this.onInit = null;
        this.onData = null;
        this.onError = null;
        this._mediaInfo = null;
        this._audioMeta = null;
        this._videoMeta = null;
        this._audioTrack = null;
        this._videoTrack = null;
        this._lastAudioSample = null;
        this._lastVideoSample = null;
    };
    Mp4Remuxer.prototype.onMediaInfo = function (mediaInfo) {
        // 可能触发多次
        if (this._mediaInfo) {
            logger_1.default.log("receive another mediaInfo!", this._mediaInfo, mediaInfo);
        }
        this._mediaInfo = mediaInfo;
        if (mediaInfo.hasAudio && !this._isAudioInited) {
            this._isAudioInited = true;
            // init segment
            if (this._mediaInfo.audioCodec === "mp3" && !browser_1.default.firefox) { // only firefox support 'mp3' codec
                // 'mp3' codec not supported, use raw mpeg instead.
                this._useAudioMpeg = true;
                this._isAudioTimeNeedUpdate = true;
                this._audioTrack.container = "audio/mpeg";
                this._audioTrack.codec = "";
            }
            else {
                this._audioTrack.codec = this._mediaInfo.audioCodec;
                this._audioTrack.buffers.push(mp4_generator_1.default.generateInitSegment(this._audioMeta).buffer);
            }
        }
        if (mediaInfo.hasVideo && !this._isVideoInited) {
            this._isVideoInited = true;
            // init segment
            this._videoTrack.codec = this._mediaInfo.videoCodec;
            this._videoTrack.buffers.push(mp4_generator_1.default.generateInitSegment(this._videoMeta).buffer);
        }
        this.onInit && this.onInit(this._mediaInfo);
    };
    Mp4Remuxer.prototype.onTrackMeta = function (type, metadata) {
        if (type === "audio") {
            this._audioMeta = metadata;
        }
        if (type === "video") {
            this._videoMeta = metadata;
        }
    };
    Mp4Remuxer.prototype.onTrackData = function (audioTrack, videoTrack, end) {
        if (end === void 0) { end = false }
        this._remuxVideo(videoTrack, end);
        this._remuxAudio(audioTrack, end);
        this._dispatchData();
    };
    Mp4Remuxer.prototype._dispatchData = function () {
        if (this.onData) {
            var tracks = [];
            if (this._mediaInfo.hasAudio) {
                var track = this._audioTrack;
                var data = byte_array_1.default.fromArray(track.buffers).buffer;
                track.buffers = []; //clear
                tracks.push({
                    id: 0,
                    container: track.container,
                    codec: track.codec,
                    data: data,
                    timeOffset: track.timeOffset
                });
                track.timeOffset = -1;
            }
            if (this._mediaInfo.hasVideo) {
                var track = this._videoTrack;
                var data = byte_array_1.default.fromArray(track.buffers).buffer;
                track.buffers = []; //clear
                tracks.push({
                    id: 1,
                    container: track.container,
                    codec: track.codec,
                    data: data,
                    ts: track.ts,
                    sei: track.sei,
                    hasKeyframe: track.hasKeyframe
                });
            }
            this.onData(tracks);
        }
    };
    Mp4Remuxer.prototype._remuxAudio = function (audioTrack, end) {
        if (end === void 0) { end = false }
        if (!this._audioMeta) {
            return;
        }
        //read samples
        var track = audioTrack;
        var samples = track.samples;
        if (!samples) {
            return;
        }
        // 最后一个分片无法算出准确的duration，放到下一批samples中
        if (this._lastAudioSample) {
            samples.unshift(this._lastAudioSample);
            this._lastAudioSample = null;
        }
        if (!end) {
            this._lastAudioSample = samples.pop();
        }
        if (samples.length === 0) {
            return;
        }
        var firstDts = -1;
        var samplesLen = samples.length;
        var dataLen = 0;
        var mayLost = false;
        var nextSamples = [];
        for (var i = 0; i < samplesLen; i++) {
            var sample = samples[i];
            if (firstDts === -1) {
                firstDts = sample.dts;
            }
            if (i === samplesLen - 1) {
                // last sample
                if (this._lastAudioSample) {
                    sample.duration = this._lastAudioSample.pts - sample.pts;
                }
                else {
                    sample.duration = Math.floor(this._audioMeta.refSampleDuration);
                }
            }
            else {
                sample.duration = samples[i + 1].pts - sample.pts;
            }
            // logger.log('audio duration',sample.duration,this._audioMeta.refSampleDuration);
            if (sample.duration > config_1.Config.lostThreshold) {
                // 中间可能丢失了sample
                logger_1.default.warn("sample duration=" + sample.duration + ", some audio sample may be lost.");
                sample.duration = Math.floor(this._audioMeta.refSampleDuration);
                if (this._lastAudioSample) {
                    samples.push(this._lastAudioSample);
                    this._lastAudioSample = null;
                }
                mayLost = true;
            }
            sample.size = sample.unit.byteLength;
            sample.flags = {
                isLeading: 0,
                dependsOn: 1,
                isDependedOn: 0,
                hasRedundancy: 0
            };
            dataLen += sample.size;
            if (mayLost) {
                samplesLen = i + 1;
                nextSamples = samples.splice(samplesLen);
                break;
            }
        }
        var ba = new byte_array_1.default({ initLength: dataLen });
        samples.forEach(function (sample) { return ba.write(sample.unit) });
        if (this._useAudioMpeg) {
            this._audioTrack.buffers.push(ba.buffer);
            if (this._isAudioTimeNeedUpdate) {
                this._audioTrack.timeOffset = firstDts;
                this._isAudioTimeNeedUpdate = false;
            }
        }
        else {
            var moof = mp4_generator_1.default.moof(track, firstDts);
            var mdat = mp4_generator_1.default.mdat(new Uint8Array(ba.buffer));
            this._audioTrack.buffers.push(this._mergeBoxes(moof, mdat).buffer);
        }
        // update track
        track.sequenceNumber++;
        track.samples.splice(0, samplesLen);
        track.length = 0;
        if (mayLost) {
            track.samples = nextSamples;
            track.length += nextSamples.length;
            if (this._useAudioMpeg) {
                this._isAudioTimeNeedUpdate = true;
            }
            this._remuxAudio(track, end);
        }
    };
    Mp4Remuxer.prototype._remuxVideo = function (videoTrack, end) {
        if (end === void 0) { end = false }
        if (this._videoMeta == null) {
            return;
        }
        var track = videoTrack;
        var samples = track.samples;
        if (!samples) {
            return;
        }
        // 最后一个分片无法算出准确的duration，放到下一批samples中
        if (this._lastVideoSample) {
            samples.unshift(this._lastVideoSample);
            this._lastVideoSample = null;
        }
        if (!end) {
            this._lastVideoSample = samples.pop();
        }
        if (samples.length === 0) {
            return;
        }
        var firstDts = -1;
        var mp4Samples = [];
        var samplesLen = samples.length;
        var dataLen = 0;
        var mayLost = false;
        var nextSamples = [];
        var lastts = 0;
        var hasKeyframe = false;
        for (var i = 0; i < samplesLen; i++) {
            var sample = samples[i];
            var isKeyframe = sample.isKeyframe;
            var dts = sample.dts;
            var cts = sample.cts;
            var pts = dts + cts;
            if (firstDts === -1) {
                firstDts = dts;
            }
            var sampleDuration = 0;
            if (i === samplesLen - 1) {
                // last sample
                if (this._lastVideoSample) {
                    sampleDuration = this._lastVideoSample.dts - dts;
                }
                else {
                    sampleDuration = Math.floor(this._videoMeta.refSampleDuration);
                }
            }
            else {
                sampleDuration = samples[i + 1].dts - dts;
            }
            // logger.log('video duration',sampleDuration,this._videoMeta.refSampleDuration);
            if (sampleDuration > config_1.Config.lostThreshold) {
                // 中间可能丢失了sample
                logger_1.default.warn("sample duration=" + sampleDuration + ", some video sample may be lost.");
                sampleDuration = Math.floor(this._videoMeta.refSampleDuration);
                if (this._lastVideoSample) {
                    samples.push(this._lastVideoSample);
                    this._lastVideoSample = null;
                }
                mayLost = true;
            }
            if (isKeyframe) {
                hasKeyframe = true;
            }
            mp4Samples.push({
                dts: dts,
                pts: pts,
                cts: cts,
                units: sample.units,
                size: sample.length,
                isKeyframe: isKeyframe,
                duration: sampleDuration,
                flags: {
                    isLeading: 0,
                    dependsOn: isKeyframe ? 2 : 1,
                    isDependedOn: isKeyframe ? 1 : 0,
                    hasRedundancy: 0,
                    isNonSync: isKeyframe ? 0 : 1
                }
            });
            sample.units.forEach(function (unit) {
                dataLen += unit.data.byteLength;
            });
            // write mdat
            // sample.units.forEach(unit => ba.write(unit.data));
            // set videoTrack ts
            if (i === samplesLen - 1) {
                lastts = sample.dts;
            }
            if (mayLost) {
                samplesLen = i + 1;
                nextSamples = samples.splice(samplesLen);
                break;
            }
        }
        // workaround for chrome < 50: force first sample as a random access point
        // see https://bugs.chromium.org/p/chromium/issues/detail?id=229412
        if (browser_1.default.chrome &&
            (browser_1.default.version.major < 50 ||
                (browser_1.default.version.major === 50 && browser_1.default.version.build < 2661))) {
            var flags = mp4Samples[0].flags;
            flags.dependsOn = 2;
            flags.isNonSync = 0;
        }
        var ba = new byte_array_1.default({ initLength: dataLen });
        samples.forEach(function (sample) {
            return sample.units.forEach(function (unit) { return ba.write(unit.data) });
        });
        track.samples = mp4Samples;
        var moof = mp4_generator_1.default.moof(track, firstDts);
        var mdat = mp4_generator_1.default.mdat(new Uint8Array(ba.buffer));
        this._videoTrack.buffers.push(this._mergeBoxes(moof, mdat).buffer);
        this._videoTrack.ts = lastts;
        this._videoTrack.sei = track.sei;
        this._videoTrack.hasKeyframe = hasKeyframe;
        // update track
        track.sequenceNumber++;
        track.samples.splice(0, samplesLen);
        track.length = 0;
        if (mayLost) {
            track.samples = nextSamples;
            track.length += nextSamples.length;
            this._remuxVideo(track, end);
        }
    };
    Mp4Remuxer.prototype._mergeBoxes = function (moof, mdat) {
        var result = new Uint8Array(moof.byteLength + mdat.byteLength);
        result.set(moof, 0);
        result.set(mdat, moof.byteLength);
        return result;
    };
    return Mp4Remuxer;
}());
exports.default = Mp4Remuxer;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {



function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(12));
__export(__webpack_require__(2));
__export(__webpack_require__(5));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(13);
var events_1 = __webpack_require__(14);
var media_handler_1 = __webpack_require__(15);
var bind_all_1 = __webpack_require__(1);
var loader_1 = __webpack_require__(5);
var flv2mp4_1 = __webpack_require__(19);
var error_1 = __webpack_require__(2);
var logger_1 = __webpack_require__(0);
exports.PlayerEvents = {
    ON_MEDIA_INFO: "mediaInfo",
    ON_FIRST_FRAME: "firstFrame",
    ON_ERROR: "error"
};
var LivePlayer = /** @class */ (function (_super) {
    __extends(LivePlayer, _super);
    function LivePlayer(config) {
        var _this = _super.call(this) || this;
        _this._isFirstFrameEmitted = false;
        bind_all_1.bindAll(_this);
        _this._config = Object.assign({
            enableWorker: true,
            debug: false
        }, config);
        if (!_this._config.loader) {
            if (loader_1.FetchStreamLoader.isSupported()) {
                _this._loader = new loader_1.FetchStreamLoader();
            }
            else if (loader_1.MozChunkedLoader.isSupported()) {
                _this._loader = new loader_1.MozChunkedLoader();
            }
        }
        else {
            _this._loader = _this._config.loader;
        }
        if (!_this._loader) {
            _this._onError(new error_1.DyDemuxError("Do not has supported loader."));
            return _this;
        }
        _this._mediaHandler = new media_handler_1.ToMSE();
        _this._mediaHandler.onHasKeyframe = _this._onFirstFrame;
        _this._flv2mp4 = new flv2mp4_1.Flv2mp4(_this._loader, _this._mediaHandler, _this._config);
        _this._flv2mp4.onInit = _this._onInit;
        _this._flv2mp4.onError = _this._onError;
        return _this;
    }
    LivePlayer.prototype.dispose = function () {
        this.pause();
        this.detach();
        if (this._flv2mp4) {
            this._flv2mp4.dispose();
            this._flv2mp4 = null;
        }
        if (this._loader) {
            this._loader.dispose();
            this._loader = null;
        }
        if (this._mediaHandler) {
            this._mediaHandler.dispose();
            this._mediaHandler = null;
        }
        this.removeAllListeners();
    };
    LivePlayer.prototype.load = function () {
        this._loader.load(this._config.url);
    };
    LivePlayer.prototype.attach = function (video) {
        this._mediaHandler.attach(video);
        this._video = video;
        // 纯音频流没有keyframe，使用loadedmetadata计算首帧
        this._video.addEventListener("loadedmetadata", this._onFirstFrame);
    };
    LivePlayer.prototype.detach = function () {
        this._mediaHandler && this._mediaHandler.detach();
        if (this._video) {
            this._video.removeEventListener("loadedmetadata", this._onFirstFrame);
            this._video = null;
        }
    };
    LivePlayer.prototype.play = function () {
        this._video && this._video.play();
    };
    LivePlayer.prototype.pause = function () {
        this._video && this._video.pause();
    };
    LivePlayer.prototype.getStatInfo = function () {
        var stat = {
            url: "",
            redirectedURL: "",
            loaderBytes: 0,
            decodedFrames: 0,
            droppedFrames: 0,
            cdnBytes: 0,
            p2pBytes: 0
        };
        if (this._loader) {
            stat.url = this._loader.url;
            stat.redirectedURL = this._loader.redirectUrl;
            var _a = this._loader.getStatistics(), loaderBytes = _a.loaderBytes, cdnBytes = _a.cdnBytes, p2pBytes = _a.p2pBytes;
            stat.loaderBytes = loaderBytes;
            stat.cdnBytes = cdnBytes;
            stat.p2pBytes = p2pBytes;
        }
        if (this._video) {
            if (typeof this._video.getVideoPlaybackQuality === "function") {
                var videoPlaybackQuality = this._video.getVideoPlaybackQuality();
                stat.decodedFrames = videoPlaybackQuality.totalVideoFrames;
                stat.droppedFrames = videoPlaybackQuality.droppedVideoFrames;
            }
            else if (this._video["webkitDecodedFrameCount"] !== undefined) {
                stat.decodedFrames = this._video["webkitDecodedFrameCount"];
                stat.droppedFrames = this._video["webkitDroppedFrameCount"];
            }
        }
        return stat;
    };
    LivePlayer.prototype._onInit = function (mediaInfo) {
        this.emit(exports.PlayerEvents.ON_MEDIA_INFO, mediaInfo);
    };
    LivePlayer.prototype._onFirstFrame = function () {
        if (!this._isFirstFrameEmitted) {
            this._isFirstFrameEmitted = true;
            this.emit(exports.PlayerEvents.ON_FIRST_FRAME);
            logger_1.default.log("first frame from " + (arguments[0] ? "meta" : "keyframe"));
        }
    };
    LivePlayer.prototype._onError = function (reason) {
        var _this = this;
        // delay emit
        setTimeout(function () {
            _this.emit(exports.PlayerEvents.ON_ERROR, reason);
        }, 10);
    };
    return LivePlayer;
}(events_1.EventEmitter));
exports.LivePlayer = LivePlayer;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// polyfill for Object.assign
if (typeof Object.assign !== "function") {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) {
            // .length of function is 2
            
            if (target == null) {
                // TypeError if undefined or null
                throw new TypeError("Cannot convert undefined or null to object");
            }
            var to = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];
                if (nextSource != null) {
                    // Skip over if undefined or null
                    for (var nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
// export { ToFile } from "./to-file";
var to_mse_1 = __webpack_require__(16);
exports.ToMSE = to_mse_1.ToMSE;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(0);
var bind_all_1 = __webpack_require__(1);
var config_1 = __webpack_require__(3);
var error_1 = __webpack_require__(2);
/**
 * 使用mse播放媒体数据
 *
 * @author wangxingwei@douyu.tv
 */
var ToMSE = /** @class */ (function () {
    function ToMSE() {
        this.preTimestamp = 0; // sdk当前解码的pts，单位：毫秒
        this._tracksList = [];
        this._sourceBufferAdded = {};
        this._isLoadEnded = false;
        this._isPlayEnded = false;
        this._isDisposed = false;
        this._isWaiting = false;
        this._reachCanplay = false;
        bind_all_1.bindAll(this);
        window["T_ADV_Timestamp"] = this.T_ADV_Timestamp;
    }
    ToMSE.prototype.dispose = function () {
        this.detach();
        if (this._mediaSource) {
            if (this._mediaSource.readyState !== "closed") {
                var sourceBuffers = this._mediaSource.sourceBuffers;
                for (var i = 0; i < sourceBuffers.length; i++) {
                    var buffer = sourceBuffers[i];
                    try {
                        this._mediaSource.removeSourceBuffer(buffer);
                    }
                    catch (e) {
                        logger_1.default.warn("remove source buffer error: ", e);
                    }
                    buffer.removeEventListener("updateend", this._onUpdateend);
                }
            }
            if (this._mediaSource.readyState === "open") {
                try {
                    this._mediaSource.endOfStream();
                }
                catch (e) {
                    logger_1.default.warn('endOfStream error: ', e);
                }
            }
            this._mediaSource.removeEventListener("sourceopen", this._appendBuffer);
            this._mediaSource = null;
        }
        if (this._mediaSourceUrl) {
            URL.revokeObjectURL(this._mediaSourceUrl);
            this._mediaSourceUrl = null;
        }
        this._tracksList = [];
        this._sourceBufferAdded = {};
        this._isDisposed = true;
        clearTimeout(this._checkStuckTimer);
    };
    ToMSE.prototype.appendData = function (tracks) {
        var _this = this;
        if (this._isDisposed)
            return;
        tracks.forEach(function (track, i) {
            var list = _this._tracksList[i];
            if (!list)
                list = _this._tracksList[i] = [];
            list.push(track);
        });
        this._appendBuffer();
    };
    ToMSE.prototype.appendEnd = function () {
        if (this._isDisposed)
            return;
        this._isLoadEnded = true;
        if (this._mediaSource && this._mediaSource.readyState === "open") {
            var buffers = this._mediaSource.sourceBuffers;
            var updating = false;
            for (var i = 0; i < buffers.length; i++) {
                var buffer = buffers[i];
                if (buffer.updating) {
                    updating = true;
                    break;
                }
            }
            if (!updating)
                this._mediaSource.endOfStream();
        }
    };
    ToMSE.prototype.attach = function (video) {
        this._video = video;
        this._video.addEventListener("stalled", this._onStalled);
        this._video.addEventListener("progress", this._onProgress);
        this._video.addEventListener("canplay", this._onCanplay);
        this._video.addEventListener("waiting", this._onWaiting);
        this._video.addEventListener("ended", this._onEnded);
        this._video.addEventListener("error", this._onMediaError);
        if (!this._mediaSourceUrl) {
            var mediaSource = (this._mediaSource = new MediaSource());
            mediaSource.addEventListener("sourceopen", this._appendBuffer);
            this._mediaSourceUrl = URL.createObjectURL(mediaSource);
        }
        video.src = this._mediaSourceUrl;
    };
    ToMSE.prototype.detach = function () {
        if (this._video) {
            this._video.removeEventListener("stalled", this._onStalled);
            this._video.removeEventListener("progress", this._onProgress);
            this._video.removeEventListener("canplay", this._onCanplay);
            this._video.removeEventListener("waiting", this._onWaiting);
            this._video.removeEventListener("ended", this._onEnded);
            this._video.removeEventListener("error", this._onMediaError);
            this._video.src = "";
            this._video.removeAttribute("src");
            this._video = null;
        }
    };
    ToMSE.prototype._appendBuffer = function () {
        if (!this._mediaSource || this._mediaSource.readyState !== "open") {
            return;
        }
        for (var i = 0; i < this._tracksList.length; i++) {
            var list = this._tracksList[i];
            if (list.length === 0) {
                continue;
            }
            var track = list[0];
            var sb = this._sourceBufferAdded[track.id];
            if (!sb) {
                // add source buffer
                var codec = track.container + "; codecs=\"" + track.codec + "\"";
                if (MediaSource.isTypeSupported(codec)) {
                    var sb_1 = this._mediaSource.addSourceBuffer(codec);
                    // firefox使用sequence模式优化卡住及音画不同步现象
                    // if (Browser.firefox) sb.mode = "sequence";
                    this._sourceBufferAdded[track.id] = sb_1;
                    sb_1.addEventListener("updateend", this._onUpdateend);
                }
                else {
                    this._onError("Unsupported MIME type or codec: " + codec);
                }
            }
            else {
                // append buffer data
                if (!sb.updating) {
                    if (track && track.data && track.data.byteLength > 0) {
                        try {
                            // 从解码器中拿到时间戳
                            if (track.ts) {
                                this.preTimestamp = track.ts;
                            }
                            if (track.sei) {
                                this.seiTimestamp = track.sei;
                            }
                            // update timeoffset
                            if (typeof track.timeOffset === 'number' && track.timeOffset !== -1) {
                                sb.timestampOffset = track.timeOffset / 1000;
                                logger_1.default.log("buffer time offset change: " + sb.timestampOffset);
                            }
                            sb.appendBuffer(track.data); //append
                            if (track.hasKeyframe) {
                                this.onHasKeyframe && this.onHasKeyframe();
                            }
                            delete track.data;
                            list.shift(); // remove appended track
                        }
                        catch (error) {
                            logger_1.default.warn("append buffer error: " + error);
                            if (error.code === 22) {
                                // QuotaExceededError
                            }
                            else {
                                this._onError("append buffer error: " + error);
                            }
                        }
                    }
                    else {
                        list.shift(); // jump over no-data track
                    }
                }
            }
        }
    };
    ToMSE.prototype._removeBuffer = function () {
        if (this._video) {
            var playtime = this._video.currentTime;
            var sourceBuffers = this._mediaSource.sourceBuffers;
            for (var i = 0; i < sourceBuffers.length; i++) {
                var sb = sourceBuffers[i];
                if (!sb.updating) {
                    var buffered = sb.buffered;
                    if (buffered.length > 0) {
                        if (buffered.length > 1) {
                            // 多段buffer，逐段清空
                            // 前后多加0.1修正，防止remove失败
                            var start = Math.max(buffered.start(0) - 0.1, 0);
                            var end = buffered.end(0) + 0.1;
                            if (end < playtime) {
                                sb.remove(start, end);
                                // logger.log(`remove whole buffer ${start} ${end} ${playtime}`);
                            }
                        }
                        else {
                            var start = Math.max(buffered.start(0) - 0.1, 0); //first start
                            if (playtime - start > config_1.Config.videoBackTimeThreshold) {
                                var end = playtime - config_1.Config.videoBackTime;
                                sb.remove(start, end);
                                // logger.log(`remove part buffer ${start} ${end} ${playtime}`);
                            }
                        }
                    }
                }
            }
        }
    };
    ToMSE.prototype._onUpdateend = function () {
        this._removeBuffer();
        this._appendBuffer();
        if (this._isLoadEnded)
            this.appendEnd();
    };
    ToMSE.prototype._checkStartStuck = function () {
        var buffered = this._video.buffered;
        if (buffered.length > 0 && this._video.readyState < 2) {
            // HAVE_CURRENT_DATA
            var current = this._video.currentTime;
            var start = buffered.start(0);
            var end = buffered.end(0);
            if (current < start) {
                // check start
                logger_1.default.log("player stuck, recover from " + current + " to " + start + " -- " + end);
                this._video.currentTime = start;
            }
        }
    };
    ToMSE.prototype._checkPlayStuck = function () {
        clearTimeout(this._checkStuckTimer);
        // 强制修改播放头，跳过buffer间隙
        var buffered = this._video.buffered;
        if (this._isWaiting &&
            buffered.length > 0 &&
            !this._isPlayEnded &&
            !this._video.seeking) {
            var current = this._video.currentTime;
            var end = buffered.end(buffered.length - 1);
            var delta = end - current;
            if (delta > 4) {
                // canplay最晚chrome可能在3s左右触发,firefox 0.xs
                var start = buffered.start(buffered.length - 1);
                var jump = Math.max(this._video.currentTime + 1, start);
                if (end - jump > 2) {
                    this._video.currentTime = jump;
                    logger_1.default.warn("player stuck, force move forward: " + delta + ", " + current + " -> " + jump);
                    // Array.prototype.forEach.call(this._mediaSource.sourceBuffers, sb =>
                    //   this._printBuffer(sb.buffered)
                    // );
                    this._printBuffer(this._video.buffered);
                }
            }
            // 继续检测
            this._checkStuckTimer = setTimeout(this._checkPlayStuck, 2000);
            // for (let i = 0; i < buffered.length; i++) {
            //   let start = buffered.start(i);
            //   if (current < start) {
            //     logger.warn(
            //       `player stuck, force recover from ${current} to ${start}`
            //     );
            //     this._video.currentTime = start;
            //     break;
            //   }
            // }
        }
    };
    ToMSE.prototype._printBuffer = function (buffered) {
        var len = buffered.length;
        logger_1.default.log("current time = " + this._video.currentTime);
        for (var i = 0; i < len; i++) {
            logger_1.default.log("buffered[" + i + "]: " + buffered.start(i) + " ---- " + buffered.end(i));
        }
    };
    ToMSE.prototype._onStalled = function () {
        // 音频直播经常stalled，但是可以正常播放，不要设置_isWaiting
        // this._isWaiting = true;
        this._checkPlayStuck();
    };
    ToMSE.prototype._onProgress = function () {
        this._checkStartStuck();
    };
    ToMSE.prototype._onWaiting = function () {
        if (this._reachCanplay) {
            this._isWaiting = true;
            this._checkPlayStuck();
        }
    };
    ToMSE.prototype._onCanplay = function () {
        this._reachCanplay = true;
        this._isWaiting = false;
        this._video.removeEventListener("progress", this._onProgress);
    };
    ToMSE.prototype._onEnded = function () {
        this._isPlayEnded = true;
        clearTimeout(this._checkStuckTimer);
    };
    ToMSE.prototype._onMediaError = function (event) {
        var msg = "Media Error";
        if (this._video && this._video.error) {
            msg = "code=" + this._video.error["code"] + ",message=" + this._video.error["message"];
        }
        this._onError(msg);
    };
    ToMSE.prototype._onError = function (reason) {
        this.onError && this.onError(new error_1.DyMediaError(reason));
    };
    // 腾讯精彩集锦广告SDK时间戳方法
    ToMSE.prototype.T_ADV_Timestamp = function () {
        if (this._video) {
            var element = this._video;
            if (element.buffered.length == 0) {
                return;
            }
            var bufferTime = element.buffered.end(0) - element.currentTime;
            return {
                bufferLength: bufferTime,
                ptsTimestamp: this.preTimestamp,
                seiTimestamp: this.seiTimestamp
            };
        }
    };
    return ToMSE;
}());
exports.ToMSE = ToMSE;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_loader_1 = __webpack_require__(4);
var error_1 = __webpack_require__(2);
var browser_js_1 = __webpack_require__(6);
var FetchStreamLoader = /** @class */ (function (_super) {
    __extends(FetchStreamLoader, _super);
    function FetchStreamLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FetchStreamLoader.isSupported = function () {
        try {
            // fetch + stream is broken on Microsoft Edge. Disable before build 15048.
            // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8196907/
            // Fixed in Jan 10, 2017. Build 15048+ removed from blacklist.
            var isWorkWellEdge = browser_js_1.default.msedge && browser_js_1.default.version.minor >= 15048;
            var browserNotBlacklisted = browser_js_1.default.msedge ? isWorkWellEdge : true;
            return (self.fetch && self.ReadableStream && browserNotBlacklisted);
        }
        catch (e) {
            return false;
        }
    };
    FetchStreamLoader.prototype.load = function (url, options) {
        var _this = this;
        _super.prototype.load.call(this, url, options);
        fetch(url)
            .then(function (response) {
            if (response.ok) {
                if (url !== response.url) {
                    _this._onRedirectUrl(response.url);
                }
                return response.body.getReader();
            }
            else {
                throw new error_1.DyNetworkError("fetch stream failed: " + response.status + " " + response.statusText);
            }
        })
            .then(function (reader) {
            _this._reader = reader;
            var onRead = function (_a) {
                var done = _a.done, value = _a.value;
                if (done) {
                    // read end
                    _this.onEnd && _this.onEnd();
                }
                else {
                    // reading...
                    _this._onData(value.buffer);
                    reader
                        .read()
                        .then(onRead)
                        .catch(_this._onError);
                }
            };
            // start
            reader
                .read()
                .then(onRead)
                .catch(_this._onError);
        })
            .catch(function (e) {
            if (e && e.code === 11 && browser_js_1.default.msedge) { // InvalidStateError on Microsoft Edge          
                // Workaround: Edge may throw InvalidStateError after ReadableStreamReader.cancel() call
                // Ignore the unknown exception.
                // Related issue: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11265202/
                return;
            }
            _this._onError(new error_1.DyNetworkError("fetch stream failed: " + e));
        });
    };
    FetchStreamLoader.prototype.dispose = function () {
        if (this._reader) {
            this._reader.cancel().catch(function (e) {
                //ignore this error
            });
            this._reader = null;
        }
        _super.prototype.dispose.call(this);
    };
    return FetchStreamLoader;
}(base_loader_1.BaseLoader));
exports.FetchStreamLoader = FetchStreamLoader;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_loader_1 = __webpack_require__(4);
var error_1 = __webpack_require__(2);
var MozChunkedLoader = /** @class */ (function (_super) {
    __extends(MozChunkedLoader, _super);
    function MozChunkedLoader() {
        var _this = _super.call(this) || this;
        _this._xhr = null;
        _this._requestAbort = false;
        return _this;
    }
    MozChunkedLoader.isSupported = function () {
        try {
            var xhr = new XMLHttpRequest();
            // Firefox 37- requires .open() to be called before setting responseType
            xhr.open('GET', 'https://example.com', true);
            xhr.responseType = 'moz-chunked-arraybuffer';
            return (xhr.responseType === 'moz-chunked-arraybuffer');
        }
        catch (e) {
            //  Log.w('MozChunkedLoader', e.message);
            return false;
        }
    };
    MozChunkedLoader.prototype.load = function (url, options) {
        this._requestURL = url;
        var xhr = this._xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'moz-chunked-arraybuffer';
        xhr.onreadystatechange = this._onReadyStateChange.bind(this);
        xhr.onprogress = this._onProgress.bind(this);
        xhr.onloadend = this._onLoadEnd.bind(this);
        xhr.onerror = this._onXhrError.bind(this);
        xhr.send();
    };
    MozChunkedLoader.prototype.dispose = function () {
        this.abort();
        if (this._xhr) {
            this._xhr.onreadystatechange = null;
            this._xhr.onprogress = null;
            this._xhr.onloadend = null;
            this._xhr.onerror = null;
            this._xhr = null;
        }
        _super.prototype.dispose.call(this);
    };
    MozChunkedLoader.prototype.abort = function () {
        this._requestAbort = true;
        if (this._xhr) {
            this._xhr.abort();
        }
    };
    MozChunkedLoader.prototype._onReadyStateChange = function (e) {
        var xhr = e.target;
        if (xhr.readyState === 2) { // HEADERS_RECEIVED
            if (xhr.responseURL != undefined && xhr.responseURL !== this._requestURL) {
                this._onRedirectUrl(xhr.responseURL);
            }
            if (xhr.status !== 0 && (xhr.status < 200 || xhr.status > 299)) {
                this._onError(new error_1.DyNetworkError('MozChunkedLoader: Http code invalid, ' + xhr.status + ' ' + xhr.statusText));
            }
        }
    };
    MozChunkedLoader.prototype._onProgress = function (e) {
        var chunk = e.target.response;
        this._onData(chunk);
    };
    MozChunkedLoader.prototype._onLoadEnd = function (e) {
        if (this._requestAbort === true) {
            this._requestAbort = false;
            return;
        }
        this.onEnd && this.onEnd();
    };
    MozChunkedLoader.prototype._onXhrError = function (e) {
        this._onError("xhr load exit");
    };
    return MozChunkedLoader;
}(base_loader_1.BaseLoader));
exports.MozChunkedLoader = MozChunkedLoader;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
var bind_all_1 = __webpack_require__(1);
var logger_1 = __webpack_require__(0);
var media_info_1 = __webpack_require__(7);
var transmuxer_1 = __webpack_require__(20);
var Flv2mp4 = /** @class */ (function () {
    function Flv2mp4(loader, mediaHandler, config) {
        bind_all_1.bindAll(this);
        var enableWorker = config.enableWorker, debug = config.debug;
        this._loader = loader;
        this._loader.onData = this.appendData;
        this._loader.onEnd = this.appendEnd;
        this._loader.onError = this._onError;
        this._mediaHandler = mediaHandler;
        this._mediaHandler.onError = this._onError;
        logger_1.default.setEnable(debug);
        if (enableWorker) {
            //web worker
            this._transmuxer = __webpack_require__(27)(/*require.resolve*/(28));
            // set worker logger
            this._transmuxer.postMessage({
                name: "_setLoggerEnable",
                params: debug
            });
            logger_1.default.log("transmuxe with worker");
        }
        else {
            this._transmuxer = new transmuxer_1.Transmuxer();
            logger_1.default.log("transmuxe with no worker");
        }
        this._transmuxer.onmessage = this._onMessage;
        this._transmuxer.postMessage({
            name: "init",
            params: JSON.parse(JSON.stringify(config)) // 不能传native对象（config.loader）
        });
    }
    Flv2mp4.prototype.appendData = function (buffer) {
        this._transmuxer.postMessage({
            name: "appendData",
            params: buffer
        }, [buffer]);
    };
    Flv2mp4.prototype.appendEnd = function () {
        logger_1.default.log('loader end');
        this._transmuxer.postMessage({
            name: "appendEnd"
        });
        this._complete();
    };
    Flv2mp4.prototype.dispose = function () {
        this.onInit = null;
        this.onError = null;
        this._mediaHandler = null;
        this._loader = null;
        this._transmuxer.terminate();
        this._transmuxer = null;
    };
    Flv2mp4.prototype._onRemuxInit = function (mediaInfo) {
        if (!(mediaInfo instanceof media_info_1.default)) {
            mediaInfo = Object.assign(new media_info_1.default(), mediaInfo);
        }
        this.onInit && this.onInit(mediaInfo);
    };
    Flv2mp4.prototype._onRemuxData = function (tracks) {
        this._mediaHandler && this._mediaHandler.appendData(tracks);
    };
    Flv2mp4.prototype._complete = function () {
        this._mediaHandler && this._mediaHandler.appendEnd();
    };
    Flv2mp4.prototype._onError = function (reason) {
        this.onError && this.onError(reason);
    };
    Flv2mp4.prototype._onMessage = function (event) {
        var data = event.data;
        var name = data.name, params = data.params;
        try {
            this[name](params);
        }
        catch (e) {
            logger_1.default.warn("call flv2mp4." + name + " error", e);
        }
    };
    return Flv2mp4;
}());
exports.Flv2mp4 = Flv2mp4;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
var bind_all_1 = __webpack_require__(1);
var logger_1 = __webpack_require__(0);
var flv_demuxer_1 = __webpack_require__(8);
var mp4_remuxer_1 = __webpack_require__(10);
var Transmuxer = /** @class */ (function () {
    function Transmuxer() {
        bind_all_1.bindAll(this);
    }
    Transmuxer.prototype.init = function (config) {
        this._demux = new flv_demuxer_1.default(config);
        this._remux = new mp4_remuxer_1.default();
        this._demux.onInit = this._onDemuxInit;
        this._demux.onTrackMeta = this._onTrackMeta;
        this._demux.onTrackData = this._onTrackData;
        this._demux.onError = this._onError;
        this._remux.onInit = this._onRemuxInit;
        this._remux.onData = this._onRemuxData;
        this._remux.onError = this._onError;
    };
    Transmuxer.prototype.appendData = function (buffer) {
        this._demux.appendData(buffer);
    };
    Transmuxer.prototype.appendEnd = function () {
        this._demux.appendEnd();
    };
    Transmuxer.prototype.postMessage = function (message, transfer) {
        try {
            var name_1 = message.name, params = message.params;
            this[name_1](params);
        }
        catch (e) {
            logger_1.default.warn("call transmuxer." + name + " error", e);
        }
    };
    Transmuxer.prototype.terminate = function () {
        this.onmessage = null;
        this._demux.dispose();
        this._demux = null;
        this._remux.dispose();
        this._remux = null;
    };
    Transmuxer.prototype._onmessage = function (data) {
        this.onmessage && this.onmessage({ data: data });
    };
    Transmuxer.prototype._onDemuxInit = function (mediaInfo) {
        this._remux.onMediaInfo(mediaInfo);
    };
    Transmuxer.prototype._onTrackMeta = function (type, metadata) {
        this._remux.onTrackMeta(type, metadata);
    };
    Transmuxer.prototype._onTrackData = function (audioTrack, videoTrack, end) {
        this._remux.onTrackData(audioTrack, videoTrack, end);
    };
    Transmuxer.prototype._onRemuxInit = function (mediaInfo) {
        this._onmessage({
            name: "_onRemuxInit",
            params: mediaInfo
        });
    };
    Transmuxer.prototype._onRemuxData = function (tracks) {
        this._onmessage({
            name: "_onRemuxData",
            params: tracks
        });
    };
    Transmuxer.prototype._complete = function () {
        this._onmessage({
            name: "_complete"
        });
    };
    Transmuxer.prototype._onError = function (reason) {
        this._onmessage({
            name: "_onError",
            params: reason
        });
    };
    return Transmuxer;
}());
exports.Transmuxer = Transmuxer;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {



/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(0);
var utf8_conv_1 = __webpack_require__(22);
var le = (function () {
    var buf = new ArrayBuffer(2);
    new DataView(buf).setInt16(0, 256, true); // little-endian write
    return new Int16Array(buf)[0] === 256; // platform-spec read, if equal then LE
})();
var AMF = /** @class */ (function () {
    function AMF() {
    }
    AMF.parseScriptData = function (arrayBuffer, dataOffset, dataSize) {
        var data = {};
        try {
            var name_1 = AMF.parseValue(arrayBuffer, dataOffset, dataSize);
            var value = AMF.parseValue(arrayBuffer, dataOffset + name_1.size, dataSize - name_1.size);
            data[name_1.data] = value.data;
        }
        catch (e) {
            logger_1.default.error("AMF", e.toString());
        }
        return data;
    };
    AMF.parseObject = function (arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 3) {
            throw new Error("Data not enough when parse ScriptDataObject");
        }
        var name = AMF.parseString(arrayBuffer, dataOffset, dataSize);
        var value = AMF.parseValue(arrayBuffer, dataOffset + name.size, dataSize - name.size);
        var isObjectEnd = value.objectEnd;
        return {
            data: {
                name: name.data,
                value: value.data
            },
            size: name.size + value.size,
            objectEnd: isObjectEnd
        };
    };
    AMF.parseVariable = function (arrayBuffer, dataOffset, dataSize) {
        return AMF.parseObject(arrayBuffer, dataOffset, dataSize);
    };
    AMF.parseString = function (arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 2) {
            throw new Error("Data not enough when parse String");
        }
        var v = new DataView(arrayBuffer, dataOffset, dataSize);
        var length = v.getUint16(0, !le);
        var str;
        if (length > 0) {
            str = utf8_conv_1.default(new Uint8Array(arrayBuffer, dataOffset + 2, length));
        }
        else {
            str = "";
        }
        return {
            data: str,
            size: 2 + length
        };
    };
    AMF.parseLongString = function (arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 4) {
            throw new Error("Data not enough when parse LongString");
        }
        var v = new DataView(arrayBuffer, dataOffset, dataSize);
        var length = v.getUint32(0, !le);
        var str;
        if (length > 0) {
            str = utf8_conv_1.default(new Uint8Array(arrayBuffer, dataOffset + 4, length));
        }
        else {
            str = "";
        }
        return {
            data: str,
            size: 4 + length
        };
    };
    AMF.parseDate = function (arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 10) {
            throw new Error("Data size invalid when parse Date");
        }
        var v = new DataView(arrayBuffer, dataOffset, dataSize);
        var timestamp = v.getFloat64(0, !le);
        var localTimeOffset = v.getInt16(8, !le);
        timestamp += localTimeOffset * 60 * 1000; // get UTC time
        return {
            data: new Date(timestamp),
            size: 8 + 2
        };
    };
    AMF.parseValue = function (arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 1) {
            throw new Error("Data not enough when parse Value");
        }
        var v = new DataView(arrayBuffer, dataOffset, dataSize);
        var offset = 1;
        var type = v.getUint8(0);
        var value;
        var objectEnd = false;
        try {
            switch (type) {
                case 0: // Number(Double) type
                    value = v.getFloat64(1, !le);
                    offset += 8;
                    break;
                case 1: {
                    // Boolean type
                    var b = v.getUint8(1);
                    value = b ? true : false;
                    offset += 1;
                    break;
                }
                case 2: {
                    // String type
                    var amfstr = AMF.parseString(arrayBuffer, dataOffset + 1, dataSize - 1);
                    value = amfstr.data;
                    offset += amfstr.size;
                    break;
                }
                case 3: {
                    // Object(s) type
                    value = {};
                    var terminal = 0; // workaround for malformed Objects which has missing ScriptDataObjectEnd
                    if ((v.getUint32(dataSize - 4, !le) & 0x00ffffff) === 9) {
                        terminal = 3;
                    }
                    while (offset < dataSize - 4) {
                        // 4 === type(UI8) + ScriptDataObjectEnd(UI24)
                        var amfobj = AMF.parseObject(arrayBuffer, dataOffset + offset, dataSize - offset - terminal);
                        if (amfobj.objectEnd)
                            break;
                        value[amfobj.data.name] = amfobj.data.value;
                        offset += amfobj.size;
                    }
                    if (offset <= dataSize - 3) {
                        var marker = v.getUint32(offset - 1, !le) & 0x00ffffff;
                        if (marker === 9) {
                            offset += 3;
                        }
                    }
                    break;
                }
                case 8: {
                    // ECMA array type (Mixed array)
                    value = {};
                    offset += 4; // ECMAArrayLength(UI32)
                    var terminal = 0; // workaround for malformed MixedArrays which has missing ScriptDataObjectEnd
                    if ((v.getUint32(dataSize - 4, !le) & 0x00ffffff) === 9) {
                        terminal = 3;
                    }
                    while (offset < dataSize - 8) {
                        // 8 === type(UI8) + ECMAArrayLength(UI32) + ScriptDataVariableEnd(UI24)
                        var amfvar = AMF.parseVariable(arrayBuffer, dataOffset + offset, dataSize - offset - terminal);
                        if (amfvar.objectEnd)
                            break;
                        value[amfvar.data.name] = amfvar.data.value;
                        offset += amfvar.size;
                    }
                    if (offset <= dataSize - 3) {
                        var marker = v.getUint32(offset - 1, !le) & 0x00ffffff;
                        if (marker === 9) {
                            offset += 3;
                        }
                    }
                    break;
                }
                case 9: // ScriptDataObjectEnd
                    value = undefined;
                    offset = 1;
                    objectEnd = true;
                    break;
                case 10: {
                    // Strict array type
                    // ScriptDataValue[n]. NOTE: according to video_file_format_spec_v10_1.pdf
                    value = [];
                    var strictArrayLength = v.getUint32(1, !le);
                    offset += 4;
                    for (var i = 0; i < strictArrayLength; i++) {
                        var val = AMF.parseValue(arrayBuffer, dataOffset + offset, dataSize - offset);
                        value.push(val.data);
                        offset += val.size;
                    }
                    break;
                }
                case 11: {
                    // Date type
                    var date = AMF.parseDate(arrayBuffer, dataOffset + 1, dataSize - 1);
                    value = date.data;
                    offset += date.size;
                    break;
                }
                case 12: {
                    // Long string type
                    var amfLongStr = AMF.parseString(arrayBuffer, dataOffset + 1, dataSize - 1);
                    value = amfLongStr.data;
                    offset += amfLongStr.size;
                    break;
                }
                default:
                    // ignore and skip
                    offset = dataSize;
                    logger_1.default.warn("AMF", "Unsupported AMF value type " + type);
            }
        }
        catch (e) {
            logger_1.default.error("AMF", e.toString());
        }
        return {
            data: value,
            size: offset,
            objectEnd: objectEnd
        };
    };
    return AMF;
}());
exports.default = AMF;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {



/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * This file is derived from C++ project libWinTF8 (https://github.com/m13253/libWinTF8)
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function checkContinuation(uint8array, start, checkLength) {
    var array = uint8array;
    if (start + checkLength < array.length) {
        while (checkLength--) {
            if ((array[++start] & 0xC0) !== 0x80)
                return false;
        }
        return true;
    }
    else {
        return false;
    }
}
function decodeUTF8(uint8array) {
    var out = [];
    var input = uint8array;
    var i = 0;
    var length = uint8array.length;
    while (i < length) {
        if (input[i] < 0x80) {
            out.push(String.fromCharCode(input[i]));
            ++i;
            continue;
        }
        else if (input[i] < 0xC0) {
            // fallthrough
        }
        else if (input[i] < 0xE0) {
            if (checkContinuation(input, i, 1)) {
                var ucs4 = (input[i] & 0x1F) << 6 | (input[i + 1] & 0x3F);
                if (ucs4 >= 0x80) {
                    out.push(String.fromCharCode(ucs4 & 0xFFFF));
                    i += 2;
                    continue;
                }
            }
        }
        else if (input[i] < 0xF0) {
            if (checkContinuation(input, i, 2)) {
                var ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
                if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
                    out.push(String.fromCharCode(ucs4 & 0xFFFF));
                    i += 3;
                    continue;
                }
            }
        }
        else if (input[i] < 0xF8) {
            if (checkContinuation(input, i, 3)) {
                var ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12
                    | (input[i + 2] & 0x3F) << 6 | (input[i + 3] & 0x3F);
                if (ucs4 > 0x10000 && ucs4 < 0x110000) {
                    ucs4 -= 0x10000;
                    out.push(String.fromCharCode((ucs4 >>> 10) | 0xD800));
                    out.push(String.fromCharCode((ucs4 & 0x3FF) | 0xDC00));
                    i += 4;
                    continue;
                }
            }
        }
        out.push(String.fromCharCode(0xFFFD));
        ++i;
    }
    return out.join('');
}
exports.default = decodeUTF8;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {



/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var exp_golomb_js_1 = __webpack_require__(24);
var SPSParser = /** @class */ (function () {
    function SPSParser() {
    }
    SPSParser._ebsp2rbsp = function (uint8array) {
        var src = uint8array;
        var src_length = src.byteLength;
        var dst = new Uint8Array(src_length);
        var dst_idx = 0;
        for (var i = 0; i < src_length; i++) {
            if (i >= 2) {
                // Unescape: Skip 0x03 after 00 00
                if (src[i] === 0x03 && src[i - 1] === 0x00 && src[i - 2] === 0x00) {
                    continue;
                }
            }
            dst[dst_idx] = src[i];
            dst_idx++;
        }
        return new Uint8Array(dst.buffer, 0, dst_idx);
    };
    SPSParser.parseSPS = function (uint8array) {
        var rbsp = SPSParser._ebsp2rbsp(uint8array);
        var gb = new exp_golomb_js_1.default(rbsp);
        gb.readByte();
        var profile_idc = gb.readByte(); // profile_idc
        gb.readByte(); // constraint_set_flags[5] + reserved_zero[3]
        var level_idc = gb.readByte(); // level_idc
        gb.readUEG(); // seq_parameter_set_id
        var profile_string = SPSParser.getProfileString(profile_idc);
        var level_string = SPSParser.getLevelString(level_idc);
        var chroma_format_idc = 1;
        var chroma_format = 420;
        var chroma_format_table = [0, 420, 422, 444];
        var bit_depth = 8;
        if (profile_idc === 100 || profile_idc === 110 || profile_idc === 122 ||
            profile_idc === 244 || profile_idc === 44 || profile_idc === 83 ||
            profile_idc === 86 || profile_idc === 118 || profile_idc === 128 ||
            profile_idc === 138 || profile_idc === 144) {
            chroma_format_idc = gb.readUEG();
            if (chroma_format_idc === 3) {
                gb.readBits(1); // separate_colour_plane_flag
            }
            if (chroma_format_idc <= 3) {
                chroma_format = chroma_format_table[chroma_format_idc];
            }
            bit_depth = gb.readUEG() + 8; // bit_depth_luma_minus8
            gb.readUEG(); // bit_depth_chroma_minus8
            gb.readBits(1); // qpprime_y_zero_transform_bypass_flag
            if (gb.readBool()) { // seq_scaling_matrix_present_flag
                var scaling_list_count = (chroma_format_idc !== 3) ? 8 : 12;
                for (var i = 0; i < scaling_list_count; i++) {
                    if (gb.readBool()) { // seq_scaling_list_present_flag
                        if (i < 6) {
                            SPSParser._skipScalingList(gb, 16);
                        }
                        else {
                            SPSParser._skipScalingList(gb, 64);
                        }
                    }
                }
            }
        }
        gb.readUEG(); // log2_max_frame_num_minus4
        var pic_order_cnt_type = gb.readUEG();
        if (pic_order_cnt_type === 0) {
            gb.readUEG(); // log2_max_pic_order_cnt_lsb_minus_4
        }
        else if (pic_order_cnt_type === 1) {
            gb.readBits(1); // delta_pic_order_always_zero_flag
            gb.readSEG(); // offset_for_non_ref_pic
            gb.readSEG(); // offset_for_top_to_bottom_field
            var num_ref_frames_in_pic_order_cnt_cycle = gb.readUEG();
            for (var i = 0; i < num_ref_frames_in_pic_order_cnt_cycle; i++) {
                gb.readSEG(); // offset_for_ref_frame
            }
        }
        gb.readUEG(); // max_num_ref_frames
        gb.readBits(1); // gaps_in_frame_num_value_allowed_flag
        var pic_width_in_mbs_minus1 = gb.readUEG();
        var pic_height_in_map_units_minus1 = gb.readUEG();
        var frame_mbs_only_flag = gb.readBits(1);
        if (frame_mbs_only_flag === 0) {
            gb.readBits(1); // mb_adaptive_frame_field_flag
        }
        gb.readBits(1); // direct_8x8_inference_flag
        var frame_crop_left_offset = 0;
        var frame_crop_right_offset = 0;
        var frame_crop_top_offset = 0;
        var frame_crop_bottom_offset = 0;
        var frame_cropping_flag = gb.readBool();
        if (frame_cropping_flag) {
            frame_crop_left_offset = gb.readUEG();
            frame_crop_right_offset = gb.readUEG();
            frame_crop_top_offset = gb.readUEG();
            frame_crop_bottom_offset = gb.readUEG();
        }
        var sar_width = 1, sar_height = 1;
        var fps = 0, fps_fixed = true, fps_num = 0, fps_den = 0;
        var vui_parameters_present_flag = gb.readBool();
        if (vui_parameters_present_flag) {
            if (gb.readBool()) { // aspect_ratio_info_present_flag
                var aspect_ratio_idc = gb.readByte();
                var sar_w_table = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2];
                var sar_h_table = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
                if (aspect_ratio_idc > 0 && aspect_ratio_idc < 16) {
                    sar_width = sar_w_table[aspect_ratio_idc - 1];
                    sar_height = sar_h_table[aspect_ratio_idc - 1];
                }
                else if (aspect_ratio_idc === 255) {
                    sar_width = gb.readByte() << 8 | gb.readByte();
                    sar_height = gb.readByte() << 8 | gb.readByte();
                }
            }
            if (gb.readBool()) { // overscan_info_present_flag
                gb.readBool(); // overscan_appropriate_flag
            }
            if (gb.readBool()) { // video_signal_type_present_flag
                gb.readBits(4); // video_format & video_full_range_flag
                if (gb.readBool()) { // colour_description_present_flag
                    gb.readBits(24); // colour_primaries & transfer_characteristics & matrix_coefficients
                }
            }
            if (gb.readBool()) { // chroma_loc_info_present_flag
                gb.readUEG(); // chroma_sample_loc_type_top_field
                gb.readUEG(); // chroma_sample_loc_type_bottom_field
            }
            if (gb.readBool()) { // timing_info_present_flag
                var num_units_in_tick = gb.readBits(32);
                var time_scale = gb.readBits(32);
                fps_fixed = gb.readBool(); // fixed_frame_rate_flag
                fps_num = time_scale;
                fps_den = num_units_in_tick * 2;
                fps = fps_num / fps_den;
            }
        }
        var sarScale = 1;
        if (sar_width !== 1 || sar_height !== 1) {
            sarScale = sar_width / sar_height;
        }
        var crop_unit_x = 0, crop_unit_y = 0;
        if (chroma_format_idc === 0) {
            crop_unit_x = 1;
            crop_unit_y = 2 - frame_mbs_only_flag;
        }
        else {
            var sub_wc = (chroma_format_idc === 3) ? 1 : 2;
            var sub_hc = (chroma_format_idc === 1) ? 2 : 1;
            crop_unit_x = sub_wc;
            crop_unit_y = sub_hc * (2 - frame_mbs_only_flag);
        }
        var codec_width = (pic_width_in_mbs_minus1 + 1) * 16;
        var codec_height = (2 - frame_mbs_only_flag) * ((pic_height_in_map_units_minus1 + 1) * 16);
        codec_width -= (frame_crop_left_offset + frame_crop_right_offset) * crop_unit_x;
        codec_height -= (frame_crop_top_offset + frame_crop_bottom_offset) * crop_unit_y;
        var present_width = Math.ceil(codec_width * sarScale);
        gb.destroy();
        gb = null;
        return {
            profile_string: profile_string,
            level_string: level_string,
            bit_depth: bit_depth,
            chroma_format: chroma_format,
            chroma_format_string: SPSParser.getChromaFormatString(chroma_format),
            frame_rate: {
                fixed: fps_fixed,
                fps: fps,
                fps_den: fps_den,
                fps_num: fps_num
            },
            sar_ratio: {
                width: sar_width,
                height: sar_height
            },
            codec_size: {
                width: codec_width,
                height: codec_height
            },
            present_size: {
                width: present_width,
                height: codec_height
            }
        };
    };
    SPSParser._skipScalingList = function (gb, count) {
        var last_scale = 8, next_scale = 8;
        var delta_scale = 0;
        for (var i = 0; i < count; i++) {
            if (next_scale !== 0) {
                delta_scale = gb.readSEG();
                next_scale = (last_scale + delta_scale + 256) % 256;
            }
            last_scale = (next_scale === 0) ? last_scale : next_scale;
        }
    };
    SPSParser.getProfileString = function (profile_idc) {
        switch (profile_idc) {
            case 66:
                return 'Baseline';
            case 77:
                return 'Main';
            case 88:
                return 'Extended';
            case 100:
                return 'High';
            case 110:
                return 'High10';
            case 122:
                return 'High422';
            case 244:
                return 'High444';
            default:
                return 'Unknown';
        }
    };
    SPSParser.getLevelString = function (level_idc) {
        return (level_idc / 10).toFixed(1);
    };
    SPSParser.getChromaFormatString = function (chroma) {
        switch (chroma) {
            case 420:
                return '4:2:0';
            case 422:
                return '4:2:2';
            case 444:
                return '4:4:4';
            default:
                return 'Unknown';
        }
    };
    return SPSParser;
}());
exports.default = SPSParser;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {



/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Exponential-Golomb buffer decoder
var ExpGolomb = /** @class */ (function () {
    function ExpGolomb(uint8array) {
        this.TAG = "ExpGolomb";
        this._buffer = uint8array;
        this._buffer_index = 0;
        this._total_bytes = uint8array.byteLength;
        this._total_bits = uint8array.byteLength * 8;
        this._current_word = 0;
        this._current_word_bits_left = 0;
    }
    ExpGolomb.prototype.destroy = function () {
        this._buffer = null;
    };
    ExpGolomb.prototype._fillCurrentWord = function () {
        var buffer_bytes_left = this._total_bytes - this._buffer_index;
        if (buffer_bytes_left <= 0)
            throw new Error("ExpGolomb: _fillCurrentWord() but no bytes available");
        var bytes_read = Math.min(4, buffer_bytes_left);
        var word = new Uint8Array(4);
        word.set(this._buffer.subarray(this._buffer_index, this._buffer_index + bytes_read));
        this._current_word = new DataView(word.buffer).getUint32(0, false);
        this._buffer_index += bytes_read;
        this._current_word_bits_left = bytes_read * 8;
    };
    ExpGolomb.prototype.readBits = function (bits) {
        if (bits > 32)
            throw new Error("ExpGolomb: readBits() bits exceeded max 32bits!");
        if (bits <= this._current_word_bits_left) {
            var result_1 = this._current_word >>> (32 - bits);
            this._current_word <<= bits;
            this._current_word_bits_left -= bits;
            return result_1;
        }
        var result = this._current_word_bits_left ? this._current_word : 0;
        result = result >>> (32 - this._current_word_bits_left);
        var bits_need_left = bits - this._current_word_bits_left;
        this._fillCurrentWord();
        var bits_read_next = Math.min(bits_need_left, this._current_word_bits_left);
        var result2 = this._current_word >>> (32 - bits_read_next);
        this._current_word <<= bits_read_next;
        this._current_word_bits_left -= bits_read_next;
        result = (result << bits_read_next) | result2;
        return result;
    };
    ExpGolomb.prototype.readBool = function () {
        return this.readBits(1) === 1;
    };
    ExpGolomb.prototype.readByte = function () {
        return this.readBits(8);
    };
    ExpGolomb.prototype._skipLeadingZero = function () {
        var zero_count;
        for (zero_count = 0; zero_count < this._current_word_bits_left; zero_count++) {
            if (0 !== (this._current_word & (0x80000000 >>> zero_count))) {
                this._current_word <<= zero_count;
                this._current_word_bits_left -= zero_count;
                return zero_count;
            }
        }
        this._fillCurrentWord();
        return zero_count + this._skipLeadingZero();
    };
    ExpGolomb.prototype.readUEG = function () {
        // unsigned exponential golomb
        var leading_zeros = this._skipLeadingZero();
        return this.readBits(leading_zeros + 1) - 1;
    };
    ExpGolomb.prototype.readSEG = function () {
        // signed exponential golomb
        var value = this.readUEG();
        if (value & 0x01) {
            return (value + 1) >>> 1;
        }
        else {
            return -1 * (value >>> 1);
        }
    };
    return ExpGolomb;
}());
exports.default = ExpGolomb;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by lv on 18-11-5.
 */
var H264SeiType = {
    H264_SEI_TYPE_BUFFERING_PERIOD: 0,
    H264_SEI_TYPE_PIC_TIMING: 1,
    H264_SEI_TYPE_PAN_SCAN_RECT: 2,
    H264_SEI_TYPE_FILLER_PAYLOAD: 3,
    H264_SEI_TYPE_USER_DATA_REGISTERED: 4,
    H264_SEI_TYPE_USER_DATA_UNREGISTERED: 5,
    H264_SEI_TYPE_RECOVERY_POINT: 6,
    H264_SEI_TYPE_FRAME_PACKING: 45,
    H264_SEI_TYPE_DISPLAY_ORIENTATION: 47,
    H264_SEI_TYPE_GREEN_METADATA: 56,
    H264_SEI_TYPE_MASTERING_DISPLAY_COLOUR_VOLUME: 137,
    H264_SEI_TYPE_ALTERNATIVE_TRANSFER: 147,
};
var SEIParser = /** @class */ (function () {
    function SEIParser() {
    }
    SEIParser._ebsp2rbsp = function (uint8array) {
        var src = uint8array;
        var srcLength = src.byteLength;
        var dst = new Uint8Array(srcLength);
        var dstIdx = 0;
        for (var i = 0; i < srcLength; i++) {
            if (i >= 2) {
                // Unescape: Skip 0x03 after 00 00
                if (src[i] === 0x03 && src[i - 1] === 0x00 && src[i - 2] === 0x00) {
                    continue;
                }
            }
            dst[dstIdx] = src[i];
            dstIdx++;
        }
        return new Uint8Array(dst.buffer, 0, dstIdx);
    };
    /**
     * 解析SEI内容
     * @param {Uint8Array} uint8Array sei nalu body
     */
    SEIParser.parseSEI = function (uint8Array) {
        var rbspArray = SEIParser._ebsp2rbsp(uint8Array);
        var v = new DataView(rbspArray.buffer);
        var type = 0; // sei payload type
        var size = 0; // sei payload size
        var offset = 0;
        var ret;
        var nextVal;
        // payload type
        do {
            nextVal = v.getUint8(offset);
            offset += 1;
            type += nextVal;
        } while (nextVal === 255);
        // payload size
        do {
            nextVal = v.getUint8(offset);
            offset += 1;
            size += nextVal;
        } while (nextVal === 255);
        // console.warn(`sei payload type: ${type}, size: ${size}`);
        switch (type) {
            case H264SeiType.H264_SEI_TYPE_USER_DATA_UNREGISTERED:
                ret = SEIParser.decodeUnregisteredUserData(v, offset, size);
                break;
            default:
                console.warn('unknow SEI type');
        }
        return ret;
    };
    /**
     * TODO 根据内容写入格式解析
     * @param {*} dataView
     * @param {*} offset
     * @param {*} size
     */
    SEIParser.decodeUnregisteredUserData = function (dataView, offset, size) {
        if (size < 16 || size > 30) {
            console.warn('SEIParser ', 'error size: ', size);
            return null;
        }
        var tencentStreamSEI = [67, 108, 111, 117, 100, 86, 105, 100, 101, 111, 83, 116, 114, 101, 97, 109];
        for (var i = 0; i < 16; i++) {
            if (dataView.getUint8(offset + i) !== tencentStreamSEI[i]) {
                return null;
            }
        }
        offset += 16;
        var info = {
            uuid: '',
            timestamp: ''
        };
        info.uuid = 'CloudVideoStream';
        // js 移位运算只处理32位数值，因此无法直接向左移位32，否则相当于“无移位”
        info.timestamp = parseInt(dataView.getUint32(offset).toString(2) + dataView.getUint32(offset + 4).toString(2), 2);
        return info;
    };
    return SEIParser;
}());
exports.default = SEIParser;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {



/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * This file is derived from dailymotion's hls.js library (hls.js/src/remux/mp4-generator.js)
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//  MP4 boxes generator for ISO BMFF (ISO Base Media File Format, defined in ISO/IEC 14496-12)
var MP4 = /** @class */ (function () {
    function MP4() {
    }
    MP4.init = function () {
        MP4.types = {
            avc1: [], avcC: [], btrt: [], dinf: [],
            dref: [], esds: [], ftyp: [], hdlr: [],
            mdat: [], mdhd: [], mdia: [], mfhd: [],
            minf: [], moof: [], moov: [], mp4a: [],
            mvex: [], mvhd: [], sdtp: [], stbl: [],
            stco: [], stsc: [], stsd: [], stsz: [],
            stts: [], tfdt: [], tfhd: [], traf: [],
            trak: [], trun: [], trex: [], tkhd: [],
            vmhd: [], smhd: [], '.mp3': []
        };
        for (var name_1 in MP4.types) {
            if (MP4.types.hasOwnProperty(name_1)) {
                MP4.types[name_1] = [
                    name_1.charCodeAt(0),
                    name_1.charCodeAt(1),
                    name_1.charCodeAt(2),
                    name_1.charCodeAt(3)
                ];
            }
        }
        var constants = MP4.constants = {};
        constants.FTYP = new Uint8Array([
            0x69, 0x73, 0x6F, 0x6D,
            0x0, 0x0, 0x0, 0x1,
            0x69, 0x73, 0x6F, 0x6D,
            0x61, 0x76, 0x63, 0x31 // avc1
        ]);
        constants.STSD_PREFIX = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x01 // entry_count
        ]);
        constants.STTS = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00 // entry_count
        ]);
        constants.STSC = constants.STCO = constants.STTS;
        constants.STSZ = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00 // sample_count
        ]);
        constants.HDLR_VIDEO = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x76, 0x69, 0x64, 0x65,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x56, 0x69, 0x64, 0x65,
            0x6F, 0x48, 0x61, 0x6E,
            0x64, 0x6C, 0x65, 0x72, 0x00 // name: VideoHandler
        ]);
        constants.HDLR_AUDIO = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x73, 0x6F, 0x75, 0x6E,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x53, 0x6F, 0x75, 0x6E,
            0x64, 0x48, 0x61, 0x6E,
            0x64, 0x6C, 0x65, 0x72, 0x00 // name: SoundHandler
        ]);
        constants.DREF = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x01,
            0x00, 0x00, 0x00, 0x0C,
            0x75, 0x72, 0x6C, 0x20,
            0x00, 0x00, 0x00, 0x01 // version(0) + flags
        ]);
        // Sound media header
        constants.SMHD = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00 // balance(2) + reserved(2)
        ]);
        // video media header
        constants.VMHD = new Uint8Array([
            0x00, 0x00, 0x00, 0x01,
            0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00
        ]);
    };
    // Generate a box
    MP4.box = function (type) {
        var size = 8;
        var result = null;
        var datas = Array.prototype.slice.call(arguments, 1);
        var arrayCount = datas.length;
        for (var i = 0; i < arrayCount; i++) {
            size += datas[i].byteLength;
        }
        result = new Uint8Array(size);
        result[0] = (size >>> 24) & 0xFF; // size
        result[1] = (size >>> 16) & 0xFF;
        result[2] = (size >>> 8) & 0xFF;
        result[3] = (size) & 0xFF;
        result.set(type, 4); // type
        var offset = 8;
        for (var i = 0; i < arrayCount; i++) { // data body
            result.set(datas[i], offset);
            offset += datas[i].byteLength;
        }
        return result;
    };
    // emit ftyp & moov
    MP4.generateInitSegment = function (meta) {
        var ftyp = MP4.box(MP4.types.ftyp, MP4.constants.FTYP);
        var moov = MP4.moov(meta);
        var result = new Uint8Array(ftyp.byteLength + moov.byteLength);
        result.set(ftyp, 0);
        result.set(moov, ftyp.byteLength);
        return result;
    };
    // Movie metadata box
    MP4.moov = function (meta) {
        var mvhd = MP4.mvhd(meta.timescale, meta.duration);
        var trak = MP4.trak(meta);
        var mvex = MP4.mvex(meta);
        return MP4.box(MP4.types.moov, mvhd, trak, mvex);
    };
    // Movie header box
    MP4.mvhd = function (timescale, duration) {
        return MP4.box(MP4.types.mvhd, new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            (timescale >>> 24) & 0xFF,
            (timescale >>> 16) & 0xFF,
            (timescale >>> 8) & 0xFF,
            (timescale) & 0xFF,
            (duration >>> 24) & 0xFF,
            (duration >>> 16) & 0xFF,
            (duration >>> 8) & 0xFF,
            (duration) & 0xFF,
            0x00, 0x01, 0x00, 0x00,
            0x01, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x40, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0xFF, 0xFF, 0xFF, 0xFF // next_track_ID
        ]));
    };
    // Track box
    MP4.trak = function (meta) {
        return MP4.box(MP4.types.trak, MP4.tkhd(meta), MP4.mdia(meta));
    };
    // Track header box
    MP4.tkhd = function (meta) {
        var trackId = meta.id, duration = meta.duration;
        var width = meta.presentWidth, height = meta.presentHeight;
        return MP4.box(MP4.types.tkhd, new Uint8Array([
            0x00, 0x00, 0x00, 0x07,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            (trackId >>> 24) & 0xFF,
            (trackId >>> 16) & 0xFF,
            (trackId >>> 8) & 0xFF,
            (trackId) & 0xFF,
            0x00, 0x00, 0x00, 0x00,
            (duration >>> 24) & 0xFF,
            (duration >>> 16) & 0xFF,
            (duration >>> 8) & 0xFF,
            (duration) & 0xFF,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x40, 0x00, 0x00, 0x00,
            (width >>> 8) & 0xFF,
            (width) & 0xFF,
            0x00, 0x00,
            (height >>> 8) & 0xFF,
            (height) & 0xFF,
            0x00, 0x00
        ]));
    };
    // Media Box
    MP4.mdia = function (meta) {
        return MP4.box(MP4.types.mdia, MP4.mdhd(meta), MP4.hdlr(meta), MP4.minf(meta));
    };
    // Media header box
    MP4.mdhd = function (meta) {
        var timescale = meta.timescale;
        var duration = meta.duration;
        return MP4.box(MP4.types.mdhd, new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            (timescale >>> 24) & 0xFF,
            (timescale >>> 16) & 0xFF,
            (timescale >>> 8) & 0xFF,
            (timescale) & 0xFF,
            (duration >>> 24) & 0xFF,
            (duration >>> 16) & 0xFF,
            (duration >>> 8) & 0xFF,
            (duration) & 0xFF,
            0x55, 0xC4,
            0x00, 0x00 // pre_defined = 0
        ]));
    };
    // Media handler reference box
    MP4.hdlr = function (meta) {
        var data = null;
        if (meta.type === 'audio') {
            data = MP4.constants.HDLR_AUDIO;
        }
        else {
            data = MP4.constants.HDLR_VIDEO;
        }
        return MP4.box(MP4.types.hdlr, data);
    };
    // Media infomation box
    MP4.minf = function (meta) {
        var xmhd = null;
        if (meta.type === 'audio') {
            xmhd = MP4.box(MP4.types.smhd, MP4.constants.SMHD);
        }
        else {
            xmhd = MP4.box(MP4.types.vmhd, MP4.constants.VMHD);
        }
        return MP4.box(MP4.types.minf, xmhd, MP4.dinf(), MP4.stbl(meta));
    };
    // Data infomation box
    MP4.dinf = function () {
        var result = MP4.box(MP4.types.dinf, MP4.box(MP4.types.dref, MP4.constants.DREF));
        return result;
    };
    // Sample table box
    MP4.stbl = function (meta) {
        var result = MP4.box(MP4.types.stbl, // type: stbl
        MP4.stsd(meta), // Sample Description Table
        MP4.box(MP4.types.stts, MP4.constants.STTS), // Time-To-Sample
        MP4.box(MP4.types.stsc, MP4.constants.STSC), // Sample-To-Chunk
        MP4.box(MP4.types.stsz, MP4.constants.STSZ), // Sample size
        MP4.box(MP4.types.stco, MP4.constants.STCO) // Chunk offset
        );
        return result;
    };
    // Sample description box
    MP4.stsd = function (meta) {
        if (meta.type === 'audio') {
            if (meta.codec === 'mp3') {
                return MP4.box(MP4.types.stsd, MP4.constants.STSD_PREFIX, MP4.mp3(meta));
            }
            // else: aac -> mp4a
            return MP4.box(MP4.types.stsd, MP4.constants.STSD_PREFIX, MP4.mp4a(meta));
        }
        else {
            return MP4.box(MP4.types.stsd, MP4.constants.STSD_PREFIX, MP4.avc1(meta));
        }
    };
    MP4.mp3 = function (meta) {
        var channelCount = meta.channelCount;
        var sampleRate = meta.audioSampleRate;
        var data = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x01,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, channelCount,
            0x00, 0x10,
            0x00, 0x00, 0x00, 0x00,
            (sampleRate >>> 8) & 0xFF,
            (sampleRate) & 0xFF,
            0x00, 0x00
        ]);
        return MP4.box(MP4.types['.mp3'], data);
    };
    MP4.mp4a = function (meta) {
        var channelCount = meta.channelCount;
        var sampleRate = meta.audioSampleRate;
        var data = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x01,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, channelCount,
            0x00, 0x10,
            0x00, 0x00, 0x00, 0x00,
            (sampleRate >>> 8) & 0xFF,
            (sampleRate) & 0xFF,
            0x00, 0x00
        ]);
        return MP4.box(MP4.types.mp4a, data, MP4.esds(meta));
    };
    MP4.esds = function (meta) {
        var config = meta.config || [];
        var configSize = config.length;
        var data = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x03,
            0x17 + configSize,
            0x00, 0x01,
            0x00,
            0x04,
            0x0F + configSize,
            0x40,
            0x15,
            0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x05 // descriptor_type
        ].concat([
            configSize
        ]).concat(config).concat([
            0x06, 0x01, 0x02 // GASpecificConfig
        ]));
        return MP4.box(MP4.types.esds, data);
    };
    MP4.avc1 = function (meta) {
        var avcc = meta.avcc;
        var width = meta.codecWidth, height = meta.codecHeight;
        var data = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x01,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            (width >>> 8) & 0xFF,
            (width) & 0xFF,
            (height >>> 8) & 0xFF,
            (height) & 0xFF,
            0x00, 0x48, 0x00, 0x00,
            0x00, 0x48, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01,
            0x0A,
            0x73, 0x6B, 0x79, 0x2D,
            0x77, 0x61, 0x6E, 0x67,
            0x40, 0x71, 0x71, 0x2E,
            0x63, 0x6F, 0x6D, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00,
            0x00, 0x18,
            0xFF, 0xFF // pre_defined = -1
        ]);
        return MP4.box(MP4.types.avc1, data, MP4.box(MP4.types.avcC, avcc));
    };
    // Movie Extends box
    MP4.mvex = function (meta) {
        return MP4.box(MP4.types.mvex, MP4.trex(meta));
    };
    // Track Extends box
    MP4.trex = function (meta) {
        var trackId = meta.id;
        var data = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            (trackId >>> 24) & 0xFF,
            (trackId >>> 16) & 0xFF,
            (trackId >>> 8) & 0xFF,
            (trackId) & 0xFF,
            0x00, 0x00, 0x00, 0x01,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x01, 0x00, 0x01 // default_sample_flags
        ]);
        return MP4.box(MP4.types.trex, data);
    };
    // Movie fragment box
    MP4.moof = function (track, baseMediaDecodeTime) {
        return MP4.box(MP4.types.moof, MP4.mfhd(track.sequenceNumber), MP4.traf(track, baseMediaDecodeTime));
    };
    MP4.mfhd = function (sequenceNumber) {
        var data = new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            (sequenceNumber >>> 24) & 0xFF,
            (sequenceNumber >>> 16) & 0xFF,
            (sequenceNumber >>> 8) & 0xFF,
            (sequenceNumber) & 0xFF
        ]);
        return MP4.box(MP4.types.mfhd, data);
    };
    // Track fragment box
    MP4.traf = function (track, baseMediaDecodeTime) {
        var trackId = track.id;
        // Track fragment header box
        var tfhd = MP4.box(MP4.types.tfhd, new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            (trackId >>> 24) & 0xFF,
            (trackId >>> 16) & 0xFF,
            (trackId >>> 8) & 0xFF,
            (trackId) & 0xFF
        ]));
        // Track Fragment Decode Time
        var tfdt = MP4.box(MP4.types.tfdt, new Uint8Array([
            0x00, 0x00, 0x00, 0x00,
            (baseMediaDecodeTime >>> 24) & 0xFF,
            (baseMediaDecodeTime >>> 16) & 0xFF,
            (baseMediaDecodeTime >>> 8) & 0xFF,
            (baseMediaDecodeTime) & 0xFF
        ]));
        var sdtp = MP4.sdtp(track);
        var trun = MP4.trun(track, sdtp.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
        return MP4.box(MP4.types.traf, tfhd, tfdt, trun, sdtp);
    };
    // Sample Dependency Type box
    MP4.sdtp = function (track) {
        var samples = track.samples || [];
        var sampleCount = samples.length;
        var data = new Uint8Array(4 + sampleCount);
        // 0~4 bytes: version(0) & flags
        for (var i = 0; i < sampleCount; i++) {
            var flags = samples[i].flags;
            data[i + 4] = (flags.isLeading << 6) // is_leading: 2 (bit)
                | (flags.dependsOn << 4) // sample_depends_on
                | (flags.isDependedOn << 2) // sample_is_depended_on
                | (flags.hasRedundancy); // sample_has_redundancy
        }
        return MP4.box(MP4.types.sdtp, data);
    };
    // Track fragment run box
    MP4.trun = function (track, offset) {
        var samples = track.samples || [];
        var sampleCount = samples.length;
        var dataSize = 12 + 16 * sampleCount;
        var data = new Uint8Array(dataSize);
        offset += 8 + dataSize;
        data.set([
            0x00, 0x00, 0x0F, 0x01,
            (sampleCount >>> 24) & 0xFF,
            (sampleCount >>> 16) & 0xFF,
            (sampleCount >>> 8) & 0xFF,
            (sampleCount) & 0xFF,
            (offset >>> 24) & 0xFF,
            (offset >>> 16) & 0xFF,
            (offset >>> 8) & 0xFF,
            (offset) & 0xFF
        ], 0);
        for (var i = 0; i < sampleCount; i++) {
            var duration = samples[i].duration;
            var size = samples[i].size;
            var flags = samples[i].flags;
            var cts = samples[i].cts;
            data.set([
                (duration >>> 24) & 0xFF,
                (duration >>> 16) & 0xFF,
                (duration >>> 8) & 0xFF,
                (duration) & 0xFF,
                (size >>> 24) & 0xFF,
                (size >>> 16) & 0xFF,
                (size >>> 8) & 0xFF,
                (size) & 0xFF,
                (flags.isLeading << 2) | flags.dependsOn,
                (flags.isDependedOn << 6) | (flags.hasRedundancy << 4) | flags.isNonSync,
                0x00, 0x00,
                (cts >>> 24) & 0xFF,
                (cts >>> 16) & 0xFF,
                (cts >>> 8) & 0xFF,
                (cts) & 0xFF
            ], 12 + 16 * i);
        }
        return MP4.box(MP4.types.trun, data);
    };
    MP4.mdat = function (data) {
        return MP4.box(MP4.types.mdat, data);
    };
    return MP4;
}());
MP4.init();
exports.default = MP4;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

function webpackBootstrapFunc(modules) {
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId])
            /******/ return installedModules[moduleId].exports;
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {}
            /******/ 
        };
        /******/ // Execute the module function
        /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/ // Flag the module as loaded
        /******/ module.l = true;
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/ 
    }
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/ // identity function for calling harmony imports with the correct context
    /******/ __webpack_require__.i = function (value) { return value };
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, {
                /******/ configurable: false,
                /******/ enumerable: true,
                /******/ get: getter
                /******/ 
            });
            /******/ }
        /******/ 
    };
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/ 
    };
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
        /******/ var getter = module && module.__esModule ?
            /******/ function getDefault() { return module['default'] } :
            /******/ function getModuleExports() { return module };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/ 
    };
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property) };
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "/";
    /******/ // on error function for async loading
    /******/ __webpack_require__.oe = function (err) { console.error(err); throw err };
    var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE);
    return f.default || f; // try to call default if defined to also support babel esmodule exports
}
var moduleNameReqExp = '[\\.|\\-|\\+|\\w|\/|@]+';
var dependencyRegExp = '\\((\/\\*.*?\\*\/)?\s?.*?(' + moduleNameReqExp + ').*?\\)'; // additional chars when output.pathinfo is true
// http://stackoverflow.com/a/2593661/130442
function quoteRegExp(str) {
    return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}
function getModuleDependencies(sources, module, queueName) {
    var retval = {};
    retval[queueName] = [];
    var fnString = module.toString();
    var wrapperSignature = fnString.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
    if (!wrapperSignature)
        return retval;
    var webpackRequireName = wrapperSignature[1];
    // main bundle deps
    var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + dependencyRegExp, 'g');
    var match;
    while ((match = re.exec(fnString))) {
        if (match[3] === 'dll-reference')
            continue;
        retval[queueName].push(match[3]);
    }
    // dll deps
    re = new RegExp('\\(' + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, 'g');
    while ((match = re.exec(fnString))) {
        if (!sources[match[2]]) {
            retval[queueName].push(match[1]);
            sources[match[2]] = __webpack_require__(match[1]).m;
        }
        retval[match[2]] = retval[match[2]] || [];
        retval[match[2]].push(match[4]);
    }
    return retval;
}
function hasValuesInQueues(queues) {
    var keys = Object.keys(queues);
    return keys.reduce(function (hasValues, key) {
        return hasValues || queues[key].length > 0;
    }, false);
}
function getRequiredModules(sources, moduleId) {
    var modulesQueue = {
        main: [moduleId]
    };
    var requiredModules = {
        main: []
    };
    var seenModules = {
        main: {}
    };
    while (hasValuesInQueues(modulesQueue)) {
        var queues = Object.keys(modulesQueue);
        for (var i = 0; i < queues.length; i++) {
            var queueName = queues[i];
            var queue = modulesQueue[queueName];
            var moduleToCheck = queue.pop();
            seenModules[queueName] = seenModules[queueName] || {};
            if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck])
                continue;
            seenModules[queueName][moduleToCheck] = true;
            requiredModules[queueName] = requiredModules[queueName] || [];
            requiredModules[queueName].push(moduleToCheck);
            var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName);
            var newModulesKeys = Object.keys(newModules);
            for (var j = 0; j < newModulesKeys.length; j++) {
                modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || [];
                modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]]);
            }
        }
    }
    return requiredModules;
}
module.exports = function (moduleId, options) {
    options = options || {};
    var sources = {
        main: __webpack_require__.m
    };
    var requiredModules = options.all ? { main: Object.keys(sources) } : getRequiredModules(sources, moduleId);
    var src = '';
    Object.keys(requiredModules).filter(function (m) { return m !== 'main' }).forEach(function (module) {
        var entryModule = 0;
        while (requiredModules[module][entryModule]) {
            entryModule++;
        }
        requiredModules[module].push(entryModule);
        sources[module][entryModule] = '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })';
        src = src + 'var ' + module + ' = (' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(entryModule)) + ')({' + requiredModules[module].map(function (id) { return '' + JSON.stringify(id) + ': ' + sources[module][id].toString() }).join(',') + '});\n';
    });
    src = src + 'new ((' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.main.map(function (id) { return '' + JSON.stringify(id) + ': ' + sources.main[id].toString() }).join(',') + '}))(self);';
    var blob = new window.Blob([src], { type: 'text/javascript' });
    if (options.bare) {
        return blob;
    }
    var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
    var workerUrl = URL.createObjectURL(blob);
    var worker = new window.Worker(workerUrl);
    worker.objectURL = workerUrl;
    return worker;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", { value: true });
var bind_all_1 = __webpack_require__(1);
var logger_1 = __webpack_require__(0);
var flv_demuxer_1 = __webpack_require__(8);
var mp4_remuxer_1 = __webpack_require__(10);
var TransmuxerWorker = /** @class */ (function () {
    function TransmuxerWorker() {
        bind_all_1.bindAll(this);
        self.onmessage = this._onMessage;
        self.onerror = this._onError;
    }
    TransmuxerWorker.prototype.init = function (config) {
        this._demux = new flv_demuxer_1.default(config);
        this._remux = new mp4_remuxer_1.default();
        this._demux.onInit = this._onDemuxInit;
        this._demux.onTrackMeta = this._onTrackMeta;
        this._demux.onTrackData = this._onTrackData;
        this._demux.onError = this._onError;
        this._remux.onInit = this._onRemuxInit;
        this._remux.onData = this._onRemuxData;
        this._remux.onError = this._onError;
    };
    TransmuxerWorker.prototype.appendData = function (buffer) {
        this._demux.appendData(buffer);
    };
    TransmuxerWorker.prototype.appendEnd = function () {
        this._demux.appendEnd();
    };
    TransmuxerWorker.prototype._onDemuxInit = function (mediaInfo) {
        this._remux.onMediaInfo(mediaInfo);
    };
    TransmuxerWorker.prototype._onTrackMeta = function (type, metadata) {
        this._remux.onTrackMeta(type, metadata);
    };
    TransmuxerWorker.prototype._onTrackData = function (audioTrack, videoTrack, end) {
        this._remux.onTrackData(audioTrack, videoTrack, end);
    };
    TransmuxerWorker.prototype._onRemuxInit = function (mediaInfo) {
        self.postMessage({
            name: "_onRemuxInit",
            params: mediaInfo
        });
    };
    TransmuxerWorker.prototype._onRemuxData = function (tracks) {
        self.postMessage({
            name: "_onRemuxData",
            params: tracks
        }, tracks.map(function (track) { return track.data }));
    };
    TransmuxerWorker.prototype._complete = function () {
        self.postMessage({
            name: "_complete"
        });
    };
    TransmuxerWorker.prototype._setLoggerEnable = function (flag) {
        logger_1.default.setEnable(flag);
    };
    TransmuxerWorker.prototype._onError = function (reason) {
        self.postMessage({
            name: "_onError",
            params: JSON.parse(JSON.stringify(reason))
        });
    };
    TransmuxerWorker.prototype._onMessage = function (event) {
        var data = event.data;
        var name = data.name, params = data.params;
        try {
            this[name](params);
        }
        catch (e) {
            logger_1.default.warn("call transmuxer worker " + name + " error", e);
        }
    };
    return TransmuxerWorker;
}());
exports.default = TransmuxerWorker;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZHlsaXZlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGJhZWYzMWUzNjNiYjA5MjQwMmNjIiwid2VicGFjazovLy9zcmMvanMvbGl2ZS91dGlsL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2xpdmUvdXRpbC9iaW5kLWFsbC50cyIsIndlYnBhY2s6Ly8vc3JjL2pzL2xpdmUvY29yZS9lcnJvci50cyIsIndlYnBhY2s6Ly8vc3JjL2pzL2xpdmUvY29yZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9saXZlL2xvYWRlci9iYXNlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vc3JjL2pzL2xpdmUvbG9hZGVyL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvanMvbGl2ZS91dGlsL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9saXZlL2NvcmUvbWVkaWEtaW5mby5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2xpdmUvZGVtdXgvZmx2LWRlbXV4ZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9saXZlL2NvcmUvYnl0ZS1hcnJheS50cyIsIndlYnBhY2s6Ly8vc3JjL2pzL2xpdmUvcmVtdXgvbXA0LXJlbXV4ZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9saXZlL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvanMvbGl2ZS9jb3JlL2xpdmUtcGxheWVyLnRzIiwid2VicGFjazovLy9zcmMvanMvbGl2ZS91dGlsL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy9zcmMvanMvbGl2ZS9tZWRpYS1oYW5kbGVyL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvanMvbGl2ZS9tZWRpYS1oYW5kbGVyL3RvLW1zZS50cyIsIndlYnBhY2s6Ly8vc3JjL2pzL2xpdmUvbG9hZGVyL2ZldGNoLXN0cmVhbS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9saXZlL2xvYWRlci94aHItbW96LWNodW5rZWQtbG9hZGVyLnRzIiwid2VicGFjazovLy9zcmMvanMvbGl2ZS9jb3JlL2ZsdjJtcDQudHMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9saXZlL2NvcmUvdHJhbnNtdXhlci50cyIsIndlYnBhY2s6Ly8vc3JjL2pzL2xpdmUvZGVtdXgvYW1mLXBhcnNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2xpdmUvdXRpbC91dGY4LWNvbnYuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9saXZlL2RlbXV4L3Nwcy1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9saXZlL2RlbXV4L2V4cC1nb2xvbWIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9saXZlL2RlbXV4L3NlaS1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9saXZlL3JlbXV4L21wNC1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9saXZlL3V0aWwvd2Vid29ya2lmeS13ZWJwYWNrLmpzIiwid2VicGFjazovLy9zcmMvanMvbGl2ZS9jb3JlL3RyYW5zbXV4ZXIud29ya2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiYWVmMzFlMzYzYmIwOTI0MDJjYyIsIi8vbG9n5byA5YWzXHJcbmxldCBlbmFibGUgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIHNldEVuYWJsZShmbGFnKSB7XHJcbiAgZW5hYmxlID0gZmxhZztcclxufVxyXG5cclxuZnVuY3Rpb24gY3VzdG9taXplKGxvZ0Z1bmMsIC4uLnRhZ3MpIHtcclxuICBsZXQgcHJlZml4ID0gW1wiW2h0bWw1IHBsYXllcl1cIiwgLi4udGFncy5tYXAodGFnID0+IGBbJHt0YWd9XWApXTtcclxuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgIGlmIChlbmFibGUpIHtcclxuICAgICAgbG9nRnVuYy5jYWxsKGNvbnNvbGUsIC4uLnByZWZpeCwgLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMb2dnZXIoLi4udGFncykge1xyXG4gIHJldHVybiB7XHJcbiAgICBsb2c6IGN1c3RvbWl6ZShjb25zb2xlLmxvZywgLi4udGFncyksXHJcbiAgICBkZWJ1ZzogY3VzdG9taXplKGNvbnNvbGUuZGVidWcsIC4uLnRhZ3MpLFxyXG4gICAgaW5mbzogY3VzdG9taXplKGNvbnNvbGUuaW5mbywgLi4udGFncyksXHJcbiAgICB3YXJuOiBjdXN0b21pemUoY29uc29sZS53YXJuLCAuLi50YWdzKSxcclxuICAgIGVycm9yOiBjdXN0b21pemUoY29uc29sZS5lcnJvciwgLi4udGFncyksXHJcbiAgICBzZXRFbmFibGVcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlTG9nZ2VyKFwiZHlsaXZlXCIpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpdmUvdXRpbC9sb2dnZXIuanMiLCIvKipcclxuICog6YGN5Y6G5a+56LGh77yM57uR5a6a5YWo6YOo5Ye95pWwXHJcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IOimgee7keWumuWIsOeahOebruagh1xyXG4gKiBAcGFyYW0geyp9IHByb3RvIOimgeaJp+ihjOe7keWumueahOWvueixoe+8jOecgeeVpeWImeS7pXRhcmdldOS4uuebruagh1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRBbGwodGFyZ2V0LCBwcm90bz8pIHtcclxuICBpZiAocHJvdG8gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcclxuICB9XHJcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG8pLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXRbbmFtZV07XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWUuYmluZCh0YXJnZXQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGl2ZS91dGlsL2JpbmQtYWxsLnRzIiwiZXhwb3J0IGNsYXNzIER5TmV0d29ya0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIHN0YXRpYyBOQU1FPSdEeU5ldHdvcmtFcnJvcidcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLm5hbWUgPSBEeU5ldHdvcmtFcnJvci5OQU1FO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIER5TWVkaWFFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBzdGF0aWMgTkFNRT0nRHlNZWRpYUVycm9yJ1xyXG5cclxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIHRoaXMubmFtZSA9IER5TWVkaWFFcnJvci5OQU1FO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIER5RGVtdXhFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBzdGF0aWMgTkFNRT0nRHlEZW11eEVycm9yJ1xyXG5cclxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIHRoaXMubmFtZSA9IER5RGVtdXhFcnJvci5OQU1FO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGl2ZS9jb3JlL2Vycm9yLnRzIiwiZXhwb3J0IGNvbnN0IENvbmZpZyA9IHtcclxuICAvLyDmr4/mrKHop6PnoIHnmoTlrZfoioLmlbBcclxuICBzdGFzaEJ1ZmZlcjogNjU1MzYsXHJcbiAgLy8g5q+P5qyh6Kej56CB6Ze06ZqU5pe26ZW/KG1zKVxyXG4gIHN0YXNoVGltZTogMjAwLCAgXHJcbiAgLy8g5b2T5YmN5pKt5pS+54K55LmL5YmN55qE5YaF5a655L+d5a2Y5aSa5bCR56eSKHMpXHJcbiAgdmlkZW9CYWNrVGltZTogMjAsXHJcbiAgLy8g5b2T5YmN5pKt5pS+54K55LmL5YmN55qE5YaF5a656L6+5Yiw5aSa5bCR56eS5pe25omn6KGM5riF6Zmk5pON5L2cKHMpXHJcbiAgdmlkZW9CYWNrVGltZVRocmVzaG9sZDogNDAsXHJcbiAgLy8gc2FtcGxlIGxvc3TpmIDlgLxcclxuICBsb3N0VGhyZXNob2xkOiAzMDAwXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGl2ZS9jb3JlL2NvbmZpZy50cyIsImltcG9ydCB7IElMb2FkZXIgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBiaW5kQWxsIH0gZnJvbSBcIi4uL3V0aWwvYmluZC1hbGxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlTG9hZGVyIGltcGxlbWVudHMgSUxvYWRlciB7XHJcbiAgb25EYXRhOiAoYnVmZmVyOiBBcnJheUJ1ZmZlcikgPT4gdm9pZDtcclxuICBvbkVuZDogKCkgPT4gdm9pZDtcclxuICBvbkVycm9yOiAocmVhc29uPykgPT4gdm9pZDtcclxuXHJcbiAgcHJvdGVjdGVkIF9sb2FkZXJCeXRlczogbnVtYmVyID0gMDtcclxuICBwcm90ZWN0ZWQgX3VybDogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBfcmVkaXJlY3RVcmw6IHN0cmluZztcclxuXHJcbiAgZ2V0IHVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLl91cmw7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVkaXJlY3RVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3RVcmw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGJpbmRBbGwodGhpcyk7XHJcbiAgICBiaW5kQWxsKHRoaXMsIEJhc2VMb2FkZXIucHJvdG90eXBlKTtcclxuICB9XHJcblxyXG4gIGxvYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBvYmplY3QpIHtcclxuICAgIHRoaXMuX2xvYWRlckJ5dGVzID0gMDtcclxuICAgIHRoaXMuX3VybCA9IHVybDtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKSB7XHJcbiAgICB0aGlzLm9uRGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLm9uRW5kID0gbnVsbDtcclxuICAgIHRoaXMub25FcnJvciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0aXN0aWNzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbG9hZGVyQnl0ZXM6IHRoaXMuX2xvYWRlckJ5dGVzLFxyXG4gICAgICBjZG5CeXRlczogdGhpcy5fbG9hZGVyQnl0ZXMsXHJcbiAgICAgIHAycEJ5dGVzOiAwXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9vbkRhdGEoYnVmZmVyOiBBcnJheUJ1ZmZlcikge1xyXG4gICAgaWYgKGJ1ZmZlcikge1xyXG4gICAgICB0aGlzLl9sb2FkZXJCeXRlcyArPSBidWZmZXIuYnl0ZUxlbmd0aDtcclxuICAgICAgdGhpcy5vbkRhdGEgJiYgdGhpcy5vbkRhdGEoYnVmZmVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfb25SZWRpcmVjdFVybChyZWRpcmVjdFVybCkge1xyXG4gICAgdGhpcy5fcmVkaXJlY3RVcmwgPSByZWRpcmVjdFVybDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfb25FcnJvcihyZWFzb24pIHtcclxuICAgIHRoaXMub25FcnJvciAmJiB0aGlzLm9uRXJyb3IocmVhc29uKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saXZlL2xvYWRlci9iYXNlLWxvYWRlci50cyIsImV4cG9ydCBpbnRlcmZhY2UgSUxvYWRlciB7XHJcbiAgb25EYXRhOiAoYnVmZmVyOiBBcnJheUJ1ZmZlcikgPT4gdm9pZDtcclxuICBvbkVuZDogKCkgPT4gdm9pZDtcclxuICBvbkVycm9yOiAocmVhc29uPykgPT4gdm9pZDtcclxuXHJcbiAgbG9hZCh1cmw6IHN0cmluZywgb3B0aW9ucz86IG9iamVjdCk7XHJcbiAgZGlzcG9zZSgpO1xyXG4gIGdldFN0YXRpc3RpY3MoKToge1xyXG4gICAgbG9hZGVyQnl0ZXM6IG51bWJlcjtcclxuICAgIGNkbkJ5dGVzOiBudW1iZXI7XHJcbiAgICBwMnBCeXRlczogbnVtYmVyO1xyXG4gIH07XHJcblxyXG4gIHJlYWRvbmx5IHVybDogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IHJlZGlyZWN0VXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJhc2VMb2FkZXIgfSBmcm9tIFwiLi9iYXNlLWxvYWRlclwiO1xyXG5cclxuZXhwb3J0IHsgRmV0Y2hTdHJlYW1Mb2FkZXIgfSBmcm9tIFwiLi9mZXRjaC1zdHJlYW0tbG9hZGVyXCI7XHJcblxyXG5leHBvcnQgeyBNb3pDaHVua2VkTG9hZGVyIH0gZnJvbSBcIi4veGhyLW1vei1jaHVua2VkLWxvYWRlclwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGl2ZS9sb2FkZXIvaW5kZXgudHMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQmlsaWJpbGkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIEBhdXRob3IgemhlbmcgcWlhbiA8eHFxQHhxcS5pbT5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5sZXQgQnJvd3NlciA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZGV0ZWN0KCkge1xyXG4gICAgLy8gbW9kaWZpZWQgZnJvbSBqcXVlcnktYnJvd3Nlci1wbHVnaW5cclxuXHJcbiAgICBsZXQgdWEgPSBzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBsZXQgbWF0Y2ggPSAvKGVkZ2UpXFwvKFtcXHcuXSspLy5leGVjKHVhKSB8fFxyXG4gICAgICAgIC8ob3ByKVtcXC9dKFtcXHcuXSspLy5leGVjKHVhKSB8fFxyXG4gICAgICAgIC8oY2hyb21lKVsgXFwvXShbXFx3Ll0rKS8uZXhlYyh1YSkgfHxcclxuICAgICAgICAvKGllbW9iaWxlKVtcXC9dKFtcXHcuXSspLy5leGVjKHVhKSB8fFxyXG4gICAgICAgIC8odmVyc2lvbikoYXBwbGV3ZWJraXQpWyBcXC9dKFtcXHcuXSspLiooc2FmYXJpKVsgXFwvXShbXFx3Ll0rKS8uZXhlYyh1YSkgfHxcclxuICAgICAgICAvKHdlYmtpdClbIFxcL10oW1xcdy5dKykuKih2ZXJzaW9uKVsgXFwvXShbXFx3Ll0rKS4qKHNhZmFyaSlbIFxcL10oW1xcdy5dKykvLmV4ZWModWEpIHx8XHJcbiAgICAgICAgLyh3ZWJraXQpWyBcXC9dKFtcXHcuXSspLy5leGVjKHVhKSB8fFxyXG4gICAgICAgIC8ob3BlcmEpKD86Lip2ZXJzaW9ufClbIFxcL10oW1xcdy5dKykvLmV4ZWModWEpIHx8XHJcbiAgICAgICAgLyhtc2llKSAoW1xcdy5dKykvLmV4ZWModWEpIHx8XHJcbiAgICAgICAgdWEuaW5kZXhPZigndHJpZGVudCcpID49IDAgJiYgLyhydikoPzo6fCApKFtcXHcuXSspLy5leGVjKHVhKSB8fFxyXG4gICAgICAgIHVhLmluZGV4T2YoJ2NvbXBhdGlibGUnKSA8IDAgJiYgLyhmaXJlZm94KVsgXFwvXShbXFx3Ll0rKS8uZXhlYyh1YSkgfHxcclxuICAgICAgICBbXTtcclxuXHJcbiAgICBsZXQgcGxhdGZvcm1fbWF0Y2ggPSAvKGlwYWQpLy5leGVjKHVhKSB8fFxyXG4gICAgICAgIC8oaXBvZCkvLmV4ZWModWEpIHx8XHJcbiAgICAgICAgLyh3aW5kb3dzIHBob25lKS8uZXhlYyh1YSkgfHxcclxuICAgICAgICAvKGlwaG9uZSkvLmV4ZWModWEpIHx8XHJcbiAgICAgICAgLyhraW5kbGUpLy5leGVjKHVhKSB8fFxyXG4gICAgICAgIC8oYW5kcm9pZCkvLmV4ZWModWEpIHx8XHJcbiAgICAgICAgLyh3aW5kb3dzKS8uZXhlYyh1YSkgfHxcclxuICAgICAgICAvKG1hYykvLmV4ZWModWEpIHx8XHJcbiAgICAgICAgLyhsaW51eCkvLmV4ZWModWEpIHx8XHJcbiAgICAgICAgLyhjcm9zKS8uZXhlYyh1YSkgfHxcclxuICAgICAgICBbXTtcclxuXHJcbiAgICBsZXQgbWF0Y2hlZCA9IHtcclxuICAgICAgICBicm93c2VyOiBtYXRjaFs1XSB8fCBtYXRjaFszXSB8fCBtYXRjaFsxXSB8fCAnJyxcclxuICAgICAgICB2ZXJzaW9uOiBtYXRjaFsyXSB8fCBtYXRjaFs0XSB8fCAnMCcsXHJcbiAgICAgICAgbWFqb3JWZXJzaW9uOiBtYXRjaFs0XSB8fCBtYXRjaFsyXSB8fCAnMCcsXHJcbiAgICAgICAgcGxhdGZvcm06IHBsYXRmb3JtX21hdGNoWzBdIHx8ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBicm93c2VyID0ge307XHJcbiAgICBpZiAobWF0Y2hlZC5icm93c2VyKSB7XHJcbiAgICAgICAgYnJvd3NlclttYXRjaGVkLmJyb3dzZXJdID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHZlcnNpb25BcnJheSA9IG1hdGNoZWQubWFqb3JWZXJzaW9uLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgYnJvd3Nlci52ZXJzaW9uID0ge1xyXG4gICAgICAgICAgICBtYWpvcjogcGFyc2VJbnQobWF0Y2hlZC5tYWpvclZlcnNpb24sIDEwKSxcclxuICAgICAgICAgICAgc3RyaW5nOiBtYXRjaGVkLnZlcnNpb25cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh2ZXJzaW9uQXJyYXkubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBicm93c2VyLnZlcnNpb24ubWlub3IgPSBwYXJzZUludCh2ZXJzaW9uQXJyYXlbMV0sIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZlcnNpb25BcnJheS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXIudmVyc2lvbi5idWlsZCA9IHBhcnNlSW50KHZlcnNpb25BcnJheVsyXSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF0Y2hlZC5wbGF0Zm9ybSkge1xyXG4gICAgICAgIGJyb3dzZXJbbWF0Y2hlZC5wbGF0Zm9ybV0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChicm93c2VyLmNocm9tZSB8fCBicm93c2VyLm9wciB8fCBicm93c2VyLnNhZmFyaSkge1xyXG4gICAgICAgIGJyb3dzZXIud2Via2l0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNU0lFLiBJRTExIGhhcyAncnYnIGlkZW50aWZlclxyXG4gICAgaWYgKGJyb3dzZXIucnYgfHwgYnJvd3Nlci5pZW1vYmlsZSkge1xyXG4gICAgICAgIGlmIChicm93c2VyLnJ2KSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBicm93c2VyLnJ2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbXNpZSA9ICdtc2llJztcclxuICAgICAgICBtYXRjaGVkLmJyb3dzZXIgPSBtc2llO1xyXG4gICAgICAgIGJyb3dzZXJbbXNpZV0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1pY3Jvc29mdCBFZGdlXHJcbiAgICBpZiAoYnJvd3Nlci5lZGdlKSB7XHJcbiAgICAgICAgZGVsZXRlIGJyb3dzZXIuZWRnZTtcclxuICAgICAgICBsZXQgbXNlZGdlID0gJ21zZWRnZSc7XHJcbiAgICAgICAgbWF0Y2hlZC5icm93c2VyID0gbXNlZGdlO1xyXG4gICAgICAgIGJyb3dzZXJbbXNlZGdlXSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3BlcmEgMTUrXHJcbiAgICBpZiAoYnJvd3Nlci5vcHIpIHtcclxuICAgICAgICBsZXQgb3BlcmEgPSAnb3BlcmEnO1xyXG4gICAgICAgIG1hdGNoZWQuYnJvd3NlciA9IG9wZXJhO1xyXG4gICAgICAgIGJyb3dzZXJbb3BlcmFdID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdG9jayBhbmRyb2lkIGJyb3dzZXJzIGFyZSBtYXJrZWQgYXMgU2FmYXJpXHJcbiAgICBpZiAoYnJvd3Nlci5zYWZhcmkgJiYgYnJvd3Nlci5hbmRyb2lkKSB7XHJcbiAgICAgICAgbGV0IGFuZHJvaWQgPSAnYW5kcm9pZCc7XHJcbiAgICAgICAgbWF0Y2hlZC5icm93c2VyID0gYW5kcm9pZDtcclxuICAgICAgICBicm93c2VyW2FuZHJvaWRdID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBicm93c2VyLm5hbWUgPSBtYXRjaGVkLmJyb3dzZXI7XHJcbiAgICBicm93c2VyLnBsYXRmb3JtID0gbWF0Y2hlZC5wbGF0Zm9ybTtcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gQnJvd3Nlcikge1xyXG4gICAgICAgIGlmIChCcm93c2VyLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgZGVsZXRlIEJyb3dzZXJba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBPYmplY3QuYXNzaWduKEJyb3dzZXIsIGJyb3dzZXIpO1xyXG59XHJcblxyXG5kZXRlY3QoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJyb3dzZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saXZlL3V0aWwvYnJvd3Nlci5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoQykgMjAxNiBCaWxpYmlsaS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciB6aGVuZyBxaWFuIDx4cXFAeHFxLmltPlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5jbGFzcyBNZWRpYUluZm8ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWltZVR5cGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmhhc0F1ZGlvID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhhc1ZpZGVvID0gbnVsbDtcclxuICAgICAgICB0aGlzLmF1ZGlvQ29kZWMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmlkZW9Db2RlYyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdWRpb0RhdGFSYXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZpZGVvRGF0YVJhdGUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmF1ZGlvU2FtcGxlUmF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdWRpb0NoYW5uZWxDb3VudCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZwcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxldmVsID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNocm9tYUZvcm1hdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zYXJOdW0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2FyRGVuID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5tZXRhZGF0YSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IG51bGw7ICAvLyBNZWRpYUluZm9bXVxyXG4gICAgICAgIHRoaXMuc2VnbWVudENvdW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhhc0tleWZyYW1lc0luZGV4ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmtleWZyYW1lc0luZGV4ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpc0NvbXBsZXRlKCkge1xyXG4gICAgICAgIGxldCBhdWRpb0luZm9Db21wbGV0ZSA9ICh0aGlzLmhhc0F1ZGlvID09PSBmYWxzZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYXNBdWRpbyA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvQ29kZWMgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvU2FtcGxlUmF0ZSAhPSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9DaGFubmVsQ291bnQgIT0gbnVsbCk7XHJcblxyXG4gICAgICAgIGxldCB2aWRlb0luZm9Db21wbGV0ZSA9ICh0aGlzLmhhc1ZpZGVvID09PSBmYWxzZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYXNWaWRlbyA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQ29kZWMgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoICE9IG51bGwgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZwcyAhPSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZSAhPSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNocm9tYUZvcm1hdCAhPSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2FyTnVtICE9IG51bGwgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXJEZW4gIT0gbnVsbCk7XHJcblxyXG4gICAgICAgIC8vIGtleWZyYW1lc0luZGV4IG1heSBub3QgYmUgcHJlc2VudFxyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbWVUeXBlICE9IG51bGwgJiZcclxuICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiAhPSBudWxsICYmXHJcbiAgICAgICAgICAgICAgIHRoaXMubWV0YWRhdGEgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgICB0aGlzLmhhc0tleWZyYW1lc0luZGV4ICE9IG51bGwgJiZcclxuICAgICAgICAgICAgICAgYXVkaW9JbmZvQ29tcGxldGUgJiZcclxuICAgICAgICAgICAgICAgdmlkZW9JbmZvQ29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTZWVrYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXNLZXlmcmFtZXNJbmRleCA9PT0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZWFyZXN0S2V5ZnJhbWUobWlsbGlzZWNvbmRzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5ZnJhbWVzSW5kZXggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0YWJsZSA9IHRoaXMua2V5ZnJhbWVzSW5kZXg7XHJcbiAgICAgICAgbGV0IGtleWZyYW1lSWR4ID0gdGhpcy5fc2VhcmNoKHRhYmxlLnRpbWVzLCBtaWxsaXNlY29uZHMpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbmRleDoga2V5ZnJhbWVJZHgsXHJcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kczogdGFibGUudGltZXNba2V5ZnJhbWVJZHhdLFxyXG4gICAgICAgICAgICBmaWxlcG9zaXRpb246IHRhYmxlLmZpbGVwb3NpdGlvbnNba2V5ZnJhbWVJZHhdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfc2VhcmNoKGxpc3QsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGlkeCA9IDA7XHJcblxyXG4gICAgICAgIGxldCBsYXN0ID0gbGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgIGxldCBtaWQgPSAwO1xyXG4gICAgICAgIGxldCBsYm91bmQgPSAwO1xyXG4gICAgICAgIGxldCB1Ym91bmQgPSBsYXN0O1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPCBsaXN0WzBdKSB7XHJcbiAgICAgICAgICAgIGlkeCA9IDA7XHJcbiAgICAgICAgICAgIGxib3VuZCA9IHVib3VuZCArIDE7ICAvLyBza2lwIHNlYXJjaFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2hpbGUgKGxib3VuZCA8PSB1Ym91bmQpIHtcclxuICAgICAgICAgICAgbWlkID0gbGJvdW5kICsgTWF0aC5mbG9vcigodWJvdW5kIC0gbGJvdW5kKSAvIDIpO1xyXG4gICAgICAgICAgICBpZiAobWlkID09PSBsYXN0IHx8ICh2YWx1ZSA+PSBsaXN0W21pZF0gJiYgdmFsdWUgPCBsaXN0W21pZCArIDFdKSkge1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gbWlkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdFttaWRdIDwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGxib3VuZCA9IG1pZCArIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1Ym91bmQgPSBtaWQgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaWR4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVkaWFJbmZvO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGl2ZS9jb3JlL21lZGlhLWluZm8uanMiLCJpbXBvcnQgQnl0ZUFycmF5IGZyb20gXCIuLi9jb3JlL2J5dGUtYXJyYXlcIjtcclxuaW1wb3J0IEFNRiBmcm9tIFwiLi9hbWYtcGFyc2VyXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uL3V0aWwvbG9nZ2VyXCI7XHJcbmltcG9ydCBTUFNQYXJzZXIgZnJvbSBcIi4vc3BzLXBhcnNlclwiO1xyXG5pbXBvcnQgU0VJUGFyc2VyIGZyb20gJy4vc2VpLXBhcnNlcic7XHJcbmltcG9ydCBNZWRpYUluZm8gZnJvbSBcIi4uL2NvcmUvbWVkaWEtaW5mb1wiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb3JlL2NvbmZpZyc7XHJcbi8vIGltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnLi4vdXRpbC90aHJvdHRsZSc7XHJcbmltcG9ydCB7IER5RGVtdXhFcnJvciB9IGZyb20gXCIuLi9jb3JlL2Vycm9yXCI7XHJcbmltcG9ydCB7IElDb25maWcgfSBmcm9tIFwiLi4vY29yZS9saXZlLXBsYXllclwiO1xyXG5cclxuZW51bSBXYWl0U3RhdGUge1xyXG4gIFdBSVRfRkxWX0ZMQUcsXHJcbiAgV0FJVF9QUkVfVEFHX1NJWkUsXHJcbiAgV0FJVF9UQUdcclxufVxyXG5cclxuLyoqXHJcbiAqIEZsduWIhuemu+WZqFxyXG4gKiBcclxuICogQGF1dGhvciB3YW5neGluZ3dlaUBkb3V5dS50dlxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsdkRlbXV4ZXIge1xyXG4gIFRBRyA9IFwiRmx2RGVtdXhlclwiO1xyXG5cclxuICBvbkluaXQ6IChtZWRpYUluZm86IE1lZGlhSW5mbykgPT4gdm9pZDtcclxuXHJcbiAgb25UcmFja01ldGE6ICh0eXBlLCBtZXRhKSA9PiB2b2lkO1xyXG5cclxuICBvblRyYWNrRGF0YTogKGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2ssIGVuZD8pID0+IHZvaWQ7XHJcblxyXG4gIG9uRXJyb3I6IChtc2cpID0+IHZvaWQ7XHJcblxyXG4gIF9yZWZlcmVuY2VGcmFtZVJhdGUgPSB7XHJcbiAgICBmaXhlZDogdHJ1ZSxcclxuICAgIGZwczogMjMuOTc2LFxyXG4gICAgZnBzX251bTogMjM5NzYsXHJcbiAgICBmcHNfZGVuOiAxMDAwXHJcbiAgfTtcclxuXHJcbiAgX2ZsdlNvdW5kUmF0ZVRhYmxlID0gWzU1MDAsIDExMDI1LCAyMjA1MCwgNDQxMDAsIDQ4MDAwXTtcclxuICBcclxuICBfbXBlZ1NhbXBsaW5nUmF0ZXMgPSBbXHJcbiAgICAgIDk2MDAwLCA4ODIwMCwgNjQwMDAsIDQ4MDAwLCA0NDEwMCwgMzIwMDAsXHJcbiAgICAgIDI0MDAwLCAyMjA1MCwgMTYwMDAsIDEyMDAwLCAxMTAyNSwgODAwMCwgNzM1MFxyXG4gIF07XHJcblxyXG4gIF9tcGVnQXVkaW9WMTBTYW1wbGVSYXRlVGFibGUgPSBbNDQxMDAsIDQ4MDAwLCAzMjAwMCwgMF07XHJcbiAgX21wZWdBdWRpb1YyMFNhbXBsZVJhdGVUYWJsZSA9IFsyMjA1MCwgMjQwMDAsIDE2MDAwLCAwXTtcclxuICBfbXBlZ0F1ZGlvVjI1U2FtcGxlUmF0ZVRhYmxlID0gWzExMDI1LCAxMjAwMCwgODAwMCwgIDBdO1xyXG5cclxuICBfbXBlZ0F1ZGlvTDFCaXRSYXRlVGFibGUgPSBbMCwgMzIsIDY0LCA5NiwgMTI4LCAxNjAsIDE5MiwgMjI0LCAyNTYsIDI4OCwgMzIwLCAzNTIsIDM4NCwgNDE2LCA0NDgsIC0xXTtcclxuICBfbXBlZ0F1ZGlvTDJCaXRSYXRlVGFibGUgPSBbMCwgMzIsIDQ4LCA1NiwgIDY0LCAgODAsICA5NiwgMTEyLCAxMjgsIDE2MCwgMTkyLCAyMjQsIDI1NiwgMzIwLCAzODQsIC0xXTtcclxuICBfbXBlZ0F1ZGlvTDNCaXRSYXRlVGFibGUgPSBbMCwgMzIsIDQwLCA0OCwgIDU2LCAgNjQsICA4MCwgIDk2LCAxMTIsIDEyOCwgMTYwLCAxOTIsIDIyNCwgMjU2LCAzMjAsIC0xXTtcclxuXHJcbiAgX2J5dGVBcnJheTogQnl0ZUFycmF5ID0gbmV3IEJ5dGVBcnJheSh7IGluaXRMZW5ndGg6Q29uZmlnLnN0YXNoQnVmZmVyLCBhdXRvQ2xlYXI6dHJ1ZSB9KTtcclxuICAvL+W9k+WJjeino+aekOeKtuaAgVxyXG4gIF9zdGF0dXMgPSBXYWl0U3RhdGUuV0FJVF9GTFZfRkxBRztcclxuICAvL+ino+aekOWZqFxyXG4gIF9wYXJzZXI7ICBcclxuXHJcbiAgX3RpbWVzdGFtcEJhc2UgPSAwO1xyXG4gIF90aW1lc2NhbGUgPSAxMDAwO1xyXG4gIF9kdXJhdGlvbiA9IDA7XHJcbiAgX25hbHVMZW5ndGhTaXplID0gNDtcclxuXHJcbiAgX3ZpZGVvVHJhY2sgPSB7XHJcbiAgICB0eXBlOiBcInZpZGVvXCIsXHJcbiAgICBpZDogMSxcclxuICAgIHNlcXVlbmNlTnVtYmVyOiAwLFxyXG4gICAgc2FtcGxlczogW10sXHJcbiAgICBsZW5ndGg6IDAsXHJcbiAgICBzZWk6IHVuZGVmaW5lZFxyXG4gIH07XHJcbiAgX2F1ZGlvVHJhY2sgPSB7XHJcbiAgICB0eXBlOiBcImF1ZGlvXCIsXHJcbiAgICBpZDogMixcclxuICAgIHNlcXVlbmNlTnVtYmVyOiAwLFxyXG4gICAgc2FtcGxlczogW10sXHJcbiAgICBsZW5ndGg6IDBcclxuICB9O1xyXG5cclxuICBfdmlkZW9NZXRhO1xyXG4gIF9hdWRpb01ldGE7XHJcblxyXG4gIF9hdWRpb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQgPSBmYWxzZTtcclxuICBfdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkID0gZmFsc2U7XHJcblxyXG4gIF9tZWRpYUluZm86IE1lZGlhSW5mbyA9IG5ldyBNZWRpYUluZm8oKTtcclxuXHJcbiAgX2NvbmZpZzogSUNvbmZpZztcclxuXHJcbiAgX2xhc3RQYXJzZVRpbWUgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6SUNvbmZpZykge1xyXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIHRoaXMub25Jbml0ID0gbnVsbDtcclxuICAgIHRoaXMub25UcmFja0RhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5vblRyYWNrTWV0YSA9IG51bGw7XHJcbiAgICB0aGlzLm9uRXJyb3IgPSBudWxsO1xyXG4gICAgaWYgKHRoaXMuX3BhcnNlcikge1xyXG4gICAgICB0aGlzLl9wYXJzZXIucmV0dXJuKCk7XHJcbiAgICAgIHRoaXMuX3BhcnNlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tZWRpYUluZm8gPSBudWxsO1xyXG4gICAgdGhpcy5fYXVkaW9NZXRhID0gbnVsbDtcclxuICAgIHRoaXMuX3ZpZGVvTWV0YSA9IG51bGw7XHJcbiAgICB0aGlzLl92aWRlb1RyYWNrID0gbnVsbDtcclxuICAgIHRoaXMuX2F1ZGlvVHJhY2sgPSBudWxsOyAgICBcclxuICAgIHRoaXMuX2J5dGVBcnJheSA9IG51bGw7XHJcbiAgICB0aGlzLl9hdWRpb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuX3ZpZGVvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kRGF0YShidWZmZXIpIHsgICAgICAgIFxyXG4gICAgdGhpcy5fYnl0ZUFycmF5LndyaXRlKGJ1ZmZlcik7XHJcbiAgICB0aGlzLl9wYXJzZURhdGEoKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZEVuZCgpIHtcclxuICAgIHRoaXMuX3BhcnNlRGF0YSh0cnVlLCB0cnVlKTtcclxuICAgIHRoaXMuX3BhcnNlciAmJiB0aGlzLl9wYXJzZXIucmV0dXJuKCk7XHJcbiAgfVxyXG5cclxuICBfcGFyc2VEYXRhKGZsdXNoID0gZmFsc2UsIGVuZCA9IGZhbHNlKSB7XHJcbiAgICBpZiAodGhpcy5fYnl0ZUFycmF5LmJ5dGVBdmFpbGFibGUgPiAwKSB7XHJcbiAgICAgIGlmICghdGhpcy5fcGFyc2VyKSB0aGlzLl9wYXJzZXIgPSB0aGlzLl9wYXJzZSgpO1xyXG4gICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICBpZiAoZmx1c2ggfHwgdGhpcy5fYnl0ZUFycmF5LmJ5dGVBdmFpbGFibGUgPiBDb25maWcuc3Rhc2hCdWZmZXIgfHwgbm93IC0gdGhpcy5fbGFzdFBhcnNlVGltZSA+IENvbmZpZy5zdGFzaFRpbWUpIHtcclxuICAgICAgICB0aGlzLl9wYXJzZXIubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuX2ZsdXNoKGVuZCk7XHJcbiAgICAgICAgdGhpcy5fbGFzdFBhcnNlVGltZSA9IG5vdztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgKl9wYXJzZSgpIHtcclxuICAgIHdoaWxlICgxKSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5fc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBXYWl0U3RhdGUuV0FJVF9GTFZfRkxBRzpcclxuICAgICAgICAgIC8vZmx2IGhlYWQgc2l6ZSA9IDlcclxuICAgICAgICAgIHdoaWxlICh0aGlzLl9ieXRlQXJyYXkuYnl0ZUF2YWlsYWJsZSA8IDkpIHlpZWxkO1xyXG4gICAgICAgICAgY29uc3QgZmx2ID0gdGhpcy5fYnl0ZUFycmF5LnJlYWRTdHJpbmcoMyk7IC8vRkxWXHJcbiAgICAgICAgICBpZiAoZmx2ICE9PSBcIkZMVlwiKSByZXR1cm4gdGhpcy5fZXJyb3IoYE5vdCB2YWxpZCBmbHYgZmlsZSA6ICR7Zmx2fWApO1xyXG4gICAgICAgICAgY29uc3QgdmVyID0gdGhpcy5fYnl0ZUFycmF5LnJlYWRVaW50OCgpOyAvL3ZlcnNpb24gOiAxXHJcbiAgICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9ieXRlQXJyYXkucmVhZFVpbnQ4KCk7IC8vaGFzIHZpZGVvL2F1ZGlvIHN0cmVhbVxyXG4gICAgICAgICAgdGhpcy5fbWVkaWFJbmZvLmhhc1ZpZGVvID0gISEoc3RyZWFtICYgMSk7XHJcbiAgICAgICAgICB0aGlzLl9tZWRpYUluZm8uaGFzQXVkaW8gPSAhIShzdHJlYW0gJiA0KTtcclxuICAgICAgICAgIC8vIG92ZXJyaWRlIGhhc1ZpZGVvIGhhc0F1ZGlvXHJcbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmhhc1ZpZGVvICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWVkaWFJbmZvLmhhc1ZpZGVvID0gdGhpcy5fY29uZmlnLmhhc1ZpZGVvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5oYXNBdWRpbyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21lZGlhSW5mby5oYXNBdWRpbyA9IHRoaXMuX2NvbmZpZy5oYXNBdWRpbztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuX2J5dGVBcnJheS5yZWFkKDQpOyAvL2hlYWQgc2l6ZSA6IDlcclxuICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IFdhaXRTdGF0ZS5XQUlUX1BSRV9UQUdfU0laRTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgV2FpdFN0YXRlLldBSVRfUFJFX1RBR19TSVpFOlxyXG4gICAgICAgICAgLy9wcmUgdGFnIHNpemUgPSA0XHJcbiAgICAgICAgICB3aGlsZSAodGhpcy5fYnl0ZUFycmF5LmJ5dGVBdmFpbGFibGUgPCA0KSB5aWVsZDtcclxuICAgICAgICAgIHRoaXMuX2J5dGVBcnJheS5yZWFkKDQpO1xyXG4gICAgICAgICAgdGhpcy5fc3RhdHVzID0gV2FpdFN0YXRlLldBSVRfVEFHO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBXYWl0U3RhdGUuV0FJVF9UQUc6XHJcbiAgICAgICAgICAvL3RhZyBoZWFkZXIgc2l6ZSA9IDExXHJcbiAgICAgICAgICB3aGlsZSAodGhpcy5fYnl0ZUFycmF5LmJ5dGVBdmFpbGFibGUgPCAxMSkgeWllbGQ7XHJcbiAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5fYnl0ZUFycmF5LnJlYWRVaW50OCgpO1xyXG4gICAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuX2J5dGVBcnJheS5yZWFkVWludDI0KCk7XHJcbiAgICAgICAgICBjb25zdCB0czEgPSB0aGlzLl9ieXRlQXJyYXkucmVhZFVpbnQyNCgpO1xyXG4gICAgICAgICAgY29uc3QgdHMyID0gdGhpcy5fYnl0ZUFycmF5LnJlYWRVaW50OCgpO1xyXG4gICAgICAgICAgY29uc3QgdHMgPSAodHMyIDw8IDI0KSB8IHRzMTsgICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCBzdHJlYW1JZCA9IHRoaXMuX2J5dGVBcnJheS5yZWFkVWludDI0KCk7XHJcbiAgICAgICAgICAvL2NoZWNrIGRhdGEgc2l6ZVxyXG4gICAgICAgICAgd2hpbGUgKHRoaXMuX2J5dGVBcnJheS5ieXRlQXZhaWxhYmxlIDwgc2l6ZSkgeWllbGQ7XHJcbiAgICAgICAgICBjb25zdCBieXRlUG9zaXRpb24gPSB0aGlzLl9ieXRlQXJyYXkuYnl0ZVBvc2l0aW9uO1xyXG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5fYnl0ZUFycmF5LnJlYWQoc2l6ZSk7XHJcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAweDg6XHJcbiAgICAgICAgICAgICAgLy9hdWRpb1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWcuaGFzQXVkaW8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5oYXNBdWRpbyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZWRpYUluZm8uaGFzQXVkaW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLl9wYXJzZUF1ZGlvKGJ1ZmZlciwgdHMpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDB4OTpcclxuICAgICAgICAgICAgICAvL3ZpZGVvXHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5oYXNWaWRlbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmhhc1ZpZGVvID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21lZGlhSW5mby5oYXNWaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuX3BhcnNlVmlkZW8oYnVmZmVyLCB0cywgYnl0ZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAweDEyOlxyXG4gICAgICAgICAgICAgIC8vc2NyaXB0XHJcbiAgICAgICAgICAgICAgdGhpcy5fcGFyc2VTY3JpcHQoYnVmZmVyKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAvLyB1bnN1cHBvcnQgdHlwZVxyXG4gICAgICAgICAgICAgIGxvZ2dlci53YXJuKCd1bnN1cHBvcnQgZmx2IHRhZyB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBXYWl0U3RhdGUuV0FJVF9QUkVfVEFHX1NJWkU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29uSW5pdChtZWRpYUluZm86IE1lZGlhSW5mbykge1xyXG4gICAgY29uc3QgbWkgPSBPYmplY3QuYXNzaWduKG5ldyBNZWRpYUluZm8oKSwgbWVkaWFJbmZvKTsgLy8gY2xvbmVcclxuICAgIHRoaXMub25Jbml0ICYmIHRoaXMub25Jbml0KG1pKVxyXG4gIH1cclxuXHJcbiAgX2ZsdXNoKGVuZCA9IGZhbHNlKSB7XHJcbiAgICBpZiAodGhpcy5fbWVkaWFJbmZvLmlzQ29tcGxldGUoKSAmJiAodGhpcy5fYXVkaW9UcmFjay5sZW5ndGggfHwgdGhpcy5fdmlkZW9UcmFjay5sZW5ndGggfHwgZW5kKSkge1xyXG4gICAgICB0aGlzLm9uVHJhY2tEYXRhICYmIHRoaXMub25UcmFja0RhdGEodGhpcy5fYXVkaW9UcmFjaywgdGhpcy5fdmlkZW9UcmFjaywgZW5kKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9lcnJvcihtc2cpIHtcclxuICAgIGxvZ2dlci5lcnJvcihgWyR7dGhpcy5UQUd9XSAke21zZ31gKTtcclxuICAgIHRoaXMub25FcnJvciAmJiB0aGlzLm9uRXJyb3IobmV3IER5RGVtdXhFcnJvcihtc2cpKTtcclxuICB9XHJcblxyXG4gIF9wYXJzZUF1ZGlvKGJ1ZmZlciwgdHMpIHtcclxuICAgIGxldCBiYSA9IG5ldyBCeXRlQXJyYXkoeyBidWZmZXIgfSk7XHJcbiAgICBsZXQgaGVhZGVyID0gYmEucmVhZFVpbnQ4KCk7XHJcbiAgICAvKiog6Z+z6aKR57yW56CB57G75Z6LXHJcbiAgICAgIDBcclxuICAgICAgTGluZWFyIFBDTe+8jHBsYXRmb3JtIGVuZGlhblxyXG4gICAgICAxXHJcbiAgICAgIEFEUENNXHJcbiAgICAgIDJcclxuICAgICAgTVAzXHJcbiAgICAgIDNcclxuICAgICAgTGluZWFyIFBDTe+8jGxpdHRsZSBlbmRpYW5cclxuICAgICAgNFxyXG4gICAgICBOZWxseW1vc2VyIDE2LWtIeiBtb25vXHJcbiAgICAgIDVcclxuICAgICAgTmVsbHltb3NlciA4LWtIeiBtb25vXHJcbiAgICAgIDZcclxuICAgICAgTmVsbHltb3NlclxyXG4gICAgICA3XHJcbiAgICAgIEcuNzExIEEtbGF3IGxvZ2FyaXRobWljIFBDTVxyXG4gICAgICA4XHJcbiAgICAgIEcuNzExIG11LWxhdyBsb2dhcml0aG1pYyBQQ01cclxuICAgICAgOVxyXG4gICAgICByZXNlcnZlZFxyXG4gICAgICAxMFxyXG4gICAgICBBQUNcclxuICAgICAgMTRcclxuICAgICAgTVAzIDgtS2h6XHJcbiAgICAgIDE1XHJcbiAgICAgIERldmljZS1zcGVjaWZpYyBzb3VuZCAgICAgXHJcbiAgICAgKi9cclxuICAgIGxldCB0eXBlID0gKGhlYWRlciAmIDBiMTExMTAwMDApID4+IDQ7XHJcbiAgICAvKiog6Z+z6aKR6YeH5qC3546HXHJcbiAgICAgIDBcclxuICAgICAgNS41a0h6XHJcbiAgICAgIDFcclxuICAgICAgMTFLSHpcclxuICAgICAgMlxyXG4gICAgICAyMiBrSHpcclxuICAgICAgMyAoRm9yIEFBQzogYWx3YXlzIDMpXHJcbiAgICAgIDQ0IGtIeiAgICAgXHJcbiAgICAgKi9cclxuICAgIGxldCByYXRlID0gKGhlYWRlciAmIDBiMTEwMCkgPj4gMjtcclxuICAgIC8qKiDpn7PpopHph4fmoLfnsr7luqZcclxuICAgICAgMFxyXG4gICAgICA4Yml0c1xyXG4gICAgICAxXHJcbiAgICAgIDE2Yml0c1xyXG4gICAgICovXHJcbiAgICBsZXQgZGVwdGggPSAoaGVhZGVyICYgMGIxMCkgPj4gMTtcclxuICAgIC8qKiDpn7PpopHnsbvlnotcclxuICAgICAgMFxyXG4gICAgICBzbmRNb25vXHJcbiAgICAgIDFcclxuICAgICAgc25kU3RlcmVvICAgICBcclxuICAgICAqL1xyXG4gICAgbGV0IGNoYW5uZWwgPSBoZWFkZXIgJiAwYjE7XHJcbiAgICAvLyDpn7PpopHmlbDmja5cclxuICAgIGxldCBkYXRhID0gYmEucmVhZChiYS5ieXRlQXZhaWxhYmxlKTtcclxuXHJcbiAgICBsZXQgbWV0YSA9IHRoaXMuX2F1ZGlvTWV0YTtcclxuICAgIGxldCB0cmFjayA9IHRoaXMuX2F1ZGlvVHJhY2s7XHJcbiAgICBpZiAoIW1ldGEpIHtcclxuICAgICAgLy9pbml0IG1ldGFcclxuICAgICAgbWV0YSA9IHRoaXMuX2F1ZGlvTWV0YSA9IHt9O1xyXG4gICAgICBtZXRhLnR5cGUgPSB0cmFjay50eXBlO1xyXG4gICAgICBtZXRhLmlkID0gdHJhY2suaWQ7XHJcbiAgICAgIG1ldGEudGltZXNjYWxlID0gdGhpcy5fdGltZXNjYWxlO1xyXG4gICAgICBtZXRhLmR1cmF0aW9uID0gdGhpcy5fZHVyYXRpb247XHJcbiAgICAgIG1ldGEuYXVkaW9TYW1wbGVSYXRlID0gdGhpcy5fZmx2U291bmRSYXRlVGFibGVbcmF0ZV07XHJcbiAgICAgIG1ldGEuY2hhbm5lbENvdW50ID0gY2hhbm5lbCA9PT0gMCA/IDEgOiAyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAxMCkge1xyXG4gICAgICAvL0FBQ1xyXG4gICAgICBsZXQgYWFjRGF0YSA9IHRoaXMuX3BhcnNlQUFDQXVkaW9EYXRhKGRhdGEsIDAsIGRhdGEuYnl0ZUxlbmd0aCk7XHJcbiAgICAgIGlmICghYWFjRGF0YSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGFhY0RhdGEucGFja2V0VHlwZSA9PT0gMCkge1xyXG4gICAgICAgIC8vIEFBQyBzZXF1ZW5jZSBoZWFkZXIgKEF1ZGlvU3BlY2lmaWNDb25maWcpXHJcbiAgICAgICAgaWYgKG1ldGEuY29uZmlnKSB7XHJcbiAgICAgICAgICBsb2dnZXIud2Fybih0aGlzLlRBRywgXCJGb3VuZCBhbm90aGVyIEF1ZGlvU3BlY2lmaWNDb25maWchXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWlzYyA9IGFhY0RhdGEuZGF0YTtcclxuICAgICAgICBtZXRhLmF1ZGlvU2FtcGxlUmF0ZSA9IG1pc2Muc2FtcGxpbmdSYXRlO1xyXG4gICAgICAgIG1ldGEuY2hhbm5lbENvdW50ID0gbWlzYy5jaGFubmVsQ291bnQ7XHJcbiAgICAgICAgbWV0YS5jb2RlYyA9IG1pc2MuY29kZWM7XHJcbiAgICAgICAgbWV0YS5vcmlnaW5hbENvZGVjID0gbWlzYy5vcmlnaW5hbENvZGVjO1xyXG4gICAgICAgIG1ldGEuY29uZmlnID0gbWlzYy5jb25maWc7XHJcbiAgICAgICAgLy8gVGhlIGRlY29kZSByZXN1bHQgb2YgYW4gYWFjIHNhbXBsZSBpcyAxMDI0IFBDTSBzYW1wbGVzXHJcbiAgICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IDEwMjQgLyBtZXRhLmF1ZGlvU2FtcGxlUmF0ZSAqIG1ldGEudGltZXNjYWxlO1xyXG4gICAgICAgIGxvZ2dlci5sb2codGhpcy5UQUcsIFwiUGFyc2VkIEF1ZGlvU3BlY2lmaWNDb25maWdcIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hdWRpb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQpIHtcclxuICAgICAgICAgIC8vIE5vbi1pbml0aWFsIG1ldGFkYXRhLCBmb3JjZSBkaXNwYXRjaCAob3IgZmx1c2gpIHBhcnNlZCBmcmFtZXMgdG8gcmVtdXhlclxyXG4gICAgICAgICAgdGhpcy5fZmx1c2goKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vblRyYWNrTWV0YSAmJiB0aGlzLm9uVHJhY2tNZXRhKFwiYXVkaW9cIiwgbWV0YSk7XHJcblxyXG4gICAgICAgIGxldCBtaSA9IHRoaXMuX21lZGlhSW5mbztcclxuICAgICAgICBtaS5hdWRpb0NvZGVjID0gbWV0YS5vcmlnaW5hbENvZGVjO1xyXG4gICAgICAgIG1pLmF1ZGlvU2FtcGxlUmF0ZSA9IG1ldGEuYXVkaW9TYW1wbGVSYXRlO1xyXG4gICAgICAgIG1pLmF1ZGlvQ2hhbm5lbENvdW50ID0gbWV0YS5jaGFubmVsQ291bnQ7XHJcbiAgICAgICAgaWYgKG1pLmhhc1ZpZGVvKSB7XHJcbiAgICAgICAgICBpZiAobWkudmlkZW9Db2RlYyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG1pLm1pbWVUeXBlID1cclxuICAgICAgICAgICAgICAndmlkZW8veC1mbHY7IGNvZGVjcz1cIicgK1xyXG4gICAgICAgICAgICAgIG1pLnZpZGVvQ29kZWMgK1xyXG4gICAgICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgICAgICBtaS5hdWRpb0NvZGVjICtcclxuICAgICAgICAgICAgICAnXCInO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtaS5taW1lVHlwZSA9ICd2aWRlby94LWZsdjsgY29kZWNzPVwiJyArIG1pLmF1ZGlvQ29kZWMgKyAnXCInO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWkuaXNDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICB0aGlzLl9vbkluaXQobWkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChhYWNEYXRhLnBhY2tldFR5cGUgPT09IDEpIHtcclxuICAgICAgICAvLyBBQUMgcmF3IGZyYW1lIGRhdGFcclxuICAgICAgICBsZXQgZHRzID0gdGhpcy5fdGltZXN0YW1wQmFzZSArIHRzO1xyXG4gICAgICAgIGxldCBhYWNTYW1wbGUgPSB7IHVuaXQ6IGFhY0RhdGEuZGF0YSwgZHRzOiBkdHMsIHB0czogZHRzLCBjdHM6IDAgfTtcclxuICAgICAgICB0cmFjay5zYW1wbGVzLnB1c2goYWFjU2FtcGxlKTtcclxuICAgICAgICB0cmFjay5sZW5ndGggKz0gYWFjRGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoXHJcbiAgICAgICAgICB0aGlzLlRBRyxcclxuICAgICAgICAgIGBGbHY6IFVuc3VwcG9ydGVkIEFBQyBkYXRhIHR5cGUgJHthYWNEYXRhLnBhY2tldFR5cGV9YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gMikge1xyXG4gICAgICAvL01QM1xyXG4gICAgICBpZiAoIW1ldGEuY29kZWMpIHtcclxuICAgICAgICAvLyBXZSBuZWVkIG1ldGFkYXRhIGZvciBtcDMgYXVkaW8gdHJhY2ssIGV4dHJhY3QgaW5mbyBmcm9tIGZyYW1lIGhlYWRlclxyXG4gICAgICAgIGxldCBtaXNjID0gdGhpcy5fcGFyc2VNUDNBdWRpb0RhdGEoZGF0YSwgMCwgZGF0YS5ieXRlTGVuZ3RoLCB0cnVlKTtcclxuICAgICAgICBpZiAoIW1pc2MpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0YS5hdWRpb1NhbXBsZVJhdGUgPSBtaXNjLnNhbXBsaW5nUmF0ZTtcclxuICAgICAgICBtZXRhLmNoYW5uZWxDb3VudCA9IG1pc2MuY2hhbm5lbENvdW50O1xyXG4gICAgICAgIG1ldGEuY29kZWMgPSBtaXNjLmNvZGVjO1xyXG4gICAgICAgIG1ldGEub3JpZ2luYWxDb2RlYyA9IG1pc2Mub3JpZ2luYWxDb2RlYztcclxuICAgICAgICAvLyBUaGUgZGVjb2RlIHJlc3VsdCBvZiBhbiBtcDMgc2FtcGxlIGlzIDExNTIgUENNIHNhbXBsZXNcclxuICAgICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gMTE1MiAvIG1ldGEuYXVkaW9TYW1wbGVSYXRlICogbWV0YS50aW1lc2NhbGU7XHJcbiAgICAgICAgbG9nZ2VyLmxvZyh0aGlzLlRBRywgXCJQYXJzZWQgTVBFRyBBdWRpbyBGcmFtZSBIZWFkZXJcIik7XHJcblxyXG4gICAgICAgIHRoaXMuX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vblRyYWNrTWV0YSAmJiB0aGlzLm9uVHJhY2tNZXRhKFwiYXVkaW9cIiwgbWV0YSk7XHJcblxyXG4gICAgICAgIGxldCBtaSA9IHRoaXMuX21lZGlhSW5mbztcclxuICAgICAgICBtaS5hdWRpb0NvZGVjID0gbWV0YS5jb2RlYztcclxuICAgICAgICBtaS5hdWRpb1NhbXBsZVJhdGUgPSBtZXRhLmF1ZGlvU2FtcGxlUmF0ZTtcclxuICAgICAgICBtaS5hdWRpb0NoYW5uZWxDb3VudCA9IG1ldGEuY2hhbm5lbENvdW50O1xyXG4gICAgICAgIG1pLmF1ZGlvRGF0YVJhdGUgPSBtaXNjLmJpdFJhdGU7XHJcbiAgICAgICAgaWYgKG1pLmhhc1ZpZGVvKSB7XHJcbiAgICAgICAgICBpZiAobWkudmlkZW9Db2RlYyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG1pLm1pbWVUeXBlID1cclxuICAgICAgICAgICAgICAndmlkZW8veC1mbHY7IGNvZGVjcz1cIicgK1xyXG4gICAgICAgICAgICAgIG1pLnZpZGVvQ29kZWMgK1xyXG4gICAgICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgICAgICBtaS5hdWRpb0NvZGVjICtcclxuICAgICAgICAgICAgICAnXCInO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtaS5taW1lVHlwZSA9ICd2aWRlby94LWZsdjsgY29kZWNzPVwiJyArIG1pLmF1ZGlvQ29kZWMgKyAnXCInO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWkuaXNDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICB0aGlzLl9vbkluaXQobWkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhpcyBwYWNrZXQgaXMgYWx3YXlzIGEgdmFsaWQgYXVkaW8gcGFja2V0LCBleHRyYWN0IGl0XHJcbiAgICAgIGxldCBtcDMgPSB0aGlzLl9wYXJzZU1QM0F1ZGlvRGF0YShkYXRhLCAwLCBkYXRhLmJ5dGVMZW5ndGgsIGZhbHNlKTtcclxuICAgICAgaWYgKCFtcDMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGR0cyA9IHRoaXMuX3RpbWVzdGFtcEJhc2UgKyB0cztcclxuICAgICAgbGV0IG1wM1NhbXBsZSA9IHsgdW5pdDogbXAzLCBkdHM6IGR0cywgcHRzOiBkdHMsIGN0czogMCB9O1xyXG4gICAgICB0cmFjay5zYW1wbGVzLnB1c2gobXAzU2FtcGxlKTtcclxuICAgICAgdHJhY2subGVuZ3RoICs9IG1wMy5sZW5ndGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9lcnJvcihgdW5zdXBwb3J0IGF1ZGlvIHR5cGUgPSAke3R5cGV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfcGFyc2VWaWRlbyhidWZmZXIsIHRzLCBieXRlUG9zaXRpb24pIHtcclxuICAgIGxldCBiYSA9IG5ldyBCeXRlQXJyYXkoeyBidWZmZXIgfSk7XHJcbiAgICBsZXQgaGVhZGVyID0gYmEucmVhZFVpbnQ4KCk7XHJcbiAgICAvKiog5bin57G75Z6LXHJcbiAgICAgIDFcclxuICAgICAga2V5ZnJhbWUg77yIZm9yIEFWQ++8jGEgc2Vla2FibGUgZnJhbWXvvIlcclxuICAgICAgMlxyXG4gICAgICBpbnRlciBmcmFtZSDvvIhmb3IgQVZD77yMYSBub25zZWVrYWJsZSBmcmFtZe+8iVxyXG4gICAgICAzXHJcbiAgICAgIGRpc3Bvc2FibGUgaW50ZXIgZnJhbWUg77yISC4yNjMgb25see+8iVxyXG4gICAgICA0XHJcbiAgICAgIGdlbmVyYXRlZCBrZXlmcmFtZSDvvIhyZXNlcnZlZCBmb3Igc2VydmVyIHVzZe+8iVxyXG4gICAgICA1XHJcbiAgICAgIHZpZGVvIGluZm8vY29tbWFuZCBmcmFtZSAgICAgXHJcbiAgICAgKi9cclxuICAgIGxldCBmcmFtZVR5cGUgPSAoaGVhZGVyICYgMGIxMTExMDAwMCkgPj4gNDtcclxuICAgIC8qKiDop4bpopHnvJbnoIHnsbvlnotcclxuICAgICAgMVxyXG4gICAgICBKUEVHIO+8iGN1cnJlbnRseSB1bnVzZWTvvIlcclxuICAgICAgMlxyXG4gICAgICBTb3JlbnNvbiBILjI2M1xyXG4gICAgICAzXHJcbiAgICAgIFNjcmVlbiB2aWRlb1xyXG4gICAgICA0XHJcbiAgICAgIE9uMiBWUDZcclxuICAgICAgNVxyXG4gICAgICBPbjIgVlA2IHdpdGggYWxwaGEgY2hhbm5lbFxyXG4gICAgICA2XHJcbiAgICAgIFNjcmVlbiB2aWRlbyB2ZXJzaW9uIDJcclxuICAgICAgN1xyXG4gICAgICBBVkMgICAgIFxyXG4gICAgICovXHJcbiAgICBsZXQgY29kZWNUeXBlID0gaGVhZGVyICYgMGIxMTExO1xyXG4gICAgaWYgKGNvZGVjVHlwZSAhPT0gNykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoYHVuc3VwcG9ydCB2aWRlbyBjb2RlYyB0eXBlID0gJHtjb2RlY1R5cGV9YCk7XHJcbiAgICB9XHJcbiAgICAvL3BhcnNlIGF2YyB2aWRlbyBwYWNrZXRcclxuICAgIGxldCBkYXRhID0gYmEucmVhZChiYS5ieXRlQXZhaWxhYmxlKTtcclxuICAgIHRoaXMuX3BhcnNlQVZDVmlkZW9QYWNrZXQoXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIDAsXHJcbiAgICAgIGRhdGEuYnl0ZUxlbmd0aCxcclxuICAgICAgdHMsXHJcbiAgICAgIGJ5dGVQb3NpdGlvbixcclxuICAgICAgZnJhbWVUeXBlXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX3BhcnNlU2NyaXB0KGJ1ZmZlcikge1xyXG4gICAgLy9vbmx5IHdhbnQgbWV0YWRhdGFcclxuICAgIGNvbnN0IHNjcmlwdCA9IEFNRi5wYXJzZVNjcmlwdERhdGEoYnVmZmVyLCAwLCBidWZmZXIuYnl0ZUxlbmd0aCk7XHJcbiAgICBpZiAoXCJvbk1ldGFEYXRhXCIgaW4gc2NyaXB0KSB7XHJcbiAgICAgIGxldCBvbk1ldGFEYXRhID0gc2NyaXB0W1wib25NZXRhRGF0YVwiXTtcclxuICAgICAgaWYgKHR5cGVvZiBvbk1ldGFEYXRhLmF1ZGlvZGF0YXJhdGUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAvLyBhdWRpb2RhdGFyYXRlXHJcbiAgICAgICAgdGhpcy5fbWVkaWFJbmZvLmF1ZGlvRGF0YVJhdGUgPSBvbk1ldGFEYXRhLmF1ZGlvZGF0YXJhdGU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBvbk1ldGFEYXRhLnZpZGVvZGF0YXJhdGUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAvLyB2aWRlb2RhdGFyYXRlXHJcbiAgICAgICAgdGhpcy5fbWVkaWFJbmZvLnZpZGVvRGF0YVJhdGUgPSBvbk1ldGFEYXRhLnZpZGVvZGF0YXJhdGU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBvbk1ldGFEYXRhLndpZHRoID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgLy8gd2lkdGhcclxuICAgICAgICB0aGlzLl9tZWRpYUluZm8ud2lkdGggPSBvbk1ldGFEYXRhLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2Ygb25NZXRhRGF0YS5oZWlnaHQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAvLyBoZWlnaHRcclxuICAgICAgICB0aGlzLl9tZWRpYUluZm8uaGVpZ2h0ID0gb25NZXRhRGF0YS5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBvbk1ldGFEYXRhLmR1cmF0aW9uID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgLy8gZHVyYXRpb25cclxuICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IHRoaXMuX21lZGlhSW5mby5kdXJhdGlvbiA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgICBvbk1ldGFEYXRhLmR1cmF0aW9uICogdGhpcy5fdGltZXNjYWxlXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IHRoaXMuX21lZGlhSW5mby5kdXJhdGlvbiA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBvbk1ldGFEYXRhLmZyYW1lcmF0ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIC8vIGZyYW1lcmF0ZVxyXG4gICAgICAgIGxldCBmcHNfbnVtID0gTWF0aC5mbG9vcihvbk1ldGFEYXRhLmZyYW1lcmF0ZSAqIDEwMDApO1xyXG4gICAgICAgIGlmIChmcHNfbnVtID4gMCkge1xyXG4gICAgICAgICAgbGV0IGZwcyA9IGZwc19udW0gLyAxMDAwO1xyXG4gICAgICAgICAgdGhpcy5fcmVmZXJlbmNlRnJhbWVSYXRlLmZpeGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUZyYW1lUmF0ZS5mcHMgPSBmcHM7XHJcbiAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VGcmFtZVJhdGUuZnBzX251bSA9IGZwc19udW07XHJcbiAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VGcmFtZVJhdGUuZnBzX2RlbiA9IDEwMDA7XHJcbiAgICAgICAgICB0aGlzLl9tZWRpYUluZm8uZnBzID0gZnBzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIG9uTWV0YURhdGEua2V5ZnJhbWVzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgLy8ga2V5ZnJhbWVzXHJcbiAgICAgICAgdGhpcy5fbWVkaWFJbmZvLmhhc0tleWZyYW1lc0luZGV4ID0gdHJ1ZTtcclxuICAgICAgICBsZXQga2V5ZnJhbWVzID0gb25NZXRhRGF0YS5rZXlmcmFtZXM7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFJbmZvLmtleWZyYW1lc0luZGV4ID0gdGhpcy5fcGFyc2VLZXlmcmFtZXNJbmRleChrZXlmcmFtZXMpO1xyXG4gICAgICAgIG9uTWV0YURhdGEua2V5ZnJhbWVzID0gbnVsbDsgLy8ga2V5ZnJhbWVzIGhhcyBiZWVuIGV4dHJhY3RlZCwgcmVtb3ZlIGl0XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFJbmZvLmhhc0tleWZyYW1lc0luZGV4ID0gZmFsc2U7XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgdGhpcy5fbWVkaWFJbmZvLm1ldGFkYXRhID0gb25NZXRhRGF0YTtcclxuICAgICAgbG9nZ2VyLmxvZyh0aGlzLlRBRywgXCJQYXJzZWQgb25NZXRhRGF0YVwiKTtcclxuICAgICAgaWYgKHRoaXMuX21lZGlhSW5mby5pc0NvbXBsZXRlKCkpIHtcclxuICAgICAgICB0aGlzLl9vbkluaXQodGhpcy5fbWVkaWFJbmZvKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3BhcnNlS2V5ZnJhbWVzSW5kZXgoa2V5ZnJhbWVzKSB7XHJcbiAgICBsZXQgdGltZXMgPSBbXTtcclxuICAgIGxldCBmaWxlcG9zaXRpb25zID0gW107XHJcblxyXG4gICAgLy8gaWdub3JlIGZpcnN0IGtleWZyYW1lIHdoaWNoIGlzIGFjdHVhbGx5IEFWQyBTZXF1ZW5jZSBIZWFkZXIgKEFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkKVxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBrZXlmcmFtZXMudGltZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHRpbWUgPSB0aGlzLl90aW1lc3RhbXBCYXNlICsgTWF0aC5mbG9vcihrZXlmcmFtZXMudGltZXNbaV0gKiAxMDAwKTtcclxuICAgICAgdGltZXMucHVzaCh0aW1lKTtcclxuICAgICAgZmlsZXBvc2l0aW9ucy5wdXNoKGtleWZyYW1lcy5maWxlcG9zaXRpb25zW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aW1lczogdGltZXMsXHJcbiAgICAgIGZpbGVwb3NpdGlvbnM6IGZpbGVwb3NpdGlvbnNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBfcGFyc2VBQUNBdWRpb0RhdGEoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQsIGRhdGFTaXplKSB7XHJcbiAgICBpZiAoZGF0YVNpemUgPD0gMSkge1xyXG4gICAgICBsb2dnZXIud2FybihcclxuICAgICAgICB0aGlzLlRBRyxcclxuICAgICAgICBcIkZsdjogSW52YWxpZCBBQUMgcGFja2V0LCBtaXNzaW5nIEFBQ1BhY2tldFR5cGUgb3IvYW5kIERhdGEhXCJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xyXG4gICAgbGV0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQsIGRhdGFTaXplKTtcclxuXHJcbiAgICByZXN1bHQucGFja2V0VHlwZSA9IGFycmF5WzBdO1xyXG5cclxuICAgIGlmIChhcnJheVswXSA9PT0gMCkge1xyXG4gICAgICByZXN1bHQuZGF0YSA9IHRoaXMuX3BhcnNlQUFDQXVkaW9TcGVjaWZpY0NvbmZpZyhcclxuICAgICAgICBhcnJheUJ1ZmZlcixcclxuICAgICAgICBkYXRhT2Zmc2V0ICsgMSxcclxuICAgICAgICBkYXRhU2l6ZSAtIDFcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdC5kYXRhID0gYXJyYXkuc3ViYXJyYXkoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIF9wYXJzZUFBQ0F1ZGlvU3BlY2lmaWNDb25maWcoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQsIGRhdGFTaXplKSB7XHJcbiAgICBsZXQgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlciwgZGF0YU9mZnNldCwgZGF0YVNpemUpO1xyXG4gICAgbGV0IGNvbmZpZyA9IFtdLnNsaWNlLmNhbGwoYXJyYXkpO1xyXG5cclxuICAgIC8qIEF1ZGlvIE9iamVjdCBUeXBlOlxyXG4gICAgICAgMDogTnVsbFxyXG4gICAgICAgMTogQUFDIE1haW5cclxuICAgICAgIDI6IEFBQyBMQ1xyXG4gICAgICAgMzogQUFDIFNTUiAoU2NhbGFibGUgU2FtcGxlIFJhdGUpXHJcbiAgICAgICA0OiBBQUMgTFRQIChMb25nIFRlcm0gUHJlZGljdGlvbilcclxuICAgICAgIDU6IEhFLUFBQyAvIFNCUiAoU3BlY3RyYWwgQmFuZCBSZXBsaWNhdGlvbilcclxuICAgICAgIDY6IEFBQyBTY2FsYWJsZVxyXG4gICAgKi9cclxuXHJcbiAgICBsZXQgYXVkaW9PYmplY3RUeXBlID0gMDtcclxuICAgIGxldCBvcmlnaW5hbEF1ZGlvT2JqZWN0VHlwZSA9IDA7XHJcbiAgICBsZXQgYXVkaW9FeHRlbnNpb25PYmplY3RUeXBlID0gbnVsbDtcclxuICAgIGxldCBzYW1wbGluZ0luZGV4ID0gMDtcclxuICAgIGxldCBleHRlbnNpb25TYW1wbGluZ0luZGV4ID0gbnVsbDtcclxuXHJcbiAgICAvLyA1IGJpdHNcclxuICAgIGF1ZGlvT2JqZWN0VHlwZSA9IG9yaWdpbmFsQXVkaW9PYmplY3RUeXBlID0gYXJyYXlbMF0gPj4+IDM7XHJcbiAgICAvLyA0IGJpdHNcclxuICAgIHNhbXBsaW5nSW5kZXggPSAoKGFycmF5WzBdICYgMHgwNykgPDwgMSkgfCAoYXJyYXlbMV0gPj4+IDcpO1xyXG4gICAgaWYgKHNhbXBsaW5nSW5kZXggPCAwIHx8IHNhbXBsaW5nSW5kZXggPj0gdGhpcy5fbXBlZ1NhbXBsaW5nUmF0ZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX2Vycm9yKFwiRmx2OiBBQUMgaW52YWxpZCBzYW1wbGluZyBmcmVxdWVuY3kgaW5kZXghXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNhbXBsaW5nRnJlcXVlbmNlID0gdGhpcy5fbXBlZ1NhbXBsaW5nUmF0ZXNbc2FtcGxpbmdJbmRleF07XHJcblxyXG4gICAgLy8gNCBiaXRzXHJcbiAgICBsZXQgY2hhbm5lbENvbmZpZyA9IChhcnJheVsxXSAmIDB4NzgpID4+PiAzO1xyXG4gICAgaWYgKGNoYW5uZWxDb25maWcgPCAwIHx8IGNoYW5uZWxDb25maWcgPj0gOCkge1xyXG4gICAgICB0aGlzLl9lcnJvcihcIkZsdjogQUFDIGludmFsaWQgY2hhbm5lbCBjb25maWd1cmF0aW9uXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF1ZGlvT2JqZWN0VHlwZSA9PT0gNSkgeyAgLy8gSEUtQUFDP1xyXG4gICAgICAvLyA0IGJpdHNcclxuICAgICAgZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9ICgoYXJyYXlbMV0gJiAweDA3KSA8PCAxKSB8IChhcnJheVsyXSA+Pj4gNyk7XHJcbiAgICAgIC8vIDUgYml0c1xyXG4gICAgICBhdWRpb0V4dGVuc2lvbk9iamVjdFR5cGUgPSAoYXJyYXlbMl0gJiAweDdjKSA+Pj4gMjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3b3JrYXJvdW5kcyBmb3IgdmFyaW91cyBicm93c2Vyc1xyXG4gICAgbGV0IHVzZXJBZ2VudCA9IHNlbGYubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMSkge1xyXG4gICAgICAvLyBmaXJlZm94OiB1c2UgU0JSIChIRS1BQUMpIGlmIGZyZXEgbGVzcyB0aGFuIDI0a0h6XHJcbiAgICAgIGlmIChzYW1wbGluZ0luZGV4ID49IDYpIHtcclxuICAgICAgICBhdWRpb09iamVjdFR5cGUgPSA1O1xyXG4gICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSg0KTtcclxuICAgICAgICBleHRlbnNpb25TYW1wbGluZ0luZGV4ID0gc2FtcGxpbmdJbmRleCAtIDM7XHJcbiAgICAgIH0gZWxzZSB7ICAvLyB1c2UgTEMtQUFDXHJcbiAgICAgICAgYXVkaW9PYmplY3RUeXBlID0gMjtcclxuICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoMik7XHJcbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSW5kZXg7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSAhPT0gLTEpIHtcclxuICAgICAgLy8gYW5kcm9pZDogYWx3YXlzIHVzZSBMQy1BQUNcclxuICAgICAgYXVkaW9PYmplY3RUeXBlID0gMjtcclxuICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpO1xyXG4gICAgICBleHRlbnNpb25TYW1wbGluZ0luZGV4ID0gc2FtcGxpbmdJbmRleDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGZvciBvdGhlciBicm93c2VycywgZS5nLiBjaHJvbWUuLi5cclxuICAgICAgLy8gQWx3YXlzIHVzZSBIRS1BQUMgdG8gbWFrZSBpdCBlYXNpZXIgdG8gc3dpdGNoIGFhYyBjb2RlYyBwcm9maWxlXHJcbiAgICAgIGF1ZGlvT2JqZWN0VHlwZSA9IDU7XHJcbiAgICAgIGV4dGVuc2lvblNhbXBsaW5nSW5kZXggPSBzYW1wbGluZ0luZGV4O1xyXG4gICAgICBjb25maWcgPSBuZXcgQXJyYXkoNCk7XHJcblxyXG4gICAgICBpZiAoc2FtcGxpbmdJbmRleCA+PSA2KSB7XHJcbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSW5kZXggLSAzO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb25maWcgPT09IDEpIHsgIC8vIE1vbm8gY2hhbm5lbFxyXG4gICAgICAgIGF1ZGlvT2JqZWN0VHlwZSA9IDI7XHJcbiAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpO1xyXG4gICAgICAgIGV4dGVuc2lvblNhbXBsaW5nSW5kZXggPSBzYW1wbGluZ0luZGV4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnWzBdID0gYXVkaW9PYmplY3RUeXBlIDw8IDM7XHJcbiAgICBjb25maWdbMF0gfD0gKHNhbXBsaW5nSW5kZXggJiAweDBGKSA+Pj4gMTtcclxuICAgIGNvbmZpZ1sxXSA9IChzYW1wbGluZ0luZGV4ICYgMHgwRikgPDwgNztcclxuICAgIGNvbmZpZ1sxXSB8PSAoY2hhbm5lbENvbmZpZyAmIDB4MEYpIDw8IDM7XHJcbiAgICBpZiAoYXVkaW9PYmplY3RUeXBlID09PSA1KSB7XHJcbiAgICAgIGNvbmZpZ1sxXSB8PSAoKGV4dGVuc2lvblNhbXBsaW5nSW5kZXggJiAweDBGKSA+Pj4gMSk7XHJcbiAgICAgIGNvbmZpZ1syXSA9IChleHRlbnNpb25TYW1wbGluZ0luZGV4ICYgMHgwMSkgPDwgNztcclxuICAgICAgLy8gZXh0ZW5kZWQgYXVkaW8gb2JqZWN0IHR5cGU6IGZvcmNlIHRvIDIgKExDLUFBQylcclxuICAgICAgY29uZmlnWzJdIHw9ICgyIDw8IDIpO1xyXG4gICAgICBjb25maWdbM10gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbmZpZzogY29uZmlnLFxyXG4gICAgICBzYW1wbGluZ1JhdGU6IHNhbXBsaW5nRnJlcXVlbmNlLFxyXG4gICAgICBjaGFubmVsQ291bnQ6IGNoYW5uZWxDb25maWcsXHJcbiAgICAgIGNvZGVjOiBcIm1wNGEuNDAuXCIgKyBhdWRpb09iamVjdFR5cGUsXHJcbiAgICAgIG9yaWdpbmFsQ29kZWM6IFwibXA0YS40MC5cIiArIG9yaWdpbmFsQXVkaW9PYmplY3RUeXBlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgX3BhcnNlTVAzQXVkaW9EYXRhKGFycmF5QnVmZmVyLCBkYXRhT2Zmc2V0LCBkYXRhU2l6ZSwgcmVxdWVzdEhlYWRlcikge1xyXG4gICAgaWYgKGRhdGFTaXplIDwgNCkge1xyXG4gICAgICBsb2dnZXIud2Fybih0aGlzLlRBRywgXCJGbHY6IEludmFsaWQgTVAzIHBhY2tldCwgaGVhZGVyIG1pc3NpbmchXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQsIGRhdGFTaXplKTtcclxuICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG5cclxuICAgIGlmIChyZXF1ZXN0SGVhZGVyKSB7XHJcbiAgICAgIGlmIChhcnJheVswXSAhPT0gMHhmZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgdmVyID0gKGFycmF5WzFdID4+PiAzKSAmIDB4MDM7XHJcbiAgICAgIGxldCBsYXllciA9IChhcnJheVsxXSAmIDB4MDYpID4+IDE7XHJcblxyXG4gICAgICBsZXQgYml0cmF0ZV9pbmRleCA9IChhcnJheVsyXSAmIDB4ZjApID4+PiA0O1xyXG4gICAgICBsZXQgc2FtcGxpbmdfZnJlcV9pbmRleCA9IChhcnJheVsyXSAmIDB4MGMpID4+PiAyO1xyXG5cclxuICAgICAgbGV0IGNoYW5uZWxfbW9kZSA9IChhcnJheVszXSA+Pj4gNikgJiAweDAzO1xyXG4gICAgICBsZXQgY2hhbm5lbF9jb3VudCA9IGNoYW5uZWxfbW9kZSAhPT0gMyA/IDIgOiAxO1xyXG5cclxuICAgICAgbGV0IHNhbXBsZV9yYXRlID0gMDtcclxuICAgICAgbGV0IGJpdF9yYXRlID0gMDtcclxuICAgICAgbGV0IG9iamVjdF90eXBlID0gMzQ7IC8vIExheWVyLTMsIGxpc3RlZCBpbiBNUEVHLTQgQXVkaW8gT2JqZWN0IFR5cGVzXHJcblxyXG4gICAgICBsZXQgY29kZWMgPSBcIm1wM1wiO1xyXG5cclxuICAgICAgc3dpdGNoICh2ZXIpIHtcclxuICAgICAgICBjYXNlIDA6IC8vIE1QRUcgMi41XHJcbiAgICAgICAgICBzYW1wbGVfcmF0ZSA9IHRoaXMuX21wZWdBdWRpb1YyNVNhbXBsZVJhdGVUYWJsZVtzYW1wbGluZ19mcmVxX2luZGV4XTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjogLy8gTVBFRyAyXHJcbiAgICAgICAgICBzYW1wbGVfcmF0ZSA9IHRoaXMuX21wZWdBdWRpb1YyMFNhbXBsZVJhdGVUYWJsZVtzYW1wbGluZ19mcmVxX2luZGV4XTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzogLy8gTVBFRyAxXHJcbiAgICAgICAgICBzYW1wbGVfcmF0ZSA9IHRoaXMuX21wZWdBdWRpb1YxMFNhbXBsZVJhdGVUYWJsZVtzYW1wbGluZ19mcmVxX2luZGV4XTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzd2l0Y2ggKGxheWVyKSB7XHJcbiAgICAgICAgY2FzZSAxOiAvLyBMYXllciAzXHJcbiAgICAgICAgICBvYmplY3RfdHlwZSA9IDM0O1xyXG4gICAgICAgICAgaWYgKGJpdHJhdGVfaW5kZXggPCB0aGlzLl9tcGVnQXVkaW9MM0JpdFJhdGVUYWJsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYml0X3JhdGUgPSB0aGlzLl9tcGVnQXVkaW9MM0JpdFJhdGVUYWJsZVtiaXRyYXRlX2luZGV4XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjogLy8gTGF5ZXIgMlxyXG4gICAgICAgICAgb2JqZWN0X3R5cGUgPSAzMztcclxuICAgICAgICAgIGlmIChiaXRyYXRlX2luZGV4IDwgdGhpcy5fbXBlZ0F1ZGlvTDJCaXRSYXRlVGFibGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJpdF9yYXRlID0gdGhpcy5fbXBlZ0F1ZGlvTDJCaXRSYXRlVGFibGVbYml0cmF0ZV9pbmRleF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6IC8vIExheWVyIDFcclxuICAgICAgICAgIG9iamVjdF90eXBlID0gMzI7XHJcbiAgICAgICAgICBpZiAoYml0cmF0ZV9pbmRleCA8IHRoaXMuX21wZWdBdWRpb0wxQml0UmF0ZVRhYmxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBiaXRfcmF0ZSA9IHRoaXMuX21wZWdBdWRpb0wxQml0UmF0ZVRhYmxlW2JpdHJhdGVfaW5kZXhdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICBiaXRSYXRlOiBiaXRfcmF0ZSxcclxuICAgICAgICBzYW1wbGluZ1JhdGU6IHNhbXBsZV9yYXRlLFxyXG4gICAgICAgIGNoYW5uZWxDb3VudDogY2hhbm5lbF9jb3VudCxcclxuICAgICAgICBjb2RlYzogY29kZWMsXHJcbiAgICAgICAgb3JpZ2luYWxDb2RlYzogY29kZWNcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICog6I635Y+WU0VJ5L+h5oGvXHJcbiAqIOWmguaenOS4gOS4qnZpZGVvIHRhZ+aciVNFSeeahOivnSwg5Lya5pS+5Zyo56ys5LiA5LiqTkFMVVxyXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gZGF0YU9mZnNldFxyXG4gKiBAcGFyYW0ge051bWJlcn0gZGF0YVNpemVcclxuICovXHJcbiAgX3BhcnNlU0VJKGFycmF5QnVmZmVyLCBkYXRhT2Zmc2V0LCBkYXRhU2l6ZSkge1xyXG4gICAgY29uc3QgbGUgPSBCeXRlQXJyYXkubGl0dGxlRW5kaWFuO1xyXG4gICAgY29uc3QgdiA9IG5ldyBEYXRhVmlldyhhcnJheUJ1ZmZlciwgZGF0YU9mZnNldCwgZGF0YVNpemUpO1xyXG4gICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICBjb25zdCBsZW5ndGhTaXplID0gdGhpcy5fbmFsdUxlbmd0aFNpemU7XHJcbiAgICBpZiAob2Zmc2V0ICsgNCA+PSBkYXRhU2l6ZSkge1xyXG4gICAgICBsb2dnZXIud2Fybih0aGlzLlRBRywgJ01hbGZvcm1lZCBOYWx1Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBuYWx1U2l6ZSA9IHYuZ2V0VWludDMyKG9mZnNldCwgbGUpOyAgLy8gQmlnLUVuZGlhbiByZWFkXHJcbiAgICBpZiAobGVuZ3RoU2l6ZSA9PT0gMykge1xyXG4gICAgICBuYWx1U2l6ZSA+Pj49IDg7XHJcbiAgICB9XHJcbiAgICBpZiAobmFsdVNpemUgPiBkYXRhU2l6ZSAtIGxlbmd0aFNpemUpIHtcclxuICAgICAgbG9nZ2VyLndhcm4odGhpcy5UQUcsICdNYWxmb3JtZWQgTmFsdXMgbmVhciwgTmFsdVNpemUgPiBEYXRhU2l6ZSEnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdW5pdFR5cGUgPSB2LmdldFVpbnQ4KG9mZnNldCArIGxlbmd0aFNpemUpICYgMHgxRjtcclxuICAgIGlmICh1bml0VHlwZSA9PT0gNikgeyAgLy8gU0VJXHJcbiAgICAgIGNvbnN0IHNlaSA9IFNFSVBhcnNlci5wYXJzZVNFSShhcnJheUJ1ZmZlcik7XHJcbiAgICAgIHJldHVybiBzZWk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfcGFyc2VBVkNWaWRlb1BhY2tldChcclxuICAgIGFycmF5QnVmZmVyLFxyXG4gICAgZGF0YU9mZnNldCxcclxuICAgIGRhdGFTaXplLFxyXG4gICAgdGFnVGltZXN0YW1wLFxyXG4gICAgdGFnUG9zaXRpb24sXHJcbiAgICBmcmFtZVR5cGVcclxuICApIHtcclxuICAgIGlmIChkYXRhU2l6ZSA8IDQpIHtcclxuICAgICAgbG9nZ2VyLndhcm4oXHJcbiAgICAgICAgdGhpcy5UQUcsXHJcbiAgICAgICAgXCJGbHY6IEludmFsaWQgQVZDIHBhY2tldCwgbWlzc2luZyBBVkNQYWNrZXRUeXBlIG9yL2FuZCBDb21wb3NpdGlvblRpbWVcIlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGxlID0gQnl0ZUFycmF5LmxpdHRsZUVuZGlhbjtcclxuICAgIGxldCB2ID0gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyLCBkYXRhT2Zmc2V0LCBkYXRhU2l6ZSk7XHJcblxyXG4gICAgbGV0IHBhY2tldFR5cGUgPSB2LmdldFVpbnQ4KDApO1xyXG4gICAgbGV0IGN0c191bnNpZ25lZCA9IHYuZ2V0VWludDMyKDAsIGxlKSAmIDB4MDBGRkZGRkY7XHJcbiAgICBsZXQgY3RzID0gKGN0c191bnNpZ25lZCA8PCA4KSA+PiA4OyAgLy8gY29udmVydCB0byAyNC1iaXQgc2lnbmVkIGludFxyXG5cclxuICAgIGlmIChwYWNrZXRUeXBlID09PSAwKSB7XHJcbiAgICAgIC8vIEFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkXHJcbiAgICAgIHRoaXMuX3BhcnNlQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQoXHJcbiAgICAgICAgYXJyYXlCdWZmZXIsXHJcbiAgICAgICAgZGF0YU9mZnNldCArIDQsXHJcbiAgICAgICAgZGF0YVNpemUgLSA0XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHBhY2tldFR5cGUgPT09IDEpIHtcclxuICAgICAgLy8gdGVuY2VudCBjbG91ZCBjdXN0b20gdGltZXN0YW1wIHBhcnNlXHJcbiAgICAgIGNvbnN0IHNlaSA9ICt0aGlzLl9wYXJzZVNFSShhcnJheUJ1ZmZlciwgZGF0YU9mZnNldCArIDQsIGRhdGFTaXplIC0gNCk7XHJcbiAgICAgIGlmIChzZWkpIHtcclxuICAgICAgICB0aGlzLl92aWRlb1RyYWNrLnNlaSA9IHNlaTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT25lIG9yIG1vcmUgTmFsdXNcclxuICAgICAgdGhpcy5fcGFyc2VBVkNWaWRlb0RhdGEoXHJcbiAgICAgICAgYXJyYXlCdWZmZXIsXHJcbiAgICAgICAgZGF0YU9mZnNldCArIDQsXHJcbiAgICAgICAgZGF0YVNpemUgLSA0LFxyXG4gICAgICAgIHRhZ1RpbWVzdGFtcCxcclxuICAgICAgICB0YWdQb3NpdGlvbixcclxuICAgICAgICBmcmFtZVR5cGUsXHJcbiAgICAgICAgY3RzXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHBhY2tldFR5cGUgPT09IDIpIHtcclxuICAgICAgLy8gZW1wdHksIEFWQyBlbmQgb2Ygc2VxdWVuY2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2Vycm9yKGBGbHY6IEludmFsaWQgdmlkZW8gcGFja2V0IHR5cGUgJHtwYWNrZXRUeXBlfWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfcGFyc2VBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZChhcnJheUJ1ZmZlciwgZGF0YU9mZnNldCwgZGF0YVNpemUpIHtcclxuICAgIGlmIChkYXRhU2l6ZSA8IDcpIHtcclxuICAgICAgbG9nZ2VyLndhcm4oXHJcbiAgICAgICAgdGhpcy5UQUcsXHJcbiAgICAgICAgXCJGbHY6IEludmFsaWQgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQsIGxhY2sgb2YgZGF0YSFcIlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1ldGEgPSB0aGlzLl92aWRlb01ldGE7XHJcbiAgICBsZXQgdHJhY2sgPSB0aGlzLl92aWRlb1RyYWNrO1xyXG4gICAgbGV0IGxlID0gQnl0ZUFycmF5LmxpdHRsZUVuZGlhbjtcclxuICAgIGxldCB2ID0gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyLCBkYXRhT2Zmc2V0LCBkYXRhU2l6ZSk7XHJcblxyXG4gICAgaWYgKCFtZXRhKSB7XHJcbiAgICAgIG1ldGEgPSB0aGlzLl92aWRlb01ldGEgPSB7fTtcclxuICAgICAgbWV0YS50eXBlID0gXCJ2aWRlb1wiO1xyXG4gICAgICBtZXRhLmlkID0gdHJhY2suaWQ7XHJcbiAgICAgIG1ldGEudGltZXNjYWxlID0gdGhpcy5fdGltZXNjYWxlO1xyXG4gICAgICBtZXRhLmR1cmF0aW9uID0gdGhpcy5fZHVyYXRpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodHlwZW9mIG1ldGEuYXZjYyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGxvZ2dlci53YXJuKHRoaXMuVEFHLCBcIkZvdW5kIGFub3RoZXIgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQhXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHZlcnNpb24gPSB2LmdldFVpbnQ4KDApOyAvLyBjb25maWd1cmF0aW9uVmVyc2lvblxyXG4gICAgbGV0IGF2Y1Byb2ZpbGUgPSB2LmdldFVpbnQ4KDEpOyAvLyBhdmNQcm9maWxlSW5kaWNhdGlvblxyXG4gICAgbGV0IHByb2ZpbGVDb21wYXRpYmlsaXR5ID0gdi5nZXRVaW50OCgyKTsgLy8gcHJvZmlsZV9jb21wYXRpYmlsaXR5XHJcbiAgICBsZXQgYXZjTGV2ZWwgPSB2LmdldFVpbnQ4KDMpOyAvLyBBVkNMZXZlbEluZGljYXRpb25cclxuXHJcbiAgICBpZiAodmVyc2lvbiAhPT0gMSB8fCBhdmNQcm9maWxlID09PSAwKSB7XHJcbiAgICAgIHRoaXMuX2Vycm9yKFwiRmx2OiBJbnZhbGlkIEFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbmFsdUxlbmd0aFNpemUgPSAodi5nZXRVaW50OCg0KSAmIDMpICsgMTsgLy8gbGVuZ3RoU2l6ZU1pbnVzT25lXHJcbiAgICBpZiAodGhpcy5fbmFsdUxlbmd0aFNpemUgIT09IDMgJiYgdGhpcy5fbmFsdUxlbmd0aFNpemUgIT09IDQpIHtcclxuICAgICAgLy8gaG9seSBzaGl0ISEhXHJcbiAgICAgIHRoaXMuX2Vycm9yKFxyXG4gICAgICAgIGBGbHY6IFN0cmFuZ2UgTmFsdUxlbmd0aFNpemVNaW51c09uZTogJHt0aGlzLl9uYWx1TGVuZ3RoU2l6ZSAtIDF9YFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNwc0NvdW50ID0gdi5nZXRVaW50OCg1KSAmIDMxOyAvLyBudW1PZlNlcXVlbmNlUGFyYW1ldGVyU2V0c1xyXG4gICAgaWYgKHNwc0NvdW50ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuX2Vycm9yKFwiRmx2OiBJbnZhbGlkIEFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkOiBObyBTUFNcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAoc3BzQ291bnQgPiAxKSB7XHJcbiAgICAgIGxvZ2dlci53YXJuKFxyXG4gICAgICAgIHRoaXMuVEFHLFxyXG4gICAgICAgIGBGbHY6IFN0cmFuZ2UgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQ6IFNQUyBDb3VudCA9ICR7c3BzQ291bnR9YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBvZmZzZXQgPSA2O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BzQ291bnQ7IGkrKykge1xyXG4gICAgICBsZXQgbGVuID0gdi5nZXRVaW50MTYob2Zmc2V0LCBsZSk7IC8vIHNlcXVlbmNlUGFyYW1ldGVyU2V0TGVuZ3RoXHJcbiAgICAgIG9mZnNldCArPSAyO1xyXG5cclxuICAgICAgaWYgKGxlbiA9PT0gMCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBOb3RpY2U6IE5hbHUgd2l0aG91dCBzdGFydGNvZGUgaGVhZGVyICgwMCAwMCAwMCAwMSlcclxuICAgICAgbGV0IHNwcyA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyLCBkYXRhT2Zmc2V0ICsgb2Zmc2V0LCBsZW4pO1xyXG4gICAgICBvZmZzZXQgKz0gbGVuO1xyXG5cclxuICAgICAgbGV0IGNvbmZpZyA9IFNQU1BhcnNlci5wYXJzZVNQUyhzcHMpO1xyXG4gICAgICBpZiAoaSAhPT0gMCkge1xyXG4gICAgICAgIC8vIGlnbm9yZSBvdGhlciBzcHMncyBjb25maWdcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWV0YS5jb2RlY1dpZHRoID0gY29uZmlnLmNvZGVjX3NpemUud2lkdGg7XHJcbiAgICAgIG1ldGEuY29kZWNIZWlnaHQgPSBjb25maWcuY29kZWNfc2l6ZS5oZWlnaHQ7XHJcbiAgICAgIG1ldGEucHJlc2VudFdpZHRoID0gY29uZmlnLnByZXNlbnRfc2l6ZS53aWR0aDtcclxuICAgICAgbWV0YS5wcmVzZW50SGVpZ2h0ID0gY29uZmlnLnByZXNlbnRfc2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICBtZXRhLnByb2ZpbGUgPSBjb25maWcucHJvZmlsZV9zdHJpbmc7XHJcbiAgICAgIG1ldGEubGV2ZWwgPSBjb25maWcubGV2ZWxfc3RyaW5nO1xyXG4gICAgICBtZXRhLmJpdERlcHRoID0gY29uZmlnLmJpdF9kZXB0aDtcclxuICAgICAgbWV0YS5jaHJvbWFGb3JtYXQgPSBjb25maWcuY2hyb21hX2Zvcm1hdDtcclxuICAgICAgbWV0YS5zYXJSYXRpbyA9IGNvbmZpZy5zYXJfcmF0aW87XHJcbiAgICAgIG1ldGEuZnJhbWVSYXRlID0gY29uZmlnLmZyYW1lX3JhdGU7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgY29uZmlnLmZyYW1lX3JhdGUuZml4ZWQgPT09IGZhbHNlIHx8XHJcbiAgICAgICAgY29uZmlnLmZyYW1lX3JhdGUuZnBzX251bSA9PT0gMCB8fFxyXG4gICAgICAgIGNvbmZpZy5mcmFtZV9yYXRlLmZwc19kZW4gPT09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgbWV0YS5mcmFtZVJhdGUgPSB0aGlzLl9yZWZlcmVuY2VGcmFtZVJhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBmcHNfZGVuID0gbWV0YS5mcmFtZVJhdGUuZnBzX2RlbjtcclxuICAgICAgbGV0IGZwc19udW0gPSBtZXRhLmZyYW1lUmF0ZS5mcHNfbnVtO1xyXG4gICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gbWV0YS50aW1lc2NhbGUgKiAoZnBzX2RlbiAvIGZwc19udW0pO1xyXG5cclxuICAgICAgbGV0IGNvZGVjQXJyYXkgPSBzcHMuc3ViYXJyYXkoMSwgNCk7XHJcbiAgICAgIGxldCBjb2RlY1N0cmluZyA9IFwiYXZjMS5cIjtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICBsZXQgaCA9IGNvZGVjQXJyYXlbal0udG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIGlmIChoLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgIGggPSBcIjBcIiArIGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvZGVjU3RyaW5nICs9IGg7XHJcbiAgICAgIH1cclxuICAgICAgbWV0YS5jb2RlYyA9IGNvZGVjU3RyaW5nO1xyXG5cclxuICAgICAgbGV0IG1pID0gdGhpcy5fbWVkaWFJbmZvO1xyXG4gICAgICBtaS53aWR0aCA9IG1ldGEuY29kZWNXaWR0aDtcclxuICAgICAgbWkuaGVpZ2h0ID0gbWV0YS5jb2RlY0hlaWdodDtcclxuICAgICAgbWkuZnBzID0gbWV0YS5mcmFtZVJhdGUuZnBzO1xyXG4gICAgICBtaS5wcm9maWxlID0gbWV0YS5wcm9maWxlO1xyXG4gICAgICBtaS5sZXZlbCA9IG1ldGEubGV2ZWw7XHJcbiAgICAgIG1pLmNocm9tYUZvcm1hdCA9IGNvbmZpZy5jaHJvbWFfZm9ybWF0X3N0cmluZztcclxuICAgICAgbWkuc2FyTnVtID0gbWV0YS5zYXJSYXRpby53aWR0aDtcclxuICAgICAgbWkuc2FyRGVuID0gbWV0YS5zYXJSYXRpby5oZWlnaHQ7XHJcbiAgICAgIG1pLnZpZGVvQ29kZWMgPSBjb2RlY1N0cmluZztcclxuXHJcbiAgICAgIGlmIChtaS5oYXNBdWRpbykge1xyXG4gICAgICAgIGlmIChtaS5hdWRpb0NvZGVjICE9IG51bGwpIHtcclxuICAgICAgICAgIG1pLm1pbWVUeXBlID1cclxuICAgICAgICAgICAgJ3ZpZGVvL3gtZmx2OyBjb2RlY3M9XCInICsgbWkudmlkZW9Db2RlYyArIFwiLFwiICsgbWkuYXVkaW9Db2RlYyArICdcIic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1pLm1pbWVUeXBlID0gJ3ZpZGVvL3gtZmx2OyBjb2RlY3M9XCInICsgbWkudmlkZW9Db2RlYyArICdcIic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHBzQ291bnQgPSB2LmdldFVpbnQ4KG9mZnNldCk7IC8vIG51bU9mUGljdHVyZVBhcmFtZXRlclNldHNcclxuICAgIGlmIChwcHNDb3VudCA9PT0gMCkge1xyXG4gICAgICB0aGlzLl9lcnJvcihcIkZsdjogSW52YWxpZCBBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZDogTm8gUFBTXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKHBwc0NvdW50ID4gMSkge1xyXG4gICAgICBsb2dnZXIud2FybihcclxuICAgICAgICB0aGlzLlRBRyxcclxuICAgICAgICBgRmx2OiBTdHJhbmdlIEFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkOiBQUFMgQ291bnQgPSAke3Bwc0NvdW50fWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmZzZXQrKztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBwc0NvdW50OyBpKyspIHtcclxuICAgICAgbGV0IGxlbiA9IHYuZ2V0VWludDE2KG9mZnNldCwgbGUpOyAvLyBwaWN0dXJlUGFyYW1ldGVyU2V0TGVuZ3RoXHJcbiAgICAgIG9mZnNldCArPSAyO1xyXG5cclxuICAgICAgaWYgKGxlbiA9PT0gMCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBwcHMgaXMgdXNlbGVzcyBmb3IgZXh0cmFjdGluZyB2aWRlbyBpbmZvcm1hdGlvblxyXG4gICAgICBvZmZzZXQgKz0gbGVuO1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGEuYXZjYyA9IG5ldyBVaW50OEFycmF5KGRhdGFTaXplKTtcclxuICAgIG1ldGEuYXZjYy5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQsIGRhdGFTaXplKSwgMCk7XHJcbiAgICBsb2dnZXIubG9nKHRoaXMuVEFHLCBcIlBhcnNlZCBBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZFwiKTtcclxuXHJcbiAgICBpZiAodGhpcy5fdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkKSB7XHJcbiAgICAgIC8vIGZsdXNoIHBhcnNlZCBmcmFtZXNcclxuICAgICAgdGhpcy5fZmx1c2goKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3ZpZGVvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyBub3RpZnkgbmV3IG1ldGFkYXRhXHJcbiAgICB0aGlzLm9uVHJhY2tNZXRhICYmIHRoaXMub25UcmFja01ldGEoXCJ2aWRlb1wiLCBtZXRhKTtcclxuXHJcbiAgICBpZiAodGhpcy5fbWVkaWFJbmZvLmlzQ29tcGxldGUoKSkge1xyXG4gICAgICB0aGlzLl9vbkluaXQodGhpcy5fbWVkaWFJbmZvKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9wYXJzZUFWQ1ZpZGVvRGF0YShcclxuICAgIGFycmF5QnVmZmVyLFxyXG4gICAgZGF0YU9mZnNldCxcclxuICAgIGRhdGFTaXplLFxyXG4gICAgdGFnVGltZXN0YW1wLFxyXG4gICAgdGFnUG9zaXRpb24sXHJcbiAgICBmcmFtZVR5cGUsXHJcbiAgICBjdHNcclxuICApIHtcclxuICAgIGxldCBsZSA9IEJ5dGVBcnJheS5saXR0bGVFbmRpYW47XHJcbiAgICBsZXQgdiA9IG5ldyBEYXRhVmlldyhhcnJheUJ1ZmZlciwgZGF0YU9mZnNldCwgZGF0YVNpemUpO1xyXG5cclxuICAgIGxldCB1bml0cyA9IFtdLFxyXG4gICAgICBsZW5ndGggPSAwO1xyXG5cclxuICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgY29uc3QgbGVuZ3RoU2l6ZSA9IHRoaXMuX25hbHVMZW5ndGhTaXplO1xyXG4gICAgbGV0IGR0cyA9IHRoaXMuX3RpbWVzdGFtcEJhc2UgKyB0YWdUaW1lc3RhbXA7XHJcbiAgICBsZXQga2V5ZnJhbWUgPSBmcmFtZVR5cGUgPT09IDE7IC8vIGZyb20gRkxWIEZyYW1lIFR5cGUgY29uc3RhbnRzXHJcblxyXG4gICAgd2hpbGUgKG9mZnNldCA8IGRhdGFTaXplKSB7XHJcbiAgICAgIGlmIChvZmZzZXQgKyA0ID49IGRhdGFTaXplKSB7XHJcbiAgICAgICAgbG9nZ2VyLndhcm4oXHJcbiAgICAgICAgICB0aGlzLlRBRyxcclxuICAgICAgICAgIGBNYWxmb3JtZWQgTmFsdSBuZWFyIHRpbWVzdGFtcCAke2R0c30sIG9mZnNldCA9ICR7b2Zmc2V0fSwgZGF0YVNpemUgPSAke2RhdGFTaXplfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrOyAvLyBkYXRhIG5vdCBlbm91Z2ggZm9yIG5leHQgTmFsdVxyXG4gICAgICB9XHJcbiAgICAgIC8vIE5hbHUgd2l0aCBsZW5ndGgtaGVhZGVyIChBVkMxKVxyXG4gICAgICBsZXQgbmFsdVNpemUgPSB2LmdldFVpbnQzMihvZmZzZXQsIGxlKTsgLy8gQmlnLUVuZGlhbiByZWFkXHJcbiAgICAgIGlmIChsZW5ndGhTaXplID09PSAzKSB7XHJcbiAgICAgICAgbmFsdVNpemUgPj4+PSA4O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuYWx1U2l6ZSA+IGRhdGFTaXplIC0gbGVuZ3RoU2l6ZSkge1xyXG4gICAgICAgIGxvZ2dlci53YXJuKFxyXG4gICAgICAgICAgdGhpcy5UQUcsXHJcbiAgICAgICAgICBgTWFsZm9ybWVkIE5hbHVzIG5lYXIgdGltZXN0YW1wICR7ZHRzfSwgTmFsdVNpemUgPiBEYXRhU2l6ZSFgXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB1bml0VHlwZSA9IHYuZ2V0VWludDgob2Zmc2V0ICsgbGVuZ3RoU2l6ZSkgJiAweDFmO1xyXG5cclxuICAgICAgaWYgKHVuaXRUeXBlID09PSA1KSB7XHJcbiAgICAgICAgLy8gSURSXHJcbiAgICAgICAga2V5ZnJhbWUgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KFxyXG4gICAgICAgIGFycmF5QnVmZmVyLFxyXG4gICAgICAgIGRhdGFPZmZzZXQgKyBvZmZzZXQsXHJcbiAgICAgICAgbGVuZ3RoU2l6ZSArIG5hbHVTaXplXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCB1bml0ID0geyB0eXBlOiB1bml0VHlwZSwgZGF0YTogZGF0YSB9O1xyXG4gICAgICB1bml0cy5wdXNoKHVuaXQpO1xyXG4gICAgICBsZW5ndGggKz0gZGF0YS5ieXRlTGVuZ3RoO1xyXG5cclxuICAgICAgb2Zmc2V0ICs9IGxlbmd0aFNpemUgKyBuYWx1U2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodW5pdHMubGVuZ3RoKSB7XHJcbiAgICAgIGxldCB0cmFjayA9IHRoaXMuX3ZpZGVvVHJhY2s7XHJcbiAgICAgIGxldCBhdmNTYW1wbGU6IGFueSA9IHtcclxuICAgICAgICB1bml0czogdW5pdHMsXHJcbiAgICAgICAgbGVuZ3RoOiBsZW5ndGgsXHJcbiAgICAgICAgaXNLZXlmcmFtZToga2V5ZnJhbWUsXHJcbiAgICAgICAgZHRzOiBkdHMsXHJcbiAgICAgICAgY3RzOiBjdHMsXHJcbiAgICAgICAgcHRzOiBkdHMgKyBjdHNcclxuICAgICAgfTtcclxuICAgICAgaWYgKGtleWZyYW1lKSB7XHJcbiAgICAgICAgYXZjU2FtcGxlLmZpbGVwb3NpdGlvbiA9IHRhZ1Bvc2l0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIHRyYWNrLnNhbXBsZXMucHVzaChhdmNTYW1wbGUpO1xyXG4gICAgICB0cmFjay5sZW5ndGggKz0gbGVuZ3RoO1xyXG5cclxuICAgICAgLy8ga2V5ZnJhbWUgZm9yY2UgZmx1c2hcclxuICAgICAgaWYgKGtleWZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fZmx1c2goKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpdmUvZGVtdXgvZmx2LWRlbXV4ZXIudHMiLCJpbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi91dGlsL2xvZ2dlclwiO1xyXG5cclxuLyoqXHJcbiAqIHNpbXVsYXRlIGFzMyBCeXRlQXJyYXksIHdyaXRlIGFuZCByZWFkIGRhdGEgYXMgeW91ciB3aXNoLCBubyBuZWVkIGNhcmUgb2Ygc2l6ZS5cclxuICpcclxuICogQGF1dGhvciBza3ktd2FuZ0BxcS5jb21cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ5dGVBcnJheSB7XHJcbiAgc3RhdGljIFRBRyA9IFwiQnl0ZUFycmF5XCI7XHJcblxyXG4gIC8qKiBnbG9iYWwgZGVmYXVsdCB2YWx1ZSAqL1xyXG4gIHN0YXRpYyBsaXR0bGVFbmRpYW4gPSBmYWxzZTtcclxuICAvKiogdXNlIGxpdHRsZSBlbmRpYW4gKi9cclxuICBsaXR0bGVFbmRpYW46IGJvb2xlYW47XHJcbiAgLyoqIGluY3JlYXNlIGJ5dGVzIHdoZW4gbm90IGVub3VnaCwgZGVmYXVsdCB2YWx1ZSBpcyAwICh0d28gdGltZXMgaW5jcmVhc2UpICovXHJcbiAgaW5jcmVhc2U6IG51bWJlcjtcclxuICAvL3JhdyBhcnJheSBidWZmZXJcclxuICBwcml2YXRlIF9idWZmZXI6IEFycmF5QnVmZmVyO1xyXG4gIC8vYXV0byBjbGVhciByZWFkZWQgbWVtb3J5XHJcbiAgcHJpdmF0ZSBfYXV0b0NsZWFyOiBib29sZWFuO1xyXG5cclxuICAvL3JlYWQgcG9zaXRpb25cclxuICBwcml2YXRlIF9ycG9zaXRpb246IG51bWJlciA9IDA7XHJcbiAgLy93cml0ZSBwb3NpdGlvblxyXG4gIHByaXZhdGUgX3dwb3NpdGlvbjogbnVtYmVyID0gMDtcclxuICAvL2luY3JlYXNlIHRpbWVzXHJcbiAgcHJpdmF0ZSBfY291bnQgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBidWZmZXIsXHJcbiAgICBpbml0TGVuZ3RoID0gMTAyNCxcclxuICAgIGF1dG9DbGVhciA9IGZhbHNlLFxyXG4gICAgaW5jcmVhc2UgPSAwLFxyXG4gICAgbGl0dGxlRW5kaWFuID0gQnl0ZUFycmF5LmxpdHRsZUVuZGlhblxyXG4gIH06IHtcclxuICAgIGJ1ZmZlcj86IEFycmF5QnVmZmVyO1xyXG4gICAgaW5pdExlbmd0aD86IG51bWJlcjtcclxuICAgIGF1dG9DbGVhcj86IGJvb2xlYW47XHJcbiAgICBpbmNyZWFzZT86IG51bWJlcjtcclxuICAgIGxpdHRsZUVuZGlhbj86IGJvb2xlYW47XHJcbiAgfSA9IHt9KSB7XHJcbiAgICB0aGlzLl9hdXRvQ2xlYXIgPSBhdXRvQ2xlYXI7XHJcbiAgICB0aGlzLmluY3JlYXNlID0gaW5jcmVhc2U7XHJcbiAgICB0aGlzLmxpdHRsZUVuZGlhbiA9IGxpdHRsZUVuZGlhbjtcclxuICAgIGlmIChidWZmZXIpIHtcclxuICAgICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xyXG4gICAgICB0aGlzLl93cG9zaXRpb24gPSBidWZmZXIuYnl0ZUxlbmd0aDtcclxuICAgICAgLy8gdGhpcy5fYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxuICAgICAgLy8gdGhpcy53cml0ZShidWZmZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGluaXRMZW5ndGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGJ1ZmZlcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9idWZmZXIuc2xpY2UoMCwgdGhpcy5fd3Bvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGdldCBieXRlQXZhaWxhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dwb3NpdGlvbiAtIHRoaXMuX3Jwb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIGdldCBieXRlTGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dwb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIGdldCBieXRlUG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcnBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgcmVhZChzaXplOiBudW1iZXIpIHtcclxuICAgIGlmIChzaXplID4gdGhpcy5ieXRlQXZhaWxhYmxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWyR7Qnl0ZUFycmF5LlRBR31dIG5vdCBlbm91Z2ggZGF0YSBmb3IgcmVhZC5gKTtcclxuICAgIH1cclxuICAgIGxldCBidWZmZXIgPSB0aGlzLl9idWZmZXIuc2xpY2UodGhpcy5fcnBvc2l0aW9uLCB0aGlzLl9ycG9zaXRpb24gKyBzaXplKTtcclxuICAgIHRoaXMuX3Jwb3NpdGlvbiArPSBzaXplO1xyXG4gICAgcmV0dXJuIGJ1ZmZlcjtcclxuICB9XHJcblxyXG4gIHJlYWRVaW50OCgpIHtcclxuICAgIGxldCBkdiA9IG5ldyBEYXRhVmlldyh0aGlzLnJlYWQoMSkpO1xyXG4gICAgcmV0dXJuIGR2LmdldFVpbnQ4KDApO1xyXG4gIH1cclxuXHJcbiAgcmVhZFVpbnQxNigpIHtcclxuICAgIGxldCBkdiA9IG5ldyBEYXRhVmlldyh0aGlzLnJlYWQoMikpO1xyXG4gICAgcmV0dXJuIGR2LmdldFVpbnQxNigwLCB0aGlzLmxpdHRsZUVuZGlhbik7XHJcbiAgfVxyXG5cclxuICByZWFkVWludDI0KCkge1xyXG4gICAgbGV0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5yZWFkKDMpKTtcclxuICAgIGlmICh0aGlzLmxpdHRsZUVuZGlhbikgYXJyYXkucmV2ZXJzZSgpO1xyXG4gICAgcmV0dXJuIChhcnJheVswXSA8PCAxNikgfCAoYXJyYXlbMV0gPDwgOCkgfCBhcnJheVsyXTtcclxuICB9XHJcblxyXG4gIHJlYWRVaW50MzIoKSB7XHJcbiAgICBsZXQgZHYgPSBuZXcgRGF0YVZpZXcodGhpcy5yZWFkKDQpKTtcclxuICAgIHJldHVybiBkdi5nZXRVaW50MzIoMCwgdGhpcy5saXR0bGVFbmRpYW4pO1xyXG4gIH1cclxuXHJcbiAgcmVhZFN0cmluZyhzaXplOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KHRoaXMucmVhZChzaXplKSkpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGUoYnVmZmVyOiBBcnJheUJ1ZmZlcikge1xyXG4gICAgaWYgKGJ1ZmZlciAmJiBidWZmZXIuYnl0ZUxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGxlbmd0aCA9IGJ1ZmZlci5ieXRlTGVuZ3RoO1xyXG4gICAgICBsZXQgbmVlZCA9IHRoaXMuX3dwb3NpdGlvbiArIGxlbmd0aDtcclxuICAgICAgaWYgKG5lZWQgPiB0aGlzLl9idWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgIGxldCBjbGVhckJ5dGVzID0gdGhpcy5fYXV0b0NsZWFyID8gdGhpcy5fcnBvc2l0aW9uIDogMDtcclxuICAgICAgICBsZXQgc2l6ZSA9IG5lZWQgLSBjbGVhckJ5dGVzO1xyXG4gICAgICAgIGxldCBvbGRidWZmZXIgPSB0aGlzLl9idWZmZXIuc2xpY2UoY2xlYXJCeXRlcywgdGhpcy5fd3Bvc2l0aW9uKTtcclxuICAgICAgICBsZXQgbmV3YnVmZmVyO1xyXG4gICAgICAgIGlmIChzaXplID4gdGhpcy5fYnVmZmVyLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgIC8vbmVlZCBpbmNyZWFzZVxyXG4gICAgICAgICAgaWYgKHRoaXMuaW5jcmVhc2UpIHNpemUgKz0gdGhpcy5pbmNyZWFzZTtcclxuICAgICAgICAgIGVsc2Ugc2l6ZSA9ICh0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoICsgbGVuZ3RoKSAqIDI7IC8vYXV0byBpbmNyZWFzZSB0d28gdGltZXNcclxuICAgICAgICAgIHRoaXMuX2NvdW50Kys7XHJcbiAgICAgICAgICAvLyBsb2dnZXIubG9nKGBpbmNyZWFzZSB0byAke3NpemV9ICR7dGhpcy5fY291bnR9YCk7XHJcbiAgICAgICAgICBuZXdidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoc2l6ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vdXNlIG9sZCBvbmVcclxuICAgICAgICAgIG5ld2J1ZmZlciA9IHRoaXMuX2J1ZmZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobmV3YnVmZmVyKTtcclxuICAgICAgICBhcnJheS5zZXQobmV3IFVpbnQ4QXJyYXkob2xkYnVmZmVyKSwgMCk7XHJcbiAgICAgICAgdGhpcy5fcnBvc2l0aW9uIC09IGNsZWFyQnl0ZXM7XHJcbiAgICAgICAgdGhpcy5fd3Bvc2l0aW9uID0gb2xkYnVmZmVyLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyID0gbmV3YnVmZmVyO1xyXG4gICAgICAgIC8vIGxvZ2dlci5sb2coXHJcbiAgICAgICAgLy8gICBgY2xlYXIgYnl0ZXM6ICR7Y2xlYXJCeXRlc30gJHtsZW5ndGh9ICR7dGhpcy5fYnVmZmVyLmJ5dGVMZW5ndGh9ICR7dGhpcy5fYnVmZmVyLmJ5dGVMZW5ndGggLSB0aGlzLmJ5dGVBdmFpbGFibGV9ICR7dGhpcy5fY291bnR9YFxyXG4gICAgICAgIC8vICk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fYnVmZmVyKTtcclxuICAgICAgYXJyYXkuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZmZlciksIHRoaXMuX3dwb3NpdGlvbik7XHJcbiAgICAgIHRoaXMuX3dwb3NpdGlvbiArPSBsZW5ndGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5OiBBcnJheUJ1ZmZlcltdKTogQnl0ZUFycmF5IHtcclxuICAgIGxldCBzaXplID0gMDtcclxuICAgIGFycmF5LmZvckVhY2goYnVmZmVyID0+IChzaXplICs9IGJ1ZmZlci5ieXRlTGVuZ3RoKSk7XHJcbiAgICBsZXQgYmEgPSBuZXcgQnl0ZUFycmF5KHsgaW5pdExlbmd0aDogc2l6ZSB9KTtcclxuICAgIGFycmF5LmZvckVhY2goYnVmZmVyID0+IGJhLndyaXRlKGJ1ZmZlcikpOyAgICBcclxuICAgIHJldHVybiBiYTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saXZlL2NvcmUvYnl0ZS1hcnJheS50cyIsImltcG9ydCBNUDQgZnJvbSBcIi4vbXA0LWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgTWVkaWFJbmZvIGZyb20gXCIuLi9jb3JlL21lZGlhLWluZm9cIjtcclxuaW1wb3J0IEJyb3dzZXIgZnJvbSBcIi4uL3V0aWwvYnJvd3NlclwiO1xyXG5pbXBvcnQgQnl0ZUFycmF5IGZyb20gXCIuLi9jb3JlL2J5dGUtYXJyYXlcIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vdXRpbC9sb2dnZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvcmUvY29uZmlnXCI7XHJcblxyXG4vKipcclxuICogbXA0IHJlbXV4ZXJcclxuICpcclxuICogQGF1dGhvciB3YW5neGluZ3dlaUBkb3V5dS50dlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXA0UmVtdXhlciB7XHJcbiAgVEFHID0gXCJNUDRSZW11eGVyXCI7XHJcblxyXG4gIG9uSW5pdDogKG1lZGlhSW5mbzogTWVkaWFJbmZvKSA9PiB2b2lkO1xyXG4gIG9uRGF0YTogKHRyYWNrcykgPT4gdm9pZDtcclxuICBvbkVycm9yOiAobXNnOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG4gIF9tZWRpYUluZm86IE1lZGlhSW5mbztcclxuXHJcbiAgX2F1ZGlvTWV0YTtcclxuICBfdmlkZW9NZXRhO1xyXG4gIF9hdWRpb1RyYWNrID0ge1xyXG4gICAgY29udGFpbmVyOiBcImF1ZGlvL21wNFwiLFxyXG4gICAgY29kZWM6IFwiXCIsXHJcbiAgICBidWZmZXJzOiBbXSxcclxuICAgIHRpbWVPZmZzZXQ6IC0xLFxyXG4gIH07XHJcbiAgX3ZpZGVvVHJhY2sgPSB7XHJcbiAgICBjb250YWluZXI6IFwidmlkZW8vbXA0XCIsXHJcbiAgICBjb2RlYzogXCJcIixcclxuICAgIGJ1ZmZlcnM6IFtdLFxyXG4gICAgdHM6IDAsXHJcbiAgICBzZWk6IHVuZGVmaW5lZCxcclxuICAgIGhhc0tleWZyYW1lOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIF9sYXN0QXVkaW9TYW1wbGUgPSBudWxsO1xyXG4gIF9sYXN0VmlkZW9TYW1wbGUgPSBudWxsO1xyXG5cclxuICBfdXNlQXVkaW9NcGVnID0gZmFsc2U7XHJcblxyXG4gIF9pc0F1ZGlvSW5pdGVkID0gZmFsc2U7XHJcbiAgX2lzVmlkZW9Jbml0ZWQgPSBmYWxzZTtcclxuXHJcbiAgX2lzQXVkaW9UaW1lTmVlZFVwZGF0ZSA9IGZhbHNlOyAvLyBtcDPmsqHmnInnm7jlr7nml7bpl7TmiLPvvIzlnKjop4bpopHlvIDlp4vjgIHniYfmrrXkuKLlpLHnmoTmg4XlhrXkuIvvvIzpnIDopoHkurrlt6V1cGRhdGVcclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIHRoaXMub25Jbml0ID0gbnVsbDtcclxuICAgIHRoaXMub25EYXRhID0gbnVsbDtcclxuICAgIHRoaXMub25FcnJvciA9IG51bGw7XHJcbiAgICB0aGlzLl9tZWRpYUluZm8gPSBudWxsO1xyXG4gICAgdGhpcy5fYXVkaW9NZXRhID0gbnVsbDtcclxuICAgIHRoaXMuX3ZpZGVvTWV0YSA9IG51bGw7XHJcbiAgICB0aGlzLl9hdWRpb1RyYWNrID0gbnVsbDtcclxuICAgIHRoaXMuX3ZpZGVvVHJhY2sgPSBudWxsO1xyXG4gICAgdGhpcy5fbGFzdEF1ZGlvU2FtcGxlID0gbnVsbDtcclxuICAgIHRoaXMuX2xhc3RWaWRlb1NhbXBsZSA9IG51bGw7ICAgIFxyXG4gIH1cclxuXHJcbiAgb25NZWRpYUluZm8obWVkaWFJbmZvOiBNZWRpYUluZm8pIHtcclxuICAgIC8vIOWPr+iDveinpuWPkeWkmuasoVxyXG4gICAgaWYgKHRoaXMuX21lZGlhSW5mbykge1xyXG4gICAgICBsb2dnZXIubG9nKFwicmVjZWl2ZSBhbm90aGVyIG1lZGlhSW5mbyFcIiwgdGhpcy5fbWVkaWFJbmZvLCBtZWRpYUluZm8pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbWVkaWFJbmZvID0gbWVkaWFJbmZvO1xyXG4gICAgaWYgKG1lZGlhSW5mby5oYXNBdWRpbyAmJiAhdGhpcy5faXNBdWRpb0luaXRlZCkge1xyXG4gICAgICB0aGlzLl9pc0F1ZGlvSW5pdGVkID0gdHJ1ZTtcclxuICAgICAgLy8gaW5pdCBzZWdtZW50XHJcbiAgICAgIGlmICh0aGlzLl9tZWRpYUluZm8uYXVkaW9Db2RlYyA9PT0gXCJtcDNcIiAmJiAhQnJvd3Nlci5maXJlZm94KSB7IC8vIG9ubHkgZmlyZWZveCBzdXBwb3J0ICdtcDMnIGNvZGVjXHJcbiAgICAgICAgLy8gJ21wMycgY29kZWMgbm90IHN1cHBvcnRlZCwgdXNlIHJhdyBtcGVnIGluc3RlYWQuXHJcbiAgICAgICAgdGhpcy5fdXNlQXVkaW9NcGVnID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9pc0F1ZGlvVGltZU5lZWRVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2F1ZGlvVHJhY2suY29udGFpbmVyID0gXCJhdWRpby9tcGVnXCI7XHJcbiAgICAgICAgdGhpcy5fYXVkaW9UcmFjay5jb2RlYyA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7ICAgICAgICBcclxuICAgICAgICB0aGlzLl9hdWRpb1RyYWNrLmNvZGVjID0gdGhpcy5fbWVkaWFJbmZvLmF1ZGlvQ29kZWM7XHJcbiAgICAgICAgdGhpcy5fYXVkaW9UcmFjay5idWZmZXJzLnB1c2goXHJcbiAgICAgICAgICBNUDQuZ2VuZXJhdGVJbml0U2VnbWVudCh0aGlzLl9hdWRpb01ldGEpLmJ1ZmZlclxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChtZWRpYUluZm8uaGFzVmlkZW8gJiYgIXRoaXMuX2lzVmlkZW9Jbml0ZWQpIHtcclxuICAgICAgdGhpcy5faXNWaWRlb0luaXRlZCA9IHRydWU7XHJcbiAgICAgIC8vIGluaXQgc2VnbWVudFxyXG4gICAgICB0aGlzLl92aWRlb1RyYWNrLmNvZGVjID0gdGhpcy5fbWVkaWFJbmZvLnZpZGVvQ29kZWM7XHJcbiAgICAgIHRoaXMuX3ZpZGVvVHJhY2suYnVmZmVycy5wdXNoKFxyXG4gICAgICAgIE1QNC5nZW5lcmF0ZUluaXRTZWdtZW50KHRoaXMuX3ZpZGVvTWV0YSkuYnVmZmVyXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uSW5pdCAmJiB0aGlzLm9uSW5pdCh0aGlzLl9tZWRpYUluZm8pO1xyXG4gIH1cclxuXHJcbiAgb25UcmFja01ldGEodHlwZSwgbWV0YWRhdGEpIHtcclxuICAgIGlmICh0eXBlID09PSBcImF1ZGlvXCIpIHtcclxuICAgICAgdGhpcy5fYXVkaW9NZXRhID0gbWV0YWRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IFwidmlkZW9cIikge1xyXG4gICAgICB0aGlzLl92aWRlb01ldGEgPSBtZXRhZGF0YTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVHJhY2tEYXRhKGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2ssIGVuZCA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLl9yZW11eFZpZGVvKHZpZGVvVHJhY2ssIGVuZCk7XHJcbiAgICB0aGlzLl9yZW11eEF1ZGlvKGF1ZGlvVHJhY2ssIGVuZCk7XHJcbiAgICB0aGlzLl9kaXNwYXRjaERhdGEoKTtcclxuICB9XHJcblxyXG4gIF9kaXNwYXRjaERhdGEoKSB7XHJcbiAgICBpZiAodGhpcy5vbkRhdGEpIHtcclxuICAgICAgbGV0IHRyYWNrcyA9IFtdO1xyXG4gICAgICBpZiAodGhpcy5fbWVkaWFJbmZvLmhhc0F1ZGlvKSB7XHJcbiAgICAgICAgbGV0IHRyYWNrID0gdGhpcy5fYXVkaW9UcmFjaztcclxuICAgICAgICBsZXQgZGF0YSA9IEJ5dGVBcnJheS5mcm9tQXJyYXkodHJhY2suYnVmZmVycykuYnVmZmVyO1xyXG4gICAgICAgIHRyYWNrLmJ1ZmZlcnMgPSBbXTsgLy9jbGVhclxyXG4gICAgICAgIHRyYWNrcy5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgY29udGFpbmVyOiB0cmFjay5jb250YWluZXIsXHJcbiAgICAgICAgICBjb2RlYzogdHJhY2suY29kZWMsXHJcbiAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgdGltZU9mZnNldDogdHJhY2sudGltZU9mZnNldFxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgdHJhY2sudGltZU9mZnNldCA9IC0xO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLl9tZWRpYUluZm8uaGFzVmlkZW8pIHtcclxuICAgICAgICBsZXQgdHJhY2sgPSB0aGlzLl92aWRlb1RyYWNrO1xyXG4gICAgICAgIGxldCBkYXRhID0gQnl0ZUFycmF5LmZyb21BcnJheSh0cmFjay5idWZmZXJzKS5idWZmZXI7XHJcbiAgICAgICAgdHJhY2suYnVmZmVycyA9IFtdOyAvL2NsZWFyXHJcbiAgICAgICAgdHJhY2tzLnB1c2goe1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBjb250YWluZXI6IHRyYWNrLmNvbnRhaW5lcixcclxuICAgICAgICAgIGNvZGVjOiB0cmFjay5jb2RlYyxcclxuICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICB0czogdHJhY2sudHMsXHJcbiAgICAgICAgICBzZWk6IHRyYWNrLnNlaSxcclxuICAgICAgICAgIGhhc0tleWZyYW1lOiB0cmFjay5oYXNLZXlmcmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25EYXRhKHRyYWNrcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfcmVtdXhBdWRpbyhhdWRpb1RyYWNrLCBlbmQgPSBmYWxzZSkge1xyXG4gICAgaWYgKCF0aGlzLl9hdWRpb01ldGEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcmVhZCBzYW1wbGVzXHJcbiAgICBsZXQgdHJhY2sgPSBhdWRpb1RyYWNrO1xyXG4gICAgbGV0IHNhbXBsZXMgPSB0cmFjay5zYW1wbGVzO1xyXG5cclxuICAgIGlmICghc2FtcGxlcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pyA5ZCO5LiA5Liq5YiG54mH5peg5rOV566X5Ye65YeG56Gu55qEZHVyYXRpb27vvIzmlL7liLDkuIvkuIDmiblzYW1wbGVz5LitXHJcbiAgICBpZiAodGhpcy5fbGFzdEF1ZGlvU2FtcGxlKSB7XHJcbiAgICAgIHNhbXBsZXMudW5zaGlmdCh0aGlzLl9sYXN0QXVkaW9TYW1wbGUpO1xyXG4gICAgICB0aGlzLl9sYXN0QXVkaW9TYW1wbGUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCFlbmQpIHtcclxuICAgICAgdGhpcy5fbGFzdEF1ZGlvU2FtcGxlID0gc2FtcGxlcy5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2FtcGxlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaXJzdER0cyA9IC0xO1xyXG4gICAgbGV0IHNhbXBsZXNMZW4gPSBzYW1wbGVzLmxlbmd0aDtcclxuICAgIGxldCBkYXRhTGVuID0gMDtcclxuICAgIGxldCBtYXlMb3N0ID0gZmFsc2U7XHJcbiAgICBsZXQgbmV4dFNhbXBsZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZXNMZW47IGkrKykge1xyXG4gICAgICBsZXQgc2FtcGxlID0gc2FtcGxlc1tpXTtcclxuXHJcbiAgICAgIGlmIChmaXJzdER0cyA9PT0gLTEpIHtcclxuICAgICAgICBmaXJzdER0cyA9IHNhbXBsZS5kdHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpID09PSBzYW1wbGVzTGVuIC0gMSkge1xyXG4gICAgICAgIC8vIGxhc3Qgc2FtcGxlXHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RBdWRpb1NhbXBsZSkge1xyXG4gICAgICAgICAgc2FtcGxlLmR1cmF0aW9uID0gdGhpcy5fbGFzdEF1ZGlvU2FtcGxlLnB0cyAtIHNhbXBsZS5wdHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNhbXBsZS5kdXJhdGlvbiA9IE1hdGguZmxvb3IodGhpcy5fYXVkaW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2FtcGxlLmR1cmF0aW9uID0gc2FtcGxlc1tpICsgMV0ucHRzIC0gc2FtcGxlLnB0cztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbG9nZ2VyLmxvZygnYXVkaW8gZHVyYXRpb24nLHNhbXBsZS5kdXJhdGlvbix0aGlzLl9hdWRpb01ldGEucmVmU2FtcGxlRHVyYXRpb24pO1xyXG5cclxuICAgICAgaWYgKHNhbXBsZS5kdXJhdGlvbiA+IENvbmZpZy5sb3N0VGhyZXNob2xkKSB7XHJcbiAgICAgICAgLy8g5Lit6Ze05Y+v6IO95Lii5aSx5LqGc2FtcGxlXHJcbiAgICAgICAgbG9nZ2VyLndhcm4oYHNhbXBsZSBkdXJhdGlvbj0ke3NhbXBsZS5kdXJhdGlvbn0sIHNvbWUgYXVkaW8gc2FtcGxlIG1heSBiZSBsb3N0LmApO1xyXG4gICAgICAgIHNhbXBsZS5kdXJhdGlvbiA9IE1hdGguZmxvb3IodGhpcy5fYXVkaW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uKTtcclxuICAgICAgICBpZiAodGhpcy5fbGFzdEF1ZGlvU2FtcGxlKSB7XHJcbiAgICAgICAgICBzYW1wbGVzLnB1c2godGhpcy5fbGFzdEF1ZGlvU2FtcGxlKTtcclxuICAgICAgICAgIHRoaXMuX2xhc3RBdWRpb1NhbXBsZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1heUxvc3QgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzYW1wbGUuc2l6ZSA9IHNhbXBsZS51bml0LmJ5dGVMZW5ndGg7XHJcbiAgICAgIHNhbXBsZS5mbGFncyA9IHtcclxuICAgICAgICBpc0xlYWRpbmc6IDAsXHJcbiAgICAgICAgZGVwZW5kc09uOiAxLFxyXG4gICAgICAgIGlzRGVwZW5kZWRPbjogMCxcclxuICAgICAgICBoYXNSZWR1bmRhbmN5OiAwXHJcbiAgICAgIH07XHJcbiAgICAgIGRhdGFMZW4gKz0gc2FtcGxlLnNpemU7XHJcblxyXG4gICAgICBpZiAobWF5TG9zdCkge1xyXG4gICAgICAgIHNhbXBsZXNMZW4gPSBpICsgMTtcclxuICAgICAgICBuZXh0U2FtcGxlcyA9IHNhbXBsZXMuc3BsaWNlKHNhbXBsZXNMZW4pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJhOiBCeXRlQXJyYXkgPSBuZXcgQnl0ZUFycmF5KHsgaW5pdExlbmd0aDogZGF0YUxlbiB9KTtcclxuICAgIHNhbXBsZXMuZm9yRWFjaChzYW1wbGUgPT4gYmEud3JpdGUoc2FtcGxlLnVuaXQpKTtcclxuXHJcbiAgICBpZiAodGhpcy5fdXNlQXVkaW9NcGVnKSB7XHJcbiAgICAgIHRoaXMuX2F1ZGlvVHJhY2suYnVmZmVycy5wdXNoKGJhLmJ1ZmZlcik7XHJcbiAgICAgIGlmICh0aGlzLl9pc0F1ZGlvVGltZU5lZWRVcGRhdGUpIHtcclxuICAgICAgICB0aGlzLl9hdWRpb1RyYWNrLnRpbWVPZmZzZXQgPSBmaXJzdER0cztcclxuICAgICAgICB0aGlzLl9pc0F1ZGlvVGltZU5lZWRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IG1vb2YgPSBNUDQubW9vZih0cmFjaywgZmlyc3REdHMpO1xyXG4gICAgICBsZXQgbWRhdCA9IE1QNC5tZGF0KG5ldyBVaW50OEFycmF5KGJhLmJ1ZmZlcikpO1xyXG4gICAgICB0aGlzLl9hdWRpb1RyYWNrLmJ1ZmZlcnMucHVzaCh0aGlzLl9tZXJnZUJveGVzKG1vb2YsIG1kYXQpLmJ1ZmZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIHRyYWNrXHJcbiAgICB0cmFjay5zZXF1ZW5jZU51bWJlcisrO1xyXG4gICAgdHJhY2suc2FtcGxlcy5zcGxpY2UoMCwgc2FtcGxlc0xlbik7XHJcbiAgICB0cmFjay5sZW5ndGggPSAwO1xyXG5cclxuICAgIGlmIChtYXlMb3N0KSB7XHJcbiAgICAgIHRyYWNrLnNhbXBsZXMgPSBuZXh0U2FtcGxlcztcclxuICAgICAgdHJhY2subGVuZ3RoICs9IG5leHRTYW1wbGVzLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmICh0aGlzLl91c2VBdWRpb01wZWcpIHtcclxuICAgICAgICB0aGlzLl9pc0F1ZGlvVGltZU5lZWRVcGRhdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9yZW11eEF1ZGlvKHRyYWNrLCBlbmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3JlbXV4VmlkZW8odmlkZW9UcmFjaywgZW5kID0gZmFsc2UpIHtcclxuICAgIGlmICh0aGlzLl92aWRlb01ldGEgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRyYWNrID0gdmlkZW9UcmFjaztcclxuICAgIGxldCBzYW1wbGVzID0gdHJhY2suc2FtcGxlcztcclxuXHJcbiAgICBpZiAoIXNhbXBsZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacgOWQjuS4gOS4quWIhueJh+aXoOazleeul+WHuuWHhuehrueahGR1cmF0aW9u77yM5pS+5Yiw5LiL5LiA5om5c2FtcGxlc+S4rVxyXG4gICAgaWYgKHRoaXMuX2xhc3RWaWRlb1NhbXBsZSkge1xyXG4gICAgICBzYW1wbGVzLnVuc2hpZnQodGhpcy5fbGFzdFZpZGVvU2FtcGxlKTtcclxuICAgICAgdGhpcy5fbGFzdFZpZGVvU2FtcGxlID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICghZW5kKSB7XHJcbiAgICAgIHRoaXMuX2xhc3RWaWRlb1NhbXBsZSA9IHNhbXBsZXMucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNhbXBsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmlyc3REdHMgPSAtMTtcclxuICAgIGxldCBtcDRTYW1wbGVzID0gW107XHJcbiAgICBsZXQgc2FtcGxlc0xlbiA9IHNhbXBsZXMubGVuZ3RoO1xyXG4gICAgbGV0IGRhdGFMZW4gPSAwO1xyXG4gICAgbGV0IG1heUxvc3QgPSBmYWxzZTtcclxuICAgIGxldCBuZXh0U2FtcGxlcyA9IFtdO1xyXG4gICAgbGV0IGxhc3R0cyA9IDA7XHJcbiAgICBsZXQgaGFzS2V5ZnJhbWUgPSBmYWxzZTsgICAgXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVzTGVuOyBpKyspIHtcclxuICAgICAgbGV0IHNhbXBsZSA9IHNhbXBsZXNbaV07XHJcbiAgICAgIGxldCBpc0tleWZyYW1lID0gc2FtcGxlLmlzS2V5ZnJhbWU7XHJcbiAgICAgIGxldCBkdHMgPSBzYW1wbGUuZHRzO1xyXG4gICAgICBsZXQgY3RzID0gc2FtcGxlLmN0cztcclxuICAgICAgbGV0IHB0cyA9IGR0cyArIGN0cztcclxuXHJcbiAgICAgIGlmIChmaXJzdER0cyA9PT0gLTEpIHtcclxuICAgICAgICBmaXJzdER0cyA9IGR0cztcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHNhbXBsZUR1cmF0aW9uID0gMDtcclxuXHJcbiAgICAgIGlmIChpID09PSBzYW1wbGVzTGVuIC0gMSkge1xyXG4gICAgICAgIC8vIGxhc3Qgc2FtcGxlXHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RWaWRlb1NhbXBsZSkge1xyXG4gICAgICAgICAgc2FtcGxlRHVyYXRpb24gPSB0aGlzLl9sYXN0VmlkZW9TYW1wbGUuZHRzIC0gZHRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IodGhpcy5fdmlkZW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2FtcGxlRHVyYXRpb24gPSBzYW1wbGVzW2kgKyAxXS5kdHMgLSBkdHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGxvZ2dlci5sb2coJ3ZpZGVvIGR1cmF0aW9uJyxzYW1wbGVEdXJhdGlvbix0aGlzLl92aWRlb01ldGEucmVmU2FtcGxlRHVyYXRpb24pO1xyXG5cclxuICAgICAgaWYgKHNhbXBsZUR1cmF0aW9uID4gQ29uZmlnLmxvc3RUaHJlc2hvbGQpIHtcclxuICAgICAgICAvLyDkuK3pl7Tlj6/og73kuKLlpLHkuoZzYW1wbGVcclxuICAgICAgICBsb2dnZXIud2Fybihgc2FtcGxlIGR1cmF0aW9uPSR7c2FtcGxlRHVyYXRpb259LCBzb21lIHZpZGVvIHNhbXBsZSBtYXkgYmUgbG9zdC5gKTtcclxuICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IodGhpcy5fdmlkZW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uKTtcclxuICAgICAgICBpZiAodGhpcy5fbGFzdFZpZGVvU2FtcGxlKSB7XHJcbiAgICAgICAgICBzYW1wbGVzLnB1c2godGhpcy5fbGFzdFZpZGVvU2FtcGxlKTtcclxuICAgICAgICAgIHRoaXMuX2xhc3RWaWRlb1NhbXBsZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1heUxvc3QgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXNLZXlmcmFtZSkge1xyXG4gICAgICAgIGhhc0tleWZyYW1lID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbXA0U2FtcGxlcy5wdXNoKHtcclxuICAgICAgICBkdHM6IGR0cyxcclxuICAgICAgICBwdHM6IHB0cyxcclxuICAgICAgICBjdHM6IGN0cyxcclxuICAgICAgICB1bml0czogc2FtcGxlLnVuaXRzLFxyXG4gICAgICAgIHNpemU6IHNhbXBsZS5sZW5ndGgsXHJcbiAgICAgICAgaXNLZXlmcmFtZTogaXNLZXlmcmFtZSxcclxuICAgICAgICBkdXJhdGlvbjogc2FtcGxlRHVyYXRpb24sXHJcbiAgICAgICAgZmxhZ3M6IHtcclxuICAgICAgICAgIGlzTGVhZGluZzogMCxcclxuICAgICAgICAgIGRlcGVuZHNPbjogaXNLZXlmcmFtZSA/IDIgOiAxLFxyXG4gICAgICAgICAgaXNEZXBlbmRlZE9uOiBpc0tleWZyYW1lID8gMSA6IDAsXHJcbiAgICAgICAgICBoYXNSZWR1bmRhbmN5OiAwLFxyXG4gICAgICAgICAgaXNOb25TeW5jOiBpc0tleWZyYW1lID8gMCA6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2FtcGxlLnVuaXRzLmZvckVhY2godW5pdCA9PiB7XHJcbiAgICAgICAgZGF0YUxlbiArPSB1bml0LmRhdGEuYnl0ZUxlbmd0aDtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIHdyaXRlIG1kYXRcclxuICAgICAgLy8gc2FtcGxlLnVuaXRzLmZvckVhY2godW5pdCA9PiBiYS53cml0ZSh1bml0LmRhdGEpKTtcclxuXHJcbiAgICAgIC8vIHNldCB2aWRlb1RyYWNrIHRzXHJcbiAgICAgIGlmIChpID09PSBzYW1wbGVzTGVuIC0gMSkge1xyXG4gICAgICAgIGxhc3R0cyA9IHNhbXBsZS5kdHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtYXlMb3N0KSB7XHJcbiAgICAgICAgc2FtcGxlc0xlbiA9IGkgKyAxO1xyXG4gICAgICAgIG5leHRTYW1wbGVzID0gc2FtcGxlcy5zcGxpY2Uoc2FtcGxlc0xlbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB3b3JrYXJvdW5kIGZvciBjaHJvbWUgPCA1MDogZm9yY2UgZmlyc3Qgc2FtcGxlIGFzIGEgcmFuZG9tIGFjY2VzcyBwb2ludFxyXG4gICAgLy8gc2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTIyOTQxMlxyXG4gICAgaWYgKFxyXG4gICAgICBCcm93c2VyLmNocm9tZSAmJlxyXG4gICAgICAoQnJvd3Nlci52ZXJzaW9uLm1ham9yIDwgNTAgfHxcclxuICAgICAgICAoQnJvd3Nlci52ZXJzaW9uLm1ham9yID09PSA1MCAmJiBCcm93c2VyLnZlcnNpb24uYnVpbGQgPCAyNjYxKSlcclxuICAgICkge1xyXG4gICAgICBsZXQgZmxhZ3MgPSBtcDRTYW1wbGVzWzBdLmZsYWdzO1xyXG4gICAgICBmbGFncy5kZXBlbmRzT24gPSAyO1xyXG4gICAgICBmbGFncy5pc05vblN5bmMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBiYTogQnl0ZUFycmF5ID0gbmV3IEJ5dGVBcnJheSh7IGluaXRMZW5ndGg6IGRhdGFMZW4gfSk7XHJcbiAgICBzYW1wbGVzLmZvckVhY2goc2FtcGxlID0+XHJcbiAgICAgIHNhbXBsZS51bml0cy5mb3JFYWNoKHVuaXQgPT4gYmEud3JpdGUodW5pdC5kYXRhKSlcclxuICAgICk7XHJcblxyXG4gICAgdHJhY2suc2FtcGxlcyA9IG1wNFNhbXBsZXM7XHJcblxyXG4gICAgbGV0IG1vb2YgPSBNUDQubW9vZih0cmFjaywgZmlyc3REdHMpO1xyXG4gICAgbGV0IG1kYXQgPSBNUDQubWRhdChuZXcgVWludDhBcnJheShiYS5idWZmZXIpKTtcclxuICAgIHRoaXMuX3ZpZGVvVHJhY2suYnVmZmVycy5wdXNoKHRoaXMuX21lcmdlQm94ZXMobW9vZiwgbWRhdCkuYnVmZmVyKTtcclxuICAgIHRoaXMuX3ZpZGVvVHJhY2sudHMgPSBsYXN0dHM7XHJcbiAgICB0aGlzLl92aWRlb1RyYWNrLnNlaSA9IHRyYWNrLnNlaTtcclxuICAgIHRoaXMuX3ZpZGVvVHJhY2suaGFzS2V5ZnJhbWUgPSBoYXNLZXlmcmFtZTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdHJhY2tcclxuICAgIHRyYWNrLnNlcXVlbmNlTnVtYmVyKys7XHJcbiAgICB0cmFjay5zYW1wbGVzLnNwbGljZSgwLCBzYW1wbGVzTGVuKTtcclxuICAgIHRyYWNrLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgaWYgKG1heUxvc3QpIHtcclxuICAgICAgdHJhY2suc2FtcGxlcyA9IG5leHRTYW1wbGVzO1xyXG4gICAgICB0cmFjay5sZW5ndGggKz0gbmV4dFNhbXBsZXMubGVuZ3RoO1xyXG4gICAgICB0aGlzLl9yZW11eFZpZGVvKHRyYWNrLCBlbmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX21lcmdlQm94ZXMobW9vZjogVWludDhBcnJheSwgbWRhdDogVWludDhBcnJheSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KG1vb2YuYnl0ZUxlbmd0aCArIG1kYXQuYnl0ZUxlbmd0aCk7XHJcbiAgICByZXN1bHQuc2V0KG1vb2YsIDApO1xyXG4gICAgcmVzdWx0LnNldChtZGF0LCBtb29mLmJ5dGVMZW5ndGgpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saXZlL3JlbXV4L21wNC1yZW11eGVyLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vY29yZS9saXZlLXBsYXllclwiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9lcnJvclwiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vbG9hZGVyXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saXZlL2luZGV4LnRzIiwiaW1wb3J0IFwiLi4vdXRpbC9wb2x5ZmlsbFwiO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCI7XHJcbmltcG9ydCB7IFRvTVNFLCBJTWVkaWFIYW5kbGVyIH0gZnJvbSBcIi4uL21lZGlhLWhhbmRsZXJcIjtcclxuaW1wb3J0IHsgYmluZEFsbCB9IGZyb20gXCIuLi91dGlsL2JpbmQtYWxsXCI7XHJcbmltcG9ydCB7IElMb2FkZXIsIEZldGNoU3RyZWFtTG9hZGVyLCBNb3pDaHVua2VkTG9hZGVyIH0gZnJvbSBcIi4uL2xvYWRlclwiO1xyXG5pbXBvcnQgTWVkaWFJbmZvIGZyb20gXCIuL21lZGlhLWluZm9cIjtcclxuaW1wb3J0IHsgRmx2Mm1wNCB9IGZyb20gXCIuL2ZsdjJtcDRcIjtcclxuaW1wb3J0IHsgRHlEZW11eEVycm9yIH0gZnJvbSBcIi4vZXJyb3JcIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vdXRpbC9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJFdmVudHMgPSB7XHJcbiAgT05fTUVESUFfSU5GTzogXCJtZWRpYUluZm9cIixcclxuICBPTl9GSVJTVF9GUkFNRTogXCJmaXJzdEZyYW1lXCIsXHJcbiAgT05fRVJST1I6IFwiZXJyb3JcIlxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlnIHtcclxuICAvKiog5pKt5pS+dXJsICovXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgLyoqIHVybCBsb2FkZXLvvIzpu5jorqTmmK/lhoXnva7nmoRGZXRjaFN0cmVhbUxvYWRlcu+8jOWPr+S8oOWFpeWklumDqGxvYWRlcuaUr+aMgeabtOWkmuWcuuaZr++8iOavlOWmgnAycO+8iSAqL1xyXG4gIGxvYWRlcj86IElMb2FkZXI7XHJcbiAgLyoqIOS9v+eUqHdlYiB3b3JrZXIgKi9cclxuICBlbmFibGVXb3JrZXI/OiBib29sZWFuO1xyXG4gIC8qKiDosIPor5XmqKHlvI8gKi9cclxuICBkZWJ1Zz86IGJvb2xlYW47XHJcbiAgLyoqIOaYr+WQpuWMheWQq+inhumikSAqL1xyXG4gIGhhc1ZpZGVvPzogYm9vbGVhbjtcclxuICAvKiog5piv5ZCm5YyF5ZCr6Z+z6aKRICovXHJcbiAgaGFzQXVkaW8/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGl2ZVBsYXllciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgcHJpdmF0ZSBfbG9hZGVyOiBJTG9hZGVyO1xyXG4gIHByaXZhdGUgX21lZGlhSGFuZGxlcjogSU1lZGlhSGFuZGxlcjtcclxuICBwcml2YXRlIF9mbHYybXA0OiBGbHYybXA0O1xyXG4gIHByaXZhdGUgX3ZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xyXG4gIHByaXZhdGUgX2NvbmZpZzogSUNvbmZpZztcclxuXHJcbiAgcHJpdmF0ZSBfaXNGaXJzdEZyYW1lRW1pdHRlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IElDb25maWcpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBiaW5kQWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHtcclxuICAgICAgICBlbmFibGVXb3JrZXI6IHRydWUsXHJcbiAgICAgICAgZGVidWc6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5sb2FkZXIpIHtcclxuICAgICAgaWYgKEZldGNoU3RyZWFtTG9hZGVyLmlzU3VwcG9ydGVkKCkpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBuZXcgRmV0Y2hTdHJlYW1Mb2FkZXIoKTtcclxuICAgICAgfSBlbHNlIGlmIChNb3pDaHVua2VkTG9hZGVyLmlzU3VwcG9ydGVkKCkpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBuZXcgTW96Q2h1bmtlZExvYWRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9sb2FkZXIgPSB0aGlzLl9jb25maWcubG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fbG9hZGVyKSB7XHJcbiAgICAgIHRoaXMuX29uRXJyb3IobmV3IER5RGVtdXhFcnJvcihcIkRvIG5vdCBoYXMgc3VwcG9ydGVkIGxvYWRlci5cIikpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbWVkaWFIYW5kbGVyID0gbmV3IFRvTVNFKCk7XHJcbiAgICB0aGlzLl9tZWRpYUhhbmRsZXIub25IYXNLZXlmcmFtZSA9IHRoaXMuX29uRmlyc3RGcmFtZTtcclxuXHJcbiAgICB0aGlzLl9mbHYybXA0ID0gbmV3IEZsdjJtcDQodGhpcy5fbG9hZGVyLCB0aGlzLl9tZWRpYUhhbmRsZXIsIHRoaXMuX2NvbmZpZyk7XHJcbiAgICB0aGlzLl9mbHYybXA0Lm9uSW5pdCA9IHRoaXMuX29uSW5pdDtcclxuICAgIHRoaXMuX2ZsdjJtcDQub25FcnJvciA9IHRoaXMuX29uRXJyb3I7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgdGhpcy5wYXVzZSgpO1xyXG5cclxuICAgIHRoaXMuZGV0YWNoKCk7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLl9mbHYybXA0KSB7XHJcbiAgICAgIHRoaXMuX2ZsdjJtcDQuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLl9mbHYybXA0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fbG9hZGVyKSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5kaXNwb3NlKCk7XHJcbiAgICAgIHRoaXMuX2xvYWRlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX21lZGlhSGFuZGxlcikge1xyXG4gICAgICB0aGlzLl9tZWRpYUhhbmRsZXIuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLl9tZWRpYUhhbmRsZXIgPSBudWxsOyAgICBcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIHRoaXMuX2xvYWRlci5sb2FkKHRoaXMuX2NvbmZpZy51cmwpO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoKHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9tZWRpYUhhbmRsZXIuYXR0YWNoKHZpZGVvKTtcclxuICAgIHRoaXMuX3ZpZGVvID0gdmlkZW87XHJcbiAgICAvLyDnuq/pn7PpopHmtYHmsqHmnIlrZXlmcmFtZe+8jOS9v+eUqGxvYWRlZG1ldGFkYXRh6K6h566X6aaW5binXHJcbiAgICB0aGlzLl92aWRlby5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkbWV0YWRhdGFcIiwgdGhpcy5fb25GaXJzdEZyYW1lKTtcclxuICB9XHJcblxyXG4gIGRldGFjaCgpIHtcclxuICAgIHRoaXMuX21lZGlhSGFuZGxlciAmJiB0aGlzLl9tZWRpYUhhbmRsZXIuZGV0YWNoKCk7XHJcbiAgICBpZiAodGhpcy5fdmlkZW8pIHtcclxuICAgICAgdGhpcy5fdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRlZG1ldGFkYXRhXCIsIHRoaXMuX29uRmlyc3RGcmFtZSk7XHJcbiAgICAgIHRoaXMuX3ZpZGVvID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBsYXkoKSB7XHJcbiAgICB0aGlzLl92aWRlbyAmJiB0aGlzLl92aWRlby5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBwYXVzZSgpIHtcclxuICAgIHRoaXMuX3ZpZGVvICYmIHRoaXMuX3ZpZGVvLnBhdXNlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0SW5mbygpIHtcclxuICAgIGxldCBzdGF0ID0ge1xyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICAgIHJlZGlyZWN0ZWRVUkw6IFwiXCIsXHJcbiAgICAgIGxvYWRlckJ5dGVzOiAwLFxyXG4gICAgICBkZWNvZGVkRnJhbWVzOiAwLFxyXG4gICAgICBkcm9wcGVkRnJhbWVzOiAwLFxyXG4gICAgICBjZG5CeXRlczogMCxcclxuICAgICAgcDJwQnl0ZXM6IDBcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuX2xvYWRlcikge1xyXG4gICAgICBzdGF0LnVybCA9IHRoaXMuX2xvYWRlci51cmw7XHJcbiAgICAgIHN0YXQucmVkaXJlY3RlZFVSTCA9IHRoaXMuX2xvYWRlci5yZWRpcmVjdFVybDtcclxuICAgICAgbGV0IHsgbG9hZGVyQnl0ZXMsIGNkbkJ5dGVzLCBwMnBCeXRlcyB9ID0gdGhpcy5fbG9hZGVyLmdldFN0YXRpc3RpY3MoKTtcclxuICAgICAgc3RhdC5sb2FkZXJCeXRlcyA9IGxvYWRlckJ5dGVzO1xyXG4gICAgICBzdGF0LmNkbkJ5dGVzID0gY2RuQnl0ZXM7XHJcbiAgICAgIHN0YXQucDJwQnl0ZXMgPSBwMnBCeXRlcztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fdmlkZW8pIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl92aWRlby5nZXRWaWRlb1BsYXliYWNrUXVhbGl0eSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgbGV0IHZpZGVvUGxheWJhY2tRdWFsaXR5ID0gdGhpcy5fdmlkZW8uZ2V0VmlkZW9QbGF5YmFja1F1YWxpdHkoKTtcclxuICAgICAgICBzdGF0LmRlY29kZWRGcmFtZXMgPSB2aWRlb1BsYXliYWNrUXVhbGl0eS50b3RhbFZpZGVvRnJhbWVzO1xyXG4gICAgICAgIHN0YXQuZHJvcHBlZEZyYW1lcyA9IHZpZGVvUGxheWJhY2tRdWFsaXR5LmRyb3BwZWRWaWRlb0ZyYW1lcztcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLl92aWRlb1tcIndlYmtpdERlY29kZWRGcmFtZUNvdW50XCJdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzdGF0LmRlY29kZWRGcmFtZXMgPSB0aGlzLl92aWRlb1tcIndlYmtpdERlY29kZWRGcmFtZUNvdW50XCJdO1xyXG4gICAgICAgIHN0YXQuZHJvcHBlZEZyYW1lcyA9IHRoaXMuX3ZpZGVvW1wid2Via2l0RHJvcHBlZEZyYW1lQ291bnRcIl07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0O1xyXG4gIH1cclxuXHJcbiAgX29uSW5pdChtZWRpYUluZm86IE1lZGlhSW5mbykge1xyXG4gICAgdGhpcy5lbWl0KFBsYXllckV2ZW50cy5PTl9NRURJQV9JTkZPLCBtZWRpYUluZm8pO1xyXG4gIH1cclxuXHJcbiAgX29uRmlyc3RGcmFtZSgpIHtcclxuICAgIGlmICghdGhpcy5faXNGaXJzdEZyYW1lRW1pdHRlZCkge1xyXG4gICAgICB0aGlzLl9pc0ZpcnN0RnJhbWVFbWl0dGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5lbWl0KFBsYXllckV2ZW50cy5PTl9GSVJTVF9GUkFNRSk7XHJcbiAgICAgIGxvZ2dlci5sb2coYGZpcnN0IGZyYW1lIGZyb20gJHthcmd1bWVudHNbMF0gPyBcIm1ldGFcIiA6IFwia2V5ZnJhbWVcIn1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vbkVycm9yKHJlYXNvbikge1xyXG4gICAgLy8gZGVsYXkgZW1pdFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdChQbGF5ZXJFdmVudHMuT05fRVJST1IsIHJlYXNvbik7XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGl2ZS9jb3JlL2xpdmUtcGxheWVyLnRzIiwiLy8gcG9seWZpbGwgZm9yIE9iamVjdC5hc3NpZ25cclxuaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9IFwiZnVuY3Rpb25cIikge1xyXG4gIC8vIE11c3QgYmUgd3JpdGFibGU6IHRydWUsIGVudW1lcmFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LCBcImFzc2lnblwiLCB7XHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgdmFyQXJncykge1xyXG4gICAgICAvLyAubGVuZ3RoIG9mIGZ1bmN0aW9uIGlzIDJcclxuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xyXG4gICAgICAgIC8vIFR5cGVFcnJvciBpZiB1bmRlZmluZWQgb3IgbnVsbFxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3RcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XHJcblxyXG4gICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcclxuICAgICAgICAgIC8vIFNraXAgb3ZlciBpZiB1bmRlZmluZWQgb3IgbnVsbFxyXG4gICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XHJcbiAgICAgICAgICAgIC8vIEF2b2lkIGJ1Z3Mgd2hlbiBoYXNPd25Qcm9wZXJ0eSBpcyBzaGFkb3dlZFxyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRTb3VyY2UsIG5leHRLZXkpKSB7XHJcbiAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0bztcclxuICAgIH0sXHJcbiAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGl2ZS91dGlsL3BvbHlmaWxsLmpzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGludGVyZmFjZSBJTWVkaWFIYW5kbGVyIHtcclxuICBvbkhhc0tleWZyYW1lOiAoKSA9PiB2b2lkO1xyXG4gIFxyXG4gIG9uRXJyb3I6IChyZWFzb24/KSA9PiB2b2lkO1xyXG5cclxuICBkaXNwb3NlKCk7XHJcblxyXG4gIGFwcGVuZERhdGEodHJhY2tzOiBhbnlbXSk7XHJcblxyXG4gIGFwcGVuZEVuZCgpO1xyXG5cclxuICBhdHRhY2godmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpO1xyXG5cclxuICBkZXRhY2goKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IHsgVG9GaWxlIH0gZnJvbSBcIi4vdG8tZmlsZVwiO1xyXG5leHBvcnQgeyBUb01TRSB9IGZyb20gXCIuL3RvLW1zZVwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpdmUvbWVkaWEtaGFuZGxlci9pbmRleC50cyIsImltcG9ydCB7IElNZWRpYUhhbmRsZXIgfSBmcm9tIFwiLi9cIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vdXRpbC9sb2dnZXJcIjtcclxuaW1wb3J0IHsgYmluZEFsbCB9IGZyb20gXCIuLi91dGlsL2JpbmQtYWxsXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb3JlL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBEeU1lZGlhRXJyb3IgfSBmcm9tIFwiLi4vY29yZS9lcnJvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmFjayB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBjb250YWluZXI6IHN0cmluZztcclxuICBjb2RlYzogc3RyaW5nO1xyXG4gIGRhdGE6IEFycmF5QnVmZmVyO1xyXG4gIHRzPzogbnVtYmVyO1xyXG4gIHNlaT86IG51bWJlcjtcclxuICBoYXNLZXlmcmFtZT86IGJvb2xlYW47XHJcbiAgdGltZU9mZnNldD86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIOS9v+eUqG1zZeaSreaUvuWqkuS9k+aVsOaNrlxyXG4gKlxyXG4gKiBAYXV0aG9yIHdhbmd4aW5nd2VpQGRvdXl1LnR2XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVG9NU0UgaW1wbGVtZW50cyBJTWVkaWFIYW5kbGVyIHtcclxuICBvbkhhc0tleWZyYW1lOiAoKSA9PiB2b2lkO1xyXG4gIG9uRXJyb3I6IChyZWFzb24/KSA9PiB2b2lkO1xyXG5cclxuICBwcmVUaW1lc3RhbXA6IG51bWJlciA9IDA7IC8vIHNka+W9k+WJjeino+eggeeahHB0c++8jOWNleS9je+8muavq+enklxyXG4gIHNlaVRpbWVzdGFtcDsgLy8gdGVuY2VudCBjbG91ZCBjdXN0b20gdGltZXN0YW1wXHJcblxyXG4gIHByaXZhdGUgX21lZGlhU291cmNlOiBNZWRpYVNvdXJjZTtcclxuICBwcml2YXRlIF9tZWRpYVNvdXJjZVVybDogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3ZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xyXG5cclxuICBwcml2YXRlIF90cmFja3NMaXN0OiBUcmFja1tdW10gPSBbXTtcclxuICBwcml2YXRlIF9zb3VyY2VCdWZmZXJBZGRlZCA9IHt9O1xyXG5cclxuICBwcml2YXRlIF9pc0xvYWRFbmRlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2lzUGxheUVuZGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaXNEaXNwb3NlZCA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9pc1dhaXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBfcmVhY2hDYW5wbGF5ID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgX2NoZWNrU3R1Y2tUaW1lcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBiaW5kQWxsKHRoaXMpO1xyXG5cclxuICAgIHdpbmRvd1tcIlRfQURWX1RpbWVzdGFtcFwiXSA9IHRoaXMuVF9BRFZfVGltZXN0YW1wO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIHRoaXMuZGV0YWNoKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX21lZGlhU291cmNlKSB7XHJcbiAgICAgIGlmICh0aGlzLl9tZWRpYVNvdXJjZS5yZWFkeVN0YXRlICE9PSBcImNsb3NlZFwiKSB7XHJcbiAgICAgICAgbGV0IHNvdXJjZUJ1ZmZlcnMgPSB0aGlzLl9tZWRpYVNvdXJjZS5zb3VyY2VCdWZmZXJzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlQnVmZmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IGJ1ZmZlciA9IHNvdXJjZUJ1ZmZlcnNbaV07XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl9tZWRpYVNvdXJjZS5yZW1vdmVTb3VyY2VCdWZmZXIoYnVmZmVyKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXCJyZW1vdmUgc291cmNlIGJ1ZmZlciBlcnJvcjogXCIsIGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnVmZmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVlbmRcIiwgdGhpcy5fb25VcGRhdGVlbmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX21lZGlhU291cmNlLnJlYWR5U3RhdGUgPT09IFwib3BlblwiKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHRoaXMuX21lZGlhU291cmNlLmVuZE9mU3RyZWFtKCk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICBsb2dnZXIud2FybignZW5kT2ZTdHJlYW0gZXJyb3I6ICcsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9tZWRpYVNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwic291cmNlb3BlblwiLCB0aGlzLl9hcHBlbmRCdWZmZXIpO1xyXG4gICAgICB0aGlzLl9tZWRpYVNvdXJjZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX21lZGlhU291cmNlVXJsKSB7XHJcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5fbWVkaWFTb3VyY2VVcmwpO1xyXG4gICAgICB0aGlzLl9tZWRpYVNvdXJjZVVybCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdHJhY2tzTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5fc291cmNlQnVmZmVyQWRkZWQgPSB7fTtcclxuICAgIHRoaXMuX2lzRGlzcG9zZWQgPSB0cnVlO1xyXG5cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLl9jaGVja1N0dWNrVGltZXIpO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kRGF0YSh0cmFja3MpIHtcclxuICAgIGlmICh0aGlzLl9pc0Rpc3Bvc2VkKSByZXR1cm47XHJcblxyXG4gICAgdHJhY2tzLmZvckVhY2goKHRyYWNrLCBpKSA9PiB7XHJcbiAgICAgIGxldCBsaXN0ID0gdGhpcy5fdHJhY2tzTGlzdFtpXTtcclxuICAgICAgaWYgKCFsaXN0KSBsaXN0ID0gdGhpcy5fdHJhY2tzTGlzdFtpXSA9IFtdO1xyXG4gICAgICBsaXN0LnB1c2godHJhY2spO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9hcHBlbmRCdWZmZXIoKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZEVuZCgpIHtcclxuICAgIGlmICh0aGlzLl9pc0Rpc3Bvc2VkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5faXNMb2FkRW5kZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuX21lZGlhU291cmNlICYmIHRoaXMuX21lZGlhU291cmNlLnJlYWR5U3RhdGUgPT09IFwib3BlblwiKSB7XHJcbiAgICAgIGxldCBidWZmZXJzID0gdGhpcy5fbWVkaWFTb3VyY2Uuc291cmNlQnVmZmVycztcclxuICAgICAgbGV0IHVwZGF0aW5nID0gZmFsc2U7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBidWZmZXIgPSBidWZmZXJzW2ldO1xyXG4gICAgICAgIGlmIChidWZmZXIudXBkYXRpbmcpIHtcclxuICAgICAgICAgIHVwZGF0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIXVwZGF0aW5nKSB0aGlzLl9tZWRpYVNvdXJjZS5lbmRPZlN0cmVhbSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXR0YWNoKHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50KSB7XHJcbiAgICB0aGlzLl92aWRlbyA9IHZpZGVvO1xyXG4gICAgdGhpcy5fdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcInN0YWxsZWRcIiwgdGhpcy5fb25TdGFsbGVkKTtcclxuICAgIHRoaXMuX3ZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCB0aGlzLl9vblByb2dyZXNzKTtcclxuICAgIHRoaXMuX3ZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5XCIsIHRoaXMuX29uQ2FucGxheSk7XHJcbiAgICB0aGlzLl92aWRlby5hZGRFdmVudExpc3RlbmVyKFwid2FpdGluZ1wiLCB0aGlzLl9vbldhaXRpbmcpO1xyXG4gICAgdGhpcy5fdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHRoaXMuX29uRW5kZWQpO1xyXG4gICAgdGhpcy5fdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIHRoaXMuX29uTWVkaWFFcnJvcik7XHJcbiAgICBpZiAoIXRoaXMuX21lZGlhU291cmNlVXJsKSB7XHJcbiAgICAgIGxldCBtZWRpYVNvdXJjZSA9ICh0aGlzLl9tZWRpYVNvdXJjZSA9IG5ldyBNZWRpYVNvdXJjZSgpKTtcclxuICAgICAgbWVkaWFTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcihcInNvdXJjZW9wZW5cIiwgdGhpcy5fYXBwZW5kQnVmZmVyKTtcclxuICAgICAgdGhpcy5fbWVkaWFTb3VyY2VVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG1lZGlhU291cmNlKTtcclxuICAgIH1cclxuICAgIHZpZGVvLnNyYyA9IHRoaXMuX21lZGlhU291cmNlVXJsO1xyXG4gIH1cclxuXHJcbiAgZGV0YWNoKCkge1xyXG4gICAgaWYgKHRoaXMuX3ZpZGVvKSB7XHJcbiAgICAgIHRoaXMuX3ZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdGFsbGVkXCIsIHRoaXMuX29uU3RhbGxlZCk7XHJcbiAgICAgIHRoaXMuX3ZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCB0aGlzLl9vblByb2dyZXNzKTtcclxuICAgICAgdGhpcy5fdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgdGhpcy5fb25DYW5wbGF5KTtcclxuICAgICAgdGhpcy5fdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndhaXRpbmdcIiwgdGhpcy5fb25XYWl0aW5nKTtcclxuICAgICAgdGhpcy5fdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHRoaXMuX29uRW5kZWQpO1xyXG4gICAgICB0aGlzLl92aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgdGhpcy5fb25NZWRpYUVycm9yKTtcclxuICAgICAgdGhpcy5fdmlkZW8uc3JjID0gXCJcIjtcclxuICAgICAgdGhpcy5fdmlkZW8ucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xyXG4gICAgICB0aGlzLl92aWRlbyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwZW5kQnVmZmVyKCkge1xyXG4gICAgaWYgKCF0aGlzLl9tZWRpYVNvdXJjZSB8fCB0aGlzLl9tZWRpYVNvdXJjZS5yZWFkeVN0YXRlICE9PSBcIm9wZW5cIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90cmFja3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBsaXN0ID0gdGhpcy5fdHJhY2tzTGlzdFtpXTtcclxuICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHRyYWNrID0gbGlzdFswXTtcclxuICAgICAgbGV0IHNiID0gdGhpcy5fc291cmNlQnVmZmVyQWRkZWRbdHJhY2suaWRdO1xyXG4gICAgICBpZiAoIXNiKSB7XHJcbiAgICAgICAgLy8gYWRkIHNvdXJjZSBidWZmZXJcclxuICAgICAgICBsZXQgY29kZWMgPSBgJHt0cmFjay5jb250YWluZXJ9OyBjb2RlY3M9XCIke3RyYWNrLmNvZGVjfVwiYDtcclxuICAgICAgICBpZiAoTWVkaWFTb3VyY2UuaXNUeXBlU3VwcG9ydGVkKGNvZGVjKSkge1xyXG4gICAgICAgICAgbGV0IHNiID0gdGhpcy5fbWVkaWFTb3VyY2UuYWRkU291cmNlQnVmZmVyKGNvZGVjKTtcclxuICAgICAgICAgIC8vIGZpcmVmb3jkvb/nlKhzZXF1ZW5jZeaooeW8j+S8mOWMluWNoeS9j+WPiumfs+eUu+S4jeWQjOatpeeOsOixoVxyXG4gICAgICAgICAgLy8gaWYgKEJyb3dzZXIuZmlyZWZveCkgc2IubW9kZSA9IFwic2VxdWVuY2VcIjtcclxuICAgICAgICAgIHRoaXMuX3NvdXJjZUJ1ZmZlckFkZGVkW3RyYWNrLmlkXSA9IHNiO1xyXG4gICAgICAgICAgc2IuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZWVuZFwiLCB0aGlzLl9vblVwZGF0ZWVuZCk7ICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9vbkVycm9yKGBVbnN1cHBvcnRlZCBNSU1FIHR5cGUgb3IgY29kZWM6ICR7Y29kZWN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGFwcGVuZCBidWZmZXIgZGF0YVxyXG4gICAgICAgIGlmICghc2IudXBkYXRpbmcpIHtcclxuICAgICAgICAgIGlmICh0cmFjayAmJiB0cmFjay5kYXRhICYmIHRyYWNrLmRhdGEuYnl0ZUxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAvLyDku47op6PnoIHlmajkuK3mi7/liLDml7bpl7TmiLNcclxuICAgICAgICAgICAgICBpZiAodHJhY2sudHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlVGltZXN0YW1wID0gdHJhY2sudHM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmICh0cmFjay5zZWkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VpVGltZXN0YW1wID0gdHJhY2suc2VpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLy8gdXBkYXRlIHRpbWVvZmZzZXRcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHRyYWNrLnRpbWVPZmZzZXQgPT09ICdudW1iZXInICYmIHRyYWNrLnRpbWVPZmZzZXQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzYi50aW1lc3RhbXBPZmZzZXQgPSB0cmFjay50aW1lT2Zmc2V0IC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYGJ1ZmZlciB0aW1lIG9mZnNldCBjaGFuZ2U6ICR7c2IudGltZXN0YW1wT2Zmc2V0fWApXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBzYi5hcHBlbmRCdWZmZXIodHJhY2suZGF0YSk7IC8vYXBwZW5kXHJcblxyXG4gICAgICAgICAgICAgIGlmICh0cmFjay5oYXNLZXlmcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkhhc0tleWZyYW1lICYmIHRoaXMub25IYXNLZXlmcmFtZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgZGVsZXRlIHRyYWNrLmRhdGE7XHJcbiAgICAgICAgICAgICAgbGlzdC5zaGlmdCgpOyAvLyByZW1vdmUgYXBwZW5kZWQgdHJhY2tcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBsb2dnZXIud2FybihgYXBwZW5kIGJ1ZmZlciBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gMjIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFF1b3RhRXhjZWVkZWRFcnJvclxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkVycm9yKGBhcHBlbmQgYnVmZmVyIGVycm9yOiAke2Vycm9yfWApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdC5zaGlmdCgpOyAvLyBqdW1wIG92ZXIgbm8tZGF0YSB0cmFja1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3JlbW92ZUJ1ZmZlcigpIHtcclxuICAgIGlmICh0aGlzLl92aWRlbykge1xyXG4gICAgICBsZXQgcGxheXRpbWUgPSB0aGlzLl92aWRlby5jdXJyZW50VGltZTtcclxuICAgICAgbGV0IHNvdXJjZUJ1ZmZlcnMgPSB0aGlzLl9tZWRpYVNvdXJjZS5zb3VyY2VCdWZmZXJzO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZUJ1ZmZlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgc2IgPSBzb3VyY2VCdWZmZXJzW2ldO1xyXG4gICAgICAgIGlmICghc2IudXBkYXRpbmcpIHtcclxuICAgICAgICAgIGxldCBidWZmZXJlZCA9IHNiLmJ1ZmZlcmVkO1xyXG4gICAgICAgICAgaWYgKGJ1ZmZlcmVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlcmVkLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAvLyDlpJrmrrVidWZmZXLvvIzpgJDmrrXmuIXnqbpcclxuICAgICAgICAgICAgICAvLyDliY3lkI7lpJrliqAwLjHkv67mraPvvIzpmLLmraJyZW1vdmXlpLHotKVcclxuICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBNYXRoLm1heChidWZmZXJlZC5zdGFydCgwKSAtIDAuMSwgMCk7XHJcbiAgICAgICAgICAgICAgbGV0IGVuZCA9IGJ1ZmZlcmVkLmVuZCgwKSArIDAuMTtcclxuICAgICAgICAgICAgICBpZiAoZW5kIDwgcGxheXRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHNiLnJlbW92ZShzdGFydCwgZW5kKTtcclxuICAgICAgICAgICAgICAgIC8vIGxvZ2dlci5sb2coYHJlbW92ZSB3aG9sZSBidWZmZXIgJHtzdGFydH0gJHtlbmR9ICR7cGxheXRpbWV9YCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGxldCBzdGFydCA9IE1hdGgubWF4KGJ1ZmZlcmVkLnN0YXJ0KDApIC0gMC4xLCAwKTsgLy9maXJzdCBzdGFydFxyXG4gICAgICAgICAgICAgIGlmIChwbGF5dGltZSAtIHN0YXJ0ID4gQ29uZmlnLnZpZGVvQmFja1RpbWVUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmQgPSBwbGF5dGltZSAtIENvbmZpZy52aWRlb0JhY2tUaW1lO1xyXG4gICAgICAgICAgICAgICAgc2IucmVtb3ZlKHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICAgICAgLy8gbG9nZ2VyLmxvZyhgcmVtb3ZlIHBhcnQgYnVmZmVyICR7c3RhcnR9ICR7ZW5kfSAke3BsYXl0aW1lfWApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29uVXBkYXRlZW5kKCkge1xyXG4gICAgdGhpcy5fcmVtb3ZlQnVmZmVyKCk7XHJcbiAgICB0aGlzLl9hcHBlbmRCdWZmZXIoKTtcclxuICAgIGlmICh0aGlzLl9pc0xvYWRFbmRlZCkgdGhpcy5hcHBlbmRFbmQoKTtcclxuICB9XHJcblxyXG4gIF9jaGVja1N0YXJ0U3R1Y2soKSB7XHJcbiAgICBsZXQgYnVmZmVyZWQgPSB0aGlzLl92aWRlby5idWZmZXJlZDtcclxuICAgIGlmIChidWZmZXJlZC5sZW5ndGggPiAwICYmIHRoaXMuX3ZpZGVvLnJlYWR5U3RhdGUgPCAyKSB7XHJcbiAgICAgIC8vIEhBVkVfQ1VSUkVOVF9EQVRBXHJcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5fdmlkZW8uY3VycmVudFRpbWU7XHJcbiAgICAgIGxldCBzdGFydCA9IGJ1ZmZlcmVkLnN0YXJ0KDApO1xyXG4gICAgICBsZXQgZW5kID0gYnVmZmVyZWQuZW5kKDApO1xyXG4gICAgICBpZiAoY3VycmVudCA8IHN0YXJ0KSB7XHJcbiAgICAgICAgLy8gY2hlY2sgc3RhcnRcclxuICAgICAgICBsb2dnZXIubG9nKFxyXG4gICAgICAgICAgYHBsYXllciBzdHVjaywgcmVjb3ZlciBmcm9tICR7Y3VycmVudH0gdG8gJHtzdGFydH0gLS0gJHtlbmR9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5fdmlkZW8uY3VycmVudFRpbWUgPSBzdGFydDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NoZWNrUGxheVN0dWNrKCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2NoZWNrU3R1Y2tUaW1lcik7XHJcbiAgICAvLyDlvLrliLbkv67mlLnmkq3mlL7lpLTvvIzot7Pov4didWZmZXLpl7TpmplcclxuICAgIGxldCBidWZmZXJlZCA9IHRoaXMuX3ZpZGVvLmJ1ZmZlcmVkO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLl9pc1dhaXRpbmcgJiZcclxuICAgICAgYnVmZmVyZWQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAhdGhpcy5faXNQbGF5RW5kZWQgJiZcclxuICAgICAgIXRoaXMuX3ZpZGVvLnNlZWtpbmdcclxuICAgICkge1xyXG4gICAgICBsZXQgY3VycmVudCA9IHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lO1xyXG4gICAgICBsZXQgZW5kID0gYnVmZmVyZWQuZW5kKGJ1ZmZlcmVkLmxlbmd0aCAtIDEpO1xyXG4gICAgICBsZXQgZGVsdGEgPSBlbmQgLSBjdXJyZW50O1xyXG4gICAgICBpZiAoZGVsdGEgPiA0KSB7XHJcbiAgICAgICAgLy8gY2FucGxheeacgOaZmmNocm9tZeWPr+iDveWcqDNz5bem5Y+z6Kem5Y+RLGZpcmVmb3ggMC54c1xyXG4gICAgICAgIGxldCBzdGFydCA9IGJ1ZmZlcmVkLnN0YXJ0KGJ1ZmZlcmVkLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIGxldCBqdW1wID0gTWF0aC5tYXgodGhpcy5fdmlkZW8uY3VycmVudFRpbWUgKyAxLCBzdGFydCk7XHJcbiAgICAgICAgaWYgKGVuZCAtIGp1bXAgPiAyKSB7XHJcbiAgICAgICAgICB0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IGp1bXA7XHJcbiAgICAgICAgICBsb2dnZXIud2FybihcclxuICAgICAgICAgICAgYHBsYXllciBzdHVjaywgZm9yY2UgbW92ZSBmb3J3YXJkOiAke2RlbHRhfSwgJHtjdXJyZW50fSAtPiAke2p1bXB9YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5fbWVkaWFTb3VyY2Uuc291cmNlQnVmZmVycywgc2IgPT5cclxuICAgICAgICAgIC8vICAgdGhpcy5fcHJpbnRCdWZmZXIoc2IuYnVmZmVyZWQpXHJcbiAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgdGhpcy5fcHJpbnRCdWZmZXIodGhpcy5fdmlkZW8uYnVmZmVyZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyDnu6fnu63mo4DmtYtcclxuICAgICAgdGhpcy5fY2hlY2tTdHVja1RpbWVyID0gc2V0VGltZW91dCh0aGlzLl9jaGVja1BsYXlTdHVjaywgMjAwMCk7XHJcblxyXG4gICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlcmVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vICAgbGV0IHN0YXJ0ID0gYnVmZmVyZWQuc3RhcnQoaSk7XHJcbiAgICAgIC8vICAgaWYgKGN1cnJlbnQgPCBzdGFydCkge1xyXG4gICAgICAvLyAgICAgbG9nZ2VyLndhcm4oXHJcbiAgICAgIC8vICAgICAgIGBwbGF5ZXIgc3R1Y2ssIGZvcmNlIHJlY292ZXIgZnJvbSAke2N1cnJlbnR9IHRvICR7c3RhcnR9YFxyXG4gICAgICAvLyAgICAgKTtcclxuICAgICAgLy8gICAgIHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lID0gc3RhcnQ7XHJcbiAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9wcmludEJ1ZmZlcihidWZmZXJlZDogVGltZVJhbmdlcykge1xyXG4gICAgbGV0IGxlbiA9IGJ1ZmZlcmVkLmxlbmd0aDtcclxuICAgIGxvZ2dlci5sb2coYGN1cnJlbnQgdGltZSA9ICR7dGhpcy5fdmlkZW8uY3VycmVudFRpbWV9YCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGxvZ2dlci5sb2coXHJcbiAgICAgICAgYGJ1ZmZlcmVkWyR7aX1dOiAke2J1ZmZlcmVkLnN0YXJ0KGkpfSAtLS0tICR7YnVmZmVyZWQuZW5kKGkpfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vblN0YWxsZWQoKSB7XHJcbiAgICAvLyDpn7PpopHnm7Tmkq3nu4/luLhzdGFsbGVk77yM5L2G5piv5Y+v5Lul5q2j5bi45pKt5pS+77yM5LiN6KaB6K6+572uX2lzV2FpdGluZ1xyXG4gICAgLy8gdGhpcy5faXNXYWl0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuX2NoZWNrUGxheVN0dWNrKCk7XHJcbiAgfVxyXG5cclxuICBfb25Qcm9ncmVzcygpIHtcclxuICAgIHRoaXMuX2NoZWNrU3RhcnRTdHVjaygpO1xyXG4gIH1cclxuXHJcbiAgX29uV2FpdGluZygpIHtcclxuICAgIGlmICh0aGlzLl9yZWFjaENhbnBsYXkpIHtcclxuICAgICAgdGhpcy5faXNXYWl0aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fY2hlY2tQbGF5U3R1Y2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vbkNhbnBsYXkoKSB7XHJcbiAgICB0aGlzLl9yZWFjaENhbnBsYXkgPSB0cnVlO1xyXG4gICAgdGhpcy5faXNXYWl0aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLl92aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgdGhpcy5fb25Qcm9ncmVzcyk7XHJcbiAgfVxyXG5cclxuICBfb25FbmRlZCgpIHtcclxuICAgIHRoaXMuX2lzUGxheUVuZGVkID0gdHJ1ZTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLl9jaGVja1N0dWNrVGltZXIpO1xyXG4gIH1cclxuXHJcbiAgX29uTWVkaWFFcnJvcihldmVudCkge1xyXG4gICAgbGV0IG1zZyA9IFwiTWVkaWEgRXJyb3JcIjtcclxuICAgIGlmICh0aGlzLl92aWRlbyAmJiB0aGlzLl92aWRlby5lcnJvcikge1xyXG4gICAgICBtc2cgPSBgY29kZT0ke3RoaXMuX3ZpZGVvLmVycm9yW1wiY29kZVwiXX0sbWVzc2FnZT0ke1xyXG4gICAgICAgIHRoaXMuX3ZpZGVvLmVycm9yW1wibWVzc2FnZVwiXVxyXG4gICAgICB9YDtcclxuICAgIH1cclxuICAgIHRoaXMuX29uRXJyb3IobXNnKTtcclxuICB9XHJcblxyXG4gIF9vbkVycm9yKHJlYXNvbj86IHN0cmluZykge1xyXG4gICAgdGhpcy5vbkVycm9yICYmIHRoaXMub25FcnJvcihuZXcgRHlNZWRpYUVycm9yKHJlYXNvbikpO1xyXG4gIH1cclxuXHJcbiAgLy8g6IW+6K6v57K+5b2p6ZuG6ZSm5bm/5ZGKU0RL5pe26Ze05oiz5pa55rOVXHJcbiAgVF9BRFZfVGltZXN0YW1wKCkge1xyXG4gICAgaWYgKHRoaXMuX3ZpZGVvKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl92aWRlbztcclxuICAgICAgaWYgKGVsZW1lbnQuYnVmZmVyZWQubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYnVmZmVyVGltZSA9IGVsZW1lbnQuYnVmZmVyZWQuZW5kKDApIC0gZWxlbWVudC5jdXJyZW50VGltZTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBidWZmZXJMZW5ndGg6IGJ1ZmZlclRpbWUsXHJcbiAgICAgICAgcHRzVGltZXN0YW1wOiB0aGlzLnByZVRpbWVzdGFtcCxcclxuICAgICAgICBzZWlUaW1lc3RhbXA6IHRoaXMuc2VpVGltZXN0YW1wXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGl2ZS9tZWRpYS1oYW5kbGVyL3RvLW1zZS50cyIsImltcG9ydCB7IEJhc2VMb2FkZXIgfSBmcm9tIFwiLi9iYXNlLWxvYWRlclwiO1xyXG5pbXBvcnQgeyBiaW5kQWxsIH0gZnJvbSBcIi4uL3V0aWwvYmluZC1hbGxcIjtcclxuaW1wb3J0IHsgRHlOZXR3b3JrRXJyb3IgfSBmcm9tIFwiLi4vY29yZS9lcnJvclwiO1xyXG5pbXBvcnQgQnJvd3NlciBmcm9tIFwiLi4vdXRpbC9icm93c2VyLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmV0Y2hTdHJlYW1Mb2FkZXIgZXh0ZW5kcyBCYXNlTG9hZGVyIHtcclxuICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBmZXRjaCArIHN0cmVhbSBpcyBicm9rZW4gb24gTWljcm9zb2Z0IEVkZ2UuIERpc2FibGUgYmVmb3JlIGJ1aWxkIDE1MDQ4LlxyXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvODE5NjkwNy9cclxuICAgICAgLy8gRml4ZWQgaW4gSmFuIDEwLCAyMDE3LiBCdWlsZCAxNTA0OCsgcmVtb3ZlZCBmcm9tIGJsYWNrbGlzdC5cclxuICAgICAgbGV0IGlzV29ya1dlbGxFZGdlID0gQnJvd3Nlci5tc2VkZ2UgJiYgQnJvd3Nlci52ZXJzaW9uLm1pbm9yID49IDE1MDQ4O1xyXG4gICAgICBsZXQgYnJvd3Nlck5vdEJsYWNrbGlzdGVkID0gQnJvd3Nlci5tc2VkZ2UgPyBpc1dvcmtXZWxsRWRnZSA6IHRydWU7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgc2VsZi5mZXRjaCAmJiAoc2VsZiBhcyBhbnkpLlJlYWRhYmxlU3RyZWFtICYmIGJyb3dzZXJOb3RCbGFja2xpc3RlZFxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgX3JlYWRlcjogUmVhZGFibGVTdHJlYW1SZWFkZXI7XHJcblxyXG4gIGxvYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBvYmplY3QpIHtcclxuICAgIHN1cGVyLmxvYWQodXJsLCBvcHRpb25zKTtcclxuICAgIGZldGNoKHVybClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgaWYgKHVybCAhPT0gcmVzcG9uc2UudXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uUmVkaXJlY3RVcmwocmVzcG9uc2UudXJsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRHlOZXR3b3JrRXJyb3IoXHJcbiAgICAgICAgICAgIGBmZXRjaCBzdHJlYW0gZmFpbGVkOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZWFkZXIgPT4ge1xyXG4gICAgICAgIHRoaXMuX3JlYWRlciA9IHJlYWRlcjtcclxuICAgICAgICBjb25zdCBvblJlYWQgPSAoeyBkb25lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZG9uZSkge1xyXG4gICAgICAgICAgICAvLyByZWFkIGVuZFxyXG4gICAgICAgICAgICB0aGlzLm9uRW5kICYmIHRoaXMub25FbmQoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHJlYWRpbmcuLi5cclxuICAgICAgICAgICAgdGhpcy5fb25EYXRhKHZhbHVlLmJ1ZmZlcik7XHJcbiAgICAgICAgICAgIHJlYWRlclxyXG4gICAgICAgICAgICAgIC5yZWFkKClcclxuICAgICAgICAgICAgICAudGhlbihvblJlYWQpXHJcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuX29uRXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gc3RhcnRcclxuICAgICAgICByZWFkZXJcclxuICAgICAgICAgIC5yZWFkKClcclxuICAgICAgICAgIC50aGVuKG9uUmVhZClcclxuICAgICAgICAgIC5jYXRjaCh0aGlzLl9vbkVycm9yKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGlmIChlICYmIGUuY29kZSA9PT0gMTEgJiYgQnJvd3Nlci5tc2VkZ2UpIHsgLy8gSW52YWxpZFN0YXRlRXJyb3Igb24gTWljcm9zb2Z0IEVkZ2UgICAgICAgICAgXHJcbiAgICAgICAgICAvLyBXb3JrYXJvdW5kOiBFZGdlIG1heSB0aHJvdyBJbnZhbGlkU3RhdGVFcnJvciBhZnRlciBSZWFkYWJsZVN0cmVhbVJlYWRlci5jYW5jZWwoKSBjYWxsXHJcbiAgICAgICAgICAvLyBJZ25vcmUgdGhlIHVua25vd24gZXhjZXB0aW9uLlxyXG4gICAgICAgICAgLy8gUmVsYXRlZCBpc3N1ZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTEyNjUyMDIvXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9vbkVycm9yKG5ldyBEeU5ldHdvcmtFcnJvcihgZmV0Y2ggc3RyZWFtIGZhaWxlZDogJHtlfWApKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgaWYgKHRoaXMuX3JlYWRlcikge1xyXG4gICAgICB0aGlzLl9yZWFkZXIuY2FuY2VsKCkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgLy9pZ25vcmUgdGhpcyBlcnJvclxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fcmVhZGVyID0gbnVsbDtcclxuICAgIH1cclxuICAgIHN1cGVyLmRpc3Bvc2UoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saXZlL2xvYWRlci9mZXRjaC1zdHJlYW0tbG9hZGVyLnRzIiwiaW1wb3J0IHsgQmFzZUxvYWRlciB9IGZyb20gXCIuL2Jhc2UtbG9hZGVyXCI7XHJcbmltcG9ydCB7IGJpbmRBbGwgfSBmcm9tIFwiLi4vdXRpbC9iaW5kLWFsbFwiO1xyXG5pbXBvcnQgeyBEeU5ldHdvcmtFcnJvciB9IGZyb20gXCIuLi9jb3JlL2Vycm9yXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1vekNodW5rZWRMb2FkZXIgZXh0ZW5kcyBCYXNlTG9hZGVyIHtcclxuXHJcbiAgc3RhdGljIGlzU3VwcG9ydGVkKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgLy8gRmlyZWZveCAzNy0gcmVxdWlyZXMgLm9wZW4oKSB0byBiZSBjYWxsZWQgYmVmb3JlIHNldHRpbmcgcmVzcG9uc2VUeXBlXHJcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsICdodHRwczovL2V4YW1wbGUuY29tJywgdHJ1ZSk7XHJcbiAgICAgICAgKHhociBhcyBhbnkpLnJlc3BvbnNlVHlwZSA9ICdtb3otY2h1bmtlZC1hcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgcmV0dXJuICgoeGhyIGFzIGFueSkucmVzcG9uc2VUeXBlID09PSAnbW96LWNodW5rZWQtYXJyYXlidWZmZXInKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLy8gIExvZy53KCdNb3pDaHVua2VkTG9hZGVyJywgZS5tZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgX3hociA6YW55O1xyXG4gIHByaXZhdGUgX3JlcXVlc3RBYm9ydCA6Ym9vbGVhbjtcclxuICBwcml2YXRlIF9yZXF1ZXN0VVJMOnN0cmluZztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl94aHIgPSBudWxsO1xyXG4gICAgdGhpcy5fcmVxdWVzdEFib3J0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgbG9hZCh1cmw6IHN0cmluZywgb3B0aW9ucz86IG9iamVjdCkge1xyXG4gICAgdGhpcy5fcmVxdWVzdFVSTCA9IHVybDtcclxuICAgIGxldCB4aHIgPSB0aGlzLl94aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgKHhociBhcyBhbnkpLnJlc3BvbnNlVHlwZSA9ICdtb3otY2h1bmtlZC1hcnJheWJ1ZmZlcic7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gdGhpcy5fb25SZWFkeVN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB4aHIub25wcm9ncmVzcyA9IHRoaXMuX29uUHJvZ3Jlc3MuYmluZCh0aGlzKTtcclxuICAgIHhoci5vbmxvYWRlbmQgPSB0aGlzLl9vbkxvYWRFbmQuYmluZCh0aGlzKTtcclxuICAgIHhoci5vbmVycm9yID0gdGhpcy5fb25YaHJFcnJvci5iaW5kKHRoaXMpO1xyXG4gICAgeGhyLnNlbmQoKTtcclxuICB9XHJcblxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgdGhpcy5hYm9ydCgpO1xyXG4gICAgaWYgKHRoaXMuX3hocikge1xyXG4gICAgICAgIHRoaXMuX3hoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3hoci5vbnByb2dyZXNzID0gbnVsbDtcclxuICAgICAgICB0aGlzLl94aHIub25sb2FkZW5kID0gbnVsbDtcclxuICAgICAgICB0aGlzLl94aHIub25lcnJvciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5feGhyID0gbnVsbDtcclxuICAgIH1cclxuICAgIHN1cGVyLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIGFib3J0KCkge1xyXG4gICAgdGhpcy5fcmVxdWVzdEFib3J0ID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLl94aHIpIHtcclxuICAgICAgICB0aGlzLl94aHIuYWJvcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vblJlYWR5U3RhdGVDaGFuZ2UoZSkge1xyXG4gICAgbGV0IHhociA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikgeyAgLy8gSEVBREVSU19SRUNFSVZFRFxyXG4gICAgICAgIGlmICh4aHIucmVzcG9uc2VVUkwgIT0gdW5kZWZpbmVkICYmIHhoci5yZXNwb25zZVVSTCAhPT0gdGhpcy5fcmVxdWVzdFVSTCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vblJlZGlyZWN0VXJsKHhoci5yZXNwb25zZVVSTCk7ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgIT09IDAgJiYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+IDI5OSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25FcnJvcihuZXcgRHlOZXR3b3JrRXJyb3IoJ01vekNodW5rZWRMb2FkZXI6IEh0dHAgY29kZSBpbnZhbGlkLCAnICsgeGhyLnN0YXR1cyArICcgJyArIHhoci5zdGF0dXNUZXh0KSk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICB9XHJcblxyXG4gICAgX29uUHJvZ3Jlc3MoZSkge1xyXG4gICAgICAgIGxldCBjaHVuayA9IGUudGFyZ2V0LnJlc3BvbnNlO1xyXG4gICAgICAgIHRoaXMuX29uRGF0YShjaHVuayk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uTG9hZEVuZChlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JlcXVlc3RBYm9ydCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXF1ZXN0QWJvcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uRW5kICYmIHRoaXMub25FbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25YaHJFcnJvcihlKSB7XHJcbiAgICAgICAgdGhpcy5fb25FcnJvcihgeGhyIGxvYWQgZXhpdGApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpdmUvbG9hZGVyL3hoci1tb3otY2h1bmtlZC1sb2FkZXIudHMiLCJpbXBvcnQgeyBJTWVkaWFIYW5kbGVyIH0gZnJvbSBcIi4uL21lZGlhLWhhbmRsZXJcIjtcclxuaW1wb3J0IHsgYmluZEFsbCB9IGZyb20gXCIuLi91dGlsL2JpbmQtYWxsXCI7XHJcbmltcG9ydCB7IElMb2FkZXIgfSBmcm9tIFwiLi4vbG9hZGVyXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uLy4uL2xpdmUvdXRpbC9sb2dnZXJcIjtcclxuaW1wb3J0IE1lZGlhSW5mbyBmcm9tIFwiLi9tZWRpYS1pbmZvXCI7XHJcbmltcG9ydCB7IFRyYW5zbXV4ZXIgfSBmcm9tIFwiLi90cmFuc211eGVyXCI7XHJcbmltcG9ydCB7IElDb25maWcgfSBmcm9tIFwiLi9saXZlLXBsYXllclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZsdjJtcDQge1xyXG4gIG9uSW5pdDogKG1lZGlhSW5mbzogTWVkaWFJbmZvKSA9PiB2b2lkO1xyXG4gIG9uRXJyb3I6IChyZWFzb24pID0+IHZvaWQ7XHJcblxyXG4gIHByaXZhdGUgX21lZGlhSGFuZGxlcjogSU1lZGlhSGFuZGxlcjtcclxuICBwcml2YXRlIF9sb2FkZXI6IElMb2FkZXI7XHJcbiAgcHJpdmF0ZSBfdHJhbnNtdXhlcjogV29ya2VyIHwgVHJhbnNtdXhlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsb2FkZXI6IElMb2FkZXIsXHJcbiAgICBtZWRpYUhhbmRsZXI6IElNZWRpYUhhbmRsZXIsXHJcbiAgICBjb25maWc6IElDb25maWdcclxuICApIHtcclxuICAgIGJpbmRBbGwodGhpcyk7XHJcblxyXG4gICAgbGV0IHsgZW5hYmxlV29ya2VyLCBkZWJ1ZyB9ID0gY29uZmlnO1xyXG5cclxuICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgIHRoaXMuX2xvYWRlci5vbkRhdGEgPSB0aGlzLmFwcGVuZERhdGE7XHJcbiAgICB0aGlzLl9sb2FkZXIub25FbmQgPSB0aGlzLmFwcGVuZEVuZDtcclxuICAgIHRoaXMuX2xvYWRlci5vbkVycm9yID0gdGhpcy5fb25FcnJvcjtcclxuXHJcbiAgICB0aGlzLl9tZWRpYUhhbmRsZXIgPSBtZWRpYUhhbmRsZXI7XHJcbiAgICB0aGlzLl9tZWRpYUhhbmRsZXIub25FcnJvciA9IHRoaXMuX29uRXJyb3I7XHJcblxyXG4gICAgbG9nZ2VyLnNldEVuYWJsZShkZWJ1Zyk7XHJcblxyXG4gICAgaWYgKGVuYWJsZVdvcmtlcikge1xyXG4gICAgICAvL3dlYiB3b3JrZXJcclxuICAgICAgdGhpcy5fdHJhbnNtdXhlciA9IHJlcXVpcmUoXCIuLi91dGlsL3dlYndvcmtpZnktd2VicGFja1wiKShcclxuICAgICAgICByZXF1aXJlLnJlc29sdmUoXCIuL3RyYW5zbXV4ZXIud29ya2VyXCIpXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIHNldCB3b3JrZXIgbG9nZ2VyXHJcbiAgICAgIHRoaXMuX3RyYW5zbXV4ZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIG5hbWU6IFwiX3NldExvZ2dlckVuYWJsZVwiLFxyXG4gICAgICAgIHBhcmFtczogZGVidWdcclxuICAgICAgfSk7XHJcbiAgICAgIGxvZ2dlci5sb2coXCJ0cmFuc211eGUgd2l0aCB3b3JrZXJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl90cmFuc211eGVyID0gbmV3IFRyYW5zbXV4ZXIoKTtcclxuICAgICAgbG9nZ2VyLmxvZyhcInRyYW5zbXV4ZSB3aXRoIG5vIHdvcmtlclwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3RyYW5zbXV4ZXIub25tZXNzYWdlID0gdGhpcy5fb25NZXNzYWdlO1xyXG4gICAgdGhpcy5fdHJhbnNtdXhlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIG5hbWU6IFwiaW5pdFwiLFxyXG4gICAgICBwYXJhbXM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29uZmlnKSkgIC8vIOS4jeiDveS8oG5hdGl2ZeWvueixoe+8iGNvbmZpZy5sb2FkZXLvvIlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kRGF0YShidWZmZXI6IEFycmF5QnVmZmVyKSB7XHJcbiAgICB0aGlzLl90cmFuc211eGVyLnBvc3RNZXNzYWdlKFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJhcHBlbmREYXRhXCIsXHJcbiAgICAgICAgcGFyYW1zOiBidWZmZXJcclxuICAgICAgfSxcclxuICAgICAgW2J1ZmZlcl1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRFbmQoKSB7XHJcbiAgICBsb2dnZXIubG9nKCdsb2FkZXIgZW5kJyk7XHJcbiAgICB0aGlzLl90cmFuc211eGVyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgbmFtZTogXCJhcHBlbmRFbmRcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIHRoaXMub25Jbml0ID0gbnVsbDtcclxuICAgIHRoaXMub25FcnJvciA9IG51bGw7XHJcbiAgICB0aGlzLl9tZWRpYUhhbmRsZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fbG9hZGVyID0gbnVsbDtcclxuICAgIHRoaXMuX3RyYW5zbXV4ZXIudGVybWluYXRlKCk7XHJcbiAgICB0aGlzLl90cmFuc211eGVyID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uUmVtdXhJbml0KG1lZGlhSW5mbzogTWVkaWFJbmZvKSB7XHJcbiAgICBpZiAoIShtZWRpYUluZm8gaW5zdGFuY2VvZiBNZWRpYUluZm8pKSB7XHJcbiAgICAgIG1lZGlhSW5mbyA9IE9iamVjdC5hc3NpZ24obmV3IE1lZGlhSW5mbygpLCBtZWRpYUluZm8pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbkluaXQgJiYgdGhpcy5vbkluaXQobWVkaWFJbmZvKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uUmVtdXhEYXRhKHRyYWNrcykge1xyXG4gICAgdGhpcy5fbWVkaWFIYW5kbGVyICYmIHRoaXMuX21lZGlhSGFuZGxlci5hcHBlbmREYXRhKHRyYWNrcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb21wbGV0ZSgpIHtcclxuICAgIHRoaXMuX21lZGlhSGFuZGxlciAmJiB0aGlzLl9tZWRpYUhhbmRsZXIuYXBwZW5kRW5kKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vbkVycm9yKHJlYXNvbikge1xyXG4gICAgdGhpcy5vbkVycm9yICYmIHRoaXMub25FcnJvcihyZWFzb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25NZXNzYWdlKGV2ZW50KSB7XHJcbiAgICBsZXQgeyBkYXRhIH0gPSBldmVudDtcclxuICAgIGxldCB7IG5hbWUsIHBhcmFtcyB9ID0gZGF0YTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXNbbmFtZV0ocGFyYW1zKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgbG9nZ2VyLndhcm4oYGNhbGwgZmx2Mm1wNC4ke25hbWV9IGVycm9yYCwgZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGl2ZS9jb3JlL2ZsdjJtcDQudHMiLCJpbXBvcnQgeyBiaW5kQWxsIH0gZnJvbSBcIi4uL3V0aWwvYmluZC1hbGxcIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vLi4vbGl2ZS91dGlsL2xvZ2dlclwiO1xyXG5pbXBvcnQgRmx2RGVtdXhlciBmcm9tIFwiLi4vZGVtdXgvZmx2LWRlbXV4ZXJcIjtcclxuaW1wb3J0IE1wNFJlbXV4ZXIgZnJvbSBcIi4uL3JlbXV4L21wNC1yZW11eGVyXCI7XHJcbmltcG9ydCBNZWRpYUluZm8gZnJvbSBcIi4vbWVkaWEtaW5mb1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyYW5zbXV4ZXIge1xyXG4gIG9ubWVzc2FnZTtcclxuXHJcbiAgcHJpdmF0ZSBfZGVtdXg6IEZsdkRlbXV4ZXI7XHJcbiAgcHJpdmF0ZSBfcmVtdXg6IE1wNFJlbXV4ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgYmluZEFsbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGluaXQoY29uZmlnKSB7XHJcbiAgICB0aGlzLl9kZW11eCA9IG5ldyBGbHZEZW11eGVyKGNvbmZpZyk7XHJcbiAgICB0aGlzLl9yZW11eCA9IG5ldyBNcDRSZW11eGVyKCk7XHJcblxyXG4gICAgdGhpcy5fZGVtdXgub25Jbml0ID0gdGhpcy5fb25EZW11eEluaXQ7XHJcbiAgICB0aGlzLl9kZW11eC5vblRyYWNrTWV0YSA9IHRoaXMuX29uVHJhY2tNZXRhO1xyXG4gICAgdGhpcy5fZGVtdXgub25UcmFja0RhdGEgPSB0aGlzLl9vblRyYWNrRGF0YTtcclxuICAgIHRoaXMuX2RlbXV4Lm9uRXJyb3IgPSB0aGlzLl9vbkVycm9yO1xyXG5cclxuICAgIHRoaXMuX3JlbXV4Lm9uSW5pdCA9IHRoaXMuX29uUmVtdXhJbml0O1xyXG4gICAgdGhpcy5fcmVtdXgub25EYXRhID0gdGhpcy5fb25SZW11eERhdGE7XHJcbiAgICB0aGlzLl9yZW11eC5vbkVycm9yID0gdGhpcy5fb25FcnJvcjtcclxuICB9XHJcblxyXG4gIGFwcGVuZERhdGEoYnVmZmVyOiBBcnJheUJ1ZmZlcikge1xyXG4gICAgdGhpcy5fZGVtdXguYXBwZW5kRGF0YShidWZmZXIpO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kRW5kKCkge1xyXG4gICAgdGhpcy5fZGVtdXguYXBwZW5kRW5kKCk7XHJcbiAgfVxyXG5cclxuICBwb3N0TWVzc2FnZShtZXNzYWdlOiBhbnksIHRyYW5zZmVyPzogYW55W10pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB7IG5hbWUsIHBhcmFtcyB9ID0gbWVzc2FnZTtcclxuICAgICAgdGhpc1tuYW1lXShwYXJhbXMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBsb2dnZXIud2FybihgY2FsbCB0cmFuc211eGVyLiR7bmFtZX0gZXJyb3JgLCBlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlcm1pbmF0ZSgpIHtcclxuICAgIHRoaXMub25tZXNzYWdlID0gbnVsbDtcclxuICAgIHRoaXMuX2RlbXV4LmRpc3Bvc2UoKTtcclxuICAgIHRoaXMuX2RlbXV4ID0gbnVsbDtcclxuICAgIHRoaXMuX3JlbXV4LmRpc3Bvc2UoKTtcclxuICAgIHRoaXMuX3JlbXV4ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29ubWVzc2FnZShkYXRhKSB7XHJcbiAgICB0aGlzLm9ubWVzc2FnZSAmJiB0aGlzLm9ubWVzc2FnZSh7IGRhdGEgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vbkRlbXV4SW5pdChtZWRpYUluZm86IE1lZGlhSW5mbykge1xyXG4gICAgdGhpcy5fcmVtdXgub25NZWRpYUluZm8obWVkaWFJbmZvKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uVHJhY2tNZXRhKHR5cGUsIG1ldGFkYXRhKSB7XHJcbiAgICB0aGlzLl9yZW11eC5vblRyYWNrTWV0YSh0eXBlLCBtZXRhZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vblRyYWNrRGF0YShhdWRpb1RyYWNrLCB2aWRlb1RyYWNrLCBlbmQpIHtcclxuICAgIHRoaXMuX3JlbXV4Lm9uVHJhY2tEYXRhKGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2ssIGVuZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vblJlbXV4SW5pdChtZWRpYUluZm86IE1lZGlhSW5mbykge1xyXG4gICAgdGhpcy5fb25tZXNzYWdlKHtcclxuICAgICAgbmFtZTogXCJfb25SZW11eEluaXRcIixcclxuICAgICAgcGFyYW1zOiBtZWRpYUluZm9cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25SZW11eERhdGEodHJhY2tzKSB7XHJcbiAgICB0aGlzLl9vbm1lc3NhZ2Uoe1xyXG4gICAgICBuYW1lOiBcIl9vblJlbXV4RGF0YVwiLFxyXG4gICAgICBwYXJhbXM6IHRyYWNrc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb21wbGV0ZSgpIHtcclxuICAgIHRoaXMuX29ubWVzc2FnZSh7XHJcbiAgICAgIG5hbWU6IFwiX2NvbXBsZXRlXCJcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25FcnJvcihyZWFzb24pIHtcclxuICAgIHRoaXMuX29ubWVzc2FnZSh7XHJcbiAgICAgIG5hbWU6IFwiX29uRXJyb3JcIixcclxuICAgICAgcGFyYW1zOiByZWFzb25cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpdmUvY29yZS90cmFuc211eGVyLnRzIiwiLypcclxuICogQ29weXJpZ2h0IChDKSAyMDE2IEJpbGliaWxpLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yIHpoZW5nIHFpYW4gPHhxcUB4cXEuaW0+XHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uL3V0aWwvbG9nZ2VyXCI7XHJcbmltcG9ydCBkZWNvZGVVVEY4IGZyb20gXCIuLy4uL3V0aWwvdXRmOC1jb252XCI7XHJcblxyXG5sZXQgbGUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgbGV0IGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigyKTtcclxuICBuZXcgRGF0YVZpZXcoYnVmKS5zZXRJbnQxNigwLCAyNTYsIHRydWUpOyAvLyBsaXR0bGUtZW5kaWFuIHdyaXRlXHJcbiAgcmV0dXJuIG5ldyBJbnQxNkFycmF5KGJ1ZilbMF0gPT09IDI1NjsgLy8gcGxhdGZvcm0tc3BlYyByZWFkLCBpZiBlcXVhbCB0aGVuIExFXHJcbn0pKCk7XHJcblxyXG5jbGFzcyBBTUYge1xyXG4gIHN0YXRpYyBwYXJzZVNjcmlwdERhdGEoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQsIGRhdGFTaXplKSB7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBuYW1lID0gQU1GLnBhcnNlVmFsdWUoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQsIGRhdGFTaXplKTtcclxuICAgICAgbGV0IHZhbHVlID0gQU1GLnBhcnNlVmFsdWUoXHJcbiAgICAgICAgYXJyYXlCdWZmZXIsXHJcbiAgICAgICAgZGF0YU9mZnNldCArIG5hbWUuc2l6ZSxcclxuICAgICAgICBkYXRhU2l6ZSAtIG5hbWUuc2l6ZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgZGF0YVtuYW1lLmRhdGFdID0gdmFsdWUuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgbG9nZ2VyLmVycm9yKFwiQU1GXCIsIGUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2VPYmplY3QoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQsIGRhdGFTaXplKSB7XHJcbiAgICBpZiAoZGF0YVNpemUgPCAzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRhdGEgbm90IGVub3VnaCB3aGVuIHBhcnNlIFNjcmlwdERhdGFPYmplY3RcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgbmFtZSA9IEFNRi5wYXJzZVN0cmluZyhhcnJheUJ1ZmZlciwgZGF0YU9mZnNldCwgZGF0YVNpemUpO1xyXG4gICAgbGV0IHZhbHVlID0gQU1GLnBhcnNlVmFsdWUoXHJcbiAgICAgIGFycmF5QnVmZmVyLFxyXG4gICAgICBkYXRhT2Zmc2V0ICsgbmFtZS5zaXplLFxyXG4gICAgICBkYXRhU2l6ZSAtIG5hbWUuc2l6ZVxyXG4gICAgKTtcclxuICAgIGxldCBpc09iamVjdEVuZCA9IHZhbHVlLm9iamVjdEVuZDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogbmFtZS5kYXRhLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZS5kYXRhXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IG5hbWUuc2l6ZSArIHZhbHVlLnNpemUsXHJcbiAgICAgIG9iamVjdEVuZDogaXNPYmplY3RFbmRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2VWYXJpYWJsZShhcnJheUJ1ZmZlciwgZGF0YU9mZnNldCwgZGF0YVNpemUpIHtcclxuICAgIHJldHVybiBBTUYucGFyc2VPYmplY3QoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQsIGRhdGFTaXplKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwYXJzZVN0cmluZyhhcnJheUJ1ZmZlciwgZGF0YU9mZnNldCwgZGF0YVNpemUpIHtcclxuICAgIGlmIChkYXRhU2l6ZSA8IDIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0YSBub3QgZW5vdWdoIHdoZW4gcGFyc2UgU3RyaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IHYgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQsIGRhdGFTaXplKTtcclxuICAgIGxldCBsZW5ndGggPSB2LmdldFVpbnQxNigwLCAhbGUpO1xyXG5cclxuICAgIGxldCBzdHI7XHJcbiAgICBpZiAobGVuZ3RoID4gMCkge1xyXG4gICAgICBzdHIgPSBkZWNvZGVVVEY4KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyLCBkYXRhT2Zmc2V0ICsgMiwgbGVuZ3RoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHIgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IHN0cixcclxuICAgICAgc2l6ZTogMiArIGxlbmd0aFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwYXJzZUxvbmdTdHJpbmcoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQsIGRhdGFTaXplKSB7XHJcbiAgICBpZiAoZGF0YVNpemUgPCA0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRhdGEgbm90IGVub3VnaCB3aGVuIHBhcnNlIExvbmdTdHJpbmdcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgdiA9IG5ldyBEYXRhVmlldyhhcnJheUJ1ZmZlciwgZGF0YU9mZnNldCwgZGF0YVNpemUpO1xyXG4gICAgbGV0IGxlbmd0aCA9IHYuZ2V0VWludDMyKDAsICFsZSk7XHJcblxyXG4gICAgbGV0IHN0cjtcclxuICAgIGlmIChsZW5ndGggPiAwKSB7XHJcbiAgICAgIHN0ciA9IGRlY29kZVVURjgobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQgKyA0LCBsZW5ndGgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0ciA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogc3RyLFxyXG4gICAgICBzaXplOiA0ICsgbGVuZ3RoXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBhcnNlRGF0ZShhcnJheUJ1ZmZlciwgZGF0YU9mZnNldCwgZGF0YVNpemUpIHtcclxuICAgIGlmIChkYXRhU2l6ZSA8IDEwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRhdGEgc2l6ZSBpbnZhbGlkIHdoZW4gcGFyc2UgRGF0ZVwiKTtcclxuICAgIH1cclxuICAgIGxldCB2ID0gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyLCBkYXRhT2Zmc2V0LCBkYXRhU2l6ZSk7XHJcbiAgICBsZXQgdGltZXN0YW1wID0gdi5nZXRGbG9hdDY0KDAsICFsZSk7XHJcbiAgICBsZXQgbG9jYWxUaW1lT2Zmc2V0ID0gdi5nZXRJbnQxNig4LCAhbGUpO1xyXG4gICAgdGltZXN0YW1wICs9IGxvY2FsVGltZU9mZnNldCAqIDYwICogMTAwMDsgLy8gZ2V0IFVUQyB0aW1lXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogbmV3IERhdGUodGltZXN0YW1wKSxcclxuICAgICAgc2l6ZTogOCArIDJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2VWYWx1ZShhcnJheUJ1ZmZlciwgZGF0YU9mZnNldCwgZGF0YVNpemUpIHtcclxuICAgIGlmIChkYXRhU2l6ZSA8IDEpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0YSBub3QgZW5vdWdoIHdoZW4gcGFyc2UgVmFsdWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHYgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQsIGRhdGFTaXplKTtcclxuXHJcbiAgICBsZXQgb2Zmc2V0ID0gMTtcclxuICAgIGxldCB0eXBlID0gdi5nZXRVaW50OCgwKTtcclxuICAgIGxldCB2YWx1ZTtcclxuICAgIGxldCBvYmplY3RFbmQgPSBmYWxzZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIDA6IC8vIE51bWJlcihEb3VibGUpIHR5cGVcclxuICAgICAgICAgIHZhbHVlID0gdi5nZXRGbG9hdDY0KDEsICFsZSk7XHJcbiAgICAgICAgICBvZmZzZXQgKz0gODtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMToge1xyXG4gICAgICAgICAgLy8gQm9vbGVhbiB0eXBlXHJcbiAgICAgICAgICBsZXQgYiA9IHYuZ2V0VWludDgoMSk7XHJcbiAgICAgICAgICB2YWx1ZSA9IGIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICBvZmZzZXQgKz0gMTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIDI6IHtcclxuICAgICAgICAgIC8vIFN0cmluZyB0eXBlXHJcbiAgICAgICAgICBsZXQgYW1mc3RyID0gQU1GLnBhcnNlU3RyaW5nKFxyXG4gICAgICAgICAgICBhcnJheUJ1ZmZlcixcclxuICAgICAgICAgICAgZGF0YU9mZnNldCArIDEsXHJcbiAgICAgICAgICAgIGRhdGFTaXplIC0gMVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHZhbHVlID0gYW1mc3RyLmRhdGE7XHJcbiAgICAgICAgICBvZmZzZXQgKz0gYW1mc3RyLnNpemU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAzOiB7XHJcbiAgICAgICAgICAvLyBPYmplY3QocykgdHlwZVxyXG4gICAgICAgICAgdmFsdWUgPSB7fTtcclxuICAgICAgICAgIGxldCB0ZXJtaW5hbCA9IDA7IC8vIHdvcmthcm91bmQgZm9yIG1hbGZvcm1lZCBPYmplY3RzIHdoaWNoIGhhcyBtaXNzaW5nIFNjcmlwdERhdGFPYmplY3RFbmRcclxuICAgICAgICAgIGlmICgodi5nZXRVaW50MzIoZGF0YVNpemUgLSA0LCAhbGUpICYgMHgwMGZmZmZmZikgPT09IDkpIHtcclxuICAgICAgICAgICAgdGVybWluYWwgPSAzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgd2hpbGUgKG9mZnNldCA8IGRhdGFTaXplIC0gNCkge1xyXG4gICAgICAgICAgICAvLyA0ID09PSB0eXBlKFVJOCkgKyBTY3JpcHREYXRhT2JqZWN0RW5kKFVJMjQpXHJcbiAgICAgICAgICAgIGxldCBhbWZvYmogPSBBTUYucGFyc2VPYmplY3QoXHJcbiAgICAgICAgICAgICAgYXJyYXlCdWZmZXIsXHJcbiAgICAgICAgICAgICAgZGF0YU9mZnNldCArIG9mZnNldCxcclxuICAgICAgICAgICAgICBkYXRhU2l6ZSAtIG9mZnNldCAtIHRlcm1pbmFsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChhbWZvYmoub2JqZWN0RW5kKSBicmVhaztcclxuICAgICAgICAgICAgdmFsdWVbYW1mb2JqLmRhdGEubmFtZV0gPSBhbWZvYmouZGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IGFtZm9iai5zaXplO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG9mZnNldCA8PSBkYXRhU2l6ZSAtIDMpIHtcclxuICAgICAgICAgICAgbGV0IG1hcmtlciA9IHYuZ2V0VWludDMyKG9mZnNldCAtIDEsICFsZSkgJiAweDAwZmZmZmZmO1xyXG4gICAgICAgICAgICBpZiAobWFya2VyID09PSA5KSB7XHJcbiAgICAgICAgICAgICAgb2Zmc2V0ICs9IDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIDg6IHtcclxuICAgICAgICAgIC8vIEVDTUEgYXJyYXkgdHlwZSAoTWl4ZWQgYXJyYXkpXHJcbiAgICAgICAgICB2YWx1ZSA9IHt9O1xyXG4gICAgICAgICAgb2Zmc2V0ICs9IDQ7IC8vIEVDTUFBcnJheUxlbmd0aChVSTMyKVxyXG4gICAgICAgICAgbGV0IHRlcm1pbmFsID0gMDsgLy8gd29ya2Fyb3VuZCBmb3IgbWFsZm9ybWVkIE1peGVkQXJyYXlzIHdoaWNoIGhhcyBtaXNzaW5nIFNjcmlwdERhdGFPYmplY3RFbmRcclxuICAgICAgICAgIGlmICgodi5nZXRVaW50MzIoZGF0YVNpemUgLSA0LCAhbGUpICYgMHgwMGZmZmZmZikgPT09IDkpIHtcclxuICAgICAgICAgICAgdGVybWluYWwgPSAzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgd2hpbGUgKG9mZnNldCA8IGRhdGFTaXplIC0gOCkge1xyXG4gICAgICAgICAgICAvLyA4ID09PSB0eXBlKFVJOCkgKyBFQ01BQXJyYXlMZW5ndGgoVUkzMikgKyBTY3JpcHREYXRhVmFyaWFibGVFbmQoVUkyNClcclxuICAgICAgICAgICAgbGV0IGFtZnZhciA9IEFNRi5wYXJzZVZhcmlhYmxlKFxyXG4gICAgICAgICAgICAgIGFycmF5QnVmZmVyLFxyXG4gICAgICAgICAgICAgIGRhdGFPZmZzZXQgKyBvZmZzZXQsXHJcbiAgICAgICAgICAgICAgZGF0YVNpemUgLSBvZmZzZXQgLSB0ZXJtaW5hbFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoYW1mdmFyLm9iamVjdEVuZCkgYnJlYWs7XHJcbiAgICAgICAgICAgIHZhbHVlW2FtZnZhci5kYXRhLm5hbWVdID0gYW1mdmFyLmRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSBhbWZ2YXIuc2l6ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChvZmZzZXQgPD0gZGF0YVNpemUgLSAzKSB7XHJcbiAgICAgICAgICAgIGxldCBtYXJrZXIgPSB2LmdldFVpbnQzMihvZmZzZXQgLSAxLCAhbGUpICYgMHgwMGZmZmZmZjtcclxuICAgICAgICAgICAgaWYgKG1hcmtlciA9PT0gOSkge1xyXG4gICAgICAgICAgICAgIG9mZnNldCArPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSA5OiAvLyBTY3JpcHREYXRhT2JqZWN0RW5kXHJcbiAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIG9mZnNldCA9IDE7XHJcbiAgICAgICAgICBvYmplY3RFbmQgPSB0cnVlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMDoge1xyXG4gICAgICAgICAgLy8gU3RyaWN0IGFycmF5IHR5cGVcclxuICAgICAgICAgIC8vIFNjcmlwdERhdGFWYWx1ZVtuXS4gTk9URTogYWNjb3JkaW5nIHRvIHZpZGVvX2ZpbGVfZm9ybWF0X3NwZWNfdjEwXzEucGRmXHJcbiAgICAgICAgICB2YWx1ZSA9IFtdO1xyXG4gICAgICAgICAgbGV0IHN0cmljdEFycmF5TGVuZ3RoID0gdi5nZXRVaW50MzIoMSwgIWxlKTtcclxuICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpY3RBcnJheUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWwgPSBBTUYucGFyc2VWYWx1ZShcclxuICAgICAgICAgICAgICBhcnJheUJ1ZmZlcixcclxuICAgICAgICAgICAgICBkYXRhT2Zmc2V0ICsgb2Zmc2V0LFxyXG4gICAgICAgICAgICAgIGRhdGFTaXplIC0gb2Zmc2V0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhbHVlLnB1c2godmFsLmRhdGEpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gdmFsLnNpemU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAxMToge1xyXG4gICAgICAgICAgLy8gRGF0ZSB0eXBlXHJcbiAgICAgICAgICBsZXQgZGF0ZSA9IEFNRi5wYXJzZURhdGUoYXJyYXlCdWZmZXIsIGRhdGFPZmZzZXQgKyAxLCBkYXRhU2l6ZSAtIDEpO1xyXG4gICAgICAgICAgdmFsdWUgPSBkYXRlLmRhdGE7XHJcbiAgICAgICAgICBvZmZzZXQgKz0gZGF0ZS5zaXplO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgMTI6IHtcclxuICAgICAgICAgIC8vIExvbmcgc3RyaW5nIHR5cGVcclxuICAgICAgICAgIGxldCBhbWZMb25nU3RyID0gQU1GLnBhcnNlU3RyaW5nKFxyXG4gICAgICAgICAgICBhcnJheUJ1ZmZlcixcclxuICAgICAgICAgICAgZGF0YU9mZnNldCArIDEsXHJcbiAgICAgICAgICAgIGRhdGFTaXplIC0gMVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHZhbHVlID0gYW1mTG9uZ1N0ci5kYXRhO1xyXG4gICAgICAgICAgb2Zmc2V0ICs9IGFtZkxvbmdTdHIuc2l6ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gaWdub3JlIGFuZCBza2lwXHJcbiAgICAgICAgICBvZmZzZXQgPSBkYXRhU2l6ZTtcclxuICAgICAgICAgIGxvZ2dlci53YXJuKFwiQU1GXCIsIFwiVW5zdXBwb3J0ZWQgQU1GIHZhbHVlIHR5cGUgXCIgKyB0eXBlKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBsb2dnZXIuZXJyb3IoXCJBTUZcIiwgZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiB2YWx1ZSxcclxuICAgICAgc2l6ZTogb2Zmc2V0LFxyXG4gICAgICBvYmplY3RFbmQ6IG9iamVjdEVuZFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFNRjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saXZlL2RlbXV4L2FtZi1wYXJzZXIuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQmlsaWJpbGkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSBpcyBkZXJpdmVkIGZyb20gQysrIHByb2plY3QgbGliV2luVEY4IChodHRwczovL2dpdGh1Yi5jb20vbTEzMjUzL2xpYldpblRGOClcclxuICogQGF1dGhvciB6aGVuZyBxaWFuIDx4cXFAeHFxLmltPlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5mdW5jdGlvbiBjaGVja0NvbnRpbnVhdGlvbih1aW50OGFycmF5LCBzdGFydCwgY2hlY2tMZW5ndGgpIHtcclxuICAgIGxldCBhcnJheSA9IHVpbnQ4YXJyYXk7XHJcbiAgICBpZiAoc3RhcnQgKyBjaGVja0xlbmd0aCA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgIHdoaWxlIChjaGVja0xlbmd0aC0tKSB7XHJcbiAgICAgICAgICAgIGlmICgoYXJyYXlbKytzdGFydF0gJiAweEMwKSAhPT0gMHg4MClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVjb2RlVVRGOCh1aW50OGFycmF5KSB7XHJcbiAgICBsZXQgb3V0ID0gW107XHJcbiAgICBsZXQgaW5wdXQgPSB1aW50OGFycmF5O1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgbGV0IGxlbmd0aCA9IHVpbnQ4YXJyYXkubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGlucHV0W2ldIDwgMHg4MCkge1xyXG4gICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGlucHV0W2ldKSk7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4QzApIHtcclxuICAgICAgICAgICAgLy8gZmFsbHRocm91Z2hcclxuICAgICAgICB9IGVsc2UgaWYgKGlucHV0W2ldIDwgMHhFMCkge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tDb250aW51YXRpb24oaW5wdXQsIGksIDEpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdWNzNCA9IChpbnB1dFtpXSAmIDB4MUYpIDw8IDYgfCAoaW5wdXRbaSArIDFdICYgMHgzRik7XHJcbiAgICAgICAgICAgICAgICBpZiAodWNzNCA+PSAweDgwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSh1Y3M0ICYgMHhGRkZGKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaSArPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4RjApIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAyKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHVjczQgPSAoaW5wdXRbaV0gJiAweEYpIDw8IDEyIHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpIDw8IDYgfCBpbnB1dFtpICsgMl0gJiAweDNGO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVjczQgPj0gMHg4MDAgJiYgKHVjczQgJiAweEY4MDApICE9PSAweEQ4MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHVjczQgJiAweEZGRkYpKTtcclxuICAgICAgICAgICAgICAgICAgICBpICs9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGlucHV0W2ldIDwgMHhGOCkge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tDb250aW51YXRpb24oaW5wdXQsIGksIDMpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdWNzNCA9IChpbnB1dFtpXSAmIDB4NykgPDwgMTggfCAoaW5wdXRbaSArIDFdICYgMHgzRikgPDwgMTJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgKGlucHV0W2kgKyAyXSAmIDB4M0YpIDw8IDYgfCAoaW5wdXRbaSArIDNdICYgMHgzRik7XHJcbiAgICAgICAgICAgICAgICBpZiAodWNzNCA+IDB4MTAwMDAgJiYgdWNzNCA8IDB4MTEwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWNzNCAtPSAweDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoKHVjczQgPj4+IDEwKSB8IDB4RDgwMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoKHVjczQgJiAweDNGRikgfCAweERDMDApKTtcclxuICAgICAgICAgICAgICAgICAgICBpICs9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpKTtcclxuICAgICAgICArK2k7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dC5qb2luKCcnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVjb2RlVVRGODtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpdmUvdXRpbC91dGY4LWNvbnYuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQmlsaWJpbGkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIEBhdXRob3IgemhlbmcgcWlhbiA8eHFxQHhxcS5pbT5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEV4cEdvbG9tYiBmcm9tICcuL2V4cC1nb2xvbWIuanMnO1xyXG5cclxuY2xhc3MgU1BTUGFyc2VyIHtcclxuXHJcbiAgICBzdGF0aWMgX2Vic3AycmJzcCh1aW50OGFycmF5KSB7XHJcbiAgICAgICAgbGV0IHNyYyA9IHVpbnQ4YXJyYXk7XHJcbiAgICAgICAgbGV0IHNyY19sZW5ndGggPSBzcmMuYnl0ZUxlbmd0aDtcclxuICAgICAgICBsZXQgZHN0ID0gbmV3IFVpbnQ4QXJyYXkoc3JjX2xlbmd0aCk7XHJcbiAgICAgICAgbGV0IGRzdF9pZHggPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY19sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmVzY2FwZTogU2tpcCAweDAzIGFmdGVyIDAwIDAwXHJcbiAgICAgICAgICAgICAgICBpZiAoc3JjW2ldID09PSAweDAzICYmIHNyY1tpIC0gMV0gPT09IDB4MDAgJiYgc3JjW2kgLSAyXSA9PT0gMHgwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRzdFtkc3RfaWR4XSA9IHNyY1tpXTtcclxuICAgICAgICAgICAgZHN0X2lkeCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRzdC5idWZmZXIsIDAsIGRzdF9pZHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwYXJzZVNQUyh1aW50OGFycmF5KSB7XHJcbiAgICAgICAgbGV0IHJic3AgPSBTUFNQYXJzZXIuX2Vic3AycmJzcCh1aW50OGFycmF5KTtcclxuICAgICAgICBsZXQgZ2IgPSBuZXcgRXhwR29sb21iKHJic3ApO1xyXG5cclxuICAgICAgICBnYi5yZWFkQnl0ZSgpO1xyXG4gICAgICAgIGxldCBwcm9maWxlX2lkYyA9IGdiLnJlYWRCeXRlKCk7ICAvLyBwcm9maWxlX2lkY1xyXG4gICAgICAgIGdiLnJlYWRCeXRlKCk7ICAvLyBjb25zdHJhaW50X3NldF9mbGFnc1s1XSArIHJlc2VydmVkX3plcm9bM11cclxuICAgICAgICBsZXQgbGV2ZWxfaWRjID0gZ2IucmVhZEJ5dGUoKTsgIC8vIGxldmVsX2lkY1xyXG4gICAgICAgIGdiLnJlYWRVRUcoKTsgIC8vIHNlcV9wYXJhbWV0ZXJfc2V0X2lkXHJcblxyXG4gICAgICAgIGxldCBwcm9maWxlX3N0cmluZyA9IFNQU1BhcnNlci5nZXRQcm9maWxlU3RyaW5nKHByb2ZpbGVfaWRjKTtcclxuICAgICAgICBsZXQgbGV2ZWxfc3RyaW5nID0gU1BTUGFyc2VyLmdldExldmVsU3RyaW5nKGxldmVsX2lkYyk7XHJcbiAgICAgICAgbGV0IGNocm9tYV9mb3JtYXRfaWRjID0gMTtcclxuICAgICAgICBsZXQgY2hyb21hX2Zvcm1hdCA9IDQyMDtcclxuICAgICAgICBsZXQgY2hyb21hX2Zvcm1hdF90YWJsZSA9IFswLCA0MjAsIDQyMiwgNDQ0XTtcclxuICAgICAgICBsZXQgYml0X2RlcHRoID0gODtcclxuXHJcbiAgICAgICAgaWYgKHByb2ZpbGVfaWRjID09PSAxMDAgfHwgcHJvZmlsZV9pZGMgPT09IDExMCB8fCBwcm9maWxlX2lkYyA9PT0gMTIyIHx8XHJcbiAgICAgICAgICAgIHByb2ZpbGVfaWRjID09PSAyNDQgfHwgcHJvZmlsZV9pZGMgPT09IDQ0IHx8IHByb2ZpbGVfaWRjID09PSA4MyB8fFxyXG4gICAgICAgICAgICBwcm9maWxlX2lkYyA9PT0gODYgfHwgcHJvZmlsZV9pZGMgPT09IDExOCB8fCBwcm9maWxlX2lkYyA9PT0gMTI4IHx8XHJcbiAgICAgICAgICAgIHByb2ZpbGVfaWRjID09PSAxMzggfHwgcHJvZmlsZV9pZGMgPT09IDE0NCkge1xyXG5cclxuICAgICAgICAgICAgY2hyb21hX2Zvcm1hdF9pZGMgPSBnYi5yZWFkVUVHKCk7XHJcbiAgICAgICAgICAgIGlmIChjaHJvbWFfZm9ybWF0X2lkYyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgZ2IucmVhZEJpdHMoMSk7ICAvLyBzZXBhcmF0ZV9jb2xvdXJfcGxhbmVfZmxhZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaHJvbWFfZm9ybWF0X2lkYyA8PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWFfZm9ybWF0ID0gY2hyb21hX2Zvcm1hdF90YWJsZVtjaHJvbWFfZm9ybWF0X2lkY107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJpdF9kZXB0aCA9IGdiLnJlYWRVRUcoKSArIDg7ICAvLyBiaXRfZGVwdGhfbHVtYV9taW51czhcclxuICAgICAgICAgICAgZ2IucmVhZFVFRygpOyAgLy8gYml0X2RlcHRoX2Nocm9tYV9taW51czhcclxuICAgICAgICAgICAgZ2IucmVhZEJpdHMoMSk7ICAvLyBxcHByaW1lX3lfemVyb190cmFuc2Zvcm1fYnlwYXNzX2ZsYWdcclxuICAgICAgICAgICAgaWYgKGdiLnJlYWRCb29sKCkpIHsgIC8vIHNlcV9zY2FsaW5nX21hdHJpeF9wcmVzZW50X2ZsYWdcclxuICAgICAgICAgICAgICAgIGxldCBzY2FsaW5nX2xpc3RfY291bnQgPSAoY2hyb21hX2Zvcm1hdF9pZGMgIT09IDMpID8gOCA6IDEyO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2FsaW5nX2xpc3RfY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYi5yZWFkQm9vbCgpKSB7ICAvLyBzZXFfc2NhbGluZ19saXN0X3ByZXNlbnRfZmxhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNQU1BhcnNlci5fc2tpcFNjYWxpbmdMaXN0KGdiLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTUFNQYXJzZXIuX3NraXBTY2FsaW5nTGlzdChnYiwgNjQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdiLnJlYWRVRUcoKTsgIC8vIGxvZzJfbWF4X2ZyYW1lX251bV9taW51czRcclxuICAgICAgICBsZXQgcGljX29yZGVyX2NudF90eXBlID0gZ2IucmVhZFVFRygpO1xyXG4gICAgICAgIGlmIChwaWNfb3JkZXJfY250X3R5cGUgPT09IDApIHtcclxuICAgICAgICAgICAgZ2IucmVhZFVFRygpOyAgLy8gbG9nMl9tYXhfcGljX29yZGVyX2NudF9sc2JfbWludXNfNFxyXG4gICAgICAgIH0gZWxzZSBpZiAocGljX29yZGVyX2NudF90eXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgIGdiLnJlYWRCaXRzKDEpOyAgLy8gZGVsdGFfcGljX29yZGVyX2Fsd2F5c196ZXJvX2ZsYWdcclxuICAgICAgICAgICAgZ2IucmVhZFNFRygpOyAgLy8gb2Zmc2V0X2Zvcl9ub25fcmVmX3BpY1xyXG4gICAgICAgICAgICBnYi5yZWFkU0VHKCk7ICAvLyBvZmZzZXRfZm9yX3RvcF90b19ib3R0b21fZmllbGRcclxuICAgICAgICAgICAgbGV0IG51bV9yZWZfZnJhbWVzX2luX3BpY19vcmRlcl9jbnRfY3ljbGUgPSBnYi5yZWFkVUVHKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtX3JlZl9mcmFtZXNfaW5fcGljX29yZGVyX2NudF9jeWNsZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBnYi5yZWFkU0VHKCk7ICAvLyBvZmZzZXRfZm9yX3JlZl9mcmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdiLnJlYWRVRUcoKTsgIC8vIG1heF9udW1fcmVmX2ZyYW1lc1xyXG4gICAgICAgIGdiLnJlYWRCaXRzKDEpOyAgLy8gZ2Fwc19pbl9mcmFtZV9udW1fdmFsdWVfYWxsb3dlZF9mbGFnXHJcblxyXG4gICAgICAgIGxldCBwaWNfd2lkdGhfaW5fbWJzX21pbnVzMSA9IGdiLnJlYWRVRUcoKTtcclxuICAgICAgICBsZXQgcGljX2hlaWdodF9pbl9tYXBfdW5pdHNfbWludXMxID0gZ2IucmVhZFVFRygpO1xyXG5cclxuICAgICAgICBsZXQgZnJhbWVfbWJzX29ubHlfZmxhZyA9IGdiLnJlYWRCaXRzKDEpO1xyXG4gICAgICAgIGlmIChmcmFtZV9tYnNfb25seV9mbGFnID09PSAwKSB7XHJcbiAgICAgICAgICAgIGdiLnJlYWRCaXRzKDEpOyAgLy8gbWJfYWRhcHRpdmVfZnJhbWVfZmllbGRfZmxhZ1xyXG4gICAgICAgIH1cclxuICAgICAgICBnYi5yZWFkQml0cygxKTsgIC8vIGRpcmVjdF84eDhfaW5mZXJlbmNlX2ZsYWdcclxuXHJcbiAgICAgICAgbGV0IGZyYW1lX2Nyb3BfbGVmdF9vZmZzZXQgPSAwO1xyXG4gICAgICAgIGxldCBmcmFtZV9jcm9wX3JpZ2h0X29mZnNldCA9IDA7XHJcbiAgICAgICAgbGV0IGZyYW1lX2Nyb3BfdG9wX29mZnNldCA9IDA7XHJcbiAgICAgICAgbGV0IGZyYW1lX2Nyb3BfYm90dG9tX29mZnNldCA9IDA7XHJcblxyXG4gICAgICAgIGxldCBmcmFtZV9jcm9wcGluZ19mbGFnID0gZ2IucmVhZEJvb2woKTtcclxuICAgICAgICBpZiAoZnJhbWVfY3JvcHBpbmdfZmxhZykge1xyXG4gICAgICAgICAgICBmcmFtZV9jcm9wX2xlZnRfb2Zmc2V0ID0gZ2IucmVhZFVFRygpO1xyXG4gICAgICAgICAgICBmcmFtZV9jcm9wX3JpZ2h0X29mZnNldCA9IGdiLnJlYWRVRUcoKTtcclxuICAgICAgICAgICAgZnJhbWVfY3JvcF90b3Bfb2Zmc2V0ID0gZ2IucmVhZFVFRygpO1xyXG4gICAgICAgICAgICBmcmFtZV9jcm9wX2JvdHRvbV9vZmZzZXQgPSBnYi5yZWFkVUVHKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2FyX3dpZHRoID0gMSwgc2FyX2hlaWdodCA9IDE7XHJcbiAgICAgICAgbGV0IGZwcyA9IDAsIGZwc19maXhlZCA9IHRydWUsIGZwc19udW0gPSAwLCBmcHNfZGVuID0gMDtcclxuXHJcbiAgICAgICAgbGV0IHZ1aV9wYXJhbWV0ZXJzX3ByZXNlbnRfZmxhZyA9IGdiLnJlYWRCb29sKCk7XHJcbiAgICAgICAgaWYgKHZ1aV9wYXJhbWV0ZXJzX3ByZXNlbnRfZmxhZykge1xyXG4gICAgICAgICAgICBpZiAoZ2IucmVhZEJvb2woKSkgeyAgLy8gYXNwZWN0X3JhdGlvX2luZm9fcHJlc2VudF9mbGFnXHJcbiAgICAgICAgICAgICAgICBsZXQgYXNwZWN0X3JhdGlvX2lkYyA9IGdiLnJlYWRCeXRlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2FyX3dfdGFibGUgPSBbMSwgMTIsIDEwLCAxNiwgNDAsIDI0LCAyMCwgMzIsIDgwLCAxOCwgMTUsIDY0LCAxNjAsIDQsIDMsIDJdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNhcl9oX3RhYmxlID0gWzEsIDExLCAxMSwgMTEsIDMzLCAxMSwgMTEsIDExLCAzMywgMTEsIDExLCAzMywgIDk5LCAzLCAyLCAxXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXNwZWN0X3JhdGlvX2lkYyA+IDAgJiYgYXNwZWN0X3JhdGlvX2lkYyA8IDE2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FyX3dpZHRoID0gc2FyX3dfdGFibGVbYXNwZWN0X3JhdGlvX2lkYyAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhcl9oZWlnaHQgPSBzYXJfaF90YWJsZVthc3BlY3RfcmF0aW9faWRjIC0gMV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFzcGVjdF9yYXRpb19pZGMgPT09IDI1NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhcl93aWR0aCA9IGdiLnJlYWRCeXRlKCkgPDwgOCB8IGdiLnJlYWRCeXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FyX2hlaWdodCA9IGdiLnJlYWRCeXRlKCkgPDwgOCB8IGdiLnJlYWRCeXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChnYi5yZWFkQm9vbCgpKSB7ICAvLyBvdmVyc2Nhbl9pbmZvX3ByZXNlbnRfZmxhZ1xyXG4gICAgICAgICAgICAgICAgZ2IucmVhZEJvb2woKTsgIC8vIG92ZXJzY2FuX2FwcHJvcHJpYXRlX2ZsYWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ2IucmVhZEJvb2woKSkgeyAgLy8gdmlkZW9fc2lnbmFsX3R5cGVfcHJlc2VudF9mbGFnXHJcbiAgICAgICAgICAgICAgICBnYi5yZWFkQml0cyg0KTsgIC8vIHZpZGVvX2Zvcm1hdCAmIHZpZGVvX2Z1bGxfcmFuZ2VfZmxhZ1xyXG4gICAgICAgICAgICAgICAgaWYgKGdiLnJlYWRCb29sKCkpIHsgIC8vIGNvbG91cl9kZXNjcmlwdGlvbl9wcmVzZW50X2ZsYWdcclxuICAgICAgICAgICAgICAgICAgICBnYi5yZWFkQml0cygyNCk7ICAvLyBjb2xvdXJfcHJpbWFyaWVzICYgdHJhbnNmZXJfY2hhcmFjdGVyaXN0aWNzICYgbWF0cml4X2NvZWZmaWNpZW50c1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChnYi5yZWFkQm9vbCgpKSB7ICAvLyBjaHJvbWFfbG9jX2luZm9fcHJlc2VudF9mbGFnXHJcbiAgICAgICAgICAgICAgICBnYi5yZWFkVUVHKCk7ICAvLyBjaHJvbWFfc2FtcGxlX2xvY190eXBlX3RvcF9maWVsZFxyXG4gICAgICAgICAgICAgICAgZ2IucmVhZFVFRygpOyAgLy8gY2hyb21hX3NhbXBsZV9sb2NfdHlwZV9ib3R0b21fZmllbGRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ2IucmVhZEJvb2woKSkgeyAgLy8gdGltaW5nX2luZm9fcHJlc2VudF9mbGFnXHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtX3VuaXRzX2luX3RpY2sgPSBnYi5yZWFkQml0cygzMik7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZV9zY2FsZSA9IGdiLnJlYWRCaXRzKDMyKTtcclxuICAgICAgICAgICAgICAgIGZwc19maXhlZCA9IGdiLnJlYWRCb29sKCk7ICAvLyBmaXhlZF9mcmFtZV9yYXRlX2ZsYWdcclxuXHJcbiAgICAgICAgICAgICAgICBmcHNfbnVtID0gdGltZV9zY2FsZTtcclxuICAgICAgICAgICAgICAgIGZwc19kZW4gPSBudW1fdW5pdHNfaW5fdGljayAqIDI7XHJcbiAgICAgICAgICAgICAgICBmcHMgPSBmcHNfbnVtIC8gZnBzX2RlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNhclNjYWxlID0gMTtcclxuICAgICAgICBpZiAoc2FyX3dpZHRoICE9PSAxIHx8IHNhcl9oZWlnaHQgIT09IDEpIHtcclxuICAgICAgICAgICAgc2FyU2NhbGUgPSBzYXJfd2lkdGggLyBzYXJfaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNyb3BfdW5pdF94ID0gMCwgY3JvcF91bml0X3kgPSAwO1xyXG4gICAgICAgIGlmIChjaHJvbWFfZm9ybWF0X2lkYyA9PT0gMCkge1xyXG4gICAgICAgICAgICBjcm9wX3VuaXRfeCA9IDE7XHJcbiAgICAgICAgICAgIGNyb3BfdW5pdF95ID0gMiAtIGZyYW1lX21ic19vbmx5X2ZsYWc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHN1Yl93YyA9IChjaHJvbWFfZm9ybWF0X2lkYyA9PT0gMykgPyAxIDogMjtcclxuICAgICAgICAgICAgbGV0IHN1Yl9oYyA9IChjaHJvbWFfZm9ybWF0X2lkYyA9PT0gMSkgPyAyIDogMTtcclxuICAgICAgICAgICAgY3JvcF91bml0X3ggPSBzdWJfd2M7XHJcbiAgICAgICAgICAgIGNyb3BfdW5pdF95ID0gc3ViX2hjICogKDIgLSBmcmFtZV9tYnNfb25seV9mbGFnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb2RlY193aWR0aCA9IChwaWNfd2lkdGhfaW5fbWJzX21pbnVzMSArIDEpICogMTY7XHJcbiAgICAgICAgbGV0IGNvZGVjX2hlaWdodCA9ICgyIC0gZnJhbWVfbWJzX29ubHlfZmxhZykgKiAoKHBpY19oZWlnaHRfaW5fbWFwX3VuaXRzX21pbnVzMSArIDEpICogMTYpO1xyXG5cclxuICAgICAgICBjb2RlY193aWR0aCAtPSAoZnJhbWVfY3JvcF9sZWZ0X29mZnNldCArIGZyYW1lX2Nyb3BfcmlnaHRfb2Zmc2V0KSAqIGNyb3BfdW5pdF94O1xyXG4gICAgICAgIGNvZGVjX2hlaWdodCAtPSAoZnJhbWVfY3JvcF90b3Bfb2Zmc2V0ICsgZnJhbWVfY3JvcF9ib3R0b21fb2Zmc2V0KSAqIGNyb3BfdW5pdF95O1xyXG5cclxuICAgICAgICBsZXQgcHJlc2VudF93aWR0aCA9IE1hdGguY2VpbChjb2RlY193aWR0aCAqIHNhclNjYWxlKTtcclxuXHJcbiAgICAgICAgZ2IuZGVzdHJveSgpO1xyXG4gICAgICAgIGdiID0gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvZmlsZV9zdHJpbmc6IHByb2ZpbGVfc3RyaW5nLCAgLy8gYmFzZWxpbmUsIGhpZ2gsIGhpZ2gxMCwgLi4uXHJcbiAgICAgICAgICAgIGxldmVsX3N0cmluZzogbGV2ZWxfc3RyaW5nLCAgLy8gMywgMy4xLCA0LCA0LjEsIDUsIDUuMSwgLi4uXHJcbiAgICAgICAgICAgIGJpdF9kZXB0aDogYml0X2RlcHRoLCAgLy8gOGJpdCwgMTBiaXQsIC4uLlxyXG4gICAgICAgICAgICBjaHJvbWFfZm9ybWF0OiBjaHJvbWFfZm9ybWF0LCAgLy8gNDoyOjAsIDQ6MjoyLCAuLi5cclxuICAgICAgICAgICAgY2hyb21hX2Zvcm1hdF9zdHJpbmc6IFNQU1BhcnNlci5nZXRDaHJvbWFGb3JtYXRTdHJpbmcoY2hyb21hX2Zvcm1hdCksXHJcblxyXG4gICAgICAgICAgICBmcmFtZV9yYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBmaXhlZDogZnBzX2ZpeGVkLFxyXG4gICAgICAgICAgICAgICAgZnBzOiBmcHMsXHJcbiAgICAgICAgICAgICAgICBmcHNfZGVuOiBmcHNfZGVuLFxyXG4gICAgICAgICAgICAgICAgZnBzX251bTogZnBzX251bVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2FyX3JhdGlvOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogc2FyX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzYXJfaGVpZ2h0XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBjb2RlY19zaXplOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY29kZWNfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvZGVjX2hlaWdodFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgcHJlc2VudF9zaXplOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogcHJlc2VudF93aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY29kZWNfaGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBfc2tpcFNjYWxpbmdMaXN0KGdiLCBjb3VudCkge1xyXG4gICAgICAgIGxldCBsYXN0X3NjYWxlID0gOCwgbmV4dF9zY2FsZSA9IDg7XHJcbiAgICAgICAgbGV0IGRlbHRhX3NjYWxlID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG5leHRfc2NhbGUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGRlbHRhX3NjYWxlID0gZ2IucmVhZFNFRygpO1xyXG4gICAgICAgICAgICAgICAgbmV4dF9zY2FsZSA9IChsYXN0X3NjYWxlICsgZGVsdGFfc2NhbGUgKyAyNTYpICUgMjU2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3Rfc2NhbGUgPSAobmV4dF9zY2FsZSA9PT0gMCkgPyBsYXN0X3NjYWxlIDogbmV4dF9zY2FsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFByb2ZpbGVTdHJpbmcocHJvZmlsZV9pZGMpIHtcclxuICAgICAgICBzd2l0Y2ggKHByb2ZpbGVfaWRjKSB7XHJcbiAgICAgICAgICAgIGNhc2UgNjY6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0Jhc2VsaW5lJztcclxuICAgICAgICAgICAgY2FzZSA3NzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnTWFpbic7XHJcbiAgICAgICAgICAgIGNhc2UgODg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0V4dGVuZGVkJztcclxuICAgICAgICAgICAgY2FzZSAxMDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0hpZ2gnO1xyXG4gICAgICAgICAgICBjYXNlIDExMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnSGlnaDEwJztcclxuICAgICAgICAgICAgY2FzZSAxMjI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0hpZ2g0MjInO1xyXG4gICAgICAgICAgICBjYXNlIDI0NDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnSGlnaDQ0NCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1Vua25vd24nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TGV2ZWxTdHJpbmcobGV2ZWxfaWRjKSB7XHJcbiAgICAgICAgcmV0dXJuIChsZXZlbF9pZGMgLyAxMCkudG9GaXhlZCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q2hyb21hRm9ybWF0U3RyaW5nKGNocm9tYSkge1xyXG4gICAgICAgIHN3aXRjaCAoY2hyb21hKSB7XHJcbiAgICAgICAgICAgIGNhc2UgNDIwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc0OjI6MCc7XHJcbiAgICAgICAgICAgIGNhc2UgNDIyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc0OjI6Mic7XHJcbiAgICAgICAgICAgIGNhc2UgNDQ0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc0OjQ6NCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1Vua25vd24nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNQU1BhcnNlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpdmUvZGVtdXgvc3BzLXBhcnNlci5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoQykgMjAxNiBCaWxpYmlsaS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciB6aGVuZyBxaWFuIDx4cXFAeHFxLmltPlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG4vLyBFeHBvbmVudGlhbC1Hb2xvbWIgYnVmZmVyIGRlY29kZXJcclxuY2xhc3MgRXhwR29sb21iIHtcclxuICBjb25zdHJ1Y3Rvcih1aW50OGFycmF5KSB7XHJcbiAgICB0aGlzLlRBRyA9IFwiRXhwR29sb21iXCI7XHJcblxyXG4gICAgdGhpcy5fYnVmZmVyID0gdWludDhhcnJheTtcclxuICAgIHRoaXMuX2J1ZmZlcl9pbmRleCA9IDA7XHJcbiAgICB0aGlzLl90b3RhbF9ieXRlcyA9IHVpbnQ4YXJyYXkuYnl0ZUxlbmd0aDtcclxuICAgIHRoaXMuX3RvdGFsX2JpdHMgPSB1aW50OGFycmF5LmJ5dGVMZW5ndGggKiA4O1xyXG4gICAgdGhpcy5fY3VycmVudF93b3JkID0gMDtcclxuICAgIHRoaXMuX2N1cnJlbnRfd29yZF9iaXRzX2xlZnQgPSAwO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2J1ZmZlciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBfZmlsbEN1cnJlbnRXb3JkKCkge1xyXG4gICAgbGV0IGJ1ZmZlcl9ieXRlc19sZWZ0ID0gdGhpcy5fdG90YWxfYnl0ZXMgLSB0aGlzLl9idWZmZXJfaW5kZXg7XHJcbiAgICBpZiAoYnVmZmVyX2J5dGVzX2xlZnQgPD0gMClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwR29sb21iOiBfZmlsbEN1cnJlbnRXb3JkKCkgYnV0IG5vIGJ5dGVzIGF2YWlsYWJsZVwiKTtcclxuXHJcbiAgICBsZXQgYnl0ZXNfcmVhZCA9IE1hdGgubWluKDQsIGJ1ZmZlcl9ieXRlc19sZWZ0KTtcclxuICAgIGxldCB3b3JkID0gbmV3IFVpbnQ4QXJyYXkoNCk7XHJcbiAgICB3b3JkLnNldChcclxuICAgICAgdGhpcy5fYnVmZmVyLnN1YmFycmF5KHRoaXMuX2J1ZmZlcl9pbmRleCwgdGhpcy5fYnVmZmVyX2luZGV4ICsgYnl0ZXNfcmVhZClcclxuICAgICk7XHJcbiAgICB0aGlzLl9jdXJyZW50X3dvcmQgPSBuZXcgRGF0YVZpZXcod29yZC5idWZmZXIpLmdldFVpbnQzMigwLCBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5fYnVmZmVyX2luZGV4ICs9IGJ5dGVzX3JlYWQ7XHJcbiAgICB0aGlzLl9jdXJyZW50X3dvcmRfYml0c19sZWZ0ID0gYnl0ZXNfcmVhZCAqIDg7XHJcbiAgfVxyXG5cclxuICByZWFkQml0cyhiaXRzKSB7XHJcbiAgICBpZiAoYml0cyA+IDMyKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBHb2xvbWI6IHJlYWRCaXRzKCkgYml0cyBleGNlZWRlZCBtYXggMzJiaXRzIVwiKTtcclxuXHJcbiAgICBpZiAoYml0cyA8PSB0aGlzLl9jdXJyZW50X3dvcmRfYml0c19sZWZ0KSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9jdXJyZW50X3dvcmQgPj4+ICgzMiAtIGJpdHMpO1xyXG4gICAgICB0aGlzLl9jdXJyZW50X3dvcmQgPDw9IGJpdHM7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRfd29yZF9iaXRzX2xlZnQgLT0gYml0cztcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5fY3VycmVudF93b3JkX2JpdHNfbGVmdCA/IHRoaXMuX2N1cnJlbnRfd29yZCA6IDA7XHJcbiAgICByZXN1bHQgPSByZXN1bHQgPj4+ICgzMiAtIHRoaXMuX2N1cnJlbnRfd29yZF9iaXRzX2xlZnQpO1xyXG4gICAgbGV0IGJpdHNfbmVlZF9sZWZ0ID0gYml0cyAtIHRoaXMuX2N1cnJlbnRfd29yZF9iaXRzX2xlZnQ7XHJcblxyXG4gICAgdGhpcy5fZmlsbEN1cnJlbnRXb3JkKCk7XHJcbiAgICBsZXQgYml0c19yZWFkX25leHQgPSBNYXRoLm1pbihiaXRzX25lZWRfbGVmdCwgdGhpcy5fY3VycmVudF93b3JkX2JpdHNfbGVmdCk7XHJcblxyXG4gICAgbGV0IHJlc3VsdDIgPSB0aGlzLl9jdXJyZW50X3dvcmQgPj4+ICgzMiAtIGJpdHNfcmVhZF9uZXh0KTtcclxuICAgIHRoaXMuX2N1cnJlbnRfd29yZCA8PD0gYml0c19yZWFkX25leHQ7XHJcbiAgICB0aGlzLl9jdXJyZW50X3dvcmRfYml0c19sZWZ0IC09IGJpdHNfcmVhZF9uZXh0O1xyXG5cclxuICAgIHJlc3VsdCA9IChyZXN1bHQgPDwgYml0c19yZWFkX25leHQpIHwgcmVzdWx0MjtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICByZWFkQm9vbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYWRCaXRzKDEpID09PSAxO1xyXG4gIH1cclxuXHJcbiAgcmVhZEJ5dGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWFkQml0cyg4KTtcclxuICB9XHJcblxyXG4gIF9za2lwTGVhZGluZ1plcm8oKSB7XHJcbiAgICBsZXQgemVyb19jb3VudDtcclxuICAgIGZvciAoXHJcbiAgICAgIHplcm9fY291bnQgPSAwO1xyXG4gICAgICB6ZXJvX2NvdW50IDwgdGhpcy5fY3VycmVudF93b3JkX2JpdHNfbGVmdDtcclxuICAgICAgemVyb19jb3VudCsrXHJcbiAgICApIHtcclxuICAgICAgaWYgKDAgIT09ICh0aGlzLl9jdXJyZW50X3dvcmQgJiAoMHg4MDAwMDAwMCA+Pj4gemVyb19jb3VudCkpKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudF93b3JkIDw8PSB6ZXJvX2NvdW50O1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRfd29yZF9iaXRzX2xlZnQgLT0gemVyb19jb3VudDtcclxuICAgICAgICByZXR1cm4gemVyb19jb3VudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5fZmlsbEN1cnJlbnRXb3JkKCk7XHJcbiAgICByZXR1cm4gemVyb19jb3VudCArIHRoaXMuX3NraXBMZWFkaW5nWmVybygpO1xyXG4gIH1cclxuXHJcbiAgcmVhZFVFRygpIHtcclxuICAgIC8vIHVuc2lnbmVkIGV4cG9uZW50aWFsIGdvbG9tYlxyXG4gICAgbGV0IGxlYWRpbmdfemVyb3MgPSB0aGlzLl9za2lwTGVhZGluZ1plcm8oKTtcclxuICAgIHJldHVybiB0aGlzLnJlYWRCaXRzKGxlYWRpbmdfemVyb3MgKyAxKSAtIDE7XHJcbiAgfVxyXG5cclxuICByZWFkU0VHKCkge1xyXG4gICAgLy8gc2lnbmVkIGV4cG9uZW50aWFsIGdvbG9tYlxyXG4gICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVUVHKCk7XHJcbiAgICBpZiAodmFsdWUgJiAweDAxKSB7XHJcbiAgICAgIHJldHVybiAodmFsdWUgKyAxKSA+Pj4gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAtMSAqICh2YWx1ZSA+Pj4gMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBHb2xvbWI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGl2ZS9kZW11eC9leHAtZ29sb21iLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGx2IG9uIDE4LTExLTUuXG4gKi9cbmNvbnN0IEgyNjRTZWlUeXBlID0ge1xuICAgIEgyNjRfU0VJX1RZUEVfQlVGRkVSSU5HX1BFUklPRDogMCwgICAvLy88IGJ1ZmZlcmluZyBwZXJpb2QgKEguMjY0LCBELjEuMSlcbiAgICBIMjY0X1NFSV9UWVBFX1BJQ19USU1JTkc6IDEsICAgLy8vPCBwaWN0dXJlIHRpbWluZ1xuICAgIEgyNjRfU0VJX1RZUEVfUEFOX1NDQU5fUkVDVDogMiwgICAvLy88IHBhbi1zY2FuIHJlY3RhbmdsZVxuICAgIEgyNjRfU0VJX1RZUEVfRklMTEVSX1BBWUxPQUQ6IDMsICAgLy8vPCBmaWxsZXIgZGF0YVxuICAgIEgyNjRfU0VJX1RZUEVfVVNFUl9EQVRBX1JFR0lTVEVSRUQ6IDQsICAgLy8vPCByZWdpc3RlcmVkIHVzZXIgZGF0YSBhcyBzcGVjaWZpZWQgYnkgUmVjLiBJVFUtVCBULjM1XG4gICAgSDI2NF9TRUlfVFlQRV9VU0VSX0RBVEFfVU5SRUdJU1RFUkVEOiA1LCAgIC8vLzwgdW5yZWdpc3RlcmVkIHVzZXIgZGF0YVxuICAgIEgyNjRfU0VJX1RZUEVfUkVDT1ZFUllfUE9JTlQ6IDYsICAgLy8vPCByZWNvdmVyeSBwb2ludCAoZnJhbWUgIyB0byBkZWNvZGVyIHN5bmMpXG4gICAgSDI2NF9TRUlfVFlQRV9GUkFNRV9QQUNLSU5HOiA0NSwgIC8vLzwgZnJhbWUgcGFja2luZyBhcnJhbmdlbWVudFxuICAgIEgyNjRfU0VJX1RZUEVfRElTUExBWV9PUklFTlRBVElPTjogNDcsICAvLy88IGRpc3BsYXkgb3JpZW50YXRpb25cbiAgICBIMjY0X1NFSV9UWVBFX0dSRUVOX01FVEFEQVRBOiA1NiwgIC8vLzwgR3JlZW5NUEVHIGluZm9ybWF0aW9uXG4gICAgSDI2NF9TRUlfVFlQRV9NQVNURVJJTkdfRElTUExBWV9DT0xPVVJfVk9MVU1FOiAxMzcsICAvLy88IG1hc3RlcmluZyBkaXNwbGF5IHByb3BlcnRpZXNcbiAgICBIMjY0X1NFSV9UWVBFX0FMVEVSTkFUSVZFX1RSQU5TRkVSOiAxNDcsIC8vLzwgYWx0ZXJuYXRpdmUgdHJhbnNmZXJcbn07XG5cbmNsYXNzIFNFSVBhcnNlciB7XG4gICAgc3RhdGljIF9lYnNwMnJic3AodWludDhhcnJheSkge1xuICAgICAgICBsZXQgc3JjID0gdWludDhhcnJheTtcbiAgICAgICAgbGV0IHNyY0xlbmd0aCA9IHNyYy5ieXRlTGVuZ3RoO1xuICAgICAgICBsZXQgZHN0ID0gbmV3IFVpbnQ4QXJyYXkoc3JjTGVuZ3RoKTtcbiAgICAgICAgbGV0IGRzdElkeCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPj0gMikge1xuICAgICAgICAgICAgICAgIC8vIFVuZXNjYXBlOiBTa2lwIDB4MDMgYWZ0ZXIgMDAgMDBcbiAgICAgICAgICAgICAgICBpZiAoc3JjW2ldID09PSAweDAzICYmIHNyY1tpIC0gMV0gPT09IDB4MDAgJiYgc3JjW2kgLSAyXSA9PT0gMHgwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RbZHN0SWR4XSA9IHNyY1tpXTtcbiAgICAgICAgICAgIGRzdElkeCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRzdC5idWZmZXIsIDAsIGRzdElkeCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Kej5p6QU0VJ5YaF5a65XG4gICAgICogQHBhcmFtIHtVaW50OEFycmF5fSB1aW50OEFycmF5IHNlaSBuYWx1IGJvZHlcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VTRUkodWludDhBcnJheSkge1xuICAgICAgICBsZXQgcmJzcEFycmF5ID0gU0VJUGFyc2VyLl9lYnNwMnJic3AodWludDhBcnJheSk7XG4gICAgICAgIGxldCB2ID0gbmV3IERhdGFWaWV3KHJic3BBcnJheS5idWZmZXIpO1xuICAgICAgICBsZXQgdHlwZSA9IDA7IC8vIHNlaSBwYXlsb2FkIHR5cGVcbiAgICAgICAgbGV0IHNpemUgPSAwOyAvLyBzZWkgcGF5bG9hZCBzaXplXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBsZXQgcmV0O1xuICAgICAgICBsZXQgbmV4dFZhbDtcblxuICAgICAgICAvLyBwYXlsb2FkIHR5cGVcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbmV4dFZhbCA9IHYuZ2V0VWludDgob2Zmc2V0KTtcbiAgICAgICAgICAgIG9mZnNldCArPSAxO1xuICAgICAgICAgICAgdHlwZSArPSBuZXh0VmFsO1xuICAgICAgICB9IHdoaWxlIChuZXh0VmFsID09PSAyNTUpO1xuXG4gICAgICAgIC8vIHBheWxvYWQgc2l6ZVxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBuZXh0VmFsID0gdi5nZXRVaW50OChvZmZzZXQpO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgICAgICBzaXplICs9IG5leHRWYWw7XG4gICAgICAgIH0gd2hpbGUgKG5leHRWYWwgPT09IDI1NSk7XG4gICAgICAgIC8vIGNvbnNvbGUud2Fybihgc2VpIHBheWxvYWQgdHlwZTogJHt0eXBlfSwgc2l6ZTogJHtzaXplfWApO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBIMjY0U2VpVHlwZS5IMjY0X1NFSV9UWVBFX1VTRVJfREFUQV9VTlJFR0lTVEVSRUQ6XG4gICAgICAgICAgICAgICAgcmV0ID0gU0VJUGFyc2VyLmRlY29kZVVucmVnaXN0ZXJlZFVzZXJEYXRhKHYsIG9mZnNldCwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5rbm93IFNFSSB0eXBlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUT0RPIOagueaNruWGheWuueWGmeWFpeagvOW8j+ino+aekFxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YVZpZXdcbiAgICAgKiBAcGFyYW0geyp9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7Kn0gc2l6ZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZWNvZGVVbnJlZ2lzdGVyZWRVc2VyRGF0YShkYXRhVmlldywgb2Zmc2V0LCBzaXplKSB7XG4gICAgICAgIGlmIChzaXplIDwgMTYgfHwgc2l6ZSA+IDMwKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1NFSVBhcnNlciAnLCAnZXJyb3Igc2l6ZTogJywgc2l6ZSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZW5jZW50U3RyZWFtU0VJID0gWzY3LCAxMDgsIDExMSwgMTE3LCAxMDAsIDg2LCAxMDUsIDEwMCwgMTAxLCAxMTEsIDgzLCAxMTYsIDExNCwgMTAxLCA5NywgMTA5XTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgaSkgIT09IHRlbmNlbnRTdHJlYW1TRUlbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgKz0gMTY7XG5cbiAgICAgICAgY29uc3QgaW5mbyA9IHtcbiAgICAgICAgICAgIHV1aWQ6ICcnLFxuICAgICAgICAgICAgdGltZXN0YW1wOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGluZm8udXVpZCA9ICdDbG91ZFZpZGVvU3RyZWFtJztcbiAgICAgICAgLy8ganMg56e75L2N6L+Q566X5Y+q5aSE55CGMzLkvY3mlbDlgLzvvIzlm6DmraTml6Dms5Xnm7TmjqXlkJHlt6bnp7vkvY0zMu+8jOWQpuWImeebuOW9k+S6juKAnOaXoOenu+S9jeKAnVxuICAgICAgICBpbmZvLnRpbWVzdGFtcCA9IHBhcnNlSW50KGRhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQpLnRvU3RyaW5nKDIpICsgZGF0YVZpZXcuZ2V0VWludDMyKG9mZnNldCArIDQpLnRvU3RyaW5nKDIpLCAyKTtcbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTRUlQYXJzZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saXZlL2RlbXV4L3NlaS1wYXJzZXIuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQmlsaWJpbGkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSBpcyBkZXJpdmVkIGZyb20gZGFpbHltb3Rpb24ncyBobHMuanMgbGlicmFyeSAoaGxzLmpzL3NyYy9yZW11eC9tcDQtZ2VuZXJhdG9yLmpzKVxyXG4gKiBAYXV0aG9yIHpoZW5nIHFpYW4gPHhxcUB4cXEuaW0+XHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbi8vICBNUDQgYm94ZXMgZ2VuZXJhdG9yIGZvciBJU08gQk1GRiAoSVNPIEJhc2UgTWVkaWEgRmlsZSBGb3JtYXQsIGRlZmluZWQgaW4gSVNPL0lFQyAxNDQ5Ni0xMilcclxuY2xhc3MgTVA0IHtcclxuXHJcbiAgICBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICBNUDQudHlwZXMgPSB7XHJcbiAgICAgICAgICAgIGF2YzE6IFtdLCBhdmNDOiBbXSwgYnRydDogW10sIGRpbmY6IFtdLFxyXG4gICAgICAgICAgICBkcmVmOiBbXSwgZXNkczogW10sIGZ0eXA6IFtdLCBoZGxyOiBbXSxcclxuICAgICAgICAgICAgbWRhdDogW10sIG1kaGQ6IFtdLCBtZGlhOiBbXSwgbWZoZDogW10sXHJcbiAgICAgICAgICAgIG1pbmY6IFtdLCBtb29mOiBbXSwgbW9vdjogW10sIG1wNGE6IFtdLFxyXG4gICAgICAgICAgICBtdmV4OiBbXSwgbXZoZDogW10sIHNkdHA6IFtdLCBzdGJsOiBbXSxcclxuICAgICAgICAgICAgc3RjbzogW10sIHN0c2M6IFtdLCBzdHNkOiBbXSwgc3RzejogW10sXHJcbiAgICAgICAgICAgIHN0dHM6IFtdLCB0ZmR0OiBbXSwgdGZoZDogW10sIHRyYWY6IFtdLFxyXG4gICAgICAgICAgICB0cmFrOiBbXSwgdHJ1bjogW10sIHRyZXg6IFtdLCB0a2hkOiBbXSxcclxuICAgICAgICAgICAgdm1oZDogW10sIHNtaGQ6IFtdLCAnLm1wMyc6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBNUDQudHlwZXMpIHtcclxuICAgICAgICAgICAgaWYgKE1QNC50eXBlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgTVA0LnR5cGVzW25hbWVdID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2hhckNvZGVBdCgwKSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLmNoYXJDb2RlQXQoMSksXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jaGFyQ29kZUF0KDIpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUuY2hhckNvZGVBdCgzKVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNvbnN0YW50cyA9IE1QNC5jb25zdGFudHMgPSB7fTtcclxuXHJcbiAgICAgICAgY29uc3RhbnRzLkZUWVAgPSBuZXcgVWludDhBcnJheShbXHJcbiAgICAgICAgICAgIDB4NjksIDB4NzMsIDB4NkYsIDB4NkQsICAvLyBtYWpvcl9icmFuZDogaXNvbVxyXG4gICAgICAgICAgICAweDAsICAweDAsICAweDAsICAweDEsICAgLy8gbWlub3JfdmVyc2lvbjogMHgwMVxyXG4gICAgICAgICAgICAweDY5LCAweDczLCAweDZGLCAweDZELCAgLy8gaXNvbVxyXG4gICAgICAgICAgICAweDYxLCAweDc2LCAweDYzLCAweDMxICAgLy8gYXZjMVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBjb25zdGFudHMuU1RTRF9QUkVGSVggPSBuZXcgVWludDhBcnJheShbXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyB2ZXJzaW9uKDApICsgZmxhZ3NcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSAgIC8vIGVudHJ5X2NvdW50XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGNvbnN0YW50cy5TVFRTID0gbmV3IFVpbnQ4QXJyYXkoW1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gdmVyc2lvbigwKSArIGZsYWdzXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAgICAvLyBlbnRyeV9jb3VudFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBjb25zdGFudHMuU1RTQyA9IGNvbnN0YW50cy5TVENPID0gY29uc3RhbnRzLlNUVFM7XHJcblxyXG4gICAgICAgIGNvbnN0YW50cy5TVFNaID0gbmV3IFVpbnQ4QXJyYXkoW1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gdmVyc2lvbigwKSArIGZsYWdzXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyBzYW1wbGVfc2l6ZVxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwICAgLy8gc2FtcGxlX2NvdW50XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGNvbnN0YW50cy5IRExSX1ZJREVPID0gbmV3IFVpbnQ4QXJyYXkoW1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gdmVyc2lvbigwKSArIGZsYWdzXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyBwcmVfZGVmaW5lZFxyXG4gICAgICAgICAgICAweDc2LCAweDY5LCAweDY0LCAweDY1LCAgLy8gaGFuZGxlcl90eXBlOiAndmlkZSdcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgIC8vIHJlc2VydmVkOiAzICogNCBieXRlc1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxyXG4gICAgICAgICAgICAweDU2LCAweDY5LCAweDY0LCAweDY1LFxyXG4gICAgICAgICAgICAweDZGLCAweDQ4LCAweDYxLCAweDZFLFxyXG4gICAgICAgICAgICAweDY0LCAweDZDLCAweDY1LCAweDcyLCAweDAwICAvLyBuYW1lOiBWaWRlb0hhbmRsZXJcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgY29uc3RhbnRzLkhETFJfQVVESU8gPSBuZXcgVWludDhBcnJheShbXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyB2ZXJzaW9uKDApICsgZmxhZ3NcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgIC8vIHByZV9kZWZpbmVkXHJcbiAgICAgICAgICAgIDB4NzMsIDB4NkYsIDB4NzUsIDB4NkUsICAvLyBoYW5kbGVyX3R5cGU6ICdzb3VuJ1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gcmVzZXJ2ZWQ6IDMgKiA0IGJ5dGVzXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4NTMsIDB4NkYsIDB4NzUsIDB4NkUsXHJcbiAgICAgICAgICAgIDB4NjQsIDB4NDgsIDB4NjEsIDB4NkUsXHJcbiAgICAgICAgICAgIDB4NjQsIDB4NkMsIDB4NjUsIDB4NzIsIDB4MDAgIC8vIG5hbWU6IFNvdW5kSGFuZGxlclxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBjb25zdGFudHMuRFJFRiA9IG5ldyBVaW50OEFycmF5KFtcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgIC8vIHZlcnNpb24oMCkgKyBmbGFnc1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxLCAgLy8gZW50cnlfY291bnRcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwQywgIC8vIGVudHJ5X3NpemVcclxuICAgICAgICAgICAgMHg3NSwgMHg3MiwgMHg2QywgMHgyMCwgIC8vIHR5cGUgJ3VybCAnXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEgICAvLyB2ZXJzaW9uKDApICsgZmxhZ3NcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgLy8gU291bmQgbWVkaWEgaGVhZGVyXHJcbiAgICAgICAgY29uc3RhbnRzLlNNSEQgPSBuZXcgVWludDhBcnJheShbXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyB2ZXJzaW9uKDApICsgZmxhZ3NcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCAgIC8vIGJhbGFuY2UoMikgKyByZXNlcnZlZCgyKVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvLyB2aWRlbyBtZWRpYSBoZWFkZXJcclxuICAgICAgICBjb25zdGFudHMuVk1IRCA9IG5ldyBVaW50OEFycmF5KFtcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgIC8vIHZlcnNpb24oMCkgKyBmbGFnc1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAgICAgICAgICAgICAgLy8gZ3JhcGhpY3Ntb2RlOiAyIGJ5dGVzXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyBvcGNvbG9yOiAzICogMiBieXRlc1xyXG4gICAgICAgICAgICAweDAwLCAweDAwXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgYSBib3hcclxuICAgIHN0YXRpYyBib3godHlwZSkge1xyXG4gICAgICAgIGxldCBzaXplID0gODtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBsZXQgZGF0YXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xyXG4gICAgICAgIGxldCBhcnJheUNvdW50ID0gZGF0YXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBzaXplICs9IGRhdGFzW2ldLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXN1bHQgPSBuZXcgVWludDhBcnJheShzaXplKTtcclxuICAgICAgICByZXN1bHRbMF0gPSAoc2l6ZSA+Pj4gMjQpICYgMHhGRjsgIC8vIHNpemVcclxuICAgICAgICByZXN1bHRbMV0gPSAoc2l6ZSA+Pj4gMTYpICYgMHhGRjtcclxuICAgICAgICByZXN1bHRbMl0gPSAoc2l6ZSA+Pj4gIDgpICYgMHhGRjtcclxuICAgICAgICByZXN1bHRbM10gPSAoc2l6ZSkgJiAweEZGO1xyXG5cclxuICAgICAgICByZXN1bHQuc2V0KHR5cGUsIDQpOyAgLy8gdHlwZVxyXG5cclxuICAgICAgICBsZXQgb2Zmc2V0ID0gODtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Q291bnQ7IGkrKykgeyAgLy8gZGF0YSBib2R5XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoZGF0YXNbaV0sIG9mZnNldCk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSBkYXRhc1tpXS5ieXRlTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbWl0IGZ0eXAgJiBtb292XHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVJbml0U2VnbWVudChtZXRhKSB7XHJcbiAgICAgICAgbGV0IGZ0eXAgPSBNUDQuYm94KE1QNC50eXBlcy5mdHlwLCBNUDQuY29uc3RhbnRzLkZUWVApO1xyXG4gICAgICAgIGxldCBtb292ID0gTVA0Lm1vb3YobWV0YSk7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBuZXcgVWludDhBcnJheShmdHlwLmJ5dGVMZW5ndGggKyBtb292LmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIHJlc3VsdC5zZXQoZnR5cCwgMCk7XHJcbiAgICAgICAgcmVzdWx0LnNldChtb292LCBmdHlwLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW92aWUgbWV0YWRhdGEgYm94XHJcbiAgICBzdGF0aWMgbW9vdihtZXRhKSB7XHJcbiAgICAgICAgbGV0IG12aGQgPSBNUDQubXZoZChtZXRhLnRpbWVzY2FsZSwgbWV0YS5kdXJhdGlvbik7XHJcbiAgICAgICAgbGV0IHRyYWsgPSBNUDQudHJhayhtZXRhKTtcclxuICAgICAgICBsZXQgbXZleCA9IE1QNC5tdmV4KG1ldGEpO1xyXG4gICAgICAgIHJldHVybiBNUDQuYm94KE1QNC50eXBlcy5tb292LCBtdmhkLCB0cmFrLCBtdmV4KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNb3ZpZSBoZWFkZXIgYm94XHJcbiAgICBzdGF0aWMgbXZoZCh0aW1lc2NhbGUsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIE1QNC5ib3goTVA0LnR5cGVzLm12aGQsIG5ldyBVaW50OEFycmF5KFtcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgIC8vIHZlcnNpb24oMCkgKyBmbGFnc1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gY3JlYXRpb25fdGltZVxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gbW9kaWZpY2F0aW9uX3RpbWVcclxuICAgICAgICAgICAgKHRpbWVzY2FsZSA+Pj4gMjQpICYgMHhGRiwgIC8vIHRpbWVzY2FsZTogNCBieXRlc1xyXG4gICAgICAgICAgICAodGltZXNjYWxlID4+PiAxNikgJiAweEZGLFxyXG4gICAgICAgICAgICAodGltZXNjYWxlID4+PiAgOCkgJiAweEZGLFxyXG4gICAgICAgICAgICAodGltZXNjYWxlKSAmIDB4RkYsXHJcbiAgICAgICAgICAgIChkdXJhdGlvbiA+Pj4gMjQpICYgMHhGRiwgICAvLyBkdXJhdGlvbjogNCBieXRlc1xyXG4gICAgICAgICAgICAoZHVyYXRpb24gPj4+IDE2KSAmIDB4RkYsXHJcbiAgICAgICAgICAgIChkdXJhdGlvbiA+Pj4gIDgpICYgMHhGRixcclxuICAgICAgICAgICAgKGR1cmF0aW9uKSAmIDB4RkYsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsICAvLyBQcmVmZXJyZWQgcmF0ZTogMS4wXHJcbiAgICAgICAgICAgIDB4MDEsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyBQcmVmZXJyZWRWb2x1bWUoMS4wLCAyYnl0ZXMpICsgcmVzZXJ2ZWQoMmJ5dGVzKVxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gcmVzZXJ2ZWQ6IDQgKyA0IGJ5dGVzXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsICAvLyAtLS0tYmVnaW4gY29tcG9zaXRpb24gbWF0cml4LS0tLVxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxyXG4gICAgICAgICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLFxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxyXG4gICAgICAgICAgICAweDQwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gLS0tLWVuZCBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyAtLS0tYmVnaW4gcHJlX2RlZmluZWQgNiAqIDQgYnl0ZXMtLS0tXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyAtLS0tZW5kIHByZV9kZWZpbmVkIDYgKiA0IGJ5dGVzLS0tLVxyXG4gICAgICAgICAgICAweEZGLCAweEZGLCAweEZGLCAweEZGICAgLy8gbmV4dF90cmFja19JRFxyXG4gICAgICAgIF0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUcmFjayBib3hcclxuICAgIHN0YXRpYyB0cmFrKG1ldGEpIHtcclxuICAgICAgICByZXR1cm4gTVA0LmJveChNUDQudHlwZXMudHJhaywgTVA0LnRraGQobWV0YSksIE1QNC5tZGlhKG1ldGEpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUcmFjayBoZWFkZXIgYm94XHJcbiAgICBzdGF0aWMgdGtoZChtZXRhKSB7XHJcbiAgICAgICAgbGV0IHRyYWNrSWQgPSBtZXRhLmlkLCBkdXJhdGlvbiA9IG1ldGEuZHVyYXRpb247XHJcbiAgICAgICAgbGV0IHdpZHRoID0gbWV0YS5wcmVzZW50V2lkdGgsIGhlaWdodCA9IG1ldGEucHJlc2VudEhlaWdodDtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1QNC5ib3goTVA0LnR5cGVzLnRraGQsIG5ldyBVaW50OEFycmF5KFtcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwNywgIC8vIHZlcnNpb24oMCkgKyBmbGFnc1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gY3JlYXRpb25fdGltZVxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gbW9kaWZpY2F0aW9uX3RpbWVcclxuICAgICAgICAgICAgKHRyYWNrSWQgPj4+IDI0KSAmIDB4RkYsICAvLyB0cmFja19JRDogNCBieXRlc1xyXG4gICAgICAgICAgICAodHJhY2tJZCA+Pj4gMTYpICYgMHhGRixcclxuICAgICAgICAgICAgKHRyYWNrSWQgPj4+ICA4KSAmIDB4RkYsXHJcbiAgICAgICAgICAgICh0cmFja0lkKSAmIDB4RkYsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyByZXNlcnZlZDogNCBieXRlc1xyXG4gICAgICAgICAgICAoZHVyYXRpb24gPj4+IDI0KSAmIDB4RkYsIC8vIGR1cmF0aW9uOiA0IGJ5dGVzXHJcbiAgICAgICAgICAgIChkdXJhdGlvbiA+Pj4gMTYpICYgMHhGRixcclxuICAgICAgICAgICAgKGR1cmF0aW9uID4+PiAgOCkgJiAweEZGLFxyXG4gICAgICAgICAgICAoZHVyYXRpb24pICYgMHhGRixcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgIC8vIHJlc2VydmVkOiAyICogNCBieXRlc1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gbGF5ZXIoMmJ5dGVzKSArIGFsdGVybmF0ZV9ncm91cCgyYnl0ZXMpXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyB2b2x1bWUoMmJ5dGVzKSArIHJlc2VydmVkKDJieXRlcylcclxuICAgICAgICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCwgIC8vIC0tLS1iZWdpbiBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4NDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyAtLS0tZW5kIGNvbXBvc2l0aW9uIG1hdHJpeC0tLS1cclxuICAgICAgICAgICAgKHdpZHRoID4+PiA4KSAmIDB4RkYsICAgIC8vIHdpZHRoIGFuZCBoZWlnaHRcclxuICAgICAgICAgICAgKHdpZHRoKSAmIDB4RkYsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIChoZWlnaHQgPj4+IDgpICYgMHhGRixcclxuICAgICAgICAgICAgKGhlaWdodCkgJiAweEZGLFxyXG4gICAgICAgICAgICAweDAwLCAweDAwXHJcbiAgICAgICAgXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lZGlhIEJveFxyXG4gICAgc3RhdGljIG1kaWEobWV0YSkge1xyXG4gICAgICAgIHJldHVybiBNUDQuYm94KE1QNC50eXBlcy5tZGlhLCBNUDQubWRoZChtZXRhKSwgTVA0LmhkbHIobWV0YSksIE1QNC5taW5mKG1ldGEpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZWRpYSBoZWFkZXIgYm94XHJcbiAgICBzdGF0aWMgbWRoZChtZXRhKSB7XHJcbiAgICAgICAgbGV0IHRpbWVzY2FsZSA9IG1ldGEudGltZXNjYWxlO1xyXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IG1ldGEuZHVyYXRpb247XHJcbiAgICAgICAgcmV0dXJuIE1QNC5ib3goTVA0LnR5cGVzLm1kaGQsIG5ldyBVaW50OEFycmF5KFtcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgIC8vIHZlcnNpb24oMCkgKyBmbGFnc1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gY3JlYXRpb25fdGltZVxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gbW9kaWZpY2F0aW9uX3RpbWVcclxuICAgICAgICAgICAgKHRpbWVzY2FsZSA+Pj4gMjQpICYgMHhGRiwgIC8vIHRpbWVzY2FsZTogNCBieXRlc1xyXG4gICAgICAgICAgICAodGltZXNjYWxlID4+PiAxNikgJiAweEZGLFxyXG4gICAgICAgICAgICAodGltZXNjYWxlID4+PiAgOCkgJiAweEZGLFxyXG4gICAgICAgICAgICAodGltZXNjYWxlKSAmIDB4RkYsXHJcbiAgICAgICAgICAgIChkdXJhdGlvbiA+Pj4gMjQpICYgMHhGRiwgICAvLyBkdXJhdGlvbjogNCBieXRlc1xyXG4gICAgICAgICAgICAoZHVyYXRpb24gPj4+IDE2KSAmIDB4RkYsXHJcbiAgICAgICAgICAgIChkdXJhdGlvbiA+Pj4gIDgpICYgMHhGRixcclxuICAgICAgICAgICAgKGR1cmF0aW9uKSAmIDB4RkYsXHJcbiAgICAgICAgICAgIDB4NTUsIDB4QzQsICAgICAgICAgICAgIC8vIGxhbmd1YWdlOiB1bmQgKHVuZGV0ZXJtaW5lZClcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCAgICAgICAgICAgICAgLy8gcHJlX2RlZmluZWQgPSAwXHJcbiAgICAgICAgXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lZGlhIGhhbmRsZXIgcmVmZXJlbmNlIGJveFxyXG4gICAgc3RhdGljIGhkbHIobWV0YSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gbnVsbDtcclxuICAgICAgICBpZiAobWV0YS50eXBlID09PSAnYXVkaW8nKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBNUDQuY29uc3RhbnRzLkhETFJfQVVESU87XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IE1QNC5jb25zdGFudHMuSERMUl9WSURFTztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1QNC5ib3goTVA0LnR5cGVzLmhkbHIsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lZGlhIGluZm9tYXRpb24gYm94XHJcbiAgICBzdGF0aWMgbWluZihtZXRhKSB7XHJcbiAgICAgICAgbGV0IHhtaGQgPSBudWxsO1xyXG4gICAgICAgIGlmIChtZXRhLnR5cGUgPT09ICdhdWRpbycpIHtcclxuICAgICAgICAgICAgeG1oZCA9IE1QNC5ib3goTVA0LnR5cGVzLnNtaGQsIE1QNC5jb25zdGFudHMuU01IRCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeG1oZCA9IE1QNC5ib3goTVA0LnR5cGVzLnZtaGQsIE1QNC5jb25zdGFudHMuVk1IRCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNUDQuYm94KE1QNC50eXBlcy5taW5mLCB4bWhkLCBNUDQuZGluZigpLCBNUDQuc3RibChtZXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGF0YSBpbmZvbWF0aW9uIGJveFxyXG4gICAgc3RhdGljIGRpbmYoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IE1QNC5ib3goTVA0LnR5cGVzLmRpbmYsXHJcbiAgICAgICAgICAgIE1QNC5ib3goTVA0LnR5cGVzLmRyZWYsIE1QNC5jb25zdGFudHMuRFJFRilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2FtcGxlIHRhYmxlIGJveFxyXG4gICAgc3RhdGljIHN0YmwobWV0YSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBNUDQuYm94KE1QNC50eXBlcy5zdGJsLCAgLy8gdHlwZTogc3RibFxyXG4gICAgICAgICAgICBNUDQuc3RzZChtZXRhKSwgIC8vIFNhbXBsZSBEZXNjcmlwdGlvbiBUYWJsZVxyXG4gICAgICAgICAgICBNUDQuYm94KE1QNC50eXBlcy5zdHRzLCBNUDQuY29uc3RhbnRzLlNUVFMpLCAgLy8gVGltZS1Uby1TYW1wbGVcclxuICAgICAgICAgICAgTVA0LmJveChNUDQudHlwZXMuc3RzYywgTVA0LmNvbnN0YW50cy5TVFNDKSwgIC8vIFNhbXBsZS1Uby1DaHVua1xyXG4gICAgICAgICAgICBNUDQuYm94KE1QNC50eXBlcy5zdHN6LCBNUDQuY29uc3RhbnRzLlNUU1opLCAgLy8gU2FtcGxlIHNpemVcclxuICAgICAgICAgICAgTVA0LmJveChNUDQudHlwZXMuc3RjbywgTVA0LmNvbnN0YW50cy5TVENPKSAgIC8vIENodW5rIG9mZnNldFxyXG4gICAgICAgICk7IFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhbXBsZSBkZXNjcmlwdGlvbiBib3hcclxuICAgIHN0YXRpYyBzdHNkKG1ldGEpIHtcclxuICAgICAgICBpZiAobWV0YS50eXBlID09PSAnYXVkaW8nKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRhLmNvZGVjID09PSAnbXAzJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1QNC5ib3goTVA0LnR5cGVzLnN0c2QsIE1QNC5jb25zdGFudHMuU1RTRF9QUkVGSVgsIE1QNC5tcDMobWV0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVsc2U6IGFhYyAtPiBtcDRhXHJcbiAgICAgICAgICAgIHJldHVybiBNUDQuYm94KE1QNC50eXBlcy5zdHNkLCBNUDQuY29uc3RhbnRzLlNUU0RfUFJFRklYLCBNUDQubXA0YShtZXRhKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1QNC5ib3goTVA0LnR5cGVzLnN0c2QsIE1QNC5jb25zdGFudHMuU1RTRF9QUkVGSVgsIE1QNC5hdmMxKG1ldGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1wMyhtZXRhKSB7XHJcbiAgICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IG1ldGEuY2hhbm5lbENvdW50O1xyXG4gICAgICAgIGxldCBzYW1wbGVSYXRlID0gbWV0YS5hdWRpb1NhbXBsZVJhdGU7XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoW1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gcmVzZXJ2ZWQoNClcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgIC8vIHJlc2VydmVkKDIpICsgZGF0YV9yZWZlcmVuY2VfaW5kZXgoMilcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgIC8vIHJlc2VydmVkOiAyICogNCBieXRlc1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxyXG4gICAgICAgICAgICAweDAwLCBjaGFubmVsQ291bnQsICAgICAgLy8gY2hhbm5lbENvdW50KDIpXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MTAsICAgICAgICAgICAgICAvLyBzYW1wbGVTaXplKDIpXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyByZXNlcnZlZCg0KVxyXG4gICAgICAgICAgICAoc2FtcGxlUmF0ZSA+Pj4gOCkgJiAweEZGLCAgLy8gQXVkaW8gc2FtcGxlIHJhdGVcclxuICAgICAgICAgICAgKHNhbXBsZVJhdGUpICYgMHhGRixcclxuICAgICAgICAgICAgMHgwMCwgMHgwMFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICByZXR1cm4gTVA0LmJveChNUDQudHlwZXNbJy5tcDMnXSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1wNGEobWV0YSkge1xyXG4gICAgICAgIGxldCBjaGFubmVsQ291bnQgPSBtZXRhLmNoYW5uZWxDb3VudDtcclxuICAgICAgICBsZXQgc2FtcGxlUmF0ZSA9IG1ldGEuYXVkaW9TYW1wbGVSYXRlO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KFtcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgIC8vIHJlc2VydmVkKDQpXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsICAvLyByZXNlcnZlZCgyKSArIGRhdGFfcmVmZXJlbmNlX2luZGV4KDIpXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyByZXNlcnZlZDogMiAqIDQgYnl0ZXNcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcclxuICAgICAgICAgICAgMHgwMCwgY2hhbm5lbENvdW50LCAgICAgIC8vIGNoYW5uZWxDb3VudCgyKVxyXG4gICAgICAgICAgICAweDAwLCAweDEwLCAgICAgICAgICAgICAgLy8gc2FtcGxlU2l6ZSgyKVxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gcmVzZXJ2ZWQoNClcclxuICAgICAgICAgICAgKHNhbXBsZVJhdGUgPj4+IDgpICYgMHhGRiwgIC8vIEF1ZGlvIHNhbXBsZSByYXRlXHJcbiAgICAgICAgICAgIChzYW1wbGVSYXRlKSAmIDB4RkYsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDBcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1QNC5ib3goTVA0LnR5cGVzLm1wNGEsIGRhdGEsIE1QNC5lc2RzKG1ldGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXNkcyhtZXRhKSB7XHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IG1ldGEuY29uZmlnIHx8IFtdO1xyXG4gICAgICAgIGxldCBjb25maWdTaXplID0gY29uZmlnLmxlbmd0aDtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KFtcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgIC8vIHZlcnNpb24gMCArIGZsYWdzXHJcblxyXG4gICAgICAgICAgICAweDAzLCAgICAgICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRvcl90eXBlXHJcbiAgICAgICAgICAgIDB4MTcgKyBjb25maWdTaXplLCAgICAgICAvLyBsZW5ndGgzXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDEsICAgICAgICAgICAgICAvLyBlc19pZFxyXG4gICAgICAgICAgICAweDAwLCAgICAgICAgICAgICAgICAgICAgLy8gc3RyZWFtX3ByaW9yaXR5XHJcblxyXG4gICAgICAgICAgICAweDA0LCAgICAgICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRvcl90eXBlXHJcbiAgICAgICAgICAgIDB4MEYgKyBjb25maWdTaXplLCAgICAgICAvLyBsZW5ndGhcclxuICAgICAgICAgICAgMHg0MCwgICAgICAgICAgICAgICAgICAgIC8vIGNvZGVjOiBtcGVnNF9hdWRpb1xyXG4gICAgICAgICAgICAweDE1LCAgICAgICAgICAgICAgICAgICAgLy8gc3RyZWFtX3R5cGU6IEF1ZGlvXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsICAgICAgICAvLyBidWZmZXJfc2l6ZVxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gbWF4Qml0cmF0ZVxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gYXZnQml0cmF0ZVxyXG5cclxuICAgICAgICAgICAgMHgwNSAgICAgICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0b3JfdHlwZVxyXG4gICAgICAgIF0uY29uY2F0KFtcclxuICAgICAgICAgICAgY29uZmlnU2l6ZVxyXG4gICAgICAgIF0pLmNvbmNhdChcclxuICAgICAgICAgICAgY29uZmlnXHJcbiAgICAgICAgKS5jb25jYXQoW1xyXG4gICAgICAgICAgICAweDA2LCAweDAxLCAweDAyICAgICAgICAgLy8gR0FTcGVjaWZpY0NvbmZpZ1xyXG4gICAgICAgIF0pKTtcclxuICAgICAgICByZXR1cm4gTVA0LmJveChNUDQudHlwZXMuZXNkcywgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGF2YzEobWV0YSkge1xyXG4gICAgICAgIGxldCBhdmNjID0gbWV0YS5hdmNjO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IG1ldGEuY29kZWNXaWR0aCwgaGVpZ2h0ID0gbWV0YS5jb2RlY0hlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheShbXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyByZXNlcnZlZCg0KVxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxLCAgLy8gcmVzZXJ2ZWQoMikgKyBkYXRhX3JlZmVyZW5jZV9pbmRleCgyKVxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gcHJlX2RlZmluZWQoMikgKyByZXNlcnZlZCgyKVxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gcHJlX2RlZmluZWQ6IDMgKiA0IGJ5dGVzXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgICh3aWR0aCA+Pj4gOCkgJiAweEZGLCAgICAvLyB3aWR0aDogMiBieXRlc1xyXG4gICAgICAgICAgICAod2lkdGgpICYgMHhGRixcclxuICAgICAgICAgICAgKGhlaWdodCA+Pj4gOCkgJiAweEZGLCAgIC8vIGhlaWdodDogMiBieXRlc1xyXG4gICAgICAgICAgICAoaGVpZ2h0KSAmIDB4RkYsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4NDgsIDB4MDAsIDB4MDAsICAvLyBob3JpenJlc29sdXRpb246IDQgYnl0ZXNcclxuICAgICAgICAgICAgMHgwMCwgMHg0OCwgMHgwMCwgMHgwMCwgIC8vIHZlcnRyZXNvbHV0aW9uOiA0IGJ5dGVzXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyByZXNlcnZlZDogNCBieXRlc1xyXG4gICAgICAgICAgICAweDAwLCAweDAxLCAgICAgICAgICAgICAgLy8gZnJhbWVfY291bnRcclxuICAgICAgICAgICAgMHgwQSwgICAgICAgICAgICAgICAgICAgIC8vIHN0cmxlblxyXG4gICAgICAgICAgICAweDczLCAweDZCLCAweDc5LCAweDJELCAgLy8gY29tcHJlc3Nvcm5hbWU6IDMyIGJ5dGVzXHJcbiAgICAgICAgICAgIDB4NzcsIDB4NjEsIDB4NkUsIDB4NjcsIFxyXG4gICAgICAgICAgICAweDQwLCAweDcxLCAweDcxLCAweDJFLCBcclxuICAgICAgICAgICAgMHg2MywgMHg2RiwgMHg2RCwgMHgwMCxcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCxcclxuICAgICAgICAgICAgMHgwMCwgMHgxOCwgICAgICAgICAgICAgIC8vIGRlcHRoXHJcbiAgICAgICAgICAgIDB4RkYsIDB4RkYgICAgICAgICAgICAgICAvLyBwcmVfZGVmaW5lZCA9IC0xXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgcmV0dXJuIE1QNC5ib3goTVA0LnR5cGVzLmF2YzEsIGRhdGEsIE1QNC5ib3goTVA0LnR5cGVzLmF2Y0MsIGF2Y2MpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNb3ZpZSBFeHRlbmRzIGJveFxyXG4gICAgc3RhdGljIG12ZXgobWV0YSkge1xyXG4gICAgICAgIHJldHVybiBNUDQuYm94KE1QNC50eXBlcy5tdmV4LCBNUDQudHJleChtZXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJhY2sgRXh0ZW5kcyBib3hcclxuICAgIHN0YXRpYyB0cmV4KG1ldGEpIHtcclxuICAgICAgICBsZXQgdHJhY2tJZCA9IG1ldGEuaWQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheShbXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyB2ZXJzaW9uKDApICsgZmxhZ3NcclxuICAgICAgICAgICAgKHRyYWNrSWQgPj4+IDI0KSAmIDB4RkYsIC8vIHRyYWNrX0lEXHJcbiAgICAgICAgICAgICh0cmFja0lkID4+PiAxNikgJiAweEZGLFxyXG4gICAgICAgICAgICAodHJhY2tJZCA+Pj4gIDgpICYgMHhGRixcclxuICAgICAgICAgICAgKHRyYWNrSWQpICYgMHhGRixcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgIC8vIGRlZmF1bHRfc2FtcGxlX2Rlc2NyaXB0aW9uX2luZGV4XHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyBkZWZhdWx0X3NhbXBsZV9kdXJhdGlvblxyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAgLy8gZGVmYXVsdF9zYW1wbGVfc2l6ZVxyXG4gICAgICAgICAgICAweDAwLCAweDAxLCAweDAwLCAweDAxICAgLy8gZGVmYXVsdF9zYW1wbGVfZmxhZ3NcclxuICAgICAgICBdKTtcclxuICAgICAgICByZXR1cm4gTVA0LmJveChNUDQudHlwZXMudHJleCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW92aWUgZnJhZ21lbnQgYm94XHJcbiAgICBzdGF0aWMgbW9vZih0cmFjaywgYmFzZU1lZGlhRGVjb2RlVGltZSkge1xyXG4gICAgICAgIHJldHVybiBNUDQuYm94KE1QNC50eXBlcy5tb29mLCBNUDQubWZoZCh0cmFjay5zZXF1ZW5jZU51bWJlciksIE1QNC50cmFmKHRyYWNrLCBiYXNlTWVkaWFEZWNvZGVUaW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1maGQoc2VxdWVuY2VOdW1iZXIpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KFtcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcclxuICAgICAgICAgICAgKHNlcXVlbmNlTnVtYmVyID4+PiAyNCkgJiAweEZGLCAgLy8gc2VxdWVuY2VfbnVtYmVyOiBpbnQzMlxyXG4gICAgICAgICAgICAoc2VxdWVuY2VOdW1iZXIgPj4+IDE2KSAmIDB4RkYsXHJcbiAgICAgICAgICAgIChzZXF1ZW5jZU51bWJlciA+Pj4gIDgpICYgMHhGRixcclxuICAgICAgICAgICAgKHNlcXVlbmNlTnVtYmVyKSAmIDB4RkZcclxuICAgICAgICBdKTtcclxuICAgICAgICByZXR1cm4gTVA0LmJveChNUDQudHlwZXMubWZoZCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJhY2sgZnJhZ21lbnQgYm94XHJcbiAgICBzdGF0aWMgdHJhZih0cmFjaywgYmFzZU1lZGlhRGVjb2RlVGltZSkge1xyXG4gICAgICAgIGxldCB0cmFja0lkID0gdHJhY2suaWQ7XHJcblxyXG4gICAgICAgIC8vIFRyYWNrIGZyYWdtZW50IGhlYWRlciBib3hcclxuICAgICAgICBsZXQgdGZoZCA9IE1QNC5ib3goTVA0LnR5cGVzLnRmaGQsIG5ldyBVaW50OEFycmF5KFtcclxuICAgICAgICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgIC8vIHZlcnNpb24oMCkgJiBmbGFnc1xyXG4gICAgICAgICAgICAodHJhY2tJZCA+Pj4gMjQpICYgMHhGRiwgLy8gdHJhY2tfSURcclxuICAgICAgICAgICAgKHRyYWNrSWQgPj4+IDE2KSAmIDB4RkYsXHJcbiAgICAgICAgICAgICh0cmFja0lkID4+PiAgOCkgJiAweEZGLFxyXG4gICAgICAgICAgICAodHJhY2tJZCkgJiAweEZGXHJcbiAgICAgICAgXSkpO1xyXG4gICAgICAgIC8vIFRyYWNrIEZyYWdtZW50IERlY29kZSBUaW1lXHJcbiAgICAgICAgbGV0IHRmZHQgPSBNUDQuYm94KE1QNC50eXBlcy50ZmR0LCBuZXcgVWludDhBcnJheShbXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsICAvLyB2ZXJzaW9uKDApICYgZmxhZ3NcclxuICAgICAgICAgICAgKGJhc2VNZWRpYURlY29kZVRpbWUgPj4+IDI0KSAmIDB4RkYsICAvLyBiYXNlTWVkaWFEZWNvZGVUaW1lOiBpbnQzMlxyXG4gICAgICAgICAgICAoYmFzZU1lZGlhRGVjb2RlVGltZSA+Pj4gMTYpICYgMHhGRixcclxuICAgICAgICAgICAgKGJhc2VNZWRpYURlY29kZVRpbWUgPj4+ICA4KSAmIDB4RkYsXHJcbiAgICAgICAgICAgIChiYXNlTWVkaWFEZWNvZGVUaW1lKSAmIDB4RkZcclxuICAgICAgICBdKSk7XHJcbiAgICAgICAgbGV0IHNkdHAgPSBNUDQuc2R0cCh0cmFjayk7XHJcbiAgICAgICAgbGV0IHRydW4gPSBNUDQudHJ1bih0cmFjaywgc2R0cC5ieXRlTGVuZ3RoICsgMTYgKyAxNiArIDggKyAxNiArIDggKyA4KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1QNC5ib3goTVA0LnR5cGVzLnRyYWYsIHRmaGQsIHRmZHQsIHRydW4sIHNkdHApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhbXBsZSBEZXBlbmRlbmN5IFR5cGUgYm94XHJcbiAgICBzdGF0aWMgc2R0cCh0cmFjaykge1xyXG4gICAgICAgIGxldCBzYW1wbGVzID0gdHJhY2suc2FtcGxlcyB8fCBbXTtcclxuICAgICAgICBsZXQgc2FtcGxlQ291bnQgPSBzYW1wbGVzLmxlbmd0aDtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KDQgKyBzYW1wbGVDb3VudCk7XHJcbiAgICAgICAgLy8gMH40IGJ5dGVzOiB2ZXJzaW9uKDApICYgZmxhZ3NcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGZsYWdzID0gc2FtcGxlc1tpXS5mbGFncztcclxuICAgICAgICAgICAgZGF0YVtpICsgNF0gPSAoZmxhZ3MuaXNMZWFkaW5nIDw8IDYpICAgIC8vIGlzX2xlYWRpbmc6IDIgKGJpdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfCAoZmxhZ3MuZGVwZW5kc09uIDw8IDQpICAgIC8vIHNhbXBsZV9kZXBlbmRzX29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHwgKGZsYWdzLmlzRGVwZW5kZWRPbiA8PCAyKSAvLyBzYW1wbGVfaXNfZGVwZW5kZWRfb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfCAoZmxhZ3MuaGFzUmVkdW5kYW5jeSk7ICAgIC8vIHNhbXBsZV9oYXNfcmVkdW5kYW5jeVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTVA0LmJveChNUDQudHlwZXMuc2R0cCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJhY2sgZnJhZ21lbnQgcnVuIGJveFxyXG4gICAgc3RhdGljIHRydW4odHJhY2ssIG9mZnNldCkge1xyXG4gICAgICAgIGxldCBzYW1wbGVzID0gdHJhY2suc2FtcGxlcyB8fCBbXTtcclxuICAgICAgICBsZXQgc2FtcGxlQ291bnQgPSBzYW1wbGVzLmxlbmd0aDtcclxuICAgICAgICBsZXQgZGF0YVNpemUgPSAxMiArIDE2ICogc2FtcGxlQ291bnQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhU2l6ZSk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDggKyBkYXRhU2l6ZTtcclxuXHJcbiAgICAgICAgZGF0YS5zZXQoW1xyXG4gICAgICAgICAgICAweDAwLCAweDAwLCAweDBGLCAweDAxLCAgICAgIC8vIHZlcnNpb24oMCkgJiBmbGFnc1xyXG4gICAgICAgICAgICAoc2FtcGxlQ291bnQgPj4+IDI0KSAmIDB4RkYsIC8vIHNhbXBsZV9jb3VudFxyXG4gICAgICAgICAgICAoc2FtcGxlQ291bnQgPj4+IDE2KSAmIDB4RkYsXHJcbiAgICAgICAgICAgIChzYW1wbGVDb3VudCA+Pj4gIDgpICYgMHhGRixcclxuICAgICAgICAgICAgKHNhbXBsZUNvdW50KSAmIDB4RkYsXHJcbiAgICAgICAgICAgIChvZmZzZXQgPj4+IDI0KSAmIDB4RkYsICAgICAgLy8gZGF0YV9vZmZzZXRcclxuICAgICAgICAgICAgKG9mZnNldCA+Pj4gMTYpICYgMHhGRixcclxuICAgICAgICAgICAgKG9mZnNldCA+Pj4gIDgpICYgMHhGRixcclxuICAgICAgICAgICAgKG9mZnNldCkgJiAweEZGXHJcbiAgICAgICAgXSwgMCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtcGxlQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBzYW1wbGVzW2ldLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IHNhbXBsZXNbaV0uc2l6ZTtcclxuICAgICAgICAgICAgbGV0IGZsYWdzID0gc2FtcGxlc1tpXS5mbGFncztcclxuICAgICAgICAgICAgbGV0IGN0cyA9IHNhbXBsZXNbaV0uY3RzO1xyXG4gICAgICAgICAgICBkYXRhLnNldChbXHJcbiAgICAgICAgICAgICAgICAoZHVyYXRpb24gPj4+IDI0KSAmIDB4RkYsICAvLyBzYW1wbGVfZHVyYXRpb25cclxuICAgICAgICAgICAgICAgIChkdXJhdGlvbiA+Pj4gMTYpICYgMHhGRixcclxuICAgICAgICAgICAgICAgIChkdXJhdGlvbiA+Pj4gIDgpICYgMHhGRixcclxuICAgICAgICAgICAgICAgIChkdXJhdGlvbikgJiAweEZGLFxyXG4gICAgICAgICAgICAgICAgKHNpemUgPj4+IDI0KSAmIDB4RkYsICAgICAgLy8gc2FtcGxlX3NpemVcclxuICAgICAgICAgICAgICAgIChzaXplID4+PiAxNikgJiAweEZGLFxyXG4gICAgICAgICAgICAgICAgKHNpemUgPj4+ICA4KSAmIDB4RkYsXHJcbiAgICAgICAgICAgICAgICAoc2l6ZSkgJiAweEZGLFxyXG4gICAgICAgICAgICAgICAgKGZsYWdzLmlzTGVhZGluZyA8PCAyKSB8IGZsYWdzLmRlcGVuZHNPbiwgIC8vIHNhbXBsZV9mbGFnc1xyXG4gICAgICAgICAgICAgICAgKGZsYWdzLmlzRGVwZW5kZWRPbiA8PCA2KSB8IChmbGFncy5oYXNSZWR1bmRhbmN5IDw8IDQpIHwgZmxhZ3MuaXNOb25TeW5jLFxyXG4gICAgICAgICAgICAgICAgMHgwMCwgMHgwMCwgICAgICAgICAgICAgICAgLy8gc2FtcGxlX2RlZ3JhZGF0aW9uX3ByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICAoY3RzID4+PiAyNCkgJiAweEZGLCAgICAgICAvLyBzYW1wbGVfY29tcG9zaXRpb25fdGltZV9vZmZzZXRcclxuICAgICAgICAgICAgICAgIChjdHMgPj4+IDE2KSAmIDB4RkYsXHJcbiAgICAgICAgICAgICAgICAoY3RzID4+PiAgOCkgJiAweEZGLFxyXG4gICAgICAgICAgICAgICAgKGN0cykgJiAweEZGXHJcbiAgICAgICAgICAgIF0sIDEyICsgMTYgKiBpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1QNC5ib3goTVA0LnR5cGVzLnRydW4sIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtZGF0KGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gTVA0LmJveChNUDQudHlwZXMubWRhdCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5NUDQuaW5pdCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTVA0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGl2ZS9yZW11eC9tcDQtZ2VuZXJhdG9yLmpzIiwiZnVuY3Rpb24gd2VicGFja0Jvb3RzdHJhcEZ1bmMgKG1vZHVsZXMpIHtcbiAgICAvKioqKioqLyAgLy8gVGhlIG1vZHVsZSBjYWNoZVxuICAgIC8qKioqKiovICB2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuICAgIFxuICAgIC8qKioqKiovICAvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuICAgIC8qKioqKiovICBmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4gICAgXG4gICAgLyoqKioqKi8gICAgLy8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gICAgLyoqKioqKi8gICAgaWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gICAgLyoqKioqKi8gICAgICByZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiAgICBcbiAgICAvKioqKioqLyAgICAvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuICAgIC8qKioqKiovICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiAgICAvKioqKioqLyAgICAgIGk6IG1vZHVsZUlkLFxuICAgIC8qKioqKiovICAgICAgbDogZmFsc2UsXG4gICAgLyoqKioqKi8gICAgICBleHBvcnRzOiB7fVxuICAgIC8qKioqKiovICAgIH07XG4gICAgXG4gICAgLyoqKioqKi8gICAgLy8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gICAgLyoqKioqKi8gICAgbW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gICAgXG4gICAgLyoqKioqKi8gICAgLy8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuICAgIC8qKioqKiovICAgIG1vZHVsZS5sID0gdHJ1ZTtcbiAgICBcbiAgICAvKioqKioqLyAgICAvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuICAgIC8qKioqKiovICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiAgICAvKioqKioqLyAgfVxuICAgIFxuICAgIC8qKioqKiovICAvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuICAgIC8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuICAgIFxuICAgIC8qKioqKiovICAvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuICAgIC8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuICAgIFxuICAgIC8qKioqKiovICAvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gICAgLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcbiAgICBcbiAgICAvKioqKioqLyAgLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gICAgLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuICAgIC8qKioqKiovICAgIGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiAgICAvKioqKioqLyAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gICAgLyoqKioqKi8gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgLyoqKioqKi8gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgLyoqKioqKi8gICAgICAgIGdldDogZ2V0dGVyXG4gICAgLyoqKioqKi8gICAgICB9KTtcbiAgICAvKioqKioqLyAgICB9XG4gICAgLyoqKioqKi8gIH07XG4gICAgXG4gICAgLyoqKioqKi8gIC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiAgICAvKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuICAgIC8qKioqKiovICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgLyoqKioqKi8gIH07XG4gICAgXG4gICAgLyoqKioqKi8gIC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gICAgLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgIC8qKioqKiovICAgIHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuICAgIC8qKioqKiovICAgICAgZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiAgICAvKioqKioqLyAgICAgIGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gICAgLyoqKioqKi8gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuICAgIC8qKioqKiovICAgIHJldHVybiBnZXR0ZXI7XG4gICAgLyoqKioqKi8gIH07XG4gICAgXG4gICAgLyoqKioqKi8gIC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuICAgIC8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4gICAgXG4gICAgLyoqKioqKi8gIC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gICAgLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuICAgIFxuICAgIC8qKioqKiovICAvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuICAgIC8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuICAgIFxuICAgICAgdmFyIGYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IEVOVFJZX01PRFVMRSlcbiAgICAgIHJldHVybiBmLmRlZmF1bHQgfHwgZiAvLyB0cnkgdG8gY2FsbCBkZWZhdWx0IGlmIGRlZmluZWQgdG8gYWxzbyBzdXBwb3J0IGJhYmVsIGVzbW9kdWxlIGV4cG9ydHNcbiAgICB9XG4gICAgXG4gICAgdmFyIG1vZHVsZU5hbWVSZXFFeHAgPSAnW1xcXFwufFxcXFwtfFxcXFwrfFxcXFx3fFxcL3xAXSsnXG4gICAgdmFyIGRlcGVuZGVuY3lSZWdFeHAgPSAnXFxcXCgoXFwvXFxcXCouKj9cXFxcKlxcLyk/XFxzPy4qPygnICsgbW9kdWxlTmFtZVJlcUV4cCArICcpLio/XFxcXCknIC8vIGFkZGl0aW9uYWwgY2hhcnMgd2hlbiBvdXRwdXQucGF0aGluZm8gaXMgdHJ1ZVxuICAgIFxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI1OTM2NjEvMTMwNDQyXG4gICAgZnVuY3Rpb24gcXVvdGVSZWdFeHAgKHN0cikge1xuICAgICAgcmV0dXJuIChzdHIgKyAnJykucmVwbGFjZSgvWy4/KiteJFtcXF1cXFxcKCl7fXwtXS9nLCAnXFxcXCQmJylcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0TW9kdWxlRGVwZW5kZW5jaWVzIChzb3VyY2VzLCBtb2R1bGUsIHF1ZXVlTmFtZSkge1xuICAgICAgdmFyIHJldHZhbCA9IHt9XG4gICAgICByZXR2YWxbcXVldWVOYW1lXSA9IFtdXG4gICAgXG4gICAgICB2YXIgZm5TdHJpbmcgPSBtb2R1bGUudG9TdHJpbmcoKVxuICAgICAgdmFyIHdyYXBwZXJTaWduYXR1cmUgPSBmblN0cmluZy5tYXRjaCgvXmZ1bmN0aW9uXFxzP1xcKFxcdyssXFxzKlxcdyssXFxzKihcXHcrKVxcKS8pXG4gICAgICBpZiAoIXdyYXBwZXJTaWduYXR1cmUpIHJldHVybiByZXR2YWxcbiAgICAgIHZhciB3ZWJwYWNrUmVxdWlyZU5hbWUgPSB3cmFwcGVyU2lnbmF0dXJlWzFdXG4gICAgXG4gICAgICAvLyBtYWluIGJ1bmRsZSBkZXBzXG4gICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKCcoXFxcXFxcXFxufFxcXFxXKScgKyBxdW90ZVJlZ0V4cCh3ZWJwYWNrUmVxdWlyZU5hbWUpICsgZGVwZW5kZW5jeVJlZ0V4cCwgJ2cnKVxuICAgICAgdmFyIG1hdGNoXG4gICAgICB3aGlsZSAoKG1hdGNoID0gcmUuZXhlYyhmblN0cmluZykpKSB7XG4gICAgICAgIGlmIChtYXRjaFszXSA9PT0gJ2RsbC1yZWZlcmVuY2UnKSBjb250aW51ZVxuICAgICAgICByZXR2YWxbcXVldWVOYW1lXS5wdXNoKG1hdGNoWzNdKVxuICAgICAgfVxuICAgIFxuICAgICAgLy8gZGxsIGRlcHNcbiAgICAgIHJlID0gbmV3IFJlZ0V4cCgnXFxcXCgnICsgcXVvdGVSZWdFeHAod2VicGFja1JlcXVpcmVOYW1lKSArICdcXFxcKFwiKGRsbC1yZWZlcmVuY2VcXFxccygnICsgbW9kdWxlTmFtZVJlcUV4cCArICcpKVwiXFxcXClcXFxcKScgKyBkZXBlbmRlbmN5UmVnRXhwLCAnZycpXG4gICAgICB3aGlsZSAoKG1hdGNoID0gcmUuZXhlYyhmblN0cmluZykpKSB7XG4gICAgICAgIGlmICghc291cmNlc1ttYXRjaFsyXV0pIHtcbiAgICAgICAgICByZXR2YWxbcXVldWVOYW1lXS5wdXNoKG1hdGNoWzFdKVxuICAgICAgICAgIHNvdXJjZXNbbWF0Y2hbMl1dID0gX193ZWJwYWNrX3JlcXVpcmVfXyhtYXRjaFsxXSkubVxuICAgICAgICB9XG4gICAgICAgIHJldHZhbFttYXRjaFsyXV0gPSByZXR2YWxbbWF0Y2hbMl1dIHx8IFtdXG4gICAgICAgIHJldHZhbFttYXRjaFsyXV0ucHVzaChtYXRjaFs0XSlcbiAgICAgIH1cbiAgICBcbiAgICAgIHJldHVybiByZXR2YWxcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaGFzVmFsdWVzSW5RdWV1ZXMgKHF1ZXVlcykge1xuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhxdWV1ZXMpXG4gICAgICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc1ZhbHVlcywga2V5KSB7XG4gICAgICAgIHJldHVybiBoYXNWYWx1ZXMgfHwgcXVldWVzW2tleV0ubGVuZ3RoID4gMFxuICAgICAgfSwgZmFsc2UpXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGdldFJlcXVpcmVkTW9kdWxlcyAoc291cmNlcywgbW9kdWxlSWQpIHtcbiAgICAgIHZhciBtb2R1bGVzUXVldWUgPSB7XG4gICAgICAgIG1haW46IFttb2R1bGVJZF1cbiAgICAgIH1cbiAgICAgIHZhciByZXF1aXJlZE1vZHVsZXMgPSB7XG4gICAgICAgIG1haW46IFtdXG4gICAgICB9XG4gICAgICB2YXIgc2Vlbk1vZHVsZXMgPSB7XG4gICAgICAgIG1haW46IHt9XG4gICAgICB9XG4gICAgXG4gICAgICB3aGlsZSAoaGFzVmFsdWVzSW5RdWV1ZXMobW9kdWxlc1F1ZXVlKSkge1xuICAgICAgICB2YXIgcXVldWVzID0gT2JqZWN0LmtleXMobW9kdWxlc1F1ZXVlKVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBxdWV1ZU5hbWUgPSBxdWV1ZXNbaV1cbiAgICAgICAgICB2YXIgcXVldWUgPSBtb2R1bGVzUXVldWVbcXVldWVOYW1lXVxuICAgICAgICAgIHZhciBtb2R1bGVUb0NoZWNrID0gcXVldWUucG9wKClcbiAgICAgICAgICBzZWVuTW9kdWxlc1txdWV1ZU5hbWVdID0gc2Vlbk1vZHVsZXNbcXVldWVOYW1lXSB8fCB7fVxuICAgICAgICAgIGlmIChzZWVuTW9kdWxlc1txdWV1ZU5hbWVdW21vZHVsZVRvQ2hlY2tdIHx8ICFzb3VyY2VzW3F1ZXVlTmFtZV1bbW9kdWxlVG9DaGVja10pIGNvbnRpbnVlXG4gICAgICAgICAgc2Vlbk1vZHVsZXNbcXVldWVOYW1lXVttb2R1bGVUb0NoZWNrXSA9IHRydWVcbiAgICAgICAgICByZXF1aXJlZE1vZHVsZXNbcXVldWVOYW1lXSA9IHJlcXVpcmVkTW9kdWxlc1txdWV1ZU5hbWVdIHx8IFtdXG4gICAgICAgICAgcmVxdWlyZWRNb2R1bGVzW3F1ZXVlTmFtZV0ucHVzaChtb2R1bGVUb0NoZWNrKVxuICAgICAgICAgIHZhciBuZXdNb2R1bGVzID0gZ2V0TW9kdWxlRGVwZW5kZW5jaWVzKHNvdXJjZXMsIHNvdXJjZXNbcXVldWVOYW1lXVttb2R1bGVUb0NoZWNrXSwgcXVldWVOYW1lKVxuICAgICAgICAgIHZhciBuZXdNb2R1bGVzS2V5cyA9IE9iamVjdC5rZXlzKG5ld01vZHVsZXMpXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdNb2R1bGVzS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbW9kdWxlc1F1ZXVlW25ld01vZHVsZXNLZXlzW2pdXSA9IG1vZHVsZXNRdWV1ZVtuZXdNb2R1bGVzS2V5c1tqXV0gfHwgW11cbiAgICAgICAgICAgIG1vZHVsZXNRdWV1ZVtuZXdNb2R1bGVzS2V5c1tqXV0gPSBtb2R1bGVzUXVldWVbbmV3TW9kdWxlc0tleXNbal1dLmNvbmNhdChuZXdNb2R1bGVzW25ld01vZHVsZXNLZXlzW2pdXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIHJldHVybiByZXF1aXJlZE1vZHVsZXNcbiAgICB9XG4gICAgXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgICB2YXIgc291cmNlcyA9IHtcbiAgICAgICAgbWFpbjogX193ZWJwYWNrX21vZHVsZXNfX1xuICAgICAgfVxuICAgIFxuICAgICAgdmFyIHJlcXVpcmVkTW9kdWxlcyA9IG9wdGlvbnMuYWxsID8geyBtYWluOiBPYmplY3Qua2V5cyhzb3VyY2VzKSB9IDogZ2V0UmVxdWlyZWRNb2R1bGVzKHNvdXJjZXMsIG1vZHVsZUlkKVxuICAgIFxuICAgICAgdmFyIHNyYyA9ICcnXG4gICAgXG4gICAgICBPYmplY3Qua2V5cyhyZXF1aXJlZE1vZHVsZXMpLmZpbHRlcihmdW5jdGlvbiAobSkgeyByZXR1cm4gbSAhPT0gJ21haW4nIH0pLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICB2YXIgZW50cnlNb2R1bGUgPSAwXG4gICAgICAgIHdoaWxlIChyZXF1aXJlZE1vZHVsZXNbbW9kdWxlXVtlbnRyeU1vZHVsZV0pIHtcbiAgICAgICAgICBlbnRyeU1vZHVsZSsrXG4gICAgICAgIH1cbiAgICAgICAgcmVxdWlyZWRNb2R1bGVzW21vZHVsZV0ucHVzaChlbnRyeU1vZHVsZSlcbiAgICAgICAgc291cmNlc1ttb2R1bGVdW2VudHJ5TW9kdWxlXSA9ICcoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXzsgfSknXG4gICAgICAgIHNyYyA9IHNyYyArICd2YXIgJyArIG1vZHVsZSArICcgPSAoJyArIHdlYnBhY2tCb290c3RyYXBGdW5jLnRvU3RyaW5nKCkucmVwbGFjZSgnRU5UUllfTU9EVUxFJywgSlNPTi5zdHJpbmdpZnkoZW50cnlNb2R1bGUpKSArICcpKHsnICsgcmVxdWlyZWRNb2R1bGVzW21vZHVsZV0ubWFwKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gJycgKyBKU09OLnN0cmluZ2lmeShpZCkgKyAnOiAnICsgc291cmNlc1ttb2R1bGVdW2lkXS50b1N0cmluZygpIH0pLmpvaW4oJywnKSArICd9KTtcXG4nXG4gICAgICB9KVxuICAgIFxuICAgICAgc3JjID0gc3JjICsgJ25ldyAoKCcgKyB3ZWJwYWNrQm9vdHN0cmFwRnVuYy50b1N0cmluZygpLnJlcGxhY2UoJ0VOVFJZX01PRFVMRScsIEpTT04uc3RyaW5naWZ5KG1vZHVsZUlkKSkgKyAnKSh7JyArIHJlcXVpcmVkTW9kdWxlcy5tYWluLm1hcChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuICcnICsgSlNPTi5zdHJpbmdpZnkoaWQpICsgJzogJyArIHNvdXJjZXMubWFpbltpZF0udG9TdHJpbmcoKSB9KS5qb2luKCcsJykgKyAnfSkpKHNlbGYpOydcbiAgICBcbiAgICAgIHZhciBibG9iID0gbmV3IHdpbmRvdy5CbG9iKFtzcmNdLCB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pXG4gICAgICBpZiAob3B0aW9ucy5iYXJlKSB7IHJldHVybiBibG9iIH1cbiAgICBcbiAgICAgIHZhciBVUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93Lm1velVSTCB8fCB3aW5kb3cubXNVUkxcbiAgICBcbiAgICAgIHZhciB3b3JrZXJVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgICB2YXIgd29ya2VyID0gbmV3IHdpbmRvdy5Xb3JrZXIod29ya2VyVXJsKVxuICAgICAgd29ya2VyLm9iamVjdFVSTCA9IHdvcmtlclVybFxuICAgIFxuICAgICAgcmV0dXJuIHdvcmtlclxuICAgIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpdmUvdXRpbC93ZWJ3b3JraWZ5LXdlYnBhY2suanMiLCJpbXBvcnQgeyBiaW5kQWxsIH0gZnJvbSBcIi4uL3V0aWwvYmluZC1hbGxcIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vLi4vbGl2ZS91dGlsL2xvZ2dlclwiO1xyXG5pbXBvcnQgRmx2RGVtdXhlciBmcm9tIFwiLi4vZGVtdXgvZmx2LWRlbXV4ZXJcIjtcclxuaW1wb3J0IE1wNFJlbXV4ZXIgZnJvbSBcIi4uL3JlbXV4L21wNC1yZW11eGVyXCI7XHJcbmltcG9ydCBNZWRpYUluZm8gZnJvbSBcIi4vbWVkaWEtaW5mb1wiO1xyXG5cclxuZGVjbGFyZSBjb25zdCBzZWxmOiBXb3JrZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc211eGVyV29ya2VyIHtcclxuICBwcml2YXRlIF9kZW11eDogRmx2RGVtdXhlcjtcclxuICBwcml2YXRlIF9yZW11eDogTXA0UmVtdXhlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBiaW5kQWxsKHRoaXMpO1xyXG5cclxuICAgIHNlbGYub25tZXNzYWdlID0gdGhpcy5fb25NZXNzYWdlO1xyXG4gICAgc2VsZi5vbmVycm9yID0gdGhpcy5fb25FcnJvcjtcclxuICB9XHJcblxyXG4gIGluaXQoY29uZmlnKSB7XHJcbiAgICB0aGlzLl9kZW11eCA9IG5ldyBGbHZEZW11eGVyKGNvbmZpZyk7XHJcbiAgICB0aGlzLl9yZW11eCA9IG5ldyBNcDRSZW11eGVyKCk7XHJcblxyXG4gICAgdGhpcy5fZGVtdXgub25Jbml0ID0gdGhpcy5fb25EZW11eEluaXQ7XHJcbiAgICB0aGlzLl9kZW11eC5vblRyYWNrTWV0YSA9IHRoaXMuX29uVHJhY2tNZXRhO1xyXG4gICAgdGhpcy5fZGVtdXgub25UcmFja0RhdGEgPSB0aGlzLl9vblRyYWNrRGF0YTtcclxuICAgIHRoaXMuX2RlbXV4Lm9uRXJyb3IgPSB0aGlzLl9vbkVycm9yO1xyXG5cclxuICAgIHRoaXMuX3JlbXV4Lm9uSW5pdCA9IHRoaXMuX29uUmVtdXhJbml0O1xyXG4gICAgdGhpcy5fcmVtdXgub25EYXRhID0gdGhpcy5fb25SZW11eERhdGE7XHJcbiAgICB0aGlzLl9yZW11eC5vbkVycm9yID0gdGhpcy5fb25FcnJvcjtcclxuICB9XHJcblxyXG4gIGFwcGVuZERhdGEoYnVmZmVyOiBBcnJheUJ1ZmZlcikge1xyXG4gICAgdGhpcy5fZGVtdXguYXBwZW5kRGF0YShidWZmZXIpO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kRW5kKCkge1xyXG4gICAgdGhpcy5fZGVtdXguYXBwZW5kRW5kKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vbkRlbXV4SW5pdChtZWRpYUluZm86IE1lZGlhSW5mbykge1xyXG4gICAgdGhpcy5fcmVtdXgub25NZWRpYUluZm8obWVkaWFJbmZvKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uVHJhY2tNZXRhKHR5cGUsIG1ldGFkYXRhKSB7XHJcbiAgICB0aGlzLl9yZW11eC5vblRyYWNrTWV0YSh0eXBlLCBtZXRhZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vblRyYWNrRGF0YShhdWRpb1RyYWNrLCB2aWRlb1RyYWNrLCBlbmQpIHtcclxuICAgIHRoaXMuX3JlbXV4Lm9uVHJhY2tEYXRhKGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2ssIGVuZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vblJlbXV4SW5pdChtZWRpYUluZm86IE1lZGlhSW5mbykge1xyXG4gICAgc2VsZi5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIG5hbWU6IFwiX29uUmVtdXhJbml0XCIsXHJcbiAgICAgIHBhcmFtczogbWVkaWFJbmZvXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uUmVtdXhEYXRhKHRyYWNrcykge1xyXG4gICAgc2VsZi5wb3N0TWVzc2FnZShcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiX29uUmVtdXhEYXRhXCIsXHJcbiAgICAgICAgcGFyYW1zOiB0cmFja3NcclxuICAgICAgfSxcclxuICAgICAgdHJhY2tzLm1hcCh0cmFjayA9PiB0cmFjay5kYXRhKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NvbXBsZXRlKCkge1xyXG4gICAgc2VsZi5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIG5hbWU6IFwiX2NvbXBsZXRlXCJcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0TG9nZ2VyRW5hYmxlKGZsYWcpIHtcclxuICAgIGxvZ2dlci5zZXRFbmFibGUoZmxhZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vbkVycm9yKHJlYXNvbikge1xyXG4gICAgc2VsZi5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIG5hbWU6IFwiX29uRXJyb3JcIixcclxuICAgICAgcGFyYW1zOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlYXNvbikpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uTWVzc2FnZShldmVudCkge1xyXG4gICAgbGV0IHsgZGF0YSB9ID0gZXZlbnQ7XHJcbiAgICBsZXQgeyBuYW1lLCBwYXJhbXMgfSA9IGRhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzW25hbWVdKHBhcmFtcyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGxvZ2dlci53YXJuKGBjYWxsIHRyYW5zbXV4ZXIgd29ya2VyICR7bmFtZX0gZXJyb3JgLCBlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saXZlL2NvcmUvdHJhbnNtdXhlci53b3JrZXIudHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7Ozs7Ozs7OztBQzNCQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVBOztBQUNBO0FBTEE7QUFNQTtBQUFBO0FBUEE7QUFTQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFQTs7QUFDQTtBQUxBO0FBTUE7QUFBQTtBQVBBO0FBU0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRUE7O0FBQ0E7QUFMQTtBQU1BO0FBQUE7QUFQQTs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNWQTtBQUVBO0FBaUJBO0FBWkE7QUFhQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUF2REE7Ozs7Ozs7Ozs7QUNjQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7Ozs7Ozs7Ozs7QUNyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7OztBQzlIQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBd0VBO0FBdkVBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFDQTtBQUNBOztBQUNBO0FBbUJBO0FBTUE7Ozs7QUF2QkE7QUFBQTs7QUFBQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUFBOztBQUFBOzs7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFBQTs7QUFBQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBOztBQUFBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQ2prQ0E7Ozs7QUFJQTtBQUNBO0FBcUJBO0FBQUE7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6SUE7QUFFQTtBQUNBO0FBdUlBO0FBQUE7QUEzSUE7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBMldBO0FBeldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUMxWkE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaUJBO0FBQUE7QUFTQTtBQUFBO0FBRkE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWpKQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzdSQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFhQTs7OztBQUlBO0FBQ0E7QUF3QkE7QUFwQkE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBM1dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBMEVBO0FBekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQTFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUVBO0FBR0E7QUFBQTtBQWlCQTtBQUFBO0FBRUE7QUFDQTs7QUFDQTtBQW5CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBdEZBOzs7Ozs7Ozs7O0FDSkE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQVFBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQXhHQTs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQTNGQTs7Ozs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBcVBBO0FBcFBBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7OztBQ2xSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7QUNuRkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7O0FBRUE7QUFFQTtBQUFBO0FBaVFBO0FBL1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBOzs7Ozs7Ozs7QUN2UkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7O0FDdkhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUF3RkE7QUF2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7QUM1R0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUVBO0FBQ0E7QUFBQTtBQWdpQkE7QUE5aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7QUN4akJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDM0xBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
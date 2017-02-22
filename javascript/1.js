/* 1,1010,5 2015-01-19 19:02:03 */
/*
 * 模块名称：airQuality.js
 * 功能：空气质量页面功能
 * 作者：牛建银
 * 日期：2014-07-09
 */

(function(window, undefined) {
    var cityAllCode = [
        '43-48-30-31-30-31-30-30','43-48-30-32-30-31-30-30','43-48-32-31-30-31-30-31','43-48-32-38-30-31-30-31','43-48-32-38-30-36-30-31','43-48-30-37-30-33-30-31','43-48-31-38-30-32-30-31','43-48-30-35-30-31-30-34','43-48-30-31-30-31-30-30','43-48-30-34-30-38-30-30','43-48-30-34-30-39-30-30','43-48-30-32-30-33-30-30','43-48-30-33-30-36-30-30','43-48-30-39-30-32-30-31','43-48-30-38-30-32-30-31','43-48-30-37-30-35-30-31','43-48-33-30-31-33-30-31','43-48-30-35-30-31-30-35','43-48-30-35-30-31-30-37','43-48-31-31-30-39-30-31','43-48-31-32-31-31-30-31','43-48-30-31-30-33-30-30','43-48-30-31-30-37-30-30','43-48-30-36-30-31-30-31','43-48-32-35-30-31-30-31','43-48-31-39-31-31-30-31','43-48-32-37-30-31-30-31','43-48-30-34-30-31-30-30','43-48-30-39-30-34-30-32','43-48-30-39-30-37-30-31','43-48-31-30-30-35-30-31','43-48-30-38-30-36-30-31','43-48-32-35-30-36-30-31','43-48-31-39-30-34-30-32','43-48-31-32-30-31-30-32','43-48-32-38-30-31-30-33','43-48-32-30-30-31-30-32','43-48-31-31-30-31-30-32','43-48-30-31-31-31-30-30','43-48-30-37-30-32-30-31','43-48-32-38-31-36-30-31','43-48-30-33-31-32-30-30','43-48-30-33-30-34-30-30','43-48-31-30-30-32-30-31','43-48-32-37-32-30-30-31','43-48-30-34-32-36-30-30','43-48-32-37-30-31-31-31','43-48-30-35-30-39-30-31','43-48-31-32-31-32-30-31','43-48-30-37-30-36-30-31','43-48-30-38-30-37-30-31','43-48-30-31-31-32-30-30','43-48-30-31-30-39-30-30','43-48-32-38-30-38-30-30','43-48-32-33-30-31-30-31','43-48-30-37-30-34-30-31','43-48-32-31-30-31-30-38','43-48-30-37-30-31-30-35','43-48-32-38-30-31-30-31','43-48-32-36-30-31-30-31','43-48-33-30-30-35-30-31','43-48-31-31-30-31-30-37','43-48-30-31-30-32-30-30','43-48-30-31-30-35-30-30','43-48-32-31-30-31-30-31','43-48-30-35-30-31-30-31','43-48-32-38-30-33-30-31','43-48-32-31-30-32-30-31','43-48-30-33-30-38-30-30','43-48-30-38-30-31-30-31','43-48-32-32-30-31-30-31','43-48-33-31-30-31-30-31','43-48-30-39-31-30-30-31','43-48-30-39-30-38-30-31','43-48-30-35-30-31-30-33','43-48-31-39-30-39-30-31','43-48-31-39-30-35-30-38','43-48-32-38-30-31-30-35','43-48-32-30-30-31-30-33','43-48-31-31-30-31-30-36','43-48-31-32-31-30-30-31','43-48-30-37-31-34-30-31','43-48-32-38-31-31-30-31','43-48-32-31-30-33-30-31','43-48-31-32-30-31-30-31','43-48-32-31-30-39-30-31','43-48-30-37-30-37-30-31','43-48-32-34-30-32-30-31','43-48-32-30-30-38-30-31','43-48-31-36-30-36-30-31','43-48-30-37-30-32-30-33','43-48-32-31-30-31-30-35','43-48-30-36-30-32-30-31','43-48-31-32-30-31-30-36','43-48-31-32-30-32-30-34','43-48-31-32-30-32-30-36','43-48-30-33-31-30-30-30','43-48-30-33-30-39-30-30','43-48-32-30-30-31-30-35','43-48-31-32-30-37-30-31','43-48-31-36-31-34-30-31','43-48-32-39-30-31-30-31','43-48-31-38-30-38-30-31','43-48-31-33-30-32-30-31','43-48-31-36-30-31-30-31','43-48-31-34-30-31-30-31','43-48-32-31-30-38-30-31','43-48-31-39-31-30-30-31','43-48-30-39-30-36-30-31','43-48-31-30-30-37-30-31','43-48-31-38-30-39-30-31','43-48-33-30-30-33-30-31','43-48-32-37-31-30-30-31','43-48-31-32-30-35-30-32','43-48-30-37-30-32-30-35','43-48-31-32-31-36-30-31','43-48-32-37-30-31-30-32','43-48-30-34-32-33-30-30','43-48-30-37-30-31-30-33','43-48-31-31-30-31-30-33','43-48-31-31-30-31-30-34','43-48-32-38-30-34-30-31','43-48-30-31-31-34-30-30','43-48-30-31-31-33-30-30','43-48-30-32-30-32-30-30','43-48-30-35-30-33-30-31','43-48-32-37-30-34-30-31','43-48-32-32-30-35-30-31','43-48-32-34-30-31-30-31','43-48-31-39-30-31-30-31','43-48-33-30-30-31-30-31','43-48-31-39-30-35-30-31','43-48-32-31-30-34-30-31','43-48-32-37-30-35-30-31','43-48-30-33-30-37-30-30','43-48-30-31-31-35-30-30','43-48-32-37-30-31-31-32','43-48-30-32-31-33-30-30','43-48-31-38-30-35-30-31','43-48-32-37-30-32-30-31','43-48-32-38-30-31-30-32','43-48-32-37-30-31-30-37','43-48-31-39-30-31-30-37','43-48-30-37-31-33-30-31','43-48-31-32-30-35-30-34','43-48-31-32-30-32-30-31','43-48-30-32-30-38-30-30','43-48-32-31-31-30-30-31','43-48-30-39-31-31-30-31','43-48-30-35-30-32-30-31','43-48-32-39-30-34-30-31','43-48-32-33-30-35-30-31','43-48-31-32-31-33-30-33','43-48-30-31-31-30-30-30','43-48-30-31-30-34-30-30','43-48-30-32-30-31-30-30','43-48-32-31-30-35-30-31','43-48-30-37-30-31-30-31','43-48-32-38-30-36-30-31','43-48-30-39-30-31-30-31','43-48-31-39-30-34-30-31','43-48-31-39-31-33-30-31','43-48-31-38-31-37-30-31','43-48-33-31-31-34-30-31','43-48-32-37-30-31-30-36','43-48-30-35-30-31-30-32','43-48-31-37-30-32-30-31','43-48-30-32-30-39-30-30','43-48-32-38-30-35-30-31','43-48-32-38-30-32-30-31','43-48-30-31-30-36-30-30','43-48-31-30-30-31-30-31','43-48-30-39-30-35-30-31','43-48-30-33-30-31-30-30','43-48-30-33-31-31-30-30','43-48-31-39-31-32-30-31','43-48-32-31-30-36-30-31','43-48-31-31-31-30-30-31','43-48-30-34-30-36-30-30','43-48-31-33-30-31-30-31','43-48-32-30-30-31-30-31','43-48-32-31-30-37-30-31','43-48-31-39-30-32-30-31','43-48-31-31-30-35-30-31','43-48-32-37-30-31-30-34','43-48-30-34-31-33-30-30','43-48-32-32-30-33-30-31','43-48-30-35-30-31-31-32','43-48-31-32-31-33-30-31','43-48-31-32-30-36-30-31','43-48-30-32-31-32-30-30','43-48-32-33-30-32-30-31','43-48-31-31-30-31-30-31','43-48-31-35-30-31-30-31','43-48-30-39-30-39-30-31','43-48-31-39-30-38-30-31','43-48-32-35-30-32-30-31','43-48-31-31-30-32-30-30','43-48-32-37-30-31-30-33','43-48-30-33-30-35-30-30','43-48-32-31-30-31-30-32','43-48-30-37-30-31-30-36','43-48-30-31-30-38-30-30','43-48-30-34-30-37-30-30','43-48-31-37-30-31-30-31','43-48-31-39-30-36-30-31','43-48-31-39-30-37-30-31','43-48-31-30-30-33-30-31','43-48-32-30-30-39-30-31','43-48-31-31-30-33-30-30','43-48-32-31-30-31-30-36','43-48-32-39-30-37-30-31','43-48-30-34-30-32-30-30','43-48-31-32-30-35-30-31','43-48-30-37-30-38-30-31','43-48-32-35-31-30-30-31','43-48-32-37-31-31-30-31','43-48-32-31-30-39-30-34','43-48-31-38-30-31-30-31','43-48-31-39-30-33-30-31','43-48-30-39-30-33-30-31','43-48-32-31-31-31-30-31','43-48-32-38-30-37-30-31','43-48-32-38-31-37-30-31','43-48-32-38-30-39-30-31','43-48-32-35-30-33-30-31','43-48-32-35-31-31-30-31','43-48-32-37-30-33-30-31','43-48-32-36-30-32-30-31','43-48-32-38-30-31-30-34','43-48-32-38-31-30-30-31','43-48-31-32-30-31-30-34','43-48-31-32-30-33-30-31','43-48-31-32-31-34-30-31'
    ];
    Function.prototype.fnBind || (Function.prototype.fnBind = function(a, b) {
        var c = this;
        return function() {
            var d, e;
            if (b && arguments.length) {
                d = Array.prototype.slice.call(b, 0);
                for (e = 0; e < arguments.length; e++)
                    Array.prototype.push.call(d, arguments[e])
            }
            return c.apply(a || this, d || b || arguments)
        }
    });
    Function.prototype.bindArg || (Function.prototype.bindArg = function() {
        return this.fnBind(null, arguments)
    });

    // jquery 继承遮罩方法
    $.extend({
        _alert : function(msg, callback) {
            var me = this
                , ALERT_ID = "_Survey_alert_window_"
                , MASK_ID = "_Survey_alert_window_mask_"
                , _mask = null
                , _container = null;
            if ($("#" + ALERT_ID) && $("#" + ALERT_ID).length > 0 && $("#" + ALERT_ID).css("display") === "block") {
                return;
            } else if ($("#" + ALERT_ID) && $("#" + ALERT_ID).length > 0) {
                _container = $("#" + ALERT_ID);
                _container.find("p").html(msg);
            } else {
                _container = $(
                    '<div class="tips" id="' + ALERT_ID + '" style="display:none">' +
                    '<div class="tips-content"><p>' + msg + '</p><a href="javascript:;"' +
                    ' class="confirm">\u786E\u5B9A</a></div></div>'
                );
                _container.prependTo("body");
            }

            var showMask = function(callback) {
                if ( $("#" + MASK_ID).length === 0 ) {
                    _mask = $('<div class="tips-mask" id="' + MASK_ID + '" style="display:none"></div>');
                } else {
                    _mask = $("#" + MASK_ID);
                }
                _mask.prependTo("body");
                _mask.css("height", $('body').height() + 'px');
                _mask.show();
            };
            var hideMask = function(callback) {
                if (!_mask) { return }
                _mask.hide();
            }
            me._center(_container, function() {
                showMask();
                _container.show();
            });

            _container.find(".confirm").unbind().bind("click", function(){
                hideMask();
                _container.hide();
            });
        },
        _scrollTo : function(element) {
            var offsetTop;
            if ($.isNumeric(element)) {
                offsetTop = element;
            } else {
                offsetTop = element.offset().top
            }
            $("body,html").animate({scrollTop : offsetTop}, 500);
        },
        _center : function(obj, callback) {
            var left = $(document).scrollLeft() + ($(window).width() - obj.width()) / 2;
            var top = $(document).scrollTop() + ($(window).height() - obj.height()) / 2;
            obj.css("left", left);
            obj.css("top", top);
            $.isFunction(callback) && callback.apply(this, arguments);
        },
        _noConflict : function() {
            if (window.Survey === this) {
                window.Survey = _Survey;
            }
            return this;
        }
    });

    function spine() {
        var mod = {};
        mod.create = function(includes) {
            var result = function() {
                this.initializer.apply(this, arguments);
                this.init.apply(this, arguments);
            };

            result.fn = result.prototype;
            result.fn.init = function() {};

            result.proxy = function(func) {
                return $.proxy(func, this);
            };
            result.fn.proxy = result.proxy;

            result.include = function(ob) {
                $.extend(this.fn, ob);
            };
            result.extend = function(ob) {
                $.extend(this, ob);
            };

            result.include({
                initializer: function(options) {
                    this.options = options;

                    for (var key in this.options)
                        this[key] = this.options[key];

                    if (this.events) this.delegateEvents();
                    if (this.elements) this.refreshElements();
                },

                $: function(selector) {
                    return $(selector, this.el);
                },

                refreshElements: function() {
                    for (var key in this.elements) {
                        this[this.elements[key]] = this.$(key);
                    }
                },

                eventSplitter: /^(\w+)\s*(.*)$/,

                delegateEvents: function() {
                    for (var key in this.events) {
                        var methodName = this.events[key];
                        var method = this.proxy(this[methodName]);

                        var match = key.match(this.eventSplitter);
                        var eventName = match[1],
                            selector = match[2];

                        if (selector === '') {
                            this.el.on(eventName, method);
                        } else {
                            this.el.on(eventName, selector, method);
                        }
                    }
                }
            });

            if (includes) result.include(includes);

            return result;
        };
        return mod;
    }
    // 空气质量指数（AQI）逐时显示 鼠标移入显示路径
    function _createPath(left, top, width, height, arrOffset, arrWidth, arrHeight, cornerWidth, index, x, y) {
        var right = left + width,
            bottom = top + height;
        var _path = [
            'M' + (left + cornerWidth) + ',' + top,
            'L' + (right - cornerWidth) + ',' + top,
            'Q' + right + ',' + top + ',' + right + ',' + (top + cornerWidth),
            'L' + right + ',' + (bottom - cornerWidth),
            'Q' + right + ',' + bottom + ',' + (right - cornerWidth) + ',' + bottom,
            'L' + (left + cornerWidth) + ',' + bottom,
            'Q' + left + ',' + bottom + ',' + left + ',' + (bottom - cornerWidth),
            'L' + left + ',' + (top + cornerWidth),
            'Q' + left + ',' + top + ',' + (left + cornerWidth) + ',' + top
        ];

        var _x = x;
        var _y = y;

        if (index > 15) {
            if (_y > 50) {
                _path[3] = [
                    'L' + right + ',' + (bottom - arrOffset - arrWidth),
                    'L' + (right + arrHeight) + ',' + (bottom - arrOffset),
                    'L' + right + ',' + (bottom - arrOffset),
                    'L' + right + ',' + (bottom - cornerWidth)
                ].join('');
                var _transform = 'T' + (_x - 8 - (110 + 18)) + ',' + (_y - 3 - (40 - arrOffset));
            } else {
                _path[3] = [
                    'L' + right + ',' + (top + arrOffset),
                    'L' + (right + arrHeight) + ',' + (top + arrOffset),
                    'L' + right + ',' + (top + arrOffset + arrWidth),
                    'L' + right + ',' + (bottom - cornerWidth)
                ].join('');
                var _transform = 'T' + (_x - 8 - (110 + 18)) + ',' + (_y + 3 - (arrOffset));
            }
        } else {
            if (_y > 50) {
                _path[7] = [
                    'L' + left + ',' + (bottom - arrOffset),
                    'L' + (left - arrHeight) + ',' + (bottom - arrOffset),
                    'L' + left + ',' + (bottom - arrOffset - arrWidth),
                    'L' + left + ',' + (top + cornerWidth)
                ].join('');
                var _transform = 'T' + (_x + 8 + (18)) + ',' + (_y - 3 - (40 - arrOffset));
            } else {
                _path[7] = [
                    'L' + left + ',' + (top + arrOffset + arrWidth),
                    'L' + (left - arrHeight) + ',' + (top + arrOffset),
                    'L' + left + ',' + (top + arrOffset),
                    'L' + left + ',' + (top + cornerWidth)
                ].join('');
                var _transform = 'T' + (_x + 8 + (18)) + ',' + (_y + 3 - (arrOffset));
            }
        }
        //_path = _path.join('');
        _path = Raphael.transformPath(_path.join(''), _transform);
        _path.transform = _transform;
        return _path;
    }

    var mapVisib = new function() //空气质量指数（AQI）逐时显示曲线绘图
    {
        var _hasInited = false;
        var _map;
        var _forwardTimer;
        var _visibPoint = [];
        var _heightGroup = [];
        var _colorGroup = [];
        var _showTimer, _hideTimer, _layer, _layerOuter;
        var _layerContents;
        var _high,_low;
        var _variance;  //平均值
        this.init = function(ap) {
            if (_hasInited) {
                return;
            }
            _draw(ap);
        }

        function _getBarColor(aqi) {
            if (aqi >= 0 && aqi <= 50) {
                return '#63d416';
            } else if (aqi >= 50 && aqi <= 100) {
                return '#ffcc00';
            } else if (aqi > 100 && aqi <= 150) {
                return '#ff8a00';
            } else if (aqi > 150 && aqi <= 200) {
                return '#f7000c';
            } else if (aqi > 200 && aqi <= 300) {
                return '#90024c';
            } else if (aqi > 300 && aqi < 1200) {
                return '#600031';
            } else {
                return '#fff';
            }
        }

        function _getBarHeight(aqi) {
            var _gap = 29;
            var _height;
            _variance;
            if ( $.type(aqi)=="number" && !isNaN(aqi) && isFinite(aqi) ) {
                _height = _gap * ((aqi-_low) / _variance);
            } else {
                _height = 0;
            }
            return Math.round(_height);
        }

        function _hover() {
            var _index = this.data('index');

            if (Raphael.svg) {
                _visibPoint[_index].animate({
                    fill: "#005e94"
                }, 250, 'linear');
            } else {
                _visibPoint[_index].attr({
                    fill: "#005e94"
                })
            }
            if (Raphael.svg) {
                _show(_index);
            } else {
                clearTimeout(_showTimer);
                _showTimer = setTimeout(_show.bindArg(_index), 50);
            }

        }

        function _show(index) {
            clearTimeout(_hideTimer);
            var x = 55 + 27 * index;
            var y = 196 - _heightGroup[index];

            var _data = _visibPoint[index].data("vData");
            var _left = 0 + coordOffset,
                _top = 0 + coordOffset,
                _width = 120,
                _height = 38,
                _arrOffset = 6,
                _arrWidth = 8,
                _arrHeight = 16,
                _cornerWidth = 3;
            var _path = _createPath(_left, _top, _width, _height, _arrOffset, _arrWidth, _arrHeight, _cornerWidth, index, x, y);
            var _left2 = _left - 1,
                _top2 = _top - 1,
                _width2 = _width + 2,
                _height2 = _height + 2,
                _arrOffset2 = 6,
                _arrWidth2 = _arrWidth + 2,
                _arrHeight2 = _arrHeight + 2,
                _cornerWidth2 = _cornerWidth + 2;
            var _path2 = _createPath(_left2, _top2, _width2, _height2, _arrOffset2, _arrWidth2, _arrHeight2, _cornerWidth2, index, x, y);
            if (!_layer) {
                _layer = _map.path(_path.join(""));
                _layer.attr({
                    fill: "#485057",
                    stroke: "#c9ccce"
                });

                _layerOuter = _map.path(_path2.join(""));
                _layerOuter.attr({
                    stroke: "#485057"
                })

                _layerContents = _map.text(34, 20, "AQI：" + _data["aqi"]);
                _layerContents.attr({
                    'font-family': "宋体",
                    'font-size': 12 + fontSizeOffset,
                    fill: "#fff",
                    transform: changeX(_path.transform, 25)
                })
            } else {
                if (Raphael.svg) {
                    var _anim = Raphael.animation({
                        path: _path
                    }, 200, 'linear');
                    _layer.stop().animate(_anim);

                    _layerOuter.stop().animateWith(_layer, _anim, {
                        path: _path2
                    }, 200, 'linear');

                    _layerContents.attr({
                        text: "AQI：" + _data["aqi"]
                    })

                    _layerContents.stop().animateWith(_layer, _anim, {
                        transform: changeX(_path.transform, 25)
                    }, 200, 'linear');
                } else {
                    _layer.attr({
                        path: _path
                    });
                    _layerOuter.attr({
                        path: _path2
                    });
                    _layerContents.attr({
                        text: "AQI：" + _data["aqi"],
                        transform: changeX(_path.transform, 25)
                    });
                }
            }

            function changeX(str, add) {
                var aStr = str.split(",")
                var x = aStr[0].slice(1) * 1 + add;
                var y = aStr[1];
                var result = "T" + x + "," + y;
                return result;
            }
        }

        function _out() {
            var _index = this.data("index");
            if (Raphael.svg) {
                _visibPoint[_index].animate({
                    fill: _colorGroup[_index]
                }, 250, "linear")
            } else {
                _visibPoint[_index].attr({
                    fill: _colorGroup[_index]
                })
            }
            clearTimeout(_hideTimer);
            _hideTimer = setTimeout(_hide, 200);

        }

        function _hide() {
            _layer && _layer.remove();
            _layer = null;
            _layerOuter && _layerOuter.remove();
            _layerOuter = null;
            _layerContents && _layerContents.remove();
            _layerContents = null;
        }

        function _draw(data) {
            if (data.length === 0) {
                return;
            }
            _hasInited = true;
            _map = Raphael('w_aq_timeofaqi', 718, 228);

            /*计算最高最低空气质量*/
            _high = -1,_low = 100000;

            for(var i = 0,l = data.length;i < l;i++)
            {
                _d = data[i];
                if($.type(_d.aqi) == "number"){
                    if(_d.aqi > _high)
                    {
                        _high = _d.aqi;
                    }
                    if(_d.aqi < _low)
                    {
                        _low = _d.aqi;
                    }
                }
            }
            // console.log(_low,_high);
            // 最小刻度减2
            if(_high === -1||_low === 100000){ return false;}
            _low = _low-2 < 0?0:_low-2;
            _high = _high + 2;

            // console.log("_high");
            /*画气温刻度*/
            _high = Math.ceil(_high / 6) * 6;
            _low = Math.floor(_low / 6) * 6;
            _variance = Math.floor( (_high - _low) / 6 );

            /*画气温刻度*/
            var scales = [];

            /*画底线*/
            var _line;
            for (var i = 0; i < 7; i++) {
                _line = _map.path('M50,' + (22 + 29 * i + coordOffset) + 'L700,' + (22 + 29 * i + coordOffset));
                _line.attr({
                    'stroke': '#efefef',
                    'stroke-width': 1
                });
                scales[i] = _low+_variance*i;
            }
            scales.reverse();
            var _vCoord;
            for (var i = 0; i < scales.length; i++) {
                _vCoord = _map.text(45 + coordOffset, 22 + 29 * i + coordOffset, scales[i]);
                _vCoord.attr({
                    'font-family': '宋体',
                    'text-anchor': 'end',
                    'font-size': 12 + fontSizeOffset
                });
            }
            /*画时间*/
            var _d, _time;
            var isGray = true;

            for (var i = 0, l = data.length; i < l; i++) {
                _d = data[i];
                if (_d.hours === 0) {
                    isGray = false;
                }
                if (i == l - 1) {
                    _time = _map.text(63 + 27 * i + coordOffset, 208 + coordOffset, _d.hours + "时");
                    $(".js_ap_time").html(_d.hours);
                } else {
                    _time = _map.text(63 + 27 * i + coordOffset, 208 + coordOffset, _d.hours);
                }

                _time.attr({
                    'font-family': '宋体',
                    'font-size': 12 + fontSizeOffset,
                    'text-anchor': 'middle'
                });

                if (isGray) {
                    _time.attr({
                        'fill': '#ccc'
                    })
                }
            }
            // console.log("_time");
            var _index = 0;

            function _forward() {
                var _d = data[_index];
                var _height = _getBarHeight(_d.aqi);
                var _barColor = _getBarColor(_d.aqi);
                _heightGroup.push(_height);
                _colorGroup.push(_barColor);
                // console.log(_height);
                if (Raphael.svg) {
                    var _bar = _map.rect(55 + 27 * _index, 196, 16, 0);
                    _bar.attr({
                        fill: _barColor,
                        'stroke-width': 0
                    });
                    _bar.animate({
                        y: 196 - _height,
                        height: _height
                    }, 300, 'linear');
                } else {
                    var _bar = _map.rect(55 + 27 * _index, 196 - _height, 16, _height);
                    _bar.attr({
                        fill: _barColor,
                        'stroke-width': 0
                    });
                }
                _bar.data("vData", data[_index]);
                _visibPoint.push(_bar);

                _index++;
                if (_index == data.length) {
                    clearInterval(_forwardTimer);
                    var _rect;
                    for (var i = 0; i < 24; i++) {
                        _rect = _map.rect(51 + 27 * i, 13, 27, 205);
                        _rect.attr({
                            fill: '#fff',
                            opacity: 0.01,
                            'stroke-width': 0
                        }).data('index', i).mouseover(_hover).mouseout(_out);
                    }
                }
            }
            _forward();
            _forwardTimer = setInterval(_forward, 40);
        }

        this.reset = function() {
            clearInterval(_forwardTimer);
            _visibPoint.length = 0;
            _heightGroup.length = 0;
            _colorGroup.length = 0;
            _map && _map.remove();
            _hasInited = false;
        }
    }();

    // 对Date的扩展，将 Date 转化为指定格式的String
    Date.prototype.Format = function(fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes() //分
        };
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    // 帮助函数
    var helper_aq = {
        levelNum: "0",
        levelTxt: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染','暂无数据'],
        levelColor: ['#63d416', '#ffcc00', '#ff8a00', '#f7000c', '#90024c', '#600031','#000'],
        dateFormat: function(date) {
            if(date === ""){ return;}
            date = date.replace(/-/g,"/");
            var rdate = new Date(date).Format("MM月dd日hh:mm发布");
            return rdate;
        },
        aqiLevel: function(aqi) {
            var _t = this;
            if (aqi >= 0 && aqi <= 50) {
                _t.levelNum = "0";
            } else if (aqi > 50 && aqi <= 100) {
                _t.levelNum = "1";
            } else if (aqi > 100 && aqi <= 150) {
                _t.levelNum = "2";
            } else if (aqi > 150 && aqi <= 200) {
                _t.levelNum = "3";
            } else if (aqi > 200 && aqi <= 300) {
                _t.levelNum = "4";
            } else if (aqi > 300) {
                _t.levelNum = "5";
            } else {
                _t.levelNum = "6";
            }
        },
        aqiLevelColor: function(aqi) {
            var _t = this;
            _t.aqiLevel(aqi);
            return _t.levelColor[_t.levelNum];
        },
        aqiLevelTxt: function(aqi) {
            var _t = this;
            _t.aqiLevel(aqi);
            return _t.levelTxt[_t.levelNum];
        }
    };
    window.helper = window.helper ? $.extend(window.helper, helper_aq) : helper_aq;

    /*svg里画线要在半像素为止画，否则虚*/
    var coordOffset = Raphael.svg ? 0.5 : 0;
    /*贱ie文字要大1像素才比较清楚*/
    var fontSizeOffset = Raphael.svg ? 0 : 1;

    var Controller = spine();

    // 大城市空气质量12时显示 开始
    var mapCoordinate ={
        '43-48-30-35-30-31-30-31' : { 'name': '哈尔滨','x':'768','y':'115'},
        '43-48-30-36-30-31-30-31' : { 'name': '长春','x':'783','y':'177'},
        '43-48-30-37-30-31-30-31' : { 'name': '沈阳','x':'753','y':'217'},
        '43-48-30-31-30-31-30-30' : { 'name': '北京','x':'674','y':'233'},
        '43-48-30-33-30-31-30-30' : { 'name': '天津','x':'693','y':'263'},
        '43-48-30-39-30-31-30-31' : { 'name': '石家庄','x':'638','y':'289'},
        '43-48-31-32-30-31-30-31' : { 'name': '济南','x':'702','y':'317'},
        '43-48-30-38-30-31-30-31' : { 'name': '呼和浩特','x':'575','y':'237'},
        '43-48-31-33-30-31-30-31' : { 'name': '乌鲁木齐','x':'250','y':'169'},
        '43-48-31-35-30-31-30-31' : { 'name': '西宁','x':'430','y':'313'},
        '43-48-31-36-30-31-30-31' : { 'name': '兰州','x':'484','y':'346'},
        '43-48-31-37-30-31-30-31' : { 'name': '银川','x':'514','y':'309'},
        '43-48-31-31-30-31-30-31' : { 'name': '西安','x':'567','y':'351'},
        '43-48-31-38-30-31-30-31' : { 'name': '郑州','x':'646','y':'355'},
        '43-48-32-32-30-31-30-31' : { 'name': '合肥','x':'679','y':'396'},
        '43-48-31-39-30-31-30-31' : { 'name': '南京','x':'725','y':'368'},
        '43-48-30-32-30-31-30-30' : { 'name': '上海','x':'766','y':'399'},
        '43-48-32-31-30-31-30-31' : { 'name': '杭州','x':'745','y':'432'},
        '43-48-32-34-30-31-30-31' : { 'name': '南昌','x':'682','y':'446'},
        '43-48-32-35-30-31-30-31' : { 'name': '长沙','x':'622','y':'471'},
        '43-48-32-30-30-31-30-31' : { 'name': '武汉','x':'612','y':'412'},
        '43-48-30-34-30-31-30-30' : { 'name': '重庆','x':'531','y':'450'},
        '43-48-32-37-30-31-30-31' : { 'name': '成都','x':'487','y':'421'},
        '43-48-32-36-30-31-30-31' : { 'name': '贵阳','x':'530','y':'490'},
        '43-48-31-34-30-31-30-31' : { 'name': '拉萨','x':'293','y':'420'},
        '43-48-32-39-30-31-30-31' : { 'name': '昆明 ','x':'440','y':'529'},
        '43-48-33-30-30-31-30-31' : { 'name': '南宁','x':'547','y':'551'},
        '43-48-32-38-30-31-30-31' : { 'name': '广州','x':'645','y':'550'},
        '43-48-33-31-30-31-30-31' : { 'name': '海口','x':'581','y':'610'},
        '43-48-31-30-30-31-30-31' : { 'name': '太原','x':'608','y':'315'},
        '43-48-31-33-30-32-30-31' : { 'name': '克拉玛依','x':'175','y':'199'},
        '43-48-31-34-30-32-30-31' : { 'name': '日喀则','x':'221','y':'432'},
        '43-48-32-33-30-31-30-31' : { 'name': '福州','x':'729','y':'476'}
    };

    var airePortWeatherNow = Controller.create({
        el: $("#w_aq_top"), //外层容器id
        elements: {
            "#w_aqt": "curCityEl", //当前城市容器
            "#w_aq_city": "cityEl", //城市容器
            ".w_aq_arrow": "arrowEl" //切换城市小箭头
        },
        curCityTmpl: $('#w_curCityTmpl').html(), //当前城市模板
        cityTmpl: $('#w_cityTmpl').html(), //城市模板
        mapTmpl: $('#w_mapTmpl').html(), //地图模板

        _objectData: {}, //缓冲数据对象
        isFirstCity: true,
        curCityCode: "",
        levelColor: ['#63d416', '#ffcc00', '#ff8a00', '#f7000c', '#90024c', '#600031','#000'],

        init: function() {
            var _t = this;

            var curCityCode = _t.filterCode( window.curCityCode );
            _t.load(curCityCode);
            _t.loadHours(curCityCode);

            _t.curCityEl.on("click",".w_aqt_city", function() {
                if (_t.isFirstCity) {
                    _t.loadCitys();
                } else if (_t.cityEl.is(':visible')) {
                    _t.cityEl.slideUp();
                    _t.arrowEl.hide();
                } else {
                    _t.cityEl.slideDown();
                    _t.arrowEl.show();
                }
                return false;
            });

            // 大城市最新空气质量
            _t.loadMap(curCityCode);
        },

        filterCode: function( code ){
            var finalCode = code;

            if( $.inArray( code , cityAllCode ) === -1 ){
                finalCode = "43-48-30-31-30-31-30-30";
            }

            return finalCode;
        },

        load: function(code) {
            var _t = this;
            var url = "http://open.weather.sina.com.cn/api/airquality/live/" + code;
            var rcode = code.replace(/\D/g, "");

            if (("key_" + rcode) in _t._objectData) {
                // 存储当前城市code
                _t.curCityCode = code;
                var rresult = _t._objectData["key_" + rcode];
                _t.render(rresult);
                return false;
            }

            $.ajax({
                url: url,
                dataType: "jsonp",
                data: $.extend({}, {
                    'dpc': 1
                }),
                cache: true,
                jsonpCallback: "curCity_" + rcode,
                success: function(data) {
                    var resultData = data.result.data;
                    var rdata = {
                        qua_id: "",
                        loc_code: "",
                        aqi: "无",
                        pollutant: "",
                        level: "",
                        description: "",
                        pm25: "A/N",
                        pm10: "A/N",
                        so2: "A/N",
                        no2: "A/N",
                        source: "",
                        sample_time: "",
                        creation_time: "",
                        name: "",
                        percentage: "0%"
                    };
                    var darr = ['pm25','pm10','so2','no2'];

                    $.each(darr,function(key,value){
                        if(resultData[value] == "\0" || resultData[value] == ""){
                            resultData[value] = "A/N";
                        }
                    });

                    var result = $.extend(rdata,resultData);
                    _t.render(result);

                    if (!(("key_" + rcode) in _t._objectData)) {
                        _t._objectData["key_" + rcode] = result;
                    }
                    // 存储当前城市code
                    _t.curCityCode = code;
                },
                error: function() {
                    // $._alert("请求" + url + "?callback=curCity_" + rcode + "&dpc=1" + "失败");
                }
            })
        },
        loadCitys: function() {
            var _t = this;
            var url = "http://open.weather.sina.com.cn/api/airquality/citys/";
            var rcode = "citys";

            if (("key_" + rcode) in _t._objectData) {
                var rresult = _t._objectData["key_" + rcode];
                _t.renderCitys(rresult);
                _t.cityEl.show();
                _t.arrowEl.show();
                _t.bindCity();
                return false;
            }

            $.ajax({
                url: url,
                dataType: "jsonp",
                data: $.extend({}, {
                    'dpc': 1
                }),
                cache: true,
                jsonpCallback: rcode,
                success: function(data) {
                    var rdata = data.result.data;
                    var result = _t.sortCity(rdata);

                    // var hhcode = "";
                    // $.each(rdata.hot,function(i,value){
                    // 	hhcode += "'"+value.loc_code + "',";
                    // });
                    // $.each(rdata.sort,function(key,value){
                    // 	$.each(value,function(i,val){
                    // 		hhcode += "'"+val.loc_code + "',";
                    // 	});
                    // });
                    // console.log(hhcode);

                    _t.renderCitys(result);
                    _t.cityEl.slideDown();
                    _t.arrowEl.show();
                    _t.isFirstCity = false;
                    _t.bindCity();

                    if (!(("key_" + rcode) in _t._objectData)) {
                        _t._objectData["key_" + rcode] = result;
                    }
                },
                error: function() {
                    // $._alert("请求" + url + "?callback=" + rcode + "&dpc=1" + "失败");
                }
            })
        },
        render: function(data) {
            var _t = this;
            // 解析模板, 返回解析后的内容
            var render = _.template(_t.curCityTmpl);
            var html = render(data);
            // 将解析后的内容填充到渲染元素
            this.curCityEl.html(html);
        },
        renderCitys: function(data) {
            var _t = this;
            var render = _.template(_t.cityTmpl);
            var html = render(data);
            this.cityEl.html(html);
        },
        sortCity: function(data) {
            var arr = [],
                rArr = [],
                sortArr = [];
            $.each(data.sort, function(key, value) {
                arr.push(key);
            });
            var length = 9; //一行9个字母
            var page = Math.ceil(arr.length / 9);

            for (var i = 0; i < page; i++) {
                rArr[i] = [];
                sortArr[i] = {};
            }
            $.each(arr, function(index, value) {
                var idx = Math.floor(index / length);
                rArr[idx].push(value);
                sortArr[idx][value] = data.sort[value];
            });
            data.letter = rArr;
            data.citys = sortArr;
            return data;
        },
        bindCity: function() {
            var _t = this;
            var tabs = _t.cityEl.find(".w_aq_letter");
            var cons = _t.cityEl.find(".w_aq_aps");
            var timer;
            _t.cityEl.on("mouseover", "a.w_aq_letter", function() {
                var _that = this;
                timer = setTimeout(function() {
                    tabs.removeClass("selected");
                    $(_that).addClass("selected");
                    cons.hide();
                    var tab = $(_that).data("tab");
                    $("#" + tab).show();
                }, 200);
            })

            _t.cityEl.on("mouseout", "a.w_aq_letter", function() {
                clearTimeout(timer);
            });

            _t.cityEl.on("mouseover", "a.w_aq_code_city", function() {
                var _that = this;
                _t.cityEl.find(".w_aq_code_city").removeClass("selected");
                $(_that).addClass("selected");
                _t.cityEl.find(".current").addClass("selected");
            })

            _t.cityEl.on("mouseout", "a.w_aq_code_city", function() {
                _t.cityEl.find(".w_aq_code_city").removeClass("selected");
                _t.cityEl.find(".current").addClass("selected");
            });

            _t.cityEl.on("click", "a.w_aq_code_city", function() {
                _t.cityEl.find(".w_aq_code_city").removeClass("selected current");
                $(this).addClass("selected current");
                var code = $(this).data("code");
                // 当不是当前城市
                if(_t.curCityCode != code){
                    _t.load(code);
                    _t.loadHours(code);
                }
                _t.cityEl.hide();
                _t.arrowEl.hide();
                return false;
            });

            _t.cityEl.on("click", "a.w_aq_code", function() {
                var code = $(this).data("code");
                // 当不是当前城市
                if(_t.curCityCode != code){
                    _t.load(code);
                    _t.loadHours(code);
                }
                _t.cityEl.hide();
                _t.arrowEl.hide();
                return false;
            });

            _t.cityEl.on("click", function() {
                return false;
            });

            $(document).on("click",function(){
                _t.cityEl.hide();
                _t.arrowEl.hide();
            });
        },
        loadHours: function(code) {
            var _t = this;
            var url = "http://open.weather.sina.com.cn/api/airquality/hours/" + code;
            var rcode = code.replace(/\D/g, "");

            if (("key_hours_" + rcode) in _t._objectData) {
                var rresult = _t._objectData["key_hours_" + rcode];
                _t.mapVisib(rresult);
                return false;
            }

            $.ajax({
                url: url,
                dataType: "jsonp",
                data: $.extend({}, {
                    'dpc': 1
                }),
                cache: true,
                jsonpCallback: "hours_" + rcode,
                success: function(data) {
                    var result = data.result.data;
                    _t.mapVisib(result);

                    if (!(("key_hours_" + rcode) in _t._objectData)) {
                        _t._objectData["key_hours_" + rcode] = result;
                    }
                },
                error: function() {
                    // $._alert("请求" + url + "?callback=hours_" + rcode + "&dpc=1" + "失败");
                }
            })
        },
        mapVisib: function(data) {
            var _arr = [];
            $.each(data, function(i, value) {
                _arr.push(value);
            });
            var revArr = _arr.reverse();
            _data=[];
            // 数据显示时间 当前时段是两条  去除一条
            var arrLength = revArr.length;
            if(arrLength > 24){
                for(var i = 0;i < 24; i++){
                    _data.push(revArr[i]);
                }
            } else{
                for(var i = 0;i < arrLength; i++){
                    _data.push(revArr[i]);
                }
            }

            // _data.pop();
            for (var i = 0, l = _data.length; i < l; i++) {
                if (_data[i].aqi && _data[i].aqi != ""&& _data[i].aqi != "暂无数据") {
                    _data[i].aqi *= 1;
                } else {
                    _data[i].aqi = "暂无数据";
                }

                _data[i].hours = new Date( _data[i].sample_time.replace(/-/g,"/") ).getHours();
            }
            var _ap = _data;

            // 调用空气质量指数（AQI）逐时显示
            mapVisib.reset();
            mapVisib.init(_ap);
        },

        loadMap: function() {
            var _t = this;
            var url = "http://open.weather.sina.com.cn/api/airquality/cityAqiDisplayOnMap/";

            $.ajax({
                url: url,
                dataType: "jsonp",
                data: $.extend({

                }, {
                    'dpc': 1
                }),
                cache: true,
                jsonpCallback: "aq_map",
                success: function(data) {
                    var result={}, rdata = data.result.data;

                    $.each(rdata,function(i,val){
                        var bgColor = _t.aqiLevelColor(val.aqi);
                        rdata[i].bgColor = bgColor;
                        rdata[i].x = mapCoordinate[rdata[i].loc_code].x;
                        rdata[i].y = mapCoordinate[rdata[i].loc_code].y;
                        // var aaa =""
                        // aaa += (  "'"+val.loc_code +"' : { 'name': '"+val.name+"},"  );
                        // console.log(aaa);
                    });

                    result.data = rdata;
                    _t.renderMap(result);
                    _t.bindMap();
                },
                error: function() {
                    // $._alert("请求" + url + "?callback=aq_map&dpc=1" + "失败");
                }
            })
        },
        renderMap: function(data) {
            var _t = this;
            // 解析模板, 返回解析后的内容
            var render = _.template(_t.mapTmpl);
            var html = render(data);
            // 将解析后的内容填充到渲染元素
            $("#w_aq_map").html(html);
        },
        aqiLevel: function(aqi) {
            var _t = this;
            if (aqi >= 0 && aqi <= 50) {
                _t.levelNum = "0";
            } else if (aqi > 50 && aqi <= 100) {
                _t.levelNum = "1";
            } else if (aqi > 100 && aqi <= 150) {
                _t.levelNum = "2";
            } else if (aqi > 150 && aqi <= 200) {
                _t.levelNum = "3";
            } else if (aqi > 200 && aqi <= 300) {
                _t.levelNum = "4";
            } else if (aqi > 300) {
                _t.levelNum = "5";
            } else {
                _t.levelNum = "6";
            }
        },
        aqiLevelColor: function(aqi) {
            var _t = this;
            _t.aqiLevel(aqi);
            return _t.levelColor[_t.levelNum];
        },
        bindMap: function(){
            var _t = this;
            $("#w_aq_map").on("click", "div.w_aqm_item", function() {
                var code = $(this).data("code");
                // 当不是当前城市
                if(_t.curCityCode != code){
                    _t.load(code);
                    _t.loadHours(code);
                }
                _t.cityEl.hide();
                _t.arrowEl.hide();
                window.scrollTo(0,208);
                return false;
            });
        }
    });
    // 当前城市的空气质量调用
    new airePortWeatherNow();

    // win8 news
    var win8News = Controller.create({
        el: $("#w_pic_win8"), //外层容器id
        init:function(){
            var me = this;
            me.sendJsonp();
        },
        sendJsonp: function() {
            var me = this;
            // 新闻接口
            // http://weather.news.sina.com.cn/api/43/20140708/air_news.json
            $.ajax({
                url:"http://weather.news.sina.com.cn/api/43/20140708/air_news.json",
                dataType:"jsonp",
                data: $.extend({
                },{
                    'dpc': 1
                }),
                cache: true,
                jsonpCallback:"air_news",
                success:function(data){
                    var fragment = me.makeHtml(data.result.data);
                    me.el.html(fragment);
                },
                error:function(){
                    // $._alert("请求http://weather.news.sina.com.cn/api/43/20140708/air_news.json?callback=air_news失败");
                }
            })
        },
        makeHtml:function(data){
            var result = [];
            if(data.length < 4){
                for(var i=0,len=data.length;i<len;i++){
                    result[i] = data[i];
                }
                for(var j=data.length;j<4;j++){
                    result[j] = {
                        url:"",
                        title:""
                    };
                };
            } else{
                result = data;
            }
            var template = "<div class='w_pw8_img1'><a href='"+result[0].url+"' target='_blank'>"+result[0].title+"</a></div><div class='w_pw8_w300_h200'><div class='w_pw8_img2'><a href='"+result[1].url+"' target='_blank'>"+result[1].title+"</a></div><div class='w_pw8_wh_right'><div class='w_pw8_img3'><a href='"+result[2].url+"' target='_blank'>"+result[2].title+"</a></div><div class='w_pw8_img4'><a href='"+result[3].url+"' target='_blank'>"+result[3].title+"</a></div></div></div>";
            return template;
        }
    });
    new win8News();

    // aqImgs
    var aqImgs = Controller.create({
        el: $("#w_aq_imgs"), //外层容器id
        init:function(){
            var me = this;
            me.sendJsonp();
            me.bindEvent();
        },
        sendJsonp: function() {
            var me = this;
            // 新闻接口
            // http://weather.news.sina.com.cn/api/43/20140708/air_photo.json
            $.ajax({
                url:"http://weather.news.sina.com.cn/api/43/20140708/air_photo.json",
                dataType:"jsonp",
                data: $.extend({
                },{
                    'dpc': 1
                }),
                cache: true,
                jsonpCallback:"air_photo",
                success:function(data){
                    var fragment = "";
                    $.each(data.result.data,function(i,val){
                        fragment += me.makeHtml(i,val);
                    });
                    me.el.html(fragment);
                },
                error:function(){
                    // $._alert("请求http://weather.news.sina.com.cn/api/43/20140708/air_photo.json?callback=air_photo失败");
                }
            })
        },
        makeHtml:function(i,item){
            var mt = "";
            if(i===1){ mt="mt20";} else if(i>1){ return;};
            var template = "<div class='w_aq_img "+mt+"'><a href='"+item.url+"' target='_blank' class='w_aq_link'><img src='"+item.pic+"' alt='"+item.title+"'/><span class='w_aq_shadow_hover'></span></a><div class='w_aq_shadow'></div><a href='"+item.url+"' target='_blank' class='w_aq_text'>"+item.title+"</a></div>";
            return template;
        },
        bindEvent: function(){
            $("#w_aq_imgs").on("mouseenter",".w_aq_img",function () {
                $(this).find(".w_aq_shadow_hover").slideDown();
                $(this).addClass("w_aq_hover").siblings("div").removeClass('w_aq_hover');
            });
            $("#w_aq_imgs").on("mouseleave",".w_aq_img",function () {
                $(this).find(".w_aq_shadow_hover").slideUp();
                $(this).removeClass('w_aq_hover');
            });
        }
    });
    new aqImgs();

    // aqRankBest
    var aqRankBest = Controller.create({
        el: $("#w_aq_rankBest"), //外层容器id
        elements: {
            "#w_aqrbh": "bestcurTimeEl", //最优空气当前时间区域
            "#w_aqrb_cur_time": "bestcurTimeTextEl", //最优空气当前时间文本区域
            "#w_aqrb_time": "bestTimeEl", //最优空气时间
            "#w_aqrt_best": "bestConEl", //最优空气内容区域
            ".w_aq_rd_down":"arrowEl",
            ".w_nowTime":"nowTimeEl"
        },
        airRankTmpl: $('#w_airRankTmpl').html(), //空气质量排名模板
        airRankTimeTmpl: $('#w_airRankTimeTmpl').html(), //空气质量排名时间模板

        _objectData: {}, //缓冲数据对象
        init: function() {
            var _t = this;
            _t.load();
        },

        load: function() {
            var _t = this;
            var url = "http://open.weather.sina.com.cn/api/airquality/ranking/-1/1/";
            $.ajax({
                url: url,
                dataType: "jsonp",
                data: $.extend({}, {
                    'dpc': 1
                }),
                cache: true,
                jsonpCallback: "key_best_hours_last",
                success: function(data) {
                    var rdata = data.result.data;
                    if(rdata.length < 1){
                        $_alert("暂无数据");
                        return false;
                    }

                    _t.render(rdata);
                    _t.bindEvent();
                    var hours = data.result.data.hour[0].sample_time;
                    _t.renderTime(data.result.data);
                    if (!(("key_best_hours_" + hours) in _t._objectData)) {
                        _t._objectData["key_best_hours_" + hours] = rdata;
                    }
                },
                error: function() {
                    // $._alert("请求" + url + "?callback=key_best_hours_" + hours + "&dpc=1" + "失败");
                }
            })
        },

        getHoursData: function(hours,curTime) {
            var _t = this;
            var url = "http://open.weather.sina.com.cn/api/airquality/ranking/"+hours+"/1/";
            if (("key_best_hours_" + hours) in _t._objectData) {
                var rresult = _t._objectData["key_best_hours_" + hours];
                _t.render(rresult);
                _t.bestcurTimeTextEl.html(curTime+"时");
                _t.bestcurTimeTextEl.data("hours",hours);
                _t.nowTimeEl.html(curTime);
                return false;
            }
            $.ajax({
                url: url,
                dataType: "jsonp",
                data: $.extend({}, {
                    'dpc': 1
                }),
                cache: true,
                jsonpCallback: "key_best_hours_" + hours,
                success: function(data) {
                    var rdata = data.result.data;
                    if(rdata.length < 1){
                        $_alert("暂无数据");
                        return false;
                    }
                    _t.render(rdata);
                    _t.bestcurTimeTextEl.html(curTime+"时");
                    _t.bestcurTimeTextEl.data("hours",hours);
                    _t.nowTimeEl.html(curTime);
                    if (!(("key_best_hours_" + hours) in _t._objectData)) {
                        _t._objectData["key_best_hours_" + hours] = rdata;
                    }
                },
                error: function() {
                    // $._alert("请求" + url + "?callback=key_best_hours_" + hours + "&dpc=1" + "失败");
                }
            })
        },

        render: function(data) {
            var _t = this;
            // 解析模板, 返回解析后的内容
            var render = _.template(_t.airRankTmpl);
            var html = render(data);
            // 将解析后的内容填充到渲染元素
            this.bestConEl.html(html);
        },
        renderTime: function(data) {
            var _t = this;
            var hours = data.hour[0].hours, sampleTime = data.hour[0].sample_time;
            _t.bestcurTimeTextEl.html(hours+"时");
            _t.bestcurTimeTextEl.data("hours",sampleTime);
            _t.nowTimeEl.html(hours);
            // 解析模板, 返回解析后的内容
            var render = _.template(_t.airRankTimeTmpl);
            var html = render(data);
            // 将解析后的内容填充到渲染元素
            this.bestTimeEl.html(html);
        },
        bindEvent: function(){
            var _t = this;
            _t.bestcurTimeEl.on("click",function(){
                if(_t.bestTimeEl.is(":hidden")){
                    _t.bestTimeEl.slideDown();
                    _t.arrowEl.addClass('w_aq_rd_up');
                } else{
                    _t.bestTimeEl.slideUp();
                    _t.arrowEl.removeClass('w_aq_rd_up');
                }
            });

            _t.bestTimeEl.on("mouseenter","li",function(){
                $(this).addClass('selected').siblings('li').removeClass('selected');
            });

            _t.bestTimeEl.on("mouseleave","li",function(){
                $(this).removeClass('selected');
            });

            _t.bestTimeEl.on("click","li",function(){
                var hours = $(this).data("hours"),
                    curHours = _t.bestcurTimeTextEl.data("hours"),
                    curTime = $(this).data("time");
                if(hours != curHours){
                    _t.getHoursData(hours,curTime);
                }
                _t.bestTimeEl.slideUp();
                _t.arrowEl.removeClass('w_aq_rd_up');
            });
        }
    });
    new aqRankBest();

    // aqRankWorst
    var aqRankWorst = Controller.create({
        el: $("#w_aq_rankWorst"), //外层容器id
        elements: {
            "#w_aqrbh_worst": "worstcurTimeEl", //最优空气当前时间区域
            "#w_aqrb_cur_time_worst": "worstcurTimeTextEl", //最优空气当前时间文本区域
            "#w_aqrb_time_worst": "worstTimeEl", //最优空气时间
            "#w_aqrt_worst": "worstConEl", //最优空气内容区域
            ".w_aq_rd_down":"arrowEl",
            ".w_nowTime":"nowTimeEl"
        },
        airRankTmpl: $('#w_airRankTmpl').html(), //空气质量排名模板
        airRankTimeTmpl: $('#w_airRankTimeTmpl').html(), //空气质量排名时间模板

        _objectData: {}, //缓冲数据对象
        init: function() {
            var _t = this;
            _t.load();
        },

        load: function() {
            var _t = this;
            var url = "http://open.weather.sina.com.cn/api/airquality/ranking/-1/";
            $.ajax({
                url: url,
                dataType: "jsonp",
                data: $.extend({}, {
                    'dpc': 1
                }),
                cache: true,
                jsonpCallback: "key_worst_hours_last",
                success: function(data) {
                    var rdata = data.result.data;
                    if(rdata.length < 1){
                        $_alert("暂无数据");
                        return false;
                    }

                    _t.render(rdata);
                    _t.bindEvent();
                    var hours = data.result.data.hour[0].sample_time;
                    _t.renderTime(data.result.data);
                    if (!(("key_worst_hours_" + hours) in _t._objectData)) {
                        _t._objectData["key_worst_hours_" + hours] = rdata;
                    }
                },
                error: function() {
                    // $._alert("请求" + url + "?callback=key_worst_hours_" + hours + "&dpc=1" + "失败");
                }
            })
        },

        getHoursData: function(hours,curTime) {
            var _t = this;
            var url = "http://open.weather.sina.com.cn/api/airquality/ranking/"+hours+"/";
            if (("key_worst_hours_" + hours) in _t._objectData) {
                var rresult = _t._objectData["key_worst_hours_" + hours];
                _t.render(rresult);
                _t.worstcurTimeTextEl.html(curTime+"时");
                _t.worstcurTimeTextEl.data("hours",hours);
                _t.nowTimeEl.html(curTime);
                return false;
            }
            $.ajax({
                url: url,
                dataType: "jsonp",
                data: $.extend({}, {
                    'dpc': 1
                }),
                cache: true,
                jsonpCallback: "key_worst_hours_" + hours,
                success: function(data) {
                    var rdata = data.result.data;
                    if(rdata.length < 1){
                        $_alert("暂无数据");
                        return false;
                    }
                    _t.render(rdata);
                    _t.worstcurTimeTextEl.html(curTime+"时");
                    _t.worstcurTimeTextEl.data("hours",hours);
                    _t.nowTimeEl.html(curTime);
                    if (!(("key_worst_hours_" + hours) in _t._objectData)) {
                        _t._objectData["key_worst_hours_" + hours] = rdata;
                    }
                },
                error: function() {
                    // $._alert("请求" + url + "?callback=key_worst_hours_" + hours + "&dpc=1" + "失败");
                }
            })
        },

        render: function(data) {
            var _t = this;
            // 解析模板, 返回解析后的内容
            var render = _.template(_t.airRankTmpl);
            var html = render(data);
            // 将解析后的内容填充到渲染元素
            this.worstConEl.html(html);
        },
        renderTime: function(data) {
            var _t = this;
            var hours = data.hour[0].hours, sampleTime = data.hour[0].sample_time;
            _t.worstcurTimeTextEl.html(hours+"时");
            _t.worstcurTimeTextEl.data("hours",sampleTime);
            _t.nowTimeEl.html(hours);
            // 解析模板, 返回解析后的内容
            var render = _.template(_t.airRankTimeTmpl);
            var html = render(data);
            // 将解析后的内容填充到渲染元素
            this.worstTimeEl.html(html);
        },
        bindEvent: function(){
            var _t = this;
            _t.worstcurTimeEl.on("click",function(){
                if(_t.worstTimeEl.is(":hidden")){
                    _t.worstTimeEl.slideDown();
                    _t.arrowEl.addClass('w_aq_rd_up');
                } else{
                    _t.worstTimeEl.slideUp();
                    _t.arrowEl.removeClass('w_aq_rd_up');
                }
            });

            _t.worstTimeEl.on("mouseenter","li",function(){
                $(this).addClass('selected').siblings('li').removeClass('selected');
            });

            _t.worstTimeEl.on("mouseleave","li",function(){
                $(this).removeClass('selected');
            });

            _t.worstTimeEl.on("click","li",function(){
                var hours = $(this).data("hours"),
                    curHours = _t.worstcurTimeTextEl.data("hours"),
                    curTime = $(this).data("time");
                if(hours != curHours){
                    _t.getHoursData(hours,curTime);
                }
                _t.worstTimeEl.slideUp();
                _t.arrowEl.removeClass('w_aq_rd_up');
            });
        }
    });
    new aqRankWorst();

})(window);
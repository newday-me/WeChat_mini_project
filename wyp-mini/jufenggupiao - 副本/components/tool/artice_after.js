Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = undefined;

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _wepy = require("./../../npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require("./../../service/api/api.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _asyncToGenerator(fn) {
    return function() {
        var gen = fn.apply(this, arguments);
        return new Promise(function(resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function(value) {
                        step("next", value);
                    }, function(err) {
                        step("throw", err);
                    });
                }
            }
            return step("next");
        });
    };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var articeAfter = function(_wepy$component) {
    _inherits(articeAfter, _wepy$component);
    function articeAfter() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, articeAfter);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = articeAfter.__proto__ || Object.getPrototypeOf(articeAfter)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {
            author: {
                type: Object,
                default: {}
            }
        }, _this.components = {}, _this.data = {
            userType: {},
            authorData: {}
        }, _this.events = {}, _this.watch = {
            author: function author(newVal) {
                this.authorData = newVal.authorInfo;
                this.$apply();
            }
        }, _this.methods = {
            callTel: function callTel() {
                wx.makePhoneCall({
                    phoneNumber: "400-633-5058"
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(articeAfter, [ {
        key: "onLoad",
        value: function onLoad() {
            this.getUseType();
        }
    }, {
        key: "getUseType",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0, _api.getUserInvestmentType)();

                          case 2:
                            res = _context.sent;
                            this.isload = true;
                            this.userType = res.data;
                            this.$apply();

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function getUseType() {
                return _ref2.apply(this, arguments);
            }
            return getUseType;
        }()
    } ]);
    return articeAfter;
}(_wepy2.default.component);

exports.default = articeAfter;
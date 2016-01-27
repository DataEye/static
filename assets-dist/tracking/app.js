webpackJsonp([0],{

/***/ 0:
/*!**********************************!*\
  !*** ./assets/tracking/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _objectAssign = __webpack_require__(/*! object-assign */ 1);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 159);
	
	var _es6Promise = __webpack_require__(/*! es6-promise */ 177);
	
	var _index = __webpack_require__(/*! ./routes/index.jsx */ 182);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(/*! ./store/index.jsx */ 762);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _ajax = __webpack_require__(/*! dejs/lib/ajax */ 234);
	
	var _index5 = __webpack_require__(/*! ./mocks/index.js */ 773);
	
	var _index6 = _interopRequireDefault(_index5);
	
	__webpack_require__(/*! ./helpers/load_base_style */ 785);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Object.assign = _objectAssign2.default;
	
	(0, _es6Promise.polyfill)();
	
	/**
	 * 正式java环境会统一部署到www.dataeye.com
	 * 域名中会多加一个目录作为系统标识
	 */
	(0, _ajax.ajaxSetup)({
	  contextPath: App.CONTEXT_PATH || ''
	});
	
	/**
	 * 开发阶段mock可以选择打开或者关闭
	 * url中的查询字符串包含mock则开启，默认关闭
	 */
	if (App.useMock) {
	  (0, _index6.default)();
	}
	
	var store = (0, _index4.default)();
	
	var Root = _react2.default.createClass({
	  displayName: 'Root',
	  render: function render() {
	    return _react2.default.createElement(
	      _reactRedux.Provider,
	      { store: store },
	      _index2.default
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Root, null), document.querySelector('#container'));

/***/ },

/***/ 182:
/*!******************************************!*\
  !*** ./assets/tracking/routes/index.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 183);
	
	var _root = __webpack_require__(/*! ../pages/root.jsx */ 231);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _index = __webpack_require__(/*! ../pages/channel/index.jsx */ 556);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _add = __webpack_require__(/*! ../pages/channel/add.jsx */ 570);
	
	var _add2 = _interopRequireDefault(_add);
	
	var _index3 = __webpack_require__(/*! ../pages/store/index.jsx */ 574);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _add3 = __webpack_require__(/*! ../pages/store/add.jsx */ 582);
	
	var _add4 = _interopRequireDefault(_add3);
	
	var _index5 = __webpack_require__(/*! ../pages/app/create_app/index.jsx */ 586);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _index7 = __webpack_require__(/*! ../pages/core/index.jsx */ 590);
	
	var _index8 = _interopRequireDefault(_index7);
	
	var _index9 = __webpack_require__(/*! ../pages/summary/index.jsx */ 755);
	
	var _index10 = _interopRequireDefault(_index9);
	
	var _index11 = __webpack_require__(/*! ../pages/realtime/index.jsx */ 756);
	
	var _index12 = _interopRequireDefault(_index11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(
	  _reactRouter.Router,
	  null,
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _root2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: 'channels/:appid', component: _index2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'channels/add/:appid', component: _add2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'stores/:appid', component: _index4.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'stores/add/:appid', component: _add4.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'createApp', component: _index6.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'summary/:appid', component: _index10.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'core/:appid', component: _index8.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'realtime/:appid', component: _index12.default })
	  )
	); /**
	    * 全局路由配置
	    * 与redux相关的不要写在此文件中
	    */

/***/ },

/***/ 231:
/*!****************************************!*\
  !*** ./assets/tracking/pages/root.jsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mapStateToProps = mapStateToProps;
	exports.mapDispatchToProps = mapDispatchToProps;
	
	var _redux = __webpack_require__(/*! redux */ 166);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 159);
	
	var _index = __webpack_require__(/*! ./home/index.jsx */ 232);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(/*! ../actions/index.jsx */ 548);
	
	var _index4 = _interopRequireDefault(_index3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 入口组件
	 * 与redux相关的处理在此添加
	 */
	
	function mapStateToProps() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  return {
	    states: Object.assign({}, state)
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  var actions = (0, _redux.bindActionCreators)(_index4.default, dispatch);
	  return { actions: actions };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_index2.default);

/***/ },

/***/ 232:
/*!**********************************************!*\
  !*** ./assets/tracking/pages/home/index.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _header = __webpack_require__(/*! ../../widgets/header.jsx */ 233);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _footer = __webpack_require__(/*! ../../widgets/footer.jsx */ 244);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _sidebar = __webpack_require__(/*! ../../widgets/sidebar.jsx */ 246);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	var _index = __webpack_require__(/*! ../app/index.jsx */ 290);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'home',
	
	  propTypes: {
	    children: _react.PropTypes.any,
	    actions: _react.PropTypes.object.isRequired,
	    states: _react.PropTypes.object.isRequired,
	    params: _react.PropTypes.object.isRequired
	  },
	
	  render: function render() {
	    // 作为入口页面接收redux所有的actions，不然子组件无法找到
	    var appCenter = _react2.default.createElement(_index2.default, this.props);
	
	    var body = !this.props.children ? appCenter : _react2.default.cloneElement(this.props.children, {
	      actions: this.props.actions,
	      states: this.props.states,
	      params: this.props.params
	    });
	
	    var hideSideBar = !this.props.params.appid;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_header2.default, { appid: this.props.params.appid }),
	      _react2.default.createElement(
	        'div',
	        { className: 'page-wrapper' },
	        _react2.default.createElement(
	          'div',
	          { className: 'sidebar', style: { display: !hideSideBar ? 'block' : 'none' } },
	          this.props.params.appid && _react2.default.createElement(_sidebar2.default, { appid: this.props.params.appid })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: !hideSideBar ? 'main-wrapper' : 'none' },
	          _react2.default.createElement(
	            'div',
	            { className: 'container-fluid main-container' },
	            body
	          )
	        )
	      ),
	      _react2.default.createElement(_footer2.default, null)
	    );
	  }
	}); /**
	     * 数据中心，入口页面
	     */

/***/ },

/***/ 233:
/*!********************************************!*\
  !*** ./assets/tracking/widgets/header.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ajax = __webpack_require__(/*! dejs/lib/ajax */ 234);
	
	var _ajax2 = _interopRequireDefault(_ajax);
	
	var _reactSelect = __webpack_require__(/*! react-select */ 238);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'header',
	
	  propTypes: {
	    appid: _react.PropTypes.string
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      appList: []
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.getAppIDList();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.getAppIDList();
	  },
	  getAppOptions: function getAppOptions(appList) {
	    var options = [];
	    for (var i = 0, length = appList.length; i < length; i++) {
	      options.push({
	        value: appList[i].appid || '',
	        label: appList[i].name || ''
	      });
	    }
	    return options;
	  },
	  getAppIDList: function getAppIDList() {
	    var _this = this;
	
	    (0, _ajax2.default)({
	      method: 'POST',
	      url: '/getAppNames.do',
	      data: { uid: App.uid },
	      success: function success(msg) {
	        _this.setState({ appList: _this.getAppOptions(msg.content) });
	      }
	    });
	  },
	  handleAppChange: function handleAppChange(newValue) {
	    var hash = location.hash.slice(1).split('/');
	    var previousAppId = hash[2].split('?')[0];
	    if (newValue && previousAppId !== newValue) {
	      location.hash = '/' + hash[1] + '/' + newValue;
	      window.location.reload();
	    }
	  },
	  render: function render() {
	    var appidSwitcher = this.state.appList.length > 0 && this.props.appid ? _react2.default.createElement(_reactSelect2.default, {
	      className: 'switch-app'
	      // labelKey="name"
	      // valueKey="appid"
	      , name: 'form-field-name',
	      value: this.props.appid,
	      options: this.state.appList,
	      onChange: this.handleAppChange,
	      clearable: false,
	      searchable: false
	    }) : '';
	
	    var toHomeBtn = _react2.default.createElement(
	      'a',
	      { href: '', className: this.props.appid ? 'my-app' : 'my-app has-no-select' },
	      '我的APP'
	    );
	
	    return _react2.default.createElement(
	      'header',
	      { id: 'header', className: 'clearfix' },
	      _react2.default.createElement(
	        'div',
	        { className: 'logo' },
	        _react2.default.createElement('a', { href: '' })
	      ),
	      _react2.default.createElement('span', { className: 'separation-line' }),
	      _react2.default.createElement(
	        'div',
	        { className: 'containter' },
	        _react2.default.createElement(
	          'div',
	          { id: 'appid-switcher' },
	          toHomeBtn,
	          _react2.default.createElement('span', { className: 'arrow', style: { display: this.props.appid ? 'inline-block' : 'none' } }),
	          appidSwitcher
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'top-tool' },
	          _react2.default.createElement(
	            'a',
	            { href: 'http://wiki.dataeye.com/tracking.html', target: '_blank' },
	            _react2.default.createElement('i', { className: 'fa fa-book' }),
	            ' 接入文档'
	          ),
	          _react2.default.createElement(
	            'a',
	            { href: 'javascript:;', id: 'userCenter' },
	            _react2.default.createElement('i', { className: 'fa fa-user' }),
	            ' ',
	            App.userName
	          ),
	          _react2.default.createElement(
	            'a',
	            { href: 'http://www.dataeye.com/ptlogin/user/logout.do' },
	            _react2.default.createElement('i', { className: 'fa fa-power-off' }),
	            ' 注销'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 234:
/*!**********************************!*\
  !*** ./~/dejs/lib/ajax/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setupConfig = exports.XML_TYPE = exports.TEXT_TYPE = exports.JSON_TYPE = exports.FORM_TYPE = exports.DEFAULT_TIMEOUT = undefined;
	exports.ajaxSetup = ajaxSetup;
	exports.default = ajax;
	exports.get = get;
	exports.post = post;
	
	var _client = __webpack_require__(/*! superagent/lib/client */ 235);
	
	var _client2 = _interopRequireDefault(_client);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_TIMEOUT = exports.DEFAULT_TIMEOUT = 10000; /**
	                                                        * ajax({
	                                                        *  url: string,
	                                                        *  method: 'get/post',
	                                                        *  data/body: {},
	                                                        *  headers: {},
	                                                        *  timeout: number,
	                                                        *  success: function,
	                                                        *  fail/error: function,
	                                                        *  complete: function
	                                                        * })
	                                                        */
	
	var FORM_TYPE = exports.FORM_TYPE = 'application/x-www-form-urlencoded; charset=UTF-8';
	
	var JSON_TYPE = exports.JSON_TYPE = 'application/json; charset=UTF-8';
	
	var TEXT_TYPE = exports.TEXT_TYPE = 'text/plain; charset=UTF-8';
	
	var XML_TYPE = exports.XML_TYPE = 'application/xml; charset=UTF-8';
	
	var setupConfig = exports.setupConfig = {
	  contextPath: ''
	};
	
	function ajaxSetup(opts) {
	  for (var key in setupConfig) {
	    if (opts.hasOwnProperty(key)) {
	      setupConfig[key] = opts[key];
	    }
	  }
	}
	
	function ajax(opts) {
	  var method = opts.method ? opts.method.toLowerCase() : 'get';
	  var req = _client2.default[method](setupConfig.contextPath + opts.url, opts.data || opts.body);
	  var headers = opts.headers || {
	    'Content-Type': method === 'post' ? FORM_TYPE : TEXT_TYPE
	  };
	  var errorHandler = opts.fail || opts.error;
	  var succHandler = opts.success;
	  var completeHandler = opts.complete;
	  for (var key in headers) {
	    req.set(key, headers[key]);
	  }
	
	  req.timeout(opts.timeout || DEFAULT_TIMEOUT);
	
	  if (opts.withCredentials) {
	    req.withCredentials();
	  }
	
	  if (succHandler || errorHandler || completeHandler) {
	    req.end(function (err, res) {
	      if (err) {
	        if (typeof errorHandler === 'function') {
	          errorHandler(err, res);
	        }
	      } else {
	        if (typeof succHandler === 'function') {
	          succHandler(res.body || res.text, res);
	        }
	      }
	
	      if (completeHandler) {
	        completeHandler(err, res);
	      }
	    });
	
	    return req;
	  }
	
	  return new Promise(function (resolve, reject) {
	    req.end(function (err, res) {
	      if (!err) {
	        res.req = req;
	        resolve(res);
	      } else {
	        reject(err);
	      }
	    });
	  });
	}
	
	function get(url, success) {
	  return ajax({
	    url: url,
	    success: success
	  });
	}
	
	function post(url, data, success) {
	  var hasNoDataPost = typeof data === 'function';
	  return ajax({
	    url: url,
	    method: 'post',
	    data: hasNoDataPost ? null : data,
	    success: hasNoDataPost ? data : success
	  });
	}

/***/ },

/***/ 244:
/*!********************************************!*\
  !*** ./assets/tracking/widgets/footer.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _newGovIcon = __webpack_require__(/*! ../../img/newGovIcon.gif */ 245);
	
	var _newGovIcon2 = _interopRequireDefault(_newGovIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var host = 'https://www.dataeye.com';
	
	exports.default = _react2.default.createClass({
	  displayName: 'footer',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { id: 'footer' },
	      _react2.default.createElement(
	        'div',
	        { className: 'inner' },
	        _react2.default.createElement(
	          'div',
	          { className: 'footer-info' },
	          _react2.default.createElement(
	            'dl',
	            null,
	            _react2.default.createElement(
	              'dt',
	              null,
	              '产品与服务'
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/adve.html' },
	                '广告效果监测'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/channel.html' },
	                '应用商店运营分析'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/product.html' },
	                '移动游戏分析'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/h5.html' },
	                'HTML5分析'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/dmp.html' },
	                '泛娱乐DMP'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'dl',
	            null,
	            _react2.default.createElement(
	              'dt',
	              null,
	              '数据报告'
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/report.html#game' },
	                '游戏分析报告'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/report.html#ent' },
	                '泛娱乐行业报告'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/report.html#project' },
	                '专题监测报告'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'dl',
	            null,
	            _react2.default.createElement(
	              'dt',
	              null,
	              '合作展示'
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/partners.html#games_module' },
	                '案例合作游戏'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/partners.html#companies_module' },
	                '客户寄语'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/partners.html#users_module' },
	                '合作客户'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'dl',
	            null,
	            _react2.default.createElement(
	              'dt',
	              null,
	              '关于我们'
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/about.html' },
	                '公司简介'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/partners.html' },
	                '企业文化'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: host + '/job.html' },
	                '招聘信息'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'about' },
	          _react2.default.createElement('span', { className: 'weixin' }),
	          _react2.default.createElement(
	            'ul',
	            null,
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement('i', { className: 'fa fa-phone' }),
	              '400-648-2833'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement('i', { className: 'fa fa-qq' }),
	              '400-648-2833'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement('i', { className: 'fa fa-envelope' }),
	              'customer@dataeye.com'
	            )
	          )
	        )
	      ),
	      _react2.default.createElement('div', { className: 'clear' }),
	      _react2.default.createElement(
	        'div',
	        { className: 'copyright' },
	        _react2.default.createElement(
	          'span',
	          { className: 'security' },
	          'Copyright © 2015 DataEye 深圳市慧动创想科技有限公司',
	          _react2.default.createElement(
	            'a',
	            { target: '_blank', href: 'http://www.miitbeian.gov.cn/' },
	            '粤ICP备13074195-1号'
	          )
	        ),
	        _react2.default.createElement(
	          'a',
	          { target: '_blank', href: 'http://szcert.ebs.org.cn/6c5c8adf-2bec-43fc-b927-cc3d3a70f866' },
	          _react2.default.createElement('img', { width: '112', height: '40', src: _newGovIcon2.default })
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 245:
/*!***********************************!*\
  !*** ./assets/img/newGovIcon.gif ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets-dist/img/6880b73f1b582d98c6e4b7efcae536a2.gif";

/***/ },

/***/ 246:
/*!*********************************************!*\
  !*** ./assets/tracking/widgets/sidebar.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcMenu = __webpack_require__(/*! rc-menu */ 247);
	
	var _rcMenu2 = _interopRequireDefault(_rcMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var menu = [{ key: '1-1', href: '#/realtime/' }, { key: '1-2', href: '#/core/' }, { key: '1-3', href: '#/summary/' }, { key: '2-1', href: '#/stores/' }, { key: '2-2', href: '#/channels/' }];
	
	exports.default = _react2.default.createClass({
	  displayName: 'sidebar',
	
	  propTypes: {
	    appid: _react.PropTypes.string.isRequired
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      openKeys: [],
	      selectedKeys: []
	    };
	  },
	  initOpenKey: function initOpenKey() {
	    var hash = location.hash;
	    for (var i = 0, length = menu.length; i < length; i++) {
	      if (hash.indexOf(menu[i].href) > -1) {
	        return menu[i].key;
	      }
	    }
	  },
	  init: function init() {
	    var activeKey = this.initOpenKey();
	    var openKey = activeKey.slice('-')[0] || '';
	    this.setState({
	      openKeys: [openKey],
	      selectedKeys: [activeKey]
	    });
	  },
	  handleHashChange: function handleHashChange() {
	    this.init();
	    document.body.scrollTop = document.documentElement.scrollTop = 0;
	  },
	  componentDidMount: function componentDidMount() {
	    this.init();
	    window.onhashchange = this.handleHashChange;
	  },
	  onClick: function onClick(info) {
	    this.setState({
	      openKeys: info.keyPath.slice(1)
	    });
	  },
	  onOpen: function onOpen(info) {
	    this.setState({
	      openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
	    });
	  },
	  onClose: function onClose(info) {
	    this.onOpen(info);
	  },
	  getMenu: function getMenu() {
	    var index = _react2.default.createElement(
	      'span',
	      null,
	      _react2.default.createElement('i', { className: 'fa fa-bar-chart' }),
	      '指标分析',
	      _react2.default.createElement('span', { className: 'fa arrow pull-right sidebar-arrow' })
	    );
	
	    var management = _react2.default.createElement(
	      'span',
	      null,
	      _react2.default.createElement('i', { className: 'fa fa-list' }),
	      'APP投放管理',
	      _react2.default.createElement('span', { className: 'fa arrow pull-right sidebar-arrow' })
	    );
	
	    return _react2.default.createElement(
	      _rcMenu2.default,
	      {
	        onClick: this.onClick,
	        mode: 'inline',
	        onOpen: this.onOpen,
	        onClose: this.onClose,
	        openKeys: this.state.openKeys,
	        selectedKeys: this.state.selectedKeys
	      },
	      _react2.default.createElement(
	        _rcMenu.SubMenu,
	        { key: '1', title: index },
	        _react2.default.createElement(
	          _rcMenu.Item,
	          { key: '1-1' },
	          _react2.default.createElement(
	            'a',
	            { href: '#/realtime/' + this.props.appid },
	            '实时统计'
	          )
	        ),
	        _react2.default.createElement(
	          _rcMenu.Item,
	          { key: '1-2' },
	          _react2.default.createElement(
	            'a',
	            { href: '#/core/' + this.props.appid },
	            '核心指标转化'
	          )
	        ),
	        _react2.default.createElement(
	          _rcMenu.Item,
	          { key: '1-3' },
	          _react2.default.createElement(
	            'a',
	            { href: '#/summary/' + this.props.appid },
	            '概览数据'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        _rcMenu.SubMenu,
	        { key: '2', title: management },
	        _react2.default.createElement(
	          _rcMenu.Item,
	          { key: '2-1' },
	          _react2.default.createElement(
	            'a',
	            { href: '#/stores/' + this.props.appid },
	            '管理下载商店'
	          )
	        ),
	        _react2.default.createElement(
	          _rcMenu.Item,
	          { key: '2-2' },
	          _react2.default.createElement(
	            'a',
	            { href: '#/channels/' + this.props.appid },
	            '管理广告活动'
	          )
	        )
	      )
	    );
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { style: { width: 200 } },
	      this.getMenu()
	    );
	  }
	});

/***/ },

/***/ 290:
/*!*********************************************!*\
  !*** ./assets/tracking/pages/app/index.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSelect = __webpack_require__(/*! react-select */ 238);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	var _search_bar = __webpack_require__(/*! ../../widgets/search_bar.jsx */ 291);
	
	var _search_bar2 = _interopRequireDefault(_search_bar);
	
	var _pagination = __webpack_require__(/*! ../../widgets/pagination.jsx */ 293);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	var _app_cell = __webpack_require__(/*! ./app_cell.jsx */ 300);
	
	var _app_cell2 = _interopRequireDefault(_app_cell);
	
	var _content_header = __webpack_require__(/*! ./content_header.jsx */ 542);
	
	var _content_header2 = _interopRequireDefault(_content_header);
	
	var _ajax = __webpack_require__(/*! dejs/lib/ajax */ 234);
	
	var _ajax2 = _interopRequireDefault(_ajax);
	
	var _constants = __webpack_require__(/*! ../../helpers/constants.jsx */ 292);
	
	var _loading = __webpack_require__(/*! dejs/lib/loading */ 545);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _edit_app = __webpack_require__(/*! ./edit_app.jsx */ 546);
	
	var _edit_app2 = _interopRequireDefault(_edit_app);
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'app',
	
	  propTypes: {
	    children: _react.PropTypes.any,
	    actions: _react.PropTypes.object.isRequired,
	    states: _react.PropTypes.object.isRequired,
	    params: _react.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      showEdit: false,
	      appInfo: {},
	      appAmount: 0,
	      gameAmount: 0,
	      data: [],
	      pageID: 1,
	      pageSize: 9,
	      queryType: 1,
	      searchKey: ''
	    };
	  },
	
	  postData: {
	    uid: App.uid
	  },
	
	  getAppData: function getAppData(postData) {
	    var _this = this;
	
	    this.setState({
	      done: false,
	      error: null
	    });
	    (0, _ajax2.default)({
	      method: 'post',
	      url: '/getApps.do',
	      data: postData,
	      success: function success(msg) {
	        if (_this.isMounted()) {
	          _this.setState({
	            appAmount: msg.content.appAmount,
	            gameAmount: msg.content.gameAmount,
	            totalRecord: msg.content.totalRecord,
	            data: msg.content.content,
	            done: true,
	            error: null,
	            isEmpty: msg.content.content.length === 0
	          });
	        }
	      },
	      fail: function fail(msg) {
	        _this.setState({
	          done: true,
	          error: msg
	        });
	      }
	    });
	  },
	  componentDidMount: function componentDidMount() {
	    this.getAppData(this.postData);
	  },
	
	  /**
	   * props和states的变化都会触发componentWillReceiveProps
	   * 所以这里需要判断当前的变化是不是在执行删除动作
	   */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.states.app.delState === 'success') {
	      this.setState({
	        data: this.state.data.filter(function (item) {
	          return item.appid !== nextProps.states.app.delAppID;
	        })
	      });
	    }
	
	    if (nextProps.states.app.editState === 'success') {
	      var editedData = nextProps.states.app.edit;
	      var data = _lodash2.default.clone(this.state.data, true);
	      var thisItem = _lodash2.default.filter(data, 'appid', nextProps.states.app.edit.appid)[0];
	      Object.assign(thisItem, {
	        name: editedData.name,
	        category: editedData.category,
	        type: editedData.type,
	        // currency: editedData.currency,
	        platform: editedData.platform,
	        gameEngine: editedData.gameEngine
	      });
	      this.setState({
	        showEdit: false,
	        data: data
	      });
	    }
	  },
	  search: function search(searchKey) {
	    this.getAppData(Object.assign({}, this.postData, { searchKey: searchKey }));
	    this.setState({ searchKey: searchKey });
	  },
	  onPageChange: function onPageChange(pageID) {
	    this.setState({ pageID: pageID });
	    this.getAppData(Object.assign({}, this.postData, { pageID: pageID }));
	  },
	  queryTypeChange: function queryTypeChange(val) {
	    this.setState({ queryType: val });
	
	    var postData = Object.assign({}, this.postData, { queryType: val, pageID: 1 });
	    this.getAppData(postData);
	  },
	  delApp: function delApp(appid) {
	    this.props.actions.appDel({ uid: App.uid, appid: appid });
	  },
	  showEditModalFn: function showEditModalFn(appInfo) {
	    this.setState({ showEdit: true, appInfo: appInfo });
	  },
	  closeEditModal: function closeEditModal() {
	    this.setState({ showEdit: false });
	  },
	  editApp: function editApp(param) {
	    this.props.actions.appEdit(Object.assign({ uid: App.uid, appid: this.state.appInfo.appid }, param));
	  },
	  render: function render() {
	    var _this2 = this;
	
	    Object.assign(this.postData, {
	      pageID: this.state.pageID,
	      pageSize: this.state.pageSize,
	      queryType: this.state.queryType,
	      searchKey: this.state.searchKey
	    });
	
	    var appShow = this.state.data.map(function (item) {
	      return _react2.default.createElement(_app_cell2.default, { item: item, key: item.appid, delFn: _this2.delApp, showEditModalFn: _this2.showEditModalFn });
	    });
	    var emptyTip = _react2.default.createElement(
	      'div',
	      { className: 'content' },
	      _react2.default.createElement(
	        'div',
	        { className: 'add-app text-center' },
	        _react2.default.createElement(
	          'div',
	          { className: 'circle' },
	          _react2.default.createElement('i', { className: 'fa fa-plus' })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          '请添加APP'
	        )
	      )
	    );
	    var appCenter = _react2.default.createElement(
	      'div',
	      { id: 'appCenter', className: 'main' },
	      _react2.default.createElement(
	        _content_header2.default,
	        { states: this.props.states, actions: this.props.actions },
	        _react2.default.createElement(
	          'div',
	          { className: 'game-type-choice' },
	          _react2.default.createElement(_reactSelect2.default, {
	            name: 'form-field-name',
	            value: this.state.queryType,
	            options: _constants.APP_TYPE_OPTIONS,
	            onChange: this.queryTypeChange,
	            clearable: false,
	            searchable: false
	          })
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          '游戏：',
	          this.state.gameAmount
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          'APP：',
	          this.state.appAmount
	        ),
	        _react2.default.createElement(_search_bar2.default, { search: this.search, className: 'pull-right' })
	      ),
	      _react2.default.createElement('hr', null),
	      _react2.default.createElement(
	        _loading2.default,
	        { done: this.state.done, error: this.state.error,
	          emptyTip: emptyTip, isEmpty: this.state.isEmpty },
	        appShow,
	        _react2.default.createElement(_pagination2.default, {
	          total: this.state.totalRecord,
	          current: this.state.pageID,
	          pageSize: this.state.pageSize,
	          onChange: this.onPageChange
	        })
	      ),
	      this.state.showEdit && _react2.default.createElement(_edit_app2.default, {
	        appInfo: this.state.appInfo,
	        showEditModal: this.state.showEdit,
	        editApp: this.editApp,
	        closeEditModal: this.closeEditModal
	      })
	    );
	
	    return appCenter;
	  }
	}); /**
	     * 数据中心，入口页面
	     */

/***/ },

/***/ 291:
/*!************************************************!*\
  !*** ./assets/tracking/widgets/search_bar.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _constants = __webpack_require__(/*! ../helpers/constants.jsx */ 292);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'search_bar',
	
	  propTypes: {
	    search: _react2.default.PropTypes.func.isRequired,
	    clear: _react2.default.PropTypes.func,
	    type: _react2.default.PropTypes.string,
	    className: _react2.default.PropTypes.string
	  },
	
	  getInitialState: function getInitialState() {
	    return { value: '', showClearBtn: false };
	  },
	  handleChange: function handleChange(event) {
	    this.setState({ value: event.target.value });
	    this.state.showClearBtn = true;
	  },
	  handleKeyUp: function handleKeyUp(event) {
	    if (this.props.type === 'client') {
	      this.search();
	    }
	    if (event.keyCode === _constants.KEYCODE_OF_ENTER) {
	      this.search();
	    }
	  },
	  search: function search() {
	    this.props.search(this.state.value);
	  },
	  clear: function clear() {
	    this.setState({ value: '', showClearBtn: false });
	    this.props.search('');
	    if (typeof this.props.clear === 'function') {
	      this.props.clear();
	    }
	  },
	  foucs: function foucs() {
	    if (this.state.value) {
	      this.setState({ showClearBtn: true });
	    }
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'search-bar' + (this.props.className ? ' ' + this.props.className : '') },
	      _react2.default.createElement('input', { type: 'text', placeholder: '搜索', value: this.state.value, onChange: this.handleChange, onKeyUp: this.handleKeyUp, onFocus: this.foucs }),
	      _react2.default.createElement('a', { href: 'javascript:;', title: '清空', className: 'quickdelete',
	        style: { display: this.state.showClearBtn ? 'block' : 'none' },
	        onClick: this.clear }),
	      _react2.default.createElement('i', { className: 'pull-right fa fa-search', onClick: this.search })
	    );
	  }
	});

/***/ },

/***/ 292:
/*!***********************************************!*\
  !*** ./assets/tracking/helpers/constants.jsx ***!
  \***********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DOMAIN = exports.DOMAIN = 't.dataeye.com';
	var APP_TYPE_OPTIONS = exports.APP_TYPE_OPTIONS = [{ value: 1, label: '所有应用' }, { value: 2, label: 'APP' }, { value: 3, label: '游戏' }, { value: 4, label: '创建' }];
	var KEYCODE_OF_ENTER = exports.KEYCODE_OF_ENTER = 13;
	var PLATFORM_TYPE = exports.PLATFORM_TYPE = { android: 0x01, iOS: 0x02 };
	var GAME_ENGINE = exports.GAME_ENGINE = { 'Cocos2d-x': 1, 'U3d': 2, 'Flash air': 3, '自研引擎': 4, '其他': 5 };
	var CURRENCY_OPTIONS = exports.CURRENCY_OPTIONS = [{ value: 'CNY', label: 'CNY-中国人民币' }];
	
	//Status codes
	var OK = exports.OK = 200;
	var NO_REQUEST_RESOURCE = exports.NO_REQUEST_RESOURCE = 407;
	var DUPLICATE = exports.DUPLICATE = 302;
	var DEL_CUSTOM_FAILED = exports.DEL_CUSTOM_FAILED = 302;
	var DEL_DOWNLOAD_URL_FAILED = exports.DEL_DOWNLOAD_URL_FAILED = 408;
	var DEL_CUSTOM_CHANNEL_FAILED = exports.DEL_CUSTOM_CHANNEL_FAILED = 302;
	var GENERATING_LINK_FAILED = exports.GENERATING_LINK_FAILED = 507;
	var DEL_CAMPAIGN_FAILED = exports.DEL_CAMPAIGN_FAILED = 400;
	var IN_USE = exports.IN_USE = 406;
	var SERVER_INTERNAL_ERROR = exports.SERVER_INTERNAL_ERROR = 500;
	var DEL_STORE_FAILED = exports.DEL_STORE_FAILED = 400;
	var APP_NAME_IN_USE = exports.APP_NAME_IN_USE = 406;
	var CUSTOM_STORE_NAME_IN_USE = exports.CUSTOM_STORE_NAME_IN_USE = 406;
	
	//React-bootstrap col size number
	var NUMBER_1 = exports.NUMBER_1 = 1;
	var NUMBER_2 = exports.NUMBER_2 = 2;
	var NUMBER_3 = exports.NUMBER_3 = 3;
	var NUMBER_4 = exports.NUMBER_4 = 4;
	var NUMBER_5 = exports.NUMBER_5 = 5;
	var NUMBER_6 = exports.NUMBER_6 = 6;
	var NUMBER_7 = exports.NUMBER_7 = 7;
	var NUMBER_8 = exports.NUMBER_8 = 8;
	var NUMBER_9 = exports.NUMBER_9 = 9;
	var NUMBER_10 = exports.NUMBER_10 = 10;
	var NUMBER_11 = exports.NUMBER_11 = 11;
	var NUMBER_12 = exports.NUMBER_12 = 12;
	
	// MixedPanel consts
	var DEFAULT_LEVEL = exports.DEFAULT_LEVEL = 'level0';
	var DEFAULT_BREAD_CRUMB = exports.DEFAULT_BREAD_CRUMB = ['全部'];
	var DEFAULT_LAYOUT = exports.DEFAULT_LAYOUT = 'table';
	var DEFAULT_LAYOUT_OPTIONS = exports.DEFAULT_LAYOUT_OPTIONS = ['table', 'chart', 'both'];
	// 异步action
	var ASYNC_ACTION_TYPE_LIST = exports.ASYNC_ACTION_TYPE_LIST = ['switch_tab', 'switch_sub_tab', 'show_child_level', 'show_parent_level', 'request_server_page'];
	var SYNC_ACTION_TYPE_LIST = exports.SYNC_ACTION_TYPE_LIST = ['change_client_page', 'change_layout'];
	var MIXED_PANEL_INITIAL_STATE = exports.MIXED_PANEL_INITIAL_STATE = {
	  currentLayout: DEFAULT_LAYOUT,
	  summaryData: {},
	  currentTabIndex: 0,
	  currentSubTabIndex: 0,
	  breadCrumbList: DEFAULT_BREAD_CRUMB,
	  breadCrumbRowList: [],
	  datalist: [],
	  chartNames: {},
	  chartData: [],
	  pagerTotal: 0,
	  pagerSize: 10,
	  pagerID: 1,
	  currentLevel: DEFAULT_LEVEL,
	  // 进度条相关
	  done: false,
	  isEmpty: true,
	  error: null
	};

/***/ },

/***/ 293:
/*!************************************************!*\
  !*** ./assets/tracking/widgets/pagination.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcPagination = __webpack_require__(/*! rc-pagination */ 294);
	
	var _rcPagination2 = _interopRequireDefault(_rcPagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'pagination',
	
	  propTypes: {
	    total: _react.PropTypes.number,
	    current: _react.PropTypes.number.isRequired,
	    pageSize: _react.PropTypes.number.isRequired,
	    onChange: _react.PropTypes.func.isRequired
	  },
	
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      {
	        className: 'text-center',
	        style: { display: this.props.total > this.props.pageSize ? 'block' : 'none' }
	      },
	      _react2.default.createElement(_rcPagination2.default, this.props)
	    );
	  }
	});

/***/ },

/***/ 300:
/*!************************************************!*\
  !*** ./assets/tracking/pages/app/app_cell.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'app_cell',
	
	  propTypes: {
	    item: _react.PropTypes.object.isRequired,
	    delFn: _react.PropTypes.func.isRequired,
	    showEditModalFn: _react.PropTypes.func.isRequired
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      showModal: false
	    };
	  },
	  delApp: function delApp() {
	    this.props.delFn(this.props.item.appid);
	  },
	  showEdit: function showEdit() {
	    this.props.showEditModalFn(this.props.item);
	  },
	  close: function close() {
	    this.setState({ showModal: false });
	  },
	  open: function open() {
	    this.setState({ showModal: true });
	  },
	  render: function render() {
	    var delAppModal = _react2.default.createElement(
	      'div',
	      { className: 'static-modal delete-icon' },
	      _react2.default.createElement(
	        'a',
	        { onClick: this.open, className: 'cicon bkgc-orange' },
	        _react2.default.createElement('i', { className: 'fa fa-trash' })
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { className: 'modal-track', show: this.state.showModal, onHide: this.close },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '删除APP'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'form-horizontal text-center' },
	            _react2.default.createElement(
	              'p',
	              null,
	              '确认删除该APP？删除后将不再继续统计/计算该APP数据！'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.close, className: 'btn-track' },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.delApp, className: 'btn-track' },
	            '确定'
	          )
	        )
	      )
	    );
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'app-cell' },
	      _react2.default.createElement(
	        'div',
	        { style: { display: this.props.item.authority === 2 ? 'block' : 'none' }, className: 'authorized-logo' },
	        _react2.default.createElement(
	          'a',
	          { href: 'javascript:;', className: 'cicon bkgc-gray' },
	          _react2.default.createElement('i', { className: 'fa fa-eye' })
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'app-manage clearfix' },
	        _react2.default.createElement(
	          'a',
	          { href: 'javascript:;', className: 'cicon bkgc-green', onClick: this.showEdit },
	          _react2.default.createElement('i', { className: 'fa fa-cog' })
	        ),
	        delAppModal
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'app-info' },
	        _react2.default.createElement('div', { className: 'game-icon', style: { display: this.props.item.category === 2 ? 'block' : 'none' } }),
	        _react2.default.createElement('div', { className: 'app-icon', style: { display: this.props.item.category === 1 ? 'block' : 'none' } }),
	        _react2.default.createElement(
	          'div',
	          { className: 'sketch' },
	          _react2.default.createElement(
	            'p',
	            { className: 'title', title: this.props.item.name },
	            this.props.item.name
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'item' },
	            '总安装：',
	            this.props.item.activatedAmount
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'item' },
	            '今日安装：',
	            this.props.item.activatedAmountToday
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'actions' },
	        _react2.default.createElement(
	          'a',
	          { href: '#/channels/' + this.props.item.appid, className: 'text-center' },
	          _react2.default.createElement('i', { className: 'fa fa-plus' }),
	          ' ',
	          _react2.default.createElement(
	            'span',
	            null,
	            '创建活动'
	          )
	        ),
	        _react2.default.createElement(
	          'a',
	          { href: '#/realtime/' + this.props.item.appid, className: 'text-center' },
	          _react2.default.createElement('i', { className: 'fa fa-bar-chart' }),
	          ' ',
	          _react2.default.createElement(
	            'span',
	            null,
	            '实时统计'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 542:
/*!******************************************************!*\
  !*** ./assets/tracking/pages/app/content_header.jsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	var _import_app = __webpack_require__(/*! ./import_app.jsx */ 543);
	
	var _import_app2 = _interopRequireDefault(_import_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'content_header',
	
	  propTypes: {
	    children: _react.PropTypes.any,
	    actions: _react.PropTypes.object.isRequired,
	    states: _react.PropTypes.object.isRequired
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      showAddAppModal: false,
	      showImportModal: false
	    };
	  },
	  showAddApp: function showAddApp() {
	    this.setState({ showAddAppModal: true });
	  },
	  closeAddApp: function closeAddApp() {
	    this.setState({ showAddAppModal: false });
	  },
	  addApp: function addApp() {
	    var showImportModal = false;
	    switch (this.state.value) {
	      case 'import':
	        showImportModal = true;
	        break;
	      case 'create':
	        window.location.hash = '/createApp';
	        break;
	      default:
	        alert('您还没有选择');
	        return;
	    }
	    this.setState({ showAddAppModal: false, value: '', showImportModal: showImportModal });
	  },
	  handleChange: function handleChange(event) {
	    this.setState({ value: event.target.value });
	  },
	  closeImportApp: function closeImportApp() {
	    this.setState({ showImportModal: false });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'content-header clearfix' },
	      _react2.default.createElement(
	        'a',
	        { href: 'javascript:;', className: 'btn btn-sky-blue add-app-btn', onClick: this.showAddApp },
	        _react2.default.createElement('i', { className: 'fa fa-plus' }),
	        ' ',
	        _react2.default.createElement(
	          'span',
	          null,
	          '添加APP'
	        )
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { show: this.state.showAddAppModal, onHide: this.closeAddApp, bsSize: 'small' },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '添加APP'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'form-horizontal' },
	            _react2.default.createElement(
	              'label',
	              { className: 'form-control' },
	              _react2.default.createElement('input', { type: 'radio', name: 'addAPP', value: 'import', onChange: this.handleChange }),
	              '从其他平台导入APP'
	            ),
	            _react2.default.createElement(
	              'label',
	              { className: 'form-control' },
	              _react2.default.createElement('input', { type: 'radio', name: 'addAPP', value: 'create', onChange: this.handleChange }),
	              '重新创建APP'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.closeAddApp },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.addApp },
	            '确定'
	          )
	        )
	      ),
	      this.props.children,
	      _react2.default.createElement(_import_app2.default, {
	        showImportModal: this.state.showImportModal,
	        closeImportApp: this.closeImportApp,
	        states: this.props.states,
	        actions: this.props.actions
	      })
	    );
	  }
	});

/***/ },

/***/ 543:
/*!**************************************************!*\
  !*** ./assets/tracking/pages/app/import_app.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	var _search_bar = __webpack_require__(/*! ../../widgets/search_bar.jsx */ 291);
	
	var _search_bar2 = _interopRequireDefault(_search_bar);
	
	var _ajax = __webpack_require__(/*! dejs/lib/ajax */ 234);
	
	var _ajax2 = _interopRequireDefault(_ajax);
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'import_app',
	
	  propTypes: {
	    showImportModal: _react.PropTypes.bool.isRequired,
	    closeImportApp: _react.PropTypes.func.isRequired,
	    actions: _react.PropTypes.object.isRequired,
	    states: _react.PropTypes.object.isRequired
	  },
	  getInitialState: function getInitialState() {
	    return {
	      data: []
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.getData();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var currentimportData = nextProps.states.app.importData;
	    var lastimportData = this.props.states.app.importData;
	    if (currentimportData !== lastimportData) {
	      window.location.hash = '/createApp';
	    }
	  },
	  getData: function getData() {
	    var _this = this;
	
	    (0, _ajax2.default)({
	      url: '/getAppsUnbind.do',
	      data: { uid: App.uid },
	      success: function success(msg) {
	        _this.setState({ data: msg.content, sourceData: msg.content });
	      }
	    });
	  },
	  search: function search(key) {
	    var data = _lodash2.default.clone(this.state.sourceData, true);
	    var searchedData = data.filter(function (item) {
	      return _lodash2.default.includes(item.name, key);
	    });
	    this.setState({ data: searchedData });
	  },
	  clear: function clear() {
	    this.setState({ data: this.state.sourceData });
	  },
	  importApp: function importApp(item, e) {
	    this.props.actions.appImp(item);
	  },
	  render: function render() {
	    var _this2 = this;
	
	    var list = this.state.data.map(function (item) {
	      return _react2.default.createElement(
	        'a',
	        {
	          href: 'javascript:;',
	          key: item.appid,
	          style: { display: item.hidden ? 'none' : 'inline-block' },
	          onClick: _this2.importApp.bind(_this2, item)
	        },
	        item.name
	      );
	    });
	    return _react2.default.createElement(
	      _reactBootstrap.Modal,
	      { show: this.props.showImportModal, onHide: this.props.closeImportApp, bsSize: 'lg' },
	      _react2.default.createElement(
	        _reactBootstrap.Modal.Header,
	        { closeButton: true },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Title,
	          null,
	          '从其他平台导入APP'
	        )
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Modal.Body,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'clearfix' },
	          _react2.default.createElement(
	            'div',
	            { className: 'clearfix' },
	            _react2.default.createElement(_search_bar2.default, { search: this.search, clear: this.clear, type: 'client', className: 'pull-right' })
	          ),
	          _react2.default.createElement('hr', null),
	          _react2.default.createElement(
	            'div',
	            { className: 'import-list' },
	            list
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 545:
/*!*************************************!*\
  !*** ./~/dejs/lib/loading/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var STYLE = {
	  CONTAINER: {
	    position: 'relative',
	    minHeight: '300px'
	  },
	  MASK: {
	    position: 'absolute',
	    top: 0,
	    bottom: 0,
	    left: 0,
	    right: 0,
	    backgroundColor: '#fff',
	    color: '#000',
	    opacity: 0.5,
	    zIndex: 999
	  },
	  LOADING: {
	    padding: 0,
	    textAlign: 'center',
	    color: '#000',
	    position: 'absolute',
	    top: '50%',
	    left: '50%',
	    marginTop: '-25px',
	    marginLeft: '-25px'
	  },
	  SPINNER: {
	    fontSize: '50px'
	  }
	}; /**
	    * Example:
	    * <Loading done={this.state.done}>
	    *   <AnyComponent />
	    * </Loding>
	    *
	    * Loading组件接收一个pros：done（是否完成）
	    * 为什么要移除error、isEmpty组件？
	    * 如果一个组件有tabs且Loading组件处理了错误展示，那么Tabs无法切换了。
	    * 所以错误和数据为空组件自己处理
	    */
	
	exports.default = _react2.default.createClass({
	  displayName: 'loading',
	
	  propTypes: {
	    // 是否加载完成
	    done: _react.PropTypes.bool.isRequired,
	    children: _react.PropTypes.any.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      done: false
	    };
	  },
	  render: function render() {
	    /**
	     * 之前的写法props改变会引起子组件重新mount
	     * cotent = this.props.done ? children : [loading, children]
	     */
	    var loadingTips = this.props.done ? null : _react2.default.createElement(
	      'div',
	      { style: STYLE.MASK },
	      _react2.default.createElement(
	        'div',
	        { style: STYLE.LOADING },
	        _react2.default.createElement('i', { className: 'fa fa-spinner fa-pulse', style: STYLE.SPINNER })
	      )
	    );
	
	    return _react2.default.createElement(
	      'div',
	      { style: STYLE.CONTAINER },
	      loadingTips,
	      this.props.children
	    );
	  }
	});

/***/ },

/***/ 546:
/*!************************************************!*\
  !*** ./assets/tracking/pages/app/edit_app.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	var _app_handle = __webpack_require__(/*! ./create_app/app_handle.jsx */ 547);
	
	var _app_handle2 = _interopRequireDefault(_app_handle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'edit_app',
	
	  propTypes: {
	    showEditModal: _react2.default.PropTypes.bool.isRequired,
	    appInfo: _react2.default.PropTypes.object.isRequired,
	    editApp: _react2.default.PropTypes.func.isRequired,
	    closeEditModal: _react2.default.PropTypes.func.isRequired
	  },
	
	  submit: function submit() {
	    var component = this.refs.handler;
	    component.commitSubmit.call(component);
	  },
	  editApp: function editApp(param) {
	    this.props.editApp(param);
	  },
	  closeEdit: function closeEdit() {
	    this.props.closeEditModal();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { style: { display: 'inline-block' } },
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { show: this.props.showEditModal, onHide: this.closeEdit, bsSize: 'lg' },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '编辑APP'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(_app_handle2.default, { handleType: 'edit', appInfo: this.props.appInfo, handleFn: this.editApp, ref: 'handler' })
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.closeEdit },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.submit },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 547:
/*!*************************************************************!*\
  !*** ./assets/tracking/pages/app/create_app/app_handle.jsx ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactSelect = __webpack_require__(/*! react-select */ 238);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	var _constants = __webpack_require__(/*! ../../../helpers/constants.jsx */ 292);
	
	var _ajax = __webpack_require__(/*! dejs/lib/ajax */ 234);
	
	var _ajax2 = _interopRequireDefault(_ajax);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'app_handle',
	
	  propTypes: {
	    handleType: _react.PropTypes.string.isRequired,
	    handleFn: _react.PropTypes.func.isRequired,
	    appInfo: _react.PropTypes.object,
	    importData: _react.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    var appInfo = this.props.appInfo;
	    var states = undefined;
	    if (this.props.handleType === 'create') {
	      states = {
	        name: '',
	        appCategory: 2,
	        currencyType: 'CNY',
	        platformArr: []
	      };
	      if (this.props.importData) {
	        states.name = this.props.importData.name;
	        states.id = this.props.importData.appid;
	      }
	    } else if (this.props.handleType === 'edit') {
	      (function () {
	        var platformArr = [];
	        _lodash2.default.map(_constants.PLATFORM_TYPE, function (value, key) {
	          if ((appInfo.platform & value) === value) {
	            platformArr.push(value);
	          }
	        });
	        states = {
	          name: appInfo.name,
	          appCategory: appInfo.category,
	          currencyType: appInfo.currency,
	          platformArr: platformArr,
	          gameEngine: appInfo.gameEngine
	        };
	      })();
	    }
	    Object.assign(states, {
	      appTypeLoading: true,
	      showGameSubTypeOptions: true
	    });
	    return states;
	  },
	  componentDidMount: function componentDidMount() {
	    this.getOptions();
	  },
	  handleNameChange: function handleNameChange(event) {
	    this.setState({ name: event.target.value });
	  },
	  handleCategoryChange: function handleCategoryChange(event) {
	    this.setState({ appCategory: Number(event.target.value) });
	  },
	  getOptions: function getOptions() {
	    var _this = this;
	
	    (0, _ajax2.default)({
	      method: 'POST',
	      url: '/getCategoryAndType.do',
	      data: { uid: window.App.uid },
	      success: function success(msg) {
	        if (_this.isMounted()) {
	          (function () {
	            //id为1是应用，id为2是游戏
	            var appTypeOptions = _lodash2.default.pluck(msg.content.filter(function (item) {
	              return item.id === 1;
	            }), 'children')[0];
	            var gameTypeOptions = _lodash2.default.pluck(msg.content.filter(function (item) {
	              return item.id === 2;
	            }), 'children')[0];
	            var appType = undefined,
	                gameType = undefined,
	                gameSubTypeOptions = undefined,
	                gameSubType = undefined;
	            if (_this.props.handleType === 'create') {
	              appType = appTypeOptions[0].id;
	              gameType = gameTypeOptions[0].id;
	              gameSubTypeOptions = _lodash2.default.pluck(msg.content.filter(function (item) {
	                return item.id === gameType;
	              }), 'children')[0];
	              gameSubType = gameSubTypeOptions[0].id;
	            } else if (_this.props.handleType === 'edit') {
	              (function () {
	                var appInfo = _this.props.appInfo;
	                //category为1是app为2是game
	                if (appInfo.category === 1) {
	                  appType = appInfo.type;
	                  gameType = gameTypeOptions[0].id;
	                  gameSubTypeOptions = _lodash2.default.pluck(msg.content.filter(function (item) {
	                    return item.id === gameType;
	                  }), 'children')[0];
	                  gameSubType = gameSubTypeOptions[0].id;
	                } else if (appInfo.category === 2) {
	                  appType = appTypeOptions[0].id;
	                  msg.content.forEach(function (item) {
	                    item.children.forEach(function (subItem) {
	                      if (subItem.id === appInfo.type) {
	                        //no sub type when parent type id is 2
	                        if (item.id === 2) {
	                          _this.setState({ showGameSubTypeOptions: false });
	                          gameSubTypeOptions = [];
	                          gameType = appInfo.type;
	                        } else {
	                          gameSubTypeOptions = item.children;
	                          gameType = item.id;
	                        }
	                      }
	                    });
	                  });
	                  gameSubType = appInfo.type;
	                }
	              })();
	            }
	            _this.setState({
	              appTypeLoading: false,
	              typeData: msg.content,
	              appTypeOptions: appTypeOptions,
	              gameTypeOptions: gameTypeOptions,
	              appType: appType,
	              gameType: gameType,
	              gameSubTypeOptions: gameSubTypeOptions,
	              gameSubType: gameSubType
	            });
	          })();
	        }
	      },
	      fail: function fail(err) {}
	    });
	  },
	  gameTypeChange: function gameTypeChange(gameType) {
	    var gameSubTypeOptions = _lodash2.default.pluck(this.state.typeData.filter(function (item) {
	      return item.id === gameType;
	    }), 'children');
	    if (gameSubTypeOptions.length !== 0 && gameSubTypeOptions[0].length !== 0) {
	      var gameSubType = gameSubTypeOptions[0][0].id;
	      this.setState({
	        gameType: gameType,
	        gameSubTypeOptions: gameSubTypeOptions[0],
	        gameSubType: gameSubType,
	        showGameSubTypeOptions: true
	      });
	    } else {
	      this.setState({
	        gameType: gameType,
	        gameSubTypeOptions: [],
	        gameSubType: null,
	        showGameSubTypeOptions: false
	      });
	    }
	  },
	  gameSubTypeChange: function gameSubTypeChange(gameSubType) {
	    this.setState({ gameSubType: gameSubType });
	  },
	  appTypeChange: function appTypeChange(value) {
	    this.setState({ appType: value });
	  },
	  platformCheckedChange: function platformCheckedChange(event) {
	    var value = Number(event.target.value);
	    var platformArr = _lodash2.default.clone(this.state.platformArr, true);
	    if (event.target.checked === true) {
	      platformArr.push(value);
	      this.setState({ platformArr: platformArr });
	    } else if (event.target.checked === false) {
	      var index = platformArr.indexOf(value);
	      platformArr.splice(index, 1);
	      this.setState({ platformArr: platformArr });
	    }
	  },
	  handleGameEngineChange: function handleGameEngineChange(event) {
	    this.setState({ gameEngine: Number(event.target.value) });
	  },
	  currencyChange: function currencyChange(value) {
	    this.setState({ currencyType: value });
	  },
	  commitSubmit: function commitSubmit() {
	    var _this2 = this;
	
	    var platform = undefined;
	    this.state.platformArr.forEach(function (num) {
	      platform |= num;
	    });
	    var param = {
	      name: this.state.name,
	      category: this.state.appCategory,
	      type: this.state.appCategory === 1 ? this.state.appType : this.state.gameSubType || this.state.gameType,
	      currency: this.state.currencyType,
	      platform: platform
	    };
	
	    if (this.state.appCategory === 2) {
	      param.gameEngine = this.state.gameEngine;
	    }
	
	    if (!param.name) {
	      alert('您没有填写名称');
	      return;
	    } else if (param.name.length < 1 || param.name.length > 20) {
	      alert('App名称需1~20个字符！');
	      return;
	    }
	
	    if (!param.platform) {
	      alert('您没有选择平台');
	      return;
	    }
	
	    if (this.state.appCategory === 2 && !param.gameEngine) {
	      alert('您没有选择开发引擎');
	      return;
	    }
	
	    var typeName = undefined;
	
	    if (param.category === 1) {
	      typeName = _lodash2.default.pluck(this.state.appTypeOptions.filter(function (item) {
	        return item.id === _this2.state.appType;
	      }), 'name');
	    } else if (param.category === 2) {
	      typeName = _lodash2.default.pluck(this.state.gameTypeOptions.filter(function (item) {
	        return item.id === _this2.state.gameType;
	      }), 'name') + '/' + _lodash2.default.pluck(this.state.gameSubTypeOptions.filter(function (item) {
	        return item.id === _this2.state.gameSubType;
	      }), 'name');
	    }
	    this.props.handleFn(param, typeName);
	  },
	  render: function render() {
	    var _this3 = this;
	
	    var platformChoice = _lodash2.default.map(_constants.PLATFORM_TYPE, function (value, key) {
	      return _react2.default.createElement(_reactBootstrap.Input, {
	        key: key,
	        type: 'checkbox',
	        label: key,
	        standalone: true,
	        wrapperClassName: 'col-xs-2',
	        checked: _this3.state.platformArr.indexOf(value) >= 0,
	        value: value,
	        onChange: _this3.platformCheckedChange
	      });
	    });
	
	    var gameEngineChioce = _lodash2.default.map(_constants.GAME_ENGINE, function (value, key) {
	      return _react2.default.createElement(_reactBootstrap.Input, {
	        key: key,
	        type: 'radio',
	        label: key,
	        name: 'gameEngine',
	        standalone: true,
	        wrapperClassName: 'col-xs-3',
	        checked: _this3.state.gameEngine === value,
	        value: value,
	        onChange: _this3.handleGameEngineChange
	      });
	    });
	
	    return _react2.default.createElement(
	      'form',
	      { className: 'form-horizontal de-narrow-form' },
	      _react2.default.createElement(_reactBootstrap.Input, {
	        type: 'text',
	        label: 'APP名称：',
	        labelClassName: 'col-xs-2',
	        wrapperClassName: 'col-xs-10',
	        value: this.state.name,
	        onChange: this.handleNameChange,
	        disabled: this.props.importData,
	        required: true
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: 'form-group' },
	        _react2.default.createElement(
	          'label',
	          { className: 'control-label col-xs-2' },
	          'app种类：'
	        ),
	        _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'Game', name: 'appCategory', standalone: true, wrapperClassName: 'col-xs-2',
	          value: 2, checked: this.state.appCategory === 2, onChange: this.handleCategoryChange }),
	        _react2.default.createElement(_reactBootstrap.Input, { type: 'radio', label: 'APP', name: 'appCategory', standalone: true, wrapperClassName: 'col-xs-2',
	          value: 1, checked: this.state.appCategory === 1, onChange: this.handleCategoryChange })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'form-group' },
	        _react2.default.createElement(
	          'label',
	          { className: 'control-label col-xs-2' },
	          this.state.appCategory === 2 ? '游戏' : 'app',
	          '类型：'
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { display: this.state.appCategory === 2 ? 'block' : 'none' } },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-5' },
	            _react2.default.createElement(_reactSelect2.default, {
	              name: 'form-field-name',
	              labelKey: 'name',
	              valueKey: 'id',
	              value: this.state.gameType,
	              options: this.state.gameTypeOptions,
	              onChange: this.gameTypeChange,
	              clearable: false,
	              searchable: false,
	              isLoading: this.state.appTypeLoading
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-5', style: { display: this.state.showGameSubTypeOptions ? 'block' : 'none' } },
	            _react2.default.createElement(_reactSelect2.default, {
	              name: 'form-field-name',
	              labelKey: 'name',
	              valueKey: 'id',
	              value: this.state.gameSubType,
	              options: this.state.gameSubTypeOptions,
	              onChange: this.gameSubTypeChange,
	              clearable: false,
	              searchable: false,
	              isLoading: this.state.appTypeLoading
	            })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-10', style: { display: this.state.appCategory === 1 ? 'block' : 'none' } },
	          _react2.default.createElement(_reactSelect2.default, {
	            name: 'form-field-name',
	            labelKey: 'name',
	            valueKey: 'id',
	            value: this.state.appType,
	            options: this.state.appTypeOptions,
	            onChange: this.appTypeChange,
	            clearable: false,
	            searchable: false,
	            isLoading: this.state.appTypeLoading
	          })
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'form-group' },
	        _react2.default.createElement(
	          'label',
	          { className: 'control-label col-xs-2' },
	          this.state.appCategory === 2 ? '游戏' : 'app',
	          '平台：'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          platformChoice
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'form-group', style: { display: this.state.appCategory === 2 ? 'block' : 'none' } },
	        _react2.default.createElement(
	          'label',
	          { className: 'control-label col-xs-2' },
	          '开发引擎：'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-10', style: { paddingLeft: 0 } },
	          gameEngineChioce
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'form-group' },
	        _react2.default.createElement(
	          'label',
	          { className: 'control-label col-xs-2' },
	          '货币类型：'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-5' },
	          _react2.default.createElement(_reactSelect2.default, {
	            name: 'form-field-name',
	            value: this.state.currencyType,
	            options: _constants.CURRENCY_OPTIONS,
	            onChange: this.currencyChange,
	            clearable: false,
	            searchable: false,
	            disabled: this.props.handleType === 'edit'
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-5', style: { visibility: this.props.handleType === 'create' ? 'visible' : 'hidden' } },
	          _react2.default.createElement('i', { className: 'fa fa-exclamation-circle color-warning' }),
	          ' ',
	          _react2.default.createElement(
	            'span',
	            { className: 'attention' },
	            '创建后货币类型无法修改'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 548:
/*!*******************************************!*\
  !*** ./assets/tracking/actions/index.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _app = __webpack_require__(/*! ./app.jsx */ 549);
	
	var appActions = _interopRequireWildcard(_app);
	
	var _game = __webpack_require__(/*! ./game.jsx */ 550);
	
	var gameActions = _interopRequireWildcard(_game);
	
	var _user = __webpack_require__(/*! ./user.jsx */ 551);
	
	var userActions = _interopRequireWildcard(_user);
	
	var _store = __webpack_require__(/*! ./store.jsx */ 552);
	
	var storeActions = _interopRequireWildcard(_store);
	
	var _channel = __webpack_require__(/*! ./channel.jsx */ 553);
	
	var channelActions = _interopRequireWildcard(_channel);
	
	var _summary = __webpack_require__(/*! ./summary.jsx */ 554);
	
	var summaryActions = _interopRequireWildcard(_summary);
	
	var _mixed_panel = __webpack_require__(/*! ./mixed_panel.js */ 555);
	
	var mixedPanelActions = _interopRequireWildcard(_mixed_panel);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 最终在pages里面调用action
	 * this.props.actions.gameCreate(...)
	 */
	
	var actions = {
	  app: appActions,
	  game: gameActions,
	  user: userActions,
	  store: storeActions,
	  channel: channelActions,
	  summary: summaryActions,
	  mixedPanel: mixedPanelActions
	};
	
	function convert(actionCreators) {
	  var ret = {};
	  _lodash2.default.each(actionCreators, function (item, key) {
	    _lodash2.default.each(item, function (action, funcName) {
	      var newActionName = _lodash2.default.camelCase(key + '_' + funcName);
	      ret[newActionName] = action;
	    });
	  });
	
	  return ret;
	}
	
	exports.default = convert(actions);

/***/ },

/***/ 549:
/*!*****************************************!*\
  !*** ./assets/tracking/actions/app.jsx ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.del = del;
	exports.create = create;
	exports.edit = edit;
	exports.imp = imp;
	exports.importApp = importApp;
	function del(payload) {
	  return {
	    type: 'del_app',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/delApp.do'
	    }
	  };
	}
	function create(payload) {
	  return {
	    type: 'create_app',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/createApp.do'
	    }
	  };
	}
	function edit(payload) {
	  return {
	    type: 'edit_app',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/editApp.do'
	    }
	  };
	}
	function imp(payload) {
	  return {
	    type: 'imp_app',
	    payload: payload
	  };
	}
	function importApp(payload) {
	  return {
	    type: 'import_app',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/bindApp.do'
	    }
	  };
	}

/***/ },

/***/ 550:
/*!******************************************!*\
  !*** ./assets/tracking/actions/game.jsx ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.create = create;
	exports.del = del;
	/**
	 * 所有的 action 必须遵循 Flux Standard Action
	 * https://github.com/acdlite/flux-standard-action
	 *
	 * action只能包含如下四个字段：
	 * type / payload / meta / error
	 * error为true时，payload为Error对象
	 */
	
	function create(payload) {
	  return {
	    type: 'create_game',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/abc'
	    }
	  };
	}
	
	function del(payload) {
	  return {
	    type: 'del_game',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/abc'
	    }
	  };
	}

/***/ },

/***/ 551:
/*!******************************************!*\
  !*** ./assets/tracking/actions/user.jsx ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.create = create;
	function create(payload) {
	  return {
	    type: 'create_user',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/abc'
	    }
	  };
	}

/***/ },

/***/ 552:
/*!*******************************************!*\
  !*** ./assets/tracking/actions/store.jsx ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getStoreNames = getStoreNames;
	exports.getStores = getStores;
	exports.delStore = delStore;
	exports.selectStore = selectStore;
	exports.createCustomStore = createCustomStore;
	exports.delCustomStore = delCustomStore;
	exports.createDownloadUrl = createDownloadUrl;
	exports.editDownloadUrl = editDownloadUrl;
	exports.delDownloadUrl = delDownloadUrl;
	exports.getDownloadUrls = getDownloadUrls;
	function getStoreNames(payload) {
	  return {
	    type: 'get_store_names',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/getStoreNames.do'
	    }
	  };
	}
	
	function getStores(payload) {
	  return {
	    type: 'get_stores',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/getStores.do'
	    }
	  };
	}
	
	function delStore(payload) {
	  return {
	    type: 'del_store',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/delStore.do'
	    }
	  };
	}
	
	function selectStore(payload) {
	  return {
	    type: 'select_store',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/selectStore.do'
	    }
	  };
	}
	
	function createCustomStore(payload) {
	  return {
	    type: 'create_custom_store',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/createCustomStore.do'
	    }
	  };
	}
	
	function delCustomStore(payload) {
	  return {
	    type: 'del_custom_store',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/delCustomStore.do'
	    }
	  };
	}
	
	function createDownloadUrl(payload) {
	  return {
	    type: 'create_download_url',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/createDownloadUrl.do'
	    }
	  };
	}
	
	function editDownloadUrl(payload) {
	  return {
	    type: 'edit_download_url',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/editDownloadUrl.do'
	    }
	  };
	}
	
	function delDownloadUrl(info) {
	  return {
	    type: 'del_download_url',
	    payload: info,
	    meta: {
	      ajax: true,
	      url: '/delDownloadUrl.do',
	      original: info
	    }
	  };
	}
	
	function getDownloadUrls(payload) {
	  return {
	    type: 'get_download_urls',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/getDownloadUrls.do'
	    }
	  };
	}

/***/ },

/***/ 553:
/*!*********************************************!*\
  !*** ./assets/tracking/actions/channel.jsx ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getChannelNames = getChannelNames;
	exports.getChannels = getChannels;
	exports.selectChannel = selectChannel;
	exports.delChannel = delChannel;
	exports.createCustomChannel = createCustomChannel;
	exports.delCustomChannel = delCustomChannel;
	exports.createCampaign = createCampaign;
	exports.editCampaign = editCampaign;
	exports.delCampaign = delCampaign;
	exports.getCampaigns = getCampaigns;
	exports.getDownloadUrlNames = getDownloadUrlNames;
	function getChannelNames(payload) {
	  return {
	    type: 'get_channel_names',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/getChannelNames.do'
	    }
	  };
	}
	
	function getChannels(payload) {
	  return {
	    type: 'get_channels',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/getChannels.do'
	    }
	  };
	}
	
	function selectChannel(payload) {
	  return {
	    type: 'select_channel',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/selectChannel.do'
	    }
	  };
	}
	
	function delChannel(info) {
	  return {
	    type: 'del_channel',
	    payload: info,
	    meta: {
	      ajax: true,
	      url: '/delChannel.do',
	      original: info
	    }
	  };
	}
	
	function createCustomChannel(payload) {
	  return {
	    type: 'create_custom_channel',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/createCustomChannel.do'
	    }
	  };
	}
	
	function delCustomChannel(info) {
	  return {
	    type: 'del_custom_channel',
	    payload: info,
	    meta: {
	      ajax: true,
	      url: '/delCustomChannel.do',
	      original: info
	    }
	  };
	}
	
	function createCampaign(payload) {
	  return {
	    type: 'create_campaign',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/createCampaign.do'
	    }
	  };
	}
	
	function editCampaign(payload) {
	  return {
	    type: 'edit_campaign',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/editCampaign.do'
	    }
	  };
	}
	
	function delCampaign(info) {
	  return {
	    type: 'del_campaign',
	    payload: info,
	    meta: {
	      ajax: true,
	      url: '/delCampaign.do',
	      original: info
	    }
	  };
	}
	
	function getCampaigns(payload) {
	  return {
	    type: 'get_campaigns',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/getCampaigns.do'
	    }
	  };
	}
	
	function getDownloadUrlNames(payload) {
	  return {
	    type: 'get_download_url_names',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/getDownloadUrlNames.do'
	    }
	  };
	}

/***/ },

/***/ 554:
/*!*********************************************!*\
  !*** ./assets/tracking/actions/summary.jsx ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOverviewAppSummary = getOverviewAppSummary;
	exports.getOverviewActiveRate = getOverviewActiveRate;
	exports.getOverviewInstallRatio = getOverviewInstallRatio;
	exports.getOverviewChannelSummaryBuAppId = getOverviewChannelSummaryBuAppId;
	exports.queryCampaignSummary = queryCampaignSummary;
	exports.getOverviewPublisherSummaryByCampaign = getOverviewPublisherSummaryByCampaign;
	exports.getOverviewSiteSummaryByPublisher = getOverviewSiteSummaryByPublisher;
	exports.getOverviewChannelSummaryByEventId = getOverviewChannelSummaryByEventId;
	exports.getOverviewTotalChannelSummaryByEventId = getOverviewTotalChannelSummaryByEventId;
	exports.getOverviewPayUserRatio = getOverviewPayUserRatio;
	exports.getOverviewRevenueRatio = getOverviewRevenueRatio;
	function getOverviewAppSummary(payload) {
	  return {
	    type: 'getOverviewAppSummary',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/overviewappsummary.do'
	    }
	  };
	}
	
	function getOverviewActiveRate(payload) {
	  return {
	    type: 'getOverviewActiveRate',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/overviewActiveRate.do'
	    }
	  };
	}
	
	function getOverviewInstallRatio(payload) {
	  return {
	    type: 'getOverviewInstallRatio',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/overviewInstallRatio.do'
	    }
	  };
	}
	
	function getOverviewChannelSummaryBuAppId(payload) {
	  return {
	    type: 'getOverviewChannelSummaryBuAppId',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/overviewchannelsummarybyappid.do'
	    }
	  };
	}
	
	function queryCampaignSummary(payload) {
	  return {
	    type: 'queryCampaignSummary',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/queryCampaignSummary.do'
	    }
	  };
	}
	
	function getOverviewPublisherSummaryByCampaign(payload) {
	  return {
	    type: 'getOverviewPublisherSummaryByCampaign',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/overviewpublishersummarybycampaign.do'
	    }
	  };
	}
	
	function getOverviewSiteSummaryByPublisher(payload) {
	  return {
	    type: 'getOverviewSiteSummaryByPublisher',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/overviewsitesummarybypublisher.do'
	    }
	  };
	}
	
	function getOverviewChannelSummaryByEventId(payload) {
	  return {
	    type: 'getOverviewChannelSummaryByEventId',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/overviewchannelsummarybyeventid.do'
	    }
	  };
	}
	
	function getOverviewTotalChannelSummaryByEventId(payload) {
	  return {
	    type: 'getOverviewTotalChannelSummaryByEventId',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/overviewTotalChannelSummaryByEventid.do'
	    }
	  };
	}
	
	function getOverviewPayUserRatio(payload) {
	  return {
	    type: 'getOverviewPayUserRatio',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/overviewPayUserRatio.do'
	    }
	  };
	}
	
	function getOverviewRevenueRatio(payload) {
	  return {
	    type: 'getOverviewRevenueRatio',
	    payload: payload,
	    meta: {
	      ajax: true,
	      url: '/overviewRevenueRatio.do'
	    }
	  };
	}

/***/ },

/***/ 555:
/*!************************************************!*\
  !*** ./assets/tracking/actions/mixed_panel.js ***!
  \************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.switchTab = switchTab;
	exports.switchSubTab = switchSubTab;
	exports.showChildLevel = showChildLevel;
	exports.showParentLevel = showParentLevel;
	exports.changeLayout = changeLayout;
	exports.changeClientPage = changeClientPage;
	exports.requestServerPage = requestServerPage;
	/**
	 * flux standard action
	 * payload 最好是保持为一个object
	 * 如果是异步action，meta里面必须传入original（一包会有附属数据）
	 */
	
	/**
	 * 切换Tab
	 * data, url, tabIndex
	 */
	function switchTab(info) {
	  return {
	    type: 'switch_tab',
	    payload: info.data,
	    meta: {
	      ajax: true,
	      url: info.url,
	      // 原始action数据
	      original: info
	    }
	  };
	}
	
	/**
	 * 切换Tab
	 * data, url, subTabIndex
	 */
	function switchSubTab(info) {
	  return {
	    type: 'switch_sub_tab',
	    payload: info.data,
	    meta: {
	      ajax: true,
	      url: info.url,
	      // 原始action数据
	      original: info
	    }
	  };
	}
	
	/**
	 * 查看下一级
	 * data url level(number) rowData breadCrumb
	 */
	function showChildLevel(info) {
	  return {
	    type: 'show_child_level',
	    payload: info.data,
	    meta: {
	      ajax: true,
	      url: info.url,
	      original: info
	    }
	  };
	}
	
	/**
	 * 查看上N级
	 * data url level(number)
	 */
	function showParentLevel(info) {
	  return {
	    type: 'show_parent_level',
	    payload: info.data,
	    meta: {
	      ajax: true,
	      url: info.url,
	      original: info
	    }
	  };
	}
	
	/**
	 * 图形表格切换
	 * payload = {layout}
	 */
	function changeLayout(info) {
	  return {
	    type: 'change_layout',
	    payload: {
	      layout: info.layout
	    },
	    meta: {
	      original: info
	    }
	  };
	}
	
	// 这个用不上
	// 客户端分页ajax请求
	// export function requestClientPage(info) {
	//   return {
	//     type: 'request_client_page',
	//     payload: info.data,
	//     meta: {
	//       ajax: true,
	//       url: info.url,
	//       original: info
	//     }
	//   }
	// }
	
	// 客户端分页，数据已请求 payload = {pagerID}
	function changeClientPage(info) {
	  return {
	    type: 'change_client_page',
	    payload: {
	      pagerID: info.pagerID
	    },
	    meta: {
	      original: info
	    }
	  };
	}
	
	// 服务端分页
	function requestServerPage(info) {
	  return {
	    type: 'request_server_page',
	    payload: info.data,
	    meta: {
	      ajax: true,
	      url: info.url,
	      original: info
	    }
	  };
	}

/***/ },

/***/ 556:
/*!*************************************************!*\
  !*** ./assets/tracking/pages/channel/index.jsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _channel = __webpack_require__(/*! ./channel.jsx */ 557);
	
	var _channel2 = _interopRequireDefault(_channel);
	
	var _new_button = __webpack_require__(/*! ../../widgets/new_button.jsx */ 568);
	
	var _new_button2 = _interopRequireDefault(_new_button);
	
	var _container_header = __webpack_require__(/*! ../../widgets/container_header.jsx */ 569);
	
	var _container_header2 = _interopRequireDefault(_container_header);
	
	var _pagination = __webpack_require__(/*! ../../widgets/pagination.jsx */ 293);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'channel',
	
	  propTypes: {
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object,
	    params: _react.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      currentPageID: 1,
	      pageSize: 10
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.props.actions.channelGetChannels({
	      uid: window.App.uid,
	      appid: this.props.params.appid,
	      downloadUrlsInitSize: 10
	    });
	
	    this.props.actions.channelGetDownloadUrlNames({
	      uid: window.App.uid,
	      appid: this.props.params.appid
	    });
	  },
	
	  onPageChange: function onPageChange(pageID) {
	    this.setState({ currentPageID: pageID });
	    this.props.actions.storeGetStores({
	      uid: window.App.uid,
	      appid: this.props.params.appid,
	      pageID: pageID,
	      pageSize: this.state.pageSize
	    });
	  },
	  render: function render() {
	    var _this = this;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _container_header2.default,
	        null,
	        _react2.default.createElement(_new_button2.default, { href: '#/channels/add/' + this.props.params.appid, text: '添加广告网络' })
	      ),
	      this.props.states.channel.items.map(function (channel) {
	        return _react2.default.createElement(_channel2.default, {
	          key: channel.channelId,
	          id: channel.channelId,
	          appid: _this.props.params.appid,
	          campaigns: channel.campaigns,
	          name: channel.name,
	          type: channel.type,
	          actions: _this.props.actions,
	          states: _this.props.states,
	          totalRecord: channel.totalRecord
	        });
	      }),
	      _react2.default.createElement(_pagination2.default, {
	        total: this.props.states.channel.totalRecord,
	        current: this.state.currentPageID,
	        pageSize: this.state.pageSize,
	        onChange: this.onPageChange
	      })
	    );
	  }
	});

/***/ },

/***/ 557:
/*!***************************************************!*\
  !*** ./assets/tracking/pages/channel/channel.jsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	var _campaign = __webpack_require__(/*! ./campaign/campaign.jsx */ 558);
	
	var _campaign2 = _interopRequireDefault(_campaign);
	
	var _new = __webpack_require__(/*! ./campaign/new.jsx */ 563);
	
	var _new2 = _interopRequireDefault(_new);
	
	var _th_center = __webpack_require__(/*! ../../widgets/th_center.jsx */ 565);
	
	var _th_center2 = _interopRequireDefault(_th_center);
	
	var _pagination = __webpack_require__(/*! ../../widgets/pagination.jsx */ 293);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	var _delete = __webpack_require__(/*! ./delete.jsx */ 566);
	
	var _delete2 = _interopRequireDefault(_delete);
	
	var _text_with_baloon = __webpack_require__(/*! ../../widgets/text_with_baloon.jsx */ 567);
	
	var _text_with_baloon2 = _interopRequireDefault(_text_with_baloon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'channel',
	
	  propTypes: {
	    id: _react.PropTypes.string.isRequired,
	    name: _react.PropTypes.string.isRequired,
	    appid: _react.PropTypes.string.isRequired,
	    campaigns: _react.PropTypes.array.isRequired,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object,
	    totalRecord: _react.PropTypes.number,
	    type: _react.PropTypes.number.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      campaigns: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      currentPageID: 1,
	      pageSize: 10
	    };
	  },
	  onPageChange: function onPageChange(pageID) {
	    this.setState({ currentPageID: pageID });
	    this.props.actions.channelGetCampaigns({
	      uid: window.App.uid,
	      appid: this.props.appid,
	      channelId: this.props.id,
	      pageID: pageID,
	      pageSize: this.state.pageSize
	    });
	  },
	  render: function render() {
	    var _this = this;
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'panel panel-track' },
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-heading' },
	        _react2.default.createElement(_text_with_baloon2.default, { title: this.props.name, showSymbol: this.props.type }),
	        _react2.default.createElement(_delete2.default, {
	          id: this.props.id,
	          appid: this.props.appid,
	          actions: this.props.actions,
	          name: this.props.name
	        })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-body' },
	        _react2.default.createElement(
	          _reactBootstrap.Table,
	          { hover: true },
	          _react2.default.createElement(
	            'thead',
	            null,
	            _react2.default.createElement(
	              'tr',
	              null,
	              _react2.default.createElement(
	                _th_center2.default,
	                null,
	                '名称'
	              ),
	              _react2.default.createElement(
	                _th_center2.default,
	                null,
	                '下载地址'
	              ),
	              _react2.default.createElement(
	                _th_center2.default,
	                null,
	                '推广链接'
	              ),
	              _react2.default.createElement(
	                _th_center2.default,
	                null,
	                '操作'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'tbody',
	            null,
	            this.props.campaigns.map(function (campaign) {
	              return _react2.default.createElement(_campaign2.default, {
	                key: campaign.id,
	                id: campaign.id,
	                name: campaign.name,
	                downloadUrl: campaign.downloadUrl,
	                trackUrl: campaign.trackUrl,
	                appid: _this.props.appid,
	                channelId: _this.props.id,
	                actions: _this.props.actions,
	                states: _this.props.states
	              });
	            })
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-footer' },
	        _react2.default.createElement(_pagination2.default, {
	          total: this.props.totalRecord,
	          current: this.state.currentPageID,
	          pageSize: this.state.pageSize,
	          onChange: this.onPageChange
	        }),
	        _react2.default.createElement(_new2.default, {
	          text: '添加广告活动',
	          appid: this.props.appid,
	          channelId: this.props.id,
	          actions: this.props.actions,
	          states: this.props.states
	        })
	      )
	    );
	  }
	});

/***/ },

/***/ 558:
/*!*************************************************************!*\
  !*** ./assets/tracking/pages/channel/campaign/campaign.jsx ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _edit = __webpack_require__(/*! ./edit.jsx */ 559);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _delete = __webpack_require__(/*! ./delete.jsx */ 561);
	
	var _delete2 = _interopRequireDefault(_delete);
	
	var _td_center = __webpack_require__(/*! ../../../widgets/td_center.jsx */ 562);
	
	var _td_center2 = _interopRequireDefault(_td_center);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'campaign',
	
	  propTypes: {
	    id: _react.PropTypes.string.isRequired,
	    name: _react2.default.PropTypes.string.isRequired,
	    downloadUrl: _react2.default.PropTypes.string.isRequired,
	    trackUrl: _react2.default.PropTypes.string.isRequired,
	    appid: _react.PropTypes.string.isRequired,
	    channelId: _react.PropTypes.string.isRequired,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  render: function render() {
	    return _react2.default.createElement(
	      'tr',
	      null,
	      _react2.default.createElement(
	        _td_center2.default,
	        null,
	        this.props.name
	      ),
	      _react2.default.createElement(
	        _td_center2.default,
	        null,
	        this.props.downloadUrl
	      ),
	      _react2.default.createElement(
	        _td_center2.default,
	        null,
	        this.props.trackUrl
	      ),
	      _react2.default.createElement(
	        _td_center2.default,
	        null,
	        _react2.default.createElement(_edit2.default, {
	          id: this.props.id,
	          text: '编辑',
	          appid: this.props.appid,
	          channelId: this.props.channelId,
	          actions: this.props.actions,
	          states: this.props.states,
	          name: this.props.name,
	          downloadUrl: this.props.downloadUrl,
	          trackUrl: this.props.trackUrl
	        }),
	        _react2.default.createElement(_delete2.default, {
	          id: this.props.id,
	          text: '删除',
	          appid: this.props.appid,
	          name: this.props.name,
	          channelId: this.props.channelId,
	          actions: this.props.actions,
	          states: this.props.states
	        })
	      )
	    );
	  }
	});

/***/ },

/***/ 559:
/*!*********************************************************!*\
  !*** ./assets/tracking/pages/channel/campaign/edit.jsx ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	var _select_download_url = __webpack_require__(/*! ./select_download_url.jsx */ 560);
	
	var _select_download_url2 = _interopRequireDefault(_select_download_url);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'edit',
	
	  propTypes: {
	    id: _react.PropTypes.string.isRequired,
	    text: _react2.default.PropTypes.string.isRequired,
	    name: _react2.default.PropTypes.string.isRequired,
	    // downloadId: React.PropTypes.number.isRequired,
	    trackUrl: _react2.default.PropTypes.string.isRequired,
	    channelId: _react.PropTypes.string.isRequired,
	    appid: _react.PropTypes.string.isRequired,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: 'New'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      showModal: false,
	      id: this.props.id,
	      name: this.props.name,
	      // downloadId: this.props.downloadId,
	      trackUrl: this.props.trackUrl,
	      channelId: this.props.channelId
	    };
	  },
	  close: function close() {
	    this.setState({ showModal: false });
	  },
	  open: function open() {
	    this.setState({ showModal: true });
	  },
	  handlenameChange: function handlenameChange() {
	    this.setState({ name: this.refs.name.getValue() });
	  },
	  editCampaign: function editCampaign() {
	    this.props.actions.channelEditCampaign({
	      uid: App.uid,
	      appid: this.props.appid,
	      campaignId: this.props.id,
	      name: this.state.name,
	      downloadId: this.state.downloadId,
	      params: this.refs.params.value.trim()
	    });
	    this.close();
	  },
	  setDownloadId: function setDownloadId(val) {
	    this.setState({ downloadId: val });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'static-modal pull-left' },
	      _react2.default.createElement(
	        'a',
	        { onClick: this.open },
	        this.props.text
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { className: 'modal-track', show: this.state.showModal, onHide: this.close },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '修改推广活动'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'form-horizontal' },
	            _react2.default.createElement(_reactBootstrap.Input, {
	              ref: 'name',
	              type: 'text',
	              label: '名称',
	              labelClassName: 'col-xs-2',
	              wrapperClassName: 'col-xs-8',
	              value: this.state.name,
	              onChange: this.handlenameChange
	            }),
	            _react2.default.createElement(
	              _reactBootstrap.Input,
	              {
	                label: '下载地址',
	                labelClassName: 'col-xs-2',
	                wrapperClassName: 'col-xs-8'
	              },
	              _react2.default.createElement(_select_download_url2.default, {
	                states: this.props.states,
	                setDownloadId: this.setDownloadId
	              })
	            ),
	            _react2.default.createElement(_reactBootstrap.Input, {
	              ref: 'params',
	              type: 'text',
	              label: '广告活动参数',
	              labelClassName: 'col-xs-2',
	              wrapperClassName: 'col-xs-8'
	            })
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.close, className: 'btn-track' },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.editCampaign, className: 'btn-track' },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 560:
/*!************************************************************************!*\
  !*** ./assets/tracking/pages/channel/campaign/select_download_url.jsx ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSelect = __webpack_require__(/*! react-select */ 238);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'select_download_url',
	
	  propTypes: {
	    states: _react2.default.PropTypes.object,
	    setDownloadId: _react2.default.PropTypes.func
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      options: []
	      // downloadId: this.props.downloadId
	    };
	  },
	
	  renderOption: function renderOption(option) {
	    return _react2.default.createElement(
	      'span',
	      { style: option.isGroupName ? { color: 'blue' } : { paddingLeft: '20px' } },
	      option.label
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.buildOptions(this.props.states.channel.downloadUrlNames);
	  },
	  buildOptions: function buildOptions(downloadUrlNames) {
	    var options = [];
	    for (var i = 0, len1 = downloadUrlNames.length; i < len1; i++) {
	      options.push({
	        value: Math.random() + i,
	        label: downloadUrlNames[i].name,
	        disabled: true,
	        isGroupName: true
	      });
	      for (var j = 0, len2 = downloadUrlNames[i].downloadUrls.length; j < len2; j++) {
	        options.push({
	          value: downloadUrlNames[i].downloadUrls[j].id,
	          label: downloadUrlNames[i].downloadUrls[j].name
	        });
	      }
	    }
	    this.setState({ options: options });
	  },
	  handleChange: function handleChange(val) {
	    this.setState({ downloadId: val });
	    this.props.setDownloadId(val);
	  },
	  render: function render() {
	    return _react2.default.createElement(_reactSelect2.default, {
	      placeholder: '请选择下载地址',
	      name: 'downloadId',
	      options: this.state.options,
	      onChange: this.handleChange,
	      value: this.state.downloadId,
	      optionRenderer: this.renderOption
	    });
	  }
	});

/***/ },

/***/ 561:
/*!***********************************************************!*\
  !*** ./assets/tracking/pages/channel/campaign/delete.jsx ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'delete',
	
	  propTypes: {
	    id: _react.PropTypes.string.isRequired,
	    text: _react2.default.PropTypes.string.isRequired,
	    channelId: _react.PropTypes.string.isRequired,
	    appid: _react.PropTypes.string.isRequired,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: 'New'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      showModal: false
	    };
	  },
	  close: function close() {
	    this.setState({ showModal: false });
	  },
	  open: function open() {
	    this.setState({ showModal: true });
	  },
	  delCampaign: function delCampaign() {
	    this.props.actions.channelDelCampaign({
	      uid: window.App.uid,
	      appid: this.props.appid,
	      campaignId: this.props.id,
	      channelId: this.props.channelId
	    });
	    this.close();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'static-modal' },
	      _react2.default.createElement(
	        'a',
	        { onClick: this.open },
	        this.props.text
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { className: 'modal-track', show: this.state.showModal, onHide: this.close },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '删除推广活动'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'form-horizontal' },
	            _react2.default.createElement(
	              'p',
	              null,
	              '确认删除?'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.close, className: 'btn-track' },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.delCampaign, className: 'btn-track' },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 562:
/*!***********************************************!*\
  !*** ./assets/tracking/widgets/td_center.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: "td_center",
	
	  propTypes: {
	    children: _react2.default.PropTypes.any
	  },
	
	  render: function render() {
	    return _react2.default.createElement(
	      "td",
	      { className: "td-center" },
	      this.props.children
	    );
	  }
	});

/***/ },

/***/ 563:
/*!********************************************************!*\
  !*** ./assets/tracking/pages/channel/campaign/new.jsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	var _ajax = __webpack_require__(/*! dejs/lib/ajax */ 234);
	
	var _ajax2 = _interopRequireDefault(_ajax);
	
	var _new_link = __webpack_require__(/*! ../../../widgets/new_link.jsx */ 564);
	
	var _new_link2 = _interopRequireDefault(_new_link);
	
	var _select_download_url = __webpack_require__(/*! ./select_download_url.jsx */ 560);
	
	var _select_download_url2 = _interopRequireDefault(_select_download_url);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'new',
	
	  propTypes: {
	    text: _react2.default.PropTypes.string.isRequired,
	    channelId: _react.PropTypes.string.isRequired,
	    appid: _react.PropTypes.string.isRequired,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: 'New'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      showModal: false
	    };
	  },
	  close: function close() {
	    this.setState({ showModal: false });
	  },
	  open: function open() {
	    var _this = this;
	
	    this.setState({ showModal: true });
	    (0, _ajax2.default)({
	      url: '/createCampaignBefore.do',
	      method: 'post',
	      data: { uid: window.App.uid, appid: this.props.appid, channelId: this.props.channelId },
	      success: function success(res) {
	        _this.setState({
	          id: res.content.campaignId,
	          trackUrl: res.content.trackUrl,
	          postBackLink: res.content.postBackLink
	        });
	      },
	      fail: function fail(err) {
	        console.error(err.toString());
	      }
	    });
	  },
	  createCampaign: function createCampaign() {
	    this.props.actions.channelCreateCampaign({
	      uid: window.App.uid,
	      appid: this.props.appid,
	      campaignId: this.state.id,
	      name: this.refs.name.value.trim(),
	      channelId: this.props.channelId,
	      downloadId: this.state.downloadId,
	      trackUrl: this.refs.trackUrl.value.trim(),
	      params: this.refs.params.value.trim()
	    });
	    this.close();
	  },
	  setDownloadId: function setDownloadId(val) {
	    this.setState({ downloadId: val });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'static-modal' },
	      _react2.default.createElement(_new_link2.default, { text: this.props.text, handleClick: this.open }),
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { className: 'modal-track', show: this.state.showModal, onHide: this.close },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '添加推广活动'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'form-horizontal' },
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement(
	                'label',
	                { className: 'col-sm-3 control-label' },
	                '下载名称'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-sm-8' },
	                _react2.default.createElement('input', { ref: 'name', type: 'text', className: 'form-control' })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement(
	                'label',
	                { className: 'col-sm-3 control-label' },
	                '下载地址'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-sm-6' },
	                _react2.default.createElement(_select_download_url2.default, {
	                  states: this.props.states,
	                  setDownloadId: this.setDownloadId
	                })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-sm-2', style: { paddingLeft: 0, paddingRight: 0 } },
	                _react2.default.createElement(
	                  'a',
	                  { className: 'btn btn-default', href: '#/stores/' + this.props.appid },
	                  '设置地址'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement(
	                'label',
	                { className: 'col-sm-3 control-label' },
	                '广告活动参数'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-sm-8' },
	                _react2.default.createElement('input', { ref: 'params', type: 'text', className: 'form-control' })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement(
	                'label',
	                { className: 'col-sm-3 control-label' },
	                '推广链接'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-sm-8' },
	                _react2.default.createElement('input', {
	                  ref: 'trackUrl',
	                  disabled: 'true',
	                  type: 'textarea',
	                  value: this.state.trackUrl,
	                  className: 'form-control'
	                })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement(
	                'label',
	                { className: 'col-sm-3 control-label' },
	                '激活回调'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-sm-8' },
	                _react2.default.createElement('input', {
	                  ref: 'postBackLink',
	                  disabled: 'true',
	                  type: 'textarea',
	                  value: this.state.postBackLink,
	                  className: 'form-control'
	                })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.close, className: 'btn-track' },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            {
	              bsStyle: 'primary',
	              onClick: this.createCampaign,
	              className: 'btn-track'
	            },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 564:
/*!**********************************************!*\
  !*** ./assets/tracking/widgets/new_link.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'new_link',
	
	  propTypes: {
	    text: _react2.default.PropTypes.string.isRequired,
	    href: _react2.default.PropTypes.string.isRequired,
	    handleClick: _react2.default.PropTypes.func.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: 'New',
	      href: 'javascript:;'
	    };
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'a',
	      { href: this.props.href,
	        className: 'new-link',
	        onClick: this.props.handleClick
	      },
	      _react2.default.createElement('i', { className: 'fa fa-plus' }),
	      this.props.text
	    );
	  }
	});

/***/ },

/***/ 565:
/*!***********************************************!*\
  !*** ./assets/tracking/widgets/th_center.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: "th_center",
	
	  propTypes: {
	    children: _react2.default.PropTypes.any
	  },
	
	  render: function render() {
	    return _react2.default.createElement(
	      "th",
	      { className: "th-center" },
	      this.props.children
	    );
	  }
	});

/***/ },

/***/ 566:
/*!**************************************************!*\
  !*** ./assets/tracking/pages/channel/delete.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'delete',
	
	  propTypes: {
	    text: _react2.default.PropTypes.string.isRequired,
	    id: _react.PropTypes.string.isRequired,
	    appid: _react.PropTypes.string.isRequired,
	    name: _react.PropTypes.string.isRequired,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: 'Delete'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      showModal: false
	    };
	  },
	  close: function close() {
	    this.setState({ showModal: false });
	  },
	  open: function open() {
	    this.setState({ showModal: true });
	  },
	  delChannel: function delChannel() {
	    this.props.actions.channelDelChannel({
	      uid: window.App.uid,
	      appid: this.props.appid,
	      channelId: this.props.id,
	      name: this.props.name
	    });
	    this.close();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'static-modal delete-icon' },
	      _react2.default.createElement(
	        'a',
	        { onClick: this.open, className: 'cicon icon-blue' },
	        _react2.default.createElement('i', { className: 'fa fa-trash' })
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { className: 'modal-track', show: this.state.showModal, onHide: this.close },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '删除广告网络'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'form-horizontal text-center' },
	            _react2.default.createElement(
	              'p',
	              null,
	              '确认删除?'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.close, className: 'btn-track' },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.delChannel, className: 'btn-track' },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 567:
/*!******************************************************!*\
  !*** ./assets/tracking/widgets/text_with_baloon.jsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'text_with_baloon',
	
	  propTypes: {
	    title: _react.PropTypes.string.isRequired,
	    symbol: _react.PropTypes.string,
	    showSymbol: _react.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      symbol: '自',
	      showSymbol: false
	    };
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { style: { display: 'inline-block' } },
	      this.props.title,
	      _react2.default.createElement(
	        'span',
	        {
	          className: 'label label-custom',
	          style: { display: !this.props.showSymbol ? 'none' : 'inline-block' }
	        },
	        this.props.symbol
	      )
	    );
	  }
	});

/***/ },

/***/ 568:
/*!************************************************!*\
  !*** ./assets/tracking/widgets/new_button.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'new_button',
	
	  propTypes: {
	    text: _react2.default.PropTypes.string.isRequired,
	    href: _react2.default.PropTypes.string.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: 'New'
	    };
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'a',
	      { className: 'btn btn-track btn-primary btn-new', href: this.props.href },
	      _react2.default.createElement('i', { className: 'fa fa-plus' }),
	      this.props.text
	    );
	  }
	});

/***/ },

/***/ 569:
/*!******************************************************!*\
  !*** ./assets/tracking/widgets/container_header.jsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: "container_header",
	
	  propTypes: {
	    children: _react2.default.PropTypes.any
	  },
	
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "container-header" },
	      this.props.children
	    );
	  }
	});

/***/ },

/***/ 570:
/*!***********************************************!*\
  !*** ./assets/tracking/pages/channel/add.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	var _custom_radio = __webpack_require__(/*! ./custom_radio.jsx */ 571);
	
	var _custom_radio2 = _interopRequireDefault(_custom_radio);
	
	var _radio = __webpack_require__(/*! ./radio.jsx */ 572);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _new_custom = __webpack_require__(/*! ./new_custom.jsx */ 573);
	
	var _new_custom2 = _interopRequireDefault(_new_custom);
	
	var _search_bar = __webpack_require__(/*! ../../widgets/search_bar.jsx */ 291);
	
	var _search_bar2 = _interopRequireDefault(_search_bar);
	
	var _constants = __webpack_require__(/*! ../../helpers/constants.jsx */ 292);
	
	var Consts = _interopRequireWildcard(_constants);
	
	var _container_header = __webpack_require__(/*! ../../widgets/container_header.jsx */ 569);
	
	var _container_header2 = _interopRequireDefault(_container_header);
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'add',
	
	  propTypes: {
	    params: _react.PropTypes.object,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.props.actions.channelGetChannelNames({
	      uid: window.App.uid,
	      appid: this.props.params.appid
	    });
	  },
	
	  selectChannel: function selectChannel() {
	    this.props.actions.channelSelectChannel({
	      uid: window.App.uid,
	      appid: this.props.params.appid,
	      channelId: this.state.id,
	      name: this.state.name
	    });
	  },
	  clickChannel: function clickChannel(id, name) {
	    this.setState({
	      id: id,
	      name: name
	    });
	  },
	  search: function search(searchKey) {
	    this.props.actions.channelGetChannelNames({
	      uid: window.App.uid,
	      appid: this.props.params.appid,
	      searchKey: searchKey
	    });
	  },
	  back: function back() {
	    history.back();
	  },
	  render: function render() {
	    var _this = this;
	
	    var empty = _react2.default.createElement(
	      'div',
	      { className: 'empty-search' },
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('img', { src: window.App.CONTEXT_PATH + '/assets-build/img/tip-icon.png', alt: '' }),
	        _react2.default.createElement(
	          'p',
	          null,
	          '结果为空'
	        )
	      )
	    );
	
	    var preset = _lodash2.default.chunk(this.props.states.channel.presetChannels, Number('3')).map(function (fourChannels, index) {
	      return _react2.default.createElement(
	        _reactBootstrap.Row,
	        { key: index },
	        fourChannels.map(function (channel) {
	          return _react2.default.createElement(
	            _reactBootstrap.Col,
	            { md: Consts.NUMBER_4, key: channel.channelId },
	            _react2.default.createElement(_radio2.default, {
	              channelId: channel.channelId,
	              name: 'channel',
	              label: channel.name,
	              onClick: _this.clickChannel
	            })
	          );
	        })
	      );
	    });
	
	    var custom = _lodash2.default.chunk(this.props.states.channel.customChannels, Number('3')).map(function (fourChannels, index) {
	      return _react2.default.createElement(
	        _reactBootstrap.Row,
	        { key: index },
	        fourChannels.map(function (channel) {
	          return _react2.default.createElement(
	            _reactBootstrap.Col,
	            { md: Consts.NUMBER_4, key: channel.channelId },
	            _react2.default.createElement(_custom_radio2.default, {
	              channelId: channel.channelId,
	              name: 'channel',
	              label: channel.name,
	              actions: _this.props.actions,
	              onClick: _this.clickChannel
	            })
	          );
	        })
	      );
	    });
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _container_header2.default,
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Row,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { md: Consts.NUMBER_8 },
	            _react2.default.createElement(
	              'div',
	              { className: 'hierachy-nav' },
	              _react2.default.createElement(
	                'span',
	                null,
	                '层级结构：'
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { href: '#/channels/' + this.props.params.appid },
	                  '管理广告活动'
	                )
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                '>'
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                '添加广告网络'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { md: Consts.NUMBER_4, className: 'text-right' },
	            _react2.default.createElement(_search_bar2.default, { search: this.search })
	          )
	        )
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Row,
	        { className: 'add-form' },
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { md: Consts.NUMBER_6 },
	          _react2.default.createElement(
	            _reactBootstrap.Panel,
	            { header: '默认广告网络', className: 'panel-track' },
	            !this.props.states.channel.presetChannels.length ? empty : preset
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { md: Consts.NUMBER_6 },
	          _react2.default.createElement(
	            _reactBootstrap.Panel,
	            { header: '自定义广告网络', className: 'panel-track' },
	            _react2.default.createElement(_new_custom2.default, {
	              text: '添加自定义广告网络',
	              actions: this.props.actions
	            }),
	            !this.props.states.channel.customChannels.length ? empty : custom
	          )
	        )
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Row,
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { md: Consts.NUMBER_4, mdOffset: Consts.NUMBER_8, className: 'add-form-footer' },
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { className: 'btn-track pull-right', onClick: this.back },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            {
	              bsStyle: 'primary',
	              onClick: this.selectChannel,
	              className: 'btn-track pull-right btn-primary-track'
	            },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 571:
/*!********************************************************!*\
  !*** ./assets/tracking/pages/channel/custom_radio.jsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: "custom_radio",
	
	  propTypes: {
	    label: _react2.default.PropTypes.string.isRequired,
	    name: _react2.default.PropTypes.string.isRequired,
	    channelId: _react2.default.PropTypes.string.isRequired,
	    onClick: _react2.default.PropTypes.func,
	    actions: _react2.default.PropTypes.object,
	    states: _react2.default.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      showDelete: false
	    };
	  },
	
	  mouseOver: function mouseOver() {
	    this.setState({ showDelete: true });
	  },
	
	  mouseOut: function mouseOut() {
	    this.setState({ showDelete: false });
	  },
	
	  delCustom: function delCustom() {
	    this.props.actions.channelDelCustomChannel({
	      uid: window.App.uid,
	      channelId: this.props.channelId
	    });
	  },
	  handleClick: function handleClick() {
	    this.props.onClick(this.props.channelId, this.props.label);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      {
	        className: "radio item-radio-custom",
	        onMouseOver: this.mouseOver,
	        onMouseOut: this.mouseOut
	      },
	      _react2.default.createElement(
	        "label",
	        { className: "vertical-align" },
	        _react2.default.createElement("input", {
	          onClick: this.handleClick,
	          type: "radio",
	          name: this.props.name,
	          value: this.props.channelId
	        }),
	        this.props.label
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "vertical-align delete-icon" },
	        _react2.default.createElement("i", {
	          style: { display: this.state.showDelete ? 'inline-block' : 'none' },
	          onClick: this.delCustom,
	          className: "fa fa-times"
	        })
	      )
	    );
	  }
	});

/***/ },

/***/ 572:
/*!*************************************************!*\
  !*** ./assets/tracking/pages/channel/radio.jsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: "radio",
	
	  propTypes: {
	    label: _react2.default.PropTypes.string.isRequired,
	    name: _react2.default.PropTypes.string.isRequired,
	    channelId: _react2.default.PropTypes.string.isRequired,
	    onClick: _react2.default.PropTypes.func
	  },
	
	  handleClick: function handleClick() {
	    this.props.onClick(this.props.channelId, this.props.label);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { onClick: this.handleClick, className: "radio" },
	      _react2.default.createElement(
	        "label",
	        null,
	        _react2.default.createElement("input", {
	          type: "radio",
	          name: this.props.name,
	          value: this.props.channelId
	        }),
	        this.props.label
	      )
	    );
	  }
	});

/***/ },

/***/ 573:
/*!******************************************************!*\
  !*** ./assets/tracking/pages/channel/new_custom.jsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'new_custom',
	
	  propTypes: {
	    text: _react2.default.PropTypes.string.isRequired,
	    actions: _react2.default.PropTypes.object,
	    states: _react2.default.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: 'New'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      showModal: false
	    };
	  },
	  close: function close() {
	    this.setState({ showModal: false });
	  },
	  open: function open() {
	    this.setState({ showModal: true });
	  },
	  createCustomChannel: function createCustomChannel() {
	    this.props.actions.channelCreateCustomChannel({
	      uid: window.App.uid,
	      name: this.refs.name.getValue().trim()
	    });
	    this.close();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'static-modal' },
	      _react2.default.createElement(
	        'a',
	        { className: 'new-lick', onClick: this.open },
	        _react2.default.createElement('i', { className: 'fa fa-plus' }),
	        this.props.text
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { className: 'modal-track', show: this.state.showModal, onHide: this.close },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '新建自定义广告网络'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'form-horizontal' },
	            _react2.default.createElement(_reactBootstrap.Input, {
	              ref: 'name',
	              type: 'text',
	              label: '广告网络名称',
	              labelClassName: 'col-xs-3',
	              wrapperClassName: 'col-xs-8'
	            })
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.close, className: 'btn-track' },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.createCustomChannel, className: 'btn-track' },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 574:
/*!***********************************************!*\
  !*** ./assets/tracking/pages/store/index.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ./store.jsx */ 575);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _new_button = __webpack_require__(/*! ../../widgets/new_button.jsx */ 568);
	
	var _new_button2 = _interopRequireDefault(_new_button);
	
	var _container_header = __webpack_require__(/*! ../../widgets/container_header.jsx */ 569);
	
	var _container_header2 = _interopRequireDefault(_container_header);
	
	var _pagination = __webpack_require__(/*! ../../widgets/pagination.jsx */ 293);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'store',
	
	  propTypes: {
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object,
	    params: _react.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      currentPageID: 1,
	      pageSize: 10
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.props.actions.storeGetStores({
	      uid: window.App.uid,
	      appid: this.props.params.appid,
	      downloadUrlsInitSize: 10
	    });
	  },
	
	  onPageChange: function onPageChange(pageID) {
	    this.setState({ currentPageID: pageID });
	    this.props.actions.storeGetStores({
	      uid: window.App.uid,
	      appid: this.props.params.appid,
	      pageID: pageID,
	      pageSize: this.state.pageSize
	    });
	  },
	  render: function render() {
	    var _this = this;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _container_header2.default,
	        null,
	        _react2.default.createElement(_new_button2.default, { href: '#/stores/add/' + this.props.params.appid, text: '添加下载商店' })
	      ),
	      this.props.states.store.items.map(function (store) {
	        return _react2.default.createElement(_store2.default, {
	          key: store.id,
	          id: store.id,
	          name: store.name,
	          downloadUrls: store.downloadUrls,
	          type: store.type,
	          appid: _this.props.params.appid,
	          actions: _this.props.actions,
	          states: _this.props.states,
	          totalRecord: store.totalRecord
	        });
	      }),
	      _react2.default.createElement(_pagination2.default, {
	        total: this.props.states.store.totalRecord,
	        current: this.state.currentPageID,
	        pageSize: this.state.pageSize,
	        onChange: this.onPageChange
	      })
	    );
	  }
	});

/***/ },

/***/ 575:
/*!***********************************************!*\
  !*** ./assets/tracking/pages/store/store.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	var _download_url = __webpack_require__(/*! ./download_url/download_url.jsx */ 576);
	
	var _download_url2 = _interopRequireDefault(_download_url);
	
	var _new = __webpack_require__(/*! ./download_url/new.jsx */ 580);
	
	var _new2 = _interopRequireDefault(_new);
	
	var _delete = __webpack_require__(/*! ./delete.jsx */ 581);
	
	var _delete2 = _interopRequireDefault(_delete);
	
	var _th_center = __webpack_require__(/*! ../../widgets/th_center.jsx */ 565);
	
	var _th_center2 = _interopRequireDefault(_th_center);
	
	var _text_with_baloon = __webpack_require__(/*! ../../widgets/text_with_baloon.jsx */ 567);
	
	var _text_with_baloon2 = _interopRequireDefault(_text_with_baloon);
	
	var _pagination = __webpack_require__(/*! ../../widgets/pagination.jsx */ 293);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'store',
	
	  propTypes: {
	    id: _react.PropTypes.number.isRequired,
	    name: _react.PropTypes.string.isRequired,
	    downloadUrls: _react.PropTypes.array.isRequired,
	    appid: _react.PropTypes.string.isRequired,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object,
	    totalRecord: _react.PropTypes.number,
	    type: _react.PropTypes.number.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      downloadUrls: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      currentPageID: 1,
	      pageSize: 10
	    };
	  },
	  onPageChange: function onPageChange(pageID) {
	    this.setState({ currentPageID: pageID });
	    this.props.actions.storeGetDownloadUrls({
	      uid: window.App.uid,
	      appid: this.props.appid,
	      storeId: this.props.id,
	      pageID: pageID,
	      pageSize: this.state.pageSize
	    });
	  },
	  render: function render() {
	    var _this = this;
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'panel panel-track' },
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-heading' },
	        _react2.default.createElement(_text_with_baloon2.default, { title: this.props.name, showSymbol: this.props.type }),
	        _react2.default.createElement(_delete2.default, {
	          id: this.props.id,
	          appid: this.props.appid,
	          actions: this.props.actions
	        })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-body' },
	        _react2.default.createElement(
	          _reactBootstrap.Table,
	          { hover: true },
	          _react2.default.createElement(
	            'thead',
	            null,
	            _react2.default.createElement(
	              'tr',
	              null,
	              _react2.default.createElement(
	                _th_center2.default,
	                null,
	                '命名'
	              ),
	              _react2.default.createElement(
	                _th_center2.default,
	                null,
	                '下载链接'
	              ),
	              _react2.default.createElement(
	                _th_center2.default,
	                null,
	                '操作'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'tbody',
	            null,
	            this.props.downloadUrls.map(function (url) {
	              return _react2.default.createElement(_download_url2.default, {
	                key: url.id,
	                id: url.id,
	                name: url.name,
	                link: url.link,
	                appid: _this.props.appid,
	                storeId: _this.props.id,
	                actions: _this.props.actions,
	                states: _this.props.states
	              });
	            })
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-footer' },
	        _react2.default.createElement(_pagination2.default, {
	          total: this.props.totalRecord,
	          current: this.state.currentPageID,
	          pageSize: this.state.pageSize,
	          onChange: this.onPageChange
	        }),
	        _react2.default.createElement(_new2.default, {
	          text: '添加下载链接',
	          appid: this.props.appid,
	          storeId: this.props.id,
	          actions: this.props.actions,
	          states: this.props.states
	        })
	      )
	    );
	  }
	});

/***/ },

/***/ 576:
/*!*******************************************************************!*\
  !*** ./assets/tracking/pages/store/download_url/download_url.jsx ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _edit = __webpack_require__(/*! ./edit.jsx */ 577);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _delete = __webpack_require__(/*! ./delete.jsx */ 578);
	
	var _delete2 = _interopRequireDefault(_delete);
	
	var _td_center = __webpack_require__(/*! ../../../widgets/td_center.jsx */ 562);
	
	var _td_center2 = _interopRequireDefault(_td_center);
	
	var _td_operations = __webpack_require__(/*! ../../../widgets/td_operations.jsx */ 579);
	
	var _td_operations2 = _interopRequireDefault(_td_operations);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'download_url',
	
	  propTypes: {
	    id: _react.PropTypes.number.isRequired,
	    name: _react2.default.PropTypes.string.isRequired,
	    link: _react2.default.PropTypes.string.isRequired,
	    appid: _react.PropTypes.string.isRequired,
	    storeId: _react.PropTypes.number.isRequired,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  render: function render() {
	    return _react2.default.createElement(
	      'tr',
	      null,
	      _react2.default.createElement(
	        _td_center2.default,
	        null,
	        this.props.name
	      ),
	      _react2.default.createElement(
	        _td_center2.default,
	        null,
	        this.props.link
	      ),
	      _react2.default.createElement(
	        _td_center2.default,
	        null,
	        _react2.default.createElement(
	          _td_operations2.default,
	          null,
	          _react2.default.createElement(_edit2.default, {
	            id: this.props.id,
	            text: '编辑',
	            name: this.props.name,
	            link: this.props.link,
	            appid: this.props.appid,
	            storeId: this.props.storeId,
	            actions: this.props.actions
	          }),
	          _react2.default.createElement(_delete2.default, {
	            id: this.props.id,
	            text: '删除',
	            name: this.props.name,
	            appid: this.props.appid,
	            storeId: this.props.storeId,
	            actions: this.props.actions
	          })
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 577:
/*!***********************************************************!*\
  !*** ./assets/tracking/pages/store/download_url/edit.jsx ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'edit',
	
	  propTypes: {
	    id: _react2.default.PropTypes.number.isRequired,
	    text: _react2.default.PropTypes.string.isRequired,
	    name: _react2.default.PropTypes.string.isRequired,
	    link: _react2.default.PropTypes.string.isRequired,
	    storeId: _react.PropTypes.number.isRequired,
	    appid: _react.PropTypes.string.isRequired,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: 'New'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      showModal: false,
	      name: this.props.name,
	      link: this.props.link
	    };
	  },
	  close: function close() {
	    this.setState({ showModal: false });
	  },
	  open: function open() {
	    this.setState({ showModal: true });
	  },
	  handleNameChange: function handleNameChange() {
	    this.setState({ name: this.refs.name.getValue() });
	  },
	  handleLinkChange: function handleLinkChange() {
	    this.setState({ link: this.refs.link.getValue() });
	  },
	  editDownloadUrl: function editDownloadUrl() {
	    this.props.actions.storeEditDownloadUrl({
	      id: this.props.id,
	      appid: this.props.appid,
	      storeId: this.props.storeId,
	      name: this.state.name,
	      link: this.state.link,
	      uid: window.App.uid
	    });
	    this.close();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'static-modal pull-left' },
	      _react2.default.createElement(
	        'a',
	        { onClick: this.open },
	        this.props.text
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { className: 'modal-track', show: this.state.showModal, onHide: this.close },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '修改下载链接'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'form-horizontal' },
	            _react2.default.createElement(_reactBootstrap.Input, {
	              ref: 'name',
	              type: 'text',
	              label: '下载名称',
	              labelClassName: 'col-xs-2',
	              wrapperClassName: 'col-xs-10',
	              value: this.state.name,
	              onChange: this.handleNameChange
	            }),
	            _react2.default.createElement(_reactBootstrap.Input, {
	              ref: 'link',
	              type: 'text',
	              label: '下载链接',
	              labelClassName: 'col-xs-2',
	              wrapperClassName: 'col-xs-10',
	              value: this.state.link,
	              onChange: this.handleLinkChange
	            })
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.close, className: 'btn-track' },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.editDownloadUrl, className: 'btn-track' },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 578:
/*!*************************************************************!*\
  !*** ./assets/tracking/pages/store/download_url/delete.jsx ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'delete',
	
	  propTypes: {
	    text: _react2.default.PropTypes.string.isRequired,
	    id: _react.PropTypes.number.isRequired,
	    storeId: _react.PropTypes.number.isRequired,
	    appid: _react.PropTypes.string.isRequired,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: 'Delete'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      showModal: false
	    };
	  },
	  close: function close() {
	    this.setState({ showModal: false });
	  },
	  open: function open() {
	    this.setState({ showModal: true });
	  },
	  delDownloadUrl: function delDownloadUrl() {
	    this.props.actions.storeDelDownloadUrl({
	      id: this.props.id,
	      appid: this.props.appid,
	      uid: window.App.uid,
	      storeId: this.props.storeId
	    });
	    this.close();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'static-modal' },
	      _react2.default.createElement(
	        'a',
	        { onClick: this.open },
	        this.props.text
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { className: 'modal-track', show: this.state.showModal, onHide: this.close },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '删除下载链接'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'form-horizontal' },
	            _react2.default.createElement(
	              'p',
	              null,
	              '确认删除?'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.close, className: 'btn-track' },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.delDownloadUrl, className: 'btn-track' },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 579:
/*!***************************************************!*\
  !*** ./assets/tracking/widgets/td_operations.jsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: "td_operations",
	
	  propTypes: {
	    children: _react2.default.PropTypes.any
	  },
	
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "td-operations" },
	      this.props.children
	    );
	  }
	});

/***/ },

/***/ 580:
/*!**********************************************************!*\
  !*** ./assets/tracking/pages/store/download_url/new.jsx ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	var _new_link = __webpack_require__(/*! ../../../widgets/new_link.jsx */ 564);
	
	var _new_link2 = _interopRequireDefault(_new_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'new',
	
	  propTypes: {
	    text: _react2.default.PropTypes.string.isRequired,
	    storeId: _react.PropTypes.number.isRequired,
	    appid: _react.PropTypes.string.isRequired,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: 'New'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return { showModal: false };
	  },
	  close: function close() {
	    this.setState({ showModal: false });
	  },
	  open: function open() {
	    this.setState({ showModal: true });
	  },
	  createDownloadUrl: function createDownloadUrl() {
	    this.props.actions.storeCreateDownloadUrl({
	      appid: this.props.appid,
	      storeId: this.props.storeId,
	      name: this.refs.name.getValue().trim(),
	      link: this.refs.link.getValue().trim(),
	      uid: window.App.uid
	    });
	    this.close();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'static-modal' },
	      _react2.default.createElement(_new_link2.default, { text: this.props.text, handleClick: this.open }),
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { className: 'modal-track', show: this.state.showModal, onHide: this.close },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '添加下载链接'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'form-horizontal' },
	            _react2.default.createElement(_reactBootstrap.Input, {
	              ref: 'name',
	              type: 'text',
	              label: '下载名称',
	              labelClassName: 'col-xs-2',
	              wrapperClassName: 'col-xs-10'
	            }),
	            _react2.default.createElement(_reactBootstrap.Input, {
	              ref: 'link',
	              type: 'text',
	              label: '下载链接',
	              labelClassName: 'col-xs-2',
	              wrapperClassName: 'col-xs-10'
	            })
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.close, className: 'btn-track' },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            {
	              bsStyle: 'primary',
	              onClick: this.createDownloadUrl,
	              className: 'btn-track'
	            },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 581:
/*!************************************************!*\
  !*** ./assets/tracking/pages/store/delete.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'delete',
	
	  propTypes: {
	    text: _react2.default.PropTypes.string.isRequired,
	    id: _react.PropTypes.number.isRequired,
	    appid: _react.PropTypes.string.isRequired,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: 'Delete'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      showModal: false
	    };
	  },
	  close: function close() {
	    this.setState({ showModal: false });
	  },
	  open: function open() {
	    this.setState({ showModal: true });
	  },
	  delStore: function delStore() {
	    this.props.actions.storeDelStore({
	      uid: window.App.uid,
	      appid: this.props.appid,
	      id: this.props.id
	    });
	    this.close();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'static-modal pull-right' },
	      _react2.default.createElement(
	        'a',
	        { onClick: this.open, className: 'cicon icon-blue' },
	        _react2.default.createElement('i', { className: 'fa fa-trash' })
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { className: 'modal-track', show: this.state.showModal, onHide: this.close },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '删除App商店'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'form-horizontal text-center' },
	            _react2.default.createElement(
	              'p',
	              null,
	              '确认删除?'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.close, className: 'btn-track' },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.delStore, className: 'btn-track' },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 582:
/*!*********************************************!*\
  !*** ./assets/tracking/pages/store/add.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	var _custom_radio = __webpack_require__(/*! ./custom_radio.jsx */ 583);
	
	var _custom_radio2 = _interopRequireDefault(_custom_radio);
	
	var _radio = __webpack_require__(/*! ./radio.jsx */ 584);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _new_custom = __webpack_require__(/*! ./new_custom.jsx */ 585);
	
	var _new_custom2 = _interopRequireDefault(_new_custom);
	
	var _search_bar = __webpack_require__(/*! ../../widgets/search_bar.jsx */ 291);
	
	var _search_bar2 = _interopRequireDefault(_search_bar);
	
	var _constants = __webpack_require__(/*! ../../helpers/constants.jsx */ 292);
	
	var Consts = _interopRequireWildcard(_constants);
	
	var _container_header = __webpack_require__(/*! ../../widgets/container_header.jsx */ 569);
	
	var _container_header2 = _interopRequireDefault(_container_header);
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'add',
	
	  propTypes: {
	    params: _react.PropTypes.object,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.props.actions.storeGetStoreNames({
	      uid: window.App.uid,
	      appid: this.props.params.appid
	    });
	  },
	
	  selectStore: function selectStore() {
	    this.props.actions.storeSelectStore({
	      id: this.state.id,
	      uid: window.App.uid,
	      appid: this.props.params.appid
	    });
	  },
	  clickStore: function clickStore(id) {
	    this.setState({ id: id });
	  },
	  search: function search(searchKey) {
	    this.props.actions.storeGetStoreNames({
	      uid: window.App.uid,
	      appid: this.props.params.appid,
	      searchKey: searchKey
	    });
	  },
	  back: function back() {
	    history.back();
	  },
	  render: function render() {
	    var _this = this;
	
	    var empty = _react2.default.createElement(
	      'div',
	      { className: 'empty-search' },
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('img', { src: window.App.CONTEXT_PATH + '/assets-build/img/tip-icon.png', alt: '' }),
	        _react2.default.createElement(
	          'p',
	          null,
	          '结果为空'
	        )
	      )
	    );
	
	    var preset = _lodash2.default.chunk(this.props.states.store.presetStores, Number('3')).map(function (fourStores, index) {
	      return _react2.default.createElement(
	        _reactBootstrap.Row,
	        { key: index },
	        fourStores.map(function (store) {
	          return _react2.default.createElement(
	            _reactBootstrap.Col,
	            { key: store.id, md: Number('4') },
	            _react2.default.createElement(_radio2.default, {
	              id: store.id,
	              name: 'store',
	              label: store.name,
	              onClick: _this.clickStore
	            })
	          );
	        })
	      );
	    });
	
	    var custom = _lodash2.default.chunk(this.props.states.store.customStores, Number('3')).map(function (fourStores, index) {
	      return _react2.default.createElement(
	        _reactBootstrap.Row,
	        { key: index },
	        fourStores.map(function (store) {
	          return _react2.default.createElement(
	            _reactBootstrap.Col,
	            { md: Number('4'), key: store.id },
	            _react2.default.createElement(_custom_radio2.default, {
	              storeId: store.id,
	              name: 'store',
	              label: store.name,
	              actions: _this.props.actions,
	              onClick: _this.clickStore
	            })
	          );
	        })
	      );
	    });
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _container_header2.default,
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Row,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { md: Consts.NUMBER_8 },
	            _react2.default.createElement(
	              'div',
	              { className: 'hierachy-nav' },
	              _react2.default.createElement(
	                'span',
	                null,
	                '层级结构：'
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { href: '#/stores/' + this.props.params.appid },
	                  '管理下载商店'
	                )
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                '>'
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                '添加下载商店'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { md: Consts.NUMBER_4, className: 'text-right' },
	            _react2.default.createElement(_search_bar2.default, { search: this.search })
	          )
	        )
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Row,
	        { className: 'add-form' },
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { md: Consts.NUMBER_6 },
	          _react2.default.createElement(
	            _reactBootstrap.Panel,
	            { header: '默认下载商店', className: 'panel-track' },
	            !this.props.states.store.presetStores.length ? empty : preset
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { md: Consts.NUMBER_6 },
	          _react2.default.createElement(
	            _reactBootstrap.Panel,
	            { header: '自定义商店', className: 'panel-track' },
	            _react2.default.createElement(_new_custom2.default, {
	              text: '添加自定义商店',
	              states: this.props.states,
	              actions: this.props.actions
	            }),
	            !this.props.states.store.customStores.length ? empty : custom
	          )
	        )
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Row,
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          {
	            md: Consts.NUMBER_4,
	            mdOffset: Consts.NUMBER_8,
	            className: 'add-form-footer'
	          },
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { className: 'btn-track pull-right', onClick: this.back },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            {
	              bsStyle: 'primary',
	              className: 'btn-track pull-right btn-primary-track',
	              onClick: this.selectStore },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 583:
/*!******************************************************!*\
  !*** ./assets/tracking/pages/store/custom_radio.jsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: "custom_radio",
	
	  propTypes: {
	    label: _react2.default.PropTypes.string.isRequired,
	    name: _react2.default.PropTypes.string.isRequired,
	    storeId: _react2.default.PropTypes.number.isRequired,
	    onClick: _react2.default.PropTypes.func,
	    actions: _react2.default.PropTypes.object,
	    states: _react2.default.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      showDelete: false
	    };
	  },
	
	  mouseOver: function mouseOver() {
	    this.setState({ showDelete: true });
	  },
	
	  mouseOut: function mouseOut() {
	    this.setState({ showDelete: false });
	  },
	
	  delCustom: function delCustom() {
	    this.props.actions.storeDelCustomStore({
	      id: this.props.storeId,
	      uid: window.App.uid
	    });
	  },
	  handleClick: function handleClick() {
	    this.props.onClick(this.props.storeId);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "radio item-radio-custom",
	        onMouseOver: this.mouseOver,
	        onMouseOut: this.mouseOut
	      },
	      _react2.default.createElement(
	        "label",
	        null,
	        _react2.default.createElement("input", {
	          onClick: this.handleClick,
	          type: "radio",
	          name: this.props.name,
	          value: this.props.storeId
	        }),
	        this.props.label
	      ),
	      _react2.default.createElement(
	        "div",
	        {
	          className: "raido-delete-icon",
	          style: { display: this.state.showDelete ? 'inline-block' : 'none' },
	          onClick: this.delCustom
	        },
	        _react2.default.createElement("i", { className: "fa fa-times" })
	      )
	    );
	  }
	});

/***/ },

/***/ 584:
/*!***********************************************!*\
  !*** ./assets/tracking/pages/store/radio.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: "radio",
	
	  propTypes: {
	    id: _react2.default.PropTypes.number.isRequired,
	    label: _react2.default.PropTypes.string.isRequired,
	    name: _react2.default.PropTypes.string.isRequired,
	    onClick: _react2.default.PropTypes.func
	  },
	
	  handleClick: function handleClick() {
	    this.props.onClick(this.props.id);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { onClick: this.handleClick, className: "radio" },
	      _react2.default.createElement(
	        "label",
	        null,
	        _react2.default.createElement("input", {
	          type: "radio",
	          name: this.props.name,
	          value: this.props.id
	        }),
	        this.props.label
	      )
	    );
	  }
	});

/***/ },

/***/ 585:
/*!****************************************************!*\
  !*** ./assets/tracking/pages/store/new_custom.jsx ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'new_custom',
	
	  propTypes: {
	    text: _react2.default.PropTypes.string.isRequired,
	    actions: _react2.default.PropTypes.object,
	    states: _react2.default.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: 'New'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      showModal: false
	    };
	  },
	  close: function close() {
	    this.setState({ showModal: false });
	  },
	  open: function open() {
	    this.setState({ showModal: true });
	  },
	  createCustom: function createCustom() {
	    this.props.actions.storeCreateCustomStore({
	      uid: window.App.uid,
	      name: this.refs.name.getValue().trim(),
	      homePage: this.refs.mainUrl.getValue().trim()
	    });
	    this.close();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'static-modal' },
	      _react2.default.createElement(
	        'a',
	        { className: 'new-link', onClick: this.open },
	        _react2.default.createElement('i', { className: 'fa fa-plus' }),
	        this.props.text
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { className: 'modal-track', show: this.state.showModal, onHide: this.close },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            '新建自定义商店'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'form',
	            { className: 'form-horizontal' },
	            _react2.default.createElement(_reactBootstrap.Input, {
	              ref: 'name',
	              type: 'text',
	              label: '商店名称',
	              labelClassName: 'col-xs-3',
	              wrapperClassName: 'col-xs-9'
	            }),
	            _react2.default.createElement(_reactBootstrap.Input, {
	              ref: 'mainUrl',
	              type: 'text',
	              label: '商店主站地址',
	              labelClassName: 'col-xs-3',
	              wrapperClassName: 'col-xs-9'
	            })
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.close, className: 'btn-track' },
	            '取消'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'primary', onClick: this.createCustom, className: 'btn-track' },
	            '确定'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 586:
/*!********************************************************!*\
  !*** ./assets/tracking/pages/app/create_app/index.jsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _step_one = __webpack_require__(/*! ./step_one.jsx */ 587);
	
	var _step_one2 = _interopRequireDefault(_step_one);
	
	var _step_two = __webpack_require__(/*! ./step_two.jsx */ 589);
	
	var _step_two2 = _interopRequireDefault(_step_two);
	
	var _ajax = __webpack_require__(/*! dejs/lib/ajax */ 234);
	
	var _ajax2 = _interopRequireDefault(_ajax);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'create_app',
	
	  propTypes: {
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      step: '1',
	      appInfo: {},
	      activatedAmount: 0
	    };
	  },
	  getAppStatus: function getAppStatus() {
	    var _this = this;
	
	    (0, _ajax2.default)({
	      method: 'POST',
	      url: '/getAppStatus.do',
	      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
	      data: { uid: App.uid, appid: this.state.appInfo.appid },
	      success: function success(msg) {
	        if (_this.isMounted()) {
	          _this.setState({ activatedAmount: msg.content.activatedAmount });
	        }
	      }
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var currentCreateState = nextProps.states.app.createState;
	    if (currentCreateState === 'success') {
	      this.setState({ step: '2' });
	      if (this.props.states.app.importData) {
	        this.setState({ appInfo: Object.assign({ appid: nextProps.states.app.importData.appid }, this.state.appInfo) });
	      } else {
	        this.setState({ appInfo: Object.assign({ appid: nextProps.states.app.created.content.appid }, this.state.appInfo) });
	      }
	    }
	  },
	  createApp: function createApp(param, typeName) {
	    if (this.props.states.app.importData) {
	      this.props.actions.appImportApp(Object.assign({ uid: App.uid, appid: this.props.states.app.importData.appid }, param));
	    } else {
	      this.props.actions.appCreate(Object.assign({ uid: App.uid }, param));
	    }
	    this.setState({ appInfo: Object.assign({ typeName: typeName }, param) });
	  },
	  toStepTree: function toStepTree() {
	    this.setState({ step: '3' });
	    this.getAppStatus();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'wrapper-content' },
	      _react2.default.createElement(
	        'ul',
	        { className: 'nav nav-step nav-justified' },
	        _react2.default.createElement(
	          'li',
	          { className: this.state.step === '1' ? 'activeStepTitle' : 'stepTitle' },
	          _react2.default.createElement(
	            'a',
	            { href: 'javascript:;' },
	            _react2.default.createElement('i', { className: 'fa fa-pencil-square-o' }),
	            '建立游戏'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          { className: this.state.step === '2' ? 'activeStepTitle' : 'stepTitle' },
	          _react2.default.createElement(
	            'a',
	            { href: 'javascript:;' },
	            _react2.default.createElement('i', { className: 'fa fa-list-alt' }),
	            '进行集成'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { display: this.state.step === '1' ? 'block' : 'none' } },
	        _react2.default.createElement(_step_one2.default, { createFn: this.createApp, importData: this.props.states.app.importData })
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { display: this.state.step === '2' ? 'block' : 'none' } },
	        _react2.default.createElement(_step_two2.default, { toStepTreeFn: this.toStepTree, appInfo: this.state.appInfo, appid: this.state.appInfo.appid })
	      ),
	      _react2.default.createElement('a', { href: 'http://crm2.qq.com/page/portalpage/wpa.php?uin=4006482833&f=1&ty=1&aty=0&a=&from=6', className: 'qq-customer-service', title: 'qq', target: 'blank' })
	    );
	  }
	});
	// <li className={this.state.step === '3' ? 'active' : ''}>
	//   <a href="javascript:;"><span><span className="step-icon step-three-icon"></span><span className="step-title">接入测试</span></span></a>
	// </li>
	// <div style={{display: this.state.step === '3' ? 'block' : 'none'}}>
	//   <StepThree appInfo={this.state.appInfo} activatedAmount={this.state.activatedAmount} />
	// </div>

/***/ },

/***/ 587:
/*!***********************************************************!*\
  !*** ./assets/tracking/pages/app/create_app/step_one.jsx ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _app_handle = __webpack_require__(/*! ./app_handle.jsx */ 547);
	
	var _app_handle2 = _interopRequireDefault(_app_handle);
	
	var _submit_button = __webpack_require__(/*! ../../../components/submit_button.jsx */ 588);
	
	var _submit_button2 = _interopRequireDefault(_submit_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'step_one',
	
	  propTypes: {
	    createFn: _react.PropTypes.func.isRequired,
	    importData: _react.PropTypes.object
	  },
	
	  createApp: function createApp(param, typeName) {
	    this.props.createFn(param, typeName);
	  },
	  submit: function submit() {
	    var component = this.refs.handler;
	    component.commitSubmit.call(component);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'wrapper-body' },
	      _react2.default.createElement(_app_handle2.default, { handleType: 'create', handleFn: this.createApp, ref: 'handler', importData: this.props.importData }),
	      _react2.default.createElement('hr', { style: { marginTop: 50 } }),
	      _react2.default.createElement(
	        'div',
	        { className: 'form-horizontal  de-narrow-form' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group', style: { textAlign: 'center' } },
	          _react2.default.createElement(
	            'div',
	            { className: 'btn-group' },
	            _react2.default.createElement(_submit_button2.default, { text: '下一步', submit: this.submit }),
	            _react2.default.createElement(
	              'a',
	              { href: '', className: 'custom-btn-short btn btn-default' },
	              '取消'
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 588:
/*!******************************************************!*\
  !*** ./assets/tracking/components/submit_button.jsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'submit_button',
	
	  propTypes: {
	    submit: _react.PropTypes.func.isRequired,
	    text: _react.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: '提交'
	    };
	  },
	  handleClick: function handleClick() {
	    this.props.submit();
	    this.refs.button.disabled = true;
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'button',
	      {
	        ref: 'button',
	        className: 'btn btn-primary custom-btn-long',
	        style: { marginRight: '10px' },
	        onClick: this.handleClick
	      },
	      this.props.text
	    );
	  }
	});

/***/ },

/***/ 589:
/*!***********************************************************!*\
  !*** ./assets/tracking/pages/app/create_app/step_two.jsx ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 301);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'step_two',
	
	  propTypes: {
	    toStepTreeFn: _react.PropTypes.func.isRequired,
	    appInfo: _react.PropTypes.object.isRequired,
	    appid: _react.PropTypes.string
	  },
	
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'wrapper-body create-app' },
	      _react2.default.createElement(
	        'div',
	        { className: 'clearfix' },
	        _react2.default.createElement('div', { className: this.props.appInfo.category === 1 ? 'pull-left app-icon' : 'pull-left game-icon' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'title' },
	          _react2.default.createElement(
	            'span',
	            { className: 'name' },
	            _react2.default.createElement(
	              'b',
	              null,
	              this.props.appInfo.name
	            )
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            '【',
	            this.props.appInfo.typeName,
	            '】'
	          )
	        )
	      ),
	      _react2.default.createElement('hr', { style: { marginBottom: 30 } }),
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-6' },
	          _react2.default.createElement(
	            'div',
	            { className: 'form-horizontal' },
	            _react2.default.createElement(_reactBootstrap.Input, { type: 'text', label: 'APPID:', value: this.props.appInfo.appid, labelClassName: 'col-xs-2', wrapperClassName: 'col-xs-9', disabled: true }),
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement(
	                'label',
	                { className: 'control-label col-xs-2' },
	                '下载:'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-xs-9' },
	                _react2.default.createElement(
	                  'a',
	                  { href: 'http://wiki.dataeye.com/tracking.html', target: '_blank', className: 'col-xs-12 btn btn-default' },
	                  'SDK'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement(
	                'div',
	                { className: 'col-xs-offset-2 col-xs-9' },
	                '查看',
	                _react2.default.createElement(
	                  'a',
	                  { href: 'http://wiki.dataeye.com/tracking.html', target: '_blank' },
	                  '“接入说明”'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement('div', { className: 'col-md-6' })
	      ),
	      _react2.default.createElement('hr', { style: { marginTop: 50 } }),
	      _react2.default.createElement(
	        'div',
	        { className: 'form-group col-md-6' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-offset-2' },
	          _react2.default.createElement(
	            'a',
	            { className: 'btn btn-primary custom-btn-long', href: '#/realtime/' + this.props.appid },
	            '查看报表'
	          )
	        )
	      )
	    );
	  }
	});
	// <Button bsStyle="primary" className="custom-btn-long" onClick={this.props.toStepTreeFn}>查看报表</Button>

/***/ },

/***/ 590:
/*!**********************************************!*\
  !*** ./assets/tracking/pages/core/index.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _container = __webpack_require__(/*! ../../components/mixed_panel/container.jsx */ 591);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _utils = __webpack_require__(/*! dejs/lib/utils */ 592);
	
	var utils = _interopRequireWildcard(_utils);
	
	var _tips = __webpack_require__(/*! ../../components/tips.jsx */ 608);
	
	var _tips2 = _interopRequireDefault(_tips);
	
	var _date_filter = __webpack_require__(/*! ../../components/date_filter.jsx */ 609);
	
	var _date_filter2 = _interopRequireDefault(_date_filter);
	
	var _tips3 = __webpack_require__(/*! ../../helpers/tips.js */ 655);
	
	var _container_header = __webpack_require__(/*! ../../widgets/container_header.jsx */ 569);
	
	var _container_header2 = _interopRequireDefault(_container_header);
	
	var _check_box = __webpack_require__(/*! ../../widgets/check_box.jsx */ 656);
	
	var _check_box2 = _interopRequireDefault(_check_box);
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _moment = __webpack_require__(/*! moment */ 657);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _zh_CN = __webpack_require__(/*! gregorian-calendar/lib/locale/zh_CN */ 634);
	
	var _zh_CN2 = _interopRequireDefault(_zh_CN);
	
	var _gregorianCalendar = __webpack_require__(/*! gregorian-calendar */ 611);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Download from '../../components/download.jsx'
	/**
	 * 核心指标转化
	 */
	
	var ltvTips = _lodash2.default.filter(_tips3.tips, 'module', '新增激活-LTV指标转化');
	var trendingTips = _lodash2.default.filter(_tips3.tips, 'module', '转化趋势');
	var ratioTips = _lodash2.default.filter(_tips3.tips, 'module', '转化占比');
	
	//date filter default date range
	var now = new _gregorianCalendar2.default(_zh_CN2.default);
	now.setTime(Date.now());
	var start = now.clone();
	var end = now.clone();
	start.addDayOfMonth(Number('-14'));
	end.addDayOfMonth(Number('-1'));
	
	exports.default = _react2.default.createClass({
	  displayName: 'core',
	
	  propTypes: {
	    children: _react.PropTypes.any,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object,
	    params: _react.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      uid: window.App.uid,
	      appid: this.props.params.appid,
	      startdate: (0, _moment2.default)().add(-14, 'days').format('YYYYMMDD'),
	      enddate: (0, _moment2.default)().add(-1, 'days').format('YYYYMMDD'),
	      interval: 7,
	      topn: 10,
	      activeType: 1
	    };
	  },
	  showChildLevel: function showChildLevel(row, level) {
	    var tabConfig = this.refs.coreLtv.getLevelConfig('level' + level)[0];
	    this.refs.coreLtv.dispatchAction('mixedPanelShowChildLevel', {
	      data: utils.tryExec(tabConfig.data, this, row),
	      url: tabConfig.url,
	      level: level,
	      rowData: row,
	      breadCrumb: row.x,
	      tabConfig: tabConfig
	    });
	  },
	  setDateFilter: function setDateFilter(startDate, endDate, interval) {
	    this.setState({
	      startdate: startDate,
	      enddate: endDate,
	      interval: interval
	    }, function () {
	      this.refs.coreLtv.reload();
	      this.refs.coreTrending.reload();
	      this.refs.coreRatioClick.reload();
	      this.refs.coreRatioActive.reload();
	      this.refs.coreRatioRevenue.reload();
	    });
	  },
	  setActiveTypeRatioClick: function setActiveTypeRatioClick(activeType) {
	    this.setState({ activeTypeRatioClick: activeType }, function () {
	      this.refs.coreRatioClick.onTabClick(0);
	    });
	  },
	  setActiveTypeRatioActive: function setActiveTypeRatioActive(activeType) {
	    this.setState({ activeTypeRatioActive: activeType }, function () {
	      this.refs.coreRatioActive.onTabClick(0);
	    });
	  },
	  setActiveTypeRatioRevenue: function setActiveTypeRatioRevenue(activeType) {
	    this.setState({ activeTypeRatioRevenue: activeType }, function () {
	      this.refs.coreRatioRevenue.onTabClick(0);
	    });
	  },
	  formatCurrency: function formatCurrency(currency) {
	    return _react2.default.createElement(
	      'span',
	      { className: 'currency' },
	      utils.asCurrency(currency)
	    );
	  },
	  render: function render() {
	    var _this = this;
	
	    var ltvSharedColumns = [{ title: '点击', dataIndex: 'y0', width: '15%', key: '1',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          utils.asInteger(val)
	        );
	      }
	    }, { title: '激活', dataIndex: 'y1', width: '15%', key: '2',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          utils.asInteger(val)
	        );
	      }
	    }, { title: '转化率', dataIndex: 'y2', width: '15%', key: '3',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          utils.asPercentage(val)
	        );
	      }
	    }, { title: '付费', dataIndex: 'y3', width: '15%', key: '4',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          { className: 'currency' },
	          utils.asCurrency(val)
	        );
	      }
	    }, { title: '人均LTV', dataIndex: 'y4', width: '15%', key: '5',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          utils.asInteger(val)
	        );
	      }
	    }];
	
	    var ltvLvl0 = [{
	      url: '/overviewChannelLtv.do',
	      data: function data() {
	        return _this.state;
	      },
	      columns: [{ title: '全部', dataIndex: 'x', key: '0', width: '10%', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: 'javascript:;', onClick: _this.showChildLevel.bind(_this, row, 1) },
	              val
	            )
	          );
	        } }].concat(ltvSharedColumns),
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      avgFields: ['y1'],
	      formatters: ['合计', utils.asInteger, utils.asInteger, utils.asPercentage, this.formatCurrency]
	    }];
	
	    var ltvLvl1 = [{
	      url: '/overviewCampaignLtv.do',
	      data: function data(row) {
	        return Object.assign({}, _this.state, {
	          channel: row.id
	        });
	      },
	      columns: [{ title: '全部', dataIndex: 'x', key: '0', width: '10%', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: 'javascript:;', onClick: _this.showChildLevel.bind(_this, row, 2) },
	              val
	            )
	          );
	        } }].concat(ltvSharedColumns),
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      avgFields: ['y1'],
	      formatters: ['合计', utils.asInteger, utils.asInteger, utils.asPercentage, this.formatCurrency]
	    }];
	
	    var ltvLvl2 = [{
	      url: '/overviewPublisherLtv.do',
	      data: function data(row) {
	        return Object.assign({}, _this.state, {
	          campaign: row.id
	        });
	      },
	      columns: [{ title: '全部', dataIndex: 'x', key: '0', width: '10%', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: 'javascript:;', onClick: _this.showChildLevel.bind(_this, row, 3) },
	              val
	            )
	          );
	        } }].concat(ltvSharedColumns),
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      avgFields: ['y1'],
	      formatters: ['合计', utils.asInteger, utils.asInteger, utils.asPercentage, this.formatCurrency]
	    }];
	
	    var ltvLvl3 = [{
	      url: '/overviewSiteLtv.do',
	      data: function data(row) {
	        return Object.assign({}, _this.state, {
	          publisher: row.x,
	          campaign: _this.props.states.coreLtv.breadCrumbRowList[1].id
	        });
	      },
	      columns: [{ title: '全部', dataIndex: 'x', key: '0', width: '10%', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            val
	          );
	        } }].concat(ltvSharedColumns),
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      avgFields: ['y1'],
	      formatters: ['合计', utils.asInteger, utils.asInteger, utils.asPercentage, this.formatCurrency]
	    }];
	
	    var trendingLvl0 = [{
	      url: '/overviewTotalTopNChannelLtv.do',
	      data: function data() {
	        return _this.state;
	      },
	      columns: [{ title: '点击', dataIndex: 'y0', width: '15%', key: '1' }, { title: '激活', dataIndex: 'y1', width: '15%', key: '2' }, { title: '转化率', dataIndex: 'y2', width: '15%', key: '3' }, { title: '付费', dataIndex: 'y3', width: '15%', key: '4' }, { title: '人均LTV', dataIndex: 'y4', width: '15%', key: '5' }],
	      subTabName: '汇总',
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      children: [{
	        url: '/overviewTopNChannelLtv.do',
	        tabName: '分渠道',
	        data: function data() {
	          return _this.state;
	        },
	        columns: [{ title: '点击', dataIndex: 'y0', width: '15%', key: '1' }, { title: '激活', dataIndex: 'y1', width: '15%', key: '2' }, { title: '转化率', dataIndex: 'y2', width: '15%', key: '3' }, { title: '付费', dataIndex: 'y3', width: '15%', key: '4' }, { title: '人均LTV', dataIndex: 'y4', width: '15%', key: '5' }],
	        rowKey: function rowKey(row) {
	          return row.x;
	        },
	        showSwitcher: false
	      }]
	    }];
	
	    var ratioClick = [{
	      url: '/overviewClickRatioLtv.do',
	      data: function data() {
	        return Object.assign({}, _this.state, {
	          activeType: _this.state.activeTypeRatioClick
	        });
	      },
	      columns: [{ title: 'x', dataIndex: 'x', key: '2', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            val
	          );
	        } }, { title: 'y2', dataIndex: 'y2', key: '6' }],
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      chart: { chart: { type: 'pie' } },
	      showSwitcher: false
	    }];
	
	    var ratioActive = [{
	      url: '/overviewActiveRatioLtv.do',
	      data: function data() {
	        return Object.assign({}, _this.state, {
	          activeType: _this.state.activeTypeRatioActive
	        });
	      },
	      columns: [{ title: 'x', dataIndex: 'x', key: '2', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            val
	          );
	        } }, { title: 'y2', dataIndex: 'y2', key: '6' }],
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      chart: { chart: { type: 'pie' } },
	      showSwitcher: false
	    }];
	
	    var ratioRevenue = [{
	      url: '/overviewRevenueRatioLtv.do',
	      data: function data() {
	        return Object.assign({}, _this.state, {
	          activeType: _this.state.activeTypeRatioRevenue
	        });
	      },
	      columns: [{ title: 'x', dataIndex: 'x', key: '2', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            val
	          );
	        } }, { title: 'y2', dataIndex: 'y2', key: '6' }],
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      chart: { chart: { type: 'pie' } },
	      showSwitcher: false
	    }];
	
	    var coreLtvTitle = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        '新增激活-LTV指标转化'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pull-right' },
	        _react2.default.createElement(_tips2.default, { tips: ltvTips })
	      )
	    );
	
	    var coreTrendingTitle = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        '转化趋势'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pull-right' },
	        _react2.default.createElement(_tips2.default, { tips: trendingTips })
	      )
	    );
	
	    var coreRatioTitle = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        '转化占比'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pull-right' },
	        _react2.default.createElement(_tips2.default, { tips: ratioTips })
	      )
	    );
	
	    var ratioActiveTitle = _react2.default.createElement(_check_box2.default, { name: '激活占比', onChange: this.setActiveTypeRatioActive });
	
	    var ratioRevenueTitle = _react2.default.createElement(_check_box2.default, { name: '付费占比', onChange: this.setActiveTypeRatioRevenue });
	
	    var props = this.props;
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _container_header2.default,
	        null,
	        _react2.default.createElement(_date_filter2.default, {
	          setDateFilter: this.setDateFilter,
	          start: start,
	          end: end
	        })
	      ),
	      _react2.default.createElement(_container2.default, {
	        id: 'coreLtv',
	        ref: 'coreLtv',
	        actions: props.actions,
	        states: props.states,
	        title: coreLtvTitle,
	        layout: 'table',
	        level0: ltvLvl0,
	        level1: ltvLvl1,
	        level2: ltvLvl2,
	        level3: ltvLvl3
	      }),
	      _react2.default.createElement(_container2.default, {
	        id: 'coreTrending',
	        ref: 'coreTrending',
	        actions: props.actions,
	        states: props.states,
	        title: coreTrendingTitle,
	        layout: 'chart',
	        level0: trendingLvl0
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: 'panel panel-track' },
	        _react2.default.createElement(
	          'div',
	          { className: 'panel-heading' },
	          coreRatioTitle
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'panel-body' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row panelPieRow' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement(_container2.default, {
	                id: 'coreRatioClick',
	                ref: 'coreRatioClick',
	                actions: props.actions,
	                states: props.states,
	                title: '点击占比',
	                layout: 'chart',
	                level0: ratioClick
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement(_container2.default, {
	                id: 'coreRatioActive',
	                ref: 'coreRatioActive',
	                actions: props.actions,
	                states: props.states,
	                title: ratioActiveTitle,
	                layout: 'chart',
	                level0: ratioActive
	              })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row panelPieRow' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement(_container2.default, {
	                id: 'coreRatioRevenue',
	                ref: 'coreRatioRevenue',
	                actions: props.actions,
	                states: props.states,
	                title: ratioRevenueTitle,
	                layout: 'chart',
	                level0: ratioRevenue
	              })
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 591:
/*!**************************************************************!*\
  !*** ./assets/tracking/components/mixed_panel/container.jsx ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(/*! dejs/lib/utils */ 592);
	
	var utils = _interopRequireWildcard(_utils);
	
	var _index = __webpack_require__(/*! ./index.jsx */ 594);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _reduxis = __webpack_require__(/*! dejs/lib/reduxis */ 605);
	
	var _reduxis2 = _interopRequireDefault(_reduxis);
	
	var _constants = __webpack_require__(/*! ../../helpers/constants.jsx */ 292);
	
	var CONSTS = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'container',
	
	  mixins: [_reduxis2.default.mixin],
	  propTypes: {
	    // 组件id，必须唯一。对应到action和reducer
	    level0: _react.PropTypes.array.isRequired,
	    // 其他层级 level1 level2 level3 ...
	    title: _react.PropTypes.any.isRequired,
	    layout: _react.PropTypes.oneOf(CONSTS.DEFAULT_LAYOUT_OPTIONS),
	    serverPagination: _react.PropTypes.bool
	  },
	
	  getLevelConfig: function getLevelConfig() {
	    var level = arguments.length <= 0 || arguments[0] === undefined ? this.getReduxStates().currentLevel : arguments[0];
	
	    return this.props[level];
	  },
	  getTabConfig: function getTabConfig() {
	    var tabIndex = arguments.length <= 0 || arguments[0] === undefined ? this.getReduxStates().currentTabIndex : arguments[0];
	
	    var config = this.getLevelConfig();
	    return config[tabIndex];
	  },
	
	  // NOTE 需要额外注意何时调用getSubTabConfig
	  getSubTabConfig: function getSubTabConfig() {
	    var subTabIndex = arguments.length <= 0 || arguments[0] === undefined ? this.getReduxStates().currentSubTabIndex : arguments[0];
	    var tabIndex = arguments.length <= 1 || arguments[1] === undefined ? this.getReduxStates().currentTabIndex : arguments[1];
	
	    var config = this.getTabConfig(tabIndex);
	    if (subTabIndex > 0) {
	      if (!config.children || !config.children.length) {
	        throw new Error('tabs.' + tabIndex + '没有配置children属性');
	      }
	
	      return config.children[subTabIndex - 1];
	    }
	
	    return config;
	  },
	  getSubTabs: function getSubTabs() {
	    var tabConfig = this.getTabConfig();
	    if (!tabConfig.children) return null;
	
	    // 优先取subTabName
	    var subTabs = [tabConfig.subTabName || tabConfig.tabName];
	    tabConfig.children.forEach(function (item) {
	      // 子节点直接取tabName
	      subTabs.push(item.tabName);
	    });
	
	    return subTabs;
	  },
	  componentDidMount: function componentDidMount() {
	    /**
	     * 使用EventEmitter来绑定事件
	     * 方便解耦以及对React组件优化（props传函数不利于shouldComponentUpdate优化）
	     */
	    var emitter = this.refs.panel.emitter;
	    emitter.on('tabclick', this.onTabClick, this);
	    emitter.on('subtabclick', this.onSubTabClick, this);
	    emitter.on('levelback', this.onLevelBack, this);
	    emitter.on('layoutchange', this.onLayoutChange, this);
	
	    this.onTabClick(0);
	  },
	  componentWillMount: function componentWillMount() {
	    var props = this.props;
	    if (props.layout !== props.states.currentLayout) {
	      this.onLayoutChange(this.props.layout);
	    }
	  },
	  onTabClick: function onTabClick(tabIndex) {
	    var tabConfig = this.getTabConfig(tabIndex);
	    this.dispatchAction('mixedPanelSwitchTab', {
	      tabIndex: tabIndex,
	      data: utils.tryExec(tabConfig.data),
	      tabConfig: tabConfig,
	      url: tabConfig.url
	    });
	  },
	  onSubTabClick: function onSubTabClick(subTabIndex) {
	    var tabConfig = this.getSubTabConfig(subTabIndex);
	    this.dispatchAction('mixedPanelSwitchSubTab', {
	      subTabIndex: subTabIndex,
	      data: utils.tryExec(tabConfig.data),
	      tabConfig: tabConfig,
	      url: tabConfig.url
	    });
	  },
	  onPageChange: function onPageChange(num) {
	    var tabConfig = this.getSubTabConfig();
	    if (this.props.serverPagination) {
	      this.dispatchAction('mixedPanelRequestServerPage', {
	        pagerID: num,
	        data: utils.tryExec(tabConfig.data),
	        url: tabConfig.url
	      });
	    } else {
	      this.dispatchAction('mixedPanelChangeClientPage', {
	        pagerID: num
	      });
	    }
	  },
	  onLevelBack: function onLevelBack(levelNum) {
	    var tabConfig = this.getTabConfig();
	    // 第一级为undefined
	
	    var _getReduxStates = this.getReduxStates();
	
	    var breadCrumbRowList = _getReduxStates.breadCrumbRowList;
	    var currentTabIndex = _getReduxStates.currentTabIndex;
	    var currentSubTabIndex = _getReduxStates.currentSubTabIndex;
	
	    this.dispatchAction('mixedPanelShowParentLevel', {
	      level: levelNum,
	      // 回退的时候，需要用到之前的数据
	      data: utils.tryExec(tabConfig.data, null, breadCrumbRowList[levelNum - 1], currentTabIndex, currentSubTabIndex),
	      url: tabConfig.url,
	      tabConfig: tabConfig
	    });
	  },
	  onLayoutChange: function onLayoutChange(layout) {
	    this.dispatchAction('mixedPanelChangeLayout', {
	      layout: layout
	    });
	  },
	  reload: function reload() {
	    var currentState = this.getReduxStates();
	    this.onTabClick(currentState.currentTabIndex);
	    this.onSubTabClick(currentState.currentSubTabIndex);
	  },
	  render: function render() {
	    var lvl = this.getLevelConfig();
	    if (!lvl) {
	      throw new Error('MixedPanelContainer.' + this.state.currentLevel + '是不是还没有配置');
	    }
	    var tabs = lvl.map(function (x) {
	      return x.tabName;
	    });
	    var config = this.getSubTabConfig();
	    var states = this.getReduxStates();
	    var subTabs = this.getSubTabs();
	
	    return _react2.default.createElement(_index2.default, {
	      ref: 'panel',
	      done: states.done,
	      error: states.error,
	      isEmpty: states.isEmpty,
	      title: this.props.title,
	      layout: states.currentLayout,
	      tabs: tabs,
	      subTabs: subTabs,
	      columns: config.columns,
	      rowKey: config.rowKey,
	      chart: config.chart,
	      summaryData: states.summaryData,
	      summaryFormatters: config.formatters,
	      currentTabIndex: states.currentTabIndex,
	      currentSubTabIndex: states.currentSubTabIndex,
	      breadCrumbList: states.breadCrumbList,
	      breadCrumbRowList: states.breadCrumbRowList,
	      datalist: states.datalist,
	      chartNames: states.chartNames,
	      chartData: states.chartData,
	      pagerTotal: states.pagerTotal,
	      pagerSize: states.pagerSize,
	      pagerID: states.pagerID,
	      showSwitcher: config.showSwitcher
	    });
	  }
	}); /**
	     * 一个level下面配置多个tab
	     * 第一级，配置格式如下:
	     [
	       {
	          label: ''
	          url: string,
	          data: func,
	          columns: array,
	          rowKey: func,
	          chart: object,
	          avgFields: array,
	          formatters: array
	       },
	       ...
	     ]
	     */

/***/ },

/***/ 592:
/*!***********************************!*\
  !*** ./~/dejs/lib/utils/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isFunction = isFunction;
	exports.tryExec = tryExec;
	exports.tryTransform = tryTransform;
	exports.tryGet = tryGet;
	exports.asBool = asBool;
	exports.getRandomColor = getRandomColor;
	exports.getExposedModule = getExposedModule;
	exports.asPercentage = asPercentage;
	exports.asNumber = asNumber;
	exports.asInteger = asInteger;
	exports.asCurrency = asCurrency;
	exports.parseUri = parseUri;
	
	var _numeral = __webpack_require__(/*! numeral */ 593);
	
	var _numeral2 = _interopRequireDefault(_numeral);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isFunction(fn) {
	  return fn && typeof fn === 'function';
	}
	
	function tryExec(func, context) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  return isFunction(func) ? func.apply(context, args) : func;
	}
	
	function tryTransform(func, context, item) {
	  return isFunction(func) ? func.call(context, item) : item;
	}
	
	function tryGet(target, field) {
	  return target && target[field];
	}
	
	// 把undefined和truthy转换为true
	function asBool(x) {
	  var undefIsTrue = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	  return undefIsTrue ? !!x || x === undefined : !!x;
	}
	
	// 随机获取颜色
	function getRandomColor() {
	  var letters = '0123456789ABCDEF'.split('');
	  var color = '#';
	  var HEX_LEN = 6;
	  var HEX_MAX = 16;
	  for (var i = 0; i < HEX_LEN; i++) {
	    color += letters[Math.floor(Math.random() * HEX_MAX)];
	  }
	  return color;
	}
	
	function getExposedModule(mod) {
	  return mod && mod.default ? mod.default : mod;
	}
	
	// 转换为两位数的百分比
	function asPercentage(num) {
	  return (0, _numeral2.default)(num || 0).format('(0.00%)');
	}
	
	// 转换为浮点数字形式，保留两位有效数字
	function asNumber(num) {
	  return (0, _numeral2.default)(num || 0).format('0,0.00');
	}
	
	// 转换为数字，千分位
	function asInteger(num) {
	  return (0, _numeral2.default)(num || 0).format('0,0');
	}
	
	// 转换为货币形式，保留两位小数点
	function asCurrency(num) {
	  var currency = arguments.length <= 1 || arguments[1] === undefined ? '￥' : arguments[1];
	
	  return currency + asNumber(num);
	}
	
	function parseUri(uri) {
	  var parser = document.createElement('a');
	  parser.href = uri;
	
	  return {
	    protocol: parser.protocol,
	    hostname: parser.hostname,
	    port: parser.port,
	    pathname: parser.pathname,
	    host: parser.host
	  };
	}

/***/ },

/***/ 594:
/*!**********************************************************!*\
  !*** ./assets/tracking/components/mixed_panel/index.jsx ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(/*! dejs/lib/utils */ 592);
	
	var utils = _interopRequireWildcard(_utils);
	
	var _rcTable = __webpack_require__(/*! rc-table */ 595);
	
	var _rcTable2 = _interopRequireDefault(_rcTable);
	
	var _rcPagination = __webpack_require__(/*! rc-pagination */ 294);
	
	var _rcPagination2 = _interopRequireDefault(_rcPagination);
	
	var _chart = __webpack_require__(/*! dejs/lib/chart */ 598);
	
	var _chart2 = _interopRequireDefault(_chart);
	
	var _loading = __webpack_require__(/*! dejs/lib/loading */ 545);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _noData = __webpack_require__(/*! dejs/lib/no-data */ 599);
	
	var _noData2 = _interopRequireDefault(_noData);
	
	var _error = __webpack_require__(/*! dejs/lib/error */ 603);
	
	var _error2 = _interopRequireDefault(_error);
	
	var _eventemitter = __webpack_require__(/*! eventemitter3 */ 604);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 *
	 * MixedPanel 用于表格和图形切换展示
	 *
	 */
	
	exports.default = _react2.default.createClass({
	  displayName: 'mixed_panel',
	
	  propTypes: {
	    done: _react.PropTypes.bool.isRequired,
	    error: _react.PropTypes.any,
	    isEmpty: _react.PropTypes.bool.isRequired,
	    // 标题
	    title: _react.PropTypes.any.isRequired,
	    // 展示布局类型
	    layout: _react.PropTypes.oneOf(['table', 'chart', 'both']).isRequired,
	    // 不传表示没有tab
	    tabs: _react.PropTypes.array,
	    // 不传表示不显示表格
	    columns: _react.PropTypes.array,
	    // 不传表示不显示表格
	    rowKey: _react.PropTypes.func,
	    // 不传则显示默认曲线
	    chart: _react.PropTypes.object,
	    summaryData: _react.PropTypes.object,
	    // NOTE 只有配置了格式化函数才会进行汇总计算
	    summaryFormatters: _react.PropTypes.array,
	    // 当前tab索引
	    currentTabIndex: _react.PropTypes.number.isRequired,
	    // 子tab索引（汇总、渠道）
	    currentSubTabIndex: _react.PropTypes.number,
	    // [string]
	    breadCrumbList: _react.PropTypes.array,
	    // 上一级的行数据
	    parentRowData: _react.PropTypes.any,
	    // 当前页数据
	    datalist: _react.PropTypes.array.isRequired,
	    // 画图
	    chartNames: _react.PropTypes.object,
	    // 如果是客户端分页需要传入全部图表所需数据
	    chartData: _react.PropTypes.array,
	    // 分页相关
	    pagerTotal: _react.PropTypes.number.isRequired,
	    pagerSize: _react.PropTypes.number,
	    pagerID: _react.PropTypes.number,
	    // [汇总、分渠道]
	    subTabs: _react.PropTypes.array,
	    //Show chart initially if false
	    showSwitcher: _react.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      showSwitcher: true
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    /**
	     * 接收相关事件，参考container.jsx
	     * 思考为什么不直接传props.func
	     */
	    this.emitter = new _eventemitter2.default();
	  },
	  getComponentByStatus: function getComponentByStatus(element, error, isEmpty, done) {
	    if (error) return _react2.default.createElement(_error2.default, { error: error });
	    // 在加载的时候如果数据为空则不展示数据为空
	    // 适合第一次加载数据的时候优化展示
	    if (isEmpty) {
	      return done ? _react2.default.createElement(_noData2.default, null) : null;
	    }
	
	    return element;
	  },
	
	  // 获取当前层级的tab配置
	  getTabs: function getTabs() {
	    var _this = this;
	
	    var tabs = this.props.tabs;
	    if (!tabs || tabs.length === 1) return null;
	
	    var tabList = tabs.map(function (name, i) {
	      var style = _this.props.currentTabIndex === i ? 'active' : '';
	      var onTabClick = function onTabClick() {
	        _this.emitter.emit('tabclick', i);
	      };
	      return _react2.default.createElement(
	        'li',
	        { key: name, className: style, onClick: onTabClick },
	        _react2.default.createElement(
	          'a',
	          { href: 'javascript:;' },
	          name
	        )
	      );
	    });
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'nav-tabs-container' },
	      _react2.default.createElement(
	        'ul',
	        { className: 'nav nav-sm nav-tabs' },
	        tabList
	      )
	    );
	  },
	  getSwitcher: function getSwitcher() {
	    var onLayoutChange = function onLayoutChange(layout) {
	      if (this.props.layout === layout) return;
	
	      this.emitter.emit('layoutchange', layout);
	    };
	    return this.props.chartNames ? _react2.default.createElement(
	      'div',
	      { className: 'btn-group' },
	      _react2.default.createElement(
	        'button',
	        { onClick: onLayoutChange.bind(this, 'table'),
	          className: this.props.layout === 'table' ? 'btn btn-default btn-xs active' : 'btn btn-default btn-xs'
	        },
	        _react2.default.createElement('i', { className: 'fa fa-table' })
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: onLayoutChange.bind(this, 'chart'),
	          className: this.props.layout === 'chart' ? 'btn btn-default btn-xs active' : 'btn btn-default btn-xs'
	        },
	        _react2.default.createElement('i', { className: 'fa fa-area-chart' })
	      )
	    ) : '';
	  },
	  getBreadCrumb: function getBreadCrumb() {
	    var _this2 = this;
	
	    var crumbItems = this.props.breadCrumbList;
	    if (!Array.isArray(crumbItems)) return null;
	
	    var total = crumbItems.length;
	    var crumbList = crumbItems.map(function (label, i) {
	      // 最后一项返回普通文本，其余都是链接
	      if (i === total - 1) {
	        return _react2.default.createElement(
	          'span',
	          { key: label },
	          label
	        );
	      }
	
	      var onLevelBack = function onLevelBack() {
	        _this2.emitter.emit('levelback', i);
	      };
	
	      return _react2.default.createElement(
	        'span',
	        { key: label },
	        _react2.default.createElement(
	          'a',
	          { href: 'javascript:;', onClick: onLevelBack },
	          label
	        ),
	        ' > '
	      );
	    });
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'grid-panel-bread-nav' },
	      '层级结构：',
	      crumbList
	    );
	  },
	  getSummary: function getSummary() {
	    if (!this.props.summaryFormatters) return null;
	
	    var summary = this.props.summaryData;
	    var formatters = this.props.summaryFormatters;
	    var thList = _lodash2.default.map(this.props.columns, function (col, i) {
	      // 如果返回格式化函数是字符串则直接使用该字符串
	      var value = typeof formatters[i] === 'string' ? formatters[i] : summary[col.dataIndex];
	      return _react2.default.createElement(
	        'th',
	        { key: i, style: { width: col.width } },
	        utils.tryTransform(formatters[i], null, value)
	      );
	    });
	    return _react2.default.createElement(
	      'table',
	      { className: 'table summary-table' },
	      _react2.default.createElement(
	        'thead',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          thList
	        )
	      )
	    );
	  },
	  getTable: function getTable() {
	    if (!this.props.rowKey) {
	      throw new Error('rowKey应该配置一个函数');
	    }
	
	    return _react2.default.createElement(_rcTable2.default, { className: 'table', columns: this.props.columns, data: this.props.datalist,
	      rowKey: this.props.rowKey
	    });
	  },
	  getPager: function getPager() {
	    var _this3 = this;
	
	    var onChange = function onChange(page) {
	      _this3.emitter.emit('pagechange', page);
	    };
	    return _react2.default.createElement(_rcPagination2.default, { total: this.props.pagerTotal, current: this.props.pagerID,
	      pageSize: this.props.pagerSize, onChange: onChange
	    });
	  },
	  getSubTabs: function getSubTabs() {
	    var _this4 = this;
	
	    if (!this.props.subTabs) return null;
	
	    var subTabs = this.props.subTabs.map(function (name, i) {
	      var onSubTabClick = function onSubTabClick() {
	        _this4.emitter.emit('subtabclick', i);
	      };
	      var style = _this4.props.currentSubTabIndex === i ? 'active' : '';
	      style += ' btn btn-xs btn-default ';
	      return _react2.default.createElement(
	        'button',
	        { className: style, key: name, onClick: onSubTabClick, type: 'button' },
	        name
	      );
	    });
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'btn-group mixed-panel-sub-tabs', style: { marginBottom: '15px' } },
	      subTabs
	    );
	  },
	  getFooter: function getFooter() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'text-center common-container' },
	      this.getSubTabs()
	    );
	  },
	  getChart: function getChart() {
	    var chart = _react2.default.createElement(
	      'div',
	      { className: 'common-container' },
	      this.props.showSwitcher && _react2.default.createElement(
	        'div',
	        { className: 'pull-right' },
	        this.getSwitcher()
	      ),
	      _react2.default.createElement(_chart2.default, {
	        datalist: this.props.chartData,
	        seriesNames: this.props.chartNames,
	        config: this.props.chart
	      }),
	      this.getFooter()
	    );
	    return _react2.default.createElement(
	      'div',
	      null,
	      this.getTabs(),
	      this.getComponentByStatus(chart, this.props.error, this.props.isEmpty, this.props.done)
	    );
	  },
	  getGrid: function getGrid() {
	    var datagrid = _react2.default.createElement(
	      'div',
	      { className: 'common-container' },
	      this.props.showSwitcher && _react2.default.createElement(
	        'div',
	        { className: 'pull-right' },
	        this.getSwitcher()
	      ),
	      this.getBreadCrumb(),
	      this.getSummary(),
	      this.getTable(),
	      this.getPager()
	    );
	    return _react2.default.createElement(
	      'div',
	      null,
	      this.getTabs(),
	      this.getComponentByStatus(datagrid, this.props.error, this.props.isEmpty, this.props.done)
	    );
	  },
	  render: function render() {
	    var props = this.props;
	    var child = props.layout === 'chart' ? this.getChart() : this.getGrid();
	    return _react2.default.createElement(
	      'div',
	      { className: 'panel panel-track' },
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-heading' },
	        props.title
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-body' },
	        _react2.default.createElement(
	          _loading2.default,
	          { done: props.done },
	          child
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 598:
/*!***********************************!*\
  !*** ./~/dejs/lib/chart/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(/*! ../no-data/index */ 599);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _immutable = __webpack_require__(/*! immutable */ 600);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _utils = __webpack_require__(/*! ./utils */ 601);
	
	var ChartHelpers = _interopRequireWildcard(_utils);
	
	var _highcharts = __webpack_require__(/*! highcharts */ 602);
	
	var _highcharts2 = _interopRequireDefault(_highcharts);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'chart',
	
	  propTypes: {
	    // 原始数据源
	    datalist: _react.PropTypes.arrayOf(Object).isRequired,
	    // 曲线名
	    seriesNames: _react.PropTypes.object.isRequired,
	    // 用户配置
	    config: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      datalist: [],
	      seriesNames: {},
	      config: {
	        chart: {
	          type: 'line'
	        }
	      }
	    };
	  },
	
	  /**
	   * 第一次mount的时候初始化数据肯定为空
	   * 数据一般都是通过ajax请求更新
	   */
	  componentDidMount: function componentDidMount() {
	    if (this.props.datalist.length) {
	      this.renderChart();
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.chart = null;
	  },
	
	  /**
	   * render之后如果数据不为空则绘图
	   * 绘图仍然需要比较前后数据是否一致
	   * 只在数据真正变化的时候绘图
	   */
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    if (this.props.datalist.length) {
	      var current = _immutable2.default.fromJS(this.props);
	      var next = _immutable2.default.fromJS(prevProps);
	      if (!_immutable2.default.is(current, next)) {
	        this.renderChart();
	      }
	    }
	  },
	  render: function render() {
	    // 清除上一次highcharts引用
	    if (!this.props.datalist.length) {
	      this.chart = null;
	      return _react2.default.createElement(_index2.default, null);
	    }
	
	    return _react2.default.createElement('div', { ref: 'chart', style: { minHeight: '360px' } });
	  },
	  renderChart: function renderChart() {
	    var chartConfig = this.props.config.chart;
	    var isPie = chartConfig && chartConfig.type === 'pie';
	    var config = isPie ? this.getPieOptions() : this.getOptions();
	    config.chart.renderTo = this.refs.chart;
	    // 外部组件使用
	    this.chart = new _highcharts2.default.Chart(config);
	  },
	  getOptions: function getOptions() {
	    var options = ChartHelpers.getLineOptions({
	      content: this.props.datalist,
	      name: this.props.seriesNames
	    }, this.props.config);
	    // NOTE Object.assign会导致tootip的this为空
	    return _lodash2.default.merge({}, ChartHelpers.DEFAULT_LINE_OPTIONS, options);
	  },
	
	  // 饼图配置比较简单
	  getPieOptions: function getPieOptions() {
	    var options = ChartHelpers.getPieOptions({
	      content: this.props.datalist,
	      name: this.props.seriesNames
	    }, this.props.config);
	    return _lodash2.default.merge({}, ChartHelpers.DEFAULT_PIE_OPTIONS, options);
	  }
	});

/***/ },

/***/ 599:
/*!*************************************!*\
  !*** ./~/dejs/lib/no-data/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DEFAULT_TIP = undefined;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var STYLE = {
	  CONTAINER: {
	    textAlign: 'center',
	    color: '#AAA',
	    padding: '100px 0'
	  },
	  ICON: {
	    fontSize: '50px'
	  }
	}; /**
	    * 通用的暂无数据组件
	    */
	
	var DEFAULT_TIP = exports.DEFAULT_TIP = '暂无数据';
	
	exports.default = _react2.default.createClass({
	  displayName: 'no-data',
	
	  propTypes: {
	    text: _react.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      text: DEFAULT_TIP
	    };
	  },
	  shouldComponentUpdate: function shouldComponentUpdate() {
	    return false;
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { style: STYLE.CONTAINER },
	      _react2.default.createElement('i', { className: 'fa fa-exclamation-circle', style: STYLE.ICON }),
	      _react2.default.createElement(
	        'div',
	        null,
	        this.props.text
	      )
	    );
	  }
	});

/***/ },

/***/ 601:
/*!***********************************!*\
  !*** ./~/dejs/lib/chart/utils.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DEFAULT_PIE_OPTIONS = exports.DEFAULT_LINE_OPTIONS = undefined;
	exports.defaultTooltipFormatter = defaultTooltipFormatter;
	exports.transform2PieData = transform2PieData;
	exports.transform2LineData = transform2LineData;
	exports.getPieOptions = getPieOptions;
	exports.getLineOptions = getLineOptions;
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(/*! ../utils */ 592);
	
	var utils = _interopRequireWildcard(_utils);
	
	var _highcharts = __webpack_require__(/*! highcharts */ 602);
	
	var _highcharts2 = _interopRequireDefault(_highcharts);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (typeof _highcharts2.default === 'undefined') {
	  throw new Error('\n    Highcharts has been optimized for npm, see these links for help.\n    http://www.highcharts.com/component/content/article/2-news/188-highcharts-optimized-for-npm\n    http://www.hcharts.cn/subject/highcharts-4.1.10.php\n  ');
	} /**
	   * highcharts配置生成辅助方法
	   */
	
	var COLORS = ['#4da1ff', '#f4533c', '#ffae00', '#1aba9b', '#e552b0', '#af6bcb', '#9aab4f', '#6673d1', '#3ebb43', '#2c81e1', '#dd4544', '#e49518', '#0c967b', '#bd3998', '#944cb2', '#7b8d43', '#4e5ab0', '#299e2e', '#1665bd', '#bd3b47', '#d97707', '#06715d', '#8f2e73', '#7b3499', '#69821c', '#4a498f', '#18851d'];
	
	_highcharts2.default.setOptions({
	  colors: COLORS,
	  lang: {
	    // TODO 多语言版本以及其它基本配置
	    noData: '暂无数据'
	  }
	});
	
	// 获取分组配置信息，未设置的在默认分组
	// {male: ['y0', 'y1'], femail: ['y3']}
	function stackParser(config, names) {
	  if (!config) return null;
	  var ret = {};
	  var defaultGroupName = 'default';
	  _lodash2.default.each(names, function (val, key) {
	    ret[key] = defaultGroupName;
	  });
	
	  _lodash2.default.each(config, function (val, key) {
	    _lodash2.default.each(val, function (name) {
	      ret[name] = key;
	    });
	  });
	
	  return ret;
	}
	
	var DEFAULT_LINE_OPTIONS = exports.DEFAULT_LINE_OPTIONS = {
	  chart: {
	    backgroundColor: 'rgba(0, 0, 0, 0)'
	  },
	  title: {
	    text: ''
	  },
	  legend: {
	    borderWidth: 0,
	    margin: 0,
	    maxHeight: 50,
	    itemStyle: {
	      color: '#636A7C',
	      fontWeight: 'normal'
	    }
	  },
	  xAxis: {
	    tickmarkPlacement: 1,
	    gridLineColor: '#E8EBF2',
	    gridLineWidth: 1,
	    labels: {
	      // x轴旋转角度
	      //rotation: 30,
	      //限定用多少行来显示轴轴标签自动地的避免某些标签的重叠。设置为1表示禁用重叠检测
	      maxStaggerLines: 1,
	      //useHTML: true,
	      style: {
	        fontSize: 12
	      }
	    }
	  },
	  tooltip: {
	    shared: true,
	    valueSuffix: '',
	    backgroundColor: 'rgba(41, 55, 69, 0.8)',
	    borderColor: '#010202',
	    borderRadius: 5,
	    shadow: true,
	    hideDelay: 10, //提示框隐藏延时。当鼠标移出图标后，数据提示框会在设定的延迟时间后消失。
	    style: {
	      zIndex: -1,
	      color: '#FFFFFF',
	      'pointer-events': 'none'
	    },
	    crosshairs: { //控制十字线
	      width: 1,
	      color: '#39B54A',
	      dashStyle: 'shortdot'
	    },
	    useHTML: true
	  },
	  credits: {
	    enabled: false
	  },
	  plotOptions: {
	    areaspline: {
	      fillOpacity: 0.08,
	      lineWidth: 2,
	      //shadow: true,//是否为曲线加阴影
	      marker: {
	        symbol: 'circle',
	        radius: 3,
	        fillColor: 'white',
	        lineColor: null,
	        lineWidth: 1
	      }
	    },
	    spline: {
	      fillOpacity: 0.08,
	      lineWidth: 2,
	      //shadow: true,//是否为曲线加阴影
	      marker: {
	        symbol: 'circle',
	        radius: 3,
	        fillColor: 'white',
	        lineColor: null,
	        lineWidth: 1
	      }
	    },
	    area: {
	      fillOpacity: 0.7,
	      lineWidth: 2,
	      //shadow: true,//是否为曲线加阴影
	      marker: {
	        symbol: 'circle',
	        radius: 3,
	        fillColor: 'white',
	        lineColor: null,
	        lineWidth: 1
	      }
	    },
	    bar: {
	      dataLabels: {
	        enabled: true
	      }
	    },
	    column: {}
	  }
	};
	
	var DEFAULT_PIE_OPTIONS = exports.DEFAULT_PIE_OPTIONS = {
	  chart: {
	    type: 'pie'
	  },
	  title: {
	    text: ''
	  },
	  tooltip: {
	    backgroundColor: 'rgba(41, 55, 69, 0.8)',
	    borderColor: '#010202',
	    borderRadius: 5,
	    shadow: true,
	    style: {
	      color: '#FFFFFF'
	    },
	    formatter: function formatter() {
	      return '<b>' + this.point.name + '</b>: ' + this.percentage.toFixed(2) + '%' + '(' + this.y + ')';
	    },
	    percentageDecimals: 1
	  },
	  // legend: {
	  //   borderWidth: 0,
	  //   // layout: 'vertical',
	  //   verticalAlign: 'center',
	  //   align: 'center',
	  //   x: -10,
	  //   y: 0,
	  //   itemMarginTop: 5,
	  //   itemMarginBottom: 5,
	  //   enabled: true
	  // },
	  plotOptions: {
	    pie: {
	      allowPointSelect: true,
	      cursor: 'pointer',
	      depth: 35,
	      dataLabels: {
	        enabled: true,
	        color: '#000000',
	        connectorColor: '#000000',
	        formatter: function formatter() {
	          return '<b>' + this.point.name + '</b>: ' + this.percentage.toFixed(2) + ' %';
	        }
	      },
	      showInLegend: true,
	      size: 200
	    }
	  },
	  credits: {
	    enabled: false
	  }
	};
	
	/**
	 * TODO 数据过多时的处理方式（分组还有其他逻辑？）
	 */
	function defaultTooltipFormatter(json, rowData, config) {
	  // 用户可能取消某些曲线的展示，这个时候points仅为部分数据
	  var points = this.points || [this.point];
	  var indexes = points.map(function (p) {
	    return p.series.index;
	  });
	  var html = '';
	  // 如果没有手动指定排序，则展示行数据的所有yN,zN,tN
	  // 默认不展示x和id，可以自己加入到tooltipOrderList中
	  var tooltipFields = config.tooltipOrderList || _lodash2.default.keys(rowData).sort().filter(function (k) {
	    return k !== 'id' && k !== 'x';
	  });
	  _lodash2.default.each(tooltipFields, function (key) {
	    // 检查是否插入了自定义的数据，确认自定义数据已经配置
	    var isExtra = !json.name[key];
	    if (isExtra && (!config.tooltipExtraData || !config.tooltipExtraData[key][0])) {
	      throw new Error('行数据的' + key + '没有找到对应的json.name.' + key + ';或tooltipExtraData没有配置对应的数据项');
	    }
	
	    var rawValue = isExtra ? config.tooltipExtraData[key][1] : rowData[key];
	    // 只有yN才会在y轴显示
	    var index = key[0] === 'y' && parseInt(key.slice(1), 10);
	    var pointIndex = _lodash2.default.indexOf(indexes, index);
	    // 用户屏蔽某些曲线的展示
	    if (key[0] === 'y' && pointIndex === -1) return;
	
	    // 可能显示z0或t0
	    var series = pointIndex !== -1 ? points[pointIndex].series : {
	      color: '',
	      type: 'empty',
	      name: json.name[key] || config.tooltipExtraData[key][0]
	    };
	
	    // y轴value格式化函数
	    var value = config.tooltipValueFormatter ? config.tooltipValueFormatter(rawValue, key) : rawValue || 0;
	    html += '\n    <li>\n      <span style="background: ' + series.color + '" class="' + series.type + '"></span>\n      ' + series.name + ':\n      <span>' + value + '</span>\n    </li>\n    ';
	  });
	
	  return '\n    <h5 class="tip-title">' + this.x + '</h5>\n    <div class="tip-content">\n      <ul class="tip-list">' + html + '</ul>\n    </div>\n  ';
	}
	
	// 转换原始接口数据为饼图数据
	function transform2PieData(data) {
	  return _lodash2.default.map(data.content, function (item) {
	    return {
	      name: item.x,
	      y: item.y0
	    };
	  });
	}
	
	/**
	 * 格式化函数的【共享】与【独占】
	 * 共享表示全部曲线共用一个formatter
	 * 独占表示每个曲线对应自己的格式化函数
	 *
	 * 配置说明：
	 * categoryFormatter {Function} x轴格式化函数
	 * onClick {Function} 图表点击事件
	 * legendEnabled {Boolean} 是否展示图例，默认为true
	 * yAxisFormatter {Function} 【独占】y轴value格式化函数，接收2个额外的参数（y轴value、曲线名称y0,y1等）
	 * yAxisLabelsFormatter {Function} 【独占（左右两侧）】纵坐标格式化，接收2个额外的参数（曲线名称、曲线索引）
	 * yAxisOppositeList {Array} 指定那些曲线位于右侧 ['y0', 'y1']
	 * seriesNameList {Array<String>} 曲线名称
	 * seriesTypeList {Array<String>} 曲线类型
	 * seriesColorList {Array<String>} 曲线颜色
	 * seriesVisibleList {Array<Boolean>} 设置指定曲线的显示与隐藏
	 * seriesStack {Object} 分组配置，未指定的在默认分组
	 * allowDecimals {Boolean} 是否允许y轴刻度出现小树
	 * tooltipOrderList {Array<String>} tooltip排序字段允许加入自定义的数据
	 * tooltipExtraData {Object} tooltip自定义数据{key: [name, value]}
	 * tooltipValueFormatter {Function} 【独占】tooltip格式化y轴value，接收2个参数：value，name
	 */
	function transform2LineData(data, extraOptions) {
	  // x轴的值
	  var categories = _lodash2.default.map(data.content, function (item) {
	    return {
	      data: item,
	      // 重写tostring，将data对象在tooltip中可以直接获取不需要JSON.parse
	      toString: function toString() {
	        return utils.tryTransform(extraOptions.categoryFormatter, null, item.x);
	      }
	    };
	  });
	  // x轴为时间序列，只有一条数据是否展示点
	  var markerEnabled = categories.length === 1;
	  // x轴步长
	  var STEP_LEN = 12;
	  var tickInterval = Math.ceil(categories.length / STEP_LEN);
	  // 有点击事件鼠标样式为cursor
	  var cursor = !!extraOptions.onClick;
	  // 是否展示图例，大部分情况默认为true
	  var legendEnabled = utils.asBool(extraOptions.legendEnabled);
	  var tooltipFomatter = function tooltipFomatter() {
	    return defaultTooltipFormatter.call(this, data, this.x.data, extraOptions);
	  };
	  var seriesStack = stackParser(extraOptions.seriesStack);
	  // 是否堆叠
	  var stacking = !!seriesStack;
	  var yAxisKeys = _lodash2.default.keys(data.name).sort().filter(function (i) {
	    return i[0] === 'y';
	  });
	  var yAxisList = _lodash2.default.map(yAxisKeys, function (key, i) {
	    return _lodash2.default.map(data.content, function (row, j) {
	      var value = row[key] || 0;
	      if (!extraOptions.yAxisFormatter) return value;
	
	      // 根据不同曲线名称来进行不同的格式化
	      // 这里的值必须返回数值，主要用于百分比格式化
	      var transformed = extraOptions.yAxisFormatter(value, key);
	      if (typeof transformed !== 'number') {
	        throw new Error('y轴返回值必须为数字：\n原始值:' + row[key] + '\n曲线名称:' + key + '\n位置索引' + j);
	      }
	      return transformed;
	    });
	  });
	  var series = [];
	  var yAxis = [];
	  var defaultSerieType = extraOptions.chart && extraOptions.chart.type || 'line';
	  _lodash2.default.each(yAxisList, function (item, i) {
	    // 使用哪个y轴（仅双或多y轴时有效）
	    var index = 0;
	    // 是否在右侧的y轴
	    var opposite = false;
	    if (_lodash2.default.isArray(extraOptions.yAxisOppositeList)) {
	      opposite = _lodash2.default.contains(extraOptions.yAxisOppositeList, yAxisKeys[i]);
	      index = i;
	    }
	    // y轴格式化，额外传递当前曲线的全部数据，以及曲线的对应的name，index
	    var yAxisLabelsFormatter = extraOptions.yAxisLabelsFormatter && function () {
	      return extraOptions.yAxisLabelsFormatter.call(this, yAxisKeys[i], i);
	    };
	
	    series.push({
	      data: item,
	      // 如果重新定义了则优先取配置，不然自动获取name属性配置
	      name: utils.tryGet(extraOptions.seriesNames, i) || data.name['y' + i],
	      type: utils.tryGet(extraOptions.seriesTypeList, i) || defaultSerieType,
	      color: utils.tryGet(extraOptions.seriesColorList, i),
	      visible: utils.tryGet(extraOptions.seriesVisibleList, i) || true,
	      stack: seriesStack && seriesStack['y' + i],
	      yAxis: index,
	      events: {
	        click: extraOptions.onClick
	      }
	    });
	
	    yAxis.push({
	      title: {
	        text: ''
	      },
	      opposite: opposite,
	      min: 0,
	      gridLineColor: '#E0E0E0',
	      gridLineDashStyle: 'Dash',
	      //是否允许刻度有小数
	      allowDecimals: !!utils.tryGet(extraOptions.allowDecimals, i),
	      labels: {
	        style: {
	          fontFamily: 'Arial, "微软雅黑", "宋体"'
	        },
	        formatter: yAxisLabelsFormatter
	      }
	    });
	  });
	
	  return {
	    categories: categories, markerEnabled: markerEnabled, stacking: stacking,
	    tickInterval: tickInterval, cursor: cursor, legendEnabled: legendEnabled,
	    tooltipFomatter: tooltipFomatter, yAxis: yAxis, series: series
	  };
	}
	
	// 生成饼图基本配置
	function getPieOptions(data) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  return _lodash2.default.merge({
	    series: [{
	      innerSize: '40%',
	      data: transform2PieData(data)
	    }]
	  }, options);
	}
	
	// 生成曲线图、柱状图等配置
	function getLineOptions(data) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var lineData = transform2LineData(data, options);
	  return {
	    series: lineData.series,
	    chart: {
	      // 图表类型，混合图的时候不需要指定type，在series里面指定type
	      type: 'line'
	    },
	    legend: {
	      enabled: lineData.legendEnabled
	    },
	    xAxis: {
	      categories: lineData.categories,
	      // x轴的步长
	      tickInterval: lineData.tickInterval
	    },
	    yAxis: lineData.yAxis,
	    tooltip: {
	      formatter: lineData.tooltipFomatter
	    },
	    plotOptions: {
	      areaspline: {
	        marker: {
	          enabled: lineData.markerEnabled
	        }
	      },
	      spline: {
	        marker: {
	          enabled: lineData.markerEnabled
	        }
	      },
	      area: {
	        stacking: lineData.stacking,
	        marker: {
	          enabled: lineData.markerEnabled
	        }
	      },
	      bar: {
	        stacking: lineData.stacking
	      },
	      column: {
	        cursor: lineData.cursor,
	        stacking: lineData.stacking
	      }
	    }
	  };
	}

/***/ },

/***/ 603:
/*!***********************************!*\
  !*** ./~/dejs/lib/error/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var STYLE = {
	  CONTAINER: {
	    textAlign: 'center',
	    color: '#AAA',
	    padding: '100px 0'
	  },
	  ICON: {
	    fontSize: '50px'
	  }
	}; /**
	    * 通用的错误处理组件
	    */
	
	var DEFAULT_TIP = '请求出错，请稍后重试';
	
	exports.default = _react2.default.createClass({
	  displayName: 'error',
	
	  propTypes: {
	    error: _react.PropTypes.instanceOf(Error)
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      error: new Error(DEFAULT_TIP)
	    };
	  },
	
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { style: STYLE.CONTAINER },
	      _react2.default.createElement('i', { className: 'fa fa-exclamation-triangle', style: STYLE.ICON }),
	      _react2.default.createElement(
	        'div',
	        null,
	        this.props.error.message || DEFAULT_TIP
	      )
	    );
	  }
	});

/***/ },

/***/ 605:
/*!*************************************!*\
  !*** ./~/dejs/lib/reduxis/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createReducer = __webpack_require__(/*! ./createReducer */ 606);
	
	var _createReducer2 = _interopRequireDefault(_createReducer);
	
	var _mixin = __webpack_require__(/*! ./mixin */ 607);
	
	var _mixin2 = _interopRequireDefault(_mixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * utils method, avoid duplicated code
	 * return an object with state key, not a function
	 */
	function batchCreateReducers(ids, reducer, state) {
	  var ret = {};
	  return ids.reduce(function (prev, current) {
	    prev[current] = (0, _createReducer2.default)(current, reducer, state);
	    return prev;
	  }, ret);
	}
	
	exports.default = {
	  createComponentReducer: _createReducer2.default,
	  batchCreateReducers: batchCreateReducers,
	  mixin: _mixin2.default
	};

/***/ },

/***/ 606:
/*!*********************************************!*\
  !*** ./~/dejs/lib/reduxis/createReducer.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createReducer;
	/**
	 * This generated reducer accepts flux standard action
	 * {type, payload, error, meta}
	 */
	function createReducer(componentID, reducer) {
	  var initialState = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  if (!componentID || typeof componentID !== 'string') {
	    throw new Error('Reduxis createComponentReducer needs a component id to create reducer');
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Reduxis createComponentReducer needs a reducer function');
	  }
	
	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    var _ref = action || {};
	
	    var meta = _ref.meta;
	
	    if (!meta || !meta.original) {
	      return state;
	    }
	
	    if (meta.original.componentID !== componentID) {
	      return state;
	    }
	
	    return reducer(state, action) || state;
	  };
	}

/***/ },

/***/ 607:
/*!*************************************!*\
  !*** ./~/dejs/lib/reduxis/mixin.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	exports.default = {
	  propTypes: {
	    id: _react.PropTypes.string.isRequired,
	    actions: _react.PropTypes.object.isRequired,
	    states: _react.PropTypes.object.isRequired
	  },
	
	  /**
	   * using component id to combineReducers
	   */
	  getReduxStates: function getReduxStates() {
	    return this.props.states[this.props.id];
	  },
	
	  /**
	   * flux standard action
	   * payload should be an object (if needed) to reduce chaos
	   */
	  dispatchAction: function dispatchAction(actionName, payload) {
	    var actionHandler = this.props.actions[actionName];
	    if (!actionHandler) {
	      console.warn('dispatchAction failed, this.props.actions.' + actionName + ' is undefined');
	      return;
	    }
	
	    actionHandler(Object.assign({
	      componentID: this.props.id
	    }, payload));
	  }
	}; /**
	    * A base mixin for redux based component
	    */

/***/ },

/***/ 608:
/*!*********************************************!*\
  !*** ./assets/tracking/components/tips.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: "tips",
	
	  propTypes: {
	    tips: _react.PropTypes.array.isRequired
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      show: false
	    };
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.setState({ show: false });
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tips: []
	    };
	  },
	  handleClick: function handleClick() {
	    this.setState({ show: !this.state.show });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      "label",
	      { onClick: this.handleClick, className: "btn btn-default btn-xs icon" },
	      _react2.default.createElement("i", { className: "fa fa-question" }),
	      _react2.default.createElement(
	        "div",
	        { className: "tips-area", style: { display: this.state.show ? 'block' : 'none' } },
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            "table",
	            { className: "table" },
	            _react2.default.createElement(
	              "tbody",
	              null,
	              this.props.tips.map(function (tip) {
	                return _react2.default.createElement(
	                  "tr",
	                  { key: tip.id },
	                  _react2.default.createElement(
	                    "td",
	                    { className: "text-left" },
	                    tip.metricName
	                  ),
	                  _react2.default.createElement(
	                    "td",
	                    { className: "text-left" },
	                    tip.metricDefinition
	                  )
	                );
	              })
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 609:
/*!****************************************************!*\
  !*** ./assets/tracking/components/date_filter.jsx ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _RangeCalendar = __webpack_require__(/*! rc-calendar/lib/RangeCalendar */ 610);
	
	var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);
	
	var _gregorianCalendarFormat = __webpack_require__(/*! gregorian-calendar-format */ 622);
	
	var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);
	
	var _zh_CN = __webpack_require__(/*! gregorian-calendar/lib/locale/zh_CN */ 634);
	
	var _zh_CN2 = _interopRequireDefault(_zh_CN);
	
	var _gregorianCalendar = __webpack_require__(/*! gregorian-calendar */ 611);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _zh_CN3 = __webpack_require__(/*! rc-calendar/lib/locale/zh_CN */ 635);
	
	var _zh_CN4 = _interopRequireDefault(_zh_CN3);
	
	var _Picker = __webpack_require__(/*! rc-calendar/lib/Picker */ 637);
	
	var _Picker2 = _interopRequireDefault(_Picker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var formatter1 = new _gregorianCalendarFormat2.default('yyyy-MM-dd');
	var formatter2 = new _gregorianCalendarFormat2.default('yyyyMMdd');
	var now = new _gregorianCalendar2.default(_zh_CN2.default);
	now.setTime(Date.now());
	
	// function disabledDate(current) {
	//   const date = new Date()
	//   date.setHours(0)
	//   date.setMinutes(0)
	//   date.setSeconds(0)
	//   return current.getTime() < date.getTime()  // can not select days before today
	// }
	
	function formatInput(v) {
	  return v && formatter1.format(v);
	}
	
	function formatParam(v) {
	  return v && formatter2.format(v);
	}
	
	exports.default = _react2.default.createClass({
	  displayName: 'date_filter',
	
	  propTypes: {
	    setDateFilter: _react.PropTypes.func.isRequired,
	    intervals: _react.PropTypes.array,
	    showInterval: _react.PropTypes.bool,
	    start: _react.PropTypes.object,
	    end: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    var start = now.clone();
	    var end = now.clone();
	    start.addDayOfMonth(Number('-7'));
	    end.addDayOfMonth(Number('-1'));
	
	    return {
	      showInterval: true,
	      intervals: [{ period: 7, label: '1周' }, { period: 30, label: '1个月' }, { period: 90, label: '3个月' }],
	      start: start,
	      end: end
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      value: [this.props.start, this.props.end],
	      interval: 7
	    };
	  },
	  chooseInterval: function chooseInterval(e) {
	    this.props.setDateFilter(formatParam(this.state.value[0]), formatParam(this.state.value[1]), e.target.value);
	    this.setState({
	      interval: e.target.value
	    });
	  },
	  onChange: function onChange(value) {
	    this.props.setDateFilter(formatParam(value[0]), formatParam(value[1]), this.state.interval);
	    this.setState({ value: value });
	  },
	  render: function render() {
	    var _this = this;
	
	    var state = this.state;
	    var calendar = _react2.default.createElement(_RangeCalendar2.default, {
	      showWeekNumber: false,
	      locale: _zh_CN4.default,
	      defaultValue: now,
	      dateInutPlaceholder: ['请输入开始日期', '请输入结束日期']
	      // disabledDate={disabledDate}
	    });
	
	    function setIntervalClassNames(interval, stateInterval) {
	      return 'btn btn-default ' + (interval === stateInterval ? 'intervalChoosed' : '');
	    }
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'dateFilter' },
	      _react2.default.createElement(
	        _Picker2.default,
	        {
	          value: state.value,
	          onChange: this.onChange,
	          animation: 'slide-up',
	          calendar: calendar
	        },
	        function (_ref) {
	          var value = _ref.value;
	
	          return _react2.default.createElement(
	            'div',
	            { className: 'de-calendar' },
	            _react2.default.createElement(
	              'span',
	              { className: 'btn-group' },
	              _react2.default.createElement(
	                'span',
	                { className: 'form-control dropdown-toggle', style: { cursor: 'pointer' } },
	                _react2.default.createElement('i', { className: 'fa fa-calendar' }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'de-calendar-text' },
	                  value && formatInput(value[0]) + ' ~ ' + formatInput(value[1])
	                )
	              )
	            )
	          );
	        }
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pull-right', style: { display: this.props.showInterval ? 'inline-block' : 'none' } },
	        _react2.default.createElement(
	          'span',
	          null,
	          '后续：'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'btn-group' },
	          this.props.intervals.map(function (interval) {
	            return _react2.default.createElement(
	              'button',
	              {
	                key: interval.period,
	                className: setIntervalClassNames(interval.period, _this.state.interval),
	                onClick: _this.chooseInterval,
	                value: interval.period
	              },
	              interval.label
	            );
	          })
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 610:
/*!********************************************!*\
  !*** ./~/rc-calendar/lib/RangeCalendar.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gregorianCalendar = __webpack_require__(/*! gregorian-calendar */ 611);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _classnames = __webpack_require__(/*! classnames */ 240);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _rangeCalendarCalendarPart = __webpack_require__(/*! ./range-calendar/CalendarPart */ 615);
	
	var _rangeCalendarCalendarPart2 = _interopRequireDefault(_rangeCalendarCalendarPart);
	
	var _util = __webpack_require__(/*! ./util/ */ 621);
	
	var _calendarTodayButton = __webpack_require__(/*! ./calendar/TodayButton */ 629);
	
	var _calendarTodayButton2 = _interopRequireDefault(_calendarTodayButton);
	
	var _calendarOkButton = __webpack_require__(/*! ./calendar/OkButton */ 630);
	
	var _calendarOkButton2 = _interopRequireDefault(_calendarOkButton);
	
	var _mixinCommonMixin = __webpack_require__(/*! ./mixin/CommonMixin */ 632);
	
	var _mixinCommonMixin2 = _interopRequireDefault(_mixinCommonMixin);
	
	function noop() {}
	
	function getNow() {
	  var selectedValue = new _gregorianCalendar2['default']();
	  selectedValue.setTime(Date.now());
	  return selectedValue;
	}
	
	function onValueChange(direction, current) {
	  var value = undefined;
	  value = current;
	  if (direction === 'right') {
	    value.addMonth(-1);
	  }
	  this.fireValueChange(value);
	}
	
	function normalizeAnchor(props, init) {
	  var selectedValue = props.selectedValue || init && props.defaultSelectedValue || [];
	  var value = props.value;
	  if (Array.isArray(value)) {
	    value = value[0];
	  }
	  var defaultValue = props.defaultValue;
	  if (Array.isArray(defaultValue)) {
	    defaultValue = defaultValue[0];
	  }
	  return value || init && defaultValue || selectedValue[0] || init && getNow();
	}
	
	function onInputSelect(direction, value) {
	  if (!value) {
	    return;
	  }
	  var originalValue = this.state.selectedValue;
	  var selectedValue = originalValue.concat();
	  var index = direction === 'left' ? 0 : 1;
	  selectedValue[index] = value;
	  if (selectedValue[0] && selectedValue[1]) {
	    if (this.compare(selectedValue[0], selectedValue[1]) > 0) {
	      selectedValue[1 - index] = undefined;
	    }
	  }
	  this.fireSelectValueChange(selectedValue);
	}
	
	var RangeCalendar = _react2['default'].createClass({
	  displayName: 'RangeCalendar',
	
	  propTypes: {
	    defaultValue: _react.PropTypes.any,
	    timePicker: _react.PropTypes.any,
	    value: _react.PropTypes.any,
	    selectedValue: _react.PropTypes.array,
	    defaultSelectedValue: _react.PropTypes.array,
	    onOk: _react.PropTypes.func,
	    onChange: _react.PropTypes.func,
	    onSelect: _react.PropTypes.func,
	    onValueChange: _react.PropTypes.func,
	    formatter: _react.PropTypes.object,
	    onClear: _react.PropTypes.func
	  },
	
	  mixins: [_mixinCommonMixin2['default']],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultSelectedValue: [],
	      onValueChange: noop
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var selectedValue = props.selectedValue || props.defaultSelectedValue;
	    var value = normalizeAnchor(props, 1);
	    return { selectedValue: selectedValue, value: value };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var newState = {};
	    if ('value' in nextProps) {
	      if (nextProps.value) {
	        newState.value = nextProps.value;
	      } else {
	        newState.value = normalizeAnchor(nextProps, 0);
	      }
	      this.setState(newState);
	    }
	    if ('selectedValue' in nextProps) {
	      newState.selectedValue = nextProps.selectedValue;
	      this.setState(newState);
	    }
	  },
	
	  onSelect: function onSelect(value) {
	    var originalValue = this.state.selectedValue;
	    var selectedValue = originalValue.concat();
	    var changed = false;
	    if (!selectedValue.length || selectedValue.length === 2 && !originalValue.hovering) {
	      selectedValue.length = 1;
	      selectedValue[0] = value;
	      changed = true;
	    } else if (this.compare(selectedValue[0], value) <= 0) {
	      selectedValue[1] = value;
	      changed = true;
	    } else if (this.compare(selectedValue[0], value) > 0) {
	      selectedValue.length = 1;
	      selectedValue[0] = value;
	      changed = true;
	    }
	    if (changed) {
	      this.fireSelectValueChange(selectedValue);
	    }
	  },
	
	  onDayHover: function onDayHover(hoverValue) {
	    var selectedValue = this.state.selectedValue;
	    if (!selectedValue.length || selectedValue.length === 2 && !selectedValue.hovering) {
	      return;
	    }
	    if (this.compare(hoverValue, selectedValue[0]) < 0) {
	      return;
	    }
	    selectedValue = selectedValue.concat();
	    selectedValue[1] = hoverValue;
	    selectedValue.hovering = 1;
	    this.fireSelectValueChange(selectedValue);
	  },
	
	  onToday: function onToday() {
	    this.setState({
	      value: (0, _util.getTodayTime)(this.state.value)
	    });
	  },
	
	  onOk: function onOk() {
	    this.props.onOk(this.state.selectedValue);
	  },
	
	  getStartValue: function getStartValue() {
	    var value = this.state.value;
	    var selectedValue = this.state.selectedValue;
	    // keep selectedTime when select date
	    if (selectedValue[0] && this.props.timePicker) {
	      value = value.clone();
	      (0, _util.syncTime)(selectedValue[0], value);
	    }
	    return value;
	  },
	
	  getEndValue: function getEndValue() {
	    var endValue = this.state.value.clone();
	    endValue.addMonth(1);
	    var selectedValue = this.state.selectedValue;
	    // keep selectedTime when select date
	    if (selectedValue[1] && this.props.timePicker) {
	      (0, _util.syncTime)(selectedValue[1], endValue);
	    }
	    return endValue;
	  },
	
	  compare: function compare(v1, v2) {
	    if (this.props.timePicker) {
	      return v1.getTime() - v2.getTime();
	    }
	    return v1.compareToDay(v2);
	  },
	
	  fireSelectValueChange: function fireSelectValueChange(selectedValue, direct) {
	    if (!('selectedValue' in this.props)) {
	      this.setState({ selectedValue: selectedValue });
	    }
	    this.props.onChange(selectedValue);
	    if (direct || selectedValue[0] && selectedValue[1] && !selectedValue.hovering) {
	      this.props.onSelect(selectedValue);
	    }
	  },
	
	  fireValueChange: function fireValueChange(value) {
	    var props = this.props;
	    if (!('value' in props)) {
	      this.setState({ value: value });
	    }
	    props.onValueChange(value);
	  },
	
	  clear: function clear() {
	    this.fireSelectValueChange([], true);
	    this.props.onClear();
	  },
	
	  render: function render() {
	    var _className;
	
	    var props = this.props;
	    var state = this.state;
	    var prefixCls = props.prefixCls;
	    var dateInputPlaceholder = props.dateInputPlaceholder;
	
	    var className = (_className = {}, _defineProperty(_className, props.className, !!props.className), _defineProperty(_className, prefixCls, 1), _defineProperty(_className, prefixCls + '-hidden', !props.visible), _defineProperty(_className, prefixCls + '-range', 1), _defineProperty(_className, prefixCls + '-week-number', props.showWeekNumber), _className);
	    var classes = (0, _classnames2['default'])(className);
	    var newProps = {
	      selectedValue: state.selectedValue,
	      onSelect: this.onSelect,
	      onDayHover: this.onDayHover
	    };
	
	    var placeholder1 = undefined;
	    var placeholder2 = undefined;
	
	    if (dateInputPlaceholder) {
	      if (Array.isArray(dateInputPlaceholder)) {
	        var _dateInputPlaceholder = _slicedToArray(dateInputPlaceholder, 2);
	
	        placeholder1 = _dateInputPlaceholder[0];
	        placeholder2 = _dateInputPlaceholder[1];
	      } else {
	        placeholder1 = placeholder2 = dateInputPlaceholder;
	      }
	    }
	    return _react2['default'].createElement(
	      'div',
	      { className: classes, style: props.style,
	        tabIndex: '0' },
	      _react2['default'].createElement('a', { className: prefixCls + '-clear-btn', role: 'button', title: '清除', onClick: this.clear }),
	      _react2['default'].createElement(_rangeCalendarCalendarPart2['default'], _extends({}, props, newProps, { direction: 'left',
	        formatter: this.getFormatter(),
	        value: this.getStartValue(),
	        placeholder: placeholder1,
	        onInputSelect: onInputSelect.bind(this, 'left'),
	        onValueChange: onValueChange.bind(this, 'left') })),
	      _react2['default'].createElement(
	        'span',
	        { className: prefixCls + '-range-middle' },
	        '~'
	      ),
	      _react2['default'].createElement(_rangeCalendarCalendarPart2['default'], _extends({}, props, newProps, { direction: 'right',
	        formatter: this.getFormatter(),
	        placeholder: placeholder2,
	        value: this.getEndValue(),
	        onInputSelect: onInputSelect.bind(this, 'right'),
	        onValueChange: onValueChange.bind(this, 'right') })),
	      _react2['default'].createElement(
	        'div',
	        { className: prefixCls + '-range-bottom' },
	        _react2['default'].createElement(_calendarTodayButton2['default'], _extends({}, props, { value: state.value,
	          onToday: this.onToday })),
	        _react2['default'].createElement(_calendarOkButton2['default'], _extends({}, props, { value: state.value,
	          onOk: this.onOk,
	          okDisabled: state.selectedValue.length !== 2 || state.selectedValue.hovering
	        }))
	      )
	    );
	  }
	});
	
	exports['default'] = RangeCalendar;
	module.exports = exports['default'];

/***/ },

/***/ 615:
/*!**********************************************************!*\
  !*** ./~/rc-calendar/lib/range-calendar/CalendarPart.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _calendarCalendarHeader = __webpack_require__(/*! ../calendar/CalendarHeader */ 616);
	
	var _calendarCalendarHeader2 = _interopRequireDefault(_calendarCalendarHeader);
	
	var _dateDateTable = __webpack_require__(/*! ../date/DateTable */ 624);
	
	var _dateDateTable2 = _interopRequireDefault(_dateDateTable);
	
	var _calendarCalendarFooter = __webpack_require__(/*! ../calendar/CalendarFooter */ 628);
	
	var _calendarCalendarFooter2 = _interopRequireDefault(_calendarCalendarFooter);
	
	var _dateDateInput = __webpack_require__(/*! ../date/DateInput */ 631);
	
	var _dateDateInput2 = _interopRequireDefault(_dateDateInput);
	
	var Calendar = _react2['default'].createClass({
	  displayName: 'Calendar',
	
	  render: function render() {
	    var props = this.props;
	    var value = props.value;
	    var direction = props.direction;
	    var prefixCls = props.prefixCls;
	    var locale = props.locale;
	    var selectedValue = props.selectedValue;
	    var formatter = props.formatter;
	    var placeholder = props.placeholder;
	    var disabledDate = props.disabledDate;
	    var timePicker = props.timePicker;
	    var disabledTime = props.disabledTime;
	
	    var rangeClassName = prefixCls + '-range';
	    var newProps = { locale: locale, value: value, prefixCls: prefixCls };
	    var index = direction === 'left' ? 0 : 1;
	    return _react2['default'].createElement(
	      'div',
	      { className: rangeClassName + '-part ' + rangeClassName + '-' + direction },
	      _react2['default'].createElement(_dateDateInput2['default'], { formatter: formatter,
	        locale: locale,
	        prefixCls: prefixCls,
	        timePicker: timePicker,
	        disabledDate: disabledDate,
	        placeholder: placeholder,
	        disabledTime: disabledTime,
	        gregorianCalendarLocale: value.locale,
	        showClear: false,
	        selectedValue: selectedValue[index],
	        onChange: props.onInputSelect }),
	      _react2['default'].createElement(
	        'div',
	        { style: { outline: 'none' } },
	        _react2['default'].createElement(_calendarCalendarHeader2['default'], _extends({}, newProps, {
	          enableNext: direction === 'right',
	          enablePrev: direction === 'left',
	          onValueChange: props.onValueChange })),
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-calendar-body' },
	          _react2['default'].createElement(_dateDateTable2['default'], _extends({}, newProps, {
	            selectedValue: selectedValue,
	            dateRender: props.dateRender,
	            onSelect: props.onSelect,
	            onDayHover: props.onDayHover,
	            disabledDate: disabledDate,
	            showWeekNumber: props.showWeekNumber }))
	        ),
	        _react2['default'].createElement(_calendarCalendarFooter2['default'], _extends({}, newProps, {
	          disabledDate: props.disabledDate,
	          timeDisabled: !selectedValue[index] || !!selectedValue.hovering,
	          onToday: this.chooseToday
	        }))
	      )
	    );
	  }
	});
	
	exports['default'] = Calendar;
	module.exports = exports['default'];

/***/ },

/***/ 634:
/*!**************************************************!*\
  !*** ./~/gregorian-calendar/lib/locale/zh_CN.js ***!
  \**************************************************/
/***/ function(module, exports) {

	/*
	 * zh-cn locale
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	"use strict";
	
	module.exports = {
	  // in minutes
	  timezoneOffset: 8 * 60,
	  firstDayOfWeek: 1,
	  minimalDaysInFirstWeek: 1
	};

/***/ },

/***/ 635:
/*!*******************************************!*\
  !*** ./~/rc-calendar/lib/locale/zh_CN.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _gregorianCalendarFormatLibLocaleZh_CN = __webpack_require__(/*! gregorian-calendar-format/lib/locale/zh_CN */ 636);
	
	var _gregorianCalendarFormatLibLocaleZh_CN2 = _interopRequireDefault(_gregorianCalendarFormatLibLocaleZh_CN);
	
	exports['default'] = {
	  today: '今天',
	  now: '此刻',
	  ok: '确定',
	  clear: '清除',
	  month: '月',
	  year: '年',
	  previousMonth: '上个月 (翻页上键)',
	  nextMonth: '下个月 (翻页下键)',
	  monthSelect: '选择月份',
	  yearSelect: '选择年份',
	  decadeSelect: '选择年代',
	  yearFormat: 'yyyy\'年\'',
	  monthFormat: 'M\'月\'',
	  dateFormat: 'yyyy\'年\'M\'月\'d\'日\'',
	  previousYear: '上一年 (Control键加左方向键)',
	  nextYear: '下一年 (Control键加右方向键)',
	  previousDecade: '上一年代',
	  nextDecade: '下一年代',
	  previousCentury: '上一世纪',
	  nextCentury: '下一世纪',
	  format: _gregorianCalendarFormatLibLocaleZh_CN2['default']
	};
	module.exports = exports['default'];

/***/ },

/***/ 636:
/*!*********************************************************!*\
  !*** ./~/gregorian-calendar-format/lib/locale/zh_CN.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  eras: ['公元前', '公元'],
	  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	  shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	  weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
	  shortWeekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
	  veryShortWeekdays: ['日', '一', '二', '三', '四', '五', '六'],
	  ampms: ['上午', '下午'],
	  datePatterns: ['yyyy\'年\'M\'月\'d\'日\' EEEE', 'yyyy\'年\'M\'月\'d\'日\'', 'yyyy-M-d', 'yy-M-d'],
	  timePatterns: ['ahh\'时\'mm\'分\'ss\'秒\' \'GMT\'Z', 'ahh\'时\'mm\'分\'ss\'秒\'', 'H:mm:ss', 'ah:mm'],
	  dateTimePattern: '{date} {time}'
	};

/***/ },

/***/ 637:
/*!*************************************!*\
  !*** ./~/rc-calendar/lib/Picker.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcUtil = __webpack_require__(/*! rc-util */ 250);
	
	var _pickerPlacements = __webpack_require__(/*! ./picker/placements */ 638);
	
	var _pickerPlacements2 = _interopRequireDefault(_pickerPlacements);
	
	var _rcTrigger = __webpack_require__(/*! rc-trigger */ 639);
	
	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);
	
	function noop() {}
	
	function refFn(field, component) {
	  this[field] = component;
	}
	
	var Picker = _react2['default'].createClass({
	  displayName: 'Picker',
	
	  propTypes: {
	    onChange: _react.PropTypes.func,
	    onOpen: _react.PropTypes.func,
	    onClose: _react.PropTypes.func,
	    children: _react.PropTypes.func,
	    getCalendarContainer: _react.PropTypes.func,
	    calendar: _react.PropTypes.element,
	    style: _react.PropTypes.object,
	    open: _react.PropTypes.bool,
	    defaultOpen: _react.PropTypes.bool,
	    prefixCls: _react.PropTypes.string,
	    placement: _react.PropTypes.any,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array]),
	    defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array]),
	    align: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-calendar-picker',
	      style: {},
	      align: {},
	      placement: 'bottomLeft',
	      defaultOpen: false,
	      onChange: noop,
	      onOpen: noop,
	      onClose: noop
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var open = undefined;
	    if ('open' in props) {
	      open = props.open;
	    } else {
	      open = props.defaultOpen;
	    }
	    var value = props.value || props.defaultValue;
	    this.saveCalendarRef = refFn.bind(this, 'calendarInstance');
	    return { open: open, value: value };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var value = nextProps.value;
	    var open = nextProps.open;
	
	    if ('value' in nextProps) {
	      this.setState({ value: value });
	    }
	    if (open !== undefined) {
	      this.setState({ open: open });
	    }
	  },
	
	  onCalendarKeyDown: function onCalendarKeyDown(event) {
	    if (event.keyCode === _rcUtil.KeyCode.ESC) {
	      event.stopPropagation();
	      this.close(this.focus);
	    }
	  },
	
	  onCalendarSelect: function onCalendarSelect(value) {
	    var cause = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var props = this.props;
	    if (!('value' in props)) {
	      this.setState({
	        value: value
	      });
	    }
	    if (!props.calendar.props.timePicker && cause.source !== 'dateInput') {
	      this.close(this.focus);
	    }
	    props.onChange(value);
	  },
	
	  onCalendarOk: function onCalendarOk() {
	    this.close(this.focus);
	  },
	
	  onCalendarClear: function onCalendarClear() {
	    this.close(this.focus);
	  },
	
	  onVisibleChange: function onVisibleChange(open) {
	    var _this = this;
	
	    this.setOpen(open, function () {
	      if (open) {
	        _reactDom2['default'].findDOMNode(_this.calendarInstance).focus();
	      }
	    });
	  },
	
	  getCalendarElement: function getCalendarElement() {
	    var props = this.props;
	    var state = this.state;
	    var calendarProp = props.calendar;
	    var value = state.value;
	
	    var defaultValue = undefined;
	    // RangeCalendar
	    if (Array.isArray(value)) {
	      defaultValue = value[0];
	    } else {
	      defaultValue = value;
	    }
	    var extraProps = {
	      ref: this.saveCalendarRef,
	      defaultValue: defaultValue || calendarProp.props.defaultValue,
	      defaultSelectedValue: value,
	      onKeyDown: this.onCalendarKeyDown,
	      onOk: (0, _rcUtil.createChainedFunction)(calendarProp.props.onOk, this.onCalendarOk),
	      onSelect: (0, _rcUtil.createChainedFunction)(calendarProp.props.onSelect, this.onCalendarSelect),
	      onClear: (0, _rcUtil.createChainedFunction)(calendarProp.props.onClear, this.onCalendarClear)
	    };
	
	    return _react2['default'].cloneElement(calendarProp, extraProps);
	  },
	
	  setOpen: function setOpen(open, callback) {
	    var _props = this.props;
	    var onOpen = _props.onOpen;
	    var onClose = _props.onClose;
	
	    if (this.state.open !== open) {
	      this.setState({
	        open: open
	      }, callback);
	      var _event = {
	        open: open
	      };
	      if (open) {
	        onOpen(_event);
	      } else {
	        onClose(_event);
	      }
	    }
	  },
	
	  open: function open(callback) {
	    this.setOpen(true, callback);
	  },
	
	  close: function close(callback) {
	    this.setOpen(false, callback);
	  },
	
	  focus: function focus() {
	    if (!this.state.open) {
	      _reactDom2['default'].findDOMNode(this).focus();
	    }
	  },
	
	  render: function render() {
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var placement = props.placement;
	    var style = props.style;
	    var getCalendarContainer = props.getCalendarContainer;
	    var align = props.align;
	    var animation = props.animation;
	    var disabled = props.disabled;
	    var transitionName = props.transitionName;
	    var children = props.children;
	
	    var state = this.state;
	    return _react2['default'].createElement(
	      _rcTrigger2['default'],
	      { popup: this.getCalendarElement(),
	        popupAlign: align,
	        builtinPlacements: _pickerPlacements2['default'],
	        popupPlacement: placement,
	        action: disabled ? [] : ['click'],
	        destroyPopupOnHide: true,
	        getPopupContainer: getCalendarContainer,
	        popupStyle: style,
	        popupAnimation: animation,
	        popupTransitionName: transitionName,
	        popupVisible: state.open,
	        onPopupVisibleChange: this.onVisibleChange,
	        prefixCls: prefixCls },
	      children(state, props)
	    );
	  }
	});
	
	exports['default'] = Picker;
	module.exports = exports['default'];

/***/ },

/***/ 638:
/*!************************************************!*\
  !*** ./~/rc-calendar/lib/picker/placements.js ***!
  \************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var autoAdjustOverflow = {
	  adjustX: 1,
	  adjustY: 1
	};
	
	var targetOffset = [0, 0];
	
	var placements = {
	  bottomLeft: {
	    points: ['tl', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -3],
	    targetOffset: targetOffset
	  },
	  bottomRight: {
	    points: ['tr', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -3],
	    targetOffset: targetOffset
	  },
	  topRight: {
	    points: ['br', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 3],
	    targetOffset: targetOffset
	  },
	  topLeft: {
	    points: ['bl', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 3],
	    targetOffset: targetOffset
	  }
	};
	
	exports['default'] = placements;
	module.exports = exports['default'];

/***/ },

/***/ 655:
/*!*****************************************!*\
  !*** ./assets/tracking/helpers/tips.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var tips = exports.tips = [{
	  'name': 'Index_ZBFX_HXZBZH1',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '新增激活-LTV指标转化',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内，广告被点击的次数；',
	  'id': '10000001',
	  'metricName': '点击量'
	}, {
	  'name': 'Index_ZBFX_HXZBZH2',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '新增激活-LTV指标转化',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内，由广告产生的新增激活设备数；提供自然流量的统计；<bar>（注:该段日期范围的安装并非全部由该段日期范围的点击转化，存在一定的误差！）',
	  'id': '10000002',
	  'metricName': '激活'
	}, {
	  'name': 'Index_ZBFX_HXZBZH3',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '新增激活-LTV指标转化',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDPefinition': '转化率=安装/点击，注:安装并非全部来至于所选日期范围的点击；',
	  'id': '10000003',
	  'metricName': '转化率'
	}, {
	  'name': 'Index_ZBFX_HXZBZH4',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '新增激活-LTV指标转化',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内新增的激活账号，在所选日期内产生的付费；',
	  'id': '10000004',
	  'metricName': '付费'
	}, {
	  'name': 'Index_ZBFX_HXZBZH5',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '新增激活-LTV指标转化',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内新增的激活账号，在所选日期范围内的人均LTV；',
	  'id': '10000005',
	  'metricName': '人均LTV'
	}, {
	  'name': 'Index_ZBFX_HXZBZH6',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '转化趋势',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内由广告产生的新增激活设备数；提供自然流量的统计；（注:该段日期范围的安装并非全部由该段日期范围的点击转化，存在一定的误差！）',
	  'id': '10000006',
	  'metricName': '激活'
	}, {
	  'name': 'Index_ZBFX_HXZBZH7',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '转化趋势',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内由广告产生的新增激活设备中，在后续统计周期内有注册的设备数，每台设备只计算一次；',
	  'id': '10000007',
	  'metricName': '注册设备'
	}, {
	  'name': 'Index_ZBFX_HXZBZH8',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '转化趋势',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内产生的新增激活设备，在后续统计周期内的登陆次数；',
	  'id': '10000008',
	  'metricName': '登陆次数'
	}, {
	  'name': 'Index_ZBFX_HXZBZH9',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '转化趋势',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内产生的新增激活设备，在后续统计周期内有付费的设备数；',
	  'id': '10000009',
	  'metricName': '付费设备'
	}, {
	  'name': 'Index_ZBFX_HXZBZH10',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '转化趋势',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内产生的新增激活设备，在后续统计周期内的付费次数；',
	  'id': '10000010',
	  'metricName': '付费次数'
	}, {
	  'name': 'Index_ZBFX_HXZBZH11',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '转化趋势',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内由广告产生的新增玩家，在该段时间内购买服装的次数；',
	  'id': '10000011',
	  'metricName': '购买服装次数'
	}, {
	  'name': 'Index_ZBFX_HXZBZH12',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '转化趋势',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内由广告产生的新增玩家，在该段时间内抽卡的次数；',
	  'id': '10000012',
	  'metricName': '抽卡次数'
	}, {
	  'name': 'Index_ZBFX_HXZBZH13',
	  'emberModule': '点击占比',
	  'pageCategory': '指标分析',
	  'module': '转化占比',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内，各个广告网络平台的广告被点击的次数及其占比；',
	  'id': '10000013',
	  'metricName': '点击占比'
	}, {
	  'name': 'Index_ZBFX_HXZBZH14',
	  'emberModule': '激活占比',
	  'pageCategory': '指标分析',
	  'module': '转化占比',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内，各个广告网络平台的新增激活设备数量及其占比；',
	  'id': '10000014',
	  'metricName': '激活占比'
	}, {
	  'name': 'Index_ZBFX_HXZBZH15',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '转化占比',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内，不同国家由广告产生的新增激活设备数量及其占比；',
	  'id': '10000015',
	  'metricName': '激活国家'
	}, {
	  'name': 'Index_ZBFX_HXZBZH16',
	  'emberModule': '付费占比',
	  'pageCategory': '指标分析',
	  'module': '转化占比',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '核心指标转化',
	  'metricDefinition': '所选日期范围内，由广告产生的新增激活设备，在后续统计周期内各广告网络平台的付费额及占比；',
	  'id': '10000016',
	  'metricName': '付费占比'
	}, {
	  'name': 'Index_ZBFX_GLSJ17',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '点击及安装',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围内，广告被点击的次数；',
	  'id': '10000017',
	  'metricName': '点击量'
	}, {
	  'name': 'Index_ZBFX_GLSJ18',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '点击及安装',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围内，由于广告推广而产生的新增激活设备数；',
	  'id': '10000018',
	  'metricName': '推广安装'
	}, {
	  'name': 'Index_ZBFX_GLSJ19',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '点击及安装',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围内，自然安装激活设备数；',
	  'id': '10000019',
	  'metricName': '自然安装'
	}, {
	  'name': 'Index_ZBFX_GLSJ20',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '点击及安装',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围内，所有新增激活设备数(含广告和自然流量)',
	  'id': '10000020',
	  'metricName': '总安装'
	}, {
	  'name': 'Index_ZBFX_GLSJ21',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围内，广告被点击的次数；',
	  'id': '10000021',
	  'metricName': '点击量'
	}, {
	  'name': 'Index_ZBFX_GLSJ22',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围内，由广告产生的新增激活设备数；提供自然流量的统计；<bar>（注:该段日期范围的安装并非全部由该段日期范围的点击转化，存在一定的误差！）',
	  'id': '10000022',
	  'metricName': '激活'
	}, {
	  'name': 'Index_ZBFX_GLSJ23',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '转化率=安装/点击，注:安装并非全部来至于所选日期范围的点击；',
	  'id': '10000023',
	  'metricName': '转化率'
	}, {
	  'name': 'Index_ZBFX_GLSJ24',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围的激活设备中，在后续统计周期内至少登陆3次的设备数；',
	  'id': '10000024',
	  'metricName': '有效安装'
	}, {
	  'name': 'Index_ZBFX_GLSJ25',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '有效安装率=有效安装/激活；',
	  'id': '10000025',
	  'metricName': '有效安装率'
	}, {
	  'name': 'Index_ZBFX_GLSJ26',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '首日注册率=首日注册设备/激活；',
	  'id': '10000026',
	  'metricName': '首日注册率'
	}, {
	  'name': 'Index_ZBFX_GLSJ27',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围内的新增激活设备中，激活当日就进行了付费的设备数；',
	  'id': '10000027',
	  'metricName': '首日付费数'
	}, {
	  'name': 'Index_ZBFX_GLSJ28',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '首日付费率=首日付费设备/激活；',
	  'id': '10000028',
	  'metricName': '首日付费率'
	}, {
	  'name': 'Index_ZBFX_GLSJ29',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围内每日平均活跃设备；',
	  'id': '10000029',
	  'metricName': '平均活跃'
	}, {
	  'name': 'Index_ZBFX_GLSJ30',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围内的由广告产生的唯一新增付费设备数；',
	  'id': '10000030',
	  'metricName': '付费数'
	}, {
	  'name': 'Index_ZBFX_GLSJ31',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围内由广告产生的新增设备的付费总额；',
	  'id': '10000031',
	  'metricName': '付费额'
	}, {
	  'name': 'Index_ZBFX_GLSJ32',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '日ARPU=日付费额/DAU；<bar>平均ARPU是将所选日期范围内每一天的日ARPU求平均；',
	  'id': '10000032',
	  'metricName': '平均ARPU'
	}, {
	  'name': 'Index_ZBFX_GLSJ33',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '概览指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '日ARPPU=日付费额/日付费人数;<bar>平均ARPPU是将所选日期范围内每一天的日ARPPU求平均；',
	  'id': '10000033',
	  'metricName': '平均ARPPU'
	}, {
	  'name': 'Index_ZBFX_GLSJ34',
	  'emberModule': '有效安装占比',
	  'pageCategory': '指标分析',
	  'module': '占比',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围的新增激活设备中，不同广告网络的有效激活设备数量及占比；',
	  'id': '10000034',
	  'metricName': ''
	}, {
	  'name': 'Index_ZBFX_GLSJ35',
	  'emberModule': '付费设备占比',
	  'pageCategory': '指标分析',
	  'module': '占比',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围的新增付费设备中，不同广告网络的设备数量及占比，去重',
	  'id': '10000035',
	  'metricName': ''
	}, {
	  'name': 'Index_ZBFX_GLSJ36',
	  'emberModule': '付费额占比',
	  'pageCategory': '指标分析',
	  'module': '占比',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '概览数据',
	  'metricDefinition': '所选日期范围内，不同广告网络平台的新增激活设备产生的付费总额及占比；',
	  'id': '10000036',
	  'metricName': ''
	}, {
	  'name': 'Index_ZBFX_SSTJ37',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '实时指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '实时统计',
	  'metricDefinition': '今日实时广告被点击的数量；',
	  'id': '10000037',
	  'metricName': '点击'
	}, {
	  'name': 'Index_ZBFX_SSTJ38',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '实时指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '实时统计',
	  'metricDefinition': '今日实时产生的广告新增激活设备数；',
	  'id': '10000038',
	  'metricName': '激活'
	}, {
	  'name': 'Index_ZBFX_SSTJ39',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '实时指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '实时统计',
	  'metricDefinition': '转化率=安装/点击',
	  'id': '10000039',
	  'metricName': '转化率'
	}, {
	  'name': 'Index_ZBFX_SSTJ40',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '实时指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '实时统计',
	  'metricDefinition': '今日实时统计的活跃设备数；',
	  'id': '10000040',
	  'metricName': '今日累计活跃'
	}, {
	  'name': 'Index_ZBFX_SSTJ41',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '实时指标分析',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '实时统计',
	  'metricDefinition': '今日实时统计的新增激活设备付费金额；',
	  'id': '10000041',
	  'metricName': '今日累计付费'
	}, {
	  'name': 'Index_ZBFX_SSTJ42',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '实时数据趋势',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '实时统计',
	  'metricDefinition': '今日实时广告被点击的数量；',
	  'id': '10000042',
	  'metricName': '点击'
	}, {
	  'name': 'Index_ZBFX_SSTJ43',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '实时数据趋势',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '实时统计',
	  'metricDefinition': '今日实时产生的广告新增激活设备数；',
	  'id': '10000043',
	  'metricName': '激活'
	}, {
	  'name': 'Index_ZBFX_SSTJ44',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '实时数据趋势',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '实时统计',
	  'metricDefinition': '转化率=安装/点击',
	  'id': '10000044',
	  'metricName': '转化率'
	}, {
	  'name': 'Index_ZBFX_SSTJ45',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '实时数据趋势',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '实时统计',
	  'metricDefinition': '今日实时统计的活跃设备数；',
	  'id': '10000045',
	  'metricName': '活跃'
	}, {
	  'name': 'Index_ZBFX_SSTJ46',
	  'emberModule': '',
	  'pageCategory': '指标分析',
	  'module': '实时数据趋势',
	  'visibility': '1',
	  'metricType': 'tips指标',
	  'pageName': '实时统计',
	  'metricDefinition': '今日实时统计的新增激活设备付费金额；',
	  'id': '10000046',
	  'metricName': '付费额'
	}];

/***/ },

/***/ 656:
/*!***********************************************!*\
  !*** ./assets/tracking/widgets/check_box.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'check_box',
	
	  propTypes: {
	    name: _react.PropTypes.string.isRequired,
	    onChange: _react.PropTypes.func.isRequired,
	    label: _react.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      label: '自然流量'
	    };
	  },
	  onChange: function onChange(e) {
	    if (e.target.checked) {
	      this.props.onChange(2);
	    } else {
	      this.props.onChange(1);
	    }
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        this.props.name
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pull-right' },
	        _react2.default.createElement(
	          'label',
	          null,
	          _react2.default.createElement('input', { type: 'checkbox', onChange: this.onChange }),
	          this.props.label
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 755:
/*!*************************************************!*\
  !*** ./assets/tracking/pages/summary/index.jsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _container = __webpack_require__(/*! ../../components/mixed_panel/container.jsx */ 591);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _utils = __webpack_require__(/*! dejs/lib/utils */ 592);
	
	var utils = _interopRequireWildcard(_utils);
	
	var _tips = __webpack_require__(/*! ../../components/tips.jsx */ 608);
	
	var _tips2 = _interopRequireDefault(_tips);
	
	var _date_filter = __webpack_require__(/*! ../../components/date_filter.jsx */ 609);
	
	var _date_filter2 = _interopRequireDefault(_date_filter);
	
	var _tips3 = __webpack_require__(/*! ../../helpers/tips.js */ 655);
	
	var _container_header = __webpack_require__(/*! ../../widgets/container_header.jsx */ 569);
	
	var _container_header2 = _interopRequireDefault(_container_header);
	
	var _check_box = __webpack_require__(/*! ../../widgets/check_box.jsx */ 656);
	
	var _check_box2 = _interopRequireDefault(_check_box);
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _moment = __webpack_require__(/*! moment */ 657);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Download from '../../components/download.jsx'
	/**
	 * 概览数据
	 */
	
	var analysisTips = _lodash2.default.filter(_tips3.tips, 'module', '概览指标分析');
	var ratioTips = _lodash2.default.filter(_tips3.tips, 'module', '占比');
	var eventTips = _lodash2.default.filter(_tips3.tips, 'module', '点击及安装');
	
	exports.default = _react2.default.createClass({
	  displayName: 'summary',
	
	  propTypes: {
	    children: _react.PropTypes.any,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object,
	    params: _react.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      uid: window.App.uid,
	      appid: this.props.params.appid,
	      startdate: (0, _moment2.default)().add(-1, 'days').format('YYYYMMDD'),
	      enddate: (0, _moment2.default)().add(-7, 'days').format('YYYYMMDD'),
	      topn: 10,
	      activeType: 1,
	      eventId: 1
	    };
	  },
	  showChildLevel: function showChildLevel(row, level) {
	    var tabConfig = this.refs.summaryAnalysis.getLevelConfig('level' + level)[0];
	    this.refs.summaryAnalysis.dispatchAction('mixedPanelShowChildLevel', {
	      data: utils.tryExec(tabConfig.data, this, row),
	      url: tabConfig.url,
	      level: level,
	      rowData: row,
	      breadCrumb: row.x,
	      tabConfig: tabConfig
	    });
	  },
	  setDateFilter: function setDateFilter(startDate, endDate, interval) {
	    this.setState({
	      startdate: startDate,
	      enddate: endDate
	    }, function () {
	      this.refs.summaryClickInstall.reload();
	      this.refs.summaryActiveRate.reload();
	      this.refs.summaryRatioInstall.reload();
	      this.refs.summaryAnalysis.reload();
	      this.refs.summaryEvent.reload();
	      this.refs.summaryRatioRealInstall.reload();
	      this.refs.summaryRatioActive.reload();
	      this.refs.summaryRatioRevenue.reload();
	    });
	  },
	  setActiveTypeRatioRealInstall: function setActiveTypeRatioRealInstall(activeType) {
	    this.setState({ activeTypeRatioRealInstall: activeType }, function () {
	      this.refs.summaryRatioRealInstall.onTabClick(0);
	    });
	  },
	  setActiveTypeRatioPayUser: function setActiveTypeRatioPayUser(activeType) {
	    this.setState({ activeTypeRatioPayUser: activeType }, function () {
	      this.refs.summaryRatioActive.onTabClick(0);
	    });
	  },
	  setActiveTypeRatioRevenue: function setActiveTypeRatioRevenue(activeType) {
	    this.setState({ activeTypeRatioRevenue: activeType }, function () {
	      this.refs.summaryRatioRevenue.onTabClick(0);
	    });
	  },
	  formatCurrency: function formatCurrency(currency) {
	    return _react2.default.createElement(
	      'span',
	      { className: 'currency' },
	      utils.asCurrency(currency)
	    );
	  },
	  render: function render() {
	    var _this = this;
	
	    var clickInstallLvl0 = [{
	      url: '/overviewAppSummary.do',
	      data: function data() {
	        return _this.state;
	      },
	      columns: [{ title: '日期', dataIndex: 'x', width: '25%', key: '0' }, { title: '点击', dataIndex: 'y0', width: '25%', key: '1' }, { title: '推广安装', dataIndex: 'y1', width: '25%', key: '2' }, { title: '自然安装', dataIndex: 'y2', width: '25%', key: '3' }],
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false
	    }];
	
	    var analysisSharedColumns = [{ title: '点击', dataIndex: 'y0', key: '1', width: '8%',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          utils.asInteger(val)
	        );
	      }
	    }, { title: '激活', dataIndex: 'y1', key: '2', width: '8%',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          utils.asInteger(val)
	        );
	      }
	    }, { title: '转化率', dataIndex: 'y2', key: '3', width: '8%',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          utils.asPercentage(val)
	        );
	      }
	    }, { title: '平均活跃', dataIndex: 'y3', key: '4', width: '8%',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          utils.asInteger(val)
	        );
	      }
	    }, { title: '付费数', dataIndex: 'y4', key: '5', width: '8%',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          utils.asInteger(val)
	        );
	      }
	    }, { title: '付费额', dataIndex: 'y5', key: '6', width: '8%',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          { className: 'currency' },
	          utils.asCurrency(val)
	        );
	      }
	    }, { title: '平均ARPU', dataIndex: 'y6', key: '7', width: '8%',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          utils.asInteger(val)
	        );
	      }
	    }, { title: '平局ARPPU', dataIndex: 'y7', key: '8', width: '8%',
	      render: function render(val, row, index) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          utils.asInteger(val)
	        );
	      }
	    }];
	
	    var analysisLvl0 = [{
	      url: '/overviewChannelSummaryByAppid.do',
	      data: function data() {
	        return _this.state;
	      },
	      columns: [{ title: '广告网络', dataIndex: 'x', key: '0', width: '12%', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: 'javascript:;', onClick: _this.showChildLevel.bind(_this, row, 1) },
	              val
	            )
	          );
	        } }].concat(analysisSharedColumns),
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      formatters: ['合计', utils.asInteger, utils.asInteger, utils.asPercentage, utils.asInteger, utils.asInteger, this.formatCurrency, utils.asInteger, utils.asInteger]
	    }];
	
	    var analysisLvl1 = [{
	      url: '/overviewCampaignSummaryByChannelid.do',
	      data: function data(row) {
	        return Object.assign({}, _this.state, {
	          channel: row.id
	        });
	      },
	      columns: [{ title: '广告网络', dataIndex: 'x', key: '0', width: '12%', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: 'javascript:;', onClick: _this.showChildLevel.bind(_this, row, 2) },
	              val
	            )
	          );
	        } }].concat(analysisSharedColumns),
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      formatters: ['合计', utils.asInteger, utils.asInteger, utils.asPercentage, utils.asInteger, utils.asInteger, this.formatCurrency, utils.asInteger, utils.asInteger]
	    }];
	
	    var analysisLvl2 = [{
	      url: '/overviewPublisherSummaryByCampaign.do',
	      data: function data(row) {
	        return Object.assign({}, _this.state, {
	          campaign: row.id
	        });
	      },
	      columns: [{ title: '广告网络', dataIndex: 'x', key: '0', width: '12%', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: 'javascript:;', onClick: _this.showChildLevel.bind(_this, row, 3) },
	              val
	            )
	          );
	        } }].concat(analysisSharedColumns),
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      formatters: ['合计', utils.asInteger, utils.asInteger, utils.asPercentage, utils.asInteger, utils.asInteger, this.formatCurrency, utils.asInteger, utils.asInteger]
	    }];
	
	    var analysisLvl3 = [{
	      url: '/overviewSitesummaryByPublisher.do',
	      data: function data(row) {
	        return Object.assign({}, _this.state, {
	          publisher: row.x,
	          campaign: _this.props.states.summaryAnalysis.breadCrumbRowList[1].id
	        });
	      },
	      columns: [{ title: '广告网络', dataIndex: 'x', key: '0', width: '12%' }].concat(analysisSharedColumns),
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      formatters: ['合计', utils.asInteger, utils.asInteger, utils.asPercentage, utils.asInteger, utils.asInteger, this.formatCurrency, utils.asInteger, utils.asInteger]
	    }];
	
	    var tabShared = {
	      url: '/overviewTotalChannelSummaryByEventid.do',
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      subTabName: '汇总',
	      showSwitcher: false,
	      children: [{
	        url: '/overviewChannelSummaryByEventid.do',
	        tabName: '分渠道',
	        data: function data() {
	          return _this.state;
	        },
	        rowKey: function rowKey(row) {
	          return row.x;
	        },
	        showSwitcher: false
	      }]
	    };
	
	    var EventLvl0 = [Object.assign({
	      tabName: '点击',
	      data: function data() {
	        _this.setState({ eventId: 1 });
	        return Object.assign({}, _this.state, {
	          eventId: 1
	        });
	      }
	    }, tabShared), Object.assign({
	      tabName: '激活',
	      data: function data() {
	        _this.setState({ eventId: 2 });
	        return Object.assign({}, _this.state, {
	          eventId: 2
	        });
	      }
	    }, tabShared), Object.assign({
	      tabName: '转化率',
	      data: function data() {
	        _this.setState({ eventId: 3 });
	        return Object.assign({}, _this.state, {
	          eventId: 3
	        });
	      }
	    }, tabShared), Object.assign({
	      tabName: '平均活跃',
	      data: function data() {
	        _this.setState({ eventId: 12 });
	        return Object.assign({}, _this.state, {
	          eventId: 12
	        });
	      }
	    }, tabShared), Object.assign({
	      tabName: '付费数',
	      data: function data() {
	        _this.setState({ eventId: 4 });
	        return Object.assign({}, _this.state, {
	          eventId: 4
	        });
	      }
	    }, tabShared), Object.assign({
	      tabName: '付费额',
	      data: function data() {
	        _this.setState({ eventId: 6 });
	        return Object.assign({}, _this.state, {
	          eventId: 6
	        });
	      }
	    }, tabShared), Object.assign({
	      tabName: '平均ARPU',
	      data: function data() {
	        _this.setState({ eventId: 13 });
	        return Object.assign({}, _this.state, {
	          eventId: 13
	        });
	      }
	    }, tabShared), Object.assign({
	      tabName: '平均ARPPU',
	      data: function data() {
	        _this.setState({ eventId: 14 });
	        return Object.assign({}, _this.state, {
	          eventId: 14
	        });
	      }
	    }, tabShared)];
	
	    var activeRate = [{
	      url: '/overviewActiveRate.do',
	      data: function data() {
	        return _this.state;
	      },
	      columns: [{ title: 'x', dataIndex: 'x', key: '0' }, { title: 'y2', dataIndex: 'y2', key: '1' }],
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      chart: { chart: { type: 'column' } },
	      showSwitcher: false
	    }];
	
	    var ratioInstall = [{
	      url: '/overviewInstallRatio.do',
	      data: function data() {
	        return _this.state;
	      },
	      columns: [{ title: 'x', dataIndex: 'x', key: '0' }, { title: 'y2', dataIndex: 'y2', key: '1' }],
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      chart: { chart: { type: 'pie' } },
	      showSwitcher: false
	    }];
	
	    // let ratioRealInstall = [
	    //   {
	    //     url: '/overviewActiveRate.do',
	    //     data: () => {
	    //       return Object.assign({}, this.state, {
	    //         activeType: this.state.activeTypeRatioRealInstall
	    //       })
	    //     },
	    //     columns: [
	    //       {title: 'x', dataIndex: 'x', key: '2', render: (val, row, index) => {
	    //         return (
	    //           <span>
	    //             {val}
	    //           </span>
	    //         )
	    //       }},
	    //       {title: 'y2', dataIndex: 'y2', key: '6'}
	    //     ],
	    //     rowKey: (row) => row.x,
	    //     chart: {chart: {type: 'pie'}},
	    //     showSwitcher: false
	    //   }
	    // ]
	
	    var ratioPayUser = [{
	      url: '/overviewPayUserRatio.do',
	      data: function data() {
	        return Object.assign({}, _this.state, {
	          activeType: _this.state.activeTypeRatioPayUser
	        });
	      },
	      columns: [{ title: 'x', dataIndex: 'x', key: '2', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            val
	          );
	        } }, { title: 'y2', dataIndex: 'y2', key: '6' }],
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      chart: { chart: { type: 'pie' } },
	      showSwitcher: false
	    }];
	
	    var ratioRevenue = [{
	      url: '/overviewRevenueRatio.do',
	      data: function data() {
	        return Object.assign({}, _this.state, {
	          activeType: _this.state.activeTypeRatioRevenue
	        });
	      },
	      columns: [{ title: 'x', dataIndex: 'x', key: '2', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            val
	          );
	        } }, { title: 'y2', dataIndex: 'y2', key: '6' }],
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      chart: { chart: { type: 'pie' } },
	      showSwitcher: false
	    }];
	
	    var summaryClickInstallTitle = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        '点击及安装'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pull-right' },
	        _react2.default.createElement(_tips2.default, { tips: eventTips })
	      )
	    );
	
	    var summaryAnalysisTitle = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        '概览指标分析'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pull-right' },
	        _react2.default.createElement(_tips2.default, { tips: analysisTips })
	      )
	    );
	
	    var summaryEventTitle = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        '概览指标对比'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pull-right' },
	        _react2.default.createElement(_tips2.default, { tips: eventTips })
	      )
	    );
	
	    var summaryRatioTitle = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        '占比'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pull-right' },
	        _react2.default.createElement(_tips2.default, { tips: ratioTips })
	      )
	    );
	
	    // const RatioRealInstallTitle = (
	    //   <CheckBox name="有效安装占比" onChange={this.setActiveTypeRatioRealInstall} />
	    // )
	
	    var ratioPayUserTitle = _react2.default.createElement(_check_box2.default, { name: '付费设备占比', onChange: this.setActiveTypeRatioPayUser });
	
	    var ratioRevenueTitle = _react2.default.createElement(_check_box2.default, { name: '付费额占比', onChange: this.setActiveTypeRatioRevenue });
	
	    var props = this.props;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _container_header2.default,
	        null,
	        _react2.default.createElement(_date_filter2.default, { setDateFilter: this.setDateFilter, showInterval: false })
	      ),
	      _react2.default.createElement(_container2.default, {
	        ref: 'summaryClickInstall',
	        id: 'summaryClickInstall',
	        actions: props.actions,
	        states: props.states,
	        title: summaryClickInstallTitle,
	        layout: 'chart',
	        level0: clickInstallLvl0
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-6' },
	          _react2.default.createElement(_container2.default, {
	            id: 'summaryActiveRate',
	            ref: 'summaryActiveRate',
	            actions: props.actions,
	            states: props.states,
	            title: '转化对比',
	            layout: 'chart',
	            level0: activeRate
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-6' },
	          _react2.default.createElement(_container2.default, {
	            id: 'summaryRatioInstall',
	            ref: 'summaryRatioInstall',
	            actions: props.actions,
	            states: props.states,
	            title: '安装占比',
	            layout: 'chart',
	            level0: ratioInstall
	          })
	        )
	      ),
	      _react2.default.createElement(_container2.default, {
	        id: 'summaryAnalysis',
	        ref: 'summaryAnalysis',
	        actions: props.actions,
	        states: props.states,
	        title: summaryAnalysisTitle,
	        layout: 'table',
	        level0: analysisLvl0,
	        level1: analysisLvl1,
	        level2: analysisLvl2,
	        level3: analysisLvl3
	      }),
	      _react2.default.createElement(_container2.default, {
	        id: 'summaryEvent',
	        ref: 'summaryEvent',
	        actions: props.actions,
	        states: props.states,
	        title: summaryEventTitle,
	        layout: 'chart',
	        level0: EventLvl0
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: 'panel panel-track' },
	        _react2.default.createElement(
	          'div',
	          { className: 'panel-heading' },
	          summaryRatioTitle
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'panel-body' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row panelPieRow' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement(_container2.default, {
	                id: 'summaryRatioActive',
	                ref: 'summaryRatioActive',
	                actions: props.actions,
	                states: props.states,
	                title: ratioPayUserTitle,
	                layout: 'chart',
	                level0: ratioPayUser
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement(_container2.default, {
	                id: 'summaryRatioRevenue',
	                ref: 'summaryRatioRevenue',
	                actions: props.actions,
	                states: props.states,
	                title: ratioRevenueTitle,
	                layout: 'chart',
	                level0: ratioRevenue
	              })
	            )
	          ),
	          _react2.default.createElement('div', { className: 'row panelPieRow' })
	        )
	      )
	    );
	  }
	});
	
	// <MixedPanelContainer
	//   id="summaryRatioRealInstall"
	//   ref="summaryRatioRealInstall"
	//   actions={props.actions}
	//   states={props.states}
	//   title={RatioRealInstallTitle}
	//   layout="chart"
	//   level0={ratioRealInstall}
	//   chart={{legend: {enabled: false}}}
	// />

/***/ },

/***/ 756:
/*!**************************************************!*\
  !*** ./assets/tracking/pages/realtime/index.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _container = __webpack_require__(/*! ../../components/mixed_panel/container.jsx */ 591);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _utils = __webpack_require__(/*! dejs/lib/utils */ 592);
	
	var utils = _interopRequireWildcard(_utils);
	
	var _tips = __webpack_require__(/*! ../../components/tips.jsx */ 608);
	
	var _tips2 = _interopRequireDefault(_tips);
	
	var _tips3 = __webpack_require__(/*! ../../helpers/tips.js */ 655);
	
	var _container_header = __webpack_require__(/*! ../../widgets/container_header.jsx */ 569);
	
	var _container_header2 = _interopRequireDefault(_container_header);
	
	var _clock = __webpack_require__(/*! ../../widgets/clock.jsx */ 757);
	
	var _clock2 = _interopRequireDefault(_clock);
	
	var _moment = __webpack_require__(/*! moment */ 657);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _timer = __webpack_require__(/*! dejs/lib/timer */ 758);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _changing_number = __webpack_require__(/*! ../../components/changing_number.jsx */ 760);
	
	var _changing_number2 = _interopRequireDefault(_changing_number);
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var analysisTips = _lodash2.default.filter(_tips3.tips, 'module', '实时指标分析');
	// import Download from '../../components/download.jsx'
	/**
	 * 实时统计
	 */
	
	var trendingTips = _lodash2.default.filter(_tips3.tips, 'module', '实时数据趋势');
	
	exports.default = _react2.default.createClass({
	  displayName: 'realtime',
	
	  propTypes: {
	    children: _react.PropTypes.any,
	    actions: _react.PropTypes.object,
	    states: _react.PropTypes.object,
	    params: _react.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      uid: window.App.uid,
	      appid: this.props.params.appid,
	      startdate: this.getToday(),
	      enddate: this.getToday(),
	      timer: new _timer2.default(this.refreshData, 5000)
	    };
	  },
	  refreshData: function refreshData() {
	    this.refs.realtimeAnalysis.reload();
	    this.refs.realtimeTrending.reload();
	  },
	  componentDidMount: function componentDidMount() {
	    this.state.timer.run();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.state.timer.cancel();
	  },
	  getToday: function getToday() {
	    return (0, _moment2.default)().format('YYYYMMDD');
	  },
	  showChildLevel: function showChildLevel(row, level) {
	    var tabConfig = this.refs.realtimeAnalysis.getLevelConfig('level' + level)[0];
	    this.refs.realtimeAnalysis.dispatchAction('mixedPanelShowChildLevel', {
	      data: utils.tryExec(tabConfig.data, this, row),
	      url: tabConfig.url,
	      level: level,
	      rowData: row,
	      breadCrumb: row.x,
	      tabConfig: tabConfig
	    });
	  },
	  formatInt: function formatInt(val) {
	    return _react2.default.createElement(_changing_number2.default, { num: val, formatter: utils.asInteger });
	  },
	  formatCurrency: function formatCurrency(val) {
	    return _react2.default.createElement(_changing_number2.default, { num: val, formatter: utils.asCurrency });
	  },
	  formatPercentage: function formatPercentage(val) {
	    return _react2.default.createElement(_changing_number2.default, { num: val, formatter: utils.asPercentage });
	  },
	  render: function render() {
	    var _this = this;
	
	    var analysisSharedColumns = [{ title: '点击', dataIndex: 'y0', width: '15%', key: '1' }, { title: '激活', dataIndex: 'y1', width: '15%', key: '2' }, { title: '转化率', dataIndex: 'y2', width: '15%', key: '3' }, { title: '今日累计活跃', dataIndex: 'y3', width: '15%', key: '4' }, { title: '今日累计付费', dataIndex: 'y4', width: '15%', key: '5' }];
	
	    var analysisLvl0 = [{
	      url: '/overviewChannelRealTimeData.do',
	      data: function data() {
	        return _this.state;
	      },
	      columns: [{ title: '全部', dataIndex: 'x', key: '0', width: '10%', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: 'javascript:;', onClick: _this.showChildLevel.bind(_this, row, 1) },
	              val
	            )
	          );
	        } }].concat(analysisSharedColumns),
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      formatters: ['合计', this.formatInt, this.formatInt, this.formatPercentage, this.formatInt, this.formatCurrency],
	      summaryFormatters: ['合计', this.formatInt, this.formatInt, this.formatPercentage, this.formatInt, this.formatCurrency]
	    }];
	
	    var ltvLvl1 = [{
	      url: '/overviewCampaignRealTimeData.do',
	      data: function data(row) {
	        return Object.assign({}, _this.state, {
	          channel: row.id
	        });
	      },
	      columns: [{ title: '全部', dataIndex: 'x', key: '0', width: '10%', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: 'javascript:;', onClick: _this.showChildLevel.bind(_this, row, 2) },
	              val
	            )
	          );
	        } }].concat(analysisSharedColumns),
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      formatters: ['合计', this.formatInt, this.formatInt, this.formatPercentage, this.formatInt, this.formatCurrency]
	    }];
	
	    var ltvLvl2 = [{
	      url: '/overviewPublisherRealTimeData.do',
	      data: function data(row) {
	        return Object.assign({}, _this.state, {
	          campaign: row.id
	        });
	      },
	      columns: [{ title: '全部', dataIndex: 'x', key: '0', width: '10%', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: 'javascript:;', onClick: _this.showChildLevel.bind(_this, row, 3) },
	              val
	            )
	          );
	        } }].concat(analysisSharedColumns),
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      formatters: ['合计', this.formatInt, this.formatInt, this.formatPercentage, this.formatInt, this.formatCurrency]
	    }];
	
	    var ltvLvl3 = [{
	      url: '/overviewSiteRealTimeData.do',
	      data: function data(row) {
	        return Object.assign({}, _this.state, {
	          publisher: row.x,
	          campaign: _this.props.states.coreLtv.breadCrumbRowList[1].id
	        });
	      },
	      columns: [{ title: '全部', dataIndex: 'x', key: '0', width: '10%', render: function render(val, row, index) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            val
	          );
	        } }].concat(analysisSharedColumns),
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      showSwitcher: false,
	      formatters: ['合计', this.formatInt, this.formatInt, this.formatPercentage, this.formatInt, this.formatCurrency]
	    }];
	
	    var tabShared = {
	      url: '/overviewTotalTopNChannelRealTimeData.do',
	      columns: [{ title: 'Total', dataIndex: 'y0', key: '0', width: '100%' }],
	      rowKey: function rowKey(row) {
	        return row.x;
	      },
	      formatters: [utils.asInteger],
	      subTabName: '汇总',
	      showSwitcher: false,
	      children: [{
	        url: '/overviewTopNChannelRealTimeData.do',
	        tabName: '分渠道',
	        data: function data() {
	          return _this.state;
	        },
	        columns: [{ title: 'Total', dataIndex: 'y0', key: '0', width: '100%' }],
	        rowKey: function rowKey(row) {
	          return row.x;
	        },
	        showSwitcher: false,
	        avgFields: ['y2'],
	        formatters: [utils.asInteger]
	      }]
	    };
	
	    var trendingLvl0 = [Object.assign({
	      tabName: '点击',
	      data: function data() {
	        _this.setState({ eventId: 1 });
	        return Object.assign({}, _this.state, {
	          eventId: 1
	        });
	      }
	    }, tabShared), Object.assign({
	      tabName: '激活',
	      data: function data() {
	        _this.setState({ eventId: 2 });
	        return Object.assign({}, _this.state, {
	          eventId: 2
	        });
	      }
	    }, tabShared), Object.assign({
	      tabName: '转化率',
	      data: function data() {
	        _this.setState({ eventId: 3 });
	        return Object.assign({}, _this.state, {
	          eventId: 3
	        });
	      }
	    }, tabShared), Object.assign({
	      tabName: '活跃',
	      data: function data() {
	        _this.setState({ eventId: 12 });
	        return Object.assign({}, _this.state, {
	          eventId: 12
	        });
	      }
	    }, tabShared), Object.assign({
	      tabName: '付费额',
	      data: function data() {
	        _this.setState({ eventId: 4 });
	        return Object.assign({}, _this.state, {
	          eventId: 6
	        });
	      }
	    }, tabShared)];
	
	    var analysisTitle = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        '实时指标分析'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pull-right' },
	        _react2.default.createElement(_tips2.default, { tips: analysisTips })
	      )
	    );
	
	    var trendingTitle = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        '实时数据趋势'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pull-right' },
	        _react2.default.createElement(_tips2.default, { tips: trendingTips })
	      )
	    );
	
	    var props = this.props;
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _container_header2.default,
	        null,
	        _react2.default.createElement(_clock2.default, { UTCOffset: '8' })
	      ),
	      _react2.default.createElement(_container2.default, {
	        id: 'realtimeAnalysis',
	        ref: 'realtimeAnalysis',
	        actions: props.actions,
	        states: props.states,
	        title: analysisTitle,
	        layout: 'table',
	        level0: analysisLvl0,
	        level1: ltvLvl1,
	        level2: ltvLvl2,
	        level3: ltvLvl3
	      }),
	      _react2.default.createElement(_container2.default, {
	        id: 'realtimeTrending',
	        ref: 'realtimeTrending',
	        actions: props.actions,
	        states: props.states,
	        title: trendingTitle,
	        layout: 'chart',
	        level0: trendingLvl0
	      })
	    );
	  }
	});

/***/ },

/***/ 757:
/*!*******************************************!*\
  !*** ./assets/tracking/widgets/clock.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _timer = __webpack_require__(/*! dejs/lib/timer */ 758);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'clock',
	
	  propTypes: {
	    UTCOffset: _react2.default.PropTypes.string
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      timer: new _timer2.default(this.setTime, 1000)
	    };
	  },
	
	  setTime: function setTime() {
	    var currentdate = new Date();
	    var hours = currentdate.getUTCHours() + parseInt(this.props.UTCOffset, 10);
	
	    // correct for number over 24, and negatives
	    if (hours >= 24) {
	      hours -= 24;
	    }
	    if (hours < 0) {
	      hours += 12;
	    }
	
	    // add leading zero, first convert hours to string
	    hours = '' + hours;
	    if (hours.length === 1) {
	      hours = '0' + hours;
	    }
	
	    // minutes are the same on every time zone
	    var minutes = currentdate.getUTCMinutes();
	
	    // add leading zero, first convert hours to string
	    minutes = '' + minutes;
	    if (minutes.length === 1) {
	      minutes = '0' + minutes;
	    }
	
	    var seconds = currentdate.getUTCSeconds();
	    seconds = seconds.toString();
	    if (seconds.length === 1) {
	      seconds = '0' + seconds;
	    }
	
	    this.setState({
	      hours: hours,
	      minutes: minutes,
	      seconds: seconds
	    });
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.setTime();
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.state.timer.run();
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.state.timer.cancel();
	  },
	
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'city-row', ref: 'cityRow' },
	      _react2.default.createElement(
	        'h3',
	        { className: 'city-time' },
	        this.state.hours,
	        ':',
	        this.state.minutes,
	        ':',
	        this.state.seconds
	      )
	    );
	  }
	});

/***/ },

/***/ 758:
/*!***********************************!*\
  !*** ./~/dejs/lib/timer/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (fn, duration) {
	  var _this = this;
	
	  /**
	   * running期间多次调用会执行多次
	   * 下个执行点为轮询执行完毕的duration之后
	   */
	  this.duration = duration;
	  this.status = _const.RUNNING;
	  this.timer = setTimeout(function () {
	    return _this.run();
	  }, this.duration);
	
	  // 立即执行一次
	  this.run = function () {
	    if (_this.status === _const.CANCELLED) return;
	
	    // 清除上次的定时器
	    clearTimeout(_this.timer);
	    attempt(fn);
	    _this.timer = setTimeout(function () {
	      return _this.run();
	    }, _this.duration);
	  };
	
	  // 重新设置定时器的轮询周期
	  this.reset = function (num) {
	    if (_this.status === _const.CANCELLED) return;
	
	    _this.stop();
	    if (num) {
	      _this.duration = num;
	    }
	    _this.run();
	  };
	
	  // 暂停
	  this.stop = function () {
	    _this.status = _const.STOPPED;
	    clearTimeout(_this.timer);
	  };
	
	  // 永久停止timer防止被错误启动
	  this.cancel = function () {
	    this.status = _const.CANCELLED;
	    clearTimeout(this.timer);
	  };
	};
	
	var _const = __webpack_require__(/*! ./const.js */ 759);
	
	function attempt(fn, context, args) {
	  if (typeof fn !== 'function') return null;
	
	  var result = null;
	  try {
	    result = fn.apply(context, args);
	  } catch (e) {
	    console.log(e);
	  }
	
	  return result;
	} /**
	   * a human oriented timer for javascript
	   *
	   * var timer = new Timer(func, 2000)
	   * timer.run()
	   * timer.stop()
	   * timer.reset()
	   * timer.reset(1000)
	   * timer.cancel()
	   */

/***/ },

/***/ 759:
/*!***********************************!*\
  !*** ./~/dejs/lib/timer/const.js ***!
  \***********************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var STOPPED = exports.STOPPED = 1;
	
	var CANCELLED = exports.CANCELLED = 2;
	
	var RUNNING = exports.RUNNING = 3;

/***/ },

/***/ 760:
/*!********************************************************!*\
  !*** ./assets/tracking/components/changing_number.jsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactTweenState = __webpack_require__(/*! react-tween-state */ 761);
	
	var _reactTweenState2 = _interopRequireDefault(_reactTweenState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'changing_number',
	
	  mixins: [_reactTweenState2.default.Mixin],
	
	  propTypes: {
	    num: _react.PropTypes.number.isRequired,
	    formatter: _react.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      num: 0
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      start: 1
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var delta = nextProps.num - this.props.num || 0;
	    if (delta >= 0) {
	      this.setState({ delta: '+' + delta, color: 'green' });
	    } else if (delta < 0) {
	      this.setState({ delta: '' + delta, color: 'red' });
	    }
	    this.animate();
	  },
	  animate: function animate() {
	    this.tweenState('start', {
	      beginValue: 1,
	      endValue: 0,
	      duration: 1500
	    });
	  },
	  format: function format(val) {
	    return this.props.formatter.call(val);
	  },
	  render: function render() {
	    var animation = {
	      color: this.state.color,
	      opacity: this.getTweeningValue('start'),
	      top: (this.getTweeningValue('start') * 2).toString() + 'px',
	      fontSize: '12px',
	      position: 'absolute'
	    };
	
	    return _react2.default.createElement(
	      'span',
	      { style: { display: 'inline-block', position: 'relative' } },
	      _react2.default.createElement(
	        'span',
	        null,
	        this.format(this.props.num)
	      ),
	      _react2.default.createElement(
	        'span',
	        { style: animation },
	        this.state.delta
	      )
	    );
	  }
	});

/***/ },

/***/ 762:
/*!*****************************************!*\
  !*** ./assets/tracking/store/index.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 166);
	
	var _reduxLogger = __webpack_require__(/*! redux-logger */ 763);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reduxAjaxMiddleware = __webpack_require__(/*! dejs/lib/redux-ajax-middleware */ 764);
	
	var _reduxAjaxMiddleware2 = _interopRequireDefault(_reduxAjaxMiddleware);
	
	var _index = __webpack_require__(/*! ../reducers/index.jsx */ 765);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loggerMiddleware = (0, _reduxLogger2.default)({
	  level: 'info',
	  collapsed: true,
	  duration: true
	});
	
	var finalStoreCreator = undefined;
	
	if (true) {
	  finalStoreCreator = (0, _redux.applyMiddleware)(loggerMiddleware, _reduxAjaxMiddleware2.default)(_redux.createStore);
	} else {
	  finalStoreCreator = (0, _redux.applyMiddleware)(_reduxAjaxMiddleware2.default)(_redux.createStore);
	}
	
	exports.default = function () {
	  var initialState = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  return finalStoreCreator(_index2.default, initialState);
	};

/***/ },

/***/ 764:
/*!***************************************************!*\
  !*** ./~/dejs/lib/redux-ajax-middleware/index.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SUFFIX = undefined;
	exports.createAjax = createAjax;
	
	var _ajax = __webpack_require__(/*! ../ajax */ 234);
	
	var _ajax2 = _interopRequireDefault(_ajax);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var request = _ajax2.default; /**
	                               * redux ajax middle ware
	                               * flux standard action
	                               */
	
	var SUFFIX = exports.SUFFIX = {
	  OK: 'ok',
	  ERR: 'error'
	};
	
	// 使用自定义的ajax函数
	function createAjax() {
	  var xhr = arguments.length <= 0 || arguments[0] === undefined ? _ajax2.default : arguments[0];
	
	  request = xhr;
	}
	
	// action format
	// {
	//   type,
	//   payload, (post data or Error instance)
	//   error, (boolean)
	//   meta: {
	//     ajax: true,
	//     url: string,
	//     method: string (get/post),
	//     original: original action data
	//   }
	// }
	
	exports.default = function (store) {
	  return function (next) {
	    return function (action) {
	      if (!action.meta || !action.meta.ajax) {
	        next(action);
	        return;
	      }
	
	      var _action$meta = action.meta;
	      var url = _action$meta.url;
	      var method = _action$meta.method;
	      var original = _action$meta.original;
	
	      if (!url) {
	        throw new Error('action:' + action.type + '缺少meta.url');
	      }
	
	      // ajax动作发起
	      next(action);
	
	      request({
	        url: url,
	        method: method || 'post',
	        body: action.payload,
	        success: function success(json) {
	          store.dispatch({
	            type: action.type + '_' + SUFFIX.OK,
	            payload: json,
	            meta: {
	              original: original
	            }
	          });
	        },
	        fail: function fail(err, res) {
	          // 如果错误请求有输出，把响应结果全部赋值到err对象上
	          if (res && res.body) {
	            Object.assign(err, res.body);
	          }
	
	          store.dispatch({
	            type: action.type + '_' + SUFFIX.ERR,
	            payload: err,
	            error: true,
	            meta: {
	              original: original
	            }
	          });
	        }
	      });
	
	      next(action);
	    };
	  };
	};

/***/ },

/***/ 765:
/*!********************************************!*\
  !*** ./assets/tracking/reducers/index.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 166);
	
	var _app = __webpack_require__(/*! ./app.jsx */ 766);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _game = __webpack_require__(/*! ./game.jsx */ 767);
	
	var _game2 = _interopRequireDefault(_game);
	
	var _error = __webpack_require__(/*! ./error.jsx */ 768);
	
	var _error2 = _interopRequireDefault(_error);
	
	var _store = __webpack_require__(/*! ./store.jsx */ 769);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _channel = __webpack_require__(/*! ./channel.jsx */ 770);
	
	var _channel2 = _interopRequireDefault(_channel);
	
	var _summary = __webpack_require__(/*! ./summary.jsx */ 771);
	
	var _summary2 = _interopRequireDefault(_summary);
	
	var _mixed_panel = __webpack_require__(/*! ./mixed_panel.js */ 772);
	
	var _mixed_panel2 = _interopRequireDefault(_mixed_panel);
	
	var _reduxis = __webpack_require__(/*! dejs/lib/reduxis */ 605);
	
	var _reduxis2 = _interopRequireDefault(_reduxis);
	
	var _constants = __webpack_require__(/*! ../helpers/constants.jsx */ 292);
	
	var CONSTS = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mixedPanelReducers = _reduxis2.default.batchCreateReducers(['coreLtv', 'coreTrending', 'coreRatioClick', 'coreRatioActive', 'coreRatioRevenue', 'summaryClickInstall', 'summaryAnalysis', 'summaryEvent', 'summaryRatioRealInstall', 'summaryRatioActive', 'summaryRatioRevenue', 'summaryActiveRate', 'summaryRatioInstall', 'realtimeAnalysis', 'realtimeTrending'], _mixed_panel2.default, CONSTS.MIXED_PANEL_INITIAL_STATE);
	
	exports.default = (0, _redux.combineReducers)(Object.assign(mixedPanelReducers, {
	  app: _app2.default,
	  game: _game2.default,
	  error: _error2.default,
	  store: _store2.default,
	  channel: _channel2.default,
	  summary: _summary2.default
	}));

/***/ },

/***/ 766:
/*!******************************************!*\
  !*** ./assets/tracking/reducers/app.jsx ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];
	
	  // ajax开始
	  if (action.type === 'del_app') {
	    return Object.assign({}, state, {
	      delState: 'start'
	    });
	  }
	
	  // 成功请求
	  if (action.type === 'del_app_ok') {
	    window.location.reload();
	    return Object.assign({}, state, {
	      delState: 'success',
	      delAppID: action.payload.content.appid
	    });
	  }
	
	  // 请求失败
	  if (action.type === 'del_app_error') {
	    alert(action.payload.content);
	    return Object.assign({}, state, {
	      delMsg: action.payload,
	      delState: 'fail'
	    });
	  }
	
	  // ajax开始
	  if (action.type === 'create_app') {
	    return Object.assign({}, state, {
	      createState: 'start'
	    });
	  }
	
	  // 成功请求
	  if (action.type === 'create_app_ok') {
	    return Object.assign({}, state, {
	      created: action.payload,
	      createState: 'success'
	    });
	  }
	
	  // 请求失败
	  if (action.type === 'create_app_error') {
	    alert(action.payload.content);
	    return state;
	  }
	
	  // ajax开始
	  if (action.type === 'edit_app') {
	    return Object.assign({}, state, {
	      editState: 'start'
	    });
	  }
	
	  // 成功请求
	  if (action.type === 'edit_app_ok') {
	    return Object.assign({}, state, {
	      edit: action.payload.content,
	      editState: 'success'
	    });
	  }
	
	  // 请求失败
	  if (action.type === 'edit_app_error') {
	    alert(action.payload.content);
	    return Object.assign({}, state, {
	      editState: 'fail'
	    });
	  }
	
	  //导入
	  if (action.type === 'imp_app') {
	    debugger;
	    return Object.assign({}, state, {
	      importData: action.payload
	    });
	  }
	
	  // ajax开始
	  if (action.type === 'import_app') {
	    return Object.assign({}, state, {
	      createState: 'start'
	    });
	  }
	
	  // 成功请求
	  if (action.type === 'import_app_ok') {
	    return Object.assign({}, state, {
	      created: action.payload,
	      createState: 'success'
	    });
	  }
	
	  // 请求失败
	  if (action.type === 'import_app_error') {
	    alert(action.payload.content);
	    return Object.assign({}, state, {
	      createState: 'fail'
	    });
	  }
	
	  return state;
	};

/***/ },

/***/ 767:
/*!*******************************************!*\
  !*** ./assets/tracking/reducers/game.jsx ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];
	
	  // ajax开始
	  if (action.type === 'create_game') {
	    return Object.assign({}, state, {
	      loading: true
	    });
	  }
	
	  // 成功请求
	  if (action.type === 'create_game_ok') {
	    return Object.assign({}, state, {
	      created: action.payload,
	      loading: false
	    });
	  }
	
	  // 请求失败
	  if (action.type === 'create_game_error') {
	    return Object.assign({}, state, {
	      loading: false
	    });
	  }
	
	  if (action.type === 'del_game') {
	    return Object.assign({}, state, {
	      removed: action.payload,
	      loading: false
	    });
	  }
	
	  return state;
	};

/***/ },

/***/ 768:
/*!********************************************!*\
  !*** ./assets/tracking/reducers/error.jsx ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];
	
	  if (action.type === 'ajax_error') {
	    return Object.assign({}, state, {
	      ajax: action.payload
	    });
	  }
	
	  return state;
	};

/***/ },

/***/ 769:
/*!********************************************!*\
  !*** ./assets/tracking/reducers/store.jsx ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    loading: false,
	    items: [],
	    presetStores: [],
	    customStores: []
	  } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	
	    case 'get_stores':
	      return Object.assign({}, state, {
	        loading: true
	      });
	
	    case 'get_stores_ok':
	      return Object.assign({}, state, {
	        items: [].concat(_toConsumableArray(action.payload.content.content)),
	        totalPage: action.payload.content.totalPage,
	        totalRecord: action.payload.content.totalRecord,
	        loading: false
	      });
	
	    case 'get_stores_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'get_download_urls_ok':
	      var storesGduo = state.items;
	      var iGduo = storesGduo.findIndex(function (e, i, a) {
	        return e.id === action.payload.storeId;
	      });
	      storesGduo[iGduo].downloadUrls = action.payload.content.content;
	      return Object.assign({}, state, {
	        items: storesGduo
	      });
	
	    case 'get_download_urls_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'get_store_names':
	      return Object.assign({}, state, {
	        loading: true
	      });
	
	    case 'get_store_names_ok':
	      return Object.assign({}, state, {
	        presetStores: [].concat(_toConsumableArray(classifyStores(action.payload.content).preset)),
	        customStores: [].concat(_toConsumableArray(classifyStores(action.payload.content).custom)),
	        loading: false
	      });
	
	    case 'get_store_names_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'select_store_ok':
	      history.back();
	      return state;
	
	    case 'select_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'create_custom_store_ok':
	      return Object.assign({}, state, {
	        customStores: [].concat(_toConsumableArray(state.customStores), [{
	          id: action.payload.content.id,
	          name: action.payload.content.name,
	          type: 1
	        }])
	      });
	
	    case 'create_custom_store_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'del_custom_store_ok':
	      var customStoresDco = state.customStores;
	      var iDco = customStoresDco.findIndex(function (element, index, array) {
	        return element.id === action.payload.id;
	      });
	      customStoresDco.splice(iDco, 1);
	      return Object.assign({}, state, {
	        customStores: customStoresDco
	      });
	
	    case 'del_custom_store_error':
	      return state;
	
	    case 'create_download_url_ok':
	      var storesCduo = state.items;
	      var iCduo = storesCduo.findIndex(function (element, index, array) {
	        return element.id === action.payload.content.storeId;
	      });
	      storesCduo[iCduo].downloadUrls.push({
	        name: action.payload.content.name,
	        link: action.payload.content.link,
	        id: action.payload.content.id
	      });
	
	      return Object.assign({}, state, {
	        items: [].concat(_toConsumableArray(storesCduo))
	      });
	
	    case 'create_download_url_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'edit_download_url_ok':
	      var storesEduo = state.items;
	      var iEduo = storesEduo.findIndex(function (element, index, array) {
	        return element.id === action.payload.content.storeId;
	      });
	      var jEduo = storesEduo[iEduo].downloadUrls.findIndex(function (element, index, array) {
	        return element.id === action.payload.content.id;
	      });
	      storesEduo[iEduo].downloadUrls[jEduo] = {
	        id: action.payload.content.id,
	        link: action.payload.content.link,
	        name: action.payload.content.name
	      };
	      return Object.assign({}, state, {
	        items: [].concat(_toConsumableArray(storesEduo))
	      });
	
	    case 'edit_download_url_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'del_download_url_ok':
	      var storesDduo = state.items;
	      var iDduo = storesDduo.findIndex(function (element) {
	        return element.id === action.meta.original.storeId;
	      });
	      var jDduo = storesDduo[iDduo].downloadUrls.findIndex(function (element) {
	        return element.id === action.meta.original.id;
	      });
	      storesDduo[iDduo].downloadUrls.splice(jDduo, 1);
	      var resDduo = Object.assign({}, state, {
	        items: [].concat(_toConsumableArray(storesDduo))
	      });
	      return resDduo;
	
	    case 'del_download_url_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'del_store_ok':
	      var resDso = {};
	      var iDso = state.items.findIndex(function (e, i, a) {
	        return e.id === action.payload.content.id;
	      });
	      resDso = Object.assign({}, state, {
	        items: [].concat(_toConsumableArray(state.items.slice(0, iDso)), _toConsumableArray(state.items.slice(iDso + 1)))
	      });
	      return resDso;
	
	    case 'del_store_error':
	      alert(action.payload.content);
	      return state;
	
	    default:
	      return state;
	  }
	};
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function classifyStores(stores) {
	  var preset = [];
	  var custom = [];
	
	  for (var i = 0; i < stores.length; i++) {
	    switch (stores[i].type) {
	      case 0:
	        preset.push(stores[i]);
	        break;
	      case 1:
	        custom.push(stores[i]);
	        break;
	      default:
	        break;
	    }
	  }
	
	  return { preset: preset, custom: custom };
	}

/***/ },

/***/ 770:
/*!**********************************************!*\
  !*** ./assets/tracking/reducers/channel.jsx ***!
  \**********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    items: [],
	    loadingItemsDone: false,
	    presetChannels: [],
	    customChannels: [],
	    downloadUrlNames: [],
	    delCampaignFailed: false
	  } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	
	    case 'get_channels':
	      return Object.assign({}, state, {
	        loadingItemsDone: true
	      });
	
	    case 'get_channels_ok':
	      return Object.assign({}, state, {
	        items: [].concat(_toConsumableArray(action.payload.content.content)),
	        totalPage: action.payload.content.totalPage,
	        totalRecord: action.payload.content.totalRecord,
	        loading: false
	      });
	
	    case 'get_channels_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'get_campaigns_ok':
	      var channelGco = state.items;
	      var iGco = channelGco.findIndex(function (e, i, a) {
	        return e.channelId === action.payload.channelId;
	      });
	      channelGco[iGco].campaigns = action.payload.content.content;
	      return Object.assign({}, state, {
	        items: channelGco
	      });
	
	    case 'get_campaigns_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'get_channel_names':
	      return Object.assign({}, state, {
	        loading: true
	      });
	
	    case 'get_channel_names_ok':
	      return Object.assign({}, state, {
	        presetChannels: classifyChannels(action.payload.content).preset,
	        customChannels: classifyChannels(action.payload.content).custom,
	        loading: false
	      });
	
	    case 'get_channel_names_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'select_channel_ok':
	      // const channelsSco = removeSelectedChannel(state.presetChannels, state.customChannels, action.payload.channelId)
	      history.back();
	      return Object.assign({}, state, {
	        // items: [
	        //   ...state.items,
	        //   {
	        //     id: action.payload.id,
	        //     name: action.payload.name,
	        //     type: action.payload.type,
	        //     campaigns: []
	        //   }
	        // ],
	        // presetChannels: channelsSco.preset,
	        // customChannels: channelsSco.custom
	      });
	
	    case 'select_channel_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'create_custom_channel_ok':
	      return Object.assign({}, state, {
	        customChannels: [].concat(_toConsumableArray(state.customChannels), [{
	          id: action.payload.content.id,
	          name: action.payload.name,
	          type: 1
	        }])
	      });
	
	    case 'create_custom_channel_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'del_custom_channel_ok':
	      var resDcco = {};
	      var customChannelsDco = state.customChannels;
	      var iDco = customChannelsDco.findIndex(function (element, index, array) {
	        return element.channelId === action.meta.original.channelId;
	      });
	      customChannelsDco.splice(iDco, 1);
	      resDcco = Object.assign({}, state, {
	        customChannels: customChannelsDco
	      });
	      return resDcco;
	
	    case 'del_custom_channel_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'create_campaign_ok':
	      var resCco = {};
	      var channelsCco = state.items;
	      var iCduo = channelsCco.findIndex(function (element, index, array) {
	        return element.channelId === action.payload.content.channelId;
	      });
	      channelsCco[iCduo].campaigns.push({
	        id: action.payload.content.campaignId,
	        name: action.payload.content.name,
	        downloadUrl: action.payload.content.downloadUrl,
	        trackUrl: action.payload.content.trackUrl
	      });
	      resCco = Object.assign({}, state, {
	        items: channelsCco
	      });
	
	      return resCco;
	
	    case 'create_campaign_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'edit_campaign_ok':
	      var resEco = {};
	      var channelsEco = state.items;
	      var iEco = channelsEco.findIndex(function (element, index, array) {
	        return element.id === action.payload.channelId;
	      });
	      var jEco = channelsEco[iEco].campaigns.findIndex(function (element, index, array) {
	        return element.id === action.payload.id;
	      });
	      channelsEco[iEco].campaigns[jEco] = {
	        channelId: action.payload.channelId,
	        campaignId: action.payload.campaignId,
	        name: action.payload.name,
	        downloadUrl: action.payload.downloadUrl,
	        trackingLink: action.payload.trackingLink
	      };
	      resEco = Object.assign({}, state, {
	        items: [].concat(_toConsumableArray(channelsEco))
	      });
	      return resEco;
	
	    case 'edit_campaign_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'del_campaign_ok':
	      var resDco = {};
	      var channelsDco = state.items;
	      var iDduo = channelsDco.findIndex(function (element, index, array) {
	        return element.channelId === action.meta.original.channelId;
	      });
	      var jDduo = channelsDco[iDduo].campaigns.findIndex(function (element, index, array) {
	        return element.campaignId === action.meta.original.campaignId;
	      });
	      channelsDco[iDduo].campaigns.splice(jDduo, 1);
	      resDco = Object.assign({}, state, {
	        items: [].concat(_toConsumableArray(channelsDco))
	      });
	      return resDco;
	
	    case 'del_campaign_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'get_download_url_names_ok':
	      return Object.assign({}, state, {
	        downloadUrlNames: action.payload.content
	      });
	
	    case 'get_download_url_names_error':
	      alert(action.payload.content);
	      return state;
	
	    case 'del_channel_ok':
	      var resDco2 = {};
	      var iDso = state.items.findIndex(function (e, i, a) {
	        return e.channelId === action.meta.original.channelId;
	      });
	      resDco2 = Object.assign({}, state, {
	        items: [].concat(_toConsumableArray(state.items.slice(0, iDso)), _toConsumableArray(state.items.slice(iDso + 1)))
	      });
	      return resDco2;
	
	    case 'del_channel_error':
	      alert(action.payload.content);
	      return state;
	
	    default:
	      return state;
	  }
	};
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function classifyChannels(channels) {
	  var preset = [];
	  var custom = [];
	
	  for (var i = 0; i < channels.length; i++) {
	    switch (channels[i].type) {
	      case 0:
	        preset.push(channels[i]);
	        break;
	      case 1:
	        custom.push(channels[i]);
	        break;
	      default:
	        break;
	    }
	  }
	
	  return { preset: preset, custom: custom };
	}
	
	// function removeSelectedChannel(presetChannels, customChannels, selectedChannelId) {
	//   let preset = presetChannels
	//   let custom = customChannels
	//   const iSco1 = preset.findIndex((e, i, a) => {
	//     return e.channelId === selectedChannelId
	//   })
	//   const iSco2 = custom.findIndex((e, i, a) => {
	//     return e.channelId === selectedChannelId
	//   })
	//   if (iSco1 >= 0) {
	//     preset.splice(iSco1, 1)
	//   }
	//   if (iSco2 >= 0) {
	//     custom.splice(iSco2, 1)
	//   }

	//   return {preset, custom}
	// }

/***/ },

/***/ 771:
/*!**********************************************!*\
  !*** ./assets/tracking/reducers/summary.jsx ***!
  \**********************************************/
/***/ function(module, exports) {

	"use strict";

/***/ },

/***/ 772:
/*!*************************************************!*\
  !*** ./assets/tracking/reducers/mixed_panel.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? CONSTS.MIXED_PANEL_INITIAL_STATE : arguments[0];
	  var action = arguments[1];
	
	  // flux standard action
	  var payload = action.payload;
	  var meta = action.meta;
	  var type = action.type;
	  var error = action.error;
	
	  if (!_lodash2.default.contains(ACTION_LIST, action.type)) {
	    return state;
	  }
	
	  // original为一些辅助信息或原始action数据
	  if (!meta || !meta.original) {
	    console.warn('MixedPanel Action(' + action.type + ') 没有设置meta.original');
	    return state;
	  }
	
	  // 开始切换菜单
	  if (_lodash2.default.contains(CONSTS.ASYNC_ACTION_TYPE_LIST, type)) {
	    return Object.assign({}, state, {
	      done: false
	    });
	  }
	
	  // 统一错误处理
	  if (_lodash2.default.endsWith(type, SUFFIX.ERR) && error) {
	    return Object.assign({}, state, {
	      done: true,
	      isEmpty: false,
	      error: payload
	    });
	  }
	
	  // 异步ok类的action，payload为服务端返回数据
	
	  var _ref2 = meta || {};
	
	  var original = _ref2.original;
	
	  var datalist = undefined,
	      switchTabBaseData = undefined;
	
	  if (type === 'change_client_page') {
	    datalist = getPagedData({
	      datasource: state.chartData,
	      pagerID: payload.pagerID,
	      pagerSize: state.pagerSize
	    });
	    return Object.assign({}, state, {
	      pagerID: payload.pagerID,
	      datalist: datalist
	    });
	  }
	
	  if (type === 'change_layout') {
	    return Object.assign({}, state, {
	      currentLayout: payload.layout
	    });
	  }
	
	  if (payload && Array.isArray(payload.content)) {
	    datalist = payload && payload.content && getPagedDataByType({
	      datasource: payload.content,
	      pagerID: 1,
	      pagerSize: state.pagerSize
	    }, state.serverPagination);
	
	    switchTabBaseData = {
	      chartData: payload.content,
	      chartNames: getChartNames(payload),
	      datalist: datalist,
	      done: true,
	      isEmpty: payload.content.length === 0,
	      pagerID: 1,
	      pagerTotal: payload.content.length,
	      currentLevel: CONSTS.DEFAULT_LEVEL,
	      breadCrumbList: CONSTS.DEFAULT_BREAD_CRUMB,
	      breadCrumbRowList: [],
	      summaryData: getSummary(original.tabConfig, payload.content, state.serverPagination),
	      error: null
	    };
	  }
	
	  // 菜单切换成功
	  if (type === 'switch_tab_ok') {
	    return Object.assign({}, state, switchTabBaseData, {
	      currentTabIndex: original.tabIndex,
	      currentSubTabIndex: 0
	    });
	  }
	
	  if (type === 'switch_sub_tab_ok') {
	    return Object.assign({}, state, switchTabBaseData, {
	      currentSubTabIndex: original.subTabIndex
	    });
	  }
	
	  if (type === 'show_child_level_ok') {
	    // NOTE 这里小心被坑，不要直接或无意中修改state的任何属性
	    var breadCrumbList = _lodash2.default.cloneDeep(state.breadCrumbList);
	    var breadCrumbRowList = _lodash2.default.cloneDeep(state.breadCrumbRowList);
	    // splice更新或者直接插入
	    breadCrumbList.splice(original.level, 1, original.breadCrumb);
	    breadCrumbRowList.splice(original.level - 1, 1, original.rowData);
	    return Object.assign({}, state, {
	      currentLevel: 'level' + original.level,
	      datalist: datalist,
	      chartData: payload.content,
	      chartNames: getChartNames(payload),
	      breadCrumbList: breadCrumbList,
	      breadCrumbRowList: breadCrumbRowList,
	      done: true,
	      isEmpty: payload.content.length === 0,
	      pagerID: 1,
	      summaryData: getSummary(original.tabConfig, payload.content, state.serverPagination)
	    });
	  }
	
	  if (type === 'show_parent_level_ok') {
	    return Object.assign({}, state, {
	      currentLevel: 'level' + original.level,
	      datalist: datalist,
	      chartData: payload.content,
	      chartNames: getChartNames(payload),
	      breadCrumbList: state.breadCrumbList.slice(0, original.level + 1),
	      breadCrumbRowList: state.breadCrumbRowList.slice(0, original.level),
	      done: true,
	      isEmpty: payload.content.length === 0,
	      pagerID: 1,
	      summaryData: getSummary(original.tabConfig, payload.content, state.serverPagination)
	    });
	  }
	
	  if (type === 'request_server_page_ok') {
	    return Object.assign({}, state, {
	      done: true,
	      error: null,
	      pagerID: meta.original.pagerID,
	      pagerTotal: payload.content.totalRecord,
	      datalist: payload.content.content,
	      chartData: payload.content.content,
	      chartNames: getChartNames(payload),
	      isEmpty: payload.content.length === 0
	    });
	  }
	
	  return state;
	  // }
	};
	
	var _lodash = __webpack_require__(/*! lodash */ 544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _constants = __webpack_require__(/*! ../helpers/constants.jsx */ 292);
	
	var CONSTS = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SUFFIX = {
	  OK: '_ok',
	  ERR: '_error'
	};
	
	function getPagedData(_ref) {
	  var datasource = _ref.datasource;
	  var pagerID = _ref.pagerID;
	  var pagerSize = _ref.pagerSize;
	
	  var start = (pagerID - 1) * pagerSize;
	  var end = start + pagerSize;
	  return datasource.slice(start, end);
	}
	
	// 获取分页数据（服务端分页直接返回数据，客户端按页码以及大小切分）
	function getPagedDataByType(opts, isServerPagination) {
	  return isServerPagination ? opts.datasource : getPagedData(opts);
	}
	
	// 获取图例名称
	function getChartNames(json) {
	  return json.name || json.content.name;
	}
	
	function computeSummary() {
	  var cols = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var list = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var avgFields = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	
	  if (cols.length < 1) {
	    throw new Error('缺少列配置信息');
	  }
	
	  var summary = {};
	  var keys = [];
	  var checkedNum = 0;
	  _lodash2.default.each(cols, function (col) {
	    summary[col.dataIndex] = 0;
	    keys.push(col.dataIndex);
	  });
	  _lodash2.default.each(list, function (row) {
	    if (row.checked !== false) {
	      checkedNum += 1;
	      _lodash2.default.each(keys, function (key) {
	        if (_lodash2.default.isNumber(row[key])) {
	          summary[key] += row[key];
	        }
	      });
	    }
	  });
	  if (avgFields.length && checkedNum) {
	    _lodash2.default.each(avgFields, function (field) {
	      summary[field] = summary[field] / checkedNum;
	    });
	  }
	
	  return summary;
	}
	
	function getSummary(config, json, isServerPagination) {
	  if (!isServerPagination) {
	    if (config.formatters) {
	      return computeSummary(config.columns, json, config.avgFields);
	    }
	  }
	
	  return {};
	}
	
	function getAllowedActionTypeList(asyncAction) {
	  var list = [];
	  asyncAction.forEach(function (action) {
	    list.push(action);
	    list.push(action + SUFFIX.OK);
	    list.push(action + SUFFIX.ERR);
	  });
	
	  return list;
	}
	
	var ACTION_LIST = getAllowedActionTypeList(CONSTS.ASYNC_ACTION_TYPE_LIST).concat(CONSTS.SYNC_ACTION_TYPE_LIST);
	
	// export default function(componentID) {

/***/ },

/***/ 773:
/*!****************************************!*\
  !*** ./assets/tracking/mocks/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  (0, _mock2.default)([test, channel, store, app, core, summary, realtime], {
	    appContextPath: App.CONTEXT_PATH,
	    timeout: 1
	  });
	};
	
	var _mock = __webpack_require__(/*! dejs/lib/mock */ 774);
	
	var _mock2 = _interopRequireDefault(_mock);
	
	var _test = __webpack_require__(/*! ./test.js */ 778);
	
	var test = _interopRequireWildcard(_test);
	
	var _channel = __webpack_require__(/*! ./channel.js */ 779);
	
	var channel = _interopRequireWildcard(_channel);
	
	var _store = __webpack_require__(/*! ./store.js */ 780);
	
	var store = _interopRequireWildcard(_store);
	
	var _app = __webpack_require__(/*! ./app.js */ 781);
	
	var app = _interopRequireWildcard(_app);
	
	var _core = __webpack_require__(/*! ./core.js */ 782);
	
	var core = _interopRequireWildcard(_core);
	
	var _summary = __webpack_require__(/*! ./summary.js */ 783);
	
	var summary = _interopRequireWildcard(_summary);
	
	var _realtime = __webpack_require__(/*! ./realtime.js */ 784);
	
	var realtime = _interopRequireWildcard(_realtime);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 774:
/*!**********************************!*\
  !*** ./~/dejs/lib/mock/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = init;
	
	var _client = __webpack_require__(/*! superagent/lib/client */ 235);
	
	var _client2 = _interopRequireDefault(_client);
	
	var _superagentMocker = __webpack_require__(/*! superagent-mocker */ 775);
	
	var _superagentMocker2 = _interopRequireDefault(_superagentMocker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * https://github.com/shuvalov-anton/superagent-mocker
	 */
	
	var mockConfig = {
	  appContextPath: ''
	};
	
	var mock = {
	  post: function post() {},
	  get: function get() {},
	  all: function all() {}
	};
	
	function mockModule(mod) {
	  for (var funcName in mod) {
	    mod[funcName](mock);
	  }
	}
	
	function init() {
	  var modules = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  mock = (0, _superagentMocker2.default)(_client2.default);
	  var mockGet = mock.get;
	  var mockPOST = mock.post;
	
	  mock.get = function (url, callback) {
	    mockGet(mockConfig.appContextPath + url, callback);
	  };
	
	  mock.post = function (url, callback) {
	    mockPOST(mockConfig.appContextPath + url, callback);
	  };
	
	  mock.all = function (url, callback) {
	    mockGet(mockConfig.appContextPath + url, callback);
	    mockPOST(mockConfig.appContextPath + url, callback);
	  };
	
	  for (var key in mockConfig) {
	    if (opts.hasOwnProperty(key)) {
	      mockConfig[key] = opts[key];
	    }
	  }
	
	  if (opts.timeout) {
	    mock.timeout = opts.timeout;
	  }
	
	  modules.forEach(function (mod) {
	    mockModule(mod);
	  });
	
	  return mock;
	}

/***/ },

/***/ 778:
/*!***************************************!*\
  !*** ./assets/tracking/mocks/test.js ***!
  \***************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mockRetain = mockRetain;
	function mockRetain(mock) {
	  mock.get('/mock/retain2.json', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'name': {
	          'y0': '付费次数',
	          'y1': '占比'
	        },
	        'content': [{
	          'y1': 0.5357142857142857,
	          'y0': 1500,
	          'x': '1'
	        }, {
	          'y1': 0.25,
	          'y0': 700,
	          'x': '4'
	        }, {
	          'y1': 0.21428571428571427,
	          'y0': 600,
	          'x': '2-3'
	        }],
	        'id': '1448090145560J'
	      }
	    };
	  });
	}

/***/ },

/***/ 779:
/*!******************************************!*\
  !*** ./assets/tracking/mocks/channel.js ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mockRetain = mockRetain;
	function mockRetain(mock) {
	  mock.post('/getChannels.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {
	          'totalRecord': 32,
	          'pageSize': 10,
	          'totalPage': 1,
	          'pageID': 1,
	          'content': [{
	            'channelId': '82375824',
	            'name': '101GBS',
	            'visible': 1,
	            'type': 0,
	            'campaigns': [{
	              'campaignId': '1231',
	              'name': 'activity',
	              'downloadUrl': 'http://',
	              'trackUrl': 'http://'
	            }, {
	              'campaignId': '12314',
	              'name': 'activity',
	              'downloadUrl': 'http:///',
	              'trackUrl': 'http://'
	            }]
	          }, {
	            'channelId': '82375823',
	            'name': 'absmobi',
	            'visible': 1,
	            'type': 0,
	            'campaigns': [{
	              'campaignId': '12313',
	              'name': 'activity',
	              'downloadUrl': 'http:///',
	              'trackUrl': 'http://'
	            }, {
	              'campaignId': '123133',
	              'name': 'activity',
	              'downloadUrl': 'http:///',
	              'trackUrl': 'http://'
	            }]
	          }]
	        }
	      }
	    };
	  });
	
	  mock.post('/getChannelNames.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': [{
	          'channelId': 82375824,
	          'name': '101GBS',
	          'visible': 1,
	          'type': 0
	        }, {
	          'channelId': 823758232,
	          'name': 'absmobi',
	          'visible': 1,
	          'type': 0
	        }, {
	          'channelId': 98775,
	          'name': '自定义广告网络1',
	          'visible': 1,
	          'type': 1
	        }]
	      }
	    };
	  });
	
	  mock.post('/delChannel.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	
	  mock.post('/selectChannel.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	
	  mock.post('/createCustomChannel.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {
	          id: 100
	        }
	      }
	    };
	  });
	
	  mock.post('/delCustomChannel.do', function () {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	
	  mock.post('/createCampaignBefore.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {
	          id: 'aeE7B3',
	          trackUrl: 'http://119.147.212.251:17080/aeE7B3',
	          postBackLink: 'http://119.147.212.251:17080'
	        }
	      }
	    };
	  });
	
	  mock.post('/createCampaign.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	
	  mock.post('/editCampaign.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	
	  mock.post('/delCampaign.do', function (req) {
	    var res = {};
	    if (req.body.uid && req.body.id && req.body.channelId) {
	      res = {
	        body: {
	          'statusCode': 200,
	          'content': {}
	        }
	      };
	    } else {
	      res = {
	        body: {
	          'statusCode': 400,
	          'content': {}
	        }
	      };
	    }
	    return res;
	  });
	
	  mock.post('/getDownloadUrlNames.do', function (req) {
	    return {
	      body: {
	        'id': '1450437321148378',
	        'statusCode': 200,
	        'content': [{
	          'id': 82375824,
	          'name': 'app store',
	          'type': 0,
	          'downloadUrls': [{
	            'id': 1,
	            'name': '跳转链接'
	          }, {
	            'id': 2,
	            'name': '下载链接'
	          }]
	        }, {
	          'id': 82375824,
	          'name': 'google play',
	          'type': 0,
	          'downloadUrls': [{
	            'id': 3,
	            'name': '跳转链接'
	          }, {
	            'id': 4,
	            'name': '下载链接'
	          }]
	        }]
	      }
	    };
	  });
	}

/***/ },

/***/ 780:
/*!****************************************!*\
  !*** ./assets/tracking/mocks/store.js ***!
  \****************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mockRetain = mockRetain;
	function mockRetain(mock) {
	  mock.post('/getStores.do', function (req) {
	    return {
	      body: {
	        'id': '1450442206784335',
	        'statusCode': 200,
	        'content': {
	          'totalRecord': 32,
	          'pageSize': 10,
	          'totalPage': 1,
	          'pageID': 1,
	          'content': [{
	            'id': 5,
	            'name': '百度云盘',
	            'type': 1,
	            'storeID': 3,
	            'downloadUrls': [{
	              'id': 1,
	              'name': '商店下载',
	              'link': 'http://pan.baidu.com'
	            }, {
	              'id': 2,
	              'name': 'sdjfasfjaslkfjls',
	              'link': 'http://pan.baidu.com/asasf'
	            }]
	          }, {
	            'id': 4,
	            'name': '千度地盘',
	            'type': 0,
	            'downloadUrls': [{
	              'id': 1,
	              'name': '商店下载',
	              'link': 'http://pan.qiandu.com'
	            }]
	          }, {
	            'id': 10,
	            'name': '千度地盘',
	            'type': 0,
	            'downloadUrls': [{
	              'id': 1,
	              'name': '商店下载',
	              'link': 'http://pan.qiandu.com'
	            }]
	          }, {
	            'id': 6,
	            'name': '千度地盘',
	            'type': 0,
	            'downloadUrls': [{
	              'id': 1,
	              'name': '商店下载',
	              'link': 'http://pan.qiandu.com'
	            }]
	          }, {
	            'id': 7,
	            'name': '千度地盘',
	            'type': 0,
	            'downloadUrls': [{
	              'id': 1,
	              'name': '商店下载',
	              'link': 'http://pan.qiandu.com'
	            }]
	          }]
	        }
	      }
	    };
	  });
	
	  mock.post('/selectStore.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	
	  mock.post('/delStore.do', function (req) {
	    return {
	      body: {
	        id: '123141234124124',
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	
	  mock.post('/getStoreNames.do', function (req) {
	    return {
	      body: {
	        'statusCode': '200',
	        'content': [{
	          'id': 82375824,
	          'name': 'appstore',
	          'type': 0
	        }, {
	          'id': 98775824,
	          'name': '豌豆荚',
	          'type': 0
	        }, {
	          'id': 98775825,
	          'name': '自定义商店1',
	          'type': 1
	        }]
	      }
	    };
	  });
	
	  mock.post('/createDownloadUrl.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {
	          id: 11
	        }
	      }
	    };
	  });
	
	  mock.post('/editDownloadUrl.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	
	  mock.post('/delDownloadUrl.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	
	  mock.post('/createCustomStore.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {
	          id: 22
	        }
	      }
	    };
	  });
	
	  mock.post('/delCustomStore.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	
	  mock.post('/delStore.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	}

/***/ },

/***/ 781:
/*!**************************************!*\
  !*** ./assets/tracking/mocks/app.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mockRetain = mockRetain;
	function mockRetain(mock) {
	  mock.post('/getApps.do', function (req) {
	    return {
	      body: {
	        'id': '1450437321148378',
	        'statusCode': 200,
	        'content': {
	          'appAmount': 20,
	          'gameAmount': 12,
	          'totalRecord': 32,
	          'pageSize': 10,
	          'totalPage': 1,
	          'pageID': 1,
	          'content': [{
	            'appid': 'C4CC8FA474C29487A72764B72A9C82CA8',
	            'name': '汽车之家',
	            'activatedAmount': 0,
	            'activatedAmountToday': 0,
	            'category': 1,
	            'type': 3,
	            'currency': 'CNY',
	            'mark': 1,
	            'authority': 1,
	            'platform': 3,
	            'gameEngine': 0
	          }, {
	            'appid': 'CDC170DB538EF91EC336C1E4A884E5CA4',
	            'name': '我叫火影',
	            'activatedAmount': 0,
	            'activatedAmountToday': 0,
	            'category': 2,
	            'type': 8,
	            'currency': 'CNY',
	            'mark': 1,
	            'authority': 1,
	            'platform': 3,
	            'gameEngine': 1
	          }]
	        }
	      }
	    };
	  });
	
	  mock.post('/delApp.do', function (req) {
	    return {
	      body: {
	        'id': '1450437321148378',
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	
	  mock.post('/createApp.do', function (req) {
	    return {
	      body: {
	        'id': '1450437321148378',
	        'statusCode': 200,
	        'content': {
	          'appid': 'CC415BB2542711724B5A41D910BF71D1C'
	        }
	      }
	    };
	  });
	
	  mock.post('/editApp.do', function (req) {
	    return {
	      body: {
	        'id': '1450437321148378',
	        'statusCode': 200,
	        'content': {}
	      }
	    };
	  });
	
	  mock.post('/getAppStatus.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': {
	          'activatedAmount': 123
	        }
	      }
	    };
	  });
	
	  mock.get('/getAppsUnbind.do', function (req) {
	    return {
	      body: {
	        'id': '1450437321148378',
	        'statusCode': 200,
	        content: [{
	          'appid': 'C9BFFD34E444CED3D02045BA02B55A476',
	          'name': '刀塔'
	        }]
	      }
	    };
	  });
	
	  mock.post('/getCategoryAndType.do', function (req) {
	    return {
	      body: {
	        'id': '1450437321148378',
	        'statusCode': 200,
	        'content': [{
	          'id': 1,
	          'name': '应用',
	          'children': [{
	            'id': 3,
	            'name': '音乐'
	          }, {
	            'id': 6,
	            'name': '社交'
	          }]
	        }, {
	          'id': 2,
	          'name': '游戏',
	          'children': [{
	            'id': 4,
	            'name': '回合制'
	          }, {
	            'id': 5,
	            'name': 'RPG'
	          }]
	        }, {
	          'id': 5,
	          'children': [{
	            'id': 7,
	            'name': '卡牌'
	          }]
	        }]
	      }
	    };
	  });
	
	  mock.post('/getAppNames.do', function (req) {
	    return {
	      body: {
	        'id': '1450437321148378',
	        'statusCode': 200,
	        'content': [{
	          'appid': 'CDC170DB538EF91EC336C1E4A884E5CA4',
	          'name': '我叫火影'
	        }, {
	          'appid': 'C4CC8FA474C29487A72764B72A9C82CA8',
	          'name': '汽车之家'
	        }]
	      }
	    };
	  });
	}

/***/ },

/***/ 782:
/*!***************************************!*\
  !*** ./assets/tracking/mocks/core.js ***!
  \***************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mockOverviewChannelLtv = mockOverviewChannelLtv;
	exports.mockOverviewCampaignLtv = mockOverviewCampaignLtv;
	exports.mockOverviewPublisherLtv = mockOverviewPublisherLtv;
	exports.mockOverviewSiteLtv = mockOverviewSiteLtv;
	exports.mockCoreLTV = mockCoreLTV;
	exports.mockCoreLTVByAdNetwork = mockCoreLTVByAdNetwork;
	exports.mockCoreLTVTopNByChannel = mockCoreLTVTopNByChannel;
	exports.mockCoreLTVTopNByTotal = mockCoreLTVTopNByTotal;
	exports.mockOverviewClickRatioLtv = mockOverviewClickRatioLtv;
	exports.mockOverviewActiveRatioLtv = mockOverviewActiveRatioLtv;
	exports.mockOverviewRevenueRatioLtv = mockOverviewRevenueRatioLtv;
	function mockOverviewChannelLtv(mock) {
	  mock.post('/overviewChannelLtv.do', function (req) {
	    return {
	      body: {
	        'ID': '1450948624675694',
	        'statusCode': 200,
	        'name': {
	          'y0': '点击',
	          'y1': '激活',
	          'y2': '转化率',
	          'y3': '付费',
	          'y4': '人均LTV'
	        },
	        'content': [{
	          'y1': 0,
	          'y2': 0,
	          'y3': 700,
	          'y4': 1.34,
	          'y0': 0,
	          'x': 'hahh'
	        }, {
	          'y1': 246,
	          'y2': 16.0679,
	          'y3': 700,
	          'y4': 2.8455,
	          'y0': 1531,
	          'x': 'jd_test'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 1500,
	          'y4': 1.824,
	          'y0': 0,
	          'x': 'thomas-test'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 700,
	          'y4': 1.56,
	          'y0': 2053,
	          'x': 'yingyongbao'
	        }, {
	          'y1': 4,
	          'y2': 40,
	          'y3': 0,
	          'y4': 0,
	          'y0': 10,
	          'x': 'yuanlin2'
	        }]
	      }
	    };
	  });
	}
	
	function mockOverviewCampaignLtv(mock) {
	  mock.post('/overviewCampaignLtv.do', function (req) {
	    return {
	      body: {
	        'ID': '1450950232572750',
	        'statusCode': 200,
	        'name': {
	          'y0': '点击',
	          'y1': '激活',
	          'y2': '转化率',
	          'y3': '付费',
	          'y4': '人均LTV'
	        },
	        'content': [{
	          'y1': 0,
	          'y2': 0,
	          'y3': 700,
	          'y0': 0,
	          'x': 'aabbc'
	        }, {
	          'y1': 3094,
	          'y2': 154700,
	          'y3': 0,
	          'y4': 0,
	          'y0': 2,
	          'x': 'aeE7B3'
	        }, {
	          'y1': 684,
	          'y2': 33.3496,
	          'y3': 0,
	          'y4': 0,
	          'y0': 2051,
	          'x': 'R3miui'
	        }]
	      }
	    };
	  });
	}
	
	function mockOverviewPublisherLtv(mock) {
	  mock.post('/overviewPublisherLtv.do', function (req) {
	    return {
	      body: {
	        'ID': '1450951209056236',
	        'statusCode': 200,
	        'name': {
	          'y0': '点击',
	          'y1': '激活',
	          'y2': '转化率',
	          'y3': '付费',
	          'y4': '人均LTV'
	        },
	        'content': [{
	          'y1': 1430,
	          'y2': 143000,
	          'y3': 0,
	          'y4': 0,
	          'y0': 1,
	          'x': 'hello'
	        }, {
	          'y1': 234,
	          'y3': 0,
	          'y4': 0,
	          'y0': 0,
	          'x': 'helloworld'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 700,
	          'y0': 0,
	          'x': 'thomas-test'
	        }, {
	          'y1': 1430,
	          'y3': 0,
	          'y4': 0,
	          'y0': 0,
	          'x': 'world'
	        }]
	      }
	    };
	  });
	}
	
	function mockOverviewSiteLtv(mock) {
	  mock.post('/overviewSiteLtv.do', function (req) {
	    return {
	      body: {
	        'ID': '1450951751812669',
	        'statusCode': 200,
	        'name': {
	          'y0': '点击',
	          'y1': '激活',
	          'y2': '转化率',
	          'y3': '付费',
	          'y4': '人均LTV'
	        },
	        'content': [{
	          'y1': 451,
	          'y2': 45100,
	          'y3': 0,
	          'y4': 0,
	          'y0': 1,
	          'x': 'left'
	        }, {
	          'y1': 512,
	          'y3': 0,
	          'y4': 0,
	          'y0': 0,
	          'x': 'right'
	        }, {
	          'y1': 233,
	          'y3': 0,
	          'y4': 0,
	          'y0': 0,
	          'x': 'right1'
	        }, {
	          'y1': 234,
	          'y3': 0,
	          'y4': 0,
	          'y0': 0,
	          'x': 'right2'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 700,
	          'y0': 0,
	          'x': 'thomas-site'
	        }]
	      }
	    };
	  });
	}
	
	function mockCoreLTV(mock) {
	  mock.post('/queryLTVByAppid.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': [{
	          'adNetWorkID': '1',
	          'adNetWorkName': 'yeahMobi',
	          'clickNum': 10,
	          'activeNum': 10,
	          'clickValueRate': 0.11,
	          'pay': 10,
	          'ltv': 10,
	          'regNum': 200
	        }, {
	          'adNetWorkID': '1235',
	          'adNetWorkName': 'inMobi',
	          'clickNum': 20,
	          'activeNum': 20,
	          'clickValueRate': 0.22,
	          'pay': 20,
	          'ltv': 20,
	          'regNum': 120
	        }]
	      }
	    };
	  });
	}
	
	function mockCoreLTVByAdNetwork(mock) {
	  mock.post('/queryLTVByAdNetworkID.do', function (req) {
	    return {
	      body: {
	        'statusCode': 200,
	        'content': [{
	          'campaignID': '11',
	          'campaignName': 'yeahMobi-sub1',
	          'clickNum': 10,
	          'activeNum': 10,
	          'clickValueRate': 0.11,
	          'pay': 10,
	          'ltv': 10,
	          'regNum': 200
	        }, {
	          'campaignID': '12351',
	          'campaignName': 'yeahMobi-sub2',
	          'clickNum': 20,
	          'activeNum': 20,
	          'clickValueRate': 0.22,
	          'pay': 20,
	          'ltv': 20,
	          'regNum': 120
	        }]
	      }
	    };
	  });
	}
	
	function mockCoreLTVTopNByChannel(mock) {
	  mock.post('/overviewTopNChannelLtv.do', function (req) {
	    return {
	      body: {
	        'ID': '1451022535676920',
	        'statusCode': 200,
	        'name': {
	          'y0': 'yingyongbao',
	          'y1': 'jd_test',
	          'y2': 'yuanlin2'
	        },
	        'content': [{
	          'y0': 3778,
	          'y1': 992,
	          'y2': 4,
	          'x': '激活推广'
	        }, {
	          'y0': 12,
	          'y1': 23,
	          'y2': 12,
	          'x': '注册设备'
	        }, {
	          'y0': 12,
	          'y1': 12,
	          'y2': 12,
	          'x': '登陆次数'
	        }, {
	          'y0': 800,
	          'y1': 700,
	          'y2': 700,
	          'x': '付费设备'
	        }, {
	          'y0': 100,
	          'y1': 200,
	          'y2': 300,
	          'x': '付费次数'
	        }]
	      }
	    };
	  });
	}
	
	function mockCoreLTVTopNByTotal(mock) {
	  mock.post('/overviewTotalTopNChannelLtv.do', function (req) {
	    return {
	      body: {
	        'ID': '1451022617248201',
	        'statusCode': 200,
	        'name': {
	          'y0': 'num'
	        },
	        'content': [{
	          'y0': 4774,
	          'x': '激活推广'
	        }, {
	          'y0': 47,
	          'x': '注册设备'
	        }, {
	          'y0': 36,
	          'x': '登陆次数'
	        }, {
	          'y0': 2200,
	          'x': '付费设备'
	        }, {
	          'y0': 200,
	          'x': '付费次数'
	        }]
	      }
	    };
	  });
	}
	
	function mockOverviewClickRatioLtv(mock) {
	  mock.post('/overviewClickRatioLtv.do', function (req) {
	    return {
	      body: {
	        'ID': '1451022816822726',
	        'statusCode': 200,
	        'name': {
	          'z0': 'ratio',
	          'y0': 'num'
	        },
	        'content': [{
	          'z0': 42.5988,
	          'y0': 1531,
	          'x': 'jd_test'
	        }, {
	          'z0': 57.123,
	          'y0': 2053,
	          'x': 'yingyongbao'
	        }, {
	          'z0': 0.2782,
	          'y0': 10,
	          'x': 'yuanlin2'
	        }]
	      }
	    };
	  });
	}
	
	function mockOverviewActiveRatioLtv(mock) {
	  mock.post('/overviewActiveRatioLtv.do', function (req) {
	    return {
	      body: {
	        'ID': '1451023247526923',
	        'statusCode': 200,
	        'name': {
	          'z0': 'ratio',
	          'y0': 'num'
	        },
	        'content': [{
	          'z0': 20.7792,
	          'y0': 992,
	          'x': 'jd_test'
	        }, {
	          'z0': 79.137,
	          'y0': 3778,
	          'x': 'yingyongbao'
	        }, {
	          'z0': 0.0838,
	          'y0': 4,
	          'x': 'yuanlin2'
	        }]
	      }
	    };
	  });
	}
	
	function mockOverviewRevenueRatioLtv(mock) {
	  mock.post('/overviewRevenueRatioLtv.do', function (req) {
	    return {
	      body: {
	        'ID': '1451023247526923',
	        'statusCode': 200,
	        'name': {
	          'z0': 'ratio',
	          'y0': 'num'
	        },
	        'content': [{
	          'z0': 49.7792,
	          'y0': 992,
	          'x': 'taobao_test'
	        }, {
	          'z0': 50.137,
	          'y0': 3778,
	          'x': 'kaka'
	        }, {
	          'z0': 0.0838,
	          'y0': 4,
	          'x': 'yxz'
	        }]
	      }
	    };
	  });
	}

/***/ },

/***/ 783:
/*!******************************************!*\
  !*** ./assets/tracking/mocks/summary.js ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.overviewAppSummary = overviewAppSummary;
	exports.overviewActiveRate = overviewActiveRate;
	exports.overviewInstallRatio = overviewInstallRatio;
	exports.overviewChannelSummaryByAppid = overviewChannelSummaryByAppid;
	exports.queryCampaignSummary = queryCampaignSummary;
	exports.overviewPublisherSummaryByCampaign = overviewPublisherSummaryByCampaign;
	exports.overviewSiteSummaryByPublisher = overviewSiteSummaryByPublisher;
	exports.overviewChannelSummaryByEventEd = overviewChannelSummaryByEventEd;
	exports.overviewTotalChannelSummaryByEventid = overviewTotalChannelSummaryByEventid;
	exports.overviewPayUserRatio = overviewPayUserRatio;
	exports.overviewRevenueRatio = overviewRevenueRatio;
	function overviewAppSummary(mock) {
	  mock.post('/overviewappsummary.do', function (req) {
	    return {
	      body: {
	        'ID': '1450501149221804',
	        'statusCode': 200,
	        'glance': [{
	          'k': '点击',
	          'v': 5723
	        }, {
	          'k': '推广安装',
	          'v': 250
	        }, {
	          'k': '自然安装',
	          'v': 2
	        }],
	        'name': {
	          'y0': '点击',
	          'y1': '推广安装',
	          'y2': '自然安装',
	          'z2': '总安装'
	        },
	        'content': [{
	          'y0': 0,
	          'y1': 0,
	          'y2': 0,
	          'z2': 0,
	          'x': '20151020'
	        }, {
	          'y1': 127,
	          'y2': 1,
	          'z2': 128,
	          'y0': 1169,
	          'x': '20151021'
	        }, {
	          'y1': 123,
	          'y2': 0,
	          'z2': 123,
	          'y0': 1138,
	          'x': '20151022'
	        }, {
	          'y1': 0,
	          'y2': 1,
	          'z2': 1,
	          'y0': 1140,
	          'x': '20151023'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'z2': 0,
	          'y0': 1138,
	          'x': '20151024'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'z2': 0,
	          'y0': 1138,
	          'x': '20151025'
	        }]
	      }
	    };
	  });
	}
	
	function overviewActiveRate(mock) {
	  mock.post('/overviewActiveRate.do', function (req) {
	    return {
	      body: {
	        'ID': '1450857330117859',
	        'statusCode': 200,
	        'name': {
	          'y0': 'num'
	        },
	        'content': [{
	          'y0': 5723,
	          'x': '点击'
	        }, {
	          'y0': 250,
	          'x': '推广安装'
	        }, {
	          'y0': 2,
	          'x': '自然安装'
	        }]
	      }
	    };
	  });
	}
	
	function overviewInstallRatio(mock) {
	  mock.post('/overviewInstallRatio.do', function (req) {
	    return {
	      body: {
	        'ID': '1450858416204155',
	        'statusCode': 200,
	        'glance': [{
	          'k': '总安装',
	          'v': 252
	        }],
	        'name': {
	          'y0': 'num'
	        },
	        'content': [{
	          'y0': 250,
	          'x': '推广安装'
	        }, {
	          'y0': 2,
	          'x': '自然安装'
	        }]
	
	      }
	    };
	  });
	}
	
	function overviewChannelSummaryByAppid(mock) {
	  mock.post('/overviewchannelsummarybyappid.do', function (req) {
	    return {
	      body: {
	        'ID': '1450776191817902',
	        'statusCode': 200,
	        'name': {
	          'y0': '点击',
	          'y1': '激活',
	          'y2': '转化率',
	          'y3': '平均日活跃',
	          'y4': '付费数',
	          'y5': '付费额',
	          'y6': '平均ARPU',
	          'y7': '平均ARPPU'
	        },
	        'content': [{
	          'y0': 2845,
	          'y1': 246,
	          'y2': 0.0865,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'x': 'jd_test'
	        }, {
	          'y0': 2868,
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'x': 'yingyongbao'
	        }, {
	          'y0': 10,
	          'y1': 4,
	          'y2': 0.4,
	          'y3': 0.1667,
	          'y4': 1,
	          'y5': 22,
	          'y6': 2200,
	          'y7': 2200,
	          'x': 'yuanlin2'
	        }]
	      }
	    };
	  });
	}
	
	function queryCampaignSummary(mock) {
	  mock.post('/queryCampaignSummary.do', function (req) {
	    return {
	      body: {
	        'ID': '1450491095607319',
	        'statusCode': 200,
	        'name': {
	          'y0': '点击',
	          'y1': '激活',
	          'y2': '转化率',
	          'y3': '平均日活跃',
	          'y4': '付费数',
	          'y5': '付费额',
	          'y6': '平均ARPU',
	          'y7': '平均ARPPU'
	        },
	        'content': [{
	          'y1': 7,
	          'y2': 0.2059,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 34,
	          'x': 'aeE7B3'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 1,
	          'x': 'QV7Jvu'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 12334,
	          'x': 'R3miui'
	        }]
	      }
	    };
	  });
	}
	
	function overviewPublisherSummaryByCampaign(mock) {
	  mock.post('/overviewpublishersummarybycampaign.do', function (req) {
	    return {
	      body: {
	        'ID': '1450491203146328',
	        'statusCode': 200,
	        'name': {
	          'y0': '点击',
	          'y1': '激活',
	          'y2': '转化率',
	          'y3': '平均日活跃',
	          'y4': '付费数',
	          'y5': '付费额',
	          'y6': '平均ARPU',
	          'y7': '平均ARPPU'
	        },
	        'content': [{
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 2,
	          'x': '123'
	        }, {
	          'y1': 7,
	          'y2': 0.7,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 10,
	          'x': '77777'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 1,
	          'x': 'hello'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 1,
	          'x': 'hello1'
	        }, {
	          'y1': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 0,
	          'x': 'helloworld'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 1,
	          'x': 'p1'
	        }, {
	          'y1': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 0,
	          'x': 'test'
	        }, {
	          'y1': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 0,
	          'x': 'thomas'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 17,
	          'x': 'world'
	        }]
	      }
	    };
	  });
	}
	
	function overviewSiteSummaryByPublisher(mock) {
	  mock.post('/overviewsitesummarybypublisher.do', function (req) {
	    return {
	      body: {
	        'ID': '1450491692927929',
	        'statusCode': 200,
	        'name': {
	          'y0': '点击',
	          'y1': '激活',
	          'y2': '转化率',
	          'y3': '平均日活跃',
	          'y4': '付费数',
	          'y5': '付费额',
	          'y6': '平均ARPU',
	          'y7': '平均ARPPU'
	        },
	        'content': [{
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 1,
	          'x': 'left'
	        }, {
	          'y1': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 0,
	          'x': 'right'
	        }, {
	          'y1': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 0,
	          'x': 'right1'
	        }, {
	          'y1': 0,
	          'y3': 0,
	          'y4': 0,
	          'y5': 0,
	          'y0': 0,
	          'x': 'right2'
	        }]
	      }
	    };
	  });
	}
	
	function overviewChannelSummaryByEventEd(mock) {
	  mock.post('/overviewchannelsummarybyeventid.do', function (req) {
	    return {
	      body: {
	        'ID': '1450593449623965',
	        'statusCode': 200,
	        'name': {
	          'y0': 'yingyongbao',
	          'y1': 'jd_test',
	          'y2': 'yuanlin2'
	        },
	        'content': [{
	          'y1': 569,
	          'y2': 10,
	          'y0': 590,
	          'x': '20151021'
	        }, {
	          'y1': 569,
	          'y2': 0,
	          'y0': 569,
	          'x': '20151022'
	        }, {
	          'y1': 569,
	          'y2': 0,
	          'y0': 571,
	          'x': '20151023'
	        }, {
	          'y1': 569,
	          'y2': 0,
	          'y0': 569,
	          'x': '20151024'
	        }, {
	          'y1': 569,
	          'y2': 0,
	          'y0': 569,
	          'x': '20151025'
	        }]
	      }
	    };
	  });
	}
	
	function overviewTotalChannelSummaryByEventid(mock) {
	  mock.post('/overviewTotalChannelSummaryByEventid.do', function (req) {
	    return {
	      body: {
	        'ID': '1450861970909864',
	        'statusCode': 200,
	        'name': {
	          'y0': 'total'
	        },
	        'content': [{
	          'y0': 0,
	          'x': '20151020'
	        }, {
	          'y0': 1169,
	          'x': '20151021'
	        }, {
	          'y0': 1138,
	          'x': '20151022'
	        }, {
	          'y0': 1140,
	          'x': '20151023'
	        }, {
	          'y0': 1138,
	          'x': '20151024'
	        }, {
	          'y0': 1138,
	          'x': '20151025'
	        }]
	      }
	    };
	  });
	}
	
	function overviewPayUserRatio(mock) {
	  mock.post('/overviewPayUserRatio.do', function (req) {
	    return {
	      body: {
	        'ID': '1450927886185393',
	        'statusCode': 200,
	        'name': {
	          'z0': 'ratio',
	          'y0': 'num'
	        },
	        'content': [{
	          'z0': 30.6452,
	          'y0': 779,
	          'x': 'jd_test'
	        }, {
	          'z0': 64.5161,
	          'y0': 1640,
	          'x': 'yingyongbao'
	        }, {
	          'z0': 4.8387,
	          'y0': 123,
	          'x': 'yuanlin2'
	        }]
	      }
	    };
	  });
	}
	
	function overviewRevenueRatio(mock) {
	  mock.post('/overviewRevenueRatio.do', function (req) {
	    return {
	      body: {
	        'ID': '1450928375052241',
	        'statusCode': 200,
	        'name': {
	          'z0': 'ratio',
	          'y0': 'num'
	        },
	        'content': [{
	          'z0': 31.7768,
	          'y0': 12412,
	          'x': 'jd_test'
	        }, {
	          'z0': 62.5909,
	          'y0': 24448,
	          'x': 'yingyongbao'
	        }, {
	          'z0': 5.6324,
	          'y0': 2200,
	          'x': 'yuanlin2'
	        }]
	      }
	    };
	  });
	}

/***/ },

/***/ 784:
/*!*******************************************!*\
  !*** ./assets/tracking/mocks/realtime.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.overviewChannelRealTimeData = overviewChannelRealTimeData;
	exports.overviewCampaignRealTimeData = overviewCampaignRealTimeData;
	exports.overviewPublisherRealTimeData = overviewPublisherRealTimeData;
	exports.overviewSiteRealTimeData = overviewSiteRealTimeData;
	exports.overviewTopNChannelRealTimeData = overviewTopNChannelRealTimeData;
	exports.overviewTotalTopNChannelRealTimeData = overviewTotalTopNChannelRealTimeData;
	function overviewChannelRealTimeData(mock) {
	  mock.post('/overviewChannelRealTimeData.do', function (req) {
	    return {
	      body: {
	        'ID': '1450776191817902',
	        'statusCode': 200,
	        'name': {
	          'y0': '点击',
	          'y1': '激活',
	          'y2': '转化率',
	          'y3': '今日累计活跃',
	          'y4': '今日累计付费'
	        },
	        'content': [{
	          'y0': 2845,
	          'y1': 246,
	          'y2': 0.0865,
	          'y3': 0,
	          'y4': 0,
	          'x': 'jd_test'
	        }, {
	          'y0': 2868,
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'x': 'yingyongbao'
	        }, {
	          'y0': 10,
	          'y1': 4,
	          'y2': 0.4,
	          'y3': 0.1667,
	          'y4': 1,
	          'x': 'yuanlin2'
	        }]
	      }
	    };
	  });
	}
	
	function overviewCampaignRealTimeData(mock) {
	  mock.post('/overviewCampaignRealTimeData.do', function (req) {
	    return {
	      body: {
	        'ID': '1450491095607319',
	        'statusCode': 200,
	        'name': {
	          'y0': '点击',
	          'y1': '激活',
	          'y2': '转化率',
	          'y3': '今日累计活跃',
	          'y4': '今日累计付费'
	        },
	        'content': [{
	          'y1': 7,
	          'y2': 0.2059,
	          'y3': 0,
	          'y4': 0,
	          'y0': 34,
	          'x': 'aeE7B3'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 1,
	          'x': 'QV7Jvu'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 12334,
	          'x': 'R3miui'
	        }]
	      }
	    };
	  });
	}
	
	function overviewPublisherRealTimeData(mock) {
	  mock.post('/overviewPublisherRealTimeData.do', function (req) {
	    return {
	      body: {
	        'ID': '1450491203146328',
	        'statusCode': 200,
	        'name': {
	          'y0': '点击',
	          'y1': '激活',
	          'y2': '转化率',
	          'y3': '今日累计活跃',
	          'y4': '今日累计付费'
	        },
	        'content': [{
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 2,
	          'x': '123'
	        }, {
	          'y1': 7,
	          'y2': 0.7,
	          'y3': 0,
	          'y4': 0,
	          'y0': 10,
	          'x': '77777'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 1,
	          'x': 'hello'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 1,
	          'x': 'hello1'
	        }, {
	          'y1': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 0,
	          'x': 'helloworld'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 1,
	          'x': 'p1'
	        }, {
	          'y1': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 0,
	          'x': 'test'
	        }, {
	          'y1': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 0,
	          'x': 'thomas'
	        }, {
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 17,
	          'x': 'world'
	        }]
	      }
	    };
	  });
	}
	
	function overviewSiteRealTimeData(mock) {
	  mock.post('/overviewSiteRealTimeData.do', function (req) {
	    return {
	      body: {
	        'ID': '1450491692927929',
	        'statusCode': 200,
	        'name': {
	          'y0': '点击',
	          'y1': '激活',
	          'y2': '转化率',
	          'y3': '今日累计活跃',
	          'y4': '今日累计付费'
	        },
	        'content': [{
	          'y1': 0,
	          'y2': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 1,
	          'x': 'left'
	        }, {
	          'y1': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 0,
	          'x': 'right'
	        }, {
	          'y1': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 0,
	          'x': 'right1'
	        }, {
	          'y1': 0,
	          'y3': 0,
	          'y4': 0,
	          'y0': 0,
	          'x': 'right2'
	        }]
	      }
	    };
	  });
	}
	
	function overviewTopNChannelRealTimeData(mock) {
	  mock.post('/overviewTopNChannelRealTimeData.do', function (req) {
	    return {
	      body: {
	        'ID': '1450593449623965',
	        'statusCode': 200,
	        'name': {
	          'y0': 'yingyongbao',
	          'y1': 'jd_test',
	          'y2': 'yuanlin2'
	        },
	        'content': [{
	          'y1': 569,
	          'y2': 10,
	          'y0': 590,
	          'x': '20151021'
	        }, {
	          'y1': 569,
	          'y2': 0,
	          'y0': 569,
	          'x': '20151022'
	        }, {
	          'y1': 569,
	          'y2': 0,
	          'y0': 571,
	          'x': '20151023'
	        }, {
	          'y1': 569,
	          'y2': 0,
	          'y0': 569,
	          'x': '20151024'
	        }, {
	          'y1': 569,
	          'y2': 0,
	          'y0': 569,
	          'x': '20151025'
	        }]
	      }
	    };
	  });
	}
	
	function overviewTotalTopNChannelRealTimeData(mock) {
	  mock.post('/overviewTotalTopNChannelRealTimeData.do', function (req) {
	    return {
	      body: {
	        'ID': '1450861970909864',
	        'statusCode': 200,
	        'name': {
	          'y0': 'total'
	        },
	        'content': [{
	          'y0': 0,
	          'x': '20151020'
	        }, {
	          'y0': 1169,
	          'x': '20151021'
	        }, {
	          'y0': 1138,
	          'x': '20151022'
	        }, {
	          'y0': 1140,
	          'x': '20151023'
	        }, {
	          'y0': 1138,
	          'x': '20151024'
	        }, {
	          'y0': 1138,
	          'x': '20151025'
	        }]
	      }
	    };
	  });
	}

/***/ },

/***/ 785:
/*!****************************************************!*\
  !*** ./assets/tracking/helpers/load_base_style.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ 786);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"font-awesome/css/font-awesome.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	__webpack_require__(/*! rc-table/assets/index.css */ 787);

	__webpack_require__(/*! rc-pagination/assets/index.css */ 788);

	__webpack_require__(/*! ../../css/app.css */ 789);

	__webpack_require__(/*! ../../css/component-search.css */ 790);

	__webpack_require__(/*! ../../css/component-select.css */ 791);

	__webpack_require__(/*! ../../css/frame.css */ 792);

	__webpack_require__(/*! ../../css/override.css */ 793);

	__webpack_require__(/*! ../../css/panel.css */ 794);

	__webpack_require__(/*! ../../css/rc_calendar.css */ 795);

	__webpack_require__(/*! ../../css/rc_time_picker.css */ 796);

	__webpack_require__(/*! ../../css/side_menu.css */ 797);

	__webpack_require__(/*! ../../css/tabs.css */ 798);

	__webpack_require__(/*! ../../css/universal.css */ 799);

/***/ },

/***/ 786:
/*!********************************************!*\
  !*** ./~/bootstrap/dist/css/bootstrap.css ***!
  \********************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 787:
/*!*************************************!*\
  !*** ./~/rc-table/assets/index.css ***!
  \*************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 788:
/*!******************************************!*\
  !*** ./~/rc-pagination/assets/index.css ***!
  \******************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 789:
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 790:
/*!*****************************************!*\
  !*** ./assets/css/component-search.css ***!
  \*****************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 791:
/*!*****************************************!*\
  !*** ./assets/css/component-select.css ***!
  \*****************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 792:
/*!******************************!*\
  !*** ./assets/css/frame.css ***!
  \******************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 793:
/*!*********************************!*\
  !*** ./assets/css/override.css ***!
  \*********************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 794:
/*!******************************!*\
  !*** ./assets/css/panel.css ***!
  \******************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 795:
/*!************************************!*\
  !*** ./assets/css/rc_calendar.css ***!
  \************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 796:
/*!***************************************!*\
  !*** ./assets/css/rc_time_picker.css ***!
  \***************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 797:
/*!**********************************!*\
  !*** ./assets/css/side_menu.css ***!
  \**********************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 798:
/*!*****************************!*\
  !*** ./assets/css/tabs.css ***!
  \*****************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 799:
/*!**********************************!*\
  !*** ./assets/css/universal.css ***!
  \**********************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=app.js.map
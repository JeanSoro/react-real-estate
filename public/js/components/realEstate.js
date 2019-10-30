webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '20-34 pretoria street',
  city: 'Ottawa',
  province: 'ON',
  realtor: 'Teresa Mendoza',
  rooms: 2,
  postedOn: '09/08/2018',
  price: 850000,
  floorSpace: 2300,
  extras: ['elevator', 'basement', 'swimming_pool'],
  homeType: 'Studio',
  image: 'https://www.reminetwork.com/wp-content/uploads/rsz_apartment.jpg'
}, {
  address: '33-3456 York Street West',
  city: 'Toronto',
  province: 'ON',
  realtor: 'Nick Smith',
  rooms: 3,
  postedOn: '01/06/2018',
  price: 540000,
  floorSpace: 1500,
  extras: ['elevator', 'gym'],
  homeType: 'Studio',
  image: 'http://belloiserealty.com/wp-content/uploads/2018/06/south-beach-condo-4-768x576.jpg'
}, {
  address: '78-548 Queens ave',
  city: 'Montreal',
  province: 'QC',
  realtor: 'Jordan Deshawn',
  rooms: 2,
  postedOn: '10/12/2017',
  price: 678000,
  floorSpace: 1890,
  extras: ['basement', 'gym'],
  homeType: 'Apartment',
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg'
}, {
  address: '123-6778 king road',
  city: 'Vancouver',
  province: 'BC',
  realtor: 'Mike Guedes',
  rooms: 4,
  postedOn: '22/05/2018',
  price: 940567,
  floorSpace: 3000,
  extras: ['elevator', 'gym', 'basement'],
  homeType: 'Condo',
  image: 'https://modtraveler.net/wp-content/uploads/2017/09/IMG_0212-768x576.jpg'
}, {
  address: '10-6778 ugk drive',
  city: 'Toronto',
  province: 'ON',
  realtor: 'Son Heu Ming',
  rooms: 4,
  postedOn: '03/03/2017',
  price: 720097,
  floorSpace: 6964,
  extras: ['elevator', 'gym'],
  homeType: 'Condo',
  image: 'https://cdn.torontolife.com/wp-content/uploads/2017/06/toronto-condo-for-sale-377-madison-avenue-1-803x603.jpg'
}, {
  address: '986-11 richmond rd',
  city: 'Montreal',
  province: 'QC',
  realtor: 'Owen Sliti',
  rooms: 3,
  postedOn: '12/12/2018',
  price: 940567,
  floorSpace: 4000,
  extras: ['elevator', 'gym', 'swimming_pool', 'basement'],
  homeType: 'Apartment',
  image: 'https://www.impressiveinteriordesign.com/wp-content/uploads/2015/05/Modern-House-Interior-Design-Ideas-5.jpg'
}, {
  address: '15-6778 aplha street',
  city: 'Vancouver',
  province: 'BC',
  realtor: 'Roman',
  rooms: 6,
  postedOn: '01/02/2018',
  price: 540567,
  floorSpace: 3200,
  extras: ['elevator', 'gym', 'basement'],
  homeType: 'Apartment',
  image: 'https://www.condo613.ca/wp-content/uploads/2019/09/SAM_1299-768x576.jpg'
}, {
  address: '25-5500 cool ave',
  city: 'Miami',
  province: 'FL',
  realtor: 'Arturo Vidal',
  rooms: 5,
  postedOn: '02/15/2018',
  price: 540567,
  floorSpace: 3200,
  extras: ['elevator', 'gym', 'swimming_pool'],
  homeType: 'Condo',
  image: 'https://images1.apartments.com/i2/ZyKooaVHiRkXiqHozlZIpN4q1AOmiFZb0f4UTdG_a2E/117/1505-demonbreun-nashville-tn-building-photo.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingData = __webpack_require__(100);

var _listingData2 = _interopRequireDefault(_listingData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: 'Jean',
      listingsData: _listingData2.default,
      city: 'All',
      homeType: 'All',
      bedrooms: '0',
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: _listingData2.default,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'long',
      search: ''
    }, _this.change = function (e) {
      var name = e.target.name;
      var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

      _this.setState(_defineProperty({}, name, value), function () {
        _this.filteredData();
      });
    }, _this.changeView = function (viewName) {
      _this.setState({
        view: viewName
      });
    }, _this.filteredData = function () {
      var newData = _this.state.listingsData.filter(function (item) {
        return item.price >= _this.state.min_price && item.price <= _this.state.max_price && item.floorSpace >= _this.state.min_floor_space && item.floorSpace <= _this.state.max_floor_space && item.rooms >= _this.state.bedrooms;
      });

      //Filtering by cities
      if (_this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city === _this.state.city;
        });
      }

      // Filtering by hometypes
      if (_this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType === _this.state.homeType;
        });
      }

      // Sorting prices in ascending and descending order
      if (_this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (_this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      // Logic for search input
      if (_this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this.state.search.toLowerCase();
          var searchMatch = city.match(searchText);

          if (searchMatch != null) {
            return true;
          }
        });
      }

      // Sorting through extra features data 
      if (_this.state.swimming_pool != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('swimming_pool') === _this.state.swimming_pool;
        });
      }

      if (_this.state.basement != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('basement') === _this.state.basement;
        });
      }

      if (_this.state.gym != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('gym') === _this.state.gym;
        });
      }

      if (_this.state.elevator != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('elevator') === _this.state.elevator;
        });
      }

      _this.setState({
        filteredData: newData
      });
    }, _this.populateForms = function () {
      // City
      var cities = _this.state.listingsData.map(function (item) {
        return item.city;
      });
      cities = new Set(cities); // removes anything that is repeated, keeps unique ones, new Set() creates an object
      cities = [].concat(_toConsumableArray(cities)); // spreading object into a new array to change type from object to array
      cities = cities.sort();

      //HomeType
      var homeTypes = _this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();

      // Bedrooms
      var bedrooms = _this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      bedrooms = bedrooms.sort();

      _this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          bedrooms: bedrooms,
          cities: cities
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // Sorting prices from lowest to highest by default 
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }

    //filtering minimum and maximum prices, as well as floor spaces inputs

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, {
            change: this.change,
            globalState: this.state,
            populateAction: this.populateForms
          }),
          _react2.default.createElement(_Listings2.default, {
            listingsData: this.state.filteredData,
            change: this.change,
            globalState: this.state,
            changeView: this.changeView
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');
_reactDom2.default.render(_react2.default.createElement(App, null), app);

// <ModalComponent/>

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Filter.__proto__ || Object.getPrototypeOf(Filter)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: 'Jean'
    }, _this.cities = function () {
      if (_this.props.globalState.populateFormsData.cities != undefined) {
        var cities = _this.props.globalState.populateFormsData.cities;


        return cities.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }, _this.homeTypes = function () {
      if (_this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = _this.props.globalState.populateFormsData.homeTypes;


        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }, _this.bedrooms = function () {
      var bedrooms = _this.props.globalState.populateFormsData.bedrooms;

      if (bedrooms != undefined) {
        var _bedrooms = _this.props.globalState.populateFormsData.bedrooms;


        return _bedrooms.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item,
            '+ BR'
          );
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter by Category'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            {
              name: 'city',
              className: 'filters city',
              onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            this.cities()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'Home Type'
          ),
          _react2.default.createElement(
            'select',
            {
              name: 'homeType',
              className: 'filters homeType',
              onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All Homes'
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'Bedrooms'
          ),
          _react2.default.createElement(
            'select',
            {
              name: 'bedrooms',
              className: 'filters bedrooms',
              onChange: this.props.change },
            this.bedrooms()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price',
              onChange: this.props.change,
              value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price',
              onChange: this.props.change,
              value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_floor-space', className: 'min-floor-space',
              onChange: this.props.change,
              value: this.props.globalState.min_floor_space }),
            _react2.default.createElement('input', { type: 'text', name: 'max_floor-space', className: 'max-floor-space',
              onChange: this.props.change,
              value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Extras'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Elevators'
              ),
              _react2.default.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox',
                onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { name: 'swimming_pool', value: 'swimming_pool', type: 'checkbox',
                onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Basement'
              ),
              _react2.default.createElement('input', { name: 'basement', value: 'basement', type: 'checkbox',
                onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox',
                onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "header",
    null,
    _react2.default.createElement(
      "div",
      { className: "logo" },
      "Real Estate App"
    ),
    _react2.default.createElement(
      "nav",
      null,
      _react2.default.createElement(
        "a",
        { href: "#" },
        "create Ads"
      ),
      _react2.default.createElement(
        "a",
        { href: "#" },
        "About Us"
      ),
      _react2.default.createElement(
        "a",
        { href: "#" },
        "Log In"
      ),
      _react2.default.createElement(
        "a",
        { href: "#", className: "register-btn" },
        "Register"
      )
    )
  );
};

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Listings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Listings.__proto__ || Object.getPrototypeOf(Listings)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: 'Jean'
    }, _this.loopListings = function () {
      var listingsData = _this.props.listingsData;


      if (listingsData === undefined || listingsData.length === 0) {
        return "No matches for this listing. Please try again.";
      }

      return listingsData.map(function (listing, index) {
        if (_this.props.globalState.view === 'long') {
          // This is the long view
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-6', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat\n              center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-img' },
                      ' '
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Contact: ',
                        listing.realtor
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        listing.postedOn
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                  ' ',
                  listing.city,
                  ', ',
                  listing.province
                )
              )
            )
          );
        } else {
          // This is the box view
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat\n              center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-img' },
                      ' '
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Contact: ',
                        listing.realtor
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        listing.postedOn
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                  ' ',
                  listing.city,
                  ', ',
                  listing.province
                )
              )
            )
          );
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Listings, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Type to search...', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-list', onClick: this.props.changeView.bind(null, "long") }),
              _react2.default.createElement('i', { className: 'fa fa-th', onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.loopListings()
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'ul',
              { className: 'pages' },
              _react2.default.createElement(
                'li',
                null,
                'Prev'
              ),
              _react2.default.createElement(
                'li',
                { className: 'active' },
                '1'
              ),
              _react2.default.createElement(
                'li',
                null,
                '2'
              ),
              _react2.default.createElement(
                'li',
                null,
                '3'
              ),
              _react2.default.createElement(
                'li',
                null,
                '4'
              ),
              _react2.default.createElement(
                'li',
                null,
                '5'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Next'
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[102]);
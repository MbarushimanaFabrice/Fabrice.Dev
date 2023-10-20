import {
  require_react
} from "./chunk-YMY646DU.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/@sl-codeblaster/react-3d-animated-card/dist/index.modern.js
var import_react = __toESM(require_react());
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var styles = { "container": "_2SINN", "cardDefault": "_38qs-" };
var AnimatedCard = function(_React$Component) {
  _inheritsLoose(AnimatedCard2, _React$Component);
  function AnimatedCard2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.card = null;
    _this.figureIcon = null;
    _this.title = null;
    _this.body = null;
    _this.button = null;
    _this._onMouseMove = function(e) {
      var card = _this.card;
      var config = _this.props.config;
      var xAxis = (window.innerWidth / 2 - e.pageX) / ((config === null || config === void 0 ? void 0 : config.rotation) || 15);
      var yAxis = (window.innerHeight / 2 - e.pageY) / ((config === null || config === void 0 ? void 0 : config.rotation) || 15);
      card.style.transition = "all 0.1s ease";
      card.style.transform = "rotateY(" + xAxis + "deg) rotateX(" + yAxis + "deg)";
    };
    _this._onMouseLeave = function() {
      var _config$transition;
      var card = _this.card;
      var config = _this.props.config;
      card.style.transition = "all " + (config && ((_config$transition = config.transition) === null || _config$transition === void 0 ? void 0 : _config$transition.duration) || 0.5) + "s ease";
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
      if (_this.title)
        _this.title.style.transform = "translateZ(0px)";
      if (_this.body)
        _this.body.style.transform = "translateZ(0px)";
      if (_this.button)
        _this.button.style.transform = "translateZ(0px)";
      if (_this.figureIcon)
        _this.figureIcon.style.transform = "translateZ(0) rotateZ(0deg)";
    };
    _this._onMouseEnter = function() {
      var _config$transition2, _config$transition3, _config$transition4, _config$transition5, _config$transition6, _config$transform, _config$transform2, _config$transform3, _config$transform4, _config$transform4$fi, _config$transform5, _config$transform5$fi;
      var card = _this.card;
      var config = _this.props.config;
      card.style.transition = "all " + (config && ((_config$transition2 = config.transition) === null || _config$transition2 === void 0 ? void 0 : _config$transition2.duration) || 0.5) + "s ease";
      if (_this.title)
        _this.title.style.transition = "all " + (config && ((_config$transition3 = config.transition) === null || _config$transition3 === void 0 ? void 0 : _config$transition3.duration) || 0.5) + "s ease";
      if (_this.body)
        _this.body.style.transition = "all " + (config && ((_config$transition4 = config.transition) === null || _config$transition4 === void 0 ? void 0 : _config$transition4.duration) || 0.5) + "s ease";
      if (_this.button)
        _this.button.style.transition = "all " + (config && ((_config$transition5 = config.transition) === null || _config$transition5 === void 0 ? void 0 : _config$transition5.duration) || 0.5) + "s ease";
      if (_this.figureIcon)
        _this.figureIcon.style.transition = "all " + (config && ((_config$transition6 = config.transition) === null || _config$transition6 === void 0 ? void 0 : _config$transition6.duration) || 0.5) + "s ease";
      if (_this.title)
        _this.title.style.transform = "translateZ(" + (config && ((_config$transform = config.transform) === null || _config$transform === void 0 ? void 0 : _config$transform.titleTranslateZ) || 140) + "px)";
      if (_this.body)
        _this.body.style.transform = "translateZ(" + (config && ((_config$transform2 = config.transform) === null || _config$transform2 === void 0 ? void 0 : _config$transform2.bodyTextTranslateZ) || 125) + "px)";
      if (_this.button)
        _this.button.style.transform = "translateZ(" + (config && ((_config$transform3 = config.transform) === null || _config$transform3 === void 0 ? void 0 : _config$transform3.buttonTranslateZ) || 100) + "px)";
      if (_this.figureIcon)
        _this.figureIcon.style.transform = "translateZ(" + (config && ((_config$transform4 = config.transform) === null || _config$transform4 === void 0 ? void 0 : (_config$transform4$fi = _config$transform4.figureIcon) === null || _config$transform4$fi === void 0 ? void 0 : _config$transform4$fi.translateZ) || 160) + "px) rotateZ(" + (config && ((_config$transform5 = config.transform) === null || _config$transform5 === void 0 ? void 0 : (_config$transform5$fi = _config$transform5.figureIcon) === null || _config$transform5$fi === void 0 ? void 0 : _config$transform5$fi.rotation) || 45) + "deg)";
    };
    _this.state = {
      mainClass: ""
    };
    return _this;
  }
  var _proto = AnimatedCard2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    this.card = document.querySelector("." + styles.cardDefault);
    this.figureIcon = document.querySelector("." + styles.cardDefault + " .figure img");
    this.title = document.querySelector("." + styles.cardDefault + " .content .title");
    this.body = document.querySelector("." + styles.cardDefault + " .content .body");
    this.button = document.querySelector("." + styles.cardDefault + " .footer .footer_btn");
    import_react.default.Children.forEach(this.props.children, function(element) {
      if (!import_react.default.isValidElement(element))
        return;
      _this2.setState({
        mainClass: element.props.className
      });
    });
  };
  _proto.render = function render() {
    var _this$props = this.props, children = _this$props.children, className = _this$props.className, style = _this$props.style;
    var mainClass = this.state.mainClass;
    return import_react.default.createElement("div", Object.assign({
      className: [styles.container, className].join(" "),
      onMouseMove: this._onMouseMove,
      onMouseLeave: this._onMouseLeave,
      onMouseEnter: this._onMouseEnter
    }, {
      style
    }), import_react.default.isValidElement(children) && import_react.default.cloneElement(children, {
      className: mainClass + " " + styles.cardDefault
    }));
  };
  return AnimatedCard2;
}(import_react.default.Component);
var index_modern_default = AnimatedCard;
export {
  index_modern_default as default
};
//# sourceMappingURL=@sl-codeblaster_react-3d-animated-card.js.map

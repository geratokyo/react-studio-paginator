"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _ = require("lodash");
var Paginator = (function (_super) {
    __extends(Paginator, _super);
    function Paginator(p) {
        var _this = _super.call(this, p) || this;
        _this.setIndex = function (index) {
            _this.setState({
                currentPageIdx: index
            });
        };
        _this.goToStart = function () {
            _this.setState({
                currentPageIdx: 0
            });
        };
        _this.goToEnd = function () {
            _this.setState({
                currentPageIdx: _this.state.totalPages - 1
            });
        };
        _this.calculatePages = function () {
            _this.setState({
                totalPages: Math.ceil(_this.props.totalElements / _this.props.elementsPerView),
                currentPageIdx: _this.props.defaultPageIdx || 0
            });
        };
        _this.showPreviousElements = function () {
            var temp = _this.state.currentPageIdx - 1;
            if (temp < 0) {
                temp = 0;
            }
            _this.setState({ currentPageIdx: temp });
            return temp;
        };
        _this.showNextElements = function () {
            var temp = _this.state.currentPageIdx + 1;
            if (temp > _this.state.totalPages - 1) {
                temp = _this.state.totalPages - 1;
            }
            _this.setState({ currentPageIdx: temp });
            return temp;
        };
        _this.getShownElement = function () {
            return _.range((_this.state.currentPageIdx * _this.props.elementsPerView), (_this.state.currentPageIdx * _this.props.elementsPerView) + _this.props.elementsPerView).map(function (e) {
                return e < _this.props.totalElements && _this.props.customElement(e);
            });
        };
        _this.state = {
            showPaginatorControls: _this.props.showPaginatorControls,
            totalPages: 0,
            currentPageIdx: 0
        };
        return _this;
    }
    Paginator.prototype.componentDidMount = function () {
        this.calculatePages();
    };
    Paginator.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.totalElements !== this.props.totalElements) {
            this.calculatePages();
        }
    };
    Paginator.prototype.render = function () {
        var props = this.props, state = this.state;
        return (React.createElement("div", { className: "paginator " + props.className },
            React.createElement("div", { className: "paginator__elements" }, this.getShownElement()),
            this.state.showPaginatorControls &&
                React.createElement("div", { className: "paginator__controls" },
                    React.createElement("div", { className: "paginator__buttons" },
                        React.createElement("span", { className: "paginator__btn paginator__btn--prev", onClick: this.showPreviousElements }, props.previousButton),
                        React.createElement("span", { className: "paginator__status" }, props.pageStatusComponent(state.currentPageIdx + 1, state.totalPages)),
                        React.createElement("span", { className: "paginator__btn paginator__btn--next", onClick: this.showNextElements }, props.nextButton)))));
    };
    Paginator.defaultProps = {
        className: "",
        showPaginatorControls: true,
        elementsPerView: 10,
        previousButton: (React.createElement("button", null, "Previous")),
        nextButton: (React.createElement("button", null, "Next")),
        pageStatusComponent: function (e, i) {
            return e + " of " + i;
        }
    };
    return Paginator;
}(React.Component));
exports.Paginator = Paginator;
//# sourceMappingURL=Paginator.js.map
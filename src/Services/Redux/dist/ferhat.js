"use strict";
///test ts
exports.__esModule = true;
var react_1 = require("react");
var OtherHeading = function (_a) {
    var text = _a.text, number = _a.number, isText = _a.isText, isSection = _a.isSection;
    var content = isText ? text : number;
    var IsClass = function (params) {
        if (params) {
            return react_1["default"].createElement("div", null, params.text);
        }
        if (params) {
            return react_1["default"].createElement("section", null, params.text);
        }
    };
    return ();
    var params = text, number, isText, isSection;
    react_1["default"].createElement(IsClass, { params: true });
    // isSection ? <section>{content}</section> : <div>{content}</div>
};
;
/*
is section true >
<section>text - number</section> ? istext
*/
function App() {
    return (react_1["default"].createElement(OtherHeading, { text: "text", number: 1, isText: true, isSection: true }, "ferhat"));
}
exports["default"] = App;

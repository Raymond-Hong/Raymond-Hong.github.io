(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{152:function(n,e,a){"use strict";a.r(e);var t=a(0),v=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"content"},[a("p",[n._v("3、特殊的数字")]),n._v(" "),a("p",[n._v("1.不是数字的数字")]),n._v(" "),a("p",[n._v("如果数学运算的操作数不是数字类型(或者无法解析为常规的十进制或者十六进制数字),\n就无法返回一个有效的数字,这种情况下返回值为NaN。")]),n._v(" "),a("p",[n._v("NaN意指“不是一个数字”（not a number),这个名字容易引起误会,\n例如:")]),n._v(" "),a("pre",[a("code",[n._v('var a = 2 / "foo";  //NaN\n\ntypeof a === "number";  //true\n')])]),n._v(" "),a("p",[n._v("换句话说,“不是数字的数字”仍然是数字类型。")]),n._v(" "),a("p",[n._v("NaN是一个“警戒值”(sentinel value，有特殊用途的常规值)，用于指出数字类型中的错误情况，\n即“执行数学运算没有成功，这是失败后返回的结果”。")]),n._v(" "),a("p",[n._v("有人也许认为如果要检查变量的值是否为NaN, 可以直接和NaN进行比较,就像比较null和undefined那样。\n实则不然。")]),n._v(" "),a("pre",[a("code",[n._v('var a = 2 / "foo";\n\na == NaN;   // false\n\na === NaN;  // false\n')])]),n._v(" "),a("p",[n._v("NaN是一个特殊值,它和自身不相等,是唯一一个非自反 (自反, reflexive, 即 x === x 不成立)的值。\n而NaN != NaN 为true, 很奇怪吧?")])])}],!1,null,null,null);v.options.__file="特殊的数字.md";e.default=v.exports}}]);
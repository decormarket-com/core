// 2019-10-12
// "Provide to ability to close the «Quick Product View» of frontend category pages
// by clicking outside of it or pressing the «Escape» button": https://github.com/decormarket-com/core/issues/12
define(['df-lodash', 'jquery', 'mage/utils/wrapper'], function(_, $, w) {'use strict'; return function(sb) {
var f = _.once(function(_this) {
	$('body').click(function(e) {
		if (!$(e.target).closest('#quick-window').length) {
			_this.hideWindow();
		}
	});
	$(document).keyup(function(e) {
		if (27 === e.keyCode) {
			_this.hideWindow();
		}
	});
});
$.extend(sb.prototype, {createWindow: w.wrap(sb.prototype.createWindow, function(_super) {_super(); f(this);})});
return sb;};});
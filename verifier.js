// See LICENSE for usage information

// The following lines allow the ping function to be loaded via commonjs, AMD,
// and script tags, directly into window globals.
// Thanks to https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) { if (typeof define === 'function' && define.amd) { define([], factory); } else if (typeof module === 'object' && module.exports) { module.exports = factory(); } else { root.trackIPM = factory(); }
}(this, function () {
    function isAutomatedTraffic() {
      return (window.document.documentElement.getAttribute("webdriver") || navigator.webdriver || window.callPhantom || window._phantom)
    }
    return isAutomatedTraffic;
}));

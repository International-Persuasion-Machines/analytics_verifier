(function(global, deps, factory, root) {
  if(typeof define==='function'&&define.amd)define(deps,factory);
  else if(typeof module==='object'&&module.exports)module.exports=factory.apply(root,deps.map(function(_){return require(_.split(':')[0])}));
  else root[global]=factory.apply(root,deps.map(function(_){_=_.split(':');return root[_[_.length-1]]}));
} (
'isAutomatedTraffic',
function(other) {

  function constructor() {
    return (window.document.documentElement.getAttribute("webdriver") || navigator.webdriver || window.callPhantom || window._phantom)
  }

  return constructor;

}, this));

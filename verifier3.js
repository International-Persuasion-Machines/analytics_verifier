function isAutomatedTraffic() {
      return (window.document.documentElement.getAttribute("webdriver") || navigator.webdriver || window.callPhantom || window._phantom)
    }

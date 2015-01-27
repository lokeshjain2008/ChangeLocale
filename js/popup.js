(function() {
  window.onload = function() {
    return document.getElementById("ok").onclick = function() {
      return chrome.extension.sendMessage({
        type: 'changeLang'
      });
    };
  };

}).call(this);

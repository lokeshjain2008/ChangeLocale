(function() {
  window.onload = function() {
    return document.getElementById("ok").onclick = function() {
      return chrome.extension.sendMessage({
        type: 'changeLang'
      });
    };
  };

  chrome.extension.browserAction.onClicked.addListener(function() {
    alert("From the popup bro");
    return chrome.extension.sendMessage({
      type: 'changeLang'
    });
  });

}).call(this);

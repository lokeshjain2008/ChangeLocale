(function() {
  var changeLang;

  changeLang = function() {
    return chrome.tabs.getSelected(null, function(tab) {
      return chrome.tabs.sendMessage(tab.id, {
        type: "changeLang",
        color: '#ccc'
      });
    });
  };

  chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.type) {
      case 'changeLang':
        return changeLang();
    }
  });

  chrome.browserAction.onClicked.addListener(function() {
    return chrome.extension.sendMessage({
      type: 'changeLang'
    });
  });

}).call(this);

(function() {
  var changeLang;

  changeLang = function() {
    var CLScript;
    CLScript = document.createElement('script');
    CLScript.src = chrome.extension.getURL('/js/myscript.js');
    return document.head.appendChild(CLScript);
  };

  chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    switch (message.type) {
      case 'changeLang':
        return changeLang();
    }
  });

}).call(this);

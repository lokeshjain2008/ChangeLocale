
/*


chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case 'changeLang':
			change_lang();
			//This will go the content Script but that is useless for the work...
		break;
    }
    return true;
});


var change_lang = function() {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "changeLang", color: "#F00"});
        chrome.browserAction.setBadgeText({text: "Active!"});
    });
}
 */

(function() {
  var changeLang;

  changeLang = function() {
    return chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendMessage(tab.id, {
        type: "changeLang",
        color: '#ccc'
      });
      return chrome.browserAction.setBadgeText({
        text: "Active!"
      });
    });
  };

  chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.type) {
      case 'changeLang':
        return changeLang();
    }
  });

}).call(this);

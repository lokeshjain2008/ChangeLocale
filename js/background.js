// listening for an event / one-time requests
// coming from the popup
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
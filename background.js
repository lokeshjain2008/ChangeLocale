// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "color-divs":
            colorDivs();
        break;
		
		case 'changeLang':
			change_lang();
			//This will go the content Script but that is useless for the work...
		break;
		
		
    }
    return true;
});


var colorDivs = function() {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "changeLang", color: "#F00"});
        // setting a badge
        chrome.browserAction.setBadgeText({text: "red!"});
    });
}


var change_lang = function() {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "changeLang", color: "#F00"});
        // setting a badge
		console.log(tab);
        chrome.browserAction.setBadgeText({text: "Active!"});
    });
}
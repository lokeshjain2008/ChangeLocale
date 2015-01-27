###


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


###
changeLang = ->
	alert 'Called this'
	chrome.tabs.getSelected null, (tab) ->
		chrome.tabs.sendMessage tab.id,{
		type: "changeLang"
		color: '#ccc'
		}
		chrome.browserAction.setBadgeText {text: "Active!"}

chrome.extension.onMessage.addListener (request,sender,sendResponse) ->
	alert request.type
	switch request.type
		when 'changeLang' then changeLang()
				
				


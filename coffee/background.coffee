changeLang = ->
	chrome.tabs.getSelected null, (tab) ->
		chrome.tabs.sendMessage tab.id,{
		type: "changeLang"
		color: '#ccc'
		}
		# chrome.browserAction.setBadgeText {text: "Active!"}
		
chrome.extension.onMessage.addListener (request,sender,sendResponse) ->
	switch request.type
		when 'changeLang' then changeLang()
				
#Background page can listen to the 'browserAction' for the extension				
chrome.browserAction.onClicked.addListener ->
	chrome.extension.sendMessage {type:'changeLang'}	

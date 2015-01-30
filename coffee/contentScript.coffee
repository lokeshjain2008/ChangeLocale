# Note: this script don't have access to the 'browserAciton' api..
#	chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
changeLang = ->
	CLScript = document.createElement('script')
	CLScript.src = chrome.extension.getURL '/js/myscript.js'
	document.head.appendChild CLScript
	
chrome.extension.onMessage.addListener (message,sender,sendResponse)->
	switch message.type
		when 'changeLang' then changeLang()
		
		
			
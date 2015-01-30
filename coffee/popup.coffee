window.onload =  -> 
	document.getElementById("ok").onclick = ->
		chrome.extension.sendMessage {type:'changeLang'}
		
		
# Wake the change on just click on the Extension click

chrome.extension.browserAction.onClicked.addListener ->
	alert "From the popup bro"
	chrome.extension.sendMessage {type:'changeLang'}
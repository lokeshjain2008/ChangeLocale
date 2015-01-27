window.onload =  -> 
	document.getElementById("ok").onclick = ->
		chrome.extension.sendMessage {type:'changeLang'}
		
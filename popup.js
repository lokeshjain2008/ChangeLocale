window.onload = function() {
    document.getElementById("ok").onclick = function() {
        chrome.extension.sendMessage({
            type: "changeLang"
        });
    }
}
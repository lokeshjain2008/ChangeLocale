// var element =  document.getElementById('ok');
// element.addEventListener('click',function(){
//
// 	console.log(document.querySelector('.ng-scope'));
// 	console.log('Hey this is called man');
// 	chrome.windows.getCurrent(function(info){
// 		console.log(info);
//
// 	});
// 	chrome.tabs.getCurrent(function(tab){
// 	       // console.log(tab.url);
// 	    }
// 	);
// });
//
// chrome.windows.getCurrent(function(win)
// {
// 	console.log(win);
//     chrome.tabs.getAllInWindow(win.id, function(tabs)
//     {
//         // Should output an array of tab objects to your dev console.
//         console.debug(tabs);
//     });
// });

//window.addEventLinstener('load',function(){
	function change_lang(){
		var row_element = 	document.querySelector('.ng-scope');
		
		var tabId = null;
		
		// chrome.tabs.getCurrent(function(tab){
// 	 	       console.log(tab.url);
// 			   console.log(tab);
// 			    }
// 			);
		
		//var el =  $(row_element);
		//console.log(el);
		//-- MAGIC CODE -- //
		var new_script =  document.createElement('script');
		new_script.src = chrome.extension.getURL('js/myscript.js');
		document.head.appendChild(new_script);
		// This garbage for the current code
		/*
		console.log(window);
		
		//below is falling ... 
		console.log(window.angular);
		alert("Hello");
		console.log(chrome.extension.getURL('myscript.js'));
		//console.log(angular.module('bb.app').name);
		//console.log(I18n.translations);
		var t = el.injector().get('$translate');
		t.use('de');
	
		el.scope().$apply();
		
		*/
		
	}
	
	//});



	chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
		// This is called when there is event coming from the background page.
		//alert('hey bro...');
	    switch(message.type) {
	        case "colors-div":
	            var divs = document.querySelectorAll("div");
	            if(divs.length === 0) {
	                alert("There are no any divs in the page.");
	            } else {
	                for(var i=0; i<divs.length; i++) {
	                    divs[i].style.backgroundColor = message.color;
	                }
	            }
	        break;
			
		case 'changeLang':
			change_lang();
			// chrome.tabs.executeScript(null, {code:"change_lang();"})
		break;
			
	    }
	});





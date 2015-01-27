if window.angular
	angular_element = angular.element(".ng-scope:first")
	translate_service =  angular_element.injector().get('$translate')
	
	alert("Page don't use Angular Translate.") unless translate_service.length
	
	changeLanguage = (lang) ->
		translate_service.use lang
		angular_element.scope().$apply()
		
	if window.I18n.translations
		langs = Object.keys(window.I18n.translations)
		#prepare select options on the document Fragment
		 
		#select_options = document.createDocumentFragment()
		# Dropped the idea to make it simple still don't make repainting heavy
		select_options = '<select id="CLSelect" class="text-info">'
		for lang in langs
			select_options += "<option value=\"#{lang}\">#{lang}</option>" 
		select_options += "</select>"
		
		#Create container for the select element
		CLcontainer = "<divclass'form-element'>
			<h3 id='CLSelectToggle' data-target='CLSelectDiv' class='text-success' style='ursor:pointer;'>Show/hide</h3>
			<div id='CLSelectDiv'> #{select_options} </div>			
			"
		#finally add it the document page
		CLLink = document.createElement('div')
		CLLink.id = 'CLLinkDiv'
		CLLink.style.position  = 'fixed'
		CLLink.style.zIndex = '9999'
		CLLink.style.top = '50px'
		CLLink.style.right = '10px'
		CLLink.style.textAlign = 'right'
		document.body.appendChild(CLLink)
		CLLinked = document.querySelector('#CLLinkDiv')
		CLLinked.innerHTML = CLcontainer
			
		document.querySelector("#CLSelectToggle").onclick = ->
			target_element = document.querySelector("##{@.dataset.target}")
			target_element.style.display = if target_element.style.display == 'none' then 'block' else 'none'
			
		document.querySelector("#CLSelect").addEventListener 'change', ->
			changeLanguage @.value
	
else
	alert "No angular found on the page."
		
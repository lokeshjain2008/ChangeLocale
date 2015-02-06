#Functions related to drag and drop functionality.
drag_start = (event)->
	el = event.target
	event.dataTransfer.setData "text/plain",
	    											(el.offsetLeft - event.clientX) + ',' + (el.offsetTop - event.clientY)

drag_over = (e)->
	e.preventDefault()
	false

drop = (e)->
	offset = event.dataTransfer.getData("text/plain").split(',')
	dm = document.querySelector('#CLLinkDiv')
	dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px'
	dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px'
	e.preventDefault()
	# save position for the session use put into localStorage..
	localStorage.setItem('cl_elem_left', dm.style.left)
	localStorage.setItem('cl_elem_top', dm.style.top) 
	false
			

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
		
		#Check if we have already added the element on the page if yes then make it visible.
		if document.querySelector("#CLLinkDiv")
			document.querySelector('#CLSelectToggle').click()
			return false
		 
		#select_options = document.createDocumentFragment()
		#Dropped the idea to make it simple still don't make repainting heavy
		select_options = '<select id="CLSelect" class="text-info">'
		for lang in langs
			select_options += "<option value=\"#{lang}\">#{lang}</option>" 
		select_options += "</select>"
		
		#Create container for the select element
		CLcontainer = "<divclass'form-element'>
			<h3 id='CLSelectToggle' data-target='CLSelectDiv' class='text-success' style='cursor:pointer;'>+/-</h3>
			<div id='CLSelectDiv'> #{select_options} </div>			
			"
		#finally add it the document page
		CLLink = document.createElement('div')
		CLLink.id = 'CLLinkDiv'
		CLLink.style.position  = 'fixed'
		CLLink.style.zIndex = '9999'
		CLLink.style.top = localStorage.cl_elem_top || '50px'
		CLLink.style.left = localStorage.cl_elem_left || '80%'
		CLLink.draggable = 'true'
		CLLink.style.boxShadow = '0px 0px 6px 3px seagreen'
		document.body.appendChild(CLLink)
		CLLinked = document.querySelector('#CLLinkDiv')
		CLLinked.innerHTML = CLcontainer
			
		document.querySelector("#CLSelectToggle").onclick = ->
			target_element = document.querySelector("##{@.dataset.target}")
			target_element.style.display = if target_element.style.display == 'none' then 'block' else 'none'
			
		document.querySelector("#CLSelect").addEventListener 'change', ->
			changeLanguage @.value
			
		#Add Drag and Drop functionality to the extension handle
		CLLink.addEventListener 'dragstart', drag_start, false
		document.body.addEventListener 'dragover', drag_over, false
		document.body.addEventListener 'drop', drop, false
		
	
else
	alert "No angular found on the page."
		
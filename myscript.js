(function(){
	
var first_element = angular.element('.ng-scope:first');
var lokesh_t =  first_element.injector().get('$translate');
var lokesh_change_lang = function(lang){
	
	lokesh_t.use(lang);
	first_element.scope().$apply();
}


var lokesh_langs =  Object.keys(window.I18n.translations);

var lokesh_fragment = document.createDocumentFragment();
lokesh_langs.forEach(function(lang){
	var option =  document.createElement('option');
	option.value = lang;
	option.textContent = lang;
	lokesh_fragment.appendChild(option);
});

var lokesh_select = document.createElement('select');
lokesh_select.id = 'lokesh_lang_select';
lokesh_select.class = 'form-element';
lokesh_select.style.position = 'fixed';
lokesh_select.style.top = '70px';
lokesh_select.style.right = '10px';
lokesh_select.style.zIndex = '9999';
lokesh_select.class = 'text-info';

lokesh_select.appendChild(lokesh_fragment);
document.body.appendChild(lokesh_select);
var select_element  = document.querySelector('#lokesh_lang_select');
select_element.addEventListener('change',function(){
	lokesh_change_lang(this.value);
});	
	
})();



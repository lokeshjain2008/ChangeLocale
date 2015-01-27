(function() {
  var CLLink, CLLinked, CLcontainer, angular_element, changeLanguage, lang, langs, select_options, translate_service, _i, _len;

  if (window.angular) {
    angular_element = angular.element(".ng-scope:first");
    translate_service = angular_element.injector().get('$translate');
    if (!translate_service.length) {
      alert("Page don't use Angular Translate.");
    }
    changeLanguage = function(lang) {
      translate_service.use(lang);
      return angular_element.scope().$apply();
    };
    if (window.I18n.translations) {
      langs = Object.keys(window.I18n.translations);
      select_options = '<select id="CLSelect" class="text-info">';
      for (_i = 0, _len = langs.length; _i < _len; _i++) {
        lang = langs[_i];
        select_options += "<option value=\"" + lang + "\">" + lang + "</option>";
      }
      select_options += "</select>";
      CLcontainer = "<divclass'form-element'> <h3 id='CLSelectToggle' data-target='CLSelectDiv' class='text-success' style='ursor:pointer;'>Show/hide</h3> <div id='CLSelectDiv'> " + select_options + " </div>";
      CLLink = document.createElement('div');
      CLLink.id = 'CLLinkDiv';
      CLLink.style.position = 'fixed';
      CLLink.style.zIndex = '9999';
      CLLink.style.top = '70px';
      CLLink.style.right = '10px';
      CLLink.style.textAlign = 'right';
      document.body.appendChild(CLLink);
      CLLinked = document.querySelector('#CLLinkDiv');
      CLLinked.innerHTML = CLcontainer;
      document.querySelector("#CLSelectToggle").onclick = function() {
        var target_element;
        target_element = document.querySelector("#" + this.dataset.target);
        return target_element.style.display = target_element.style.display === 'none' ? 'block' : 'none';
      };
      document.querySelector("#CLSelect").addEventListener('change', function() {
        return changeLanguage(this.value);
      });
    }
  } else {
    alert("No angular found on the page.");
  }

}).call(this);

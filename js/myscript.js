(function() {
  var CLLink, CLLinked, CLcontainer, angular_element, changeLanguage, drag_over, drag_start, drop, lang, langs, select_options, translate_service, _i, _len;

  drag_start = function(event) {
    var el;
    el = event.target;
    return event.dataTransfer.setData("text/plain", (el.offsetLeft - event.clientX) + ',' + (el.offsetTop - event.clientY));
  };

  drag_over = function(e) {
    e.preventDefault();
    return false;
  };

  drop = function(e) {
    var dm, offset;
    offset = event.dataTransfer.getData("text/plain").split(',');
    dm = document.querySelector('#CLLinkDiv');
    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    e.preventDefault();
    localStorage.setItem('cl_elem_left', dm.style.left);
    localStorage.setItem('cl_elem_top', dm.style.top);
    return false;
  };

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
      if (document.querySelector("#CLLinkDiv")) {
        document.querySelector('#CLSelectToggle').click();
        return false;
      }
      select_options = '<select id="CLSelect" class="text-info">';
      for (_i = 0, _len = langs.length; _i < _len; _i++) {
        lang = langs[_i];
        select_options += "<option value=\"" + lang + "\">" + lang + "</option>";
      }
      select_options += "</select>";
      CLcontainer = "<divclass'form-element'> <h3 id='CLSelectToggle' data-target='CLSelectDiv' class='text-success' style='cursor:pointer;'>+/-</h3> <div id='CLSelectDiv'> " + select_options + " </div>";
      CLLink = document.createElement('div');
      CLLink.id = 'CLLinkDiv';
      CLLink.style.position = 'fixed';
      CLLink.style.zIndex = '9999';
      CLLink.style.borderRadius = '3px';
      CLLink.style.top = localStorage.cl_elem_top || '50px';
      CLLink.style.left = localStorage.cl_elem_left || '80%';
      CLLink.draggable = 'true';
      CLLink.style.boxShadow = 'rgb(82, 82, 82) 2px 2px 6px 2px';
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
      CLLink.addEventListener('dragstart', drag_start, false);
      document.body.addEventListener('dragover', drag_over, false);
      document.body.addEventListener('drop', drop, false);
    }
  } else {
    alert("No angular found on the page.");
  }

}).call(this);

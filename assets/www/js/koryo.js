var applicationVersion = "1.1.0";

function initTabLinkActions() {
  $('.precogLink').click(function(){
	$('.nav-tabs').find('#precogTab').trigger('click');
  });

  $('.espionLink').click(function(){
	$('.nav-tabs').find('#espionTab').trigger('click');
  });

  $('.senateurLink').click(function(){
	$('.nav-tabs').find('#senateurTab').trigger('click');
  });

  $('.pretreLink').click(function(){
	$('.nav-tabs').find('#pretreTab').trigger('click');
  });

  $('.armateurLink').click(function(){
	$('.nav-tabs').find('#armateurTab').trigger('click');
  });

  $('.banquierLink').click(function(){
	$('.nav-tabs').find('#banquierTab').trigger('click');
  });

  $('.gardienLink').click(function(){
	$('.nav-tabs').find('#gardienTab').trigger('click');
  });

  $('.journalisteLink').click(function(){
	$('.nav-tabs').find('#journalisteTab').trigger('click');
  });

  $('.marchandLink').click(function(){
	$('.nav-tabs').find('#marchandTab').trigger('click');
  });

  $('.barbaresLink').click(function(){
	$('.nav-tabs').find('#barbaresTab').trigger('click');
  });

  $('.lobbyingLink').click(function(){
	$('.nav-tabs').find('#lobbyingTab').trigger('click');
  });
}

function initLanguages() {
  var userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.substring(0,2);
  loadBundles(userLang);
  
  var settingForm = document.getElementById("settingForm");
  languageSelect = settingForm.elements["language"];
  setSelectedOptionStringValue(languageSelect, userLang);
}

function getSelectedOptionIntValue(selectComponent) {
	var result = 0;
	
	var optionValue = selectComponent.options[selectComponent.selectedIndex].value;
	
	if (!isNaN(optionValue)) {
        result = parseInt(optionValue);
    } // if
  
	return result;
}

function getSelectedOptionStringValue(selectComponent) {
	var result = '';
	
	var optionValue = selectComponent.options[selectComponent.selectedIndex].value;
	
	return result;
}

function setSelectedOptionStringValue(selectComponent, value) {
	var len = selectComponent.options.length;
    
    for (var i=0; i<len; i++){
      var lang = selectComponent.options[i].value;
	  if (selectComponent.options[i].value === value) {
		  selectComponent.options[i].selected = true;
	  } // if
    } // for
}

function saveSettings() {
  alert('Save settings');
}

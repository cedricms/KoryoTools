var applicationVersion = "1.2.0";

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

function supportsHtml5Ttorage() {
  try {
	return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
	return false;
  }
}

function initLanguages() {
  var userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.substring(0,2);
  var localStorageLanguage = userLang;
  
  if (supportsHtml5Ttorage()) {
	if((localStorage.getItem("localStorageLanguage") === null) || (localStorage.getItem("localStorageLanguage") === '')){
	  localStorage.setItem("localStorageLanguage", localStorageLanguage);
	} 
	else {
	  localStorageLanguage = localStorage.getItem("localStorageLanguage");
	} // if
  } // if
  loadBundles(localStorageLanguage);
  
  var settingForm = document.getElementById("settingForm");
  var languageSelect = settingForm.elements["language"];
  setSelectedOptionStringValue(languageSelect, localStorageLanguage);
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
	var result = selectComponent.options[selectComponent.selectedIndex].value;
	
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

function goToURL(pURL) {
	window.location.href = pURL;
}

function saveSettings() {
  var settingForm = document.getElementById("settingForm");
  var languageSelect = settingForm.elements["language"];
  var localStorageLanguage = getSelectedOptionStringValue(languageSelect);
  if (supportsHtml5Ttorage()) {	
	localStorage.setItem("localStorageLanguage", localStorageLanguage);
  } // if
  
  goToURL('cardDescriptions.html');
}

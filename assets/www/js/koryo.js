var applicationVersion = "1.0.0";

function initLanguages() {
	var userLang = navigator.language || navigator.userLanguage;
	userLang = userLang.substring(0,2);
	loadBundles(userLang);
}
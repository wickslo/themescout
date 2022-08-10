var list = ['colors', 'base','nav','chart'];

list.forEach(addstyles);

function addstyles(list) {
	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.type = 'text/css';
	style.href = chrome.runtime.getURL('themes/oxygen/'+list+'.css');
	document.getElementsByTagName("head")[0].appendChild(style);
}
'use strict';

applyTheme().catch(console.error);



async function applyTheme() {

	var item = await chrome.storage.sync.get(['theme']);

	const list = ['colors', 'base', 'nav', 'chart'];

	for (const file of list) {
		var style = document.createElement('link');
		style.rel = 'stylesheet';
		style.type = 'text/css';
		style.href = chrome.runtime.getURL('themes/' + item.theme + '/' + file + '.css');
		document.getElementsByTagName("head")[0].appendChild(style);
	}
}
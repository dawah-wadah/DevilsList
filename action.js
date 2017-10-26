chrome.browserAction.onClicked.addListener(() => {
	chrome.tabs.update({
		url: "https://angel.co/jobs"
	});
});

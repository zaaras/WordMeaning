// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
	var context = "selection";
	var title = "Find meaning";
	var id = chrome.contextMenus.create({"title": title, "contexts":[context],
	                                         "id": "context" + context});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
	// Get the highlighted text
	var selectedText = info.selectionText;

	// Form a google search for it
	//var url = "https://www.google.com/search?q=" + encodeURIComponent(selectedText);
  	
  	// TODO Maybe do a search on some dictionary site?
	// Here is a sample search url for dictionary.reference.com
	//var url = "http://dictionary.reference.com/browse/" + encodeURIComponent(selectedText) + "?s=t";
  	
  	// This opens a new tab with the search parameters, we don't wanna do that
  	//window.open(url, '_blank');
  	// Instead, we wanna get scrape that page and get the meanings?
  	// TODO Implement that here......
};

chrome.commands.onCommand.addListener(function(command) {
    if (command == "toggle-annotations") {
        console.log(2);
        chrome.tabs.getSelected(null, function(tab) {
            var script = "\
                document.querySelectorAll('.js-toggle-file-check-annotations').forEach(function(elem) { \
                    elem.click(); \
                }); \
            ";

            chrome.tabs.executeScript(tab.id, { code: script }, function(response) {});
        });
    }
});
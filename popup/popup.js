// popup get reponse
function active() {
    chrome.tabs.query({
        active : true , currentWindow : true
    },  function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id , {key : 'getElem'} , function(response) {
            // code ...
            // get respone from window and process in popup
            $("h1").text(response.num)
        })
    })
}
active()
function clickActive() {
    chrome.tabs.query({
        active : true , currentWindow : true
    },  function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id , {key : 'changeElem'} , function(response) {
            // code ...
            // get respone from window and process in popup
            $("h1").text('changed')
        })
    })
}
$(document).ready(function() {
    $('#button').click(clickActive)
})

 
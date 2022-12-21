// popup get reponse
function active() {
    chrome.tabs.query({
        active : true , currentWindow : true
    },  function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id , {key : 'getElem'} , function(response) {
            console.log(response.videos);
            $("ul").append(response.videos.map(function (el) {
                return $('<li>').text(el);
            }));
        })
    })
}
active()
function clickDownload() {
    chrome.tabs.query({
        active : true , currentWindow : true
    },  function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id , {key : 'downloadVideo'} , function(response) {
            // downloadVideo
            if(response.isDownload){
                downloadVideo(response.videos, response.urlVideo)
                $('h1').text('downloaded')
            }
        })
    })
}

$(document).ready(function() {
    $('#button').click(clickDownload)
})
function downloadVideo(videos, urlVideo) {
    $('.download-video').html('<iframe style="width:100%;height:60px;border:0;overflow:hidden;" scrolling="no" src="https://loader.to/api/button/?url='+urlVideo+'&f=720"></iframe>');
}


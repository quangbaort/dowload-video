// window send request to popup
function getURlVideo() {
    var urlVideo = $('video').map(function() {
        return this.src
    }).get()
    return urlVideo
}
chrome.runtime.onMessage.addListener(function(rq ,  sender , sendResponse) {
    //code
    // send Response to popup
    var videos = getURlVideo();
    if(rq.key == "getElem"){
        sendResponse({videos : videos})
    }
    if(rq.key == "downloadVideo"){
        sendResponse({isDownload : true, videos, urlVideo: window.location.href})
    }
})
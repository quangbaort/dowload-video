// window send request to popup
function countElem() {
    var num =  $('a').length
    return num
}
function changeElem() {
    $("a").each(function (o, elt) {
        var newElt = $("<div class='p'/>");
        Array.prototype.slice.call(elt.attributes).forEach(function(a) {
          newElt.attr(a.name, a.value);
        });
        $(elt).wrapInner(newElt).children(0).unwrap();
    });
}
chrome.runtime.onMessage.addListener(function(rq ,  sender , sendResponse) {
    //code 
    // send Response to popup 
    if(rq.key == "getElem"){
        var num  = countElem();
        sendResponse({num : num})
    }
    if(rq.key == "changeElem"){
        changeElem()
        sendResponse({change : 1})
    }
})
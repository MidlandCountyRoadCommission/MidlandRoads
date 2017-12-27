function createRequestObject() {
    var obj;
    var browser = navigator.appName;
    if (browser == "Microsoft Internet Explorer") {
        obj = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        obj = new XMLHttpRequest();
    }
    return obj;
}

function sendReq(req, elementId) {
    var http = createRequestObject();
    http.open('get', req);
    http.onreadystatechange = handleResponse(elementId);
    http.send(null);
}

function handleResponse(Id) {
    if (http.readyState == 4) {
        var response = http.responseText;
        document.getElementById(Id).innerHTML = response;
    }
}

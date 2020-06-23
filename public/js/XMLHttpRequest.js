(function(){
    let httpRequest
    const element = document.getElementById("sendRequest")
    element.addEventListener("click", makeRequest)

    function makeRequest() {
        httpRequest = new XMLHttpRequest()

        if(!httpRequest) {
            alert("放弃吧 少年！你的浏览器不支持XMLHTTPREQUEST")
        }

        httpRequest.onreadystatechange = responseContent
        httpRequest.open('GET', 'http://localhost:3000/hello')
        httpRequest.send()
    }

    function responseContent() {
        try {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                alert(httpRequest.responseText);
            } else {
                alert('There was a problem with the request.');
            }
            }
        }
        catch( e ) {
            alert('Caught Exception: ' + e.description);
        }
    }
   
})();
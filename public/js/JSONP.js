function jsonp({ url, params, callback }) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")


        window[callback] = () => {
            resolve(data)
            document.body.removeChild(script)
        }

        params = { ...params, callback }

        let arrs = []

        for(let key in params) {
            arrs.push(`${key}=${params[key]}`)
        }

        script.src = url + "?" + arrs.join("&")

        document.body.appendChild(script)
    })
}

document.getElementById("sendRequest").addEventListener("click", function() {
    jsonp({
        url: 'http://localhost:3000/hello',
        params: {
            a: 0,
            b: 1
        },
        callback: "cb"
    }).then(data => console.log(data))
})


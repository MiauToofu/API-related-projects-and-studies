function fazGet(url) {
    const request = new XMLHttpRequest()
    request.open("get", url, false)
    request.send()
    return request.responseText
}

function main() {
    const data = fazGet("https://viacep.com.br/ws/01001000/json/")
    const cepInfo = JSON.parse(data)
    console.log(cepInfo)
    const cepInfoDiv = document.getElementById("cepInfo")

    Object.entries(cepInfo).forEach(entry => {
        cepInfoDiv.innerHTML += entry[0] + ": " + entry[1] + "<br>";
    });
}

main()
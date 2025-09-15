
document.getElementById("searchBtn").addEventListener("click", function () {
    document.getElementById("display").innerHTML = ""
    fetch("/data.json")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var container
            for (var i = 0; i < data.length; i = i + 1) {
                if (data[i].sentence.toLowerCase().includes(document.getElementById("input").value.toLowerCase())) {
                    container = document.createElement("div");
                    container.innerHTML = data[i].sentence.toString()
                    container.className = "box"
                    document.getElementById("display").appendChild(container)
                }
            }
        })
})
import { getHTMLList } from "https://richardliucode.github.io/list/list.js"
document.getElementById("searchBtn").addEventListener("click", function () {
    fetch("/data.json")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var list = []
            for (var i = 0; i < data.length; i = i + 1) {
                if (data[i].sentence.toLowerCase().includes(document.getElementById("input").value.toLowerCase()))
                    list.push(data[i].sentence)
            }
            document.getElementById("display").innerHTML = getHTMLList(list)
        })
})
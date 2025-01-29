let searchEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");

function createAppend(search_results) {
    for (let result of search_results) {
        //console.log(result);
        let {
            description,
            link,
            title
        } = result;
        console.log(link);

        let divEl = document.createElement("div");
        searchResultsEl.appendChild(divEl);

        let ancEl = document.createElement("a");
        ancEl.textContent = title;
        ancEl.href = link;
        ancEl.target = "_blank";
        ancEl.classList.add("wiki-search-header");
        divEl.appendChild(ancEl);

        let brEl = document.createElement("br");
        divEl.appendChild(brEl);

        let dicreptionLink = document.createElement("a");
        dicreptionLink.textContent = link;
        ancEl.target = "_blank";
        dicreptionLink.classList.add("result-url");
        dicreptionLink.href = link;
        divEl.appendChild(dicreptionLink);

        let brEl2 = document.createElement("br");
        divEl.appendChild(brEl2);

        let discriptionEl = document.createElement("p");
        discriptionEl.textContent = description;
        divEl.appendChild(discriptionEl);
    }
}

function search(event) {
    if (event.key === "Enter") {
        let searvhVal = searchEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searvhVal;
        let options = {
            method: "GET"
        };
        fetch(url, options).then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            console.log(jsonData);
            let {
                search_results
            } = jsonData;
            console.log(search_results);
            createAppend(search_results);
        });
    }
}
searchEl.addEventListener("keydown", search);
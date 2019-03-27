var allbtn = document.querySelector("#allbtn");
allbtn.addEventListener("click",getAll);
var searchbtn = document.querySelector("#searchbtn");
searchbtn.addEventListener("click",getName);

function getAll() {
let url = "https://restcountries.eu/rest/v2/all";
let div = document.querySelector("#panel");
    div.innerHTML = "";

ajaxFetch('GET', url, popDiv);
}
function getName() {
    let div = document.querySelector("#panel");
    div.innerHTML = "";
    let name = document.querySelector("#cname");
    if (name.value == "") { alert("Please Insert a name"); return;}
    let url = "https://restcountries.eu/rest/v2/name/" + name.value;
        
    // method url , cllback
    ajaxFetch('GET', url, popDiv);
}
function popDiv(xhr) {
    jsonobj = JSON.parse(xhr.responseText);
    let div= document.querySelector("#panel");
    for (var i = 0; i < jsonobj.length; i++) {
        var divItem = document.createElement("div");
        divItem.setAttribute("class", "item")

        var divFlag = document.createElement("div");
        divFlag.setAttribute("class","flag");
        divFlag.innerHTML = "<img src='" + jsonobj[i].flag + "'>";

        var divContent = document.createElement("div");
        divContent.setAttribute("class", "content");
        divContent.innerHTML = `
        <p>Name: ${jsonobj[i].name} </p>
        <p>Top Level Domain:  ${jsonobj[i].topLevelDomain} </p>
        <p>Capital: ${jsonobj[i].capital} </p>
        <p>Currncies: <br>
         - Code: ${jsonobj[i].currencies[0].code} <br>
         - Name: ${jsonobj[i].currencies[0].name} <br>
         - symbol: ${jsonobj[i].currencies[0].symbol} <br></p>
        `;
        
        divItem.appendChild(divFlag);
        divItem.appendChild(divContent);
        div.appendChild(divItem);
    }
}

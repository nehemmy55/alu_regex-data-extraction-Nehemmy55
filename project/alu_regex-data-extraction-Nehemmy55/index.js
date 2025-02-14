function extractData() {
    let text = document.getElementById("textInput").value;
    let dataType = document.getElementById("dataType").value;
    let regex;

    // Define regex patterns
    if (dataType === "email") {
        regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    } else if (dataType === "url") {
        regex = /https?:\/\/[^\s]+/g;
    } else if (dataType === "phone") {
        regex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    } else if (dataType === "creditCard") {
        regex = /\b(?:\d{4}[-\s]?){3}\d{4}\b/g;
    }

    // Find matches
    let matches = text.match(regex);
    document.getElementById("result").innerHTML = matches ? matches.join("<br>") : "No matches found.";
}
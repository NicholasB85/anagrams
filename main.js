const anagramsDiv = document.getElementById("AnagramsDiv");

function alphabetize(word) {
    return word.toLowerCase().split("").sort().join("").trim();
}

function anagramFinder(typedText) {
    const sortedTypedText = alphabetize(typedText)
    const anagrams = [];

    words.forEach(word => {
        const sortedWord = alphabetize(word);
        if (sortedTypedText === sortedWord && typedText !== word) {
            anagrams.push(word);
        }
    });

    return anagrams;
}

document.getElementById("findButton").onclick = function () {
    // your code will go here ...
    var typedText = document.getElementById("input").value;

    for (let matchedWord of anagramFinder(typedText)) {
        let span = document.createElement("span");
        let textContent = document.createTextNode(matchedWord + " ");
        span.appendChild(textContent);
        anagramsDiv.appendChild(span);
    }
}
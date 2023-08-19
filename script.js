const textInput = document.getElementById("textInput");
const styleButton = document.getElementById("styleButton");
const output = document.getElementById("output");

styleButton.addEventListener("click", applyStyles);

function applyStyles() {
  const inputText = textInput.value.trim();
  const words = inputText.split(" ");
  
  const styledWords = words.map(word => {
    let firstChars = "";
    let restOfWord = "";

    if (word.length >= 6) {
      firstChars = word.slice(0, 3).toUpperCase();
      restOfWord = word.slice(3);
    } else if (word.length >= 3) {
      firstChars = word.slice(0, 2).toUpperCase();
      restOfWord = word.slice(2);
    } else if (word.length >= 1) {
      firstChars = word.slice(0, 1).toUpperCase();
      restOfWord = word.slice(1);
    }
    
    return `<span class="styled-word"><strong>${firstChars}</strong></span>${restOfWord}`;
  });
  
  output.innerHTML = styledWords.join(" ");
}

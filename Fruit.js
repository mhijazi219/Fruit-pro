const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",

  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",

  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",

  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",

  "Gooseberry",
  "Grape",

  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",

  "Juniper berry",
  "Kiwifruit",

  "Lemon",
  "Lime",
  "Loquat",

  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",

  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",

  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",

  "Soursop",
  "Star fruit",
  "Strawberry",

  "Tamarind",
  "Yuzu",
];

function search(str) {
  const results = [];
  fruit.filter((val) =>
    val.toLowerCase().includes(str) ? results.push(val) : null
  );
  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value.toLowerCase();
  const results = search(inputVal);
  inputVal ? showSuggestions(results) : (suggestions.innerText = "");
}

function showSuggestions(results) {
  suggestions.innerText = "";
  if (results.length > 0) {
    for (let i = 0; i < results.length && i < 5; i++) {
      const newLi = document.createElement("li");
      newLi.innerText = results[i];
      suggestions.appendChild(newLi);
    }
  }
}

function toggleHighlight(e) {
  const targetClass = e.target.classList;
  const eventType = e.type;
  if (eventType === "mouseover") {
    targetClass.add("highlight");
  } else if (eventType === "mouseout") {
    targetClass.remove("highlight");
  }
}

function useSuggestion(e) {
  fruitVal = e.target.innerText;
  input.value = fruitVal;
  suggestions.innerText = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("mouseover", toggleHighlight);
suggestions.addEventListener("mouseout", toggleHighlight);
suggestions.addEventListener("click", useSuggestion);

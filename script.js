const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let str = '';
let results = [];

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(newStr) {
	const lowerCaseFruit = fruit.map(f => f.toLowerCase());
	results = lowerCaseFruit.filter(f => f.includes(newStr));
	return results;
}

function searchHandler(e) {
	const inputVal = e.target.value;
	const newStr = str + inputVal;
	console.log(newStr.toLowerCase());
	results = search(newStr.toLowerCase());
	console.log(results);
	if (inputVal.trim() === '') {
		suggestions.innerHTML = '';
	}
	else {
		showSuggestions(results, 5);
	}
	return results;
}

function showSuggestions(results, maxItems, inputVal) {
	suggestions.innerHTML = '';
	const limitedResults = results.slice(0, maxItems);
	limitedResults.forEach(result => {
		const li = document.createElement('li');
		li.textContent = result;
		suggestions.appendChild(li);
	})
}

function useSuggestion(e) {
	console.log(e.target.parentElement)
	if (e.target.parentElement === suggestions) {
		input.value = e.target.innerText;
		suggestions.innerHTML = '';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
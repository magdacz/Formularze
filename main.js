const addForm = document.querySelector('.form--add');

const clearForm = () => {
	addForm.elements.node.value= '';
	addForm.elements.text.value='';
	addForm.elements.attr.value='';
	addForm.elements.value.value='';
}

const addElement = (e, node, txt, attr, value) => {
	e.preventDefault();
	const element = document.createElement(node);
	
	if(txt) {
		const text = document.createTextNode(txt);
		element.appendChild(text);
	}
	
	if(attr) {
		element.setAttribute(attr, value);
	}
	
	document.querySelector('.content').appendChild(element);
	
	clearForm()
	
}

addForm.addEventListener('submit',(e) => addElement(
	e,
	addForm.elements.node.value,
	addForm.elements.text.value,
	addForm.elements.attr.value,
	addForm.elements.value.value,
));

const searchForm = document.querySelector('.form--search');

const searchElements = (e, nameElement) => {
	e.preventDefault();
	const infoElement = document.querySelector('.result');
	infoElement.textContent= '';
	const elements = document.querySelectorAll(nameElement);
	console.log(elements);
	if(elements.length) {
		infoElement.innerHTML =`<p class='result__number-info'>Ilość znalezionych w dokumencie elementów ${nameElement}: <strong> ${elements.length}</strong></p>`;
		showInfo(elements, infoElement);
	} else {
		infoElement.innerHTML = `<p class='result__number-info'>W tym dokumencie nie znalazłem żadnych elementów ${nameElement}</p>`;
		return;
	}
}

const showInfo = (elements, infoElement) => {
	elements.forEach(element => {
		const item = document.createElement('div');
		item.className = 'result__element-description';
		item.innerHTML = `
		<div>${element.nodeName}</div>
		<div>Klasa/klasy: ${element.className}</div>
		<div>Wysokość elementu: ${element.offsetHeight}</div>
		<div>Szerokość elementu: ${element.offsetWidth}</div>
		<div>Odległość od lewej krawędzi: ${element.offsetLeft}</div>
		<div>Odległośc od górnej krawędzi: ${element.offsetTop}</div>
		<div>Liczba elemntów dzieci: ${element.childElementCount}</div>
		`;
		infoElement.appendChild(item);
	})
}

searchForm.addEventListener('submit',(e) => searchElements(e, searchForm.elements['searching-element'].value));

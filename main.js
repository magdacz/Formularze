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

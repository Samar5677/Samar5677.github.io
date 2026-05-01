function makeBigger() {
	document.getElementById("textArea").style.fontSize = "24pt";
}

function makeFancy() {
	let text = document.getElementById("textArea");
	let fancy = document.getElementById("fancy");

	if (fancy.checked) {
		text.style.fontWeight = "bold";
		text.style.color = "blue";
		text.style.textDecoration = "underline";
	} else {
		text.style.fontWeight = "normal";
		text.style.color = "black";
		text.style.textDecoration = "none";
	}
}

function moo() {
	let textArea = document.getElementById("textArea");
	let text = textArea.value.toUpperCase();

	let sentences = text.split(".");
	for (let i = 0; i < sentences.length; i++) {
		sentences[i] = sentences[i].trim();
		if (sentences[i].length > 0) {
			let words = sentences[i].split(" ");
			words[words.length - 1] += "-MOO";
			sentences[i] = words.join(" ");
		}
	}

	textArea.value = sentences.join(". ");
}
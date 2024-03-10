document.getElementById("go_back").addEventListener("click", () => {
	history.back();
});

let ascii = document.querySelector(".ASCII_approximation > dt");
console.log(ascii);

let עם_אותיות = ascii.innerText
console.log(עם_אותיות);
console.log( עם_אותיות.charAt(0) );

let with_ascii = document.querySelector(".ASCII_approximation > dd");
console.log(with_ascii);

const ot2ascii = (ot) => {
	if ("ש" === ot)
		return "Sh";
}

console.log( ot2ascii(עם_אותיות.charAt(0)) );

const otiot2ascii = str => {
	console.log(str.length);
	for (let i = 0; i <= str.length - 1; ++i )
		console.log(i);
}

otiot2ascii( עם_אותיות );

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
	switch (ot) {
		case 'א':
			return '#';
			break;
		case 'ב':
			return "B+";
			break;
		case 'ג':
			return "G+";
			break;
		case 'ד':
			return "D+";
			break;
		case 'ה':
			return "H+";
			break;
		case 'ו':
			return "W+";
			break;
		case 'ז':
			return "Z+";
			break;
		case 'ח':
			return "X+";
			break;
		case 'ט':
			return "Tj";
			break;
		case 'י':
			return "J+";
			break;
		case 'כ':
			return "K+";
			break;
		case 'ך':
			return 'K%';
			break;
		case 'ל':
			return "L+";
			break;
		case 'מ':
			return "M+";
			break;
		case 'ם':
			return "M%";
			break;
		case 'נ':
			return "N+";
			break;
		case 'ס':
			return "S+";
			break;
		case 'ע':
			return "E+";
			break;
		case 'פ':
			return 'P+';
			break;
		case 'ף':
			return "P%";
			break;
		case 'צ':
			return "Tz";
			break;
		case 'ץ':
			return "TZ";
			break;
		case 'ק':
			return "Q+";
			break;
		case 'ר':
			return "R+";
			break;
		case 'ש':
			return "Sh";
			break;
		case 'ת':
			return "T+";
			break;
		default:
			return ot;
	}
}

console.log( ot2ascii(עם_אותיות.charAt(0)) );

const otiot2ascii = str => {
	let return_value = ""
	console.log(str.length);
	for (let i = 0; i <= str.length - 1; ++i )
		console.log(i);
	for (let i = 0; i <= str.length - 1; ++i )
		console.log( ot2ascii(str.charAt(i)) );
	for (let i of str)
		console.log(i);
	for (let i of str)
		console.log( ot2ascii(str) );

	for (let i of str)
		return_value += ot2ascii(i);
	return return_value;
}

console.log( otiot2ascii(עם_אותיות) );

with_ascii.innerText = otiot2ascii (ascii.innerText);

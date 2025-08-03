const letter2number = letter => {
	switch (letter) {
		case 'א':
			return 1;
			break;
		case 'ב':
			return 2;
			break;
		case 'ג':
			return 3;
			break;
		case 'ד':
			return 4;
			break;
		case 'ה':
			return 5;
			break;
		case 'ו':
			return 6;
			break;
		case 'ז':
			return 7;
			break;
		case 'ח':
			return 8;
			break;
		case 'ט':
			return 9;
			break;
		case 'י':
			return 10;
			break;
		case 'כ':
			return 20;
			break;
		case 'ך':
			return 500;
			break;
		case 'ל':
			return 30;
			break;
		case 'מ':
			return 40;
			break;
		case 'ם':
			return 600;
			break;
		case 'נ':
			return 50;
			break;
		case 'ן':
			return 700;
			break;
		case 'ס':
			return 60;
			break;
		case 'ע':
			return 70;
			break;
		case 'פ':
			return 80;
			break;
		case 'ף':
			return 800;
			break;
		case 'צ':
			return 90;
			break;
		case 'ץ':
			return 900;
			break;
		case 'ק':
			return 100;
			break;
		case 'ר':
			return 200;
			break;
		case 'ש':
			return 300;
			break;
		case 'ת':
			return 400;
		default:
			return ot;
	}
};

const hebrew = document.querySelector(".gimatria > dt");
console.log(hebrew);

const mila = hebrew.innerText;
console.log(mila);

const letters = mila.split("");
console.log(letters);

const numbers = letters => {
	const return_value = [];
	for (let letter of letters)
		return_value.push(letter2number(letter));
	return return_value;
}

const miszparim = numbers(letters);
console.log(miszparim);

const gimatria = numbers => numbers.join('+');
const numeri = gimatria(miszparim);
console.log(numeri);

const sum = document.querySelector(".gimatria > dd");
console.log(sum);

sum.innerText = numeri;

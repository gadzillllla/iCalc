
var a = '';
var temp_int;
var action;
var click_check = false;



const print_int = (num) => {
var i = document.getElementById('calc_display');
var j = 0;
a += num;
console.log(a);
if (a.length < 9){
	i.innerHTML = a;
}
else { i.innerHTML = 'Err'

	while (j < 9) {
		a += num[j];
		j++;
		console.log(a);
		}
	}
}




const plus = () => {
	temp_int = a;
	a = '';
	action = 'plus_action'
	}
const minus = () => {
	temp_int = a;
	a = '';
	action = 'minus_action'
	}
const mult = () => {
	temp_int = a;
	a = '';
	action = 'mult_action'
	}
const division = () => {
	temp_int = a;
	a = '';
	action = 'division_action'
	}

	

const equal = () => {
	switch(action) {
		case 'plus_action':
			result = Number(temp_int) + Number(a);
			break;
		case 'minus_action':
			result = Number(temp_int) - Number(a);
			break;
		case 'mult_action':
			result = Number(temp_int) * Number(a);
			break;
		case 'division_action':
			result =  Math.round(Number(temp_int) / Number(a)*1000000)/1000000;
			break;

	}
	a = '';
	print_int(String(result));
}
const clearALL = () => {
	var i = document.getElementById('calc_display');
	a = '';
	result = '';
	i.innerHTML = result;
}


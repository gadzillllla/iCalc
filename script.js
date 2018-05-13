
var a = '';
var temp_int;
var action;
var click_check = false;



const print_int = (num) => {
var i = document.getElementById('calc_display');
a += num;
console.log(a);
if (a.length < 9){
	i.innerHTML = a;
}
else i.innerHTML = 'Err'
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
			result = Number(temp_int) / Number(a);
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

const move_object = (elem) => {
	var calcBody = document.getElementById(elem);
	if (click_check === true) {
		var X = event.clientX - 20 +"px";
		var Y = event.clientY - 20 +"px";
		calcBody.style.left = X;
		calcBody.style.top = Y;
	}
}

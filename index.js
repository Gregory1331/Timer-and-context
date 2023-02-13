//////////КОНТЕКСТ//////////

// 303.1 Пусть теперь в одной и во второй функции мы будем выводить value инпута. Определите, что выведется в строчках кода, отмеченных комментариями:
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
// 	console.log(this.value); // что выведет? Ответ:text
// 	function child() {
// 		console.log(this.value); // что выведет? Ответ:ошибка
// 	}
// 	child();
// }

// 304.1 Автор кода хотел, чтобы по потери фокуса на экран вывелся квадрат числа из value инпута. Однако, почему-то при потери фокуса в консоль выдается ошибка. Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
//     let self = this;
// 	alert( square() );
// 	function square() {
// 		return self.value * self.value;
// 	}
//     square();
// }
// Ответ: во внешней функции запишем this в любую переменную и эта переменная будет доступна во внутренней функции


// 304.2 Возьмите код из предыдущей задачи и исправьте проблему кода с помощью изученного второго способа.
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
// 	alert( square(this) );
// 	function square(param) {
// 		return param.value * param.value;
// 	}
// }


// 304.3 Возьмите код из предыдущей задачи и исправьте проблему кода с помощью изученного третьего способа.
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
// 	let square = () => {
// 		console.log(this.value * this.value)
// 	}
//     square();
// }


// 305.1 С помощью метода call и функции func выведите на экран value каждого из инпутов.
// function func() {
// 	console.log(this.value);
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);


// 305.2 Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.
// let elem = document.querySelector('#elem');
// let param1= 'John'
// let param2= 'Smit'
// function func(param1, param2) {
// 	console.log(this.value + ', ' + param1 + ' ' + param2);
// }
// func.call(elem, param1, param2);


// 306.1 Добавьте в последнюю строчку метод apply так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.
// let elem = document.querySelector('#elem');
// let surname = 'John'
// let name = 'Smit'
// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }
// func.apply(elem, [surname, name]);


// 307.1 Напишите в указанном месте конструкцию с методом bind так, чтобы this внутри функции func всегда указывал на инпут из переменной elem.
// let elem = document.getElementById('elem');
// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// let newFunc = func.bind(elem);
// newFunc('John', 'Smit');
// newFunc('Eric', 'Luis'); 



//////////ТАЙМЕРЫ//////////

// 308.1 Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.
// setInterval(function() {
// 	console.log('!');
// }, 3000);


// 309.1 Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
// let i = 100;
// setInterval(() => console.log(--i), 1000);


// 310.1 Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
// let i = 10;
// let timerId = setInterval(function() {
// 	console.log(--i);
// 	if (i <= 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);


// 311.1 Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.
// let start = document.querySelector('#start');
// start.addEventListener('click', function() {
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(--i);
// 	}, 1000);
// });


// 311.2 Возьмите ваше решение предыдущей задачи. Проверьте, что многократное нажатие на кнопку приводит к ускорению отсчета. Исправьте эту проблему.
// let start = document.querySelector('#start');
// start.addEventListener('click', function func() {
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(--i);
// 	}, 1000);
// 	this.removeEventListener('click', func);
// });


// 312.1 Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер. По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	let i = 100;
// 	timerId = setInterval(function() {
// 		console.log(--i)
		// if (i <= 0){
		// 	clearInterval(timerId);
		// }
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// 312.2 После запуска кода, однако, оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// 312.3 После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// 312.4 После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// 312.5 После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// 312.6 Приведенный мною в теоретической части код не учитывает то, что на кнопку старт можно сделать несколько нажатий. Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки, а по нажатию на кнопку стоп - привязывать обратно. Исправьте проблему.
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.removeEventListener('click', function() {
// 	let i = 0;
// 	timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	let i = 0;
// 	timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// });


// 313.1 Объясните, зачем в приведенном выше коде используется функция Number. Что будет, если не написать эту функцию в данном коде?
// Ответ: Number нужен для того чтобы числа складывались как числа. Если не написать Number, то 1 будут складываться как строки.


// 313.2 Пусть в инпуте в атрибуте value изначально записано число 10. Запустите таймер, который каждую секунду будет уменьшать это число на единицу.
// let elem = document.querySelector('#elem');
// setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
// }, 1000);


// 313.3 Модифицируйте предыдущую задачу так, чтобы, как только содержимое инпута станет равно нулю, таймер прекратил свою работу.
// let elem = document.querySelector('#elem');
// let timerId = setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
// 		if (elem.value <= 0) {
// 		clearInterval(timerId);
// 	}
// },1000);


// 314.1 Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	let self = this;
// 	setInterval(function() {
// 		self.value = Number(elem.value) + 1;
// 	}, 1000);
// });


// 314.2 Исправьте проблему предыдущей задачи через стрелочную функцию.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	setInterval(() => elem.value = Number(elem.value) + 1, 1000);
// });


// 314.3 Объясните принцип работы приведенного мною кода.
// let elem = document.querySelector('#elem');//получаем ссылку 
// elem.addEventListener('click', function() { //реакция по клику
// 	setInterval((function(self) { // внешняя анонимная функция
// 		return function() { //внутренняя анонимная функция, воспроизводит 1 каждую секунду
// 			console.log(self.value);//выводит значения атрибута в консоль
// 		}
// 	})(this), 1000);//функция срабатывает каждую секунду. Таймер функции
// });


// 315.1 Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду уменьшалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода, используя изученный в данном уроке способ.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	setInterval(function(self) {
// 		self.value--;
// 	}, 1000, this);
// });


// 316.1 Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
// let button = document.querySelector('button');
// let p = document.querySelector('p');
// button.addEventListener('click', function(event) {
// 	p.innerHTML=3;
// setInterval(() => (p.innerHTML++), 1000);
// });	
// 316.2
// let button = document.querySelector('button');
// let p = document.querySelector('p');
// button.addEventListener('click', function(event) {
// 	p.innerHTML=10;
// let timerId = setInterval(function() {
// 	p.innerHTML--;
// 	if (p.innerHTML <= 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);})
// 316.3
// let input= document.getElementById('result');
// function start() {
// 	window.setInterval(timer,1000);
	
// }

// function timer() {
// 	input.value= input.value * input.value
// }

// 316.4
// let input = document.getElementById('task');
// function func() {
// 	window.funcId=window.setInterval(go,500);
	
// }

// function go() {
// 	if (parseInt(input.value)>0) {
// 		input.value=parseInt(input.value)-1;
// 	}
// 	if (parseInt(input.value)==0) {
// 		stop();
// 	}
// }
// function stop() {
// 	window.clearInterval(window.funcId)
// }

// 316.5
// let p = document.querySelector('p');
// let start = document.querySelector('#start');
// let input = document.querySelector('#input');
// let timerId;
// start.addEventListener('click', function() {
//     p.textContent = input.value; 
//     timerId = setInterval(function() {
//         if(+p.textContent > 0 ){
//             p.textContent = +p.textContent - 1; 
//         }else{
//             	clearInterval(timerId);
//         }
// 	}, 1000);
// });

// 316.6
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let timer = document.querySelector('.timer');
// let startTimer;
// start.addEventListener('click', function setTimer(event){
//   timer.innerHTML = 1;
//   startTimer = setInterval(function(){
//     timer.innerHTML++;
//   }, 1000);
// });

// stop.addEventListener('click', function(){
//   clearInterval(startTimer);
//   timer.innerHTML = '';
// })
// 316.7
// let p = document.getElementById('text');
// window.setInterval(func, 1000);

// function func() {
// 	if(p.style.color =='red') {
// 		p.style.color = 'green';
//  	} else {
// 		p.style.color ='red';
// 	}
// }
// 316.8
// let p = document.querySelector('p');
// setInterval(function(){
//     let date = new Date();
//     let num = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(); 
//     p.textContent = num;
// })

// 317.1
// let p =document.querySelector('p')
// 	setTimeout(function() {
// 		p.innerHTML= p.innerHTML + 'Hello'
// 	}, 10000);
// 317.2
// let i = 0;
// function timer() {
// 	setTimeout(function() {
// 		console.log(i++);
// 		if (i < Infinity) {
// 			timer();
// 		}
// 	}, i * 1000);
// }
// timer();
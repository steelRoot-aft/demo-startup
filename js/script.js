


//Бургер меню

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu,.header__block-menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
	$('.header__block-menu a').click(function () {
		$('.header__burger,.header__menu,.header__block-menu').removeClass('active');
		$('body').removeClass('lock');
	});
});

// Из фото в БГ

function ibg(){
		$.each($('.ibg'), function(_index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
}
ibg();

// Прогресс бар

const circularProgress = document.querySelectorAll(".item-skill__circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
	const progressValue = progressBar.querySelector(".item-skill__percentage");
	const innerCircle = progressBar.querySelector(".item-skill__inner-circle");
	let startValue = 0,
		endValue = Number(progressBar.getAttribute("data-percentage")),
		speed = 50,
		progressColor = progressBar.getAttribute("data-progress-color");

	const progress = setInterval(() => {
		startValue++;
		progressValue.textContent = `${startValue}%`;
		progressValue.style.color = `${progressColor}`;

		innerCircle.style.backgroundColor = `${progressBar.getAttribute(
			"data-inner-circle-color"
		)}`;

		progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6
			}deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
		if (startValue === endValue) {
			clearInterval(progress);
		}
	}, speed);
});


//Портфолио с фильтром

filterSelection("all")
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("column");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
	}
}

function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

// Анимация при скролле 

const animItems = document.querySelectorAll('.anim-items');

if(animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

				// Условия анимации
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			// Добавление класса для анимации
			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset <(animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('active');
				}
				
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);
}
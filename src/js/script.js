$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png" alt="next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]  
    });
    $('ul.catalog__tabs').on('click', 'li:not(.active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
});

/* var name = "Pavel";
let number = 7;
const pi = 3.14;
number = 4;
let leftBorderWidth = 200; */

/* let obj = {
    name: 'apple',
    color: 'green',
    weight: '200'
} */

/* alert(); */
/* console.log(number); */
/* let answer = confirm("Вам есть 18?");
console.log(answer); */

/* let answer = prompt("Вам есть 18?", "");
console.log(answer); */

/* console.log(4 + 'add'); */

/* let isChecked = true,
    isClose = false; */

/* console.log(isChecked && isClose); */

/* console.log(isChecked || isClose); */

/* if (2*4 == 8*6) {
    console.log("Верно")
} else {
    console.log("Ошибка")
} */

/* let answer = confirm("Вам есть 18?", "");
if (answer) {
    console.log("Welcome")
} else {
    console.log("Go out!")
} */

/* const num = 50;
if (num < 49) {
    console.log("Неправильно")
} else if (num > 100) {
    console.log("Неправильно")
} */

/* for(let i = 1; i < 8; i++) {
    console.log(i);
} */

/* function logging (a,b) {
    console.log(a + b)
}

logging(3, 5); */
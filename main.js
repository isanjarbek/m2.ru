// 1
const house = document.querySelector(".house-infor")
house.addEventListener("click",function() {
    const house = document.querySelector('.kvart');
    house.classList.toggle('block');
})
const down = document.querySelector(".house-infor")
down.addEventListener("click",function() {
    const down = document.querySelector("#down1");
    down.classList.toggle("change");
})

// 2
const number = document.querySelector(".number-infor")
number.addEventListener("click",function() {
    const number = document.querySelector('.class');
    number.classList.toggle('block');
})

const numbericon = document.querySelector(".number-infor")
numbericon.addEventListener("click",function() {
    const numbericon = document.querySelector("#down2");
    numbericon.classList.toggle("change");
})

// 3
const three = document.querySelector(".price-infor")
three.addEventListener("click",function() {
    const three = document.querySelector(".select-option2");
    three.classList.toggle('none');
})

const priceicon = document.querySelector(".price-infor")
priceicon.addEventListener("click",function() {
    const priceicon = document.querySelector("#down3");
    priceicon.classList.toggle("change");
})

//4
const four = document.querySelector(".city-infor")
four.addEventListener("click",function() {
    const four = document.querySelector('.region');
    four.classList.toggle('block');
})

const cityicon = document.querySelector(".city-infor")
cityicon.addEventListener("click",function() {
    const cityicon = document.querySelector("#down4");
    cityicon.classList.toggle("change");
})

const optionleft = document.querySelector(".select-option-left")
optionleft.addEventListener("click", function() {
    const optionleft = document.querySelector(".select-option-right")
    optionleft.classList.toggle("none")
})
const optionright = document.querySelector(".select-option-right")
optionright.addEventListener("click", function() {
    const optionright = document.querySelector(".select-option-left")
    optionright.classList.toggle("opacity")
})

const module = document.querySelector(".section-toggle")
module.addEventListener("click", function() {
    const module = document.querySelector(".popup-module")
    module.classList.toggle('popup-block')
})

/// #down5
const chevron = document.querySelector(".section-toggle")
chevron.addEventListener("click",function() {
    const chevron = document.querySelector("#down5");
    chevron.classList.toggle("change");
})



const tabs = document.querySelectorAll(".tab-list-module .base-module");
const sections = document.querySelectorAll(".base-container");

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    removeActiveTab();
    addActiveTab(tab);
  });
})

const removeActiveTab = () => {
  tabs.forEach(tab => {
    tab.classList.remove("is-active");
  });
  sections.forEach(section => {
    section.classList.remove("is-active");
  });
}

const addActiveTab = tab => {
  tab.classList.add("is-active");
  const href = tab.querySelector("a").getAttribute("href");
  const matchingSection = document.querySelector(href);
  matchingSection.classList.add("is-active");
}

const back = document.querySelector(".base-module")

back.addEventListener("click",function() {
    back.classList.toggle("background");    
    

})

new Swiper('.slider-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		// dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
	speed: 800,
	autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
		disablenOnInteraction: false,
	},

	breakpoints: {
		1440: {
			spaceBetween: 40,

			slidesPerView: 1,
		},

		768: {
			spaceBetween: 20,

			slidesPerView: 1,
		},
		500: {
			spaceBetween: 20,

			slidesPerView: 1,
		},

		320: {
			spaceBetween: 20,

			slidesPerView: 1,
		}

	}
});
const navBar = document.querySelector(".navigation");

const nav = window.addEventListener("scroll", () => {
	const positionWindow = window.scrollY > 0;
	navBar.classList.toggle("scroll-active", positionWindow);
	// sideBar.classList.remove('menu-active');
});

const menuBar = document.querySelector(".ri-menu-line");
const sideBar = document.querySelector(".menu");
const sideBar1 = document.querySelector(".action");

menuBar.addEventListener('click', () => {
	sideBar.classList.toggle('menu-active');
	sideBar1.classList.toggle('action-active');
});

const iconClose = document.querySelector(".ri-close-line");

iconClose.addEventListener('click', () => {
	sideBar.classList.remove('menu-active');
	sideBar1.classList.remove('action-active');
});

// <>
var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
        	el: ".swiper-pagination",
        	clickable: true,
        },
        breakpoints: {
        	640: {
            	slidesPerView: 2,
            	spaceBetween: 20,
        	},
        	768: {
            	slidesPerView: 2,
            	spaceBetween: 40,
        	},
        	990: {
            	slidesPerView: 3,
            	spaceBetween: 40,
        	},
    		1200: {
            	slidesPerView: 4,
            	spaceBetween: 30,
        	},
        	},
    	});
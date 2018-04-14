
// prevent menu links from working
$(".work-link").on("click", (e) =>{
	e.preventDefault();
});


// nav sliding mechanism
const menuBtn = document.getElementById("menu-btn");
const menuBefore = document.getElementById("menu-icon-before");
const menuAfter = document.getElementById("menu-icon-after");
const nav = document.getElementById("mobile-nav");

function checkMenu() {
	if(menuBtn.checked){
		menuBefore.style.display = "none";
		menuAfter.style.display = "inline-block";
		nav.style.transform = "translateY(0)";
	}
	else {
		menuBefore.style.display = "inline-block";
		menuAfter.style.display = "none";
		nav.style.transform = "translateY(-100%)";
	}
}

// hide the mobile menu when screen is larger than 1020px wide
window.onresize = checkWindowSize;
window.onload = checkWindowSize;

function checkWindowSize() {
    if(window.innerWidth > 1020) {
    	menuBtn.checked = false;
    }
    checkMenu();
};

menuBtn.addEventListener("click", () => {
	checkMenu();
});
$(document).ready(() => {
	// check browser width to render feed cards
	checkBrowserWidth()

	$(window).resize(function() {
		checkBrowserWidth();
	});

});

const moveCards = (cards, destination) => {
	$(cards).appendTo(destination);
}

const checkBrowserWidth = () => {
	let mediaQueryListTablet = window.matchMedia("(max-width: 1023px)").matches;
	let mediaQueryListDesktop = window.matchMedia("(min-width: 1024px) and (max-width: 1279px)");
	let mediaQueryListXL = window.matchMedia("(min-width: 1280px)");

	if (mediaQueryListTablet) {
		// reinsertCards('.right-rail .feed-interrupt');
	}

	if (mediaQueryListDesktop.matches) {
		moveCards('.feed-interrupt', '.right-rail');
		// reinsertCards('.left-rail .social-card');
	}
	if (mediaQueryListXL.matches) {
		moveCards('.social-card', '.left-rail');
		moveCards('.feed-interrupt', '.right-rail');
	}
}

const reinsertCards = (cards) => {
	// code goes here :)
}

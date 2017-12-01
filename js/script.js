$(document).ready(() => {
	// check browser width to render feed cards
	checkBrowserWidth()

	// displays content based on size of the browser
	$(window).resize(function() {
		checkBrowserWidth();
	});

});

// checks browser width and postitions cards accordingly
const checkBrowserWidth = () => {
	let mediaQueryListTablet = window.matchMedia("(max-width: 1023px)").matches;
	let mediaQueryListDesktop = window.matchMedia("(min-width: 1024px) and (max-width: 1279px)");
	let mediaQueryListXL = window.matchMedia("(min-width: 1280px)");

	if (mediaQueryListTablet) {
		reinsertCards();
	}

	if (mediaQueryListDesktop.matches) {
		moveCards('.feed-interrupt', '.right-rail');
	}

	if (mediaQueryListXL.matches) {
		moveCards('.social-card', '.right-rail');
		moveCards('.feed-interrupt', '.left-rail');
	}
}

// moves feed cards into place
const moveCards = (cards, destination) => {
	$(cards).appendTo(destination);
}

// should reinsert cards back into main feed
const reinsertCards = () => {
	const $cards = $('.feed');

	const $sorted = $cards.sort(function(a, b) {
		return $(a).data('order') - $(b).data('order');
	});

	$('.main').append($sorted);
}

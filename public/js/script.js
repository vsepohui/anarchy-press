$(function() {
	var $n = $('#news').masonry({});
	$n.imagesLoaded().progress(function() {
		$n.masonry('layout');
	});
});

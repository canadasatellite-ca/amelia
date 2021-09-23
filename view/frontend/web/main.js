// 2021-09-23
define(['jquery'], function($) {return (
	/**
	 * @param {Object} c
	 * @param {String} c.url
	 * @returns void
	 */
	function(c) {
		var $b = $('<div>').addClass('cs-amelia').html($('<iframe>').attr({height: '100%', src: c.url, width: '100%'}));
		$('body').append($b);
	});
});
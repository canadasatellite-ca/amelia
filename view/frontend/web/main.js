// 2021-09-23
define(['jquery'], function($) {return (
	/**
	 * @param {Object} c
	 * @param {String} c.url
	 * @returns void
	 */
	function(c) {
		(function() {
			var $globe = $('<div>');
			var $b = $('<button>').addClass('cs-amelia-closed').append($globe);
			$('body').append($b);
		})();
		(function() {
			// 2021-09-23
			// Creating the IFRAME on the server side (in the \CanadaSatellite\Amelia\Block::_toHtml() method)
			// breaks the Magento's JavaScripts for an unknown reason, so I create the IFRAME on the client's side.
			var $b = $('<div>').addClass('cs-amelia-open df-hidden');
			var $close = $('<div>').addClass('cs-close').text('✕').click(function() {$b.hide();});
			$b
				.append($close)
				.append($('<iframe>').attr({height: '100%', src: c.url, width: '100%'}))
			;
			$('body').append($b);
		})();
	});
});
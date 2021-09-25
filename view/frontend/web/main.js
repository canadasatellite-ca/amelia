// 2021-09-23
define(['jquery'], function($) {return (
	/**
	 * @param {Object} c
	 * @param {Boolean} c.sticky
	 * @param {String} c.url
	 * @returns void
	 */
	function(c) {
		var $body = $('body');
		var evOpen = 'cs.amelia.open';
		var evClose = 'cs.amelia.close';
		var trigger = function(e) {$(window).trigger(e);};
		$body.on('click', '.cs-amelia-link', function(e) {
			e.preventDefault();
			trigger(evOpen);
		});
		// 2021-09-23
		// Creating the IFRAME on the server side (in the \CanadaSatellite\Amelia\Block::_toHtml() method)
		// breaks the Magento's JavaScripts for an unknown reason, so I create the IFRAME on the client's side.
		(function() {
			var $chat = $('<div>').addClass('cs-amelia-open df-hidden');
			$chat
				.append($('<div>').addClass('cs-close').text('✕').click(function() {trigger(evClose);}))
				.append($('<iframe>').attr({height: '100%', src: c.url, width: '100%'}))
			;
			$body.append($chat);
			$(window).on(evClose, function() {$chat.addClass('df-hidden');});
			$(window).on(evOpen, function() {$chat.removeClass('df-hidden');});
		})();
		if (c.sticky) {
			var $button = $('<button>').addClass('cs-amelia-closed').click(function() {trigger(evOpen);});
			var $globe = $('<div>');
			$button.append($globe);
			$body.append($button);
			var animate = function() {
				var positions = [
					[0, 0], [-128, 0], [0, -128], [-128, -128], [-256, 0], [-256, -128], [0, -256], [-128, -256]
					,[-256, -256], [-384, 0], [-384, -128], [-384, -256], [0, -384], [-128, -384], [-256, -384], [-384, -384]
					,[-512, 0], [-512, -128], [-512, -256], [-512, -384], [0, -512], [-128, -512], [-256, -512], [-384, -512]
					,[-512, -512], [-640, 0], [-640, -128], [-640, -256], [-640, -384], [-640, -512], [0, -640], [-128, -640]
					,[-256, -640], [-384, -640], [-512, -640], [-640, -640], [-768, 0], [-768, -128], [-768, -256], [-768, -384]
					,[-768, -512], [-768, -640], [0, -768], [-128, -768], [-256, -768], [-384, -768], [-512, -768], [-640, -768]
					,[-768, -768], [-896, 0], [-896, -128], [-896, -256], [-896, -384], [-896, -512], [-896, -640], [-896, -768]
					,[0, -896], [-128, -896], [-256, -896], [-384, -896], [-512, -896], [-640, -896], [-768, -896], [-896, -896]
					,[-1024, 0], [-1024, -128], [-1024, -256], [-1024, -384], [-1024, -512], [-1024, -640], [-1024, -768]
					,[-1024, -896], [0, -1024], [-128, -1024], [-256, -1024], [-384, -1024], [-512, -1024], [-640, -1024]
					,[-768, -1024], [-896, -1024], [-1024, -1024], [-1152, 0], [-1152, -128], [-1152, -256], [-1152, -384]
					, [-1152, -512], [-1152, -640], [-1152, -768], [-1152, -896], [-1152, -1024]
				];
				var i = 0;
				var globe = $globe.get(0);
				return setInterval(function() {
					var p = positions[i];
					globe.style.backgroundPosition = p[0] + 'px ' + p[1] + 'px';
					i = ++i % 90;
				}, 1000 / 45);
			};
			var interval;
			$(window).on(evClose, function() {
				$button.removeClass('df-hidden');
				interval = animate();
			});
			$(window).on(evOpen, function() {
				$button.addClass('df-hidden');
				clearInterval(interval);
			});
			interval = animate();
		}
	});
});
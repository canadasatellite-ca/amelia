// 2021-09-23
define(['jquery'], function($) {return (
	/**
	 * @param {Object} c
	 * @param {Boolean} c.sticky
	 * @param {String} c.url
	 * @returns void
	 */
	function(c) {
		const $body = $('body');
		const [evClose, evOpen] = ['cs.amelia.close', 'cs.amelia.open'];
		const trigger = e => $(window).trigger(e);
		$body.on('click', '.cs-amelia-link', e => {e.preventDefault(); trigger(evOpen);});
		// 2021-09-23
		// Creating the IFRAME on the server side (in the \CanadaSatellite\Amelia\Block::_toHtml() method)
		// breaks the Magento's JavaScripts for an unknown reason, so I create the IFRAME on the client's side.
		(() => {
			const $chat = $('<div>').addClass('cs-amelia-open df-hidden');
			$chat
				.append($('<div>').addClass('cs-close').text('✕').click(() => trigger(evClose)))
				.append($('<iframe>').attr({height: '100%', src: c.url, width: '100%'}))
			;
			$body.append($chat);
			$(window).on(evClose, () => $chat.addClass('df-hidden'));
			$(window).on(evOpen, () => $chat.removeClass('df-hidden'));
		})();
		if (c.sticky) {
			const $button = $('<button>').addClass('cs-amelia-closed').click(() => trigger(evOpen));
			const $globe = $('<div>');
			$button.append($globe);
			$body.append($button);
			const animate = () => {
				const positions = [
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
					,[-1152, -512], [-1152, -640], [-1152, -768], [-1152, -896], [-1152, -1024]
				];
				const globe = $globe.get(0);
				let i = 0;
				return setInterval(() => {
					const p = positions[i];
					globe.style.backgroundPosition = p[0] + 'px ' + p[1] + 'px';
					i = ++i % 90;
				}, 1000 / 45);
			};
			let interval;
			$(window).on(evClose, () => {$button.removeClass('df-hidden'); interval = animate();});
			$(window).on(evOpen, () => {$button.addClass('df-hidden'); clearInterval(interval);});
			interval = animate();
		}
	});
});
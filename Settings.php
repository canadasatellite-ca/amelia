<?php
namespace CanadaSatellite\Amelia;
# 2021-09-24
/** @method static Settings s() */
final class Settings extends \Df\Config\Settings {
	/**
	 * 2021-09-25
	 * @used-by \CanadaSatellite\Amelia\Block::_toHtml()
	 * @return bool
	 */
	function url() {return $this->v();}

	/**
	 * 2021-09-25
	 * @used-by \CanadaSatellite\Amelia\Block::_toHtml()
	 * @return bool
	 */
	function sticky() {return $this->b();}

	/**
	 * 2021-09-24
	 * @override
	 * @see \Df\Config\Settings::prefix()
	 * @used-by \Df\Config\Settings::v()
	 * @return string
	 */
	protected function prefix() {return 'cs_amelia/general';}
}
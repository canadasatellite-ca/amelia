<?php
namespace CanadaSatellite\Amelia;
use Magento\Framework\View\Element\AbstractBlock as _P;
# 2021-09-17
/** @final Unable to use the PHP «final» keyword here because of the M2 code generation. */
class Block extends _P {
	/**
	 * 2021-09-17
	 * @override
	 * @see _P::_toHtml()
	 * @used-by _P::toHtml():
	 *		$html = $this->_loadCache();
	 *		if ($html === false) {
	 *			if ($this->hasData('translate_inline')) {
	 *				$this->inlineTranslation->suspend($this->getData('translate_inline'));
	 *			}
	 *			$this->_beforeToHtml();
	 *			$html = $this->_toHtml();
	 *			$this->_saveCache($html);
	 *			if ($this->hasData('translate_inline')) {
	 *				$this->inlineTranslation->resume();
	 *			}
	 *		}
	 *		$html = $this->_afterToHtml($html);
	 * https://github.com/magento/magento2/blob/2.2.0/lib/internal/Magento/Framework/View/Element/AbstractBlock.php#L643-L689
	 * @return string
	 */
	final protected function _toHtml() {return df_tag('div', 'cs-amelia', df_tag('iframe', [
		'height' => '300'
		,'src' => 'https://canadasatellite.dev.amelia.com/Amelia/ui/cansatdev/?embed=iframe&domainCode=casatdev'
		,'width' => '100%'
	]));}
}
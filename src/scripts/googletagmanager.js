import load from 'load-script'

let isGALoaded = false;
function loadGoogleTagManager(id) {
	if (isGALoaded) {
		return;
	}
	isGALoaded = true;
	load('https://www.googletagmanager.com/gtag/js?id='+id);
	window.dataLayer = window.dataLayer || [];
	function gtag(){ window.dataLayer.push(arguments); }
	window.gtag = gtag;
	gtag('js', new Date());
	gtag('config', id);
}

export default loadGoogleTagManager;
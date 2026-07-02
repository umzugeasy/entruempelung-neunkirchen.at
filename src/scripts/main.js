import CookiesEuBanner from 'cookies-eu-banner';
import initContactForm from "./contact-form";
import { doc, getElementById, on } from "./dom-helpers";
import loadGoogleTagManager from "./googletagmanager";

// on(getElementById('navTogg'), 'click', () => {
// 	// getElementById('menu1').classList.toggle('show');
// 	doc.location = '/#';
// });

const googleId = '';
const cookiesBanner = new CookiesEuBanner(() => {
	loadGoogleTagManager(googleId);
}, true);
loadGoogleTagManager(googleId); // for testing

initContactForm(getElementById('angebotForm'));

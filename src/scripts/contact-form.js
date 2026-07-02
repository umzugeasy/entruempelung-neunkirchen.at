import { doc, querySelector, on, getElementById } from "./dom-helpers";
import load from 'load-script'

function initContactForm(form) {
	if (form == null) {
		return;
	}
	const button = querySelector('button', form);
	const loadingSpinOnButton = querySelector('[role="status"]', button);
	const setLoading = (isLoading) => loadingSpinOnButton.classList.toggle('invisible', !isLoading);
	const tosCheckbox = querySelector('[name=tos]', form);
	const response = querySelector('.response', form);
	const tosOnChanged = () => button.disabled = !tosCheckbox.checked;
	const reCAPTCHAKEy = form.dataset.recaptcha;
	let reCAPTCHALoaded = false;

	const showResponse = (msg, status) => {
		const template = getElementById(status + '-response-template').content.cloneNode(true);
		querySelector('[role="alert"]', template).textContent = msg;
		response.innerHTML = '';
		response.appendChild(template);
	}

	const send = (formData) => {
		const xhr = new XMLHttpRequest();
		xhr.open('POST', form.action, true);
		xhr.onload = function () {
			setLoading(false);
			if (xhr.status == 200) {
				doc.location = "/kontakt/danke/";
			}
			else {
				showResponse(this.responseText, 'danger');
			}
		};
		xhr.send(formData);
	};

	on(tosCheckbox, "change", () => {
		if (tosCheckbox.checked && !reCAPTCHALoaded) {
			reCAPTCHALoaded = true;
			load('https://www.google.com/recaptcha/api.js?render=' + reCAPTCHAKEy, tosOnChanged);
		} else {
			tosOnChanged();
		}
	});

	on(form, "submit", (_, event) => {
		event.preventDefault();
		if (grecaptcha == null) {
			showResponse('grecaptcha', 'danger');
			return;
		}
		setLoading(true);
		response.innerHTML = '';
		grecaptcha.ready(function () {
			grecaptcha.execute(reCAPTCHAKEy, { action: 'kontakt' })
				.then(function (token) {
					const formData = new FormData(form);
					formData.append('g-recaptcha-response', token);
					send(formData);
				});
		});
	});

	tosOnChanged();
}

export default initContactForm;
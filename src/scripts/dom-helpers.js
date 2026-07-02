const windoww = window;
const doc = document;
const documentElement = doc.documentElement;
const getElementById = doc.getElementById.bind(doc);

/**
 * Selects a single HTML element that matches the given CSS selector within a specified DOM node.
 * If no element is found, `null` is returned.
 * If no node is provided, the search will be performed on the entire document (default behavior).
 * 
 * @param {string} selector - The CSS selector used to match the desired element.
 * @param {HTMLElement} node - The DOM node within which the element will be searched. If not provided, the search will be performed on the entire document (default behavior).
 * @returns {HTMLElement|null} - The matched HTML element, or `null` if no element is found.
 * @example
 * // Selects the first <div> element with the class "foo" within the entire document.
 * const div = querySelector("div.foo");
 */
const querySelector = (selector, node = doc) => node.querySelector(selector);

/**
 * Selects multiple HTML elements that match the given CSS selector within a specified DOM node.
 *
 * @param {string} selector - The CSS selector used to match the desired elements.
 * @param {HTMLElement} node - The DOM node within which the elements will be searched. If not provided, the search will be performed on the entire document (default behavior).
 * @returns {HTMLElement[]} - An array containing all the matched HTML elements.
 */
const querySelectorAll = (selector, node = doc) => [...node.querySelectorAll(selector)];

/**
 * Attaches an event listener to the provided HTML element.
 *
 * @param {HTMLElement} element - The HTML element to which the event listener will be attached.
 * @param {string} eventName - The name of the event for which the listener should be registered (e.g., "click", "keydown", "mouseover", etc.).
 * @param {Function} callback - The function that will be executed when the specified event is triggered. The callback function will receive two parameters: the `element` (the target element on which the event was triggered) and the `event` object (the event object that contains information about the event).
 * @returns {void}
 */
const on = (element, eventName, callback) => element ? element.addEventListener(eventName, event => callback(element, event)) : null;

const isVisible = (el) => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);

const random = (a, b) => Math.floor(Math.random() * (b - a) + a);

export { windoww, doc, documentElement, getElementById, querySelector, querySelectorAll, on, isVisible, random };
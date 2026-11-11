import products from '../data/products.js';

const productBySlug = new Map(products.map((product) => [product.slug, product]));
const storageKey = 'shoex-demo-bag';

export function readBag() {
	const saved = localStorage.getItem(storageKey);
	if (!saved) return [];
	try {
		const bag = JSON.parse(saved);
		if (!Array.isArray(bag)) throw new TypeError('The saved bag is not a list.');
		return bag.filter((item) => productBySlug.has(item.slug) && Number.isInteger(item.quantity) && item.quantity > 0);
	} catch (error) {
		console.error('Unable to read the saved SHOEX shopping bag.', error);
		throw new Error('Your saved shopping bag could not be read. Please clear this site’s stored data and try again.', { cause: error });
	}
}

export function writeBag(bag) {
	localStorage.setItem(storageKey, JSON.stringify(bag));
	window.dispatchEvent(new CustomEvent('bag:updated'));
}

export { productBySlug };

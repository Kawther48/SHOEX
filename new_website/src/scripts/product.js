import products, { sneakerImage } from '../data/products.js';
import { readBag, writeBag } from './store.js';

const root = document.querySelector('[data-product-page]');
if (root) {
	const product = products.find((entry) => entry.slug === root.dataset.productSlug);
	const sizeButtons = [...root.querySelectorAll('.size-option:not(:disabled)')];
	const sizeMessage = root.querySelector('[data-size-message]');
	const confirmation = root.querySelector('[data-add-confirmation]');
	const addButton = root.querySelector('[data-add-to-bag]');
	let selectedSize = '';

	for (const button of root.querySelectorAll('[data-gallery-view]')) {
		button.addEventListener('click', () => {
			const view = button.dataset.galleryView;
			root.querySelector('[data-main-product-image]').src = sneakerImage(product, view);
			root.querySelectorAll('[data-gallery-view]').forEach((thumb) => {
				const active = thumb === button;
				thumb.setAttribute('aria-pressed', String(active));
				thumb.classList.toggle('is-selected', active);
			});
		});
	}

	sizeButtons.forEach((button) => {
		button.addEventListener('click', () => {
			selectedSize = button.dataset.size;
			sizeButtons.forEach((option) => {
				const active = option === button;
				option.setAttribute('aria-pressed', String(active));
				option.classList.toggle('is-selected', active);
			});
			sizeMessage.textContent = '';
			confirmation.textContent = '';
		});
	});

	addButton.addEventListener('click', () => {
		if (!selectedSize) {
			sizeMessage.textContent = 'Please select a size.';
			sizeButtons[0]?.focus();
			return;
		}

		const quantity = Math.max(1, Number.parseInt(root.querySelector('[data-quantity]').value, 10) || 1);
		const bag = readBag();
		const existing = bag.find((item) => item.slug === product.slug && item.size === selectedSize);
		if (existing) existing.quantity += quantity;
		else bag.push({ slug: product.slug, size: selectedSize, quantity });
		writeBag(bag);
		confirmation.textContent = `${product.name}, UK ${selectedSize} added to your bag.`;
	});
}

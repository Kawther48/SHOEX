import { sitePath, sneakerImage } from '../data/products.js';
import { productBySlug, readBag, writeBag } from './store.js';

const list = document.querySelector('[data-bag-items]');
if (list) {
	const emptyState = document.querySelector('[data-bag-empty]');
	const summary = document.querySelector('[data-bag-summary]');
	const totalElement = document.querySelector('[data-bag-total]');
	const formatPrice = (amount) => `£${amount.toLocaleString('en-GB')}`;

	function render() {
		const bag = readBag();
		list.replaceChildren();
		emptyState.hidden = bag.length !== 0;
		summary.hidden = bag.length === 0;

		for (const item of bag) {
			const product = productBySlug.get(item.slug);
			if (!product) continue;

			const article = document.createElement('article');
			article.className = 'bag-item';
			article.dataset.itemKey = `${item.slug}:${item.size}`;

			const imageLink = document.createElement('a');
			imageLink.className = 'bag-item__image';
			imageLink.href = sitePath(`product/${product.slug}/`);
			imageLink.setAttribute('aria-label', `View ${product.name}`);
			const image = document.createElement('img');
			image.src = sneakerImage(product);
			image.alt = `${product.name} in ${product.colorway}`;
			imageLink.append(image);

			const details = document.createElement('div');
			details.className = 'bag-item__details';
			const name = document.createElement('a');
			name.className = 'bag-item__name';
			name.href = sitePath(`product/${product.slug}/`);
			name.textContent = product.name;
			const color = document.createElement('p');
			color.className = 'bag-item__color';
			color.textContent = product.colorway;
			const size = document.createElement('p');
			size.className = 'bag-item__size';
			size.textContent = `UK size ${item.size}`;
			const price = document.createElement('p');
			price.className = 'bag-item__unit-price';
			price.textContent = `${formatPrice(product.price)} each`;
			details.append(name, color, size, price);

			const actions = document.createElement('div');
			actions.className = 'bag-item__actions';
			const controls = document.createElement('div');
			controls.className = 'quantity-control';
			controls.setAttribute('aria-label', `Quantity for ${product.name}, UK ${item.size}`);
			const decrement = document.createElement('button');
			decrement.type = 'button';
			decrement.className = 'quantity-control__button';
			decrement.textContent = '−';
			decrement.setAttribute('aria-label', 'Decrease quantity');
			const quantity = document.createElement('span');
			quantity.textContent = String(item.quantity);
			quantity.setAttribute('aria-live', 'polite');
			const increment = document.createElement('button');
			increment.type = 'button';
			increment.className = 'quantity-control__button';
			increment.textContent = '+';
			increment.setAttribute('aria-label', 'Increase quantity');
			controls.append(decrement, quantity, increment);
			const subtotal = document.createElement('span');
			subtotal.className = 'bag-item__subtotal';
			subtotal.textContent = formatPrice(product.price * item.quantity);
			const remove = document.createElement('button');
			remove.type = 'button';
			remove.className = 'bag-item__remove';
			remove.textContent = 'Remove';
			remove.setAttribute('aria-label', `Remove ${product.name}, UK ${item.size}`);
			actions.append(controls, subtotal, remove);
			article.append(imageLink, details, actions);
			list.append(article);

			decrement.addEventListener('click', () => changeQuantity(item, -1));
			increment.addEventListener('click', () => changeQuantity(item, 1));
			remove.addEventListener('click', () => removeItem(item));
		}

		const total = bag.reduce((sum, item) => {
			const product = productBySlug.get(item.slug);
			return sum + (product ? product.price * item.quantity : 0);
		}, 0);
		totalElement.textContent = formatPrice(total);
	}

	function changeQuantity(item, change) {
		const bag = readBag();
		const savedItem = bag.find((entry) => entry.slug === item.slug && entry.size === item.size);
		if (!savedItem) return;
		if (savedItem.quantity + change < 1) return removeItem(item);
		savedItem.quantity += change;
		writeBag(bag);
		render();
	}

	function removeItem(item) {
		writeBag(readBag().filter((entry) => entry.slug !== item.slug || entry.size !== item.size));
		render();
	}

	render();
	window.addEventListener('storage', render);
	window.addEventListener('bag:updated', render);
}

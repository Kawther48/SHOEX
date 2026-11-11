const products = [
	{
		slug: 'form-01-court',
		name: 'Form 01 Road',
		code: 'SHX — 001',
		colorway: 'Stone / ember / charcoal',
		price: 215,
		image: '/images/products/form-01-court.png',
		source: 'https://pngimg.com/image/5827',
		description:
			'A balanced road-running silhouette in quiet stone grey, warmed with ember-orange detailing and dark, supportive overlays.',
		materials: 'Engineered mesh · synthetic overlays',
		upper: 'Breathable mesh with reinforced side panels',
		sole: 'Grippy rubber outsole',
		cushioning: 'Lightweight foam midsole',
		fit: 'True to size; softly cushioned heel',
		care: 'Brush dry dirt away and wipe gently with a damp cloth.',
	},
	{
		slug: 'vela-02-runner',
		name: 'Vela 02 Tempo',
		code: 'SHX — 002',
		colorway: 'Volt / graphite',
		price: 240,
		image: '/images/products/vela-02-runner.png',
		source: 'https://pngimg.com/image/5826',
		description:
			'A bright, featherweight trainer with a finely woven upper, precise overlays and a steady, everyday ride.',
		materials: 'Engineered mesh · synthetic overlays',
		upper: 'Breathable knit mesh with supportive side panels',
		sole: 'Flexible rubber traction outsole',
		cushioning: 'Responsive foam midsole',
		fit: 'Close fit; take your usual size',
		care: 'Wipe mesh with a damp cloth. Allow to air dry away from heat.',
	},
	{
		slug: 'noir-03-high',
		name: 'Noir 03 Air',
		code: 'SHX — 003',
		colorway: 'Lagoon / deep navy',
		price: 265,
		image: '/images/products/noir-03-high.png',
		source: 'https://pngimg.com/image/5824',
		description:
			'An airy, open-weave runner in saturated lagoon blue, grounded by a deep navy sole and a considered, low profile.',
		materials: 'Open-weave mesh · synthetic overlays',
		upper: 'Breathable perforated mesh with tonal trim',
		sole: 'Layered rubber running outsole',
		cushioning: 'Flexible foam cushioning',
		fit: 'True to size; easy through the forefoot',
		care: 'Wipe with a soft damp cloth and air dry naturally.',
	},
	{
		slug: 'alto-04-suede',
		name: 'Alto 04 Pace',
		code: 'SHX — 004',
		colorway: 'Cloud / crimson / citron',
		price: 225,
		image: '/images/products/alto-04-suede.png',
		source: 'https://pngimg.com/image/5822',
		description:
			'A crisp, light-coloured training shoe with precise crimson panels and a vivid citron line at the sole.',
		materials: 'Technical mesh · synthetic overlays',
		upper: 'Lightweight mesh with supportive stitched overlays',
		sole: 'Rubber outsole with patterned tread',
		cushioning: 'Cushioned rubber and foam sole',
		fit: 'True to size; secure midfoot',
		care: 'Spot clean gently with a damp cloth and mild soap.',
	},
	{
		slug: 'arc-05-track',
		name: 'Arc 05 Trail',
		code: 'SHX — 005',
		colorway: 'Graphite / citron',
		price: 250,
		image: '/images/products/arc-05-track.png',
		source: 'https://pngimg.com/image/5819',
		description:
			'A dark, resilient runner with layered mesh, reflective accents and a confident, all-weather tread.',
		materials: 'Layered mesh · synthetic support panels',
		upper: 'Durable mesh with reinforced toe and heel',
		sole: 'High-grip rubber trail outsole',
		cushioning: 'Impact-absorbing foam midsole',
		fit: 'True to size; secure heel fit',
		care: 'Brush off dry debris. Clean with a soft cloth and let air dry.',
	},
	{
		slug: 'studio-06-canvas',
		name: 'Studio 06 Track',
		code: 'SHX — 006',
		colorway: 'Black / volt',
		price: 185,
		image: '/images/products/studio-06-canvas.png',
		source: 'https://pngimg.com/image/5818',
		description:
			'A pared-back dark trainer with a sharp flash of volt and a considered, multi-surface running sole.',
		materials: 'Technical mesh · synthetic overlays',
		upper: 'Breathable mesh with structured support',
		sole: 'Rubber outsole with lugged tread',
		cushioning: 'Foam midsole with rubber outsole',
		fit: 'True to size; easy, low-profile fit',
		care: 'Brush dry dirt away. Clean sparingly with a damp cloth.',
	},
	{
		slug: 'atelier-07-leather',
		name: 'Atelier 07 Road',
		code: 'SHX — 007',
		colorway: 'Fog / crimson',
		price: 235,
		image: '/images/products/atelier-07-leather.png',
		source: 'https://pngimg.com/image/5814',
		description:
			'A steady, cushioned road shoe in cool grey mesh, finished with a measured flash of crimson.',
		materials: 'Breathable mesh · synthetic overlays',
		upper: 'Layered mesh with reinforced side supports',
		sole: 'Durable rubber road outsole',
		cushioning: 'Soft, responsive foam midsole',
		fit: 'True to size; shapes gently to the foot',
		care: 'Wipe with a soft damp cloth. Do not machine wash.',
	},
	{
		slug: 'meridian-08-mesh',
		name: 'Meridian 08 Trail',
		code: 'SHX — 008',
		colorway: 'Cobalt / ice / volt',
		price: 220,
		image: '/images/products/meridian-08-mesh.png',
		source: 'https://pngimg.com/image/5810',
		description:
			'A trail-ready profile with a breathable blue upper, supportive overlays and a grippy, all-terrain sole.',
		materials: 'Technical mesh · synthetic overlays',
		upper: 'Airy mesh with reinforced trail panels',
		sole: 'All-terrain rubber outsole',
		cushioning: 'Flexible foam midsole',
		fit: 'True to size; supportive through the midfoot',
		care: 'Brush away loose dirt and wipe clean with a damp cloth.',
	},
];

export function sneakerImage(product) {
	return sitePath(product.image);
}

export function sitePath(path = '') {
	const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
	return `${base}${path.replace(/^\/+/, '')}`;
}

export default products;

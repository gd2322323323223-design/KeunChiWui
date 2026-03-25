const STAR_COUNT = 240;

function createStarfield() {
	const starfield = document.getElementById('starfield');
	if (!starfield) return;

	for (let i = 0; i < STAR_COUNT; i += 1) {
		const star = document.createElement('span');
		const size = Math.random() * 1.8 + 0.6;
		const opacity = Math.random() * 0.5 + 0.3;

		star.className = 'star';
		star.style.width = `${size}px`;
		star.style.height = `${size}px`;
		star.style.left = `${Math.random() * 100}%`;
		star.style.top = `${Math.random() * 100}%`;
		star.style.opacity = opacity.toFixed(2);

		starfield.appendChild(star);
	}
}

createStarfield();

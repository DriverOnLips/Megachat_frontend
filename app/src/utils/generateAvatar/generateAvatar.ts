import { createCanvas } from 'canvas';

const generateColor = (initialsText: string) => {
	const hashCode = initialsText
		.split('')
		.reduce(
			(hash, char) => char.charCodeAt(0) + (hash << 6) + (hash << 16) - hash,
			0
		);

	const r = hashCode & 0xff0000;
	const g = hashCode & 0x00ff00;
	const b = hashCode & 0x0000ff;

	const color = `rgb(${r},${g},${b})`;

	const invertedR = 255 - r;
	const invertedG = 255 - g;
	const invertedB = 255 - b;

	const invertedColor = `rgb(${invertedR},${invertedG},${invertedB})`;

	return { color, invertedColor };
};

export const createImageWithInitials = (...names: string[]): string => {
	const canvas = createCanvas(100, 100);
	const ctx = canvas.getContext('2d');

	const centerX = canvas.width / 2;
	const centerY = canvas.height / 2;
	const radius = Math.min(centerX, centerY);

	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
	ctx.closePath();
	ctx.clip();

	const initialsText = names
		.map((name) => name[0].toUpperCase())
		.join('')
		.slice(0, 2);

	const { color, invertedColor } = generateColor(initialsText);

	ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.font = '45px Roboto Serif';
	ctx.fillStyle = invertedColor;

	const textWidth = ctx.measureText(initialsText).width;

	const textX = (canvas.width - textWidth) / 2;
	const textY = canvas.height / 2 + 16;

	ctx.fillText(initialsText, textX, textY);

	const dataURL = canvas.toDataURL();

	return dataURL;
};
